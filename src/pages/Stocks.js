import { Link } from 'react-router-dom';
import stocks from '../data';


const Stocks = (props) => {
    return (
        <div>
            <ul>
                {stocks.map((company, index) => {
                    const { name, symbol } = company;
                    return(
                        <Link key={index} to={`/price/${symbol}`}>
                            <li>{name}</li>
                        </Link>
                    )
                })}
            </ul>
        </div>
    );
}

export default Stocks;