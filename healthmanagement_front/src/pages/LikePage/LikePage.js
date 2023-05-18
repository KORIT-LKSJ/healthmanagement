import React from 'react';
import LikeList from '../LikeList/LikeList';

const LikePage = () => {
    return (
        <div>
            <header>
                <h1>관심목록</h1>
            </header>
            <main>  
                <LikeList></LikeList>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default LikePage;