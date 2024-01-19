# currency-to-country

Get country information via currency code

> :sparkles: Zero dependency package

[![npm](https://img.shields.io/npm/v/currency-to-country?color=bright)](https://npmjs.com/package/currency-to-country)

## Installtion

```sh
pnpm add currency-to-country
```

## Usage

#### 1. Get a list of countries that uses a specific currency.

```javascript
import getCountryByCurrency from 'currency-to-country';

const countries = getCountryByCurrency('NZD');

console.log(countries);
```

Outputs:

```sh
[
  {
    countryName: 'Cook Islands',
    countryCode: 'CK',
    currencyName: 'New Zealand Dollars',
    currencyCode: 'NZD',
    countryFlag: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/CK.svg'
  },
  {
    countryName: 'New Zealand',
    countryCode: 'NZ',
    currencyName: 'New Zealand Dollars',
    currencyCode: 'NZD',
    countryFlag: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/NZ.svg'
  },
  {
    countryName: 'Niue',
    countryCode: 'NU',
    currencyName: 'New Zealand Dollars',
    currencyCode: 'NZD',
    countryFlag: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/NU.svg'
  },
  {
    countryName: 'Pitcairn',
    countryCode: 'PN',
    currencyName: 'New Zealand Dollars',
    currencyCode: 'NZD',
    countryFlag: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/PN.svg'
  },
  {
    countryName: 'Tokelau',
    countryCode: 'TK',
    currencyName: 'New Zealand Dollars',
    currencyCode: 'NZD',
    countryFlag: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/TK.svg'
  }
]
```

#### 2. Get only one country for one currency

This is filtered by passing one of the country codes of the given currency into the `priorityCountries` option. You can basically pass a list of any country codes in this and if the currency matches with one of these countries; it will prioritize and return that country only. If all the country codes you passed does not match with the countries mapped to that currency, the package will simply return all the original countries that's mapped to the currency.

```javascript
import getCountryByCurrency from 'currency-to-country';

// Now this will only return `New Zealand` as it has been
// prioriotized over the other countries for the given currency.
const country = getCountryByCurrency('NZD', { priorityCountries: ['NZ'] });

// This will still return an array but with a single item
console.log(country[0]);
```

Outputs:

```sh
{
    countryName: 'New Zealand',
    countryCode: 'NZ',
    currencyName: 'New Zealand Dollars',
    currencyCode: 'NZD',
    countryFlag: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/NZ.svg'
}
```

<br/>

> :bulb: The country flags are comming from [@purecatamphetamine/country-flag-icons](https://github.com/purecatamphetamine/country-flag-icons)

## License

MIT &copy; [Rocktim Saikia](https://rocktimsaikia.dev)
