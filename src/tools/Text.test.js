
import {render, screen} from '@testing-library/react';
import {isCompositeComponentWithType} from 'react-dom/test-utils';
import uuid from 'uuid';

import Text from './Text';

describe('unit tests - Text - header', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('header - eng ->> default', () => {
    const engHeader = Text.header('eng').text;
    expect(engHeader).toMatch('Header');
  });
  it('header - en', () => {
    const enHeader = Text.header('en').text;
    expect(enHeader).toMatch('Header');
  });
  it('header - default', () => {
    const defaultHeader = Text.header().text;
    expect(defaultHeader).toMatch('Header');
  });
  it('header - fin ->> default', () => {
    const finHeader = Text.header('fin').text;
    expect(finHeader).toMatch('Header');
  });
  it('header - fi', () => {
    const fiHeader = Text.header('fi').text;
    expect(fiHeader).toMatch('Otsikko');
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
    expect(engFooter).toMatch('Footer');
  });
  it('footer - en', () => {
    const enFooter = Text.footer('en').text;
    expect(enFooter).toMatch('Footer');
  });
  it('footer - default', () => {
    const defaultFooter = Text.footer().text;
    expect(defaultFooter).toMatch('Footer');
  });
  it('footer - fin ->> default', () => {
    const finFooter = Text.footer('fin').text;
    expect(finFooter).toMatch('Footer');
  });
  it('footer - fi', () => {
    const fiFooter = Text.footer('fi').text;
    expect(fiFooter).toMatch('Alaotsikko');
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
    expect(engHome).toMatch('Home');
  });
  it('home - en', () => {
    const enHome = Text.home('en').text;
    expect(enHome).toMatch('Home');
  });
  it('home - default', () => {
    const defaultHome = Text.home().text;
    expect(defaultHome).toMatch('Home');
  });
  it('home - fin ->> default', () => {
    const finHome = Text.home('fin').text;
    expect(finHome).toMatch('Home');
  });
  it('home - fi', () => {
    const fiHome = Text.home('fi').text;
    expect(fiHome).toMatch('Etusivu');
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
    expect(engConfigure).toMatch('Configure');
  });
  it('configure - en', () => {
    const enConfigure = Text.configure('en').text;
    expect(enConfigure).toMatch('Configure');
  });
  it('configure - default', () => {
    const defaultConfigure = Text.configure().text;
    expect(defaultConfigure).toMatch('Configure');
  });
  it('configure - fin ->> default', () => {
    const finConfigure = Text.configure('fin').text;
    expect(finConfigure).toMatch('Configure');
  });
  it('configure - fi', () => {
    const fiConfigure = Text.configure('fi').text;
    expect(fiConfigure).toMatch('Asetukset');
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
    expect(engStoptimes).toMatch('Stop times');
  });
  it('stoptimes - en', () => {
    const enStoptimes = Text.stoptimes('en').text;
    expect(enStoptimes).toMatch('Stop times');
  });
  it('stoptimes - default', () => {
    const defaultStoptimes = Text.stoptimes().text;
    expect(defaultStoptimes).toMatch('Stop times');
  });
  it('stoptimes - fin ->> default', () => {
    const finStoptimes = Text.stoptimes('fin').text;
    expect(finStoptimes).toMatch('Stop times');
  });
  it('stoptimes - fi', () => {
    const fiStoptimes = Text.stoptimes('fi').text;
    expect(fiStoptimes).toMatch('Aikataulut');
  });
});