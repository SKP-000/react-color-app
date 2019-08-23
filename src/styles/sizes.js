// up method for mobile-first design and down method for desktop-first design. Our project uses desktop-first design, so we'll only be using the down method

// NOTE: Since browsers do not currently support range context queries we work around the limitations of min and max prefixes and viewports with fractional widths by using values with higher precision
export default {
  up(size) {
    const sizes = {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    }
    return `@media only screen and (min-width: ${sizes[size]})`;
  },

  down(size) {
    const sizes = {
      xs: '575.98px',
      sm: '767.98px',
      md: '991.98px',
      lg: '1199.98px',
      xl: '1599.98px'
    }
    return `@media only screen and (max-width: ${sizes[size]})`;
  }
}