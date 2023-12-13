interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: "Tianhui's Outdoor Journey",
  siteUrl: 'https://outdoor-journey-tianhui.vercel.app/',
  logo: 'https://raw.githubusercontent.com/TianhuiXu/outdoor_page/63ad9ad8b766bbb219b9c3eb3abf87cc4b0c3b88/public/images/logo.png',
  description: "Tianhui's Outdoor Journey",
  navLinks: [
    {
      name: 'Strava',
      url: 'https://www.strava.com/athletes/105920909',
    },
    {
      name: 'About',
      url: 'https://github.com/TianhuiXu',
    },
  ],
};

export default data;
