import './navBar.css';
import Logo from '../media/sustain-logo.png';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navbar'>
        <nav>
            <ul>
                <li className="logo"><img src={Logo} alt="logo"/><div className="name"> Sustain </div></li>
                <li><Link to="/home" className='linkItem'>Home</Link></li>
                <li><Link to="/nearyou" className='linkItem'>Food near you</Link></li>
                <li><Link to="/suppliers" className='linkItem'>Food suppliers</Link></li>
                <li><Link to="/faq" className='linkItem'>FAQ</Link></li>
            </ul>
        </nav>
    </div>
  );
}

export default NavBar;


/*

<div className='navbar'>
        <img src={Logo} /><div className="name"> Sustain </div>

        <div className='bar'>
            <Link to="/home" className='linkItem'>Home</Link>
            <Link to="/home" className='linkItem'>Food near you</Link>
            <Link to="/home" className='linkItem'>Food suppliers</Link>
            <Link to="/home" className='linkItem'>FAQ</Link>
        </div>
    </div>

    */