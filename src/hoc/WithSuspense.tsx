import React, { ComponentType, FunctionComponent } from 'react';
import SuspenseSpinner from '../components/SuspenseSpinner';

export const withSuspense = (
  WrappedComponent: ComponentType
): FunctionComponent => ({ ...rest }) => (
  <React.Suspense fallback={<SuspenseSpinner />}>
    <WrappedComponent {...rest} />
  </React.Suspense>
);
