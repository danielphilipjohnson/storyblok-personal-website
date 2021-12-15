export const createSEOMeta = (data) => [
    { hid: 'og:title', property: 'og:title', content: data.title },
    { hid: 'og:publish_date', property: 'og:publish_date', content: Date.now() },
    { hid: 'og:type', property: 'og:type', content: "website" },
    { hid: 'og:site_name', property: 'og:site_name', content: "Daniel PHilip Johnson" },
    
    { hid: 'description', name: 'description', content: data.description },
    {
      hid: 'og:description',
      property: 'og:description',
      content: data.description,
    },
    { hid: 'og:image', property: 'og:image', content: data.image },
    {
      hid: 'og:url',
      property: 'og:url',
      content: process.env.HOST_NAME + '/' + data.url,
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: data.cardType || 'summary_large_image',
    },
    {
      hid: 'twitter:creator',
      name: 'twitter:creator',
      content: '@danielp_johnson',
    },
  ]