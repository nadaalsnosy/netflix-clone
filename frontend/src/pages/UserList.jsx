import ManyCards from "../components/Login/ManyCards";
import useAuth from "../hooks/useAuth";
import { Spinner } from "react-bootstrap";

const UserList = () => {
  const title = "My List";
  const { auth } = useAuth();

  let list = auth?.user?.userList;

  return (
    <>
      {list ? (
        <ManyCards movies={list} pageTitle={title} />
      ) : (
        <div className="d-flex justify-content-center p-3">
          <Spinner animation="border" variant="danger" />
        </div>
      )}
    </>
  );
};

export default UserList;
