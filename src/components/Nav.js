import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <div className='nav'>
            <Link to="/">
                <div id='logoHome'>iStocks</div>
            </Link>
            <Link to="/about">
                <div className='navSub'>About</div>
            </Link>
            <Link to="/stocks">
                <div className='navSub'>Stocks</div>
            </Link>
        </div>
    );
};

export default Nav;