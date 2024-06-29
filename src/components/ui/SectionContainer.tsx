import { ChildrenType } from "../../utils/Types";

type BlogContainerProps = ChildrenType;

export const SectionContainer: React.FC<BlogContainerProps> = ({
  children,
  className,
}) => {
  return (
    <section className={`max-w-4xl mx-auto ${className}`}>{children}</section>
  );
};
