
import { useState, useRef } from 'react';
import Layout from './components/Layout';
// Placeholder imports for pages
import Opening from './pages/Opening';
import SoulConnection from './pages/SoulConnection';
import Memories from './pages/Memories';
import Letter from './pages/Letter';
import FinalPromise from './pages/FinalPromise';
import song from './assets/audio/song.mp3';

// Create empty placeholder components for now to avoid build errors
// We will replace these with actual files in the next steps

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const audioRef = useRef(null);

  const nextPage = () => setCurrentPage(prev => prev + 1);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(e => {
        console.log("Audio play failed:", e);
      });
    }
  };

  const pages = [
    <Opening key="opening" onNext={nextPage} playMusic={playMusic} />,
    <SoulConnection key="soul" onNext={nextPage} />,
    <Memories key="memories" onNext={nextPage} />,
    <Letter key="letter" onNext={nextPage} />,
    <FinalPromise key="final" />
  ];

  return (
    <>
      <audio ref={audioRef} src={song} loop />
      <Layout>
        {pages[currentPage]}
      </Layout>
    </>
  );
}

export default App;
