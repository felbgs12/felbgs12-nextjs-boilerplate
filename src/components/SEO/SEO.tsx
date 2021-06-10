import Head from 'next/head';

interface ISEOProps {
  title: string;
  description?: string;
  image?: string;
  shouldExcludeTitleSuffix?: boolean; // Sufixo "- JAMEI"
  shouldIndexPage?: boolean; // Páginas que não devem ser indexadas, basta passar o shouldIndexPage como false
  schema?: string;
  imageWidth?: number;
  imageHeight?: number;
}

const SEO = ({
  title,
  description,
  image,
  shouldExcludeTitleSuffix = false,
  shouldIndexPage = true,
  schema,
  imageHeight,
  imageWidth,
}: ISEOProps): JSX.Element => {
  const pageTitle = `${title} ${!shouldExcludeTitleSuffix ? '- felbgs12' : ''}`;

  // const pageImage = image || '../../../public/images/logo.png'; TODO: when have default image
  const pageImage = image;

  return (
    <Head>
      <title>{pageTitle}</title>

      {description && <meta name="description" content={description} />}
      {image && <meta name="image" content={pageImage} />}

      {/* Páginas que não devem ser indexadas, basta passar o shouldIndexPage como false */}
      {!shouldIndexPage && <meta name="robots" content="noindex,nofollow" />}

      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#121214" />
      <meta name="msapplication-TileColor" content="#121214" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={pageTitle} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:secure_url" content={pageImage} />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content={String(imageWidth || 512)} />
      <meta property="og:image:height" content={String(imageHeight || 512)} />
    </Head>
  );
};

export default SEO;
