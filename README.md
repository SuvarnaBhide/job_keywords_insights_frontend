# `job_keywords_insights_frontend/`:  <br>Repository containing frontend codebase built with React.js

### You can find the deployed application [here](https://jobkeywordinsights-1bb99.web.app/).

## Codebase description

<details>
<summary><code>.firebase</code></summary>

Contains cached data related to your Firebase hosting deployment which helps optimize and speed up the deployment process.

</details>

<details>
<summary><code>.github</code></summary>

Contains GitHub Actions workflows that automate CI/CD tasks for your project.

- <details>
    <summary><code>firebase-hosting-merge.yml</code></summary>

    Automates Firebase hosting deployments when changes are merged into the main branch.

  </details>

- <details>
    <summary><code>firebase-hosting-pull-request.yml</code></summary>

    Manages Firebase hosting preview deployments for PRs to test changes before merging.

  </details>

</details>

<details>
<summary><code>.public/</code></summary>

Contains static assets that are served directly to users, such as icons and HTML files.

- <details>
    <summary><code>favicon.ico</code></summary>

    The icon displayed in the browser tab.

  </details>

- <details>
    <summary><code>index.html</code></summary>

    The main HTML file that loads your React application.

  </details>

- <details>
    <summary><code>manifest.json</code></summary>

    Provides metadata about your web app, such as name and theme color.

  </details>

- <details>
    <summary><code>robots.txt</code></summary>

    Instructions for web crawlers about which pages to index or not.

  </details>

</details>

<details>
<summary><code>src/</code></summary>

Contains the source code for the React application.
- <details>
    <summary><code>0. archive</code></summary>
    Contains archived code files that are no longer in use.
  </details>

- <details>
    <summary><code>app/</code></summary>

    Contains core application logic.

    - <details>
        <summary><code>axios/axios.js</code></summary>
        Sets up an Axios instance with a base URL for making API requests to the backend service.
      </details>
    - <details>
        <summary><code>context/TabsContext.js</code></summary>
        Creates and provides a context for managing the current tab state across the application, and a higher-order component to wrap components with this context.
      </details>
    - <details>
        <summary><code>hooks/</code></summary>
        Custom React hooks for reusable logic. One hook for each page.
      </details>
    - <details>
        <summary><code>redux/</code></summary>
        Redux state management files including actions, reducers, and store setup.

        - <details>
            <summary><code>slices/</code></summary>
            Contains Redux slices for managing application state.
          </details>
        - <details>
            <summary><code>store.js</code></summary>
            Sets up the Redux store for managing state in the application.
          </details>
      </details>
    - <details>
        <summary><code>routes/AppRoutes.jsx</code></summary>
        Application route definitions and navigation setup.
      </details>
    - <details>
        <summary><code>services/</code></summary>
        contains utility functions and services related to managing and interacting with data, including fetching data from the database using asynchronous Redux actions.
      </details>
    
  </details>

- <details>
    <summary><code>assets/</code></summary>

    Includes images, fonts, and other static assets used in the project.

  </details>

- <details>
    <summary><code>components/</code></summary>

    Contains reusable React components.

    - <details>
        <summary><code>common/</code></summary>

        - <details>
            <summary><code>Dialogs</code></summary>
            
            - <details>
                <summary><code>CustomDialog.jsx</code></summary>

                Renders a custom dialog box using Material-UI's Dialog component with customizable styling and content.
              </details>
          </details>
        - <details>
            <summary><code>MuiDataTable/dataTableColumnData.jsx</code></summary>

            This file contains information about the columns in different MUIDataTables. It defines the names and options for each column, and it also includes custom rendering functions for specific columns. This file helps keep the column data organized and makes it easier to update or modify column configs in the applciation.
          </details>
        - <details>
            <summary><code>Tabs/CustomTabs.jsx</code></summary>

            React component that renders a set of tabs with customizable labels and handles tab changes
          </details>
      </details>
    - <details>
        <summary><code>Keywords/</code></summary>

        Contains components related to the `Job Keywords` page present in `Sidebar`
        - <details>
            <summary><code>AllKeywordsOccurrences.jsx</code></summary>

            - Displays a table of keywords and their occurrences
            - It fetches keyword details using a custom hook and renders a MUI Data Table.
            - When a cell in the 'Occurrences' column is clicked, it dispatches an action to set the selected keyword and navigates to a specific keyword's details page.
          </details>
        - <details>
            <summary><code>KeywordDetails.jsx</code></summary>

            - displays detailed information about a specific keyword
            - it fetches keyword details using the `useKeywordDetails` custom hook, which interacts with the Redux store to manage the state related to keywords.
            - this component renders a title, and a MUI Data Table to display keyword details.
            - the table columns are defined, and there is a custom body render function for the 'Filename' column.
          </details>
      </details>
    - <details>
        <summary><code>Quiz/</code></summary>

        Contains components related to the `Quiz` page present in `Sidebar`
        - <details>
            <summary><code>AttemptDetails.jsx</code></summary>

            - Displays detailed information about a quiz attempt
            - It receives attempt data as a prop and renders the attempt details such as the quiz score, the selected and correct option for every question 
          </details>
        - <details>
            <summary><code>Attempts.jsx</code></summary>

            - renders a table of quiz attempts
            - fetches attempts using `useQuizDetails` custom hook
            - When a cell in the `Details` column is clicked, it dispatches an action to set current attempt and opens a dialog to display more details about the attempt
          </details>
        - <details>
            <summary><code>QuizDetails.jsx</code></summary>

            - Displays list of quizzes
            - uses `useQuizDetails` custom hook, which interacts with Redux store to manage the state related to `quizzes`. 
            - Renders a MUI Data Table to display quiz details
            - there is a custom body render function in the `Details` column, which when clicked dispatches an action to set current quiz ID and opens a dialog to display more details about the quiz.
          </details>
        - <details>
            <summary><code>QuizLive.jsx</code></summary>

            - Displays questions and options for a specific quiz.
            - Fetches `questions` based on `quiz_id` via `useQuizDetails`
            - Renders a scrollable component with questions and options
            - User can click on one option per question and gets to see if the option selected is correct/wrong.
            - There is a submit button at the end, which, once clicked on, shows the total score and a button to navigate to the `Past Attempts` tab
          </details>
      </details>
    - <details>
        <summary><code>Sidebar/Sidebar.jsx</code></summary>

        React component that renders the sidebar of the application. It is used to display the navigation menu of the application and handle user interactions with the sidebar.
      </details>

  </details>

- <details>
    <summary><code>pages/</code></summary>

    Contains components related to different pages of the application (present in the `Sidebar`).

  </details>

- <details>
    <summary><code>styles/</code></summary>

    Includes CSS or styling files for the application.

  </details>

- <details>
    <summary><code>tests/</code></summary>

    Contains test files and test-related utilities.

  </details>

- <details>
    <summary><code>theme/</code></summary>

    Defines the application's theme and style configurations.

  </details>

- <details>
    <summary><code>App.jsx</code></summary>

    Main component that renders the root of the React application.

  </details>

- <details>
    <summary><code>index.js</code></summary>

    Entry point of the React application where the app is rendered.

  </details>

- <details>
    <summary><code>reportWebVitals.js</code></summary>

    Measures and reports web vitals for performance monitoring.

  </details>

- <details>
    <summary><code>setupTests.js</code></summary>

    Configures the testing environment for Jest.

  </details>

</details>

<details>
<summary><code>.firebaserc</code></summary>

Firebase configuration file for project aliases and deployment settings.

</details>

<details>
<summary><code>.gitignore</code></summary>

Specifies files and directories Git should ignore in version control.

</details>

<details>
<summary><code>firebase.json</code></summary>

Configuration file for Firebase services and deployment settings.

</details>

<details>
<summary><code>package-lock.json</code></summary>

Locks the versions of dependencies installed in your project.

</details>

<details>
<summary><code>package.json</code></summary>

Defines the project’s dependencies, scripts, and metadata.

</details>

<details>
<summary><code>README.md</code></summary>

Documentation file with information about the project.

</details>

<details>
<summary><code>tailwind.config.js</code></summary>

Configuration file for Tailwind CSS to customize styles.

</details>
