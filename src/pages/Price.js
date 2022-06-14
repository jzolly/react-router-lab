const Price = (props) => {
    const symbol = props.match.params.symbol;
    const company = props.stocks.find(ele => ele.symbol === symbol);
    console.log(company);
    
    return (
        <div>
            <h3>Name: {company.name}</h3>
            <h3>Price: {company.lastPrice}</h3>
        </div>
    );
};

export default Price;