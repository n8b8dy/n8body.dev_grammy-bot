FROM node:20-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

COPY . /app
WORKDIR /app

RUN apk add --no-cache libc6-compat
RUN apk add --no-cache openssl

FROM base AS prod-deps

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm i --prod --frozen-lockfile
RUN pnpm prisma generate

FROM base AS build

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm i --frozen-lockfile

RUN pnpm prisma generate
RUN pnpm prisma migrate deploy
RUN pnpm build

FROM base
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist

EXPOSE 8081
CMD [ "pnpm", "start" ]
