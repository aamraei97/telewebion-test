export interface MovieTag {
  href: string;
  title: string;
}
export interface MovieEpisode {
  id: string;
  title: string;
  href: string;
  rate: number;
  cover: string;
  duration: string;
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
          cover: "/images/episode images/cover-1.png",
          duration: "1:32:48"
        },
        {
          id: "2",
          title: "مرد آهنی: انتقام برای آزادی",
          href: "/",
          rate: 56,
          cover: "/images/episode images/cover-2.png",
          duration: "1:32:48",
        },
        {
          id: "3",
          title: "مرد آهنی: انتقام برای آزادی",
          href: "/",
          rate: 56,
          cover: "/images/episode images/cover-3.png",
          duration: "1:32:48",
        },
        {
          id: "4",
          title: "مرد آهنی: انتقام برای آزادی",
          href: "/",
          rate: 56,
          cover: "/images/episode images/cover-4.png",
          duration: "1:32:48",
        },
        {
          id: "5",
          title: "مرد آهنی: انتقام برای آزادی",
          href: "/",
          rate: 56,
          cover: "/images/episode images/cover-5.png",
          duration: "1:32:48",
        },
        {
          id: "6",
          title:
            "مرد آهنی: انتقام برای آزادی آزادی آزادی آزادی آزادی آزادیآزادی",
          href: "/",
          rate: 56,
          cover: "/images/episode images/cover-6.png",
          duration: "1:32:48",
        },
        {
          id: "7",
          title: "مرد آهنی: انتقام برای آزادی",
          href: "/",
          rate: 56,
          cover: "/images/episode images/cover-7.png",
          duration: "1:32:48",
        },
        {
          id: "8",
          title: "مرد آهنی: انتقام برای آزادی",
          href: "/",
          rate: 56,
          cover: "/images/episode images/cover-8.png",
          duration: "1:32:48",
        },
        {
          id: "9",
          title: "مرد آهنی: انتقام برای آزادی",
          href: "/",
          rate: 56,
          cover: "/images/episode images/cover-9.png",
          duration: "1:32:48",
        },
        {
          id: "10",
          title: "مرد آهنی: انتقام برای آزادی",
          href: "/",
          rate: 56,
          cover: "/images/episode images/cover-10.png",
          duration: "1:32:48",
        },
        {
          id: "11",
          title: "مرد آهنی: انتقام برای آزادی",
          href: "/",
          rate: 56,
          cover: "/images/episode images/cover-11.png",
          duration: "1:32:48",
        },
        {
          id: "12",
          title: "مرد آهنی: انتقام برای آزادی",
          href: "/",
          rate: 56,
          cover: "/images/episode images/cover-12.png",
          duration: "1:32:48",
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
          cover: "/images/episode images/cover-1.png",
          duration: "1:32:48",
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
