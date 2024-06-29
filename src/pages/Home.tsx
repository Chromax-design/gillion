import Hero from "@/components/Posts/Hero";
import { TitleManager } from "../utils/TitleManager";
import AuthorsPicks from "@/components/Posts/AuthorsPicks";
import LatestPosts from "@/components/Posts/LatestPosts";

// import { PreloaderPortal } from "../components/Preloader/PreloaderPortal";

export const Home: React.FC = () => {
  return (
    <>
      {/* {!isSuccess && <PreloaderPortal />} */}
      <TitleManager
        titleContent="Home"
        description="welcome to our home page"
      />
      <main className="max-w-6xl mx-auto py-10 px-3">
        <Hero />
        <AuthorsPicks />
        <LatestPosts />
      </main>
    </>
  );
};
