import React, { useEffect, useState } from "react";
import { Badge, Card, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getLocations } from "../../utils/http";

const LocationList = () => {
  const [locations, setLocations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchLocations = async () => {
      const data = await getLocations(currentPage);
      setLocations(data.results);
      setTotalPages(data.info.pages);
    };
    fetchLocations();
  }, [currentPage]);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="row">
      {locations.map((location) => (
        <div key={location.id} className="col-12 col-md-6 col-lg-4 mb-4">
          <Link
            to={`/location/${location.id}`}
            className="text-decoration-none">
            <Card>
              <Card.Body>
                <Card.Title>{location.name}</Card.Title>
                <Card.Text>
                  <Badge pill variant="info">
                    Type: {location.type}
                  </Badge>{" "}
                  <Badge pill variant="secondary">
                    Dimension: {location.dimension}
                  </Badge>
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>
      ))}
      <div className="col-12 d-flex justify-content-center">
        <Pagination className="justify-content-center">
          <Pagination.First
            disabled={currentPage === 1}
            onClick={() => onPageChange(1)}
          />
          <Pagination.Prev
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          />
          <Pagination.Item>{currentPage}</Pagination.Item>
          <Pagination.Next
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          />
          <Pagination.Last
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(totalPages)}
          />
        </Pagination>
      </div>
    </div>
  );
};

export default LocationList;
