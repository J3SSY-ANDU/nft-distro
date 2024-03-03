import React from 'react';
import './home.css';
import { Header, Trending, FeaturedCollections, Leaderboard, Explore, CTA, Footer } from '../../containers';

export function Home() {
    return (
        <div className='app__home'>
            <Header />
            <Trending />
            <FeaturedCollections />
            <Leaderboard />
            <Explore />
            <CTA />
            <Footer />
        </div>
    )
}