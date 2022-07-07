const YAML = require('yaml');
const fs = require('fs');
const path = require('path');

const numbersSpec = fs.readFileSync('./specs-temp/numbers.json', 'utf-8');
const phoneNumberLookupSpec = fs.readFileSync('./specs/phone-number-lookup.yml', 'utf-8');
const voiceSpec = fs.readFileSync('./specs/voice.yml', 'utf-8');
const messagingSpec = fs.readFileSync('./specs/messaging.yml', 'utf-8');
const webRtcSpec = fs.readFileSync('./specs/webrtc.yml', 'utf-8');
const multiFactorAuthSpec = fs.readFileSync('./specs/multi-factor-auth.yml', 'utf-8');
const dashSpec = fs.readFileSync('./specs/dash.json', 'utf-8');
const dashNotificationsSpec = fs.readFileSync('./specs/dashNotifications.json', 'utf-8');
const messagingInternationalSpec = fs.readFileSync('./specs/messagingInternational.json', 'utf-8');
const globalSpec = fs.readFileSync('./specs/global.yml', 'utf-8');
const globalSpec_v2 = fs.readFileSync('./specs/global-v2.yml', 'utf-8');
const globalSpec_beta = fs.readFileSync('./specs/global-beta.yml', 'utf-8');
const insightsSpec = fs.readFileSync('./specs/insights.yml', 'utf-8');

module.exports = {
    title: 'Bandwidth API Docs',
    tagline: 'Learn About Bandwidth\'s Product APIs',
    url: 'https://dev.bandwidth.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'bandwidth', 
    projectName: 'api-docs', 
    themeConfig: {
        image: 'img/bandwidth.png', // used for meta tag
        colorMode: {
            disableSwitch: false // for disabling dark mode
        },
        algolia: {
            appId: 'DJ56W2DX1L',
            apiKey: '865921f3caf63083e8d54552b5ab7a79',
            indexName: 'bandwidth',
            contextualSearch: false, // useful for versioned Docusaurus sites
        },
        navbar: {
            title: '',
            hideOnScroll: false,
            logo: {
                alt: 'Bandwidth',
                src: 'img/bw-horizontal.svg',
            },
            items: [{
                type: 'dropdown',
                label: 'US & Canada APIs',
                position: 'left',
                items: [
                    {
                        to: 'docs',
                        activeBasePath: 'docs',
                        label: 'Docs',
                    }, {
                        to: 'apis',
                        label: 'API Reference',
                        activeBasePath: 'apis'
                    }, {
                        to: 'sdks',
                        label: 'SDKs',
                        activeBasePath: 'sdks'
                    }, {
                        to: 'https://github.com/Bandwidth-Samples',
                        label: 'Samples',
                    }
                ]
            }, {
                type: 'dropdown',
                label: 'Global APIs',
                position: 'left',
                items: [
                    {
                        to: 'apis/global',
                        label: 'Docs & API Reference',
                    }
                ]
            }, {
                href: 'https://github.com/Bandwidth',
                position: 'right', 
                className: 'header-github-link bw-link',
                title: 'Github Organization'
            }, {
                href: 'https://www.postman.com/bandwidth',   // TODO: update with real postman url
                position: 'right', 
                className: 'header-postman-link bw-link',
                title: 'Postman Collection'
            }, {
                href: 'https://dashboard.bandwidth.com/portal/r/',
                position: 'right', 
                className: 'header-dashboard-link bw-link',
                title: 'Dashboard Login'
            }]
        },
        footer: {
            logo: {
                alt: 'Bandwidth',
                src: 'img/bw-horizontal.svg',
                href: 'https://www.bandwidth.com',
            },
            links: [
                {
                    title: 'Social',
                    items: [{
                        label: 'Instagram',
                        to: 'https://www.instagram.com/wearebandwidth',
                    }, {
                        label: 'LinkedIn',
                        to: 'https://www.linkedin.com/company/bandwidth-inc'
                    }, {
                        label: 'Twitter',
                        to: 'https://twitter.com/bandwidth'
                    }, {
                        label: 'YouTube',
                        to: 'https://www.youtube.com/user/bandwidth'
                    }]
                },
                {
                    title: 'Community',
                    items: [{
                        label: 'Blog',
                        to: 'https://www.bandwidth.com/blog/',
                    }, {
                        label: 'GitHub',
                        to: 'https://github.com/Bandwidth'
                    }, {
                        label: 'Postman',
                        to: 'https://www.postman.com/bandwidth'
                    }],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Release Notes',
                            to: 'https://www.bandwidth.com/release-notes/'
                        }, {
                            label: 'Sandbox',
                            to: 'https://sandbox.bandwidth.com'
                        }, {
                            label: 'Status',
                            to: 'https://status.bandwidth.com/'
                        }, {
                            label: 'Support',
                            to: 'https://support.bandwidth.com'
                        }
                    ],
                }
            ],
            copyright: `© ${new Date().getFullYear()} Bandwidth Inc. Built with Docusaurus.`,
        },
        // Now this breaks redoc :sad: (Now missing prism dependency as well)
        // prism: {
        //     additionalLanguages: ['csharp', 'java', 'ruby', 'php'],
        //   },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebar.js'),
                    editUrl: 'https://github.com/Bandwidth/api-docs/edit/main/site/',
                    sidebarCollapsible: true,
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://github.com/Bandwidth/api-docs/edit/main/site/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                googleAnalytics: {
                    trackingID: 'UA-62651840-1',
                    anonymizeIP: false,
                },
            }
        ],
    ],
    customFields: {
        numbersSpec: JSON.parse(numbersSpec),
        phoneNumberLookupSpec: YAML.parse(phoneNumberLookupSpec),
        voiceSpec: YAML.parse(voiceSpec),
        messagingSpec: YAML.parse(messagingSpec),
        messagingInternationalSpec: JSON.parse(messagingInternationalSpec),
        webRTCSpec: YAML.parse(webRtcSpec),
        multiFactorAuthSpec: YAML.parse(multiFactorAuthSpec),
        dashSpec: JSON.parse(dashSpec),
        dashNotificationsSpec: JSON.parse(dashNotificationsSpec),
        globalSpec: YAML.parse(globalSpec),
        globalSpec_v2: YAML.parse(globalSpec_v2),
        globalSpec_beta: YAML.parse(globalSpec_beta),
        insightsSpec: YAML.parse(insightsSpec),

        // CSS Colors
        bwBlue: '#079CEE',
        voicePurple: '#9a59c5',
        voxbonePurple: '#6600ff',
        messagingGreen: '#00bf8c',
        emergencyOrange: '#ff6f47',
        numbersMaroon: '#652B51',
        webRtcBlue: '#194F7A',
        mfaGreen: '#106149',
        white: '#FFFFFF',
        lightBlue: '#E6F5FD',
        grey: '#9C9A9B',
        midnight: '#084f7A',
        black: '#090306',
        redocCodeBackground: '#263238',
    },
    plugins: [
        path.resolve(__dirname, 'redoc-plugin')
    ],
};
