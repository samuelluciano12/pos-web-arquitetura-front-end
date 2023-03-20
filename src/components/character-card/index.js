import React, { useEffect, useState } from "react";
import { Card, Badge } from "react-bootstrap";
import { getCharacter } from "../../utils/http";
import { useParams } from "react-router";
import EpisodeName from "../char-episode";

const CharacterCard = ({ match }) => {
  const { id } = useParams();
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
              <Badge
                pill
                variant={character.status === "Alive" ? "success" : "danger"}>
                Status: {character.status}
              </Badge>
              <br />
              <Badge pill variant="secondary">
                Species: {character.species}
              </Badge>
              <br />
              <Badge pill variant="info">
                Origin: {character.origin.name}
              </Badge>
              <br />
              <Badge pill variant="info">
                Location: {character.location.name}
              </Badge>
              <br />
              <Card.Title>Episodes </Card.Title>
              <ul>
                {character.episode.map((episode) => (
                  <Badge key={episode}>
                    <EpisodeName url={episode} />
                  </Badge>
                ))}
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CharacterCard;
