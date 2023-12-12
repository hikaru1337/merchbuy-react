type Props = {
  Price: number;
};

const CardPrice = ({ Price }: Props) => {
  return (
    <p className="text-green-500 font-GothamBold text-[10px] mb-[8px]">
      ${Price}
    </p>
  );
};

export default CardPrice;
