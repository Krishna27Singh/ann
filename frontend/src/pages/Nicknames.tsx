import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';

const Nicknames = () => {
  const navigate = useNavigate();
  const [currentNickname, setCurrentNickname] = useState(0);

  const nicknames = [
    {
      name: "Beautiful",
      reason: "Because your beauty radiates from inside and out, lighting up every room you enter.",
      color: "from-romantic-red to-dark-pink"
    },
    {
      name: "Sunshine",
      reason: "You brighten my darkest days and make everything better just by being you.",
      color: "from-soft-pink to-lavender"
    },
    {
      name: "Angel",
      reason: "You're heaven-sent, bringing nothing but love, kindness, and joy into my life.",
      color: "from-lavender to-blush-pink"
    },
    {
      name: "Sweetheart",
      reason: "Because you have the sweetest heart and soul, and you make my heart skip a beat.",
      color: "from-blush-pink to-romantic-red"
    },
    {
      name: "Princess",
      reason: "You deserve to be treated like royalty because you're precious beyond measure.",
      color: "from-dark-pink to-soft-pink"
    },
    {
      name: "Love",
      reason: "The simplest yet most powerful name, because you are love itself in my life.",
      color: "from-romantic-red to-lavender"
    }
  ];

  const nextNickname = () => {
    setCurrentNickname((prev) => (prev + 1) % nicknames.length);
  };

  const prevNickname = () => {
    setCurrentNickname((prev) => (prev - 1 + nicknames.length) % nicknames.length);
  };

  return (
    <div className="min-h-screen relative overflow-hidden font-playwrite">
      <AnimatedBackground />
      
      <div className="relative z-10 min-h-screen px-6 py-12 flex flex-col justify-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Your Special Nicknames
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Each nickname I call you comes from the heart and has a special meaning. Discover why I call you these beautiful names.
          </p>
        </motion.div>

        {/* Nickname Display */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            key={currentNickname}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className={`bg-gradient-to-br ${nicknames[currentNickname].color} p-1 rounded-2xl shadow-2xl`}
          >
            <div className="bg-card/95 backdrop-blur-sm rounded-xl p-12 text-center">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-6xl md:text-8xl font-bold text-primary mb-8"
              >
                {nicknames[currentNickname].name}
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-2xl mx-auto"
              >
                {nicknames[currentNickname].reason}
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-8 mb-12">
          <Button
            onClick={prevNickname}
            variant="outline"
            size="lg"
            className="bg-card/80 hover:bg-soft-pink border-border hover:border-primary/50 text-foreground font-playwrite"
          >
            ← Previous
          </Button>
          
          <div className="flex gap-2">
            {nicknames.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentNickname(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentNickname 
                    ? 'bg-primary scale-125' 
                    : 'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
          
          <Button
            onClick={nextNickname}
            variant="outline"
            size="lg"
            className="bg-card/80 hover:bg-soft-pink border-border hover:border-primary/50 text-foreground font-playwrite"
          >
            Next →
          </Button>
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center"
        >
          <Button
            onClick={() => navigate('/journey')}
            variant="outline"
            className="bg-card/80 hover:bg-soft-pink border-border hover:border-primary/50 text-foreground font-playwrite"
          >
            ← Back to Journey
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Nicknames;