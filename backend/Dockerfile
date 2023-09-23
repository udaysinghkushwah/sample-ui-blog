# Use a minimal Node.js base image
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy only package.json and package-lock.json to leverage Docker layer caching
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the application code
COPY . .

# Build the Nest.js app (if required)
# RUN npm run build

# Remove development dependencies (optional)
# RUN npm prune --production

# Expose the port the app runs on
EXPOSE 3000

# Define the startup command
CMD ["npm", "start"]
