import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = (props) => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }

    return (
        <Carousel {...settings}>
            <Wrap>
                <a>
                    <img src="./images/slider-avtar.jpg" alt="" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="./images/slider-mindy.jpg" alt="" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="./images/slider-jabmilatu.jpg" alt="" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="./images/slider-fa.jpg" alt="" />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src="./images/slider-ashok.jpg" alt="" />
                </a>
            </Wrap>

        </Carousel>
    )
}

const Carousel = styled(Slider)`

    margin-top: 50px;
    padding: 8px;
    width: 900px;
    border-radius: 10px;

    .slick-list {
        overflow: initial;
    }

    .Slick-list{
        overflow: initial;
    }

    .slick-prev {
        left: -100px;
    }

    .slick-next {
        right: -1000px;
    }

    @media (max-width: 768px) {
        width: 600px;
        height: 200px;
    }

    @media (max-width: 560px) {
        width: 300px;
        height: 200px;
    }
    
`;

const Wrap = styled.div`
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    a{
        border-radius: 20px;
        cursor: pointer;
        position: relative;
        display:block;

        overflow: hidden;
        margin-left: 15px;

        img{
            width: 100%;
            height: 100%;
            overflow: hidden;
        }


    }

    @media (max-width: 768px) {
        
    }
`;

export default ImgSlider;