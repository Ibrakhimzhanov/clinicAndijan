import { reactive } from 'vue'

import slide1 from './assets/slide-1.svg'
import slide2 from './assets/slide-2.svg'
import slide3 from './assets/slide-3.svg'

import ins from './assets/ins.svg'
import tg from './assets/tel.svg'
import fac from './assets/fac.svg'
import ax from './assets/Axrorbek.jpg'
import mr from './assets/Murodjon.jpg'
import vac from './assets/doc-vac.jpg'

import vt from './assets/vitiligo.png'
import ps from './assets/psoriaz.png'
import xs from './assets/xusnbuzar.png'
import soch from './assets/soch.png'
import tir from './assets/tirnoqdagi.png'
import tr from './assets/teri.png'

import iq from './assets/iqbol.png'
import ll from './assets/lola.png'
import ab from './assets/abror.png'

export const slides = [
  {
    id: 0,
    label: 'Teri kasalliklarini davolash, oldini olish va reabilitatsiyasi markazi.',
    title:
      'Eksimer lazer, Vud lampa, kriodestruktor, elektrokoagulyator kabi zamonaviy tibbiy uskunalar bilan jihozlangan',
    img: slide1,
    top: 4
  },
  {
    id: 1,
    label: 'Sochdagi kasalliklarni davolash, oldini olish va reabilitatsiyasi markazi.',
    title:
      'Eksimer lazer, Vud lampa, kriodestruktor, elektrokoagulyator kabi zamonvaiy tibbiy uskunalar bilan jihozlangan',
    img: slide2,
    top: 4
  },
  {
    id: 2,
    label: 'Teri kasalliklarini davolash, oldini olish va reabilitatsiyasi markazi.',
    title:
      'Eksimer lazer, Vud lampa, kriodestruktor, elektrokoagulyator kabi zamonvaiy tibbiy uskunalar bilan jihozlangan',
    img: slide3,
    top: 10
  }
]

export const socialMedia = [
  {
    name: 'Instagram',
    img: ins,
    url: 'https://www.instagram.com/anderma.uz/'
  },
  {
    name: 'Telegram',
    img: tg,
    url: 'https://t.me/andermauz'
  },
  {
    name: 'Facebook',
    img: fac,
    url: 'https://www.facebook.com/anderma.uz/'
  }
]

export const personals = [
  {
    name: 'Axrorbek Abduraxmanov',
    position: 'Dermotolog',
    description:
      '1990-yilda Andijon shahrida tug’ilgan. 2017-yildan Dermatolog mutaxassisi sifatida xizmat ko’rsatadi. Andijon davlat tibbiyot institutida katta o’qituvchi lavozimida ishlaydi. 6 yillik faoliyati davomida ko’plab teri kasalliklari bilan aziyat chekkan insonlarni davolagan. Asosan, vitiligo (oq dog’ kasalligi), psoriaz, husnbuzar, ekzema kabi teridagi murakkab kasalliklarni tashxislash va davolash amaliyoti bo’yicha Germaniya davlatining yetuk mutaxassislari bilan hamkorlik qilib keladi. Tirnoqdagi o’zgarishlarni davolashni yo’lga qo’yish maqsadida podologiya kursini tamomlab, podologiya bo’yicha murakkab amaliyotlarni yo’lga qo’ygan. Shuningdek, soch to’kilishi haqidagi fan, ya’ni trixologiya fanini ham mukammal egallab, soch to’kilishining konservativ davosi va soch ekish (FUE) amaliyotini ham mukammal amalga oshirmoqda.',
    img: ax,
    href: 'doctor-axrorbek'
  },
  {
    name: "Murodjon Mo'minov",
    position: 'Dermotolog',
    description:
      '1990-yilda Buloqboshi tumanida tug’ilgan. 2017-yildan Dermatolog mutaxassisi sifatida xizmat ko’rsatadi. Andijon davlat tibbiyot institutida o’qituvchi lavozimida ishlaydi. 6 yillik faoliyati davomida ko’plab teri kasalliklari bilan aziyat chekkan insonlarni davolagan. Asosan, vitiligo (oq dog’ kasalligi), psoriaz, ekzema kabi teridagi murakkab kasalliklarni tashxislash va davolash, shuningdek kriodestruktor va elektrokoagulyator uskunalari yordamida so’gal, qadoq va papillomalarni davolash amaliyoti bo’yicha katta tajribaga ega.',
    img: mr,
    href: 'doctor-murodjon'
  },
  {
    name: 'Vacancy',
    position: 'Ish faoliyati',
    img: vac,
    href: '#'
  }
]

export const services = [
  {
    title: 'VITILIGO (Oq dog’)',
    subtitle:
      "VITILIGO (OQ DOG') kasalligini davolash Vitiligo (oq dog’) kasalligiga Vud lampa yordamida tashxis qo’yish va Eksimer lazer yordamida davolash",
    img: vt
  },
  {
    title: 'PSORIAZ kasalligi',
    subtitle:
      'Psoriazda Yevropa standardlarida davolash (3-5 yilgacha kasallikni nofoal davrda ushlab turish)',
    img: ps
  },
  {
    title: 'HUSNBUZAR kasalligi',
    subtitle: 'Husnbuzar kasalligini aniq sabablarga qaratilgan zamonaviy davolash usuli',
    img: xs
  },
  {
    title: 'SOCH to’kilishi',
    subtitle:
      'Soch to’kilishining aniq sabablarini aniqlash Soch ekish (ko’chirib o’tkazish FUE) amaliyoti',
    img: soch
  },
  {
    title: 'TIRNOQDAGI o’zgarishlar',
    subtitle:
      'PODOLOGIYA – tirnoq qalinlashishi, teri ichiga o’sishi, tovon terisidagi muammolarga zamonaviy yechim',
    img: tir
  },
  {
    title: 'BOLALARDAGI teri kasalliklari',
    subtitle: 'Bolalar terisidagi o’zgarishlar va kasalliklarni tashxislash va davolash.',
    img: tr
  }
]

export const cards = [
  {
    id: 0,
    label: 'Batafsil',
    title: 'Yangiliklar',
    subtitle: 'Litvada plastik jarrohlik - sizni hayratda qoldiradi!',
    text: "Yuzingiz va tanangiz qanday ko'rinishini tasavvur qilsangiz, siz ham mukammal plastik jarrohlik tajribasini xohlaysiz."
  },
  {
    id: 1,
    label: 'Batafsil',
    title: 'Yangiliklar',
    subtitle: 'Litvada plastik jarrohlik - sizni hayratda qoldiradi!',
    text: "Yuzingiz va tanangiz qanday ko'rinishini tasavvur qilsangiz, siz ham mukammal plastik jarrohlik tajribasini xohlaysiz."
  },
  {
    id: 2,
    label: 'Batafsil',
    title: 'Yangiliklar',
    subtitle: 'Litvada plastik jarrohlik - sizni hayratda qoldiradi!',
    text: "Yuzingiz va tanangiz qanday ko'rinishini tasavvur qilsangiz, siz ham mukammal plastik jarrohlik tajribasini xohlaysiz."
  },
  {
    id: 3,
    label: 'Batafsil',
    title: 'Yangiliklar',
    subtitle: 'Litvada plastik jarrohlik - sizni hayratda qoldiradi!',
    text: "Yuzingiz va tanangiz qanday ko'rinishini tasavvur qilsangiz, siz ham mukammal plastik jarrohlik tajribasini xohlaysiz."
  },
  {
    id: 4,
    label: 'Batafsil',
    title: 'Yangiliklar',
    subtitle: 'Litvada plastik jarrohlik - sizni hayratda qoldiradi!',
    text: "Yuzingiz va tanangiz qanday ko'rinishini tasavvur qilsangiz, siz ham mukammal plastik jarrohlik tajribasini xohlaysiz."
  },
  {
    id: 5,
    label: 'Batafsil',
    title: 'Yangiliklar',
    subtitle: 'Litvada plastik jarrohlik - sizni hayratda qoldiradi!',
    text: "Yuzingiz va tanangiz qanday ko'rinishini tasavvur qilsangiz, siz ham mukammal plastik jarrohlik tajribasini xohlaysiz."
  }
]
export const cards = [
  {
    id: 0,
    label: 'Batafsil',
    title: 'Yangiliklar',
    subtitle: 'Litvada plastik jarrohlik - sizni hayratda qoldiradi!',
    text: "Yuzingiz va tanangiz qanday ko'rinishini tasavvur qilsangiz, siz ham mukammal plastik jarrohlik tajribasini xohlaysiz."
  },
  {
    id: 1,
    label: 'Batafsil',
    title: 'Yangiliklar',
    subtitle: 'Litvada plastik jarrohlik - sizni hayratda qoldiradi!',
    text: "Yuzingiz va tanangiz qanday ko'rinishini tasavvur qilsangiz, siz ham mukammal plastik jarrohlik tajribasini xohlaysiz."
  }
]

export const feedbackUsers = [
  {
    id: 0,
    name: 'Iqbol Xoliqov',
    position: 'Shifokor Nevropotolog',
    img: iq
  },
  {
    id: 1,
    name: 'Lola Baxtiyorovna',
    position: "O'qituvchi, Oliy",
    img: ll
  },
  {
    id: 2,
    name: 'Abrorbek Ibrokhimov',
    position: 'UX/UI Dizayner',
    img: ab
  }
]
export const feedbackDescriptions = [
  {
    id: 0,
    title: "Bu ajoyib tajriba bo'ldi",
    rate: '★ ★ ★ ★ ★ ★',
    description:
      "Ularning aksariyati xorijiy yetakchi klinikalarda amaliyot o'tagan va ish tajribasiga ega bo'lgan fan doktori nomzodlari.  </br> </br> Yuqori professionallik va so'nggi tadqiqot usullari bizga nafaqat tashxis qo'yish, balki turli darajadagi murakkablikdagi kasalliklarga chalingan bemorlarni juda samarali davolash imkonini beradi. Agar siz sog'liq muammolari bilan bezovtalansangiz-biz bilan bog'laning, biz sizga yordam beramiz! </br></br>Kabinetlar 'Siemens' (Germaniya), 'Flibs' (Niderlandiya), 'Drager' (Germaniya), 'Karl Storz' (Germaniya) kabi brendlar ostida Yevropa sifatidagi eng zamonaviy uskunalar bilan jihozlangan bo'lib, bu barcha zarur tadqiqotlarni sifatli va tezkor o'tkazish, buzilish va patologiyalarni aniqlash, davolash jarayonini kuzatib borish va kasalliklarning yanada rivojlanishiga yo'l qo'ymaslik imkonini beradi."
  },
  {
    id: 1,
    title: 'Yaxshi',
    rate: '★ ★ ★ ★ ★ ★',
    description:
      "Ularning aksariyati xorijiy yetakchi klinikalarda amaliyot o'tagan va ish tajribasiga ega bo'lgan fan doktori nomzodlari.  </br> </br> Yuqori professionallik va so'nggi tadqiqot usullari bizga nafaqat tashxis qo'yish, balki turli darajadagi murakkablikdagi kasalliklarga chalingan bemorlarni juda samarali davolash imkonini beradi. Agar siz sog'liq muammolari bilan bezovtalansangiz-biz bilan bog'laning, biz sizga yordam beramiz! </br></br>Kabinetlar 'Siemens' (Germaniya), 'Flibs' (Niderlandiya), 'Drager' (Germaniya), 'Karl Storz' (Germaniya) kabi brendlar ostida Yevropa sifatidagi eng zamonaviy uskunalar bilan jihozlangan bo'lib, bu barcha zarur tadqiqotlarni sifatli va tezkor o'tkazish, buzilish va patologiyalarni aniqlash, davolash jarayonini kuzatib borish va kasalliklarning yanada rivojlanishiga yo'l qo'ymaslik imkonini beradi."
  },
  {
    id: 2,
    title: 'Menga yordam berdi',
    rate: '★ ★ ★ ★ ★ ★',
    description:
      "Ularning aksariyati xorijiy yetakchi klinikalarda amaliyot o'tagan va ish tajribasiga ega bo'lgan fan doktori nomzodlari.  </br> </br> Yuqori professionallik va so'nggi tadqiqot usullari bizga nafaqat tashxis qo'yish, balki turli darajadagi murakkablikdagi kasalliklarga chalingan bemorlarni juda samarali davolash imkonini beradi. Agar siz sog'liq muammolari bilan bezovtalansangiz-biz bilan bog'laning, biz sizga yordam beramiz! </br></br>Kabinetlar 'Siemens' (Germaniya), 'Flibs' (Niderlandiya), 'Drager' (Germaniya), 'Karl Storz' (Germaniya) kabi brendlar ostida Yevropa sifatidagi eng zamonaviy uskunalar bilan jihozlangan bo'lib, bu barcha zarur tadqiqotlarni sifatli va tezkor o'tkazish, buzilish va patologiyalarni aniqlash, davolash jarayonini kuzatib borish va kasalliklarning yanada rivojlanishiga yo'l qo'ymaslik imkonini beradi."
  }
]
export const faqQuestions = reactive([
  {
    title: 'Teridagi oq dog’ kasalligini qanday davolash mumkin?',
    answer:
      'Teridagi oq dog’larga Vud lampa uskunasi yordamida va boshqa laborator tekshiruv natijalariga asoslanib aniq tashxis qo’yiladi va davolanadi. Bizning klinikamizda Eksimer lazer yordamida teridagi oq dog’larga Yevropa standarti darajasida davolash o’tkaziladi. Tashxislash uchun ham barcha uskunalar bor',
    isExpanded: false // Initial value
  },
  {
    title: 'Psoriaz kasalligi qanday davolanadi?',
    answer:
      'Psoriaz kasalligi terining surunkali va qaytalanib turuvchi kasalligi bo’lib, professional dermatolog mutaxassisi nazorati ostida davolanish talab qilinadi. Ushbu kasallik kompleks davolashni talab qiladi. Kasallikni turiga qarab davolash usuli farqlanadi. Bizning klinikamizda fandagi oxirgi yangiliklardan foydalanib davolanish imkoni mavjud.',
    isExpanded: false
  },
  {
    title: 'Soch to’kilishini qanday davolash mumkin?',
    answer: `Soch to’kilishi bir necha sabablarga ko’ra bo’ladi:  <br/> &nbsp; a)	Androgen – nasliy va gormonlarga bog’liq <br/> &nbsp; b)	O’choqli – ko’proq stress bilan bog’liq <br/> &nbsp; c)	Zamburug’lar – teri va sochdagi zamburug’li kasalliklar sabab bo’ladi <br/> Aniq tashxisdan so’ng davolash usuli aniqlanadi.`,
    isExpanded: false
  },
  {
    title: 'Soch ekish og’riqlimi?',
    answer:
      'Soch ekish amaliyoti FUE og’riqsiz va bemor uchun hech qanday noqulaylik tug’dirmaydi.',
    isExpanded: false
  },
  {
    title: 'So’gal yoki qadoqlarni davolash imkoni bormi?',
    answer:
      'Albatta imkoni bor. Bizning kinikamizda 2 xil usul bilan davolaymiz: kriodestruksiya (suyuq azot yordamida) va elektrokoagulyatsiya (kuydirish yo’li bilan).',
    isExpanded: false
  },
  {
    title: 'Husnbuzar kasalligini to’liq davosi bormi?',
    answer:
      'Albatta to’liq davosi bor. Xusnbuzar kasalligi teridagi yog’ bezlarining yallig’lanishi bilan kechadigan kasallik. Bunda yog’ bezlarining faoliyatini normallashtirish juda muhim. Davolash usuli bemorning yoshiga va boshqa ko’rsatkichlarga asosan tanlanadi.',
    isExpanded: false
  },
  {
    title: ' Teridagi oq dog’larga gelmint (medda)ning aloqasi bormi?',
    answer:
      'Teridagi o’zgarishlarda gelmint (medda, qurt)larning ahamiyati juda kam. Ya’ni gelmintlarni davolash bilan teridagi muammolarni hal qilib bo’lmaydi. Teridagi o’zgarishlarni faqat dermatology mutaxassisi nazorati bilan davolash maqsadga muvofiq.',
    isExpanded: false
  },
  {
    title: 'SPF ya’ni, terini quyoshdan himoyalovchi vositalar rostdan ham foyda beradimi?',
    answer:
      'Bizning mintaqamizda quyosh nuri kuchli, o’z navbatida zarari ham sezilarli darajada. Shuni hisobga olib dermatologlar SPF vositalaridan foydalanish zarurligini ta’kidlaydi. SPF vositalari teridagi turli o’zgarishlarni oldini olishga xizmat qiladi.',
    isExpanded: false
  }
])
