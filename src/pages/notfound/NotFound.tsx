import { themeHandler } from "@/utils/themeHandler";
import { useTheme } from "@/providers/theme-provider";
import Title from "@/components/ui/title";
const NotFound = () => {
  const { theme } = useTheme();
  const { textColor } = themeHandler({ theme });

  return (
    <div className="flex flex-col items-center justify-center my-10">
      <Title text="Not Found Page" fontSize="xl" color={textColor} />
    </div>
  );
};

export default NotFound;
