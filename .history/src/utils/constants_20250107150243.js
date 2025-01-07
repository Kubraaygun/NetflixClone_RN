import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const API_KEY = '***REMOVED_API_KEY***';
const token =
  '***REMOVED_TMDB_TOKEN***';

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
    title: 'Suspenseful TV Shows',
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
