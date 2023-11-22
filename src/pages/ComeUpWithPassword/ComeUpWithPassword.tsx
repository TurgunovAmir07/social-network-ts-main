import React from "react";
import { Heading } from "../../components/UI/Header/Typography/Heading";
import { Input } from "../../components/UI/Input/Input";
import { Container } from "../../components/UI/container/container.style";
import { Button } from "../../components/UI/Button/Button";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledComeUpWithPassword } from "./ComeUpWithPassword.style";

interface IRegistrationForm {
  userpassword: string;
}

const registrationFormsSchema = yup.object({
  userpassword: yup
    .string()
    .min(8, "Пароль должен содержать как минимум 8 символа!")
    .required("Обязательное поле!"),
});

export const ComeUpWithPassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationForm>({
    resolver: yupResolver(registrationFormsSchema),
    defaultValues: {
      userpassword: "",
    },
  });

  const onRegistrationSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    console.log("DATA:  ", data);
  };

  return (
    <Container>
      <StyledComeUpWithPassword>
        <div className="LoginPage">
          <Heading headingText="Придумайте пароль" />
          <form onSubmit={handleSubmit(onRegistrationSubmit)}>
            <p className="paragraph">
              Введите новый пароль для вашей учетной записи.
              <br />
              Пароль должен содержать не менее 8 символов,
              <br />
              включая заглавные и строчные буквы, цифры и специальные символы.
            </p>
            <Controller
              name="userpassword"
              control={control}
              render={({ field }) => (
                <Input
                  isError={errors.userpassword ? true : false}
                  errorMessage={errors.userpassword?.message}
                  type="password"
                  placeholder="Новый пароль"
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
                  placeholder="Повторите пароль"
                  {...field}
                />
              )}
            />
            <Button
              disabled={!!Object.keys(errors).length}
              buttonText="Восстановить пароль"
              isPrimary
            />
          </form>
        </div>
      </StyledComeUpWithPassword>
    </Container>
  );
};
