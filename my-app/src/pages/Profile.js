import React from 'react';
import './Profile.css';


const ProfilePage = () => {
  return (
    <div className="profile-container">
      <h2 className="profile-heading">Профиль</h2>
      <div className="profile-info">
        <div className="profile-group">
          <label htmlFor="username">
            <i className="fas fa-user"></i> Имя пользователя
          </label>
          <span className="profile-value">Иванов Иван</span>
        </div>
        <div className="profile-group">
          <label htmlFor="email">
            <i className="fas fa-envelope"></i> Email
          </label>
          <span className="profile-value">ivanov@example.com</span>
        </div>
        <div className="profile-group">
          <label htmlFor="phone">
            <i className="fas fa-phone"></i> Телефон
          </label>
          <span className="profile-value">+7 123 456 7890</span>
        </div>
        <div className="profile-group">
          <label htmlFor="address">
            <i className="fas fa-map-marker-alt"></i> Адрес
          </label>
          <span className="profile-value">Москва, Россия</span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
