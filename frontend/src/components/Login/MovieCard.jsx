import { Card } from "react-bootstrap";
import {
  PlayArrow,
  ThumbDownOffAlt,
  ThumbUpOffAlt,
  Check,
} from "@mui/icons-material";

import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";

const MovieCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const iconRef = useRef();
  const { item } = props;
  const { auth, setAuth } = useAuth();

  const handelsetFav = async () => {
    try {
      const res = await axios.patch(
        `/users/${auth.user._id}`,
        JSON.stringify({
          userListItem: item,
        }),
        {
          headers: {
            "content-type": "application/json",
            Authorization: `${auth.token}`,
          },
        }
      );
      const newUser = res?.data;

      if (res.data) {
        setAuth(() => {
          return { ...auth, user: newUser };
        });
        localStorage.setItem("user", JSON.stringify(res.data));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`cardItem d-block`}
    >
      <Card.Img variant="top" src={item.img} />
      {isHovered && <video autoPlay muted loop src={item.trailer}></video>}
      <Card.Body className="pb-1 bg-black">
        <Card.Title className="d-flex justify-content-between mb-4">
          <Link to={`/mainVideo/${item._id}`}>
            <span className="cardIcon playArrowIcon">
              <PlayArrow />
            </span>
          </Link>

          <span
            className={
              auth.user?.userList?.find((m) => m._id === item._id)
                ? "checkIcon cardIcon"
                : "cardIcon"
            }
            ref={iconRef}
            onClick={handelsetFav}
          >
            <Check />
          </span>

          <span className="cardIcon">
            <ThumbUpOffAlt />
          </span>
          <span className="cardIcon">
            <ThumbDownOffAlt />
          </span>
        </Card.Title>
        <Card.Text className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-lightGreen fs-6">Rate {item.rate}</span>
          <span className="cardBoder fs-8">{item.limit}</span>
          <span className="fs-6"> 1h 38m</span>
          <span className="cardBoder fs-8"> HD</span>
        </Card.Text>
        <Card.Text className="mb-1">{item.genere}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
