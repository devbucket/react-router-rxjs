import { Subject, from } from 'rxjs';

export const mainSubject = new Subject();

/**
 * Gets triggered on every redux action that is dispatched.
 * @type {Observable}
 */
export const main$ = from(mainSubject);
