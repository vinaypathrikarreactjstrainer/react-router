import React, { useState } from "react";

const UpdatedArray = () => {
    const [data, setData] = useState([
        'Akansha', 'Aditya', 'Harsh'
    ]);
    // function
    const updateLastPerson = () => {
        console.log(data);
        let lastPerson = data.length - 1; // 2
        data[lastPerson] = 'vinay';
        console.log('lastperson => ', [...data]);
        setData([...data]);
    }
    return(
        <>
            <h3>Array updation using useState hook</h3>
            <button type="button" onClick={() => updateLastPerson()}>Update Last Person Name</button>
            {
                data.map((item, index) => (
                    <div key={index}>
                        <h4>{item}</h4>
                    </div>
                ))
            }
        </>
    )
}
export default UpdatedArray;