
import { useState } from 'react';
import Stars from './components/Star';


function App() {
    const [rating, setRating] = useState(0);
    const [hoverRate, setHoverRate] = useState(0)
    const totalStars = 7;


    const handleMouseOver = (index) => {
        setHoverRate(index+1)
    };

    const handleMouseLeave = () => {
        setHoverRate(rating)
    };


    const handleClick = (index) => {
        setRating(index + 1);
    };

    return (
        <>

        <h1>Star Rating App</h1>

        <Stars
            totalStars={totalStars}
            hoverRate={hoverRate}
            handleClick={handleClick}
            handleMouseLeave={handleMouseLeave}
            handleMouseOver={handleMouseOver}
        />
        </>
        
    );
}

export default App;