import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from '@/components/AnimatedBackground';

const OurStory = () => {
  const navigate = useNavigate();

  const storyMilestones = [
    {
      date: "The Beginning",
      title: "When We First Met",
      description: "It feels like yesterday when our eyes first met. There was an instant connection, a spark that I knew was something special. From that very moment, I knew you were going to change my life forever.",
      delay: 0.1
    },
    {
      date: "First Date",
      title: "Our Magical First Date",
      description: "I was so nervous, but you made me feel so comfortable. We talked for hours like we'd known each other forever. That night, I knew I wanted to spend every day getting to know you better.",
      delay: 0.2
    },
    {
      date: "Becoming Official",
      title: "The Day You Said Yes",
      description: "When you agreed to be my girlfriend, it was the happiest day of my life. My heart was beating so fast, but seeing your beautiful smile made everything perfect.",
      delay: 0.3
    },
    {
      date: "First Year",
      title: "Growing Together",
      description: "Our first year was filled with so many beautiful memories. Every day with you taught me something new about love, about life, and about how amazing it feels to have someone who truly understands you.",
      delay: 0.4
    },
    {
      date: "Today",
      title: "Two Years Strong",
      description: "Here we are, two incredible years later, and my love for you has only grown stronger. Every morning I wake up grateful that I get to love you and be loved by you.",
      delay: 0.5
    },
    {
      date: "Forever",
      title: "Our Future",
      description: "This is just the beginning of our beautiful story. I can't wait to create more memories, overcome challenges together, and continue growing in love for many years to come.",
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
            Our Love Story
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Every love story is beautiful, but ours is my favorite. Here's how our incredible journey began and continues to unfold.
          </p>
        </motion.div>

        {/* Story Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 mb-12">
          {storyMilestones.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: milestone.delay,
                ease: "easeOut"
              }}
              className={`flex items-start gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className="flex-1">
                <div className="bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 rounded-lg p-6 shadow-lg transition-all duration-300">
                  <div className="text-sm font-semibold text-primary mb-2">{milestone.date}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{milestone.title}</h3>
                  <p className="text-foreground/80 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
              <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0 mt-8"></div>
              <div className="flex-1"></div>
            </motion.div>
          ))}
        </div>

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

export default OurStory;