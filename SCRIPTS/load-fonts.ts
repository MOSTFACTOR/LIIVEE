if ('fonts' in document) {
    Promise.all([
      document.fonts.load('NotoSans-Regular'),
      document.fonts.load('NotoSans-Italic'),
    ]).then(_ => () {
      document.documentElement.classList.add('fonts-loaded')
    })
  }

  if (sessionStorage.fontsLoaded) {
    document.documentElement.classList.add('fonts-loaded')
  } else {
    if ('fonts' in document) {
    Promise.all([
        document.fonts.load('NotoSans-Regular'),
        document.fonts.load('NotoSans-Italic'),
    ]).then(_ => () {
      document.documentElement.classList.add('fonts-loaded')
    })
    }
  }

function loadFonts () 
  if (sessionStorage.fontsLoaded) {
    document.documentElement.classList.add('fonts-loaded')
    return 
  }

loadFonts()