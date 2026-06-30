const axios = require("axios");

const priority = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

async function getTopNotifications() {
  const response = await axios.get(
    "http://4.224.186.213/evaluation-service/notifications",
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzAzMDUxMDUwNTc3QHBhcnVsdW5pdmVyc2l0eS5hYy5pbiIsImV4cCI6MTc4MjgxNTU5OCwiaWF0IjoxNzgyODE0Njk4LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZTMzYzI3NzAtZmVlZi00NzgzLTg0M2EtNzA0MGI3YTViZTVhIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic2hyYXdhbnNpbmggcHJhbmthZGEiLCJzdWIiOiJmNWEwOWRhOC1hMjU4LTQ1NmUtYjVmOC04MWQ4MzExOGVkM2EifSwiZW1haWwiOiIyMzAzMDUxMDUwNTc3QHBhcnVsdW5pdmVyc2l0eS5hYy5pbiIsIm5hbWUiOiJzaHJhd2Fuc2luaCBwcmFua2FkYSIsInJvbGxObyI6IjIzMDMwNTEwNTA1NzciLCJhY2Nlc3NDb2RlIjoiY0pxYUVCIiwiY2xpZW50SUQiOiJmNWEwOWRhOC1hMjU4LTQ1NmUtYjVmOC04MWQ4MzExOGVkM2EiLCJjbGllbnRTZWNyZXQiOiJ3a0FZd3hLVHl0emVtUFVLIn0.LXNyKp96eoe0zfYt7n1rxsegfG8gvbLDBC2S1H4b5Ks`,
      },
    }
  );

  const notifications = response.data.notifications;

  notifications.sort((a, b) => {
    if (priority[b.Type] !== priority[a.Type]) {
      return priority[b.Type] - priority[a.Type];
    }

    return new Date(b.Timestamp) - new Date(a.Timestamp);
  });

  const top10 = notifications.slice(0, 10);

  console.log(top10);
}

getTopNotifications();