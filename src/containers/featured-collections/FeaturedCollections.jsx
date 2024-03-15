import React from 'react';
import './featuredCollections.css';
import orangeCircle from '../../assets/orangeCircle.svg';
import { FeaturedCard } from '../../components';
import { collectionsInfo } from '..';
export function FeaturedCollections() {
    return (
        <div className='app__featuredCollections section__padding'>
            <div className='app__featuredCollections-title'>
                <h1>Featured Collections</h1>
            </div>
            <div className='app__featuredCollections-cards'>
                <div>
                    <img src={orangeCircle} alt='decoration circle' loading="lazy"/>
                </div>
                {collectionsInfo.map((collection, index) => {
                    return (
                        <FeaturedCard collectionImage={collection.img} avatarImage={collection.avatarImage} avatarName={collection.avatarName} collectionTitle={collection.title} description={collection.description} key={collection.title + index} />
                    )
                })}
                <div>
                    <img src={orangeCircle} alt='decoration circle' loading="lazy"/>
                </div>
            </div>
        </div>
    )
}