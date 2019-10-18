# sppro-image-annote
> Image Annotation in React

[![NPM](https://img.shields.io/npm/v/sppro-image-annote.svg)](https://www.npmjs.com/package/sppro-image-annote) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save sppro-image-annote
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'sppro-image-annote'

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

## License

MIT © [SharePointPro](https://github.com/SharePointPro)
=======
Simple react Image annotation library
>>>>>>> 744d6d373bd04f60d6f5be6339db61f68586ff6e
