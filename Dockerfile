FROM node:carbon
LABEL maintainer="Giorgio Garasto <giorgio@garasto.it>"

# Install the HTTPS transport driver (needed to install yarn)
RUN apt-get update && apt-get install apt-transport-https
# Install yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install --no-install-recommends yarn
# Create app directory
WORKDIR /usr/src/app
# Copy app files
COPY . .
# Install the dependencies
RUN yarn install
# Build the app
RUN yarn build
# Expose the port we will be using to serve the app
EXPOSE 8080
# Set startup command
CMD ["yarn", "serve"]
