import React from 'react';
import { Helmet } from 'react-helmet';

const TITLE =
  'Wexond - A privacy-focused, extensible and beautiful web browser';

const DESCRIPTION =
  'Wexond is an open-source privacy-focused, beautiful and extensible web browser with a totally new user experience.';

const IMG_URL = 'https://wexond.net/img/wexond.png';

export default () => {
  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={TITLE}
      meta={[
        {
          name: 'description',
          content: DESCRIPTION,
        },
        {
          name: 'keywords',
          content: 'Electron Wexond Chrome Chromium macOS Linux Windows React',
        },
        {
          name: 'og:title',
          content: 'Electron Wexond Chrome Chromium macOS Linux Windows React',
        },
        {
          name: 'og:title',
          content: DESCRIPTION,
        },
        {
          name: 'og:image',
          content: IMG_URL,
        },
        {
          name: 'og:url',
          content: 'https://wexond.net',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:site',
          content: '@sentialx',
        },
        {
          name: 'twitter:title',
          content: 'Wexond',
        },
        {
          name: 'twitter:description',
          content: DESCRIPTION,
        },
        { name: 'twitter:image', content: IMG_URL },
        {
          name: 'author',
          content: 'Mikołaj Palkiewicz, Eryk Rakowski',
        },
      ]}
    />
  );
};
