import { Model } from 'mongoose';
import { Tag } from '../models/tag.model';
import { TagRepository } from './tag.repository';

describe('TagRepository', () => {
  let tagRepository: TagRepository;
  let mockTagModel: Model<Tag>;

  beforeEach(() => {
    mockTagModel = {
      bulkWrite: jest.fn().mockResolvedValue({}),
      find: jest.fn(),
    } as any;
   tagRepository = new TagRepository(mockTagModel);
  });

  describe('create', () => {
    it('should create tags and return them', async () => {
     });
  });
});
