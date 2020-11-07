/**
 * Props
 */
type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * Is button disabled
   */
  disabled?: boolean;
  /**
   * Button themes
   */
  theme?: 'primary' | 'secondary';
  /**
   * Button sizes
   */
  size?: 'lg' | 'md' | 'sm';
};

export { ButtonProps };
