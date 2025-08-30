import { useState } from 'react';
import './App.css';
import ErrorPage from './components/ErrorPage';

function App() {
  const [showError, setShowError] = useState(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      
        <ErrorPage />
     
    </div>
  );
}

export default App
