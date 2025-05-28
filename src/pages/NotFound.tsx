import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {

  useEffect(() => {
    document.title = '404 Not Found | Corpus Life Science';
  }, []);
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/dashboard">Go to Home</Link>
    </div>
  );
};

export default NotFound;
