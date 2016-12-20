import CollectionObject from './collection-object';

interface Incident 
    extends CollectionObject 
{
    readonly ticketId?: number;
    title: string;
    description: string;
}

export default Incident;