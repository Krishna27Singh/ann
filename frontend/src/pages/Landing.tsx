import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from '@/components/AnimatedBackground';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden font-playwrite">
      <AnimatedBackground />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Anniversary Message */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4 leading-tight">
              Happy Anniversary
            </h1>
            <div className="text-3xl md:text-4xl text-dark-pink mb-6">
              & Girlfriend's Day
            </div>
            <div className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Celebrating two beautiful years together and the amazing woman you are
            </div>
          </motion.div>

          {/* Floating Hearts Around Text */}
          

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12"
          >
            <Button
              onClick={() => navigate('/journey')}
              size="lg"
              className="text-xl px-12 py-6 bg-gradient-to-r from-primary to-romantic-red hover:from-romantic-red hover:to-primary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl font-playwrite font-semibold"
            >
              Take a Journey with Me 💖
            </Button>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute top-20 left-20 text-4xl text-lavender/50"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            🌸
          </motion.div>
          
          <motion.div
            className="absolute bottom-20 right-20 text-3xl text-dark-pink/50"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            💐
          </motion.div>
          
          <motion.div
            className="absolute top-32 right-32 text-2xl text-romantic-red/40"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            ✨
          </motion.div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 text-center text-foreground/60 text-lg"
        >
          Made with all my love 💝
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;