import React, { useState } from 'react';
import './explore.css';
import { Card } from '../../components';
import { exploreList } from '..';
import dropDown from '../../assets/dropDown.svg';

const dropDownOptions = [
    {
        value: "Recently Added"
    },
    {
        value: "Popular"
    },
    {
        value: "By Price"
    }
]

export function Explore() {
    const [toggleDropDown, setToggleDropDown] = useState(false);
    const [toggleDropDownValue, setToggleDropDownValue] = useState(dropDownOptions[0].value);
    return (
        <div className='app__explore section__padding' id='explore'>
            <div className="app__explore-heading">
                <h1>Explore</h1>
                <div onClick={() => setToggleDropDown(!toggleDropDown)}>
                    <p>{toggleDropDownValue}</p>
                    <img src={dropDown} alt='drop-down arrow'/>
                    {toggleDropDown && 
                        <div className='dropDown-container'>
                            {dropDownOptions.map((option, index) => {
                                return (
                                    <button key={option.value + index} onClick={() => setToggleDropDownValue(option.value)}>{option.value}</button>
                                )
                            })}
                        </div>
                    }
                </div>
            </div>
            <div className='app__explore-container'>
                {exploreList.map((card, index) => {
                    return (
                        <Card cardImage={card.img} cardTitle={card.title} avatarImage={card.avatarImage} avatarName={card.avatarName} key={card.avatarName + index}/>
                    )
                })}
            </div>
            <div className='app__explore-btn'>
                <p>Discover more</p>
            </div>
        </div>
    )
}