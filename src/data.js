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

import iq from './assets/iqbol.jpg'
import ll from './assets/lola.jpg'
import ab from './assets/abror.jpg'

export const slides = [
  {
    id: 0,
    label: 'Teri kasalliklarini davolash, oldini olish va reabilitatsiyasi markazi.',
    title:
      'Eksimer lazer, Vud lampa, kriodestruktor, elektrokoagulyator kabi zamonvaiy tibbiy uskunalar bilan jixozlangan',
    img: slide1,
    top: 4
  },
  {
    id: 1,
    label: 'Sochdagi kasalliklarni davolash, oldini olish va reabilitatsiyasi markazi.',
    title:
      'Eksimer lazer, Vud lampa, kriodestruktor, elektrokoagulyator kabi zamonvaiy tibbiy uskunalar bilan jixozlangan',
    img: slide2,
    top: 4
  },
  {
    id: 2,
    label: 'Teri kasalliklarini davolash, oldini olish va reabilitatsiyasi markazi.',
    title:
      'Eksimer lazer, Vud lampa, kriodestruktor, elektrokoagulyator kabi zamonvaiy tibbiy uskunalar bilan jixozlangan',
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
    url: 'https://t.me/anderma_chat'
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
      "Bu bolalik orzusi edi, yoshligimdan shifokor bo'lishimni aniq bilardim. Barchangizni berib, odamlarga yordam bering. Men uchun eng oliy mukofot - bemorning sog'lom go'zal tabassumdan quvonchini ko'rishdir.",
    img: ax,
    href: 'doctor-axrorbek'
  },
  {
    name: "Murodjon Mo'minov",
    position: 'Dermotolog',
    description:
      "Bu bolalik orzusi edi, yoshligimdan shifokor bo'lishimni aniq bilardim. Barchangizni berib, odamlarga yordam bering. Men uchun eng oliy mukofot - bemorning sog'lom go'zal tabassumdan quvonchini ko'rishdir.",
    img: mr,
    href: 'doctor-murodjon'
  },
  {
    name: 'Vacancy',
    position: 'Ish faoliati',
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
      'Psoriazda Yevropa standartlarida davolash (3-5 yilgacha kasallikni nofoal davrda ushlab turish)',
    img: ps
  },
  {
    title: 'XUSNBUZAR kasalligi',
    subtitle: 'Xusnbuzar kasalligini aniq sabablarga qaratilgan zamonaviy davolash usuli',
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
      'PODOLOGIYA – tirnoq qalinlashishi, teri ichiga o’sishi tovon terisidagi muammolarga zamonaviy yechim',
    img: tir
  },
  {
    title: 'BOLALARDAGI teri kasalliklari',
    subtitle: 'Bolalar terisidagi o’zgarishlar va kasalliklarni tashxislash va davolash.',
    img: tr
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
    position: 'Dermotolog',
    img: ll
  },
  {
    id: 2,
    name: 'Abrorbek Ibrokhimov',
    position: 'Shifokor Nevropotolog',
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
    title: 'Psoriaz kasalligi qanday davolanadi? ',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fus pharetra non loRm nec moncus. Etiam pomkordui n metus auctor vestibulum',
    isExpanded: false
  },
  {
    title: 'Soch ekish og’riqlimi? ',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fus pharetra non loRm nec moncus. Etiam pomkordui n metus auctor vestibulum',
    isExpanded: false
  },
  {
    title: 'So’gal yoki qadoqlarni davolash imkoni bormi? ',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fus pharetra non loRm nec moncus. Etiam pomkordui n metus auctor vestibulum',
    isExpanded: false
  },
  {
    title: 'Xusnbuzar kasalligini to’liq davosi bormi? ',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fus pharetra non loRm nec moncus. Etiam pomkordui n metus auctor vestibulum',
    isExpanded: false
  },
  {
    title: ' Teridagi oq dog’larga gelmint (medda)ning aloqasi bormi?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fus pharetra non loRm nec moncus. Etiam pomkordui n metus auctor vestibulum',
    isExpanded: false
  },
  {
    title: 'SPF ya’ni, terini quyoshdan ximoyalovchi vositalar rostdan ham foyda beradimi? ',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fus pharetra non loRm nec moncus. Etiam pomkordui n metus auctor vestibulum',
    isExpanded: false
  }
])
