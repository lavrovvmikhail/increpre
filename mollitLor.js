// Extract the createdTime property and assign it to created_time_str
const created_time_str = item['createdTime'];

// Convert the ISO 8601 string to a Date object
const created_date = new Date(created_time_str);

// Format the date to a more readable string
const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
const formatted_date = created_date.toLocaleString('en-US', options);

// Log the formatted date
console.log(formatted_date); // Output: June 22, 2024, 04:53:10 AM
