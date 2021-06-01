const fallbackFont =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"

export const typography = {
  family: {
    primary: `Heebo, ${fallbackFont}`,
    secondary: `Heebo, ${fallbackFont}`,
  },
  sizes: {
    '2xs': '0.625rem',
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    md: '1.125rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '2.5rem',
    '3xl': '3rem',
    '4xl': '3.5rem',
    '5xl': '4rem',
  },
  lineHeight: {
    sm: '1rem',
    base: '1.675rem',
    md: '2rem',
  },
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    xBold: 800,
    black: 900,
  },
} as const
