import React, { useState, useRef, useEffect } from 'react';

function AudioPlayer({ sources }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef();

  const handleEnded = () => {
    if (currentTrackIndex + 1 < sources.length) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [currentTrackIndex]); // Reload and play when currentTrackIndex changes

  return (
    <div>
      <audio
        ref={audioRef}
        autoPlay
        controls
        onEnded={handleEnded}
      >
        <source src={sources[currentTrackIndex]} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <p>Currently playing: {sources[currentTrackIndex]}</p>
    </div>
  );
}

// Usage example
function App() {
  const audioSources = [
    'audio1.mp3',
    'audio2.mp3',
    'audio3.mp3',
  ];

  return (
    <div>
      <h1>Audio Player</h1>
      <AudioPlayer sources={audioSources} />
    </div>
  );
}

export default App;
