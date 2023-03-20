import React, { useEffect, useState } from "react";
import { Badge, Card, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getEpisodes } from "../../utils/http";

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const data = await getEpisodes(currentPage);
      setEpisodes(data.results);
      setTotalPages(data.info.pages);
    };
    fetchEpisodes();
  }, [currentPage]);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="card-columns">
      {episodes.map((episode) => (
        <div key={episode.id} className="mb-4">
          <Link to={`/episode/${episode.id}`} className="text-decoration-none">
            <Card>
              <Card.Body>
                <Card.Title>{episode.name}</Card.Title>
                <Card.Text>
                  <Badge pill variant="info">
                    Date: {episode.air_date}
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

export default EpisodeList;
