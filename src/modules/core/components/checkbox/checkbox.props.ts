import { ControlProps } from '@core/models';

/**
 * Props
 */
type CheckboxProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> &
  ControlProps<boolean>;

export { CheckboxProps };
