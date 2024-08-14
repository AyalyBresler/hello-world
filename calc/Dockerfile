FROM node:alpine

ENV NODE_ENV process

WORKDIR /app

COPY package.json /app/

RUN npm install -g jest
RUN npm install -g express --save
RUN npm install -g dotenv --save
# RUN npm install
RUN npm i --legacy-peer-deps

COPY . /src

EXPOSE 3000
CMD npm run test:coverage