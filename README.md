# Music Snippets in Angular

[Live Demo](https://soundsnippets.netlify.app/newReleases)
## Project Overview
Music Snippets is a web application built using Angular that integrates with the Spotify API to fetch and display music data. Users can search for tracks, albums, and artists while exploring various music genres through a responsive and dynamic interface.

### Key Features
- 🎵 Spotify API Integration: Fetches real-time music data from Spotify.
- 🔍 Search Functionality: Users can search for their favorite tracks, albums, and artists.
- 📄 Detailed View: Provides detailed information about selected music items.
- 📱 Responsive Design: Optimized for different screen sizes and devices.
- ⚡ Dynamic UI: Seamless and interactive user experience powered by Angular components.

## Project Flow
The application follows a structured flow:
- User Interaction: Users input search queries or browse predefined categories.
- API Request Handling: The Angular service sends requests to the Spotify API.
- Data Processing: Retrieved data is processed and structured for display.
- UI Update: Angular components dynamically render search results and detailed views.

## Getting Started
Prerequisites
- Node.js (LTS version recommended)
- Angular CLI
- Spotify Developer API credentials

## Installation & Setup
1. **Clone the Repository**  
   Clone the repository from GitHub to your local machine:
    ```bash
    git clone https://github.com/akin11235/spotify-app.git
    ```

2. **Navigate to the Project Directory**  
   Change your working directory to the project directory:
    ```bash
    cd spotify-app
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
    git remote set-url origin https://github.com/yourusername/spotify-app.git
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

## Future Enhancements
🎛 User Authentication: Allow users to log in with their Spotify accounts.
📌 Favorites & Playlists: Enable users to save favorite tracks and create playlists.
🎨 Enhanced UI/UX: Implement animations and dark mode support.

## Contributing
 Contributions are welcome! Feel free to submit issues or pull requests.
---

Feel free to adjust the details as needed for your specific project setup!
