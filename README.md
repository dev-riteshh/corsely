# Course Marketplace Web Application

This is a web application built for a hackathon that allows subject matter experts to sell courses seamlessly. The application provides features for course creators to manage and sell their courses, and for students to enroll in and access the courses. The application is built using React.js and utilizes Appwrite BaaS for backend services.

## Features

- Course creators can register and log in to the application.
- Course creators can create, edit, and manage their courses.
- Course creators can create landing pages for their courses.
- Students can browse and search for available courses.
- Students can enroll in courses and access the course content.
- Payment gateway integration for secure course transactions.
- Admin dashboard for managing courses, users, and analytics.

## Technologies Used

- React.js: A JavaScript library for building user interfaces.
- Appwrite BaaS: A backend-as-a-service platform for managing backend services.
- PayPal: A popular payment gateway for processing payments securely.
- HTML/CSS: Markup and styling languages for designing and structuring the web pages.
- JavaScript: Programming language used for implementing the application's logic.

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Configure the Appwrite BaaS:
   - Set up an Appwrite account and create a new project.
   - Update the Appwrite configuration in the code with your project details.
4. Configure the PayPal integration:
   - Create a PayPal developer account and set up a sandbox account.
   - Update the payment gateway integration code with your PayPal credentials.
5. Start the application: `npm start`
6. Access the application in your browser at `http://localhost:3000`.

## Folder Structure

- `/src`: Contains the source code files for the React.js application.
  - `/components`: Contains reusable components used throughout the application.
  - `/pages`: Contains individual pages of the application.
  - `/services`: Contains services for interacting with the backend and external APIs.
- `/public`: Contains public assets like images and HTML template files.
- `/build`: Contains the production-ready build files.

## Roadmap

This section can include future enhancements or features planned for the application, such as:

- Implementing user reviews and ratings for courses.
- Adding social sharing functionality for courses.
- Enhancing the admin dashboard with more detailed analytics.
- Introducing a messaging system for communication between course creators and students.

## Contributing

Contributions are welcome! If you have any ideas, bug fixes, or improvements, please submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

