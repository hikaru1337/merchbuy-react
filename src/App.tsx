import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";
import Body from "./components/UI/Body/Body";
import { albumCovers } from "./data/albumCover";



function App() {
  const Covers = albumCovers;

  //const Image = require("./photo/cover1.png");
  return (
    <>
      
      <Header />
      <Body albumCovers={Covers} />
      <Footer />
    </>
  );
}

export default App;

//     <ModalCard Image={Image} Title={albumCovers[0].Title} Price={albumCovers[0].Price} Description={albumCovers[0].Description} />   