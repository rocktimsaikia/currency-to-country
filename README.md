# currency-to-country

Get country information via currency code

> :sparkles: Zero dependency package

[![npm](https://img.shields.io/npm/v/currency-to-country?color=bright)](https://npmjs.com/package/currency-to-country)

## Installtion

```sh
pnpm add currency-to-country
```

## Usage

```javascript
import getCountryByCurrency from 'currency-to-country';

// Just pass the currency code as argument
const countries = getCountryByCurrency('NZD');

console.log(countries);
```

Outputs:

```sh
[
  {
    countryName: 'New Zealand',
    countryCode: 'NZ',
    currencyName: 'New Zealand Dollars',
    currencyCode: 'NZD',
    countryFlag: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/NZ.svg'
  },
  {
    countryName: 'Cook Islands',
    countryCode: 'CK',
    currencyName: 'New Zealand Dollars',
    currencyCode: 'NZD',
    countryFlag: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/CK.svg'
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

> :bulb: The country flags are comming from [@purecatamphetamine/country-flag-icons](https://github.com/purecatamphetamine/country-flag-icons)

## License

MIT &copy; [Rocktim Saikia](https://rocktimsaikia.dev)
