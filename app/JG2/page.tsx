"use client";

import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { motion, Variants } from 'framer-motion';

export default function JG2Page() {
    const websiteUrl = "https://www.geniusdevelopers.space";

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    const particleVariants: Variants = {
        animate: (i: number) => ({
            y: [0, -100, 0],
            x: [0, (i % 2 === 0 ? 50 : -50), 0],
            opacity: [0.2, 0.6, 0.2],
            transition: {
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear"
            }
        })
    };

    return (
        <div className="bg-[#0a0a1a] min-h-screen text-white font-sans overflow-x-hidden selection:bg-purple-500/30">
            <style dangerouslySetInnerHTML={{
                __html: `
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Montserrat:wght@400;500;600;700;800;900&display=swap');
                
                .jg2-container {
                    font-family: 'Poppins', sans-serif;
                    background: linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 50%, #0f0f2f 100%);
                    min-height: 100vh;
                }
                
                .jg2-poster-container {
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 10px;
                }
                
                @media (min-width: 768px) {
                    .jg2-poster-container { padding: 20px; }
                }
                
                .jg2-main-poster {
                    background: linear-gradient(145deg, #0d1b2a 0%, #1b263b 30%, #0d1b2a 60%, #162447 100%);
                    border-radius: 20px;
                    overflow: hidden;
                    position: relative;
                    height: 100%;
                    box-shadow: 0 0 40px rgba(0, 191, 255, 0.2), 0 0 80px rgba(138, 43, 226, 0.15), inset 0 0 80px rgba(0, 191, 255, 0.05);
                    border: 2px solid rgba(0, 191, 255, 0.3);
                    min-height: 85vh; /* Ensure some height on mobile */
                }
                
                .jg2-glow-effect {
                    position: absolute;
                    top: -50%; left: -50%;
                    width: 200%; height: 200%;
                    background: radial-gradient(circle at 30% 30%, rgba(0, 191, 255, 0.08) 0%, transparent 50%),
                                radial-gradient(circle at 70% 70%, rgba(138, 43, 226, 0.08) 0%, transparent 50%);
                    animation: rotate 20s linear infinite;
                    pointer-events: none;
                }
                
                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                .jg2-grid-pattern {
                    position: absolute;
                    top: 0; left: 0;
                    width: 100%; height: 100%;
                    background-image: linear-gradient(rgba(0, 191, 255, 0.03) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(0, 191, 255, 0.03) 1px, transparent 1px);
                    background-size: 40px 40px;
                    pointer-events: none;
                }
                
                .jg2-company-name {
                    font-family: 'Montserrat', sans-serif;
                    font-size: clamp(2rem, 6vw, 4rem);
                    font-weight: 900;
                    background: linear-gradient(135deg, #00bfff 0%, #8a2be2 50%, #00bfff 100%);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    animation: shine 3s linear infinite;
                    text-shadow: 0 0 30px rgba(0, 191, 255, 0.4);
                    line-height: 1.2;
                }
                @media (min-width: 768px) {
                   .jg2-company-name { letter-spacing: 4px; }
                }
                
                @keyframes shine { to { background-position: 200% center; } }
                
                .jg2-service-card {
                    background: linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
                    backdrop-filter: blur(10px);
                    border-radius: 15px;
                    padding: 20px 15px;
                    border: 1px solid rgba(0, 191, 255, 0.2);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                    cursor: pointer;
                    height: 100%;
                }
                
                .jg2-service-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0;
                    width: 100%; height: 3px;
                    background: linear-gradient(90deg, #00bfff, #8a2be2, #00bfff);
                    background-size: 200% auto;
                    animation: shine 2s linear infinite;
                }
                
                .jg2-service-card:hover {
                    border-color: rgba(0, 191, 255, 0.5);
                }
                
                .jg2-service-list li {
                    color: rgba(255, 255, 255, 0.8);
                    font-size: clamp(0.75rem, 1.2vw, 0.85rem);
                    padding: 5px 0;
                    padding-left: 18px;
                    position: relative;
                    transition: color 0.2s;
                }
                
                .jg2-service-card:hover .jg2-service-list li { color: rgba(255,255,255,1); }
                
                .jg2-service-list li::before {
                    content: '▸';
                    position: absolute;
                    left: 0;
                    color: #00bfff;
                    font-size: 1rem;
                    line-height: 1;
                    top: 6px;
                }
                
                .jg2-floating-circle {
                    position: absolute;
                    border-radius: 50%;
                    opacity: 0.1;
                }
                
                .jg2-circle-1 { width: 200px; height: 200px; background: #00bfff; top: -50px; right: -50px; animation: float 8s ease-in-out infinite; }
                .jg2-circle-2 { width: 150px; height: 150px; background: #8a2be2; bottom: -20px; left: -20px; animation: float 10s ease-in-out infinite reverse; }
                .jg2-circle-3 { width: 100px; height: 100px; background: #00bfff; top: 40%; left: 5%; animation: float 12s ease-in-out infinite; }
                
                @media (min-width: 768px) {
                    .jg2-circle-1 { width: 300px; height: 300px; top: -100px; right: -100px; }
                    .jg2-circle-2 { width: 200px; height: 200px; bottom: -50px; left: -50px; }
                    .jg2-circle-3 { width: 150px; height: 150px; }
                }

                @keyframes float {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(20px, -20px) scale(1.05); }
                }
                `
            }} />

            <div className="jg2-container py-4 md:py-8 px-2 sm:px-4 lg:px-8">
                <div className="jg2-poster-container">
                    <div className="jg2-main-poster flex flex-col justify-between">
                        {/* Background Effects */}
                        <div className="jg2-glow-effect"></div>
                        <div className="jg2-grid-pattern"></div>
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden jg2-floating-elements">
                            <div className="jg2-floating-circle jg2-circle-1"></div>
                            <div className="jg2-floating-circle jg2-circle-2"></div>
                            <div className="jg2-floating-circle jg2-circle-3"></div>
                            {/* Particles using framer-motion */}
                            {[...Array(15)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute rounded-full pointer-events-none"
                                    style={{
                                        width: Math.random() * 4 + 2,
                                        height: Math.random() * 4 + 2,
                                        background: Math.random() > 0.5 ? '#00bfff' : '#8a2be2',
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                    }}
                                    variants={particleVariants}
                                    custom={i}
                                    animate="animate"
                                />
                            ))}
                        </div>

                        {/* Wrap content in a motion container for stagger effects */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="relative z-10 w-full h-full flex flex-col pt-6 md:pt-10 pb-4 md:pb-8"
                        >
                            {/* Header Section */}
                            <motion.div variants={itemVariants} className="text-center px-4 md:px-8 mb-6 md:mb-8 flex flex-col items-center">
                                <h1 className="jg2-company-name">Genius Developers</h1>
                                <p className="text-[#00bfff] font-bold tracking-[3px] md:tracking-[6px] mt-2 md:mt-3 text-[10px] sm:text-xs md:text-lg uppercase text-center">Complete Digital & Technical Solutions</p>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="mt-4 md:mt-6 px-4 md:px-8 py-2 md:py-3 rounded-full border border-yellow-500/50 backdrop-blur-sm"
                                    style={{ background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 165, 0, 0.05))' }}
                                >
                                    <p className="text-yellow-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 md:mb-1">Strategically Associated With</p>
                                    <p className="text-yellow-500 font-bold text-xs sm:text-sm md:text-base">The House of Jugal Geet Associated (JG Rajasthan Plus)</p>
                                </motion.div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="h-[2px] mx-4 md:mx-12 mb-6 md:mb-8 mt-2" style={{ background: 'linear-gradient(90deg, transparent, #00bfff, #8a2be2, #00bfff, transparent)' }}></motion.div>

                            {/* Services Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4 md:px-8 mb-6 md:mb-8 flex-grow">
                                {/* Web Development */}
                                <motion.div variants={itemVariants} whileHover={{ y: -8, boxShadow: "0 15px 40px rgba(0, 191, 255, 0.2)" }} className="jg2-service-card">
                                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-3 md:mb-5 text-xl md:text-3xl shadow-lg" style={{ background: 'linear-gradient(135deg, #00bfff, #8a2be2)' }}>🌐</div>
                                    <h3 className="text-white font-bold text-base md:text-lg mb-2 md:mb-4">Web Development</h3>
                                    <ul className="jg2-service-list list-none">
                                        <li>Premium Business Websites</li>
                                        <li>Dynamic News Portals</li>
                                        <li>Interactive Portfolios</li>
                                        <li>Scalable E-commerce</li>
                                        <li>Custom Web Applications</li>
                                        <li>SaaS Platforms</li>
                                    </ul>
                                </motion.div>

                                {/* Technical Infrastructure */}
                                <motion.div variants={itemVariants} whileHover={{ y: -8, boxShadow: "0 15px 40px rgba(138, 43, 226, 0.2)" }} className="jg2-service-card">
                                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-3 md:mb-5 text-xl md:text-3xl shadow-lg" style={{ background: 'linear-gradient(135deg, #00bfff, #8a2be2)' }}>⚙️</div>
                                    <h3 className="text-white font-bold text-base md:text-lg mb-2 md:mb-4">Tech Infrastructure</h3>
                                    <ul className="jg2-service-list list-none">
                                        <li>Cloud Server Deployment</li>
                                        <li>High-Speed Hosting</li>
                                        <li>Enterprise Email Setup</li>
                                        <li>Advanced Cybersecurity</li>
                                        <li>Speed & SEO Optimization</li>
                                    </ul>
                                </motion.div>

                                {/* Digital Management */}
                                <motion.div variants={itemVariants} whileHover={{ y: -8, boxShadow: "0 15px 40px rgba(0, 191, 255, 0.2)" }} className="jg2-service-card">
                                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-3 md:mb-5 text-xl md:text-3xl shadow-lg" style={{ background: 'linear-gradient(135deg, #00bfff, #8a2be2)' }}>📱</div>
                                    <h3 className="text-white font-bold text-base md:text-lg mb-2 md:mb-4">Digital Management</h3>
                                    <ul className="jg2-service-list list-none">
                                        <li>Pro Social Media Handling</li>
                                        <li>Brand Profile Verification</li>
                                        <li>Rapid Troubleshooting</li>
                                        <li>Continuous Maintenance</li>
                                        <li>24/7 Priority Support</li>
                                    </ul>
                                </motion.div>

                                {/* Advanced Solutions */}
                                <motion.div variants={itemVariants} whileHover={{ y: -8, boxShadow: "0 15px 40px rgba(138, 43, 226, 0.2)" }} className="jg2-service-card">
                                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-3 md:mb-5 text-xl md:text-3xl shadow-lg" style={{ background: 'linear-gradient(135deg, #00bfff, #8a2be2)' }}>🚀</div>
                                    <h3 className="text-white font-bold text-base md:text-lg mb-2 md:mb-4">Advanced Solutions</h3>
                                    <ul className="jg2-service-list list-none">
                                        <li>Bespoke Admin Panels</li>
                                        <li>Global Payment Gateways</li>
                                        <li>Web3 & Blockchain Advisory</li>
                                        <li>Workflow Automation (AI)</li>
                                        <li>Custom API Architecture</li>
                                    </ul>
                                </motion.div>
                            </div>

                            {/* Additional Services */}
                            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 px-4 md:px-8 mb-6 md:mb-8 lg:flex lg:justify-center">
                                <motion.div whileHover={{ scale: 1.05 }} className="px-3 md:px-5 py-2 md:py-3 rounded-full border border-purple-500/50 text-center bg-purple-500/5 hover:bg-purple-500/20 backdrop-blur-sm transition-colors cursor-default" style={{ background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.15), rgba(0, 191, 255, 0.1))' }}>
                                    <span className="text-white text-xs sm:text-sm md:text-base font-semibold">📚 Technical Training (Online/Offline)</span>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} className="px-3 md:px-5 py-2 md:py-3 rounded-full border border-purple-500/50 text-center bg-purple-500/5 hover:bg-purple-500/20 backdrop-blur-sm transition-colors cursor-default" style={{ background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.15), rgba(0, 191, 255, 0.1))' }}>
                                    <span className="text-white text-xs sm:text-sm md:text-base font-semibold">📢 Local Advertisement Solutions</span>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} className="px-3 md:px-5 py-2 md:py-3 rounded-full border border-purple-500/50 text-center bg-purple-500/5 hover:bg-purple-500/20 backdrop-blur-sm transition-colors cursor-default sm:col-span-2 lg:col-span-1" style={{ background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.15), rgba(0, 191, 255, 0.1))' }}>
                                    <span className="text-white text-xs sm:text-sm md:text-base font-semibold">🏪 Local Business Digitalization</span>
                                </motion.div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="h-[2px] mx-4 md:mx-12 mb-4 md:mb-6" style={{ background: 'linear-gradient(90deg, transparent, #00bfff, #8a2be2, #00bfff, transparent)' }}></motion.div>

                            {/* Footer Section */}
                            <motion.div variants={itemVariants} className="p-4 md:p-8" style={{ background: 'linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.4))' }}>
                                <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-8">
                                    {/* Founder Info */}
                                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/30 mb-2 backdrop-blur-sm" style={{ background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 165, 0, 0.05))' }}>
                                            <span className="text-yellow-400 text-[10px] md:text-xs font-medium uppercase tracking-wider">Founder / CEO</span>
                                        </div>
                                        <h2 className="text-white text-3xl md:text-4xl font-extrabold font-['Montserrat'] bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Shiva</h2>
                                    </div>

                                    {/* Contact Info */}
                                    <div className="flex flex-col items-center md:items-start gap-4">
                                        <motion.a whileHover={{ scale: 1.05, x: 5 }} href="tel:+918955256878" className="flex items-center gap-3 text-white text-base md:text-lg font-semibold hover:text-[#00bfff] transition-colors group">
                                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm md:text-base group-hover:shadow-[0_0_15px_rgba(0,191,255,0.5)] transition-shadow" style={{ background: 'linear-gradient(135deg, #00bfff, #2b5876)' }}>📞</div>
                                            <span>+91 8955256878</span>
                                        </motion.a>
                                        <motion.a whileHover={{ scale: 1.05, x: 5 }} href="tel:+919828116211" className="flex items-center gap-3 text-white text-base md:text-lg font-semibold hover:text-[#8a2be2] transition-colors group">
                                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm md:text-base group-hover:shadow-[0_0_15px_rgba(138,43,226,0.5)] transition-shadow" style={{ background: 'linear-gradient(135deg, #8a2be2, #4a00e0)' }}>📱</div>
                                            <span>+91 9828116211</span>
                                        </motion.a>
                                    </div>

                                    {/* Website & QR */}
                                    <div className="flex flex-col items-center md:items-end gap-4 mt-2 md:mt-0">
                                        <motion.a whileHover={{ scale: 1.05 }} href={websiteUrl} target="_blank" rel="noopener noreferrer" className="text-[#00bfff] text-sm md:text-lg font-bold flex items-center gap-2 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10">
                                            <span>🔗</span> geniusdevelopers.space
                                        </motion.a>

                                        <motion.div whileHover={{ scale: 1.05, rotate: 2 }} className="bg-white p-2.5 md:p-3 rounded-2xl shadow-xl border-2 border-[#00bfff]/30 hover:border-[#00bfff] transition-colors cursor-pointer group hidden sm:block" title="Scan to visit website">
                                            <div className="group-hover:opacity-80 transition-opacity">
                                                <QRCodeSVG
                                                    value={websiteUrl}
                                                    size={70}
                                                    bgColor={"#ffffff"}
                                                    fgColor={"#0a0a1a"}
                                                    level={"H"}
                                                    includeMargin={false}
                                                />
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Hashtag */}
                            <motion.div variants={itemVariants} className="text-center pt-2 pb-2 md:pb-4 mt-auto">
                                <span className="text-xl sm:text-2xl md:text-3xl font-extrabold font-['Montserrat'] tracking-widest opacity-80 hover:opacity-100 transition-opacity cursor-default" style={{
                                    background: 'linear-gradient(135deg, #00bfff, #8a2be2)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}>
                                    #GeniusDevelopers
                                </span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
