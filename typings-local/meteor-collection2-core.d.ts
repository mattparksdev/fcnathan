import SimpleSchema from 'simpl-schema';

declare module 'meteor/mongo' {
    module Mongo {
        interface Collection<T> {
            attachSchema(schema: SimpleSchema<T>): void;
        }
    }
}