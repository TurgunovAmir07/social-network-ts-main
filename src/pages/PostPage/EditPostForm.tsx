import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Modal from 'react-modal';
import { PostItem } from "../../store/API/postApi";

type EditPostFormProps = {
  isOpen: boolean
  onCloseModal: () => void
  post: PostItem
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const EditPostForm = ({}: EditPostFormProps) => {

}
