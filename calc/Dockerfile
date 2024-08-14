FROM node:alpine
ENV NODE_ENV process
COPY . .
RUN npm install -g jest
RUN npm install -g express --save
RUN npm install -g dotenv --save
# RUN npm install
COPY package.json .
RUN npm i --force

EXPOSE 3000
CMD npm run test:coverage