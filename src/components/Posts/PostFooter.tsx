import { Link } from "react-router-dom";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

export const PostFooter: React.FC = () => {
  const styles: string =
    "relative after:w-[2px] after:h-5 after:bg-gray-400 after:absolute after:top-[50%] after:-translate-y-[50%] after:-left-full after:translate-x-full before:w-[2px] before:h-5 before:bg-gray-400 before:absolute before:top-[50%] before:-translate-y-[50%] before:-right-full before:translate-x-full";
  const bubbleStyles: object = {
    color: "#f1f1f1",
    fontSize: "60px",
  };
  const floatStyle: string =
    "bg-gray-950 text-white rounded-full flex justify-center items-center text-sm w-8 h-8 text-center absolute top-0 right-0";

  return (
    <div className="flex justify-between items-center py-4 max-sm:hidden">
      <div className="relative">
        <div className={styles}>
          <ChatBubbleIcon style={bubbleStyles} />
          <span className={floatStyle}>2</span>
        </div>
      </div>
      <div className="flex gap-2 text-sm capitalize text-gray-600">
        <Link to={""}>#fashion</Link>
        <Link to={""}>#health</Link>
        <Link to={""}>#lifestyle</Link>
      </div>
    </div>
  );
};
