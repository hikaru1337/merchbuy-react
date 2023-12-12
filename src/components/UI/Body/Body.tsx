import CardList from "../Card/CardList";
import { AlbumCover } from "../../../utils/types";
import Blop from "./Blop";
import { ModalAction } from "../ModalWindow/ModalWindow";

type Props = {
  albumCovers: AlbumCover[];
  dispatchModalState: (Item:ModalAction) => void;
};

const Body = ({ albumCovers, dispatchModalState }: Props) => {

  return (
    <section className="flex justify-center relative">
      <div className="z-[-1]">
        <Blop Position="fixed" className={`-right-[800px] top-[60px]`} />
        <Blop Position="absolute" className={`-left-[700px] top-[330px]`} />
      </div>

      <div className="grid grid-cols-5 gap-[15px] py-[50px]">
        <CardList Items={albumCovers} dispatchModalState={dispatchModalState} />
      </div>
    </section>
  );
};

export default Body;
