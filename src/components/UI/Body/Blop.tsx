type Props = {
    Position: string;
    className: string;
}// Color: keyof typeof BlopColors;

/*
export enum BlopColors {
    BrightRed = "#A84343",
    DarkRed = "#F91A3C",
}

const BlopConverter = (value: Props["Color"]) => BlopColors[value]
*/

const Blop = ({Position, className}:Props) => {
    return <div className={`w-[550px] h-[550px] blur-[500px] ${Position} bg-[#A84343] rounded-full ` + className}></div>
}

export default Blop;