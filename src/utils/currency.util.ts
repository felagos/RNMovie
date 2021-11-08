import currencyFormatter from 'currency-formatter';

export const formatCurrency = (value: number): string => {
	return currencyFormatter.format(value, { locale: 'en-US', precision: 0, symbol: '$ ' });
}