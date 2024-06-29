import { socialMedia } from "@/constants";
import { Button } from "./ui/button";
import authorImg from "/assets/users/avatar.jpg";
import { Link } from "react-router-dom";

const Author = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-5">
        <h2 className="capitalize text-xl font-bold mb-5 text-gray-900">
          meet the author
        </h2>
        <img
          src={authorImg}
          alt="author"
          className="aspect-square object-cover object-center rounded-lg"
        />
        <p className="text-sm">
          Gillion is a multi-concept theme that lets you create blog, magazine,
          news, review websites. With clean and functional design and lots of
          useful features theme will deliver amazing user experience to your
          clients and readers.
        </p>
        <Button
          variant={"outline"}
          className="uppercase text-xs tracking-wide font-semibold"
        >
          read more
        </Button>
      </div>
      <div>
        <h2 className="capitalize text-xl font-bold mb-5 text-gray-900">
          social media
        </h2>
        <div className="flex gap-5">
          {socialMedia.map((item) => {
            return (
              <Link to={""} key={item.id} className="text-gray-500 hover:text-gray-900">
                {item.icon}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Author;
