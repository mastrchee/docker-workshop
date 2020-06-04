# Build (alpine for saving on image size)
FROM node:14.2-alpine as build
WORKDIR /usr/src/app
COPY src/package.json .
RUN yarn install
COPY src .
RUN yarn test && \
    npm prune --production

# Release (flatten image and remove cache for a slimmer image)
FROM node:14.2-alpine as release
WORKDIR /usr/src/app
COPY --from=build /usr/src/app .
EXPOSE 80
CMD ["yarn", "start"]
