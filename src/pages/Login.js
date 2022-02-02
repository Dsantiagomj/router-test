import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../utils/AuthContext";

const Login = () => {
  const [user, setUser] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const from = location.state?.from?.pathname || "/";

  function handleClick(e) {
    e.preventDefault();
    auth.login(user, () => {
      navigate(from, { replace: true });
    });
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "100px auto",
          maxWidth: 500,
          textAlign: "center",
        }}
      >
        <Typography variant="h4"> Login </Typography>
        <TextField
          id="outlined-basic"
          label="Nombre"
          variant="outlined"
          style={{ marginTop: 40 }}
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <Button
          variant="contained"
          style={{ marginTop: 20 }}
          onClick={handleClick}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
