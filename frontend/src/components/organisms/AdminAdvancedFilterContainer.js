import React from 'react';
import { Jumbotron, Button, Row, Col, Form, FormGroup, Label, Input, Container } from 'reactstrap';

import {ExamName} from '../molecules/ExamName';
import {TooltipItem} from '../molecules/TooltipItem';
import {MultiSelect} from '../atoms/MultiSelect';
import {ExamDescription} from '../molecules/ExamDescription';
import {ExamDiagnosis} from '../molecules/ExamDiagnosis';
import {AdminShowAdvanced} from '../molecules/AdminShowAdvanced';

export const AdminAdvancedFilterContainer = (props) => {
  return (
      <Jumbotron id="AdminExamContainer">
        <Row><AdminShowAdvanced></AdminShowAdvanced></Row>
      </Jumbotron>
  );
};
