FROM node:18

WORKDIR /usr/app
COPY package.json .
COPY yarn.lock .
# RUN --mount=type=cache,target=/usr/app/node_modules yarn
RUN yarn
COPY src/ .

CMD [ "yarn", "dev" ]