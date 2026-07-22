import type {
  Campus,
  ChecklistItem,
  GuideTopic,
  JourneyStage,
  MarginNote,
  QuestionAnswer,
  SchoolConfig,
  SearchRecord,
  SourceReference,
} from "@/lib/types";

export const defaultSchoolId = "haue";

export const schools: SchoolConfig[] = [
  {
    id: "haue",
    slug: "henan-university-of-engineering",
    name: "河南工程学院",
    shortName: "河工",
    englishName: "Henan University of Engineering",
    edition: "2026 新生年鉴",
    updatedAt: "2026-07-22",
    theme: { accent: "#1E5AA8", paper: "#F3F6FA", ink: "#102033", tint: "#DCE8F7" },
    mark: "/media/school-mark.webp",
    contact: { enabled: false, label: "联系河工利享" },
  },
];

export const campuses: Campus[] = [
  {
    id: "longhu-west",
    schoolId: "haue",
    slug: "longhu-west",
    name: "龙湖校区西区",
    shortName: "龙湖西区",
    address: "河南省新郑市龙湖镇祥和路1号",
    arrival: "新生通常从三号门进入，具体以录取通知和学院安排为准。",
    transit: ["城郊线沙窝李站或双湖大道站", "从地铁站可换乘网约车或合规接驳车辆"],
    express: "填写“河南工程学院龙湖校区西区”，驿站位于体育馆斜对面。",
    dorm: "男生宿舍以六人间上床下桌为主，具体楼栋和床位由学院分配。",
    image: "/media/library-exterior-a.webp",
  },
  {
    id: "longhu-south",
    schoolId: "haue",
    slug: "longhu-south",
    name: "龙湖校区南区",
    shortName: "龙湖南区",
    address: "河南省新郑市龙湖镇祥和路1号",
    arrival: "新生通常从六号门进入，随行车辆原则上不入校。",
    transit: ["城郊线沙窝李站或双湖大道站", "到校前确认学院迎新群发布的接站信息"],
    express: "填写“河南工程学院龙湖校区南区”，菜鸟驿站在操场后方。",
    dorm: "以六人间上床下桌为主，有独立衣柜和鞋柜，每层设置洗浴单间。",
    image: "/media/arrival-gates.webp",
  },
  {
    id: "tongbai",
    schoolId: "haue",
    slug: "tongbai",
    name: "桐柏路校区",
    shortName: "桐柏路",
    address: "河南省郑州市中原区桐柏路62号",
    arrival: "从校区正门入校，报到安排以所属学院通知为准。",
    transit: ["地铁1号线碧沙岗站约1.1公里", "地铁5号线五一公园站约1.3公里"],
    express: "填写“河南工程学院桐柏路校区”，收件前核对学院和手机号。",
    dorm: "老校区住宿条件与龙湖校区不同，床位和设施请以学院通知为准。",
    image: "/media/hegong-sign.webp",
  },
  {
    id: "nanyang-road",
    schoolId: "haue",
    slug: "nanyang-road",
    name: "南阳路校区",
    shortName: "南阳路",
    address: "河南省郑州市金水区南阳路与群办路交叉口向东约200米",
    arrival: "从校区正门入校，校园面积较小，报到点相对集中。",
    transit: ["地铁3号线南阳新村站约1.4公里", "地铁5号线沙口路站约1.9公里"],
    express: "填写“河南工程学院南阳路校区”，部分包裹可能送至对面家属院。",
    dorm: "以多人间和上下铺为主，不同年份安排可能变化。",
    image: "/media/zhengzhou-weekend.webp",
  },
];

export const stages: JourneyStage[] = [
  { id: "before", schoolId: "haue", title: "出发前", subtitle: "把确定的事先装进行李", description: "证件、床品、资助材料和电子设备，先准备关键项，其余到校再买。", topicSlugs: ["campus", "financial-aid", "party-youth", "tips"] },
  { id: "arrival", schoolId: "haue", title: "报到当天", subtitle: "先找对校区，再找到自己的床", description: "确认入口、交通、宿舍、校园卡和第一顿饭，别让行李和推销打乱节奏。", topicSlugs: ["dorm", "campus-card", "food", "express", "transport"] },
  { id: "first-week", schoolId: "haue", title: "第一周", subtitle: "认识课表，也认识校园", description: "军训、上课、校园网、常用 App 和校园跑会接连出现。", topicSlugs: ["classes-training", "campus-run", "library"] },
  { id: "campus-life", schoolId: "haue", title: "校园生活", subtitle: "慢慢把陌生变成日常", description: "车辆、转专业、自习与生活经验，遇到变化记得以当年通知为准。", topicSlugs: ["vehicles", "major-change"] },
];

export const notes: MarginNote[] = [
  { id: "dorm-difference", schoolId: "haue", title: "宿舍差异很大", body: "同一校区也可能因楼栋、性别和年级分到不同房型。不要只凭一张照片购买尺寸严格的收纳用品。", campusIds: ["longhu-west", "longhu-south", "tongbai", "nanyang-road"], asOf: "2026-07", sourceId: "handbook-2026" },
  { id: "power-note", schoolId: "haue", title: "大功率电器不要带", body: "手册记录单插座约400W、房间总功率约1600W。卷发棒、小电锅等属于常见违规物品，实际标准以宿舍最新规定为准。", asOf: "2026-07", sourceId: "handbook-2026" },
  { id: "card-sales", schoolId: "haue", title: "先核验，再办理", body: "校园内外可能都有手机卡推销。办理前确认营业厅、套餐合约、校园网权限和注销方式，不因“学长学姐”身份省略核验。", asOf: "2026-07", sourceId: "handbook-2026" },
  { id: "run-change", schoolId: "haue", title: "里程可能调整", body: "手册记录男生80公里、女生60公里，但学生问卷存在不同说法。开始跑步前先看体育课和闪动校园内的本学期任务。", asOf: "2026-07", sourceId: "college-chat" },
  { id: "gate-time", schoolId: "haue", title: "门禁以楼栋通知为准", body: "学生反馈多集中在23:00左右，但校区、楼栋和特殊时期可能不同。晚归应提前联系辅导员或宿管。", asOf: "2026-06", sourceId: "college-chat" },
  { id: "major-change", schoolId: "haue", title: "先把原专业学好", body: "转专业通常参考大一上学期成绩。正式录取结果下来前，原专业课程仍需正常完成。", asOf: "2026-07", sourceId: "handbook-2026" },
];

export const topics: GuideTopic[] = [
  {
    schoolId: "haue", slug: "campus", title: "校区与学院分布", shortTitle: "找对校区", stageId: "before", summary: "报到前确认学院所在校区、入口和路线。", keywords: ["学院", "南区", "西区", "桐柏路", "南阳路", "报到"], sourceIds: ["handbook-2026"],
    sections: [
      { id: "confirm", heading: "先确认录取专业对应校区", paragraphs: ["河南工程学院有龙湖、桐柏路、南阳路等教学区域。学院分布可能调整，录取通知书和学院迎新群才是报到依据。"], bullets: ["核对录取通知书上的报到校区", "保存学院联系人和迎新群通知", "不要只在地图中搜索学校总名称"], image: "/media/campus-map.webp" },
      { id: "arrival", heading: "龙湖南北区入口不同", paragraphs: ["手册建议龙湖西区从三号门、南区从六号门进入。随行车辆通常不进校，现场会有迎新人员协助搬运行李。"], image: "/media/arrival-gates.webp" },
    ],
  },
  {
    schoolId: "haue", slug: "dorm", title: "宿舍与用电", shortTitle: "住进宿舍", stageId: "arrival", summary: "房型、床铺、洗浴、洗衣和断电规则集中说明。", keywords: ["上床下桌", "六人间", "空调", "洗澡", "洗衣机", "限电"], sourceIds: ["handbook-2026", "college-chat"],
    sections: [
      { id: "room", heading: "不同校区和楼栋差异明显", paragraphs: ["龙湖西区以六人间为主，也可能出现八人间等安排；龙湖南区以六人间上床下桌为主。具体房型和床位由学院、楼栋实际分配。"], bullets: ["常见床铺参考尺寸约0.9m × 2m", "床帘、床垫和收纳用品先核对实际尺寸", "夏季可准备除湿袋"], noteIds: ["dorm-difference"] },
      { id: "utilities", heading: "洗浴、洗衣与饮水多为扫码使用", paragraphs: ["宿舍楼内常见洗衣机、吹风机和饮水设备，可能使用 U净、胖乖生活、点点饮水等服务。到校后再根据楼栋设备下载。"], bullets: ["龙湖南区每层设公共洗浴单间", "冬季可能在23:30左右断电，夏季规则不同", "插排不得搭上床，保持消防通道和桌面整洁"], noteIds: ["power-note"] },
    ],
  },
  {
    schoolId: "haue", slug: "classes-training", title: "上课与军训", shortTitle: "军训上课", stageId: "first-week", summary: "两周军训、流动教室和大学课堂的基本节奏。", keywords: ["军训", "课表", "教室", "上课", "签到"], sourceIds: ["handbook-2026"],
    sections: [
      { id: "training", heading: "军训通常紧接报到开始", paragraphs: ["手册记录军训约两周，常见时段为上午8:00-12:00、下午14:00-18:00，具体会根据天气调整。"], bullets: ["军训服通常由学校统一组织购买，不含鞋子", "准备防晒、补水和常用药", "身体不适及时报告，不要硬撑"], image: "/media/campus-apps.webp" },
      { id: "classes", heading: "大学课堂会在不同教室流动", paragraphs: ["课表可在教务系统查看，未安排课程的时段通常可自由规划。座位一般先到先得，课堂纪律和平时成绩相关。"], bullets: ["提前查看楼号和教室", "学习通等平台常用于签到和作业", "不要依赖他人截图，确认自己的课表" ] },
    ],
  },
  {
    schoolId: "haue", slug: "major-change", title: "转专业", shortTitle: "考虑转专业", stageId: "campus-life", summary: "了解时间、成绩门槛、考试和沟通流程。", keywords: ["转专业", "成绩", "高数", "英语", "面试"], sourceIds: ["handbook-2026"],
    sections: [
      { id: "timeline", heading: "大一下学期开学前后关注通知", paragraphs: ["通常按大一上学期期末成绩进行申请。各学院公布接收人数，热门专业可能组织数学、英语考试和面试。"], bullets: ["尽早明确目标专业和理由", "保持原专业课程正常学习", "以当年转专业文件为唯一正式依据"], noteIds: ["major-change"] },
    ],
  },
  {
    schoolId: "haue", slug: "campus-run", title: "校园跑", shortTitle: "完成校园跑", stageId: "first-week", summary: "闪动校园、里程、配速与有效区域提醒。", keywords: ["闪动校园", "跑步", "公里", "体育课", "配速"], sourceIds: ["handbook-2026", "college-chat"],
    sections: [
      { id: "rules", heading: "先看本学期 App 内任务", paragraphs: ["手册记录校园跑与体育课同步，常用 App 为闪动校园，存在刷脸和有效区域限制。"], bullets: ["手册参考：男生80公里、女生60公里", "单次里程和配速需落在系统要求范围内", "不要代跑、科技刷跑或骑车进入操场"], noteIds: ["run-change"] },
    ],
  },
  {
    schoolId: "haue", slug: "financial-aid", title: "助学金申请", shortTitle: "准备资助材料", stageId: "before", summary: "提前整理家庭情况、收入和特殊困难证明。", keywords: ["助学金", "贫困", "申请表", "收入证明", "材料"], sourceIds: ["handbook-2026"],
    sections: [
      { id: "conditions", heading: "申请条件以当年资助通知为准", paragraphs: ["常见要求包括遵守校纪、学习表现、家庭经济困难认定和诚信记录。不同资助项目的条件并不完全相同。"], bullets: ["关注学生资助管理中心和学院通知", "不要使用往年模板直接提交", "对家庭情况如实说明" ] },
      { id: "materials", heading: "可能需要的证明材料", bullets: ["国家助学金申请审批表及本人签名", "家庭情况调查或困难认定材料", "家庭成员收入、低保、残疾、疾病或灾害等证明", "户口簿关系材料、生源地贷款回执等"], paragraphs: ["材料清单和盖章要求可能调整，出发前先准备原件、复印件和电子扫描件。"] },
    ],
  },
  {
    schoolId: "haue", slug: "vehicles", title: "校内车辆", shortTitle: "校内出行", stageId: "campus-life", summary: "车牌、停放、充电和校内接驳说明。", keywords: ["电动车", "自行车", "车牌", "充电", "小白车"], sourceIds: ["handbook-2026"],
    sections: [
      { id: "rules", heading: "校内车辆需要按规定登记", paragraphs: ["手册提示校内车辆需办理学校认可的车牌，并停放在划定区域。无牌或乱停车辆可能被清理。"], bullets: ["先确认当年是否开放新车登记", "只在指定充电桩充电", "龙湖校区可关注校内接驳车" ] },
    ],
  },
  {
    schoolId: "haue", slug: "party-youth", title: "入团与入党", shortTitle: "团籍党团", stageId: "before", summary: "团组织关系转接、申请与培养流程提示。", keywords: ["入团", "入党", "团籍", "智慧团建", "申请书"], sourceIds: ["handbook-2026"],
    sections: [
      { id: "league", heading: "已有团籍先做好转接准备", paragraphs: ["开学后通常由班级团支部统一说明智慧团建转接流程。未入团同学可关注后续发展名额和民主评议。"] },
      { id: "party", heading: "入党是持续培养过程", paragraphs: ["年满18周岁后可自愿提交申请，后续包括谈话、培养考察、党课和组织审查等环节。"], bullets: ["按时提交真实材料和思想汇报", "保持学习与日常表现", "具体程序咨询学院党组织" ] },
    ],
  },
  {
    schoolId: "haue", slug: "library", title: "图书馆与自习", shortTitle: "找地方学习", stageId: "first-week", summary: "图书馆、自习室、借阅和座位使用提醒。", keywords: ["图书馆", "自习室", "借书", "插座", "通宵"], sourceIds: ["handbook-2026", "college-chat"],
    sections: [
      { id: "spaces", heading: "中心图书馆是龙湖校区主要学习空间", paragraphs: ["学校图书馆由多个校区馆组成。龙湖中心图书馆位于西区，手册记录建筑共九层，配有空调、暖气和电梯。"], image: "/media/library-interior.webp" },
      { id: "rules", heading: "座位属于公共资源", bullets: ["按要求使用校园卡或身份凭证入馆", "不要长期占位或外放声音", "通宵自习安排存在不同反馈，按场馆实时开放时间为准"], image: "/media/library-exterior-b.webp" },
    ],
  },
  {
    schoolId: "haue", slug: "campus-card", title: "校园卡与校园网", shortTitle: "连接校园网", stageId: "arrival", summary: "手机卡、校园网络与办理安全提示。", keywords: ["校园卡", "校园网", "手机卡", "WiFi", "营业厅"], sourceIds: ["handbook-2026"],
    sections: [
      { id: "network", heading: "先确认套餐是否真正支持校园网", paragraphs: ["三家运营商可能都在校内提供业务。套餐价格、合约期、限速和校园网权限需要逐项确认，不要只听口头承诺。"], noteIds: ["card-sales"] },
      { id: "apps", heading: "常用生活与学习 App 到校后按需安装", paragraphs: ["手册列出 U净、胖乖生活、学习通、知到、WE Learn、PU口袋校园等。不同楼栋和课程使用情况不同。"], image: "/media/campus-apps.webp" },
    ],
  },
  {
    schoolId: "haue", slug: "food", title: "校内外吃饭", shortTitle: "吃饭外卖", stageId: "arrival", summary: "食堂、商超、校内配送和校外外卖取餐。", keywords: ["食堂", "外卖", "超市", "奶茶", "取餐"], sourceIds: ["handbook-2026", "college-chat"],
    sections: [
      { id: "canteen", heading: "龙湖南区和西区均有主要食堂", paragraphs: ["食堂和校内商铺提供多种选择，价格和口味以实际窗口为准。刚到校可以先熟悉离宿舍最近的食堂与营业时间。"], image: "/media/campus-food.webp" },
      { id: "delivery", heading: "校内配送与校外外卖取餐点不同", bullets: ["部分校内餐食可配送至宿舍楼下", "校外骑手通常只能送至校门或围栏取餐点", "夜间取餐注意门禁和个人安全" ] },
    ],
  },
  {
    schoolId: "haue", slug: "express", title: "快递站", shortTitle: "收发快递", stageId: "arrival", summary: "四个校区地址写法、驿站位置和暂存提醒。", keywords: ["快递", "菜鸟驿站", "顺丰", "地址", "取件"], sourceIds: ["handbook-2026"],
    sections: [
      { id: "address", heading: "校区名称一定写完整", paragraphs: ["龙湖南区、西区、桐柏路和南阳路的快递点并不相同。收件地址同时写清校区、学院、姓名和手机号。"], bullets: ["不要在正式报到时间尚未确认时过早寄件", "手册提示部分驿站暂存约四天，超期可能退回", "顺丰、邮政等可能有独立取件点" ] },
    ],
  },
  {
    schoolId: "haue", slug: "transport", title: "地铁与校外出行", shortTitle: "来校路线", stageId: "arrival", summary: "各校区地铁站、到校方式和周末去处。", keywords: ["地铁", "沙窝李", "双湖大道", "碧沙岗", "南阳新村", "二七"], sourceIds: ["handbook-2026"],
    sections: [
      { id: "metro", heading: "先按校区选择地铁线路", bullets: ["龙湖校区：城郊线沙窝李站或双湖大道站", "桐柏路校区：1号线碧沙岗站或5号线五一公园站", "南阳路校区：3号线南阳新村站或5号线沙口路站"], paragraphs: ["距离与换乘会受出口、行李和道路情况影响，出发前使用地图重新规划。"] },
      { id: "weekend", heading: "熟悉校园后再去看郑州", paragraphs: ["手册列出二七广场、锦艺城、华南城、河南博物院、方特和绿博园等去处。路线可能调整，出发前再次查询。"], image: "/media/zhengzhou-weekend.webp" },
    ],
  },
  {
    schoolId: "haue", slug: "tips", title: "河工利享的小提示", shortTitle: "打包清单", stageId: "before", summary: "报到必需品、可到校购买物品和防踩坑提醒。", keywords: ["行李", "证件", "床品", "电脑", "药品", "报到"], sourceIds: ["handbook-2026"],
    sections: [
      { id: "must", heading: "重要材料随身携带", bullets: ["录取通知书、身份证、银行卡和准考证", "档案袋、团员证及组织关系材料", "一寸、二寸证件照与电子版", "贷款回执和困难认定材料"], paragraphs: ["重要证件不要放在托运行李最底层。所有箱包贴上姓名、专业和手机号。"] },
      { id: "buy-later", heading: "大部分日用品可以到校再买", bullets: ["洗漱用品、衣架、桌垫和收纳盒", "文具、文件夹、台灯和普通生活用品", "电脑根据专业要求咨询后再决定配置"], paragraphs: ["军训服通常统一组织购买，不必提前网购不确定款式。"] },
    ],
  },
];

export const questions: QuestionAnswer[] = [
  { id: "q-desk", schoolId: "haue", question: "宿舍都是上床下桌吗？", answer: "不是。龙湖南区多为上床下桌，西区和其他校区会因楼栋、性别和年份出现上下铺或多人间。", campusIds: ["longhu-west", "longhu-south", "tongbai", "nanyang-road"], relatedTopicSlugs: ["dorm"], sourceId: "college-chat", asOf: "2026-06" },
  { id: "q-air", schoolId: "haue", question: "宿舍和教室有空调吗？", answer: "学生反馈普遍认为宿舍有制冷或空调设备，教室并未全部覆盖。实际开放时间和收费以楼栋通知为准。", relatedTopicSlugs: ["dorm", "classes-training"], sourceId: "college-chat", asOf: "2026-06" },
  { id: "q-bath", schoolId: "haue", question: "宿舍有独立卫浴吗？", answer: "多数反馈为没有寝室独立卫浴。龙湖南区常见楼层公共洗浴单间，其他校区可能使用楼层设施或公共浴室。", relatedTopicSlugs: ["dorm"], sourceId: "college-chat", asOf: "2026-06" },
  { id: "q-computer", schoolId: "haue", question: "大一可以带电脑吗？", answer: "可以，但不必盲目购买高配置电脑。先向本专业学长学姐或任课教师确认软件需求。", relatedTopicSlugs: ["tips", "classes-training"], sourceId: "college-chat", asOf: "2026-06" },
  { id: "q-delivery", schoolId: "haue", question: "可以点外卖吗？", answer: "可以。校内配送可能送到宿舍楼下，校外外卖通常在校门或围栏处领取。", relatedTopicSlugs: ["food"], sourceId: "college-chat", asOf: "2026-06" },
  { id: "q-gate", schoolId: "haue", question: "晚上几点门禁？", answer: "学生反馈多集中在23:00左右，但不同校区、宿舍楼和特殊时期可能调整。晚归前请联系宿管或辅导员。", relatedTopicSlugs: ["dorm"], sourceId: "college-chat", asOf: "2026-06" },
  { id: "q-internet", schoolId: "haue", question: "校园网怎么样？", answer: "多数反馈可满足日常学习，游戏和高峰时段体验存在差异。办理套餐前确认资费、合约和校园网权限。", relatedTopicSlugs: ["campus-card"], sourceId: "college-chat", asOf: "2026-06" },
  { id: "q-study", schoolId: "haue", question: "有通宵自习的地方吗？", answer: "现有学生反馈不一致，不能保证固定通宵空间。请查看图书馆和教学楼当日开放安排。", relatedTopicSlugs: ["library"], sourceId: "college-chat", asOf: "2026-06" },
];

export const checklist: ChecklistItem[] = [
  { id: "notice", schoolId: "haue", group: "证件材料", label: "录取通知书", required: true },
  { id: "id-card", schoolId: "haue", group: "证件材料", label: "身份证及复印件", required: true },
  { id: "archive", schoolId: "haue", group: "证件材料", label: "档案袋", detail: "保持密封，不自行拆封", required: true },
  { id: "photos", schoolId: "haue", group: "证件材料", label: "一寸、二寸照片和电子版" },
  { id: "league", schoolId: "haue", group: "证件材料", label: "团员证与组织关系材料" },
  { id: "loan", schoolId: "haue", group: "证件材料", label: "贷款回执或资助证明", detail: "仅需要者" },
  { id: "bedding", schoolId: "haue", group: "住宿生活", label: "床垫、床单、被褥", detail: "先参考0.9m × 2m，最终以实际床铺为准" },
  { id: "wash", schoolId: "haue", group: "住宿生活", label: "基础洗漱用品" },
  { id: "slippers", schoolId: "haue", group: "住宿生活", label: "拖鞋、衣架和晾晒用品" },
  { id: "power-strip", schoolId: "haue", group: "住宿生活", label: "合规插排", detail: "禁止搭上床" },
  { id: "wipes", schoolId: "haue", group: "住宿生活", label: "湿巾和抹布", detail: "报到当天清洁桌椅" },
  { id: "bag", schoolId: "haue", group: "学习电子", label: "上课用背包" },
  { id: "stationery", schoolId: "haue", group: "学习电子", label: "签字笔、铅笔、橡皮和笔记本" },
  { id: "phone-charger", schoolId: "haue", group: "学习电子", label: "手机、充电器和充电宝", required: true },
  { id: "usb", schoolId: "haue", group: "学习电子", label: "U盘或移动存储" },
  { id: "computer", schoolId: "haue", group: "学习电子", label: "电脑", detail: "根据专业需求决定，可稍后购买" },
  { id: "sunscreen", schoolId: "haue", group: "健康军训", label: "防晒用品" },
  { id: "medicine", schoolId: "haue", group: "健康军训", label: "个人常用药", detail: "感冒药、创可贴等按个人情况准备" },
  { id: "thermometer", schoolId: "haue", group: "健康军训", label: "体温计" },
  { id: "water", schoolId: "haue", group: "健康军训", label: "便携水杯", required: true },
];

export const sources: SourceReference[] = [
  { id: "handbook-2026", schoolId: "haue", title: "2026届新生开学手册 - 河工利享版", type: "handbook", attribution: "河工利享汇总组", asOf: "2026-07-22" },
  { id: "college-chat", schoolId: "haue", title: "大学生活质量指北：河南工程学院", type: "survey", url: "https://cn.colleges.chat/universities/he-nan-gong-cheng-xue-yuan/", attribution: "CollegesChat，CC BY-NC-SA 4.0；本站仅作归纳，不复制匿名回答全文", asOf: "2026-06-13" },
  { id: "official-reminder", schoolId: "haue", title: "河南工程学院当年通知", type: "official-reminder", attribution: "涉及报到、住宿、资助和教学安排时，以学校及学院最新通知为准", asOf: "2026" },
];

export function buildSearchRecords(schoolId = defaultSchoolId): SearchRecord[] {
  const topicRecords: SearchRecord[] = topics.filter((item) => item.schoolId === schoolId).map((item) => ({ id: `topic-${item.slug}`, schoolId, kind: "topic", title: item.title, summary: item.summary, href: `/guide/${item.slug}`, keywords: item.keywords }));
  const campusRecords: SearchRecord[] = campuses.filter((item) => item.schoolId === schoolId).map((item) => ({ id: `campus-${item.slug}`, schoolId, kind: "campus", title: item.name, summary: `${item.address}。${item.arrival}`, href: `/campuses/${item.slug}`, keywords: [item.shortName, item.address, ...item.transit] }));
  const questionRecords: SearchRecord[] = questions.filter((item) => item.schoolId === schoolId).map((item) => ({ id: item.id, schoolId, kind: "question", title: item.question, summary: item.answer, href: `/questions#${item.id}`, keywords: item.relatedTopicSlugs }));
  const checklistRecords: SearchRecord[] = checklist.filter((item) => item.schoolId === schoolId).map((item) => ({ id: `check-${item.id}`, schoolId, kind: "checklist", title: item.label, summary: item.detail ?? item.group, href: `/checklist#${item.id}`, keywords: [item.group] }));
  return [...topicRecords, ...campusRecords, ...questionRecords, ...checklistRecords];
}

export function getTopic(slug: string) {
  return topics.find((item) => item.schoolId === defaultSchoolId && item.slug === slug);
}

export function getCampus(slug: string) {
  return campuses.find((item) => item.schoolId === defaultSchoolId && item.slug === slug);
}
