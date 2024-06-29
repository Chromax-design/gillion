import { Link } from "react-router-dom";
import { MainContainer } from "../components/ui/MainContainer";

export const Error404: React.FC = () => {
  return (
    <MainContainer className="text-center">
      <h1 className="text-9xl font-bold">404</h1>
      <p className="text-5xl text-slate-500 font-semibold">
        Something went wrong
      </p>
      <p className="mt-10 text-2xl">
        We couldn't find the page you're looking for. Try searching or go back
        to the{" "}
        <Link to={"/"} className="text-slate-500">
          Homepage
        </Link>
        .
      </p>
      <form className="mt-10">
        <input
          type="text"
          className="w-full p-3 border border-gray-200 rounded-sm"
        />
        <div className="flex justify-center align-center mt-4">
        </div>
      </form>
    </MainContainer>
  );
};
