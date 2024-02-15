FROM cypress/browsers:node-18.16.1-chrome-114.0.5735.133-1-ff-114.0.2-edge-114.0.1823.51-1

WORKDIR /usr/app

ARG BASE_URL=http://host.docker.internal:6006

RUN echo "BASE_URL=$BASE_URL" >> .env

COPY . .