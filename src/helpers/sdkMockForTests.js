const searchResults = [
  {
    title: 'Peace to Prosperity',
    description:
      'Jan 1, 2020 ... CONTENTS. GLOSSARY | 1 ... adjustments to the share of Egyptian, Israeli, or \nPalestinian content required to meet the 35 percent content.',
    type: 'search-result',
    properties: {
      knowledgeBaseType: 'Google',
      url: 'http://pic-upload.ynet.co.il/news/Peace-to-Prosperity-0120.pdf',
    },
  },
  {
    title: 'USDA National Fluoride Database of Selected Beverages and...',
    description:
      'Fluoride content of municipal water in the United States: What percentage is \nfluoridated? J. Food Comp. Anal. 16(5): 621-628. Ophaug RH. 1983-1987.',
    type: 'search-result',
    properties: {
      knowledgeBaseType: 'Google',
      url: 'http://go.ynet.co.il/pic/briut/F02.pdf',
    },
  },
  {
    title: 'Fat and Energy Contents of Expressed Human Breast Milk in...',
    description:
      'Energy contents of the milk were measured with a bomb calorimeter. Results. \nThe groups did not differ in terms of mater- nal height and diet, infant birth weight,\n ...',
    type: 'search-result',
    properties: {
      knowledgeBaseType: 'Google',
      url: 'http://prdupl02.ynet.co.il/ForumFiles/13424549.pdf',
    },
  },
  {
    title: 'אמבלייז רוכשת השליטה ב-Smart Content מרעננה',
    description:
      '16 ינואר 2006 ... Smart Content מפתח טכנולוגיה ל"דחיפת" תוכן מותאם אישית למכשירים ניידים ומחשבים \nאישיים על גבי רשתות אלחוטיות ו-IP. אמבלייז מתכוונת לשלב את טכנולוגיית ...',
    type: 'search-result',
    properties: {
      knowledgeBaseType: 'Google',
      url: 'https://www.ynet.co.il/articles/0,7340,L-3201198,00.html',
    },
  },
  {
    title: 'מפת הבחירות של ישראל 2019 - ynet',
    description:
      'המידע המוצג מבוסס על עיבוד שערך אתר ״מדלן - הכל על בתים ושכונות״ לנתוני ועדת הבחירות \nהמרכזית. נתוני השכונות מקורבים לפי התאמת קלפיות. כל המידע מוצג תחת תנאי השימוש ...',
    type: 'search-result',
    properties: {
      knowledgeBaseType: 'Google',
      url: 'https://z.ynet.co.il/short/content/ElectionMap2019/',
    },
  },
  {
    title: 'X-rays',
    description:
      'hirty years ago, X-rays were the only way to see what was going on inside your \nbody. Now other methods of medical imaging are available, some using different\n ...',
    type: 'search-result',
    properties: {
      knowledgeBaseType: 'Google',
      url: 'http://prdupl02.ynet.co.il/ForumFiles_2/16567358.pdf',
    },
  },
  {
    title: 'Vizual.ai',
    description:
      'Content Publishers, Photo Editors & Online Retailers can now leverage the \npower of the Vizual.ai platform to select the optimal imagery for their customers.',
    type: 'search-result',
    properties: {
      knowledgeBaseType: 'Google',
      url: 'https://yq-api.ynet.co.il/',
    },
  },
  {
    title: 'גוגל: בטא של תוכנית Adsense for Content בעברית',
    description:
      '27 דצמבר 2006 ... השירות של גוגל, המאפשר הצבת מודעות קשורות תוכן, הושק בעברית בבטא, בשלב ראשון רק \nבאתר תפוז.',
    type: 'search-result',
    properties: {
      knowledgeBaseType: 'Google',
      url: 'https://www.ynet.co.il/articles/0,7340,L-3345160,00.html',
    },
  },
  {
    title: '(function() { CmmAppVideoApi.DecorationTypes = { Credit: ...',
    description:
      '_registerContentEvents(content); this.pool.push(content); }; }; this.\n_registerContentEvents = function(content){ var contentEvents = content.\ngetEventList(); ...',
    type: 'search-result',
    properties: {
      knowledgeBaseType: 'Google',
      url: 'https://www.ynet.co.il/Cmn/App/Video/CmmAppVideoApi_Js_Content/0,13943,280716135620,00.html',
    },
  },
  {
    title: 'תחרות בתחומי העיצוב וה-e-Content',
    description:
      '23 יוני 2006 ... Top Talent של EUROPRIX היא תחרות אירופית עבור סטודנטים ואנשי מקצוע צעירים, \nהעוסקים בפרויקטים חדשניים בתחומי העיצוב וה- e-Content (תוכן אלקטרוני), ...',
    type: 'search-result',
    properties: {
      knowledgeBaseType: 'Google',
      url: 'https://www.ynet.co.il/articles/0,7340,L-3266501,00.html',
    },
  },
];

const sdk = {
  wmSearch: {
    userGuid: '0854dff97dca4aa18d85358b00cd9593',
    enduserGuid: 'user@walkme.com',
    serverPath: 'https://playerserver.walkmeqa.com',
    language: null,
    envId: 0,
    saveSearch: false,
    search: jest.fn(() => searchResults),
  },
  wmNotifications: {
    _notificationRecurrences: {
      consts: {
        RECURRENCE_TYPES: {
          ONCE: 'Once',
          DAY: 'Daily',
          WEELK: 'Weekly',
        },
        RECURRENCE_CODES: {
          ONCE: 0,
          DAY: 1,
          WEEK: 2,
        },
      },
    },
    getNotifications() {
      return this.notifications;
    },
  },
  notifications: [
    {
      type: 'notification',
      id: 'aaa',
      title: 'Notification 1',
      description: 'Message 1',
      properties: {
        isPlayed: true,
        isSilent: true,
        date: '2020-06-10T07:01:58.900Z',
      },
    },
    {
      type: 'notification',
      id: 'bbb',
      title: 'Notification 2',
      description: 'Message 2',
      properties: {
        isPlayed: false,
        isSilent: false,
        date: '2020-06-10T07:01:58.900Z',
      },
    },
    {
      type: 'notification',
      id: 'ccc',
      title: 'Notification 3',
      description: 'Message 3',
      properties: {
        isPlayed: false,
        isSilent: false,
        date: '2020-06-10T07:01:58.900Z',
      },
    },
  ],
  uiTreeSDK: [
    {
      type: 'tab',
      id: 762,
      title: 'Assistant Home',
      description: 'Description for tab-762',
      properties: {
        tabType: 'help',
      },
      childNodes: [
        {
          type: 'smart-walkthru',
          id: 280,
          title: 'Content smart-walkthru-280',
          description: 'Description for smart-walkthru-280',
          properties: {},
        },
        {
          type: 'survey',
          id: 777,
          title: 'Content survey-777',
          description: 'Description for survey-777',
          properties: {},
        },
        {
          type: 'shuttle',
          id: 27,
          title: 'Content shuttle-27',
          description: 'Description for shuttle-27',
          properties: {
            url: 'https://27.example.com/index?t=599',
          },
        },
        {
          type: 'video',
          id: 981,
          title: 'Content video-981',
          description: 'Description for video-981',
          properties: {},
        },
        {
          type: 'article',
          id: 723,
          title: 'Content article-723',
          description: 'Description for article-723',
          properties: {},
        },
        {
          type: 'category',
          id: 20,
          title: 'Category',
          description: 'Description for category-20',
          childNodes: [
            {
              type: 'smart-walkthru',
              id: 554,
              title: 'Content smart-walkthru-554',
              description: 'Description for smart-walkthru-554',
              properties: {},
            },
            {
              type: 'survey',
              id: 211,
              title: 'Content survey-211',
              description: 'Description for survey-211',
              properties: {},
            },
            {
              type: 'shuttle',
              id: 70,
              title: 'Content shuttle-70',
              description: 'Description for shuttle-70',
              properties: {
                url: 'https://27.example.com/index?t=599',
              },
            },
            {
              type: 'video',
              id: 896,
              title: 'Content video-896',
              description: 'Description for video-896',
              properties: {},
            },
            {
              type: 'article',
              id: 522,
              title: 'Content article-522',
              description: 'Description for article-522',
              properties: {},
            },
          ],
          properties: {},
        },
      ],
    },
    {
      type: 'tab',
      id: 313,
      title: 'Ongoing Tasks',
      description: 'Description for tab-313',
      properties: {
        tabType: 'tasks',
      },
      childNodes: [
        {
          type: 'task',
          id: 989,
          title: 'Not completed',
          description: 'Description for task-989',
          properties: {
            isCompleted: false,
            isCrossedOff: false,
            isDisabled: false,
          },
        },
        {
          type: 'task',
          id: 892,
          title: 'Not completed',
          description: 'Description for task-892',
          properties: {
            isCompleted: false,
            isCrossedOff: false,
            isDisabled: false,
          },
        },
        {
          type: 'task',
          id: 528,
          title: 'Completed - not crossed off, not disabled',
          description: 'Description for task-528',
          properties: {
            isCompleted: true,
            isCrossedOff: false,
            isDisabled: false,
          },
        },
        {
          type: 'task',
          id: 690,
          title: 'Completed - not crossed off, not disabled',
          description: 'Description for task-690',
          properties: {
            isCompleted: true,
            isCrossedOff: false,
            isDisabled: false,
          },
        },
        {
          type: 'task',
          id: 483,
          title: 'Completed - crossed off, not disabled',
          description: 'Description for task-483',
          properties: {
            isCompleted: true,
            isCrossedOff: true,
            isDisabled: false,
          },
        },
        {
          type: 'task',
          id: 243,
          title: 'Completed - crossed off, not disabled',
          description: 'Description for task-243',
          properties: {
            isCompleted: true,
            isCrossedOff: true,
            isDisabled: false,
          },
        },
        {
          type: 'task',
          id: 79,
          title: 'Completed - crossed off, disabled',
          description: 'Description for task-79',
          properties: {
            isCompleted: true,
            isCrossedOff: true,
            isDisabled: true,
          },
        },
        {
          type: 'task',
          id: 963,
          title: 'Completed - crossed off, disabled',
          description: 'Description for task-963',
          properties: {
            isCompleted: true,
            isCrossedOff: true,
            isDisabled: true,
          },
        },
        {
          type: 'task',
          id: 596,
          title: 'Completed - not crossed off, disabled',
          description: 'Description for task-596',
          properties: {
            isCompleted: true,
            isCrossedOff: false,
            isDisabled: true,
          },
        },
        {
          type: 'task',
          id: 462,
          title: 'Completed - not crossed off, disabled',
          description: 'Description for task-462',
          properties: {
            isCompleted: true,
            isCrossedOff: false,
            isDisabled: true,
          },
        },
        {
          type: 'category',
          id: 140,
          title: 'Day 1',
          description: 'Description for category-140',
          childNodes: [
            {
              type: 'task',
              id: 196,
              title: 'Not completed',
              description: 'Description for task-196',
              properties: {
                isCompleted: false,
                isCrossedOff: false,
                isDisabled: false,
              },
            },
            {
              type: 'task',
              id: 694,
              title: 'Not completed',
              description: 'Description for task-694',
              properties: {
                isCompleted: false,
                isCrossedOff: false,
                isDisabled: false,
              },
            },
            {
              type: 'task',
              id: 646,
              title: 'Completed - not crossed off, not disabled',
              description: 'Description for task-646',
              properties: {
                isCompleted: true,
                isCrossedOff: false,
                isDisabled: false,
              },
            },
            {
              type: 'task',
              id: 194,
              title: 'Completed - not crossed off, not disabled',
              description: 'Description for task-194',
              properties: {
                isCompleted: true,
                isCrossedOff: false,
                isDisabled: false,
              },
            },
            {
              type: 'task',
              id: 660,
              title: 'Completed - crossed off, not disabled',
              description: 'Description for task-660',
              properties: {
                isCompleted: true,
                isCrossedOff: true,
                isDisabled: false,
              },
            },
            {
              type: 'task',
              id: 129,
              title: 'Completed - crossed off, not disabled',
              description: 'Description for task-129',
              properties: {
                isCompleted: true,
                isCrossedOff: true,
                isDisabled: false,
              },
            },
            {
              type: 'task',
              id: 103,
              title: 'Completed - crossed off, disabled',
              description: 'Description for task-103',
              properties: {
                isCompleted: true,
                isCrossedOff: true,
                isDisabled: true,
              },
            },
            {
              type: 'task',
              id: 331,
              title: 'Completed - crossed off, disabled',
              description: 'Description for task-331',
              properties: {
                isCompleted: true,
                isCrossedOff: true,
                isDisabled: true,
              },
            },
            {
              type: 'task',
              id: 748,
              title: 'Completed - not crossed off, disabled',
              description: 'Description for task-748',
              properties: {
                isCompleted: true,
                isCrossedOff: false,
                isDisabled: true,
              },
            },
            {
              type: 'task',
              id: 38,
              title: 'Completed - not crossed off, disabled',
              description: 'Description for task-38',
              properties: {
                isCompleted: true,
                isCrossedOff: false,
                isDisabled: true,
              },
            },
          ],
          properties: {},
        },
      ],
    },
    {
      type: 'tab',
      id: 298,
      title: 'Bookmarks',
      description: 'Description for tab-298',
      childNodes: [
        {
          type: 'shuttle',
          id: 518,
          title: 'Content shuttle-518',
          description: 'Description for shuttle-518',
          properties: {
            url: 'https://27.example.com/index?t=599',
          },
        },
        {
          type: 'shuttle',
          id: 492,
          title: 'Content shuttle-492',
          description: 'Description for shuttle-492',
          properties: {
            url: 'https://27.example.com/index?t=599',
          },
        },
        {
          type: 'shuttle',
          id: 971,
          title: 'Content shuttle-971',
          description: 'Description for shuttle-971',
          properties: {
            url: 'https://27.example.com/index?t=599',
          },
        },
        {
          type: 'shuttle',
          id: 708,
          title: 'Content shuttle-708',
          description: 'Description for shuttle-708',
          properties: {
            url: 'https://27.example.com/index?t=599',
          },
        },
        {
          type: 'shuttle',
          id: 132,
          title: 'Content shuttle-132',
          description: 'Description for shuttle-132',
          properties: {
            url: 'https://27.example.com/index?t=599',
          },
        },
        {
          type: 'shuttle',
          id: 381,
          title: 'Content shuttle-381',
          description: 'Description for shuttle-381',
          properties: {
            url: 'https://27.example.com/index?t=599',
          },
        },
        {
          type: 'shuttle',
          id: 304,
          title: 'Content shuttle-304',
          description: 'Description for shuttle-304',
          properties: {
            url: 'https://27.example.com/index?t=599',
          },
        },
        {
          type: 'shuttle',
          id: 353,
          title: 'Content shuttle-353',
          description: 'Description for shuttle-353',
          properties: {
            url: 'https://27.example.com/index?t=599',
          },
        },
        {
          type: 'shuttle',
          id: 548,
          title: 'Content shuttle-548',
          description: 'Description for shuttle-548',
          properties: {
            url: 'https://27.example.com/index?t=599',
          },
        },
        {
          type: 'shuttle',
          id: 481,
          title: 'Content shuttle-481',
          description: 'Description for shuttle-481',
          properties: {
            url: 'https://27.example.com/index?t=599',
          },
        },
      ],
      properties: {
        tabType: 'help',
      },
    },
  ],
  tabTypes: {
    Help: 'help',
    Tasks: 'tasks',
  },
  languagesSDK: [
    {
      displayName: 'default',
      shortName: '',
    },
    {
      displayName: 'spanish',
      shortName: 'es-es',
    },
  ],
  platform: {
    isWindows: false,
    isMac: false,
    isWeb: true,
    isMock: false,
    platform: 'Web',
    platformTypes: ['Windows', 'Mac', 'Web', 'Mock'],
  },
};

const sdkProvider = {
  state: {
    sdk,
    ui: {
      location: {
        contentType: 'help',
        index: 0,
      },
      previousLocation: {
        contentType: 'help',
        index: 0,
      },
      loading: false,
      error: false,
    },
  },
  dispatch: () => {},
};

export { sdkProvider };
