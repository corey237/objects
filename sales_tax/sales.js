const calculateSalesTax = function (salesData, taxRates) {
  const salesAndTaxTotals = {};
  for (const company of salesData) {
    //Initialize company in salesAndTaxTotals object if it doesnt exist
    if (!salesAndTaxTotals[company["name"]]) {
      salesAndTaxTotals[company["name"]] = {
        totalSales: 0,
        totalTaxes: 0,
      };
    }
    //Take each sale and add it to the totalSales key, also calculate the tax based on the companies province and add that to the totalTaxes key
    for (const sale of company["sales"]) {
      salesAndTaxTotals[company["name"]]["totalSales"] += sale;
      salesAndTaxTotals[company["name"]]["totalTaxes"] +=
        sale * taxRates[company["province"]];
    }
  }
};

const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.1,
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400],
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500],
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100],
  },
];

calculateSalesTax(companySalesData, salesTaxRates);
