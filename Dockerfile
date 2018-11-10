FROM node:8

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 80

#RUN docker compose up
#RUN docker compose run

CMD [ "npm", "start" ]
