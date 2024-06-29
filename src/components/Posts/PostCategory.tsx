import { Link } from "react-router-dom";
import { ChildrenType } from "../../utils/Types";

type PostCategoryType = ChildrenType;

export const PostCategory: React.FC<PostCategoryType> = ({
  children,
}) => {
  const PostCategoryStyle: string =
    "relative text-xs font-semibold uppercase after:absolute after:h-[1px] after:w-full after:bg-gray-400 after:top-[50%] after:left-full after:translate-x-full after:-translate-y-[50%] before:absolute before:h-[1px] before:w-full before:bg-gray-400 before:top-[50%] before:-translate-y-[50%] before:right-full before:-translate-x-full";

  return (
    <Link to={''} className="flex justify-center">
      <div className={PostCategoryStyle}>{children}</div>
    </Link>
  );
};
