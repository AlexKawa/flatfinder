import { FormattedNumber } from "react-intl";

export const formatPrice = (value: number) => {
  if (!value || isNaN(value)) {
    return value;
  }
  return (
    <FormattedNumber
      value={value}
      /* eslint-disable-next-line react/style-prop-object */
      style="currency"
      currency={"EUR"}
      maximumFractionDigits={0}
      minimumFractionDigits={0}
    />
  );
};
