import React from 'react';
import './footer.css';
import logoFigure1 from '../../assets/logo/Polygon 1.svg';
import logoFigure2 from '../../assets/logo/Polygon 2.svg';
import logoFigure3 from '../../assets/logo/Polygon 3.svg';
import arrowLeft from '../../assets/arrowLeft.svg';
import copyright from '../../assets/copyright.svg';
import facebook from '../../assets/facebook.svg';
import google from '../../assets/google.svg';
import twitter from '../../assets/twitter.svg';
import apple from '../../assets/apple.svg';

export function Footer() {
    return (
        <div className='app__footer section__padding'>
            <div className='app__footer-logo'>
                <img src={logoFigure1} alt='figure 1' loading="lazy"/>
                <img src={logoFigure2} alt='figure 2' loading="lazy"/>
                <img src={logoFigure3} alt='figure 3' loading="lazy"/>
            </div>
            <div className='app__footer-info'>
                <div className='app__footer-info_left'>
                    <h2>NFT Distro</h2>
                    <p>Experience the Revolutionary World of Non-Fungible Tokens on Our Exclusive NFT Marketplace</p>
                </div>
                <div className='app__footer-info_right'>
                    <div className='app__footer-info_right-company'>
                        <h3>Company</h3>
                        <p>Explore</p>
                        <p>About</p>
                    </div>
                    <div className='app__footer-info_right-creator'>
                        <h3>Creator</h3>
                        <p>FAQ</p>
                        <p>Become Artist</p>
                    </div>
                    <div className='app__footer-info_right-community'>
                        <h3>Join our community</h3>
                        <div>
                            <input type='email' placeholder='Enter your email address'/>
                            <div>
                                <img src={arrowLeft} alt='arrow left'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='app__footer-extra'>
                <div className='app__footer-extra_copyright'>
                    <img src={copyright} alt='copyright'/>
                    <p>Copyright NFT Distro 2024</p>
                </div>
                <div className='app__footer-extra_socialMedia'>
                    <img src={facebook} alt='facebook'/>
                    <img src={google} alt='google'/>
                    <img src={twitter} alt='twitter'/>
                    <img src={apple} alt='apple'/>
                </div>
            </div>
        </div>
    )
}