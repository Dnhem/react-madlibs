import { useState } from "react";
import MadlibForm from "./MadlibForm";
import { v4 as uuid } from "uuid";

const Madlib = () => {
  const [ story, setStory ] = useState({});
  const { noun, nounTwo, adjective, color } = story;
  const [ madlib, setMadlib ] = useState("");
  const createStory = newStory => {
    setStory(story => ({ ...story, ...newStory, id: uuid() }));
    setMadlib(
      madlib => `The ${color} ${noun} adored the ${adjective} ${nounTwo}`
    );
  };

  return (
    <div>
      <h1>Madlibs!</h1>
      <MadlibForm createStory={createStory} />
      <h3>{madlib}</h3>
    </div>
  );
};

export default Madlib;
