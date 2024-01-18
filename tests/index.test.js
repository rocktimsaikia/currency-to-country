import test from 'ava';
import getCountryByCurrency from '../dist/index.js';

test('Get correct country details', (t) => {
	const countries = getCountryByCurrency('USD');
	t.truthy(countries.length > 1);

	countries.forEach((country) => {
		t.truthy(country.countryCode != null);
		t.truthy(country.countryName != null);
		t.truthy(country.countryFlag != null);
		t.truthy(country.currencyCode != null);
		t.truthy(country.currencyName != null);
	});
});

test('Fail when Country code is passed instead of Currency code', (t) => {
	const error = t.throws(() => getCountryByCurrency('USA'));
	t.is(error.message, 'USA is not a valid currency');
});

test('Get a single country for a currency with pririoty_countries', (t) => {
	let country = getCountryByCurrency('USD', { priorityCountries: ['US'] });
	t.is(country.length, 1);
	t.is(country[0].countryCode, 'US');
	t.truthy(country[0].countryFlag.includes('US.svg'));

	country = getCountryByCurrency('INR', { priorityCountries: ['IN'] });
	t.is(country.length, 1);
	t.falsy(country[0].countryCode == 'BT');
	t.truthy(country[0].countryCode == 'IN');
	t.truthy(country[0].countryFlag.includes('IN.svg'));
});
