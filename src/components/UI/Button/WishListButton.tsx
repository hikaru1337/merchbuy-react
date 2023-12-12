import Border from "../Border/Border";
import WishlistLogo from "../../../assets/icon/solar_chat-square-like-broken.svg";

const WishListButton = () => {
  return (
    <Border className="cursor-pointer hover:scale-105 transition-all duration-500 delay-0 ease-out-expo">
      <button className=" text-white-200 bg-gradient-to-tr from-black-100 to-black-300 rounded-[25px] border-white-200 text-[20px] font-Hanson flex items-center py-[5px] px-[15px] gap-[10px] min-w-fit">
        <img src={WishlistLogo} className="w-[16px] h-[16px]" />
        WISHLIST
      </button>
    </Border>
  );
};

export default WishListButton;
