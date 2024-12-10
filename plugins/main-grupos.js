
import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {

let grupos = `*Hola!, te invito a unirte a los grupos oficiales de la Bot para convivir con la comunidad* 🍭

1- 𝐓𝐞𝐚𝐦 𝐒𝐚𝐭𝐨𝐮𝐁𝐨𝐭-𝐌𝐃 
*✰* ${grupo}

*─ׄ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ*

➠ Enlace anulado? entre aquí! 

❀ Canal :
*✰* ${channel}

> ${dev}`

await conn.sendFile(m.chat, imagen2, "ian.jpg", grupos, m, null, rcanal)

await m.react(emojis)

}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = ['grupos', 'iangrupos', 'gruposian']
export default handler
