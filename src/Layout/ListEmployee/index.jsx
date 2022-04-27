import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import EmployeeItem from '../EmployeeItem';

function ListEmployee({ employList, onDeleteEmployee }) {


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
                    {/* {employList.map((item, index) => (
                        <EmployeeItem key={index} item={item} handleDeleteEmployee={handleDeleteEmployee} />
                    ))} */}
                    <tr>
                        <th>Sonic 2 2022</th>
                        {/* <th>Review phim Sonic 2 2022- Màn team up thú vị của Sonic</th> */}
                        <th>122 phút</th>
                        <th>Jeff Fowler</th>
                        <th>Mỹ</th>
                        <th>James Marsden, Jim Carrey, Ben Schwartz</th>
                        <th>Giả tưởng, hành động, phiêu lưu</th>
                        <th>09/04/2022</th>
                        <td style={{ display: 'flex' }}>
                            <Button
                                className="mr-10"
                                variant="primary">
                                {/* <Link style={{ color: 'white', textDecoration: 'none' }} to={`update-employee/${item.id}`}> */}
                                Update
                                {/* </Link> */}
                            </Button>
                            <Button
                                className="ml-10"
                                variant="danger">
                                Delete
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <th> The Secrets of Dumbledore</th>
                        {/* <th>Review phim Sonic 2 2022- Màn team up thú vị của Sonic</th> */}
                        <th>142 phút</th>
                        <th> David Yates</th>
                        <th>Mỹ</th>
                        <th>Jude Law, Mads Mikkelsen, Eddie Redmayne</th>
                        <th>Phù thủy, hành động, phiêu lưu</th>
                        <th>08/04/2022</th>
                        <td style={{ display: 'flex' }}>
                            <Button
                                className="mr-10"
                                variant="primary">
                                {/* <Link style={{ color: 'white', textDecoration: 'none' }} to={`update-employee/${item.id}`}> */}
                                Update
                                {/* </Link> */}
                            </Button>
                            <Button
                                className="ml-10"
                                variant="danger">
                                Delete
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container >
    );
}

export default ListEmployee;