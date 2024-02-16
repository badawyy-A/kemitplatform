import MovieSlide from "./MovieSlide"



const LandingPage = ()=> {
    const randomNumber = Math.floor(Math.random() * 20);

    const currentIndex = randomNumber
  


    return(
        <div className="landing-page">
            <div className="slider">
                <MovieSlide index={currentIndex} />
            </div>
        </div>

    )
}
export default  LandingPage;