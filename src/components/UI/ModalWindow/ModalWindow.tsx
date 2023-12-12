import { createPortal } from "react-dom";
import { ReactNode } from "react";
import BackDrop from "./BackDrop";
import { AlbumCover, AlbumCoverCart } from "../../../utils/types";
import Card from "./ModalCard/Card";
import { useReducer,useEffect } from "react";

type Props = {
    modalWindow: ModalAction;
}

export enum EnumModalWindow {
    none,
    Card,
    Cart,
    Wishlist
}

export type ModalAction  = {
    type:EnumModalWindow.Card;
    value: AlbumCover;
  } | {
    type:EnumModalWindow.Wishlist;
    value: AlbumCover;
  } | {
    type:EnumModalWindow.Cart;
    value: AlbumCoverCart;
  }| {
    type:EnumModalWindow.none;
  }
  
  export type ModalState = {
    value: ReactNode | null;
  };
  
  function modalReducer (prevState:ModalState, action:ModalAction ):ModalState {
    switch (action.type) {
      case EnumModalWindow.Wishlist:
        break;
      case EnumModalWindow.Cart:
        break;
      case EnumModalWindow.Card:
          return {value: <Card modalCard={action.value}/>}
    }
  
    return {
      value: null
    }
  }


const ModalWindow = ({ modalWindow }: Props) => {
    const [modalState, dispatchModalState] = useReducer<React.Reducer<ModalState, ModalAction>>(modalReducer, {value: null});

    useEffect(() => {
        dispatchModalState(modalWindow);
      }, [modalWindow]);
      

    function onClickBackDrop() {
        dispatchModalState({ type: EnumModalWindow.none }); 
    }

    return (
      <div>
        {
          modalState.value && createPortal(<BackDrop onClickBackDrop={onClickBackDrop}/>, document.getElementById("BackDrop")!)
        }
        {
          modalState.value && createPortal(modalState.value, document.getElementById("Card")!)
        }
      </div>
    );
  };
  
  export default ModalWindow;