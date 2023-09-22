import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelperModule } from './helper/helper.module';
import { ConfigurationModule } from './config/config.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    ConfigurationModule,
    HelperModule,
    HelperModule.registerHelpersAsync(),
    BlogModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
