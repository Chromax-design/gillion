import { ChildrenType } from "../../utils/Types";

type ContainerType = ChildrenType;
export const ContainerLarge: React.FC<ContainerType> = ({ children, className }) => {
  return (
    <div className={`w-full xl:max-w-7xl mx-auto px-3 py-3 ${className}`}>{children}</div>
  );
};
