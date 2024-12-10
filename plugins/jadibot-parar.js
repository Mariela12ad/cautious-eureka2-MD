
let handler  = async (m, { conn }) => {
if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, `❁ El bot principal no se puede apagar`, m, rcanal, )
else {
await conn.reply(m.chat, `🍭 Subbot Desactivado`, m, rcanal, )
conn.ws.close()
}}
handler.command = handler.help = ['stop', 'byebot'];
handler.tags = ['jadibot'];
handler.owner = true
handler.private = true
handler.register = true
export default handler
