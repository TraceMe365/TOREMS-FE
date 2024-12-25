import React from 'react';
import { CardNowPlaying } from '@/partials/cards';
const NowPlaying = () => {
  const items = [{
    image: '10.jpg',
    logo: '13.jpg',
    title: 'Call of Duty',
    date: 'Playing since 6 Aug, 2018',
    statistics: [{
      number: '79',
      description: 'Win-rate'
    }, {
      number: '88/100',
      description: 'Reflex-rate'
    }, {
      number: '2367',
      description: 'Score'
    }],
    label: 268,
    team: {
      group: [{
        filename: '300-4.png'
      }, {
        filename: '300-1.png'
      }, {
        filename: '300-2.png'
      }],
      more: {
        number: 7,
        variant: 'text-success-inverse ring-success-light bg-success'
      }
    }
  }, {
    image: '11.jpg',
    logo: '14.jpg',
    title: 'Rocket League',
    date: 'Playing since 18 May, 2015',
    statistics: [{
      number: '764',
      description: 'Win-rate'
    }, {
      number: '9/10',
      description: 'Reflex-rate'
    }, {
      number: '436',
      description: 'Score'
    }],
    label: 5,
    team: {
      group: [{
        filename: '300-8.png'
      }, {
        filename: '300-11.png'
      }, {
        filename: '300-20.png'
      }, {
        filename: '300-13.png'
      }]
    }
  }, {
    image: '12.jpg',
    logo: '15.jpg',
    title: 'GTA 5',
    date: 'Playing since 24 Dec, 2018',
    statistics: [{
      number: '87',
      description: 'Win-rate'
    }, {
      number: '61/100',
      description: 'Reflex-rate'
    }, {
      number: '214',
      description: 'Score'
    }],
    label: 12,
    team: {
      group: [{
        filename: '300-18.png'
      }, {
        filename: '300-23.png'
      }, {
        filename: '300-6.png'
      }],
      more: {
        number: 16,
        variant: 'text-success-inverse ring-success-light bg-success'
      }
    }
  }, {
    image: '14.jpg',
    logo: '16.jpg',
    title: 'CyberStorm Cup',
    date: 'Playing since 12 Sep, 2019',
    statistics: [{
      number: '53',
      description: 'Win-rate'
    }, {
      number: '56/70',
      description: 'Reflex-rate'
    }, {
      number: '327',
      description: 'Score'
    }],
    label: 45,
    team: {
      group: [{
        filename: '300-22.png'
      }, {
        filename: '300-17.png'
      }, {
        filename: '300-18.png'
      }],
      more: {
        number: 14,
        variant: 'text-success-inverse ring-success-light bg-success'
      }
    }
  }, {
    image: '15.jpg',
    logo: '17.jpg',
    title: 'Call of Duty',
    date: 'Playing since 23 Nov, 2021',
    statistics: [{
      number: '122',
      description: 'Win-rate'
    }, {
      number: '45/80',
      description: 'Reflex-rate'
    }, {
      number: '44',
      description: 'Score'
    }],
    label: 374,
    team: {
      group: [{
        filename: '300-12.png'
      }, {
        filename: '300-25.png'
      }, {
        filename: '300-26.png'
      }],
      more: {
        number: 32,
        variant: 'text-success-inverse ring-success-light bg-success'
      }
    }
  }];
  const renderItem = (item, index) => {
    return <React.Fragment key={index}>
        <CardNowPlaying image={item.image} logo={item.logo} date={item.date} statistics={item.statistics} team={item.team} label={item.label} title={item.title} />
      </React.Fragment>;
  };
  return <div className="card">
      <div className="card-header">
        <h3 className="card-title">Now Playing</h3>

        <div className="justify-center">
          <a href="#" className="btn btn-link">
            View All
          </a>
        </div>
      </div>
      <div className="card-body p-5 lg:p-7.5 lg:pb-7">
        <div className="flex flex-no-wrap scrollable-x gap-5">
          {items.map((item, index) => {
          return renderItem(item, index);
        })}
        </div>
      </div>
    </div>;
};
export { NowPlaying };