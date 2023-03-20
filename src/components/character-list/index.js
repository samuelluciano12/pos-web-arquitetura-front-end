import React, { useState, useEffect } from "react";
import { Card, Pagination, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getCharacters } from "../../utils/http";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacters(currentPage);
      setCharacters(data.results);
      setTotalPages(data.info.pages);
    };
    fetchCharacters();
  }, [currentPage]);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="row">
      {characters.map((character) => (
        <article>
          <div key={character.id} className="col-12 col-md-4 col-lg-3 mb-3">
            <Card>
              <Card.Img
                variant="top"
                src={character.image}
                alt={character.name}
              />
              <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>
                  <Badge>Status: {character.status}</Badge>
                  <br />
                  <Badge>Species: {character.species}</Badge>
                  <br />
                  <Badge>Location: {character.location.name}</Badge>
                  <br />
                  <Link to={`/character/${character.id}`}>
                    <Badge>Character Details</Badge>
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </article>
      ))}
      <div className="col-12">
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

export default CharacterList;
