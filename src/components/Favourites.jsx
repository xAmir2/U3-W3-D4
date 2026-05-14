import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromFavouritesAction } from "../redux/actions";

const Favourites = () => {
  const dispatch = useDispatch();

  const favourites = useSelector((state) => state.favourites.companies);

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="my-4">Favourite Companies</h1>

          {favourites.length === 0 ? (
            <p>No favourites added yet</p>
          ) : (
            favourites.map((company, index) => (
              <div
                key={index}
                className="d-flex justify-content-between align-items-center border p-3 mb-3 rounded"
              >
                <div>
                  <Link to={`/${company.company_name}`}>
                    {company.company_name}
                  </Link>

                  <p className="mb-1">{company.title}</p>
                </div>

                <Button
                  variant="danger"
                  onClick={() =>
                    dispatch(removeFromFavouritesAction(company._id))
                  }
                >
                  Remove
                </Button>
              </div>
            ))
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
