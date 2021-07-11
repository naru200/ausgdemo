// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Checkbox, Todo } = initSchema(schema);

export {
  Checkbox,
  Todo
};