import CURRENCY_TO_COUNTRY_MAP from '../data/currency-to-country-map.json';

export interface Country {
	countryName: string;
	countryCode: string;
	countryFlag: string;
	currencyName: string;
	currencyCode: string;
}

export interface CurrencyCountryMap {
	[key: string]: Country[];
}

interface Options {
	priorityCountries?: string[];
}

export default function getCountryByCurrency(
	currency: string,
	options: Options = {}
): Country[] {
	const currencyToCountryMap: CurrencyCountryMap = CURRENCY_TO_COUNTRY_MAP;
	currency = currency.toUpperCase();
	if (!Object.prototype.hasOwnProperty.call(CURRENCY_TO_COUNTRY_MAP, currency)) {
		throw new Error(`${currency} is not a valid currency`);
	}

	let countries: Country[] = [];
	if (options.priorityCountries && options.priorityCountries.length > 0) {
		countries = currencyToCountryMap[currency].filter((c) =>
			options.priorityCountries?.includes(c.countryCode)
		);
	}

	if (countries?.length == 1) {
		return countries;
	}

	return currencyToCountryMap[currency];
}
