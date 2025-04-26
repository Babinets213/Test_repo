import authService from "../services/authService";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const user = authService.getCurrentUser();

  if (!user) {
    navigate('/login');
  }

  return (
    <div>
      <h2>Welcome, {user?.username}!</h2>
      <button onClick={() => {
        authService.logout();
        navigate('/login');
      }}>
        Logout
      </button>
    </div>
  );
}

export default HomePage;
