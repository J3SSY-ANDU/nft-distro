import React from 'react';
import './leaderboard.css';
import whiteCoin from '../../assets/whiteCoin.svg';
import { rankingList } from '..';
export function Leaderboard() {
    return (
        <div className='app__leaderboard'>
            <div className='app__leaderboard-container section__padding'>
                <div className='app__leaderboard-container_title'>
                    <h1>Leaderboard of the Week</h1>
                </div>
                <div className='app__leaderboard-container_ranking'>
                    {rankingList.map((rank, index) => {
                        return (
                            <div className='app__leaderboard-container_ranking-rank' key={rank.avatarName + index}>
                                <img src={rank.rankingImage} alt='ranking #1'/>
                                <div>
                                    <p>{rank.avatarName}</p>
                                    <div>
                                        <img src={whiteCoin} alt='coin symbol'/>
                                        <p>{rank.coinAmount}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}