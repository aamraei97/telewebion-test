export interface MovieTag {
  href: string;
  title: string;
}
export interface MovieEpisode {
  id: string;
  title: string;
  href: string;
  rate: number;
}
export interface Movie {
  name: string;
  tags: MovieTag[];
  description: string;
  have_dubbed: boolean;
  age_limit: number | null;
  countries: string[];
  imdb_score: number;
  persian_title: string;
  series: {
    episodes: MovieEpisode[];
  }[];
}

export const movieMockData: Movie = {
  name: "هانیبال | Hannibal",
  have_dubbed: true,
  age_limit: 18,
  countries: ["آمریکا"],
  imdb_score: 8.5,
  persian_title: "هانیبال",
  series: [
    {
      episodes: [
        {
          id: "1",
          title: "مرد آهنی: انتقام برای آزادی",
          href: "/",
          rate: 56,
        },
        {
          id: "2",
          title: "مرد آهنی: انتقام برای آزادی",
          href: "/",
          rate: 56,
        },
        {
          id: "3",
          title: "مرد آهنی: انتقام برای آزادی",
          href: "/",
          rate: 56,
        },
        {
          id: "4",
          title: "مرد آهنی: انتقام برای آزادی",
          href: "/",
          rate: 56,
        },
        {
          id: "5",
          title: "مرد آهنی: انتقام برای آزادی",
          href: "/",
          rate: 56,
        },
        {
          id: "6",
          title:
            "مرد آهنی: انتقام برای آزادی آزادی آزادی آزادی آزادی آزادیآزادی",
          href: "/",
          rate: 56,
        },
        {
          id: "7",
          title: "مرد آهنی: انتقام برای آزادی",
          href: "/",
          rate: 56,
        },
        {
          id: "8",
          title: "مرد آهنی: انتقام برای آزادی",
          href: "/",
          rate: 56,
        },
        {
          id: "9",
          title: "مرد آهنی: انتقام برای آزادی",
          href: "/",
          rate: 56,
        },
      ],
    },
    {
      episodes: [
        {
          id: "4",
          title: "مرد آهنی: انتقام برای آزادی",
          href: "/",
          rate: 56,
        },
      ],
    },
  ],
  tags: [
    {
      href: "/",
      title: "روانشناسی",
    },
    {
      href: "/",
      title: "وحشت",
    },
    {
      href: "/",
      title: "علمی تخیلی",
    },
    {
      href: "/",
      title: "دلهره‌آور",
    },
  ],
  description:
    "ویل گراهام ، یک متخصص جنایی FBI ، توانایی غیرقابل انکار و همدردی با دکتر هانیبال لکر ، روانپزشک پزشکی قانونی را دارد. با این حال ، او از این که آدمخوار است آگاهی ندارد و ویل گراهام",
};
