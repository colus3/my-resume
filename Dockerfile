FROM node:6.4-wheezy

RUN apt-get update \
        && apt-get install fonts-nanum fonts-nanum-coding fonts-nanum-extra

RUN mkdir -p /usr/my-resume

COPY . /usr/my-resume

RUN cd /usr/my-resume \
        && npm install -g webpack \
        && npm install -g babel-cli \
        && npm install -g orientjs \
        && npm install \
        && npm run build


EXPOSE 3000
CMD cd /usr/my-resume && npm start