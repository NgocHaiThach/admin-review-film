import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EmployeeItem from '../EmployeeItem';

function ListEmployee({ filmList, onDeleteEmployee }) {


    const handleDeleteEmployee = (id) => {
        onDeleteEmployee(id)
    }

    return (
        <Container>
            <div className="title" style={{ fontSize: '30px', marginTop: '50px', marginBottom: '50px', fontWeight: 'bold' }}>
                Danh Sách Bài Viết
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Tên</th>
                        {/* <th>Title</th> */}
                        <th>Thời lượng</th>
                        <th>Đạo diễn</th>
                        <th>Quốc gia</th>
                        <th>Diễn viên</th>
                        <th>Thể loại</th>
                        <th>Khởi chiếu</th>
                        <th>Điều khiển</th>
                    </tr>
                </thead>
                <tbody>
                    {filmList.map((item, index) => (
                        <tr key={index}>
                            <th>{item._source.title}</th>
                            <th>{item._source.movie.duration}</th>
                            <th>{item._source.movie.director}</th>
                            <th>{item._source.movie.country}</th>
                            <th>{item._source.movie.actor}</th>
                            <th>{item._source.movie.genre}</th>
                            <th>{item._source.movie.premiere}</th>
                            <td style={{ display: 'flex' }}>
                                <Button
                                    className="mr-10"
                                    variant="primary">
                                    <Link style={{ color: 'white', textDecoration: 'none' }} to={`update/${item._id}`}>
                                        Update
                                    </Link>
                                </Button>
                                <Button
                                    className="ml-10"
                                    variant="danger">
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </Container >
    );
}

export default ListEmployee;