const LoggedOutCard = (props) => {
  const card = props;

  return (
    <>
      <div className="card-container pb-lg-0 grayBoderBottom">
        <div className={`container d-lg-flex align-items-center ${
              card.videoSrc === "" ? "flex-row-reverse" : ""
            }`}>
          <div className="cardTitle">
            <h2>{card.title}</h2>
            <p>{card.info}</p>
          </div>
          <div
            className={`videoContainer flex-grow-1 ${
              card.imgName === "devicePile" ? "diffrentOne" : ""
            }`}
          >
            <img src={card.imgSrc} alt={card.imgName} />
            <video autoPlay loop muted>
              <source src={card.videoSrc} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoggedOutCard;
