/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FC, memo } from 'react';
import ReactSelect, { ValueType, Props } from 'react-select';

type Option = {
  label: string;
  value: string;
};

type SelectProps = Props & {
  options: Option[];
  onChange: (option: ValueType<Option, false>) => void;
};

const customStyles = {
  container: (provided: any) => ({
    ...provided,
    width: '100%',
  }),
};

const SelectComponent: FC<SelectProps> = ({ onChange, options, isLoading, isClearable, ...rest }) => (
  <ReactSelect
    styles={customStyles}
    isLoading={isLoading}
    isClearable={isClearable}
    onChange={onChange}
    options={options}
    {...rest}
  />
);

export const Select = memo(SelectComponent);
