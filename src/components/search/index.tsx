import React, { useRef, useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import Input from './input';

interface IProps {
  delay?: number;
  name: string;
  label: string;
  onChange: (value: string) => void;
}

const SearchInput: React.FC<IProps> = ({ onChange, delay, ...restProps }) => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const debouncedChangeHandler = useRef(debounce(onChange, delay));

  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    e => {
      const { value } = e.target;
      setSearchPhrase(value);
      debouncedChangeHandler.current(value);
    },
    [setSearchPhrase]
  );

  return <Input {...restProps} value={searchPhrase} onChange={handleChange} />;
};

SearchInput.defaultProps = {
  delay: 500
};

export default SearchInput;
