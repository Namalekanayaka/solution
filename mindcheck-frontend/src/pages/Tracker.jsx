import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { getQuizHistory, clearQuizHistory, saveMoodEntry, getMoodEntries } from '../utils/localStorage';
import Chart from '../components/Chart';

const Tracker = () => {
    const navigate = useNavigate();
    const [quizHistory, setQuizHistory] = useState([]);
    const [moodEntries, setMoodEntries] = useState([]);
    const [currentMood, setCurrentMood] = useState(5);
    const [moodNote, setMoodNote] = useState('');
    const [activeTab, setActiveTab] = useState('quiz');

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        setQuizHistory(getQuizHistory());
        setMoodEntries(getMoodEntries());
    };

    const handleClearHistory = () => {
        if (window.confirm('Are you sure you want to clear all quiz history? This cannot be undone.')) {
            clearQuizHistory();
            loadData();
        }
    };

    const handleSaveMood = () => {
        if (currentMood >= 1 && currentMood <= 10) {
            saveMoodEntry(currentMood, moodNote);
            setMoodNote('');
            setCurrentMood(5);
            loadData();
        }
    };

    const getMoodColor = (mood) => {
        if (mood <= 3) return 'text-red-600';
        if (mood <= 5) return 'text-orange-600';
        if (mood <= 7) return 'text-yellow-600';
        return 'text-green-600';
    };

    const getMoodEmoji = (mood) => {
        if (mood <= 2) return '😢';
        if (mood <= 4) return '😟';
        if (mood <= 6) return '😐';
        if (mood <= 8) return '🙂';
        return '😊';
    };

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="gradient-text">Progress Tracker</span>
                    </h1>
                    <p className="text-gray-600">
                        Monitor your mental wellness journey over time
                    </p>
                </motion.div>

                {/* Tabs */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex rounded-lg bg-gray-100 p-1">
                        <button
                            onClick={() => setActiveTab('quiz')}
                            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${activeTab === 'quiz'
                                ? 'bg-white text-primary-600 shadow-md'
                                : 'text-gray-600 hover:text-primary-600'
                                }`}
                        >
                            Quiz History
                        </button>
                        <button
                            onClick={() => setActiveTab('mood')}
                            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${activeTab === 'mood'
                                ? 'bg-white text-primary-600 shadow-md'
                                : 'text-gray-600 hover:text-primary-600'
                                }`}
                        >
                            Daily Mood
                        </button>
                    </div>
                </div>

                {/* Quiz History Tab */}
                {activeTab === 'quiz' && (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {quizHistory.length > 0 ? (
                            <>
                                {/* Chart */}
                                <div className="card mb-8">
                                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Score Trend</h2>
                                    <Chart data={quizHistory} type="area" />
                                </div>

                                {/* History List */}
                                <div className="card mb-8">
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-2xl font-bold text-gray-800">Assessment History</h2>
                                        <button
                                            onClick={handleClearHistory}
                                            className="text-sm text-red-600 hover:text-red-700 font-semibold"
                                        >
                                            Clear History
                                        </button>
                                    </div>
                                    <div className="space-y-4">
                                        {quizHistory.slice().reverse().map((entry, index) => {
                                            const percentage = (entry.score / 30) * 100;
                                            let severityColor = 'bg-green-500';
                                            let severityLabel = 'Minimal';

                                            if (percentage > 75) {
                                                severityColor = 'bg-red-500';
                                                severityLabel = 'Severe';
                                            } else if (percentage > 50) {
                                                severityColor = 'bg-orange-500';
                                                severityLabel = 'Moderate';
                                            } else if (percentage > 25) {
                                                severityColor = 'bg-yellow-500';
                                                severityLabel = 'Mild';
                                            }

                                            return (
                                                <motion.div
                                                    key={entry.id}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: index * 0.05 }}
                                                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                                >
                                                    <div className="flex-1">
                                                        <div className="flex items-center space-x-3">
                                                            <div className={`w-3 h-3 rounded-full ${severityColor}`} />
                                                            <span className="font-semibold text-gray-800">{severityLabel}</span>
                                                        </div>
                                                        <p className="text-sm text-gray-500 mt-1">
                                                            {new Date(entry.date).toLocaleString()}
                                                        </p>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-2xl font-bold text-gray-800">{entry.score}</div>
                                                        <div className="text-xs text-gray-500">out of 30</div>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="card text-center py-12">
                                <div className="text-6xl mb-4">📊</div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">No Quiz History Yet</h3>
                                <p className="text-gray-600 mb-6">
                                    Take your first assessment to start tracking your progress
                                </p>
                                <button onClick={() => navigate('/quiz')} className="btn-primary">
                                    Take Quiz Now
                                </button>
                            </div>
                        )}
                    </motion.div>
                )}

                {/* Daily Mood Tab */}
                {activeTab === 'mood' && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Add Mood Entry */}
                        <div className="card mb-8">
                            <h2 className="text-2xl font-bold mb-6 text-gray-800">How are you feeling today?</h2>

                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-sm font-semibold text-gray-600">Mood Level</span>
                                    <span className={`text-4xl ${getMoodColor(currentMood)}`}>
                                        {getMoodEmoji(currentMood)}
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="10"
                                    value={currentMood}
                                    onChange={(e) => setCurrentMood(parseInt(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                    style={{
                                        background: `linear-gradient(to right, #ef4444 0%, #f97316 25%, #fbbf24 50%, #84cc16 75%, #10b981 100%)`
                                    }}
                                />
                                <div className="flex justify-between text-xs text-gray-500 mt-2">
                                    <span>Very Low</span>
                                    <span className="font-bold text-lg">{currentMood}</span>
                                    <span>Very High</span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-600 mb-2">
                                    Note (Optional)
                                </label>
                                <textarea
                                    value={moodNote}
                                    onChange={(e) => setMoodNote(e.target.value)}
                                    placeholder="How are you feeling? What's on your mind?"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                    rows="3"
                                />
                            </div>

                            <button onClick={handleSaveMood} className="btn-primary w-full">
                                Save Mood Entry
                            </button>
                        </div>

                        {/* Mood History */}
                        {moodEntries.length > 0 && (
                            <>
                                <div className="card mb-8">
                                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Mood Trend</h2>
                                    <Chart data={moodEntries} type="line" />
                                </div>

                                <div className="card">
                                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Recent Entries</h2>
                                    <div className="space-y-3">
                                        {moodEntries.slice().reverse().slice(0, 10).map((entry, index) => (
                                            <motion.div
                                                key={entry.id}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                                            >
                                                <span className="text-3xl">{getMoodEmoji(entry.mood)}</span>
                                                <div className="flex-1">
                                                    <div className="flex items-center space-x-2 mb-1">
                                                        <span className={`font-bold ${getMoodColor(entry.mood)}`}>
                                                            {entry.mood}/10
                                                        </span>
                                                        <span className="text-xs text-gray-500">
                                                            {new Date(entry.date).toLocaleString()}
                                                        </span>
                                                    </div>
                                                    {entry.note && (
                                                        <p className="text-sm text-gray-600">{entry.note}</p>
                                                    )}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Tracker;
