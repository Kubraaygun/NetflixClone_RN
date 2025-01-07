import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const API_KEY = 'e5ee00a6b571b766d7c72eb8b2729a1f';
const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWVlMDBhNmI1NzFiNzY2ZDdjNzJlYjhiMjcyOWExZiIsIm5iZiI6MTcwNzY1NDE5My4yMzUwMDAxLCJzdWIiOiI2NWM4YmMzMTY4MGJlODAxN2VhNTMzNjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qmJzjm84_P7uwI8JkrkJiEJY3oTvdh6g0B1490oDkz0';

const sections = [
  {
    id: 1,
    title: 'Top Rated',
  },
  {
    id: 2,
    title: 'Popular Movies',
  },
  {
    id: 3,
    title: 'Upcoming Movies',
  },
  {
    id: 4,
    title: 'Selected for You Today',
  },
  {
    id: 5,
    title: 'My List',
  },
  {
    id: 6,
    title: 'Ensemble TV Shows',
  },
];

export {width, height, API_KEY, token, sections};
