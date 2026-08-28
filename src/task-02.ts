type Currency = "USD" | "EUR" | "UAH";
type CurrencyAmount = {amount: number, currency: Currency};
type ConvertCurrency = (amount: CurrencyAmount) => void;

const convertCurrency: ConvertCurrency = ({amount, currency}) => {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({amount: 100, currency: "USD"});
convertCurrency({amount: 100, currency: "EUR"});
convertCurrency({amount: 100, currency: "UAH"});
