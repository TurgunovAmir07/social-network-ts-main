import React from "react";
import "./LoginPage.scss";
import { Heading } from "../../components/UI/Header/Typography/Heading"
import { StyledLink } from "../../components/UI/Header/Typography/StyledLink";

export const LoginPage = () => {
  return (
    <div className="container">
    <div className="LoginPage">
      <Heading headingText="Авторизация"/>
      <form action="#">
        <input type="tel" placeholder="Номер телефона" />
        <input type="password" placeholder="Пароль" />
        <button>Войти</button>
      </form>
      <StyledLink linkText="забыли пароль?"/>
      <div className="registration">
        <span>
          У вас нет аккаунта? <a href="#">Зарегистрироваться</a>
        </span>
        <p>Войти с помощью</p>
        <div className="icons-wrapper">
          <a className="reg__link google-link" href="#">
            <img src="./img/icons/google.svg" alt="Google" />
          </a>
          <a className="reg__link google-plus-link" href="#">
            <img src="./img/icons/google-plus.svg" alt="Google Plus" />
          </a>
          <a className="reg__link yandex-link" href="#">
            <img src="./img/icons/yandex.svg" alt="Yandex" />
          </a>
          <a className="reg__link mail-ru-link" href="#">
            <img src="./img/icons/mail-ru.svg" alt="Mail.ru" />
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};
