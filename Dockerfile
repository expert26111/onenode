
FROM node:8.6.0

# Create app directory
WORKDIR /usr/src

# Install app dependencies
COPY package.json .
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 5000
CMD [ "nodemon", "app.js" ]
