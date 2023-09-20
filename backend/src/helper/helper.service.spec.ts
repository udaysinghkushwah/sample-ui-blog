import { HelperService } from './helper.service';
import { INestApplication, Logger } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

describe('HelperService', () => {
  let helperService: HelperService;
  let mockApp: INestApplication;
  let mockModuleRef: ModuleRef;

  beforeEach(() => {
    mockApp = {} as INestApplication;
    mockModuleRef = {} as ModuleRef;
    helperService = new HelperService(mockModuleRef);
  });

  describe('getHelper', () => {
    it('should return an instance of the specified helper class', async () => {
      const mockHelperInstance = {} as any;
      const helperClass = class MockHelperClass {};
      mockModuleRef.get = jest.fn().mockReturnValue(mockHelperInstance);

      const result = await helperService.getHelper(helperClass);

      expect(result).toBe(mockHelperInstance);
      expect(mockModuleRef.get).toHaveBeenCalledWith(helperClass);
    });

    it('should return an instance of the specified helper class by name', async () => {
      const mockHelperInstance = {} as any;
      const helperClassName = 'SomeHelper';
      mockModuleRef.get = jest.fn().mockReturnValue(mockHelperInstance);

      const result = await helperService.getHelper(helperClassName);

      expect(result).toBe(mockHelperInstance);
      expect(mockModuleRef.get).toHaveBeenCalledWith(
        helperClassName.toUpperCase(),
      );
    });

    it('should throw an error if the helper is not found', async () => {
      const helperClass = class MockHelperClass {};
      mockModuleRef.get = jest.fn().mockImplementation(() => {
        throw new Error('Helper not found');
      });

      await expect(helperService.getHelper(helperClass)).rejects.toThrowError(
        'Helper [MockHelperClass] not found.',
      );
    });
  });

  describe('get', () => {
    it('should return an instance of the specified helper class', async () => {
      const mockHelperInstance = {} as any;
      const helperClass = class MockHelperClass {};
      mockApp.get = jest.fn().mockReturnValue(mockHelperInstance);

      const result = await helperService.get(helperClass);

      expect(result).toBe(mockHelperInstance);
      expect(mockApp.get).toHaveBeenCalledWith(helperClass);
    });

    it('should throw an error if the helper is not found', async () => {
      const helperClass = class MockHelperClass {};
      mockApp.get = jest.fn().mockImplementation(() => {
        throw new Error('Helper [class MockHelperClass {}] not found.');
      });

      await expect(helperService.get(helperClass)).rejects.toThrowError(
        'Helper [class MockHelperClass {}] not found.',
      );
      expect(Logger.error).toHaveBeenCalled();
    });
  });
});
