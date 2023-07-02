import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

function App() {
  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
        <Navbar/>
        <Home/>
        <About/>
       
        <Skills/>
        <Contact/>
    </main>
  );
}

export default App;
