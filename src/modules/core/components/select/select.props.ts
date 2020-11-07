import { ControlProps, Option } from '@core/models';

/**
 * Props
 */
type SelectProps = ControlProps & {
  /**
   * Get option name
   */
  getOptionValue?: (option: Option) => Option['value'];
  /**
   * Options list
   */
  options?: Option[];
  /**
   * Is search enabled
   */
  searchable?: boolean;
};

export { SelectProps };
