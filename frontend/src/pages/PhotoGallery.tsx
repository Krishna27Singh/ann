import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from '@/components/AnimatedBackground';

const PhotoGallery = () => {
  const navigate = useNavigate();

  const photoPlaceholders = [
    {
      id: 1,
      caption: "Our first photo together",
      description: "The moment that started it all",
      delay: 0.1
    },
    {
      id: 2,
      caption: "Date night memories",
      description: "One of our many romantic evenings",
      delay: 0.2
    },
    {
      id: 3,
      caption: "Adventure time",
      description: "Exploring the world hand in hand",
      delay: 0.3
    },
    {
      id: 4,
      caption: "Lazy Sunday morning",
      description: "Perfect moments of togetherness",
      delay: 0.4
    },
    {
      id: 5,
      caption: "Special celebrations",
      description: "Marking our milestones together",
      delay: 0.5
    },
    {
      id: 6,
      caption: "Everyday happiness",
      description: "The little moments that mean everything",
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
            Our Photo Gallery
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A collection of our most precious moments captured in time. Each photo tells a story of our love.
          </p>
        </motion.div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {photoPlaceholders.map((photo) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: photo.delay,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Photo Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-soft-pink to-lavender flex items-center justify-center">
                <div className="text-center text-foreground/60">
                  <div className="text-6xl mb-4">📷</div>
                  <div className="text-lg font-semibold">Photo {photo.id}</div>
                </div>
              </div>
              
              {/* Photo Caption */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{photo.caption}</h3>
                <p className="text-foreground/70">{photo.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Upload Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-foreground/80 italic">
              "These photo placeholders are waiting for our real memories to be uploaded. 
              Each empty frame represents a moment we'll treasure forever."
            </p>
          </div>
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

export default PhotoGallery;