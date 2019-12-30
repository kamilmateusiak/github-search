import React from 'react';
import { field } from './styled';

interface IProps {
  name: string;
  value: string;
  label: string;
  onChange: React.ChangeEventHandler;
}

const Input: React.FC<IProps> = ({ label, onChange, name, value }) => {
  return (
    <label css={field}>
      {label}
      <input type="text" name={name} value={value} onChange={onChange} />
    </label>
  );
};

export default Input;
