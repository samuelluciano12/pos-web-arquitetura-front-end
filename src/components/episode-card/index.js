import React, { useEffect, useState } from "react";
import { Badge, Card } from "react-bootstrap";
import { useParams } from "react-router";
import { getEpisode } from "../../utils/http";
import EpisodeCharacter from "../resume-char-card";

const EpisodeCard = ({ match }) => {
  const { id } = useParams();
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    const fetchEpisode = async () => {
      const data = await getEpisode(id);
      setEpisode(data);
    };
    fetchEpisode();
  }, [id]);

  if (!episode) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{episode.name}</Card.Title>
          <Card.Text>
            <Badge pill variant="info">
              Date: {episode.air_date}
            </Badge>
          </Card.Text>
          <Card.Title>Characters</Card.Title>
          <ul>
            {episode.characters.map((characters) => (
              <div>
                <EpisodeCharacter id={characters.split("/").slice(-1)} />{" "}
              </div>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EpisodeCard;
