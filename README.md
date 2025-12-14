# MindCheck - Mental Health Support Web App

## Project Overview

MindCheck is a comprehensive mental health assessment platform that combines interactive quizzes, AI-powered chatbot support, and progress tracking to help users understand and monitor their mental wellness.

The application allows users to:
- **Create an account** with email/password or Google Sign-In
- **Take mental health assessments** with personalized results
- **Chat with an AI assistant** powered by Google Gemini for mental health support
- **Track progress** with mood logging and visualization
- **Access resources** including emergency hotlines for Sri Lanka
- **View assessment history** and track wellness journey over time

⚠️ **Disclaimer:** This project is for educational and wellness support purposes only. It is not a medical diagnostic tool. Users experiencing mental health crises should contact professional services immediately.

---

## Features

### Authentication & Security
- ✅ Email/password authentication with Firebase
- ✅ Google Sign-In integration
- ✅ Protected routes with authentication guards
- ✅ User data isolation with Firestore security rules
- ✅ Secure session management

### Mental Health Assessment
- ✅ Interactive quiz with one-question-at-a-time flow
- ✅ Score calculation and personalized feedback
- ✅ Color-coded results based on assessment scores
- ✅ Assessment history stored per user
- ✅ Progress tracking over time

### AI Chatbot Support
- ✅ Compassionate AI assistant using Google Gemini
- ✅ Crisis keyword detection with emergency resources
- ✅ Quick action buttons for common concerns
- ✅ Conversation history saved to Firestore
- ✅ Context-aware responses

### Progress Tracking
- ✅ Mood logging with date tracking
- ✅ Activity tracking
- ✅ Visual charts using Recharts
- ✅ Historical data analysis
- ✅ Trend visualization

### UI/UX
- ✅ Modern, responsive design with Tailwind CSS
- ✅ Smooth animations with Framer Motion
- ✅ Professional teal and coral color scheme
- ✅ Mobile-first responsive layout
- ✅ Loading states and error handling

---

## Tech Stack

### Frontend
- **React 18** – Component-based UI framework
- **Vite** – Fast build tool and dev server
- **React Router Dom** – Client-side routing with protected routes
- **Tailwind CSS** – Utility-first CSS framework
- **Framer Motion** – Animation library for smooth transitions
- **Recharts** – Data visualization for mood tracking
- **Lottie-React** – Optional animations for engagement
- **Axios** – HTTP client for API requests

### Backend & Services
- **Firebase Authentication** – User authentication and session management
- **Cloud Firestore** – NoSQL database for user data
- **Google Gemini AI** – AI-powered chatbot integration
- **Firebase Security Rules** – Server-side data access control

### Deployment
- **Vercel** – Hosting with automatic deployments
- **GitHub** – Version control and collaboration

---

## Project Structure

```
mindcheck-frontend/
├── src/
│   ├── api/
│   │   ├── api.js                    # Axios instance & API helpers
│   │   └── chatbot.js                # Gemini AI chatbot integration
│   ├── components/
│   │   ├── auth/
│   │   │   ├── Login.jsx             # Login page component
│   │   │   └── SignUp.jsx            # Registration page component
│   │   ├── Navbar.jsx                # Navigation bar with auth state
│   │   ├── Footer.jsx                # Footer component
│   │   ├── Chatbot.jsx               # AI chatbot interface
│   │   ├── QuestionCard.jsx          # Quiz question component
│   │   ├── ResultCard.jsx            # Quiz results display
│   │   ├── ProgressBar.jsx           # Quiz progress indicator
│   │   ├── ProtectedRoute.jsx        # Route guard for authenticated users
│   │   ├── PublicRoute.jsx           # Route guard for public pages
│   │   └── UserProfile.jsx           # User profile and history
│   ├── contexts/
│   │   └── AuthContext.jsx           # Authentication context provider
│   ├── services/
│   │   ├── authService.js            # Firebase auth functions
│   │   └── dbService.js              # Firestore database operations
│   ├── config/
│   │   └── firebase.js               # Firebase initialization
│   ├── pages/
│   │   ├── Home.jsx                  # Landing page with hero section
│   │   ├── Quiz.jsx                  # Mental health assessment quiz
│   │   ├── Result.jsx                # Quiz results with recommendations
│   │   ├── Tracker.jsx               # Mood and progress tracking
│   │   └── Resources.jsx             # Mental health resources & hotlines
│   ├── utils/
│   │   └── localStorage.js           # Local storage helpers
│   ├── App.jsx                       # Main app with routing
│   ├── main.jsx                      # App entry point
│   └── index.css                     # Global styles & Tailwind imports
├── public/                           # Static assets
├── .env.example                      # Environment variables template
├── .gitignore                        # Git ignore rules
├── vercel.json                       # Vercel deployment configuration
├── tailwind.config.js                # Tailwind CSS configuration
├── vite.config.js                    # Vite build configuration
├── package.json                      # Dependencies and scripts
├── FIREBASE_SETUP.md                 # Firebase setup guide
├── FIRESTORE_SECURITY_RULES.md       # Database security rules
├── DEPLOYMENT_GUIDE.md               # Deployment instructions
├── FIREBASE_USAGE.md                 # Code examples and API reference
└── README.md                         # This file
```

---

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase account ([console.firebase.google.com](https://console.firebase.google.com))
- Google Gemini API key ([makersuite.google.com](https://makersuite.google.com/app/apikey))

### 1. Clone the Repository
```bash
git clone https://github.com/Namalekanayaka/MindCheck-mentalhealth.git
cd MindCheck-mentalhealth
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory:

```env
# Gemini API Configuration
VITE_GEMINI_API_KEY=your_gemini_api_key_here

# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

See `.env.example` for the template.

### 4. Configure Firebase
Follow the detailed setup guide in [FIREBASE_SETUP.md](./FIREBASE_SETUP.md):
1. Create Firebase project
2. Enable Email/Password and Google authentication
3. Create Firestore database
4. Apply security rules from [FIRESTORE_SECURITY_RULES.md](./FIRESTORE_SECURITY_RULES.md)
5. Add credentials to `.env`

### 5. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` to see the app!

### 6. Build for Production
```bash
npm run build
```

Output will be in the `dist/` directory.

---

## Database Structure

### Firestore Collections

```
users/
  {userId}/
    ├── email: string
    ├── displayName: string
    ├── authProvider: "email" | "google"
    ├── photoURL: string | null
    ├── createdAt: timestamp
    └── updatedAt: timestamp
    
    assessments/
      {assessmentId}/
        ├── type: "Mental Health Assessment"
        ├── score: number
        ├── totalQuestions: number
        ├── answers: object
        ├── completedAt: string
        └── createdAt: timestamp
    
    chatHistory/
      {conversationId}/
        ├── messages: array
        │   └── { role: "user" | "model", content: string, timestamp: date }
        ├── startedAt: timestamp
        └── lastMessageAt: timestamp
    
    progressLogs/
      {logId}/
        ├── mood: string
        ├── activities: array
        ├── notes: string
        ├── date: string (YYYY-MM-DD)
        └── createdAt: timestamp
```

---

## Key Features Implementation

### Authentication Flow
1. User visits site → Redirected to `/signup`
2. User creates account or signs in
3. Redirected to `/home` after authentication
4. Protected routes accessible only when authenticated
5. User data isolated by Firebase UID

### Quiz Flow
1. User starts quiz from home page
2. Questions displayed one at a time
3. Progress tracked with visual indicator
4. Answers stored in component state
5. On submit, results calculated and saved to Firestore
6. User redirected to results page with recommendations

### Chatbot Interaction
1. Chatbot accessible from any page (floating button)
2. User sends message to Gemini AI
3. AI responds with compassionate mental health support
4. Crisis keywords detected → Emergency resources shown
5. Conversation saved to Firestore for history

### Progress Tracking
1. User logs mood and activities
2. Data saved to Firestore with date
3. Charts display historical trends
4. User can view progress over time

---

## Security & Privacy

### Authentication Security
- ✅ Firebase Authentication handles password hashing
- ✅ JWT tokens for session management
- ✅ Protected routes prevent unauthorized access
- ✅ Google OAuth for secure third-party login

### Data Privacy
- ✅ Each user's data isolated by Firebase UID
- ✅ Firestore security rules enforce server-side access control
- ✅ No cross-user data access possible
- ✅ Environment variables for sensitive API keys
- ✅ `.env` file excluded from Git

### Firestore Security Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

---

## Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial deployment"
   git push
   ```

2. **Import to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure build settings:
     - Framework: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`

3. **Add Environment Variables**
   - In Vercel dashboard → Settings → Environment Variables
   - Add all `VITE_*` variables from your `.env` file
   - Select Production, Preview, and Development

4. **Deploy**
   - Vercel will automatically build and deploy
   - Future pushes to `main` branch auto-deploy

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

---

## Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GEMINI_API_KEY` | Google Gemini AI API key | Yes |
| `VITE_FIREBASE_API_KEY` | Firebase API key | Yes |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase auth domain | Yes |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project ID | Yes |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket | Yes |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID | Yes |
| `VITE_FIREBASE_APP_ID` | Firebase app ID | Yes |

---

## Documentation

- [Firebase Setup Guide](./FIREBASE_SETUP.md) - Complete Firebase configuration
- [Firestore Security Rules](./FIRESTORE_SECURITY_RULES.md) - Database security
- [Deployment Guide](./DEPLOYMENT_GUIDE.md) - Hosting on Vercel
- [Firebase Usage](./FIREBASE_USAGE.md) - Code examples and API reference

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License.

---

## Emergency Resources (Sri Lanka)

If you or someone you know is experiencing a mental health crisis:

- **National Mental Health Helpline:** 1926 (24/7, Free)
- **CCCline:** 1333 (24/7, Toll-free)
- **Emergency Services:** 110

---

## Acknowledgments

- **Google Gemini AI** - AI chatbot integration
- **Firebase** - Authentication and database services
- **Tailwind CSS** - UI styling framework
- **Framer Motion** - Animation library
- **BetterHelp** - Design inspiration

---

## Contact

**Project Link:** [https://github.com/Namalekanayaka/MindCheck-mentalhealth](https://github.com/Namalekanayaka/MindCheck-mentalhealth)

---

Made with ❤️ for mental wellness in Sri Lanka
