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
          <RegistrationInfo />
        </div>
      </StyledLoginPage>
    </Container>
  );
};
