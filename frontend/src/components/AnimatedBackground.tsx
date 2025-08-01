import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface FloatingElement {
  id: number;
  left: string;
  animationDuration: string;
  animationDelay: string;
  size: number;
  emoji: string;
  type: 'heart' | 'butterfly' | 'flower';
}

const AnimatedBackground = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  const hearts = ['❤️', '💖', '💕', '💗', '💝', '💘', '💞', '🤍', '🩷', '❣️'];
  const butterflies = ['🦋', '🧚‍♀️', '🧚', '🧚‍♂️'];
  const flowers = ['🌸', '🌺', '🌻', '🌷', '🌹', '🌼', '💐', '🌿', '🍀'];

  const allEmojis = [
    ...hearts.map(emoji => ({ emoji, type: 'heart' as const })),
    ...butterflies.map(emoji => ({ emoji, type: 'butterfly' as const })),
    ...flowers.map(emoji => ({ emoji, type: 'flower' as const }))
  ];

  useEffect(() => {
    const elementArray: FloatingElement[] = [];
    for (let i = 0; i < 0; i++) {
      const randomEmoji = allEmojis[Math.floor(Math.random() * allEmojis.length)];
      elementArray.push({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDuration: `${8 + Math.random() * 10}s`,
        animationDelay: `${Math.random() * 12}s`,
        size: 16 + Math.random() * 32,
        emoji: randomEmoji.emoji,
        type: randomEmoji.type
      });
    }
    setElements(elementArray);
  }, []);

  const renderEmoji = (element: FloatingElement) => {
    return (
      <div
        style={{
          fontSize: `${element.size}px`,
          lineHeight: '1',
        }}
      >
        {element.emoji}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Custom Heart Cursor */}
      <style>{`
        * {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="%23dc2626" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>'), auto !important;
        }
      `}</style>
      
      {/* Romantic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blush-pink via-soft-pink to-warm-beige opacity-95" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-lavender/20 to-transparent" />
      
      {/* Floating Elements */}
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            left: element.left,
            bottom: '-100px',
          }}
          animate={{
            y: [0, -window.innerHeight - 200],
            rotate: element.type === 'butterfly' ? [0, 10, -10, 0] : [0, 360],
            x: element.type === 'butterfly' ? 
              [-15, 15, -15] : 
              element.type === 'flower' ? 
                [-10, 10, -10] : 
                [0],
            scale: element.type === 'flower' ? 
              [1, 1.1, 1] : 
              [1],
          }}
          transition={{
            duration: parseFloat(element.animationDuration),
            delay: parseFloat(element.animationDelay),
            repeat: Infinity,
            ease: element.type === 'butterfly' ? "easeInOut" : 
                  element.type === 'flower' ? "easeInOut" : "linear",
          }}
        >
          {renderEmoji(element)}
        </motion.div>
      ))}
      
      {/* Additional Romantic Sparkles */}
      {Array.from({ length: 15 }, (_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-1 h-1 bg-rose-gold rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            delay: Math.random() * 5,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;