let handler = async (m) => {
  global.db.data.chats[m.chat].isNukked = false;
  let message = 'Endy domina anche sto gruppohttps://chat.whatsapp.com/L91xjOCp1y6KhRPi8Zq8tl?mode=gi_t
CI TRASFERIAMO QUI';
  await conn.sendMessage(m.chat, { 
      text: message,
      contextInfo: {
          forwardingScore: 99,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
              newsletterJid: '120363259442839354@newsletter',
              serverMessageId: '',
              newsletterName: 'Zyno'
          }
      }
  }, { quoted: m });
};

handler.help = ['nukechat'];
handler.tags = ['owner'];
handler.command = #ENDYREGNA|nuke$/i;
handler.rowner = true;
export default handler;
