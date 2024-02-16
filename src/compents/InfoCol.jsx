import { useState , useEffect , useRef } from "react";
import starIcon from '../img/icons8-star-48.png';
import { motion } from 'framer-motion';
import CardCol from "./Card";


function InfoCol(props) {
    const [curIndex,setCurIndex] = useState(0)
    const [sliderCard,setSliderCard] = useState([])
    const left = useRef()
    const right = useRef()
    const container = useRef()
    const containerr = useRef()

    const handleScroll = (direction) => {
        const scrollAmount = direction === 'left' ? -380 : 380;
        container.current.scrollTo({
            left: container.current.scrollLeft + scrollAmount,
            behavior: 'smooth',
        });
    };
    const handleScrolll = (direction) => {
        const scrollAmount = direction === 'left' ? -380 : 380;
        containerr.current.scrollTo({
            left: containerr.current.scrollLeft + scrollAmount,
            behavior: 'smooth',
        });
    };

    const getMovie = () => {
        fetch(`${props.api}?api_key=374f36fe5bb2ff5b88601ca6ff5247c6`)
            .then(res => res.json())
            .then(json => setSliderCard(json.results))
            .catch(error => console.error("Error fetching movies:", error));
    };

    useEffect(() => {
        getMovie();
    }, []);
    return ( 
        <div className="info-col-container">
            <div className="info-col">
                    <div className="head">
                        <h5>Popular Movies</h5>
                        <div className="scroll-controls">
                            <i ref={left} className="fa fa-chevron-left scrole scrole-right"  onClick={() => handleScroll('left')}></i>
                            <i ref={right} className="fa fa-chevron-right scrole scrole-left" onClick={() => handleScroll('right')} ></i>
                        </div>
                    </div>
                    <motion.div  className="col" >
                        <motion.div  className="inner-cur" ref={container}>
                            <CardCol api={"https://api.themoviedb.org/3/movie/popular"} type={"Movie"} num={0} numm={5}  />
                            <CardCol api={"https://api.themoviedb.org/3/movie/popular"} type={"Movie"} num={5} numm={10}  />
                            <CardCol api={"https://api.themoviedb.org/3/movie/popular"} type={"Movie"} num={10} numm={15}  />
                            <CardCol api={"https://api.themoviedb.org/3/movie/popular"} type={"Movie"} num={15} numm={20}  />
                        </motion.div>
                    </motion.div>
            </div>
            <div className="info-col">
                <div className="head">
                    <h5>Popular TV Shows</h5>
                    <div className="scroll-controls">
                        <i ref={left} className="fa fa-chevron-left scrole scrole-right"  onClick={() => handleScrolll('left')}></i>
                        <i ref={right} className="fa fa-chevron-right scrole scrole-left" onClick={() => handleScrolll('right')} ></i>
                    </div>
                </div>
                <motion.div  className="col" >
                    <motion.div  className="inner-cur" ref={containerr}>
                        <CardCol api={"https://api.themoviedb.org/3/trending/tv/day"} type={"TV Show"} num={0} numm={5}  />
                        <CardCol api={"https://api.themoviedb.org/3/trending/tv/day"} type={"TV Show"} num={5} numm={10}  />
                        <CardCol api={"https://api.themoviedb.org/3/trending/tv/day"} type={"TV Show"} num={10} numm={15}  />
                        <CardCol api={"https://api.themoviedb.org/3/trending/tv/day"} type={"TV Show"} num={15} numm={20}  />
                    </motion.div>
                </motion.div>
            </div>
        </div>
     );
}

export default InfoCol;