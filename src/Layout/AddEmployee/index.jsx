import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form, Modal } from 'react-bootstrap';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';


const schema = yup.object().shape({
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
}).required();

function AddEmployee({ handleAddEmploy }) {

    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmit = (data) => {
        console.log(data)
        handleAddEmploy(data)
        if (handleAddEmploy) {
            handleShow()
            reset()
        }
    }

    return (
        <>
            <Form className="form-add" style={{ marginBottom: '50px' }}>
                <div style={{ fontSize: '30px', marginTop: '50px', marginBottom: '50px', fontWeight: 'bold' }}>
                    Thêm bài viết
                </div>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tiêu đề</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Tiêu đề của phim"
                        name="title"
                        {...register("title")}
                    />
                    {errors?.title?.type === "required" &&
                        <p className="valid-form__message">* Vui lòng nhập tiêu đề của phim</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Tên phim</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Tên phim của phim"
                        name="name"
                        {...register("name")}
                    />
                    {errors?.name?.type === "required" &&
                        <p className="valid-form__message">* Vui lòng nhập tên của phim</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Thời lượng</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Thời lượng của phim"
                        name="duaration"
                        {...register("duaration")}
                    />
                    {errors?.duaration?.type === "required" &&
                        <p className="valid-form__message">* Vui lòng nhập thời lượng của phim</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Đạo diễn</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Đạo diễn của phim"
                        name="director"
                        {...register("director")}
                    />
                    {errors?.director?.type === "required" &&
                        <p className="valid-form__message">* Vui lòng nhập đạo diễn của phim</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Diễn viên</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Diễn viên của phim"
                        name="actor"
                        {...register("actor")}
                    />
                    {errors?.actor?.type === "required" &&
                        <p className="valid-form__message">* Vui lòng nhập diễn viên của phim</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Quốc gia</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Quốc gia của phim"
                        name="country"
                        {...register("country")}
                    />
                    {errors?.country?.type === "required" &&
                        <p className="valid-form__message">* Vui lòng nhập quốc gia của phim</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Thể loại</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Thể loại của phim"
                        name="genre"
                        {...register("genre")}
                    />
                    {errors?.genre?.type === "required" &&
                        <p className="valid-form__message">* Vui lòng nhập thể loại của phim</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Khởi chiếu</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Thời gian khởi chiếu của phim"
                        name="premiere"
                        {...register("premiere")}
                    />
                    {errors?.premiere?.type === "required" &&
                        <p className="valid-form__message">* Vui lòng nhập thời gian khởi chiếu của phim</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Nội dung</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Nội dung của phim"
                        name="content"
                        {...register("content")}
                    />
                    {errors?.content?.type === "required" &&
                        <p className="valid-form__message">* Vui lòng nhập nội dung của phim</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Đánh giá</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Đánh giá của phim"
                        name="rate"
                        {...register("rate")}
                    />
                    {errors?.rate?.type === "required" &&
                        <p className="valid-form__message">* Vui lòng nhập đánh giá của phim</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Tác giả</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Tác giả của phim"
                        name="author    "
                        {...register("author    ")}
                    />
                    {errors?.author?.type === "required" &&
                        <p className="valid-form__message">* Vui lòng nhập tác giả của phim</p>}
                </Form.Group>

                <Button onClick={handleSubmit(onSubmit)} className="mr-10" variant="primary">
                    Thêm bài viết
                </Button>
                <Button className="ml-10" variant="secondary">
                    <Link style={{ color: 'white', textDecoration: 'none' }} to="/list-employee">
                        Trở về
                    </Link>
                </Button>
            </Form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thành công</Modal.Title>
                </Modal.Header>
                <Modal.Body>Thêm bài</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Trở về
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddEmployee;