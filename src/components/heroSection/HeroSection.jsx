import { Typography } from '@material-tailwind/react'
import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';

function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{ 
                background: mode === 'dark' 
                    ? 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)' 
                    : 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
            }}>
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl floating-animation"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl floating-animation" style={{animationDelay: '4s'}}></div>
            </div>

            {/* Hero Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Logo with Glass Effect */}
                    <div className="mb-8 flex justify-center">
                        <div className="glass-effect rounded-3xl p-8 floating-animation pulse-glow">
                            <svg className='w-24 h-24' fill="#fff" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z"/>
                            </svg>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-6xl md:text-8xl font-black mb-6 text-white leading-tight">
                        <span className="block">Modern</span>
                        <span className="gradient-text block">Blog Experience</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Discover stories, insights, and ideas that inspire. 
                        <span className="block mt-2">Built with cutting-edge design and technology.</span>
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <button className="modern-button text-lg px-8 py-4 group">
                            <span className="flex items-center gap-3">
                                Explore Blogs
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </button>
                        <button className="glass-effect px-8 py-4 rounded-2xl text-white font-semibold hover:bg-white/20 transition-all duration-300">
                            Learn More
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="glass-effect rounded-2xl p-6 text-center">
                            <div className="text-3xl font-bold text-white mb-2">50+</div>
                            <div className="text-white/70">Articles Published</div>
                        </div>
                        <div className="glass-effect rounded-2xl p-6 text-center">
                            <div className="text-3xl font-bold text-white mb-2">10K+</div>
                            <div className="text-white/70">Readers Monthly</div>
                        </div>
                        <div className="glass-effect rounded-2xl p-6 text-center">
                            <div className="text-3xl font-bold text-white mb-2">5★</div>
                            <div className="text-white/70">User Rating</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    )
}

export default HeroSection