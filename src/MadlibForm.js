import { useState } from "react";

const MadlibForm = ({ createStory }) => {
  const INITIAL_STATE = {
    noun: "",
    nounTwo: "",
    adjective: "",
    color: "",
  };
  const [ formData, setFormData ] = useState(INITIAL_STATE);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    createStory({ ...formData });
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="noun"
          value={formData.noun}
          placeholder="noun"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="nounTwo"
          value={formData.nounTwo}
          placeholder="noun 2"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="adjective"
          value={formData.adjective}
          placeholder="adjective"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="color"
          value={formData.color}
          placeholder="color"
          onChange={handleChange}
        />
      </div>
      <div>
        <button>Get Story</button>
      </div>
    </form>
  );
};

export default MadlibForm;
