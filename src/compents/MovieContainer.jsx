import MovieCard from './MovieCard';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

function MovieContaien() {
    const container = useRef();
    const slider = useRef();
    const [width, setWidth] = useState(0);

    const handleLoad = () => {
        const newWidth = container.current.scrollWidth - container.current.offsetWidth;
        setWidth(newWidth);
    };


    const handleScroll = (direction) => {
        const scrollAmount = direction === 'left' ? -800 : 800;
        container.current.scrollTo({
            left: container.current.scrollLeft + scrollAmount,
            behavior: 'smooth',
        });
    };

    return (
        <div className="movie-container">
            <i className="fa fa-chevron-right scrole scrole-left" onClick={() => handleScroll('right')}></i>
            <i className="fa fa-chevron-left scrole scrole-right" onClick={() => handleScroll('left')}></i>
            <h3>Just release</h3>

            <motion.div ref={container} className="container" onLoad={handleLoad}>
                <motion.div drag="x" whileTap={{cursor:"grabbing"}} dragConstraints={{right:0,left: -width}} ref={slider} className='inner-cur'>
                    <MovieCard />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default MovieContaien;
