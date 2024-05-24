# Narrative-Nest

## Description
Narrative-Nest is an app designed to make process of creating storyboards easier and faster. Users can prompt an AI to generate storyboard frames using SDXL Lightning API, making storyboard creation quick and efficient.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Contributing](#contributing)
- [Installation for usage](#installation-for-usage)
- [Usage](#usage)
- [Features](#features)
- [Code Structure](#code-structure)
- [API](#api)

## Prerequisites

Before you begin, ensure you have met the following requirements:

1. **Node.js**: Install the latest LTS version of Node.js from [nodejs.org](https://nodejs.org/).
2. **Package Manager**: It's recommended to use npm, which comes with Node.js, but you can also use yarn if you prefer.
3. **Git**: Install Git from [git-scm.com](https://git-scm.com/).
4. **Code Editor**: Install a code editor like [Visual Studio Code](https://code.visualstudio.com/).

## Contributing

Steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Navigate to the project directory in the command prompt.
4. Install dependencies:
    ```sh
    npm install
    ```
5. Run the application locally:
    ```sh
    npm run dev
    ```
6. Commit your changes (`git commit -m 'Add some feature'`).
7. Push to the branch (`git push origin feature/your-feature`).
8. Open a Pull Request.

## Installation for usage

1. Clone the repository in your Command Prompt:
   ```sh
   git clone https://github.com/your-username/narrative-nest.git
   ```

2. Navigate to the project directory:
   ```sh
   cd narrative-nest
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

## Usage

To run the project, use the following command:
```sh
npm run dev
```

To build the project for production, use:
```sh
npm run build
```

## Features
- Users can prompt the AI to create storyboard frames.
- Integration with SDXL Lightning for generating storyboard frames.


## Code Structure

- `node_modules`: Contains all the npm packages.
- `public`: Public assets including images.
- `src`: Source code directory.
  - `assets`: Static assets used in the application.
  - `components`: React components.
    - `Footer.tsx`: Footer component.
    - `Header.tsx`: Header for the storyboard page.
    - `Header2.tsx`: Header for the homepage.
    - `Header3.tsx`: Header for the login and signup pages.
    - `HeaderStory.tsx`: Header for the history page.
    - `HomePage.tsx`: Homepage component.
    - `LoginPage.tsx`: Login page component.
    - `SignUpPage.tsx`: Signup page component.
    - `History.tsx`: Contains the history of past storyboards by the user; encourages creating the first storyboard if empty.
    - `ImageCard.tsx`: Represents each card/frame in the storyboard with the logic for API calls.
    - `Storyboard.tsx`: Page for arraying each `ImageCard` as a frame for the storyboard; includes the base prompt for the style describer by the user.
  - `App.css`: Global styles for the application.
  - `App.tsx`: Main App component.
  - `index.css`: Additional global styles.
  - `main.tsx`: Entry point of the application.


## API
SDXL Lightning is used by API Call to Gradio from this Huggingface Space [SDXL Lightning by Bytedance](https://huggingface.co/spaces/ByteDance/SDXL-Lightning)
