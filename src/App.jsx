// src/App.jsx
import './styles/globals.css';
import { PlannerProvider } from './context/PlannerContext';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <PlannerProvider>
      <Layout />
    </PlannerProvider>
  );
};

export default App;