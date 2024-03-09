import React from 'react';
import './featuredCard.css';
import wallet from '../../assets/wallet.svg';
import coinSymbol from '../../assets/darkCoin.svg';
export function FeaturedCard({ collectionImage, avatarImage, avatarName, collectionTitle, description }) {
    return (
        <div className='app__featuredCard'>
            <div className='app__featuredCard-image'>
                <img src={collectionImage} alt="exboot #1"/>
            </div>
            <div className="app__featuredCard-content">
                <div className='app__featuredCard-content_avatar'>
                    <img src={avatarImage} alt="avatar img"/>
                    <p>{avatarName}</p>
                </div>
                <div className='app__featuredCard-content_info'>
                    <h1>{collectionTitle}</h1>
                    <p>Description</p>
                    <p>{description}</p>
                </div>
                <div className='app__featuredCard-content_bid'>
                    <div className='app__featuredCard-content_bid-left'>
                        <p>Current Bid</p>
                        <div>
                            <img src={coinSymbol} alt='coin symbol'/>
                            <p>3.421</p>
                        </div>
                    </div>
                    <div className='app__featuredCard-content_bid-right'>
                        <p>End in</p>
                        <p>1h 12m 14s</p>
                    </div>
                </div>
                <div className='app__featuredCard-content_btn'>
                    <img src={wallet} alt='wallet'/>
                    <p>Place Bid</p>
                </div>
            </div>
        </div>
    )
}