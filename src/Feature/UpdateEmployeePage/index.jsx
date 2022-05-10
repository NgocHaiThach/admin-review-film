import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import UpdateEmployee from "../../Layout/UpdateEmployee";
import { getBlogDetail } from "../../Utils/blogsAPI";
import RequestApi from "../../Utils/RequestApi";

function UpdateEmployeePage() {
  const [blogDetail, setBlogDetail] = useState({});
  const [valueUpdate, setValueUpdate] = useState();
  const { id } = useParams();

  useEffect(() => {
    if (id) getBlogByID(id);
  }, [id]);

  const getBlogByID = async (id) => {
    const { data } = await getBlogDetail(id);
    setBlogDetail(data.documents[0]);
  };
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
  };

  return (
    <Container>
      <UpdateEmployee
        blogDetail={blogDetail}
        valueUpdate={valueUpdate}
        handleUpdateEmployee={handleUpdateEmployee}
      />
    </Container>
  );
}

export default UpdateEmployeePage;
