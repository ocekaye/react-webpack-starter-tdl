import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./Footer'),
  loading: () => <div>Loading...</div>
});

export default LoadableComponent;