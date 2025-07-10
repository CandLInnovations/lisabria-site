'use client';

import React, { useState } from 'react';
import { Menu, X, Heart, Sparkles, Moon, Sun, Flower } from 'lucide-react';

const ReikiHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    'Home',
    'My Approach', 
    'Ready for Reiki',
    'Little Reiki',
    'Reiki Prep',
    'Contact'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-rose-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-purple-400 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-light text-gray-800">Lisa Bria</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-light"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-rose-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-rose-100">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-3 py-2 text-gray-700 hover:text-rose-600 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Sparkles className="w-16 h-16 text-rose-400 animate-pulse" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-400 rounded-full opacity-60"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-400 rounded-full opacity-40"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-light text-gray-800 mb-6 leading-tight">
            Welcome to
            <span className="block bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent font-normal">
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
            <button className="bg-gradient-to-r from-rose-500 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              Book a Session
            </button>
            <button className="border border-rose-300 text-rose-600 px-8 py-3 rounded-full hover:bg-rose-50 transition-all duration-200">
              Pre-reiki Assessment
            </button>
          </div>
        </div>
      </section>

      {/* Assessment Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-800 mb-4">Pre-reiki Assessment</h2>
            <p className="text-gray-600 font-light">Get to know yourself, and revitalize your perception of the world</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-rose-100">
            <p className="text-gray-600 mb-6 leading-relaxed">
              If you&apos;d like to get started immediately on healing and refocusing your energy, book a session now. 
              If you&apos;d like a complimentary assessment and recommendation on how to proceed with reiki and guidance chats, 
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-800 mb-4">
              Heal yourself, he<span className="text-rose-500">A</span>l the world
            </h2>
            <p className="text-gray-600 font-light max-w-2xl mx-auto">
              I know, it sounds sensational doesn&apos;t it? Just think about how many lives you touch on a weekly basis; 
              family, friends, coworkers, even people on the street and in the grocery store. You affect others with 
              the energy you are putting out, positive and negative energy can be equally infectious.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "Would you like to be free of an illness or injury that&apos;s been plaguing you?",
              "Would you feel more present as a parent if you were more balanced?",
              "Would you feel more ambitious if you were doing something you truly enjoyed?",
              "What would you do if you had permission to do anything you want with your life?",
              "What would your days look like without stress or fear driving your decisions?",
              "Do you have something you&apos;ve been trying to accomplish, but can&apos;t seem to get there?",
              "What if you don&apos;t even know what you want to do with your life? Oh for shame!! 🙃",
              "Maybe you&apos;re pretty satisfied in life, but would like to feel even better, and more fulfilled?"
            ].map((question, index) => (
              <div key={index} className="bg-white/50 rounded-xl p-6 border border-rose-100 hover:border-rose-200 transition-colors">
                <p className="text-gray-700">{question}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-rose-100 to-purple-100 rounded-2xl p-8 text-center">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Open up to a rewarding life, full of excitement and anticipation of what tomorrow will bring. 
              Commit to your well-being and begin to live the life you desire. Often people will say &ldquo;I&apos;m too old&rdquo; 
              or &ldquo;I&apos;m too busy&rdquo; or &ldquo;I&apos;m too sick&rdquo; to make any real change. There is nothing that you cannot overcome!
            </p>
            <p className="text-gray-700 mb-8">
              Make a change now, before another moment goes by with you feeling less than. If not reiki, 
              <strong> find what feels right for you and go with it!</strong> Experience life with true comfort, passion, and joy!
            </p>
            <button className="bg-gradient-to-r from-rose-500 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              Book a Session
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/40">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Remote Quantum Reiki */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-rose-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Moon className="w-8 h-8 text-purple-500 mr-3" />
                <h3 className="text-xl font-light text-gray-800">Remote Quantum Reiki</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Receive powerful, healing reiki without leaving the comfort of your home. Therapeutic energy can be 
                sent through space and time, quantum physics makes remote healing possible.
              </p>
              <button className="text-rose-600 hover:text-rose-700 font-medium">Book a session →</button>
            </div>

            {/* Little Reiki */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-rose-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Sun className="w-8 h-8 text-yellow-500 mr-3" />
                <h3 className="text-xl font-light text-gray-800">Little Reiki</h3>
              </div>
              <h4 className="text-rose-600 font-medium mb-2">Growing Up Power-Up</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Encourage and empower your little ones to trust their intuition and maintain their self worth, 
                as they learn and grow.
              </p>
              <div className="space-y-2">
                <button className="block text-rose-600 hover:text-rose-700 font-medium">Read more →</button>
                <button className="block text-rose-600 hover:text-rose-700 font-medium">Book a session →</button>
              </div>
            </div>

            {/* Group Meditation */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-rose-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-rose-500 mr-3" />
                <h3 className="text-xl font-light text-gray-800">Reiki Meditation</h3>
              </div>
              <h4 className="text-rose-600 font-medium mb-2">Group Healing Meditation</h4>
              <p className="text-gray-600 mb-4 leading-relaxed">
                This group reiki meditation will take place every day at Noon MST. Submit the name of anyone, 
                worldwide, you would like to send unconditional love and healing energy to.
              </p>
              <button className="bg-gradient-to-r from-rose-400 to-purple-500 text-white px-6 py-2 rounded-full text-sm hover:shadow-lg transition-all">
                Join our worldwide healing meditation!
              </button>
            </div>

            {/* Animals */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-rose-100 hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <Flower className="w-8 h-8 text-green-500 mr-3" />
                <h3 className="text-xl font-light text-gray-800">Reiki for Animals</h3>
              </div>
              <h4 className="text-rose-600 font-medium mb-2">Pets and Livestock</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Stagnant energy and trauma can affect our animals too. Schedule a reiki treatment for sick or 
                stressed animals in your care.
              </p>
              <button className="text-rose-600 hover:text-rose-700 font-medium">Book a session →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Note */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white/50 rounded-2xl p-8 border border-rose-100">
            <p className="text-gray-700 leading-relaxed">
              You will receive a guidance and wellness chat as part of each session, regarding what came through 
              during your session and recommend steps for healing and alignment. I am also available via email 
              and text between sessions for questions and recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-white/60 border-t border-rose-100">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 text-sm">
            © 2025 Lisa Bria, holistic healing through energy transmutation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ReikiHomepage;