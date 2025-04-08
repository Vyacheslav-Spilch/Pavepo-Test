import '@/global.css';
import { Layout } from './layout/layout';
import { useScrollToTop } from '@/shared/hooks/useScrollToTop';

function App() {
  useScrollToTop();

  return (
    <div className="container">
      <Layout />
    </div>
  );
}

export default App;
