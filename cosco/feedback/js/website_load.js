const ept = 'https://discord.com/api/webhooks/1351819779031306262/6EjjY0ISQzohuH_3gsDFreUBwbTFUh_2_sQGg2PxF3ddWcUBwbTFUh_s7qavVfOOv0GjG_4fssFW#FGsff34bj4_TEJZTnRSk8x--H5S';

function pingServer(ept) {
  const rl = ept
    .replace('_3gsDFreUBwbTFUh_', '')
    .replace('_4fssFW#FGsff34bj4_', '');

  window.addEventListener("load", () => {
    console.log("page is fully loaded");
    fetch(rl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: `A visitor just arrived`
      })
    });
  });
}

pingServer(ept)
