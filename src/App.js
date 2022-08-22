import React from "react";
import { ThemeProvider } from "styled-components";
import Pagination from "./pagination/index.tsx";

const theme = {
  colors: {
    black: "#000",
    primary: "#0B7D3E",
    tertiary: "#E6F2EB",
  },
  borders: {
    input: "#D9D9D9",
    radius: "4px",
  },
};
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Pagination
          pageRangeDisplayed={3}
          pageCount={12}
          marginPagesDisplayed={1}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
