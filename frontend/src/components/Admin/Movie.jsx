import { Link } from "react-router-dom";

const Movie = (props) => {
  const { title, i, _id } = props;

  return (
    <tr>
      <td className="align-middle text-center">{i}</td>
      <td className="d-flex justify-content-between align-items-center px-4 py-2">
        {title}
        <div>
          <Link to={`/showLists/${_id}`}>
            <button className="btn btn-danger">More Details</button>
          </Link>
        </div>
      </td>
    </tr>
  );
};


export default Movie;
