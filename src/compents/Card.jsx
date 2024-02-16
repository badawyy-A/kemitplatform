import { useState , useEffect , useRef } from "react";
import starIcon from '../img/icons8-star-48.png';

function CardCol(props) {
    const [sliderCard,setSliderCard] = useState([])
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
        <div className="card-container">
            {sliderCard.map((data,index)=>{
                        if (index > props.num && index < props.numm ){
                            return(
                                <div className="card" key={index}>
                                    <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="" className="poster" />
                                    <div className="text-box">
                                        <div className="pg"><p>PG-13</p></div>
                                        <h5>{data.original_title}</h5>
                                        <h5>{data.original_name}</h5>
                                        <div className="rate">
                                            <div className="light">
                                                <img src={starIcon} alt="" />
                                                <p>{data.vote_average}</p>
                                            </div>
                                            <p className="dark">| {props.type} </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
            })}
        </div>
     );
}

export default CardCol;