import users from './users';
import incidents from './incidents';

const fixtures: (() => void)[] = [
    users,
    incidents
];

export default function () {
    fixtures.forEach(x => x());
};
