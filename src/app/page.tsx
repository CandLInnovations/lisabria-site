'use client';

import React from 'react';
import { Moon, Sun, Heart, Flower } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-indigo-200 to-violet-300 relative overflow-hidden">
      <Navbar />
      
      {/* Sacred Geometry Background */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        {/* Mandala Pattern 1 - Moved lower */}
        <div className="absolute top-40 left-10 w-32 h-32">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-spin" style={{animationDuration: '30s'}}>
            <g stroke="rgb(139 69 197)" strokeWidth="0.8" fill="none">
              <circle cx="50" cy="50" r="45" opacity="0.4"/>
              <circle cx="50" cy="50" r="35" opacity="0.5"/>
              <circle cx="50" cy="50" r="25" opacity="0.6"/>
              <circle cx="50" cy="50" r="15" opacity="0.7"/>
              <path d="M50,5 L55,25 L50,45 L45,25 Z" opacity="0.5"/>
              <path d="M50,5 L55,25 L50,45 L45,25 Z" opacity="0.5" transform="rotate(45 50 50)"/>
              <path d="M50,5 L55,25 L50,45 L45,25 Z" opacity="0.5" transform="rotate(90 50 50)"/>
              <path d="M50,5 L55,25 L50,45 L45,25 Z" opacity="0.5" transform="rotate(135 50 50)"/>
              <path d="M50,5 L55,25 L50,45 L45,25 Z" opacity="0.5" transform="rotate(180 50 50)"/>
              <path d="M50,5 L55,25 L50,45 L45,25 Z" opacity="0.5" transform="rotate(225 50 50)"/>
              <path d="M50,5 L55,25 L50,45 L45,25 Z" opacity="0.5" transform="rotate(270 50 50)"/>
              <path d="M50,5 L55,25 L50,45 L45,25 Z" opacity="0.5" transform="rotate(315 50 50)"/>
            </g>
          </svg>
        </div>
        
        {/* Mandala Pattern 2 */}
        <div className="absolute top-1/3 right-16 w-24 h-24">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}>
            <g stroke="rgb(99 102 241)" strokeWidth="0.8" fill="none">
              <circle cx="50" cy="50" r="40" opacity="0.4"/>
              <circle cx="50" cy="50" r="30" opacity="0.5"/>
              <circle cx="50" cy="50" r="20" opacity="0.6"/>
              <path d="M50,10 Q60,30 50,50 Q40,30 50,10" opacity="0.5"/>
              <path d="M50,10 Q60,30 50,50 Q40,30 50,10" opacity="0.5" transform="rotate(60 50 50)"/>
              <path d="M50,10 Q60,30 50,50 Q40,30 50,10" opacity="0.5" transform="rotate(120 50 50)"/>
              <path d="M50,10 Q60,30 50,50 Q40,30 50,10" opacity="0.5" transform="rotate(180 50 50)"/>
              <path d="M50,10 Q60,30 50,50 Q40,30 50,10" opacity="0.5" transform="rotate(240 50 50)"/>
              <path d="M50,10 Q60,30 50,50 Q40,30 50,10" opacity="0.5" transform="rotate(300 50 50)"/>
            </g>
          </svg>
        </div>
        
        {/* Small Mandala */}
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-pulse" style={{animationDuration: '4s'}}>
            <g stroke="rgb(124 58 237)" strokeWidth="1" fill="none">
              <circle cx="50" cy="50" r="35" opacity="0.5"/>
              <circle cx="50" cy="50" r="25" opacity="0.6"/>
              <circle cx="50" cy="50" r="15" opacity="0.7"/>
              <circle cx="50" cy="50" r="8" opacity="0.8"/>
            </g>
          </svg>
        </div>
        
        {/* Additional Geometric Patterns */}
        <div className="absolute top-2/3 right-1/4 w-16 h-16">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-spin" style={{animationDuration: '20s'}}>
            <g stroke="rgb(168 85 247)" strokeWidth="1" fill="none">
              <polygon points="50,15 65,35 50,55 35,35" opacity="0.6"/>
              <polygon points="50,25 60,40 50,45 40,40" opacity="0.7"/>
            </g>
          </svg>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              {/* Lotus Flower SVG */}
              <div className="w-20 h-20 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <g fill="url(#lotusGradient)">
                    {/* Outer petals */}
                    <ellipse cx="50" cy="70" rx="8" ry="25" opacity="0.8" transform="rotate(0 50 50)"/>
                    <ellipse cx="50" cy="70" rx="8" ry="25" opacity="0.8" transform="rotate(45 50 50)"/>
                    <ellipse cx="50" cy="70" rx="8" ry="25" opacity="0.8" transform="rotate(90 50 50)"/>
                    <ellipse cx="50" cy="70" rx="8" ry="25" opacity="0.8" transform="rotate(135 50 50)"/>
                    <ellipse cx="50" cy="70" rx="8" ry="25" opacity="0.8" transform="rotate(180 50 50)"/>
                    <ellipse cx="50" cy="70" rx="8" ry="25" opacity="0.8" transform="rotate(225 50 50)"/>
                    <ellipse cx="50" cy="70" rx="8" ry="25" opacity="0.8" transform="rotate(270 50 50)"/>
                    <ellipse cx="50" cy="70" rx="8" ry="25" opacity="0.8" transform="rotate(315 50 50)"/>
                    
                    {/* Inner petals */}
                    <ellipse cx="50" cy="65" rx="6" ry="18" opacity="0.9" transform="rotate(22.5 50 50)"/>
                    <ellipse cx="50" cy="65" rx="6" ry="18" opacity="0.9" transform="rotate(67.5 50 50)"/>
                    <ellipse cx="50" cy="65" rx="6" ry="18" opacity="0.9" transform="rotate(112.5 50 50)"/>
                    <ellipse cx="50" cy="65" rx="6" ry="18" opacity="0.9" transform="rotate(157.5 50 50)"/>
                    <ellipse cx="50" cy="65" rx="6" ry="18" opacity="0.9" transform="rotate(202.5 50 50)"/>
                    <ellipse cx="50" cy="65" rx="6" ry="18" opacity="0.9" transform="rotate(247.5 50 50)"/>
                    <ellipse cx="50" cy="65" rx="6" ry="18" opacity="0.9" transform="rotate(292.5 50 50)"/>
                    <ellipse cx="50" cy="65" rx="6" ry="18" opacity="0.9" transform="rotate(337.5 50 50)"/>
                    
                    {/* Center */}
                    <circle cx="50" cy="50" r="8" fill="url(#centerGradient)"/>
                  </g>
                  
                  <defs>
                    <linearGradient id="lotusGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgb(196 181 253)" stopOpacity="0.8"/>
                      <stop offset="50%" stopColor="rgb(139 92 246)" stopOpacity="0.9"/>
                      <stop offset="100%" stopColor="rgb(124 58 237)" stopOpacity="1"/>
                    </linearGradient>
                    <radialGradient id="centerGradient">
                      <stop offset="0%" stopColor="rgb(255 255 255)" stopOpacity="0.9"/>
                      <stop offset="100%" stopColor="rgb(196 181 253)" stopOpacity="0.8"/>
                    </radialGradient>
                  </defs>
                </svg>
              </div>
              
              {/* Energy Rings - Slowed Down */}
              <div className="absolute inset-0 rounded-full border-2 border-purple-300 animate-ping" style={{animationDuration: '3s'}}></div>
              <div className="absolute -inset-2 rounded-full border border-violet-300 opacity-50 animate-ping" style={{animationDelay: '2s', animationDuration: '3s'}}></div>
              <div className="absolute -inset-4 rounded-full border border-indigo-300 opacity-30 animate-ping" style={{animationDelay: '4s', animationDuration: '3s'}}></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-light text-gray-800 mb-6 leading-tight">
            Welcome to
            <span className="block bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent font-normal">
              Wellness
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 font-light max-w-2xl mx-auto">
            A path to holistic healing through energy transmutation
          </p>
          
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            Unfamiliar with energy healing? Read more about my approach, or contact me with questions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              Book a Session
            </button>
            <button className="border border-purple-300 text-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition-all duration-200">
              Pre-reiki Assessment
            </button>
          </div>
        </div>
      </section>

      {/* What is Reiki Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/60 to-purple-200/80 backdrop-blur-sm relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-800 mb-6">What is Reiki?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-violet-400 mx-auto mb-6"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Reiki is a Japanese healing technique that promotes relaxation and reduces stress through the channeling of universal life force energy. 
                The word "Reiki" comes from two Japanese words: "Rei" meaning universal or spiritual, and "Ki" meaning life force energy.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                This ancient practice is based on the principle that energy flows through all living things. When this energy is low 
                or blocked, we're more likely to feel stressed, unwell, or emotionally imbalanced. Through remote quantum reiki, 
                I can channel healing energy across any distance, as energy transcends physical boundaries.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                During a remote session, you can relax in the comfort of your own space while I connect with your energy field 
                and direct healing where it's needed most. Many clients report feeling warmth, tingling, deep peace, or emotional 
                releases during these sessions, even from thousands of miles away.
              </p>
            </div>
            
            <div className="relative">
              {/* Chakra Energy Visualization */}
              <div className="bg-gradient-to-br from-purple-200/90 to-violet-300/90 rounded-3xl p-8 relative overflow-hidden shadow-lg border border-purple-300">
                <h3 className="text-xl font-light text-gray-800 mb-6 text-center">Energy Centers</h3>
                
                <div className="space-y-4">
                  {[
                    { name: 'Crown', color: 'bg-violet-400' },
                    { name: 'Third Eye', color: 'bg-indigo-400' },
                    { name: 'Throat', color: 'bg-blue-400' },
                    { name: 'Heart', color: 'bg-green-400' },
                    { name: 'Solar Plexus', color: 'bg-yellow-400' },
                    { name: 'Sacral', color: 'bg-orange-400' },
                    { name: 'Root', color: 'bg-red-400' }
                  ].map((chakra, index) => (
                    <div key={chakra.name} className="flex items-center space-x-4">
                      <div className={`w-6 h-6 ${chakra.color} rounded-full animate-pulse shadow-md`} 
                           style={{animationDelay: `${(6-index) * 0.4}s`}}>
                      </div>
                      <span className="text-sm text-gray-700 font-medium">{chakra.name} Chakra</span>
                      <div className="flex-1 h-px bg-gradient-to-r from-gray-400 to-transparent"></div>
                    </div>
                  ))}
                </div>
                
                {/* Ascending Energy Flow Animation */}
                <div 
                  className="absolute right-4 top-4 bottom-4 w-2 rounded-full opacity-70 animate-pulse shadow-sm"
                  style={{
                    background: 'linear-gradient(to top, #fca5a5, #fdba74, #fde047, #86efac, #93c5fd, #a5b4fc, #c4b5fd)'
                  }}
                ></div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Benefits with Purple Icons */}
          <div className="mt-12 bg-gradient-to-r from-purple-300/70 to-violet-300/70 rounded-2xl p-8 shadow-lg border border-purple-300">
            <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">Benefits of Remote Reiki</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full flex items-center justify-center mb-3 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-700 font-medium">Reduces Stress</span>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full flex items-center justify-center mb-3 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-700 font-medium">Emotional Balance</span>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full flex items-center justify-center mb-3 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-700 font-medium">Spiritual Growth</span>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full flex items-center justify-center mb-3 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-700 font-medium">From Your Home</span>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full flex items-center justify-center mb-3 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-700 font-medium">Any Distance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-800 mb-4">Pre-reiki Assessment</h2>
            <p className="text-gray-600 font-light">Get to know yourself, and revitalize your perception of the world</p>
          </div>
          
          <div className="bg-gradient-to-r from-white/70 to-purple-200/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-300">
            <p className="text-gray-600 mb-6 leading-relaxed">
              If you'd like to get started immediately on healing and refocusing your energy, book a session now. 
              If you'd like a complimentary assessment and recommendation on how to proceed with reiki and guidance chats, 
              please fill out this introspective self evaluation, and together we can make a plan to help you succeed 
              on your wellness journey.
            </p>
            <p className="text-gray-700 italic">
              I believe everyone should have access to their full potential, and I believe reiki to be a wonderful 
              tool to help you achieve that.
            </p>
          </div>
        </div>
      </section>

      {/* Heal Yourself Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-100/80 to-white/70">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-800 mb-4">
              Heal yourself, he<span className="text-purple-600">A</span>l the world
            </h2>
            <p className="text-gray-600 font-light max-w-2xl mx-auto">
              I know, it sounds sensational doesn't it? Just think about how many lives you touch on a weekly basis; 
              family, friends, coworkers, even people on the street and in the grocery store. You affect others with 
              the energy you are putting out, positive and negative energy can be equally infectious.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "Would you like to be free of an illness or injury that's been plaguing you?",
              "Would you feel more present as a parent if you were more balanced?",
              "Would you feel more ambitious if you were doing something you truly enjoyed?",
              "What would you do if you had permission to do anything you want with your life?",
              "What would your days look like without stress or fear driving your decisions?",
              "Do you have something you've been trying to accomplish, but can't seem to get there?",
              "What if you don't even know what you want to do with your life? Oh for shame!! 🙃",
              "Maybe you're pretty satisfied in life, but would like to feel even better, and more fulfilled?"
            ].map((question, index) => (
              <div key={index} className="bg-gradient-to-br from-white/80 to-purple-100/70 rounded-xl p-6 border border-purple-300 hover:border-purple-400 transition-all duration-200 hover:shadow-lg shadow-md">
                <p className="text-gray-700">{question}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-300/80 to-violet-300/80 rounded-2xl p-8 text-center shadow-lg border border-purple-400">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Open up to a rewarding life, full of excitement and anticipation of what tomorrow will bring. 
              Commit to your well-being and begin to live the life you desire. Often people will say "I'm too old" 
              or "I'm too busy" or "I'm too sick" to make any real change. There is nothing that you cannot overcome!
            </p>
            <p className="text-gray-700 mb-8">
              Make a change now, before another moment goes by with you feeling less than. If not reiki, 
              <strong> find what feels right for you and go with it!</strong> Experience life with true comfort, passion, and joy!
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              Book a Session
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-800 mb-4">Healing Services</h2>
            <p className="text-gray-600 font-light max-w-2xl mx-auto">
              Choose the healing approach that resonates with your current needs and circumstances
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Remote Quantum Reiki */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-purple-300 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Moon className="w-8 h-8 text-purple-500 mr-3" />
                <h3 className="text-xl font-light text-gray-800">Remote Quantum Reiki</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Receive powerful, healing reiki without leaving the comfort of your home. Therapeutic energy can be 
                sent through space and time, quantum physics makes remote healing possible.
              </p>
              <button className="text-purple-600 hover:text-purple-700 font-medium">Book a session →</button>
            </div>

            {/* Little Reiki */}
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Sun className="w-8 h-8 text-yellow-500 mr-3" />
                <h3 className="text-xl font-light text-gray-800">Little Reiki</h3>
              </div>
              <h4 className="text-purple-600 font-medium mb-2">Growing Up Power-Up</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Encourage and empower your little ones to trust their intuition and maintain their self worth, 
                as they learn and grow.
              </p>
              <div className="space-y-2">
                <button className="block text-purple-600 hover:text-purple-700 font-medium">Read more →</button>
                <button className="block text-purple-600 hover:text-purple-700 font-medium">Book a session →</button>
              </div>
            </div>

            {/* Group Meditation */}
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-purple-500 mr-3" />
                <h3 className="text-xl font-light text-gray-800">Reiki Meditation</h3>
              </div>
              <h4 className="text-purple-600 font-medium mb-2">Group Healing Meditation</h4>
              <p className="text-gray-600 mb-4 leading-relaxed">
                This group reiki meditation will take place every day at Noon MST. Submit the name of anyone, 
                worldwide, you would like to send unconditional love and healing energy to.
              </p>
              <button className="bg-gradient-to-r from-purple-400 to-violet-500 text-white px-6 py-2 rounded-full text-sm hover:shadow-lg transition-all">
                Join our worldwide healing meditation!
              </button>
            </div>

            {/* Animals */}
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-purple-100 hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <Flower className="w-8 h-8 text-green-500 mr-3" />
                <h3 className="text-xl font-light text-gray-800">Reiki for Animals</h3>
              </div>
              <h4 className="text-purple-600 font-medium mb-2">Pets and Livestock</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Stagnant energy and trauma can affect our animals too. Schedule a reiki treatment for sick or 
                stressed animals in your care.
              </p>
              <button className="text-purple-600 hover:text-purple-700 font-medium">Book a session →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Note */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-100/60 to-white/80">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white/70 rounded-2xl p-8 border border-purple-300 shadow-md">
            <h3 className="text-xl font-light text-gray-800 mb-4">Ongoing Support</h3>
            <p className="text-gray-700 leading-relaxed">
              You will receive a guidance and wellness chat as part of each session, regarding what came through 
              during your session and recommend steps for healing and alignment. I am also available via email 
              and text between sessions for questions and recommendations.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}