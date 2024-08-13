import React from 'react';
import { useParams } from 'react-router-dom';

const StudyPage = () => {
  const { topic } = useParams();

  return (
    <div>
      <h1>Study Materials for {topic}</h1>
      <p>Here you will find various resources to learn {topic}.</p>
      {/* Include resources, videos, links, etc. */}
    </div>
  );
};

export default StudyPage;
