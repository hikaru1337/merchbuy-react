import CartButton from "../Button/CartButton";
import WishListButton from "../Button/WishListButton";
import Logo from "../../../assets/logotype.svg";

const Header = () => { // bg-black-200
  return (
    <header className="bg-transparent h-[100px] px-[30px] flex items-center justify-between ">
      <div className="flex items-center gap-3">
        <img src={Logo} className="w-[40px] h-[40px]" />
        <p className="text-white-200 text-[40px] font-Hanson">MERCHBUY</p>
      </div>

      <div className="flex flex-row gap-[20px]">
        <WishListButton />
        <CartButton countElements={0}/>
      </div>
    </header>
  );
};

export default Header;
