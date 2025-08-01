import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from '@/components/AnimatedBackground';

const OurFuture = () => {
  const navigate = useNavigate();

  const futureDreams = [
    {
      timeline: "Next Year",
      title: "Growing Stronger Together",
      description: "I see us deepening our connection, creating more beautiful memories, and supporting each other through every adventure life brings our way.",
      delay: 0.1
    },
    {
      timeline: "In a Few Years",
      title: "Building Our Dream Life",
      description: "I envision us creating a cozy home together, filled with laughter, love, and all the little things that make a house a home.",
      delay: 0.2
    },
    {
      timeline: "Our Adventures",
      title: "Exploring the World",
      description: "I dream of traveling to beautiful places with you, experiencing different cultures, and creating stories we'll tell for years to come.",
      delay: 0.3
    },
    {
      timeline: "Our Goals",
      title: "Achieving Dreams Together",
      description: "I see us supporting each other's career goals, celebrating victories together, and being each other's biggest motivators.",
      delay: 0.4
    },
    {
      timeline: "Our Family",
      title: "A Beautiful Family",
      description: "I dream of the day we might start a family of our own, watching our love grow and creating little versions of our beautiful bond.",
      delay: 0.5
    },
    {
      timeline: "Forever",
      title: "Growing Old Together",
      description: "I see us years from now, still holding hands, still laughing at each other's jokes, and still as in love as we are today.",
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
            How I See Our Future
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            When I close my eyes and think about our future, I see nothing but beauty, love, and endless possibilities together.
          </p>
        </motion.div>

        {/* Future Dreams Timeline */}
        <div className="max-w-5xl mx-auto space-y-12 mb-12">
          {futureDreams.map((dream, index) => (
            <motion.div
              key={dream.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: dream.delay,
                ease: "easeOut"
              }}
              className="relative"
            >
              <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="text-sm font-semibold text-primary mb-2">{dream.timeline}</div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">{dream.title}</h3>
                    <p className="text-foreground/80 leading-relaxed text-lg">{dream.description}</p>
                  </motion.div>
                </div>
                
                {/* Timeline dot */}
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-romantic-red rounded-full flex-shrink-0 shadow-lg"></div>
                
                <div className="flex-1"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="bg-gradient-to-r from-primary/10 to-romantic-red/10 backdrop-blur-sm border-2 border-primary/20 rounded-lg p-10 max-w-4xl mx-auto mb-12 text-center"
        >
          <h3 className="text-4xl font-bold text-primary mb-6">My Promise to You</h3>
          <p className="text-xl text-foreground/90 leading-relaxed italic mb-6">
            "Whatever the future holds, I promise to face it with you by my side. Every dream we have, every challenge we meet, every beautiful moment we create - we'll do it together. You are my present and my future, my love and my life."
          </p>
          <div className="text-2xl text-primary font-semibold">Forever yours 💕</div>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
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

export default OurFuture;