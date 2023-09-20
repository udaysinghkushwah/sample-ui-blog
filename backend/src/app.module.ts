import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelperModule } from './helper/helper.module';
import { ConfigurationModule } from './config/config.module';

@Module({
  imports: [ ConfigurationModule,HelperModule,
    HelperModule.registerHelpersAsync(),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
