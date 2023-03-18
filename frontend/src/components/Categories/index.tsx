import Category from "./Category"
import CategoryImg from "../../resources/categories-img/photo-1575936123452-b67c3203c357.jpeg"
import {BiDotsHorizontalRounded} from "react-icons/bi"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ResponsiveSection from "../Layout/Responsive";

interface CategoriesProps {

}

function SampleNextArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white rounded-full focus:outline-none absolute top-1/2 right-0 transform -translate-y-1/2 z-10`}
        style={{ ...style }}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M8.707 7.707a1 1 0 011.414 0L14.414 12l-4.293 4.293a1 1 0 01-1.414-1.414L11.586 12 8.707 9.121a1 1 0 010-1.414z" />
        </svg>
      </div>
    );
  }
  
  function SamplePrevArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white rounded-full focus:outline-none absolute top-1/2 left-0 transform -translate-y-1/2 z-10`}
        style={{ ...style }}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M15.293 16.293a1 1 0 01-1.414 0L9.586 12l4.293-4.293a1 1 0 00-1.414-1.414l-5 5a1 1 0 000 1.414l5 5a1 1 0 001.414-1.414z" />
        </svg>
      </div>
    );
  }

const Categories:React.FC<CategoriesProps> = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        arrows:false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                arrows:false,
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
            },
            {
                breakpoint: 872,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                },
            },
            
            {
                breakpoint: 1240,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                },
            },
            {
                breakpoint: 1520,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                },
              },
            {
                breakpoint: 1700,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              },
            },
              
          ],
      };
    return (
      <ResponsiveSection addClass="flex-col bg-third-bg ">
            <div className="categories-header text-left text-third-font uppercase mb-2">
                <h2 className="text-sm">Categories</h2>
            </div>
            <div className="flex flex-col lg:flex-row justify-between">
            <Slider {...settings}  className="categories-items flex flex-row gap-4 w-full mx-auto  lg:w-11/12">


                <Category image={CategoryImg.src} title="photography" alt="photography" />
                <Category image={CategoryImg.src} title="photography" alt="photography" />
                <Category image={CategoryImg.src} title="photography" alt="photography" />
                <Category image={CategoryImg.src} title="photography" alt="photography" />
                <Category image={CategoryImg.src} title="photography" alt="photography" />
                <Category image={CategoryImg.src} title="photography" alt="photography" />
                <Category image={CategoryImg.src} title="photography" alt="photography" />
                <Category image={CategoryImg.src} title="photography" alt="photography" />
        
                
    
            </Slider>
            <div className="category bg-second-bg rounded-md cursor-pointer w-full hover:bg-primary-bg flex items-center justify-center lg:relative  lg:w-24 mt-2 lg:mt-0">
                <div className=" lg:absolute lg:ml-auto lg:mr-auto lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 py-2">
                    <h3 className="text-primary-font text-sm ">
                        All
                    </h3>
                    <BiDotsHorizontalRounded className="text-primary-font text-lg "/>
                </div>
            </div>
        </div>
            
        </ResponsiveSection>
    )
}

export default Categories