import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    level1: '',
    level2: '',
    level3: '',
  });

  const [currentLevel, setCurrentLevel] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform additional validation or data processing here

    // Move to the next level
    setCurrentLevel((prevLevel) => prevLevel + 1);
  };

  const renderForm = () => {
    switch (currentLevel) {
      case 1:
        return (
          <form onSubmit={handleSubmit}>
            <label>
              Level 1:
              <input
                type="text"
                name="level1"
                value={formData.level1}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Next</button>
          </form>
        );
      case 2:
        return (
          <form onSubmit={handleSubmit}>
            <label>
              Level 2:
              <input
                type="text"
                name="level2"
                value={formData.level2}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Next</button>
          </form>
        );
      case 3:
        return (
          <form onSubmit={handleSubmit}>
            <label>
              Level 3:
              <input
                type="text"
                name="level3"
                value={formData.level3}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Three-Level Form</h1>
      {renderForm()}
    </div>
  );
};

export default App;