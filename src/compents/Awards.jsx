import { useRef } from "react";
import { useState,useEffect } from "react";
import starIcon from '../img/icons8-star-48.png';

function Awards() {
    const [curIndex,setCurIndex] = useState(0)
    const [sliderCard,setSliderCard] = useState([])
    const left = useRef()
    const right = useRef()

    const getMovie = () => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=374f36fe5bb2ff5b88601ca6ff5247c6`)
            .then(res => res.json())
            .then(json => setSliderCard(json.results))
            .catch(error => console.error("Error fetching movies:", error));
    };

    useEffect(() => {
        getMovie();
    }, []);

    const handleMoveRight = ()=>{
        if(curIndex, curIndex === 19){
            return false
        }else{
            const newIndex = curIndex + 1;
            setCurIndex(newIndex)
        }
    } 
    const handleMoveleft = ()=>{
        if(curIndex, curIndex === 0){
            return false
        }else{
            const newIndex = curIndex - 1;
            setCurIndex(newIndex)
        }
    } 
    return ( 
        <div className="movie-awards">
            <div className="head">
                <h5>Movies On Awards</h5>
                <div className="scroll-controls">
                <i ref={left} className="fa fa-chevron-left scrole scrole-right" onClick={handleMoveleft}></i>
                <i ref={right} className="fa fa-chevron-right scrole scrole-left" onClick={handleMoveRight}></i>
                </div>
            </div>
            <>
                {sliderCard.map((data,index)=>{
                    if (index === curIndex){
                        return(
                            <div className="info-box" key={index}>
                                <img className="award-img" src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt="" />
                                <span className="best-bic">
                                    Best pictures
                                </span>
                                <div className="text-box">
                                    <h3>{data.original_title}</h3>
                                    <div className="rate">
                                        <div className="light">
                                            <img src={starIcon} alt="" />
                                            <p>{data.vote_average}</p>
                                        </div>
                                        <p className="dark">| Movie | {data.release_date}</p>
                                    </div>
                                    <p className="description">{data.overview}</p>
                                    <div className="buttons">
                                            <button className="socndary-button">Play now</button>
                                            <button className="primary-button">Add Watchlist</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                })}
            </>
        </div>
     );
}

export default Awards;