FROM node:wheezy

# Set the timezone.
RUN echo "Asia/Seoul" > /etc/timezone \
        && dpkg-reconfigure -f noninteractive tzdata

# Install font.
RUN apt-get update \
        && apt-get install fonts-nanum fonts-nanum-coding fonts-nanum-extra

RUN mkdir -p /usr/my-resume

COPY . /usr/my-resume

RUN cd /usr/my-resume \
        && npm --loglevel=silent install -g webpack \
        && npm --loglevel=silent install -g babel-cli \
        && npm --loglevel=silent install -g cross-env \
        && npm --loglevel=silent install -only=prod \
        && npm run build


EXPOSE 3000
CMD cd /usr/my-resume && npm start