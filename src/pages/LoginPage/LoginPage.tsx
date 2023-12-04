import React, { useEffect } from "react";
import "./LoginPage.scss";
import { Heading } from "../../components/UI/Header/Typography/Heading";
import { StyledLink } from "../../components/UI/Header/Typography/StyledLink";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/Input/Input";
import { Container } from "../../components/UI/container/container.style";
import { RegistrationInfo } from "../../components/UI/RegistrationInfo/RegistrationInfo";
import { StyledLoginPage } from "./LoginPage.style";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RootState } from "../../store/store";
import { useDispatch } from "react-redux/es/exports";
import { changeUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface ILoginForm {
  userpassword: string;
  userphone: string;
}

const regexUZB = /^(?:\+998)?(?:\d{2})?(?:\d{7})$/;

const registrationFormsSchema = yup.object({
  userphone: yup
    .string()
    .matches(regexUZB, "Введите узбекский номер телефона")
    .required("Обязательное поле!"),
  userpassword: yup
    .string()
    .min(4, "Пароль должен содержать как минимум 4 символа!")
    .required("Обязательное поле!"),
});

const mockUser = {
  mail: "vasya@mail.com",
  phone_number: "1234567",
  user_id: 1,
  name: "vasya petrov",
  reg_date: new Date().toISOString,
  city: "andijan",
};

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(registrationFormsSchema),
    defaultValues: {
      userpassword: "",
      userphone: "",
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.userSlice.user);

  const onRegistrationSubmit: SubmitHandler<ILoginForm> = (data) => {
    dispatch(changeUser(mockUser));
    // console.log("DATA:  ", data);
  };

  useEffect(() => {
    console.log("USER: ", user);

    if (user?.user_id) {
      navigate("/profile");
    }
  }, [user]);

  return (
    <Container>
      <StyledLoginPage>
        <div className="LoginPage">
          <Heading headingText="Авторизация" />
          <form onSubmit={handleSubmit(onRegistrationSubmit)}>
            <Controller
              name="userphone"
              control={control}
              render={({ field }) => (
                <Input
                  isError={errors.userphone ? true : false}
                  errorMessage={errors.userphone?.message}
                  type="tel"
                  placeholder="Номер телефона"
                  {...field}
                />
              )}
            />
            <Controller
              name="userpassword"
              control={control}
              render={({ field }) => (
                <Input
                  isError={errors.userpassword ? true : false}
                  errorMessage={errors.userpassword?.message}
                  type="password"
                  placeholder="Пароль"
                  {...field}
                />
              )}
            />
            <Button
              buttonText="Войти"
              isPrimary
              disabled={!!Object.keys(errors).length}
            />
          </form>
          <StyledLink to="/forgetpassword" linkText="Забыли пароль?" />
          <RegistrationInfo />
        </div>
      </StyledLoginPage>
    </Container>
  );
};
