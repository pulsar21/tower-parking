import Slider from "react-slick";
import "./SlickSlider.scss";

export default function SlickSlider() {
    const settings = {
        dots: true
    };

    const sliders = [
        {id: 3, src: "/assets/img/sliders/slider_3.jpg"},
        {id: 1, src: "/assets/img/sliders/slider_1.jpg"},
        {id: 2, src: "/assets/img/sliders/slider_2.jpg"},
        {id: 3, src: "/assets/img/sliders/slider_4.jpg"},
        {id: 4, src: "/assets/img/sliders/slider_5.jpg"},
    ]
    return (
        <div className={"slider"}>
            <Slider {...settings}>
                {
                    sliders.map((slider) => (
                        <img key={slider.id} src={slider.src} alt="slider" className={"slider__item"}/>
                    ))
                }
            </Slider>
        </div>
    );
};