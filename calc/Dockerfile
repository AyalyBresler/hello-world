FROM node:22-alpine
COPY . .
RUN npm install
# RUN npm install -g express --save
# RUN npm install cors
RUN npm install -g jest

# COPY --chown=node:node . .
# EXPOSE 8000
CMD [ "npm", "run", "test", "--coverage" ]
# CMD npm start