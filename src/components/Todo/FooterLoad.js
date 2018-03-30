import Loadable from 'react-loadable';
import Loading from '../../components/Loading/Loading';

const LoadableComponent = Loadable({
  loader: () => import('./Footer'),
  loading: () => Loading
});

export default LoadableComponent;