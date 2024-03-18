import React from 'react';
import './home.css';
import { Navbar } from '../../components';
import { Header, Trending, FeaturedCollections, Leaderboard, Explore, CTA, Footer } from '../../containers';

export function Home({headerImage, ballImage}) {
    return (
        <div className='app__home'>
            <Navbar />
            <Header headerImage={headerImage} ballImage={ballImage}/>
            <Trending />
            <FeaturedCollections />
            <Leaderboard />
            <Explore />
            <CTA />
            <Footer />
        </div>
    )
}