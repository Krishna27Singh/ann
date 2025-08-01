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
      title: "Your Eyes",
      description: "You have the most beautiful eyes in the world bebi and I just wanna lost into them foreverrrrr🫠",
      delay: 0.1
    },
    {
      title: "Your Voice",
      description: "You have the most calming voice babyyyy",
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
    },
    {
      title: "The Way You Make Me Feel Important",
      description: "I love the way you make me feel important bebi and share everything with me 💞",
      delay: 0.5
    },
    {
      title: "Your Emotional Intelligence",
      description: "I love the way you connect with me emotionally 😘",
      delay: 0.5
    },
    {
      title: "The Way You Support Me",
      description: "I love the way you support me and my dreams baby and I love the way you calm me down 🥹",
      delay: 0.5
    },
    {
      title: "The Way You Listen",
      description: "I love the way you listen to me baby without any judgement. You are the best girlfriend i could ever haveeee💖",
      delay: 0.5
    },
    {
      title: "You Forgiveness",
      description: "I love the way you move on and forgive me for my mistakes baby",
      delay: 0.5
    },
    {
      title: "Late Night Talks",
      description: "Those late night talks felt like a therapy to me, throughout the 2 years :)",
      delay: 0.5
    },
    {
      title: "How You Held My Hand",
      description: "I love the way you held my hand for the first time baby. I felt like im flying in the sky🫠 and I still get butterflies everytime I hold your hands",
      delay: 0.5
    },
    {
      title: "The Way You Hug Me",
      description: "I love the way you hug me babyyyy, I feel so loved🥰",
      delay: 0.5
    },
    {
      title: "Little Details",
      description: "I love the way how you remember little details about me and our relationship baby😊",
      delay: 0.5
    },
    {
      title: "I Love You",
      description: "I love the way when you randomly say I love you to me. it sparks a smile on my face everytime :)))",
      delay: 0.5
    },
    {
      title: "Your Art",
      description: "I love you creativity and you interest in paintings baby. I love you paintings and they are more than everything for me🌎",
      delay: 0.5
    },
    {
      title: "Your Confidence And Charisma",
      description: "I love your confidence and the charisma on you face baby. It inspires me",
      delay: 0.5
    },
    {
      title: "Your Hairs",
      description: "I love your hairs babyy and always get jealous with them because they get to be with the most beautiful gal in the world 24/7 :/",
      delay: 0.5
    },
    {
      title: "Your Fashion Sense",
      description: "I love your fashion sense babyyy😘",
      delay: 0.5
    },
    {
      title: "Your Expression When You Are Excited",
      description: "I love your expression filled with joy when you are excited my baby :)",
      delay: 0.5
    },
    {
      title: "Your Blush",
      description: "I love your natural blush and it is just the perfect thing and it just melts my heartttt🫠😘❤️",
      delay: 0.5
    },
    {
      title: "Your Honesty",
      description: "I love that you were always honest to me baby about everything :)",
      delay: 0.5
    },
    {
      title: "How You Make Me Feel At Home",
      description: "When I'm with you I always feel like I'm at home. You are my comfort zone my sweetheart 😘",
      delay: 0.5
    },
    {
      title: "Your Desires",
      description: "I love that you desire to build a future with me :)",
      delay: 0.5
    },
    {
      title: "Your Willingness To Work Through Tought Times",
      description: "I love that you are always willing to go through the tought times of our relationship. It just makes our relationship much stronger🤗",
      delay: 0.5
    },
    {
      title: "When You Talk To Cats",
      description: "I love the way you talk to cats baby like they understanddd🫠 you are the cutest person. mwuuuaaahhhh",
      delay: 0.5
    },
    {
      title: "Your Voice Messages",
      description: "I love listening to your voice messages. listening to your voice always makes my day :)))",
      delay: 0.5
    },
    {
      title: "The Way You Accept Me",
      description: "I love the way you accept me despite of any differences with you",
      delay: 0.5
    },
    {
      title: "Your Loyalty",
      description: "I love the way you always stays loyal, humble and honest with me😘",
      delay: 0.5
    },
    {
      title: "Your Trust",
      description: "I love the way you trust me and our relationship, that one day we are gonna make out of long distance. And I promise we will, we'll live together forever after that🤗",
      delay: 0.5
    },
    {
      title: "How You Talk To Yourself White Thinking",
      description: "I love the way you talk to yourself while thinking about anything. It just adds to your cutenessss :)",
      delay: 0.5
    },
    {
      title: "The Way You Talk To Your Relatives",
      description: "I love the way you talk to your relatives in the sweetest voice ever babyy😘",
      delay: 0.5
    },
    {
      title: "You Chose me everyday",
      description: "I love the fact that you chosse me everyday and that you are willing to build a future with me 🥹",
      delay: 0.5
    },
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