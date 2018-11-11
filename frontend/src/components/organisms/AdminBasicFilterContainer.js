import React from 'react';
import { Jumbotron, Button, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

import {ExamName} from '../molecules/ExamName';
import {TooltipItem} from '../molecules/TooltipItem';
import {MultiSelect} from '../atoms/MultiSelect';
import {ExamDescription} from '../molecules/ExamDescription';
import {ExamDiagnosis} from '../molecules/ExamDiagnosis';
import {AdminShowAdvancedSearch} from '../molecules/AdminShowAdvancedSearch';



export const AdminBasicFilterContainer = (props) => {
  return (
    <div>
      <Jumbotron id="AdminExamContainer">
        <Row><AdminShowAdvancedSearch></AdminShowAdvancedSearch></Row>
      </Jumbotron>
    </div>
  );
};
