import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-r from-primary-700 to-primary-800 text-white mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-500 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold">M</span>
                            </div>
                            <span>MindCheck</span>
                        </h3>
                        <p className="text-primary-100 text-sm">
                            Advanced mental health support web application. Track your mental wellness,
                            take assessments, and access resources.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-primary-100 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/quiz" className="text-primary-100 hover:text-white transition-colors">
                                    Take Quiz
                                </Link>
                            </li>
                            <li>
                                <Link to="/tracker" className="text-primary-100 hover:text-white transition-colors">
                                    Mood Tracker
                                </Link>
                            </li>
                            <li>
                                <Link to="/resources" className="text-primary-100 hover:text-white transition-colors">
                                    Resources
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Emergency Contact */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Need Help Now?</h3>
                        <div className="space-y-2 text-sm">
                            <p className="text-primary-100">
                                <span className="font-semibold text-white">Mental Health Helpline:</span>
                                <br />
                                <a href="tel:1926" className="text-primary-200 hover:text-white">
                                    1926
                                </a>
                                {' '}(24/7, Free)
                            </p>
                            <p className="text-primary-100">
                                <span className="font-semibold text-white">CCCline Crisis Support:</span>
                                <br />
                                <a href="tel:1333" className="text-primary-200 hover:text-white">
                                    1333
                                </a>
                                {' '}(24/7, Toll-free)
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-primary-600 mt-8 pt-8 text-center">
                    <p className="text-primary-200 text-sm">
                        &copy; {currentYear} MindCheck. All rights reserved.
                    </p>
                    <p className="text-primary-300 text-xs mt-2">
                        This tool is not a substitute for professional medical advice, diagnosis, or treatment.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
