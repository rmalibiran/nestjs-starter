# Base image
FROM node:20.4.0-alpine as base

####
# BUILD
####

FROM base as build
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Copy the .env and .env.development files
COPY .env .env.development ./

# Creates a "dist" folder with the production build
RUN npm run build

RUN npm prune

####
# PRODUCTION
####

FROM base as prod
WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules

# Start the server using the production build
CMD ["npm", "run", "start:prod"]

# Expose the port on which the app will run
EXPOSE 3000
