// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const RoadmapGenerator = () => {
//   const [selectedPath, setSelectedPath] = useState('');
//   const [experience, setExperience] = useState('beginner');
//   const [timeCommitment, setTimeCommitment] = useState('');
//   const [generatedRoadmap, setGeneratedRoadmap] = useState(null);

//   const learningPaths = [
//     { id: 'webdev', name: 'Web Development' },
//     { id: 'dsa', name: 'Data Structures & Algorithms' },
//     { id: 'ai', name: 'Artificial Intelligence' },
//     { id: 'mobile', name: 'Mobile Development' },
//     { id: 'devops', name: 'DevOps' }
//   ];

//   const generateRoadmap = () => {
//     // Simulated AI response - in a real app, this would call an AI API
//     const roadmaps = {
//       webdev: {
//         beginner: {
//           title: "Web Development Roadmap",
//           duration: "6 months",
//           milestones: [
//             {
//               title: "Frontend Fundamentals",
//               tasks: ["HTML5 Basics", "CSS3 Fundamentals", "JavaScript Essentials"]
//             },
//             {
//               title: "Frontend Frameworks",
//               tasks: ["React.js Basics", "State Management", "Component Architecture"]
//             },
//             {
//               title: "Backend Basics",
//               tasks: ["Node.js", "Express.js", "RESTful APIs"]
//             },
//             {
//               title: "Database Integration",
//               tasks: ["MongoDB Basics", "CRUD Operations", "Database Design"]
//             }
//           ]
//         }
//       }
//     };

//     setGeneratedRoadmap(roadmaps.webdev.beginner);
//   };

//   return (
//     <div className="container py-5">
//       <div className="row justify-content-center">
//         <div className="col-md-8">
//           <div className="card shadow-lg">
//             <div className="card-body">
//               <h1 className="text-center mb-4">AI-Powered Learning Roadmap Generator</h1>
              
//               {!generatedRoadmap ? (
//                 <div className="p-4">
//                   <div className="mb-4">
//                     <label className="form-label">Select Your Learning Path</label>
//                     <select 
//                       className="form-select form-select-lg"
//                       value={selectedPath}
//                       onChange={(e) => setSelectedPath(e.target.value)}
//                     >
//                       <option value="">Choose a path...</option>
//                       {learningPaths.map(path => (
//                         <option key={path.id} value={path.id}>
//                           {path.name}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   <div className="mb-4">
//                     <label className="form-label">Experience Level</label>
//                     <div className="btn-group w-100" role="group">
//                       {['beginner', 'intermediate', 'advanced'].map(level => (
//                         <button
//                           key={level}
//                           type="button"
//                           className={`btn ${experience === level ? 'btn-primary' : 'btn-outline-primary'}`}
//                           onClick={() => setExperience(level)}
//                         >
//                           {level.charAt(0).toUpperCase() + level.slice(1)}
//                         </button>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="mb-4">
//                     <label className="form-label">Weekly Time Commitment</label>
//                     <select 
//                       className="form-select"
//                       value={timeCommitment}
//                       onChange={(e) => setTimeCommitment(e.target.value)}
//                     >
//                       <option value="">Select hours per week...</option>
//                       <option value="5">5 hours/week</option>
//                       <option value="10">10 hours/week</option>
//                       <option value="20">20 hours/week</option>
//                       <option value="40">40+ hours/week</option>
//                     </select>
//                   </div>

//                   <button
//                     className="btn btn-primary btn-lg w-100"
//                     onClick={generateRoadmap}
//                     disabled={!selectedPath || !timeCommitment}
//                   >
//                     Generate My Roadmap
//                   </button>
//                 </div>
//               ) : (
//                 <div className="p-4">
//                   <h2 className="mb-4">{generatedRoadmap.title}</h2>
//                   <p className="text-muted">Estimated Duration: {generatedRoadmap.duration}</p>
                  
//                   <div className="timeline">
//                     {generatedRoadmap.milestones.map((milestone, index) => (
//                       <div key={index} className="card mb-3">
//                         <div className="card-body">
//                           <h3 className="h5 mb-3">{milestone.title}</h3>
//                           <ul className="list-group list-group-flush">
//                             {milestone.tasks.map((task, taskIndex) => (
//                               <li key={taskIndex} className="list-group-item">
//                                 {task}
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   <button
//                     className="btn btn-secondary mt-4"
//                     onClick={() => setGeneratedRoadmap(null)}
//                   >
//                     Generate Another Roadmap
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RoadmapGenerator;




//2



import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RoadmapGenerator = () => {
  const [selectedPath, setSelectedPath] = useState('');
  const [experience, setExperience] = useState('beginner');
  const [timeCommitment, setTimeCommitment] = useState('');
  const [generatedRoadmap, setGeneratedRoadmap] = useState(null);

  const learningPaths = [
    { id: 'webdev', name: 'Web Development' },
    { id: 'dsa', name: 'Data Structures & Algorithms' },
    { id: 'ai', name: 'Artificial Intelligence' },
    { id: 'mobile', name: 'Mobile Development' },
    { id: 'devops', name: 'DevOps' }
  ];

  const generateRoadmap = () => {
    // Simulated AI response with comprehensive roadmaps
    const roadmaps = {
      webdev: {
        beginner: {
          title: "Web Development Roadmap",
          duration: "6 months",
          milestones: [
            {
              title: "Frontend Fundamentals",
              timeEstimate: "4-5 weeks",
              tasks: [
                { name: "HTML5 Basics", time: "1 week" },
                { name: "CSS3 Fundamentals", time: "1 week" },
                { name: "JavaScript Essentials", time: "2 weeks" },
                { name: "Responsive Design", time: "1 week" }
              ]
            },
            {
              title: "Frontend Frameworks",
              timeEstimate: "6-7 weeks",
              tasks: [
                { name: "React.js Basics", time: "2 weeks" },
                { name: "State Management", time: "2 weeks" },
                { name: "Component Architecture", time: "1 week" },
                { name: "React Router & Hooks", time: "2 weeks" }
              ]
            },
            {
              title: "Backend Development",
              timeEstimate: "8 weeks",
              tasks: [
                { name: "Node.js Fundamentals", time: "2 weeks" },
                { name: "Express.js", time: "2 weeks" },
                { name: "RESTful APIs", time: "2 weeks" },
                { name: "Authentication & Authorization", time: "2 weeks" }
              ]
            }
          ]
        }
      },
      dsa: {
        beginner: {
          title: "Data Structures & Algorithms Roadmap",
          duration: "4 months",
          milestones: [
            {
              title: "Basic Data Structures",
              timeEstimate: "4 weeks",
              tasks: [
                { name: "Arrays & Strings", time: "1 week" },
                { name: "Linked Lists", time: "1 week" },
                { name: "Stacks & Queues", time: "1 week" },
                { name: "Hash Tables", time: "1 week" }
              ]
            },
            {
              title: "Advanced Data Structures",
              timeEstimate: "4 weeks",
              tasks: [
                { name: "Trees & BST", time: "1.5 weeks" },
                { name: "Heaps", time: "1 week" },
                { name: "Graphs", time: "1.5 weeks" }
              ]
            },
            {
              title: "Algorithms",
              timeEstimate: "8 weeks",
              tasks: [
                { name: "Sorting Algorithms", time: "2 weeks" },
                { name: "Searching Algorithms", time: "1 week" },
                { name: "Dynamic Programming", time: "3 weeks" },
                { name: "Graph Algorithms", time: "2 weeks" }
              ]
            }
          ]
        }
      },
      ai: {
        beginner: {
          title: "Artificial Intelligence Roadmap",
          duration: "8 months",
          milestones: [
            {
              title: "Mathematics & Statistics",
              timeEstimate: "8 weeks",
              tasks: [
                { name: "Linear Algebra", time: "2 weeks" },
                { name: "Calculus", time: "2 weeks" },
                { name: "Probability & Statistics", time: "2 weeks" },
                { name: "Optimization", time: "2 weeks" }
              ]
            },
            {
              title: "Machine Learning Fundamentals",
              timeEstimate: "12 weeks",
              tasks: [
                { name: "Python for ML", time: "2 weeks" },
                { name: "Supervised Learning", time: "4 weeks" },
                { name: "Unsupervised Learning", time: "3 weeks" },
                { name: "Model Evaluation", time: "3 weeks" }
              ]
            },
            {
              title: "Deep Learning",
              timeEstimate: "12 weeks",
              tasks: [
                { name: "Neural Networks", time: "3 weeks" },
                { name: "CNN & Computer Vision", time: "3 weeks" },
                { name: "RNN & NLP", time: "3 weeks" },
                { name: "Transformers", time: "3 weeks" }
              ]
            }
          ]
        }
      },
      mobile: {
        beginner: {
          title: "Mobile Development Roadmap",
          duration: "6 months",
          milestones: [
            {
              title: "Mobile Development Fundamentals",
              timeEstimate: "4 weeks",
              tasks: [
                { name: "Programming Basics (Swift/Kotlin)", time: "2 weeks" },
                { name: "Mobile UI/UX Principles", time: "1 week" },
                { name: "Platform Guidelines", time: "1 week" }
              ]
            },
            {
              title: "Core Concepts",
              timeEstimate: "8 weeks",
              tasks: [
                { name: "UI Components & Layouts", time: "2 weeks" },
                { name: "Navigation & Routing", time: "2 weeks" },
                { name: "State Management", time: "2 weeks" },
                { name: "Data Storage", time: "2 weeks" }
              ]
            },
            {
              title: "Advanced Topics",
              timeEstimate: "12 weeks",
              tasks: [
                { name: "API Integration", time: "3 weeks" },
                { name: "Push Notifications", time: "2 weeks" },
                { name: "App Performance", time: "3 weeks" },
                { name: "App Publishing", time: "4 weeks" }
              ]
            }
          ]
        }
      },
      devops: {
        beginner: {
          title: "DevOps Roadmap",
          duration: "7 months",
          milestones: [
            {
              title: "Foundation",
              timeEstimate: "6 weeks",
              tasks: [
                { name: "Linux Fundamentals", time: "2 weeks" },
                { name: "Networking Basics", time: "2 weeks" },
                { name: "Shell Scripting", time: "2 weeks" }
              ]
            },
            {
              title: "Version Control & CI/CD",
              timeEstimate: "8 weeks",
              tasks: [
                { name: "Git & GitHub", time: "2 weeks" },
                { name: "Jenkins/GitLab CI", time: "3 weeks" },
                { name: "Docker", time: "3 weeks" }
              ]
            },
            {
              title: "Cloud & Infrastructure",
              timeEstimate: "12 weeks",
              tasks: [
                { name: "AWS/Azure Basics", time: "4 weeks" },
                { name: "Kubernetes", time: "4 weeks" },
                { name: "Infrastructure as Code", time: "4 weeks" }
              ]
            }
          ]
        }
      }
    };

    setGeneratedRoadmap(roadmaps[selectedPath][experience]);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-body">
              <h1 className="text-center mb-4">AI-Powered Learning Roadmap Generator</h1>
              
              {!generatedRoadmap ? (
                <div className="p-4">
                  <div className="mb-4">
                    <label className="form-label">Select Your Learning Path</label>
                    <select 
                      className="form-select form-select-lg"
                      value={selectedPath}
                      onChange={(e) => setSelectedPath(e.target.value)}
                    >
                      <option value="">Choose a path...</option>
                      {learningPaths.map(path => (
                        <option key={path.id} value={path.id}>
                          {path.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Experience Level</label>
                    <div className="btn-group w-100" role="group">
                      {['beginner', 'intermediate', 'advanced'].map(level => (
                        <button
                          key={level}
                          type="button"
                          className={`btn ${experience === level ? 'btn-primary' : 'btn-outline-primary'}`}
                          onClick={() => setExperience(level)}
                        >
                          {level.charAt(0).toUpperCase() + level.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Weekly Time Commitment</label>
                    <select 
                      className="form-select"
                      value={timeCommitment}
                      onChange={(e) => setTimeCommitment(e.target.value)}
                    >
                      <option value="">Select hours per week...</option>
                      <option value="5">5 hours/week</option>
                      <option value="10">10 hours/week</option>
                      <option value="20">20 hours/week</option>
                      <option value="40">40+ hours/week</option>
                    </select>
                  </div>

                  <button
                    className="btn btn-primary btn-lg w-100"
                    onClick={generateRoadmap}
                    disabled={!selectedPath || !timeCommitment}
                  >
                    Generate My Roadmap
                  </button>
                </div>
              ) : (
                <div className="p-4">
                  <h2 className="mb-3">{generatedRoadmap.title}</h2>
                  <p className="text-muted mb-4">Total Duration: {generatedRoadmap.duration}</p>
                  
                  <div className="timeline">
                    {generatedRoadmap.milestones.map((milestone, index) => (
                      <div key={index} className="card mb-4">
                        <div className="card-header bg-light">
                          <h3 className="h5 mb-1">{milestone.title}</h3>
                          <small className="text-muted">Estimated Time: {milestone.timeEstimate}</small>
                        </div>
                        <div className="card-body">
                          <ul className="list-group list-group-flush">
                            {milestone.tasks.map((task, taskIndex) => (
                              <li key={taskIndex} className="list-group-item d-flex justify-content-between align-items-center">
                                <span>{task.name}</span>
                                <span className="badge bg-primary rounded-pill">{task.time}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    className="btn btn-secondary mt-4"
                    onClick={() => setGeneratedRoadmap(null)}
                  >
                    Generate Another Roadmap
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

export default RoadmapGenerator;