import { Link } from "react-router-dom";
import { PostCategory } from "./PostCategory";
import { AuthorBlock } from "./AuthorBlock";

type PostHeaderType = {
  id: string | undefined;
  category: string;
  title: string;
  author: string;
  date: Date;
  isLink?: boolean;
};

export const PostHeader: React.FC<PostHeaderType> = ({
  category,
  title,
  author,
  date,
  isLink,
  id
}) => {
  return (
    <>
      <div
        className={`${
          isLink && "border-b border-dashed"
        } " py-5 space-y-3 px-3"`}
      >
        <PostCategory>{category}</PostCategory>
        {isLink ? (
          <Link
            to={`/blog/${id}`}
            className="text-xl capitalize text-center font-semibold block"
          >
            <h1>{title}</h1>
          </Link>
        ) : (
          <h1 className="text-xl capitalize text-center font-semibold block">
            {title}
          </h1>
        )}
      </div>
      <AuthorBlock author={author} date={date} />
    </>
  );
};
