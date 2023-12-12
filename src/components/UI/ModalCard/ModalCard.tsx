import Border from "../Border/Border";
import CardDescription from "../Card/CardDescription";
import CardImage from "../Card/CardImage";
import CardPrice from "../Card/CardPrice";
import CardTitle from "../Card/CardTitle";
import { createPortal } from "react-dom";

type Props = {
  Image: any;
  Title: string;
  Price: number;
  Description: string;
};

/*
    AddWishlist: (Id:number) => void;
    AddCart: (Id:number) => void;*/

const BackDrop = () => {
  return <div className="w-full h-[100vh] fixed left-0 top-0 bg-black-100 bg-opacity-80 backdrop-blur-sm"></div>
}

const Card = ({ Image, Title, Price, Description }: Props) => {
  return (
    <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
        <div className="gap-[15px] flex">

          <Border className="w-[250px] h-auto bg-gradient-to-tr from-black-100 to-black-300 p-[15px] flex justify-center">
            <CardImage Image={Image} />
          </Border>
          
          <div className="flex flex-col gap-[15px]">
            <Border className="bg-gradient-to-tr from-black-100 to-black-300 p-[15px] w-[250px] h-[209px]">
              <CardTitle Title={Title} />
              <CardPrice Price={Price} />
              <CardDescription Description={Description} Modal={true} />
            </Border>

            <div className="flex flex-row gap-[15px]">
            <Border className="hover:scale-105 transition-all cursor-pointer w-full">
                <button className="text-white-200 bg-gradient-to-tr from-black-100 to-black-300 rounded-[25px] text-[14px] font-GothamRegular flex items-center justify-center py-[5px] px-[15px] w-full min-w-fit">
                  Cart
                </button>
              </Border>
              <Border className="hover:scale-105 transition-all cursor-pointer w-full">
                <button className="text-white-200 bg-gradient-to-tr from-black-100 to-black-300 rounded-[25px] text-[14px] font-GothamRegular flex items-center justify-center py-[5px] px-[15px] w-full min-w-fit">
                  Wishlist
                </button>
              </Border>
            </div>

          </div>
        </div>
      </div>
  )
}

const ModalCard = ({ Image, Title, Price, Description }: Props) => {
  return (
    <>
      {
        createPortal(<BackDrop/>, document.getElementById("BackDrop")!)
      }
      {
        createPortal(<Card Title={Title} Image={Image} Price={Price} Description={Description}/>, document.getElementById("Card")!)
      }
    </>
  );
};

export default ModalCard;



/*

<div className="absolute z-50">
      <div className="w-full h-[100vh] fixed left-0 top-0 bg-black-100 bg-opacity-80 backdrop-blur-sm"></div>

      <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3">
        <div className="gap-[15px] flex">

          <Border className="w-[250px] h-auto bg-gradient-to-tr from-black-100 to-black-300 p-[15px]">
            <CardImage Image={Image} />
          </Border>
          
          <div className="flex flex-col gap-[15px]">
            <Border className="bg-gradient-to-tr from-black-100 to-black-300 p-[15px] w-[250px] h-[209px]">
              <CardTitle Title={Title} />
              <CardPrice Price={Price} />
              <CardDescription Description={Description} Modal={true} />
            </Border>

            <div className="flex flex-row gap-[15px]">
            <Border className="hover:scale-105 transition-all cursor-pointer w-full">
                <button className="text-white-200 bg-gradient-to-tr from-black-100 to-black-300 rounded-[25px] text-[14px] font-GothamRegular flex items-center justify-center py-[5px] px-[15px] w-full min-w-fit">
                  Cart
                </button>
              </Border>
              <Border className="hover:scale-105 transition-all cursor-pointer w-full">
                <button className="text-white-200 bg-gradient-to-tr from-black-100 to-black-300 rounded-[25px] text-[14px] font-GothamRegular flex items-center justify-center py-[5px] px-[15px] w-full min-w-fit">
                  Wishlist
                </button>
              </Border>
            </div>

          </div>
        </div>
      </div>
    </div>

*/