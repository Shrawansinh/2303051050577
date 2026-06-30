const axios = require("axios");

async function Log(stack, level, packageName, message) {
  try {
    await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzAzMDUxMDUwNTc3QHBhcnVsdW5pdmVyc2l0eS5hYy5pbiIsImV4cCI6MTc4MjgxMzEwNywiaWF0IjoxNzgyODEyMjA3LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiYzRiMmJkYjktMjA4MS00MjZjLThjYzgtOTU2ZGM0ZTM1MDYzIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic2hyYXdhbnNpbmggcHJhbmthZGEiLCJzdWIiOiJmNWEwOWRhOC1hMjU4LTQ1NmUtYjVmOC04MWQ4MzExOGVkM2EifSwiZW1haWwiOiIyMzAzMDUxMDUwNTc3QHBhcnVsdW5pdmVyc2l0eS5hYy5pbiIsIm5hbWUiOiJzaHJhd2Fuc2luaCBwcmFua2FkYSIsInJvbGxObyI6IjIzMDMwNTEwNTA1NzciLCJhY2Nlc3NDb2RlIjoiY0pxYUVCIiwiY2xpZW50SUQiOiJmNWEwOWRhOC1hMjU4LTQ1NmUtYjVmOC04MWQ4MzExOGVkM2EiLCJjbGllbnRTZWNyZXQiOiJ3a0FZd3hLVHl0emVtUFVLIn0.BSQTzySxhnA26QQ1fUznkoZsWRN9jm7nlTSOTjS738s`,
        },
      }
    );
  } catch (err) {
    console.error("Logging failed:", err.message);
  }
}

module.exports = Log;