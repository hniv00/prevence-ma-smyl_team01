import React from 'react';
import { UncontrolledTooltip } from 'reactstrap';

export const TooltipExamination = props => {
  return (
    <div>
      <span
        style={{
          textDecoration: 'underline',
          color: 'blue',
          textAlign: 'right',
        }}
        href="#"
        id="UncontrolledTooltipExample"
      >
        <i className="material-icons" style={{ color: '#28A3B7' }}>
          help
        </i>
      </span>
      <UncontrolledTooltip
        placement="right"
        target="UncontrolledTooltipExample"
        style={{ minWidth: '400px' }}
      >
        Vyplňte název a popis vyšetření. Přidejte, jaké diagnózy může vyšetření
        potenicálně vyloučit. Dále zvolte pro jaké pohlaví se vyšetření
        vykonává. Zadejte nejobecnější periodicitu vyšetření z výběrového boxu,
        případně vypište rozšířenou periodicitu pro specifické případy pacientů
        - s udáním specifičnosti. Zvolte, zda se vyšetření zobrazí zdravému
        uživateli, uživateli s některou z indikací, nebo v obou případech -
        podle toho zadejte věkové rozmezí pacienta, příp. jaké položky indikují,
        že se uživateli zobrazí vyšetření v pokročilém vyhledávání.
      </UncontrolledTooltip>
    </div>
  );
};
