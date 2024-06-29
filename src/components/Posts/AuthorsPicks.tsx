import { Posts } from "../../services/Posts";
import {
  Card,
  // CardContent,
  //   CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { PostType } from "@/utils/Types";

const AuthorsPicks = () => {
  return (
    <section className="py-10">
      <h2 className="capitalize text-2xl font-bold mb-10 text-gray-900">
        author's picks
      </h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5 ">
        {Posts?.map((post: PostType) => {
          return (
            <Card className="overflow-hidden" key={post.id}>
              <Link to={""} className="overflow-hidden aspect-video block">
                <img
                  src={`${post.imgUrl}`}
                  alt=""
                  className="size-full object-cover object-center hover:scale-105 transition-transform"
                />
              </Link>
              <CardHeader>
                <span className="text-yellow-500 uppercase tracking-wider text-xs font-semibold">category</span>
                <CardTitle>
                  <Link to={""} className="text-sm uppercase line-clamp-2">{post.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardFooter>
                <div className=" text-xs tracking-wider font-medium">
                  Admin, {new Date().toLocaleDateString()}
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default AuthorsPicks;
