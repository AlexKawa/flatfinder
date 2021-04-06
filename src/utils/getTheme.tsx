const getTheme = () => {
  const colors = {
    primary: "#1959FD",
    secondary: "#000000",
    background: "#F0F0F0",
    backgroundSecondary: "#FFFFFF",
    backgroundInvert: "#DDD4CC",
    success: "#33CF85",
    reserved: "#F2994A",
    danger: "#CE5454",
    medium: "#7F8188",
    dark: "#343438",
    black: "#000000",
    light: "#54504E",
    blurryDark: "rgba(29, 30, 34, 0.7)",
    testPrimary: "#1959FD",
    textBody: "#161616",
    textSecondary: "#FFFFFF",
    textTertiary: "#848B90",
    textMedium: "#7D7D7D",
    textHighlight: "#FFFFFF",
    colorDifference: "rgba(25, 89, 253, 0.1)",
    tiles: "rgba(242, 242, 242, 0.2)",
    tilesDarken: "rgba(218, 215, 215, 0.2)",
    successDark: "#EFF6E9",
    reservedDark: "#F6F2E9",
  };

  const fontSize = "14px";
  const fonts = {
    fontSizes: {
      miniscul: "8px",
      tiny: "10px",
      small: "12px",
      default: fontSize,
      medium: "16px",
      bigger: "18px",
      large: "20px",
      huge: "24px",
    },
  };

  const screens = {
    tabletScreen: "min-width: 641px",
    desktopScreen: "min-width: 1281px",
  };

  return {
    ...colors,
    ...fonts,
    ...screens,
  };
};

export default getTheme;
