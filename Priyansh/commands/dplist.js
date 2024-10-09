module.exports.config = {
    name: "dpzlist",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "jordanofficial",
    description: "logoinfo",
    commandCategory: "text",
    usages: "listinfo",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
 var mention = Object.keys(event.mentions)[0];
    
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("𝐃𝐏𝐙 𝐋𝐈𝐒𝐓 SHAAN 𝐄𝐃𝐈𝐓𝐎𝐑\n1 (boyedp) only rendom dpz\n2 (girldp) only rendom dpz\n3 (girldp1) girl dp name\n4 (girldp2) girl dp name\n5 (girldp3) girl dp name\n6 (girldp4) girl dp name\n7 (girldp5) girl dp name\n8(girldp6) girl dp name\n9 (girldp7) girl dp name\n10(boyedp1) boye dp name\n11 (boyedp2) boye dp name\n12 (dpname1) boye+girl\n13 (dpname2) boye+girl \n14 (dpname3) boye+girl\n15(dpname4) boye+girl\n16 (dpname5) boye+girl ");


}