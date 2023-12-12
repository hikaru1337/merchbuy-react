type Props = {
  onClickBackDrop: () => void;
};

const BackDrop = ({ onClickBackDrop }: Props) => {
  return (
    <div
      onClick={onClickBackDrop}
      className="w-full h-[100vh] fixed left-0 top-0 bg-black-100 bg-opacity-80 backdrop-blur-sm cursor-pointer"
    ></div>
  );
};

export default BackDrop;
