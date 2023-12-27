import React, { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Modal from "react-modal";
import { PostItem } from "../../store/API/postApi";
import {
  PostFormBox,
  PostFormContent,
  PostFormHeader,
  PostFormFooter,
} from "./PostForm.style";
import { Heading } from "../../components/Typography/Heading";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/Input/Input";
import { useEditPostMutation } from "../../store/API/postApi";
import { IEditPostPayload } from "../../store/API/postApi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type EditNewPostFormProps = {
  isOpen: boolean;
  onCloseModal: () => void;
};

const editNewPostSchema = yup.object({
  mainText: yup.string().required("Это обязательное поле"),
});

type EditPostFormProps = {
  isOpen: boolean;
  onCloseModal: () => void;
  post: PostItem;
  onEditPostSucces: () => void;
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const EditPostForm = ({
  isOpen,
  post,
  onCloseModal,
  onEditPostSucces,
}: EditPostFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editNewPostSchema),
    defaultValues: {
      mainText: post.main_text,
    },
  });
  const [editPost, { isLoading, isSuccess }] = useEditPostMutation();

  useEffect(() => {
    if (isSuccess) {
      onEditPostSucces();
    }
  }, [
    isSuccess,
    // TODO:
    onEditPostSucces,
  ]);

  const handleEditPostFormSubmit: SubmitHandler<{ mainText: string }> = (
    formData
  ) => {
    const payload: IEditPostPayload = {
      post_id: post.id,
      new_text: formData.mainText,
    };
    editPost(payload);
  };

  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <PostFormBox onSubmit={handleSubmit(handleEditPostFormSubmit)}>
        <PostFormHeader>
          <Heading headingType="h3" headingText="Редактировать текст" />
        </PostFormHeader>
        <PostFormContent>
          <Controller
            name="mainText"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.mainText ? true : false}
                errorMessage={errors.mainText?.message}
                placeholder="Текст"
                {...field}
              />
            )}
          />
        </PostFormContent>
        <PostFormFooter>
          <Button
            disabled={isLoading}
            type="submit"
            buttonText="Сохранить"
            isPrimary
          />
          <Button
            disabled={isLoading}
            type="submit"
            buttonText="Отменить"
            isPrimary
            onClick={onCloseModal}
          />
        </PostFormFooter>
      </PostFormBox>
    </Modal>
  );
};
