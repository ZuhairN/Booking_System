import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DayCell from "./DayCell";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "transparent", ':before': { display: 'none' } }}
            onClick={onClick}
        >
            <MdArrowForwardIos className='Slider__arrow' />
        </div >
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "transparent" }}
            onClick={onClick}
        >
            <MdArrowBackIosNew className='Slider__arrow' />
        </div>
    );
}
export default function DaySlider({ schedule, toggleDays }) {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2
                }
            },
        ]
    };

    return (
        <Slider {...settings}>
            {schedule.map((day, i) => i !== 0 ? <DayCell key={i} id={i} handleClick={toggleDays} {...day.availability} /> : null)}
        </Slider>
    )
}
