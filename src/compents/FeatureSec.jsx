import { motion } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';
import starIcon from '../img/icons8-star-48.png';

const FeatureSec = () => {
    const [featureCard, setFeatureCard] = useState([]);
    const [currentIndex,setCurrentIndex] = useState(19)
    const featureSlider = useRef();
    const [width, setWidth] = useState(0);
    const imgElements = useRef([])
    let imgInex = 0
    const container = useRef()
    
    imgElements.current.forEach((img)=>{
        img.setAttribute("imgIndex", `${imgInex++}`);
    })

    const handleScroll = (direction) => {
        const scrollAmount = direction === 'left' ? -690 : 690;
        featureSlider.current.scrollTo({
            left: featureSlider.current.scrollLeft + scrollAmount,
            behavior: 'smooth',
        });
    };

    const handleLoad = () => {
        const newWidth = featureSlider.current.scrollWidth - featureSlider.current.offsetWidth;
        setWidth(newWidth);
    };


    for (let i = 0; i < imgElements.current.length; i++) {
        const img = imgElements.current[i];
        img.onclick = function () {
            imgInex = parseInt(this.getAttribute("imgIndex"));
            setCurrentIndex(imgInex);
        }
    }
    

    const getMovie = () => {
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=374f36fe5bb2ff5b88601ca6ff5247c6")
            .then(res => res.json())
            .then(json => setFeatureCard(json.results))
            .catch(error => console.error("Error fetching movies:", error));
    };

    useEffect(() => {
        getMovie();
    }, []);


    return (
        <div className="feature-sec">
            <>
                {featureCard.map((data, index) => {
                    if (index === currentIndex) {
                        return (
                            <img className='before' src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt='' key={index} />
                        );
                    }
                })}
            </>
            <div className="container">
                <div className="head">
                    <h4>Featured in KemitStream</h4>
                    <p>Best featured for you today</p>
                </div>
                <i className="fa fa-chevron-right scrole scrole-left" onClick={() => handleScroll('right')} ></i>
                <i className="fa fa-chevron-left scrole scrole-right" onClick={() => handleScroll('left')} ></i>
                <div className="features-cotainer">
                    <>
                        {featureCard.map((data, index) => {
                            if (index === currentIndex) {
                                return (
                                    <div className="text-box" key={index}>
                                        <h3>{data.original_title}</h3>
                                        <div className="rate">
                                            <img src={starIcon} alt="" />
                                            <p className="light">{data.vote_average}</p>
                                            <p className="dark"> | {data.release_date}</p>
                                        </div>
                                        <p className="descrition">{data.overview}</p>
                                        <div className="buttons">
                                            <button className="socndary-button">Play now</button>
                                            <button className="primary-button">Add Watchlist</button>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </>
                    <motion.div  className="feature-slider" ref={featureSlider} onLoad={handleLoad}>
                        <motion.div ref={container} className='inner-cur' drag="x" dragConstraints={{ right: 0, left: -width }} >
                            {featureCard.map((data, index ) => {
                                return (
                                    <div  className="feature-card   " key={index} >
                                        <img ref={el => imgElements.current[index] = el} className={`poster ${index === currentIndex ? 'active' : ''}`} src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="" />
                                    </div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSec;
