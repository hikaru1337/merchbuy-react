type Props = {
  Description: string;
  Modal?: boolean;
};

const CardDescription = ({ Description, Modal }: Props) => {
  return (
    <p
      className="text-white-100 font-GothamRegular inline-block text-[10px] leading-[115%] hyphens-auto"
      lang="eu"
    >
      {
        Modal ? Description : Description.substring(0, 150).trim() + "..."
      }
    </p>
  );
};

export default CardDescription;
