FROM node:alpine
ENV NODE_ENV process
COPY . .
# RUN npm install
RUN npm install -g jest
RUN npm install -g express --save
RUN npm install -g dotenv --save

EXPOSE 3000
CMD npm run test:coverage