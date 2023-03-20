import React, { useState, useEffect } from "react";
import axios from "axios";

const EpisodeName = ({ url }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchEpisode = async () => {
      const response = await axios.get(url);
      setName(response.data.name);
    };
    fetchEpisode();
  }, [url]);

  return <div>{name}</div>;
};

export default EpisodeName;
