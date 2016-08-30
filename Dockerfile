FROM node:slim

RUN mkdir -p /usr/my-resume

COPY **/* /usr/my-resume

RUN npm install -g webpack && npm install -g install babel-cli && npm install && npm run build

CMD ["/usr/my-resume/npm start"]