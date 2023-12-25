FROM node:20.9.0

WORKDIR /social-network

COPY . /social-network

EXPOSE 3001

RUN npm i

CMD [ "npm", "start" ]