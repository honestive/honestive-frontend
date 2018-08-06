import fluid from '@candour/fluid'

export default {
  heading: {
    1: {
      fontSize: fluid(35, 70),
      lineHeight: fluid(35, 70),
      fontWeight: 600,
    },
    2: {
      fontWeight: 600,
      fontSize: fluid(20, 40),
      lineHeight: fluid(20, 40),
    },
  },
  text: {
    4: {
      fontSize: fluid(20, 25),
      lineHeight: fluid(20, 25),
    },
  },
  input: {
    ':focus': {
      borderColor: '#2765EF',
    },
  },
  button: {
    base: {
      backgroundColor: '#2765EF',

      ':hover': {
        backgroundColor: 'hsla(221, 86%, 45%, 1)',
      },
    },
  },
  limited: {
    maxWidth: '700px',
  },
}
