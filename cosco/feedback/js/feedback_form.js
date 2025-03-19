//contact

const webhookDiscord = 'https://discord.com/api/webhooks/1351819282538827776/Tq1njVqRpVzPdHNrulboNVfnxj0xYNwph-Dg-Mb64kdOoAp942rn1lBKDC2ub8gFmn-y';
const username = document.getElementById('username')
const email = document.getElementById('email')
const content = document.getElementById('content')
const send = document.getElementById('send')
const sentMessage = document.getElementById('sent');
let message ='';

send.addEventListener('click', e=>{
  e.preventDefault()
  if (username.value === '') {
    console.log('not valid');
    sentMessage.innerHTML = '<strong>Must enter name</strong>'
  }else if (content.value === '') {
    sentMessage.innerHTML = '<strong>Must enter a message</strong>'
  } else{
    discordIt();
    console.log(message);
    username.value = ''
    email.value = ''
    content.value = ''
    setTimeout(() => {
      sentMessage.style.display = 'none'
    }, 3000);
  }

})

function discordIt() {
  fetch( webhookDiscord, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "content":`name: ${username.value},
email: ${email.value},
message: ${content.value}`,
        "embeds": null,
    })
  })
   .then(function(res) {
    if (res.status.toString().startsWith('2')) {
      message = 'Sent successfully, Thanks for your feedback'
    }else {
      message = 'Something went wrong, Please try again'
    }
    sentMessage.innerHTML = `<strong> ${message}</strong>`
   })
  // .then(response => response.json())
  // .then(response => JSON.stringify(response))
}



//autosend








const webhookUrl ='https://discord.com/api/webhooks/1351818756871164005/SKH4tYea5XaqvNDPRqDOBwAVIdeK3Nd6vugV48O1dRLYB00duKH6HTSC9Sau5pfvInrI';

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
