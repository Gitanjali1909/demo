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

      <section className="w-full overflow-hidden pt-10 pb-10 relative">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ willChange: "transform" }}
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="card flex-shrink-0 w-64 h-80 inline-block">
              <img
                src="/cream.jpg"
                alt={`Card ${i + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
          {[...Array(6)].map((_, i) => (
            <div key={i + 6} className="card flex-shrink-0 w-64 h-80 inline-block">
              <img
                src="/cream.jpg"
                alt={`Card duplicate ${i + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
