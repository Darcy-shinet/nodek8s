FROM node:11-alpine
MAINTAINER Darcy
RUN mkdir -p /home/Service
WORKDIR /home/Service

COPY . /home/Service
RUN npm install

EXPOSE 8888
CMD [ "node", "app.js" ]
