const correctTimes = [
  '00:00',
  '01:01',
  '02:23',
  '07:30',
  '04:04',
  '05:53',
  '06:20',
  '07:59',
  '08:00',
  '09:10',
  '10:20',
  '11:30',
  '12:40',
  '13:50',
  '14:51',
  '15:23',
  '16:40',
  '17:00',
  '18:00',
  '19:07',
  '20:22',
  '21:41',
  '22:00',
  '23:00',
  '23:59',
  'Closed'
]

const wrongTimes = [
  '0000',
  '0101',
  '02:3',
  '03:60',
  '04:064',
  '05:73',
  '6:20',
  '07:5',
  '26:00',
  '0:10',
  '1020',
  '11230',
  '12;40',
  '13,50',
  '14<51',
  '15>23',
  '16.40',
  '17,00',
  '18 00',
  '23:60',
  '25:22',
  '21:-11',
  '2:00',
  '23:0',
  '24:59',
]

const correctDays = [
  {
    open: '00:00',
    close: '04:04'
  },
  {
    open: '07:30',
    close: '15:00'
  },
  {
    open: '15:00',
    close: '20:00'
  },
  {
    open: 'Closed',
    close: 'Closed'
  },
  {
    open: '11:30',
    close: '23:59'
  },
  {
    open: '17:00',
    close: '21:00'
  },
  {
    open: '07:30',
    close: '15:30'
  },
  {
    open: '00:00',
    close: '07:30'
  },
  {
    open: '01:01',
    close: '18:00'
  },
  {
    open: '06:00',
    close: '12:00'
  },
]

const wrongDaysIncorrect = [
  {
    open: 'Closed',
    close: 'k'
  },
  {
    open: 'closed',
    close: '23:59'
  },
  {
    open: '07:30',
    close: '1500'
  }
]


const wrongDaysMissing = [
  {
    open: '00:00'
  },
  {
    close: '15:00'
  },
  {
    open: '1500',
    colse: '20:00'
  },
  {

  },
  {
    open: '00:00',
    close: undefined
  },
  {
    open: '01:01',
    clsoing: '18:00'
  },
  {
    opening: '18:00',
    close: 'closed'
  },
]

const correctWeek = [
  {
    ma: {
      open: 'Closed',
      close: 'Closed'
    },
    ti: {
      open: '12:00',
      close: '21:00'
    },
    ke: {
      open: '17:00',
      close: '22:00'
    },
    to: {
      open: '18:00',
      close: '00:00'
    },
    pe: {
      open: '13:00',
      close: '21:00'
    },
    la: {
      open: '12:00',
      close: '18:00'
    },
    su: {
      open: 'Closed',
      close: 'Closed'
    }
  },
  {
    ma: {
      open: 'Closed',
      close: 'Closed'
    },
    ti: {
      open: '15:00',
      close: '20:00'
    },
    ke: {
      open: '15:00',
      close: '20:00'
    },
    to: {
      open: '15:00',
      close: '20:00'
    },
    pe: {
      open: '15:00',
      close: '20:00'
    },
    la: {
      open: '12:00',
      close: '18:00'
    },
    su: {
      open: '12:00',
      close: '16:00'
    }
  },
  {
    ma: {
      open: '13:00',
      close: '21:00'
    },
    ti: {
      open: '13:00',
      close: '21:00'
    },
    ke: {
      open: '13:00',
      close: '21:00'
    },
    to: {
      open: '13:00',
      close: '21:00'
    },
    pe: {
      open: '13:00',
      close: '21:00'
    },
    la: {
      open: '10:00',
      close: '18:00'
    },
    su: {
      open: '10:00',
      close: '18:00'
    }
  }
]

const wrongWeekUndefined = [
  [
    {
      open: 'Closed',
      close: 'Closed'
    }
    ,
    {
      open: 'Closed',
      close: 'Closed'
    },

    {
      open: 'Closed',
      close: 'Closed'
    }
    ,
    {
      open: 'Closed',
      close: 'Closed'
    },

    {
      open: 'Closed',
      close: 'Closed'
    }
    ,
    {
      open: 'Closed',
      close: 'Closed'
    },

    {
      open: 'Closed',
      close: 'Closed'
    }

  ],
  {

  },
  undefined
]

const wrongWeekBadInputs = [
  {
    ma: {
      open: 'Closed',
      close: 'k'
    },
    ti: {
      open: 'closed',
      close: '23:59'
    },
    ke: {
      open: '17:00',
      close: '21:00'
    },
    to: {
      open: 'Closed',
      close: 'k'
    },
    pe: {
      open: 'closed',
      close: '23:59'
    },
    la: {
      open: '17:00',
      close: '21:00'
    },
    su: {
      open: '17:00',
      close: '21:00'
    }
  },
  {
    ma: {
      open: 'Closed',
      close: 'k'
    },
    ti: {
      open: 'closed',
      close: '23:59'
    },
    ke: {
      open: '17:00',
      close: '21:00'
    },
    to: {
      open: 'Closed',
      close: 'k'
    },
    pe: {
      open: 'closed',
      close: '23:59'
    },
    la: {
      open: '17:00',
      close: '21:00'
    },
    su: {
      open: '17:00',
      close: '21:00'
    }
  },

]

const correctURLs = [
  'https://sites.google.com/view/jyvskyln-boulderpaja/etusivu',
  'https://lh6.googleusercontent.com/G-3e5bdYFgboU8spMtWWz4LeIqfGMvNH3B5wom-2UzKlecqQTmnZ-jL4sdMQ_f1qRrSx1T3p=w16383',
  'https://voema.net/',
  'https://voema.net/wp-content/uploads/2018/09/2017_panorama1_www.jpg',
  'https://kiipeilyareena.com/salmisaari-seinakiipeily/',
  'https://kiipeilyareena.com/wp-content/uploads/2019/10/Salmisaari_Salmisaari_laatikko2.jpg',
  'https://kiipeilykeskus.com/',
  'https://kiipeilykeskus.com/wp-content/uploads/sites/5/2019/11/20190708-A7_03886-1920x960.jpg',
  'https://kiipeilyareena.com/kalasatama/',
  'https://i.ytimg.com/vi/hSrd8sZeI2o/maxresdefault.jpg',
  'https://www.tampereenkiipeilykeskus.fi/',
  'https://static.wixstatic.com/media/48b705_2b204ec82a0543b08bb7c301c14315c1~mv2.jpg/v1/fill/w_872,h_540,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/48b705_2b204ec82a0543b08bb7c301c14315c1~mv2.webp',
  'https://www.tampereenkiipeilykeskus.fi/',
  'https://static.wixstatic.com/media/48b705_2b204ec82a0543b08bb7c301c14315c1~mv2.jpg/v1/fill/w_872,h_540,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/48b705_2b204ec82a0543b08bb7c301c14315c1~mv2.webp',
  'https://www.bouldertehdas.fi/boulder/home',
  'https://www.bouldertehdas.fi/boulder/themes/fusion/bouldertehdas/images/banner_new.jpg',
  'https://www.oulunkiipeilykeskus.com/',
  'https://www.oulunkiipeilykeskus.com/wp-content/uploads/2017/03/oulunkiipeilykeskus_toppila.jpg',
  'https://kiipeilyareena.com/tammisto/',
  'https://i.ytimg.com/vi/wuq40V9nssw/maxresdefault.jpg',
  'https://images.squarespace-cdn.com/content/v1/5b7dae4a9772ae2fccb28eb0/1534966028433-IXKFPA2X07LIJM5J4QXG/ke17ZwdGBToddI8pDm48kNbMioNy28ihkN7VTdCZkNN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmi7D7yXkH8nfwsxTs5kW9h6XGjcwafeGWzG5r4OfZ3vTUnQ_6ma9z7H2tyhsCx-gw/grottan_va%CC%88riexplosion+1.jpg?format=2500w'
]

const wrongURLs = [
  'http://',
  'http://.',
  'http://..',
  'http://../',
  'http://?',
  'http://??',
  'http://??/',
  'http://#',
  'http://##',
  'http://##/',
  'http://foo.bar?q=Spaces should be encoded',
  '//',
  '//a',
  '///a',
  '///',
  'http:///a',
  'rdar://1234',
  'h://test',
  'http:// shouldfail.com',
  ':// should fail',
  'http://foo.bar/foo(bar)baz quux',
  'ftps://foo.bar/',
  'http://-error-.invalid/',
  'http://-a.b.co',
  'http://a.b-.co',
  'http://1.1.1.1.1',
  'http://123.123.123',
  'http://3628126748',
  'http://.www.foo.bar/',
  'http://www.foo.bar./',
  'http://.www.foo.bar./'
]
module.exports = {
  correctTimes, wrongTimes, correctDays, wrongDaysIncorrect, wrongDaysMissing, correctWeek,
  wrongWeekUndefined, wrongWeekBadInputs, correctURLs, wrongURLs
}