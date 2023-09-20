import { UtilHelper } from './util.helper';

describe('UtilHelper', () => {
  let utilHelper: UtilHelper;

  beforeEach(() => {
    utilHelper = new UtilHelper();
  });

  describe('convertToSlug', () => {
    it('should convert a string to a slug', () => {
      const input = 'Hello World!';
      const expectedOutput = 'hello-world';

      const result = utilHelper.convertToSlug(input);

      expect(result).toEqual(expectedOutput);
    });

    it('should handle special characters and numbers', () => {
      const input = 'This is @ 123 a test!';
      const expectedOutput = 'this-is-a-test';

      const result = utilHelper.convertToSlug(input);

      expect(result).toEqual(expectedOutput);
    });

    it('should trim spaces and remove leading/trailing hyphens', () => {
      const input = '   - This is a test -   ';
      const expectedOutput = 'this-is-a-test';

      const result = utilHelper.convertToSlug(input);

      expect(result).toEqual(expectedOutput);
    });
  });

  describe('randomString', () => {
    it('should generate a random string of the specified length', () => {
      const length = 10;
      const result = utilHelper.randomString(length);

      expect(result.length).toEqual(length);
    });

    it('should generate only lowercase alphanumeric characters', () => {
      const length = 20;
      const result = utilHelper.randomString(length);

      const alphanumericRegex = /^[a-z0-9]+$/;
      expect(alphanumericRegex.test(result)).toBe(true);
    });
  });
});
