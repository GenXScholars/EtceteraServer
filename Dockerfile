FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . /usr/src/app

RUN rm -rf src/

EXPOSE 8080

CMD [ "npm", "start" ]