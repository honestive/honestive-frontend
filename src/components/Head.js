import React from 'react'
import Helmet from 'react-helmet'

const title = 'Honestive'
const description = 'Honestive is an embeddable public product roadmap, automatically synchronized with your GitHub repository.'
const ogImageUrl = 'https://honestive.com/og-image.jpg'
const ogUrl = 'https://honestive.com'

export default () => (
  <Helmet>
    <title>
      {title}
    </title>
    <meta name='description' content={description} />

    <meta property='og:title' content={title} />
    <meta property='og:description' content={description} />
    <meta property='og:image' content={ogImageUrl} />
    <meta property='og:image:width' content='1200' />
    <meta property='og:image:height' content='630' />
    <meta property='og:image:type' content='image/jpg' />
    <meta property='og:url' content={ogUrl} />
    <link rel='canonical' href={ogUrl} />
    <meta property='og:type' content='website' />
    <meta property='og:locale' content='en_US' />
    <meta property='og:site_name' content='Honestive' />
  </Helmet>
)
