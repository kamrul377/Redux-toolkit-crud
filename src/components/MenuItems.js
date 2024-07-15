
export const Menu = [
    {
        name: "Home",
        path: '/home'
    },
    {
        name: "Services",
        path: "/services",
        subMenu: [
            {
                name: "Web Development",
                path: "/web-development",

                subItem: [
                    {
                        name: "Frontend",
                        path: "/frontend"
                    },
                    {
                        name: "Backend",
                        path: "/backend"
                    },
                    {
                        name: "Full Stack",
                        path: "/full-stack"
                    }
                ]

            },
            {
                name: "Apps development",
                path: "/apps-development",

                
            },
            {
                name: "Eathical Hacking",
                path: "/ethical-hacking",

                subItem: [
                    {
                        name: "Java Android",
                        path: "/java-android"
                    },
                    {
                        name: "Flutter",
                        path: "/flutter"
                    }
                ]
            }
        ]
    },
    {
        name: "About",
        path: '/about'
    }
]