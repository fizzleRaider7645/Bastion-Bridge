import { ReactNode } from "react";
import { Box, Card, Flex } from "@radix-ui/themes";
import { styled } from "@stitches/react";

interface MenuCardProps {
  children: ReactNode;
}

const StyledCard = styled(Card, {
  background: "linear-gradient(145deg, #e0e0e0, #c0c0c0)", // Brushed steel gradient
  border: "1px solid #b0b0b0", // Steel-like border color
  boxShadow:
    "inset 0 1px 0 rgba(255, 255, 255, 0.5), 0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadows
  borderRadius: "16px",
  padding: "32px",
  minWidth: "425px",
  minHeight: "125px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const MenuCard: React.FC<MenuCardProps> = ({ children }) => {
  return (
    <Box>
      <StyledCard>
        <Flex gap='3' align='center'>
          <Box>{children}</Box>
        </Flex>
      </StyledCard>
    </Box>
  );
};

export default MenuCard;
