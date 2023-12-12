import Card from "./Card";
import { AlbumCover } from "../../../utils/types";
import { ModalAction } from "../ModalWindow/ModalWindow";

type Props = {
  Items: AlbumCover[];
  dispatchModalState: (Item:ModalAction) => void;
};

const CardList = ({ Items,dispatchModalState }: Props) => {
    return (
        <>
            {
                Items.map((item:AlbumCover, index:number) => {
                    item.Photo = require('../../../data/photo/cover' + (index + 1) + '.png');

                    return <Card key={index} Item={item} dispatchModalState={dispatchModalState}/>
                })
            }
        </>
    )
}
        
export default CardList;