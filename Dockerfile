
FROM node:8.6.0

# Create app directory
RUN mkdir -p /usr/src/
WORKDIR /usr/src/

# Install app dependencies
COPY package.json /usr/src/
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 5000
CMD [ "node", "app.js" ]
