import { useEffect, useState } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ dataLoaded }) => {
  const location = useLocation();
  const [headerBgColor, setHeaderBgColor] = useState("");

  const isActive = (pathname) => {
    return location.pathname === pathname ? 'activeLink' : '';
  }

  useEffect(() => {
    if(location.pathname === "/") {
        setHeaderBgColor("#b0a99f")
    } else {
        setHeaderBgColor("#0dcaf0")
    }
  }, [location])


  const handleEmailClick = () => {
    const email = 'walterarnoldjanssencaballero@gmail.com';
    const subject = 'Your email subject';
    const body = 'Your email body';

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }

  return (
    <>
        {dataLoaded ? (
          <nav className="navbar navbar-expand-lg navbar-light p-0" style={{backgroundColor:`${headerBgColor}`}} id="navBar-main">
            <h4 className="navbar-brand d-flex align-items-center justify-content-center ml-4" href="/">My Portfolio</h4>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="navbar-nav">
                <div className={`d-flex nav-item ${isActive('/')}`} >
                    <Link to="/" className="link text-dark">About Me</Link> &nbsp;
                </div>
                <div className={`d-flex nav-item ${isActive('/projects')}`}>
                    <Link to="/projects" className="link text-dark">Projects</Link> &nbsp;
                </div>
                <div className={`d-flex nav-item ${isActive('/contact')}`}>
                    <a href="#" onClick={handleEmailClick} target="_blank" className="link text-dark">Contact Me</a> &nbsp;
                </div>
              </div>
            </div>
        </nav>
        ) : (
          <></>
        )}

    </>

  )
}

export default Header
