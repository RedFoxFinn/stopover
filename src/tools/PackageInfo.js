
import packageInfo from '../../package.json';

const applicationName = () => {
  const name = packageInfo.name.toString();
  const appName = name.charAt(0).toUpperCase() + name.slice(1);
  return appName;
};

const applicationVersion = () => packageInfo.version.toString();

const applicationAuthor = () => packageInfo.author.toString();

const applicationId = () => packageInfo.build.appId.toString();

export default {
  applicationAuthor,
  applicationId,
  applicationName,
  applicationVersion
};