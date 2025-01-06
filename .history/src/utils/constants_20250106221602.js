import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const API_KEY = '***REMOVED_API_KEY***';
const token =
  '***REMOVED_TMDB_TOKEN***';

const sections = [
  {
    id: '1',
    title: 'Releases in the Past Year',
  },
  {
    id: '2',
    title: 'Continue Watching for Drashti',
  },
  {
    id: '3',
    title: 'Suspenseful TV Shows',
  },
  {
    id: '5',
    title: 'Selected for You Today',
  },
  {
    id: '5',
    title: 'My List',
  },
];

export {width, height, API_KEY, token};
