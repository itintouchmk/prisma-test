FROM node:16-alpine
WORKDIR /app
COPY nx.json package-lock.json package.json tsconfig.base.json workspace.json ./
COPY apps ./apps
COPY libs ./libs
COPY tools ./tools
RUN rm -rf apps/api/prisma
COPY apps/api/prisma/schema.prisma apps/api/prisma/schema.prisma
RUN npm i
RUN npm run build
CMD [ "npm", "run", "start" ]