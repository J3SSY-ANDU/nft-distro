import React from 'react';
import './trending.css';
import exboot1 from '../../assets/exboot1.svg';
import exboot2 from '../../assets/exboot2.svg';
import futureOfPolygonX from '../../assets/futureOfPolygonX.svg';
import blueWave2 from '../../assets/blueWave2.svg';
import perperzonAvatar from '../../assets/perperzon-avatar.svg';
import richardAvatar from '../../assets/richard-avatar.svg';
import { Card } from '../../components';

const cardsInfo = [
    {
        img: exboot1,
        title: "ExBoot #1",
        avatarImage: perperzonAvatar,
        avatarName: "Perperzon"
    },
    {
        img: futureOfPolygonX,
        title: "Future of Polygon X",
        avatarImage: richardAvatar,
        avatarName: "Richard"
    },
    {
        img: exboot2,
        title: "ExBoot #2",
        avatarImage: perperzonAvatar,
        avatarName: "Perperzon"
    },
    {
        img: blueWave2,
        title: "Blue Wave #2",
        avatarImage: richardAvatar,
        avatarName: "Richard"
    }
]

export function Trending() {
    return (
        <div className='app__trending section__padding'>
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