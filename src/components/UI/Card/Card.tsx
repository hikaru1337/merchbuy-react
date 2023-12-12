import Border from "../Border/Border";
import CardImage from "./CardImage";
import CardPrice from "./CardPrice";
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";
import { albumCovers } from "../../../data/albumCover";
import { AlbumCover } from "../../../utils/types";
import { EnumModalWindow } from "../ModalWindow/ModalWindow";
import { ModalAction } from "../ModalWindow/ModalWindow";

type Props = {
  Item: AlbumCover;
  dispatchModalState?: ((Item:ModalAction) => void) | undefined;
};

const Card = ({ Item, dispatchModalState }: Props) => {
  function onClickHandler() {
    if(dispatchModalState)
    {
      console.log(Item)
      dispatchModalState({ type: EnumModalWindow.Card, value: Item });
    }
      
  }

  return (
    <div onClick={onClickHandler}>
      <Border className="cursor-pointer hover:scale-[103%] transition-all duration-500 delay-0 ease-out-expo w-[250px] h-auto bg-gradient-to-tr from-black-100 to-black-300 p-[15px]">
      <CardImage Photo={Item.Photo} />
      <CardTitle Title={Item.Title} />
      <CardPrice Price={Item.Price} />
      <CardDescription Description={Item.Description} />
    </Border>
    </div>
  );
};

export default Card;
