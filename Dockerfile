# Use official Node.js LTS image as base
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose the port your app uses
EXPOSE 3002

# Command to start your app
CMD ["node", "server.js"]