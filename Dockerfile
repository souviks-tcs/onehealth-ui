FROM registry.access.redhat.com/ubi8/nodejs-12:1-52
RUN mkdir app

# Install npm production packages
COPY client/package.json ./app
RUN cd ./app; npm install --production

COPY . ./app

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

WORKDIR ./app

CMD ["npm", "start"]
