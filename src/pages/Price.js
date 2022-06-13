import { useState, useEffect } from 'react';
import stocks from '../data';

const Price = ({match}) => {
    const symbol = match.params.symbol.filter;
    // const [company, setCompany] = useState (null);
    // const getCompany = async () => {
    //     const response = await fetch
    //      response.json();
    //     setCompany(data);
    // };
    return (
        <div>
            <h3>Name: {stocks.name}</h3>
            <h3>Price: {stocks.lastPrice}</h3>
        </div>
    );
};

export default Price;