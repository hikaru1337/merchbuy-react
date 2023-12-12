import CartLogo from "../../../assets/icon/mdi_cart-plus.svg";
import Border from "../Border/Border";
import '../../../assets/Global.css';

type Props = {
  countElements: number;
};

const PositionForNumber = (number: number): string => {
  const numberString = number.toString();
  let returnedValue = "top-[5.5px] left-[19.5px]";

  if (numberString.length === 2) 
    returnedValue = "top-[4px] left-[19px]";
  else if (numberString.length === 3) 
    returnedValue = "top-[2px] left-[18.5px]";


  return returnedValue;
};

const CartButton = ({ countElements }: Props) => {
  return (
    <Border className="cursor-pointer zxc">
      <button className="text-white-200 bg-gradient-to-tr from-black-100 to-black-300 rounded-[25px] border-white-200 text-[20px] font-Hanson flex items-center py-[5px] px-[15px] gap-[10px] min-w-fit">
        <div>
          <p className={`absolute font-GothamRegular text-[10px] ${PositionForNumber(countElements)} -rotate-45`}>
            {countElements}
          </p>
          <img src={CartLogo} className="w-[16px] h-[16px]" />
        </div>
        CART
      </button>
    </Border>
  );
};

export default CartButton;
