import React from 'react'
import { Outlet,Link } from 'react-router-dom';

const Dashboard = ({logout}) => {
  return (
    <div>
      <h3>Dashboard</h3>
      <Link to="settings">Settings</Link>
      <Outlet/>
      <p>Welcome sir</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard