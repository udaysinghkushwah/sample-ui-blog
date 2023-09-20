import { DynamicModule, Logger, Module, Provider, Type } from '@nestjs/common';
import { HelperService } from './helper.service';
import { sync } from 'glob';


@Module({
  imports: [],
  providers: [
    HelperService
  ],
  exports: [HelperService],
})
export class HelperModule {
  static async registerHelpersAsync(): Promise<DynamicModule> {
    // Feel free to change path if your structure is different
    const helpersPath = sync('src/**/helper/*.helper.ts');
    const relativePathWithoutExt = helpersPath
      // Replace src, because you are probably running the code
      // from dist folder
      .map((path) => path.replace('src/', './../'))
      .map((path) => path.replace('.ts', ''));
    const helperProviders: Provider<any>[] = [];
    const importedHelpers = await Promise.all(relativePathWithoutExt.map((path) => import(path)));
    importedHelpers.forEach((entry) => {
      //Assumption only 1-export
      // Might be different if you are using default export instead
      const helper = entry[Object.keys(entry)[0]];
      const provide_as: string = helper.name.toString();
      helperProviders.push({
        provide: provide_as.toUpperCase(),
        useClass: helper,
      });
    });

    const DynamicModule = {
      module: HelperModule,
      providers: [...helperProviders, HelperService],
      exports: [...helperProviders, HelperService],
      global: true,
    };
    
    Logger.log(DynamicModule, { depth: null });
    return DynamicModule;
  }
}
