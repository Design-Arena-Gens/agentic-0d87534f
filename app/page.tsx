'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import ChessBoard3D from '@/components/ChessBoard3D';
import AuroraBackground from '@/components/AuroraBackground';

export default function Home() {
  return (
    <main className="relative w-full bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AuroraBackground />

        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="w-full h-full max-w-2xl max-h-[600px]">
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 5, 8]} />
              <ChessBoard3D />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 4}
              />
            </Canvas>
          </div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Master Chess Openings & Tactics
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-2xl md:text-3xl text-gray-300 mb-4">
              Smarter, Faster, Forever.
            </p>
            <p className="text-xl md:text-2xl text-gray-400 mb-12">
              AI-powered spaced repetition that helps you remember every move.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="group relative px-12 py-5 text-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
              <span className="relative z-10">Start Training Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative min-h-screen py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              AI-Powered Learning
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our intelligent system adapts to your learning pace, ensuring you master every position
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Spaced Repetition',
                description: 'Scientific learning algorithm that optimizes memory retention',
                icon: '🧠',
                delay: 0,
              },
              {
                title: 'Opening Trainer',
                description: 'Build a bulletproof opening repertoire with interactive training',
                icon: '♟️',
                delay: 0.2,
              },
              {
                title: 'Tactical Puzzles',
                description: 'Sharpen your calculation skills with AI-curated puzzle sets',
                icon: '⚡',
                delay: 0.4,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: feature.delay }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass-card p-8 group cursor-pointer transition-all duration-300"
              >
                <div className="text-6xl mb-6 group-hover:animate-float">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-lg">{feature.description}</p>
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-16 glow-effect">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {[
                { number: '1M+', label: 'Positions Trained' },
                { number: '50K+', label: 'Active Learners' },
                { number: '95%', label: 'Retention Rate' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
                    {stat.number}
                  </div>
                  <div className="text-xl text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative min-h-screen py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Three simple steps to chess mastery
            </p>
          </motion.div>

          <div className="space-y-32">
            {[
              {
                step: '01',
                title: 'Choose Your Repertoire',
                description: 'Select openings and tactical themes you want to master',
                gradient: 'from-indigo-500 to-purple-500',
              },
              {
                step: '02',
                title: 'Train Daily',
                description: 'Practice positions with intelligent spaced repetition',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                step: '03',
                title: 'Track Progress',
                description: 'Watch your retention rate soar with detailed analytics',
                gradient: 'from-pink-500 to-red-500',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-12`}
              >
                <div className="flex-1">
                  <div
                    className={`text-8xl md:text-9xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent opacity-20`}
                  >
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 glass-card p-12">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    {item.title}
                  </h3>
                  <p className="text-xl text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-16 glow-effect"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Level Up?
            </h2>
            <p className="text-2xl text-gray-300 mb-12">
              Join thousands of players improving their chess every day
            </p>
            <button className="group relative px-16 py-6 text-2xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
              <span className="relative z-10">Get Started Free</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500">
            © 2024 Chess Trainer AI. Master every move.
          </p>
        </div>
      </footer>
    </main>
  );
}
