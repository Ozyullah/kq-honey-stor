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
                    url={"https://www.youtube.com/watch?v=5_A4J-1dOFE"}
                    width={"180px"}
                    height={"250px"}
                    style={{}}
                    controls={false}
                    volume={null}
                />


                <ReactPlayer
                    className="playerStyle"
                    url={"https://www.youtube.com/watch?v=ECfUt54e7bE"}
                    width={"180px"}
                    height={"250px"}
                    style={{}}
                    controls={false}
                    volume={null}
                />

                <ReactPlayer
                    className="playerStyle"
                    url={"https://www.youtube.com/watch?v=Bulj52rd6yE"}
                    width={"180px"}
                    height={"250px"}
                    style={{}}
                    controls={false}
                    volume={null}
                />

                <ReactPlayer
                    className="playerStyle"
                    url={"https://www.youtube.com/watch?v=GCFPl1fqYvw"}
                    width={"180px"}
                    height={"250px"}
                    style={{}}
                    controls={false}
                    volume={null}
                />

                <ReactPlayer
                    className="playerStyle"
                    url={"https://www.youtube.com/watch?v=GCFPl1fqYvw"}
                    width={"180px"}
                    height={"250px"}
                    style={{}}
                    controls={false}
                    volume={null}
                />

                <ReactPlayer
                    className="playerStyle"
                    url={"https://www.youtube.com/watch?v=GCFPl1fqYvw"}
                    width={"180px"}
                    height={"250px"}
                    style={{}}
                    controls={false}
                    volume={null}
                />

                <ReactPlayer
                    className="playerStyle"
                    url={"https://www.youtube.com/watch?v=GCFPl1fqYvw"}
                    width={"180px"}
                    height={"250px"}
                    style={{}}
                    controls={false}
                    volume={null}
                />

                <ReactPlayer
                    className="playerStyle"
                    url={"https://www.youtube.com/watch?v=GCFPl1fqYvw"}
                    width={"180px"}
                    height={"250px"}
                    style={{}}
                    controls={false}
                    volume={null}
                />

                <ReactPlayer
                    className="playerStyle"
                    url={"https://www.youtube.com/watch?v=GCFPl1fqYvw"}
                    width={"180px"}
                    height={"250px"}
                    style={{}}
                    controls={false}
                    volume={null}
                />

                <ReactPlayer
                    className="playerStyle"
                    url={"https://www.youtube.com/watch?v=GCFPl1fqYvw"}
                    width={"180px"}
                    height={"250px"}
                    style={{}}
                    controls={false}
                    volume={null}
                />

                <ReactPlayer
                    className="playerStyle"
                    url={"https://www.youtube.com/watch?v=GCFPl1fqYvw"}
                    width={"180px"}
                    height={"250px"}
                    style={{}}
                    controls={false}
                    volume={null}
                />

                <ReactPlayer
                    className="playerStyle"
                    url={"https://www.youtube.com/watch?v=SWI-GTVKCcM"}
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