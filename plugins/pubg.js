let fetch = require('node-fetch')
//plugin by Samu330

let handler  = async (m, { conn, text }) => {
//let text = args.join` `
let [to, Susi] = text.split`|`
if (!to) throw `Formato incorrecto`
if (!susi) throw `Ejemplo *.pubg susi|666*`

if (!text) return conn.reply(m.chat, 'No hay texto para crear logo', m)
let url = 'https://videfikri.com/api/textmaker/pubgmlogo/?text1=' + `${to}` + '&text2=' + `${Susi}`

conn.sendFile(m.chat, url, '', 'By @Susi', m)

}
handler.help = ['pubg ᴺᵒ ᶠᵘⁿᶜᶦᵒⁿᵃ']
handler.tags = ['images']
handler.command = /^pubg?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
