/**
 * Props
 */
type BreadcrumbsProps = {
  /**
   * Classname
   */
  className?: string;
  /**
   * Links data
   */
  links: { to: string; label: string }[];
  /**
   * Children
   */
  children: any;
};

export { BreadcrumbsProps };
