import React, { useState, useEffect } from "react";

function App() {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setImageUrl(data.message))
      .catch((error) => console.error("Error fetching dog image:", error));
  }, []);

  if (!imageUrl) {
    return <p>Loading...</p>;
  }

  return <img src={imageUrl} alt="A Random Dog" />;
}

export default App;
