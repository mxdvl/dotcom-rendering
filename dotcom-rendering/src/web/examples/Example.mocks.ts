import { ArticlePillar } from '@guardian/libs';

export const NAV: NavType = {
	pillars: [
		{
			title: 'News',
			longTitle: 'Headlines',
			url: '/',
			pillar: ArticlePillar.News,
			children: [
				{
					title: 'Coronavirus',
					longTitle: 'Coronavirus',
					url: '/world/coronavirus-outbreak',
					children: [],
					mobileOnly: false,
				},
				{
					title: 'World',
					longTitle: 'World news',
					url: '/world',
					children: [
						{
							title: 'Europe',
							longTitle: 'Europe',
							url: '/world/europe-news',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'US',
							longTitle: 'US news',
							url: '/us-news',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Americas',
							longTitle: 'Americas',
							url: '/world/americas',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Asia',
							longTitle: 'Asia',
							url: '/world/asia',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Australia',
							longTitle: 'Australia news',
							url: '/australia-news',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Middle East',
							longTitle: 'Middle East',
							url: '/world/middleeast',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Africa',
							longTitle: 'Africa',
							url: '/world/africa',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Inequality',
							longTitle: 'Inequality',
							url: '/inequality',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Global development',
							longTitle: 'Global development',
							url: '/global-development',
							children: [],
							mobileOnly: false,
						},
					],
					mobileOnly: false,
				},
				{
					title: 'UK',
					longTitle: 'UK news',
					url: '/uk-news',
					children: [
						{
							title: 'UK politics',
							longTitle: 'UK politics',
							url: '/politics',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Education',
							longTitle: 'Education',
							url: '/education',
							children: [
								{
									title: 'Schools',
									longTitle: 'Schools',
									url: '/education/schools',
									children: [],
									mobileOnly: false,
								},
								{
									title: 'Teachers',
									longTitle: 'Teachers',
									url: '/teacher-network',
									children: [],
									mobileOnly: false,
								},
								{
									title: 'Universities',
									longTitle: 'Universities',
									url: '/education/universities',
									children: [],
									mobileOnly: false,
								},
								{
									title: 'Students',
									longTitle: 'Students',
									url: '/education/students',
									children: [],
									mobileOnly: false,
								},
							],
							mobileOnly: false,
						},
						{
							title: 'Media',
							longTitle: 'Media',
							url: '/media',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Society',
							longTitle: 'Society',
							url: '/society',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Law',
							longTitle: 'Law',
							url: '/law',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Scotland',
							longTitle: 'Scotland',
							url: '/uk/scotland',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Wales',
							longTitle: 'Wales',
							url: '/uk/wales',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Northern Ireland',
							longTitle: 'Northern Ireland',
							url: '/uk/northernireland',
							children: [],
							mobileOnly: false,
						},
					],
					mobileOnly: false,
				},
				{
					title: 'Environment',
					longTitle: 'Environment',
					url: '/environment',
					children: [
						{
							title: 'Climate change',
							longTitle: 'Climate change',
							url: '/environment/climate-change',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Wildlife',
							longTitle: 'Wildlife',
							url: '/environment/wildlife',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Energy',
							longTitle: 'Energy',
							url: '/environment/energy',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Pollution',
							longTitle: 'Pollution',
							url: '/environment/pollution',
							children: [],
							mobileOnly: false,
						},
					],
					mobileOnly: false,
				},
				{
					title: 'Science',
					longTitle: 'Science',
					url: '/science',
					children: [],
					mobileOnly: false,
				},
				{
					title: 'Global development',
					longTitle: 'Global development',
					url: '/global-development',
					children: [],
					mobileOnly: false,
				},
				{
					title: 'Football',
					longTitle: 'Football',
					url: '/football',
					children: [
						{
							title: 'Live scores',
							longTitle: 'football/live',
							url: '/football/live',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Tables',
							longTitle: 'football/tables',
							url: '/football/tables',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Fixtures',
							longTitle: 'football/fixtures',
							url: '/football/fixtures',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Results',
							longTitle: 'football/results',
							url: '/football/results',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Competitions',
							longTitle: 'football/competitions',
							url: '/football/competitions',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Clubs',
							longTitle: 'football/teams',
							url: '/football/teams',
							children: [],
							mobileOnly: false,
						},
					],
					mobileOnly: false,
				},
				{
					title: 'Tech',
					longTitle: 'Tech',
					url: '/technology',
					children: [],
					mobileOnly: false,
				},
				{
					title: 'Business',
					longTitle: 'Business',
					url: '/business',
					children: [
						{
							title: 'Economics',
							longTitle: 'Economics',
							url: '/business/economics',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Banking',
							longTitle: 'Banking',
							url: '/business/banking',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Money',
							longTitle: 'Money',
							url: '/money',
							children: [
								{
									title: 'Property',
									longTitle: 'Property',
									url: '/money/property',
									children: [],
									mobileOnly: false,
								},
								{
									title: 'Pensions',
									longTitle: 'Pensions',
									url: '/money/pensions',
									children: [],
									mobileOnly: false,
								},
								{
									title: 'Savings',
									longTitle: 'Savings',
									url: '/money/savings',
									children: [],
									mobileOnly: false,
								},
								{
									title: 'Borrowing',
									longTitle: 'Borrowing',
									url: '/money/debt',
									children: [],
									mobileOnly: false,
								},
								{
									title: 'Careers',
									longTitle: 'Careers',
									url: '/money/work-and-careers',
									children: [],
									mobileOnly: false,
								},
							],
							mobileOnly: false,
						},
						{
							title: 'Markets',
							longTitle: 'Markets',
							url: '/business/stock-markets',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Project Syndicate',
							longTitle: 'Project Syndicate',
							url:
								'/business/series/project-syndicate-economists',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'B2B',
							longTitle: 'B2B',
							url: '/business-to-business',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Retail',
							longTitle: 'Retail',
							url: '/business/retail',
							children: [],
							mobileOnly: false,
						},
					],
					mobileOnly: false,
				},
				{
					title: 'Obituaries',
					longTitle: 'Obituaries',
					url: '/tone/obituaries',
					children: [],
					mobileOnly: false,
				},
			],
			mobileOnly: false,
		},
		{
			title: 'Opinion',
			longTitle: 'Opinion home',
			url: '/commentisfree',
			pillar: ArticlePillar.Opinion,
			children: [
				{
					title: 'The Guardian view',
					longTitle: 'The Guardian view',
					url: '/profile/editorial',
					children: [],
					mobileOnly: false,
				},
				{
					title: 'Columnists',
					longTitle: 'Columnists',
					url: '/index/contributors',
					children: [],
					mobileOnly: false,
				},
				{
					title: 'Cartoons',
					longTitle: 'Cartoons',
					url: '/cartoons/archive',
					children: [],
					mobileOnly: false,
				},
				{
					title: 'Opinion videos',
					longTitle: 'Opinion videos',
					url: '/type/video+tone/comment',
					children: [],
					mobileOnly: false,
				},
				{
					title: 'Letters',
					longTitle: 'Letters',
					url: '/tone/letters',
					children: [],
					mobileOnly: false,
				},
			],
			mobileOnly: false,
		},
		{
			title: 'Sport',
			longTitle: 'Sport home',
			url: '/sport',
			pillar: ArticlePillar.Sport,
			children: [
				{
					title: 'Football',
					longTitle: 'Football',
					url: '/football',
					children: [
						{
							title: 'Live scores',
							longTitle: 'football/live',
							url: '/football/live',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Tables',
							longTitle: 'football/tables',
							url: '/football/tables',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Fixtures',
							longTitle: 'football/fixtures',
							url: '/football/fixtures',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Results',
							longTitle: 'football/results',
							url: '/football/results',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Competitions',
							longTitle: 'football/competitions',
							url: '/football/competitions',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Clubs',
							longTitle: 'football/teams',
							url: '/football/teams',
							children: [],
							mobileOnly: false,
						},
					],
					mobileOnly: false,
				},
				{
					title: 'Cricket',
					longTitle: 'Cricket',
					url: '/sport/cricket',
					children: [],
					mobileOnly: false,
				},
				{
					title: 'Rugby union',
					longTitle: 'Rugby union',
					url: '/sport/rugby-union',
					children: [],
					mobileOnly: false,
				},
				{
					title: 'Tennis',
					longTitle: 'Tennis',
					url: '/sport/tennis',
					children: [],
					mobileOnly: false,
				},
				{
					title: 'Cycling',
					longTitle: 'Cycling',
					url: '/sport/cycling',
					children: [],
					mobileOnly: false,
				},
				{
					title: 'F1',
					longTitle: 'F1',
					url: '/sport/formulaone',
					children: [],
					mobileOnly: false,
				},
				{
					title: 'Golf',
					longTitle: 'Golf',
					url: '/sport/golf',
					children: [],
					mobileOnly: false,
				},
				{
					title: 'US sports',
					longTitle: 'US sports',
					url: '/sport/us-sport',
					children: [],
					mobileOnly: false,
				},
			],
			mobileOnly: false,
		},
		{
			title: 'Culture',
			longTitle: 'Culture home',
			url: '/culture',
			pillar: ArticlePillar.Culture,
			children: [
				{
					title: 'Books',
					longTitle: 'Books',
					url: '/books',
					children: [],
					mobileOnly: false,
				},
				{
					title: 'Music',
					longTitle: 'Music',
					url: '/music',
					children: [],
					mobileOnly: false,
				},
				{
					title: 'TV & radio',
					longTitle: 'TV & radio',
					url: '/tv-and-radio',
					children: [],
					mobileOnly: false,
				},
				{
					title: 'Art & design',
					longTitle: 'Art & design',
					url: '/artanddesign',
					children: [],
					mobileOnly: false,
				},
				{
					title: 'Film',
					longTitle: 'Film',
					url: '/film',
					children: [],
					mobileOnly: false,
				},
				{
					title: 'Games',
					longTitle: 'Games',
					url: '/games',
					children: [],
					mobileOnly: false,
				},
				{
					title: 'Classical',
					longTitle: 'Classical',
					url: '/music/classicalmusicandopera',
					children: [],
					mobileOnly: false,
				},
				{
					title: 'Stage',
					longTitle: 'Stage',
					url: '/stage',
					children: [],
					mobileOnly: false,
				},
			],
			mobileOnly: false,
		},
		{
			title: 'Lifestyle',
			longTitle: 'Lifestyle home',
			url: '/lifeandstyle',
			pillar: ArticlePillar.Lifestyle,
			children: [
				{
					title: 'Fashion',
					longTitle: 'Fashion',
					url: '/fashion',
					children: [],
					mobileOnly: false,
				},
				{
					title: 'Food',
					longTitle: 'Food',
					url: '/food',
					children: [],
					mobileOnly: false,
				},
				{
					title: 'Recipes',
					longTitle: 'Recipes',
					url: '/tone/recipes',
					children: [],
					mobileOnly: false,
				},
				{
					title: 'Love & sex',
					longTitle: 'Love & sex',
					url: '/lifeandstyle/love-and-sex',
					children: [],
					mobileOnly: false,
				},
				{
					title: 'Health & fitness',
					longTitle: 'Health & fitness',
					url: '/lifeandstyle/health-and-wellbeing',
					children: [],
					mobileOnly: false,
				},
				{
					title: 'Home & garden',
					longTitle: 'Home & garden',
					url: '/lifeandstyle/home-and-garden',
					children: [],
					mobileOnly: false,
				},
				{
					title: 'Women',
					longTitle: 'Women',
					url: '/lifeandstyle/women',
					children: [],
					mobileOnly: false,
				},
				{
					title: 'Men',
					longTitle: 'Men',
					url: '/lifeandstyle/men',
					children: [],
					mobileOnly: false,
				},
				{
					title: 'Family',
					longTitle: 'Family',
					url: '/lifeandstyle/family',
					children: [],
					mobileOnly: false,
				},
				{
					title: 'Travel',
					longTitle: 'Travel',
					url: '/travel',
					children: [
						{
							title: 'UK',
							longTitle: 'UK',
							url: '/travel/uk',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Europe',
							longTitle: 'Europe',
							url: '/travel/europe',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'US',
							longTitle: 'US',
							url: '/travel/usa',
							children: [],
							mobileOnly: false,
						},
					],
					mobileOnly: false,
				},
				{
					title: 'Money',
					longTitle: 'Money',
					url: '/money',
					children: [
						{
							title: 'Property',
							longTitle: 'Property',
							url: '/money/property',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Pensions',
							longTitle: 'Pensions',
							url: '/money/pensions',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Savings',
							longTitle: 'Savings',
							url: '/money/savings',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Borrowing',
							longTitle: 'Borrowing',
							url: '/money/debt',
							children: [],
							mobileOnly: false,
						},
						{
							title: 'Careers',
							longTitle: 'Careers',
							url: '/money/work-and-careers',
							children: [],
							mobileOnly: false,
						},
					],
					mobileOnly: false,
				},
			],
			mobileOnly: false,
		},
	],
	otherLinks: {
		url: '',
		title: 'More',
		longTitle: 'More',
		more: true,
		children: [
			{
				title: 'The Guardian app',
				longTitle: 'The Guardian app',
				url:
					'https://www.theguardian.com/mobile/2014/may/29/the-guardian-for-mobile-and-tablet',
				children: [],
				mobileOnly: false,
			},
			{
				title: 'Video',
				longTitle: 'Video',
				url: '/video',
				children: [],
				mobileOnly: false,
			},
			{
				title: 'Podcasts',
				longTitle: 'Podcasts',
				url: '/podcasts',
				children: [],
				mobileOnly: false,
			},
			{
				title: 'Pictures',
				longTitle: 'Pictures',
				url: '/inpictures',
				children: [],
				mobileOnly: false,
			},
			{
				title: 'Newsletters',
				longTitle: 'Newsletters',
				url: '/email-newsletters',
				children: [],
				mobileOnly: false,
			},
			{
				title: "Today's paper",
				longTitle: "Today's paper",
				url: '/theguardian',
				children: [
					{
						title: 'Obituaries',
						longTitle: 'Obituaries',
						url: '/tone/obituaries',
						children: [],
						mobileOnly: false,
					},
					{
						title: 'G2',
						longTitle: 'G2',
						url: '/theguardian/g2',
						children: [],
						mobileOnly: false,
					},
					{
						title: 'Weekend',
						longTitle: 'Weekend',
						url: '/theguardian/weekend',
						children: [],
						mobileOnly: false,
					},
					{
						title: 'The Guide',
						longTitle: 'The Guide',
						url: '/theguardian/theguide',
						children: [],
						mobileOnly: false,
					},
					{
						title: 'Saturday review',
						longTitle: 'Saturday review',
						url: '/theguardian/guardianreview',
						children: [],
						mobileOnly: false,
					},
				],
				mobileOnly: false,
			},
			{
				title: 'Inside the Guardian',
				longTitle: 'Inside the Guardian',
				url: 'https://www.theguardian.com/membership',
				children: [],
				mobileOnly: false,
			},
			{
				title: 'The Observer',
				longTitle: 'The Observer',
				url: '/observer',
				children: [
					{
						title: 'Comment',
						longTitle: 'Comment',
						url: '/theobserver/news/comment',
						children: [],
						mobileOnly: false,
					},
					{
						title: 'The New Review',
						longTitle: 'The New Review',
						url: '/theobserver/new-review',
						children: [],
						mobileOnly: false,
					},
					{
						title: 'Observer Magazine',
						longTitle: 'Observer Magazine',
						url: '/theobserver/magazine',
						children: [],
						mobileOnly: false,
					},
					{
						title: 'Observer Food Monthly',
						longTitle: 'Observer Food Monthly',
						url: '/theobserver/foodmonthly',
						children: [],
						mobileOnly: false,
					},
				],
				mobileOnly: false,
			},
			{
				title: 'Guardian Weekly',
				longTitle: 'Guardian Weekly',
				url:
					'https://www.theguardian.com/weekly?INTCMP=gdnwb_mawns_editorial_gweekly_GW_TopNav_Int',
				children: [],
				mobileOnly: false,
			},
			{
				title: 'Crosswords',
				longTitle: 'Crosswords',
				url: '/crosswords',
				children: [
					{
						title: 'Blog',
						longTitle: 'Blog',
						url: '/crosswords/crossword-blog',
						children: [],
						mobileOnly: false,
					},
					{
						title: 'Editor',
						longTitle: 'Editor',
						url: '/crosswords/series/crossword-editor-update',
						children: [],
						mobileOnly: false,
					},
					{
						title: 'Quick',
						longTitle: 'Quick',
						url: '/crosswords/series/quick',
						children: [],
						mobileOnly: false,
					},
					{
						title: 'Cryptic',
						longTitle: 'Cryptic',
						url: '/crosswords/series/cryptic',
						children: [],
						mobileOnly: false,
					},
					{
						title: 'Prize',
						longTitle: 'Prize',
						url: '/crosswords/series/prize',
						children: [],
						mobileOnly: false,
					},
					{
						title: 'Weekend',
						longTitle: 'Weekend',
						url: '/crosswords/series/weekend-crossword',
						children: [],
						mobileOnly: false,
					},
					{
						title: 'Quiptic',
						longTitle: 'Quiptic',
						url: '/crosswords/series/quiptic',
						children: [],
						mobileOnly: false,
					},
					{
						title: 'Genius',
						longTitle: 'Genius',
						url: '/crosswords/series/genius',
						children: [],
						mobileOnly: false,
					},
					{
						title: 'Speedy',
						longTitle: 'Speedy',
						url: '/crosswords/series/speedy',
						children: [],
						mobileOnly: false,
					},
					{
						title: 'Everyman',
						longTitle: 'Everyman',
						url: '/crosswords/series/everyman',
						children: [],
						mobileOnly: false,
					},
					{
						title: 'Azed',
						longTitle: 'Azed',
						url: '/crosswords/series/azed',
						children: [],
						mobileOnly: false,
					},
				],
				mobileOnly: false,
			},
		],
	},
	brandExtensions: [
		{
			title: 'Search jobs',
			longTitle: 'Search jobs',
			url:
				'https://jobs.theguardian.com?INTCMP=jobs_int_web_newheader_dropdown',
			children: [],
			mobileOnly: false,
		},
		{
			title: 'Holidays',
			longTitle: 'Holidays',
			url:
				'https://holidays.theguardian.com?INTCMP=holidays_int_web_newheader',
			children: [],
			mobileOnly: false,
		},
		{
			title: 'Digital Archive',
			longTitle: 'Digital Archive',
			url: 'https://theguardian.newspapers.com',
			children: [],
			mobileOnly: false,
		},
		{
			title: 'Guardian Puzzles app',
			longTitle: 'Guardian Puzzles app',
			url: 'https://puzzles.theguardian.com/download',
			children: [],
			mobileOnly: false,
		},
	],
	currentNavLink: 'Books',
	subNavSections: {
		links: [
			{
				title: 'Books',
				longTitle: 'Books',
				url: '/books',
				children: [],
				mobileOnly: false,
			},
			{
				title: 'Music',
				longTitle: 'Music',
				url: '/music',
				children: [],
				mobileOnly: false,
			},
			{
				title: 'TV & radio',
				longTitle: 'TV & radio',
				url: '/tv-and-radio',
				children: [],
				mobileOnly: false,
			},
			{
				title: 'Art & design',
				longTitle: 'Art & design',
				url: '/artanddesign',
				children: [],
				mobileOnly: false,
			},
			{
				title: 'Film',
				longTitle: 'Film',
				url: '/film',
				children: [],
				mobileOnly: false,
			},
			{
				title: 'Games',
				longTitle: 'Games',
				url: '/games',
				children: [],
				mobileOnly: false,
			},
			{
				title: 'Classical',
				longTitle: 'Classical',
				url: '/music/classicalmusicandopera',
				children: [],
				mobileOnly: false,
			},
			{
				title: 'Stage',
				longTitle: 'Stage',
				url: '/stage',
				children: [],
				mobileOnly: false,
			},
		],
	},
	readerRevenueLinks: {
		header: {
			contribute:
				'https://support.theguardian.com/contribute?INTCMP=header_support_contribute&acquisitionData=%7B"source":"GUARDIAN_WEB","componentType":"ACQUISITIONS_HEADER","componentId":"header_support_contribute"%7D',
			subscribe:
				'https://support.theguardian.com/subscribe?INTCMP=header_support_subscribe&acquisitionData=%7B"source":"GUARDIAN_WEB","componentType":"ACQUISITIONS_HEADER","componentId":"header_support_subscribe"%7D',
			support:
				'https://support.theguardian.com?INTCMP=header_support&acquisitionData=%7B"source":"GUARDIAN_WEB","componentType":"ACQUISITIONS_HEADER","componentId":"header_support"%7D',
			supporter:
				'https://support.theguardian.com/subscribe?INTCMP=header_support_supporter_cta&acquisitionData=%7B"source":"GUARDIAN_WEB","componentType":"ACQUISITIONS_HEADER","componentId":"header_support_supporter_cta"%7D',
		},
		footer: {
			contribute:
				'https://support.theguardian.com/contribute?INTCMP=footer_support_contribute&acquisitionData=%7B"source":"GUARDIAN_WEB","componentType":"ACQUISITIONS_FOOTER","componentId":"footer_support_contribute"%7D',
			subscribe:
				'https://support.theguardian.com/subscribe?INTCMP=footer_support_subscribe&acquisitionData=%7B"source":"GUARDIAN_WEB","componentType":"ACQUISITIONS_FOOTER","componentId":"footer_support_subscribe"%7D',
			support:
				'https://support.theguardian.com?INTCMP=footer_support&acquisitionData=%7B"source":"GUARDIAN_WEB","componentType":"ACQUISITIONS_FOOTER","componentId":"footer_support"%7D',
			supporter:
				'https://support.theguardian.com/subscribe?INTCMP=footer_support_supporter_cta&acquisitionData=%7B"source":"GUARDIAN_WEB","componentType":"ACQUISITIONS_FOOTER","componentId":"footer_support_supporter_cta"%7D',
		},
		sideMenu: {
			contribute:
				'https://support.theguardian.com/contribute?INTCMP=side_menu_support_contribute&acquisitionData=%7B"source":"GUARDIAN_WEB","componentType":"ACQUISITIONS_HEADER","componentId":"side_menu_support_contribute"%7D',
			subscribe:
				'https://support.theguardian.com/subscribe?INTCMP=side_menu_support_subscribe&acquisitionData=%7B"source":"GUARDIAN_WEB","componentType":"ACQUISITIONS_HEADER","componentId":"side_menu_support_subscribe"%7D',
			support:
				'https://support.theguardian.com?INTCMP=side_menu_support&acquisitionData=%7B"source":"GUARDIAN_WEB","componentType":"ACQUISITIONS_HEADER","componentId":"side_menu_support"%7D',
			supporter:
				'https://support.theguardian.com/subscribe?INTCMP=side_menu_support_supporter_cta&acquisitionData=%7B"source":"GUARDIAN_WEB","componentType":"ACQUISITIONS_HEADER","componentId":"side_menu_support_supporter_cta"%7D',
		},
		ampHeader: {
			contribute:
				'https://support.theguardian.com/contribute?INTCMP=header_support_contribute&acquisitionData=%7B"source":"GUARDIAN_WEB","componentType":"ACQUISITIONS_HEADER","componentId":"header_support_contribute"%7D',
			subscribe:
				'https://support.theguardian.com/subscribe?INTCMP=header_support_subscribe&acquisitionData=%7B"source":"GUARDIAN_WEB","componentType":"ACQUISITIONS_HEADER","componentId":"header_support_subscribe"%7D',
			support:
				'https://support.theguardian.com?INTCMP=amp_header_support&acquisitionData=%7B"source":"GUARDIAN_WEB","componentType":"ACQUISITIONS_HEADER","componentId":"amp_header_support"%7D',
			supporter:
				'https://support.theguardian.com/subscribe?INTCMP=header_support_subscribe&acquisitionData=%7B"source":"GUARDIAN_WEB","componentType":"ACQUISITIONS_HEADER","componentId":"header_support_supporter_cta"%7D',
		},
		ampFooter: {
			contribute:
				'https://support.theguardian.com/contribute?INTCMP=amp_footer_support_contribute&acquisitionData=%7B"source":"GUARDIAN_WEB","componentType":"ACQUISITIONS_FOOTER","componentId":"amp_footer_support_contribute"%7D',
			subscribe:
				'https://support.theguardian.com/subscribe?INTCMP=amp_footer_support_subscribe&acquisitionData=%7B"source":"GUARDIAN_WEB","componentType":"ACQUISITIONS_FOOTER","componentId":"amp_footer_support_subscribe"%7D',
			support:
				'https://support.theguardian.com?INTCMP=footer_support&acquisitionData=%7B"source":"GUARDIAN_WEB","componentType":"ACQUISITIONS_FOOTER","componentId":"footer_support"%7D',
			supporter:
				'https://support.theguardian.com/subscribe?INTCMP=amp_footer_support_supporter_cta&acquisitionData=%7B"source":"GUARDIAN_WEB","componentType":"ACQUISITIONS_FOOTER","componentId":"amp_footer_support_supporter_cta"%7D',
		},
	},
};

export const pageFooter: FooterType = {
	footerLinks: [
		[
			{
				text: 'Contact us',
				url: '/help/contact-us',
				dataLinkName: 'international : footer : contact us',
				extraClasses: '',
			},
			{
				text: 'Complaints & corrections',
				url: '/info/complaints-and-corrections',
				dataLinkName: 'complaints',
				extraClasses: '',
			},
			{
				text: 'SecureDrop',
				url: 'https://www.theguardian.com/securedrop',
				dataLinkName: 'securedrop',
				extraClasses: '',
			},
			{
				text: 'Work for us',
				url: 'https://workforus.theguardian.com',
				dataLinkName: 'international : footer : work for us',
				extraClasses: '',
			},
			{
				text: 'Privacy policy',
				url: '/info/privacy',
				dataLinkName: 'privacy',
				extraClasses: '',
			},
			{
				text: 'Cookie policy',
				url: '/info/cookies',
				dataLinkName: 'cookie',
				extraClasses: '',
			},
			{
				text: 'Terms & conditions',
				url: '/help/terms-of-service',
				dataLinkName: 'terms',
				extraClasses: '',
			},
			{
				text: 'Help',
				url: '/help',
				dataLinkName: 'international : footer : tech feedback',
				extraClasses: 'js-tech-feedback-report',
			},
		],
		[
			{
				text: 'All topics',
				url: '/index/subjects/a',
				dataLinkName: 'international : footer : all topics',
				extraClasses: '',
			},
			{
				text: 'All writers',
				url: '/index/contributors',
				dataLinkName: 'international : footer : all contributors',
				extraClasses: '',
			},
			{
				text: 'Digital newspaper archive',
				url: 'https://theguardian.newspapers.com',
				dataLinkName: 'digital newspaper archive',
				extraClasses: '',
			},
			{
				text: 'Facebook',
				url: 'https://www.facebook.com/theguardian',
				dataLinkName: 'international : footer : facebook',
				extraClasses: '',
			},
			{
				text: 'Twitter',
				url: 'https://twitter.com/guardian',
				dataLinkName: 'international: footer : twitter',
				extraClasses: '',
			},
			{
				text: 'Newsletters',
				url:
					'/email-newsletters?INTCMP=DOTCOM_FOOTER_NEWSLETTER_INTERNATIONAL',
				dataLinkName: 'international : footer : newsletters',
				extraClasses: '',
			},
		],
		[
			{
				text: 'Advertise with us',
				url: 'https://advertising.theguardian.com',
				dataLinkName: 'international : footer : advertise with us',
				extraClasses: '',
			},
			{
				text: 'Search UK jobs',
				url:
					'https://jobs.theguardian.com/?INTCMP=NGW_FOOTER_INT_GU_JOBS',
				dataLinkName: 'international : footer : uk-jobs',
				extraClasses: '',
			},
		],
	],
};
