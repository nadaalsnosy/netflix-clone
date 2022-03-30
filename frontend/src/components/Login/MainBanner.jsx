import { Link } from "react-router-dom";
import { useState } from "react";
import { Spinner } from "react-bootstrap";

import { Button, Stack } from "@mui/material";
import { PlayArrow, InfoOutlined } from "@mui/icons-material";

const MainBanner = (props) => {
  const [typeName, setTypeName] = useState("Choose");
  const { type, genereTypes, content } = props;

  const handelTypeName = (e) => {
    setTypeName(e.target.innerText);
  };

  return (
    <>
      {content ? (
        <div className="mainContainer">
          <video autoPlay muted src={content.trailer}></video>
          <div className="overlay bannerOverlay"></div>
          <div className="bannerInfo container">
            {type && (
              <div className="container selectContainer d-flex align-items-center my-4">
                <h1 className="text-white me-3 typeTitle">
                  {type === "movie" ? "Movies" : "Series"}
                </h1>
                <div className="input-group">
                  <button
                    className="btn btn-outline-secondary dropdown-toggle px-2 py-0 text-white border-white"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {typeName}
                  </button>
                  <ul className="dropdown-menu bg-black">
                    {genereTypes.map((list, index) => {
                      return (
                        <Link
                          key={index}
                          className="dropdown-item text-white text-capitalize"
                          onClick={handelTypeName}
                          to={`${list}`}
                        >
                          {list}
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              </div>
            )}
            <div className="container text-white movieBannerContainer">
              <h1>{content.title}</h1>
              <p>{content.desc}</p>
              <div className="linksContent">
                <Stack direction="row" spacing={1}>
                  <Link to={`/mainVideo/${content._id}`}>
                    <Button
                      variant="outlined bg-White text-dark fs-8 banberBtn"
                      startIcon={<PlayArrow />}
                    >
                      Play
                    </Button>
                  </Link>
                  <Button
                    variant="contained bg-grey text-white fs-8 banberBtn text-capitalize"
                    startIcon={<InfoOutlined />}
                  >
                    More Info
                  </Button>
                </Stack>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center p-3 mt-5">
          <Spinner animation="border" variant="danger" />
        </div>
      )}
    </>
  );
};

export default MainBanner;
