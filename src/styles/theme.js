export const theme = {
  colors: {
    white: "rgba(255, 255, 255, 1)",
    black: "rgba(55, 55, 55, 1)",
    textBlack: "rgba(55, 55, 55, 1)",
    textMain: "rgba(235, 216, 255, 1)",
    main: "rgba(235, 216, 255, 1)",
    active: "rgba(92, 211, 168, 1)",
    background: `linear-gradient(45deg, rgba(71, 28, 169, 1) 0%, rgba(87, 54, 163, 1) 69.1%, rgba(75, 42, 153, 1) 100%)`,
    lineInnerShadow1: "rgba(251, 248, 255, 1)",
    lineInnerShadow2: "rgba(174, 123, 227, 1)",
    lineDropShadow: "rgba(0, 0, 0, 0.06)",
    cardShadow: "rgba(0, 0, 0, 0.23)",
  },

  media: {
    mobileMin: "(min-width: 320px)",
    mobileMax: "(max-width: 767px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1280px)",
  },

  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],

  fontSizes: {
    xxs: "12px",
    xs: "14px",
    s: "16px",
    xxm: "18px",
    xm: "20px",
    m: "24px",
    l: "28px",
    xl: "32px",
    xxl: "36px",
    xxxl: "48px",
    bodyPositiveSize: "68px",
  },

  fontWeights: {
    normal: 400,
    semiBold: 500,
    bold: 600,
  },

  lineHeights: {
    body: 1.36,
    title: 1.36,
  },

  borders: {
    none: "none",
    normal: "1px solid",
    bold: "2px solid",
  },

  radii: {
    none: "0",
    normal: "20px",
    min: "10.31px",
    round: "50%",
  },

  fonts: {
    main: "Montserrat",
  },

  transition: "250ms cubic-bezier(0.4, 0, 0.2, 1)",
};
