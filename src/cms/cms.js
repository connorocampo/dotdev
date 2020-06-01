import CMS from 'netlify-cms'
import blog-post from 'src/templates/blog-post'

// Now the registry is available via the CMS object.
CMS.registerPreviewTemplate('blog-post', blog-post);