// src/ContentLoader.js
import React, { useState, useEffect } from "react";

const ContentLoader = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const savedContent = localStorage.getItem("siteContent");
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  }, []);

  if (!content) return <p>Loading...</p>;

  return (
    <div>
      {/* Hero Section */}
      <section style={{ backgroundImage: `url(${content.hero.image})` }}>
        <h1>{content.hero.title}</h1>
        <p>{content.hero.description}</p>
      </section>

      {/* Navbar */}
      <nav>
        <ul>
          {content.navbar.links.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ContentLoader;
