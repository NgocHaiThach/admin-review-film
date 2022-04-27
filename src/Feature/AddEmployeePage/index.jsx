import React from 'react';
import { Container } from 'react-bootstrap';
import AddEmployee from '../../Layout/AddEmployee';
import RequestApi from '../../Utils/RequestApi';

function AddEmployeePage() {
    const onAddEmploy = async (employee) => {
        // try {
        //     await RequestApi('employees', 'POST', {
        //         // id: 1,
        //         firstName: employee.firstName,
        //         lastName: employee.lastName,
        //         emailId: employee.email
        //     })
        // }
        // catch (err) {
        //     console.log(err);
        // }
    }



    return (
        <Container>
            <AddEmployee handleAddEmploy={onAddEmploy} />
        </Container>
    )
}

export default AddEmployeePage