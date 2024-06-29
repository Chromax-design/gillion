import { MainContainer } from "../components/ui/MainContainer";
import { SectionContainer } from "../components/ui/SectionContainer";
import { GenerateInput } from "../utils/GenerateInput";
import { TitleManager } from "../utils/TitleManager";

export const Contact: React.FC = () => {
  const headingStyle: string =
    "text-3xl font-bold uppercase tracking-wider text-center text-gray-950";
  const metaTitle: string = "Contact Us";
  const metaDescription: string = "Our contact us page";

  return (
    <>
      <TitleManager titleContent={metaTitle} description={metaDescription} />
      <MainContainer>
        <SectionContainer className="space-y-6">
          <h1 className={headingStyle}>contact us</h1>
          <form className=" space-y-3">
            <div className="grid grid-cols-[1fr,1fr] gap-5">
              <GenerateInput label="first name" id="fname" type="text" />
              <GenerateInput label="last name" id="lname" type="text" />
            </div>
            <GenerateInput label="message" id="message" cols={30} rows={10} />
            <p className="pt-6 pb-2 capitalize font-bold text-sm">
              thanks, we'll respond back by email and phone.
            </p>
            <GenerateInput label="mobile number" id="phone" type="tel" />
            <GenerateInput label="email address" id="email" type="email" />
          </form>
        </SectionContainer>
      </MainContainer>
    </>
  );
};
