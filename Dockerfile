FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
# RUN npm install
COPY . .
EXPOSE 80
EXPOSE 8080
CMD [ "node", "app/app.js" ]