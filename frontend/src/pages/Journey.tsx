import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from '@/components/AnimatedBackground';

const Journey = () => {
  const navigate = useNavigate();

  const journeyOptions = [
    {
      title: "What I Love About You",
      icon: "💕",
      route: "/love-about-you",
      delay: 0.1
    },
    {
      title: "Our Story",
      icon: "📖",
      route: "/our-story",
      delay: 0.2
    },
    {
      title: "Our Photo Gallery",
      icon: "📸",
      route: "/photo-gallery",
      delay: 0.3
    },
    {
      title: "My Intentions with You",
      icon: "💍",
      route: "/intentions",
      delay: 0.4
    },
    {
      title: "Discover Your Nicknames",
      icon: "🌸",
      route: "/nicknames",
      delay: 0.5
    },
    {
      title: "How I See Our Future",
      icon: "🌟",
      route: "/our-future",
      delay: 0.6
    },
    {
      title: "Open This When You Miss Me",
      icon: "😘",
      route: "/miss",
      delay: 0.6
    },
    {
      title: "Open This When You Are Mad Me",
      icon: "🫠",
      route: "/mad",
      delay: 0.6
    },
    {
      title: "Open This When You Sad",
      icon: "🤗",
      route: "sad",
      delay: 0.6
    },
    {
      title: "Open This When You Need To Smile",
      icon: "🥰",
      route: "/smile",
      delay: 0.6
    },
    {
      title: "Open This When You Doubt Us",
      icon: "🙁",
      route: "/doubt",
      delay: 0.6
    },
    {
      title: "My Message To You",
      icon: "💌",
      route: "/message",
      delay: 0.6
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden font-playwrite">
      <AnimatedBackground />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Our Love Journey
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Choose where you'd like to explore our beautiful story together
          </p>
        </motion.div>

        {/* Journey Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {journeyOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: option.delay,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => navigate(option.route)}
                className="w-full h-32 bg-gradient-to-br from-card to-soft-pink hover:from-soft-pink hover:to-lavender text-foreground border-2 border-border hover:border-primary/50 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center gap-3 group"
                variant="outline"
              >
                <motion.div
                  className="text-4xl group-hover:scale-110 transition-transform duration-200"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  {option.icon}
                </motion.div>
                <span className="font-semibold text-lg text-center leading-tight">
                  {option.title}
                </span>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12"
        >
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="bg-card/80 hover:bg-soft-pink border-border hover:border-primary/50 text-foreground font-playwrite"
          >
            ← Back to Home
          </Button>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-10 left-10 text-3xl text-lavender/40"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          🦋
        </motion.div>
        
        <motion.div
          className="absolute bottom-10 right-10 text-2xl text-romantic-red/40"
          animate={{ 
            y: [-15, 15, -15],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity
          }}
        >
          🌹
        </motion.div>
        
        <motion.div
          className="absolute top-1/4 right-10 text-xl text-dark-pink/30"
          animate={{ 
            x: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity
          }}
        >
          💫
        </motion.div>
      </div>
    </div>
  );
};

export default Journey;