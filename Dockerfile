FROM node:12

WORKDIR /usr/src/app

ENV PORT 8080
ENV HOST 0.0.0.0

COPY package*.json ./

RUN npm install --only=production

COPY . .

RUN rm -rf src/

EXPOSE 8080

CMD [ "node", "src/app/server.js" ]