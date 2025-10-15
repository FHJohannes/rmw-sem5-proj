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
├── components/                 # Reusable UI components
│   ├── footer/                 # footer Component
│   │   ├── Footer.tsx
│   │   └── footer.modules.css
│   ├── navbar/                 # navbar Component
│   │   ├── Navbar.tsx
│   │   └── navbar.module.css
│   ├── rulesTextSection/       # Text Component
│   │   ├── RulesTextSection.tsx
│   │   └── rulesTextSection.modules.css
│   ├── textSection/            # Generic Text Component
│   │   ├── TextSection.tsx
│   │   └── textSection.modules.css
│   ├── tiles/                  # Displays Squre tiles with nav buttons
│   │   ├── Tiles.tsx
│   │   └── tiles.modules.css
│   └── welcome/                # Full Screen Welcome Message
│       ├── Welcome.tsx
│       └── welcome.modules.css
│
├── pages/                      # Page-level components for routing
│   ├── LandingPage/
│   │   ├── LandingPage.tsx
│   │   └── home.css
│   ├── lessonsList/
│   │   ├── LessonsList.tsx
│   │   └── lessonsList.css
│   │       └── lessons         # Placeholder for individual lessons, might be replaced with UseLessons hook
│   └── rules/
│       ├── Rules.tsx
│       └── rules.css
│
├── router.tsx                  # Router configuration
├── App.css                     # Used for styles that apply only to the react app but not to the whole page
├── App.tsx                     # Layout component including Navbar and Outlet
├── main.tsx                    # Entry point mounting React to DOM, contains RouterProvider
└── index.css                   # Global styles
```


## Routing

```/``` -> Renders the main landing page (LandingPage).\
```/home``` -> Scrolls to the welcome section of the landing page.\
```/welcome``` -> Alias for /home, navigates to the welcome section.\
```/mahjong``` -> Scrolls to the about section of the landing page.\
```/shortrules``` -> Scrolls to the shortrules section of the landing page.\
```/overview``` -> Scrolls to the tiles overview section.\
```/summary``` -> Scrolls to the summary section of the landing page.\
```/lessons``` -> Displays the LessonsList component (intended for listing individual lessons).\
```/rules``` -> Displays the Rules component (full rules page).\

The landing page routes use an anchor prop to determine which section of the page to scroll to, providing single-page navigation behavior.

## For Devs

### Components
If you need additional components just create them in the ```/components``` directory. Make sure to include a ```.modules.css``` file for your component styles.\

### Styles
For stylings that apply to one specific page or component use the corresponding ```.modules.css``` files.\
```index.css``` is **only** used for global styles such as fonts and colors. Use ```App.css``` for styles that apply to the react app but not to the whole page, such as centering content.