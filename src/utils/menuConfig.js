// 配置需要展示在侧边栏的项，目前只支持2级，多级需要修改路由部分、面包屑部分
const menuConfig = [
  {
    title: '首页',
    link: '/home',
    icon: 'home'
  },
  {
    title: '地图',
    link: '/gdmap',
    icon: 'picture'
  },
  {
    title: '用户',
    link: '/user',
    icon: 'user',
    children: [
      {
        title: '联系',
        link: '/user/connect',
      },
      {
        title: '用户列表',
        link: '/user/list',
      },
    ]
  },
  {
    title: 'OpenLayer',
    link: '/olmap',
    icon: 'picture'
  },
  {
    title: '日常巡检',
    link: '/rcxj',
    icon: 'user',
    children: [
      {
        title: '巡检计划',
        link: '/rcxj/patrolPlan',
      },
      {
        title: '巡检任务',
        link: '/rcxj/patrolTask',
      },
      {
        title: '问题上报',
        link: '/rcxj/patrolIssue',
      },
      {
        title: '巡检轨迹',
        link: '/rcxj/userTrack',
      },
      {
        title: '指令查询',
        link: '/rcxj/commandInfo',
      },
    ]
  }, {
    title: '系统管理',
    link: '/xtgl',
    icon: 'user',
    children: [
      {
        title: '巡检小组',
        link: '/xtgl/groupManager',
      },
      {
        title: '责任区管理',
        link: '/xtgl/dutyAreaManager',
      },
      {
        title: '设备管理',
        link: '/xtgl/deviceManager',
      },
      {
        title: '字典管理',
        link: '/xtgl/connect',
      }
    ]
  }
  , {
    title:"巡检配置",
    link: '/xtpz',
    icon: 'user',
    children: [
      {
        title: '巡检主体',
        link: '/xtpz/patrolMainbody',
      },
      {
        title: '巡检项目',
        link: '/xtpz/patrolItemMgr',
      },
      {
        title: '问题类别',
        link: '/xtpz/issueMgr',
      },
      {
        title: '参数信息',
        link: '/xtpz/parameterInfo',
      }
    ]
  }
];

export default menuConfig;
