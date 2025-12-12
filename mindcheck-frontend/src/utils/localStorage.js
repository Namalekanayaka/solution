// localStorage utility functions for data persistence

const STORAGE_KEYS = {
    QUIZ_HISTORY: 'mindcheck_quiz_history',
    MOOD_ENTRIES: 'mindcheck_mood_entries',
    USER_PREFERENCES: 'mindcheck_preferences'
};

// Quiz Results Functions
export const saveQuizResult = (score, answers) => {
    try {
        const history = getQuizHistory();
        const newResult = {
            id: Date.now(),
            score,
            answers,
            date: new Date().toISOString(),
            timestamp: Date.now()
        };

        history.push(newResult);
        localStorage.setItem(STORAGE_KEYS.QUIZ_HISTORY, JSON.stringify(history));
        return newResult;
    } catch (error) {
        console.error('Error saving quiz result:', error);
        return null;
    }
};

export const getQuizHistory = () => {
    try {
        const history = localStorage.getItem(STORAGE_KEYS.QUIZ_HISTORY);
        return history ? JSON.parse(history) : [];
    } catch (error) {
        console.error('Error getting quiz history:', error);
        return [];
    }
};

export const clearQuizHistory = () => {
    try {
        localStorage.removeItem(STORAGE_KEYS.QUIZ_HISTORY);
        return true;
    } catch (error) {
        console.error('Error clearing quiz history:', error);
        return false;
    }
};

// Mood Tracking Functions
export const saveMoodEntry = (moodLevel, note = '') => {
    try {
        const entries = getMoodEntries();
        const newEntry = {
            id: Date.now(),
            mood: moodLevel,
            note,
            date: new Date().toISOString(),
            timestamp: Date.now()
        };

        entries.push(newEntry);
        localStorage.setItem(STORAGE_KEYS.MOOD_ENTRIES, JSON.stringify(entries));
        return newEntry;
    } catch (error) {
        console.error('Error saving mood entry:', error);
        return null;
    }
};

export const getMoodEntries = () => {
    try {
        const entries = localStorage.getItem(STORAGE_KEYS.MOOD_ENTRIES);
        return entries ? JSON.parse(entries) : [];
    } catch (error) {
        console.error('Error getting mood entries:', error);
        return [];
    }
};

export const clearMoodEntries = () => {
    try {
        localStorage.removeItem(STORAGE_KEYS.MOOD_ENTRIES);
        return true;
    } catch (error) {
        console.error('Error clearing mood entries:', error);
        return false;
    }
};

// User Preferences Functions
export const saveUserPreferences = (preferences) => {
    try {
        localStorage.setItem(STORAGE_KEYS.USER_PREFERENCES, JSON.stringify(preferences));
        return true;
    } catch (error) {
        console.error('Error saving preferences:', error);
        return false;
    }
};

export const getUserPreferences = () => {
    try {
        const prefs = localStorage.getItem(STORAGE_KEYS.USER_PREFERENCES);
        return prefs ? JSON.parse(prefs) : { theme: 'light', notifications: true };
    } catch (error) {
        console.error('Error getting preferences:', error);
        return { theme: 'light', notifications: true };
    }
};

// Clear all data
export const clearAllData = () => {
    try {
        Object.values(STORAGE_KEYS).forEach(key => {
            localStorage.removeItem(key);
        });
        return true;
    } catch (error) {
        console.error('Error clearing all data:', error);
        return false;
    }
};
