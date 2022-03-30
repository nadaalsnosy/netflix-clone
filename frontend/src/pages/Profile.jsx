import { Form, Button } from "react-bootstrap";
import AvatarImage from "../images/avatar.png";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Profile = () => {
  const { auth } = useAuth();

  return (
    <>
      <div className="overlay">
        <div className="formStyle pb-1 pt-1">
          <Form className="signForm p-3 pt-4 my-5 text-white bg-black-8">
            <h1 className=" mb-5 fw-bold text-center">Profile</h1>

            <Form.Group className="mb-4" controlId="formGridEmail">
              <div className="containerProfile d-flex justify-content-around">
                <div>
                  <img className="avatarPhoto" src={AvatarImage} alt="avatar" />
                </div>
                <div className="profileData m-2 ">
                  <div className="pb-1 fw-bold">
                    User name : {auth.user.username}{" "}
                  </div>
                  <div className="pb-1 fw-bold">Email :{auth.user.email}</div>
                  <div className="pb-1 fw-bold">Password : ******** </div>
                </div>
              </div>
            </Form.Group>

            <div className="text-end  ">
              <Link
                className="text-primary text-decoration-none"
                to={`/editProfile`}
              >
                <Button variant="danger w-100 h-50p mb-3" type="submit">
                  Edit
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Profile;
