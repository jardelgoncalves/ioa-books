function base() {
  return {
    portView: '1300px',
  }
}

export const sizes = {
  desktop: {
    ...base(),
    navbar: '2.5rem',
  },
  mobile: {
    ...base(),
    navbar: '2.5rem',
  },
} as const
