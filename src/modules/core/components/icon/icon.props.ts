/**
 * Icon props
 */
type IconProps = React.HTMLAttributes<HTMLSpanElement> & {
  /**
   * Icon name
   */
  name: string;
  /**
   * Icon color fill
   */
  fill?: string;
  /**
   * Handle click
   */
  onClick?: () => void;
};

export { IconProps };
