import { Helmet, HelmetProvider } from "react-helmet-async";

type TitleManagerType = {
  titleContent: string;
  description: string;
};

export const TitleManager: React.FC<TitleManagerType> = ({
  titleContent,
  description,
}) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{titleContent}</title>
        <meta name="description" content={description} />
      </Helmet>
    </HelmetProvider>
  );
};
