import { useAuth } from "./AuthContext";

const Profile = () => {
  const auth = useAuth();
  return (
    <div>
      <h1>Profile page</h1>
      <p> this is the profile page and should be protected</p>
      <p>Welcome back {auth.user}</p>
    </div>
  );
};

export default Profile;
