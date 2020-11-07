import { ControlProps } from '../../models';

/**
 * Props
 */
type TextProps = ControlProps & {
  /**
   * Input placeholder
   */
  placeholder?: string;
  /**
   * Input type
   */
  type?: 'text' | 'password' | 'email' | 'phone';
  /**
   * Input mask
   */
  mask?: string;
};

export { TextProps };
