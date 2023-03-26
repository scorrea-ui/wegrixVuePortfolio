import { collection } from 'firebase/firestore';
import { useCollection } from 'vuefire';
import { db } from '../../firebase.config';

const getProjects = () => useCollection(collection(db, 'projects'));

export default getProjects;
