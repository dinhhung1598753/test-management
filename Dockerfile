# Use the official Node.js LTS image as the base image
FROM node:lts-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm ci

# Copy the entire project to the container
COPY . .

# Build the Nuxt.js project
RUN npm run build

# Start a new stage for the lightweight production image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the built files from the previous stage
COPY --from=build /app/.nuxt ./.nuxt
COPY --from=build /app/static ./static
COPY --from=build /app/nuxt.config.js ./

# Install production-only dependencies
RUN npm i --only=production

# Expose the port on which the Nuxt.js application will listen
EXPOSE 3000

# Run the Nuxt.js application
CMD ["npm", "start"]
