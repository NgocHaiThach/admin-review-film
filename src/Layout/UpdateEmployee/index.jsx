import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form, Modal } from "react-bootstrap";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const schema = yup
  .object()
  .shape({
    title: yup.string().required(),
    name: yup.string().required(),
    duaration: yup.string().required(),
    director: yup.string().required(),
    actor: yup.string().required(),
    country: yup.string().required(),
    genre: yup.string().required(),
    premiere: yup.string().required(),
    rate: yup.string().required(),
    content: yup.string().required(),
    author: yup.string().required(),
  })
  .required();

function UpdateEmployee({ blogDetail, handleUpdateEmployee, ...props }) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const useEffect =
    (() => {
      console.log(blogDetail);
    },
    [blogDetail]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [value, setValue] = useState(
  //     {
  //         title: valueUpdate.title,
  //         name: valueUpdate.name,
  //         duaration: valueUpdate.duaration,
  //         director: valueUpdate.director,
  //         actor: valueUpdate.actor,
  //         country: valueUpdate.country,
  //         genre: valueUpdate.genre,
  //         premiere: valueUpdate.premiere,
  //         rate: valueUpdate.rate,
  //         content: valueUpdate.content,
  //         author: valueUpdate.author,
  //     }
  // )

  const onSubmit = (data) => {
    handleUpdateEmployee(data);
    if (handleUpdateEmployee) {
      handleShow();
      reset();
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có chắc chắn muốn cập nhật bài viết</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Trở về
          </Button>
          <Button variant="primary" onClick={handleSubmit(onSubmit)}>
            Cập nhật bài viết
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateEmployee;
