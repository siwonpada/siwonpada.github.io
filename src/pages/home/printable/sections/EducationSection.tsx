import useResponsiveFont from "@/hooks/useResponsiveFont";
import Font from "@/types/Font";
import { Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import { useTranslation } from "react-i18next";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";

interface EducationSectionProps {}

const EducationSection = ({}: EducationSectionProps) => {
  const { t } = useTranslation();
  const { font } = useResponsiveFont();

  return (
    <>
      <SectionTitle>학력</SectionTitle>

      <Spacer height={"10px"} />

      <Card>
        <Flex
          gap={"20px"}
          style={{
            borderLeft: `5px solid #EB0D00`,
            paddingLeft: "10px",
          }}
        >
          <Flex flexDirection={"column"} gap={"30px"}>
            <Flex flexDirection={"column"}>
              <Text font={Font.Bold} size={font(1)}>
                GIST
              </Text>
              <Text size={"1rem"}>{t("education.major")}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexDirection={"column"}>
          <Text size={font(1)}>TGPA 4.00 / 4.5</Text>
          <Text size={font(0.75)}>2022. 2 – </Text>
        </Flex>
      </Card>
    </>
  );
};

export default EducationSection;
