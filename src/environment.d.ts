declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'

      BOT_TOKEN: string

      DATABASE_URL: string

      OPENAI_KEY: string
      OPENAI_ORG: string
      OPENAI_PROJ: string

      MEME_ENDPOINT: string

      CREATOR_ID: string
      TESTLAND_ID: string

      BAEN_ID: string
    }
  }
}

export {}
