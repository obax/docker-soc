FROM node:latest
# Start with the node js image that will host the server

# ENV NODE_PORT=3000
ENV MY_NAME=devx
ENV ENVIRONMENT=dev

# Copy the file onto the docker image
COPY . /

# optional
RUN apt-get update

# optional
WORKDIR /

# Run the server code
# ENTRYPOINT 'node /index.js'
CMD node index.js
