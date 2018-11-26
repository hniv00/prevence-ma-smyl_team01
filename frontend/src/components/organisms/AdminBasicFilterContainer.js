import React from 'react';
import { Jumbotron, Row } from 'reactstrap';

import {AdminShowBasic} from '../molecules/AdminShowBasic';



export const AdminBasicFilterContainer = () => {
  return (<Jumbotron id="AdminExamContainer">
    <Row><AdminShowBasic></AdminShowBasic></Row>
  </Jumbotron>);
};
