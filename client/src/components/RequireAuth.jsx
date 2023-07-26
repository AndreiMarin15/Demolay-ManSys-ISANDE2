import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const RequireAuth = ({ allowedRoles, allowedPositions }) => {
  const [user, setUser] = useState();
  const [position, setPosition] = useState();
  const [isUserLoaded, setIsUserLoaded] = useState(false); // New state variable
  const location = useLocation();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/getCurrentUser");
        console.log(res.data.currentUser);
        setUser(res.data.currentUser);
        setPosition(res.data.userType);
        setIsUserLoaded(true); // Set isUserLoaded to true once user data is fetched
      } catch (error) {
        console.error("Error fetching user:", error);
        setIsUserLoaded(true); // Set isUserLoaded to true even in case of error
      }
    };

    fetchUser();
  }, []);

  if (!isUserLoaded) {
    return null; // Render loading state or placeholder component while fetching user
  }

  return user &&
    allowedRoles?.includes(user) &&
    allowedPositions?.includes(position) ? (
    <Outlet />
  ) : user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
