import * as React from 'react';
import { ComponentType } from 'react';

/**
 * Compose props with result of called useProps function
 */
const connect = function<T, P extends (props: Partial<T>) => any>(
  Source: ComponentType<T>,
  useProps: P
) {
  return ((props: T) => (
    <Source {...useProps(props)} {...props} />
  )) as ComponentType<Partial<T> & Omit<T, keyof ReturnType<P>>>;
};

export { connect };
