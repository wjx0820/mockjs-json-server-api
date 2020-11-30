const Mock = require("mockjs");
const fs = require("fs");

const data = Mock.mock({
  // 属性 list 的值是一个数组，其中 10 个元素
  "emails|10": [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      "id|+1": 1,
      // name: "@cname",
      from: "@email",
      subject: "@ctitle",
      body: "@cparagraph(10,15)",
      sentAt: "@datetime",
      archived: "@boolean",
      read: "@boolean",
    },
  ],
});

fs.writeFileSync("db.json", JSON.stringify(data, null, "\t"));
