type Props = {
  Photo: any;
};

const CardImage = ({ Photo }: Props) => {
  return (
    <div className="flex justify-center">
      <img src={Photo} className="rounded-[15px]" />
    </div>
  );
};

export default CardImage;
