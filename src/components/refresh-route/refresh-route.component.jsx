import { useEffect } from 'react';
import { useNavigate, useLocation } from "react-router";

const RefreshRoute = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (window.performance) {
      if (performance.navigation.type === 1 && location.pathname !== '/') {
          navigate('/', { replace: true })
      } 
    }
  }, []);

  return children;
}

export default RefreshRoute;