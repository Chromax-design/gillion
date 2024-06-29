import { Posts } from "@/services/Posts";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="grid grid-cols-12 gap-5 pb-10 min-h-[500px]">
      {Posts[0] && (
        <div className="col-span-12 md:col-span-8 row-span-12 h-full relative rounded-md overflow-hidden">
          <img
            src={Posts[0].imgUrl}
            alt=""
            className="absolute top-0 left-0 size-full object-cover object-top brightness-75"
          />
          <div className="absolute top-0 left-0 size-full bg-gradient-to-t from-black/85 to-transparent" />
          <div className="absolute top-0 left-0 size-full object-cover overflow-hidden p-10 flex flex-col justify-end">
            <span className="text-yellow-500 uppercase font-bold text-xs tracking-widest">
              {Posts[0].category}
            </span>
            <Link to={""}>
              <h2 className="text-white text-lg md:text-2xl font-semibold capitalize leading-7 tracking-wide mt-2 line-clamp-3 hover:underline underline-offset-auto">
                {Posts[0].title}
              </h2>
            </Link>
            <div className="text-xs text-white font-light mt-5 tracking-widest">
              <p>Admin, {Posts[0].date.toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      )}
      {Posts[1] && (
        <div className="col-span-12 md:col-span-4 row-span-12 md:row-span-6 h-full relative rounded-md overflow-hidden">
          <img
            src={Posts[1].imgUrl}
            alt=""
            className="absolute top-0 left-0 size-full object-cover object-top brightness-75"
          />
          <div className="absolute top-0 left-0 size-full bg-gradient-to-t from-black/85 to-transparent" />
          <div className="absolute top-0 left-0 size-full object-cover overflow-hidden p-10 flex flex-col justify-end">
            <span className="text-yellow-500 uppercase font-bold text-xs tracking-widest">
              {Posts[1].category}
            </span>
            <Link to={""}>
              <h2 className="text-white text-lg font-semibold capitalize leading-5 tracking-wide mt-2 line-clamp-3 hover:underline underline-offset-auto">
                {Posts[1].title}
              </h2>
            </Link>
            <div className="text-xs text-white font-light mt-5 tracking-widest">
              <p>Admin, {Posts[2].date.toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      )}
      {Posts[2] && (
        <div className="col-span-12 md:col-span-4 row-span-12 md:row-span-6 h-full relative rounded-md overflow-hidden">
          <img
            src={Posts[2].imgUrl}
            alt=""
            className="absolute top-0 left-0 size-full object-cover object-top brightness-75"
          />
          <div className="absolute top-0 left-0 size-full bg-gradient-to-t from-black/85 to-transparent" />
          <div className="absolute top-0 left-0 size-full object-cover overflow-hidden p-10 flex flex-col justify-end">
            <span className="text-yellow-500 uppercase font-bold text-xs tracking-widest">
              {Posts[2].category}
            </span>
            <Link to={''}>
            <h2 className="text-white text-lg font-semibold capitalize leading-5 tracking-wide mt-2 line-clamp-3 hover:underline underline-offset-auto">
              {Posts[2].title}
            </h2></Link>
            <div className="text-xs text-white font-light mt-5 tracking-widest">
              <p>Admin, {Posts[2].date.toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
