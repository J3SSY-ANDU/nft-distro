import React from 'react';
import './explore.css';
import { Card } from '../../components';
import { exploreList } from '..';
import dropDown from '../../assets/dropDown.svg';

export function Explore() {
    return (
        <div className='app__explore section__padding'>
            <div className="app__explore-heading">
                <h1>Explore</h1>
                <div className='app__explore-heading_dropDown'>
                    <p>Recently Added</p>
                    <img src={dropDown} alt='drop-down arrow'/>
                </div>
            </div>
            <div className='app__explore-container'>
                {exploreList.map((card, index) => {
                    return (
                        <Card cardImage={card.img} cardTitle={card.title} avatarImage={card.avatarImage} avatarName={card.avatarName} key={card.avatarName + index}/>
                    )
                })}
            </div>
        </div>
    )
}