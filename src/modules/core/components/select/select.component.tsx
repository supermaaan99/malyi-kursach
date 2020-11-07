import * as React from 'react';
import { SelectProps } from './select.props';
import * as styles from './select.scss';
import ReactSelect, { components as Components } from 'react-select';
import { useState } from 'react';
import { Option } from '@core/models';
import { Label } from '../label';

/**
 * Sub component with class name
 */
const withClassName = (className: string) => ({
  children,
  innerProps
}: {
  children: any;
  innerProps?: any;
}) => (
  <div {...innerProps} className={className}>
    {children}
  </div>
);

/**
 * Select parts
 */
const components: Partial<typeof Components> = {
  Menu: withClassName(styles.dropdown),
  ClearIndicator: () => null,
  IndicatorSeparator: () => null,
  SingleValue: withClassName(styles.singleValue),
  Control: withClassName(styles.control),
  MenuList: withClassName(styles.menuList),
  Placeholder: withClassName(styles.placeholder),
  ValueContainer: withClassName(styles.valueContainer),
  SelectContainer: withClassName(styles.selectContainer),
  NoOptionsMessage: props => (
    <div className={styles.noOptions}>
      {props.selectProps.inputValue
        ? 'Збігів не знайдено'
        : 'Опцій не знайдено'}
    </div>
  )
};

/**
 * Renders Select
 */
const Select: React.FC<SelectProps> = ({
  options,
  className,
  isError,
  error,
  value,
  label,
  onChange,
  placeholder,
  searchable,
  disabled,
  getOptionValue
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className={styles.select}>
      {label && <Label className={styles.label}>{label}</Label>}

      <ReactSelect
        focused={focused}
        placeholder={placeholder as string}
        isSearchable={searchable}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        // getOptionLabel={getOptionLabel}
        // getOptionValue={getOptionValue}
        isDisabled={disabled}
        value={options.find(one => one.value == value)}
        options={options}
        onChange={(option: Option) => {
          onChange(option?.value);
        }}
        components={components}
      />
    </div>
  );
};

export { Select };
