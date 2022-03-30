import LoggedOutCard from "./LoggedOutCard";
import { Spinner } from "react-bootstrap";

import tvFrame from "../../images/tv.png";
import PhoneImg from "../../images/mobile11.jpg";
import devicePile from "../../images/device-pile.png";
import anime from "../../images/lastOne.png";

const LoggedOutCardsContainer = () => {
  const loggedOutCards = [
    {
      title: "Enjoy on your TV.",
      info: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      imgName: "tvFrame",
      imgSrc: tvFrame,
      videoSrc:
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v",
    },
    {
      title: "Download your shows to watch offline.",
      info: "Save your favorites easily and always have something to watch.",
      imgName: "PhoneImg",
      imgSrc: PhoneImg,
      videoSrc: "",
    },
    {
      title: "Watch everywhere.",
      info: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
      imgName: "devicePile",
      imgSrc: devicePile,
      videoSrc:
        "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v",
    },
    {
      title: "Create profiles for kids.",
      info: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
      imgName: "anime",
      imgSrc: anime,
      videoSrc: "",
    },
  ];
  return (
    <>
      {loggedOutCards ? (
        loggedOutCards.map((card) => <LoggedOutCard key={card.imgName} {...card} />)
      ) : (
        <div className="centeringBody">
          <Spinner animation="border" variant="danger" />
        </div>
      )}
    </>
  );
};

export default LoggedOutCardsContainer;
