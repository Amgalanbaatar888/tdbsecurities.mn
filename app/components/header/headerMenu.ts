export const headerMenu = [
  {
    id: 1,
    label: "Хөрөнгө оруулалт",
    link: "/",
    submenu: [
      { id: 1, label: "Дотоод арилжаа", link: "/internaltrading" },
      { id: 2, label: "Гадаад арилжаа", link: "/foreignTrade" },
    ],
  },
  {
    id: 2,
    label: "Судалгаа",
    link: "/research",
    submenu: [
      { id: 1, label: "Жилийн тайлан", link: "/report " },
      { id: 2, label: "Сарын тойм", link: "/monthly-news" },
      { id: 3, label: "Шинжээчийн булан", link: "/expert-corner " },
    ],
  },
  {
    id: 3,
    label: "Мэдээ",
    link: "/news",
    submenu: [
      { id: 1, label: "7 хоногийн тойм", link: "/weekly-news" },
      { id: 2, label: "МУ-ын хөрөнгийн зах зээл", link: "/mn-stock-market" },
      { id: 3, label: "ОУ-ын хөрөнгийн зах зээл", link: "/stock-market" },
    ],
  },
  {
    id: 4,
    label: "Боловсрол",
    link: "/education",
    submenu: [
      {
        id: 1,
        label: "Хөрөнгийн зах зээл гэж юу вэ?",
        link: "/interactive-guide-what-is-capital-market",
      },
      {
        id: 2,
        label: "Арилжаанд оролцох",
        link: "/interactive-guide-participate-mse-trading",
      },
      { id: 3, label: "Үнэт цаас гаргах", link: "/interactive-guide-ipo" },
      {
        id: 4,
        label: "Хөрөнгийн зах зээлийг энгийнээр",
        link: "/interactive-guide-what-is-capital-market",
      },
    ],
  },
];
