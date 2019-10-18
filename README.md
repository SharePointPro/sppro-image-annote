# sppro-image-annote
> Image Annotation in React

Live Demo:
https://sharepointpro.github.io/sppro-image-annote/

Screenshot:
![Screen shot](https://sharepointpro.github.io/sppro-image-annote/imageannote.PNG "Optional title")


[![NPM](https://img.shields.io/npm/v/sppro-image-annote.svg)](https://www.npmjs.com/package/sppro-image-annote) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save sppro-image-annote
```

## Usage

```jsx
import React, { Component } from 'react'

import SpproImageAnnote from 'sppro-image-annote'

class Example extends Component {
  render () {
    return (
         <SpproImageAnnote url={roomImage} onSave={this.onSave} />
    )
  }
}
```

## API
onSave : Return Base64 of edited image

url: URL of the image to be edited

## Style overrides
Add the below style classes to your project to override default  
.sppro-overlay //Background overlay styles  
.sppro-toolbar //Toolbar styles  

## Special thanks
Thanks to https://konvajs.org/ for the great library

# Dependencies
   konva,  
   react-konva,  
   @fortawesome/fontawesome-svg-core,  
   @fortawesome/free-solid-svg-iconsm,  
   @fortawesome/react-fontawesome,  
   react-color  

## License

MIT © [SharePointPro](https://github.com/SharePointPro)
=======
Simple react Image annotation library
>>>>>>> 744d6d373bd04f60d6f5be6339db61f68586ff6e
