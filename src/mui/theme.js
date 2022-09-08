import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: `'YekanBakh', 'Roboto', 'Arial'`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium:500,
    fontWeightBold: 700,
    fontWeighHeavy: 800,
    fontWeighFat: 900,
  },
  direction: 'rtl',
})

export default theme;