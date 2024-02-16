import { motion } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';
import starIcon from '../img/icons8-star-48.png';
function Slider(props) {
    const [sliderCard,setSliderCard] = useState([])
    const slide = useRef()
    const [width,setWidth] = useState(0)
    const getMovie = () => {
        fetch(`${props.api}?api_key=374f36fe5bb2ff5b88601ca6ff5247c6`)
            .then(res => res.json())
            .then(json => setSliderCard(json.results))
            .catch(error => console.error("Error fetching movies:", error));
    };

    const handleOnLoad = ()=>{
        const newWidth = slide.current.scrollWidth - slide.current.offsetWidth;
        setWidth(newWidth);
    }

    const handleScroll = (d)=>{
        const scrollAmount = d === 'left' ? -700 : 700
        slide.current.scrollTo({
            left: slide.current.scrollLeft + scrollAmount,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        getMovie();
    }, []);
    console.log(sliderCard)
    return ( 
        <div className="slider">
            <div className="container">
                <h3>{props.head}</h3>
                <i className="fa fa-chevron-right scrole scrole-left" onClick={()=>handleScroll("right")} ></i>
                <i className="fa fa-chevron-left scrole scrole-right" onClick={()=>handleScroll("left")} ></i>
                <motion.div  className="slide" ref={slide}  onLoad={handleOnLoad}>
                    <motion.div  className="inner-cur"  drag="x" dragConstraints={{right:0, left: -width}} >
                        {sliderCard.map((data,index)=>{
                            return(
                                
                                <div className="card" key={index}>
                                    <img className='poster' src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="" />
                                    <div className="text-box">
                                        <h5>{data.original_title}</h5>
                                        <h5>{data.original_name}</h5>
                                        <div className="rate">
                                            <img src={starIcon} alt="" />
                                            <div className="light">
                                                <p>{data.vote_average}</p>
                                            </div>
                                            <div className="dark">
                                                <p>| {props.type}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            )
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </div>
     );
}

export default Slider;