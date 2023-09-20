import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import getServerConfig from './config/configurations/server.config';
import { HelperModule } from './helper/helper.module';
import { HelperService } from './helper/helper.service';
import * as dotenv from 'dotenv';

dotenv.config();
async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const helperService = app.select(HelperModule).get(HelperService);
  helperService.initialize(app);
  await app.listen(getServerConfig().port, getServerConfig().host);
  console.log(
    `Server is listening at port ${getServerConfig().port} and host ${
      getServerConfig().host
    }`,
  );
}
bootstrap();
