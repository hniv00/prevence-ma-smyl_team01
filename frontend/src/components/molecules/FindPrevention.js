import React, { Component } from "react"
import {FilterButton} from '../atoms/FilterButton';

export class FindPrevention extends Component {
  render() {
    return (
      <div id="filterButton">
        <a href="/vysetreni#examinationList"><FilterButton/></a>
      </div>
    );
  }
}
