import React, { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'

import MarkdownRendererParagraph from './MarkdownRenderers/Paragraph'

const RENDERERS = {
  paragraph: MarkdownRendererParagraph,
}

export default ({ component, ...rest }) => {
  const Component = component || Fragment
  const wrapperProps = component ? rest : {}

  return (
    <Component {...wrapperProps}>
      <ReactMarkdown
        escapeHtml={false}
        renderers={RENDERERS}
        {...rest}
      />
    </Component>
  )
}
