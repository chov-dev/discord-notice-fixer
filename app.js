/* eslint-disable max-len */
import Discord from 'discord.js';
const client = new Discord.Client();
const startBot = (token) => {
  client.login(token);
  client.on('ready', () => {
    console.log(`✅ Bot logined as ${client.user.tag}`);
  });
  client.on('message', (msg) => {
    if (msg.content.startsWith("!#공지등록 ")) {
      let fixStatus = true;
      let noticement = msg.content.slice(7)
      let noticeChannel = msg.channel
      let lastNotice = {author: ""}
      noticeChannel.send("✅ 공지 고정을 시작합니다")
      client.on("message", (newMsg) => {
        if(newMsg.channel = noticeChannel){
          if(newMsg.author != client.user){
            // delete previous notice
            if(lastNotice.author !== ""){
              lastNotice.delete().catch((error)=>console.log(error))
            }
            // send new notice
            noticeChannel.send(noticement).then(
              (message) => lastNotice = message
            ).catch(
              (error) => console.log(error))
            }}})
      client.on('message', (msg) => {
        if (msg.content.startsWith("!#공지변경 ")){
          noticement = msg.content.slice(7)
        }
      });
    }
  ;})
};

export default startBot;