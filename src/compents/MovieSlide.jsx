import React, {useEffect, useState} from "react"

function MovieSlide(props) {
    const [movielist,setMovieList] = useState([])
    const getMovie = ()=> {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=374f36fe5bb2ff5b88601ca6ff5247c6")
        .then(res => res.json())
        .then(json => setMovieList(json.results))
    }
    useEffect(()=>{
        getMovie()
    },[])
    return ( 
        <>
            {movielist.map((data, index) => {
                if (index === props.index) {
                    return (
                        <div className="slide" key={index}>
                            <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt="" className="background" />
                            <div className="container">
                                <div className="text-box">
                                    <span className="type">Movie</span>
                                    <h3>{data.original_title}</h3>
                                    <p className="dark">Realest at {data.release_date}</p>
                                    <p className="light">{data.overview}</p>
                                </div>
                                <div className="buttons" >
                                    <button className="socndary-button"><i className="fa fa-play-circle"></i><a href="#/">Watch Trailer</a></button>
                                    <button className="primary-button"><i className="fa fa-bookmark-o"></i> Add Watchlist</button>
                                </div>

                            </div>
                        </div>
                    );
                }
                return null; 
            })}
        </>
    );
    
}

export default MovieSlide;

