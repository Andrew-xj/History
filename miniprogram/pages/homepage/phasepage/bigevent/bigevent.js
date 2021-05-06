Page({
  data: {
    eid: null,
    eventList: null,
    title: null,
    phaseList:{
      "01":{
        "title": "新民主主义革命时期",
        "event01":{
          "No": "01",
          "title": "中共一大"
        },
        "event02":{
          "No": "02",
          "title": "中共二大"
        },
        "event03":{
          "No": "03",
          "title": "中共三大"
        },
        "event04":{
          "No": "04",
          "title": "新三民主义"
        },
        "event05":{
          "No": "05",
          "title": "中共四大"
        },
        "event06":{
          "No": "06",
          "title": "北伐战争和工农运动"
        },
        "event07":{
          "No": "07",
          "title": "中共五大与大革命的失败"
        },
        "event08":{
          "No": "08",
          "title": "中共六大"
        },
        "event09":{
          "No": "09",
          "title": "古田会议"
        },
        "event10":{
          "No": "10",
          "title": "《反对本本主义》"
        },
        "event11":{
          "No": "11",
          "title": "抗日初期组织建立"
        },
        "event12":{
          "No": "12",
          "title": "长征开始"
        },
        "event13":{
          "No": "13",
          "title": "遵义会议和瓦窑堡会议"
        },
        "event14":{
          "No": "14",
          "title": "西安事变"
        },
        "event15":{
          "No": "15",
          "title": "洛川扩大会议"
        },
        "event16":{
          "No": "16",
          "title": "六届六中全会"
        },
        "event17":{
          "No": "17",
          "title": "中国革命三大法宝"
        },
        "event18":{
          "No": "18",
          "title": "百团大战"
        },
        "event19":{
          "No": "19",
          "title": "皖南事变"
        },
        "event20":{
          "No": "20",
          "title": "整风运动"
        },
        "event21":{
          "No": "21",
          "title": "六届七中全会"
        },
        "event22":{
          "No": "22",
          "title": "中共七大"
        },
        "event23":{
          "No": "23",
          "title": "内战爆发"
        },
        "event24":{
          "No": "24",
          "title": "挺进中原和战略进攻"
        },
        "event25":{
          "No": "25",
          "title": "三大战役"
        },
        "event26":{
          "No": "26",
          "title": "新中国成立"
        }
      },
      "02":{
        "title": "社会主义革命和建设时期",
        "event01":{
          "No": "01",
          "title": "抗美援朝"
        },
        "event02":{
          "No": "02",
          "title": "西藏解放"
        },
        "event03":{
          "No": "03",
          "title": "成渝铁路"
        },
        "event04":{
          "No": "04",
          "title": "和平共处五项原则"
        },
        "event05":{
          "No": "05",
          "title": "第一届全国人大"
        },
        "event06":{
          "No": "06",
          "title": "亚非会议"
        },
        "event07":{
          "No": "07",
          "title": "《论十大关系》"
        },
        "event08":{
          "No": "08",
          "title": "中共八大"
        },
        "event09":{
          "No": "09",
          "title": "整风运动(1957)"
        },
        "event10":{
          "No": "10",
          "title": "大跃进"
        },
        "event11":{
          "No": "11",
          "title": "八届八中全会"
        },
        "event12":{
          "No": "12",
          "title": "“东风一号”导弹"
        },
        "event13":{
          "No": "13",
          "title": "八届九中全会"
        },
        "event14":{
          "No": "14",
          "title": "七千人大会"
        },
        "event15":{
          "No": "15",
          "title": "党的八届十中全会"
        },
        "event16":{
          "No": "16",
          "title": "学雷锋日"
        },
        "event17":{
          "No": "17",
          "title": "“农业学大寨”运动"
        },
        "event18":{
          "No": "18",
          "title": "第一颗原子弹"
        },
        "event19":{
          "No": "19",
          "title": "第三届全国人大"
        },
        "event20":{
          "No": "20",
          "title": "人工合成牛胰岛素"
        },
        "event21":{
          "No": "21",
          "title": "文化大革命"
        },
        "event22":{
          "No": "22",
          "title": "上山下乡"
        },
        "event23":{
          "No": "23",
          "title": "南京长江大桥通车"
        },
        "event24":{
          "No": "24",
          "title": "中共九大"
        },
        "event25":{
          "No": "25",
          "title": "东方红一号"
        },
        "event26":{
          "No": "26",
          "title": "九届二中全会"
        },
        "event27":{
          "No": "27",
          "title": "乒乓外交"
        },
        "event28":{
          "No": "28",
          "title": "尼克松访华"
        },
        "event29":{
          "No": "29",
          "title": "中国加入联合国"
        },
        "event30":{
          "No": "30",
          "title": "第四个五年计划"
        },
        "event31":{
          "No": "31",
          "title": "三线建设"
        },
        "event32":{
          "No": "32",
          "title": "科技发展"
        },
        "event33":{
          "No": "33",
          "title": "环境保护"
        },
        "event34":{
          "No": "34",
          "title": "全面整顿的展开"
        },
        "event35":{
          "No": "35",
          "title": `“文化大革命”的结束`
        }
      },
      "03":{
        "title": "社会主义现代化建设新时期",
        "event01":{
          "No": "01",
          "title": "十一届三中全会"
        },
        "event02":{
          "No": "02",
          "title": "调整国民经济"
        },
        "event03":{
          "No": "03",
          "title": `“一国两制”方针的形成`
        },
        "event04":{
          "No": "04",
          "title": "党的十二大"
        },
        "event05":{
          "No": "05",
          "title": "八二宪法"
        },
        "event06":{
          "No": "06",
          "title": "对外开放的新格局"
        },
        "event07":{
          "No": "07",
          "title": "经济体制改革"
        },
        "event08":{
          "No": "08",
          "title": "百万大裁军"
        },
        "event9":{
          "No": "09",
          "title": `“863”计划`
        },
        "event10":{
          "No": "10",
          "title": "党的十三大"
        },
        "event11":{
          "No": "11",
          "title": "南方谈话"
        },
        "event12":{
          "No": "12",
          "title": "中共十四大"
        },
        "event13":{
          "No": "13",
          "title": "九二共识"
        },
        "event14":{
          "No": "14",
          "title": "全方位对外开放格局的形成"
        },
        "event15":{
          "No": "15",
          "title": "科教兴国战略"
        },
        "event16":{
          "No": "16",
          "title": "党的十五大"
        },
        "event17":{
          "No": "17",
          "title": "香港澳门回归"
        },
        "event18":{
          "No": "18",
          "title": "三个代表"
        },
        "event19":{
          "No": "19",
          "title": "加入世界贸易组织"
        },
        "event20":{
          "No": "20",
          "title": "党的十六大"
        },
        "event21":{
          "No": "21",
          "title": "科学发展观"
        },
        "event22":{
          "No": "22",
          "title": "西气东输工程"
        },
        "event23":{
          "No": "23",
          "title": "青藏铁路"
        },
        "event24":{
          "No": "24",
          "title": "党的十七大"
        },
        "event25":{
          "No": "25",
          "title": "汶川地震"
        },
        "event26":{
          "No": "26",
          "title": "北京奥运会"
        },
        "event27":{
          "No": "27",
          "title": `“十一五”规划`
        }
      },
      "04":{
        "title": "中国特色社会主义新时代",
        "event01":{
          "No": "01",
          "title": "中共十八大"
        },
        "event02":{
          "No": "02",
          "title": "党的群众路线教育实践活动"
        },
        "event03":{
          "No": "03",
          "title":`“一带一路”倡议`
        },
        "event04":{
          "No": "04",
          "title": "精准扶贫"
        },
        "event05":{
          "No": "05",
          "title": "全面深化改革"
        },
        "event06":{
          "No": "06",
          "title": "总体国家安全观"
        },
        "event07":{
          "No": "07",
          "title": "全面依法治国"
        },
        "event08":{
          "No": "08",
          "title": "坚决打赢脱贫攻坚战"
        },
        "event09":{
          "No": "09",
          "title": "党的十九大"
        },
        "event10":{
          "No": "10",
          "title": "新中国成立70周年"
        },
        "event11":{
          "No": "11",
          "title": "疫情防控阻击战"
        },
        "event12":{
          "No": "12",
          "title": "全部脱贫摘帽"
        }
      },
    }
  },

  onLoad: function (options) {
    var eid = options.id
    var that = this
    var eventList = that.data.phaseList[eid]
    var title = eventList.title
    delete eventList['title']
    that.setData({
      eventList: eventList,
      title: title,
      eid: eid
    })
  }
})