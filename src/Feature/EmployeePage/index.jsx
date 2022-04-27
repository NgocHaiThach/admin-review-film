import React, { useEffect, useState } from 'react'
import ListEmployee from '../../Layout/ListEmployee'
import RequestApi from '../../Utils/RequestApi';


function EmployeePage() {

    const [employList, setEmployList] = useState([]);

    const getListEmploy = async () => {
        // const res = await RequestApi('employees', 'GET');
        // return setEmployList(res.data);
    }


    useEffect(() => {
        getListEmploy();
    }, [])

    const onDeleteEmployee = async (id) => {
        // try {
        //     await RequestApi(`employees/${id}`, 'DELETE');
        //     console.log(id)
        //     getListEmploy();
        // }
        // catch (err) {
        //     console.log(err);
        // }
    }

    return (
        <div>
            <ListEmployee
                employList={employList}
                onDeleteEmployee={onDeleteEmployee}
            />
        </div>
    )
}

export default EmployeePage