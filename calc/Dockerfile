FROM node:alpine

ENV NODE_ENV process

COPY package*.json .
RUN npm install

RUN npm run build

RUN npm install -g jest
RUN npm install -g express --save
RUN npm install -g dotenv --save

EXPOSE 3000
CMD npm run test:coverage