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
        'name':'Myeong-dong Street (명동 거리)',
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

var conf_data = [
    {
        'x': 126.9871527,
        'y': 37.5686145
    }
];

var paper_data = {
    'full': [
        {
            'id': "7946",
            'title': "FraudAuditor: A Visual Analytics Approach for Collusive Fraud in Health Insurance",
            'author': 
            [
                {'name': "Jiehui Zhou", 'institution': "Zhejiang University"},
                {'name': "Xumeng Wang", 'institution': "Nankai University"},
                {'name': "Jie Wang", 'institution': "Zhejiang University"},
                {'name': "Hui Ye", 'institution': "Zhejiang University"},
                {'name': "Huanliang Wang", 'institution': "Zhejiang University"},
                {'name': "Zihan Zhou", 'institution': "Zhejiang University"},
                {'name': "Dongming Han", 'institution': "Zhejiang University"},
                {'name': "Haochao Ying", 'institution': "Zhejiang University"},
                {'name': "Jian Wu", 'institution': "Zhejiang University"},
                {'name': "Wei Chen", 'institution': "Zhejiang University"}
            ]
        },
        {
            'id': "7905",
            'title': "An Empirical Guide for Visualization Consistency in Multiple Coordinated Views",
            'author': 
            [
                {'name': "Shaocong Tan", 'institution': "Peking University"},
                {'name': "Chufan Lai", 'institution': "Peking University"},
                {'name': "Xiaolong (Luke) Zhang", 'institution': "Penn State University"},
                {'name': "Xiaoru Yuan", 'institution': "Peking University"}
            ]
        },
        {
            'id': "8295",
            'title': "Parallel Assemblies Plot, a visualization tool to explore categorical and quantitative data: application to digital mobility outcomes",
            'author': 
            [
                {'name': "Alma Cantu", 'institution': "Newcastle University"},
                {'name': "Encarna Mico Amigo", 'institution': "Newcastle University"},
                {'name': "Silvia Del Din", 'institution': "Newcastle University"},
                {'name': "Sara Johansson", 'institution': "Newcastle University"},
            ]
        },
        {
            'id': "4476",
            'title': "How Can We Improve Data Quality for Machine Learning? A Visual Analytics System using Data and Process-driven Strategies",
            'author': 
            [
                {'name': "Hyein Hong", 'institution': "Sejong University"},
                {'name': "Sangbong Yoo", 'institution': "Sejong University"},
                {'name': "Yejin Jin", 'institution': "Sejong University"},
                {'name': "Yun Jang", 'institution': "Sejong University"},
            ]
        },
        {
            'id': "3258",
            'title': "GraphDescriptor: Augmenting Node-Link Diagrams With Textual Descriptions",
            'author': 
            [
                {'name': "Jiacheng Pan", 'institution': "Zhejiang University"},
                {'name': "Zihan Yan", 'institution': "MIT Media Lab"},
                {'name': "Zihan Zhou", 'institution': "Zhejiang University"},
                {'name': "Xiaodong Zhao", 'institution': "Zhejiang University"},
                {'name': "Shenghui Cheng", 'institution': "Westlake University"},
                {'name': "Dongming Han", 'institution': "Zhejiang University"},
                {'name': "Jian Chen", 'institution': "The Ohio State University"},
                {'name': "Mingliang Xu", 'institution': "Zhengzhou University"},
                {'name': "Wei Chen", 'institution': "Zhejiang University"}
            ]
        },
        {
            'id': "5693",
            'title': "SDRQuerier: A Visual Querying Framework for Cross-National Survey Data Recycling",
            'author': 
            [
                {'name': "Yamei Tu", 'institution': "The Ohio State University"},
                {'name': "Olga Li", 'institution': "Polish Academy of Sciences"},
                {'name': "Junpeng Wang", 'institution': "Palo Alto"},
                {'name': "Han-Wei Shen", 'institution': "The Ohio State University"},
                {'name': "Przemek Powalko", 'institution': "Polish Academy of Sciences"},
                {'name': "Irina Tomescu-Dubrow", 'institution': "Polish Academy of Sciences"},
                {'name': "Kazimierz M. Slomczynski", 'institution': "Polish Academy of Sciences"},
                {'name': "Spyros Blanas", 'institution': "The Ohio State University"},
                {'name': "J. Craig Jenkins", 'institution': "The Ohio State University"},
            ]
        },
        {
            'id': "8541",
            'title': "Investigating Animal Infectious Diseases with Visual Analytics",
            'author': 
            [
                {'name': "Yun-Hsin Kuo", 'institution': "University of California"},
                {'name': "Beatriz Martínez-López", 'institution': "University of California"},
                {'name': "Kwan-Liu Ma", 'institution': "University of California at Davis"}
            ]
        },
        {
            'id': "7465",
            'title': "MySemCloud: Semantic-aware Word Cloud Editing",
            'author': 
            [
                {'name': "Michael Huber", 'institution': "TU Wien"},
                {'name': "Martin Nöllenburg", 'institution': "TU Wien"},
                {'name': "MSc Anaïs Villedieu", 'institution': "TU Wien"},
            ]
        },
        {
            'id': "4333",
            'title': "LinSets.zip: Compressing Linear Set Diagrams",
            'author': 
            [
                {'name': "Markus Wallinger", 'institution': "TU Wien"},
                {'name': "Alexander Dobler", 'institution': "TU Wien"},
                {'name': "Martin Nöllenburg", 'institution': "TU Wien"},
            ]
        },
        {
            'id': "1448",
            'title': "NFTVis: Visual Analysis of NFT Performance",
            'author': 
            [
                {'name': "Fan Yan,", 'institution': "Zhejiang University"},
                {'name': "Xumeng Wang", 'institution': "Nankai University"},
                {'name': "Ketian Mao", 'institution': "Zhejiang University"},
                {'name': "Wei Zhang", 'institution': "Zhejiang University"},
                {'name': "Wei Chen", 'institution': "Zhejiang University"}
            ]
        },
        {
            'id': "2112",
            'title': "Feature Learning for Nonlinear Dimensionality Reduction toward Maximal Extraction of Hidden Patterns",
            'author': 
            [
                {'name': "Takanori Fujiwara", 'institution': "Linköping University"},
                {'name': "Yun-Hsin Kuo", 'institution': "University of California"},
                {'name': "Kwan-Liu Ma", 'institution': "University of California at Davis"},
            ]
        },
        {
            'id': "2994",
            'title': "Visualizing Interaction Networks and Evidence in Biomedical Corpora",
            'author': 
            [
                {'name': "Enrique Noriega-Atala", 'institution': "The University of Arizona"},
                {'name': "Md Rahat-uz Zaman", 'institution': "The University of Arizona"},
                {'name': "Stephen Kobourov", 'institution': "The University of Arizona"},
                {'name': "Ruchika Bhat", 'institution': "The University of Arizona"},
                {'name': "Mladen Jergovic", 'institution': "The University of Arizona"},
                {'name': "Janko Nikolich-Zugich", 'institution': "The University of Arizona"}
            ]
        },
        {
            'id': "3219",
            'title': "A Study of Zooming, Interactive Lenses and Overview+Detail Techniques in Collaborative Map-based Tasks",
            'author': 
            [
                {'name': "Yu Liu", 'institution': "Xi'an Jiaotong-Liverpool University"},
                {'name': "Zhichao Zhang", 'institution': "Xi'an Jiaotong-Liverpool University"},
                {'name': "Yushan Pan", 'institution': "Xi'an Jiaotong-Liverpool University"},
                {'name': "Yue Li", 'institution': "Xi'an Jiaotong-Liverpool University"},
                {'name': "Hai-Ning Liang", 'institution': "Xi'an Jiaotong-Liverpool University"},
                {'name': "Paul Craig", 'institution': "Xi'an Jiaotong-Liverpool University"},
                {'name': "Lingyun Yu", 'institution': "Xi'an Jiaotong-Liverpool University"}
            ]
        },
        {
            'id': "4089",
            'title': "Edit-History Vis: An Interactive Visual Exploration and Analysis on Wikipedia Edit History",
            'author': 
            [
                {'name': "Yuhan Guo", 'institution': "Peking University"},
                {'name': "Qin Han", 'institution': "Peking University"},
                {'name': "Yuke Lou", 'institution': "Peking University"},
                {'name': "Yiming Wang", 'institution': "Peking University"},
                {'name': "Can Liu", 'institution': "Peking University"},
                {'name': "Xiaoru Yuan", 'institution': "Peking University"}
            ]
        },
        {
            'id': "5370",
            'title': "Studies of Part-to-Whole Glanceable Visualizations on Smartwatch Faces",
            'author': 
            [
                {'name': "Tanja Blascheck", 'institution': "University of Stuttgart"},
                {'name': "Lonni Besançon", 'institution': "Linköpings universitet"},
                {'name': "Anastasia Bezerianos", 'institution': "Université Paris-Saclay"},
                {'name': "Bongshin Lee", 'institution': "Microsoft Research"},
                {'name': "Alaul Islam", 'institution': "Université Paris-Saclay"},
                {'name': "Tingying He", 'institution': "University Paris Saclay"},
                {'name': "Petra Isenberg", 'institution': "University Paris Saclay"}
            ]
        },
        {
            'id': "5584",
            'title': "Interactive Transformations and Visual Assessment of Noisy Event Sequences: An Application in En-Route Air Traffic Control",
            'author': 
            [
                {'name': "Peilin Yu", 'institution': "Linköping University"},
                {'name': "Aida Nordman", 'institution': "Linköping University"},
                {'name': "Lothar Meyer", 'institution': "Swedish Air Navigation Service"},
                {'name': "Supathida Boonsong", 'institution': "Swedish Air Navigation Service"},
                {'name': "Katerina Vrotsou", 'institution': "Linköping University"},
            ]
        },
        {
            'id': "5635",
            'title': "Neural Stream Functions",
            'author': 
            [
                {'name': "Skylar Wolfgang Wurster", 'institution': "The Ohio State University"},
                {'name': "Hanqi Guo", 'institution': "The Ohio State University"},
                {'name': "Tom Peterka", 'institution': " Argonne National Laboratory"},
                {'name': "Han-Wei Shen", 'institution': "The Ohio State University"},
            ]
        },
        {
            'id': "7856",
            'title': "How Does Attention Work in Vision Transformers? A Visual Analytics Attempt",
            'author': 
            [
                {'name': "Yiran Li", 'institution': "University of California"},
                {'name': "Junpeng Wang", 'institution': "Palo Alto"},
                {'name': "Xin Dai", 'institution': "Palo Alto"},
                {'name': "Liang Wang", 'institution': "Palo Alto"},
                {'name': "Chin-Chia Michael Yeh", 'institution': "Palo Alto"},
                {'name': "Yan Zheng", 'institution': "Palo Alto"},
                {'name': "Wei Zhang", 'institution': "Palo Alto"},
                {'name': "Kwan-Liu Ma", 'institution': "University of California at Davis"}
            ]
        },
        {
            'id': "8044",
            'title': "Understanding 3D Data Videos: From Screens to Virtual Reality",
            'author': 
            [
                {'name': "Leni Yang", 'institution': "The Hong Kong University of Science and Technology"},
                {'name': "Aoyu Wu", 'institution': "The Hong Kong University of Science and Technology"},
                {'name': "Wai Tong", 'institution': "The Hong Kong University of Science and Technology"},
                {'name': "Xian Xu", 'institution': "The Hong Kong University of Science and Technology"},
                {'name': "Zheng Wei", 'institution': "The Hong Kong University of Science and Technology"},
                {'name': "Huamin Qu", 'institution': "The Hong Kong University of Science and Technology"}
            ]
        },
        {
            'id': "8193",
            'title': "LabelVizier: Interactive Validation and Relabeling for Technical Text Annotations",
            'author': 
            [
                {'name': "Xiaoyu Zhang", 'institution': "University of California"},
                {'name': "Xiwei Xuan", 'institution': "University of California"},
                {'name': "Alden Dima", 'institution': "National Institute of Standards and Technology"},
                {'name': "Thurston Sexton", 'institution': "National Institute of Standards and Technology"},
                {'name': "Kwan-Liu Ma", 'institution': "University of California at Davis"}
            ]
        },
        {
            'id': "8293",
            'title': "Efficient Raycasting of Volumetric Depth Images for Remote Visualization of Large Volumes at High Frame Rates",
            'author': 
            [
                {'name': "Aryaman Gupta", 'institution': "Technische Universität Dresden"},
                {'name': "Ulrik Günther", 'institution': "Max Planck Institute of Molecular Cell Biology and Genetics"},
                {'name': "Pietro Incardona", 'institution': "Max Planck Institute"},
                {'name': "Guido Reina", 'institution': "University of Stuttgart"},
                {'name': "Steffen Frey", 'institution': "University of Groningen"},
                {'name': "Stefan Gumhold", 'institution': "TU Dresden"},
                {'name': "Ivo F. Sbalzarini", 'institution': "TU Dresden"}
            ]
        },
        {
            'id': "8886",
            'title': "Federated Visualization: A Privacy-preserving Strategy for Aggregated Visual Query",
            'author': 
            [
                {'name': "Wei Chen", 'institution': "Zhejiang University"},
                {'name': "Yating Wei", 'institution': "Zhejiang University"},
                {'name': "Zhiyong Wang", 'institution': "Zhejiang University"},
                {'name': "Shuyue Zhou", 'institution': "Zhejiang University"},
                {'name': "Bingru Lin", 'institution': "Zhejiang University"},
                {'name': "Zhiguang Zhou", 'institution': "Zhejiang University of Finance and Economics"}
            ]
        },
        {
            'id': "9366",
            'title': "Dimensionality Explorer for Single-Cell Analysis",
            'author': 
            [
                {'name': "Haejin Jeong", 'institution': "Korea University"},
                {'name': "Hyoung-Oh Jeon", 'institution': "Ulsan National Institute of Science and Technology (UNIST)"},
                {'name': "Semin Lee", 'institution': "Ulsan National Institute of Science and Technology (UNIST)"},
                {'name': "Won-Ki Jeong", 'institution': "Korea University"},
            ]
        }
    ],
    'notes': [
        {
            'id': "1003",
            'title': "Understanding People's Needs in Viewing Diverse Social Opinions  about Controversial Topics",
            'author': [
                {'name': "Hayeong Song", 'institution': "Georgia Institute of Technology"},
                {'name': "Zhengyang Qi", 'institution': "Carnegie Mellon University"},
                {'name': "Diyi Yang", 'institution': "Stanford University"},
                {'name': "John Stasko", 'institution': "Georgia Institute of Technology"},
            ]
        },
        {
            'id': "1007",
            'title': "Transparent Dashboards: Open data practices for promoting competition as motivation in business dashboards",
            'author': [
                {'name': "Arran Ridley", 'institution': "University of Leeds"},
                {'name': "Triana R.Hadiprawoto", 'institution': "Universitas Indonesia"}
            ]
        },
        {
            'id': "1021",
            'title': "MetaStackVis: Visually-Assisted Performance Evaluation of Metamodels",
            'author': [
                {'name': "Angelos Chatzimparmpas", 'institution': "Linnaeus University"},
                {'name': "Ilya Ploshchik", 'institution': "Linnaeus University"},
                {'name': "Andreas Kerren", 'institution': "Linnaeus University"}
            ]
        },
        {
            'id': "1027",
            'title': "NCARVis: No-Code Visualization Creation System based on Free-hand",
            'author': [
                {'name': "Kehan Cheng", 'institution': "University of Electronic Science And Technology of China"},
                {'name': "Jiansu Pu", 'institution': "University of Electronic Science and Technology of China"},
                {'name': "Zhuoyue Cheng", 'institution': "University of Eletronic Science and Tech of China"},
                {'name': "Jinyue Huang", 'institution': "Southwest Institute of Electronic Technology"},
                {'name': "Xunchao Cong", 'institution': "Southwest Electronic Technology Research Institute"},
            ]
        },
        {
            'id': "1029",
            'title': "Toward Reproducible Visual Analysis Results",
            'author': [
                {'name': "Max Franke", 'institution': "University of Stuttgart"},
                {'name': "Guido Reina", 'institution': "University of Stuttgart"},
                {'name': "Steffen Koch", 'institution': "University of Stuttgart"}
            ]
        },
        {
            'id': "1038",
            'title': "Optimizing Embedding-based Network Reconstruction",
            'author': [
                {'name': "Daniel Witschard", 'institution': "Linnaeus University"},
                {'name': "Ilir Jusufi", 'institution': "Blekinge Institute of Technology"},
                {'name': "Kostiantyn Kucher", 'institution': "Linköping University"},
                {'name': "Andreas Kerren", 'institution': "Linköping University"}
            ]
        },
        {
            'id': "1042",
            'title': "EmbeddingTree: Hierarchical Exploration of Entity Features in Embedding",
            'author': [
                {'name': "Yan Zheng", 'institution': "Visa Research"},
                {'name': "Junpeng Wang", 'institution': "Visa Research"},
                {'name': "Chin-Chia Michael Yeh", 'institution': "Visa Research"},
                {'name': "Yujie Fan", 'institution': "Visa Research"},
                {'name': "Huiyuan Chen", 'institution': "Visa Research"},
                {'name': "Liang Wang", 'institution': "Visa Research"},
                {'name': "Wei Zhang", 'institution': "Visa Research"},
            ]
        },
        {
            'id': "2071",
            'title': "A Visual Analytics Inspired Approach to Correlate and Understand Multiple Mechanical Tensor Fields",
            'author': [
                {'name': "Vanessa Kretzschmar", 'institution': "Leipzig University"},
                {'name': "Gerik Scheuermann", 'institution': "Leipzig University"},
                {'name': "Markus Stommel", 'institution': "Leibniz Institute of Polymer Research Dresden"},
                {'name': "Christina Gillmann", 'institution': "Leipzig University"},
            ]
        }
    ],
    'posters': [
        {
            'id': "1004",
            'title': "Traffic Framework for Causal Graph with Causal Density and Mutual Information",
            'author': [
                {'name': "Soobin Yim", 'institution': "Sejong Univsersity"},
                {'name': "Chanyoung Jung", 'institution': "Sejong Univsersity"},
                {'name': "Giwoong Park", 'institution': "Sejong Univsersity"},
                {'name': "Yun Jang", 'institution': "Sejong Univsersity"}
            ]
        },
        {
            'id': "1005",
            'title': "Story Gems: A Novel Approach for Semantic Aware Text Visualization",
            'author': [
                {'name': "Naoya Oda", 'institution': "Nihon University"},
                {'name': "Yosuke Onoue", 'institution': "Nihon University"}
            ]
        },
        {
            'id': "1009",
            'title': "Hyperparameter Optimization for Graph Drawing",
            'author': [
                {'name': "Fuga Takata", 'institution': "Nihon University"},
                {'name': "Yosuke Onoue", 'institution': "Nihon University"}
            ]
        },
        {
            'id': "1007",
            'title': "Interactive Visualization System for Monitoring Issues in Industrial Software Development",
            'author': [
                {'name': "Jinwook Bok", 'institution': "Seoul National University"},
                {'name': "Soohyun Lee", 'institution': "Seoul National University"},
                {'name': "DongHwa Shin", 'institution': "Seoul National University"},
                {'name': "Ku Bong Min", 'institution': "Seoul National University"},
                {'name': "Gyoseok Chu", 'institution': "Seoul National University"},
                {'name': "Jinwook Seo", 'institution': "Seoul National University"}
            ]
        },
        {
            'id': "1012",
            'title': "Thousands of Ancient Paintings - Visualization of Ancient Chinese painting",
            'author': [
                {'name': "Xiaojiao Chen", 'institution': "University of Waterloo"},
                {'name': "Yonghao Chen", 'institution': "University of Waterloo"},
                {'name': "Yunyu Cao", 'institution': "University of Waterloo"},
                {'name': "Yang You", 'institution': "University of Waterloo"},
                {'name': "Hongyue Liu", 'institution': "University of Waterloo"},
                {'name': "Qinghua Liu", 'institution': "University of Waterloo"},
                {'name': "Jinpeng Yang", 'institution': "University of Waterloo"},
                {'name': "Xiaosong Wang", 'institution': "University of Waterloo"}
            ]
        },
        {
            'id': "1014",
            'title': "A Visual Analysis of Congestion Pricing Policy Effect on Congestion Alleviation",
            'author': [
                {'name': "SeokHwan Choi", 'institution': "Sejong Univsersity"},
                {'name': "Sangbong Yoo", 'institution': "Sejong Univsersity"},
                {'name': "Yun Jang", 'institution': "Sejong Univsersity"},
            ]
        },
        {
            'id': "1015",
            'title': "A Study on Activity Visualization for Smart Watches",
            'author': [
                {'name': "Zhouxuan Xia", 'institution': "Xi'an Jiaotong-Liverpool University Fabiola Polidoro"},
                {'name': "Yu Liu", 'institution': "Xi'an Jiaotong-Liverpool University Fabiola Polidoro"},
                {'name': "Fabiola Polidoro", 'institution': "Xi'an Jiaotong-Liverpool University Fabiola Polidoro"}
            ]
        },
        {
            'id': "1017",
            'title': "Table2Table: ...",
            'author': [
                {'name': "Ruike Jiang", 'institution': "Peking University"},
                {'name': "Yuchu Luo", 'institution': "Peking University"},
                {'name': "Hanning Shao", 'institution': "Peking University"},
                {'name': "Chiteng Ma", 'institution': "Peking University"},
                {'name': "Datong Wei", 'institution': "Peking University"},
                {'name': "Michael McGuffin", 'institution': "Peking University"},
                {'name': "Xiaoru Yuan", 'institution': "Peking University"}
            ]
        },
        {
            'id': "1016",
            'title': "Designing visualizations for experts and non-experts for online data",
            'author': [
                {'name': "Hayeong Song", 'institution': "Georgia Institute of Technology"},
                {'name': "John Stasko", 'institution': "Georgia Institute of Technology"}
            ]
        }
    ]
};