# MindCheck Frontend

Advanced Mental Health Support Web Application built with React, Vite, and Tailwind CSS.

## Features

- 🧠 **Mental Health Quiz** - Comprehensive assessment based on validated scales (PHQ-9, GAD-7)
- 📊 **Progress Tracking** - Visualize your mental wellness journey with charts
- 🆘 **Resources** - Access emergency hotlines and mental health resources
- 💾 **Local Storage** - Your data is stored securely on your device
- 🎨 **Beautiful UI** - Modern, responsive design with smooth animations

## Tech Stack

- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations
- **Recharts** - Data visualization
- **Axios** - HTTP client (ready for backend integration)

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

The app will be available at `http://localhost:3000`

## Project Structure

```
src/
├── api/              # API functions and axios configuration
├── components/       # Reusable React components
├── pages/           # Page components
├── data/            # Sample JSON data
├── utils/           # Utility functions (localStorage, etc.)
├── App.jsx          # Main app component with routing
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## Features Overview

### Mental Health Quiz
- 10 validated questions covering mood, anxiety, sleep, and more
- Real-time progress tracking
- Instant results with personalized feedback

### Progress Tracker
- Quiz history with trend visualization
- Daily mood tracking
- Interactive charts

### Resources
- Emergency hotlines (988, Crisis Text Line)
- Mental health organizations
- Self-help tools and professional services
- Categorized and filterable

### Authentication (Coming Soon)
- User registration and login
- Secure data synchronization
- Profile management

## Data Storage

Currently uses localStorage for data persistence:
- Quiz results
- Mood entries
- User preferences

Ready for backend integration with structured API calls.

## Important Notes

⚠️ **Disclaimer**: This application is not a substitute for professional medical advice, diagnosis, or treatment. If you are experiencing a mental health crisis, please contact emergency services or call 988.

## Future Enhancements

- Backend API integration
- User authentication
- Cloud data synchronization
- PWA support for offline usage
- Dark/light mode toggle
- Multi-language support

## License

MIT License - feel free to use this project for learning or personal use.

## Support

If you're in crisis:
- **National Suicide Prevention Lifeline**: 988
- **Crisis Text Line**: Text HOME to 741741
- **SAMHSA National Helpline**: 1-800-662-4357
