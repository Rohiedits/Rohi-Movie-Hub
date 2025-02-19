

// import Spline from '@splinetool/react-spline';

// export default function App() {
//   return (
//     <Spline style={{position:"fixed"}}  scene="https://prod.spline.design/FTJdzXDjXRqVRiB1/scene.splinecode" />
//   );
// }

// import Spline from '@splinetool/react-spline';

// export default function App() {
//   return (
//     <Spline style={{position:"fixed"}} scene="https://prod.spline.design/FTJdzXDjXRqVRiB1/scene.splinecode" />
//   );
// }

//past code of Roboat

// import Spline from '@splinetool/react-spline';

// export default function App() {
//   return (
//     <Spline style={{position:"fixed"}} scene="https://prod.spline.design/FTJdzXDjXRqVRiB1/scene.splinecode" />
//   );
// }

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const CodeChargeHome = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const features = [
//     {
//       id: 1,
//       title: "AI Tutor",
//       description: "Get personalized coding assistance 24/7",
//       icon: "🤖",
//       color: "#00ff88"
//     },
//     {
//       id: 2,
//       title: "Code Compiler",
//       description: "Execute your code in real-time",
//       icon: "⚡",
//       color: "#ff00ff"
//     },
//     {
//       id: 3,
//       title: "AI Roadmap",
//       description: "Personalized learning paths for your goals",
//       icon: "🗺️",
//       color: "#00ffff"
//     },
//     {
//       id: 4,
//       title: "Daily Code Challenges",
//       description: "Sharpen your skills with daily problems",
//       icon: "🎯",
//       color: "#ff8800"
//     },
//     {
//       id: 5,
//       title: "Virtual Whiteboard",
//       description: "Collaborate in real-time with your team",
//       icon: "🖊️",
//       color: "#ff0088"
//     },
//     {
//       id: 6,
//       title: "AI Resume Builder",
//       description: "Create professional tech resumes instantly",
//       icon: "📄",
//       color: "#8800ff"
//     },
//     {
//       id: 7,
//       title: "AI Mock Interview",
//       description: "Practice technical interviews with AI",
//       icon: "🎤",
//       color: "#0088ff"
//     },
//     {
//       id: 8,
//       title: "Tech Meme Section",
//       description: "Take a break with developer humor",
//       icon: "😄",
//       color: "#ffff00"
//     },
//     {
//       id: 9,
//       title: "AI Movie Recommender",
//       description: "Discover tech-related movies and shows",
//       icon: "🎬",
//       color: "#ff0000"
//     }
//   ];

//   return (
//     <div style={{ backgroundColor: '#0a0a1a', minHeight: '100vh', color: 'white' }}>
//       {/* Navigation Bar */}
//       <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#0d0d2b' }}>
//         <div className="container">
//           <a className="navbar-brand" href="#" style={{ color: '#00ffff' }}>
//             Code-Charge
//           </a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav me-auto">
//               <li className="nav-item">
//                 <a className="nav-link active" href="#">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Learn</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">AI Tutor</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">More</a>
//               </li>
//             </ul>
//             <form className="d-flex">
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 style={{ 
//                   backgroundColor: '#1a1a3a',
//                   color: 'white',
//                   border: '1px solid #00ffff'
//                 }}
//               />
//               <button className="btn btn-outline-info" type="submit">Search</button>
//             </form>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="py-5" style={{ 
//         backgroundImage: 'linear-gradient(45deg, #0d0d2b, #1a1a4a)',
//         position: 'relative',
//         overflow: 'hidden'
//       }}>
//         <div className="container position-relative" style={{ zIndex: 2 }}>
//           <div className="row align-items-center py-5">
//             <div className="col-lg-6">
//               <h1 className="display-3 fw-bold mb-4" style={{ 
//                 color: '#00ffff',
//                 textShadow: '0 0 10px rgba(0,255,255,0.5)'
//               }}>
//                 Code-Charge
//               </h1>
//               <p className="lead mb-4" style={{ color: '#8888ff' }}>
//                 Power Up Your Coding Skills
//               </p>
//               <button className="btn btn-lg px-5" style={{ 
//                 background: 'linear-gradient(45deg, #00ffff, #8800ff)',
//                 color: 'white',
//                 border: 'none',
//                 boxShadow: '0 0 20px rgba(0,255,255,0.3)'
//               }}>
//                 Get Started
//               </button>
//             </div>
//             <div className="col-lg-6">
//               <div className="position-relative" style={{ 
//                 minHeight: '400px',
//                 background: 'radial-gradient(circle at center, #1a1a4a, transparent)'
//               }}>
//                 <img 
//                   src="/api/placeholder/600/400"
//                   alt="3D Laptop"
//                   className="img-fluid"
//                   style={{
//                     filter: 'drop-shadow(0 0 20px rgba(0,255,255,0.3))'
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="py-5">
//         <div className="container">
//           <h2 className="text-center mb-5" style={{ color: '#00ffff' }}>
//             Features & Tools
//           </h2>
//           <div className="row g-4">
//             {features.map(feature => (
//               <div key={feature.id} className="col-md-4">
//                 <div className="card h-100" style={{ 
//                   backgroundColor: '#1a1a3a',
//                   border: 'none',
//                   transition: 'transform 0.3s',
//                   cursor: 'pointer',
//                   '&:hover': {
//                     transform: 'translateY(-5px)'
//                   }
//                 }}>
//                   <div className="card-body">
//                     <div className="display-5 mb-3" style={{ color: feature.color }}>
//                       {feature.icon}
//                     </div>
//                     <h4 className="card-title" style={{ color: '#00ffff' }}>
//                       {feature.title}
//                     </h4>
//                     <p className="card-text" style={{ color: '#8888ff' }}>
//                       {feature.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="py-4" style={{ backgroundColor: '#0d0d2b' }}>
//         <div className="container">
//           <div className="row">
//             <div className="col-md-4 mb-4">
//               <h5 style={{ color: '#00ffff' }}>Code-Charge</h5>
//               <p style={{ color: '#8888ff' }}>Power up your coding journey</p>
//               <div className="d-flex gap-3">
//                 <a href="#" className="text-decoration-none" style={{ color: '#00ffff' }}>
//                   <i className="bi bi-facebook"></i>
//                 </a>
//                 <a href="#" className="text-decoration-none" style={{ color: '#00ffff' }}>
//                   <i className="bi bi-twitter"></i>
//                 </a>
//                 <a href="#" className="text-decoration-none" style={{ color: '#00ffff' }}>
//                   <i className="bi bi-github"></i>
//                 </a>
//                 <a href="#" className="text-decoration-none" style={{ color: '#00ffff' }}>
//                   <i className="bi bi-linkedin"></i>
//                 </a>
//               </div>
//             </div>
//             <div className="col-md-8">
//               <div className="row">
//                 <div className="col-sm-4 mb-4">
//                   <h6 style={{ color: '#00ffff' }}>Quick Links</h6>
//                   <ul className="list-unstyled">
//                     <li><a href="#" className="text-decoration-none" style={{ color: '#8888ff' }}>Home</a></li>
//                     <li><a href="#" className="text-decoration-none" style={{ color: '#8888ff' }}>Learn</a></li>
//                     <li><a href="#" className="text-decoration-none" style={{ color: '#8888ff' }}>AI Tutor</a></li>
//                     <li><a href="#" className="text-decoration-none" style={{ color: '#8888ff' }}>Features</a></li>
//                   </ul>
//                 </div>
//                 <div className="col-sm-4 mb-4">
//                   <h6 style={{ color: '#00ffff' }}>Resources</h6>
//                   <ul className="list-unstyled">
//                     <li><a href="#" className="text-decoration-none" style={{ color: '#8888ff' }}>Documentation</a></li>
//                     <li><a href="#" className="text-decoration-none" style={{ color: '#8888ff' }}>Blog</a></li>
//                     <li><a href="#" className="text-decoration-none" style={{ color: '#8888ff' }}>Community</a></li>
//                     <li><a href="#" className="text-decoration-none" style={{ color: '#8888ff' }}>Support</a></li>
//                   </ul>
//                 </div>
//                 <div className="col-sm-4 mb-4">
//                   <h6 style={{ color: '#00ffff' }}>Legal</h6>
//                   <ul className="list-unstyled">
//                     <li><a href="#" className="text-decoration-none" style={{ color: '#8888ff' }}>Privacy Policy</a></li>
//                     <li><a href="#" className="text-decoration-none" style={{ color: '#8888ff' }}>Terms of Service</a></li>
//                     <li><a href="#" className="text-decoration-none" style={{ color: '#8888ff' }}>Cookie Policy</a></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <hr style={{ borderColor: '#00ffff' }} />
//           <div className="text-center" style={{ color: '#8888ff' }}>
//             © 2025 Code-Charge. All rights reserved.
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default CodeChargeHome;

//3rd ui

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom CSS
const styles = {
  mainBg: {
    backgroundColor: '#0A0A0F',
    minHeight: '100vh',
    color: '#E1E1E6'
  },
  navbar: {
    backgroundColor: '#12121A',
    borderBottom: '1px solid #1E1E2D'
  },
  navLink: {
    color: '#8B8B93',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#6B46C1'
    }
  },
  searchBar: {
    backgroundColor: '#1A1A23',
    border: '1px solid #2D2D3A',
    color: '#E1E1E6'
  },
  heroSection: {
    background: 'linear-gradient(135deg, #12121A 0%, #1A1A23 100%)',
    padding: '80px 0'
  },
  gradientText: {
    background: 'linear-gradient(135deg, #6B46C1 0%, #434190 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  featureCard: {
    backgroundColor: '#12121A',
    border: '1px solid #1E1E2D',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
    }
  },
  gradientBorder: {
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: '8px',
      padding: '2px',
      background: 'linear-gradient(135deg, #6B46C1 0%, #434190 100%)',
      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'xor',
      maskComposite: 'exclude'
    }
  }
};

const CodeChargeHome = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const features = [
    {
      id: 1,
      title: "AI Tutor",
      description: "Get personalized coding assistance 24/7",
      icon: "🤖",
      gradient: "linear-gradient(135deg, #6B46C1 0%, #434190 100%)"
    },
    {
      id: 2,
      title: "Code Compiler",
      description: "Execute your code in real-time",
      icon: "⚡",
      gradient: "linear-gradient(135deg, #553C9A 0%, #2C5282 100%)"
    },
    {
      id: 3,
      title: "AI Roadmap",
      description: "Personalized learning paths for your goals",
      icon: "🗺️",
      gradient: "linear-gradient(135deg, #4C51BF 0%, #2B6CB0 100%)"
    },
    {
      id: 4,
      title: "Daily Code Challenges",
      description: "Sharpen your skills with daily problems",
      icon: "🎯",
      gradient: "linear-gradient(135deg, #5A67D8 0%, #3182CE 100%)"
    },
    {
      id: 5,
      title: "Virtual Whiteboard",
      description: "Collaborate in real-time with your team",
      icon: "🖊️",
      gradient: "linear-gradient(135deg, #667EEA 0%, #4299E1 100%)"
    },
    {
      id: 6,
      title: "AI Resume Builder",
      description: "Create professional tech resumes instantly",
      icon: "📄",
      gradient: "linear-gradient(135deg, #7F9CF5 0%, #63B3ED 100%)"
    },
    {
      id: 7,
      title: "AI Mock Interview",
      description: "Practice technical interviews with AI",
      icon: "🎤",
      gradient: "linear-gradient(135deg, #6B46C1 0%, #4299E1 100%)"
    },
    {
      id: 8,
      title: "Tech Meme Section",
      description: "Take a break with developer humor",
      icon: "😄",
      gradient: "linear-gradient(135deg, #553C9A 0%, #3182CE 100%)"
    },
    {
      id: 9,
      title: "AI Movie Recommender",
      description: "Discover tech-related movies and shows",
      icon: "🎬",
      gradient: "linear-gradient(135deg, #4C51BF 0%, #2B6CB0 100%)"
    },
    {
      id: 10,
      title: "Academic Guide",
      description: "Academics Related Text-books and Pdf's etc..",
      icon: "📖",
      gradient: "linear-gradient(135deg, #6B46C1 0%, #434190 100%)"
    },
    {
      id: 11,
      title: "Lab-Ai",
      description: "Academics Related to Lab's etc..",
      icon: "🔬",
      gradient: "linear-gradient(135deg, #553C9A 0%, #2C5282 100%)"
    },
    {
      id: 12,
      title: "Attendance-Analyzer",
      description: "Academics Related to Attendence",
      icon: "📋",
      gradient: "linear-gradient(135deg, #553C9A 0%, #2C5282 100%)"
    }
  ];

  return (
    <div style={styles.mainBg}>
      {/* Navigation */}
      
    

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4" style={styles.gradientText}>
                Code-Charge
              </h1>
              <p className="lead mb-4" style={{color: '#8B8B93'}}>
                Power Up Your Coding Skills with Advanced AI Tools
              </p>
              <center>
              <button className="btn btn-lg px-5" style={{
                background: 'linear-gradient(135deg, #6B46C1 0%, #434190 100%)',
                color: '#E1E1E6',
                border: 'none'
              }}>
                Get Started
              </button></center>
            </div>
            <div className="col-lg-6"><br/>
            <center>
              <img 
                //1src="https://media-hosting.imagekit.io//7b9ceeba79da483e/social_network.jpg?Expires=1834594446&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=x3jbWlZtvf9YHbAxhvM1yls2fFyD8QPGf7jmzehnR7QYTM-2Q7JmrzklWx7hXo2836bxxoDwgXstWDyPyNS4LOiHFtb0c-6hXTgIwpZyCp1~SDFQigC1oDQCq4ld-ReLtBsTNjd87kD-BSXzmxrgt6zOEZP6tDcqkhRBraZCq4yU2BNvKx5feZE-3zKxPvRT31nd3eq8uI-38zfcod2ciL4T~JsfZ5dtxar9YZqbFAQoKYLr1mDgA1rrr3ttyMoVYdKUx93TO0ZZ1NqfkPiwRiaeXtTRygvo4ngJnAL0PTwcyOKftA7jwTBDecGN04hsHtJGp0sgTqxtSCG-Le9naw__"
               // src='https://media-hosting.imagekit.io//8c6d98042042417f/ss3.jpg?Expires=1834598984&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ABEkZmX8-mv4suZukWTHAoJy4ZV-B6RpPIic1gfhgbcafOcYTu7ZUjGxKcVXbbzJeCpnBZ-OdIkm2htfJ0C7FybkP2dYIep8Oo~DzwXVD5112h1q8IEs0qeIK3Q3UPhRv6B0XEuSJTK3XcXmEZ96A6LJozd5TJujIMgFy8DjrxdCDTzsRdTr0VYi4X6Olmeqb7N1kWEqtLygsSRGyAAZdmv9kbxgaIsFXklw6BdEPET3fwIHLVX4~aESVc5Cpd8FUqCZ5Qx2aXuScSMfeh~oMuqks2NxKXgfirlrIRlAwLqzvwYbURAPhBz-r8-Jc4MfQr1FKvg8EslcbUho9v45UA__'
               src='https://media-hosting.imagekit.io//f4b69e070f1043cf/ss2.jpg?Expires=1834598984&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nsMEaA9Lxl79bHlrPJQhg4r-Fi2dWCqgRZN9Vihfxcrs5qbLvYO84O4IciBpFg7Ou8WvHRgxOynmZwpQKwKVDAzf6A6CrHnqfhAeX-iXj3XdS-SiD44Wb3WYTdB02waPCQbFUg69dPRJlDoeYWF9uiddI3xEBxZySmFXJPIjOWF5bFEbgrXCU12aL3jSzq67wgkZeWUxjKbSTseV1MUzI5S-3GdM~C2j5BQMHdf~DkclbT2-LKSOwEANo7JMK1DNl51G8LS8nrt3qK5DWWOWEAHLF7olGr00Pm-F~kzLNRwJ1sJ1RAidbi3MUPf-Yaq-ljMNhqVLg7La545VE8i1Cg__'
              //  src='https://media-hosting.imagekit.io//e7c38fc727a14143/ss5.jpg?Expires=1834598984&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fSx4futnXjFwYaLRjoUN~qR1YRjDzberxn8-B1fSIGYb8CVXzXJavQ~j63hGWd4cdo7NScDgAqy3XJb2kv8x9HyJLBoxuOSnXB5yetLRMKLLnUsA6vWN7BCIdJ2gXYKRa~uUmKgLvLXxItAtuiEphlITss8R7BrvuapZf6NmX84avnZBRAKTN9wsd6mWQwaKBgxmYnNpzWTy5TZor50Dl2cvoSMtXnamj~u2apTz2DzRcaXaBbzy85sHfTVHkV3BWfBMRGE2vbE02uN1AiD56Q9B4zEoFk-EJCtQcmIzLMfL4GzPVGPfQwaTHVjDRhS59pVHSYKljTcB3q2hSdTOIg__'
                alt="Coding Platform"
                className="img-fluid rounded-3"
                style={{
                  filter: 'drop-shadow(0 0 30px rgba(107, 70, 193, 0.2))'
                }}
              /></center>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5" style={styles.gradientText}>
            Powerful Features
          </h2>
          <div className="row g-4">
            {features.map(feature => (
              <div key={feature.id} className="col-md-4">
                <div className="card h-100" style={{
                  ...styles.featureCard,
                  background: '#12121A'
                }}>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-4">
                      <span className="display-6 me-3">{feature.icon}</span>
                      <h3 className="h5 mb-0" style={{color: '#E1E1E6'}}>
                        {feature.title}
                      </h3>
                    </div>
                    <p style={{color: '#8B8B93'}}>
                      {feature.description}
                    </p>
                    <div className="mt-3 text-end">
                      <a href="#" className="text-decoration-none" style={{
                        background: feature.gradient,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}>
                        Learn More →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{backgroundColor: '#12121A', borderTop: '1px solid #1E1E2D'}} className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h5 style={styles.gradientText}>Code-Charge</h5>
              <p style={{color: '#8B8B93'}}>Empowering developers with AI-powered tools</p>
              <div className="d-flex gap-3">
                <a href="#" style={{color: '#6B46C1'}}>
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" style={{color: '#6B46C1'}}>
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" style={{color: '#6B46C1'}}>
                  <i className="bi bi-github"></i>
                </a>
                <a href="#" style={{color: '#6B46C1'}}>
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-sm-4">
                  <h6 style={{color: '#E1E1E6'}}>Quick Links</h6>
                  <ul className="list-unstyled">
                    <li><a href="#" style={{color: '#8B8B93', textDecoration: 'none'}}>Home</a></li>
                    <li><a href="#" style={{color: '#8B8B93', textDecoration: 'none'}}>Learn</a></li>
                    <li><a href="#" style={{color: '#8B8B93', textDecoration: 'none'}}>AI Tutor</a></li>
                    <li><a href="#" style={{color: '#8B8B93', textDecoration: 'none'}}>Features</a></li>
                  </ul>
                </div>
                <div className="col-sm-4">
                  <h6 style={{color: '#E1E1E6'}}>Resources</h6>
                  <ul className="list-unstyled">
                    <li><a href="#" style={{color: '#8B8B93', textDecoration: 'none'}}>Documentation</a></li>
                    <li><a href="#" style={{color: '#8B8B93', textDecoration: 'none'}}>Blog</a></li>
                    <li><a href="#" style={{color: '#8B8B93', textDecoration: 'none'}}>Community</a></li>
                    <li><a href="#" style={{color: '#8B8B93', textDecoration: 'none'}}>Support</a></li>
                  </ul>
                </div>
                <div className="col-sm-4">
                  <h6 style={{color: '#E1E1E6'}}>Legal</h6>
                  <ul className="list-unstyled">
                    <li><a href="#" style={{color: '#8B8B93', textDecoration: 'none'}}>Privacy Policy</a></li>
                    <li><a href="#" style={{color: '#8B8B93', textDecoration: 'none'}}>Terms of Service</a></li>
                    <li><a href="#" style={{color: '#8B8B93', textDecoration: 'none'}}>Cookie Policy</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr style={{borderColor: '#1E1E2D'}} />
          <div className="text-center" style={{color: '#8B8B93'}}>
            © 2025 Code-Charge. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CodeChargeHome;