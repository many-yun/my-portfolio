const size = {
  mobile: '770px',
  laptop: '1600px',
  desktop1: '1920px',
  desktop2: '2060px',
}

const theme = {
  mobile: `(max-width: ${size.mobile})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop1: `(max-width: ${size.desktop1})`,
  desktop2: `(min-width: ${size.desktop2})`,
}

export default theme
