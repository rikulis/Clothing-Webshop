import React from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const ProductAmountInput = () => {
  return (
    <NumberInput
      defaultValue={1}
      min={1}
      keepWithinRange={false}
      clampValueOnBlur={false}
      size="sm"
      maxW={20}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};
export default ProductAmountInput;
