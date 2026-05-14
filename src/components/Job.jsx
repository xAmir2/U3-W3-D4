import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  const favourites = useSelector((state) => state.favourites.companies);

  const isFavourite = favourites.some((fav) => fav._id === data._id);

  return (
    <Row
      className="mx-0 mt-3 p-3 align-items-center"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>

      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>

      <Col xs={3}>
        {!isFavourite ? (
          <Button
            variant="success"
            onClick={() =>
              dispatch({
                type: "ADD_TO_FAVOURITES",
                payload: data,
              })
            }
          >
            Add to favourites
          </Button>
        ) : (
          <Button
            variant="secondary"
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_FAVOURITES",
                payload: data._id,
              })
            }
          >
            Already saved
          </Button>
        )}
      </Col>
    </Row>
  );
};

export default Job;
