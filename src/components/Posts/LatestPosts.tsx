import { Posts } from "@/services/Posts";
import Author from "../Author";
import SubscribeNow from "../SubscribeNow";

const LatestPosts = () => {
  return (
    <section className="py-10">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-8 space-y-5">
          <h2 className="capitalize text-2xl font-bold mb-10 text-gray-900">
            latest posts
          </h2>
          {Posts.map((item) => {
            return (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" key={item.id}>
                <div>
                  <img
                    src={item.imgUrl}
                    alt=""
                    className="size-full object-cover object-center rounded-lg"
                  />
                </div>
                <div className="space-y-3 py-2">
                  <span className="uppercase tracking-wider text-xs font-semibold text-yellow-500">
                    category
                  </span>
                  <h2 className="uppercase font-bold text-xl line-clamp-2">
                    {item.title}
                  </h2>
                  <p className="text-sm line-clamp-4">{item.excerpt}</p>
                  <div className=" text-xs tracking-wider font-medium text-gray-400">
                    Admin, {new Date().toLocaleDateString()}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-span-12 lg:col-span-4 space-y-10">
          <Author />
          <SubscribeNow />
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
