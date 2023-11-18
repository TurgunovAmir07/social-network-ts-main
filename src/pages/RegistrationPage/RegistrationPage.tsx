import React from "react";
import { Container } from "../../components/UI/container/container.style";
import { StyledLoginPage } from "../LoginPage/LoginPage.style";
import { Heading } from "../../components/UI/Header/Typography/Heading";
import { Input } from "../../components/UI/Input/Input";
// import { StyledLink } from "../../components/UI/Header/Typography/StyledLink";
import { RegistrationInfoForRegistration } from "../../components/UI/RegistrationInfo/RegistrationInfoForRegistration";
import { Button } from "../../components/UI/Button/Button";

export const RegistrationPage = () => {
  return (
    <Container>
      <StyledLoginPage>
        <div className="LoginPage">
          <Heading headingText="Регистрация" />
          <form>
            <Input
              isError={false}
              errorMessage="Введите имя в правильном формате"
              type="text"
              placeholder="Имя и фамилия"
            />
            <Input
              isError={false}
              errorMessage="Введите номер в правильном формате"
              type="tel"
              placeholder="Номер телефона"
            />
            <Input
              isError={false}
              errorMessage="Введите пароль в правильном формате"
              type="password"
              placeholder="Пароль"
            />
            <Button buttonText="Зарегистрироваться" isPrimary={false} />
          </form>
          {/* <StyledLink to="/" linkText="Забыли пароль?" /> */}
          <RegistrationInfoForRegistration />
        </div>
      </StyledLoginPage>
    </Container>
  );
};
