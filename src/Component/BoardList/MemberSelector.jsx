// Modules
import React from 'react';
import Select from 'react-select';

const members = [
    { value: 'idAchraf', label: 'Achraf' },
    { value: 'idAssil', label: 'Assil' },
    { value: 'idClement', label: 'Clement' },
    { value: 'idJulia', label: 'Julia' },
    { value: 'idHugo', label: 'Hugo' }
  ];

class MemberSelector extends React.Component {
  render(){
    const {value, onChange, onBlur, ...props} = this.props
    onChange(option)
    return (
      <Select 
        {...props}
        closeMenuOnSelect={false}
        isMulti
        on
        options={members}
        /> 
    );
  }
}

export default MemberSelector