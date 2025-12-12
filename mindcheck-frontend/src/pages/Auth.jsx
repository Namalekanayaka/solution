import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear error for this field
        if (errors[e.target.name]) {
            setErrors({
                ...errors,
                [e.target.name]: ''
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (!isLogin) {
            if (!formData.name) {
                newErrors.name = 'Name is required';
            }
            if (!formData.confirmPassword) {
                newErrors.confirmPassword = 'Please confirm your password';
            } else if (formData.password !== formData.confirmPassword) {
                newErrors.confirmPassword = 'Passwords do not match';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // TODO: Implement actual authentication when backend is ready
            console.log('Form submitted:', formData);
            alert('Authentication feature will be available when backend is connected.');
            // For now, just redirect to home
            // navigate('/');
        }
    };

    const toggleMode = () => {
        setIsLogin(!isLogin);
        setFormData({
            email: '',
            password: '',
            confirmPassword: '',
            name: ''
        });
        setErrors({});
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full"
            >
                {/* Logo and Header */}
                <div className="text-center mb-8">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                        className="inline-block mb-4"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                            <span className="text-3xl">🧠</span>
                        </div>
                    </motion.div>
                    <h2 className="text-3xl font-bold">
                        <span className="gradient-text">
                            {isLogin ? 'Welcome Back' : 'Create Account'}
                        </span>
                    </h2>
                    <p className="text-gray-600 mt-2">
                        {isLogin ? 'Sign in to access your mental health journey' : 'Start your mental wellness journey today'}
                    </p>
                </div>

                {/* Form Card */}
                <div className="card">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field (Register only) */}
                        {!isLogin && (
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.name ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="John Doe"
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                                )}
                            </div>
                        )}

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="you@example.com"
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.password ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="••••••••"
                            />
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                            )}
                        </div>

                        {/* Confirm Password Field (Register only) */}
                        {!isLogin && (
                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Confirm Password
                                </label>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="••••••••"
                                />
                                {errors.confirmPassword && (
                                    <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                                )}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="btn-primary w-full text-lg"
                        >
                            {isLogin ? 'Sign In' : 'Create Account'}
                        </button>
                    </form>

                    {/* Toggle Mode */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            {isLogin ? "Don't have an account? " : 'Already have an account? '}
                            <button
                                onClick={toggleMode}
                                className="text-blue-600 hover:text-blue-700 font-semibold"
                            >
                                {isLogin ? 'Sign Up' : 'Sign In'}
                            </button>
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="mt-6 relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Or continue without account</span>
                        </div>
                    </div>

                    {/* Guest Access */}
                    <button
                        onClick={() => navigate('/')}
                        className="mt-6 w-full px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-all duration-200"
                    >
                        Continue as Guest
                    </button>
                </div>

                {/* Info Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded"
                >
                    <p className="text-sm text-blue-800">
                        <strong>Note:</strong> Authentication is currently in development.
                        You can use the app as a guest with data stored locally on your device.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Auth;
