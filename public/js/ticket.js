(function() {
    var station2telcode = { "北京北": "VAP", "北京": "BJP", "北京南": "VNP", "北京西": "BXP", "重庆北": "CUW", "重庆": "CQW", "上海": "SHH", "上海南": "SNH", "上海虹桥": "AOH", "上海西": "SXH", "天津北": "TBP", "天津": "TJP", "天津南": "TIP", "天津西": "TXP", "长春": "CCT", "成都东": "ICW", "成都": "CDW", "长沙": "CSQ", "长沙南": "CWQ", "福州": "FZS", "福州南": "FYS", "贵阳": "GIW", "广州北": "GBQ", "广州东": "GGQ", "广州": "GZQ", "广州南": "IZQ", "哈尔滨": "HBB", "哈尔滨东": "VBB", "合肥": "HFH", "合肥西": "HTH", "呼和浩特东": "NDC", "呼和浩特": "HHC", "海口东": "HMQ", "海口": "VUQ", "杭州": "HZH", "杭州南": "XHH", "济南": "JNK", "济南东": "JAK", "济南西": "JGK", "昆明": "KMM", "拉萨": "LSO", "兰州": "LZJ", "兰州西": "LAJ", "南昌": "NCG", "南京": "NJH", "南京南": "NKH", "南京西": "NIH", "南宁": "NNZ", "石家庄北": "VVP", "石家庄": "SJP", "沈阳": "SYT", "沈阳北": "SBT", "沈阳东": "SDT", "太原北": "TBV", "太原东": "TDV", "太原": "TYV", "武汉": "WHN", "乌鲁木齐": "WMR", "西安北": "EAY", "西安南": "CAY", "西安": "XAY", "西宁西": "XXO", "银川": "YIJ", "郑州": "ZZF", "安康": "AKY", "阿克苏": "ASR", "阿里河": "AHX", "安平": "APT", "安庆": "AQH", "鞍山": "AST", "安顺": "ASW", "安阳": "AYF", "北安": "BAB", "蚌埠": "BBH", "白城": "BCT", "北海": "BHZ", "白河": "BEL", "滨江": "BJB", "白涧": "BAP", "宝鸡": "BJY", "博克图": "BKX", "百色": "BIZ", "白山市": "HJL", "包头东": "BDC", "包头": "BTC", "北屯镇": "BXR", "本溪": "BXT", "白银西": "BXJ", "亳州": "BZH", "赤壁": "CBN", "承德": "CDP", "常德": "VGQ", "赤峰": "CFD", "苍南": "CEH", "昌图": "CTT", "楚雄": "COM", "曹县": "CXK", "长治北": "CBF", "长治": "CZF", "池州": "IYH", "郴州": "CZQ", "沧州": "COP", "常州": "CZH", "崇左": "CZZ", "大安北": "RNT", "丹东": "DUT", "东方红": "DFB", "东莞东": "DMQ", "大虎山": "DHD", "敦化": "DHL", "敦煌": "DHJ", "德惠": "DHT", "都江堰": "DDW", "大理": "DKM", "大连": "DLT", "定南": "DNG", "大庆": "DZX", "东胜": "DOC", "大石桥": "DQT", "大同": "DTV", "东营": "DPK", "大杨树": "DUX", "都匀": "RYW", "邓州": "DOF", "德州": "DZP", "达州": "RXW", "二连": "RLC", "恩施": "ESN", "福鼎": "FES", "风陵渡": "FLV", "涪陵": "FLW", "富拉尔基": "FRX", "抚顺北": "FET", "佛山": "FSQ", "阜新": "FXD", "阜阳": "FYH", "格尔木": "GRO", "广汉": "GHW", "桂林北": "GBZ", "桂林": "GLZ", "高崎": "XBS", "固始": "GXN", "广水": "GSN", "广元": "GYW", "赣州": "GZG", "公主岭": "GLT", "淮安": "AUH", "鹤北": "HMB", "淮北": "HRH", "淮滨": "HVN", "潢川": "KCN", "邯郸": "HDP", "横道河子": "HDB", "鹤岗": "HGB", "皇姑屯": "HTT", "红果": "HEM", "怀化": "HHQ", "汉口": "HKN", "葫芦岛": "HLD", "海拉尔": "HRX", "霍林郭勒": "HWD", "海伦": "HLB", "侯马": "HMV", "哈密": "HMR", "桦南": "HNB", "淮南": "HAH", "海宁西": "EUH", "怀柔北": "HBP", "怀柔": "HRP", "黄石东": "OSN", "黄山": "HKH", "华山": "HSY", "衡水": "HSP", "黄石": "HSN", "衡阳": "HYQ", "菏泽": "HIK", "贺州": "HXZ", "汉中": "HOY", "惠州": "HCQ", "吉安": "VAG", "晋城": "JCF", "金城江": "JJZ", "景德镇": "JCG", "井冈山": "JGG", "蛟河": "JHL", "金华南": "RNH", "金华西": "JBH", "九江": "JJG", "吉林": "JLL", "九龙": "JQO", "荆门": "JMN", "佳木斯": "JMB", "济宁": "JIK", "集宁南": "JAC", "酒泉": "JQJ", "吉首": "JIQ", "江山": "JUH", "九台": "JTL", "鸡西": "JXB", "绩溪县": "JRH", "嘉峪关": "JGJ", "江油": "JFW", "锦州": "JZD", "金州": "JZT", "库尔勒": "KLR", "开封": "KFF", "凯里": "KLW", "喀什": "KSR", "昆山南": "KNH", "奎屯": "KTR", "开原": "KYT", "六安": "UAH", "灵宝": "LBF", "芦潮港": "UCH", "陆川": "LKZ", "隆昌": "LCW", "利川": "LCN", "娄底": "LDQ", "临汾": "LFV", "临河": "LHC", "漯河": "LON", "隆化": "UHP", "龙井": "LJL", "丽江": "LHM", "龙家营": "LKP", "吕梁": "LHV", "醴陵": "LLG", "滦平": "UPP", "六盘水": "UMW", "灵丘": "LVV", "旅顺": "LST", "兰溪": "LWH", "澧县": "LEQ", "陇西": "LXJ", "龙岩": "LYS", "耒阳": "LYQ", "洛阳": "LYF", "连云港东": "UKH", "洛阳东": "LDF", "临沂": "LVK", "洛阳龙门": "LLF", "辽源": "LYL", "凌源": "LYD", "柳园": "DHR", "柳州": "LZZ", "辽中": "LZD", "麻城": "MCN", "免渡河": "MDX", "牡丹江": "MDB", "明光": "MGH", "漠河": "MVX", "茂名东": "MDQ", "茂名": "MMZ", "密山": "MSB", "麻尾": "VAW", "绵阳": "MYW", "梅州": "MOQ", "满洲里": "MLX", "宁波东": "NVH", "南岔": "NCB", "南充": "NCW", "南丹": "NDZ", "南芬": "NFT", "讷河": "NHX", "内江": "NJW", "嫩江": "NGX", "南平": "NPS", "南通": "NUH", "南阳": "NFF", "碾子山": "NZX", "平顶山": "PEN", "盘锦": "PVD", "平凉": "PIJ", "坪石": "PSQ", "凭祥": "PXZ", "萍乡": "PXG", "郫县西": "PCW", "攀枝花": "PRW", "蕲春": "QRN", "青城山": "QSW", "青岛": "QDK", "清河城": "QYP", "黔江": "QNW", "曲靖": "QJM", "齐齐哈尔": "QHX", "七台河": "QTB", "沁县": "QVV", "泉州东": "QRS", "衢州": "QEH", "泉州": "QYS", "融安": "RAZ", "瑞金": "RJG", "日照": "RZK", "双城堡": "SCB", "绥芬河": "SFB", "韶关东": "SGQ", "山海关": "SHD", "绥化": "SHB", "苏家屯": "SXT", "三明": "SMS", "三门峡": "SMF", "商南": "ONY", "遂宁": "NIW", "四平": "SPT", "商丘": "SQF", "上饶": "SRG", "宿松": "OAH", "汕头": "OTQ", "邵武": "SWS", "邵阳": "SYQ", "十堰": "SNN", "三亚": "SEQ", "双鸭山": "SSB", "松原": "VYT", "朔州": "SUV", "宿州": "OXH", "随州": "SZN", "苏州": "SZH", "深圳": "SZQ", "深圳西": "OSQ", "潼关": "TGY", "塘沽": "TGP", "塔河": "TXX", "通化": "THL", "泰来": "TLX", "吐鲁番": "TFR", "通辽": "TLD", "铁岭": "TLT", "陶赖昭": "TPT", "图们": "TML", "铜仁": "RDQ", "唐山北": "FUP", "天水": "TSJ", "泰山": "TAK", "唐山": "TSP", "通远堡": "TYT", "泰州": "UTH", "桐梓": "TZW", "通州西": "TAP", "武昌": "WCN", "瓦房店": "WDT", "威海": "WKK", "芜湖": "WHH", "乌海西": "WXC", "武隆": "WLW", "乌兰浩特": "WWT", "渭南": "WNY", "威舍": "WSM", "歪头山": "WIT", "武威": "WUJ", "武威南": "WWJ", "乌西": "WXR", "无锡": "WXH", "乌伊岭": "WPB", "武夷山": "WAS", "万源": "WYY", "梧州": "WZZ", "温州": "RZH", "万州": "WYW", "温州南": "VRH", "西昌": "ECW", "许昌": "XCF", "西昌南": "ENW", "香坊": "XFB", "轩岗": "XGV", "兴国": "EUG", "宣汉": "XHY", "新晃": "XLQ", "新会": "EFQ", "锡林浩特": "XTC", "兴隆县": "EXP", "厦门北": "XKS", "厦门": "XMS", "秀山": "ETW", "向塘": "XTG", "宣威": "XWM", "新乡": "XXF", "咸阳": "XYY", "信阳": "XUN", "襄阳": "XFN", "熊岳城": "XYT", "兴义": "XRZ", "新沂": "VIH", "新余": "XUG", "徐州": "XCH", "延安": "YWY", "宜宾": "YBW", "亚布力南": "YWB", "叶柏寿": "YBD", "宜昌东": "HAN", "运城": "YNV", "永川": "YCW", "宜昌": "YCN", "伊春": "YCB", "盐城": "AFH", "宜春": "YCG", "榆次": "YCV", "杨村": "YBP", "燕岗": "YGW", "延吉": "YJL", "永济": "YIV", "营口": "YKT", "牙克石": "YKX", "玉林": "YLZ", "榆林": "ALY", "一面坡": "YPB", "伊宁": "YMR", "阳平关": "YAY", "原平": "YPV", "玉屏": "YZW", "玉泉": "YQB", "玉山": "YNG", "营山": "NUW", "烟台": "YAK", "鹰潭": "YTG", "伊图里河": "YEX", "玉田县": "ATP", "义乌": "YWH", "义县": "YXD", "阳新": "YON", "益阳": "AEQ", "岳阳": "YYQ", "永州": "AOQ", "扬州": "YLH", "淄博": "ZBK", "自贡": "ZGW", "珠海北": "ZIQ", "湛江": "ZJZ", "镇江": "ZJH", "张家界": "DIQ", "张家口南": "ZMP", "周口": "ZKN", "扎兰屯": "ZTX", "驻马店": "ZDN", "肇庆": "ZVQ", "昭通": "ZDW", "中卫": "ZWJ", "资阳": "ZYW", "遵义": "ZIW", "资中": "ZZW", "株洲": "ZZQ", "枣庄": "ZEK", "枣庄西": "ZFK", "昂昂溪": "AAX", "阿城": "ACB", "安达": "ADX", "安多": "ADO", "安广": "AGT", "安化": "PKQ", "阿金": "AJD", "鳌江": "ARH", "安口窑": "AYY", "安陆": "ALN", "安庆西": "APH", "安亭北": "ASH", "阿图什": "ATR", "安图": "ATL", "安溪": "AXS", "博鳌": "BWQ", "蚌埠南": "BMH", "巴楚": "BCR", "北戴河": "BEP", "保定": "BDP", "巴东": "BNN", "柏果": "BGM", "白河东": "BIY", "贲红": "BVC", "宝华山": "BWH", "白河县": "BEY", "北滘": "IBQ", "碧江": "BLQ", "笔架山": "BSB", "保康": "BKD", "白奎堡": "BKB", "北流": "BOZ", "宝林": "BNB", "勃利": "BLB", "宝龙山": "BND", "八面城": "BMD", "八面通": "BMB", "北票南": "RPD", "宝泉岭": "BQB", "白沙": "BSW", "白石山": "BAL", "坂田": "BTQ", "泊头": "BZP", "博兴": "BXK", "八仙筒": "VXD", "白音胡硕": "BCD", "霸州": "RMP", "赤壁北": "CIN", "长冲": "CCM", "嵯岗": "CAX", "长葛": "CEF", "柴沟堡": "CGV", "城固": "CGY", "成高子": "CZB", "草海": "WBW", "册亨": "CHZ", "柴河": "CHB", "草河口": "CKT", "巢湖": "CIH", "蔡家沟": "CJT", "蔡家坡": "CJY", "沧口": "CKK", "昌乐": "CLK", "慈利": "CUQ", "昌黎": "CLP", "晨明": "CMB", "昌平北": "VBP", "长寿": "EFW", "苍石": "CST", "楚山": "CSB", "察素齐": "CSC", "长山屯": "CVT", "长汀": "CES", "春湾": "CQQ", "岑溪": "CNZ", "磁县": "CIP", "长兴": "CFH", "辰溪": "CXQ", "磁窑": "CYK", "朝阳": "CYD", "城阳": "CEK", "朝阳川": "CYL", "朝阳镇": "CZL", "滁州北": "CUH", "常州北": "ESH", "潮州": "CKQ", "滁州": "CXH", "郴州西": "ICQ", "沧州西": "CBP", "东安": "DAZ", "德安": "DAG", "到保": "RBT", "定边": "DYJ", "东边井": "DBB", "德昌": "DVW", "东方": "UFQ", "东丰": "DIL", "丹凤": "DGY", "大关": "RGW", "东光": "DGP", "东莞": "DAQ", "大红旗": "DQD", "东海县": "DQH", "东津": "DKB", "东来": "RVD", "德令哈": "DHO", "大林": "DLD", "带岭": "DLB", "达拉特旗": "DIC", "达拉特西": "DNC", "大平房": "DPD", "大埔": "DPI", "德清": "MOH", "道清": "DML", "对青山": "DQB", "独山": "RWW", "砀山": "DKH", "东升": "DRQ", "大石头": "DSL", "定陶": "DQK", "灯塔": "DGT", "东台": "DBH", "东通化": "DTL", "丹徒": "RUH", "东乡": "DXG", "代县": "DKV", "当雄": "DAO", "定西": "DSJ", "东辛庄": "DXD", "打羊": "RNW", "大雁": "DYX", "当阳": "DYN", "德阳": "DYW", "丹阳": "DYH", "丹阳北": "EXH", "大英东": "IAW", "岱岳": "RYV", "定远": "EWH", "大营镇": "DJP", "德州东": "DIP", "低庄": "DVQ", "东镇": "DNV", "道州": "DFZ", "东至": "DCH", "定州": "DXP", "峨边": "EBW", "二道湾": "RDX", "峨眉": "EMW", "鄂州": "ECN", "福安": "FAS", "丰城": "FCG", "丰城南": "FNG", "峰洞": "FDW", "肥东": "FIH", "福海": "FHR", "凤凰城": "FHT", "奉化": "FHH", "福利屯": "FTB", "阜南": "FNH", "抚宁": "FNP", "阜宁": "AKH", "福清": "FQS", "福泉": "VMW", "丰顺": "FUQ", "繁峙": "FSV", "富县东": "FDY", "凤县": "FXY", "费县": "FXK", "凤阳": "FUH", "汾阳": "FAV", "分宜": "FYG", "富裕": "FYX", "富源": "FYM", "扶余": "FYT", "凤州": "FZY", "丰镇": "FZC", "固安": "GFP", "广安": "VJW", "高碑店": "GBP", "沟帮子": "GBD", "藁城": "GEP", "谷城": "GCN", "古城镇": "GZB", "广德": "GRH", "贵定": "GTW", "贵定南": "IDW", "贵港": "GGZ", "葛根庙": "GGT", "甘谷": "GGJ", "甘河": "GAX", "古浪": "GLJ", "皋兰": "GEJ", "关林": "GLF", "甘洛": "VOW", "高密": "GMK", "高平": "GPF", "甘泉北": "GEY", "共青城": "GAG", "甘旗卡": "GQD", "赶水": "GSW", "高山子": "GSD", "高台": "GTJ", "古田": "GTS", "官厅": "GTP", "广通": "GOM", "贵溪": "GXG", "涡阳": "GYH", "巩义": "GXF", "高邑": "GIP", "巩义南": "GYF", "菇园": "GYL", "固原": "GUJ", "公营子": "GYD", "光泽": "GZS", "瓜州": "GZJ", "固镇": "GEH", "盖州": "GXT", "古镇": "GNQ", "冠豸山": "GSS", "红安": "HWN", "淮安南": "AMH", "海安县": "HIH", "红安西": "VXN", "海北": "HEB", "鹤壁": "HAF", "华城": "VCQ", "河唇": "HCZ", "海城": "HCT", "合川": "WKW", "黄村": "HCP", "化德": "HGC", "洪洞": "HDV", "哈尔盖": "HRJ", "横峰": "HFG", "红光镇": "IGW", "和静": "HJR", "获嘉": "HJF", "涵江": "HJS", "河口南": "HKJ", "黄口": "KOH", "湖口": "HKG", "呼兰": "HUB", "葫芦岛北": "HPD", "哈拉海": "HIT", "浩良河": "HHB", "虎林": "VLB", "海林": "HRB", "鹤立": "HOB", "桦林": "HIB", "和龙": "HLL", "黄梅": "VEH", "蛤蟆塘": "HMT", "黄泥河": "HHL", "海宁": "HNH", "惠农": "HMJ", "和平": "VAQ", "花桥": "VQH", "怀仁": "HRV", "华容": "HRN", "华山北": "HDY", "黄松甸": "HDL", "和什托洛盖": "VSR", "汉寿": "VSQ", "红山": "VSB", "衡山": "HSQ", "黑水": "HOT", "惠山": "VCH", "海石湾": "HSO", "衡山西": "HEQ", "桓台": "VTK", "黑台": "HQB", "会同": "VTQ", "海湾": "RWH", "红星": "VXB", "徽县": "HYY", "红彦": "VIX", "河阳": "IOW", "海阳": "HYK", "衡阳东": "HVQ", "华蓥": "HUW", "汉阴": "HQY", "汉源": "WHW", "湟源": "HNO", "花园": "HUN", "河源": "VIQ", "霍州": "HZV", "黄州": "VON", "惠州西": "VXQ", "靖边": "JIY", "金宝屯": "JBD", "鄄城": "JCK", "金昌": "JCJ", "峻德": "JDB", "鸡东": "JOB", "江都": "UDH", "静海": "JHP", "精河": "JHR", "精河南": "JIR", "江华": "JHZ", "建湖": "AJH", "纪家沟": "VJD", "江津": "JJW", "姜家": "JJB", "晋江": "JJS", "金坑": "JKT", "江门": "JWQ", "莒南": "JOK", "建瓯": "JVS", "江桥": "JQX", "九三": "SSX", "金山北": "EGH", "嘉善": "JSH", "京山": "JCN", "建始": "JRN", "嘉善南": "EAH", "金山屯": "JTB", "劲涛": "JTX", "景泰": "JTJ", "吉文": "JWX", "介休": "JXV", "嘉祥": "JUK", "进贤": "JUG", "莒县": "JKK", "嘉兴": "JXH", "嘉兴南": "EPH", "姜堰": "UEH", "简阳": "JYW", "建阳": "JYS", "揭阳": "JRQ", "巨野": "JYK", "江永": "JYZ", "江源": "SZL", "缙云": "JYH", "济源": "JYF", "胶州北": "JZK", "焦作东": "WEF", "晋州": "JXP", "胶州": "JXK", "靖州": "JEQ", "金寨": "JZH", "锦州南": "JOD", "焦作": "JOF", "旧庄窝": "JVP", "开安": "KAT", "库车": "KCR", "库都尔": "KDX", "康金井": "KJB", "克拉玛依": "KHR", "口前": "KQL", "奎山": "KAB", "昆山": "KSH", "开通": "KTT", "克一河": "KHX", "康庄": "KZP", "老边": "LLT", "来宾": "UBZ", "灵宝西": "LPF", "龙川": "LUQ", "乐昌": "LCQ", "聊城": "UCK", "蓝村": "LCK", "乐都": "LDO", "廊坊": "LJP", "廊坊北": "LFP", "禄丰": "LFM", "拉哈": "LHX", "凌海": "JID", "临海": "UFH", "柳河": "LNL", "六合": "KLH", "六合镇": "LEX", "刘家河": "LVT", "两家": "UJT", "庐江": "UJH", "廉江": "LJZ", "龙江": "LJX", "罗江": "LJW", "连江": "LKS", "莲江口": "LHB", "兰考": "LKF", "林口": "LKB", "路口铺": "LKQ", "老莱": "LAX", "零陵": "UWZ", "临澧": "LWQ", "兰棱": "LLB", "龙里": "LLW", "卢龙": "UAP", "里木店": "LMB", "龙南": "UNG", "梁平": "UQW", "罗平": "LPM", "乐平市": "LPG", "临清": "UQK", "冷水江东": "UDQ", "连山关": "LGT", "乐山": "UTW", "丽水": "USH", "露水河": "LUL", "灵石": "LSV", "罗山": "LRN", "梁山": "LMK", "鲁山": "LAF", "庐山": "LSG", "陵水": "LIQ", "林盛堡": "LBT", "梨树镇": "LSB", "芦台": "LTP", "轮台": "LAR", "黎塘": "LTZ", "灵武": "LNJ", "陇县": "LXY", "临湘": "LXQ", "莱西": "LXK", "朗乡": "LXB", "芦溪": "LUG", "滦县": "UXP", "莱阳": "LYK", "略阳": "LYY", "辽阳": "LYT", "临沂北": "UYK", "连云港": "UIH", "老营": "LXL", "临颍": "LNF", "龙游": "LMH", "涞源": "LYP", "涟源": "LAQ", "罗源": "LVS", "耒阳西": "LPQ", "临泽": "LEJ", "雷州": "UAQ", "来舟": "LZS", "龙镇": "LZA", "鹿寨": "LIZ", "六枝": "LIW", "马鞍山": "MAH", "麻城北": "MBN", "明城": "MCL", "渑池": "MCF", "渑池南": "MNF", "弥渡": "MDF", "帽儿山": "MRB", "明港": "MGN", "梅河口": "MHL", "孟家岗": "MGB", "美兰": "MHQ", "汨罗东": "MQQ", "穆棱": "MLB", "马林": "MID", "汨罗": "MLQ", "木里图": "MUD", "冕宁": "UGW", "沐滂": "MPQ", "马桥河": "MQB", "闽清": "MQS", "民权": "MQF", "眉山": "MSW", "麻山": "MAB", "庙台子": "MZB", "孟溪": "MZQ", "勉县": "MVY", "美溪": "MEB", "麻阳": "MVQ", "米易": "MMW", "麦园": "MYS", "米脂": "MEY", "农安": "NAT", "南安": "NAS", "宁德": "NES", "南宫东": "NFP", "宁国": "NNH", "宁海": "NHH", "南华": "NHS", "宁家": "NVT", "能家": "NJD", "南口": "NKP", "南口前": "NKT", "南朗": "NNQ", "乃林": "NLD", "尼勒克": "NIR", "宁陵县": "NLF", "奈曼": "NMD", "南平南": "NNS", "那曲": "NQO", "南台": "NTT", "宁武": "NWV", "南翔北": "NEH", "宁乡": "NXQ", "内乡": "NXF", "南召": "NAF", "南杂木": "NZT", "蓬安": "PAW", "平安驿": "PNO", "蒲城东": "PEY", "裴德": "PDB", "平顶山西": "BFF", "平果": "PGZ", "盘锦北": "PBD", "普兰店": "PLT", "彭山": "PSW", "磐石": "PSL", "平山": "PSB", "彭水": "PHW", "平台": "PVT", "莆田": "PTS", "普雄": "POW", "蓬溪": "KZW", "平遥": "PYV", "平邑": "PIK", "平原": "PYK", "彭泽": "PZG", "平庄": "PZD", "邳州": "PJH", "泡子": "POD", "迁安": "QQP", "庆安": "QAB", "祁东": "QRQ", "曲阜东": "QAK", "曲阜": "QFK", "琼海": "QYQ", "清河门": "QHD", "綦江": "QJW", "全椒": "INH", "祁家堡": "QBT", "清涧县": "QNY", "青龙山": "QGH", "祁门": "QIH", "确山": "QSN", "青山": "QSB", "清水": "QUJ", "戚墅堰": "QYH", "青田": "QVH", "青铜峡": "QTJ", "祁县": "QXV", "青县": "QXP", "淇县": "QXF", "渠县": "QRW", "泉阳": "QYL", "祁阳": "QVQ", "清原": "QYT", "清远": "QBQ", "钦州东": "QDZ", "全州": "QZZ", "青州市": "QZK", "瑞安": "RAH", "荣昌": "RCW", "瑞昌": "RCG", "如皋": "RBH", "容桂": "RUQ", "任丘": "RQP", "乳山": "ROK", "融水": "RSZ", "容县": "RXZ", "汝阳": "RYF", "饶阳": "RVP", "绕阳河": "RHD", "汝州": "ROF", "施秉": "AQW", "商城": "SWN", "顺昌": "SCS", "沙城": "SCP", "舒城": "OCH", "山城镇": "SCL", "山丹": "SDJ", "绥德": "ODY", "顺德": "ORQ", "邵东": "SOQ", "水洞": "SIL", "商都": "SXC", "绅坊": "OLH", "四方台": "STB", "水富": "OTW", "桑根达来": "OGC", "韶关": "SNQ", "上杭": "JBS", "沙河市": "VOP", "三河县": "OXP", "四合永": "OHD", "石河子": "SZR", "三家店": "ODP", "松江河": "SJL", "沈家": "OJB", "松江": "SAH", "三江口": "SKD", "松江南": "IMH", "三江县": "SOZ", "松江镇": "OZL", "疏勒河": "SHJ", "石岭": "SOL", "石林": "SLM", "绥棱": "SIB", "石龙": "SLQ", "萨拉齐": "SLC", "商洛": "OLY", "三门峡南": "SCF", "三门峡西": "SXF", "石门县": "OMQ", "三门县": "OQH", "肃宁": "SYP", "宋": "SOB", "双牌": "SBZ", "遂平": "SON", "商丘南": "SPF", "石泉县": "SXY", "石桥子": "SQT", "石人城": "SRB", "神树": "SWB", "山市": "SQB", "三水": "SJQ", "松树": "SFT", "泗水": "OSK", "鄯善": "SSR", "三十里堡": "SST", "松树镇": "SSL", "沙湾县": "SXR", "遂溪": "SXZ", "沙县": "SAS", "歙县": "OVH", "绍兴": "SOH", "绥阳": "SYB", "沭阳": "FMH", "三源浦": "SYL", "上园": "SUD", "上虞": "BDH", "绥中北": "SND", "苏州北": "OHH", "宿州东": "SRH", "尚志": "SZB", "深州": "OZP", "绥中": "SZD", "松滋": "SIN", "师宗": "SEM", "苏州新区": "ITH", "苏州园区": "KAH", "石嘴山": "SZJ", "台安": "TID", "泰安": "TMK", "桐柏": "TBF", "通北": "TBB", "郯城": "TZK", "桐城": "TTH", "汤池": "TCX", "桃村": "TCK", "通道": "TRQ", "田东": "TDZ", "天岗": "TGL", "太谷": "TGV", "泰和": "THG", "唐河": "THF", "太湖": "TKH", "团结": "TIX", "泰康": "TKX", "图里河": "TEX", "铁力": "TLB", "铜陵": "TJH", "天门": "TMN", "太姥山": "TLS", "洮南": "TVT", "潼南": "TVW", "太平川": "TIT", "太平镇": "TEB", "台前": "TTK", "图强": "TQX", "汤山城": "TCT", "桃山": "TAB", "汤旺河": "THB", "同心": "TXJ", "土溪": "TSW", "桐乡": "TCH", "田阳": "TRZ", "汤阴": "TYF", "天义": "TND", "驼腰岭": "TIL", "汤原": "TYB", "滕州东": "TEK", "天镇": "TZV", "天祝": "TZJ", "滕州": "TXK", "台州": "TZH", "桐子林": "TEW", "天柱山": "QWH", "文安": "WBP", "文昌": "WEQ", "五大连池": "WRB", "文登": "WBK", "五道沟": "WDL", "文地": "WNZ", "卫东": "WVT", "武当山": "WRN", "望都": "WDP", "乌尔旗汗": "WHX", "潍坊": "WFK", "王府": "WUT", "湾沟": "WGL", "乌海": "WVC", "苇河": "WHB", "卫辉": "WHF", "倭肯": "WQB", "五龙背": "WBT", "瓦拉干": "WVX", "五莲": "WLK", "温岭": "VHH", "卧里屯": "WLX", "渭南北": "WBY", "万年": "WWG", "万宁": "WNQ", "吴堡": "WUY", "吴桥": "WUP", "武清": "WWP", "武山": "WSJ", "文水": "WEV", "五台山": "WSV", "五五": "WVR", "无锡东": "WGH", "闻喜": "WXV", "武乡": "WVV", "卫星": "WVB", "无锡新区": "IFH", "武穴": "WXN", "五营": "WWB", "苇子沟": "WZL", "王兆屯": "WZB", "兴安": "XAZ", "新安县": "XAF", "宣城": "ECH", "兴城": "XCD", "下城子": "XCB", "喜德": "EDW", "小东": "XOD", "息烽": "XFW", "襄汾": "XFV", "信丰": "EFG", "新干": "EGG", "孝感": "XGN", "襄河": "XXB", "新和": "XIR", "宣化": "XHP", "新华": "XHB", "新化": "EHQ", "兴和西": "XEC", "下花园": "XYP", "小河镇": "EKY", "辛集": "ENP", "许家屯": "XJT", "香兰": "XNB", "星朗": "ELW", "小榄": "EAQ", "兴隆店": "XDD", "新乐": "ELP", "西林": "XYB", "新林": "XPX", "小岭": "XLB", "西柳": "GCT", "仙林": "XPH", "新立屯": "XLD", "兴隆镇": "XZB", "新民": "XMD", "西麻山": "XMB", "下马塘": "XAT", "咸宁北": "XRN", "咸宁": "XNN", "兴宁": "ENQ", "西平": "XPN", "溆浦": "EPQ", "霞浦": "XOS", "犀浦": "XIW", "新邱": "XQD", "新青": "XQB", "仙人桥": "XRL", "浠水": "XZN", "徐水": "XSP", "杏树": "XSB", "邢台": "XTP", "锡铁山": "XRO", "徐闻": "XJQ", "新县": "XSN", "西乡": "XQY", "西峡": "XIF", "息县": "ENN", "新兴县": "XGQ", "旬阳": "XUY", "向阳": "XDB", "旬阳北": "XBY", "兴业": "SNZ", "信宜": "EEQ", "小扬气": "XYX", "祥云": "EXM", "夏邑县": "EJH", "徐州东": "UUH", "新帐房": "XZX", "忻州": "XXV", "学庄": "EZW", "永安": "YAS", "姚安": "YAC", "永安乡": "YNB", "亚布力": "YBB", "元宝山": "YUD", "迎春": "YYB", "郓城": "YPK", "宜城": "YIN", "晏城": "YEK", "禹城": "YCK", "盐池": "YKJ", "阳春": "YQQ", "阳澄湖": "AIH", "虞城县": "IXH", "永登": "YDJ", "英德": "YDQ", "永定": "YGS", "雁荡山": "YGH", "于都": "YDG", "永福": "YFZ", "杨岗": "YRB", "阳高": "YOV", "阳谷": "YIK", "友好": "YOB", "余杭": "EVH", "余江": "YHG", "叶集": "YCH", "盐津": "AEW", "燕郊": "AJP", "永嘉": "URH", "永康": "RFH", "永郎": "YLW", "伊林": "YLB", "彝良": "ALW", "杨柳青": "YQP", "亚龙湾": "TWQ", "杨陵镇": "YSY", "义马": "YMF", "云梦": "YMN", "元谋": "YMM", "一面山": "YST", "玉门镇": "YXJ", "沂南": "YNK", "阳泉北": "YPP", "焉耆": "YSR", "乐清": "UPH", "颍上": "YVH", "沂水": "YUK", "榆社": "YSV", "元氏": "YSP", "偃师": "YSF", "月山": "YBF", "源潭": "YTQ", "牙屯堡": "YTZ", "烟筒山": "YSL", "烟筒屯": "YUX", "越西": "YHW", "永修": "ACG", "酉阳": "AFW", "余姚": "YYH", "弋阳东": "YIG", "岳阳东": "YIQ", "鸭园": "YYL", "宜州": "YSZ", "仪征": "UZH", "兖州": "YZK", "镇安": "ZEY", "诸城": "ZQK", "子长": "ZHY", "枝城": "ZCN", "邹城": "ZIK", "章党": "ZHT", "肇东": "ZDB", "章古台": "ZGD", "赵光": "ZGB", "中和": "ZHX", "中华门": "VNH", "朱家沟": "ZUB", "诸暨": "ZDH", "镇江南": "ZEH", "周家屯": "ZOD", "郑家屯": "ZJD", "湛江西": "ZWQ", "镇赉": "ZLT", "扎鲁特": "ZLD", "扎赉诺尔西": "ZXX", "樟木头": "ZOQ", "中牟": "ZGF", "中宁": "VNJ", "漳平": "ZPS", "镇平": "ZPF", "枣强": "ZVP", "张桥": "ZQY", "章丘": "ZTK", "朱日和": "ZRC", "中山北": "ZGQ", "樟树东": "ZOG", "钟山": "ZSZ", "柞水": "ZSY", "樟树": "ZSG", "中山": "ZSQ", "朱石寨": "ZVW", "珠窝": "ZOP", "彰武": "ZWD", "资溪": "ZXS", "镇西": "ZVT", "钟祥": "ZTN", "正镶白旗": "ZXC", "枣阳": "ZYN", "紫阳": "ZVY", "竹园坝": "ZAW", "张掖": "ZYJ", "镇远": "ZUW", "朱杨溪": "ZXW", "漳州东": "GOS", "子洲": "ZZY", "涿州": "ZXP", "卓资山": "ZZC", "株洲西": "ZAQ" };

if (typeof window.my12306 != 'undefined') { return 0; }
var host = 'http://my12306.3322.org/'; 

window.my12306 = function() {};
var my12306 = window.my12306;
var voice = function(text) {
    url = 'http://translate.google.cn/translate_tts?ie=UTF-8&q='+encodeURI(text)+'&tl=zh-CN&prev=input'
    var id = window.open(url);
    var close = function() {
        id.close();
    }
    setTimeout(close, 10000);

};

var   url_12306 = {
      init: 'https://dynamic.12306.cn/otsweb/loginAction.do?method=init',
      captcha_login: 'https://dynamic.12306.cn/otsweb/passCodeAction.do?rand=lrand',
      login: 'https://dynamic.12306.cn/otsweb/loginAction.do?method=login',
      ticket_confirm: 'https://dynamic.12306.cn/otsweb/order/querySingleAction.do?method=submutOrderRequest',
      captcha_order: 'https://dynamic.12306.cn/otsweb/passCodeAction.do?rand=randp',
      order: 'https://dynamic.12306.cn/otsweb/order/confirmPassengerAction.do?method=confirmPassengerInfoSingle',
      register12306: 'https://dynamic.12306.cn/otsweb/registAction.do?method=regitNote',
      contacts: 'https://dynamic.12306.cn/otsweb/passengerAction.do?method=queryPagePassenger',
      tickets: 'https://dynamic.12306.cn/otsweb/order/querySingleAction.do?method=queryLeftTicket',
      test_login: 'https://dynamic.12306.cn/otsweb/order/querySingleAction.do?method=init'
    };

my12306.init = function() {
    function appendRequire(src) {
        var s = d.createElement('script');
        s.setAttribute('src', src);
        s.onload = onload;
        b.appendChild(s);
        cnt++;
    }
    function onload() {
        while(--cnt) { return; }
        self.start();
    }
    var self = this;
    var d = document;
    var cnt = 0;
    var b = d.body;
    if (typeof $ == 'undefined') {
      appendRequire(host+'js/jquery-1.7.1.min.js');
    }
    else {
        self.start();
    }
};

my12306.initWidget = function() {
    var d = document;
    var widget = d.createElement('div');
    widget.id = 'login.widget';
    with (widget.style) {
        position = 'fixed';
        _position = 'absolute';
        top = self.pageYOffset + 'px';
        right = '0px';
        width = '400px';
        height = '400px';
        zIndex = 9999;
        border = '1px solid';
        background = '#FFFFFF';
    }
    html = ''
    html += '<div id="login">'
    html += '<div id="form">'
    html += '<p>发站</p>'
    html += '<input id="departure" value="'+localStorage.getItem('departure') +'"/>'
    html += '<p>到站</p>'
    html += '<input id="arrival" value="'+localStorage.getItem('arrival') +'"/>'
    html += '<p>日期</p>'
    html += '<input id="date" value="'+localStorage.getItem('date') +'"/>'
    html += '<p>车次</p>'
    html += '<input id="traincode" value="'+localStorage.getItem('traincode') +'"/>'
    html += '</div>'
    //html += '<button onclick="javascript:window.my12306.tickets()" class="ui-btn-inner">查询余票</button></div>'
    html += '<p>验证码</p>'
    html += '<input id="randCode"/>'
    html += '<img src="https://dynamic.12306.cn/otsweb/passCodeAction.do?rand=randp") />'
    html += '<p>联系人</p>'
    html += '<input id="name" value="'+localStorage.getItem('name') +'"/>'
    html += '<p><div id="note"></div></p>'
    html += '<button onclick="javascript:window.my12306.tickets()" class="ui-btn-inner">购买</button></div>'

    widget.innerHTML = html;
    d.body.appendChild(widget);
    self.widget = widget;
};

my12306.initAds = function() {
    var d = document;
    var widget = d.createElement('script');
    html = '<!-- google_ad_client = "ca-pub-3245882208923712"; /* 12306 */ google_ad_slot = "3639479334"; google_ad_width = 300; google_ad_height = 250; //-->'
    widget.innerHTML = html;
    d.body.appendChild(widget);

    widget = d.createElement('script');
    widget.src = "http://pagead2.googlesyndication.com/pagead/show_ads.js";
    d.body.appendChild(widget);
};

my12306.initAnalytic = function() {
    var d = document;
    var widget = d.createElement('script');
    html = "var _gaq = _gaq || []; _gaq.push(['_setAccount', 'UA-28099562-1']); _gaq.push(['_trackPageview']); (function() { var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })(); "
    widget.innerHTML = html;
    d.body.appendChild(widget);
    self.widget = widget;
};


my12306.start = function() {
    var self = this;
    self.initWidget();
    self.initAds();
    self.initAnalytic();
    voice('启动');
};


my12306.tickets = function() {
    var traincode = $('#traincode').val();
    localStorage.setItem('traincode',traincode);
    var departure = $('#departure').val();
    localStorage.setItem('departure',departure);
    var arrival = $('#arrival').val();
    localStorage.setItem('arrival',arrival);
    var date = $('#date').val();
    localStorage.setItem('date',date);
    var name = $('#name').val();
    localStorage.setItem('name',name);
    var retry = function() {
        $('#note').html('重试');
        return window.my12306.tickets();
    };
        var data;
        data = {
          'orderRequest.train_date': date,
          'orderRequest.from_station_telecode': station2telcode[departure],
          'orderRequest.to_station_telecode': station2telcode[arrival],
          'orderRequest.train_no': '',
          'trainPassType': 'QB',
          'trainClass': 'QB#D#Z#T#K#QT#',
          'includeStudent': '00',
          'seatTypeAndNum': '',
          'orderRequest.start_time_str': '00:00--24:00'
        };
        return $.ajax({
          url: url_12306.tickets,
          data: data,
          error: function() {
            return window.my12306.error(url_12306.tickets, callback);
          },
          success: function(html) {
            var l, order_str, orders, piao, sk_key, ticket;
            var train = '';
            html.split('\\n').map(function(t) {
                if (t.match(">"+traincode+"<")) {
                    train = t;
                    //console.log('got:'+t);
                }
            });
            html = train;
            if (!html.match(/getSelected/)) {
                
              $('#note').html('无票(10秒后重试)');
              return setTimeout(retry, 10000);
            }

            sk_key = html.match(/onStopHover\('([^']*)'\)/)[1];
            order_str = html.match(/getSelected\('([^']*)'\)/)[1];
            orders = order_str.split('#');
            data = html.replace(/<br>/g, '/').replace(/&nbsp;/g, '').replace(/<[^>]*>/g, '');
            //console.log(html);
            //console.log(data);
            //console.log(orders);
            l = data.split(',');
            //console.log(l);
            piao = {
              '--': -1,
              '有': 21,
              '无': 0
            };
            ticket = {
              'tc': l[1],
              'ori': l[2].split('/')[0],
              'des': l[3].split('/')[0],
              'ori_time': l[2].split('/')[1],
              'des_time': l[3].split('/')[1],
              'dur_time': l[4],
              'SW': piao[l[5]],
              'TD': piao[l[6]],
              'D1': piao[l[7]],
              'D2': piao[l[8]],
              'GR': piao[l[9]],
              'RW': piao[l[10]],
              'YW': piao[l[11]],
              'RZ': piao[l[12]],
              'YZ': piao[l[13]],
              'WZ': piao[l[14]],
              'QT': piao[l[15]],
              'sk_key': sk_key,
              'order_str': order_str,
              'lishi': orders[1],
              'train_start_time': orders[2],
              'station_train_code': orders[3],
              'train_no': orders[3],
              'ori_telcode': orders[4],
              'des_telcode': orders[5],
              'date': date,
              traincode: traincode,
              ypInfoDetail: orders[9],
            };
            my12306.ticket_confirm(ticket);
          }
        });
      };

var dateToStr = function(time) {
    var date, month, year;
    if (typeof time === 'string') return time;
    year = time.getFullYear();
    month = time.getMonth() + 1;
    if (month < 10) month = '0' + month;
    date = time.getDate();
    if (date < 10) date = '0' + date;
    return year + '-' + month + '-' + date;
};
my12306.ticket_confirm = function(ticket, callback) {
        var data;
        data = {
          'station_train_code': ticket.traincode, //ticket['station_train_code'],
          'train_date': ticket['date'],
          'seattype_num': '',
          'from_station_telecode': ticket['ori_telcode'],
          'to_station_telecode': ticket['des_telcode'],
          'include_student': '00',
          'from_station_telecode_name': ticket['ori'],
          'to_station_telecode_name': ticket['des'],
          'round_train_date': dateToStr(new Date()),
          'round_start_time_str': '00:00--24:00',
          'single_round_type': '1',
          'train_pass_type': 'QB',
          'train_class_arr': 'QB#D#Z#T#K#QT#',
          'start_time_str': '00:00--24:00',
          'lishi': ticket['lishi'],
          'train_start_time': ticket['train_start_time'],
          'arrive_time': ticket.des_time,
          'from_station_name': ticket.ori,
          'to_station_name': ticket.des,
          'ypInfoDetail': ticket.ypInfoDetail
        };
        return $.ajax({
          url: url_12306.ticket_confirm,
          data: data,
          type: 'POST',
          error: function() {
            return window.my12306.error(url_12306.ticket_confirm, callback);
          },
          success: function(html) {
            var flag, retry;
            //console.log(html);
            data = html.split('\n');
            flag = false;
            data.map(function(l) {
              if (l.match('succde_fault')) {
                //console.log(l);
                return flag = true;
              }
            });
            if (flag) {
              retry = function() {
                return window.my12306.ticket_confirm(ticket, callback);
              };
              setTimeout(retry, 10000);
              if (callback) return callback(false);
            }
            my12306.html = html;
            my12306.ticket = ticket;
            //alert('成功。输入验证码和姓名后点击购买');
            my12306.order()
          }
        });
      };

my12306.order = function() {
    var retry = function() {
        $('#note').html('重试');
        return window.my12306.tickets();
    };
    var randCode = $('#randCode').val();
    var name = $('#name').val();
    localStorage.setItem('name',name);
    html = my12306.html;
    passenger = html.match(/var passengerJson[^;]*;/)[0];
    //console.log(passenger);
    eval(passenger);
    //console.log(passengerJson);
    user = null;
    passengerJson.map(function(u) {
        if (u.passenger_name === name) {
            //console.log(u)
            user = u;
        }
    });
    var d, data, param, params, _i, _len;
    data = {};
    data['org.apache.struts.taglib.html.TOKEN'] = html.match('name="org\.apache\.struts\.taglib\.html\.TOKEN" value="([^>]*)">')[1];
    //console.log(data['org.apache.struts.taglib.html.TOKEN']);
    params = html.match(/<input type="hidden" name="(orderRequest.[^"]*)" value="([^"]*)" id=".*?">/g);
    //console.log(params);
    for (_i = 0, _len = params.length; _i < _len; _i++) {
        param = params[_i];
        d = param.match(/<input type="hidden" name="(orderRequest.[^"]*)" value="([^"]*)" id=".*?">/);
        data[d[1]] = d[2];
    }
    data['randCode'] = randCode;
    data['passengerTickets'] = "3,1," + user.passenger_name + ",1," + user.passenger_id_no + "," + user.mobile_no + ",N";
    data['orderRequest.reserve_flag'] = 'A';
    data['orderRequest.train_no'] = my12306.ticket['train_no'];
    data.passenger_1_ticket = 1
    data.passenger_1_name = user.passenger_name
    data.passenger_1_cardtype = 1
    data.passenger_1_cardno = user.passenger_id_no
    data.passenger_1_mobileno = user.mobile_no        
    data.passenger_1_seat = 1
    //console.log(data);
    return $.ajax({
        url: url_12306.order,
           data: data,
           type: 'POST',
           error: function() {
               return window.my12306.error(url_12306.ticket_confirm, callback);
           }, 
           success: function(data) {
                        var line, useful_lines, _j, _len2, _ref;
                        useful_lines = [];
                        _ref = data.split('\n');
                        for (_j = 0, _len2 = _ref.length; _j < _len2; _j++) {
                            line = _ref[_j];
                            if (line.match(/var.*message/) || line.match(/var.*isLogin/)) {
                                //console.log(line);
                                useful_lines.push(line);
                            }
                        }
                        if (useful_lines.length === 0)  {
                            $('#note').html('出错(10秒后重试)');
                            return setTimeout(retry, 10000);
                        }
                        eval(useful_lines.join('\n'));
                        if (message.length || messageShow.length) {
                            $('#note').html(message+messageShow);
                            return setTimeout(retry, 10000);
                        }
                        var flag = false;
                        for (_j = 0, _len2 = _ref.length; _j < _len2; _j++) {
                            l = _ref[_j];
                            if (l.match('succde_fault')) {
                                //console.log(l);
                                return flag = true;
                            }
                        }
                        if (flag) {
                            $('#note').html('系统忙');
                            return setTimeout(retry, 10000);
                        }

                        return alert('购票成功，赶紧付款');}
    });

};
my12306.init();
})()
