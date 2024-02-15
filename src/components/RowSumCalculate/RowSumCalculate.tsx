export type RowItemType = {
  medicineName: string;
  dosages: string;
  notes: string;
  qty: string;
  price: string;
  total: number;
};

export function RowSumCalculate(rows: RowItemType[]) {
  var sum = rows.reduce((current, sum) => {
    return current + sum.total;
  }, 0);

  return sum;
}
