import React from "react";
import "./LoginPage.scss";
import { Heading } from "../../components/UI/Header/Typography/Heading";
import { StyledLink } from "../../components/UI/Header/Typography/StyledLink";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/Input/Input";
import { Container } from "../../components/UI/container/container.style";
import { RegistrationInfo } from "../../components/UI/RegistrationInfo/RegistrationInfo";
import { StyledLoginPage } from "./LoginPage.style";

export const LoginPage = () => {
  return (
    <Container>
      <StyledLoginPage>
        <div className="LoginPage">
          <Heading headingText="Авторизация" />
          <form>
            <Input
              isError={false}
              errorMessage="Ошибка!"
              type="tel"
              placeholder="Ваш номер"
            />
            <Input
              isError={false}
              errorMessage="Неверный пароль!"
              type="password"
              placeholder="Пароль"
            />
            <Button buttonText="Войти" isPrimary />
          </form>
          <StyledLink to="/" linkText="Забыли пароль?" />
          {/* <div className="registration">
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
        </div> */}
          <RegistrationInfo />
        </div>
      </StyledLoginPage>
    </Container>
  );
};
