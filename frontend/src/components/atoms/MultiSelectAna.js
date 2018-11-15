import React, { Component } from "react";
import Select from 'react-select';

export class MultiSelectAna extends Component {
  render() {

    // MultiSelect combobox custom styling
    const colourStyles = {
      control: styles => ({ ...styles, backgroundColor: 'white' }),
      clearIndicator: (styles, {data}) => {
        return {...styles, display: 'none',};},
      option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {   ...styles,
          backgroundColor : isDisabled   ? null
                          : isSelected ? '#61C5D3'
                          : isFocused ? '#61C5D3' : null,
          color : isDisabled   ? '#ccc'
                : isSelected    ? 'black' : 'black',
          primary: 'black',
          fontSize: '14px'
        };
        },
        multiValue: (styles, { data }) => {
          return {  ...styles,
          //  backgroundColor: 'red',
            fontSize: '12px'
          };
        },
        multiValueLabel: (styles, { data }) => ({  ...styles,
          color: data.color,
          // backgroundColor: 'green',
        }),
        multiValueRemove: (styles, { data }) => ({ ...styles,
          color: data.color,
          ':hover': {
            backgroundColor: data.color,
            color: 'white',
          },
        }),
      };

    return (
      <Select
        styles={colourStyles}
        value={this.props.selectedOption}
        onChange={this.props.handleChange}
        options={this.props.options}
        isMulti={true}
        isSearchable={true}
        theme={(theme) => ({...theme, borderRadius: 8, colors: {...theme.colors, text: 'black', primary: '#17A4B8', }, })}
        placeholder="Nemoci v rodině"
      />
    );
  }
}
