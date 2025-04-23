import { TFontSize, TFontSizeMap } from "@/types/types";

type TextAlign = "left" | "center" | "right" | "justify";

type ParagraphProps = {
  text: string | number;
  fontSize?: keyof TFontSize;
  width?: string;
  color?: string;
  textAlign?: TextAlign;
  margin?: string;
  opacity?: string;
};

const Paragraph = ({
  text,
  fontSize = "base",
  color = "white",
  width,
  textAlign,
  opacity = "0.8",
}: ParagraphProps) => {
  return (
    <p
      style={{
        fontFamily: "Inter",
        fontSize: TFontSizeMap[fontSize],
        fontWeight: 400,
        width: width,
        textAlign: textAlign,
        color: color,
        opacity: opacity,
      }}
    >
      {text}
    </p>
  );
};

export default Paragraph;
