import getCountryByCurrency from '../dist/index';

// Now this will only return `New Zealand` as it has been
// prioriotized over the other countries for the given currency.
const country = getCountryByCurrency('NZD', { priorityCountries: ['NZ'] });

// This will still return an array but with a single item
console.log('Printing only the prioriotized country for NZD');
console.log(country);
