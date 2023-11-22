import React from "react";
import { Heading } from "../../components/UI/Header/Typography/Heading";
import { Input } from "../../components/UI/Input/Input";
import { Container } from "../../components/UI/container/container.style";
import { StyledForgetPasswordPage } from "./ForgetPasswordPage.styled";
import { Button } from "../../components/UI/Button/Button";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IRegistrationForm {
  userphone: string;
}

const regexUZB = /^(?:\+998)?(?:\d{2})?(?:\d{7})$/;

const registrationFormsSchema = yup.object({
  userphone: yup
    .string()
    .matches(regexUZB, "Введите узбекский номер телефона")
    .required("Обязательное поле!"),
});

export const ForgetPasswordPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationForm>({
    resolver: yupResolver(registrationFormsSchema),
    defaultValues: {
      userphone: "",
    },
  });

  const onRegistrationSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    console.log("DATA:  ", data);
  };

  return (
    <Container>
      <StyledForgetPasswordPage>
        <div className="LoginPage">
          <Heading headingText="Забыли пароль?" />
          <form onSubmit={handleSubmit(onRegistrationSubmit)}>
            <p>
              Укажите свой номер телефона,
              <br />
              чтобы получить код для сброса пароля.
            </p>
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
            <Button
              disabled={!!Object.keys(errors).length}
              buttonText="Отправить"
              isPrimary
            />
          </form>
        </div>
      </StyledForgetPasswordPage>
    </Container>
  );
};
