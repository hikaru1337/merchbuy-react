import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";
import Body from "./components/UI/Body/Body";
import { albumCovers } from "./data/albumCover";
import ModalWindow, { EnumModalWindow } from "./components/UI/ModalWindow/ModalWindow";
import { ModalAction } from "./components/UI/ModalWindow/ModalWindow";
import { useState } from "react";


function App() {
  const [modalWindow, setModalWindow] = useState<ModalAction>({ type:EnumModalWindow.none});

  return (
    <>
      <ModalWindow modalWindow={modalWindow} />
      <Header />
      <Body albumCovers={albumCovers} dispatchModalState={setModalWindow} />
      <Footer />
    </>
  );
}

export default App;