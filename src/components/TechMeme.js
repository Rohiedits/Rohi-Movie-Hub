
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TechMemeSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [currentMeme, setCurrentMeme] = useState(null);

  const categories = [
    { id: 'all', name: 'All Memes' },
    { id: 'javascript', name: 'JavaScript' },
    { id: 'python', name: 'Python' },
    { id: 'bugs', name: 'Bug Stories' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'devops', name: 'DevOps' },
    { id: 'ai', name: 'AI/ML' }
  ];

  const memeDatabase = [
    {
      id: 1,
      title: "When the code works but you don't know why",
      category: "bugs",
      image: "https://media-hosting.imagekit.io//3d935925e8ee4093/DALL%C2%B7E%202025-02-19%2023.17.14%20-%20A%20programmer%20sitting%20in%20front%20of%20a%20computer%20screen%20with%20wide%20eyes%20and%20a%20shocked%20expression,%20hands%20raised%20in%20confusion.%20The%20screen%20displays%20a%20terminal%20.webp?Expires=1834595386&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=UdZFJqumn81YfD9i9Oh7mIvuJ4M7-GkT8sog3qPgU19wOH2ZgWQVdaEwfEBX~5VL2-ZCumxKBlOrQf03grYZAfi4fS9Qi08yBb64Kz2NGrT3ICq4GEJX7CPAYewggrW~riKsUVyM8JzfS~4Vqa9bzSH48FyU63lG0rGhxSaSZKexIyBi9w1lEjlQfOX6GD0JCzHH4xBNH6NPSoN04qqcir4R01Zt0EWWl5PJIZOaGLkxk1fc7MAlaBesOCG82k-DSB2Pr0W4if~7LbQTSYFkfl6zHCFPu7nNZDPnK3YvevxjvyATyMA6w-z2LIBoQ~lByx5TVch2yUOSqZbCbzhEQg__",
      likes: 1542,
      comments: 89,
      tags: ["debugging", "confusion", "programming"],
      description: "That magical moment when your code finally runs!"
    },
    {
      id: 2,
      title: "JavaScript's equality comparisons be like",
      category: "javascript",
      image: "https://media-hosting.imagekit.io//a4b2f4f6a20c4a89/DALL%C2%B7E%202025-02-19%2023.19.14%20-%20A%20humorous%20illustration%20of%20two%20JavaScript%20operators,%20'=='%20and%20'===',%20depicted%20as%20rival%20warriors%20in%20an%20endless%20battle.%20The%20'=='%20warrior%20is%20reckless,%20we.webp?Expires=1834595386&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=LDDJgc-BCQJTgKqdbQeMEQI1FlxtIux1zGdaR5pck~frHmL8eDrm9rNJMMksfvBaCkQHK~DhBLpGaTk9Ayi55eDEzNUImjMOn4flm~dlZQewSHgmfPto7QpJ3h41lG5uHeBI4SIxpupvD-Z3i6pvx18wMOtk3W38S-tJuesVZDd8KTCX8m1eAh7Ohk2RgP7vCpU0fKGKYzcEfH4nq8pfFKNuXbVrLKjNKcW4JeU5QK1UlxqwGaUZnTjWr6sH8kYdR4qVCP6v6Qcsingi9tErxbrFLPqaEXXAZlyfiwDUMqmnywWD09ITGK6AcUCeG~h8nQY1v6~1jx4t-kfcGnKbIg__",
      likes: 2103,
      comments: 156,
      tags: ["javascript", "equality", "coding"],
      description: "== vs === in JavaScript, a never-ending story"
    },
    {
      id: 3,
      title: "Python indentation errors",
      category: "python",
      image: "https://media-hosting.imagekit.io//5e0b583de6164fc8/DALL%C2%B7E%202025-02-19%2023.18.23%20-%20A%20frustrated%20programmer%20staring%20at%20a%20computer%20screen%20filled%20with%20Python%20code,%20with%20a%20big%20red%20error%20message%20saying%20'IndentationError_%20unexpected%20indent.webp?Expires=1834595386&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=KZRZc4rdn1y2VM7JzieJPrYREgMdFBCZsIOgCt3HqieMkQencN-LiHylkntHckfZhr95k3PyYYQdagWF~jPdxJP7-8d92mCxcuPQx0BB2G8l80TOYbWmy7fTnA3g-~f7TVPSZ7Y9M0-314ckiN68MiPgOcyLcVjtwtGbyfiIjnqsWa2Bh626zDBptNDQ40zkBiqJ3YCC-0rVcMlsLBZrIHCawUE92lWFpM8qFjqzo-meNeGxke0YOclJkGl-Bkym0XQfm0xRAtjJOrVxMI0RlhzVbQ4wBH6PkRCyIBOMPZik32dEEgJ~JQmWLk07AeRTB5SGcS1AeR9np8tVWQ4WCQ__",
      likes: 1832,
      comments: 123,
      tags: ["python", "indentation", "syntax"],
      description: "When your code fails because of a single space"
    }
  ];

  const [memes, setMemes] = useState(memeDatabase);
  const [likedMemes, setLikedMemes] = useState(new Set());

  const handleLike = (memeId) => {
    if (likedMemes.has(memeId)) {
      likedMemes.delete(memeId);
      setMemes(memes.map(meme => 
        meme.id === memeId ? {...meme, likes: meme.likes - 1} : meme
      ));
    } else {
      likedMemes.add(memeId);
      setMemes(memes.map(meme => 
        meme.id === memeId ? {...meme, likes: meme.likes + 1} : meme
      ));
    }
    setLikedMemes(new Set(likedMemes));
  };

  const filteredMemes = memes
    .filter(meme => 
      (selectedCategory === 'all' || meme.category === selectedCategory) &&
      (searchQuery === '' || 
        meme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        meme.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    )
    .sort((a, b) => {
      if (sortBy === 'popular') return b.likes - a.likes;
      if (sortBy === 'recent') return b.id - a.id;
      return 0;
    });

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <div className="card shadow-lg mb-4">
            <div className="card-body">
              <h1 className="text-center mb-4">Tech Meme Central</h1>
              <p className="text-center text-muted">Because debugging requires a sense of humor!</p>

              {/* Search and Filter Section */}
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search memes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="col-md-3">
                  <select 
                    className="form-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-3">
                  <select
                    className="form-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="popular">Most Popular</option>
                    <option value="recent">Most Recent</option>
                  </select>
                </div>
              </div>

              {/* Meme Grid */}
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {filteredMemes.map(meme => (
                  <div key={meme.id} className="col">
                    <div className="card h-100">
                      <img
                        src={meme.image}
                        className="card-img-top"
                        alt={meme.title}
                        style={{ cursor: 'pointer', height: '300px', objectFit: 'cover' }}
                        onClick={() => setCurrentMeme(meme)}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{meme.title}</h5>
                        <p className="card-text small">{meme.description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <button
                              className={`btn btn-sm ${likedMemes.has(meme.id) ? 'btn-primary' : 'btn-outline-primary'}`}
                              onClick={() => handleLike(meme.id)}
                            >
                              ❤️ {meme.likes}
                            </button>
                            <button className="btn btn-sm btn-outline-secondary ms-2">
                              💬 {meme.comments}
                            </button>
                          </div>
                          <span className="badge bg-info">{meme.category}</span>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="d-flex flex-wrap gap-1">
                          {meme.tags.map((tag, index) => (
                            <span key={index} className="badge bg-secondary">#{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meme Modal */}
      {currentMeme && (
        <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{currentMeme.title}</h5>
                <button type="button" className="btn-close" onClick={() => setCurrentMeme(null)}></button>
              </div>
              <div className="modal-body">
                <img src={currentMeme.image} className="img-fluid" alt={currentMeme.title} />
                <div className="mt-3">
                  <p>{currentMeme.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <button
                        className={`btn ${likedMemes.has(currentMeme.id) ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => handleLike(currentMeme.id)}
                      >
                        ❤️ {currentMeme.likes}
                      </button>
                      <button className="btn btn-outline-secondary ms-2">
                        💬 {currentMeme.comments}
                      </button>
                    </div>
                    <span className="badge bg-info">{currentMeme.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechMemeSection;