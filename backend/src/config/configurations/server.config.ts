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

    mongoUri: process.env.MONGODB_URI||'mongodb+srv://udaysinghkushwah:sentinel@cluster0.kzvfoaj.mongodb.net/my-blog?retryWrites=true&w=majority',
    host: process.env.HOST || 'localhost',
    port: parseInt(process.env.PORT || '3000', 10),
    uiCallbackUrl: process.env.UI_CALLBACK_URL || 'http://localhost:4200/auth/callback',
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || '661986408367-o4dnvji4m2ocrhu9qddf8i6sod96vl4d.apps.googleusercontent.com',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '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'
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
