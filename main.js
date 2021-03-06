function getSysInfo(SysInfo) { /* istanbul ignore next */
  if (SysInfo) {
    return SysInfo;
  } else {
    var os = require("os");
    switch (os.platform()) {
      case "darwin":
        return "Macintosh; Intel Mac OS X " + require("get-osx-version").get();
      case "windows":
        switch (os.arch()) {
          case "x64":
            return "Windows; Win64; x64";
          case "x86":
            return "Windows; Win32; x86";
          case "arm":
            return "Windows; ARM";
          default:
            return "Windows";
        }
      case "linux":
        switch (os.arch()) {
          case "x64":
            return "Linux; x86_64";
          case "i686":
            return "Linux; i686";
          case "arm":
            return "Linux; ARM";
          default:
            return "Linux";
        }
    }
  }
}
module.exports = {
  chrome: function chrome(version, SysInfo) {
    return "Mozilla/5.0" + " (" + getSysInfo(SysInfo) + ")" + " AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + version + " Safari/537.36";
  },
  chromeAdvanced: function chromeAdvanced(version, WebkitVersion, SysInfo) {
    return "Mozilla/5.0" + " (" + getSysInfo(SysInfo) + ")" + " AppleWebKit/" + WebkitVersion + " (KHTML, like Gecko) Chrome/" + version + " Safari/" + WebkitVersion;
  },
  firefox: function firefox(version, SysInfo) {
    return "Mozilla/5.0" + " (" + getSysInfo(SysInfo) + "; rv:" + version + ")" + " Gecko/20100101 Firefox/" + version;
  },
  firefoxAdvanced: function firefoxAdvanced(version, GeckoVersion, SysInfo) {
    return "Mozilla/5.0" + " (" + getSysInfo(SysInfo) + "; rv:" + version + ")" + " Gecko/" + GeckoVersion + " Firefox/" + version;
  },
  opera: function opera(version, SysInfo) {
    return "Opera/9.80 (" + getSysInfo(SysInfo) + ") Presto/2.12.388 Version/" + version;
  },
  operaAdvanced: function operaAdvanced(version, PrestoVersion, OperaVersion, SysInfo) {
    return "Opera/" + OperaVersion + " (" + getSysInfo(SysInfo) + ") Presto/" + PrestoVersion + " Version/" + version;
  },
  safari: function safari(version, SysInfo) {
    return "Mozilla/5.0 (" + getSysInfo(SysInfo) + ") AppleWebKit/601.4.8 (KHTML, like Gecko) Version/" + version + " Safari/601.4.8";
  },
  safariAdvanced: function safariAdvanced(version, WebkitBuildVersion, SafariBuildVersion, SysInfo) {
    return "Mozilla/5.0 (" + getSysInfo(SysInfo) + ") AppleWebKit/" + WebkitBuildVersion + " (KHTML, like Gecko) Version/" + version + " Safari/" + SafariBuildVersion;
  }
};
