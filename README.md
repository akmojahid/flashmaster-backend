# flashmaster-backend
Backend application of FlashMaster android apps
## Folder Structers
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