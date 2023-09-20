import { INestApplication, Injectable, Logger } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core'

interface Type<T = any> extends Function {
  new (...args: any[]): T;
}

@Injectable()
export class HelperService {
  private app: INestApplication;
  constructor(private readonly moduleRef: ModuleRef) {}

  initialize = (app: INestApplication) => {
    this.app = app;
  };
  /**
   * Retrieves an instance of either  helper objects or injectable, otherwise, throws exception.
   * @returns {TResult}
   * example:
   * ```ts
   * const instance = await helperService.getHelper<SomeClass>(SomeClass);
   *
   * const instance = await helperService.getHelper('SomeClassName');
   *
   * const instance = await helperService.getHelper(SomeClass);
   * ```
   * */

  async getHelper<THelper = any, TResult = THelper>(helper: Type<THelper> | string): Promise<TResult> {
    try {
      let requestFor = helper;
      if (typeof helper === 'string') {
        requestFor = helper.toUpperCase();
      }
      const instance = this.moduleRef.get<THelper, TResult>(requestFor);
      return Promise.resolve(instance);
    } catch {
      return this.get<THelper, TResult>(helper);
    }
  }
  async get<THelper = any, TResult = THelper>(helper: Type<THelper> | string): Promise<TResult> {
    try {
      return this.app.get<THelper, TResult>(helper);
    } catch (e) {
      Logger.error(`Failed to retrieve helper [${helper}]. Error= ${e}`);
      throw new Error(`Helper [${helper}] not found.`);
    }
  }
}
