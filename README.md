# AI Email Reply Assistant

A full-stack application that generates professional email replies using AI.

The application allows users to enter an email subject, customer email content, and desired reply tone. The AI generates a polite, concise, and context-aware response.

---

# Tech Stack

## Frontend:
- React (Vite)
- Axios
- CSS

## Backend:
- NestJS
- TypeScript
- Class Validator

## AI Integration:
- xAI Grok API

---

# Features

1. Generate AI-powered email replies
2. Select reply tone
3. Copy generated reply
4. Input validation
5. Character limit handling
6. Loading state during AI generation
7. Error handling
8. Responsive user interface

---

# Project Structure

```
ai-email-reply-assistant

│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── EmailForm.jsx
│   │   │   └── ReplyBox.jsx
│   │   │
│   │   ├── services
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   └── index.css
│   │
│   └── package.json
│
│
├── backend
│   ├── src
│   │   ├── email
│   │   │   ├── dto
│   │   │   │   └── generate-email.dto.ts
│   │   │   │
│   │   │   ├── email.controller.ts
│   │   │   ├── email.service.ts
│   │   │   └── email.module.ts
│   │   │
│   │   ├── app.module.ts
│   │   └── main.ts
│   │
│   ├── .env.example
│   └── package.json
│
│
├── sample-data
│   └── sample-email.json
│
├── screenshots
│
├── README.md
└── .gitignore
```

---

# Application Flow

```
User Input

      ↓

React Frontend

      ↓

Axios API Request

      ↓

NestJS Backend

      ↓

Email Service

      ↓

xAI Grok API

      ↓

Generated Email Reply
```

---

# Setup Instructions

## Prerequisites

Install:

- Node.js
- npm
- xAI API Key


---

# Backend Setup

Navigate to backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create environment file:

```
.env
```

Add:

```env
XAI_API_KEY=your_api_key_here
```

Start backend:

```bash
npm run start:dev
```

Backend runs on:

```
http://localhost:3000
```

---

# Frontend Setup

Open another terminal.

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start frontend:

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# API Documentation

## Generate Email Reply

Endpoint:

```
POST /email/generate
```

---

## Request Body

```json
{
  "subject": "Delayed Order",
  "body": "Hello, my order has not arrived yet. Please check.",
  "tone": "professional"
}
```

---

## Response

```json
{
  "reply": "Dear Customer,\n\nThank you for contacting us..."
}
```

---

# AI Integration

This project uses the **xAI Grok API** for generating professional email replies.

The AI service is isolated inside the backend service layer, allowing the provider to be changed easily without modifying the rest of the application.

The AI receives:

- Email subject
- Customer email content
- Selected reply tone

The AI is instructed to:

- Generate professional replies
- Keep responses concise
- Avoid creating false information
- Include proper greetings and closing

---

# Frontend

The frontend provides:

1. Email input form
2. Email subject field
3. Customer email textarea
4. Reply tone selection
5. AI generated response display
6. Copy response feature
7. Loading state
8. Validation feedback

---

# Backend

The backend provides:

1. REST API for generating replies
2. Request validation using DTOs
3. AI API communication
4. Environment variable handling
5. Error handling

---

# Design Decisions

## 1. No Database

Generated replies are not stored.

Reason:

The main purpose of this application is generating email replies. Permanent storage was not required for this assessment.

---

## 2. AI Service Layer

The AI communication is handled inside:

```
EmailService
```

Reason:

Separating AI logic makes the application easier to maintain and allows changing AI providers in the future.

---

## 3. Simple REST API

The application uses:

```
POST /email/generate
```

Reason:

The assessment required a focused working solution instead of unnecessary complexity.

---

## 4. Frontend and Backend Separation

Frontend handles:

- User interaction
- Form input
- Displaying results

Backend handles:

- Validation
- Business logic
- AI communication

Reason:

This improves maintainability and follows standard full-stack architecture.

---

# Assumptions

1. Users provide valid email content.
2. Authentication is outside the scope of this assessment.
3. Generated replies do not require permanent storage.
4. AI API availability is assumed.
5. The application is designed for individual usage.

---

# Tradeoffs

Due to the limited assessment time, priority was given to:

1. Core functionality
2. Clean architecture
3. User experience
4. Maintainable code


Not implemented:

1. User authentication
2. Email history
3. Gmail/Outlook integration
4. Rate limiting
5. Advanced prompt management
6. Automated test suite

---

# Testing

The application was manually tested for:

## Successful Reply Generation

Input:

Customer email complaint

Expected:

Professional AI-generated reply

Result:

Passed


---

## Validation Testing

Tested:

- Empty subject
- Empty email body
- Large input length

Result:

Passed


---

## Error Handling

Tested:

- Backend unavailable
- AI API failure

Result:

Application displays an error message.

---

# Sample Data

Sample input is available at:

```
sample-data/sample-email.json
```

Example:

```json
{
  "subject": "Delayed Order",
  "body": "Hello, my order has not arrived yet. Please check.",
  "tone": "professional"
}
```

---

# Security

1. API keys are stored using environment variables.
2. `.env` files are excluded from Git.
3. `.env.example` is provided for setup reference.
4. No private or client data is included.

---



## Authentication

Add user accounts and personalized history.

---
# Future Improvements
## Email Provider Integration

Integrate:

- Gmail API
- Outlook API

to generate replies directly from emails.

---

## Reply History

Store previously generated replies.

---

## Advanced AI Features

Add:

- Custom instructions
- Industry-specific templates
- Reply length control
- Multi-language support

---

## Testing

Add:

- Unit tests
- API tests
- End-to-end tests

---

# Time Taken

Approximately **2 hours 50 minutes**

Project Timeline
1) Started the assessment (3:25)
2) Made the project folder structure (3:30)
3) Initialized frontend/backend/git (3:33)
4) Added a minimal README.md (3:35)
5) Installed required packages for backend (3:37)
6) Added email module and tested using Postman (4:18)
7) Added basic frontend and connected with backend (4:30)
8) Added enhancement in features (4:55)
9) Initializing Database for Login/Signup features and Storing replies (5:25)
10) Added Login/Signup features (5:50)
11) Enhanced UI (6:15)

---



# Git Workflow

Implemented through incremental commits:

```
Initial project setup

Build backend email generation API

Integrate Grok AI service

Create React frontend

Improve UX validation and loading states

Add documentation and testing details
```

---

# Author

Developed as a practical work sample demonstrating:

- Full-stack development
- AI API integration
- REST API design
- Clean architecture
- Practical engineering decisions