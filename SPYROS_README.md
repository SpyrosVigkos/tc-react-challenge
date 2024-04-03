# TimeChimp React Coding Challenge Submission

Hello TimeChimp team,

I'm excited to submit my solution for the React coding challenge. Below, I detail how I approached the challenge requirements and the decisions made during the development process.

## Completed Tasks

- **Released This Week**: Implemented an API call to `new-releases` to fetch the latest songs and display them within the application.
- **Featured Playlists**: Integrated the `featured-playlists` API endpoint to retrieve and showcase Spotify's curated playlists.
- **Browse Genres**: Used the `categories` API path to provide users with a variety of browseable genres.

Additionally, I included an optional loading state/UI to enhance the user experience while data is being fetched.

## Development Considerations

- **Spotify API Documentation**: Thoroughly reviewed to understand the available endpoints and data structures.
- **Parallel Requests**: Utilized `Promise.all` to fetch data in parallel, reducing overall load time and improving UX.
- **API Request Location**: Calls to the Spotify API are encapsulated within a custom React hook, `useSpotifyData`, which is then used by the components that require that data.
- **State Management**: Employed custom hook for state management, which provided a lightweight and scalable solution. This approach allowed for asynchronous data fetching, state initialization, and loading state management, while keeping the UI components clean and focused on presentation.
- **Separation of Logic**: Extracted much of the business logic from UI components to keep them clean and focused on presentation. This also improves testability and maintainability of the code.

## Time Considerations

I scoped the project to fit within the 1-2 hour timeframe suggested, focusing on delivering a functional and clean solution. Despite the time constraint, I implemented best practices and ensured the code is self-explanatory to illustrate my design and approach.

## Future Enhancements

Given more time, I would consider the following enhancements:

- **TypeScript**: To take advantage of static typing for more robust code.
- **Next.js**: To utilize server-side rendering for performance benefits and improved SEO.
- **Material-UI**: For quick and attractive styling.

Additionally, I updated the project dependencies to ensure compatibility with the latest Node.js versions and reduced vulnerabilities.

## Environmental Variables

I have included a `.env.local` file (based on the provided `.env.template`) to manage environment variables, ensuring that all API-related variables are secure and not hard-coded into the repository.

## Final Thoughts

I enjoyed the challenge and appreciated the opportunity to showcase a clean and functional approach to using the Spotify API. I'm looking forward to your feedback and am happy to discuss any aspect of my submission.

Thank you for considering my work.

_Be creative, be awesome!_

---

For any setup questions or assistance, I am available for contact as needed.
