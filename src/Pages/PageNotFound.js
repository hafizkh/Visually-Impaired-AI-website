import React from 'react'
import notFoundPage from '../assets/page_not_found.jpg'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const navigate = useNavigate()
    const navigateToHome = () => {
        navigate('/')
    }

    return (
        <div className="not-found-page">
            <h2>404 Page Not Found</h2>
            <img className='image' src={notFoundPage} alt="404 error image" />
            <p>The page you requested could not be found.</p>
            <button onClick={navigateToHome}>Home</button>
        </div>
    )
}

export default PageNotFound