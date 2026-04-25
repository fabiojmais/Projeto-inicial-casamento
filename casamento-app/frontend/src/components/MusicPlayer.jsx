import { useRef, useState } from "react";

export default function MusicPlayer() {

  const audioRef = useRef(null);
  const [tocando, setTocando] = useState(false);

  function toggleMusic() {
    if (tocando) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setTocando(!tocando);
  }

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/musica.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#d4a373",
          color: "#fff",
          border: "none",
          padding: "10px 15px",
          borderRadius: "50%",
          cursor: "pointer"
        }}
      >
        {tocando ? "⏸" : "▶"}
      </button>
    </>
  );
}