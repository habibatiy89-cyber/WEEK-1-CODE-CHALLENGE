function calculateNetSalary(basicSalary, benefits) {
  // 1. Gross Salary
  const grossSalary = basicSalary + benefits;

  // 2. NSSF Contribution (6% of pensionable pay, capped by Tier I & II)
  const pensionablePay = Math.min(grossSalary, 72000); 
  const nssf = pensionablePay * 0.06;

  // 3. SHIF Contribution (2.75% of gross)
  const shif = grossSalary * 0.0275;

  // 4. Housing Levy (1.5% of gross)
  const housingLevy = grossSalary * 0.015;

  // 5. Taxable Income
  const taxableIncome = grossSalary - (nssf + shif + housingLevy);

  // 6. Payee (Income Tax Calculation)
  let payee = 0;
  if (taxableIncome <= 24000) {
    payee = taxableIncome * 0.1;
  } else if (taxableIncome <= 32333) {
    payee = (24000 * 0.1) + ((taxableIncome - 24000) * 0.25);
  } else if (taxableIncome <= 500000) {
    payee = (24000 * 0.1) + (8333 * 0.25) + ((taxableIncome - 32333) * 0.30);
  } else if (taxableIncome <= 800000) {
    payee = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.30) + ((taxableIncome - 500000) * 0.325);
  } else {
    payee = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.30) + (300000 * 0.325) + ((taxableIncome - 800000) * 0.35);
  }

  // Apply Personal Relief (Ksh 2,400)
  payee = Math.max(0, payee - 2400);

  // 7. Net Salary
  const netSalary = grossSalary - (payee + nssf + shif + housingLevy);

  // Display results
  console.log("Gross Salary: " + grossSalary.toFixed(2));
  console.log("NSSF Deduction: " + nssf.toFixed(2));
  console.log("SHIF Deduction: " + shif.toFixed(2));
  console.log("Housing Levy: " + housingLevy.toFixed(2));
  console.log("PAYE (Tax): " + payee.toFixed(2));
  console.log("Net Salary: " + netSalary.toFixed(2));
}

//Example run (replace values as needed)
const basicSalary = 50000;   
const benefits = 10000;      

calculateNetSalary(basicSalary, benefits);   
