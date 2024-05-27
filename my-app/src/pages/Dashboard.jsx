import React from 'react';


const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="dashboard-container">
      <h2>Добро пожаловать, {user.username}!</h2>
      <p>Вы успешно вошли в систему.</p>
    </div>
  );
};

export default Dashboard;
