import React, { useEffect, useState } from 'react'
import ListEmployee from '../../Layout/ListEmployee'
import callApi from '../../Utils/RequestApi';


function EmployeePage() {

    const [filmList, setFilmList] = useState([]);
    const getFilmList = async () => {
        const res = await callApi('blogs', 'GET')
        console.log(res.data.documents)
        setFilmList(res.data.documents)
    }


    useEffect(() => {
        getFilmList();
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
                filmList={filmList}
                onDeleteEmployee={onDeleteEmployee}
            />
        </div>
    )
}

export default EmployeePage