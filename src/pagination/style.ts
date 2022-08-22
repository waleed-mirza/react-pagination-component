import styled from "styled-components";

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.div`
  .pagination {
    display: flex;
    padding: 0;
    margin: 0;
    list-style-type: none;
    justify-content: center;
  }
  .pagination > li {
    margin: 0px 4px;
  }
  .pagination > .previous {
    margin: 0px 8px 0px 0px;
  }
  .pagination > .next {
    margin: 0px 0px 0px 8px;
  }

  .pagination > li > a {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black} !important;
    float: left;
    border: 2px solid ${({ theme }) => theme.borders.input};
    box-sizing: border-box;
    border-radius: ${({ theme }) => theme.borders.radius};
    height: 32px;
    width: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pagination > li:hover > a:hover {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    box-sizing: border-box;
  }

  .pagination > .active > a {
    color: ${({ theme }) => theme.colors.primary} !important;
    background-color: ${({ theme }) => theme.colors.tertiary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    outline: none;
  }

  .pagination > li > a,
  .pagination > li > span {
    color: ${({ theme }) => theme.colors.black};
  }

  .pagination .next > a,
  .pagination .previous > a {
    color: ${({ theme }) => theme.colors.primary} !important;
    background-color: white;

    border: 0;
    margin: 0;
    padding: 2px 2px;
  }
  .pagination .next > a:hover,
  .pagination .previous > a:hover {
    border-radius: 34px;
    border: none !important;
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
  .pagination .next:hover {
    border: 0;
  }
  .pagination .next,
  .pagination .previous {
    border: none !important;
  }

  .pagination .break {
    border: none !important;
  }

  .pagination .break a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    padding-bottom: 16px;

    border: none !important;
    border-radius: 34px;
    color: #d9d9d9 !important;
  }

  .pagination .break > a:hover {
    border: none !important;
    background-color: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.primary} !important;
  }
  .disabled-arrow {
    color: gray;
  }
  .active-arrow {
    color: ${({ theme }) => theme.colors.primary} !important;
  }
`;
