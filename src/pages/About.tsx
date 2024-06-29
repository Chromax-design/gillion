import { MainContainer } from "../components/ui/MainContainer";
import user from "/assets/users/avatar.jpg";
import { TitleManager } from "../utils/TitleManager";
import { SectionContainer } from "../components/ui/SectionContainer";

export const About: React.FC = () => {
  const imageAfter: string =
    "relative after:absolute after:top-0 after:left-0 after:bg-gray-200 after:h-full after:w-full after:-z-10 after:-translate-x-4 after:translate-y-4 after:rounded-lg after:shadow-xl";

  let paraData = [];
  for (let i = 0; i < 3; i++) {
    paraData.push(
      <p className="leading-7" key={i}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quod
        sapiente! Excepturi ad fugit iusto delectus saepe laudantium molestiae
        ratione sed in iure libero corrupti odit voluptas alias praesentium
        obcaecati eum, modi nulla eos quaerat. Earum quasi, nostrum tempore unde
        ipsam accusamus suscipit quibusdam maiores exercitationem modi nesciunt
        neque autem?
      </p>
    );
  }

  return (
    <>
      <TitleManager titleContent="About us" description="our about us page" />
      <MainContainer className="max-sm:space-y-8 space-y-16">
        <SectionContainer className="max-lg:p-2 grid grid-cols-1 sm:grid-cols-[1fr,1.5fr] gap-12 sm:gap-7 items-center">
          <div className={imageAfter}>
            <img
              src={user}
              alt="image"
              className="relative w-full rounded-lg aspect-ratio-2-3 object-cover shadow-xl"
            />
          </div>
          <div>
            <h1 className="capitalize text-2xl text-center sm:text-left sm:text-4xl font-bold">
              about me.
            </h1>
            <p className="my-3 sm:my-5 leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate necessitatibus doloremque inventore quos aperiam quam
              distinctio natus, aliquam aspernatur totam omnis maiores velit
              sequi corporis. Dolores distinctio deserunt doloribus animi totam
              sapiente, nemo, error ad incidunt velit placeat amet mollitia
              earum numquam facere illum quisquam labore officia aspernatur,
              veniam assumenda.
            </p>
          </div>
        </SectionContainer>
        <SectionContainer className="p-2 space-y-3">
          <h1 className="capitalize text-2xl sm:text-3xl font-bold text-center">
            Lorem ipsum dolor sit.
          </h1>
          <div className="space-y-3">{paraData.map((para) => para)}</div>
        </SectionContainer>
      </MainContainer>
    </>
  );
};
