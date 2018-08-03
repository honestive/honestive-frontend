import React, { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'

import MarkdownRendererParagraph from './MarkdownRenderers/Paragraph'
import MarkdownRendererHeading from './MarkdownRenderers/Heading'

const DEFAULT_RENDERERS = {
  paragraph: MarkdownRendererParagraph,
  heading: MarkdownRendererHeading,
}

export default ({ component, renderers, ...rest }) => {
  const Component = component || Fragment
  const wrapperProps = component ? rest : {}

  return (
    <Component {...wrapperProps}>
      <ReactMarkdown
        escapeHtml={false}
        renderers={{ ...DEFAULT_RENDERERS, ...renderers }}
        {...rest}
      />
    </Component>
  )
}
