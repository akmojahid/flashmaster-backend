## 📝Project Overview
Its just a simple Android application backend.

## WorkFlows
### Design And Planning
- [ ] Researching Idea
- [ ] Drafting Prototype
- [ ] User Feedback
- [ ] Audit
- [ ] Finalization

### Flashcard Management - Development
- [x] User Authentication
- [ ] Create & Edit Flashcards:
- [ ] Users can create flashcards with the following content types:
- [ ] Text & Definitions: A rich text editor with basic formatting options.
- [ ] Questions & Answers: Default setup where questions are visible, and answers are hidden.
- [ ] Images: Users can upload or link images, with basic image editing features (crop, resize).
- [ ] Web Links: Users can attach web links to generate previews.
- [ ] Organize Flashcards:
- [ ] Tagging: Users can tag flashcards with keywords for easy retrieval.
- [ ] Deck Management: Users can group flashcards into decks (e.g., by subject, or topic).
- [ ] Review & Study:
- [ ] Spaced Repetition: Implement an algorithm to schedule flashcard reviews based on user performance.
- [ ] Quiz Mode: Users can test themselves with random or sequential flashcard quizzes, tracking accuracy and time taken.
- [ ] Study Progress Tracking: Track and display user progress, including flashcards studied, retention rates, and study streaks.

## Folder Structure
Here's an overview of the project structure:
```text:
flashmaster-backend/
├── config/
│   ├── db.js              # Database connection setup
│   ├── firebase.js        # Firebase configuration for authentication
│   └── config.js          # Application configuration variables
├── controllers/
│   ├── authController.js  # Authentication logic (login, signup, etc.)
│   ├── userController.js  # User-related operations
│   ├── flashcardController.js # Flashcard CRUD operations
│   ├── deckController.js  # Flashcard deck management
│   └── analyticsController.js # Performance analytics operations
├── middlewares/
│   ├── authMiddleware.js  # JWT authentication middleware
│   ├── errorHandler.js    # Error handling middleware
│   └── validation.js      # Input validation logic
├── models/
│   ├── User.js            # User model/schema
│   ├── Flashcard.js       # Flashcard model/schema
│   ├── Deck.js            # Deck model/schema
│   └── Analytics.js       # Analytics model/schema
├── routes/
│   ├── authRoutes.js      # Routes related to authentication
│   ├── userRoutes.js      # Routes related to user operations
│   ├── flashcardRoutes.js # Routes for flashcard operations
│   ├── deckRoutes.js      # Routes for deck management
│   └── analyticsRoutes.js # Routes for analytics
├── services/
│   ├── authService.js     # Service layer for authentication
│   ├── flashcardService.js # Service layer for flashcard logic
│   ├── deckService.js     # Service layer for deck logic
│   ├── analyticsService.js # Service layer for analytics
│   └── notificationService.js # Service layer for notifications (Firebase)
├── utils/
│   ├── logger.js          # Logging utility
│   ├── constants.js       # Constant values used across the app
│   └── helper.js          # Helper functions
├── .env                   # Environment variables
├── .gitignore             # Git ignore file
├── app.js                 # Express app setup
├── server.js              # Server startup file
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
```
## Getting Started

### Prerequisites
- **Node.js**: Make sure you have Node.js installed (version 14 or above).
- **MongoDB**: Ensure MongoDB is installed and running locally, or use a cloud-based MongoDB service like MongoDB Atlas.

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/flashmaster-backend.git
   ```
   
Navigate to the project directory and install dependency:
```bash:
cd flashmaster-backend
npm install
```
