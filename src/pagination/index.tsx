import React from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// @ts-ignore
import { Wrapper } from "./style.ts";

const Pagination: React.FC<ReactPaginateProps> = (props) => {
  const { onPageChange } = props;
  const [activeTab, setActiveTab] = React.useState<number>(
    props.initialPage || 0
  );

  return (
    <Wrapper>
      <ReactPaginate
        containerClassName="pagination"
        activeClassName="active"
        previousLabel={
          <FiChevronLeft
            size={25}
            className={activeTab === 0 ? "disabled-arrow" : "active-arrow"}
          />
        }
        nextLabel={
          <FiChevronRight
            size={25}
            className={
              props.pageCount === activeTab + 1
                ? "disabled-arrow"
                : "active-arrow"
            }
          />
        }
        onPageChange={(selectedItem) => {
          onPageChange && onPageChange(selectedItem);
          setActiveTab(selectedItem.selected);
        }}
        {...props}
      />
    </Wrapper>
  );
};

export default Pagination;
