const ShortUniqueId = require("short-unique-id")
const uid = new ShortUniqueId();
uid.setDictionary('number');
const uidWithTimestamp = uid.stamp(32);
console.log(uidWithTimestamp);
