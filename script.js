function calculateLoan() {
  // Fetch input values
  const employeeId = document.getElementById('employeeId').value;
  const loanAmount = parseFloat(document.getElementById('loanAmount').value);
  const interestRate = parseFloat(document.getElementById('interestRate').value);
  
  // Check employee ID format
  if (!/^E.{3,}$/.test(employeeId)) {
    alert('Employee ID must be at least 4 characters and start with the letter E.');
    return;
  }

  // Calculate total interest and loan amount
  const totalInterest = (loanAmount * interestRate) / 100;
  const totalAmount = loanAmount + totalInterest;

  // Display the result
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <h3>Loan Details</h3>
    <p><strong>Employee ID:</strong> ${employeeId}</p>
    <p><strong>Total Interest:</strong> $${totalInterest.toFixed(2)}</p>
    <p><strong>Total Amount Payable:</strong> $${totalAmount.toFixed(2)}</p>
  `;
}
