import React from "react";
import {Spin} from "antd";

import "./loader.less";

function FullPageLoader({tip, size = "large", className, indicator}) {
  return (
    <React.Fragment>
      <div className='loader loading'>
        <Spin
          indicator={indicator ? indicator : undefined}
          size={size}
          tip={tip}
          spinning
        />
      </div>
    </React.Fragment>
  );
}

export default FullPageLoader;
