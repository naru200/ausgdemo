import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Checkbox {
  readonly id: string;
  readonly body?: string;
  readonly todoID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Checkbox>);
  static copyOf(source: Checkbox, mutator: (draft: MutableModel<Checkbox>) => MutableModel<Checkbox> | void): Checkbox;
}

export declare class Todo {
  readonly id: string;
<<<<<<< HEAD
  readonly title?: string;
  readonly Checkboxes?: (Checkbox | null)[];
  readonly timestamp?: string;
=======
  readonly titl?: string;
  readonly timestamp?: string;
  readonly Checkboxes?: (Checkbox | null)[];
>>>>>>> demo
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Todo>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}