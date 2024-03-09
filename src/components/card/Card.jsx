import React from 'react';
import './card.css';
import coinSymbol from '../../assets/coin.svg';

export function Card({ cardImage, cardTitle, avatarImage, avatarName }) {
    return (
        <div className='app__card'>
            <div className='app__card-image'>
                <img src={cardImage} alt="exboot #1"/>
            </div>
            <div className="app__card-content">
                <p>{cardTitle}</p>
                <div className='app__card-content_info'>
                    <div className='app__card-content_info-left'>
                        <img src={avatarImage} alt="avatar img"/>
                        <p>{avatarName}</p>
                    </div>
                    <div className='app__card-content_info-right'>
                        <p>Current Bid</p>
                        <div>
                            <img src={coinSymbol} alt='coin symbol'/>
                            <p>3.421</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}