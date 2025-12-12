import { motion } from 'framer-motion';

const ProgressBar = ({ current, total }) => {
    const percentage = (current / total) * 100;

    return (
        <div className="w-full max-w-3xl mx-auto mb-8">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-gray-600">
                    Progress
                </span>
                <span className="text-sm font-semibold text-primary-600">
                    {current} / {total}
                </span>
            </div>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                />
            </div>

            <div className="mt-2 text-center">
                <span className="text-xs text-gray-500">
                    {Math.round(percentage)}% Complete
                </span>
            </div>
        </div>
    );
};

export default ProgressBar;
