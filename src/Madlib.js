import { useState } from "react";
import MadlibForm from "./MadlibForm";
import { v4 as uuid } from "uuid";

const Madlib = () => {
  const [ story, setStory ] = useState({});
  const { noun, nounTwo, adjective, color } = story;
  const createStory = newStory => {
    setStory(story => ({ ...story, ...newStory, id: uuid() }));
  };

  return (
    <div>
      <h1>Madlibs!</h1>
      <MadlibForm createStory={createStory} />
      <h3>
        The {color} {noun} adored the {adjective} {nounTwo}
      </h3>
    </div>
  );
};

export default Madlib;
