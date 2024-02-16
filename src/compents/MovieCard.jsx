import { useEffect, useState } from "react"
import starIcon from '../img/icons8-star-48.png'
function MovieCard() {
    const [movieCard,setMovieCard] = useState([])
    const getMovie = ()=> {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=374f36fe5bb2ff5b88601ca6ff5247c6")
        .then(res => res.json())
        .then(json => setMovieCard(json.results))
    }
    useEffect(()=>{
        getMovie()
    },[])
    console.log(movieCard)
    return ( 
        <>
            {movieCard.map((data,index) => {
                return(
                    <div className="movie-card" key={index}>
                        <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="" />
                        <div className="card-content">
                            <h5>{data.original_title}</h5>
                            <div className="text-box">
                                <img src="" alt="" />
                                <p className="light"> <img src={starIcon} alt="" /> {data.vote_average}</p>
                                <p className="dark">Movie</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
     );
}

export default MovieCard;