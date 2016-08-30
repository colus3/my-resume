FROM node:6.4-wheezy

RUN mkdir -p /usr/my-resume

COPY . /usr/my-resume

RUN cd /usr/my-resume && npm install -g webpack && npm install -g install babel-cli && npm install && npm run build

CMD ["/usr/my-resume/npm start"]