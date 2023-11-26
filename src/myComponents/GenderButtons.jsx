// GenderButtons.js
import React from "react";
import { Button } from "@chakra-ui/react";

const GenderButtons = ({ allGenders, selectedGender, onGenderClick }) => {
  return (
    <div>
      <Text fontWeight={"bold"} fontSize={"xl"}>
        Gender:
      </Text>
      {allGenders.map((gender) => (
        <Button
          key={gender}
          margin={1}
          colorScheme={selectedGender === gender ? "purple" : "gray"}
          onClick={() =>
            onGenderClick(selectedGender === gender ? null : gender)
          }
          borderRadius="full"
          _focus={{ outline: "none" }}
        >
          {gender}
        </Button>
      ))}
    </div>
  );
};

export default GenderButtons;
