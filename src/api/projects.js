import db from '../../firebase.config';
import { GET_PROJECTS } from '../store/types';

const getProjects = (commit) => {
  db.collection('projects')
    .get()
    .then((querySnapshot) => {
      const documents = querySnapshot.docs.map((doc) => doc.data());
      commit(GET_PROJECTS, documents);
    });
};

export default getProjects;
