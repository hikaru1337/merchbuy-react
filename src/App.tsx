import React from "react";
import WishlistLogo from "./icon/solar_chat-square-like-broken.svg";
import CardLogo from "./icon/mdi_cart-plus.svg";
import Glow1 from "./icon/Ellipse 1.png";
import Glow2 from "./icon/Ellipse 2.png";
import photo from "./photo/cover1.png";
import "./App.css";


// ./icon/Cover1.png 
const albumCovers = [
  {
    Title: "Ethereal Echoes",
    Price: 3456,
    Description:
      "Immerse yourself in the ethereal sounds of Playboi Carti's latest creation, 'Ethereal Echoes.' This album transcends genres, blending dreamy melodies with Carti's unique lyrical style. Each track is a sonic journey through otherworldly landscapes, creating an atmospheric experience that lingers in the mind."
  },
  {
    Title: "Celestial Serenity",
    Price: 1356,
    Description:
      "Experience the celestial vibes of Playboi Carti's 'Celestial Serenity.' This cosmic journey combines smooth beats with introspective lyrics, creating a tranquil yet captivating atmosphere. Let the soothing sounds transport you to a state of serenity, where Carti's artistry unfolds in celestial harmony."
  },
  {
    Title: "Nebula Nights",
    Price: 769,
    Description:
      "Explore the depths of sound in Playboi Carti's 'Nebula Nights.' This album ventures into uncharted musical territories, blending cosmic beats with Carti's unmatched energy. Each track is a cosmic dance, inviting listeners to join a journey through the stars and lose themselves in the rhythm of the universe."
  },
  {
    Title: "Midnight Mirage",
    Price: 2364,
    Description:
      "Step into the 'Midnight Mirage' with Playboi Carti's latest masterpiece. This album paints a sonic landscape of enigmatic beats and hypnotic rhythms, creating a mirage of emotions. Carti's lyrical prowess shines, taking listeners on a mesmerizing journey through the mysteries of the night."
  },
  {
    Title: "Lunar Luminescence",
    Price: 1763,
    Description:
      "Illuminate your senses with Playboi Carti's 'Lunar Luminescence.' This album is a fusion of lunar-inspired beats and Carti's dynamic flow. Feel the glow of each track as it guides you through a nocturnal adventure, capturing the essence of moonlit escapades and urban mystique."
  },
  {
    Title: "Galactic Grooves",
    Price: 2323,
    Description:
      "Embark on a cosmic adventure with Playboi Carti's 'Galactic Grooves.' This album blends futuristic beats with Carti's iconic style, creating a sonic odyssey through unexplored dimensions. Let the galactic grooves transport you to a realm where rhythm meets the cosmos."
  },
  {
    Title: "Stellar Serenade",
    Price: 3876,
    Description:
      "Immerse yourself in the 'Stellar Serenade' of Playboi Carti's musical universe. This album is a symphony of celestial sounds, intertwining melodic beats with Carti's unparalleled lyrical finesse. Allow each track to serenade your senses and elevate your musical experience."
  },
  {
    Title: "Astral Ascension",
    Price: 1934,
    Description:
      "Elevate your spirit with Playboi Carti's 'Astral Ascension.' This album is a celestial journey through uplifting beats and transcendent lyrics. Experience the astral ascension as Carti's artistry takes you to new heights, blending ethereal melodies with cosmic energy."
  },
  {
    Title: "Vortex Visions",
    Price: 992,
    Description:
      "Get lost in the 'Vortex Visions' of Playboi Carti's sonic tapestry. This album is a whirlwind of dynamic beats and visionary lyrics, creating a vortex of sound that captivates the mind. Allow the music to pull you into a world of mesmerizing visions and rhythmic intensity."
  }
];


function App() {
  return (
    <div className="">
      <header className="bg-black-200 h-[100px] px-[30px] flex items-center justify-between relative z-[1]">
        <p className="text-white-200 text-[40px] font-Hanson">MERCHBUY</p>

        <div className="flex flex-row gap-[20px]">
          <button className="hover:scale-105 transition-all border-gradient text-white-200 bg-gradient-to-tr from-black-100 to-black-300 rounded-[25px] border-white-200 text-[20px] font-Hanson flex items-center py-[5px] px-[15px] gap-[10px]">
            <img src={WishlistLogo} className="w-[16px] h-[16px]" />
            WISHLIST
          </button>

          <button className="hover:scale-105 transition-all border-gradient text-white-200 bg-gradient-to-tr from-black-100 to-black-300 rounded-[25px] border-white-200 text-[20px] font-Hanson flex items-center py-[5px] px-[15px] gap-[10px]">
            <div>
              <p className="absolute font-GothamRegular text-[10px] top-[5px] left-[19px] -rotate-45">
                0
              </p>
              {/* 10 - text-[10px] top-[4px] left-[19px]    9 - top-[5px] left-[19px]      99 - top-[3px] left-[18.5px]  */}
              <img src={CardLogo} className="w-[16px] h-[16px]" />
            </div>
            CART
          </button>
        </div>
      </header>

      <section>

      <div className="w-[550px] h-[550px] blur-[500px] absolute -left-[700px] top-[330px] bg-[#A84343] rounded-full"></div>
      <div className="w-[550px] h-[550px] blur-[500px] fixed -right-[800px] top-[60px] bg-[#F91A3C] rounded-full"></div>

        <div  className="relative flex flex-wrap justify-center gap-[15px] py-[30px] m-auto w-[70%]">
        {albumCovers.map((item, Index) => {

          const img = require(`./photo/cover${Index +1}.png`)

          return (
            <div key={Index} className="cursor-pointer hover:scale-[103%] transition-all w-[250px] h-auto bg-gradient-to-tr from-black-100 to-black-300 rounded-[25px] border-gradient">
              <div className="p-[15px]">
                <img src={img} className="rounded-[15px]"/>
                <p className="text-white-200 font-GothamBold text-[16px] ">{item.Title}</p>
                <p className="text-green-500 font-GothamBold text-[10px] mb-[8px]">${item.Price}</p>
                <p className="text-white-100 font-GothamRegular inline-block text-[10px] leading-[115%] hyphens-auto" lang="eu">
                  {item.Description.substring(0, 150).trim() + "..."}
                </p>
              </div>
            </div>

          )
        })}
        </div>

      </section>

      <footer className="bg-black-200 h-[100px] w-full px-[30px] flex items-center justify-between relative z-10"> {/* fixed bottom-0*/}
        <p className="text-white-200 text-[40px] font-Hanson">MERCHBUY</p>

        <p className="text-white-200 text-[16px] tracking-[2px] font-HansonBold">
          Copyright 2023 xXx All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;


/*

        <div className="absolute w-[100%] h-[100%] overflow-hidden">
        <img src={Glow1} className="absolute"></img>
          <img src={Glow2} className="absolute right-0"></img>
        </div>

*/