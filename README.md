# Sample Blog

CRUD Sample Blog designed and implemented in Angular 16 and NestJs with MongoDB and Google and Facebook Authentication. This is implemented based on the factory design pattern, with unit test coverage of 97%.

## How to Run the Frontend and Backend Application

Follow the steps below to run both applications locally:

### Backend

1. Navigate to the "backend" directory.
2. Install modules with `npm install`.
3. Set up the `.env` file to reference `backend/.env`. Ensure correct configuration.
4. Run the NestJs development server with `npm run start:dev`.

### Frontend

1. Navigate to the "frontend" directory.
2. Install the necessary modules with `npm install`.
3. Start the Angular development server with `ng serve`.
4. Open your web browser and go to [http://localhost:4200](http://localhost:4200).

## Repositories

This project consists of a UI Application in Angular, a Backend Service in NestJs,and a Bulk Data Generator script in Node.js. Let's explore each of these applications and their features.

### MyBlog UI

A Front-End application built in Angular using RxJS Observables and Operators. It includes features like:

1. Login through Google Account and Facebook.
2. A dashboard page listing all the blogs created by users.
3. A create blog page allowing users to enter Blog Title, Body, Category, and Tags.
4. A blog detail page that opens when users click on a blog title in the dashboard.
5. Logout functionality.

Additional Features:

#### Infinite Scroll Paginator

Infinite Scroll is implemented on the dashboard page for paginated blog listings. It loads recent blogs first and dynamically adds more as users scroll down.

### Backend API

A Backend service created in NestJs with MongoDB database. Features include:

1. Authentication via Google account and Facebook.
2. Generation of application-specific JWT Access tokens upon successful Google and Facebook authentication.
3. NestJs Passport and JWT libraries for user authentication.
4. NestJs decorator to check the Bearer Access Token in request headers.
5. APIs to get all user blogs, create a blog, and get a single blog by slug.

Additional Features:

1. Implementation of Factory Method design pattern.
2. Unit Test Cases for repositories, services, and helper methods with over 95% coverage.
3. E2E Test cases for Get Blogs, Get Single Blog, and Create Blog APIs.
4. Environment configuration for easy access to configuration-based values.

#### Test Coverage

Unit test cases cover 95% of the backend codebase.

To get the test coverage : ```npm run test:cov```

### Scripts to Generate Data

Scripts to generate bulk records in Node.js:

1. Calls the endpoint to insert blogs one by one at 20ms intervals, capable of inserting almost 100k records in 3-5 mins.
2. A bulk data generator script that directly inserts data into the MongoDB database.
3. Automatically generates random article titles, bodies, categories, and tags for insertion.

### Steps to Run

1. Install modules with `npm install`.
2. Run `node app.js` to insert data by calling the API one by one, capable of inserting up to 100k records in 3-5 mins.
3. Run `node bulk-generator.js` to insert data in bulk, capable of inserting up to 300k records in just 30-50 seconds.
## Deployment

Dockerfiles are set up for both the UI and backend applications to facilitate deployment to the cloud.

### Steps to Run

1. Go to the UI App.
2. Build the Docker image.
3. Go to the Backend App.
4. Build the Docker image.
