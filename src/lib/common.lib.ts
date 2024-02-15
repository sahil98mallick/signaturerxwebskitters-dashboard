export function formatNumber(number: number): string {
  if (number >= 1000) {
    const suffixes = ["", "k", "M", "G", "T"];
    const magnitude = Math.floor(Math.log10(number) / 3);
    const scaledNumber = number / Math.pow(1000, magnitude);
    return scaledNumber.toFixed(1) + suffixes[magnitude];
  } else {
    return number.toString();
  }
}

export const truncateString = (str: string, length: number) => {
  if (str?.length) {
    if (str?.length < length) {
      return str;
    }

    return `${str.substring(0, length)}...`;
  }

  return str;
};