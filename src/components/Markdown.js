import React from 'react'
import ReactMarkdown from 'react-markdown'

import MarkdownRendererParagraph from './MarkdownRenderers/Paragraph'

const RENDERERS = {
  paragraph: MarkdownRendererParagraph,
}

export default ({ component: Component, ...rest }) => (
  <Component {...rest}>
    <ReactMarkdown
      escapeHtml={false}
      renderers={RENDERERS}
      {...rest}
    />
  </Component>
)
