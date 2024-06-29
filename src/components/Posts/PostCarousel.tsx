import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Posts } from "../../assets/Posts";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useGetPostsQuery } from "../../services/api/PostSlice";
import { baseUrl } from "../../services/url";

const NextArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} z-10 text-white hover:text-white hover:bg-gray-600 bg-gray-500 right-0`}
      onClick={onClick}
    >
      <ArrowForwardIosIcon />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} z-10 text-white hover:text-white hover:bg-gray-600 bg-gray-500 left-0`}
      onClick={onClick}
    >
      <ArrowBackIosIcon />
    </div>
  );
};

export const PostCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const { data: Posts } = useGetPostsQuery("posts");
  const BaseUrl = `${baseUrl}/uploads/`;

  return (
    <Slider {...settings} className="max-w-7xl mx-auto mt-0 gap-2">
      {Posts?.map((item: any) => {
        return (
          <div className="relative" key={item.uuid}>
            <div className=" bg-gradient-to-r from-white from-40% h-full w-full absolute"></div>
            <img
              src={`${BaseUrl}${item.image}`}
              alt=""
              className="aspect-custom object-cover object-center min-h-[400px]"
            />
            <div className="absolute left-0 top-2/4 translate-y-[-50%] max-w-sm sm:max-w-xl lg:max-w-3xl flex flex-col justify-center items-start space-y-5 text-white p-10 z-10">
              <div className="absolute w-full h-full top-0 left-0 bg-gray-950 opacity-70 -z-10"></div>
              <div className="uppercase border-l-2 border-white px-2">
                {item.category}
              </div>
              <h2 className=" text-xl lg:text-4xl font-semibold capitalize">
                {item.title}
              </h2>
              <p className="max-lg:hidden">{item.description}</p>
              <Link
                to={`/blog/${item.uuid}`}
                className="capitalize px-4 py-2 border border-white text-white"
              >
                read more
              </Link>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};
