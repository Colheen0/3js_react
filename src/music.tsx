import { useState, useRef } from 'react'

export function Music() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div style={{
      position: 'absolute',
      bottom: '40px',
      right: '40px',
      zIndex: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      pointerEvents: 'auto'
    }}>
      <div className="p4-ui-element" style={{
        background: '#F9E219',
        color: 'black',
        padding: '8px 20px',
        fontWeight: '900',
        transform: 'skewX(-15deg)',
        marginBottom: '10px',
        border: '3px solid black',
        fontSize: '14px',
        letterSpacing: '1px'
      }}>
        NOW PLAYING: CORNER OF MEMORY
      </div>

      <button 
        onClick={togglePlay}
        className="p4-ui-element"
        style={{
          background: isPlaying ? 'white' : '#F9E219',
          color: 'black',
          border: '3px solid black',
          padding: '10px 25px',
          cursor: 'pointer',
          fontWeight: '900',
          transform: 'skewX(-15deg) translateX(-5px)',
          fontSize: '18px',
          transition: 'transform 0.1s'
        }}
        onMouseDown={(e) => e.currentTarget.style.transform = 'skewX(-15deg) scale(0.95)'}
        onMouseUp={(e) => e.currentTarget.style.transform = 'skewX(-15deg) translateX(-5px)'}
      >
        {isPlaying ? '■ STOP' : '► PLAY'}
      </button>

      <audio 
        ref={audioRef} 
        src="public/music/corner-of-memories.mp3" 
        loop 
      />
    </div>
  )
}