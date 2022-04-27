import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import UpdateEmployee from '../../Layout/UpdateEmployee'
import RequestApi from '../../Utils/RequestApi';

function UpdateEmployeePage() {

  const [valueUpdate, setValueUpdate] = useState();

  const { id } = useParams();

  const getEmployee = async () => {
    // try {
    //   const res = await RequestApi(`employees/${id}`, 'GET');
    //   setValueUpdate(res.data);
    // }
    // catch (err) {
    //   console.log(err)
    // }
  }

  const handleUpdateEmployee = async (data) => {
    // try {
    //   await RequestApi(`employees/${id}`, 'PUT', {
    //     // id: 1,
    //     firstName: data.firstName,
    //     lastName: data.lastName,
    //     emailId: data.email
    //   })
    // }
    // catch (err) {
    //   console.log(err);
    // }
  }

  useEffect(() => {
    getEmployee();
  }, [])

  return (
    <Container>
      {valueUpdate && <UpdateEmployee
        valueUpdate={valueUpdate}
        handleUpdateEmployee={handleUpdateEmployee}
      />}
    </Container>
  )
}

export default UpdateEmployeePage