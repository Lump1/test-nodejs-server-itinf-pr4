FROM node:lts-alpine

ENV GET_ENDPOINT=/home
ENV APP_FOLDER=/nodeserver
ENV NODE_ENV=production

WORKDIR $APP_FOLDER
COPY package.json package-lock.json ./
RUN npm install --only=production

COPY . .
EXPOSE 8080

CMD ["node", "./server/server.js"]
