# rmw-sem5-proj

## Installation
This project requires the **hypernode** docker container, simply clone the repo into the ``` fhooe-hypernode-dock\node ``` directory.\
After cloning the repo run the following commands as necessary.\
``` npm install ```\
``` npm install react-router-dom ```

### Docker Commands 
``` docker compose up -d ```\
``` docker exec -it hypernode /bin/bash ```

### Running Locally
Start the Server: ``` npm run dev -- --host ```\
Navigate to: http://localhost:5555


## Folder Structure
```
src/
├── components/             # Reusable UI components
│   └── Navbar/
│       ├── Navbar.tsx
│       └── navbar.css
│
├── pages/                  # Page-level components for routing
│   ├── Home/
│   │   ├── Home.tsx
│   │   └── home.css
│   ├── lessonsList/
│   │   ├── LessonsList.tsx
│   │   └── lessonsList.css
│   │       └── lessons     # Placeholder for individual lessons, might be replaced with UseLessons hook
│   └── rules/
│       ├── Rules.tsx
│       └── rules.css
│
├── router.tsx              # Router configuration
│
├── App.tsx                 # Layout component including Navbar and Outlet
├── main.tsx                # Entry point mounting React to DOM, contains RouterProvider
└── index.css               # Global styles
```