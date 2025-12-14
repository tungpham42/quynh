export interface Vocab {
  hanzi: string;
  pinyin: string;
  meaning: string; // Nghĩa tiếng Việt
}

export interface DialogueLine {
  speaker: string;
  hanzi: string;
  pinyin: string;
  meaning: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  vocab: Vocab[];
  dialogue: DialogueLine[];
}

export const lessons: Lesson[] = [
  {
    id: "bai-1",
    title: "Bài 1: Chào hỏi",
    description: "Học cách chào hỏi cơ bản và giới thiệu tên.",
    vocab: [
      { hanzi: "你好", pinyin: "Nǐ hǎo", meaning: "Xin chào" },
      { hanzi: "我是", pinyin: "Wǒ shì", meaning: "Tôi là" },
      { hanzi: "很高兴", pinyin: "Hěn gāoxìng", meaning: "Rất vui" },
      { hanzi: "认识", pinyin: "Rènshi", meaning: "Quen biết" },
      { hanzi: "再见", pinyin: "Zàijiàn", meaning: "Tạm biệt" },
    ],
    dialogue: [
      {
        speaker: "A",
        hanzi: "你好！",
        pinyin: "Nǐ hǎo!",
        meaning: "Xin chào!",
      },
      {
        speaker: "B",
        hanzi: "你好！我是南。",
        pinyin: "Nǐ hǎo! Wǒ shì Nán.",
        meaning: "Chào bạn! Tôi là Nam.",
      },
      {
        speaker: "A",
        hanzi: "很高兴认识你。",
        pinyin: "Hěn gāoxìng rènshi nǐ.",
        meaning: "Rất vui được làm quen.",
      },
      {
        speaker: "B",
        hanzi: "我也很高兴。",
        pinyin: "Wǒ yě hěn gāoxìng.",
        meaning: "Tôi cũng rất vui.",
      },
    ],
  },
  {
    id: "bai-2",
    title: "Bài 2: Mua sắm",
    description: "Hỏi giá cả và mặc cả đơn giản.",
    vocab: [
      { hanzi: "多少钱", pinyin: "Duōshǎo qián", meaning: "Bao nhiêu tiền" },
      { hanzi: "太贵了", pinyin: "Tài guì le", meaning: "Đắt quá" },
      { hanzi: "便宜", pinyin: "Piányí", meaning: "Rẻ" },
      { hanzi: "这个", pinyin: "Zhège", meaning: "Cái này" },
      { hanzi: "买", pinyin: "Mǎi", meaning: "Mua" },
    ],
    dialogue: [
      {
        speaker: "A",
        hanzi: "老板，这个多少钱？",
        pinyin: "Lǎobǎn, zhège duōshǎo qián?",
        meaning: "Ông chủ, cái này bao nhiêu tiền?",
      },
      {
        speaker: "B",
        hanzi: "这个一百块。",
        pinyin: "Zhège yībǎi kuài.",
        meaning: "Cái này 100 tệ.",
      },
      {
        speaker: "A",
        hanzi: "太贵了！便宜一点吧。",
        pinyin: "Tài guì le! Piányí yīdiǎn ba.",
        meaning: "Đắt quá! Bớt chút đi.",
      },
      {
        speaker: "B",
        hanzi: "好吧，八十块。",
        pinyin: "Hǎo ba, bāshí kuài.",
        meaning: "Được thôi, 80 tệ.",
      },
    ],
  },
  {
    id: "bai-3",
    title: "Bài 3: Thời gian",
    description: "Hỏi giờ và nói về thời gian trong ngày.",
    vocab: [
      { hanzi: "现在", pinyin: "Xiànzài", meaning: "Bây giờ" },
      { hanzi: "几点", pinyin: "Jǐ diǎn", meaning: "Mấy giờ" },
      { hanzi: "今天", pinyin: "Jīntiān", meaning: "Hôm nay" },
      { hanzi: "忙", pinyin: "Máng", meaning: "Bận" },
      { hanzi: "有空", pinyin: "Yǒu kòng", meaning: "Rảnh rỗi" },
    ],
    dialogue: [
      {
        speaker: "A",
        hanzi: "请问，现在几点？",
        pinyin: "Qǐngwèn, xiànzài jǐ diǎn?",
        meaning: "Xin hỏi, bây giờ là mấy giờ?",
      },
      {
        speaker: "B",
        hanzi: "现在是下午两点半。",
        pinyin: "Xiànzài shì xiàwǔ liǎng diǎn bàn.",
        meaning: "Bây giờ là 2 rưỡi chiều.",
      },
      {
        speaker: "A",
        hanzi: "今天你忙吗？",
        pinyin: "Jīntiān nǐ máng ma?",
        meaning: "Hôm nay bạn có bận không?",
      },
      {
        speaker: "B",
        hanzi: "我不忙，我有空。",
        pinyin: "Wǒ bù máng, wǒ yǒu kòng.",
        meaning: "Tôi không bận, tôi rảnh.",
      },
    ],
  },
  {
    id: "bai-4",
    title: "Bài 4: Gọi món",
    description: "Đặt món ăn tại nhà hàng.",
    vocab: [
      { hanzi: "服务员", pinyin: "Fúwùyuán", meaning: "Phục vụ" },
      { hanzi: "菜单", pinyin: "Càidān", meaning: "Thực đơn/Menu" },
      { hanzi: "吃", pinyin: "Chī", meaning: "Ăn" },
      { hanzi: "面条", pinyin: "Miàntiáo", meaning: "Mì" },
      { hanzi: "好吃", pinyin: "Hǎochī", meaning: "Ngon" },
    ],
    dialogue: [
      {
        speaker: "A",
        hanzi: "服务员，我要点菜。",
        pinyin: "Fúwùyuán, wǒ yào diǎn cài.",
        meaning: "Phục vụ, tôi muốn gọi món.",
      },
      {
        speaker: "B",
        hanzi: "你想吃什么？",
        pinyin: "Nǐ xiǎng chī shénme?",
        meaning: "Quý khách muốn ăn gì?",
      },
      {
        speaker: "A",
        hanzi: "我要一碗牛肉面。",
        pinyin: "Wǒ yào yī wǎn niúròu miàn.",
        meaning: "Cho tôi một bát mì bò.",
      },
      {
        speaker: "B",
        hanzi: "好的，请稍等。",
        pinyin: "Hǎo de, qǐng shāo děng.",
        meaning: "Vâng, xin chờ một chút.",
      },
    ],
  },
  {
    id: "bai-5",
    title: "Bài 5: Gia đình",
    description: "Giới thiệu về các thành viên trong gia đình.",
    vocab: [
      { hanzi: "家", pinyin: "Jiā", meaning: "Nhà/Gia đình" },
      {
        hanzi: "几口人",
        pinyin: "Jǐ kǒu rén",
        meaning: "Mấy người (nhân khẩu)",
      },
      { hanzi: "爸爸", pinyin: "Bàba", meaning: "Bố" },
      { hanzi: "妈妈", pinyin: "Māma", meaning: "Mẹ" },
      { hanzi: "哥哥", pinyin: "Gēge", meaning: "Anh trai" },
    ],
    dialogue: [
      {
        speaker: "A",
        hanzi: "你家有几口人？",
        pinyin: "Nǐ jiā yǒu jǐ kǒu rén?",
        meaning: "Nhà bạn có mấy người?",
      },
      {
        speaker: "B",
        hanzi: "我家有四口人。",
        pinyin: "Wǒ jiā yǒu sì kǒu rén.",
        meaning: "Nhà tôi có 4 người.",
      },
      {
        speaker: "A",
        hanzi: "他们是谁？",
        pinyin: "Tāmen shì shéi?",
        meaning: "Họ là những ai?",
      },
      {
        speaker: "B",
        hanzi: "爸爸、妈妈、哥哥和我。",
        pinyin: "Bàba, māma, gēge hé wǒ.",
        meaning: "Bố, mẹ, anh trai và tôi.",
      },
    ],
  },
  {
    id: "bai-6",
    title: "Bài 6: Hỏi đường",
    description: "Hỏi vị trí và hướng đi.",
    vocab: [
      { hanzi: "在哪儿", pinyin: "Zài nǎr", meaning: "Ở đâu" },
      { hanzi: "怎么走", pinyin: "Zěnme zǒu", meaning: "Đi như thế nào" },
      { hanzi: "一直走", pinyin: "Yīzhí zǒu", meaning: "Đi thẳng" },
      { hanzi: "左拐", pinyin: "Zuǒ guǎi", meaning: "Rẽ trái" },
      { hanzi: "地铁站", pinyin: "Dìtiě zhàn", meaning: "Trạm tàu điện ngầm" },
    ],
    dialogue: [
      {
        speaker: "A",
        hanzi: "请问，地铁站在哪儿？",
        pinyin: "Qǐngwèn, dìtiě zhàn zài nǎr?",
        meaning: "Xin hỏi, trạm tàu điện ngầm ở đâu?",
      },
      {
        speaker: "B",
        hanzi: "在前面。",
        pinyin: "Zài qiánmiàn.",
        meaning: "Ở phía trước.",
      },
      {
        speaker: "A",
        hanzi: "怎么走？",
        pinyin: "Zěnme zǒu?",
        meaning: "Đi đường nào (đi như thế nào)?",
      },
      {
        speaker: "B",
        hanzi: "一直走，然后左拐。",
        pinyin: "Yīzhí zǒu, ránhòu zuǒ guǎi.",
        meaning: "Đi thẳng, sau đó rẽ trái.",
      },
    ],
  },
  {
    id: "bai-7",
    title: "Bài 7: Sở thích",
    description: "Nói về những gì bạn thích làm.",
    vocab: [
      { hanzi: "喜欢", pinyin: "Xǐhuān", meaning: "Thích" },
      { hanzi: "做什么", pinyin: "Zuò shénme", meaning: "Làm gì" },
      { hanzi: "听音乐", pinyin: "Tīng yīnyuè", meaning: "Nghe nhạc" },
      { hanzi: "看电影", pinyin: "Kàn diànyǐng", meaning: "Xem phim" },
      { hanzi: "运动", pinyin: "Yùndòng", meaning: "Thể thao" },
    ],
    dialogue: [
      {
        speaker: "A",
        hanzi: "周末你喜欢做什么？",
        pinyin: "Zhōumò nǐ xǐhuān zuò shénme?",
        meaning: "Cuối tuần bạn thích làm gì?",
      },
      {
        speaker: "B",
        hanzi: "我喜欢在家听音乐。",
        pinyin: "Wǒ xǐhuān zài jiā tīng yīnyuè.",
        meaning: "Tôi thích ở nhà nghe nhạc.",
      },
      {
        speaker: "A",
        hanzi: "你喜欢运动吗？",
        pinyin: "Nǐ xǐhuān yùndòng ma?",
        meaning: "Bạn có thích thể thao không?",
      },
      {
        speaker: "B",
        hanzi: "不太喜欢。",
        pinyin: "Bù tài xǐhuān.",
        meaning: "Không thích lắm.",
      },
    ],
  },
  {
    id: "bai-8",
    title: "Bài 8: Công việc",
    description: "Hỏi về nghề nghiệp và nơi làm việc.",
    vocab: [
      { hanzi: "工作", pinyin: "Gōngzuò", meaning: "Công việc/Làm việc" },
      { hanzi: "老师", pinyin: "Lǎoshī", meaning: "Giáo viên" },
      { hanzi: "医生", pinyin: "Yīshēng", meaning: "Bác sĩ" },
      { hanzi: "公司", pinyin: "Gōngsī", meaning: "Công ty" },
      { hanzi: "累", pinyin: "Lèi", meaning: "Mệt" },
    ],
    dialogue: [
      {
        speaker: "A",
        hanzi: "你在哪儿工作？",
        pinyin: "Nǐ zài nǎr gōngzuò?",
        meaning: "Bạn làm việc ở đâu?",
      },
      {
        speaker: "B",
        hanzi: "我在一家公司工作。",
        pinyin: "Wǒ zài yījiā gōngsī gōngzuò.",
        meaning: "Tôi làm việc tại một công ty.",
      },
      {
        speaker: "A",
        hanzi: "工作忙吗？",
        pinyin: "Gōngzuò máng ma?",
        meaning: "Công việc có bận không?",
      },
      {
        speaker: "B",
        hanzi: "很忙，也很累。",
        pinyin: "Hěn máng, yě hěn lèi.",
        meaning: "Rất bận, cũng rất mệt.",
      },
    ],
  },
  {
    id: "bai-9",
    title: "Bài 9: Thời tiết",
    description: "Hỏi thăm về thời tiết hôm nay.",
    vocab: [
      { hanzi: "天气", pinyin: "Tiānqì", meaning: "Thời tiết" },
      { hanzi: "怎么样", pinyin: "Zěnmeyàng", meaning: "Như thế nào" },
      { hanzi: "热", pinyin: "Rè", meaning: "Nóng" },
      { hanzi: "冷", pinyin: "Lěng", meaning: "Lạnh" },
      { hanzi: "下雨", pinyin: "Xià yǔ", meaning: "Mưa" },
    ],
    dialogue: [
      {
        speaker: "A",
        hanzi: "今天天气怎么样？",
        pinyin: "Jīntiān tiānqì zěnmeyàng?",
        meaning: "Thời tiết hôm nay thế nào?",
      },
      {
        speaker: "B",
        hanzi: "今天很热。",
        pinyin: "Jīntiān hěn rè.",
        meaning: "Hôm nay rất nóng.",
      },
      {
        speaker: "A",
        hanzi: "明天会下雨吗？",
        pinyin: "Míngtiān huì xià yǔ ma?",
        meaning: "Ngày mai có mưa không?",
      },
      {
        speaker: "B",
        hanzi: "明天不冷也不热。",
        pinyin: "Míngtiān bù lěng yě bù rè.",
        meaning: "Ngày mai không lạnh cũng không nóng.",
      },
    ],
  },
  {
    id: "bai-10",
    title: "Bài 10: Sức khỏe",
    description: "Nói về tình trạng sức khỏe đơn giản.",
    vocab: [
      { hanzi: "身体", pinyin: "Shēntǐ", meaning: "Cơ thể/Sức khỏe" },
      { hanzi: "不舒服", pinyin: "Bù shūfú", meaning: "Không khỏe/Khó chịu" },
      { hanzi: "生病", pinyin: "Shēngbìng", meaning: "Bị ốm" },
      { hanzi: "去", pinyin: "Qù", meaning: "Đi" },
      { hanzi: "医院", pinyin: "Yīyuàn", meaning: "Bệnh viện" },
    ],
    dialogue: [
      {
        speaker: "A",
        hanzi: "你身体好吗？",
        pinyin: "Nǐ shēntǐ hǎo ma?",
        meaning: "Sức khỏe bạn tốt không?",
      },
      {
        speaker: "B",
        hanzi: "我有点不舒服。",
        pinyin: "Wǒ yǒudiǎn bù shūfú.",
        meaning: "Tôi hơi khó chịu trong người.",
      },
      {
        speaker: "A",
        hanzi: "你去医院了吗？",
        pinyin: "Nǐ qù yīyuàn le ma?",
        meaning: "Bạn đi bệnh viện chưa?",
      },
      {
        speaker: "B",
        hanzi: "还没，我想休息一下。",
        pinyin: "Hái méi, wǒ xiǎng xiūxí yīxià.",
        meaning: "Vẫn chưa, tôi muốn nghỉ ngơi một chút.",
      },
    ],
  },
  {
    id: "bai-11",
    title: "Bài 11: Đi Taxi",
    description: "Cách gọi xe và chỉ đường cho tài xế.",
    vocab: [
      { hanzi: "出租车", pinyin: "Chūzū chē", meaning: "Taxi" },
      { hanzi: "司机", pinyin: "Sījī", meaning: "Tài xế" },
      { hanzi: "机场", pinyin: "Jīchǎng", meaning: "Sân bay" },
      { hanzi: "快", pinyin: "Kuài", meaning: "Nhanh" },
      { hanzi: "到了", pinyin: "Dào le", meaning: "Đến nơi rồi" },
    ],
    dialogue: [
      {
        speaker: "A",
        hanzi: "司机，我要去机场。",
        pinyin: "Sījī, wǒ yào qù jīchǎng.",
        meaning: "Bác tài, tôi muốn đi sân bay.",
      },
      {
        speaker: "B",
        hanzi: "好的，请上车。",
        pinyin: "Hǎo de, qǐng shàng chē.",
        meaning: "Được, mời lên xe.",
      },
      {
        speaker: "A",
        hanzi: "请开快一点。",
        pinyin: "Qǐng kāi kuài yīdiǎn.",
        meaning: "Làm ơn lái nhanh một chút.",
      },
      {
        speaker: "B",
        hanzi: "没问题。到了！",
        pinyin: "Méi wèntí. Dào le!",
        meaning: "Không vấn đề. Đến nơi rồi!",
      },
    ],
  },
  {
    id: "bai-12",
    title: "Bài 12: Khách sạn",
    description: "Làm thủ tục nhận phòng khách sạn.",
    vocab: [
      { hanzi: "酒店", pinyin: "Jiǔdiàn", meaning: "Khách sạn" },
      { hanzi: "预订", pinyin: "Yùdìng", meaning: "Đặt trước" },
      { hanzi: "房间", pinyin: "Fángjiān", meaning: "Phòng" },
      { hanzi: "护照", pinyin: "Hùzhào", meaning: "Hộ chiếu" },
      { hanzi: "房卡", pinyin: "Fáng kǎ", meaning: "Thẻ phòng" },
    ],
    dialogue: [
      {
        speaker: "A",
        hanzi: "你好，我要办入住。",
        pinyin: "Nǐ hǎo, wǒ yào bàn rùzhù.",
        meaning: "Xin chào, tôi muốn làm thủ tục nhận phòng.",
      },
      {
        speaker: "B",
        hanzi: "你预订了吗？",
        pinyin: "Nǐ yùdìng le ma?",
        meaning: "Quý khách đã đặt trước chưa?",
      },
      {
        speaker: "A",
        hanzi: "预订了。这是我的护照。",
        pinyin: "Yùdìng le. Zhè shì wǒ de hùzhào.",
        meaning: "Đặt rồi. Đây là hộ chiếu của tôi.",
      },
      {
        speaker: "B",
        hanzi: "好的，这是你的房卡。",
        pinyin: "Hǎo de, zhè shì nǐ de fáng kǎ.",
        meaning: "Vâng, đây là thẻ phòng của quý khách.",
      },
    ],
  },
];
