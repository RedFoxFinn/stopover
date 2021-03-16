
import {render, screen} from '@testing-library/react';
import {isCompositeComponentWithType} from 'react-dom/test-utils';
import uuid from 'uuid';

import Text from './Text';
import uiTexts from '../settings/uiTexts.json';
import packageInfo from '../../package.json';

describe('unit tests - Text - header', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('unit tests - Text - header', () => {
    const expectation = () => {
      const name = packageInfo.name.toString();
      const appName = name.charAt(0).toUpperCase() + name.slice(1);
      return appName;
    };
    expect(Text.header().text).toMatch(expectation());
  });
});

describe('unit tests - Text - footer', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('footer - eng ->> default', () => {
    const engFooter = Text.footer('eng').text;
    expect(engFooter).toMatch(uiTexts.navigation.footer.en.toString());
  });
  it('footer - en', () => {
    const enFooter = Text.footer('en').text;
    expect(enFooter).toMatch(uiTexts.navigation.footer.en.toString());
  });
  it('footer - default', () => {
    const defaultFooter = Text.footer().text;
    expect(defaultFooter).toMatch(uiTexts.navigation.footer.en.toString());
  });
  it('footer - fin ->> default', () => {
    const finFooter = Text.footer('fin').text;
    expect(finFooter).toMatch(uiTexts.navigation.footer.en.toString());
  });
  it('footer - fi', () => {
    const fiFooter = Text.footer('fi').text;
    expect(fiFooter).toMatch(uiTexts.navigation.footer.fi.toString());
  });
});

describe('unit tests - Text - navigation - home', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('home - eng ->> default', () => {
    const engHome = Text.home('eng').text;
    expect(engHome).toMatch(uiTexts.navigation.home.en.toString());
  });
  it('home - en', () => {
    const enHome = Text.home('en').text;
    expect(enHome).toMatch(uiTexts.navigation.home.en.toString());
  });
  it('home - default', () => {
    const defaultHome = Text.home().text;
    expect(defaultHome).toMatch(uiTexts.navigation.home.en.toString());
  });
  it('home - fin ->> default', () => {
    const finHome = Text.home('fin').text;
    expect(finHome).toMatch(uiTexts.navigation.home.en.toString());
  });
  it('home - fi', () => {
    const fiHome = Text.home('fi').text;
    expect(fiHome).toMatch(uiTexts.navigation.home.fi.toString());
  });
});

describe('unit tests - Text - navigation - configure', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('configure - eng ->> default', () => {
    const engConfigure = Text.configure('eng').text;
    expect(engConfigure).toMatch(uiTexts.navigation.configure.en.toString());
  });
  it('configure - en', () => {
    const enConfigure = Text.configure('en').text;
    expect(enConfigure).toMatch(uiTexts.navigation.configure.en.toString());
  });
  it('configure - default', () => {
    const defaultConfigure = Text.configure().text;
    expect(defaultConfigure).toMatch(uiTexts.navigation.configure.en.toString());
  });
  it('configure - fin ->> default', () => {
    const finConfigure = Text.configure('fin').text;
    expect(finConfigure).toMatch(uiTexts.navigation.configure.en.toString());
  });
  it('configure - fi', () => {
    const fiConfigure = Text.configure('fi').text;
    expect(fiConfigure).toMatch(uiTexts.navigation.configure.fi.toString());
  });
});

describe('unit tests - Text - navigation - stoptimes', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('stoptimes - eng ->> default', () => {
    const engStoptimes = Text.stoptimes('eng').text;
    expect(engStoptimes).toMatch(uiTexts.navigation.stoptimes.en.toString());
  });
  it('stoptimes - en', () => {
    const enStoptimes = Text.stoptimes('en').text;
    expect(enStoptimes).toMatch(uiTexts.navigation.stoptimes.en.toString());
  });
  it('stoptimes - default', () => {
    const defaultStoptimes = Text.stoptimes().text;
    expect(defaultStoptimes).toMatch(uiTexts.navigation.stoptimes.en.toString());
  });
  it('stoptimes - fin ->> default', () => {
    const finStoptimes = Text.stoptimes('fin').text;
    expect(finStoptimes).toMatch(uiTexts.navigation.stoptimes.en.toString());
  });
  it('stoptimes - fi', () => {
    const fiStoptimes = Text.stoptimes('fi').text;
    expect(fiStoptimes).toMatch(uiTexts.navigation.stoptimes.fi.toString());
  });
});

describe('unit tests - Text - home - intro', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('intro - eng ->> default', () => {
    const engIntro = Text.intro('eng').text;
    expect(engIntro).toMatch(uiTexts.home.intro.en.toString());
  });
  it('intro - en', () => {
    const enIntro = Text.intro('en').text;
    expect(enIntro).toMatch(uiTexts.home.intro.en.toString());
  });
  it('intro - default', () => {
    const defaultIntro = Text.intro().text;
    expect(defaultIntro).toMatch(uiTexts.home.intro.en.toString());
  });
  it('intro - fin ->> default', () => {
    const finIntro = Text.intro('fin').text;
    expect(finIntro).toMatch(uiTexts.home.intro.en.toString());
  });
  it('intro - fi', () => {
    const fiIntro = Text.intro('fi').text;
    expect(fiIntro).toMatch(uiTexts.home.intro.fi.toString());
  });
});