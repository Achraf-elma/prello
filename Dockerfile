FROM alpine:3.1

FROM node:8

WORKDIR /app/

COPY package*.json /app/

COPY . /app/

RUN npm install

EXPOSE 3000

#RUN docker compose up
#RUN docker compose run

CMD [ "npm", "start" ]
