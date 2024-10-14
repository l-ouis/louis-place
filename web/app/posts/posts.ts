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
        path: "/posts/24cast",
        tags: ["Python", "ReactJS", "TypeScript",],
    },
    {
        title: "DDNet",
        desc: "One of the largest open-source multiplayer games. Apart from playing, I've contributed to the game's codebase and hold a few community roles to keep the game running smoothly.",
        site: "https://ddnet.org",
        code: "https://github.com/ddnet/ddnet",
        path: "/posts/ddnet",
    },
    {
        title: "Duet",
        desc: "A MIDI transformer model that generates harmonies based off given melodies. Built in Python with Tensorflow for Brown CS1470.",
        code: "https://github.com/l-ouis/KAL-Duet",
        path: "/posts/duet",
    },
    {
        title: "louis.place",
        desc: "The website you're reading this text on.",
        code: "https://github.com/l-ouis/louis-place",
        path: "/posts/website",
    },
];

export default posts;