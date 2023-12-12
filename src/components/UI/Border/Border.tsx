import { ReactNode } from 'react';
import style from "./Border.module.css";

interface Props {
    children: ReactNode;
    className?: String;
}

const Border = ({ children, className }:Props) => {
    return (
        <div className={style.gradient + " " + className}>
        {children}
        </div>
    )
}
export default Border