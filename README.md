# 🧘 PowerOfAum - Module F: Events & Content Feed API

This project is a backend module for [PowerOfAum.com](https://powerofaum.com), a private SaaS engine for spiritual platforms. The module provides:

- 📥 A static content feed endpoint
- 🔐 A ticket verification system

---

## 📦 Features

### ✅ GET `/api/content-feed`

Returns a static list of upcoming spiritual content (pravachan videos, Zoom sessions, etc.).

#### Example Response:
```json
[
  {
    "id": "EVT_001",
    "title": "Intro Pravachan by Guru Ji",
    "type": "video",
    "url": "https://storage.example.com/EVT_001.mp4",
    "date": "2025-05-01T10:00:00Z",
    "description": "Welcome to the Parampara!"
  },
  {
    "id": "EVT_002",
    "title": "Monthly Q&A",
    "type": "zoom",
    "url": "https://zoom.us/j/123456789",
    "date": "2025-05-08T15:00:00Z",
    "description": "Ask Guru Ji your questions live."
  }
]

✅ POST /api/verify-event-ticket
Verifies whether a user's ticket is valid and unused.

Request Body:
json
Copy
Edit
{
  "userId": "USER_002",
  "eventId": "EVT_002",
  "ticketCode": "TICKET_ABC"
}
Success Response:
json
Copy
Edit
{
  "success": true,
  "message": "Ticket verified. You may join the event."
}
🚀 Getting Started
1. Clone the Repo
bash
Copy
Edit
git clone https://github.com/YOUR_USERNAME/candidate-00X-powerofaum-module-eventfeed.git
cd candidate-00X-powerofaum-module-eventfeed
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run the Server
bash
Copy
Edit
node index.js
Server runs on http://localhost:3000

🌐 Deployment (Vercel)
This project includes a vercel.json file for easy deployment on https://vercel.com.

Steps:

Push to GitHub

Go to Vercel → Import Project

Done!

🧪 Postman Collection
Import the included file:

pgsql
Copy
Edit
PowerOfAum_ModuleF_Collection.postman_collection.json
Use it to test:

GET /api/content-feed

POST /api/verify-event-ticket

📁 Project Structure
pgsql
Copy
Edit
.
├── api/
│   ├── content-feed.js
│   └── verify-event-ticket.js
├── data/
│   ├── content.json
│   └── tickets.json
├── index.js
├── package.json
├── vercel.json
└── README.md


