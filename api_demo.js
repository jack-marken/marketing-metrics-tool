const prompt = require('prompt-sync')();
const axios = require('axios');


// console.log('Enter the url:')
const targetUrl = prompt('Enter the url (https://google.com/): ', 'https://google.com/');
console.log('\nWhich metric do you want to measure?\n1. Accessibility\n2. Best Practices\n3. Performance\n4. SEO\n');

const categories = ["ACCESSIBILITY", "BEST_PRACTICES", "PERFORMANCE", "SEO"]
const targetCategory = categories[prompt('Enter a number (1): ', 1) - 1];

console.log()

async function createUser() {
  try {
    const payload = {
        url: targetUrl,
        category: targetCategory
    }

    console.log(payload)

    console.log('\nRetrieving...\n')
    const response = await axios.post(`http://localhost:3000/`, payload, {
        timeout: 30000 // 30 seconds
    });

    console.log('Status:', response.status);
    console.log('Data:', response.data);
  } catch (error) {
    // Handle errors safely
    console.error('Error sending data:', error.message);
  }
}

createUser();