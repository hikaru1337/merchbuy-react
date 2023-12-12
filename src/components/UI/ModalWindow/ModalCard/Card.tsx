import Border from "../../Border/Border";
import CardImage from "../../Card/CardImage";
import CardTitle from "../../Card/CardTitle";
import CardPrice from "../../Card/CardPrice";
import CardDescription from "../../Card/CardDescription";
import { AlbumCover } from "../../../../utils/types";

type Props = {
    modalCard:AlbumCover;
  }

const Card = ({ modalCard }:Props) => {
    return (
      <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
          <div className="gap-[15px] flex">
  
            <Border className="w-[250px] h-auto bg-gradient-to-tr from-black-100 to-black-300 p-[15px] flex justify-center">
              <CardImage Photo={modalCard.Photo} />
            </Border>
            
            <div className="flex flex-col gap-[15px]">
              <Border className="bg-gradient-to-tr from-black-100 to-black-300 p-[15px] w-[250px] h-[209px]">
                <CardTitle Title={modalCard.Title} />
                <CardPrice Price={modalCard.Price} />
                <CardDescription Description={modalCard.Description} Modal={true} />
              </Border>
  
              <div className="flex flex-row gap-[15px]">
              <Border className="cursor-pointer hover:scale-[105%] transition-all duration-500 delay-0 ease-out-expo w-full">
                  <button className="text-white-200 bg-gradient-to-tr from-black-100 to-black-300 rounded-[25px] text-[14px] font-GothamRegular flex items-center justify-center py-[5px] px-[15px] w-full min-w-fit">
                    Cart
                  </button>
                </Border>
                <Border className="cursor-pointer hover:scale-[105%] transition-all duration-500 delay-0 ease-out-expo w-full">
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

  export default Card;