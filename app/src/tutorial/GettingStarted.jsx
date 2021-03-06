import React, { useEffect, useRef } from "react";

import htmlContent from "../../../documentation/GETTING_STARTED.md";
import Readme from "../components/Readme";

const GettingStarted = () => {
  return <Readme content={htmlContent} />;
};

export default GettingStarted;
