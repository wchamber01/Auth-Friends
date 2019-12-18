import React from "react";

const Logout = () => {
  const clearToken = localStorage.removeItem("token");
  // const refresh = window.reload;
  return <button onClick={clearToken}>Logout</button>;
};

export default Logout;
