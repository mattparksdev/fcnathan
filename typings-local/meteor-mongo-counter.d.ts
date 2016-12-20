import { Mongo } from 'meteor/mongo';

declare global {
    export function incrementCounter(
        collection: Mongo.Collection<{}>,
        name: string,
        amount?: number): number;

    export function decrementCounter(
        collection: Mongo.Collection<{}>,
        name: string,
        amount?: number): number;

    export function setCounter(
        collection: Mongo.Collection<{}>,
        name: string,
        value: number): void;
}