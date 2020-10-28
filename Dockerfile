FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production -timeout=3000

COPY . /usr/src/app

RUN rm -rf src/

CMD [ "npm", "start" ]