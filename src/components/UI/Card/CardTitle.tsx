type Props = {
  Title: string;
};

const CardTitle = ({ Title }: Props) => {
  return <p className="text-white-200 font-GothamBold text-[16px] ">{Title}</p>;
};

export default CardTitle;
