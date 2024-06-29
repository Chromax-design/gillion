type PostExcerptType = {
  excerpt: string;
};

export const PostExcerpt: React.FC<PostExcerptType> = ({ excerpt }) => {
  return (
    <>
      <p className="text-gray-600 line-clamp-4 overflow-y-hidden text-sm leading-6">
        {excerpt}
      </p>
    </>
  );
};
