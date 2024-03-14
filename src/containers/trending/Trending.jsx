import React from 'react';
import './trending.css';
import { cardsInfo } from '..';
import { Card } from '../../components';

export function Trending() {
    return (
        <div className='app__trending section__padding' id='trending'>
            <div className='app__trending-text'>
                <h1>Trending Art 🔥</h1>
                <p>Discover more</p>
            </div>
            <div className='app__trending-container'>
                {cardsInfo.map((card, index) => {
                    return (
                        <Card cardImage={card.img} cardTitle={card.title} avatarImage={card.avatarImage} avatarName={card.avatarName} key={card.title + index}/>
                    ) 
                })}
            </div>
        </div>
    )
}