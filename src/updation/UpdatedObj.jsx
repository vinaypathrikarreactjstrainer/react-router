import React, { useState } from "react";

const UpdatedObj = () => {
    let [data, setData] = useState({
        name: 'Akansha',
        address: {
            city: 'Pune',
            state: 'Maharashtra',
            country : 'India'
        }
    });
    // function
    const handleName = (val) => {
        data.name = val;
        // let tempObj = data;
        // tempObj.name = val;
        console.log(data);
        setData({...data});
    }
    const handleCity = (city) => {
        data.address.city = city;
        console.log(data);
        setData({...data, address:{...data.address, city}});
    }
    return(
        <>
        <h3>Object updation using useState hook</h3>
        <input type="text" placeholder="Enter Name" onChange={(event) => handleName(event.target.value)} />
        <input type="text" placeholder="Enter City" onChange={(event) => handleCity(event.target.value)} />
        <h2>Name: {data.name}</h2>
        <h2>City: {data.address.city}</h2>
        </>
    )
}

export default UpdatedObj;