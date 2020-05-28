const tabsMock = [
  {
    type: 'tab',
    id: 122,
    title: 'Assistant Home',
    description: 'Description for tab-122',
    properties: {
      tabType: 'help',
    },
    childNodes: [
      {
        type: 'smart-walkthru',
        id: 778,
        title: 'Content smart-walkthru-778',
        description: 'Description for smart-walkthru-778',
        properties: {},
      },
      {
        type: 'survey',
        id: 571,
        title: 'Content survey-571',
        description: 'Description for survey-571',
        properties: {},
      },
      {
        type: 'shuttle',
        id: 830,
        title: 'Content shuttle-830',
        description: 'Description for shuttle-830',
        properties: {
          url: 'https://50.example.com/index?t=517',
        },
      },
      {
        type: 'video',
        id: 747,
        title: 'Content video-747',
        description: 'Description for video-747',
        properties: {},
      },
      {
        type: 'article',
        id: 217,
        title: 'Content article-217',
        description: 'Description for article-217',
        properties: {},
      },
      {
        type: 'category',
        id: 400,
        title: 'Category',
        description: 'Description for category-400',
        childNodes: [
          {
            type: 'smart-walkthru',
            id: 656,
            title: 'Content smart-walkthru-656',
            description: 'Description for smart-walkthru-656',
            properties: {},
          },
          {
            type: 'survey',
            id: 642,
            title: 'Content survey-642',
            description: 'Description for survey-642',
            properties: {},
          },
          {
            type: 'shuttle',
            id: 397,
            title: 'Content shuttle-397',
            description: 'Description for shuttle-397',
            properties: {
              url: 'https://50.example.com/index?t=517',
            },
          },
          {
            type: 'video',
            id: 551,
            title: 'Content video-551',
            description: 'Description for video-551',
            properties: {},
          },
          {
            type: 'article',
            id: 933,
            title: 'Content article-933',
            description: 'Description for article-933',
            properties: {},
          },
        ],
        properties: {},
      },
    ],
  },
  {
    type: 'tab',
    id: 230,
    title: 'Ongoing Tasks',
    description: 'Description for tab-230',
    properties: {
      tabType: 'tasks',
    },
    childNodes: [
      {
        type: 'task',
        id: 774,
        title: 'Not completed',
        description: 'Description for task-774',
        properties: {
          isCompleted: false,
          isCrossedOff: false,
          isDisabled: false,
        },
      },
      {
        type: 'task',
        id: 640,
        title: 'Not completed',
        description: 'Description for task-640',
        properties: {
          isCompleted: false,
          isCrossedOff: false,
          isDisabled: false,
        },
      },
      {
        type: 'task',
        id: 874,
        title: 'Completed - not crossed off, not disabled',
        description: 'Description for task-874',
        properties: {
          isCompleted: true,
          isCrossedOff: false,
          isDisabled: false,
        },
      },
      {
        type: 'task',
        id: 939,
        title: 'Completed - not crossed off, not disabled',
        description: 'Description for task-939',
        properties: {
          isCompleted: true,
          isCrossedOff: false,
          isDisabled: false,
        },
      },
      {
        type: 'task',
        id: 721,
        title: 'Completed - crossed off, not disabled',
        description: 'Description for task-721',
        properties: {
          isCompleted: true,
          isCrossedOff: true,
          isDisabled: false,
        },
      },
      {
        type: 'task',
        id: 842,
        title: 'Completed - crossed off, not disabled',
        description: 'Description for task-842',
        properties: {
          isCompleted: true,
          isCrossedOff: true,
          isDisabled: false,
        },
      },
      {
        type: 'task',
        id: 171,
        title: 'Completed - crossed off, disabled',
        description: 'Description for task-171',
        properties: {
          isCompleted: true,
          isCrossedOff: true,
          isDisabled: true,
        },
      },
      {
        type: 'task',
        id: 36,
        title: 'Completed - crossed off, disabled',
        description: 'Description for task-36',
        properties: {
          isCompleted: true,
          isCrossedOff: true,
          isDisabled: true,
        },
      },
      {
        type: 'task',
        id: 921,
        title: 'Completed - not crossed off, disabled',
        description: 'Description for task-921',
        properties: {
          isCompleted: true,
          isCrossedOff: false,
          isDisabled: true,
        },
      },
      {
        type: 'task',
        id: 980,
        title: 'Completed - not crossed off, disabled',
        description: 'Description for task-980',
        properties: {
          isCompleted: true,
          isCrossedOff: false,
          isDisabled: true,
        },
      },
      {
        type: 'category',
        id: 823,
        title: 'Day 1',
        description: 'Description for category-823',
        childNodes: [
          {
            type: 'task',
            id: 61,
            title: 'Not completed',
            description: 'Description for task-61',
            properties: {
              isCompleted: false,
              isCrossedOff: false,
              isDisabled: false,
            },
          },
          {
            type: 'task',
            id: 278,
            title: 'Not completed',
            description: 'Description for task-278',
            properties: {
              isCompleted: false,
              isCrossedOff: false,
              isDisabled: false,
            },
          },
          {
            type: 'task',
            id: 427,
            title: 'Completed - not crossed off, not disabled',
            description: 'Description for task-427',
            properties: {
              isCompleted: true,
              isCrossedOff: false,
              isDisabled: false,
            },
          },
          {
            type: 'task',
            id: 484,
            title: 'Completed - not crossed off, not disabled',
            description: 'Description for task-484',
            properties: {
              isCompleted: true,
              isCrossedOff: false,
              isDisabled: false,
            },
          },
          {
            type: 'task',
            id: 840,
            title: 'Completed - crossed off, not disabled',
            description: 'Description for task-840',
            properties: {
              isCompleted: true,
              isCrossedOff: true,
              isDisabled: false,
            },
          },
          {
            type: 'task',
            id: 633,
            title: 'Completed - crossed off, not disabled',
            description: 'Description for task-633',
            properties: {
              isCompleted: true,
              isCrossedOff: true,
              isDisabled: false,
            },
          },
          {
            type: 'task',
            id: 318,
            title: 'Completed - crossed off, disabled',
            description: 'Description for task-318',
            properties: {
              isCompleted: true,
              isCrossedOff: true,
              isDisabled: true,
            },
          },
          {
            type: 'task',
            id: 254,
            title: 'Completed - crossed off, disabled',
            description: 'Description for task-254',
            properties: {
              isCompleted: true,
              isCrossedOff: true,
              isDisabled: true,
            },
          },
          {
            type: 'task',
            id: 173,
            title: 'Completed - not crossed off, disabled',
            description: 'Description for task-173',
            properties: {
              isCompleted: true,
              isCrossedOff: false,
              isDisabled: true,
            },
          },
          {
            type: 'task',
            id: 883,
            title: 'Completed - not crossed off, disabled',
            description: 'Description for task-883',
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
    id: 409,
    title: 'Bookmarks',
    description: 'Description for tab-409',
    childNodes: [
      {
        type: 'shuttle',
        id: 388,
        title: 'Content shuttle-388',
        description: 'Description for shuttle-388',
        properties: {
          url: 'https://50.example.com/index?t=517',
        },
      },
      {
        type: 'shuttle',
        id: 295,
        title: 'Content shuttle-295',
        description: 'Description for shuttle-295',
        properties: {
          url: 'https://50.example.com/index?t=517',
        },
      },
      {
        type: 'shuttle',
        id: 217,
        title: 'Content shuttle-217',
        description: 'Description for shuttle-217',
        properties: {
          url: 'https://50.example.com/index?t=517',
        },
      },
      {
        type: 'shuttle',
        id: 786,
        title: 'Content shuttle-786',
        description: 'Description for shuttle-786',
        properties: {
          url: 'https://50.example.com/index?t=517',
        },
      },
      {
        type: 'shuttle',
        id: 781,
        title: 'Content shuttle-781',
        description: 'Description for shuttle-781',
        properties: {
          url: 'https://50.example.com/index?t=517',
        },
      },
      {
        type: 'shuttle',
        id: 788,
        title: 'Content shuttle-788',
        description: 'Description for shuttle-788',
        properties: {
          url: 'https://50.example.com/index?t=517',
        },
      },
      {
        type: 'shuttle',
        id: 948,
        title: 'Content shuttle-948',
        description: 'Description for shuttle-948',
        properties: {
          url: 'https://50.example.com/index?t=517',
        },
      },
      {
        type: 'shuttle',
        id: 887,
        title: 'Content shuttle-887',
        description: 'Description for shuttle-887',
        properties: {
          url: 'https://50.example.com/index?t=517',
        },
      },
      {
        type: 'shuttle',
        id: 748,
        title: 'Content shuttle-748',
        description: 'Description for shuttle-748',
        properties: {
          url: 'https://50.example.com/index?t=517',
        },
      },
      {
        type: 'shuttle',
        id: 340,
        title: 'Content shuttle-340',
        description: 'Description for shuttle-340',
        properties: {
          url: 'https://50.example.com/index?t=517',
        },
      },
    ],
    properties: {
      tabType: 'help',
    },
  },
];

export default tabsMock;
