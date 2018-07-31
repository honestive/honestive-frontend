import fluid from '@candour/fluid'

export default {
  headline: {
    1: {
      fontSize: fluid(35, 70),
      lineHeight: fluid(35, 70),
    },
  },
  input: {
    ':focus': {
      borderColor: '#2765EF',
    },
  },
  button: {
    backgroundColor: '#2765EF',

    ':hover': {
      backgroundColor: 'hsla(221, 86%, 45%, 1)',
    },
  },
}
