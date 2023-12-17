import {
  androidIcon,
  codeIcon,
  graphicIcon,
  serverIcon,
  smmIcon,
  instaIcon,
  tgIcon,
  codeBg,
  backendBg,
  androBG,
  designBg,
  smmBg,
  githubIcon,
} from "assets";

let id = 0;
export const coursesData = [
  {
    id: id++,
    title: "Front-end",
    subtitle: "Vebsayt ko'rinishini chiroyli, tushinishga oson qiladi",
    learn_more:
      "Frontend deb ilova yoki veb sahifani foydalanuvchiga ko'rinib turadigan qismiga aytiladi. Foydalanuvchi ko'rib turgan va u ishlatayotgan har qanday xususiyat bu frontendga aloqador. Frontend o'z ichiga UI (user interface) va UX (user experience) oladi. Frontend kursimizda siz quyidagi texnologiyalarni o'rganasiz:",
    skills: ["HTML", "CSS", "JAVASCRIPT", "GIT", "GITHUB"],
    icon: codeIcon,
    banner: codeBg,
    period: "6 oy",
  },
  {
    id: id++,
    title: "Backend-end",
    subtitle: "Foydalanuvchiga ko'rinmaydigan ishlar bajariladi",
    learn_more:
      "Backend  -  veb sahifaning bu foydalanuvchiga ko'rinmaydigan qismidir. Backendda serverlar bilan ishlanadi. Frontendda so'ralgan ma'lumotni jo'natadi yoki Frotenddan yuborilgan so'rovlarni qabul qilib oladi. Backend kursimizda siz quyidagi texnologiyalarni o'rganasiz: ",
    skills: ["Python", "Django"],
    icon: serverIcon,
    banner: backendBg,
    period: "6 oy",
  },
  {
    id: id++,
    title: "Android",
    subtitle: "Android qurilmalar uchun dasturlar yaratiladi",
    learn_more:
      "Bu kursda siz Anroid operatsion tizimida ishlovchi qurilmalar uchun ya'ni smartfon, planshet, soat va shunga o'xshash qurilmalarga dastur tuzishni o'rganasiz. Va siz o'rganadigan textnologiyalar: ",
    skills: ["Dart", "Flutter"],
    icon: androidIcon,
    banner: androBG,
    period: "8 oy",
  },
  {
    id: id++,
    title: "Grafik Dizayn",
    subtitle: "Bir qarashda ko'zga tashlanadigan dizaynlar yaratadi",
    learn_more:
      "Siz deyarli har kuni uchratadigan logotiplar, flayerlar, bannerlar aynan grafik dizaynerlar tomonidan yasaladi. Reklama sohasining asosida Grafik Design turadi. Shunday ekan bu sohaga doimo talab bo'ladi. ",
    skills: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "CoreIDRAW",
      "Canva",
      "Grafik dizayn nazariyasi va amaliyoti",
    ],
    icon: graphicIcon,
    banner: designBg,
    period: "6 oy",
  },
  {
    id: id++,
    title: "SMM",
    subtitle: "Ijtimoiy tarmoqlarni rivojlantirish va unga postlar yaratish",
    learn_more:
      "SMM - Social Media Marketing. Uning asosiy maqsadi ijtimoiy tarmoqlardan mijozlarni mahsulot  va xizmatlaringizga jalb etishdir. Kursimizda quyidagilarni o'rganasiz: ",
    skills: [
      "Raqamli marketing asoslari",
      "SEO",
      "Google Ads",
      "Kopirayting",
      "Biznes uchun SMM",
    ],
    icon: smmIcon,
    banner: smmBg,
    period: "2 oy",
  },
];

export const causes = [
  "Qulay, shinam va zamonaviy xonalar",
  "Arzon narxlar va Sifatli ta'lim",
  "Har bir dars yozib olinadi va telegram guruhga joylab boriladi",
  "Tajribali o'qituvchilar",
  "Bo'sh vaqtda ham kelsangiz bo'ladi",
  "Dam olish uchun Cyber Arena",
];
export const socialLinks = [
  {
    id: id++,
    path: "https://instagram.com/itcenter.nurafshon",
    icon: instaIcon,
  },
  {
    id: id++,
    path: "https://t.me/itc_nurafshon",
    icon: tgIcon,
  },
  {
    id: id++,
    path: "https://github.com/itcNurafshon",
    icon: githubIcon,
  },
];
