
import PackageInfo from './PackageInfo';
import packageInfo from '../../package.json';

describe('unit tests - PackageInfo', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('application author', () => {
    const author = PackageInfo.applicationAuthor();
    expect(author).toMatch(packageInfo.author.toString());
  });
  it('application id', () => {
    const id = PackageInfo.applicationId();
    expect(id).toMatch(packageInfo.build.appId.toString());
  });
  it('application name', () => {
    const expectation = () => {
      const name = packageInfo.name.toString();
      const appName = name.charAt(0).toUpperCase() + name.slice(1);
      return appName;
    };
    const applicationName = PackageInfo.applicationName();
    expect(applicationName).toMatch(expectation());
  });
  it('application version', () => {
    expect(PackageInfo.applicationVersion()).toMatch(packageInfo.version.toString());
  });
});