interface Post {
    title: string;
    desc: string;
    path: string;
    site?: string;
    code?: string;
    image?: string;
    tags?: string[];
}

const posts: Post[] = [
    {
        title: "24Cast",
        desc: "An open-source, accurate elections prediction model and application stack",
        site: "https://24cast.org",
        code: "https://github.com/BPR-Data-Team",
        path: "/posts/first-post",
        image: "https://picsum.photos/200",
        tags: ["Python", "ReactJS", "TypeScript",],
    },
    {
        title: "louis.place",
        desc: "The website you're reading this text onsdlf jsd lkjsdlkfjsd lfksdjlfksd jsldf jdslk",
        site: "https://louis.place",
        code: "https://louis.place",
        path: "/posts/website",
    },
    {
        title: "louis.place",
        desc: "The website you're reading this text on",
        site: "https://louis.place",
        path: "/posts/website",
    },
];

export default posts;