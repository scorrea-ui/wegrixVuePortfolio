import db from '../../firebase.config';

const getProjects = async () => {
  const res = await db.collection('projects').get();
  return res.docs.map((doc) => doc.data());
};

export default getProjects;
