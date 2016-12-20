declare module 'simpl-schema' {
    var SimpleSchema: SimpleSchemaStatic;

    interface SimpleSchemaStatic {
        new<T>(data: any): SimpleSchema<T>;
    }

    interface SimpleSchema<T> {

    }

    export default SimpleSchema;
}