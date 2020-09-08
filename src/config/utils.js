import ServiceFactory from '../context/factories/ServiceFactory';
const service = new ServiceFactory().getSiteService();

export const capFirst = (str) => {
  let words = str.split(' ');
  words = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return words.join(' ');
};

export const filterTeamName = (teamName) => {
  const sitePrefix = new RegExp(`^${service.getSitePrefix()}`);
  return teamName.replace(sitePrefix, '').replace(/_Team$/, '').replace(/_/g, ' ');
};

export const unFilterTeamName = (teamName) => {
  return teamName.replace(/^/, service.getSitePrefix()).replace(/$/, '_Team').replace(/\s/g, '_');
};
