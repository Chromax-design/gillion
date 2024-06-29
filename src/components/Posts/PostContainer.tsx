import { ChildrenType } from "../../utils/Types";

type PostContainerType = ChildrenType;

export const PostContainer: React.FC<PostContainerType> = ({ children, className }) => (
  <section className="max-w-4xl mx-auto">
    <article className={`space-y-3 ${className}`}>{children}</article>
  </section>
);
