import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from '@/components/AnimatedBackground';

const OurStory = () => {
  const navigate = useNavigate();

  const storyMilestones = [
    {
      date: "The Beginning | First Meet",
      title: "When We First Met",
      description: "It feels like yesterday when our eyes first met. I saw you for the first time and lost into your eyes and there was an instant connection🫠 a spark that I knew was something special. We held our hands for the firs time and it was the best feeling and we also hugged and kissed for the first time :) I can never forget the heavenly feeling of our first kiss and first hug😘 From that very moment, I knew you were going to change my life forever.",
      image: "/images/story-1.jpg",
      delay: 0.1
    },
    {
      date: "Second Meet",
      title: "The Way Towards Intimacy",
      description: "We came closer, we became more intimate, we cuddled for the first time, we became confortable with each other, we fell for each other more and it all felt like a dream. A feeling like we never experienced before🫠 we chatted non stop that day and we red our anniversary letter and all of a sudden my dreams came true💞.",
      image: "/images/story-2.jpg",
      delay: 0.2
    },
    {
      date: "Third meet",
      title: "The Day We Went To Children's Park",
      description: "We met once again, we became intimate once again, we became more comfortable and I fell for you more🫠 You wore a beautiful black dress and were looking like princess came from heaven😘 we took a lot of photos together, we made a lot of memories together and we were the happiest couple :)",
      image: "/images/story-3.jpg",
      delay: 0.3
    },
    {
      date: "Your Birthday | Fourth Meet",
      title: "Our First Trip",
      description: "This was our first trip and I got to see the beauty of Himachal with my Miss Universe :) We travelled together for the first time, I felt sick on the bus and the you comforted my really showed me how much you care about me🥹 we went to the chuch where we kissed openly :) we went to the temples where I prayed for our relationship😊 we went to restaurants. We took lots of photos and we made so much memories for the future :) and I was the happiest boyfriend as always.",
      image: "/images/story-4.jpg",
      delay: 0.4
    },
    {
      date: "Fifth Meet",
      title: "We Entered 2025 Together",
      description: "We were in the hotel mostly cuddling, giving each other kisses and hugs. You felt on my shoulder and it was the best feeling. Once again we had to seperate to meet again for the next time but I was willing to wait forever to meet you once again :)",
      image: "/images/story-5.jpg",
      delay: 0.5
    },
    {
      date: "Valentine's Day | Sixth Meet",
      title: "Our First Valentine's Day Together",
      description: "This was our first valentine's day together and I was very excited to meet you🫠 we went to antariksh mall and took a lot of photos. You sat on the virtual ride chair and I was so happy to see you :).",
      image: "/images/story-6.jpg",
      delay: 0.5
    },
    {
      date: "Electrothon | Seventh Meet",
      title: "I Came To Your College For The First Time",
      description: "This was the time that I came to your college for the first time and the first project that we build together, we sat on the auditorium holding our hands together and I was so happy to be with you :) we went to the dark spots and we kissed and we had our intimate time😘 I wish we kissed for below the LH stairs🥹. After the hackathon we had a fight because of my mistake and misunderstanding and I was very sad that we had to go through that phase but at the end we said goodbyes in a good spirit and I was happy for that and this taught me a lots of learnings",
      image: "/images/story-7.jpg",
      delay: 0.5
    },
    {
      date: "Our Second Trip | Eighth meet",
      title: "Our Trip To Sujanpur",
      description: "This was our short but second trip to sujanpur where we went to a temple and a river, I was very happy to see the river :) we took the best photos there and we made a lot of memories together🫠 I was melted for the whole time seeing you in that lovely pink dress. You were looking like an angel😘. We also went to the TDF together and was very happy to see that place :) we also repaired your laptop and I was so happy that your laptop was okay now😊.",
      image: "/images/story-8.jpg",
      delay: 0.5
    },
    {
      date: "Airport meet | Ninth meet",
      title: "You Went To Banglore",
      description: "You went to Banglore and travelled in the flight for the first time and im so happy that I was with you during this :) I was a bit anxious because you were travelling to a whole new city for the first time and I was thinking that I should be with you but I wasn't able to. You achieved 4th rank in the TI hackathon and I was very happy with your success😘.",
      image: "/images/story-9.jpg",
      delay: 0.5
    },
    {
      date: "Our Third Trip | Tenth meet",
      title: "Our Trip To New Delhi",
      description: "We met after 95 days this time and each day felt like an year. I couldn't express how much excited and emotional I was to see you🥹 we went to the coorporate world together this time and We Secured 6th Position in the Hackathon and I was so happy that we achieved something together :) we travelled to the most famous monuments in India together, we travelled in the India's best metro together and I was so happy that you were in Delhi for the first time and was with me😘 in the end moments I painted your nails, kissed you and we said goodbyes to see each other once again :)",
      image: "/images/story-10.jpg",
      delay: 0.5
    },
    {
      date: "Today",
      title: "Two Years Strong",
      description: "Here we are, two incredible years later, and my love for you has only grown stronger and I have fallend for you more and more of these 750 days😘. We have learned so much in these 2 years, we fought with each other, we cried, but we never gave up :) Every morning I wake up grateful that I get to love you and be loved by you.",
      image: "/images/story-11.jpg",
      delay: 0.5
    },
    {
      date: "Forever",
      title: "Our Future",
      description: "This is just the beginning of our beautiful story. I can't wait to create more memories together, overcome challenges together, and continue growing in love for many years to come 💞",
      image: "/images/story-12.jpg",
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
        <div className="max-w-6xl mx-auto space-y-16 mb-12">
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
              className={`flex flex-col md:flex-row items-start gap-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
            >
              {/* Text Card */}
              <div className="flex-1">
                <div className="bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 rounded-lg p-6 shadow-lg transition-all duration-300">
                  <div className="text-sm font-semibold text-primary mb-2">{milestone.date}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{milestone.title}</h3>
                  <p className="text-foreground/80 leading-relaxed">{milestone.description}</p>
                </div>
              </div>

              {/* Dot */}
              <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0 mt-8 hidden md:block"></div>

              {/* Image Card */}
              <div className="flex-1">
                <div className="overflow-hidden rounded-lg border-2 border-border hover:border-primary/50 shadow-lg transition-all duration-300">
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    className="object-cover w-full h-64 md:h-72"
                  />
                </div>
              </div>
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
