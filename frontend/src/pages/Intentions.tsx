import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from '@/components/AnimatedBackground';

const Intentions = () => {
  const navigate = useNavigate();

  const intentions = [
    {
      title: "To Love You Unconditionally",
      description: "I promise to love you through every season of life, in good times and challenging ones, with all my heart and soul.",
      icon: "💝",
      delay: 0.1
    },
    {
      title: "To Support Your Dreams",
      description: "I want to be your biggest cheerleader, supporting every goal and dream you have, and celebrating your victories as my own.",
      icon: "🌟",
      delay: 0.2
    },
    {
      title: "To Build a Beautiful Future",
      description: "I see us creating a life filled with adventure, laughter, growth, and endless love. Together, we can achieve anything.",
      icon: "🏠",
      delay: 0.3
    },
    {
      title: "To Be Your Best Friend",
      description: "I want to be not just your partner, but your best friend - someone you can share everything with, laugh with, and lean on.",
      icon: "🤝",
      delay: 0.4
    },
    {
      title: "To Grow Together",
      description: "I promise to grow alongside you, learning, evolving, and becoming better versions of ourselves while staying true to who we are.",
      icon: "🌱",
      delay: 0.5
    },
    {
      title: "To Cherish Every Moment",
      description: "I want to treasure every ordinary day and make extraordinary memories together, appreciating the gift of having you in my life.",
      icon: "⏰",
      delay: 0.6
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden font-playwrite">
      <AnimatedBackground />
      
      <div className="relative z-10 min-h-screen px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            My Intentions with You
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            These are the promises I make to you and the intentions I hold in my heart as we continue this beautiful journey together.
          </p>
        </motion.div>

        {/* Intentions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {intentions.map((intention, index) => (
            <motion.div
              key={intention.title}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: intention.delay,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{intention.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-4">{intention.title}</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed text-center">{intention.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Personal Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="bg-gradient-to-r from-card/90 to-soft-pink/30 backdrop-blur-sm border-2 border-primary/30 rounded-lg p-8 max-w-4xl mx-auto mb-12 text-center"
        >
          <h3 className="text-3xl font-bold text-primary mb-6">From My Heart to Yours</h3>
          <p className="text-lg text-foreground/90 leading-relaxed italic">
            "Every day I wake up grateful for you, and every night I fall asleep excited for tomorrow because I know I get to love you again. 
            You are my heart, my home, and my forever. These intentions aren't just words - they're the foundation of the life I want to build with you."
          </p>
          <div className="mt-6 text-primary font-semibold">With all my love ❤️</div>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
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

export default Intentions;