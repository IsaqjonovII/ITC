import {
  androidIcon,
  codeIcon,
  graphicIcon,
  serverIcon,
  smmIcon,
} from "assets";

let id = 0;
export const coursesData = [
  {
    id: id++,
    title: "Front-end",
    subtitle: "Vebsayt ko'rinishini chiroyli, tushinishga oson qiladi",
    learn__more: "",
    skills: ["HTML, CSS, Javascript, Git, Github"],
    icon: codeIcon,
  },
  {
    id: id++,
    title: "Backend-end",
    subtitle: "Foydalanuvchiga ko'rinmaydigan ishlar bajariladi",
    learn__more: "",
    skills: ["Python, Django"],
    icon: serverIcon,
  },
  {
    id: id++,
    title: "Android",
    subtitle: "Android qurilmalar uchun dasturlar yaratiladi",
    learn__more: "",
    icon: androidIcon,
  },
  {
    id: id++,
    title: "Grafik Dizayn",
    subtitle: "Bir qarashda ko'zga tashlanadigan dizaynlar yaratadi",
    learn__more: "",
    icon: graphicIcon,
  },
  {
    id: id++,
    title: "SMM",
    subtitle: "Ijtimoiy tarmoqlarni rivojlantirish va unga postlar yaratish",
    learn__more: "",
    icon: smmIcon,
  },
];
