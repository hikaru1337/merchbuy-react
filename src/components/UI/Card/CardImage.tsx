type Props = {
  Image: any;
};

const CardImage = ({ Image }: Props) => {
  return <img src={Image} className="rounded-[15px]" />;
};

export default CardImage;
