import { useParams } from "react-router-dom";
import { MainContainer } from "../components/ui/MainContainer";
import { PostHeader } from "../components/Posts/PostHeader";
// import { Posts } from "../assets/Posts";
import { PostFooter } from "../components/Posts/PostFooter";
import { TitleManager } from "../utils/TitleManager";
import { GenerateInput } from "../utils/GenerateInput";
import { useGetPostQuery } from "../services/api/PostSlice";
import { useGetUserQuery } from "../services/api/UserSlice";
import { SectionContainer } from "../components/ui/SectionContainer";
import { baseUrl } from "../services/url";
import { PreloaderPortal } from "../components/Preloader/PreloaderPortal";

export const BlogDetails: React.FC = () => {
  const { postId } = useParams();
  const { data: Post, isSuccess } = useGetPostQuery(postId);
  const { data: author } = useGetUserQuery("user");
  const BaseUrl = `${baseUrl}/uploads`;

  return (
    <>
     {!isSuccess && <PreloaderPortal />}
      <TitleManager
        titleContent={`${Post?.title ? `${'Blog | ' + Post?.title }`: 'Gwen'}`}
        description={Post?.description}
      />
      <MainContainer className="space-y-5">
        <SectionContainer>
          <img
            src={`${BaseUrl}/${Post?.image}`}
            alt=""
            className="w-full aspect-custom object-cover object-center"
          />
          <PostHeader
            category={Post?.category}
            title={Post?.title}
            author={author}
            date={Post?.created_at}
            isLink={false}
            id={Post?.uuid}
          />
          <div
            className="space-y-4 mt-5 leading-7 post-container"
            dangerouslySetInnerHTML={{ __html: Post?.postContent }}
          ></div>
        </SectionContainer>
        <SectionContainer>
          <PostFooter />
        </SectionContainer>
        <SectionContainer className="space-y-5">
          <h2 className="uppercase font-bold tracking-wider">leave a reply</h2>
          <form className="space-y-3">
            <div className="grid max-sm:grid-cols-1 grid-cols-[1fr,1fr] gap-5">
              <GenerateInput label="your name" id="name" type="text" />
              <GenerateInput label="email" id="email" type="email" />
            </div>
            <GenerateInput label="comment" id="comment" cols={30} rows={10} />
          </form>
        </SectionContainer>
      </MainContainer>
    </>
  );
};
