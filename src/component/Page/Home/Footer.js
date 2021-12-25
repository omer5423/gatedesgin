import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
    
    useEffect(() => {
        Aos.init({ duration : 1000})
    }, []);
    return (
        <div className='footer'>
            <div className="logo mb-5  mt-5"  data-aos='fade-down'>
                <span></span>
            </div>
            <div className="accounts mb-4" data-aos='fade-right'>
                    <div className="account">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </div>
                    <div className="account">
                        <ion-icon name="logo-twitter"></ion-icon>
                    </div>
                    <div className="account">
                        <ion-icon name="logo-whatsapp"></ion-icon>
                    </div>
                    <div className="account">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </div>
                </div>
                <div className="copy-writer">
                    Created By <span>Gate Design</span> | ©  2021 All right reserved
                </div>
        </div>
    );
}

export default Footer;
