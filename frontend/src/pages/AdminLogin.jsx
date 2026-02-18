import { useState } from "react";
import { login } from "../api";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [username, setU] = useState("");
  const [password, setP] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    const res = await login(username, password);
    if (res.success) {
      navigate("/admin/dashboard");
    } else {
      alert("Wrong username or password");
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Admin Login</h1>

      <input
        placeholder="Username"
        onChange={(e) => setU(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setP(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
