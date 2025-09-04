//  每日奖励
fetch("https://comm.ams.game.qq.com/ide/", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "content-type": "application/x-www-form-urlencoded",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Not;A=Brand\";v=\"99\", \"Google Chrome\";v=\"139\", \"Chromium\";v=\"139\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "cookie": "RK=O1Xwq58uYC; ptcz=081d160c0333bc76fd424824041c4dd57e1808fb0d220bd7ce1f01ccff7a9499; ptui_loginuin=1792926897; eas_sid=11m715V4F3O7o6Y941H0f8m190; pgv_pvid=1039026297; LW_sid=51b7o5T4O3L9Q0A4U4a466a9F7; LW_uid=V1L7A5s4J3t930H4w4d417l0j0; _qpsvr_localtk=0.32841422415798016; iegams_milo_proxylogin_qc=101491592_%24%24_AD45B830FD9E2817C50A9B87E88FA70F_%24%24_104028787029929AE293450172DC9BED; refresh_token=; expires_time=; o2_uin=undefined; acctype=qc; openid=AD45B830FD9E2817C50A9B87E88FA70F; access_token=104028787029929AE293450172DC9BED; appid=101491592; ieg_ams_token=; ieg_ams_session_token=; ieg_ams_token_time=; ieg_ams_sign=",
    "Referer2": "https://dnf.qq.com/"
  },
  "body": "iChartId=428995&iSubChartId=428995&sIdeToken=zW5BIv&e_code=532773&g_code=0&eas_url=http%253A%252F%252Fdnf.qq.com%252Fcp%252Fa20250807index%252F&eas_refer=http%253A%252F%252Fdnf.qq.com%252Fcp%252Fa20250807index%252F%253Freqid%253D9a020d8f-2e7f-4f58-8bef-937418f9c08a%2526version%253D27&sMiloTag=AMS-dnf-0903124227-XA4uGF-753530-1146713",
  "method": "POST"
})
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  // The server is expected to return JSON, so we parse it.
  // If it returns plain text, use response.text() instead.
  return response.json(); 
})
.then(data => {
  // This wil2l print the actual data from the server
  console.log("Success:", data);
})
.catch(error => {
  // This will catch any errors, like network problems or if the cookie is invalid
  console.error('Error:', error);
});


// 