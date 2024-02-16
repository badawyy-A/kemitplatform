import { useEffect, useState } from 'react';
import starIcon from '../img/icons8-star-48.png'

const PopluerCard = ()=>{
    const [popluerCardapi,setpopluerCardapi] = useState([])
    const getMovie = ()=> {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=374f36fe5bb2ff5b88601ca6ff5247c6")
        .then(res => res.json())
        .then(json => setpopluerCardapi(json.results))
    }
    useEffect(()=>{
        getMovie()
    },[])
    

    return(
        <>
            {popluerCardapi.map((data,index)=>{
                if (index >= 10 ){
                    return(
                        <div className="popluer-card" key={index}>
                            <span className="index">{index-9}</span>
                            <img className='main-img' src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="" />
                            <div className="text-box">
                                <span className="age">
                                    pg-13
                                </span>
                                <h5>{data.original_title}</h5>
                                <span className="type">
                                    <div className="sqwer"></div>
                                    <p className="dark">{data.release_date}</p>
                                </span>
                                <span className="rate">
                                    <p className="light"> <img src={starIcon} alt="" /> {data.vote_average}</p>
                                    <p className="dark">movie</p>
                                </span>
                            </div>
                        </div>
                    )
                }
})}
        </>        
    )
}
export default PopluerCard;