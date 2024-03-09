import React from 'react';
import './header.css';
import walletImage from '../../assets/wallet.svg';
import headerImage from '../../assets/header-image.svg';
import ballImage from '../../assets/ball.svg';
import avatarImage from '../../assets/perperzon-avatar.svg';
import backgroundImage from '../../assets/header-background.svg';

export function Header() {
    return (
        <div className='app__header section__padding' style={{background: `url(${backgroundImage})`}}>
            <div className='app__header-info'>
                <div className='app__header-info_text'>
                    <p>WEB 3 NON-FUNGIBLE TOKENS</p>
                    <h1>Unlock Unique Digital Ownership with NFTs</h1>
                    <p>Experience the Revolutionary World of Non-Fungible Tokens on Our Exclusive NFT Marketplace</p>
                </div>
                <div className='app__header-info_text-button'>
                    <img src={walletImage} alt='wallet'/>
                    <p>Connect Wallet</p>
                </div>
            </div>
            <div className='app__header-image'>
                <img src={headerImage} alt='ExBoot #1'/>
                <img src={ballImage} alt='big ball' className='big-ball'/>
                <img src={ballImage} alt='small ball' className='small-ball' />
                <div className='app__header-image_info'>
                    <img src={avatarImage} alt='perperzon avatar'/>
                    <p>Perperzon</p>
                </div>
            </div>
        </div>
    )
}