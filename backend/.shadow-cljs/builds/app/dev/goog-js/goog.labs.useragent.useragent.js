["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/labs/useragent/useragent.js"],"~:js","goog.loadModule(function(exports) {\n  \"use strict\";\n  goog.module(\"goog.labs.userAgent\");\n  goog.module.declareLegacyNamespace();\n  const flags = goog.require(\"goog.flags\");\n  const USE_CLIENT_HINTS_OVERRIDE = goog.define(\"goog.labs.userAgent.USE_CLIENT_HINTS_OVERRIDE\", \"\");\n  const USE_CLIENT_HINTS = goog.define(\"goog.labs.userAgent.USE_CLIENT_HINTS\", false);\n  let forceClientHintsInTests = false;\n  exports.setUseClientHintsForTesting = use => {\n    forceClientHintsInTests = use;\n  };\n  const useClientHintsRuntimeOverride = USE_CLIENT_HINTS_OVERRIDE ? !!goog.getObjectByName(USE_CLIENT_HINTS_OVERRIDE) : false;\n  exports.useClientHints = () => {\n    return flags.USE_USER_AGENT_CLIENT_HINTS || USE_CLIENT_HINTS || useClientHintsRuntimeOverride || forceClientHintsInTests;\n  };\n  return exports;\n});\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Defines for goog.labs.userAgent.\n */\n\ngoog.module('goog.labs.userAgent');\ngoog.module.declareLegacyNamespace();\n\nconst flags = goog.require('goog.flags');\n\n/**\n * @define {string} Optional runtime override for the USE_CLIENT_HINTS flag.\n * If this is set (for example, to 'foo.bar') then any value of USE_CLIENT_HINTS\n * will be overridden by `globalThis.foo.bar` if it is non-null.\n * This flag will be removed in December 2021.\n */\nconst USE_CLIENT_HINTS_OVERRIDE =\n    goog.define('goog.labs.userAgent.USE_CLIENT_HINTS_OVERRIDE', '');\n\n/**\n * @define {boolean} If true, use navigator.userAgentData.  Note: this overrides\n * the `USE_USER_AGENT_CLIENT_HINTS` runtime flag.  Please prefer the flag when\n * possible.\n */\nconst USE_CLIENT_HINTS =\n    goog.define('goog.labs.userAgent.USE_CLIENT_HINTS', false);\n\nlet forceClientHintsInTests = false;\n\n/**\n * Sets whether to use client hints APIs in tests for codepaths that\n *  - were originally implemented as checks against the navigator.userAgent\n *    string.\n *  - have an alternative implementation that uses Client Hints APIs.\n *\n * See the jsdoc on useClientHints for cases where this flag will be\n * ineffective, and the Client Hints APIs would be used regardless.\n * DO NOT call this function in production code - it will cause de-optimization.\n * @param {boolean} use Whether or not to use Client Hints API codepaths in\n *     goog.labs.useragent.* modules.\n */\nexports.setUseClientHintsForTesting = (use) => {\n  forceClientHintsInTests = use;\n};\n\n/** @const {boolean} */\nconst useClientHintsRuntimeOverride = USE_CLIENT_HINTS_OVERRIDE ?\n    !!goog.getObjectByName(USE_CLIENT_HINTS_OVERRIDE) :\n    false;\n\n/**\n * Whether to use UserAgent-Client Hints API surfaces in parts of the\n * labs.userAgent package that previously only relied on the navigator.userAgent\n * string. Newer labs.userAgent API surfaces may ignore the result of this\n * function as they are considered opt-in API surfaces.\n * @const {function():boolean}\n */\nexports.useClientHints = () => {\n  return flags.USE_USER_AGENT_CLIENT_HINTS || USE_CLIENT_HINTS ||\n      useClientHintsRuntimeOverride || forceClientHintsInTests;\n};\n","~:compiled-at",1735595114115,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.labs.useragent.useragent.js\",\n\"lineCount\":18,\n\"mappings\":\"AAAA,IAAA,CAAA,UAAA,CAAA,QAAA,CAAA,OAAA,CAAA;AAAA,cAAA;AAUAA,MAAKC,CAAAA,MAAL,CAAY,qBAAZ,CAAA;AACAD,MAAKC,CAAAA,MAAOC,CAAAA,sBAAZ,EAAA;AAEA,QAAMC,QAAQH,IAAKI,CAAAA,OAAL,CAAa,YAAb,CAAd;AAQA,QAAMC,4BACFL,IAAKM,CAAAA,MAAL,CAAY,+CAAZ,EAA6D,EAA7D,CADJ;AAQA,QAAMC,mBACFP,IAAKM,CAAAA,MAAL,CAAY,sCAAZ,EAAoD,KAApD,CADJ;AAGA,MAAIE,0BAA0B,KAA9B;AAcAC,SAAQC,CAAAA,2BAAR,GAAuCC,GAADC,IAAS;AAC7CJ,2BAAA,GAA0BG,GAA1B;AAD6C,GAA/C;AAKA,QAAME,gCAAgCR,yBAAA,GAClC,CAAC,CAACL,IAAKc,CAAAA,eAAL,CAAqBT,yBAArB,CADgC,GAElC,KAFJ;AAWAI,SAAQM,CAAAA,cAAR,GAAyB,EAAAC,IAAM;AAC7B,WAAOb,KAAMc,CAAAA,2BAAb,IAA4CV,gBAA5C,IACIM,6BADJ,IACqCL,uBADrC;AAD6B,GAA/B;AA9DA,SAAA,OAAA;AAAA,CAAA,CAAA;;\",\n\"sources\":[\"goog/labs/useragent/useragent.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Defines for goog.labs.userAgent.\\n */\\n\\ngoog.module('goog.labs.userAgent');\\ngoog.module.declareLegacyNamespace();\\n\\nconst flags = goog.require('goog.flags');\\n\\n/**\\n * @define {string} Optional runtime override for the USE_CLIENT_HINTS flag.\\n * If this is set (for example, to 'foo.bar') then any value of USE_CLIENT_HINTS\\n * will be overridden by `globalThis.foo.bar` if it is non-null.\\n * This flag will be removed in December 2021.\\n */\\nconst USE_CLIENT_HINTS_OVERRIDE =\\n    goog.define('goog.labs.userAgent.USE_CLIENT_HINTS_OVERRIDE', '');\\n\\n/**\\n * @define {boolean} If true, use navigator.userAgentData.  Note: this overrides\\n * the `USE_USER_AGENT_CLIENT_HINTS` runtime flag.  Please prefer the flag when\\n * possible.\\n */\\nconst USE_CLIENT_HINTS =\\n    goog.define('goog.labs.userAgent.USE_CLIENT_HINTS', false);\\n\\nlet forceClientHintsInTests = false;\\n\\n/**\\n * Sets whether to use client hints APIs in tests for codepaths that\\n *  - were originally implemented as checks against the navigator.userAgent\\n *    string.\\n *  - have an alternative implementation that uses Client Hints APIs.\\n *\\n * See the jsdoc on useClientHints for cases where this flag will be\\n * ineffective, and the Client Hints APIs would be used regardless.\\n * DO NOT call this function in production code - it will cause de-optimization.\\n * @param {boolean} use Whether or not to use Client Hints API codepaths in\\n *     goog.labs.useragent.* modules.\\n */\\nexports.setUseClientHintsForTesting = (use) => {\\n  forceClientHintsInTests = use;\\n};\\n\\n/** @const {boolean} */\\nconst useClientHintsRuntimeOverride = USE_CLIENT_HINTS_OVERRIDE ?\\n    !!goog.getObjectByName(USE_CLIENT_HINTS_OVERRIDE) :\\n    false;\\n\\n/**\\n * Whether to use UserAgent-Client Hints API surfaces in parts of the\\n * labs.userAgent package that previously only relied on the navigator.userAgent\\n * string. Newer labs.userAgent API surfaces may ignore the result of this\\n * function as they are considered opt-in API surfaces.\\n * @const {function():boolean}\\n */\\nexports.useClientHints = () => {\\n  return flags.USE_USER_AGENT_CLIENT_HINTS || USE_CLIENT_HINTS ||\\n      useClientHintsRuntimeOverride || forceClientHintsInTests;\\n};\\n\"],\n\"names\":[\"goog\",\"module\",\"declareLegacyNamespace\",\"flags\",\"require\",\"USE_CLIENT_HINTS_OVERRIDE\",\"define\",\"USE_CLIENT_HINTS\",\"forceClientHintsInTests\",\"exports\",\"setUseClientHintsForTesting\",\"use\",\"exports.setUseClientHintsForTesting\",\"useClientHintsRuntimeOverride\",\"getObjectByName\",\"useClientHints\",\"exports.useClientHints\",\"USE_USER_AGENT_CLIENT_HINTS\"]\n}\n"]