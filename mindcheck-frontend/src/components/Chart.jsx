import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { motion } from 'framer-motion';

const Chart = ({ data, type = 'line' }) => {
    // Format data for Recharts
    const formattedData = data.map((item, index) => ({
        name: item.date ? new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : `Day ${index + 1}`,
        score: item.score || item.mood || 0,
        fullDate: item.date
    }));

    // Custom tooltip
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
                    <p className="text-sm font-semibold text-gray-800">{data.name}</p>
                    <p className="text-sm text-blue-600">Score: {data.score}</p>
                    {data.fullDate && (
                        <p className="text-xs text-gray-500">
                            {new Date(data.fullDate).toLocaleString()}
                        </p>
                    )}
                </div>
            );
        }
        return null;
    };

    if (formattedData.length === 0) {
        return (
            <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg">
                <p className="text-gray-500">No data available yet. Complete a quiz to see your progress!</p>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-64 md:h-80"
        >
            <ResponsiveContainer width="100%" height="100%">
                {type === 'area' ? (
                    <AreaChart data={formattedData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis
                            dataKey="name"
                            stroke="#6b7280"
                            style={{ fontSize: '12px' }}
                        />
                        <YAxis
                            stroke="#6b7280"
                            style={{ fontSize: '12px' }}
                            domain={[0, 30]}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Area
                            type="monotone"
                            dataKey="score"
                            stroke="#3b82f6"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorScore)"
                            animationDuration={1000}
                        />
                    </AreaChart>
                ) : (
                    <LineChart data={formattedData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis
                            dataKey="name"
                            stroke="#6b7280"
                            style={{ fontSize: '12px' }}
                        />
                        <YAxis
                            stroke="#6b7280"
                            style={{ fontSize: '12px' }}
                            domain={[0, 30]}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Line
                            type="monotone"
                            dataKey="score"
                            stroke="#3b82f6"
                            strokeWidth={3}
                            dot={{ fill: '#3b82f6', r: 5 }}
                            activeDot={{ r: 7 }}
                            animationDuration={1000}
                        />
                    </LineChart>
                )}
            </ResponsiveContainer>
        </motion.div>
    );
};

export default Chart;
