import { motion } from 'framer-motion';

const QuestionCard = ({ question, selectedValue, onSelect, questionNumber, totalQuestions }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="card max-w-3xl mx-auto"
        >
            {/* Question Header */}
            <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-semibold text-primary-600">
                        Question {questionNumber} of {totalQuestions}
                    </span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {question.category}
                    </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                    {question.text}
                </h3>
            </div>

            {/* Options */}
            <div className="space-y-3">
                {question.options.map((option, index) => (
                    <motion.button
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onSelect(option.value)}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${selectedValue === option.value
                            ? 'border-primary-500 bg-primary-50 shadow-md'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                            }`}
                        aria-label={`Option ${index + 1}: ${option.text}`}
                    >
                        <div className="flex items-center space-x-3">
                            <div
                                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedValue === option.value
                                    ? 'border-primary-500 bg-primary-500'
                                    : 'border-gray-300'
                                    }`}
                            >
                                {selectedValue === option.value && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-2 h-2 bg-white rounded-full"
                                    />
                                )}
                            </div>
                            <span
                                className={`text-base md:text-lg ${selectedValue === option.value
                                    ? 'text-blue-700 font-semibold'
                                    : 'text-gray-700'
                                    }`}
                            >
                                {option.text}
                            </span>
                        </div>
                    </motion.button>
                ))}
            </div>

            {/* Helper Text */}
            <p className="mt-6 text-sm text-gray-500 text-center">
                Select the option that best describes your experience
            </p>
        </motion.div>
    );
};

export default QuestionCard;
