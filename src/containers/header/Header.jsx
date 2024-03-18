import React, { useState } from 'react';
import './header.css';
import walletImage from '../../assets/wallet.svg';
import avatarImage from '../../assets/perperzon-avatar.png';
import backgroundImage from '../../assets/header-background.svg';
import closeSymbol from '../../assets/close.svg';
import { Backdrop } from '@mui/material';

export function Header({headerImage, ballImage}) {
    const [toggleWallet, setToggleWallet] = useState(false);

    return (
        <div className='app__header section__padding' style={{background: `url(${backgroundImage})`}}>
            <div className='app__header-info'>
                <div className='app__header-info_text'>
                    <p>WEB 3 NON-FUNGIBLE TOKENS</p>
                    <h1>Unlock Unique Digital Ownership with NFTs</h1>
                    <p>Experience the Revolutionary World of Non-Fungible Tokens on Our Exclusive NFT Marketplace</p>
                </div>
                <div className='app__header-info_text-button' onClick={() => setToggleWallet(true)}>
                    <img src={walletImage} alt='wallet'/>
                    <p>Connect Wallet</p>
                </div>
            </div>
            <div className='app__header-image'>
                <img src={headerImage} alt='ExBoot #1' fetchpriority='high' />
                <img src={ballImage} alt='big ball' className='big-ball'/>
                <img src={ballImage} alt='small ball' className='small-ball' />
                <div className='app__header-image_info'>
                    <img src={avatarImage} alt='perperzon avatar'/>
                    <p>Perperzon</p>
                </div>
            </div>
            <Backdrop open={toggleWallet} style={{backdropFilter: 'blur(8px)', zIndex: '1000'}}>
                <div className='app__header-backdrop'>
                    <img src={closeSymbol} alt='close' onClick={() => setToggleWallet(false)}/>
                    <div className='app__header-backdrop_text'>
                        <h2>Sign with your wallet!</h2>
                        <p>Sign Wallet NFT, the secure digital storage for unique assets, take a step towards the future</p>
                    </div>
                    <div className='app__header-backdrop_buttons'>
                        <div>
                            <p>Connect Wallet A</p>
                        </div>
                        <div>
                            <p>Connect Wallet B</p>
                        </div>
                        <div>
                            <p>Connect Wallet C</p>
                        </div>
                    </div>
                </div>
            </Backdrop>
        </div>
    )
}
