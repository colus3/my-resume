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
        && npm install


EXPOSE 3500
CMD cd /usr/my-resume && npm start