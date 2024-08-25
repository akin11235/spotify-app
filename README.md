# Music Data Display Application in Angular

## Project Overview
The Music Data Display Application is a web application built using Angular that interacts with the Spotify API to display music data. This application provides a user-friendly interface to search for music, view details about tracks, albums, and artists, and explore various music genres.

### Key Features
- **Spotify API Integration**: Fetches and displays music data from the Spotify API.
- **Search Functionality**: Allows users to search for tracks, albums, and artists.
- **Detailed View**: Displays detailed information about selected tracks, albums, and artists.
- **Responsive Design**: Ensures a seamless user experience across various devices.

## Project Flow
The application uses Angular components and services to interact with the Spotify API and present music data in the UI. The application is designed to handle user input, make API requests, and display results dynamically.

## How to Set Up and Run the Project
1. **Clone the Repository**  
   Clone the repository from GitHub to your local machine:
    ```bash
    git clone https://github.com/akin11235/spotify-app.git
    ```

2. **Navigate to the Project Directory**  
   Change your working directory to the project directory:
    ```bash
    cd Music-Data-Display
    ```

3. **Install Dependencies**  
   Install the required packages using npm:
    ```bash
    npm install
    ```

4. **Configure API Credentials**  
   Create a file named `.env` in the root directory of the project and add your Spotify API credentials:
    ```plaintext
    SPOTIFY_CLIENT_ID=your-client-id
    SPOTIFY_CLIENT_SECRET=your-client-secret
    ```

5. **Run the Development Server**  
   Start the Angular development server:
    ```bash
    ng serve
    ```

6. **Access the Application**  
   Open a web browser and go to `http://localhost:4200` to access the application.

7. **Build the Application**  
   To build the application for production, use:
    ```bash
    ng build --prod
    ```

8. **Change Git Remote URL**  
    To avoid accidental pushes to the base project, change the Git remote URL:
    ```bash
    git remote set-url origin https://github.com/yourusername/Music-Data-Display.git
    git remote -v # confirm the changes
    ```

9. **Clean Up**  
   To clean up any unnecessary files, you can use the following command to remove the `node_modules` directory:
    ```bash
    rm -rf node_modules
    ```

## Additional Information
- **Spotify API Documentation**: [Spotify API Documentation](https://developer.spotify.com/documentation/web-api/)
- **Angular Documentation**: [Angular Documentation](https://angular.io/docs)

---

Feel free to adjust the details as needed for your specific project setup!
