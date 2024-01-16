import React from 'react';
import { useLocation } from 'react-router-dom';

const User_Data = () => {
  const location = useLocation();
  const userData = location.state?.userData || {};

  return (
    <div>
      <h2>User Data</h2>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  );
};

export default User_Data;