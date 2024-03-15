import React from 'react';
import './cta.css';
import download from '../../assets/download.svg';
import ctaImage from '../../assets/ctaImage.svg';
import ball from '../../assets/ball.svg';

export function CTA() {
    return (
        <div className='app__cta section__padding'>
            <div className='app__cta-container'>
                <img src={ball} alt='ball' loading="lazy"/>
                <div className='app__cta-container_text'>
                    <h1>Try our App Mobile NFT</h1>
                    <div>
                        <img src={download} alt='download'/>
                        <p>Download Now</p>
                    </div>
                </div>
                <div className='app__cta-container_img'>
                    <img src={ctaImage} alt='app example' loading="lazy"/>
                </div>
            </div>
        </div>
    )
}