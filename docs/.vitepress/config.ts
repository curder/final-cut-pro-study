import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: "zh-CN",
    base: "/final-cut-pro-study/",
    title: "Final cut pro 学习",
    description: "Final cut pro 学习记录",
    lastUpdated: true,
    themeConfig: {
        // logo: "https://www.apple.com.cn/autopush/ww/search/modules/finalcutpro/image__do2eec8w8n42_large_2x.jpg",
        siteTitle: "Final Cut Pro",
        outlineTitle: "章节导航",
        lastUpdatedText: "最后更新时间",
        editLink: {
            pattern: "https://github.com/curder/final-cut-pro-study/edit/master/docs/:path",
            text: '编辑它'
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/curder/final-cut-pro-study'}
        ],
        nav: nav(),
        sidebar: {
            "/guide": sidebarGuide(),
        }
    }
});

function nav() {
    return [
        {text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/'},
    ];
}

function sidebarGuide() {
    return [
        {
            text: "基础",
            collapsible: true,
            collapsed: false,
            items: [
                {text: "初识 Final Cut Pro", link: "/guide/getting-started"},
                {text: "操作界面介绍", link: "/guide/operation-interface"},
            ]
        }
    ];
}
