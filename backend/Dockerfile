FROM node:20.12.0-alpine

WORKDIR /usr/src/app

COPY . .

EXPOSE 3000

RUN npm install
CMD ["npm", "run", "dev"]
