export const themeHandler = ({ theme }: { theme: string }) => {
  let textColor = "white";
  let bgColor = "black";
  if (theme === "dark" || theme === "system") {
    textColor = "white";
  } else {
    textColor = "black";
    bgColor = "#FAFAFA";
  }

  return { textColor, bgColor };
};
