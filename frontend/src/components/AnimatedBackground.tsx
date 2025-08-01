import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface FloatingElement {
  id: number;
  left: string;
  animationDuration: string;
  animationDelay: string;
  size: number;
  shape: 'heart' | 'balloon' | 'butterfly' | 'bouquet';
}

const AnimatedBackground = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    // Generate floating elements
    const elementArray: FloatingElement[] = [];
    for (let i = 0; i < 25; i++) {
      elementArray.push({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDuration: `${8 + Math.random() * 6}s`,
        animationDelay: `${Math.random() * 8}s`,
        size: 15 + Math.random() * 25,
        shape: ['heart', 'balloon', 'butterfly', 'bouquet'][Math.floor(Math.random() * 4)] as 'heart' | 'balloon' | 'butterfly' | 'bouquet'
      });
    }
    setElements(elementArray);
  }, []);

  const HeartShape = ({ size }: { size: number }) => (
    <div 
      className="relative"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <div 
        className="absolute bg-romantic-red transform rotate-45"
        style={{
          width: `${size * 0.6}px`,
          height: `${size * 0.6}px`,
          top: `${size * 0.3}px`,
          left: `${size * 0.2}px`,
        }}
      />
      <div 
        className="absolute bg-romantic-red rounded-full"
        style={{
          width: `${size * 0.6}px`,
          height: `${size * 0.6}px`,
          top: `${size * 0.1}px`,
          left: `${size * 0.05}px`,
        }}
      />
      <div 
        className="absolute bg-romantic-red rounded-full"
        style={{
          width: `${size * 0.6}px`,
          height: `${size * 0.6}px`,
          top: `${size * 0.1}px`,
          left: `${size * 0.35}px`,
        }}
      />
    </div>
  );

  const BalloonShape = ({ size }: { size: number }) => (
    <div className="relative" style={{ width: `${size}px`, height: `${size * 1.3}px` }}>
      <div 
        className="absolute bg-gradient-to-b from-soft-pink to-dark-pink rounded-full opacity-80"
        style={{
          width: `${size * 0.8}px`,
          height: `${size}px`,
          top: 0,
          left: `${size * 0.1}px`,
        }}
      />
      <div 
        className="absolute bg-lavender"
        style={{
          width: '2px',
          height: `${size * 0.4}px`,
          top: `${size}px`,
          left: `${size * 0.5}px`,
        }}
      />
    </div>
  );

  const ButterflyShape = ({ size }: { size: number }) => (
    <div className="relative" style={{ width: `${size}px`, height: `${size * 0.8}px` }}>
      <div 
        className="absolute bg-gradient-to-br from-lavender to-dark-pink rounded-full opacity-70"
        style={{
          width: `${size * 0.4}px`,
          height: `${size * 0.6}px`,
          top: `${size * 0.1}px`,
          left: `${size * 0.1}px`,
          transform: 'rotate(-15deg)',
        }}
      />
      <div 
        className="absolute bg-gradient-to-br from-lavender to-dark-pink rounded-full opacity-70"
        style={{
          width: `${size * 0.4}px`,
          height: `${size * 0.6}px`,
          top: `${size * 0.1}px`,
          left: `${size * 0.5}px`,
          transform: 'rotate(15deg)',
        }}
      />
      <div 
        className="absolute bg-warm-beige rounded-full"
        style={{
          width: '3px',
          height: `${size * 0.8}px`,
          top: 0,
          left: `${size * 0.5}px`,
        }}
      />
    </div>
  );

  const BouquetShape = ({ size }: { size: number }) => (
    <div className="relative" style={{ width: `${size}px`, height: `${size * 1.2}px` }}>
      <div 
        className="absolute bg-gradient-to-t from-romantic-red to-soft-pink rounded-full opacity-75"
        style={{
          width: `${size * 0.3}px`,
          height: `${size * 0.3}px`,
          top: `${size * 0.1}px`,
          left: `${size * 0.2}px`,
        }}
      />
      <div 
        className="absolute bg-gradient-to-t from-dark-pink to-lavender rounded-full opacity-75"
        style={{
          width: `${size * 0.3}px`,
          height: `${size * 0.3}px`,
          top: `${size * 0.2}px`,
          left: `${size * 0.5}px`,
        }}
      />
      <div 
        className="absolute bg-gradient-to-t from-lavender to-blush-pink rounded-full opacity-75"
        style={{
          width: `${size * 0.3}px`,
          height: `${size * 0.3}px`,
          top: `${size * 0.3}px`,
          left: `${size * 0.35}px`,
        }}
      />
      <div 
        className="absolute bg-warm-beige"
        style={{
          width: '4px',
          height: `${size * 0.6}px`,
          top: `${size * 0.6}px`,
          left: `${size * 0.5}px`,
        }}
      />
    </div>
  );

  const renderShape = (element: FloatingElement) => {
    switch (element.shape) {
      case 'heart':
        return <HeartShape size={element.size} />;
      case 'balloon':
        return <BalloonShape size={element.size} />;
      case 'butterfly':
        return <ButterflyShape size={element.size} />;
      case 'bouquet':
        return <BouquetShape size={element.size} />;
      default:
        return <HeartShape size={element.size} />;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Custom Cursor */}
      <style>{`
        * {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="%23dc2626" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>'), auto !important;
        }
      `}</style>
      
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blush-pink via-soft-pink to-warm-beige" />
      
      {/* Floating Elements */}
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute opacity-60"
          style={{
            left: element.left,
            bottom: '-80px',
          }}
          animate={{
            y: [0, -window.innerHeight - 150],
            rotate: element.shape === 'butterfly' ? [0, 20, -20, 0] : [0, 360],
            x: element.shape === 'butterfly' ? [-10, 10, -10] : 0,
          }}
          transition={{
            duration: parseFloat(element.animationDuration),
            delay: parseFloat(element.animationDelay),
            repeat: Infinity,
            ease: element.shape === 'butterfly' ? "easeInOut" : "linear",
          }}
        >
          {renderShape(element)}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedBackground;