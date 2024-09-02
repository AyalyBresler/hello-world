FROM node:22-alpine

COPY . .
RUN npm install
RUN npm install -g express --save
RUN npm install -g jest

USER node
EXPOSE 8000
CMD npm start