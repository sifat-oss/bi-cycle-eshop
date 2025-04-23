import { TFontSize, TFontSizeMap } from "@/types/types";

type SubTitleProps = {
  text: string | number;
  fontSize?: keyof TFontSize;
  color?: string;
  textAlign?: string;
  margin?: string;
};

const SubTitle = ({
  text,
  fontSize = "base",
  color = "rgb(240, 240, 240)",
}: SubTitleProps) => {
  return (
    <h1
      style={{
        fontFamily: "Inter",
        fontWeight: 500,
        fontSize: TFontSizeMap[fontSize],
        color: color,
        lineHeight: "1.2",
      }}
    >
      {text}
    </h1>
  );
};

export default SubTitle;
