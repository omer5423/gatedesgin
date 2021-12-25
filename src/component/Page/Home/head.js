import React , { useEffect} from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Head = (props) => {
    useEffect(() => {
        Aos.init({ duration : 2000})
    }, []);
    return (
        <div className="head" ref={props.homeSection}>
                <div className="description">
                        <h3>HELLO</h3>
                        <h1 data-aos='fade-up' className={props.loading ? 'active-h1' : ''}>Omer Ibrahim</h1>
                        <div className='header-work mt-1'>
                            <div  data-aos='fade-up' className="wrapper">
                                <span className="header-work-item">
                                    <p>
                                        Web Developer
                                    </p>
                                </span> 
                            </div>
                            <div className="wrapper">
                                <span className="header-work-item">
                                    <p>
                                        UX/UI Design
                                    </p>
                                </span> 
                            </div>
                            <div className="wrapper">
                                <span className="header-work-item">
                                    <p>
                                        Development
                                    </p>
                                </span> 
                            </div>
                            <div className="wrapper">
                                <span className="header-work-item">
                                    <p>
                                        Marketing
                                    </p>
                                </span> 
                            </div>
                            <div className="wrapper">
                                <span className="header-work-item">
                                    <p>
                                        Writter
                                    </p>
                                </span> 
                            </div>
                        </div>
                        <div data-aos='fade-down' className='social'>
                            <div className='social-item'>
                                <i className='fab fa-facebook'></i>
                                <ion-icon name="logo-facebook"></ion-icon>
                            </div>
                            <div className='social-item'>
                                <i className='fab fa-twitter'></i>
                                <ion-icon name="logo-twitter"></ion-icon>
                            </div>
                            <div className='social-item'>
                                <i className='fab fa-whatsapp'></i>
                                <ion-icon name="logo-whatsapp"></ion-icon>
                            </div>
                            <div className='social-item'>
                                <i className='fab fa-telegram'></i>
                                <ion-icon name="logo-instagram"></ion-icon>
                            </div>
                        </div>
                </div>
                
                <div className="head-glass"></div>
        </div>
    );
}

export default Head;
