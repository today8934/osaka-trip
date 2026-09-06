export type Place={name:string;jp:string;kind:string;coords:[number,number];address:string;description:string;hours?:string;source?:string};
export type Stop={id:string;place:string;label:string;time:string;summary:string;transfer?:string;mode?:string;note?:string};
export const places:Record<string,Place>={
airport:{name:'간사이국제공항',jp:'関西国際空港',kind:'airport',coords:[34.43596,135.24391],address:'大阪府泉佐野市泉州空港北1',description:'간사이공항 기준. 항공사·터미널과 일본 도착 시각은 항공권에서 확인해주세요.',source:'https://www.kansai-airport.or.jp/'},
namba:{name:'난바역 · 숙소에 짐 맡기기',jp:'南海なんば駅',kind:'station',coords:[34.66307,135.50188],address:'大阪市中央区難波5-1-60',description:'숙소는 난바역 주변을 가정했어요. 숙소가 정해지기 전까지 지도에는 난바역을 표시합니다.'},
makino:{name:'텐동 마키노',jp:'天丼まきの 難波千日前店',kind:'food',coords:[34.666,135.5028],address:'大阪市中央区難波3-3-4 難波日大ビル1F',description:'첫 점심은 갓 튀긴 텐동. 같은 매장 안에서 텐동 쪽으로 방문하세요.',hours:'텐동 11:00–15:30 (주문 마감 15:00) / 17:00–21:00',source:'https://stores.toridoll.com/110983'},
shinsaibashi:{name:'신사이바시',jp:'心斎橋筋商店街',kind:'shop',coords:[34.67248,135.50116],address:'大阪市中央区心斎橋筋',description:'상점가를 천천히 구경하고 마음에 드는 카페에서 쉬어가요.',source:'https://www.shinsaibashi.or.jp/'},
hozenji:{name:'호젠지 요코초',jp:'法善寺横丁',kind:'sight',coords:[34.66791,135.50206],address:'大阪市中央区難波1-2',description:'도톤보리 가까이 있는 돌길 골목. 호젠지와 주변 골목을 함께 걸어봐요.'},
mugen:{name:'무겐라멘',jp:'無限ラーメン 千日前店',kind:'food',coords:[34.66834,135.50299],address:'大阪市中央区難波1-2-2',description:'도톤보리에서 가까운 센니치마에점. 저녁 식사 후 강변으로 걸어가요.',hours:'11:00–22:00',source:'https://sennichimae.com/streetmap/shop18/'},
dotonbori:{name:'도톤보리 · 글리코상',jp:'道頓堀グリコサイン',kind:'sight',coords:[34.6687,135.50128],address:'大阪市中央区道頓堀1-10',description:'글리코상 앞에서 사진을 찍고 강변 야경으로 첫날을 마무리해요.',source:'https://osaka-info.jp/en/spot/dotonbori/'},
castle:{name:'오사카성',jp:'大阪城天守閣',kind:'sight',coords:[34.68733,135.52617],address:'大阪市中央区大阪城1-1',description:'천수각뿐 아니라 성문·돌담·해자까지 둘러봐요. 현재 천수각은 1931년 재건된 건물입니다.',hours:'9:00–18:00 (입장 마감 17:30)',source:'https://www.osakacastle.net/'},
curry:{name:'상등카레 본점',jp:'上等カレー 本店',kind:'food',coords:[34.70047,135.48845],address:'大阪市福島区福島6-14-9',description:'우메다 서쪽의 후쿠시마 본점. JR 후쿠시마역에서 도보 약 6분.',hours:'점심 11:00–16:00 (주문 마감 15:45)',source:'https://www.tokumasa.net/jyoutoucurry_osaka19'},
umeda:{name:'우메다 · 그랜드프런트',jp:'グランフロント大阪',kind:'shop',coords:[34.7051,135.49452],address:'大阪市北区大深町4-1',description:'쇼핑과 카페 시간을 넉넉하게. 저녁에는 스카이빌딩으로 걸어가요.',source:'https://www.grandfront-osaka.jp/'},
sky:{name:'우메다 스카이빌딩',jp:'梅田スカイビル 空中庭園展望台',kind:'sight',coords:[34.70528,135.48964],address:'大阪市北区大淀中1-1-88',description:'해 질 무렵 올라가 노을부터 야경까지 감상해요.',hours:'9:30–22:30 (입장 마감 22:00)',source:'https://www.skybldg.co.jp/en/'},
tonteki:{name:'오사카 톤테키',jp:'大阪トンテキ 大阪駅前第3ビル店',kind:'food',coords:[34.69845,135.49946],address:'大阪市北区梅田1-1-3 大阪駅前第3ビルB1F',description:'두툼한 돼지고기 스테이크로 저녁 식사. 식사 뒤 난바 숙소로 돌아가요.',hours:'11:00–22:00 (주문 마감 21:00), 일·공휴일 주문 마감 20:00',source:'https://www.ron-corp.com/osakatonteki3'},
kuromon:{name:'구로몬시장',jp:'黒門市場',kind:'shop',coords:[34.66546,135.50647],address:'大阪市中央区日本橋2-4-1',description:'점심 라멘을 위해 간식은 가볍게. 가게마다 영업시간과 휴무가 달라요.',source:'https://osaka-info.jp/en/spot/kuromon-market/'},
mugi:{name:'무기토멘스케',jp:'麦と麺助',kind:'food',coords:[34.71023,135.50249],address:'大阪市北区豊崎3-4-12',description:'나카쓰역 근처 라멘집. 대기 시간을 포함해 점심에 1시간 30분 정도 여유를 뒀어요.',hours:'평일 11:00–15:30 / 주말 낮 11:00–16:00 · 화요일 휴무',source:'https://tabelog.com/osaka/A2701/A270101/27104891/'},
tsutenkaku:{name:'신세카이 · 쓰텐카쿠',jp:'通天閣',kind:'sight',coords:[34.6525,135.5063],address:'大阪市浪速区恵美須東1-18-6',description:'쓰텐카쿠 전망대와 신세카이 골목을 함께 구경해요.',source:'https://www.tsutenkaku.co.jp/'},
tenshiba:{name:'덴노지 · 텐시바',jp:'天王寺公園 てんしば',kind:'cafe',coords:[34.64815,135.5119],address:'大阪市天王寺区茶臼山町5-55',description:'공원 주변 카페에서 쉬거나 덴노지 쇼핑몰을 구경해요.',source:'https://www.tennoji-park.jp/'},
chibo:{name:'치보',jp:'千房 あべのキューズモール支店',kind:'food',coords:[34.64548,135.5118],address:'大阪市阿倍野区阿倍野筋1-6-1 あべのキューズモール4F',description:'아베노 큐즈몰 4층에서 오코노미야키. 마지막 저녁은 덴노지에서 즐겨요.',hours:'11:00–22:00 (주문 마감 21:00)',source:'https://shop.chibo.com/detail/24/'},
tennoji:{name:'덴노지역 · 짐 보관',jp:'JR天王寺駅',kind:'station',coords:[34.64726,135.51384],address:'大阪市天王寺区悲田院町10-45',description:'아침에 체크아웃하고 덴노지역에 짐을 맡겨요. 식사 후 난바로 되돌아가지 않고 공항으로 이동합니다. 보관함 여유는 당일 확인해주세요.',source:'https://www.westjr.co.jp/travel-information/en/train-usage-guide/howto/guide/'},
shitennoji:{name:'시텐노지',jp:'四天王寺',kind:'sight',coords:[34.6545,135.51653],address:'大阪市天王寺区四天王寺1-11-18',description:'593년 창건된 사찰. 중심 건물은 전후 재건됐으며 북쪽에는 17세기 건물들도 남아 있어요.',hours:'9월 중심 가람·정원 8:30–16:30',source:'https://www.shitennoji.or.jp/admission.html'},
tontei:{name:'돈테이',jp:'とん亭',kind:'food',coords:[34.6505,135.5215],address:'大阪市天王寺区大道4-1-2',description:'돈카츠 백명점 2024 선정 이력이 있는 집. 로스 또는 히레카츠 정식을 추천해요.',hours:'11:30–15:30 (주문 마감 15:00) · 월요일 휴무, 화요일 영업 별도 확인',source:'https://tabelog.com/osaka/A2701/A270203/27011174/'}
};
export const days:{date:string;shortDate:string;weekday:string;title:string;area:string;color:string;note:string;stops:Stop[]}[]=[
{date:'2026-09-14',shortDate:'9.14',weekday:'월',title:'도톤보리의 첫 번째 밤',area:'난바 · 신사이바시 · 도톤보리',color:'#007f93',note:'09:40 출국. 일본 도착 시각은 미확인이라 첫날 시간은 임시예요. 마키노 텐동은 15:00 주문 마감.',stops:[
{id:'d1-airport',place:'airport',label:'도착',time:'도착 후',summary:'입국 수속 후 난바로 이동'},
{id:'d1-namba',place:'namba',label:'짐 보관',time:'13:00 예상',summary:'숙소는 난바역 주변 기준',transfer:'난카이 전철 · 대기·도보 포함 약 60–80분',mode:'transit'},
{id:'d1-makino',place:'makino',label:'점심',time:'13:30',summary:'난바센니치마에점 · 텐동',transfer:'도보 약 5–10분',mode:'walking',note:'입국이 늦어지면 15:00 주문 마감 전에 도착 가능한지 확인해주세요.'},
{id:'d1-shinsaibashi',place:'shinsaibashi',label:'쇼핑',time:'15:00',summary:'상점가 구경과 카페 휴식',transfer:'도보 약 10–15분',mode:'walking'},
{id:'d1-hozenji',place:'hozenji',label:'산책',time:'17:30',summary:'호젠지와 돌길 골목',transfer:'도보 약 10분',mode:'walking'},
{id:'d1-mugen',place:'mugen',label:'저녁',time:'18:00',summary:'센니치마에점 · 라멘',transfer:'도보 약 2–3분',mode:'walking'},
{id:'d1-dotonbori',place:'dotonbori',label:'야경',time:'19:00',summary:'글리코상 사진 · 강변 산책',transfer:'도보 약 5분',mode:'walking'}]},
{date:'2026-09-15',shortDate:'9.15',weekday:'화',title:'성곽 산책, 그리고 노을',area:'오사카성 · 후쿠시마 · 우메다',color:'#7759c4',note:'오사카성은 2시간 30분 정도 천천히. 스카이빌딩은 해 질 무렵에 맞춰 방문해요.',stops:[
{id:'d2-castle',place:'castle',label:'역사 산책',time:'09:00–11:30',summary:'천수각 · 성문 · 돌담 · 해자'},
{id:'d2-curry',place:'curry',label:'점심',time:'12:30',summary:'본점·후쿠시마점 · 우메다 서쪽',transfer:'JR·도보 약 40–55분',mode:'transit'},
{id:'d2-umeda',place:'umeda',label:'쇼핑·카페',time:'14:00',summary:'그랜드프런트와 우메다 주변',transfer:'도보 약 15분',mode:'walking'},
{id:'d2-sky',place:'sky',label:'노을·야경',time:'17:15',summary:'공중정원에서 낮과 밤을 함께',transfer:'도보 약 10–15분',mode:'walking'},
{id:'d2-tonteki',place:'tonteki',label:'저녁',time:'19:15',summary:'오사카역앞 제3빌딩 지하 1층',transfer:'도보 약 20–25분',mode:'walking'}]},
{date:'2026-09-16',shortDate:'9.16',weekday:'수',title:'라멘 한 그릇, 골목 한 바퀴',area:'구로몬 · 나카쓰 · 신세카이 · 덴노지',color:'#c45d20',note:'무기토멘스케는 11:00 방문 목표. 대기에 따라 쓰텐카쿠 도착 시간을 유동적으로 잡아요.',stops:[
{id:'d3-kuromon',place:'kuromon',label:'시장 구경',time:'09:30',summary:'간식은 가볍게 · 가게별 영업시간 다름'},
{id:'d3-mugi',place:'mugi',label:'점심',time:'11:00–12:30',summary:'나카쓰 · 대기 시간을 포함한 계획',transfer:'지하철·도보 약 30–40분',mode:'transit'},
{id:'d3-tsutenkaku',place:'tsutenkaku',label:'전망대·산책',time:'13:30',summary:'쓰텐카쿠와 신세카이 골목',transfer:'지하철·도보 약 35–45분',mode:'transit'},
{id:'d3-tenshiba',place:'tenshiba',label:'카페·휴식',time:'16:00',summary:'텐시바에서 쉬어가기',transfer:'도보 약 15–20분',mode:'walking'},
{id:'d3-chibo',place:'chibo',label:'저녁',time:'18:00',summary:'아베노 큐즈몰 4층 · 오코노미야키',transfer:'도보 약 10분',mode:'walking'}]},
{date:'2026-09-17',shortDate:'9.17',weekday:'목',title:'오래된 사찰에서 마지막 점심까지',area:'덴노지 · 시텐노지 · 데라다초 · 공항',color:'#27794e',note:'16:00 귀국편. 돈테이는 첫 입장 목표, 12:10 식사 종료 후 공항으로. 공항 13:00–13:30 도착 목표.',stops:[
{id:'d4-tennoji',place:'tennoji',label:'체크아웃·짐',time:'08:30',summary:'난바 숙소 체크아웃 → 덴노지역에 보관'},
{id:'d4-shitennoji',place:'shitennoji',label:'사찰 관람',time:'09:00–10:30',summary:'중심 가람과 경내를 천천히',transfer:'도보 약 15분',mode:'walking'},
{id:'d4-tontei',place:'tontei',label:'점심',time:'11:30–12:10',summary:'11:10쯤 도착해 첫 입장 목표',transfer:'도보 약 15–20분',mode:'walking',note:'예약 불가. 대기가 길어 11:45까지 입장하지 못하면 귀국편에 맞춰 식사 계획을 조정하세요.'},
{id:'d4-bags',place:'tennoji',label:'짐 찾기·열차',time:'12:25 목표',summary:'짐을 찾고 간사이공항행 열차 탑승',transfer:'도보 또는 JR·도보 약 15–20분',mode:'transit',note:'열차 출발 시각은 확정 시간표가 아니에요. 실제 하루카 시간표와 항공사 터미널을 미리 확인하세요.'},
{id:'d4-airport',place:'airport',label:'귀국',time:'16:00 출발',summary:'13:00–13:30 공항 도착 목표',transfer:'하루카·터미널 이동 약 45–60분',mode:'transit'}]}
];
