import React from 'react';
import { Jumbotron, Row } from 'reactstrap';

import {AdminShowAdvanced} from '../molecules/AdminShowAdvanced';



export const AdminAdvancedFilterContainer = (props) => {
  return (
    <div>
      <Jumbotron id="AdminExamContainer">
        <Row><AdminShowAdvanced></AdminShowAdvanced></Row>
      </Jumbotron>
    </div>
  );
};
