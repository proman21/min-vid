const React = require('react');
const shallow = require('enzyme').shallow;
const AppView =  require('../components/app-view');

describe('AppView', function() {
  it('AppView should be selectable by class "app"', function() {
    expect(shallow(<AppView />).is('.app')).toBe(true);
  });
});
