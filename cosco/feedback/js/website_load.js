const webhookUrl = 'https://discord.com/api/webhooks/1351819779031306262/6EjjY0ISQzohuH2_sQGg2PxF3ddWcUBwbTFUh_s7qavVfOOv0GjGTEJZTnRSk8x--H5S';

function sendToDis(webhookUrl) {
  window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "content": `Someone is on your website from ${navigator.appVersion.slice(5, 33)}
          `,
      })
    })
    console.log('sent');
  });
}

sendToDis(webhookUrl);
