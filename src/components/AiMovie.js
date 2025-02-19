import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieRecommender = () => {
  const [codingHours, setCodingHours] = useState('');
  const [mood, setMood] = useState('');
  const [projectType, setProjectType] = useState('');
  const [recommendation, setRecommendation] = useState(null);

  const moods = [
    { id: 'motivated', name: 'Motivated & Energetic' },
    { id: 'stressed', name: 'Stressed & Overwhelmed' },
    { id: 'stuck', name: 'Stuck on Bugs' },
    { id: 'creative', name: 'Creative & Inspired' },
    { id: 'tired', name: 'Tired & Burnt Out' }
  ];

  const projectTypes = [
    { id: 'frontend', name: 'Frontend Development' },
    { id: 'backend', name: 'Backend Development' },
    { id: 'ai', name: 'AI/Machine Learning' },
    { id: 'mobile', name: 'Mobile Development' },
    { id: 'devops', name: 'DevOps' }
  ];

  const movieDatabase = {
    motivated: {
      frontend: [
        {
          title: "The Social Network",
          year: 2010,
          duration: "2h 1m",
          description: "Perfect for frontend developers! Watch how Facebook's UI evolved while learning about startup culture.",
          mood: "Inspiring tech entrepreneurship story",
          image: "https://media-hosting.imagekit.io//7b9ceeba79da483e/social_network.jpg?Expires=1834594446&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=x3jbWlZtvf9YHbAxhvM1yls2fFyD8QPGf7jmzehnR7QYTM-2Q7JmrzklWx7hXo2836bxxoDwgXstWDyPyNS4LOiHFtb0c-6hXTgIwpZyCp1~SDFQigC1oDQCq4ld-ReLtBsTNjd87kD-BSXzmxrgt6zOEZP6tDcqkhRBraZCq4yU2BNvKx5feZE-3zKxPvRT31nd3eq8uI-38zfcod2ciL4T~JsfZ5dtxar9YZqbFAQoKYLr1mDgA1rrr3ttyMoVYdKUx93TO0ZZ1NqfkPiwRiaeXtTRygvo4ngJnAL0PTwcyOKftA7jwTBDecGN04hsHtJGp0sgTqxtSCG-Le9naw__"
        },
        {
          title: "Silicon Valley",
          year: 2014,
          duration: "Series",
          description: "Hilarious take on startup life and web development.",
          mood: "Comedy with accurate tech references",
          image: "https://media-hosting.imagekit.io//a1a084cc7a0b4417/si-vally.jpg?Expires=1834594446&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wpCHC7oLOIWgSqkVySqZ19WD-sXZdTaXexNclBj~Am7qnKidwoHxQ-Q3rP31ACGaNppexoZn-pKTEK5hp1gykMEWVp0gjl8elri0rKRNr1dQnQ4ROIry-Xd2MuDU0DYHBt8QnjnrmXbNk8uyCKEEsMK93dvWDud80LQA2qYBVioMJh-AO153CPe-jZYvWQB7~REYJhNKag7n7-JmSnOALMYbdkvsf1w-3DxXht1kuuYuIp-Zh9oZn58ReZXP4YfDuUzN-uKeJc77EcMIIeIkIzHUAgT6QC4AgpYNUEHBU4kHggMqiKKlTx5CGQjPAov73~qik3OUCLXmMhILFHPx0Q__"
        }
      ]
    },
    stressed: {
      backend: [
        {
          title: "Office Space",
          year: 1999,
          duration: "1h 29m",
          description: "Relatable comedy about software developers dealing with workplace stress.",
          mood: "Stress-relieving comedy",
          image: "https://media-hosting.imagekit.io//c0a1b55335b641ac/office-space.jpg?Expires=1834594446&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=CT18bsaR4C47BEpWBDOZvIgMDpRIz716cwitPG5tqWuTDIuhrPRLtaWkxUq5s~JopDe8Wx4nseKSlvkieQEEfVmWhHsBO-w0MSydok8NzuCmz8O~nNJbCbYbzOG9KbFvXgJWmiXmnc4FNie20edZYZyy9BQya-KUTzovKvx4LzyZ6vc5lEh83a5qz-DtfhkQmcEnC794fh3MmsX2Rs5CHdvBRieBpvpft~0cMlrfYLaF4FkUnXrYNzLLMb1zPfZCdc49hZgkev15i5AvmR45HCncJjoHnBQXtg52wJhgbqYjRluOgBiYkcCxHfyD1OY9cAQm4xsBRoWix02InndnWQ__"
        }
      ]
    },
    creative: {
      ai: [
        {
          title: "Ex Machina",
          year: 2014,
          duration: "1h 48m",
          description: "Thought-provoking film about AI and consciousness.",
          mood: "Cerebral sci-fi",
          image: "https://media-hosting.imagekit.io//ad4c00d17bdc4616/Ex.jpg?Expires=1834594446&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ALFk8gb-Jk5JKmDOg6sy753IT-L6q60pJnZ~Yvx4n-0OKV8nsnFJ3RcfdUwsIJ3AWDDcOkCzH5RStFQpQB48tM0MYQb4RStfR0MGbcKbbD8WC6838ZvoiblCxaV~dl0ONnA5Ldq1YBEyYX483roW9quUSoVCT3Y9Up7NyG1LFIxCvshPg3R4tMWUV4ywoAtHAMTLStBPqdZYtmKRAqpPwcUFpb0B40Y1m5qF~fuRCdvTrFptxrQqpoiQPn~wZyv1Bu6WoyddmbTJl7npjIqfcxpUVuDSbo0Js8JUFTbUfyZVtSNT~HoAz9fm-egLXggnPcsJPp6W9vLcegpqGSX7iQ__"
        }
      ]
    }
  };

  const getRecommendation = () => {
    // Simulated AI recommendation logic
    const baseRecommendations = movieDatabase[mood]?.[projectType] || [
      {
        title: "Hidden Figures",
        year: 2016,
        duration: "2h 7m",
        description: "Inspiring story about pioneering programmers.",
        mood: "Motivational tech history",
        image: "https://media-hosting.imagekit.io//8944603644c64852/hiddenfig.jpg?Expires=1834594695&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=i-BT1Bhc97cbnJHgeuQsUMh9S6wKwUAW8A1J76~f2rWLH8GSyAHoJiMlY8aFtwrQVBorVeGM0UeUJy3~lukiLqTGVNDuo2XIN7CGCW6WrdC8NfDZmobLIT8Jjbqudgmapjbv8J7COtJMIrKHhlT9X5vew6YcsIbN8Jhm34uIOtbjMOqM6mgbPijTqDMJMFnT7tCAMy2HM6yCShCwBbttrkGh2QG3W5J3n4V9IjMX5SyfwDfVZO7kGoUKbyRlWxnTMnC826F5oQ-werffUwD6eEL8Y3kr5CbI4OYBjhbudzn3-313Dca0~cRDod1DpPGM4uigh~DFAXbvWzzBtSwdQw__"
      }
    ];

    const hours = parseInt(codingHours);
    let message = "";
    
    if (hours > 8) {
      message = "You've been coding for quite a while! Time for a good break with:";
    } else if (hours > 4) {
      message = "Nice coding session! Refresh your mind with:";
    } else {
      message = "Quick break? Here's a perfect movie for you:";
    }

    setRecommendation({
      message,
      movies: baseRecommendations
    });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-lg">
            <div className="card-body">
              <h1 className="text-center mb-4">AI Movie Recommender for Developers</h1>
              
              {!recommendation ? (
                <div className="p-4">
                  <div className="mb-4">
                    <label className="form-label">How many hours have you been coding?</label>
                    <input
                      type="number"
                      className="form-control form-control-lg"
                      value={codingHours}
                      onChange={(e) => setCodingHours(e.target.value)}
                      placeholder="Enter hours..."
                      min="0"
                      max="24"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label">How are you feeling?</label>
                    <div className="d-flex flex-wrap gap-2">
                      {moods.map(m => (
                        <button
                          key={m.id}
                          className={`btn ${mood === m.id ? 'btn-primary' : 'btn-outline-primary'}`}
                          onClick={() => setMood(m.id)}
                        >
                          {m.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label">What are you working on?</label>
                    <select 
                      className="form-select form-select-lg"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                    >
                      <option value="">Select project type...</option>
                      {projectTypes.map(project => (
                        <option key={project.id} value={project.id}>
                          {project.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    className="btn btn-primary btn-lg w-100"
                    onClick={getRecommendation}
                    disabled={!codingHours || !mood || !projectType}
                  >
                    Get Movie Recommendation
                  </button>
                </div>
              ) : (
                <div className="p-4">
                  <h3 className="text-center mb-4">{recommendation.message}</h3>
                  
                  <div className="row row-cols-1 row-cols-md-2 g-4">
                    {recommendation.movies.map((movie, index) => (
                      <div key={index} className="col">
                        <div className="card h-100">
                          <img 
                            src={movie.image} 
                            className="card-img-top" 
                            alt={movie.title}
                            style={{ height: '300px', objectFit: 'cover' }}
                          />
                          <div className="card-body">
                            <h4 className="card-title">{movie.title} ({movie.year})</h4>
                            <p className="card-text"><small className="text-muted">Duration: {movie.duration}</small></p>
                            <p className="card-text">{movie.description}</p>
                            <p className="card-text">
                              <span className="badge bg-info">{movie.mood}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    className="btn btn-secondary mt-4 w-100"
                    onClick={() => setRecommendation(null)}
                  >
                    Get Another Recommendation
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieRecommender;


