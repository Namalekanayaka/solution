import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchRandomQuote } from '../api/api';

const Home = () => {
    const navigate = useNavigate();
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadQuote = async () => {
            try {
                const randomQuote = await fetchRandomQuote();
                setQuote(randomQuote);
            } catch (error) {
                console.error('Error loading quote:', error);
            } finally {
                setLoading(false);
            }
        };
        loadQuote();
    }, []);

    const features = [
        {
            icon: '📋',
            title: 'Mental Health Quiz',
            description: 'Take a comprehensive assessment to understand your current mental state'
        },
        {
            icon: '📊',
            title: 'Track Progress',
            description: 'Monitor your mental wellness journey with visual charts and insights'
        },
        {
            icon: '🆘',
            title: 'Access Resources',
            description: 'Find emergency hotlines, articles, and professional help when you need it'
        },
        {
            icon: '🔒',
            title: 'Private & Secure',
            description: 'Your data is stored locally and never shared without your permission'
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-gray-50 py-24 md:py-32">


                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-coral rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                            className="inline-block mb-8"
                        >
                            <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl flex items-center justify-center shadow-2xl">
                                <span className="text-5xl">🧠</span>
                            </div>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
                            You deserve to <span className="gradient-text">feel better</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto font-medium leading-relaxed">
                            Professional mental health support when you need it
                        </p>

                        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                            Take the first step towards understanding and improving your mental wellness with our confidential assessment
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            <button
                                onClick={() => navigate('/quiz')}
                                className="btn-primary text-lg group"
                            >
                                Start Your Journey
                                <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                            <button
                                onClick={() => navigate('/resources')}
                                className="btn-secondary text-lg"
                            >
                                View Resources
                            </button>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-600"
                        >
                            <div className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Confidential & Private</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Evidence-Based</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                <span>Available 24/7</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Quote Section */}
            {!loading && quote && (
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="py-12 bg-white"
                >
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="card bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500">
                            <div className="flex items-start space-x-4">
                                <div className="text-4xl text-blue-500">"</div>
                                <div className="flex-1">
                                    <p className="text-lg md:text-xl text-gray-700 italic mb-2">
                                        {quote.text}
                                    </p>
                                    <p className="text-sm text-gray-500">— {quote.author}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>
            )}

            {/* Features Section */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            How <span className="gradient-text">MindCheck</span> Helps
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Comprehensive tools to support your mental wellness journey
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -5 }}
                                className="card text-center"
                            >
                                <div className="text-5xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to start feeling better?
                        </h2>
                        <p className="text-xl text-primary-50 mb-8">
                            Take the first step towards better mental wellness today
                        </p>
                        <button
                            onClick={() => navigate('/quiz')}
                            className="bg-white text-primary-700 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 hover:bg-gray-50"
                        >
                            Begin Your Assessment
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Disclaimer */}
            <section className="py-8 bg-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-sm text-gray-600 text-center">
                        <strong>Disclaimer:</strong> MindCheck is not a substitute for professional medical advice, diagnosis, or treatment.
                        If you are experiencing a mental health crisis, please contact emergency services or call the National Mental Health Helpline at 1926.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;
