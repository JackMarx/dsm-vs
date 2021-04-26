import { withDsm } from '@invisionapp/dsm-storybook';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
      source: {
          type: 'dynamic'
      }
  }
};

export const decorators = [withDsm];