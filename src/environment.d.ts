declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      DATABASE_URL: string
      OPENAI_KEY: string
      OPENAI_ORG: string
      OPENAI_PROJ: string
      MEME_ENDPOINT: string
      CREATOR_ID: string
      TESTLAND_ID: string
    }
  }
}

export {}
