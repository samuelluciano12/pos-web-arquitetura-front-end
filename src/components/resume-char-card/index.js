import React, { useEffect, useState } from "react";
import { Card, Badge } from "react-bootstrap";
import { getCharacter } from "../../utils/http";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const EpisodeCharacter = ({ id }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const data = await getCharacter(id);
      setCharacter(data);
    };
    fetchCharacter();
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row">
      <div className="col-md-6">
        <Card>
          <Card.Img variant="top" src={character.image} alt={character.name} />
          <Card.Body>
            <Card.Title>{character.name}</Card.Title>
            <Card.Text>
              <Link to={`/character/${id}`}>
                <Badge pill>Character Detail</Badge>
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default EpisodeCharacter;
