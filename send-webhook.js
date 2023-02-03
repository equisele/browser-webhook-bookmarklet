javascript:(function() {
  const data = {
    url: window.location.href,
    title: document.title,
    description: document.querySelector('meta[name="description"]').content
  };

  // Perform the POST request. Replace for Make Webhook Url (:
  fetch('https://your-webhook-url-from-make.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      alert('POST Request sent!');
    })
    .catch(error => {
      console.error(error);
      alert('An error occurred while send POST request.');
    });
})();
