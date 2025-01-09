# Stage 1: Build Stage
FROM node:14 AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Run tests or build processes if needed
# Example: RUN npm run build

# Stage 2: Runtime Stage
FROM node:14-alpine

WORKDIR /app

# Copy only necessary files from the build stage
COPY --from=build /app .

# Expose the application port
EXPOSE 5001

# Command to start the application
CMD ["node", "app.js"]
