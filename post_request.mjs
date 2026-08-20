// const response = await fetch('http://localhost:3000/metrics', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     url: 'https://web.dev/',
//     category: 'seo'
//   })
// });

const response = await fetch('http://localhost:3000/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    url: 'https://web.dev/',
    category: 'seo'
  })
});

const data = await response.json();
console.log(data);