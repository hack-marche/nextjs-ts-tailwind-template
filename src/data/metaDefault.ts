import MetaTag from '~/types/MetaTag'

export const defaultTitle = 'ReciLabo'
export const defaultDescription =
  'テストテストテストテストテストテストテストテスト'

export const defaultImageUrl = '/logo.png'

export const buildMetaTagData = (): MetaTag => {
  return {
    title: defaultTitle,
    description: `${defaultDescription}【${defaultTitle}】`,
    siteType: 'website',
    imageUrl: defaultImageUrl,
    // twitterCard: 'summary',
  }
}

export const buildNoIndexMetaTagData = (h1text: string): MetaTag => {
  return {
    title: `${h1text}【${defaultTitle}】`,
    description: defaultDescription,
    imageUrl: defaultImageUrl,
    siteType: 'article',
    twitterCard: 'summary',
    noIndex: true,
  }
}
