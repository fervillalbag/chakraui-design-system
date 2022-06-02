import {
  Heading,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
  FormLabel,
  FormControl,
  Input,
  Select,
  Checkbox,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

const Detail = () => {
  const colSpanValue = useBreakpointValue({ base: 2, md: 1 });

  return (
    <VStack
      w={`full`}
      h={`full`}
      p={10}
      spacing={10}
      alignItems={`flex-start`}
    >
      <VStack spacing={3} alignItems={`flex-start`}>
        <Heading size={`2xl`}>Your details</Heading>
        <Text size={`2xl`}>
          If you already have an account, click here to log in.
        </Text>
      </VStack>

      <SimpleGrid columns={2} columnGap={3} rowGap={6} w={`full`}>
        <GridItem colSpan={colSpanValue}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder={`John`} />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpanValue}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder={`Doe`} />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder={`Mcal López 3120`} />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpanValue}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder={`Asunción`} />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpanValue}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value="1">Paraguay</option>
              <option value="2">Argentina</option>
              <option value="3">Uruguay</option>
              <option value="4">Colombia</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to billing address.</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button variant={`primary`} size={`lg`} w={`full`}>
            Place order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Detail;
