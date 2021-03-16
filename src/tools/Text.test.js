
import {render, screen} from '@testing-library/react';
import {isCompositeComponentWithType} from 'react-dom/test-utils';
import uuid from 'uuid';

import Text from './Text';
import uiTexts from '../settings/uiTexts.json';

describe('unit tests - Text - header', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('header - eng ->> default', () => {
    const engHeader = Text.header('eng').text;
    expect(engHeader).toMatch(uiTexts.navigation.header.en.toString());
  });
  it('header - en', () => {
    const enHeader = Text.header('en').text;
    expect(enHeader).toMatch(uiTexts.navigation.header.en.toString());
  });
  it('header - default', () => {
    const defaultHeader = Text.header().text;
    expect(defaultHeader).toMatch(uiTexts.navigation.header.en.toString());
  });
  it('header - fin ->> default', () => {
    const finHeader = Text.header('fin').text;
    expect(finHeader).toMatch(uiTexts.navigation.header.en.toString());
  });
  it('header - fi', () => {
    const fiHeader = Text.header('fi').text;
    expect(fiHeader).toMatch(uiTexts.navigation.header.fi.toString());
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

describe('unit tests - Text - home', () => {
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

describe('unit tests - Text - configure', () => {
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

describe('unit tests - Text - stoptimes', () => {
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