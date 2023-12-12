import Border from "../Border/Border";
import CardImage from "./CardImage";
import CardPrice from "./CardPrice";
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";

type Props = {
  Title: string;
  Price: number;
  Description: string;
  Image: any;
};

const Card = ({ Title, Price, Description, Image }: Props) => {
  return (
    <Border className="cursor-pointer hover:scale-[103%] transition-all w-[250px] h-auto bg-gradient-to-tr from-black-100 to-black-300 p-[15px]">
      <CardImage Image={Image} />
      <CardTitle Title={Title} />
      <CardPrice Price={Price} />
      <CardDescription Description={Description} />
    </Border>
  );
};

export default Card;
