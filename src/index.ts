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

export default function getCountryByCurrency(currency: string): Country[] {
	const currencyToCountryMap: CurrencyCountryMap = CURRENCY_TO_COUNTRY_MAP;
	currency = currency.toUpperCase();
	if (!Object.prototype.hasOwnProperty.call(CURRENCY_TO_COUNTRY_MAP, currency)) {
		throw new Error(`${currency} is not a valid currency`);
	}
	return currencyToCountryMap[currency];
}
