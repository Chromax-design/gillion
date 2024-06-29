import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Link } from "react-router-dom";

type authorBlockType = {
  author: string;
  date: Date;
};

export const AuthorBlock: React.FC<authorBlockType> = ({ author, date }) => {
  const dbDate = new Date(date);
  const formattedDate = dbDate.toLocaleString('en-US', {day: '2-digit', month: 'long', year: 'numeric'})
  return (
    <div className="text-xs text-gray-500 font-semibold capitalize flex justify-center gap-2 items-center">
      <div>
        by{" "}
        <Link to={""} className="uppercase text-gray-700">
          {author}
        </Link>
      </div>
      <div>
        <AccessTimeIcon style={{ fontSize: "1.2em" }} />{" "}
        <span>{formattedDate}</span>
      </div>
    </div>
  );
};
