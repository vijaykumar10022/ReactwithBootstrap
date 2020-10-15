import React from 'react';

import './App.css';
import Navbar from './components/navbar';
import Title from './components/title';
import About from './components/about';
import Footer from './components/footer';
import Projectsection from './components/ProjectSection';
import Skillstack from './components/skillstack';
import Recommendation from './components/Recommendation';

function App() {
  return (
    <div>
       <Navbar />
       <Title name="Vijay kumar" leadtext="I am a PythonDeveloper in APSSDC" />
       <Recommendation />
       <Skillstack />
       <Projectsection />
       <About />
       <Footer />
    </div>
   
  );
}

export default App;
