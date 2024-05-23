# Task Manager Application

## Overview

The Task Manager Application is a simple yet powerful tool for managing tasks. Users can create, update, delete, and filter tasks based on their status (e.g., "To Do," "In Progress," "Done"). This application demonstrates full-stack development using React for the frontend and Node.js with Express and MongoDB for the backend.

## Features

- Create new tasks with a title, description, and status.
- View a list of all tasks.
- Update the status of tasks.
- Delete tasks.
- Filter tasks by status (All, To Do, In Progress, Done).
- Responsive design for both desktop and mobile devices.

## Tech Stack

### Frontend

- React
- Axios
- CSS (with optional SCSS or Tailwind CSS)

### Backend

- Node.js
- Express
- MongoDB
- CORS


## Getting Started

### Prerequisites

- Node.js and npm (or yarn)
- MongoDB

### Backend Setup

1. Navigate to the `backend` directory:

```sh
cd backend
```

2. Install dependencies:
```sh
npm install
```

3. Create a `config.js` file in the backend directory with the following content:
```js
module.exports = {
  mongoURI: 'your-mongodb-uri',
  port: process.env.PORT || 5000,
};
```

4. Start the server:
```sh
nodemon
```

### Frontend Setup

1. Navigate to the frontend directory:
```sh
cd frontend
```

2. Install dependencies:
```sh
yarn install
```

3. Create a `config.js` file in the frontend/src directory with the following content:
```js
const config = {
  SERVER_URL: 'http://localhost:8000/api',
};

export default config;
```

4. Start the development server:
```sh
yarn start
```
The application should now be running and accessible at `http://localhost:3000`.

## Deployment

### Backend
Deploy the backend using platforms like Heroku or Render.
Ensure you set environment variables for MongoDB URI and any other secrets.

### Frontend
Deploy the frontend using services like Vercel or Netlify.


## Usage
### Creating a Task
1. Enter the task title, description, and select a status from the dropdown.
2. Click "Add Task" to create the task.

### Viewing Tasks
Tasks are listed on the main screen, showing their title, description, and status.

### Updating a Task
1. Click the status buttons ("To Do," "In Progress," "Done") on each task to update its status.
2. The task status will be updated accordingly.

### Deleting a Task
Click the "Delete" button on a task to remove it from the list.

### Filtering Tasks
Use the filter buttons ("All," "To Do," "In Progress," "Done") to filter tasks by their status.

## Additional Features
1. Implement user authentication and authorization.
2. Add FAB button to open adding tasks in a modal.
3. Add task due dates and reminders.
4. Enhance task sorting and searching capabilities.
5. Implement user profiles with avatars.

## License
This project is licensed under the MIT License.

## Contact
For any questions or suggestions, please feel free to create and issue
