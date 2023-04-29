import { Navigate } from 'react-router-dom';
export default function PrivateRoute({ children }) {
  // const navigate = useNavigate();
  const [token, setToken] = localStorage.getItem('auth');
  return token ? children : <Navigate to="/login" />;
}
