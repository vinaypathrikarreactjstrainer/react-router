import React from "react";
import { useSearchParams } from "react-router-dom";
const Contact = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log('Company Name => ', searchParams.get('company'));
    let companyName = searchParams.get('company');
    let cityName = searchParams.get('city');
    const updateQueryParams = () => {
        setSearchParams(
            {
                company: 'JP Morgan',
                city : 'Boston'
            }
        )
    }
    return(
        <>
            <h1>Contact Page</h1>
            <p>We serves the services like:</p>
            <h4>Company = {companyName}</h4>
            <h4>City = {cityName}</h4>
            <button type="button" onClick={() => updateQueryParams()}>Update Company Name</button>
        </>
    )
}

export default Contact;