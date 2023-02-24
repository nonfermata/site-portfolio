import bgv from '../assets/images/bgv.png';
import meddenta from '../assets/images/meddenta.png';
import booking from '../assets/images/booking.png';
import popovmedia from '../assets/images/popovmedia.png';
import octagon from '../assets/images/octagon.png';

export const profileData = {
    en: {
        name: 'Dmitry Baulin',
        role: 'Frontend Developer'
    },
    ru: {
        name: 'Дмитрий Баулин',
        role: 'Фронтенд-разработчик'
    }
};

export const menuData = {
    en: {
        home: 'Home',
        portfolio: 'Portfolio',
        stack: 'Stack',
        contacts: 'Contact me'
    },
    ru: {
        home: 'Главная',
        portfolio: 'Портфолио',
        stack: 'Стек',
        contacts: 'Контакты'
    }
};

export const homeData = {
    en: {
        hello: 'Hello world! )',
        title: `I'm Dmitry.`,
        descr: 'I am a frontend developer. I develop applications on ReactJS. \nI am confident in HTML, CSS, JavaScript, adaptive and cross-browser layout. \nI develop websites of any complexity "turnkey".',
        btnStack: 'Stack',
        btnPortfolio: 'Portfolio'
    },
    ru: {
        hello: 'Привет, мир! )',
        title: 'Я Дмитрий.',
        descr: 'Являюсь фронтенд-разработчиком. Занимаюсь разработкой приложений на ReactJS.\n Уверенно владею HTML, CSS, JavaScript, адаптивной и кроссбраузерной версткой. \n Разрабатываю сайты любой сложности с нуля "под ключ".',
        btnStack: 'Стек',
        btnPortfolio: 'Портфолио'
    }
};

export const stackData = {
    en: {
        mainRoleTitle: 'My main specialization is ',
        mainRoleBase: 'application development on ReactJS.',
        mainRoleDescr:
            'I am confident in the modules, libraries, technologies used in working on React \n(Redux, React-Redux, Redux Toolkit, Axios, Moment, Lodash, Bootstrap, etc.)',
        extraRolesTitle: 'Additional specializations',
        extraRolesList: [
            'design, layout of websites',
            'adaptive, cross-browser layout',
            'implementation of JS',
            'installation on CMS',
            'deployment to the server',
            'content administration and updates'
        ],
        skillsTitle: 'Core skills',
        skillsList: [
            'HTML 5',
            'CSS 3',
            'Flex, Grid',
            'JavaScript',
            'ReactJS',
            'Redux',
            'NodeJS',
            'Working with Git'
        ]
    },
    ru: {
        mainRoleTitle: 'Моя основная специализация –',
        mainRoleBase: 'разработка приложений на ReactJS.',
        mainRoleDescr:
            'Уверенно ориентируюсь в модулях, библиотеках, технологиях, применяемых в работе на React \n(Redux, React-Redux, Redux Toolkit, Axios, Moment, Lodash, Bootstrap и др.)',
        extraRolesTitle: 'Дополнительные специализации',
        extraRolesList: [
            'дизайн, верстка сайтов',
            'адаптивная, кроссбраузерная верстка',
            'внедрение js-логики',
            'установка на CMS',
            'деплой на сервер',
            'администрирование и обновления контента'
        ],
        skillsTitle: 'Ключевые навыки',
        skillsList: [
            'HTML 5',
            'CSS 3',
            'Flex, Grid',
            'JavaScript',
            'ReactJS',
            'Redux',
            'NodeJS',
            'Работа с Git'
        ]
    }
};

export const portfolioData = {
    en: [
        {
            title: 'Enjoy Booking',
            descr: 'the application for booking hotel rooms\nfull-stack SPA, demo project',
            url: '//enjoybooking-bgv.b4a.run',
            todo: 'design, layout, adaptive layout, React development, authentication, data management, own server on NodeJS (Express)',
            techs: 'ReactJS, Redux, NodeJS, MongoDB',
            image: booking
        },
        {
            title: 'MeDDenta',
            descr: 'the website of the medical center in Klin, Moscow region',
            url: '//meddenta-klin.ru',
            todo: 'design, layout, adaptive layout, React development, deployment, hosting, administration',
            techs: 'ReactJS, Redux',
            image: meddenta
        },
        {
            title: 'Bgvmusic',
            descr: 'the multi-page website of the "Belaya Gvardiya" music group',
            url: '//bgvmusic.ru',
            todo: 'design, layout, adaptive layout, content filling, installation on CMS (MODX Revo), deployment, hosting, administration',
            techs: 'Native JS, jQuery',
            image: bgv
        },
        {
            title: 'Octagon',
            descr: 'the multi-page website of the "Octagon" architectural group',
            url: '//octagon-ag.ru',
            todo: 'design, layout, installation on CMS (MODX Revo), deployment, hosting, administration',
            techs: 'Native JS, jQuery',
            image: octagon
        },
        {
            title: 'Mediaschool',
            descr: 'the multi-page website of the Igor Popov School of Journalism',
            url: '//popovmedia.ru',
            todo: 'design, layout, installation on CMS (WordPress), deployment, hosting',
            techs: 'Native JS, jQuery',
            image: popovmedia
        }
    ],
    ru: [
        {
            title: 'Enjoy Booking',
            descr: 'приложение по бронированию номеров в отеле\nfull-stack SPA, демонстрационный проект',
            url: '//enjoybooking-bgv.b4a.run',
            todo: 'дизайн, верстка, адаптивная верстка, разработка на React, аутентификация, управление данными, собственный сервер на NodeJS (Express)',
            techs: 'ReactJS, Redux, NodeJS, MongoDB',
            image: booking
        },
        {
            title: 'МеДДента',
            descr: 'сайт медицинского центра в г. Клин, Московская область',
            url: '//meddenta-klin.ru',
            todo: 'дизайн, верстка, адаптивная верстка, разработка на React, деплой, хостинг, администрирование',
            techs: 'ReactJS, Redux',
            image: meddenta
        },
        {
            title: 'Bgvmusic',
            descr: 'многостраничный сайт музыкальной группы "Белая Гвардия"',
            url: '//bgvmusic.ru',
            todo: 'дизайн, верстка, адаптивная верстка, наполнение контентом, установка на CMS (MODX Revo), деплой, хостинг, администрирование',
            techs: 'Native JS, jQuery',
            image: bgv
        },
        {
            title: 'Октагон',
            descr: 'многостраничный сайт архитектурной группы "Октагон"',
            url: '//octagon-ag.ru',
            todo: 'дизайн, верстка, установка на CMS (MODX Revo), деплой, хостинг, администрирование',
            techs: 'Native JS, jQuery',
            image: octagon
        },
        {
            title: 'Медиашкола',
            descr: 'многостраничный сайт школы журналистики Игоря Попова',
            url: '//popovmedia.ru',
            todo: 'дизайн, верстка, установка на CMS (WordPress), деплой, хостинг',
            techs: 'Native JS, jQuery',
            image: popovmedia
        }
    ]
};

export const contactsData = {
    en: {
        title: `I am open to participate in any interesting projects`,
        descriptions: {
            email: 'My e-mail',
            hh: 'Full resume on HeadHunter',
            telegram: 'Telegram account',
            linkedin: 'My LikedIn',
            github: 'My GitHub',
            fb: 'Facebook account'
        }
    },
    ru: {
        title: 'Я открыт для участия в любых интересных проектах',
        descriptions: {
            email: 'Мой e-mail',
            hh: 'Полное резюме на HeadHunter',
            telegram: 'Аккаунт в Telegram',
            linkedin: 'Я в LikedIn',
            github: 'Я на GitHub',
            fb: 'Аккаунт на Facebook'
        }
    }
};
