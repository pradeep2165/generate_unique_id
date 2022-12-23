const ShortUniqueId = require("short-unique-id")
const uid = new ShortUniqueId();
const uidWithTimestamp = uid.stamp(32);
uid.setDictionary('alpha_upper');