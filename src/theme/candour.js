import fluid from '@candour/fluid'

export default {
  headline: {
    1: {
      fontSize: fluid(50, 70),
      lineHeight: fluid(50, 70),
    },
  },
  input: {
    ':focus': {
      borderColor: '#2765EF',
    },
  },
  button: {
    minWidth: fluid(150, 250),
    maxWidth: fluid(150, 250),
    backgroundColor: '#2765EF',

    ':hover': {
      backgroundColor: 'hsla(221, 86%, 45%, 1)',
    },
  },
}
