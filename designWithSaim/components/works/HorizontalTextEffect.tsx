// components/HorizontalTextEffect.tsx
import { motion } from 'framer-motion';

const HorizontalTextEffect = () => {
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        style={{ animation: 'moveText 5s infinite' }}
      />
      <motion.h1
        className="text-white text-4xl font-bold tracking-tight absolute top-1/2 left-0 transform -translate-y-1/2"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 5,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        Your Text Here sdaasd
      </motion.h1>
    </div>
  );
};

export default HorizontalTextEffect;