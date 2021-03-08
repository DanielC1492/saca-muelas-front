FROM node:14.16.0-alpine

WORKDIR app/

COPY package.json package-lock.json /app/

RUN npm install

COPY . ./app

CMD ["npm", "run", "start"]

