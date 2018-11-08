FROM alpine:3.1

FROM node:8

WORKDIR /opt/prello_front_opt1_grp2 

COPY package*.json ./

RUN npm install


COPY . /opt/prello_front_opt1_grp2/

EXPOSE 3000

#RUN docker compose up
#RUN docker compose run

CMD [ "npm", "start" ]