const Hero = () => {
    return ( 
        <div className="hero-container one">
            <div className="hero-message">
                <p className="text">
                Fast, Fresh, Fabulous
                    <span> Burgers.</span>
                </p>
                <p className="text-two">
                Feast on the best burgers in town. Order now for a delicious experience delivered straight to you.
                </p>
            </div>
            <div className="button">
                <a href="/" className="btn-link">View More</a>
                <a href="/" className="btn-link link-two">Order Now</a>
            </div>
        </div>
     );
}
 
export default Hero;