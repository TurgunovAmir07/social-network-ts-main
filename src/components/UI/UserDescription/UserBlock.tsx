import React from "react";

export const UserBlock = () => {
  return (
    <>
      <div className="user__block">
        <img src="./img/users/denis-frolov.jpeg" alt="Denis Frolov" />
        <div className="user__description">
          <div className="user__info">
            <div className="parameter">
              <span className="key">Друзья</span>
              <span className="value">130</span>
            </div>
            <div className="parameter">
              <span className="key">Подписчики</span>
              <span className="value">923</span>
            </div>
            <div className="parameter">
              <span className="key">Подписки</span>
              <span className="value">246</span>
            </div>
          </div>
        </div>
        <div className="buttons-wrapper">
          <button className="secondary">Редактировать профиль</button>
          <button className="primary">Добавить историю</button>
        </div>
      </div>
    </>
  );
};
