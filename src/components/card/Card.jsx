import React from 'react';
import './card.css';
import coinSymbol from '../../assets/darkCoin.svg';

export function Card({ cardImage, cardTitle, avatarImage, avatarName }) {
    return (
        <div className='app__card'>
            <div className='app__card-image'>
                <img src={cardImage} alt="exboot #1" loading="lazy"/>
            </div>
            <div className="app__card-content">
                <p>{cardTitle}</p>
                <div className='app__card-content_info'>
                    <div className='app__card-content_info-left'>
                        <img src={avatarImage} alt="avatar img" loading="lazy"/>
                        <p>{avatarName}</p>
                    </div>
                    <div className='app__card-content_info-right'>
                        <p>Current Bid</p>
                        <div>
                            <img src={coinSymbol} alt='coin symbol' loading="lazy"/>
                            <p>3.421</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}