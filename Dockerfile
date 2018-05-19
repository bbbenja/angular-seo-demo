FROM node:10-alpine

COPY . /workspace

WORKDIR workspace

RUN npm install
RUN npm run build

EXPOSE 8081

CMD ["node","server.js"]
