# Stage 1: Building the code
FROM node:20.10.0 AS builder
ARG DATABASE_URL
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock)
COPY package*.json ./
# If you're using yarn, uncomment the next line and delete the one above
# COPY package.json yarn.lock ./

# Install dependencies
RUN npm install yarn
RUN yarn install
RUN echo "DB: $DATABASE_URL" && sleep 10
# If you're using yarn, uncomment the next line and delete the one above
# RUN yarn install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build the application
#RUN yarn install
# If you're using yarn, uncomment the next line and delete the one above
# RUN yarn build


# Stage 2: Run the built code
FROM node:20.10.0

WORKDIR /app
COPY --from=builder /app ./
#RUN npx prisma migrate dev
#RUN npx prisma migrate deploy
# Copy built assets from the builder stage
#COPY --from=builder /app/next.config.js ./
#COPY --from=builder /app/public ./public
#COPY --from=builder /app/.next ./.next
#COPY --from=builder /app/node_modules ./node_modules

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run your app
#CMD ["npm", "start"]
# If you're using yarn, uncomment the next line and delete the one above
CMD ["yarn", "dev"]
#CMD ["sh", "-c", "npx prisma migrate deploy && yarn dev"]
