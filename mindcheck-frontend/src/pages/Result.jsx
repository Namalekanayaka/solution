import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ResultCard from '../components/ResultCard';

const Result = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { score, totalQuestions, answers } = location.state || {};

    useEffect(() => {
        // Redirect to quiz if no result data
        if (score === undefined || !totalQuestions) {
            navigate('/quiz');
        }
    }, [score, totalQuestions, navigate]);

    if (score === undefined || !totalQuestions) {
        return null;
    }

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-5xl mx-auto"
            >
                <ResultCard score={score} totalQuestions={totalQuestions} />
            </motion.div>
        </div>
    );
};

export default Result;
