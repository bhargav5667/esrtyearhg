import React, { useState } from "react";
import { signInWithGoogle, logOut } from "./firebase";

function LoginButton() {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    const user = await signInWithGoogle();
    setUser(user);
  };

  const handleLogout = async () => {
    await logOut();
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <img src={user.photoURL} alt="User" width="50" />
          <p>Welcome, {user.displayName}!</p>
          <button onClick={handleLogout}>Log out</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Sign in with Google</button>
      )}
    </div>
  );
}

export default LoginButton;
