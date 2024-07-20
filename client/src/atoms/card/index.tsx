import React, { ReactNode } from "react";
import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";
import { styled } from "@stitches/react";

interface MenuCardProps {
  children: ReactNode;
}

const StyledCard = styled(Card, {
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  padding: "16px",
  backgroundColor: "#fff",
});

const MenuCard: React.FC<MenuCardProps> = ({ children }) => {
  return (
    <Box maxWidth='240px'>
      <StyledCard>
        <Flex gap='3' align='center'>
          <Avatar
            size='3'
            src='https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop'
            radius='full'
            fallback='T'
          />
          <Box>
            <Text>Teodros Girmay</Text>
            <Text as='div' size='2' color='gray'>
              Engineering
            </Text>
            {children}
          </Box>
        </Flex>
      </StyledCard>
    </Box>
  );
};

export default MenuCard;
