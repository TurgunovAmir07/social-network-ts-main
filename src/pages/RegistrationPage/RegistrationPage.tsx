import React, { useEffect } from "react";
import { StyledLoginPage } from "../LoginPage/LoginPage.style";
import { Heading } from "../../components/UI/Header/Typography/Heading";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/Input/Input";
import { Container } from "../../components/UI/container/container.style";
import { RegistrationInfoForRegistration } from "./RegistrationPageForForgetPasswordPage";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { RootState } from "../../store/store";
// import { useDispatch } from "react-redux";
// import { changeUser } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useRegisterUserMutation } from "../../store/API/authApi";

interface IRegistrationForm {
  username: string;
  userpassword: string;
  userphone: string;
  useremail: string;
  usercity: string;
}

const regexUZB = /^(?:\+998)?(?:\d{2})?(?:\d{7})$/;
const registrationFormsSchema = yup.object({
  username: yup.string().required("Обязательное поле!"),
  userphone: yup
    .string()
    .matches(regexUZB, "Введите узбекский номер телефона")
    .required("Обязательное поле!"),
  userpassword: yup
    .string()
    .min(4, "Пароль должен содержать как минимум 4 символа!")
    .required("Обязательное поле!"),
  useremail: yup.string().email().required("Обязательное поле!"),
  usercity: yup.string().required("Обязательное поле!"),
});

export const RegistrationPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationForm>({
    resolver: yupResolver(registrationFormsSchema),
    defaultValues: {
      username: "",
      userpassword: "",
      userphone: "",
      usercity: "",
      useremail: "",
    },
  });

  const navigate = useNavigate();
  const [registrationUser, { data: userData }] = useRegisterUserMutation();

  const onRegistrationSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    registrationUser({
      name: data.username,
      password: data.userpassword,
      phone_number: data.userphone,
      user_city: data.usercity,
      email: data.useremail,
    });
  };

  useEffect(() => {
    if (userData?.user_id) {
      navigate("/");
    }
  }, [userData, navigate]);

  return (
    <Container>
      <StyledLoginPage>
        <div className="LoginPage">
          <Heading headingText="Регистрация" />
          <form onSubmit={handleSubmit(onRegistrationSubmit)}>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <Input
                  isError={errors.username ? true : false}
                  errorMessage={errors.username?.message}
                  type="text"
                  placeholder="Имя и фамилия"
                  {...field}
                />
              )}
            />

            <Controller
              name="useremail"
              control={control}
              render={({ field }) => (
                <Input
                  isError={errors.useremail ? true : false}
                  errorMessage={errors.useremail?.message}
                  type="email"
                  placeholder="Почта"
                  {...field}
                />
              )}
            />
            <Controller
              name="usercity"
              control={control}
              render={({ field }) => (
                <Input
                  isError={errors.usercity ? true : false}
                  errorMessage={errors.usercity?.message}
                  type="text"
                  placeholder="Ваш город"
                  {...field}
                />
              )}
            />
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
              disabled={!!Object.keys(errors).length}
              buttonText="Зарегистрироваться"
              isPrimary
            />
          </form>
          <RegistrationInfoForRegistration />
        </div>
      </StyledLoginPage>
    </Container>
  );
};
