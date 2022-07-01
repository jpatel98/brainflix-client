import logo from '../../assets/logo/BrainFlix-logo.svg';
import userImg from '../../assets/images/Mohan-muruge.jpg'
import './_nav.scss'

const nav = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="BrainFlix logo" className='navbar__img'/>
            <div className='navbar__search'>
                <input type="text" placeholder='Search' className='navbar__search-input'></input>
                <img src={userImg} alt="User profile" className='navbar__search-userImg'/>
            </div>
            <div className='navbar__upload button-text'>UPLOAD</div>
        </nav>
    );
};

export default nav;