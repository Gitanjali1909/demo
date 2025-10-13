'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {

  const [show, setShow] = useState(false);
  return (
    <main>
      <section className="hero-section">
        <motion.img
          src="/ice.jpg"
          alt="Demo"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="relative z-10 text-black text-3xl md:text-5xl font-bold"
        >
          Welcome to Demo Page
        </motion.h2>
        <motion.button
          className="button relative z-10"
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShow(true)}
        >
          Click Me
        </motion.button>
      </section>
    </main>
  );
}
