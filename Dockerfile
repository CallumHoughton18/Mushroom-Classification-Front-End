FROM node:14.7.0-alpine

WORKDIR /app

# add '/app/node_modules/.bin' to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json ./yarn.lock ./
RUN yarn install

COPY . ./
RUN yarn build
# Would be nice here to delete everything and just have the build folder as the app folder? 