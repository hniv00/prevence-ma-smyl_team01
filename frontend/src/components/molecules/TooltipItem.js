/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { UncontrolledTooltip } from 'reactstrap';

export default function UncontrolledTooltip() {
  return (
    <div>
      <span style={{textDecoration: "underline", color:"blue"}} href="#" id="UncontrolledTooltipExample">tooltip</span>
      <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
        Hello world!
      </UncontrolledTooltip>
    </div>
  );
}
