import Card from "./Card";
import { AlbumCover } from "../../../utils/types";


type Props = {
  items: AlbumCover[];
};

const CardList = ({ items }: Props) => {
    return (
        <>
            {
                items.map((item:AlbumCover, index:number) => {
                    const Image = require('../../../photo/cover' + (index + 1) + '.png');

                    return <Card key={index} Title={item.Title} Price={item.Price} Description={item.Description} Image={Image}/>
                })
            }
        </>
    )
}
        
export default CardList;