FROM alpine:3.1

FROM node:8


COPY package*.json /src/

RUN cd src; npm install

COPY . /src

EXPOSE 8080

#RUN docker compose up
#RUN docker compose run

CMD [ "npm", "start" ]
