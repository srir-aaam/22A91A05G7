const fetch = require('node-fetch');

// Add your actual access token here (check your email or registration docs)
const AUTH_TOKEN = "your-access-token-here"; 

async function Log(stack, level, packageName, message) {
  // validation code as before...

  try {
    const response = await fetch("http://20.244.56.144/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${AUTH_TOKEN}`
      },
      body: JSON.stringify({
        stack,
        level,
        package: packageName,
        message
      })
    });

    const data = await response.json();
    console.log("✅ Log Sent:", data);
  } catch (err) {
    console.error("❌ Failed to send log:", err);
  }
}
