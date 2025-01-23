import useResponsiveFont from "@/hooks/useResponsiveFont";
import Font from "@/types/Font";
import { Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import { useTranslation } from "react-i18next";
import StylessA from "../../../../components/StylessA";

interface TitleSectionProps {}

const TitleSection = ({}: TitleSectionProps) => {
  const { t } = useTranslation();
  const { font } = useResponsiveFont();

  return (
    <>
      <Text as={"h1"} font={Font.Bold} size={font(2)}>
        {t("title.name")}
      </Text>

      <Text font={Font.Medium} size={font(0.75)}>
        {t("introduction")}
      </Text>

      <Spacer height={"10px"} />

      <Flex>
        <Text size={font(0.875)}>
          <StylessA href="mailto:psw041115@gmail.com" hasIcon={false}>
            psw041115@gmail.com
          </StylessA>{" "}
          | 010-4304-8821 |{" "}
          <StylessA href="https://github.com/siwonpada" hasIcon={false}>
            github.com/siwonpada
          </StylessA>{" "}
          |{" "}
          <StylessA
            href="https://www.linkedin.com/in/siwonpada"
            hasIcon={false}
          >
            linkedin.com/in/siwonpada
          </StylessA>
          <br />
          Detailed Resume:{" "}
          <StylessA href="https://siwonpada.github.io/resume" hasIcon={false}>
            siwonpada.github.io
          </StylessA>
        </Text>
      </Flex>
    </>
  );
};

export default TitleSection;
