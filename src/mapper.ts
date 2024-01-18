import fs from 'fs/promises';
import data from '../data/currency-country-data.json';
import type { CurrencyCountryMap } from './index';

// All unique currencies
const all_currency_codes: string[] = [];
const currency_to_country_map: CurrencyCountryMap = {};

data.forEach((item) => {
	if (!all_currency_codes.includes(item.Code)) {
		all_currency_codes.push(item.Code);
	}
});

console.log('Total unique currencies: ', all_currency_codes.length);

data.forEach((item) => {
	if (!currency_to_country_map.hasOwnProperty(item.Code)) {
		currency_to_country_map[item.Code] = [];
	}
	currency_to_country_map[item.Code].push({
		countryName: item.Country,
		countryCode: item.CountryCode,
		currencyName: item.Currency,
		currencyCode: item.Code,
		countryFlag: `https://purecatamphetamine.github.io/country-flag-icons/3x2/${item.CountryCode}.svg`,
	});
});

fs.writeFile(
	'data/currency-to-country-map.json',
	JSON.stringify(currency_to_country_map),
	'utf-8'
);
