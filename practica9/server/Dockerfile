FROM node:alpine
ENV MONGO_INITDB_ROOT_USERNAME=root
ENV MONGO_INITDB_ROOT_PASSWORD=example
ENV PORT=80
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE ${PORT}
CMD [ "node", "index" ]