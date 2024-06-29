import { ChildrenType } from "../../utils/Types";

type MainContainertype = ChildrenType;
export const MainContainer: React.FC<MainContainertype> = ({
  children,
  className,
}) => (
  <main className={`py-5 px-3 ${className} max-sm:w-full lg:max-w-7xl mx-auto`}>
    {children}
  </main>
);
