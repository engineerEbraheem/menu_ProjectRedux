const currencyFormatter = new Intl.NumberFormat(undefined, {
  currency: "YER",
  style: "currency",
});

const formateCurrency = (number) => {
  return currencyFormatter.format(number);
};

export default formateCurrency;
