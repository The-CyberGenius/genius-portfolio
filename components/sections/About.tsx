"use client";

import { motion } from "framer-motion";
import { Code, Terminal, Cpu, Globe } from "lucide-react";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-20 relative bg-black">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-secondary/5 blur-[120px] -z-10" />

            <div className="container px-4 md:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            About Me
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        I don&apos;t just write code; I architect digital experiences that merge creativity with technical precision.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Main Intro Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="col-span-1 md:col-span-2 lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-primary/50 transition-colors group"
                    >
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-32 h-32 md:w-48 md:h-48 relative rounded-full overflow-hidden border-4 border-primary/20 shrink-0">
                                {/* User Image */}
                                <Image
                                    src="/me.jpg"
                                    alt="Shiva"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="text-left">
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">Digital Architect & Developer</h3>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    I am Shiva, a passionate developer with a deep love for creating highly interactive and performant web applications. With a focus on <span className="text-white">Next.js</span> and <span className="text-white">Modern UI/UX</span>, I help businesses and startups transform their vision into robust digital solutions.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["Clean Code", "Pixel Perfect", "Performance First"].map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs text-primary border border-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stat Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-zinc-900/50 border border-white/10 rounded-3xl p-6 flex flex-col justify-center items-center hover:bg-zinc-900 hover:border-primary/30 transition-all"
                    >
                        <div className="p-4 bg-primary/10 rounded-full mb-4 text-primary">
                            <Code className="w-8 h-8" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">Modern Stack</h4>
                        <p className="text-center text-gray-500 text-sm">Specialized in React, Next.js, and TypeScript ecosystems.</p>
                    </motion.div>

                    {/* Stat Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-zinc-900/50 border border-white/10 rounded-3xl p-6 flex flex-col justify-center items-center hover:bg-zinc-900 hover:border-secondary/30 transition-all"
                    >
                        <div className="p-4 bg-secondary/10 rounded-full mb-4 text-secondary">
                            <Terminal className="w-8 h-8" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">Clean Logic</h4>
                        <p className="text-center text-gray-500 text-sm">Scalable architecture and maintainable codebases.</p>
                    </motion.div>

                    {/* Stat Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="col-span-1 md:col-span-2 lg:col-span-1 bg-zinc-900/50 border border-white/10 rounded-3xl p-6 flex flex-col justify-center items-center hover:bg-zinc-900 hover:border-pink-500/30 transition-all"
                    >
                        <div className="p-4 bg-pink-500/10 rounded-full mb-4 text-pink-500">
                            <Globe className="w-8 h-8" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">Global Standard</h4>
                        <p className="text-center text-gray-500 text-sm">Building world-class digital products that scale.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
