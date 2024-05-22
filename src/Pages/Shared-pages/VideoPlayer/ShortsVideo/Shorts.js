import React from 'react';
import ReactPlayer from 'react-player';
import './Shorts.css';
// import { Carousel } from 'flowbite-react';
import Slider from 'react-slick';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Shorts = () => {

    var settings = {
        dots: true,
        infinite: true,
        // speed: 300,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        autoplayspeed: 2000,
        pauseOnHover: true,
        // initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (



        <div className=' p-5 lg:px-36'>

            <Slider {...settings}>

                <ReactPlayer
                    className="playerStyle"
                    url={"https://www.youtube.com/watch?v=hWVJucr3Il8"}
                    width={"180px"}
                    height={"250px"}
                    style={{}}
                    controls={false}
                    volume={null}
                />


                <ReactPlayer
                    className="playerStyle"
                    url={"https://www.youtube.com/watch?v=Dt4Zs0lhnCM"}
                    width={"180px"}
                    height={"250px"}
                    style={{}}
                    controls={false}
                    volume={null}
                />

                <ReactPlayer
                    className="playerStyle"
                    url={"https://www.youtube.com/watch?v=7WrHNF9KKso"}
                    width={"180px"}
                    height={"250px"}
                    style={{}}
                    controls={false}
                    volume={null}
                />

                <ReactPlayer
                    className="playerStyle"
                    url={"https://www.youtube.com/watch?v=-WyyrKbUruA"}
                    width={"180px"}
                    height={"250px"}
                    style={{}}
                    controls={false}
                    volume={null}
                />

                <ReactPlayer
                    className="playerStyle"
                    url={"https://www.youtube.com/watch?v=tTJzrAoLuS4"}
                    width={"180px"}
                    height={"250px"}
                    style={{}}
                    controls={false}
                    volume={null}
                />

                <ReactPlayer
                    className="playerStyle"
                    url={"https://www.youtube.com/watch?v=N1K_rfpHfw8"}
                    width={"180px"}
                    height={"250px"}
                    style={{}}
                    controls={false}
                    volume={null}
                />

                <ReactPlayer
                    className="playerStyle"
                    url={"https://www.youtube.com/watch?v=UKsm7nK_zDQ"}
                    width={"180px"}
                    height={"250px"}
                    style={{}}
                    controls={false}
                    volume={null}
                />

                <ReactPlayer
                    className="playerStyle"
                    url={"https://www.youtube.com/watch?v=BDEyCkOyUq4"}
                    width={"180px"}
                    height={"250px"}
                    style={{}}
                    controls={false}
                    volume={null}
                />

                <ReactPlayer
                    className="playerStyle"
                    url={"https://www.youtube.com/watch?v=JzLoo8cFJBI"}
                    width={"180px"}
                    height={"250px"}
                    style={{}}
                    controls={false}
                    volume={null}
                />

                <ReactPlayer
                    className="playerStyle"
                    url={"https://www.youtube.com/watch?v=B9VbKOfAFUQ"}
                    width={"180px"}
                    height={"250px"}
                    style={{}}
                    controls={false}
                    volume={null}
                />

                <ReactPlayer
                    className="playerStyle"
                    url={"https://www.youtube.com/watch?v=ntDq2VeJr9Q"}
                    width={"180px"}
                    height={"250px"}
                    style={{}}
                    controls={false}
                    volume={null}
                />

                <ReactPlayer
                    className="playerStyle"
                    url={"https://www.youtube.com/watch?v=40b7rFjwPwY"}
                    width={"180px"}
                    height={"250px"}
                    style={{}}
                    controls={false}
                    volume={null}
                />
            </Slider>

        </div>
    );
};

export default Shorts;