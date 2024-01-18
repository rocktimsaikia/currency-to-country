import test from 'ava';
import getCountryByCurrency from '../dist/index.js';

test('Get correct country details', (t) => {
	const countries = getCountryByCurrency('USD');
	t.truthy(countries.length > 1);

	countries.forEach(country => {
		t.truthy(country.countryCode != null)
		t.truthy(country.countryName != null)
		t.truthy(country.countryFlag != null)
		t.truthy(country.currencyCode != null)
		t.truthy(country.currencyName != null)
	})
});

test('Pass Country code instead of Currency code', (t) => {
	const error = t.throws(() => getCountryByCurrency('USA'))
	t.is(error.message, 'USA is not a valid currency')
})
