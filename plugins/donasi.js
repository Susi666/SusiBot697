let handler = async m => m.reply(`
β­βγ π¦πππΆπ²π²π² γ
β β’ πππ¦πππ [paypal.me/smonterroza12]
β β’ Pero con que me sigas en instagram me basta:)
β https://www.instagram.com/susana_monterroza_/
β°ββββ
β­βγ Mi nΓΊmero por si quieres chambrear γ
β > Wa.me/50373619339
β°ββββ
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi Λ’αΆ¦α΅α΅α΅α΅α΅ α΅βΏ αΆ¦βΏΛ’α΅α΅α΅Κ³α΅α΅']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
