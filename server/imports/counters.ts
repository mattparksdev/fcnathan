import { Mongo } from 'meteor/mongo';

const Collection = new Mongo.Collection('counter');

class Counter {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    set(value): void {
        return setCounter(Collection, this.name, value);
    }

    increment(value?: number): number {
        return incrementCounter(Collection, this.name, value > 0 ? value : 1);
    }

    decrement(value?: number): number {
        return decrementCounter(Collection, this.name, value > 0 ? value : 1);
    }
}

export default {
    incident: {
        ticketId: new Counter('incident.ticketId')
    }
};