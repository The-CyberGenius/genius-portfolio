"use client";

import React, { useEffect } from 'react';

export default function JG1Page() {
    useEffect(() => {
        // Simple smooth scroll for internal links if needed
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', function (this: HTMLAnchorElement, e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId && targetId !== '#') {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }, []);

    return (
        <div className="bg-gray-100 text-gray-800 min-h-screen">
            <style dangerouslySetInnerHTML={{
                __html: `
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
                .jg1-container { font-family: 'Poppins', sans-serif; }
                .gradient-bg { background: linear-gradient(135deg, #1e3a8a, #3b82f6); }
                .service-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
                .service-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); }
                .animate-fade-in { animation: fadeIn 1s ease-in-out; }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            `}} />

            <div className="jg1-container">
                <header className="gradient-bg text-white py-16 text-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-5xl font-bold mb-2 animate-fade-in">Genius Developers</h1>
                        <p className="text-2xl mb-4 animate-fade-in">Complete Digital & Technical Solutions</p>
                        <p className="text-lg animate-fade-in">Strategically Associated With The House of Jugal Geet Associated (JG Rajasthan Plus)</p>
                    </div>
                </header>

                <main className="container mx-auto px-4 py-12">
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="service-card bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4">Web Development</h3>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Business Websites</li>
                                    <li>News Portals</li>
                                    <li>Portfolio Websites</li>
                                    <li>E-commerce Platforms</li>
                                    <li>Custom Web Applications</li>
                                    <li>All Kinds of Web Apps (Custom & Scalable)</li>
                                </ul>
                            </div>
                            <div className="service-card bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4">Technical Infrastructure</h3>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Server Setup & Deployment</li>
                                    <li>Hosting Configuration</li>
                                    <li>Domain & Email Setup</li>
                                    <li>Website Security</li>
                                    <li>Performance Optimization</li>
                                </ul>
                            </div>
                            <div className="service-card bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4">Digital Management</h3>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Social Media Account Handling</li>
                                    <li>Business Account Setup</li>
                                    <li>Technical Troubleshooting</li>
                                    <li>Ongoing Maintenance & Support</li>
                                </ul>
                            </div>
                            <div className="service-card bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4">Advanced Solutions</h3>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Custom Admin Panels</li>
                                    <li>Payment Gateway Integration</li>
                                    <li>Crypto & Web3 Consultation</li>
                                    <li>Automation Systems</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">Additional Offerings</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="service-card bg-white p-6 rounded-lg shadow-md text-center">
                                <h3 className="text-xl font-semibold mb-4">Technical Training</h3>
                                <p>Online/Offline Sessions</p>
                            </div>
                            <div className="service-card bg-white p-6 rounded-lg shadow-md text-center">
                                <h3 className="text-xl font-semibold mb-4">Local Advertisement</h3>
                                <p>Targeted Local Campaigns</p>
                            </div>
                            <div className="service-card bg-white p-6 rounded-lg shadow-md text-center">
                                <h3 className="text-xl font-semibold mb-4">Local Business Support</h3>
                                <p>Comprehensive Solutions for Local Businesses</p>
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="gradient-bg text-white py-8 text-center">
                    <div className="container mx-auto px-4">
                        <p className="text-xl font-bold mb-2">#Genius Developers</p>
                        <p className="mb-2">Founder – Shiva</p>
                        <p className="mb-2"><a href="https://www.geniusdevelopers.space" className="text-blue-200 hover:underline">www.geniusdevelopers.space</a></p>
                        <p className="mb-2">+91 8955256878 | +91 9828116211</p>
                        <p className="text-sm mt-4">© 2023 Genius Developers. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
