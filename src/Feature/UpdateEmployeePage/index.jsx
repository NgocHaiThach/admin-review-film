import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import UpdateEmployee from '../../Layout/UpdateEmployee'
import callApi from '../../Utils/RequestApi';


function UpdateEmployeePage() {

  const [valueUpdate, setValueUpdate] = useState();

  const { id } = useParams();

  const getFilmItem = async () => {
    try {
      const res = await callApi(`blogs/${id}`, 'GET');
      setValueUpdate(res.data.documents);
    }
    catch (err) {
      console.log(err)
    }
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
    getFilmItem();
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