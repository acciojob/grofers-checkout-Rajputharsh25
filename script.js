function calculateTotal() {
  // 1. Select all elements with the class 'prices'
  const priceElements = document.querySelectorAll('.prices');
  let total = 0;

  // 2. Loop through the elements, convert text to numbers, and sum them
  priceElements.forEach(element => {
    // We use parseFloat to handle potential decimal values
    const price = parseFloat(element.textContent);
    if (!isNaN(price)) {
      total += price;
    }
  });

  // 3. Create the new row and cell for the total
  const table = document.querySelector('table');
  const newRow = document.createElement('tr');
  const totalCell = document.createElement('td');

  // 4. Configure the cell
  totalCell.setAttribute('data-ns-test', 'grandTotal'); // Often required for automated tests
  totalCell.textContent = total;
  
  // If you want the cell to span the whole row (optional)
  // totalCell.setAttribute('colspan', '2'); 

  // 5. Append the cell to the row, and the row to the table
  newRow.appendChild(totalCell);
  table.appendChild(newRow);
}

// Call the function to execute the logic
calculateTotal();

