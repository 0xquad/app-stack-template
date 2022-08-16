FROM node:alpine
RUN apk add --no-cache jq
RUN npm install -g create-react-app husky
ENV NODE_PATH /usr/local/lib/node_modules/react-scripts/node_modules
WORKDIR /app
COPY entrypoint.sh /usr/local/bin
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
