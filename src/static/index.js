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
} from "assets";

let id = 0;
export const coursesData = [
  {
    id: id++,
    title: "Front-end",
    subtitle: "Vebsayt ko'rinishini chiroyli, tushinishga oson qiladi",
    learn_more:
      "Frontend deb ilova yoki veb sahifani foydalanuvchiga ko'rinib turadigan qismiga aytiladi. Foydalanuvchi ko'rib turgan va u ishlatayotgan har qanday xususiyat bu frontenga aloqador. Frontend o'z ichiga UI (user interface) va UX (user experience) oladi. Frontend kursimizda siz quyidagi texnologiyalarni o'rganasiz:",
    skills: ["HTML", "CSS", "JAVASCRIPT", "GIT", "GITHUB"],
    icon: codeIcon,
    banner: codeBg,
  },
  {
    id: id++,
    title: "Backend-end",
    subtitle: "Foydalanuvchiga ko'rinmaydigan ishlar bajariladi",
    learn_more: "Backend",
    skills: ["Python", "Django"],
    icon: serverIcon,
    banner: backendBg,
  },
  {
    id: id++,
    title: "Android",
    subtitle: "Android qurilmalar uchun dasturlar yaratiladi",
    learn_more: "",
    skills: ["Dart", "Flutter"],
    icon: androidIcon,
    banner: androBG,
  },
  {
    id: id++,
    title: "Grafik Dizayn",
    subtitle: "Bir qarashda ko'zga tashlanadigan dizaynlar yaratadi",
    learn_more: "",
    skills: ["Sketch", "CoreIDRAW", "Canva", "Figma"],
    icon: graphicIcon,
    banner: designBg,
  },
  {
    id: id++,
    title: "SMM",
    subtitle: "Ijtimoiy tarmoqlarni rivojlantirish va unga postlar yaratish",
    learn_more: "",
    skills: ["Google Analitics", "Facebook Ads manager", "Google Ads"],
    icon: smmIcon,
    banner: smmBg,
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
];
