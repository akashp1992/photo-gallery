import './App.css';
import { Suspense, lazy } from 'react';
import Loading from './components/common/Loading';
const PhotoGallery = lazy(() => import('./pages/PhotoGallery'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <PhotoGallery />
    </Suspense>
  );
}

export default App;
