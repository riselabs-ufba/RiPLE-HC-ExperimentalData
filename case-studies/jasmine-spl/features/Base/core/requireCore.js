function getJasmineRequireObj() {
  if (typeof module !== 'undefined' && module.exports) {
    return exports;
  } else {
    window.jasmineRequire = window.jasmineRequire || {};
    return window.jasmineRequire;
  }
}

getJasmineRequireObj().core = function(jRequire) {
  var j$ = {};

  jRequire.base(j$);
  j$.util = jRequire.util();
  j$.Any = jRequire.Any();
  j$.CallTracker = jRequire.CallTracker();
  //#ifdef MockDate
  j$.MockDate = jRequire.MockDate();
  //#endif
  j$.Clock = jRequire.Clock();
  j$.DelayedFunctionScheduler = jRequire.DelayedFunctionScheduler();
  j$.Env = jRequire.Env(j$);
  //#ifdef ExceptionFormatter
  j$.ExceptionFormatter = jRequire.ExceptionFormatter();
  //#endif
  j$.Expectation = jRequire.Expectation();
  j$.buildExpectationResult = jRequire.buildExpectationResult();
  j$.JsApiReporter = jRequire.JsApiReporter();
  //#ifdef Matchers
  j$.matchersUtil = jRequire.matchersUtil(j$);
  //#endif
  j$.ObjectContaining = jRequire.ObjectContaining(j$);
  j$.pp = jRequire.pp(j$);
  j$.QueueRunner = jRequire.QueueRunner(j$);
  j$.ReportDispatcher = jRequire.ReportDispatcher();
  j$.Spec = jRequire.Spec(j$);
  j$.SpyStrategy = jRequire.SpyStrategy();
  //#ifdef
  j$.Suite = jRequire.Suite();
  //#endif
  j$.Timer = jRequire.Timer();
  j$.version = jRequire.version();

  //#ifdef Matchers
  j$.matchers = jRequire.requireMatchers(jRequire, j$);
  //#endif
  
  return j$;
};
