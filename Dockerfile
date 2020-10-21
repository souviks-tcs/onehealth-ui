FROM registry.access.redhat.com/ubi8/nodejs-12:1-52

WORKDIR /opt/app-root/src

RUN mkdir client
COPY --chown=default:root client client
RUN cd client && npm i

WORKDIR /opt/app-root/src/client

ENV HOST=0.0.0.0 PORT=3000

EXPOSE 3000/tcp

CMD ["npm", "start"]