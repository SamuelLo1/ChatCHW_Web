## Developers
Samuel Lo

Timothy Le

Sophi Brent (UI/UX)

# ChatCHW_Web

This repository contains the source code for the web application of the ChatCHW project. ChatCHW is an initiative aimed at leveraging Large Language Models (LLMs) to support Community Health Workers (CHWs) in underserved regions. This web interface is designed to provide information on ChatCHW. If you would like to learn more about ChatCHW or see a demo of ChatCHW, please contact the project lead. More information can be found [https://urapprojects.berkeley.edu/detail.php?id=18714-3](here).

## Project Status

ChatCHW is still an ongoing development. This repository will be updated as more progress is made with ChatCHW.

## Technologies Used

* **Next.js:** A React framework for building server-side rendering and static web applications.
* **TypeScript:** A superset of JavaScript that adds static typing.
* **React:** A JavaScript library for building user interfaces.
* **Tailwind CSS:** (Mentioned in commit messages, though a commit also says "tailwind doesn't work", so its full integration might be incomplete) A utility-first CSS framework.
* **Inter:** A custom Google Font (as indicated by Next.js font optimization).
* **npm/yarn/pnpm:** Package managers for JavaScript.

## Getting Started

1.  **Prerequisites:**
    * Node.js and npm (or yarn/pnpm) installed on your system.

2.  **Clone the repository:**
    ```bash
    git clone [https://github.com/SamuelLo1/ChatCHW_Web.git](https://github.com/SamuelLo1/ChatCHW_Web.git)
    cd ChatCHW_Web
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    # or
    # pnpm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    # yarn dev
    # or
    # pnpm dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure (Key Files/Folders)

* `app/`: Contains the core application code, likely following Next.js App Router conventions.
    * `(dashboard)`: Contains all the routes like the about, blog, contact, and demo page.
    * `(landing)`: Contains the main landing page
* `components/`: Reusable React components.
* `lib/`: Utility functions or libraries.
* `public/assets/`: Static assets like images.
* `styles/`: CSS or styling files.
* `utils/`: Other utility modules.
* `.eslintrc.json`: ESLint configuration for code linting.
* `next.config.js` (or `.mjs`): Next.js configuration file.
* `tsconfig.json`: TypeScript configuration file.

It would be beneficial to reach out to the maintainer (SamuelLo1) to understand the current status and potential areas for contribution.

## Acknowledgements

* This web application is a component of the broader **ChatCHW** project
* The ChatCHW initiative has connections with the **University of California, Berkeley (Haas School of Business, College of Data Science and Society)**
* Professor **David Levine** (UC Berkeley's Haas School of Business) is noted for his work on ChatCHW, focusing on aiding community health workers in underserved settings
