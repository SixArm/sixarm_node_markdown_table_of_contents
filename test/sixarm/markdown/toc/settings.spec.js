let expect = require('chai').expect;
let Settings = require.main.require('lib/sixarm/markdown/toc/settings');
  
describe("Settings", () => {
  
  describe("new", () => {

    it("new", () => {
      let settings = new Settings();
    });

  });

  describe("defaultBullet", () => {

    it("return the default bullet text, which is an asterisk", () => {
      let exp = "*";
      let act = Settings.defaultBullet();
      expect(act).to.be.a('string');
      expect(act).to.be.equal(exp);
    });

  });

  describe("defaultLinePrefix", () => {

    it("return the default line prefix text, which is a blank string", () => {
      let exp = "";
      let act = Settings.defaultLinePrefix();
      expect(act).to.be.a('string');
      expect(act).to.be.equal(exp);
    });

  });

  describe("defaultHeadlineMinimumLevel", () => {

    it("return the default headline minimum level number, which is 2", () => {
      let exp = 2;
      let act = Settings.defaultHeadlineMinimumLevel();
      expect(act).to.be.a('number');
      expect(act).to.be.equal(exp);
    });

  });

  describe("defaultHeadlineMaximumLevel", () => {

    it("return the default headline maximum level number, which is 6", () => {
      let exp = 6;
      let act = Settings.defaultHeadlineMaximumLevel();
      expect(act).to.be.a('number');
      expect(act).to.be.equal(exp);
    });

  });

  describe("defaultHeadlineRegexp", () => {

    it("return the default headline regexp", () => {
      let exp = /^ *[#=]+ *.+? *[#=]* *\n/;
      let act = Settings.defaultHeadlineRegexp();
      expect(act).to.be.an.instanceof(RegExp);
      expect(act.toString()).to.be.equal(exp.toString());
    });

  });

  describe("defaultContentsRegexp", () => {

    it("return the default contents regexp", () => {
      let exp = /(^ *\* \[.*?\]\(#.*?\) *\n)+/m;
      let act = Settings.defaultContentsRegexp();
      expect(act).to.be.an.instanceof(RegExp);
      expect(act.toString()).to.be.equal(exp.toString());
    });

  });

});
