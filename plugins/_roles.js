//ian-Nino
const roles = {
'*𝗡𝗼𝘃𝗮𝘁𝗼 V* 🍄': 0,
'*𝗡𝗼𝘃𝗮𝘁𝗼 IV* 🍄': 2,
'*𝗡𝗼𝘃𝗮𝘁𝗼 III* 🍄': 4,
'*𝗡𝗼𝘃𝗮𝘁𝗼 II* 🍄': 6,
'*𝗡𝗼𝘃𝗮𝘁𝗼 I* 🍄': 8,
'*𝗘𝘀𝘁𝘂𝗱𝗶𝗮𝗻𝘁𝗲 V* 🍹': 10,
'*𝗘𝘀𝘁𝘂𝗱𝗶𝗮𝗻𝘁𝗲 IV* 🍹': 12,
'*𝗘𝘀𝘁𝘂𝗱𝗶𝗮𝗻𝘁𝗲 III* 🍹': 14,
'*𝗘𝘀𝘁𝘂𝗱𝗶𝗮𝗻𝘁𝗲 II* 🍹': 16,
'*𝗘𝘀𝘁𝘂𝗱𝗶𝗮𝗻𝘁𝗲 I* 🍹': 18,
'*𝗥𝗮𝗻𝗴𝗼 𝗺𝗲𝗱𝗶𝗼 V* 🥃': 20,
'*𝗥𝗮𝗻𝗴𝗼 𝗺𝗲𝗱𝗶𝗼 IV* 🥃': 22,
'*𝗥𝗮𝗻𝗴𝗼 𝗺𝗲𝗱𝗶𝗼 III* 🥃': 24,
'*𝗥𝗮𝗻𝗴𝗼 𝗺𝗲𝗱𝗶𝗼 II* 🥃': 26,
'*𝗥𝗮𝗻𝗴𝗼 𝗺𝗲𝗱𝗶𝗼 I* 🥃': 28,
'*𝗠𝗮𝗲𝘀𝘁𝗿𝗼 V* ☁️': 30,
'*𝗠𝗮𝗲𝘀𝘁𝗿𝗼 IV* ☁️': 32,
'*𝗠𝗮𝗲𝘀𝘁𝗿𝗼 III* ☁️': 34,
'*𝗠𝗮𝗲𝘀𝘁𝗿𝗼 II* ☁️': 36,
'*𝗠𝗮𝗲𝘀𝘁𝗿𝗼 I* ☁️': 38,
'*𝗘𝘅𝗽𝗲𝗿𝘁𝗼 V* 🪐': 40,
'*𝗘𝘅𝗽𝗲𝗿𝘁𝗼 IV* 🪐': 42,
'*𝗘𝘅𝗽𝗲𝗿𝘁𝗼 III* 🪐': 44,
'*𝗘𝘅𝗽𝗲𝗿𝘁𝗼 II* 🪐': 46,
'*𝗘𝘅𝗽𝗲𝗿𝘁𝗼 I* 🪐': 48,
'*𝗚𝗲𝗻𝗶𝗼 V* 💧': 50,
'*𝗚𝗲𝗻𝗶𝗼 IV* 💧': 52,
'*𝗚𝗲𝗻𝗶𝗼 III* 💧': 54,
'*𝗚𝗲𝗻𝗶𝗼 II* 💧': 56,
'*𝗚𝗲𝗻𝗶𝗼 I* 💧': 58,
'*𝗦𝘂𝗽𝗲𝗿𝗶𝗼𝗿 V* 🍿': 60,
'*𝗦𝘂𝗽𝗲𝗿𝗶𝗼𝗿 IV* 🍿': 62,
'*𝗦𝘂𝗽𝗲𝗿𝗶𝗼𝗿 III* 🍿': 64,
'*𝗦𝘂𝗽𝗲𝗿𝗶𝗼𝗿 II* 🍿': 66,
'*𝗦𝘂𝗽𝗲𝗿𝗶𝗼𝗿 I* 🍿': 68,
'*𝗘𝘅𝗽𝗲𝗿𝘁𝗼 𝗱𝗲𝗹 𝗯𝗼𝘁 V* 🌐': 70,
'*𝗘𝘅𝗽𝗲𝗿𝘁𝗼 𝗱𝗲𝗹 𝗯𝗼𝘁 IV* 🌐': 72,
'*𝗘𝘅𝗽𝗲𝗿𝘁𝗼 𝗱𝗲𝗹 𝗯𝗼𝘁 III* 🌐': 74,
'*𝗘𝘅𝗽𝗲𝗿𝘁𝗼 𝗱𝗲𝗹 𝗯𝗼𝘁 II* 🌐': 76,
'*𝗘𝘅𝗽𝗲𝗿𝘁𝗼 𝗱𝗲𝗹 𝗯𝗼𝘁 I* 🌐': 78,
'*𝗣𝗿𝗼 V* 💰': 80,
'*𝗣𝗿𝗼 IV* 💰': 82,
'*𝗣𝗿𝗼 III* 💰': 84,
'*𝗣𝗿𝗼 II* 💰': 86,
'*𝗣𝗿𝗼 I* 💰': 88,
'*𝗣𝗿𝗼 𝗦𝘂𝗽𝗲𝗿𝗶𝗼𝗿 V* 🎁': 90,
'*𝗣𝗿𝗼 𝗦𝘂𝗽𝗲𝗿𝗶𝗼𝗿 IV* 🎁': 92,
'*𝗣𝗿𝗼 𝗦𝘂𝗽𝗲𝗿𝗶𝗼𝗿 III* 🎁': 94,
'*𝗣𝗿𝗼 𝗦𝘂𝗽𝗲𝗿𝗶𝗼𝗿 II* 🎁': 96,
'*𝗣𝗿𝗼 𝗦𝘂𝗽𝗲𝗿𝗶𝗼𝗿 I* 🎁': 98,
'*𝗥𝗲𝘆 V* 💻': 100,
'*𝗥𝗲𝘆 IV* 💻': 102,
'*𝗥𝗲𝘆 III* 💻': 104,
'*𝗥𝗲𝘆 II* 💻': 106,
'*𝗥𝗲𝘆 I* 💻': 108,
'*𝗥𝗲𝘆 𝗣𝗿𝗼 V* 🎒': 110,
'*𝗥𝗲𝘆 𝗣𝗿𝗼 IV* 🎒': 112,
'*𝗥𝗲𝘆 𝗣𝗿𝗼 III* 🎒': 114,
'*𝗥𝗲𝘆 𝗣𝗿𝗼 II* 🎒': 116,
'*𝗥𝗲𝘆 𝗣𝗿𝗼 I* 🎒': 118,
'*𝗜𝗻𝘃𝗲𝗻𝘀𝗶𝗯𝗹𝗲 V* 🔔': 120,
'*𝗜𝗻𝘃𝗲𝗻𝘀𝗶𝗯𝗹𝗲 IV* 🔔': 122,
'*𝗜𝗻𝘃𝗲𝗻𝘀𝗶𝗯𝗹𝗲 III* 🔔': 124,
'*𝗜𝗻𝘃𝗲𝗻𝘀𝗶𝗯𝗹𝗲 II* 🔔': 126,
'*𝗜𝗻𝘃𝗲𝗻𝘀𝗶𝗯𝗹𝗲 I* 🔔': 128,
'*𝗥𝗲𝗻𝘁𝗮𝗿𝗼 V* 🌌': 130,
'*𝗥𝗲𝗻𝘁𝗮𝗿𝗼 IV* 🌌': 132,
'*𝗥𝗲𝗻𝘁𝗮𝗿𝗼 III* 🌌': 134,
'*𝗥𝗲𝗻𝘁𝗮𝗿𝗼 II* 🌌': 136,
'*𝗥𝗲𝗻𝘁𝗮𝗿𝗼 I* 🌌': 138,
'*𝗣𝗿𝗲𝗺𝗶𝘂𝗺 V* 🏆': 140,
'*𝗣𝗿𝗲𝗺𝗶𝘂𝗺 IV* 🏆': 145,
'*𝗣𝗿𝗲𝗺𝗶𝘂𝗺 III* 🏆': 150,
'*𝗣𝗿𝗲𝗺𝗶𝘂𝗺 II* 🏆': 155,
'*𝗣𝗿𝗲𝗺𝗶𝘂𝗺 I* 🏆': 160,
'*𝗥𝗲𝘆 𝗥𝗲𝗻𝘁𝗮𝗿𝗼 V* 👑': 170,
'*𝗥𝗲𝘆 𝗥𝗲𝗻𝘁𝗮𝗿𝗼 IV* 👑': 185,
'*𝗥𝗲𝘆 𝗥𝗲𝗻𝘁𝗮𝗿𝗼 III* 👑': 200,
'*𝗥𝗲𝘆 𝗥𝗲𝗻𝘁𝗮𝗿𝗼 II* 👑': 250,
'*𝗥𝗲𝘆 𝗥𝗲𝗻𝘁𝗮𝗿𝗼 I* 👑': 300
}

let handler = m => m
handler.before = async function (m, { conn }) {
        let user = db.data.users[m.sender]
        let level = user.level
        let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([, minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
        user.role = role
        return !0

}
export default handler 
