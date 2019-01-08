import React from 'react';
import Select from 'react-select';

export const MultiSelect = props => {
  // MultiSelect combobox custom styling
  const colourStyles = {
    control: styles => ({
      ...styles,
      maxWidth: '400px',
      backgroundColor: 'white',
    }),
    clearIndicator: (styles, { data }) => {
      return { ...styles, display: 'none' };
    },
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
          ? '#61C5D3'
          : isFocused
          ? '#61C5D3'
          : null,
        color: isDisabled ? '#ccc' : isSelected ? 'black' : 'black',
        primary: 'black',
        fontSize: '14px',
      };
    },
    multiValue: (styles, { data }) => {
      return { ...styles, fontSize: '12px' };
    },
    multiValueLabel: (styles, { data }) => ({ ...styles, color: data.color }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
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
      theme={theme => ({
        ...theme,
        borderRadius: 8,
        colors: { ...theme.colors, text: 'black', primary: '#17A4B8' },
      })}
      {...props}
    />
  );
};
