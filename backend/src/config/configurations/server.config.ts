export interface ServerConfig {
  mongoUri: string;
  host: string;
  port: number;
  uiCallbackUrl: string;
  google: SocialLoginClient;
  facebook:SocialLoginClient
  jwtSecretKey: string;
}

interface SocialLoginClient {
  clientId: string;
  clientSecret: string;
}

function getServerConfig(): ServerConfig {
  return {

    mongoUri: process.env.MONGODB_URI,
    host: process.env.HOST || 'localhost',
    port: parseInt(process.env.PORT || '8888', 10),
    uiCallbackUrl: process.env.UI_CALLBACK_URL,
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID ,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    },
    facebook: {
      clientId: "1790600171388212",
      clientSecret: "6c4213196099a6b6bdfe9fa89a5b1f27"
    },
    jwtSecretKey: process.env.JWT_SECRET_KEY
  };
}

export default getServerConfig;

export type ServerConfigs = ReturnType<typeof getServerConfig>;
