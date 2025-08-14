# PersonaAI

A full-stack AI-powered chatbot application with separate frontend and backend projects.

---

## Project Structure

```
PersonaAi/
├── frontend/   # React or Vite-based frontend
├── server/     # Node.js/Express backend
```

---

## Prerequisites
- Node.js 
- npm

---

## 1. Backend (Server) Setup

### Installation
1. Open your terminal and navigate to the server directory:
   ```sh
   cd server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Environment Variables
- Create a `.env` file in the `server` directory if it does not exist.
- Typical variables might include:
  ```env
  PORT=5000
  OPENAI_API_KEY=your_openai_api_key_here
  # Add other variables as needed
  ```
- **Never commit your real `.env` file to version control!**

### Running the Server
```sh
npm start
```
- The server will start on the port specified in your `.env` (default: 5000).

---

## 2. Frontend Setup

### Installation
1. Open a new terminal and navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Environment Variables (if needed)
- If your frontend needs environment variables, create a `.env` file in the `frontend` directory.
- Example:
  ```env
  VITE_API_URL=http://localhost:5000
  # Add other variables as needed
  ```

### Running the Frontend
```sh
npm run dev
```
- The app will usually be available at [http://localhost:5173](http://localhost:5173) (or a similar port).

---

## Usage
- Ensure both the server and frontend are running.
- Open the frontend URL in your browser.
- Interact with the chatbot interface!

---

## Notes
- If you change environment variables, restart the relevant server or frontend process.
- For production, use secure methods to manage environment variables and secrets.

---

## Troubleshooting
- If you encounter errors, ensure all dependencies are installed and environment variables are set.
- Check that the backend server is running before starting the frontend.

---

