const webhookUrl = 'https://discord.com/api/webhooks/1220633481789571153/rlrY5hAZtDJeLATpufGfdDK16kw0Iaa-9MXfA8xP98qItusnruXtnebuZERXh2F-kZI2';

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
