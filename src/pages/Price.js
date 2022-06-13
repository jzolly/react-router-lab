import { useState, useEffect } from 'react';

const Price = ({match}) => {
    const symbol = match.params.symbol;
    const [company, setCompany] = useState (null);
    // const getCompany = async () => {
    //     const response = await fetch
    //      response.json();
    //     setCompany(data);
    // };
    return (
        <div>
            <h3>Name:</h3>
            <h3>Price:</h3>
        </div>
    );
};

export default Price;