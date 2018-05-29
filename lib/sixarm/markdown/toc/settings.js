
class Settings {
  
  constructor(
    bullet = "*", 
    linePrefix = "", 
    headlineMinimumLevel = 2, 
    headlineMaximumLevel = 6,
    headlineRegexp = /^ *[#=]+ *.+? *[#=]* *\n/,
    contentsRegexp = /(^ *\* \[.*?\]\(#.*?\) *\n)+/m
  ) {
    this.bullet = Object.is(bullet, undefined) ? this.defaultBullet() : bullet;
    this.linePrefix = Object.is(linePrefix, undefined) ? this.linePrefix() : linePrefix;
    this.headlineMinimumLevel = Object.is(headlineMinimumLevel, undefined) ? this.headlineMinimumLevel() : headlineMinimumLevel;;
    this.headlineMaximumLevel = Object.is(headlineMaximumLevel, undefined) ? this.headlineMaximumLevel() : headlineMaximumLevel;;
    this.headlineRegexp = Object.is(headlineRegexp, undefined) ? this.headlineRegexp() : headlineRegexp;;
    this.contentsRegexp = Object.is(contentsRegexp, undefined) ? this.contentsRegexp() : contentsRegexp;;
  }

  static defaultBullet() {
    return "*";
  }

  static defaultLinePrefix() {
    return "";
  }

  static defaultHeadlineMinimumLevel() {
    return 2;
  }

  static defaultHeadlineMaximumLevel() {
    return 6;
  }

  static defaultHeadlineRegexp() {
    return /^ *[#=]+ *.+? *[#=]* *\n/;
  }

  static defaultContentsRegexp() {
    return /(^ *\* \[.*?\]\(#.*?\) *\n)+/m;
  }

}

module.exports = Settings;