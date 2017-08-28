// 定义数据
var local_database = [
  {
    avatar: "/images/avatar/2.png",
    date: "Nov 25 2015",
    title: "正是虾肥蟹壮时",
    imgSrc: "/images/post/crab.png",
    content: "懂现实的人生一定是凄凉的，当自己最终从梦中的彩云跌落到人间的尘埃时，一定会身心交瘁，伤痕累累我们都有一个，想回却回不了的过去。",
    reading: 50,
    collection: 260,
    postid:0,
    detailAuthor: "oneday",
    detailTime:"2天前",
    detailContent: "懂现实的人生一定是凄凉的，当自己最终从梦中的彩云跌落到人间的尘埃时，一定会身心交瘁，伤痕累累我们都有一个，想回却回不了的过去。阴阳涧，生死薄，黄泉碧落怎奈何，星坠魂不灭，阿鼻雨婆娑。天皇焰，地幽河，浮屠三千魄索夺，冥剑沉月惑，夜语鬼神说。"
  },
  {
    avatar: "/images/avatar/3.png",
    date: "Nov 2 2014",
    title: "解读史记",
    imgSrc: "/images/post/sls.png",
    content: "人生弯弯曲曲水，世事重重叠叠山。热情去奔跑，去超越，然后才能拾掇失意后的坦然，挫折后的不屈，困苦艰难后的从容。",
    reading: 150,
    collection: 2550,
    postid:1,
    detailAuthor: "Tom",
    detailTime: "1天前",
    detailContent: "懂现实的人生一定是凄凉的，当自己最终从梦中的彩云跌落到人间的尘埃时，一定会身心交瘁，伤痕累累我们都有一个，想回却回不了的过去。阴阳涧，生死薄，黄泉碧落怎奈何，星坠魂不灭，阿鼻雨婆娑。天皇焰，地幽河，浮屠三千魄索夺，冥剑沉月惑，夜语鬼神说。"
  },
  {
    avatar: "/images/avatar/5.png",
    date: "Nov 2 2014",
    title: "盗梦空间详解",
    imgSrc: "/images/post/dmkj.jpg",
    content: "影片开头老saito和cobb的对话和之后小saito办晚宴不是一起的。",
    reading: 15000,
    collection: 550,
    postid: 2,
    detailAuthor: "huge",
    detailTime: "5天前",
    detailContent: "影片开头老saito和cobb的对话和之后小saito办晚宴不是一起的。老saito那段是结尾cobb去limbo拯救他，而小saito的晚宴是saito的梦，梦里cobb被cobol engineering派去盗取saito的秘密。Saito事后告诉他们，其实那段盗取记忆是他在audition他们，当时那个architect没过关，就被筛了，但cobb和arthur过了，于是被saito雇佣了去完成inception的任务。他们需要个新的团队，于是cobb去了法国，从他岳父那找到了ariadne这个新的architect，去非洲找到了天才forgereames，并从chemist yusef那里拿到了特别配制的sedative。"
  }
]

// 定义出口 与node.js模块输出类似
module.exports = {
  postList: local_database,
}