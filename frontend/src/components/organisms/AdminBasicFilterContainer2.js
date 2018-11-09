import React from 'react';
import { Jumbotron, Button, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

import {ExamName} from '../molecules/ExamName';
import {TooltipItem} from '../molecules/TooltipItem';
import {MultiSelect} from '../atoms/MultiSelect';
import {ExamDescription} from '../molecules/ExamDescription';
import {ExamDiagnosis} from '../molecules/ExamDiagnosis';
import {AdminShowAdvancedSearch2} from '../molecules/AdminShowAdvancedSearch2';



export const AdminBasicFilterContainer2 = (props) => {
  return (
    <div>
      <Jumbotron id="AdminExamContainer">
        <Row><AdminShowAdvancedSearch2></AdminShowAdvancedSearch2></Row>
      </Jumbotron>
    </div>
  );
};
