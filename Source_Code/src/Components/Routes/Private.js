import { Navigate } from 'react-router-dom';
import {useAuth }from './../../Context/auth';
export default function PrivateRoute({ children }) {
  // const navigate = useNavigate();
  const [auth, setauth] = useAuth();
  return auth.token ? children : <Navigate to="/login" />;
}
