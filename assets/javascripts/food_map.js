var main_map;
var popup;

var food_data = [
    {
        'name':'Yangyeon Hwaro (양연화로)',
        'idx':'1',
        'x':126.9864882,
        'y':37.5692044,
        'menu':'Pork Belly',
        'address':'18, Samil-daero 17-gil, Jongno-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EC%A2%85%EB%A1%9C%EA%B5%AC+%EA%B4%80%EC%B2%A0%EB%8F%99+%EC%82%BC%EC%9D%BC%EB%8C%80%EB%A1%9C17%EA%B8%B8+%EC%96%91%EC%97%B0%ED%99%94%EB%A1%9C+%EC%A2%85%EB%A1%9C%EC%A7%81%EC%98%81%EC%A0%90/data=!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2e620495f65:0x7a07d74e60a03319!2m2!1d126.9864882!2d37.5692044!3e3?hl=en',
        'distance':'Walk: 5min',
        'price':'15,000 won'
    },
    {
        'name':'Imun Seolnongtang (이문 설렁탕)',
        'idx':'2',
        'x':126.9839377,
        'y':37.5726592,
        'menu':'Sullungtang (Soup)',
        'address':'38-13, Ujeongguk-ro, Jongno-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/Seoul,+Jongno-gu,+Ujeongguk-ro,+%EC%9D%B4%EB%AC%B8%EC%84%A4%EB%86%8D%ED%83%95/data=!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2e8338e4637:0xedad10537399c4f7!2m2!1d126.9839377!2d37.5726592!3e3?hl=en',
        'distance':'Walk: 15min',
        'price':'20,000 won'
    },
    {
        'name':'Daeryeon-Jip (대련집)',
        'idx':'3',
        'x':126.988871,
        'y':37.5683648,
        'menu':'Kalguksu (Noodle soup), Bossam (Boiled Pork)',
        'address':'37, Jong-ro 16-gil, Jongno-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/Seoul,+Jongno-gu,+Gwansu-dong,+%EB%8C%80%EB%A0%A8%EC%A7%91/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2e65f645309:0xdca7fc1f03706d63!2m2!1d126.988871!2d37.5683648!3e3?hl=en',
        'distance':'Walk: 10min',
        'price':'8,000 ~ 29,000 won'
    },
    {
        'name':'Cheongwaok (청와옥)',
        'idx':'4',
        'x':126.9900341,
        'y':37.565982,
        'menu':'Sundae Soup',
        'address':'110, Eulji-ro, Jung-gu, Seoul, Republic of Korea',
        'map':'http://google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/Seoul,+Jung-gu,+Eulji-ro,+%EC%B2%AD%EC%99%80%EC%98%A5+%EC%9D%84%EC%A7%80%EB%A1%9C3%EA%B0%80%EC%A7%81%EC%98%81%EC%A0%90/data=!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2e14fc527a5:0xcfd915e715b92022!2m2!1d126.9900341!2d37.565982!3e3?hl=en',
        'distance':'Walk: 20min',
        'price':'9,000 won'
    },
    {
        'name':'Euljiro-Meeting Room (을지로 미팅룸)',
        'idx':'5',
        'x':126.9910392,
        'y':37.565358,
        'menu':'Fusion Western Food',
        'address':'19, Eulji-ro 12-gil, Jung-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/Seoul,+Jung-gu,+Euljiro+3(sam)-ga,+Eulji-ro+12-gil,+%EC%9D%84%EC%A7%80%EB%A1%9C%EB%AF%B8%ED%8C%85%EB%A3%B8/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2e412a0fbcd:0x292a7d451ea5af85!2m2!1d126.9910392!2d37.565358!3e3?hl=en',
        'distance':'Walk: 25min',
        'price':'20,000 won'
    },
    {
        'name':'Baekbujangjip-Dalkhanmari (백부장집 닭한마리)',
        'idx':'6',
        'x':126.9824387,
        'y':37.571689,
        'menu':'Samgyetang (Chicken Soup)',
        'address':'100-1, Sambong-ro, Jongno-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/Seoul,+Jongno-gu,+Gongpyeong-dong,+Jong-ro+7-gil,+%EB%B0%B1%EB%B6%80%EC%9E%A5%EC%A7%91+%EB%8B%AD%ED%95%9C%EB%A7%88%EB%A6%AC+%EB%B3%84%EA%B4%80/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca3c503daf1dd:0x776f530a11fc2c1c!2m2!1d126.9824387!2d37.571689!3e3?hl=en',
        'distance':'Walk: 20min',
        'price':'24,000 won'
    },
    {
        'name':'Janggun-Gulbossam (장군 굴보쌈)',
        'idx':'7',
        'x':126.9907493,
        'y':37.5699048,
        'menu':'Bossam (Boiled Pork)',
        'address':'22, Supyo-ro 20-gil, Jongno-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/Seoul,+%EC%A2%85%EB%A1%9C3%EA%B0%80+%EC%9E%A5%EA%B5%B0%EA%B5%B4%EB%B3%B4%EC%8C%88/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2e74762efbf:0xa52dae39542a5e5f!2m2!1d126.9907493!2d37.5699048!3e3?hl=en',
        'distance':'Walk: 15min',
        'price':'29,000 ~ 45,000 won'
    },
    {
        'name':'Myeongdong Kyoja (명동 교자)',
        'idx':'8',
        'x':126.985609,
        'y':37.5625266,
        'menu':'Noodle, Dumpling',
        'address':'29, Myeongdong 10-gil, Jung-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/Seoul,+Jung-gu,+Myeongdong+10-gil,+%EB%AA%85%EB%8F%99%EA%B5%90%EC%9E%90+%EB%B3%B8%EC%A0%90/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2f00d41b15b:0x7d50d5b6b0623a1d!2m2!1d126.985609!2d37.5625266!3e3?hl=en',
        'distance':'Walk: 25min',
        'price':'10,000 won'
    },
    {
        'name':'Earthen Pot (뚝배기집)',
        'idx':'9',
        'x':126.9884726,
        'y':37.5695341,
        'menu':'Stew',
        'address':'12, Jong-ro 16-gil, Jongno-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/Seoul,+Jongno-gu,+Jong-ro+16-gil,+%EB%9A%9D%EB%B0%B0%EA%B8%B0%EC%A7%91/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2e652d313cd:0x79dfc0fca409e363!2m2!1d126.9884726!2d37.5695341!3e3?hl=en',
        'distance':'Walk: 10min',
        'price':'7,000 won'
    },
    {
        'name':'Seafood Restaurant 1978 (해물점 1978)',
        'idx':'11',
        'x':126.9846443,
        'y':37.5687777,
        'menu':'Seafood',
        'address':'63-1, Cheonggyecheon-ro, Jongno-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/Haemuljeom+1978,+Cheonggyecheon-ro,+Gwancheol-dong,+Jongno-gu,+Seoul/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca3e22e62ad75:0x8203c79476e36cce!2m2!1d126.9846443!2d37.5687777!3e3?hl=en',
        'distance':'Walk: 10min',
        'price':'30,000 won'
    },
    {
        'name':'Jaengban-Jip 8292 (쟁반집 8292)',
        'idx':'12',
        'x':126.9841135,
        'y':37.5691831,
        'menu':'Meat',
        'address':'17, Jong-ro 8-gil, Jongno-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/Seoul,+Jongno-gu,+Jong-ro+8-gil,+%EC%9F%81%EB%B0%98%EC%A7%918292+%EC%A2%85%EB%A1%9C%EC%A0%90/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca33edf7466b7:0x9aa78714d9d102!2m2!1d126.9841135!2d37.5691831!3e3?hl=en',
        'distance':'Walk: 10min',
        'price':'43,000 won'
    },
    {
        'name':'Matchandeul-Wangsogeumgui (맛찬들왕소금구이)',
        'idx':'13',
        'x':126.9854441,
        'y':37.5690969,
        'menu':'Pork',
        'address':'35, Samil-daero 17-gil, Jongno-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/Seoul,+Jongno-gu,+Samil-daero+17-gil,+%EB%A7%9B%EC%B0%AC%EB%93%A4%EC%99%95%EC%86%8C%EA%B8%88%EA%B5%AC%EC%9D%B4+%EC%A2%85%EB%A1%9C%EC%A0%90/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2e8bbb495bd:0x7f0beed72db39996!2m2!1d126.9854441!2d37.5690969!3e3?hl=en',
        'distance':'Walk: 10min',
        'price':'17,000 won'
    },
    {
        'name':'Wangbi-Jip (왕비집)',
        'idx':'14',
        'x':126.9864333,
        'y':37.5615613,
        'menu':'Rib',
        'address':'24, Samil-daero 15-gil, Jongno-gu, Seoul, Republic of Korea',
        'map':'http://google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/Seoul,+Jung-gu,+Myeongdong+8ga-gil,+%EC%99%95%EB%B9%84%EC%A7%91+%EB%AA%85%EB%8F%99%EB%B3%B8%EC%A0%90+(Wangbijib+Myeongdong+Main+store)/data=!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2fa83250987:0x24dbed09d0e63240!2m2!1d126.9864333!2d37.5615613!3e3?hl=en',
        'distance':'Walk: 10min',
        'price':'42,000 ~ 45,000 won'
    }
];

var tour_data = [
    {
        'name':'Cheonggyecheon (청계천)',
        'idx':'1',
        'x':126.997671,
        'y':37.5690485,
        'type':'River, Art Space',
        'address':'181, Cheonggyecheon-ro, Jongno-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/181+Cheonggyecheon-ro,+Jongno-gu,+Seoul/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca320055d5519:0x714abd396b25aeb!2m2!1d126.997671!2d37.5690485!3e3?hl=en',
        'distance':'Walk: 30min, Bus: 25min, Taxi: 5min'
    },
    {
        'name':'Gyeongbokgung (경복궁)',
        'idx':'2',
        'x':126.9766844,
        'y':37.5773616,
        'type':'Palace',
        'address':'161 Sajik-ro, Jongno-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/161+Sajik-ro,+Jongno-gu,+Seoul/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2c06b408d39:0x49543ea18cf26ee!2m2!1d126.9766844!2d37.5773616!3e3?hl=en',
        'distance':'Walk: 30min, Bus: 20min, Taxi: 7min'
    },
    {
        'name':'Bukchon Hanok Village (북촌 한옥마을)',
        'idx':'3',
        'x':126.9849519,
        'y':37.5814696,
        'type':'Traditional Korean House',
        'address':'37, Gyedong-gil, Jongno-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/Bukchon+Hanok+Village,+%EA%B3%84%EB%8F%99%EA%B8%B8+Gahoe-dong,+Jongno-gu,+Seoul/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2daaff8c14f:0xcdbcbaa9ffc9e59a!2m2!1d126.9849519!2d37.5814696!3e3?hl=en',
        'distance':'Walk: 30min, Bus: 50min, Taxi: 10min'
    },
    {
        'name':'Hanok street in Ikseon-dong (익선동 한옥 거리)',
        'idx':'4',
        'x':126.9901271,
        'y':37.573713,
        'type':'Traditional Korean House',
        'address':'Ikseon-dong, Jongno-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/Ikseondong+Hanok+Village,+Donhwamun-ro+11na-gil,+Ikseon-dong,+Jongno-gu,+Seoul/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2dda25b827b:0x8c6a32ecaea135db!2m2!1d126.9901271!2d37.5737132!3e3?hl=en',
        'distance':'Walk: 15min, Bus: 15min, Taxi: 8min'
    },
    {
        'name':'Insa-dong Street (인사동 거리)',
        'idx':'5',
        'x':126.9867517,
        'y':37.5721517,
        'type':'Shopping Street',
        'address':'Insa-dong, Jongno-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/Insadong+Street,+Seoul,+Insadong-gil,+Insa-dong,+Jongno-gu,+Seoul/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2e7f9c7f07b:0xb277f48a0573a31f!2m2!1d126.9867517!2d37.5721517!3e3?hl=en',
        'distance':'Walk: 10min, Bus: 10min, Taxi: 5min'
    },
    {
        'name':'Gwangjang Market (광장 시장)',
        'idx':'6',
        'x':126.9996036,
        'y':37.5700398,
        'type':'Market',
        'address':'88, Changgyeonggung-ro, Jongno-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/88+Changgyeonggung-ro,+Jongno-gu,+Seoul/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca32055754e7b:0x404b0fdfd6f891b8!2m2!1d126.9996036!2d37.5700398!3e3?hl=en',
        'distance':'Walk: 20min, Bus: 15min, Taxi: 10min'
    },
    {
        'name':'Myeong-dong Street (명동 거리)6',
        'idx':'7',
        'x':126.9844829,
        'y':37.563759,
        'type':'Shopping Street',
        'address':'Myeong-dong, Jung-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/Myeong-Dong+Walking+Street,+Myeongdong-gil,+Myeong-dong,+Jung-gu,+Seoul/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2f1c7af3d5f:0x50d5593269776722!2m2!1d126.9844829!2d37.563759!3e3?hl=en',
        'distance':'Walk: 20min, Bus: 20min, Taxi: 10min'
    },
    {
        'name':'Gwanghwamun (광화문)',
        'idx':'8',
        'x':126.976812,
        'y':37.575877,
        'type':'Palace',
        'address':'12 Hyoja-ro, Jongno-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Jongno-gu,+Seoul/Gwanghwamun,+Hyoja-ro,+Sejongno,+Jongno-gu,+Seoul/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca37454f683b1:0xfa19c5217c6a0bc0!2m2!1d126.9768121!2d37.5758772!3e3?hl=en',
        'distance':'Walk: 30min, Bus: 20min, Taxi: 7min'
    }
];

var hotel_data = [
    {
        'name':'Lotte Hotel (롯데 호텔)',
        'idx':'1',
        'x':126.980979,
        'y':37.5653,
        'star':'★★★★★',
        'address':'30, Eulji-ro, Jung-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Gwancheol-dong,+Jongno-gu,+Seoul/30+Eulji-ro,+Jung-gu,+Seoul/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2f1fc15d861:0x3f30e3071adfc0e0!2m2!1d126.981369!2d37.5649903!3e3?hl=en',
        'distance':'Walk: 16 min',
        'price':'250,000 ~ 300,000 won'
    },
    {
        'name':'Westin Josun Seoul (웨스틴 조선 서울)',
        'idx':'2',
        'x':126.980058,
        'y':37.564378,
        'star':'★★★★★',
        'address':'106 Sogong-ro, Jung-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Gwancheol-dong,+Jongno-gu,+Seoul/The+Westin+Josun+Seoul,+Sogong-ro,+Jung-gu,+Seoul/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2f146af4e39:0xe28f4800e1b8a3c5!2m2!1d126.980058!2d37.564378!3e3?hl=en',
        'distance':'Walk: 16 min',
        'price':'300,000 ~ 315,000 won'
    },
    {
        'name':'Four Seasons Hotel Seoul (포시즌스 호텔 서울)',
        'idx':'3',
        'x':126.9754143,
        'y':37.57071,
        'star':'★★★★★',
        'address':'97 Saemunan-ro, Jongno-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Gwancheol-dong,+Jongno-gu,+Seoul/Four+Seasons+Hotel+Seoul,+Saemunan-ro,+Sajik-dong,+Jongno-gu,+Seoul/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2932e4b46ef:0xbc18b3d1ec10a17a!2m2!1d126.9754143!2d37.57071!3e3?hl=en',
        'distance':'Walk: 23 min',
        'price':'450,000 ~ 470,000 won'
    },
    {
        'name':'The Plaza Seoul (더플라자 서울)',
        'idx':'4',
        'x':126.9781534,
        'y':37.5646452,
        'star':'★★★★★',
        'address':'119 Sogong-ro, Jung-gu, Seoul, Republic of Korea',
        'map':'http://google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Gwancheol-dong,+Jongno-gu,+Seoul/THE+PLAZA+Seoul,+Autograph+Collection,+Sogong-ro,+Sogong-dong,+Jung-gu,+Seoul/data=!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2f2f77b6c9f:0xd79527ac6fbc8b03!2m2!1d126.9781534!2d37.5646452!3e3?hl=en',
        'distance':'Walk: 23 min',
        'price':'230,000 ~ 250,000 won'
    },
    {
        'name':"L'Escape Hotel (레스케이프 호텔)",
        'idx':'5',
        'x':126.979724,
        'y':37.5601147,
        'star':'★★★★★',
        'address':'67 Toegye-ro, Jung-gu, Seoul, Republic of Korea',
        'map':"https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Gwancheol-dong,+Jongno-gu,+Seoul/L'Escape+Hotel,+Toegye-ro,+Hoehyeon-dong,+Jung-gu,+Seoul/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca3a5299904a3:0x5d13b7ed8c143eef!2m2!1d126.979724!2d37.5601147!3e3?hl=en",
        'distance':'Walk: 27 min',
        'price':'150,000 ~ 200,000 won'
    },
    {
        'name':'Lotte City Hotel Myeongdong (롯데시티 호텔 명동)',
        'idx':'6',
        'x':126.9879785,
        'y':37.5669163,
        'star':'★★★★',
        'address':'362 Samil-daero, Jung-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Gwancheol-dong,+Jongno-gu,+Seoul/LOTTE+City+Hotel+Myeongdong,+362+Samil-daero,+Jung-gu,+Seoul/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2e5c112f82b:0x2c6bd1ceff36bd42!2m2!1d126.9879785!2d37.5669163!3e3?hl=en',
        'distance':'Walk: 5 min',
        'price':'110,000 won'
    },
    {
        'name':'Four Points by Sheraton Josun, Seoul Myeongdong (포 포인츠 바이 쉐라톤 조선 서울 명동)',
        'idx':'7',
        'x':126.98952,
        'y':37.5655997,
        'star':'★★★★',
        'address':'36 Samil-daero 10-gil, Jung-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Gwancheol-dong,+Jongno-gu,+Seoul/Four+Points+by+Sheraton+Josun,+Seoul+Myeongdong,+Samil-daero+10-gil,+Jeodong+2(i)-ga,+Jung-gu,+Seoul/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca3106516567b:0xc1394265e12fa82b!2m2!1d126.98952!2d37.5655997!3e3?hl=en',
        'distance':'Walk: 10 min',
        'price':'90,000 ~ 110,000 won'
    },
    {
        'name':'Royal Hotel Seoul (로얄 호텔 서울)',
        'idx':'8',
        'x':126.9855393,
        'y':37.5642456,
        'star':'★★★★',
        'address':'61 Myeongdong-gil, Jung-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Gwancheol-dong,+Jongno-gu,+Seoul/Royal+Hotel+Seoul,+Myeongdong-gil,+Myeongdong+1(il)-ga,+Jung-gu,+Seoul/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2efef926b79:0x9cfc1d726cdb67c3!2m2!1d126.9855393!2d37.5642456!3e3?hl=en',
        'distance':'Walk: 11 min',
        'price': '120,000 ~ 145,000 won'
    },
    {
        'name':'Nine Tree Premier Hotel Insadong (나인트리 프리미어 호텔 인사동)',
        'idx':'9',
        'x':126.9838476,
        'y':37.5745073,
        'star':'★★★★',
        'address':'49 Insadong-gil, Jongno-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Gwancheol-dong,+Jongno-gu,+Seoul/Nine+Tree+Premier+Hotel+Insadong,+Insadong-gil,+Gwanhun-dong,+Jongno-gu,+Seoul/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca3e2036e1661:0x14448129b62842dc!2m2!1d126.9838476!2d37.5745073!3e3?hl=en',
        'distance':'Walk: 14 min',
        'price':'70,000 ~ 85,000 won'
    },
    {
        'name':'Nine Tree Premier Hotel Myeongdong 2 (나인트리 프리미어 호텔 명동2)',
        'idx':'10',
        'x':126.9908281,
        'y':37.5643625,
        'star':'★★★★',
        'address':'28 Mareunnae-ro, Jung-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Gwancheol-dong,+Jongno-gu,+Seoul/Nine+Tree+Premier+Hotel,+Myeongdong+II,+28+Mareunnae-ro,+Cho-dong,+Jung-gu,+Seoul/data=!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2e942e40d75:0x21739460d04e118b!2m2!1d126.9908281!2d37.5643625!3e3?hl=en',
        'distance':'Walk: 14 min',
        'price':'80,000 ~ 90,000 won'
    },
    {
        'name':'Aloft Seoul Myeongdong (알로프트 서울 명동)',
        'idx':'11',
        'x':126.981949,
        'y':37.5624286,
        'star':'★★★★',
        'address':'56 Namdaemun-ro, Jung-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Gwancheol-dong,+Jongno-gu,+Seoul/Aloft+Seoul+Myeongdong,+Namdaemun-ro,+Myeongdong+2(i)-ga,+Jung-gu,+Seoul/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2f171805e91:0xdd1ab3761bde009!2m2!1d126.9819492!2d37.5624286!3e3?hl=en',
        'distance':'Walk: 17 min',
        'price':'160,000 ~ 165,000 won'
    },
    {
        'name':'L7 Myeongdong (L7 명동)',
        'idx':'12',
        'x':126.986967,
        'y':37.561246,
        'star':'★★★★',
        'address':'137 Toegye-ro, Jung-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Gwancheol-dong,+Jongno-gu,+Seoul/L7+Myeongdong,+Toegye-ro,+Chungmuro+2(i)-ga,+Jung-gu,+Seoul/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2fa85709271:0xe61ae6f68a7ba4f3!2m2!1d126.986967!2d37.561246!3e3?hl=en',
        'distance':'Walk: 17 min',
        'price':'100,000 ~ 110,000 won'
    },
    {
        'name':'Sejong Hotel (세종 호텔)',
        'idx':'13',
        'x':126.9879273,
        'y':37.5613363,
        'star':'★★★★',
        'address':'145 Toegye-ro, Jung-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Gwancheol-dong,+Jongno-gu,+Seoul/Sejong+Hotel,+Toegye-ro,+Chungmuro+2(i)-ga,+Jung-gu,+Seoul/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2faec42197b:0xdde08a6c81bd8104!2m2!1d126.9879273!2d37.5613363!3e3?hl=en',
        'distance':'Walk: 19 min',
        'price':'80,000 ~ 125,000 won'
    },
    {
        'name':'Koreana Hotel (코리아나 호텔)',
        'idx':'14',
        'x':126.976503,
        'y':37.5681809,
        'star':'★★★★',
        'address':'135 Sejong-daero, Jung-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Gwancheol-dong,+Jongno-gu,+Seoul/KOREANA+HOTEL,+Sejong-daero,+Taepyeongno+1(il)-ga,+Jung-gu,+Seoul/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2ed389679eb:0xecc7418cfd3bd29e!2m2!1d126.9765031!2d37.5681809!3e3?hl=en',
        'distance':'Walk: 20 min',
        'price':'75,000 ~ 100,000 won'
    },
    {
        'name':'Somerset Palace Seoul (서머셋 팰리스 서울)',
        'idx':'15',
        'x':126.9812194,
        'y':37.5749752,
        'star':'★★★★',
        'address':'7 Yulgok-ro 2-gil, Jongno-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Gwancheol-dong,+Jongno-gu,+Seoul/Somerset+Palace+Seoul,+7+Yulgok-ro+2-gil,+Jongno-gu,+Seoul/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2c2031328b1:0xcf7b96eb26b55c41!2m2!1d126.9812194!2d37.5749752!3e3?hl=en',
        'distance':'Walk: 23 min',
        'price':'180,000 ~ 190,000 won'
    },
    {
        'name':'Travelodge Myeongdong Euljiro Hotel (트레블로지 명동 을지로 호텔)',
        'idx':'16',
        'x':126.9892573,
        'y':37.5666031,
        'star':'★★★',
        'address':'61 Supyo-ro, Jung-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Gwancheol-dong,+Jongno-gu,+Seoul/Travelodge+Myeongdong+Euljiro,+Supyo-ro,+Myeong-dong,+Jung-gu,+Seoul/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2e42c6b5b8f:0x9f9208764dfe8cbf!2m2!1d126.9892573!2d37.5666031!3e3?hl=en',
        'distance':'Walk: 7 min',
        'price':'55,000 ~ 75,000 won'
    },
    {
        'name':'Center Mark Hotel Seoul (센터마크 호텔 서울)',
        'idx':'17',
        'x':126.9842663,
        'y':37.5725157,
        'star':'★★★',
        'address':'38 Insadong 5-gil, Jongno-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Gwancheol-dong,+Jongno-gu,+Seoul/Center+Mark+Hotel,+Insadong+5-gil,+Jongno-gu,+Seoul/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2e830cbc6af:0xd32ef20d46f7753f!2m2!1d126.9842663!2d37.5725157!3e3?hl=en',
        'distance':'Walk: 10 min',
        'price':'70,000 ~ 85,000 won'
    },
    {
        'name':'Hotel Midcity Myeongdong (호텔 미드시티 명동)',
        'idx':'18',
        'x':126.9808953,
        'y':37.567602,
        'star':'★★★',
        'address':'30 Dadong-gil, Da-dong, Jung-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Gwancheol-dong,+Jongno-gu,+Seoul/Seoul,+Jung-gu,+Da-dong,+Dadong-gil,+%ED%98%B8%ED%85%94+%EB%AF%B8%EB%93%9C%EC%8B%9C%ED%8B%B0+%EB%AA%85%EB%8F%99+HOTEL+MIDCITY+MYEONGDONG/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca3740cef7259:0x68e102c847c5959d!2m2!1d126.9808953!2d37.567602!3e3?hl=en',
        'distance':'Walk: 10 min',
        'price':'65,000 ~ 85,000 won'
    },
    {
        'name':'Shilla Stay Gwanghwamun (신라스테이 광화문)',
        'idx':'19',
        'x':126.981137,
        'y':37.572565,
        'star':'★★★',
        'address':'71 Sambong-ro, Jongno-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Gwancheol-dong,+Jongno-gu,+Seoul/Shilla+Stay+Gwanghwamun,+Sambong-ro,+Susong-dong,+Jongno-gu,+Seoul/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2e97f6c6f35:0x8c51088b16d13da5!2m2!1d126.981137!2d37.572565!3e3?hl=en',
        'distance':'Walk: 15 min',
        'price':'105,000 ~ 125,000 won'
    },
    {
        'name':'Ibis Styles Ambassador Seoul Myeongdong (이비스 스타일 앰배서더 명동)',
        'idx':'20',
        'x':126.989376,
        'y':37.5616433,
        'star':'★★★',
        'address':'302 Samil-daero, Jung-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Gwancheol-dong,+Jongno-gu,+Seoul/ibis+Styles+Ambassador+Seoul+Myeongdong,+Samil-daero,+Chungmuro+2(i)-ga,+Jung-gu,+Seoul/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2fb276c1d57:0xcdb28c7fa85bf3a9!2m2!1d126.9893762!2d37.5616433!3e3?hl=en',
        'distance':'Walk: 16 min',
        'price':'90,000 ~ 95,000 won'
    },
    {
        'name':'The Grand Hotel Myeongdong (더 그랜드호텔 명동)',
        'idx':'21',
        'x':126.9871615,
        'y':37.5616644,
        'star':'★★★',
        'address':'38 Myeongdong 8ga-gil, Jung-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Gwancheol-dong,+Jongno-gu,+Seoul/The+Grand+Hotel+Myeongdong,+Myeongdong+8ga-gil,+Jung-gu,+Seoul/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2fa90db2c0d:0x86b074afb68794d1!2m2!1d126.9871615!2d37.5616644!3e3?hl=en',
        'distance':'Walk: 16 min',
        'price':'100,000 ~ 105,000 won'
    },
    {
        'name':'Crown Park Hotel Myeongdong Seoul (크라운파크 호텔 명동)',
        'idx':'22',
        'x':126.980783,
        'y':37.5638293,
        'star':'★★★',
        'address':'19 Namdaemun-ro 7-gil, Jung-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Gwancheol-dong,+Jongno-gu,+Seoul/Crown+Park+Hotel+Seoul,+Namdaemun-ro+7-gil,+Sogong-dong,+Jung-gu,+Seoul/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2f226542ef3:0xb424232eddb5f8b2!2m2!1d126.9807831!2d37.5638293!3e3?hl=en',
        'distance':'Walk: 16 min',
        'price':'75,000 ~ 95,000 won'
    },
    {
        'name':'Hotel Prince Seoul (서울 프린스 호텔)',
        'idx':'23',
        'x':126.98625,
        'y':37.560651,
        'star':'★★★',
        'address':'130 Toegye-ro, Jung-gu, Seoul, Republic of Korea',
        'map':'https://www.google.co.kr/maps/dir/Seoul+Tourism+Plaza,+Cheonggyecheon-ro,+Gwancheol-dong,+Jongno-gu,+Seoul/Hotel+Prince+Seoul,+Toegye-ro,+Jung-gu,+Seoul/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x357ca363dcaded21:0x1bfb4f19bd0bcc29!2m2!1d126.9871527!2d37.5686145!1m5!1m1!1s0x357ca2f09d4b73c3:0xec8849298ecf4a43!2m2!1d126.98625!2d37.560651!3e3?hl=en',
        'distance':'Walk: 19 min',
        'price':'65,000 ~ 80,000 won'
    }
];

var menuData = {
    'home»': "/pvis2023/",
    'contribute»':'/pvis2023/pages/cfp',
    'committees»':'/pvis2023/pages/committees',
    'travel & venue»':'/pvis2023/pages/venue',
    'sponsor»':'/pvis2023/pages/sponsor',
    'contact»':'/pvis2023/pages/contact'
}

window.onload = function() {
    var menuElem = document.getElementsByClassName('menu')[0];

    inHtml = ``;

    for(var menu in menuData) {
        var link = menuData[menu];

        inHtml += `
            <a href="${link}">${menu}</a>
        `;
    }

    menuElem.innerHTML = inHtml;

    mapboxgl.accessToken = 'pk.eyJ1Ijoia2hhcmlzbWExMSIsImEiOiJjazM1M3dra2cwZjM0M2NwZXhmdWEybHIyIn0.ALDvfHZ6cPKoika-aEL65A';

    popup = new mapboxgl.Popup();
    
    main_map = new mapboxgl.Map({
        container: 'main-map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [126.987, 37.569],
        zoom: 13
    });

    setTimeout(makeMap, 500);
}

function makeMap() {
    main_map.on('load', function() {
        main_map.loadImage('https://pvis2023.github.io//pvis2023/assets/images/maps/tour.png', function(error, image) {
            if(error) throw error;
            main_map.addImage('tour', image);
        });

        main_map.loadImage('https://pvis2023.github.io//pvis2023/assets/images/maps/conference.png', function(error, image) {
            if(error) throw error;
            main_map.addImage('conference', image);
        });

        main_map.loadImage('https://pvis2023.github.io//pvis2023/assets/images/maps/restaurant.png', function(error, image) {
            if(error) throw error;
            main_map.addImage('food', image);
        });

        main_map.loadImage('https://pvis2023.github.io//pvis2023/assets/images/maps/accomodation.png', function(error, image) {
            if(error) throw error;
            main_map.addImage('accomodation', image);
        });

        main_map.loadImage('https://pvis2023.github.io//pvis2023/assets/images/maps/5_star.png', function(error, image) {
            if(error) throw error;
            main_map.addImage('5_star', image);
        });

        main_map.loadImage('https://pvis2023.github.io//pvis2023/assets/images/maps/4_star.png', function(error, image) {
            if(error) throw error;
            main_map.addImage('4_star', image);
        });

        main_map.loadImage('https://pvis2023.github.io//pvis2023/assets/images/maps/3_star.png', function(error, image) {
            if(error) throw error;
            main_map.addImage('3_star', image);
        });
    });

    var food_geojson = {
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: []
        }
    };
    
    for(var i=0;i<food_data.length;i++) {
        var data = food_data[i];

        food_geojson.data.features.push({
            type:'Feature',
            geometry:{
                type:'Point',
                coordinates: [data['x'], data['y']]
            },
            properties: {
                name: data['name'],
                menu: data['menu'],
                idx: data['idx'],
                address: data['address'],
                map: data['map'],
                distance: data['distance'],
                price: data['price'],
                image: 'food'
            }
        });
    }

    main_map.addSource('food', food_geojson);
    main_map.addLayer({
        id: 'food',
        type: 'symbol',
        source: 'food',
        layout: {
            'icon-image': '{image}',
            'icon-size': .08,
            'icon-allow-overlap': true
        }
    });

    var conf_geojson = {
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: []
        }
    };

    conf_geojson.data.features.push({
        type:'Feature',
        geometry:{
            type:'Point',
            coordinates: [126.9871527, 37.5686145]
        },
        properties: {
            image: 'conference'
        }
    });

    main_map.addSource('conference', conf_geojson);
    main_map.addLayer({
        id: 'conference',
        type: 'symbol',
        source: 'conference',
        layout: {
            'icon-image': '{image}',
            'icon-size': .08,
            'icon-allow-overlap': true
        }
    });

    var tour_geojson = {
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: []
        }
    };
    
    for(var i=0;i<tour_data.length;i++) {
        var data = tour_data[i];

        tour_geojson.data.features.push({
            type:'Feature',
            geometry:{
                type:'Point',
                coordinates: [data['x'], data['y']]
            },
            properties: {
                name: data['name'],
                type: data['type'],
                idx: data['idx'],
                address: data['address'],
                map: data['map'],
                distance: data['distance'],
                image: 'tour'
            }
        });
    }

    main_map.addSource('tour', tour_geojson);
    main_map.addLayer({
        id: 'tour',
        type: 'symbol',
        source: 'tour',
        layout: {
            'icon-image': '{image}',
            'icon-size': .08,
            'icon-allow-overlap': true
        }
    });

    var hotel_geojson = {
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: []
        }
    };

    for(var i=0;i<hotel_data.length;i++) {
        var data = hotel_data[i];

        var images;
        if(data['star'] == '★★★★★') {
            images = '5_star';
        } else if(data['star'] == '★★★★') {
            images = '4_star';
        } else {
            images = '3_star';
        }

        hotel_geojson.data.features.push({
            type:'Feature',
            geometry:{
                type:'Point',
                coordinates: [data['x'], data['y']]
            },
            properties: {
                name: data['name'],
                star: data['star'],
                idx: data['idx'],
                address: data['address'],
                map: data['map'],
                distance: data['distance'],
                image: images//'accomodation'
            }
        });
    }

    main_map.addSource('accomodation', hotel_geojson);
    main_map.addLayer({
        id: 'accomodation',
        type: 'symbol',
        source: 'accomodation',
        layout: {
            'icon-image': '{image}',
            'icon-size': .08,
            'icon-allow-overlap': true
        }
    });

    setTimeout(mouseHoverNode, 500);
}

function mouseHoverNode() {
    main_map.on('click', ['food', 'tour', 'accomodation'], function(e) {
        main_map.getCanvas().style.cursor = 'pointer';

        var coordinates = e.features[0].geometry.coordinates.slice();
        var name = e.features[0].properties.name;
        var menu = e.features[0].properties.menu;
        var idx = e.features[0].properties.idx;
        var address = e.features[0].properties.address;
        var map = e.features[0].properties.map;
        var distance = e.features[0].properties.distance;
        var price = e.features[0].properties.price;
        var type = e.features[0].properties.type;
        var star = e.features[0].properties.star;

        var layer = e.features[0].layer.id;
        var description;

        if(layer == 'food') {
            description = `
                <h4>${name}</h2>
                <div style="width:100%; margin: 0 auto;">
                    <img src="https://pvis2023.github.io//pvis2023/assets/images/foods/food_${idx}_1.jpg" style="float:left;margin-right:10px;width:180px; height:180px;">
                    <img src="https://pvis2023.github.io//pvis2023/assets/images/foods/food_${idx}_2.jpg" style="float:left;width:180px; height:180px;">
                </div>
                <br>
                <div style="float:none;">
                    <table>
                        <tbody>
                            <tr>
                                <td><b>Menu</b></td>
                                <td>${menu}</td>
                            </tr>
                            <tr>
                                <td><b>Address</b></td>
                                <td>${address}</td>
                            </tr>
                            <tr>
                                <td><b>How to go?</b></td>
                                <td><a href=${map}>Google Map</a></td>
                            </tr>
                            <tr>
                                <td><b>Distance</b></td>
                                <td>${distance}</td>
                            </tr>
                            <tr>
                                <td><b>Price</b></td>
                                <td>${price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `;
        }
        else if(layer == 'accomodation') {
            description = `
                <h4>${name}</h2>
                <div style="width:100%; margin: 0 auto;">
                    <img src="https://pvis2023.github.io//pvis2023/assets/images/hotels/hotel_${idx}_1.jpg" style="float:left;margin-right:10px;width:180px; height:180px;">
                    <img src="https://pvis2023.github.io//pvis2023/assets/images/hotels/hotel_${idx}_2.jpg" style="float:left;width:180px; height:180px;">
                </div>
                <br>
                <div style="float:none;">
                    <table>
                        <tbody>
                            <tr>
                                <td><b>Star</b></td>
                                <td>${star}</td>
                            </tr>
                            <tr>
                                <td><b>Address</b></td>
                                <td>${address}</td>
                            </tr>
                            <tr>
                                <td><b>How to go?</b></td>
                                <td><a href=${map}>Google Map</a></td>
                            </tr>
                            <tr>
                                <td><b>Distance</b></td>
                                <td>${distance}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `;
        }

        else {
            description = `
                <h4>${name}</h2>
                <div style="width:100%; margin: 0 auto;">
                    <img src="https://pvis2023.github.io//pvis2023/assets/images/tours/tour_${idx}_1.jpg" style="float:left;margin-right:10px;width:180px; height:180px;">
                    <img src="https://pvis2023.github.io//pvis2023/assets/images/tours/tour_${idx}_2.jpg" style="float:left;width:180px; height:180px;">
                </div>
                <br>
                <div style="float:none;">
                    <table>
                        <tbody>
                            <tr>
                                <td><b>Type</b></td>
                                <td>${type}</td>
                            </tr>
                            <tr>
                                <td><b>Address</b></td>
                                <td>${address}</td>
                            </tr>
                            <tr>
                                <td><b>How to go?</b></td>
                                <td><a href=${map}>Google Map</a></td>
                            </tr>
                            <tr>
                                <td><b>Distance</b></td>
                                <td>${distance}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `;
        }

        while(Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360: -360;
        }

        popup
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(main_map);
    });
}

function Mobile() {return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);}
