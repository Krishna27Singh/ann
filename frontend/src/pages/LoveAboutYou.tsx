import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from '@/components/AnimatedBackground';

const LoveAboutYou = () => {
  const navigate = useNavigate();

  const loveReasons = [
    {
      title: "Your Beautiful Smile",
      description: "The way your face lights up when you smile makes my whole world brighter :) It's like sunshine breaking through clouds.",
      delay: 0.1
    },
    {
      title: "Your Face",
      description: "You have the cutest and most inncoent face anyone could ever have babyyy 😘 I love u soooooooo muchhhhhhhh",
      delay: 0.1
    },
    {
      title: "Your Nature",
      description: "Your kind and caring nature always melts my heart 🫠. And I love how much helping you are towards everyone.",
      delay: 0.1
    },
    {
      title: "Your Kind Heart",
      description: "You have the most caring heart ever. You always think of others and spread love wherever you go ❤️",
      delay: 0.2
    },
    {
      title: "The Way You Speak",
      description: "I love the way you speak so politely and so lovely 😃 even with strangers.",
      delay: 0.2
    },
    {
      title: "Your Laugh",
      description: "Your laugh is music to my ears. It's contagious and fills every room with joy and warmth :)))",
      delay: 0.3
    },
    {
      title: "Your Thoughtfulness",
      description: "I love how much thoughtful you are towards everyting. It just makes me happy :)",
      delay: 0.3
    },
    {
      title: "Your Intelligence",
      description: "I love how smart and thoughtful you are. I always get inspired by you and I always love learning from you my guiding angel😘",
      delay: 0.4
    },
    {
      title: "Your Strength",
      description: "You handle every challenge with such grace and determination. Your resilience amazes me every single day.",
      delay: 0.5
    },
    {
      title: "Your Passion",
      description: "I love how much passionate you are towards your career and academics and everything. It just always inspires me and pushes me :)",
      delay: 0.5
    },
    {
      title: "Your Dreams",
      description: "I love hearing about your aspirations and watching you work towards your goals.",
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
            What I Love About You
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            There are countless reasons why I fell in love with you. Here are just a few that make my heart skip a beat every day.
          </p>
        </motion.div>

        {/* Love Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {loveReasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: reason.delay,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">{reason.title}</h3>
              <p className="text-foreground/80 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
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

export default LoveAboutYou;