import React from 'react';
import { Tabs } from 'flowbite-react'
// import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
// import { MdDashboard } from 'react-icons/md';
import { Carousel } from 'flowbite-react';
import MatchComponent from '../../components/matchcomponent/MatchComponent';
import team_1 from './../../assets/images/team_logo/team_1.png'
import team_2 from './../../assets/images/team_logo/team_2.png'
import team_3 from './../../assets/images/team_logo/team_3.png'
import team_4 from './../../assets/images/team_logo/team_4.png'
import team_6 from './../../assets/images/team_logo/team_6.png'
import team_7 from './../../assets/images/team_logo/team_7.png'

import 'flowbite';
function HomeCarousel() {
	const matchDatas = [ 
		{
			'league': "Premier League",
			'title': "LIVE",
			'left_team' : {
				'team_Id': 4,
				'team_logo': team_4,
				'team_name': "BLAZZER BULLS",
				'team_shortname' : 'BLB',
				'team_color' : "rgba(138,28,31,0.8690826672465861)"
			},
			'right_team': {
				'team_Id': 1,
				'team_logo': team_1,
				'team_name': "POWER PANDAS",
				'team_shortname' : 'PPD',
				'team_color' : "rgba(72,140,23,1)"
			}
		},
		{
			'league': "Premier League",
			'title': "LIVE",
			'left_team' : {
				'team_Id': 2,
				'team_logo': team_2,
				'team_name': "GREAT GORILLAS",
				'team_shortname' : 'GGS',
				'team_color' : "rgba(131, 23, 71, 1)"
			},
			'right_team': {
				'team_Id': 3,
				'team_logo': team_3,
				'team_name': "LION UNITED",
				'team_shortname' : 'LUT',
				'team_color' : "rgba(136, 118, 18, 1)"
			}
		},
		{
			'league': "Premier League",
			'title': "LIVE",
			'left_team' : {
				'team_Id': 6,
				'team_logo': team_6,
				'team_name': "MAXICAN TIGERS",
				'team_shortname' : 'MCT',
				'team_color' : "rgba(137, 95, 18, 1)"
			},
			'right_team': {
				'team_Id': 7,
				'team_logo': team_7,
				'team_name': "COBRA GUADIANS",
				'team_shortname' : 'CGA',
				'team_color' : "rgba(137, 95, 18, 1)"
			}
		}
	]

  const customtheme = {
          "root": {
            "base": "relative h-full w-full",
            "leftControl": "absolute top-0 left-0 flex h-full items-center justify-center px-4 outline-none hidden",
            "rightControl": "absolute top-0 right-0 flex h-full items-center justify-center px-4 outline-none hidden"
          },
          "indicators": {
            "active": {
              "off": "w-[2px] h-[2px] p-[2px] bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800 ",
              "on": "w-[2px] h-[2px] p-[2px] bg-white dark:bg-gray-800"
            },
            "base": "h-1 w-1 rounded-full",
            "wrapper": "absolute -bottom-3 left-1/2 flex -translate-x-1/2 space-x-3"
          },
          "item": {
            "base": "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
            "wrapper": {
              "off": "w-full flex-shrink-0 transform cursor-default snap-center",
              "on": "w-full flex-shrink-0 transform cursor-grab snap-center"
            }
          },
          "control": {
            "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
            "icon": "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
          },
          "scrollContainer": {
            "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
            "snap": "snap-x"
          }
        } 
    return(
        <>
					<div className='bg-black rounded-2xl'>
						<Carousel theme={customtheme} >
              <MatchComponent matchData={matchDatas[0]} />
              <MatchComponent matchData={matchDatas[1]} />
              <MatchComponent matchData={matchDatas[2]} />
            </Carousel>
					</div>
        </>
    )
}

export default HomeCarousel;