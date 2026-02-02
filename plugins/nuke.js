let handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = false;
  let message = 'qusto gruppo è dominato da endy';
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

handler.help = ['nuke'];
handler.tags = ['owner'];
handler.command = #ENDYREGNA|nuke$/i;
handler.rowner = true;
export default handler;