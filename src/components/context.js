import React from 'react';

import './context.css'
function Hobbies() {
  const hobbies = [
    { id: 1, name: 'Reading' },
    { id: 2, name: 'Coding' },
    { id: 3, name: 'Gaming' },
    { id: 4, name: 'Traveling' },
    { id: 5, name: 'Photography' },
  ];

  return (
    <div className="hobbies-container">
      <h1>My Hobbies</h1>
      <ul className="hobbies-list">
        {hobbies.map((hobby) => (
          <li key={hobby.id} className="hobby-item">
            {hobby.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Hobbies;
