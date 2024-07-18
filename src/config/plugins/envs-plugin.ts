import * as env from 'env-var';

export const envs = {
  API_NAME: env.get('API_NAME').asString(),
  PORT: env.get('PORT').required().asPortNumber(),
};
