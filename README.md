## Project Overview
FlashMaster is a flashcard application designed to help students create, organize, and review flashcards efficiently. The backend is built using Node.js, Express, and MongoDB, and follows a modular architecture to ensure scalability and maintainability.

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
