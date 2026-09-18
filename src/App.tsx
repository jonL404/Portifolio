import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import GithubSection from './components/GithubSection';
import Now from './components/Now';
import Contact from './components/Contact';
import Footer from './components/Footer';
export default function App() { return <MotionConfig reducedMotion="user"><a className="skip-link" href="#main">Pular para o conteúdo</a><Navbar /><main id="main"><Hero /><About /><Skills /><Projects /><Experience /><GithubSection /><Now /><Contact /></main><Footer /></MotionConfig>; }
