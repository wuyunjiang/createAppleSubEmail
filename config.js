function getConfig() {
  return {
    smallAccounts: [
      // 小号名称
      'fsdgswertg',
      'Heidi66',
      'dgdrthyertfd',
      'Isaac988',
      'xiecheng',
      'gedrherdfgversd',
      'edrhgdfh',
      'Alexander65',
      'James23',
      'tangyajun',
    ],
    filterKeywords: ['hosky', 'HOSKY', 'Hosky'], // 关键词过滤，选择的消息包含了其中词的，就不要
    msgLength: 100, // 选择的msg的长度不超过30
    noInRecentlyCount: 5, // 最近十条消息没有你发的并且没有提到你
    msgsLength: 50, // 收集消息列表msgs的长度
    collectInterval: 2 * 60 * 1000, // 2分钟更新一次消息列表
    sendAfterCooling: 5, // 冷却结束后 ，再等待10s内随机一个时间后再发送消息
  }
}
