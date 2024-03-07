import React from "react";
import { Route, Routes } from "react-router-dom";

import Main from "src/containers/Main";

function BasePage(): React.ReactElement {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Main />} />
      </Route>
      ;
    </Routes>
  );
}

export default BasePage;
