import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
  Theme,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: "brand.600",
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        borderRadius: "none",
      },
    },
  },
};

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: "brand.400",
  },
};

const checkboxSelectStyles = {
  baseStyle: {
    control: {
      borderRadius: "none",
      ...brandRing,
    },
  },
};

const theme = extendTheme(
  {
    fonts: {
      heading: `Montserrat, ${base.fonts?.heading}`,
      body: `Lato, ${base?.fonts.body}`,
    },
    colors: {
      brand: {
        50: "#f5fee5",
        100: "#e1fbb2",
        200: "#cdf781",
        300: "#b8ee56",
        400: "#a2e032",
        500: "#8ac919",
        600: "#71ab09",
        700: "#578602",
        800: "#3c5e00",
        900: "#203300",
      },
    },
    components: {
      Button: {
        variants: {
          primary: (props: Theme) => ({
            ...brandRing,
            rounded: "none",
            backgroundColor: mode("brand.500", "brand.200")(props),
            color: mode("#fff", "brand.800")(props),

            _hover: {
              backgroundColor: mode("brand.600", "brand.300")(props),
            },
            _active: {
              backgroundColor: mode("brand.700", "brand.400")(props),
            },
          }),
        },
      },
      Input: { ...inputSelectStyles },
      Select: { ...inputSelectStyles },
      Checkbox: { ...checkboxSelectStyles },
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Checkbox"],
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select"],
  })
);

export default theme;
