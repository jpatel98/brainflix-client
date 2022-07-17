import React, { useEffect } from 'react';
import './PageNotFound.scss'
import errorImg from '../../assets/icons/error_page.svg'
import { Link } from 'react-router-dom';

function PageNotFound() {
    useEffect(() => {
        document.title = 'Ummm, Lost?';
      });

    return (
        <div className='error'>
            <div className='error__container'>
                <h1 className='error__heading page-header'>Page Not Found</h1>
                <p>What you're looking, is not what we have.</p>
                <img className='error__image' src={errorImg} alt="PageNotFound" />
            </div>
            <Link to='/' exact className='error__btn button-text'>Go Home</Link>
        </div>
    );
}

export default PageNotFound;