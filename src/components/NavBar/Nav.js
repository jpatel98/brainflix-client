import logo from '../../assets/logo/BrainFlix-logo.svg';
import userImg from '../../assets/images/Mohan-muruge.jpg'
import { NavLink } from 'react-router-dom';
import './Nav.scss'

const nav = () => {
    return (
        <nav className='navbar'>
            <NavLink to="/" exact>
                <img src={logo} alt="BrainFlix logo" className='navbar__img'/>
            </NavLink>
            <div className='navbar__search'>
                    <input type="text" placeholder='Search' className='navbar__search-input'></input>
                    <img src={userImg} alt="User profile" className='navbar__search-userImg'/>
                    <NavLink to="/upload" exact className='navbar__search-upload button-text'>UPLOAD</NavLink>
            </div> 
        </nav>
    );
};

export default nav;