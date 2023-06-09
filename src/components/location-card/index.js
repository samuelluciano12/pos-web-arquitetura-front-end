import React, { useEffect, useState } from "react";
import { Badge, Card } from "react-bootstrap";
import { getLocation } from "../../utils/http";
import EpisodeCharacter from "../resume-char-card";
import { useParams } from "react-router";

const LocationCard = ({ match }) => {
  const { id } = useParams();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      const data = await getLocation(id);
      setLocation(data);
    };
    fetchLocation();
  }, [id]);

  if (!location) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{location.name}</Card.Title>
          <Card.Text>
            <Badge pill variant="info">
              Tipo: {location.type}
            </Badge>
            <Badge pill variant="info">
              Dimensão: {location.dimension}
            </Badge>
          </Card.Text>
          <Card.Title>Residentes</Card.Title>
          <ul>
            {location.residents.map((residents) => (
              <div>
                <EpisodeCharacter id={residents.split("/").slice(-1)} />{" "}
              </div>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LocationCard;
