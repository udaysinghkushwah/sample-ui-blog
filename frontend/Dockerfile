# Stage 1: Build the Angular application
FROM node:18 as build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Angular app for production
RUN npm run build

# Stage 2: Serve the Angular app using Nginx
FROM nginx:1.25.4-alpine3.18

# Copy the built Angular app from the previous stage
COPY --from=build /app/dist/frontend /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx to serve the Angular app
CMD ["nginx", "-g", "daemon off;"]
