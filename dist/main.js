/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 987:
/***/ (function() {

const header = "header";
console.log(header);

/***/ }),

/***/ 34:
/***/ (function() {

const home = "home.js";
console.log(home);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXTERNAL MODULE: ./src/js/pages/home.js
var home = __webpack_require__(34);
// EXTERNAL MODULE: ./src/js/components/header.js
var header = __webpack_require__(987);
;// CONCATENATED MODULE: ./src/js/utils/constants.js
const example = "example";
;// CONCATENATED MODULE: ./node_modules/gsap/gsap-core.js
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var _config = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
},
    _defaults = {
  duration: .5,
  overwrite: false,
  delay: 0
},
    _suppressOverwrites,
    _reverting,
    _context,
    _bigNum = 1e8,
    _tinyNum = 1 / _bigNum,
    _2PI = Math.PI * 2,
    _HALF_PI = _2PI / 4,
    _gsID = 0,
    _sqrt = Math.sqrt,
    _cos = Math.cos,
    _sin = Math.sin,
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isUndefined = function _isUndefined(value) {
  return typeof value === "undefined";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _isNotFalse = function _isNotFalse(value) {
  return value !== false;
},
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _isFuncOrString = function _isFuncOrString(value) {
  return _isFunction(value) || _isString(value);
},
    _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
    // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
_isArray = Array.isArray,
    _strictNumExp = /(?:-?\.?\d|\.)+/gi,
    //only numbers (including negatives and decimals) but NOT relative values.
_numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
_relExp = /[+-]=-?[.\d]+/,
    _delimitedValueExp = /[^,'"\[\]\s]+/gi,
    // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
_unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    _globalTimeline,
    _win,
    _coreInitted,
    _doc,
    _globals = {},
    _installScope = {},
    _coreReady,
    _install = function _install(scope) {
  return (_installScope = _merge(scope, _globals)) && gsap;
},
    _missingPlugin = function _missingPlugin(property, value) {
  return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
},
    _warn = function _warn(message, suppress) {
  return !suppress && console.warn(message);
},
    _addGlobal = function _addGlobal(name, obj) {
  return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
},
    _emptyFunc = function _emptyFunc() {
  return 0;
},
    _startAtRevertConfig = {
  suppressEvents: true,
  isStart: true,
  kill: false
},
    _revertConfigNoKill = {
  suppressEvents: true,
  kill: false
},
    _revertConfig = {
  suppressEvents: true
},
    _reservedProps = {},
    _lazyTweens = [],
    _lazyLookup = {},
    _lastRenderedFrame,
    _plugins = {},
    _effects = {},
    _nextGCFrame = 30,
    _harnessPlugins = [],
    _callbackNames = "",
    _harness = function _harness(targets) {
  var target = targets[0],
      harnessPlugin,
      i;
  _isObject(target) || _isFunction(target) || (targets = [targets]);

  if (!(harnessPlugin = (target._gsap || {}).harness)) {
    // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
    i = _harnessPlugins.length;

    while (i-- && !_harnessPlugins[i].targetTest(target)) {}

    harnessPlugin = _harnessPlugins[i];
  }

  i = targets.length;

  while (i--) {
    targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
  }

  return targets;
},
    _getCache = function _getCache(target) {
  return target._gsap || _harness(toArray(target))[0]._gsap;
},
    _getProperty = function _getProperty(target, property, v) {
  return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
},
    _forEachName = function _forEachName(names, func) {
  return (names = names.split(",")).forEach(func) || names;
},
    //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
_round = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    _roundPrecise = function _roundPrecise(value) {
  return Math.round(value * 10000000) / 10000000 || 0;
},
    // increased precision mostly for timing values.
_parseRelative = function _parseRelative(start, value) {
  var operator = value.charAt(0),
      end = parseFloat(value.substr(2));
  start = parseFloat(start);
  return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
},
    _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
  //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
  var l = toFind.length,
      i = 0;

  for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}

  return i < l;
},
    _lazyRender = function _lazyRender() {
  var l = _lazyTweens.length,
      a = _lazyTweens.slice(0),
      i,
      tween;

  _lazyLookup = {};
  _lazyTweens.length = 0;

  for (i = 0; i < l; i++) {
    tween = a[i];
    tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
  }
},
    _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
  _lazyTweens.length && !_reverting && _lazyRender();
  animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
  _lazyTweens.length && !_reverting && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
},
    _numericIfPossible = function _numericIfPossible(value) {
  var n = parseFloat(value);
  return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
},
    _passThrough = function _passThrough(p) {
  return p;
},
    _setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
  return function (obj, defaults) {
    for (var p in defaults) {
      p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
    }
  };
},
    _merge = function _merge(base, toMerge) {
  for (var p in toMerge) {
    base[p] = toMerge[p];
  }

  return base;
},
    _mergeDeep = function _mergeDeep(base, toMerge) {
  for (var p in toMerge) {
    p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
  }

  return base;
},
    _copyExcluding = function _copyExcluding(obj, excluding) {
  var copy = {},
      p;

  for (p in obj) {
    p in excluding || (copy[p] = obj[p]);
  }

  return copy;
},
    _inheritDefaults = function _inheritDefaults(vars) {
  var parent = vars.parent || _globalTimeline,
      func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;

  if (_isNotFalse(vars.inherit)) {
    while (parent) {
      func(vars, parent.vars.defaults);
      parent = parent.parent || parent._dp;
    }
  }

  return vars;
},
    _arraysMatch = function _arraysMatch(a1, a2) {
  var i = a1.length,
      match = i === a2.length;

  while (match && i-- && a1[i] === a2[i]) {}

  return i < 0;
},
    _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = parent[lastProp],
      t;

  if (sortBy) {
    t = child[sortBy];

    while (prev && prev[sortBy] > t) {
      prev = prev._prev;
    }
  }

  if (prev) {
    child._next = prev._next;
    prev._next = child;
  } else {
    child._next = parent[firstProp];
    parent[firstProp] = child;
  }

  if (child._next) {
    child._next._prev = child;
  } else {
    parent[lastProp] = child;
  }

  child._prev = prev;
  child.parent = child._dp = parent;
  return child;
},
    _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = child._prev,
      next = child._next;

  if (prev) {
    prev._next = next;
  } else if (parent[firstProp] === child) {
    parent[firstProp] = next;
  }

  if (next) {
    next._prev = prev;
  } else if (parent[lastProp] === child) {
    parent[lastProp] = prev;
  }

  child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
},
    _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
  child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
  child._act = 0;
},
    _uncache = function _uncache(animation, child) {
  if (animation && (!child || child._end > animation._dur || child._start < 0)) {
    // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
    var a = animation;

    while (a) {
      a._dirty = 1;
      a = a.parent;
    }
  }

  return animation;
},
    _recacheAncestors = function _recacheAncestors(animation) {
  var parent = animation.parent;

  while (parent && parent.parent) {
    //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
    parent._dirty = 1;
    parent.totalDuration();
    parent = parent.parent;
  }

  return animation;
},
    _rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
  return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
},
    _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
  return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
},
    _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
  return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
},
    // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
_animationCycle = function _animationCycle(tTime, cycleDuration) {
  var whole = Math.floor(tTime /= cycleDuration);
  return tTime && whole === tTime ? whole - 1 : whole;
},
    _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
  return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
},
    _setEnd = function _setEnd(animation) {
  return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
},
    _alignPlayhead = function _alignPlayhead(animation, totalTime) {
  // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
  var parent = animation._dp;

  if (parent && parent.smoothChildTiming && animation._ts) {
    animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

    _setEnd(animation);

    parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
  }

  return animation;
},

/*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/
_postAddChecks = function _postAddChecks(timeline, child) {
  var t;

  if (child._time || !child._dur && child._initted || child._start < timeline._time && (child._dur || !child.add)) {
    // in case, for example, the _start is moved on a tween that has already rendered, or if it's being inserted into a timeline BEFORE where the playhead is currently. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning. Special case: if it's a timeline (has .add() method) and no duration, we can skip rendering because the user may be populating it AFTER adding it to a parent timeline (unconventional, but possible, and we wouldn't want it to get removed if the parent's autoRemoveChildren is true).
    t = _parentToChildTotalTime(timeline.rawTime(), child);

    if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
      child.render(t, true);
    }
  } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.


  if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
    //in case any of the ancestors had completed but should now be enabled...
    if (timeline._dur < timeline.duration()) {
      t = timeline;

      while (t._dp) {
        t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.

        t = t._dp;
      }
    }

    timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
  }
},
    _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
  child.parent && _removeFromParent(child);
  child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
  child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

  _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

  _isFromOrFromStart(child) || (timeline._recent = child);
  skipChecks || _postAddChecks(timeline, child);
  timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime); // if the timeline is reversed and the new child makes it longer, we may need to adjust the parent's _start (push it back)

  return timeline;
},
    _scrollTrigger = function _scrollTrigger(animation, trigger) {
  return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
},
    _attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
  _initTween(tween, time, tTime);

  if (!tween._initted) {
    return 1;
  }

  if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
    _lazyTweens.push(tween);

    tween._lazy = [tTime, suppressEvents];
    return 1;
  }
},
    _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
  var parent = _ref.parent;
  return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
},
    // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
_isFromOrFromStart = function _isFromOrFromStart(_ref2) {
  var data = _ref2.data;
  return data === "isFromStart" || data === "isStart";
},
    _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
  var prevRatio = tween.ratio,
      ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1,
      // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
  repeatDelay = tween._rDelay,
      tTime = 0,
      pt,
      iteration,
      prevIteration;

  if (repeatDelay && tween._repeat) {
    // in case there's a zero-duration tween that has a repeat with a repeatDelay
    tTime = _clamp(0, tween._tDur, totalTime);
    iteration = _animationCycle(tTime, repeatDelay);
    tween._yoyo && iteration & 1 && (ratio = 1 - ratio);

    if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
      // if iteration changed
      prevRatio = 1 - ratio;
      tween.vars.repeatRefresh && tween._initted && tween.invalidate();
    }
  }

  if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
    if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
      // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
      return;
    }

    prevIteration = tween._zTime;
    tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

    suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.

    tween.ratio = ratio;
    tween._from && (ratio = 1 - ratio);
    tween._time = 0;
    tween._tTime = tTime;
    pt = tween._pt;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }

    totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
    tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
    tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

    if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
      ratio && _removeFromParent(tween, 1);

      if (!suppressEvents && !_reverting) {
        _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

        tween._prom && tween._prom();
      }
    }
  } else if (!tween._zTime) {
    tween._zTime = totalTime;
  }
},
    _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
  var child;

  if (time > prevTime) {
    child = animation._first;

    while (child && child._start <= time) {
      if (child.data === "isPause" && child._start > prevTime) {
        return child;
      }

      child = child._next;
    }
  } else {
    child = animation._last;

    while (child && child._start >= time) {
      if (child.data === "isPause" && child._start < prevTime) {
        return child;
      }

      child = child._prev;
    }
  }
},
    _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
  var repeat = animation._repeat,
      dur = _roundPrecise(duration) || 0,
      totalProgress = animation._tTime / animation._tDur;
  totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
  animation._dur = dur;
  animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
  totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
  animation.parent && _setEnd(animation);
  skipUncache || _uncache(animation.parent, animation);
  return animation;
},
    _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
  return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
},
    _zeroPosition = {
  _start: 0,
  endTime: _emptyFunc,
  totalDuration: _emptyFunc
},
    _parsePosition = function _parsePosition(animation, position, percentAnimation) {
  var labels = animation.labels,
      recent = animation._recent || _zeroPosition,
      clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
      //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
  i,
      offset,
      isPercent;

  if (_isString(position) && (isNaN(position) || position in labels)) {
    //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
    offset = position.charAt(0);
    isPercent = position.substr(-1) === "%";
    i = position.indexOf("=");

    if (offset === "<" || offset === ">") {
      i >= 0 && (position = position.replace(/=/, ""));
      return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
    }

    if (i < 0) {
      position in labels || (labels[position] = clippedDuration);
      return labels[position];
    }

    offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));

    if (isPercent && percentAnimation) {
      offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
    }

    return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
  }

  return position == null ? clippedDuration : +position;
},
    _createTweenType = function _createTweenType(type, params, timeline) {
  var isLegacy = _isNumber(params[1]),
      varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
      vars = params[varsIndex],
      irVars,
      parent;

  isLegacy && (vars.duration = params[1]);
  vars.parent = timeline;

  if (type) {
    irVars = vars;
    parent = timeline;

    while (parent && !("immediateRender" in irVars)) {
      // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
      irVars = parent.vars.defaults || {};
      parent = _isNotFalse(parent.vars.inherit) && parent.parent;
    }

    vars.immediateRender = _isNotFalse(irVars.immediateRender);
    type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
  }

  return new Tween(params[0], vars, params[varsIndex + 1]);
},
    _conditionalReturn = function _conditionalReturn(value, func) {
  return value || value === 0 ? func(value) : func;
},
    _clamp = function _clamp(min, max, value) {
  return value < min ? min : value > max ? max : value;
},
    getUnit = function getUnit(value, v) {
  return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
},
    // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
clamp = function clamp(min, max, value) {
  return _conditionalReturn(value, function (v) {
    return _clamp(min, max, v);
  });
},
    _slice = [].slice,
    _isArrayLike = function _isArrayLike(value, nonEmpty) {
  return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
},
    _flatten = function _flatten(ar, leaveStrings, accumulator) {
  if (accumulator === void 0) {
    accumulator = [];
  }

  return ar.forEach(function (value) {
    var _accumulator;

    return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
  }) || accumulator;
},
    //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
toArray = function toArray(value, scope, leaveStrings) {
  return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
},
    selector = function selector(value) {
  value = toArray(value)[0] || _warn("Invalid scope") || {};
  return function (v) {
    var el = value.current || value.nativeElement || value;
    return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
  };
},
    shuffle = function shuffle(a) {
  return a.sort(function () {
    return .5 - Math.random();
  });
},
    // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
distribute = function distribute(v) {
  if (_isFunction(v)) {
    return v;
  }

  var vars = _isObject(v) ? v : {
    each: v
  },
      //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
  ease = _parseEase(vars.ease),
      from = vars.from || 0,
      base = parseFloat(vars.base) || 0,
      cache = {},
      isDecimal = from > 0 && from < 1,
      ratios = isNaN(from) || isDecimal,
      axis = vars.axis,
      ratioX = from,
      ratioY = from;

  if (_isString(from)) {
    ratioX = ratioY = {
      center: .5,
      edges: .5,
      end: 1
    }[from] || 0;
  } else if (!isDecimal && ratios) {
    ratioX = from[0];
    ratioY = from[1];
  }

  return function (i, target, a) {
    var l = (a || vars).length,
        distances = cache[l],
        originX,
        originY,
        x,
        y,
        d,
        j,
        max,
        min,
        wrapAt;

    if (!distances) {
      wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];

      if (!wrapAt) {
        max = -_bigNum;

        while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}

        wrapAt--;
      }

      distances = cache[l] = [];
      originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
      originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
      max = 0;
      min = _bigNum;

      for (j = 0; j < l; j++) {
        x = j % wrapAt - originX;
        y = originY - (j / wrapAt | 0);
        distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
        d > max && (max = d);
        d < min && (min = d);
      }

      from === "random" && shuffle(distances);
      distances.max = max - min;
      distances.min = min;
      distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
      distances.b = l < 0 ? base - l : base;
      distances.u = getUnit(vars.amount || vars.each) || 0; //unit

      ease = ease && l < 0 ? _invertEase(ease) : ease;
    }

    l = (distances[i] - distances.min) / distances.max || 0;
    return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
  };
},
    _roundModifier = function _roundModifier(v) {
  //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
  var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())

  return function (raw) {
    var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);

    return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
  };
},
    snap = function snap(snapTo, value) {
  var isArray = _isArray(snapTo),
      radius,
      is2D;

  if (!isArray && _isObject(snapTo)) {
    radius = isArray = snapTo.radius || _bigNum;

    if (snapTo.values) {
      snapTo = toArray(snapTo.values);

      if (is2D = !_isNumber(snapTo[0])) {
        radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
      }
    } else {
      snapTo = _roundModifier(snapTo.increment);
    }
  }

  return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
    is2D = snapTo(raw);
    return Math.abs(is2D - raw) <= radius ? is2D : raw;
  } : function (raw) {
    var x = parseFloat(is2D ? raw.x : raw),
        y = parseFloat(is2D ? raw.y : 0),
        min = _bigNum,
        closest = 0,
        i = snapTo.length,
        dx,
        dy;

    while (i--) {
      if (is2D) {
        dx = snapTo[i].x - x;
        dy = snapTo[i].y - y;
        dx = dx * dx + dy * dy;
      } else {
        dx = Math.abs(snapTo[i] - x);
      }

      if (dx < min) {
        min = dx;
        closest = i;
      }
    }

    closest = !radius || min <= radius ? snapTo[closest] : raw;
    return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
  });
},
    random = function random(min, max, roundingIncrement, returnFunction) {
  return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
    return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
  });
},
    pipe = function pipe() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function (value) {
    return functions.reduce(function (v, f) {
      return f(v);
    }, value);
  };
},
    unitize = function unitize(func, unit) {
  return function (value) {
    return func(parseFloat(value)) + (unit || getUnit(value));
  };
},
    normalize = function normalize(min, max, value) {
  return mapRange(min, max, 0, 1, value);
},
    _wrapArray = function _wrapArray(a, wrapper, value) {
  return _conditionalReturn(value, function (index) {
    return a[~~wrapper(index)];
  });
},
    wrap = function wrap(min, max, value) {
  // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
  var range = max - min;
  return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
    return (range + (value - min) % range) % range + min;
  });
},
    wrapYoyo = function wrapYoyo(min, max, value) {
  var range = max - min,
      total = range * 2;
  return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
    value = (total + (value - min) % total) % total || 0;
    return min + (value > range ? total - value : value);
  });
},
    _replaceRandom = function _replaceRandom(value) {
  //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
  var prev = 0,
      s = "",
      i,
      nums,
      end,
      isArray;

  while (~(i = value.indexOf("random(", prev))) {
    end = value.indexOf(")", i);
    isArray = value.charAt(i + 7) === "[";
    nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
    s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
    prev = end + 1;
  }

  return s + value.substr(prev, value.length - prev);
},
    mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
  var inRange = inMax - inMin,
      outRange = outMax - outMin;
  return _conditionalReturn(value, function (value) {
    return outMin + ((value - inMin) / inRange * outRange || 0);
  });
},
    interpolate = function interpolate(start, end, progress, mutate) {
  var func = isNaN(start + end) ? 0 : function (p) {
    return (1 - p) * start + p * end;
  };

  if (!func) {
    var isString = _isString(start),
        master = {},
        p,
        i,
        interpolators,
        l,
        il;

    progress === true && (mutate = 1) && (progress = null);

    if (isString) {
      start = {
        p: start
      };
      end = {
        p: end
      };
    } else if (_isArray(start) && !_isArray(end)) {
      interpolators = [];
      l = start.length;
      il = l - 2;

      for (i = 1; i < l; i++) {
        interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
      }

      l--;

      func = function func(p) {
        p *= l;
        var i = Math.min(il, ~~p);
        return interpolators[i](p - i);
      };

      progress = end;
    } else if (!mutate) {
      start = _merge(_isArray(start) ? [] : {}, start);
    }

    if (!interpolators) {
      for (p in end) {
        _addPropTween.call(master, start, p, "get", end[p]);
      }

      func = function func(p) {
        return _renderPropTweens(p, master) || (isString ? start.p : start);
      };
    }
  }

  return _conditionalReturn(progress, func);
},
    _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
  //used for nextLabel() and previousLabel()
  var labels = timeline.labels,
      min = _bigNum,
      p,
      distance,
      label;

  for (p in labels) {
    distance = labels[p] - fromTime;

    if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
      label = p;
      min = distance;
    }
  }

  return label;
},
    _callback = function _callback(animation, type, executeLazyFirst) {
  var v = animation.vars,
      callback = v[type],
      prevContext = _context,
      context = animation._ctx,
      params,
      scope,
      result;

  if (!callback) {
    return;
  }

  params = v[type + "Params"];
  scope = v.callbackScope || animation;
  executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.

  context && (_context = context);
  result = params ? callback.apply(scope, params) : callback.call(scope);
  _context = prevContext;
  return result;
},
    _interrupt = function _interrupt(animation) {
  _removeFromParent(animation);

  animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
  animation.progress() < 1 && _callback(animation, "onInterrupt");
  return animation;
},
    _quickTween,
    _registerPluginQueue = [],
    _createPlugin = function _createPlugin(config) {
  if (_windowExists() && config) {
    // edge case: some build tools may pass in a null/undefined value
    config = !config.name && config["default"] || config; //UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.

    var name = config.name,
        isFunc = _isFunction(config),
        Plugin = name && !isFunc && config.init ? function () {
      this._props = [];
    } : config,
        //in case someone passes in an object that's not a plugin, like CustomEase
    instanceDefaults = {
      init: _emptyFunc,
      render: _renderPropTweens,
      add: _addPropTween,
      kill: _killPropTweensOf,
      modifier: _addPluginModifier,
      rawVars: 0
    },
        statics = {
      targetTest: 0,
      get: 0,
      getSetter: _getSetter,
      aliases: {},
      register: 0
    };

    _wake();

    if (config !== Plugin) {
      if (_plugins[name]) {
        return;
      }

      _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods


      _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods


      _plugins[Plugin.prop = name] = Plugin;

      if (config.targetTest) {
        _harnessPlugins.push(Plugin);

        _reservedProps[name] = 1;
      }

      name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
    }

    _addGlobal(name, Plugin);

    config.register && config.register(gsap, Plugin, PropTween);
  } else {
    config && _registerPluginQueue.push(config);
  }
},

/*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */
_255 = 255,
    _colorLookup = {
  aqua: [0, _255, _255],
  lime: [0, _255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, _255],
  navy: [0, 0, 128],
  white: [_255, _255, _255],
  olive: [128, 128, 0],
  yellow: [_255, _255, 0],
  orange: [_255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [_255, 0, 0],
  pink: [_255, 192, 203],
  cyan: [0, _255, _255],
  transparent: [_255, _255, _255, 0]
},
    // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
// let ctx = _doc.createElement("canvas").getContext("2d");
// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
_hue = function _hue(h, m1, m2) {
  h += h < 0 ? 1 : h > 1 ? -1 : 0;
  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
},
    splitColor = function splitColor(v, toHSL, forceAlpha) {
  var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
      r,
      g,
      b,
      h,
      s,
      l,
      max,
      min,
      d,
      wasHSL;

  if (!a) {
    if (v.substr(-1) === ",") {
      //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
      v = v.substr(0, v.length - 1);
    }

    if (_colorLookup[v]) {
      a = _colorLookup[v];
    } else if (v.charAt(0) === "#") {
      if (v.length < 6) {
        //for shorthand like #9F0 or #9F0F (could have alpha)
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
      }

      if (v.length === 9) {
        // hex with alpha, like #fd5e53ff
        a = parseInt(v.substr(1, 6), 16);
        return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
      }

      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & _255, v & _255];
    } else if (v.substr(0, 3) === "hsl") {
      a = wasHSL = v.match(_strictNumExp);

      if (!toHSL) {
        h = +a[0] % 360 / 360;
        s = +a[1] / 100;
        l = +a[2] / 100;
        g = l <= .5 ? l * (s + 1) : l + s - l * s;
        r = l * 2 - g;
        a.length > 3 && (a[3] *= 1); //cast as number

        a[0] = _hue(h + 1 / 3, r, g);
        a[1] = _hue(h, r, g);
        a[2] = _hue(h - 1 / 3, r, g);
      } else if (~v.indexOf("=")) {
        //if relative values are found, just return the raw strings with the relative prefixes in place.
        a = v.match(_numExp);
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      }
    } else {
      a = v.match(_strictNumExp) || _colorLookup.transparent;
    }

    a = a.map(Number);
  }

  if (toHSL && !wasHSL) {
    r = a[0] / _255;
    g = a[1] / _255;
    b = a[2] / _255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }

    a[0] = ~~(h + .5);
    a[1] = ~~(s * 100 + .5);
    a[2] = ~~(l * 100 + .5);
  }

  forceAlpha && a.length < 4 && (a[3] = 1);
  return a;
},
    _colorOrderData = function _colorOrderData(v) {
  // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
  var values = [],
      c = [],
      i = -1;
  v.split(_colorExp).forEach(function (v) {
    var a = v.match(_numWithUnitExp) || [];
    values.push.apply(values, a);
    c.push(i += a.length + 1);
  });
  values.c = c;
  return values;
},
    _formatColors = function _formatColors(s, toHSL, orderMatchData) {
  var result = "",
      colors = (s + result).match(_colorExp),
      type = toHSL ? "hsla(" : "rgba(",
      i = 0,
      c,
      shell,
      d,
      l;

  if (!colors) {
    return s;
  }

  colors = colors.map(function (color) {
    return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
  });

  if (orderMatchData) {
    d = _colorOrderData(s);
    c = orderMatchData.c;

    if (c.join(result) !== d.c.join(result)) {
      shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
      l = shell.length - 1;

      for (; i < l; i++) {
        result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
      }
    }
  }

  if (!shell) {
    shell = s.split(_colorExp);
    l = shell.length - 1;

    for (; i < l; i++) {
      result += shell[i] + colors[i];
    }
  }

  return result + shell[l];
},
    _colorExp = function () {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
  p;

  for (p in _colorLookup) {
    s += "|" + p + "\\b";
  }

  return new RegExp(s + ")", "gi");
}(),
    _hslExp = /hsl[a]?\(/,
    _colorStringFilter = function _colorStringFilter(a) {
  var combined = a.join(" "),
      toHSL;
  _colorExp.lastIndex = 0;

  if (_colorExp.test(combined)) {
    toHSL = _hslExp.test(combined);
    a[1] = _formatColors(a[1], toHSL);
    a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.

    return true;
  }
},

/*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */
_tickerActive,
    _ticker = function () {
  var _getTime = Date.now,
      _lagThreshold = 500,
      _adjustedLag = 33,
      _startTime = _getTime(),
      _lastUpdate = _startTime,
      _gap = 1000 / 240,
      _nextTime = _gap,
      _listeners = [],
      _id,
      _req,
      _raf,
      _self,
      _delta,
      _i,
      _tick = function _tick(v) {
    var elapsed = _getTime() - _lastUpdate,
        manual = v === true,
        overlap,
        dispatch,
        time,
        frame;

    elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
    _lastUpdate += elapsed;
    time = _lastUpdate - _startTime;
    overlap = time - _nextTime;

    if (overlap > 0 || manual) {
      frame = ++_self.frame;
      _delta = time - _self.time * 1000;
      _self.time = time = time / 1000;
      _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
      dispatch = 1;
    }

    manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.

    if (dispatch) {
      for (_i = 0; _i < _listeners.length; _i++) {
        // use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
        _listeners[_i](time, _delta, frame, v);
      }
    }
  };

  _self = {
    time: 0,
    frame: 0,
    tick: function tick() {
      _tick(true);
    },
    deltaRatio: function deltaRatio(fps) {
      return _delta / (1000 / (fps || 60));
    },
    wake: function wake() {
      if (_coreReady) {
        if (!_coreInitted && _windowExists()) {
          _win = _coreInitted = window;
          _doc = _win.document || {};
          _globals.gsap = gsap;
          (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);

          _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});

          _raf = _win.requestAnimationFrame;

          _registerPluginQueue.forEach(_createPlugin);
        }

        _id && _self.sleep();

        _req = _raf || function (f) {
          return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
        };

        _tickerActive = 1;

        _tick(2);
      }
    },
    sleep: function sleep() {
      (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
      _tickerActive = 0;
      _req = _emptyFunc;
    },
    lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
      _lagThreshold = threshold || Infinity; // zero should be interpreted as basically unlimited

      _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
    },
    fps: function fps(_fps) {
      _gap = 1000 / (_fps || 240);
      _nextTime = _self.time * 1000 + _gap;
    },
    add: function add(callback, once, prioritize) {
      var func = once ? function (t, d, f, v) {
        callback(t, d, f, v);

        _self.remove(func);
      } : callback;

      _self.remove(callback);

      _listeners[prioritize ? "unshift" : "push"](func);

      _wake();

      return func;
    },
    remove: function remove(callback, i) {
      ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
    },
    _listeners: _listeners
  };
  return _self;
}(),
    _wake = function _wake() {
  return !_tickerActive && _ticker.wake();
},
    //also ensures the core classes are initialized.

/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/
_easeMap = {},
    _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
    _quotesExp = /["']/g,
    _parseObjectInString = function _parseObjectInString(value) {
  //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
  var obj = {},
      split = value.substr(1, value.length - 3).split(":"),
      key = split[0],
      i = 1,
      l = split.length,
      index,
      val,
      parsedVal;

  for (; i < l; i++) {
    val = split[i];
    index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
    parsedVal = val.substr(0, index);
    obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
    key = val.substr(index + 1).trim();
  }

  return obj;
},
    _valueInParentheses = function _valueInParentheses(value) {
  var open = value.indexOf("(") + 1,
      close = value.indexOf(")"),
      nested = value.indexOf("(", open);
  return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
},
    _configEaseFromString = function _configEaseFromString(name) {
  //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
  var split = (name + "").split("("),
      ease = _easeMap[split[0]];
  return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
},
    _invertEase = function _invertEase(ease) {
  return function (p) {
    return 1 - ease(1 - p);
  };
},
    // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
_propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
  var child = timeline._first,
      ease;

  while (child) {
    if (child instanceof Timeline) {
      _propagateYoyoEase(child, isYoyo);
    } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
      if (child.timeline) {
        _propagateYoyoEase(child.timeline, isYoyo);
      } else {
        ease = child._ease;
        child._ease = child._yEase;
        child._yEase = ease;
        child._yoyo = isYoyo;
      }
    }

    child = child._next;
  }
},
    _parseEase = function _parseEase(ease, defaultEase) {
  return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
},
    _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
  if (easeOut === void 0) {
    easeOut = function easeOut(p) {
      return 1 - easeIn(1 - p);
    };
  }

  if (easeInOut === void 0) {
    easeInOut = function easeInOut(p) {
      return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
  }

  var ease = {
    easeIn: easeIn,
    easeOut: easeOut,
    easeInOut: easeInOut
  },
      lowercaseName;

  _forEachName(names, function (name) {
    _easeMap[name] = _globals[name] = ease;
    _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

    for (var p in ease) {
      _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    }
  });

  return ease;
},
    _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
  return function (p) {
    return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
  };
},
    _configElastic = function _configElastic(type, amplitude, period) {
  var p1 = amplitude >= 1 ? amplitude : 1,
      //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
  p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
      p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
      easeOut = function easeOut(p) {
    return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  p2 = _2PI / p2; //precalculate to optimize

  ease.config = function (amplitude, period) {
    return _configElastic(type, amplitude, period);
  };

  return ease;
},
    _configBack = function _configBack(type, overshoot) {
  if (overshoot === void 0) {
    overshoot = 1.70158;
  }

  var easeOut = function easeOut(p) {
    return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  ease.config = function (overshoot) {
    return _configBack(type, overshoot);
  };

  return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };


_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
  var power = i < 5 ? i + 1 : i;

  _insertEase(name + ",Power" + (power - 1), i ? function (p) {
    return Math.pow(p, power);
  } : function (p) {
    return p;
  }, function (p) {
    return 1 - Math.pow(1 - p, power);
  }, function (p) {
    return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
  });
});

_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

(function (n, c) {
  var n1 = 1 / c,
      n2 = 2 * n1,
      n3 = 2.5 * n1,
      easeOut = function easeOut(p) {
    return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
  };

  _insertEase("Bounce", function (p) {
    return 1 - easeOut(1 - p);
  }, easeOut);
})(7.5625, 2.75);

_insertEase("Expo", function (p) {
  return p ? Math.pow(2, 10 * (p - 1)) : 0;
});

_insertEase("Circ", function (p) {
  return -(_sqrt(1 - p * p) - 1);
});

_insertEase("Sine", function (p) {
  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});

_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
  config: function config(steps, immediateStart) {
    if (steps === void 0) {
      steps = 1;
    }

    var p1 = 1 / steps,
        p2 = steps + (immediateStart ? 0 : 1),
        p3 = immediateStart ? 1 : 0,
        max = 1 - _tinyNum;
    return function (p) {
      return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
    };
  }
};
_defaults.ease = _easeMap["quad.out"];

_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
  return _callbackNames += name + "," + name + "Params,";
});
/*
 * --------------------------------------------------------------------------------------
 * CACHE
 * --------------------------------------------------------------------------------------
 */


var GSCache = function GSCache(target, harness) {
  this.id = _gsID++;
  target._gsap = this;
  this.target = target;
  this.harness = harness;
  this.get = harness ? harness.get : _getProperty;
  this.set = harness ? harness.getSetter : _getSetter;
};
/*
 * --------------------------------------------------------------------------------------
 * ANIMATION
 * --------------------------------------------------------------------------------------
 */

var Animation = /*#__PURE__*/function () {
  function Animation(vars) {
    this.vars = vars;
    this._delay = +vars.delay || 0;

    if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
      // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
      this._rDelay = vars.repeatDelay || 0;
      this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
    }

    this._ts = 1;

    _setDuration(this, +vars.duration, 1, 1);

    this.data = vars.data;

    if (_context) {
      this._ctx = _context;

      _context.data.push(this);
    }

    _tickerActive || _ticker.wake();
  }

  var _proto = Animation.prototype;

  _proto.delay = function delay(value) {
    if (value || value === 0) {
      this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
      this._delay = value;
      return this;
    }

    return this._delay;
  };

  _proto.duration = function duration(value) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
  };

  _proto.totalDuration = function totalDuration(value) {
    if (!arguments.length) {
      return this._tDur;
    }

    this._dirty = 0;
    return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
  };

  _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
    _wake();

    if (!arguments.length) {
      return this._tTime;
    }

    var parent = this._dp;

    if (parent && parent.smoothChildTiming && this._ts) {
      _alignPlayhead(this, _totalTime);

      !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
      //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.

      while (parent && parent.parent) {
        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
          parent.totalTime(parent._tTime, true);
        }

        parent = parent.parent;
      }

      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
        //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
        _addToTimeline(this._dp, this, this._start - this._delay);
      }
    }

    if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
      // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
      this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
      //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
      //   this._lock = 1;

      _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
      //}

    }

    return this;
  };

  _proto.time = function time(value, suppressEvents) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
  };

  _proto.totalProgress = function totalProgress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  };

  _proto.progress = function progress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  };

  _proto.iteration = function iteration(value, suppressEvents) {
    var cycleDuration = this.duration() + this._rDelay;

    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
  } // potential future addition:
  // isPlayingBackwards() {
  // 	let animation = this,
  // 		orientation = 1; // 1 = forward, -1 = backward
  // 	while (animation) {
  // 		orientation *= animation.reversed() || (animation.repeat() && !(animation.iteration() & 1)) ? -1 : 1;
  // 		animation = animation.parent;
  // 	}
  // 	return orientation < 0;
  // }
  ;

  _proto.timeScale = function timeScale(value) {
    if (!arguments.length) {
      return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
    }

    if (this._rts === value) {
      return this;
    }

    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
    // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
    //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
    // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.

    this._rts = +value || 0;
    this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.

    this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), true);

    _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.


    return _recacheAncestors(this);
  };

  _proto.paused = function paused(value) {
    if (!arguments.length) {
      return this._ps;
    }

    if (this._ps !== value) {
      this._ps = value;

      if (value) {
        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.

        this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
      } else {
        _wake();

        this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.

        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
      }
    }

    return this;
  };

  _proto.startTime = function startTime(value) {
    if (arguments.length) {
      this._start = value;
      var parent = this.parent || this._dp;
      parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
      return this;
    }

    return this._start;
  };

  _proto.endTime = function endTime(includeRepeats) {
    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  };

  _proto.rawTime = function rawTime(wrapRepeats) {
    var parent = this.parent || this._dp; // _dp = detached parent

    return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
  };

  _proto.revert = function revert(config) {
    if (config === void 0) {
      config = _revertConfig;
    }

    var prevIsReverting = _reverting;
    _reverting = config;

    if (this._initted || this._startAt) {
      this.timeline && this.timeline.revert(config);
      this.totalTime(-0.01, config.suppressEvents);
    }

    this.data !== "nested" && config.kill !== false && this.kill();
    _reverting = prevIsReverting;
    return this;
  };

  _proto.globalTime = function globalTime(rawTime) {
    var animation = this,
        time = arguments.length ? rawTime : animation.rawTime();

    while (animation) {
      time = animation._start + time / (animation._ts || 1);
      animation = animation._dp;
    }

    return !this.parent && this._sat ? this._sat.vars.immediateRender ? -Infinity : this._sat.globalTime(rawTime) : time; // the _startAt tweens for .fromTo() and .from() that have immediateRender should always be FIRST in the timeline (important for context.revert()). "_sat" stands for _startAtTween, referring to the parent tween that created the _startAt. We must discern if that tween had immediateRender so that we can know whether or not to prioritize it in revert().
  };

  _proto.repeat = function repeat(value) {
    if (arguments.length) {
      this._repeat = value === Infinity ? -2 : value;
      return _onUpdateTotalDuration(this);
    }

    return this._repeat === -2 ? Infinity : this._repeat;
  };

  _proto.repeatDelay = function repeatDelay(value) {
    if (arguments.length) {
      var time = this._time;
      this._rDelay = value;

      _onUpdateTotalDuration(this);

      return time ? this.time(time) : this;
    }

    return this._rDelay;
  };

  _proto.yoyo = function yoyo(value) {
    if (arguments.length) {
      this._yoyo = value;
      return this;
    }

    return this._yoyo;
  };

  _proto.seek = function seek(position, suppressEvents) {
    return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
  };

  _proto.restart = function restart(includeDelay, suppressEvents) {
    return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
  };

  _proto.play = function play(from, suppressEvents) {
    from != null && this.seek(from, suppressEvents);
    return this.reversed(false).paused(false);
  };

  _proto.reverse = function reverse(from, suppressEvents) {
    from != null && this.seek(from || this.totalDuration(), suppressEvents);
    return this.reversed(true).paused(false);
  };

  _proto.pause = function pause(atTime, suppressEvents) {
    atTime != null && this.seek(atTime, suppressEvents);
    return this.paused(true);
  };

  _proto.resume = function resume() {
    return this.paused(false);
  };

  _proto.reversed = function reversed(value) {
    if (arguments.length) {
      !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.

      return this;
    }

    return this._rts < 0;
  };

  _proto.invalidate = function invalidate() {
    this._initted = this._act = 0;
    this._zTime = -_tinyNum;
    return this;
  };

  _proto.isActive = function isActive() {
    var parent = this.parent || this._dp,
        start = this._start,
        rawTime;
    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
  };

  _proto.eventCallback = function eventCallback(type, callback, params) {
    var vars = this.vars;

    if (arguments.length > 1) {
      if (!callback) {
        delete vars[type];
      } else {
        vars[type] = callback;
        params && (vars[type + "Params"] = params);
        type === "onUpdate" && (this._onUpdate = callback);
      }

      return this;
    }

    return vars[type];
  };

  _proto.then = function then(onFulfilled) {
    var self = this;
    return new Promise(function (resolve) {
      var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
          _resolve = function _resolve() {
        var _then = self.then;
        self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)

        _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
        resolve(f);
        self.then = _then;
      };

      if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
        _resolve();
      } else {
        self._prom = _resolve;
      }
    });
  };

  _proto.kill = function kill() {
    _interrupt(this);
  };

  return Animation;
}();

_setDefaults(Animation.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -_tinyNum,
  _prom: 0,
  _ps: false,
  _rts: 1
});
/*
 * -------------------------------------------------
 * TIMELINE
 * -------------------------------------------------
 */


var Timeline = /*#__PURE__*/function (_Animation) {
  _inheritsLoose(Timeline, _Animation);

  function Timeline(vars, position) {
    var _this;

    if (vars === void 0) {
      vars = {};
    }

    _this = _Animation.call(this, vars) || this;
    _this.labels = {};
    _this.smoothChildTiming = !!vars.smoothChildTiming;
    _this.autoRemoveChildren = !!vars.autoRemoveChildren;
    _this._sort = _isNotFalse(vars.sortChildren);
    _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
    vars.reversed && _this.reverse();
    vars.paused && _this.paused(true);
    vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
    return _this;
  }

  var _proto2 = Timeline.prototype;

  _proto2.to = function to(targets, vars, position) {
    _createTweenType(0, arguments, this);

    return this;
  };

  _proto2.from = function from(targets, vars, position) {
    _createTweenType(1, arguments, this);

    return this;
  };

  _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
    _createTweenType(2, arguments, this);

    return this;
  };

  _proto2.set = function set(targets, vars, position) {
    vars.duration = 0;
    vars.parent = this;
    _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
    vars.immediateRender = !!vars.immediateRender;
    new Tween(targets, vars, _parsePosition(this, position), 1);
    return this;
  };

  _proto2.call = function call(callback, params, position) {
    return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
  } //ONLY for backward compatibility! Maybe delete?
  ;

  _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.duration = duration;
    vars.stagger = vars.stagger || stagger;
    vars.onComplete = onCompleteAll;
    vars.onCompleteParams = onCompleteAllParams;
    vars.parent = this;
    new Tween(targets, vars, _parsePosition(this, position));
    return this;
  };

  _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.runBackwards = 1;
    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
    return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
    toVars.startAt = fromVars;
    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
    return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._dirty ? this.totalDuration() : this._tDur,
        dur = this._dur,
        tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
        // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
    crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
        time,
        child,
        next,
        iteration,
        cycleDuration,
        prevPaused,
        pauseTween,
        timeScale,
        prevStart,
        prevIteration,
        yoyo,
        isYoyo;
    this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);

    if (tTime !== this._tTime || force || crossingStart) {
      if (prevTime !== this._time && dur) {
        //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
        tTime += this._time - prevTime;
        totalTime += this._time - prevTime;
      }

      time = tTime;
      prevStart = this._start;
      timeScale = this._ts;
      prevPaused = !timeScale;

      if (crossingStart) {
        dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

        (totalTime || !suppressEvents) && (this._zTime = totalTime);
      }

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        yoyo = this._yoyo;
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);
        !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://greensock.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005 also, this._tTime - prevIteration * cycleDuration - this._dur <= 0 just checks to make sure it wasn't previously in the "repeatDelay" portion

        if (yoyo && iteration & 1) {
          time = dur - time;
          isYoyo = 1;
        }
        /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */


        if (iteration !== prevIteration && !this._lock) {
          var rewinding = yoyo && prevIteration & 1,
              doesWrap = rewinding === (yoyo && iteration & 1);
          iteration < prevIteration && (rewinding = !rewinding);
          prevTime = rewinding ? 0 : tTime % dur ? dur : tTime; // if the playhead is landing exactly at the end of an iteration, use that totalTime rather than only the duration, otherwise it'll skip the 2nd render since it's effectively at the same time.

          this._lock = 1;
          this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
          this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.

          !suppressEvents && this.parent && _callback(this, "onRepeat");
          this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

          if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
            // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
            return this;
          }

          dur = this._dur; // in case the duration changed in the onRepeat

          tDur = this._tDur;

          if (doesWrap) {
            this._lock = 2;
            prevTime = rewinding ? dur : -0.0001;
            this.render(prevTime, true);
            this.vars.repeatRefresh && !isYoyo && this.invalidate();
          }

          this._lock = 0;

          if (!this._ts && !prevPaused) {
            return this;
          } //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.


          _propagateYoyoEase(this, isYoyo);
        }
      }

      if (this._hasPause && !this._forcing && this._lock < 2) {
        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));

        if (pauseTween) {
          tTime -= time - (time = pauseTween._start);
        }
      }

      this._tTime = tTime;
      this._time = time;
      this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate;
        this._initted = 1;
        this._zTime = totalTime;
        prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
      }

      if (!prevTime && time && !suppressEvents && !iteration) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      if (time >= prevTime && totalTime >= 0) {
        child = this._first;

        while (child) {
          next = child._next;

          if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      } else {
        child = this._last;
        var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.

        while (child) {
          next = child._prev;

          if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt)); // if reverting, we should always force renders of initted tweens (but remember that .fromTo() or .from() may have a _startAt but not _initted yet). If, for example, a .fromTo() tween with a stagger (which creates an internal timeline) gets reverted BEFORE some of its child tweens render for the first time, it may not properly trigger them to revert.

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      }

      if (pauseTween && !suppressEvents) {
        this.pause();
        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

        if (this._ts) {
          //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
          this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.

          _setEnd(this);

          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
      if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
        // remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
          _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto2.add = function add(child, position) {
    var _this2 = this;

    _isNumber(position) || (position = _parsePosition(this, position, child));

    if (!(child instanceof Animation)) {
      if (_isArray(child)) {
        child.forEach(function (obj) {
          return _this2.add(obj, position);
        });
        return this;
      }

      if (_isString(child)) {
        return this.addLabel(child, position);
      }

      if (_isFunction(child)) {
        child = Tween.delayedCall(0, child);
      } else {
        return this;
      }
    }

    return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
  };

  _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
    if (nested === void 0) {
      nested = true;
    }

    if (tweens === void 0) {
      tweens = true;
    }

    if (timelines === void 0) {
      timelines = true;
    }

    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = -_bigNum;
    }

    var a = [],
        child = this._first;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        if (child instanceof Tween) {
          tweens && a.push(child);
        } else {
          timelines && a.push(child);
          nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
        }
      }

      child = child._next;
    }

    return a;
  };

  _proto2.getById = function getById(id) {
    var animations = this.getChildren(1, 1, 1),
        i = animations.length;

    while (i--) {
      if (animations[i].vars.id === id) {
        return animations[i];
      }
    }
  };

  _proto2.remove = function remove(child) {
    if (_isString(child)) {
      return this.removeLabel(child);
    }

    if (_isFunction(child)) {
      return this.killTweensOf(child);
    }

    _removeLinkedListItem(this, child);

    if (child === this._recent) {
      this._recent = this._last;
    }

    return _uncache(this);
  };

  _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
    if (!arguments.length) {
      return this._tTime;
    }

    this._forcing = 1;

    if (!this._dp && this._ts) {
      //special case for the global timeline (or any other that has no parent or detached parent).
      this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
    }

    _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

    this._forcing = 0;
    return this;
  };

  _proto2.addLabel = function addLabel(label, position) {
    this.labels[label] = _parsePosition(this, position);
    return this;
  };

  _proto2.removeLabel = function removeLabel(label) {
    delete this.labels[label];
    return this;
  };

  _proto2.addPause = function addPause(position, callback, params) {
    var t = Tween.delayedCall(0, callback || _emptyFunc, params);
    t.data = "isPause";
    this._hasPause = 1;
    return _addToTimeline(this, t, _parsePosition(this, position));
  };

  _proto2.removePause = function removePause(position) {
    var child = this._first;
    position = _parsePosition(this, position);

    while (child) {
      if (child._start === position && child.data === "isPause") {
        _removeFromParent(child);
      }

      child = child._next;
    }
  };

  _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    var tweens = this.getTweensOf(targets, onlyActive),
        i = tweens.length;

    while (i--) {
      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
    }

    return this;
  };

  _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
    var a = [],
        parsedTargets = toArray(targets),
        child = this._first,
        isGlobalTime = _isNumber(onlyActive),
        // a number is interpreted as a global time. If the animation spans
    children;

    while (child) {
      if (child instanceof Tween) {
        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
          // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
          a.push(child);
        }
      } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
        a.push.apply(a, children);
      }

      child = child._next;
    }

    return a;
  } // potential future feature - targets() on timelines
  // targets() {
  // 	let result = [];
  // 	this.getChildren(true, true, false).forEach(t => result.push(...t.targets()));
  // 	return result.filter((v, i) => result.indexOf(v) === i);
  // }
  ;

  _proto2.tweenTo = function tweenTo(position, vars) {
    vars = vars || {};

    var tl = this,
        endTime = _parsePosition(tl, position),
        _vars = vars,
        startAt = _vars.startAt,
        _onStart = _vars.onStart,
        onStartParams = _vars.onStartParams,
        immediateRender = _vars.immediateRender,
        initted,
        tween = Tween.to(tl, _setDefaults({
      ease: vars.ease || "none",
      lazy: false,
      immediateRender: false,
      time: endTime,
      overwrite: "auto",
      duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
      onStart: function onStart() {
        tl.pause();

        if (!initted) {
          var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
          tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
          initted = 1;
        }

        _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
      }
    }, vars));

    return immediateRender ? tween.render(0) : tween;
  };

  _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
    return this.tweenTo(toPosition, _setDefaults({
      startAt: {
        time: _parsePosition(this, fromPosition)
      }
    }, vars));
  };

  _proto2.recent = function recent() {
    return this._recent;
  };

  _proto2.nextLabel = function nextLabel(afterTime) {
    if (afterTime === void 0) {
      afterTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, afterTime));
  };

  _proto2.previousLabel = function previousLabel(beforeTime) {
    if (beforeTime === void 0) {
      beforeTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
  };

  _proto2.currentLabel = function currentLabel(value) {
    return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
  };

  _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = 0;
    }

    var child = this._first,
        labels = this.labels,
        p;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        child._start += amount;
        child._end += amount;
      }

      child = child._next;
    }

    if (adjustLabels) {
      for (p in labels) {
        if (labels[p] >= ignoreBeforeTime) {
          labels[p] += amount;
        }
      }
    }

    return _uncache(this);
  };

  _proto2.invalidate = function invalidate(soft) {
    var child = this._first;
    this._lock = 0;

    while (child) {
      child.invalidate(soft);
      child = child._next;
    }

    return _Animation.prototype.invalidate.call(this, soft);
  };

  _proto2.clear = function clear(includeLabels) {
    if (includeLabels === void 0) {
      includeLabels = true;
    }

    var child = this._first,
        next;

    while (child) {
      next = child._next;
      this.remove(child);
      child = next;
    }

    this._dp && (this._time = this._tTime = this._pTime = 0);
    includeLabels && (this.labels = {});
    return _uncache(this);
  };

  _proto2.totalDuration = function totalDuration(value) {
    var max = 0,
        self = this,
        child = self._last,
        prevStart = _bigNum,
        prev,
        start,
        parent;

    if (arguments.length) {
      return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
    }

    if (self._dirty) {
      parent = self.parent;

      while (child) {
        prev = child._prev; //record it here in case the tween changes position in the sequence...

        child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.

        start = child._start;

        if (start > prevStart && self._sort && child._ts && !self._lock) {
          //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
          self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().

          _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
        } else {
          prevStart = start;
        }

        if (start < 0 && child._ts) {
          //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
          max -= start;

          if (!parent && !self._dp || parent && parent.smoothChildTiming) {
            self._start += start / self._ts;
            self._time -= start;
            self._tTime -= start;
          }

          self.shiftChildren(-start, false, -1e999);
          prevStart = 0;
        }

        child._end > max && child._ts && (max = child._end);
        child = prev;
      }

      _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

      self._dirty = 0;
    }

    return self._tDur;
  };

  Timeline.updateRoot = function updateRoot(time) {
    if (_globalTimeline._ts) {
      _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

      _lastRenderedFrame = _ticker.frame;
    }

    if (_ticker.frame >= _nextGCFrame) {
      _nextGCFrame += _config.autoSleep || 120;
      var child = _globalTimeline._first;
      if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
        while (child && !child._ts) {
          child = child._next;
        }

        child || _ticker.sleep();
      }
    }
  };

  return Timeline;
}(Animation);

_setDefaults(Timeline.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});

var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
  //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
      index = 0,
      matchIndex = 0,
      result,
      startNums,
      color,
      endNum,
      chunk,
      startNum,
      hasRandom,
      a;
  pt.b = start;
  pt.e = end;
  start += ""; //ensure values are strings

  end += "";

  if (hasRandom = ~end.indexOf("random(")) {
    end = _replaceRandom(end);
  }

  if (stringFilter) {
    a = [start, end];
    stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.

    start = a[0];
    end = a[1];
  }

  startNums = start.match(_complexStringNumExp) || [];

  while (result = _complexStringNumExp.exec(end)) {
    endNum = result[0];
    chunk = end.substring(index, result.index);

    if (color) {
      color = (color + 1) % 5;
    } else if (chunk.substr(-5) === "rgba(") {
      color = 1;
    }

    if (endNum !== startNums[matchIndex++]) {
      startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.

      pt._pt = {
        _next: pt._pt,
        p: chunk || matchIndex === 1 ? chunk : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: startNum,
        c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
        m: color && color < 4 ? Math.round : 0
      };
      index = _complexStringNumExp.lastIndex;
    }
  }

  pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)

  pt.fp = funcParam;

  if (_relExp.test(end) || hasRandom) {
    pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
  }

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
  _isFunction(end) && (end = end(index || 0, target, targets));
  var currentValue = target[prop],
      parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
      setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
      pt;

  if (_isString(end)) {
    if (~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }

    if (end.charAt(1) === "=") {
      pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);

      if (pt || pt === 0) {
        // to avoid isNaN, like if someone passes in a value like "!= whatever"
        end = pt;
      }
    }
  }

  if (!optional || parsedStart !== end || _forceAllPropTweens) {
    if (!isNaN(parsedStart * end) && end !== "") {
      // fun fact: any number multiplied by "" is evaluated as the number 0!
      pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
      funcParam && (pt.fp = funcParam);
      modifier && pt.modifier(modifier, this, target);
      return this._pt = pt;
    }

    !currentValue && !(prop in target) && _missingPlugin(prop, end);
    return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
  }
},
    //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
_processVars = function _processVars(vars, index, target, targets, tween) {
  _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

  if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
    return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
  }

  var copy = {},
      p;

  for (p in vars) {
    copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
  }

  return copy;
},
    _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
  var plugin, pt, ptLookup, i;

  if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
    tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

    if (tween !== _quickTween) {
      ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.

      i = plugin._props.length;

      while (i--) {
        ptLookup[plugin._props[i]] = pt;
      }
    }
  }

  return plugin;
},
    _overwritingTween,
    //store a reference temporarily so we can avoid overwriting itself.
_forceAllPropTweens,
    _initTween = function _initTween(tween, time, tTime) {
  var vars = tween.vars,
      ease = vars.ease,
      startAt = vars.startAt,
      immediateRender = vars.immediateRender,
      lazy = vars.lazy,
      onUpdate = vars.onUpdate,
      onUpdateParams = vars.onUpdateParams,
      callbackScope = vars.callbackScope,
      runBackwards = vars.runBackwards,
      yoyoEase = vars.yoyoEase,
      keyframes = vars.keyframes,
      autoRevert = vars.autoRevert,
      dur = tween._dur,
      prevStartAt = tween._startAt,
      targets = tween._targets,
      parent = tween.parent,
      fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets,
      autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
      tl = tween.timeline,
      cleanVars,
      i,
      p,
      pt,
      target,
      hasPriority,
      gsData,
      harness,
      plugin,
      ptLookup,
      index,
      harnessVars,
      overwritten;
  tl && (!keyframes || !ease) && (ease = "none");
  tween._ease = _parseEase(ease, _defaults.ease);
  tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

  if (yoyoEase && tween._yoyo && !tween._repeat) {
    //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
    yoyoEase = tween._yEase;
    tween._yEase = tween._ease;
    tween._ease = yoyoEase;
  }

  tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.

  if (!tl || keyframes && !vars.stagger) {
    //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
    harness = targets[0] ? _getCache(targets[0]).harness : 0;
    harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.

    cleanVars = _copyExcluding(vars, _reservedProps);

    if (prevStartAt) {
      prevStartAt._zTime < 0 && prevStartAt.progress(1); // in case it's a lazy startAt that hasn't rendered yet.

      time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig); // if it's a "startAt" (not "from()" or runBackwards: true), we only need to do a shallow revert (keep transforms cached in CSSPlugin)
      // don't just _removeFromParent(prevStartAt.render(-1, true)) because that'll leave inline styles. We're creating a new _startAt for "startAt" tweens that re-capture things to ensure that if the pre-tween values changed since the tween was created, they're recorded.

      prevStartAt._lazy = 0;
    }

    if (startAt) {
      _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
        data: "isStart",
        overwrite: false,
        parent: parent,
        immediateRender: true,
        lazy: !prevStartAt && _isNotFalse(lazy),
        startAt: null,
        delay: 0,
        onUpdate: onUpdate,
        onUpdateParams: onUpdateParams,
        callbackScope: callbackScope,
        stagger: 0
      }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);


      tween._startAt._dp = 0; // don't allow it to get put back into root timeline! Like when revert() is called and totalTime() gets set.

      tween._startAt._sat = tween; // used in globalTime(). _sat stands for _startAtTween

      time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.

      if (immediateRender) {
        if (dur && time <= 0 && tTime <= 0) {
          // check tTime here because in the case of a yoyo tween whose playhead gets pushed to the end like tween.progress(1), we should allow it through so that the onComplete gets fired properly.
          time && (tween._zTime = time);
          return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        }
      }
    } else if (runBackwards && dur) {
      //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
      if (!prevStartAt) {
        time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0

        p = _setDefaults({
          overwrite: false,
          data: "isFromStart",
          //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
          lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
          immediateRender: immediateRender,
          //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
          stagger: 0,
          parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})

        }, cleanVars);
        harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})

        _removeFromParent(tween._startAt = Tween.set(targets, p));

        tween._startAt._dp = 0; // don't allow it to get put back into root timeline!

        tween._startAt._sat = tween; // used in globalTime()

        time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
        tween._zTime = time;

        if (!immediateRender) {
          _initTween(tween._startAt, _tinyNum, _tinyNum); //ensures that the initial values are recorded

        } else if (!time) {
          return;
        }
      }
    }

    tween._pt = tween._ptCache = 0;
    lazy = dur && _isNotFalse(lazy) || lazy && !dur;

    for (i = 0; i < targets.length; i++) {
      target = targets[i];
      gsData = target._gsap || _harness(targets)[i]._gsap;
      tween._ptLookup[i] = ptLookup = {};
      _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)

      index = fullTargets === targets ? i : fullTargets.indexOf(target);

      if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

        plugin._props.forEach(function (name) {
          ptLookup[name] = pt;
        });

        plugin.priority && (hasPriority = 1);
      }

      if (!harness || harnessVars) {
        for (p in cleanVars) {
          if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
            plugin.priority && (hasPriority = 1);
          } else {
            ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
          }
        }
      }

      tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

      if (autoOverwrite && tween._pt) {
        _overwritingTween = tween;

        _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!


        overwritten = !tween.parent;
        _overwritingTween = 0;
      }

      tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
    }

    hasPriority && _sortPropTweensByPriority(tween);
    tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
  }

  tween._onUpdate = onUpdate;
  tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.

  keyframes && time <= 0 && tl.render(_bigNum, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
},
    _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time) {
  var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property],
      pt,
      rootPT,
      lookup,
      i;

  if (!ptCache) {
    ptCache = tween._ptCache[property] = [];
    lookup = tween._ptLookup;
    i = tween._targets.length;

    while (i--) {
      pt = lookup[i][property];

      if (pt && pt.d && pt.d._pt) {
        // it's a plugin, so find the nested PropTween
        pt = pt.d._pt;

        while (pt && pt.p !== property && pt.fp !== property) {
          // "fp" is functionParam for things like setting CSS variables which require .setProperty("--var-name", value)
          pt = pt._next;
        }
      }

      if (!pt) {
        // there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
        // if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
        _forceAllPropTweens = 1; // otherwise, when we _addPropTween() and it finds no change between the start and end values, it skips creating a PropTween (for efficiency...why tween when there's no difference?) but in this case we NEED that PropTween created so we can edit it.

        tween.vars[property] = "+=0";

        _initTween(tween, time);

        _forceAllPropTweens = 0;
        return 1;
      }

      ptCache.push(pt);
    }
  }

  i = ptCache.length;

  while (i--) {
    rootPT = ptCache[i];
    pt = rootPT._pt || rootPT; // complex values may have nested PropTweens. We only accommodate the FIRST value.

    pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
    pt.c = value - pt.s;
    rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e)); // mainly for CSSPlugin (end value)

    rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b)); // (beginning value)
  }
},
    _addAliasesToVars = function _addAliasesToVars(targets, vars) {
  var harness = targets[0] ? _getCache(targets[0]).harness : 0,
      propertyAliases = harness && harness.aliases,
      copy,
      p,
      i,
      aliases;

  if (!propertyAliases) {
    return vars;
  }

  copy = _merge({}, vars);

  for (p in propertyAliases) {
    if (p in copy) {
      aliases = propertyAliases[p].split(",");
      i = aliases.length;

      while (i--) {
        copy[aliases[i]] = copy[p];
      }
    }
  }

  return copy;
},
    // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
_parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
  var ease = obj.ease || easeEach || "power1.inOut",
      p,
      a;

  if (_isArray(obj)) {
    a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease

    obj.forEach(function (value, i) {
      return a.push({
        t: i / (obj.length - 1) * 100,
        v: value,
        e: ease
      });
    });
  } else {
    for (p in obj) {
      a = allProps[p] || (allProps[p] = []);
      p === "ease" || a.push({
        t: parseFloat(prop),
        v: obj[p],
        e: ease
      });
    }
  }
},
    _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
  return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
},
    _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    _staggerPropsToSkip = {};

_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function (name) {
  return _staggerPropsToSkip[name] = 1;
});
/*
 * --------------------------------------------------------------------------------------
 * TWEEN
 * --------------------------------------------------------------------------------------
 */


var Tween = /*#__PURE__*/function (_Animation2) {
  _inheritsLoose(Tween, _Animation2);

  function Tween(targets, vars, position, skipInherit) {
    var _this3;

    if (typeof vars === "number") {
      position.duration = vars;
      vars = position;
      position = null;
    }

    _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
    var _this3$vars = _this3.vars,
        duration = _this3$vars.duration,
        delay = _this3$vars.delay,
        immediateRender = _this3$vars.immediateRender,
        stagger = _this3$vars.stagger,
        overwrite = _this3$vars.overwrite,
        keyframes = _this3$vars.keyframes,
        defaults = _this3$vars.defaults,
        scrollTrigger = _this3$vars.scrollTrigger,
        yoyoEase = _this3$vars.yoyoEase,
        parent = vars.parent || _globalTimeline,
        parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
        tl,
        i,
        copy,
        l,
        p,
        curTarget,
        staggerFunc,
        staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
    _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property

    _this3._overwrite = overwrite;

    if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults || {},
        targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
      }); // we need to store the targets because for staggers and keyframes, we end up creating an individual tween for each but function-based values need to know the index and the whole Array of targets.

      tl.kill();
      tl.parent = tl._dp = _assertThisInitialized(_this3);
      tl._start = 0;

      if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        l = parsedTargets.length;
        staggerFunc = stagger && distribute(stagger);

        if (_isObject(stagger)) {
          //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
          for (p in stagger) {
            if (~_staggerTweenProps.indexOf(p)) {
              staggerVarsToMerge || (staggerVarsToMerge = {});
              staggerVarsToMerge[p] = stagger[p];
            }
          }
        }

        for (i = 0; i < l; i++) {
          copy = _copyExcluding(vars, _staggerPropsToSkip);
          copy.stagger = 0;
          yoyoEase && (copy.yoyoEase = yoyoEase);
          staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
          curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.

          copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
          copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

          if (!stagger && l === 1 && copy.delay) {
            // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
            _this3._delay = delay = copy.delay;
            _this3._start += delay;
            copy.delay = 0;
          }

          tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
          tl._ease = _easeMap.none;
        }

        tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
      } else if (keyframes) {
        _inheritDefaults(_setDefaults(tl.vars.defaults, {
          ease: "none"
        }));

        tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
        var time = 0,
            a,
            kf,
            v;

        if (_isArray(keyframes)) {
          keyframes.forEach(function (frame) {
            return tl.to(parsedTargets, frame, ">");
          });
          tl.duration(); // to ensure tl._dur is cached because we tap into it for performance purposes in the render() method.
        } else {
          copy = {};

          for (p in keyframes) {
            p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
          }

          for (p in copy) {
            a = copy[p].sort(function (a, b) {
              return a.t - b.t;
            });
            time = 0;

            for (i = 0; i < a.length; i++) {
              kf = a[i];
              v = {
                ease: kf.e,
                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
              };
              v[p] = kf.v;
              tl.to(parsedTargets, v, time);
              time += v.duration;
            }
          }

          tl.duration() < duration && tl.to({}, {
            duration: duration - tl.duration()
          }); // in case keyframes didn't go to 100%
        }
      }

      duration || _this3.duration(duration = tl.duration());
    } else {
      _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
    }

    if (overwrite === true && !_suppressOverwrites) {
      _overwritingTween = _assertThisInitialized(_this3);

      _globalTimeline.killTweensOf(parsedTargets);

      _overwritingTween = 0;
    }

    _addToTimeline(parent, _assertThisInitialized(_this3), position);

    vars.reversed && _this3.reverse();
    vars.paused && _this3.paused(true);

    if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
      _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

      _this3.render(Math.max(0, -delay) || 0); //in case delay is negative

    }

    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
    return _this3;
  }

  var _proto3 = Tween.prototype;

  _proto3.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._tDur,
        dur = this._dur,
        isNegative = totalTime < 0,
        tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime,
        time,
        pt,
        iteration,
        cycleDuration,
        prevIteration,
        isYoyo,
        ratio,
        timeline,
        yoyoEase;

    if (!dur) {
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
      //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
      time = tTime;
      timeline = this.timeline;

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && isNegative) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        isYoyo = this._yoyo && iteration & 1;

        if (isYoyo) {
          yoyoEase = this._yEase;
          time = dur - time;
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);

        if (time === prevTime && !force && this._initted) {
          //could be during the repeatDelay part. No need to render and fire callbacks.
          this._tTime = tTime;
          return this;
        }

        if (iteration !== prevIteration) {
          timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality

          if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
            this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.

            this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
          }
        }
      }

      if (!this._initted) {
        if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
          this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.

          return this;
        }

        if (prevTime !== this._time) {
          // rare edge case - during initialization, an onUpdate in the _startAt (.fromTo()) might force this tween to render at a different spot in which case we should ditch this render() call so that it doesn't revert the values.
          return this;
        }

        if (dur !== this._dur) {
          // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._tTime = tTime;
      this._time = time;

      if (!this._act && this._ts) {
        this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

        this._lazy = 0;
      }

      this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

      if (this._from) {
        this.ratio = ratio = 1 - ratio;
      }

      if (time && !prevTime && !suppressEvents && !iteration) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      pt = this._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);

      if (this._onUpdate && !suppressEvents) {
        isNegative && _rewindStartAt(this, totalTime, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

        _callback(this, "onUpdate");
      }

      this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

      if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
        isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
          // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
          _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto3.targets = function targets() {
    return this._targets;
  };

  _proto3.invalidate = function invalidate(soft) {
    // "soft" gives us a way to clear out everything EXCEPT the recorded pre-"from" portion of from() tweens. Otherwise, for example, if you tween.progress(1).render(0, true true).invalidate(), the "from" values would persist and then on the next render, the from() tweens would initialize and the current value would match the "from" values, thus animate from the same value to the same value (no animation). We tap into this in ScrollTrigger's refresh() where we must push a tween to completion and then back again but honor its init state in case the tween is dependent on another tween further up on the page.
    (!soft || !this.vars.runBackwards) && (this._startAt = 0);
    this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
    this._ptLookup = [];
    this.timeline && this.timeline.invalidate(soft);
    return _Animation2.prototype.invalidate.call(this, soft);
  };

  _proto3.resetTo = function resetTo(property, value, start, startIsRelative) {
    _tickerActive || _ticker.wake();
    this._ts || this.play();
    var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        ratio;
    this._initted || _initTween(this, time);
    ratio = this._ease(time / this._dur); // don't just get tween.ratio because it may not have rendered yet.
    // possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
    // if (_isObject(property)) { // performance optimization
    // 	for (p in property) {
    // 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
    // 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    // 		}
    // 	}
    // } else {

    if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time)) {
      return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    } //}


    _alignPlayhead(this, 0);

    this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
    return this.render(0);
  };

  _proto3.kill = function kill(targets, vars) {
    if (vars === void 0) {
      vars = "all";
    }

    if (!targets && (!vars || vars === "all")) {
      this._lazy = this._pt = 0;
      return this.parent ? _interrupt(this) : this;
    }

    if (this.timeline) {
      var tDur = this.timeline.totalDuration();
      this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.

      this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.

      return this;
    }

    var parsedTargets = this._targets,
        killingTargets = targets ? toArray(targets) : parsedTargets,
        propTweenLookup = this._ptLookup,
        firstPT = this._pt,
        overwrittenProps,
        curLookup,
        curOverwriteProps,
        props,
        p,
        pt,
        i;

    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
      vars === "all" && (this._pt = 0);
      return _interrupt(this);
    }

    overwrittenProps = this._op = this._op || [];

    if (vars !== "all") {
      //so people can pass in a comma-delimited list of property names
      if (_isString(vars)) {
        p = {};

        _forEachName(vars, function (name) {
          return p[name] = 1;
        });

        vars = p;
      }

      vars = _addAliasesToVars(parsedTargets, vars);
    }

    i = parsedTargets.length;

    while (i--) {
      if (~killingTargets.indexOf(parsedTargets[i])) {
        curLookup = propTweenLookup[i];

        if (vars === "all") {
          overwrittenProps[i] = vars;
          props = curLookup;
          curOverwriteProps = {};
        } else {
          curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
          props = vars;
        }

        for (p in props) {
          pt = curLookup && curLookup[p];

          if (pt) {
            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
              _removeLinkedListItem(this, pt, "_pt");
            }

            delete curLookup[p];
          }

          if (curOverwriteProps !== "all") {
            curOverwriteProps[p] = 1;
          }
        }
      }
    }

    this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.

    return this;
  };

  Tween.to = function to(targets, vars) {
    return new Tween(targets, vars, arguments[2]);
  };

  Tween.from = function from(targets, vars) {
    return _createTweenType(1, arguments);
  };

  Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
    return new Tween(callback, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay: delay,
      onComplete: callback,
      onReverseComplete: callback,
      onCompleteParams: params,
      onReverseCompleteParams: params,
      callbackScope: scope
    }); // we must use onReverseComplete too for things like timeline.add(() => {...}) which should be triggered in BOTH directions (forward and reverse)
  };

  Tween.fromTo = function fromTo(targets, fromVars, toVars) {
    return _createTweenType(2, arguments);
  };

  Tween.set = function set(targets, vars) {
    vars.duration = 0;
    vars.repeatDelay || (vars.repeat = 0);
    return new Tween(targets, vars);
  };

  Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    return _globalTimeline.killTweensOf(targets, props, onlyActive);
  };

  return Tween;
}(Animation);

_setDefaults(Tween.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.


_forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
  Tween[name] = function () {
    var tl = new Timeline(),
        params = _slice.call(arguments, 0);

    params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
    return tl[name].apply(tl, params);
  };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */


var _setterPlain = function _setterPlain(target, property, value) {
  return target[property] = value;
},
    _setterFunc = function _setterFunc(target, property, value) {
  return target[property](value);
},
    _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
  return target[property](data.fp, value);
},
    _setterAttribute = function _setterAttribute(target, property, value) {
  return target.setAttribute(property, value);
},
    _getSetter = function _getSetter(target, property) {
  return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
},
    _renderPlain = function _renderPlain(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
},
    _renderBoolean = function _renderBoolean(ratio, data) {
  return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
},
    _renderComplexString = function _renderComplexString(ratio, data) {
  var pt = data._pt,
      s = "";

  if (!ratio && data.b) {
    //b = beginning string
    s = data.b;
  } else if (ratio === 1 && data.e) {
    //e = ending string
    s = data.e;
  } else {
    while (pt) {
      s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.

      pt = pt._next;
    }

    s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
  }

  data.set(data.t, data.p, s, data);
},
    _renderPropTweens = function _renderPropTweens(ratio, data) {
  var pt = data._pt;

  while (pt) {
    pt.r(ratio, pt.d);
    pt = pt._next;
  }
},
    _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
  var pt = this._pt,
      next;

  while (pt) {
    next = pt._next;
    pt.p === property && pt.modifier(modifier, tween, target);
    pt = next;
  }
},
    _killPropTweensOf = function _killPropTweensOf(property) {
  var pt = this._pt,
      hasNonDependentRemaining,
      next;

  while (pt) {
    next = pt._next;

    if (pt.p === property && !pt.op || pt.op === property) {
      _removeLinkedListItem(this, pt, "_pt");
    } else if (!pt.dep) {
      hasNonDependentRemaining = 1;
    }

    pt = next;
  }

  return !hasNonDependentRemaining;
},
    _setterWithModifier = function _setterWithModifier(target, property, value, data) {
  data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
},
    _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
  var pt = parent._pt,
      next,
      pt2,
      first,
      last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)

  while (pt) {
    next = pt._next;
    pt2 = first;

    while (pt2 && pt2.pr > pt.pr) {
      pt2 = pt2._next;
    }

    if (pt._prev = pt2 ? pt2._prev : last) {
      pt._prev._next = pt;
    } else {
      first = pt;
    }

    if (pt._next = pt2) {
      pt2._prev = pt;
    } else {
      last = pt;
    }

    pt = next;
  }

  parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)


var PropTween = /*#__PURE__*/function () {
  function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
    this.t = target;
    this.s = start;
    this.c = change;
    this.p = prop;
    this.r = renderer || _renderPlain;
    this.d = data || this;
    this.set = setter || _setterPlain;
    this.pr = priority || 0;
    this._next = next;

    if (next) {
      next._prev = this;
    }
  }

  var _proto4 = PropTween.prototype;

  _proto4.modifier = function modifier(func, tween, target) {
    this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)

    this.set = _setterWithModifier;
    this.m = func;
    this.mt = target; //modifier target

    this.tween = tween;
  };

  return PropTween;
}(); //Initialization tasks

_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
  return _reservedProps[name] = 1;
});

_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
  sortChildren: false,
  defaults: _defaults,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;

var _media = [],
    _listeners = {},
    _emptyArray = [],
    _lastMediaTime = 0,
    _contextID = 0,
    _dispatch = function _dispatch(type) {
  return (_listeners[type] || _emptyArray).map(function (f) {
    return f();
  });
},
    _onMediaChange = function _onMediaChange() {
  var time = Date.now(),
      matches = [];

  if (time - _lastMediaTime > 2) {
    _dispatch("matchMediaInit");

    _media.forEach(function (c) {
      var queries = c.queries,
          conditions = c.conditions,
          match,
          p,
          anyMatch,
          toggled;

      for (p in queries) {
        match = _win.matchMedia(queries[p]).matches; // Firefox doesn't update the "matches" property of the MediaQueryList object correctly - it only does so as it calls its change handler - so we must re-create a media query here to ensure it's accurate.

        match && (anyMatch = 1);

        if (match !== conditions[p]) {
          conditions[p] = match;
          toggled = 1;
        }
      }

      if (toggled) {
        c.revert();
        anyMatch && matches.push(c);
      }
    });

    _dispatch("matchMediaRevert");

    matches.forEach(function (c) {
      return c.onMatch(c);
    });
    _lastMediaTime = time;

    _dispatch("matchMedia");
  }
};

var Context = /*#__PURE__*/function () {
  function Context(func, scope) {
    this.selector = scope && selector(scope);
    this.data = [];
    this._r = []; // returned/cleanup functions

    this.isReverted = false;
    this.id = _contextID++; // to work around issues that frameworks like Vue cause by making things into Proxies which make it impossible to do something like _media.indexOf(this) because "this" would no longer refer to the Context instance itself - it'd refer to a Proxy! We needed a way to identify the context uniquely

    func && this.add(func);
  }

  var _proto5 = Context.prototype;

  _proto5.add = function add(name, func, scope) {
    // possible future addition if we need the ability to add() an animation to a context and for whatever reason cannot create that animation inside of a context.add(() => {...}) function.
    // if (name && _isFunction(name.revert)) {
    // 	this.data.push(name);
    // 	return (name._ctx = this);
    // }
    if (_isFunction(name)) {
      scope = func;
      func = name;
      name = _isFunction;
    }

    var self = this,
        f = function f() {
      var prev = _context,
          prevSelector = self.selector,
          result;
      prev && prev !== self && prev.data.push(self);
      scope && (self.selector = selector(scope));
      _context = self;
      result = func.apply(self, arguments);
      _isFunction(result) && self._r.push(result);
      _context = prev;
      self.selector = prevSelector;
      self.isReverted = false;
      return result;
    };

    self.last = f;
    return name === _isFunction ? f(self) : name ? self[name] = f : f;
  };

  _proto5.ignore = function ignore(func) {
    var prev = _context;
    _context = null;
    func(this);
    _context = prev;
  };

  _proto5.getTweens = function getTweens() {
    var a = [];
    this.data.forEach(function (e) {
      return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
    });
    return a;
  };

  _proto5.clear = function clear() {
    this._r.length = this.data.length = 0;
  };

  _proto5.kill = function kill(revert, matchMedia) {
    var _this4 = this;

    if (revert) {
      var tweens = this.getTweens();
      this.data.forEach(function (t) {
        // Flip plugin tweens are very different in that they should actually be pushed to their end. The plugin replaces the timeline's .revert() method to do exactly that. But we also need to remove any of those nested tweens inside the flip timeline so that they don't get individually reverted.
        if (t.data === "isFlip") {
          t.revert();
          t.getChildren(true, true, false).forEach(function (tween) {
            return tweens.splice(tweens.indexOf(tween), 1);
          });
        }
      }); // save as an object so that we can cache the globalTime for each tween to optimize performance during the sort

      tweens.map(function (t) {
        return {
          g: t.globalTime(0),
          t: t
        };
      }).sort(function (a, b) {
        return b.g - a.g || -Infinity;
      }).forEach(function (o) {
        return o.t.revert(revert);
      }); // note: all of the _startAt tweens should be reverted in reverse order that they were created, and they'll all have the same globalTime (-1) so the " || -1" in the sort keeps the order properly.

      this.data.forEach(function (e) {
        return !(e instanceof Tween) && e.revert && e.revert(revert);
      });

      this._r.forEach(function (f) {
        return f(revert, _this4);
      });

      this.isReverted = true;
    } else {
      this.data.forEach(function (e) {
        return e.kill && e.kill();
      });
    }

    this.clear();

    if (matchMedia) {
      var i = _media.length;

      while (i--) {
        // previously, we checked _media.indexOf(this), but some frameworks like Vue enforce Proxy objects that make it impossible to get the proper result that way, so we must use a unique ID number instead.
        _media[i].id === this.id && _media.splice(i, 1);
      }
    }
  };

  _proto5.revert = function revert(config) {
    this.kill(config || {});
  };

  return Context;
}();

var MatchMedia = /*#__PURE__*/function () {
  function MatchMedia(scope) {
    this.contexts = [];
    this.scope = scope;
  }

  var _proto6 = MatchMedia.prototype;

  _proto6.add = function add(conditions, func, scope) {
    _isObject(conditions) || (conditions = {
      matches: conditions
    });
    var context = new Context(0, scope || this.scope),
        cond = context.conditions = {},
        mq,
        p,
        active;
    _context && !context.selector && (context.selector = _context.selector); // in case a context is created inside a context. Like a gsap.matchMedia() that's inside a scoped gsap.context()

    this.contexts.push(context);
    func = context.add("onMatch", func);
    context.queries = conditions;

    for (p in conditions) {
      if (p === "all") {
        active = 1;
      } else {
        mq = _win.matchMedia(conditions[p]);

        if (mq) {
          _media.indexOf(context) < 0 && _media.push(context);
          (cond[p] = mq.matches) && (active = 1);
          mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
        }
      }
    }

    active && func(context);
    return this;
  } // refresh() {
  // 	let time = _lastMediaTime,
  // 		media = _media;
  // 	_lastMediaTime = -1;
  // 	_media = this.contexts;
  // 	_onMediaChange();
  // 	_lastMediaTime = time;
  // 	_media = media;
  // }
  ;

  _proto6.revert = function revert(config) {
    this.kill(config || {});
  };

  _proto6.kill = function kill(revert) {
    this.contexts.forEach(function (c) {
      return c.kill(revert, true);
    });
  };

  return MatchMedia;
}();
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */


var _gsap = {
  registerPlugin: function registerPlugin() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    args.forEach(function (config) {
      return _createPlugin(config);
    });
  },
  timeline: function timeline(vars) {
    return new Timeline(vars);
  },
  getTweensOf: function getTweensOf(targets, onlyActive) {
    return _globalTimeline.getTweensOf(targets, onlyActive);
  },
  getProperty: function getProperty(target, property, unit, uncache) {
    _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in

    var getter = _getCache(target || {}).get,
        format = unit ? _passThrough : _numericIfPossible;

    unit === "native" && (unit = "");
    return !target ? target : !property ? function (property, unit, uncache) {
      return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
  },
  quickSetter: function quickSetter(target, property, unit) {
    target = toArray(target);

    if (target.length > 1) {
      var setters = target.map(function (t) {
        return gsap.quickSetter(t, property, unit);
      }),
          l = setters.length;
      return function (value) {
        var i = l;

        while (i--) {
          setters[i](value);
        }
      };
    }

    target = target[0] || {};

    var Plugin = _plugins[property],
        cache = _getCache(target),
        p = cache.harness && (cache.harness.aliases || {})[property] || property,
        // in case it's an alias, like "rotate" for "rotation".
    setter = Plugin ? function (value) {
      var p = new Plugin();
      _quickTween._pt = 0;
      p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
      p.render(1, p);
      _quickTween._pt && _renderPropTweens(1, _quickTween);
    } : cache.set(target, p);

    return Plugin ? setter : function (value) {
      return setter(target, p, unit ? value + unit : value, cache, 1);
    };
  },
  quickTo: function quickTo(target, property, vars) {
    var _merge2;

    var tween = gsap.to(target, _merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, _merge2), vars || {})),
        func = function func(value, start, startIsRelative) {
      return tween.resetTo(property, value, start, startIsRelative);
    };

    func.tween = tween;
    return func;
  },
  isTweening: function isTweening(targets) {
    return _globalTimeline.getTweensOf(targets, true).length > 0;
  },
  defaults: function defaults(value) {
    value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
    return _mergeDeep(_defaults, value || {});
  },
  config: function config(value) {
    return _mergeDeep(_config, value || {});
  },
  registerEffect: function registerEffect(_ref3) {
    var name = _ref3.name,
        effect = _ref3.effect,
        plugins = _ref3.plugins,
        defaults = _ref3.defaults,
        extendTimeline = _ref3.extendTimeline;
    (plugins || "").split(",").forEach(function (pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    });

    _effects[name] = function (targets, vars, tl) {
      return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
    };

    if (extendTimeline) {
      Timeline.prototype[name] = function (targets, vars, position) {
        return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
      };
    }
  },
  registerEase: function registerEase(name, ease) {
    _easeMap[name] = _parseEase(ease);
  },
  parseEase: function parseEase(ease, defaultEase) {
    return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
  },
  getById: function getById(id) {
    return _globalTimeline.getById(id);
  },
  exportRoot: function exportRoot(vars, includeDelayedCalls) {
    if (vars === void 0) {
      vars = {};
    }

    var tl = new Timeline(vars),
        child,
        next;
    tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

    _globalTimeline.remove(tl);

    tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).

    tl._time = tl._tTime = _globalTimeline._time;
    child = _globalTimeline._first;

    while (child) {
      next = child._next;

      if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
        _addToTimeline(tl, child, child._start - child._delay);
      }

      child = next;
    }

    _addToTimeline(_globalTimeline, tl, 0);

    return tl;
  },
  context: function context(func, scope) {
    return func ? new Context(func, scope) : _context;
  },
  matchMedia: function matchMedia(scope) {
    return new MatchMedia(scope);
  },
  matchMediaRefresh: function matchMediaRefresh() {
    return _media.forEach(function (c) {
      var cond = c.conditions,
          found,
          p;

      for (p in cond) {
        if (cond[p]) {
          cond[p] = false;
          found = 1;
        }
      }

      found && c.revert();
    }) || _onMediaChange();
  },
  addEventListener: function addEventListener(type, callback) {
    var a = _listeners[type] || (_listeners[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  },
  removeEventListener: function removeEventListener(type, callback) {
    var a = _listeners[type],
        i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
  },
  utils: {
    wrap: wrap,
    wrapYoyo: wrapYoyo,
    distribute: distribute,
    random: random,
    snap: snap,
    normalize: normalize,
    getUnit: getUnit,
    clamp: clamp,
    splitColor: splitColor,
    toArray: toArray,
    selector: selector,
    mapRange: mapRange,
    pipe: pipe,
    unitize: unitize,
    interpolate: interpolate,
    shuffle: shuffle
  },
  install: _install,
  effects: _effects,
  ticker: _ticker,
  updateRoot: Timeline.updateRoot,
  plugins: _plugins,
  globalTimeline: _globalTimeline,
  core: {
    PropTween: PropTween,
    globals: _addGlobal,
    Tween: Tween,
    Timeline: Timeline,
    Animation: Animation,
    getCache: _getCache,
    _removeLinkedListItem: _removeLinkedListItem,
    reverting: function reverting() {
      return _reverting;
    },
    context: function context(toAdd) {
      if (toAdd && _context) {
        _context.data.push(toAdd);

        toAdd._ctx = _context;
      }

      return _context;
    },
    suppressOverwrites: function suppressOverwrites(value) {
      return _suppressOverwrites = value;
    }
  }
};

_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
  return _gsap[name] = Tween[name];
});

_ticker.add(Timeline.updateRoot);

_quickTween = _gsap.to({}, {
  duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------

var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
  var pt = plugin._pt;

  while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
    pt = pt._next;
  }

  return pt;
},
    _addModifiers = function _addModifiers(tween, modifiers) {
  var targets = tween._targets,
      p,
      i,
      pt;

  for (p in modifiers) {
    i = targets.length;

    while (i--) {
      pt = tween._ptLookup[i][p];

      if (pt && (pt = pt.d)) {
        if (pt._pt) {
          // is a plugin
          pt = _getPluginPropTween(pt, p);
        }

        pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
      }
    }
  }
},
    _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
  return {
    name: name,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function init(target, vars, tween) {
      tween._onInit = function (tween) {
        var temp, p;

        if (_isString(vars)) {
          temp = {};

          _forEachName(vars, function (name) {
            return temp[name] = 1;
          }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.


          vars = temp;
        }

        if (modifier) {
          temp = {};

          for (p in vars) {
            temp[p] = modifier(vars[p]);
          }

          vars = temp;
        }

        _addModifiers(tween, vars);
      };
    }
  };
}; //register core plugins


var gsap = _gsap.registerPlugin({
  name: "attr",
  init: function init(target, vars, tween, index, targets) {
    var p, pt, v;
    this.tween = tween;

    for (p in vars) {
      v = target.getAttribute(p) || "";
      pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
      pt.op = p;
      pt.b = v; // record the beginning value so we can revert()

      this._props.push(p);
    }
  },
  render: function render(ratio, data) {
    var pt = data._pt;

    while (pt) {
      _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d); // if reverting, go back to the original (pt.b)

      pt = pt._next;
    }
  }
}, {
  name: "endArray",
  init: function init(target, value) {
    var i = value.length;

    while (i--) {
      this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
    }
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.

Tween.version = Timeline.version = gsap.version = "3.12.2";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0,
    Power1 = _easeMap.Power1,
    Power2 = _easeMap.Power2,
    Power3 = _easeMap.Power3,
    Power4 = _easeMap.Power4,
    Linear = _easeMap.Linear,
    Quad = _easeMap.Quad,
    Cubic = _easeMap.Cubic,
    Quart = _easeMap.Quart,
    Quint = _easeMap.Quint,
    Strong = _easeMap.Strong,
    Elastic = _easeMap.Elastic,
    Back = _easeMap.Back,
    SteppedEase = _easeMap.SteppedEase,
    Bounce = _easeMap.Bounce,
    Sine = _easeMap.Sine,
    Expo = _easeMap.Expo,
    Circ = _easeMap.Circ;

 //export some internal methods/orojects for use in CSSPlugin so that we can externalize that file and allow custom builds that exclude it.


;// CONCATENATED MODULE: ./node_modules/gsap/CSSPlugin.js
/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */


var CSSPlugin_win,
    CSSPlugin_doc,
    _docElement,
    _pluginInitted,
    _tempDiv,
    _tempDivStyler,
    _recentSetterPlugin,
    CSSPlugin_reverting,
    CSSPlugin_windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _transformProps = {},
    _RAD2DEG = 180 / Math.PI,
    _DEG2RAD = Math.PI / 180,
    _atan2 = Math.atan2,
    CSSPlugin_bigNum = 1e8,
    _capsExp = /([A-Z])/g,
    _horizontalExp = /(left|right|width|margin|padding|x)/i,
    _complexExp = /[\s,\(]\S/,
    _propertyAliases = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
},
    _renderCSSProp = function _renderCSSProp(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
  return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
  return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
},
    //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
  var value = data.s + data.c * ratio;
  data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
},
    _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
  return data.set(data.t, data.p, ratio ? data.e : data.b, data);
},
    _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
  return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
},
    _setterCSSStyle = function _setterCSSStyle(target, property, value) {
  return target.style[property] = value;
},
    _setterCSSProp = function _setterCSSProp(target, property, value) {
  return target.style.setProperty(property, value);
},
    _setterTransform = function _setterTransform(target, property, value) {
  return target._gsap[property] = value;
},
    _setterScale = function _setterScale(target, property, value) {
  return target._gsap.scaleX = target._gsap.scaleY = value;
},
    _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache.scaleX = cache.scaleY = value;
  cache.renderTransform(ratio, cache);
},
    _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache[property] = value;
  cache.renderTransform(ratio, cache);
},
    _transformProp = "transform",
    _transformOriginProp = _transformProp + "Origin",
    _saveStyle = function _saveStyle(property, isNotCSS) {
  var _this = this;

  var target = this.target,
      style = target.style;

  if (property in _transformProps && style) {
    this.tfm = this.tfm || {};

    if (property !== "transform") {
      property = _propertyAliases[property] || property;
      ~property.indexOf(",") ? property.split(",").forEach(function (a) {
        return _this.tfm[a] = _get(target, a);
      }) : this.tfm[property] = target._gsap.x ? target._gsap[property] : _get(target, property); // note: scale would map to "scaleX,scaleY", thus we loop and apply them both.
    } else {
      return _propertyAliases.transform.split(",").forEach(function (p) {
        return _saveStyle.call(_this, p, isNotCSS);
      });
    }

    if (this.props.indexOf(_transformProp) >= 0) {
      return;
    }

    if (target._gsap.svg) {
      this.svgo = target.getAttribute("data-svg-origin");
      this.props.push(_transformOriginProp, isNotCSS, "");
    }

    property = _transformProp;
  }

  (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
},
    _removeIndependentTransforms = function _removeIndependentTransforms(style) {
  if (style.translate) {
    style.removeProperty("translate");
    style.removeProperty("scale");
    style.removeProperty("rotate");
  }
},
    _revertStyle = function _revertStyle() {
  var props = this.props,
      target = this.target,
      style = target.style,
      cache = target._gsap,
      i,
      p;

  for (i = 0; i < props.length; i += 3) {
    // stored like this: property, isNotCSS, value
    props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
  }

  if (this.tfm) {
    for (p in this.tfm) {
      cache[p] = this.tfm[p];
    }

    if (cache.svg) {
      cache.renderTransform();
      target.setAttribute("data-svg-origin", this.svgo || "");
    }

    i = CSSPlugin_reverting();

    if ((!i || !i.isStart) && !style[_transformProp]) {
      _removeIndependentTransforms(style);

      cache.uncache = 1; // if it's a startAt that's being reverted in the _initTween() of the core, we don't need to uncache transforms. This is purely a performance optimization.
    }
  }
},
    _getStyleSaver = function _getStyleSaver(target, properties) {
  var saver = {
    target: target,
    props: [],
    revert: _revertStyle,
    save: _saveStyle
  };
  target._gsap || gsap.core.getCache(target); // just make sure there's a _gsap cache defined because we read from it in _saveStyle() and it's more efficient to just check it here once.

  properties && properties.split(",").forEach(function (p) {
    return saver.save(p);
  });
  return saver;
},
    _supports3D,
    _createElement = function _createElement(type, ns) {
  var e = CSSPlugin_doc.createElementNS ? CSSPlugin_doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : CSSPlugin_doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.

  return e.style ? e : CSSPlugin_doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
},
    _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
  var cs = getComputedStyle(target);
  return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
},
    _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
    _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
  var e = element || _tempDiv,
      s = e.style,
      i = 5;

  if (property in s && !preferPrefix) {
    return property;
  }

  property = property.charAt(0).toUpperCase() + property.substr(1);

  while (i-- && !(_prefixes[i] + property in s)) {}

  return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
},
    _initCore = function _initCore() {
  if (CSSPlugin_windowExists() && window.document) {
    CSSPlugin_win = window;
    CSSPlugin_doc = CSSPlugin_win.document;
    _docElement = CSSPlugin_doc.documentElement;
    _tempDiv = _createElement("div") || {
      style: {}
    };
    _tempDivStyler = _createElement("div");
    _transformProp = _checkPropPrefix(_transformProp);
    _transformOriginProp = _transformProp + "Origin";
    _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.

    _supports3D = !!_checkPropPrefix("perspective");
    CSSPlugin_reverting = gsap.core.reverting;
    _pluginInitted = 1;
  }
},
    _getBBoxHack = function _getBBoxHack(swapIfPossible) {
  //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
  var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      oldParent = this.parentNode,
      oldSibling = this.nextSibling,
      oldCSS = this.style.cssText,
      bbox;

  _docElement.appendChild(svg);

  svg.appendChild(this);
  this.style.display = "block";

  if (swapIfPossible) {
    try {
      bbox = this.getBBox();
      this._gsapBBox = this.getBBox; //store the original

      this.getBBox = _getBBoxHack;
    } catch (e) {}
  } else if (this._gsapBBox) {
    bbox = this._gsapBBox();
  }

  if (oldParent) {
    if (oldSibling) {
      oldParent.insertBefore(this, oldSibling);
    } else {
      oldParent.appendChild(this);
    }
  }

  _docElement.removeChild(svg);

  this.style.cssText = oldCSS;
  return bbox;
},
    _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
  var i = attributesArray.length;

  while (i--) {
    if (target.hasAttribute(attributesArray[i])) {
      return target.getAttribute(attributesArray[i]);
    }
  }
},
    _getBBox = function _getBBox(target) {
  var bounds;

  try {
    bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
  } catch (error) {
    bounds = _getBBoxHack.call(target, true);
  }

  bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.

  return bounds && !bounds.width && !bounds.x && !bounds.y ? {
    x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
    y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : bounds;
},
    _isSVG = function _isSVG(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
},
    //reports if the element is an SVG on which getBBox() actually works
_removeProperty = function _removeProperty(target, property) {
  if (property) {
    var style = target.style;

    if (property in _transformProps && property !== _transformOriginProp) {
      property = _transformProp;
    }

    if (style.removeProperty) {
      if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
        //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
        property = "-" + property;
      }

      style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
    } else {
      //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
      style.removeAttribute(property);
    }
  }
},
    _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
  var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
  plugin._pt = pt;
  pt.b = beginning;
  pt.e = end;

  plugin._props.push(property);

  return pt;
},
    _nonConvertibleUnits = {
  deg: 1,
  rad: 1,
  turn: 1
},
    _nonStandardLayouts = {
  grid: 1,
  flex: 1
},
    //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
_convertToUnit = function _convertToUnit(target, property, value, unit) {
  var curValue = parseFloat(value) || 0,
      curUnit = (value + "").trim().substr((curValue + "").length) || "px",
      // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
  style = _tempDiv.style,
      horizontal = _horizontalExp.test(property),
      isRootSVG = target.tagName.toLowerCase() === "svg",
      measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
      amount = 100,
      toPixels = unit === "px",
      toPercent = unit === "%",
      px,
      parent,
      cache,
      isSVG;

  if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
    return curValue;
  }

  curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
  isSVG = target.getCTM && _isSVG(target);

  if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
    px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
    return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
  }

  style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
  parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

  if (isSVG) {
    parent = (target.ownerSVGElement || {}).parentNode;
  }

  if (!parent || parent === CSSPlugin_doc || !parent.appendChild) {
    parent = CSSPlugin_doc.body;
  }

  cache = parent._gsap;

  if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
    return _round(curValue / cache.width * amount);
  } else {
    (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
    parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.

    parent.appendChild(_tempDiv);
    px = _tempDiv[measureProperty];
    parent.removeChild(_tempDiv);
    style.position = "absolute";

    if (horizontal && toPercent) {
      cache = _getCache(parent);
      cache.time = _ticker.time;
      cache.width = parent[measureProperty];
    }
  }

  return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
},
    _get = function _get(target, property, unit, uncache) {
  var value;
  _pluginInitted || _initCore();

  if (property in _propertyAliases && property !== "transform") {
    property = _propertyAliases[property];

    if (~property.indexOf(",")) {
      property = property.split(",")[0];
    }
  }

  if (_transformProps[property] && property !== "transform") {
    value = _parseTransform(target, uncache);
    value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
  } else {
    value = target.style[property];

    if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
      value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
    }
  }

  return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
},
    _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
  // note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  if (!start || start === "none") {
    // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://greensock.com/forums/topic/18310-clippath-doesnt-work-on-ios/
    var p = _checkPropPrefix(prop, target, 1),
        s = p && _getComputedProperty(target, p, 1);

    if (s && s !== start) {
      prop = p;
      start = s;
    } else if (prop === "borderColor") {
      start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://greensock.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
    }
  }

  var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString),
      index = 0,
      matchIndex = 0,
      a,
      result,
      startValues,
      startNum,
      color,
      startValue,
      endValue,
      endNum,
      chunk,
      endUnit,
      startUnit,
      endValues;
  pt.b = start;
  pt.e = end;
  start += ""; // ensure values are strings

  end += "";

  if (end === "auto") {
    target.style[prop] = end;
    end = _getComputedProperty(target, prop) || end;
    target.style[prop] = start;
  }

  a = [start, end];

  _colorStringFilter(a); // pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().


  start = a[0];
  end = a[1];
  startValues = start.match(_numWithUnitExp) || [];
  endValues = end.match(_numWithUnitExp) || [];

  if (endValues.length) {
    while (result = _numWithUnitExp.exec(end)) {
      endValue = result[0];
      chunk = end.substring(index, result.index);

      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
        color = 1;
      }

      if (endValue !== (startValue = startValues[matchIndex++] || "")) {
        startNum = parseFloat(startValue) || 0;
        startUnit = startValue.substr((startNum + "").length);
        endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
        endNum = parseFloat(endValue);
        endUnit = endValue.substr((endNum + "").length);
        index = _numWithUnitExp.lastIndex - endUnit.length;

        if (!endUnit) {
          //if something like "perspective:300" is passed in and we must add a unit to the end
          endUnit = endUnit || _config.units[prop] || startUnit;

          if (index === end.length) {
            end += endUnit;
            pt.e += endUnit;
          }
        }

        if (startUnit !== endUnit) {
          startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
        } // these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.


        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum - startNum,
          m: color && color < 4 || prop === "zIndex" ? Math.round : 0
        };
      }
    }

    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
  } else {
    pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
  }

  _relExp.test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _keywordToPercent = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
},
    _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
  var split = value.split(" "),
      x = split[0],
      y = split[1] || "50%";

  if (x === "top" || x === "bottom" || y === "left" || y === "right") {
    //the user provided them in the wrong order, so flip them
    value = x;
    x = y;
    y = value;
  }

  split[0] = _keywordToPercent[x] || x;
  split[1] = _keywordToPercent[y] || y;
  return split.join(" ");
},
    _renderClearProps = function _renderClearProps(ratio, data) {
  if (data.tween && data.tween._time === data.tween._dur) {
    var target = data.t,
        style = target.style,
        props = data.u,
        cache = target._gsap,
        prop,
        clearTransforms,
        i;

    if (props === "all" || props === true) {
      style.cssText = "";
      clearTransforms = 1;
    } else {
      props = props.split(",");
      i = props.length;

      while (--i > -1) {
        prop = props[i];

        if (_transformProps[prop]) {
          clearTransforms = 1;
          prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
        }

        _removeProperty(target, prop);
      }
    }

    if (clearTransforms) {
      _removeProperty(target, _transformProp);

      if (cache) {
        cache.svg && target.removeAttribute("transform");

        _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.


        cache.uncache = 1;

        _removeIndependentTransforms(style);
      }
    }
  }
},
    // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
_specialProps = {
  clearProps: function clearProps(plugin, target, property, endValue, tween) {
    if (tween.data !== "isFromStart") {
      var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
      pt.u = endValue;
      pt.pr = -10;
      pt.tween = tween;

      plugin._props.push(property);

      return 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */

},

/*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */
_identity2DMatrix = [1, 0, 0, 1, 0, 0],
    _rotationalProperties = {},
    _isNullTransform = function _isNullTransform(value) {
  return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
},
    _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
  var matrixString = _getComputedProperty(target, _transformProp);

  return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
},
    _getMatrix = function _getMatrix(target, force2D) {
  var cache = target._gsap || _getCache(target),
      style = target.style,
      matrix = _getComputedTransformMatrixAsArray(target),
      parent,
      nextSibling,
      temp,
      addedToDOM;

  if (cache.svg && target.getAttribute("transform")) {
    temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.

    matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
    return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
  } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
    //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
    temp = style.display;
    style.display = "block";
    parent = target.parentNode;

    if (!parent || !target.offsetParent) {
      // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
      addedToDOM = 1; //flag

      nextSibling = target.nextElementSibling;

      _docElement.appendChild(target); //we must add it to the DOM in order to get values properly

    }

    matrix = _getComputedTransformMatrixAsArray(target);
    temp ? style.display = temp : _removeProperty(target, "display");

    if (addedToDOM) {
      nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
  }

  return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
},
    _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
  var cache = target._gsap,
      matrix = matrixArray || _getMatrix(target, true),
      xOriginOld = cache.xOrigin || 0,
      yOriginOld = cache.yOrigin || 0,
      xOffsetOld = cache.xOffset || 0,
      yOffsetOld = cache.yOffset || 0,
      a = matrix[0],
      b = matrix[1],
      c = matrix[2],
      d = matrix[3],
      tx = matrix[4],
      ty = matrix[5],
      originSplit = origin.split(" "),
      xOrigin = parseFloat(originSplit[0]) || 0,
      yOrigin = parseFloat(originSplit[1]) || 0,
      bounds,
      determinant,
      x,
      y;

  if (!originIsAbsolute) {
    bounds = _getBBox(target);
    xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
    yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
  } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
    //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
    x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
    y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
    xOrigin = x;
    yOrigin = y;
  }

  if (smooth || smooth !== false && cache.smooth) {
    tx = xOrigin - xOriginOld;
    ty = yOrigin - yOriginOld;
    cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
    cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
  } else {
    cache.xOffset = cache.yOffset = 0;
  }

  cache.xOrigin = xOrigin;
  cache.yOrigin = yOrigin;
  cache.smooth = !!smooth;
  cache.origin = origin;
  cache.originIsAbsolute = !!originIsAbsolute;
  target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).

  if (pluginToAddPropTweensTo) {
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
  }

  target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
},
    _parseTransform = function _parseTransform(target, uncache) {
  var cache = target._gsap || new GSCache(target);

  if ("x" in cache && !uncache && !cache.uncache) {
    return cache;
  }

  var style = target.style,
      invertedScaleX = cache.scaleX < 0,
      px = "px",
      deg = "deg",
      cs = getComputedStyle(target),
      origin = _getComputedProperty(target, _transformOriginProp) || "0",
      x,
      y,
      z,
      scaleX,
      scaleY,
      rotation,
      rotationX,
      rotationY,
      skewX,
      skewY,
      perspective,
      xOrigin,
      yOrigin,
      matrix,
      angle,
      cos,
      sin,
      a,
      b,
      c,
      d,
      a12,
      a22,
      t1,
      t2,
      t3,
      a13,
      a23,
      a33,
      a42,
      a43,
      a32;
  x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
  scaleX = scaleY = 1;
  cache.svg = !!(target.getCTM && _isSVG(target));

  if (cs.translate) {
    // accommodate independent transforms by combining them into normal ones.
    if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
      style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
    }

    style.scale = style.rotate = style.translate = "none";
  }

  matrix = _getMatrix(target, cache.svg);

  if (cache.svg) {
    if (cache.uncache) {
      // if cache.uncache is true (and maybe if origin is 0,0), we need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Previously we let the data-svg-origin stay instead, but when introducing revert(), it complicated things.
      t2 = target.getBBox();
      origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
      t1 = "";
    } else {
      t1 = !uncache && target.getAttribute("data-svg-origin"); //  Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.
    }

    _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
  }

  xOrigin = cache.xOrigin || 0;
  yOrigin = cache.yOrigin || 0;

  if (matrix !== _identity2DMatrix) {
    a = matrix[0]; //a11

    b = matrix[1]; //a21

    c = matrix[2]; //a31

    d = matrix[3]; //a41

    x = a12 = matrix[4];
    y = a22 = matrix[5]; //2D matrix

    if (matrix.length === 6) {
      scaleX = Math.sqrt(a * a + b * b);
      scaleY = Math.sqrt(d * d + c * c);
      rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).

      skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
      skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));

      if (cache.svg) {
        x -= xOrigin - (xOrigin * a + yOrigin * c);
        y -= yOrigin - (xOrigin * b + yOrigin * d);
      } //3D matrix

    } else {
      a32 = matrix[6];
      a42 = matrix[7];
      a13 = matrix[8];
      a23 = matrix[9];
      a33 = matrix[10];
      a43 = matrix[11];
      x = matrix[12];
      y = matrix[13];
      z = matrix[14];
      angle = _atan2(a32, a33);
      rotationX = angle * _RAD2DEG; //rotationX

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a12 * cos + a13 * sin;
        t2 = a22 * cos + a23 * sin;
        t3 = a32 * cos + a33 * sin;
        a13 = a12 * -sin + a13 * cos;
        a23 = a22 * -sin + a23 * cos;
        a33 = a32 * -sin + a33 * cos;
        a43 = a42 * -sin + a43 * cos;
        a12 = t1;
        a22 = t2;
        a32 = t3;
      } //rotationY


      angle = _atan2(-c, a33);
      rotationY = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a * cos - a13 * sin;
        t2 = b * cos - a23 * sin;
        t3 = c * cos - a33 * sin;
        a43 = d * sin + a43 * cos;
        a = t1;
        b = t2;
        c = t3;
      } //rotationZ


      angle = _atan2(b, a);
      rotation = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        t1 = a * cos + b * sin;
        t2 = a12 * cos + a22 * sin;
        b = b * cos - a * sin;
        a22 = a22 * cos - a12 * sin;
        a = t1;
        a12 = t2;
      }

      if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
        //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
        rotationX = rotation = 0;
        rotationY = 180 - rotationY;
      }

      scaleX = _round(Math.sqrt(a * a + b * b + c * c));
      scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
      angle = _atan2(a12, a22);
      skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
      perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
    }

    if (cache.svg) {
      //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
      t1 = target.getAttribute("transform");
      cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
      t1 && target.setAttribute("transform", t1);
    }
  }

  if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
    if (invertedScaleX) {
      scaleX *= -1;
      skewX += rotation <= 0 ? 180 : -180;
      rotation += rotation <= 0 ? 180 : -180;
    } else {
      scaleY *= -1;
      skewX += skewX <= 0 ? 180 : -180;
    }
  }

  uncache = uncache || cache.uncache;
  cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
  cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
  cache.z = z + px;
  cache.scaleX = _round(scaleX);
  cache.scaleY = _round(scaleY);
  cache.rotation = _round(rotation) + deg;
  cache.rotationX = _round(rotationX) + deg;
  cache.rotationY = _round(rotationY) + deg;
  cache.skewX = skewX + deg;
  cache.skewY = skewY + deg;
  cache.transformPerspective = perspective + px;

  if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
    style[_transformOriginProp] = _firstTwoOnly(origin);
  }

  cache.xOffset = cache.yOffset = 0;
  cache.force3D = _config.force3D;
  cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
  cache.uncache = 0;
  return cache;
},
    _firstTwoOnly = function _firstTwoOnly(value) {
  return (value = value.split(" "))[0] + " " + value[1];
},
    //for handling transformOrigin values, stripping out the 3rd dimension
_addPxTranslate = function _addPxTranslate(target, start, value) {
  var unit = getUnit(start);
  return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
},
    _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
  cache.z = "0px";
  cache.rotationY = cache.rotationX = "0deg";
  cache.force3D = 0;

  _renderCSSTransforms(ratio, cache);
},
    _zeroDeg = "0deg",
    _zeroPx = "0px",
    _endParenthesis = ") ",
    _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
  var _ref = cache || this,
      xPercent = _ref.xPercent,
      yPercent = _ref.yPercent,
      x = _ref.x,
      y = _ref.y,
      z = _ref.z,
      rotation = _ref.rotation,
      rotationY = _ref.rotationY,
      rotationX = _ref.rotationX,
      skewX = _ref.skewX,
      skewY = _ref.skewY,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      transformPerspective = _ref.transformPerspective,
      force3D = _ref.force3D,
      target = _ref.target,
      zOrigin = _ref.zOrigin,
      transforms = "",
      use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)


  if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
    var angle = parseFloat(rotationY) * _DEG2RAD,
        a13 = Math.sin(angle),
        a33 = Math.cos(angle),
        cos;

    angle = parseFloat(rotationX) * _DEG2RAD;
    cos = Math.cos(angle);
    x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
    y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
    z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
  }

  if (transformPerspective !== _zeroPx) {
    transforms += "perspective(" + transformPerspective + _endParenthesis;
  }

  if (xPercent || yPercent) {
    transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
  }

  if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
    transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
  }

  if (rotation !== _zeroDeg) {
    transforms += "rotate(" + rotation + _endParenthesis;
  }

  if (rotationY !== _zeroDeg) {
    transforms += "rotateY(" + rotationY + _endParenthesis;
  }

  if (rotationX !== _zeroDeg) {
    transforms += "rotateX(" + rotationX + _endParenthesis;
  }

  if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
    transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
  }

  if (scaleX !== 1 || scaleY !== 1) {
    transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
  }

  target.style[_transformProp] = transforms || "translate(0, 0)";
},
    _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
  var _ref2 = cache || this,
      xPercent = _ref2.xPercent,
      yPercent = _ref2.yPercent,
      x = _ref2.x,
      y = _ref2.y,
      rotation = _ref2.rotation,
      skewX = _ref2.skewX,
      skewY = _ref2.skewY,
      scaleX = _ref2.scaleX,
      scaleY = _ref2.scaleY,
      target = _ref2.target,
      xOrigin = _ref2.xOrigin,
      yOrigin = _ref2.yOrigin,
      xOffset = _ref2.xOffset,
      yOffset = _ref2.yOffset,
      forceCSS = _ref2.forceCSS,
      tx = parseFloat(x),
      ty = parseFloat(y),
      a11,
      a21,
      a12,
      a22,
      temp;

  rotation = parseFloat(rotation);
  skewX = parseFloat(skewX);
  skewY = parseFloat(skewY);

  if (skewY) {
    //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
    skewY = parseFloat(skewY);
    skewX += skewY;
    rotation += skewY;
  }

  if (rotation || skewX) {
    rotation *= _DEG2RAD;
    skewX *= _DEG2RAD;
    a11 = Math.cos(rotation) * scaleX;
    a21 = Math.sin(rotation) * scaleX;
    a12 = Math.sin(rotation - skewX) * -scaleY;
    a22 = Math.cos(rotation - skewX) * scaleY;

    if (skewX) {
      skewY *= _DEG2RAD;
      temp = Math.tan(skewX - skewY);
      temp = Math.sqrt(1 + temp * temp);
      a12 *= temp;
      a22 *= temp;

      if (skewY) {
        temp = Math.tan(skewY);
        temp = Math.sqrt(1 + temp * temp);
        a11 *= temp;
        a21 *= temp;
      }
    }

    a11 = _round(a11);
    a21 = _round(a21);
    a12 = _round(a12);
    a22 = _round(a22);
  } else {
    a11 = scaleX;
    a22 = scaleY;
    a21 = a12 = 0;
  }

  if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
    tx = _convertToUnit(target, "x", x, "px");
    ty = _convertToUnit(target, "y", y, "px");
  }

  if (xOrigin || yOrigin || xOffset || yOffset) {
    tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
    ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
  }

  if (xPercent || yPercent) {
    //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
    temp = target.getBBox();
    tx = _round(tx + xPercent / 100 * temp.width);
    ty = _round(ty + yPercent / 100 * temp.height);
  }

  temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
  target.setAttribute("transform", temp);
  forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the transform attribute changes!)
},
    _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
  var cap = 360,
      isString = _isString(endValue),
      endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
      change = endNum - startNum,
      finalValue = startNum + change + "deg",
      direction,
      pt;

  if (isString) {
    direction = endValue.split("_")[1];

    if (direction === "short") {
      change %= cap;

      if (change !== change % (cap / 2)) {
        change += change < 0 ? cap : -cap;
      }
    }

    if (direction === "cw" && change < 0) {
      change = (change + cap * CSSPlugin_bigNum) % cap - ~~(change / cap) * cap;
    } else if (direction === "ccw" && change > 0) {
      change = (change - cap * CSSPlugin_bigNum) % cap - ~~(change / cap) * cap;
    }
  }

  plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
  pt.e = finalValue;
  pt.u = "deg";

  plugin._props.push(property);

  return pt;
},
    _assign = function _assign(target, source) {
  // Internet Explorer doesn't have Object.assign(), so we recreate it here.
  for (var p in source) {
    target[p] = source[p];
  }

  return target;
},
    _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
  //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
  var startCache = _assign({}, target._gsap),
      exclude = "perspective,force3D,transformOrigin,svgOrigin",
      style = target.style,
      endCache,
      p,
      startValue,
      endValue,
      startNum,
      endNum,
      startUnit,
      endUnit;

  if (startCache.svg) {
    startValue = target.getAttribute("transform");
    target.setAttribute("transform", "");
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);

    _removeProperty(target, _transformProp);

    target.setAttribute("transform", startValue);
  } else {
    startValue = getComputedStyle(target)[_transformProp];
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);
    style[_transformProp] = startValue;
  }

  for (p in _transformProps) {
    startValue = startCache[p];
    endValue = endCache[p];

    if (startValue !== endValue && exclude.indexOf(p) < 0) {
      //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
      startUnit = getUnit(startValue);
      endUnit = getUnit(endValue);
      startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
      endNum = parseFloat(endValue);
      plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
      plugin._pt.u = endUnit || 0;

      plugin._props.push(p);
    }
  }

  _assign(endCache, startCache);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.


_forEachName("padding,margin,Width,Radius", function (name, index) {
  var t = "Top",
      r = "Right",
      b = "Bottom",
      l = "Left",
      props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
    return index < 2 ? name + side : "border" + side + name;
  });

  _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
    var a, vars;

    if (arguments.length < 4) {
      // getter, passed target, property, and unit (from _get())
      a = props.map(function (prop) {
        return _get(plugin, prop, property);
      });
      vars = a.join(" ");
      return vars.split(a[0]).length === 5 ? a[0] : vars;
    }

    a = (endValue + "").split(" ");
    vars = {};
    props.forEach(function (prop, i) {
      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
    });
    plugin.init(target, vars, tween);
  };
});

var CSSPlugin = {
  name: "css",
  register: _initCore,
  targetTest: function targetTest(target) {
    return target.style && target.nodeType;
  },
  init: function init(target, vars, tween, index, targets) {
    var props = this._props,
        style = target.style,
        startAt = tween.vars.startAt,
        startValue,
        endValue,
        endNum,
        startNum,
        type,
        specialProp,
        p,
        startUnit,
        endUnit,
        relative,
        isTransformRelated,
        transformPropTween,
        cache,
        smooth,
        hasPriority,
        inlineProps;
    _pluginInitted || _initCore(); // we may call init() multiple times on the same plugin instance, like when adding special properties, so make sure we don't overwrite the revert data or inlineProps

    this.styles = this.styles || _getStyleSaver(target);
    inlineProps = this.styles.props;
    this.tween = tween;

    for (p in vars) {
      if (p === "autoRound") {
        continue;
      }

      endValue = vars[p];

      if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
        // plugins
        continue;
      }

      type = typeof endValue;
      specialProp = _specialProps[p];

      if (type === "function") {
        endValue = endValue.call(tween, index, target, targets);
        type = typeof endValue;
      }

      if (type === "string" && ~endValue.indexOf("random(")) {
        endValue = _replaceRandom(endValue);
      }

      if (specialProp) {
        specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
      } else if (p.substr(0, 2) === "--") {
        //CSS variable
        startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
        endValue += "";
        _colorExp.lastIndex = 0;

        if (!_colorExp.test(startValue)) {
          // colors don't have units
          startUnit = getUnit(startValue);
          endUnit = getUnit(endValue);
        }

        endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
        this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
        props.push(p);
        inlineProps.push(p, 0, style[p]);
      } else if (type !== "undefined") {
        if (startAt && p in startAt) {
          // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
          startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
          _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
          getUnit(startValue + "") || (startValue += _config.units[p] || getUnit(_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.

          (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
        } else {
          startValue = _get(target, p);
        }

        startNum = parseFloat(startValue);
        relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
        relative && (endValue = endValue.substr(2));
        endNum = parseFloat(endValue);

        if (p in _propertyAliases) {
          if (p === "autoAlpha") {
            //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
              //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
              startNum = 0;
            }

            inlineProps.push("visibility", 0, style.visibility);

            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
          }

          if (p !== "scale" && p !== "transform") {
            p = _propertyAliases[p];
            ~p.indexOf(",") && (p = p.split(",")[0]);
          }
        }

        isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---

        if (isTransformRelated) {
          this.styles.save(p);

          if (!transformPropTween) {
            cache = target._gsap;
            cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.

            smooth = vars.smoothOrigin !== false && cache.smooth;
            transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)

            transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
          }

          if (p === "scale") {
            this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
            this._pt.u = 0;
            props.push("scaleY", p);
            p += "X";
          } else if (p === "transformOrigin") {
            inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
            endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.

            if (cache.svg) {
              _applySVGOrigin(target, endValue, 0, smooth, 0, this);
            } else {
              endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!

              endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

              _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
            }

            continue;
          } else if (p === "svgOrigin") {
            _applySVGOrigin(target, endValue, 1, smooth, 0, this);

            continue;
          } else if (p in _rotationalProperties) {
            _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);

            continue;
          } else if (p === "smoothOrigin") {
            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

            continue;
          } else if (p === "force3D") {
            cache[p] = endValue;
            continue;
          } else if (p === "transform") {
            _addRawTransformPTs(this, endValue, target);

            continue;
          }
        } else if (!(p in style)) {
          p = _checkPropPrefix(p) || p;
        }

        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
          startUnit = (startValue + "").substr((startNum + "").length);
          endNum || (endNum = 0); // protect against NaN

          endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
          startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
          this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
          this._pt.u = endUnit || 0;

          if (startUnit !== endUnit && endUnit !== "%") {
            //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
            this._pt.b = startValue;
            this._pt.r = _renderCSSPropWithBeginning;
          }
        } else if (!(p in style)) {
          if (p in target) {
            //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
            this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
          } else if (p !== "parseTransform") {
            _missingPlugin(p, endValue);

            continue;
          }
        } else {
          _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
        }

        isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
        props.push(p);
      }
    }

    hasPriority && _sortPropTweensByPriority(this);
  },
  render: function render(ratio, data) {
    if (data.tween._time || !CSSPlugin_reverting()) {
      var pt = data._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
    } else {
      data.styles.revert();
    }
  },
  get: _get,
  aliases: _propertyAliases,
  getSetter: function getSetter(target, property, plugin) {
    //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
    var p = _propertyAliases[property];
    p && p.indexOf(",") < 0 && (property = p);
    return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
  },
  core: {
    _removeProperty: _removeProperty,
    _getMatrix: _getMatrix
  }
};
gsap.utils.checkPrefix = _checkPropPrefix;
gsap.core.getStyleSaver = _getStyleSaver;

(function (positionAndScale, rotation, others, aliases) {
  var all = _forEachName(positionAndScale + "," + rotation + "," + others, function (name) {
    _transformProps[name] = 1;
  });

  _forEachName(rotation, function (name) {
    _config.units[name] = "deg";
    _rotationalProperties[name] = 1;
  });

  _propertyAliases[all[13]] = positionAndScale + "," + rotation;

  _forEachName(aliases, function (name) {
    var split = name.split(":");
    _propertyAliases[split[1]] = all[split[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

_forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
  _config.units[name] = "px";
});

gsap.registerPlugin(CSSPlugin);

;// CONCATENATED MODULE: ./node_modules/gsap/index.js


var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap,
    // to protect from tree shaking
TweenMaxWithCSS = gsapWithCSS.core.Tween;

;// CONCATENATED MODULE: ./node_modules/gsap/Observer.js
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var Observer_gsap,
    Observer_coreInitted,
    Observer_clamp,
    Observer_win,
    Observer_doc,
    _docEl,
    _body,
    _isTouch,
    _pointerType,
    ScrollTrigger,
    _root,
    _normalizer,
    _eventTypes,
    Observer_context,
    _getGSAP = function _getGSAP() {
  return Observer_gsap || typeof window !== "undefined" && (Observer_gsap = window.gsap) && Observer_gsap.registerPlugin && Observer_gsap;
},
    _startup = 1,
    _observers = [],
    _scrollers = [],
    _proxies = [],
    _getTime = Date.now,
    _bridge = function _bridge(name, value) {
  return value;
},
    _integrate = function _integrate() {
  var core = ScrollTrigger.core,
      data = core.bridge || {},
      scrollers = core._scrollers,
      proxies = core._proxies;
  scrollers.push.apply(scrollers, _scrollers);
  proxies.push.apply(proxies, _proxies);
  _scrollers = scrollers;
  _proxies = proxies;

  _bridge = function _bridge(name, value) {
    return data[name](value);
  };
},
    _getProxyProp = function _getProxyProp(element, property) {
  return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
},
    _isViewport = function _isViewport(el) {
  return !!~_root.indexOf(el);
},
    _addListener = function _addListener(element, type, func, nonPassive, capture) {
  return element.addEventListener(type, func, {
    passive: !nonPassive,
    capture: !!capture
  });
},
    _removeListener = function _removeListener(element, type, func, capture) {
  return element.removeEventListener(type, func, !!capture);
},
    _scrollLeft = "scrollLeft",
    _scrollTop = "scrollTop",
    _onScroll = function _onScroll() {
  return _normalizer && _normalizer.isPressed || _scrollers.cache++;
},
    _scrollCacheFunc = function _scrollCacheFunc(f, doNotCache) {
  var cachingFunc = function cachingFunc(value) {
    // since reading the scrollTop/scrollLeft/pageOffsetY/pageOffsetX can trigger a layout, this function allows us to cache the value so it only gets read fresh after a "scroll" event fires (or while we're refreshing because that can lengthen the page and alter the scroll position). when "soft" is true, that means don't actually set the scroll, but cache the new value instead (useful in ScrollSmoother)
    if (value || value === 0) {
      _startup && (Observer_win.history.scrollRestoration = "manual"); // otherwise the new position will get overwritten by the browser onload.

      var isNormalizing = _normalizer && _normalizer.isPressed;
      value = cachingFunc.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0); //TODO: iOS Bug: if you allow it to go to 0, Safari can start to report super strange (wildly inaccurate) touch positions!

      f(value);
      cachingFunc.cacheID = _scrollers.cache;
      isNormalizing && _bridge("ss", value); // set scroll (notify ScrollTrigger so it can dispatch a "scrollStart" event if necessary
    } else if (doNotCache || _scrollers.cache !== cachingFunc.cacheID || _bridge("ref")) {
      cachingFunc.cacheID = _scrollers.cache;
      cachingFunc.v = f();
    }

    return cachingFunc.v + cachingFunc.offset;
  };

  cachingFunc.offset = 0;
  return f && cachingFunc;
},
    _horizontal = {
  s: _scrollLeft,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: _scrollCacheFunc(function (value) {
    return arguments.length ? Observer_win.scrollTo(value, _vertical.sc()) : Observer_win.pageXOffset || Observer_doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
  })
},
    _vertical = {
  s: _scrollTop,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: _horizontal,
  sc: _scrollCacheFunc(function (value) {
    return arguments.length ? Observer_win.scrollTo(_horizontal.sc(), value) : Observer_win.pageYOffset || Observer_doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
  })
},
    _getTarget = function _getTarget(t, self) {
  return (self && self._ctx && self._ctx.selector || Observer_gsap.utils.toArray)(t)[0] || (typeof t === "string" && Observer_gsap.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
},
    _getScrollFunc = function _getScrollFunc(element, _ref) {
  var s = _ref.s,
      sc = _ref.sc;
  // we store the scroller functions in an alternating sequenced Array like [element, verticalScrollFunc, horizontalScrollFunc, ...] so that we can minimize memory, maximize performance, and we also record the last position as a ".rec" property in order to revert to that after refreshing to ensure things don't shift around.
  _isViewport(element) && (element = Observer_doc.scrollingElement || _docEl);

  var i = _scrollers.indexOf(element),
      offset = sc === _vertical.sc ? 1 : 2;

  !~i && (i = _scrollers.push(element) - 1);
  _scrollers[i + offset] || _addListener(element, "scroll", _onScroll); // clear the cache when a scroll occurs

  var prev = _scrollers[i + offset],
      func = prev || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function (value) {
    return arguments.length ? element[s] = value : element[s];
  })));
  func.target = element;
  prev || (func.smooth = Observer_gsap.getProperty(element, "scrollBehavior") === "smooth"); // only set it the first time (don't reset every time a scrollFunc is requested because perhaps it happens during a refresh() when it's disabled in ScrollTrigger.

  return func;
},
    _getVelocityProp = function _getVelocityProp(value, minTimeRefresh, useDelta) {
  var v1 = value,
      v2 = value,
      t1 = _getTime(),
      t2 = t1,
      min = minTimeRefresh || 50,
      dropToZeroTime = Math.max(500, min * 3),
      update = function update(value, force) {
    var t = _getTime();

    if (force || t - t1 > min) {
      v2 = v1;
      v1 = value;
      t2 = t1;
      t1 = t;
    } else if (useDelta) {
      v1 += value;
    } else {
      // not totally necessary, but makes it a bit more accurate by adjusting the v1 value according to the new slope. This way we're not just ignoring the incoming data. Removing for now because it doesn't seem to make much practical difference and it's probably not worth the kb.
      v1 = v2 + (value - v2) / (t - t2) * (t1 - t2);
    }
  },
      reset = function reset() {
    v2 = v1 = useDelta ? 0 : v1;
    t2 = t1 = 0;
  },
      getVelocity = function getVelocity(latestValue) {
    var tOld = t2,
        vOld = v2,
        t = _getTime();

    (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
    return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1000;
  };

  return {
    update: update,
    reset: reset,
    getVelocity: getVelocity
  };
},
    _getEvent = function _getEvent(e, preventDefault) {
  preventDefault && !e._gsapAllow && e.preventDefault();
  return e.changedTouches ? e.changedTouches[0] : e;
},
    _getAbsoluteMax = function _getAbsoluteMax(a) {
  var max = Math.max.apply(Math, a),
      min = Math.min.apply(Math, a);
  return Math.abs(max) >= Math.abs(min) ? max : min;
},
    _setScrollTrigger = function _setScrollTrigger() {
  ScrollTrigger = Observer_gsap.core.globals().ScrollTrigger;
  ScrollTrigger && ScrollTrigger.core && _integrate();
},
    Observer_initCore = function _initCore(core) {
  Observer_gsap = core || _getGSAP();

  if (Observer_gsap && typeof document !== "undefined" && document.body) {
    Observer_win = window;
    Observer_doc = document;
    _docEl = Observer_doc.documentElement;
    _body = Observer_doc.body;
    _root = [Observer_win, Observer_doc, _docEl, _body];
    Observer_clamp = Observer_gsap.utils.clamp;

    Observer_context = Observer_gsap.core.context || function () {};

    _pointerType = "onpointerenter" in _body ? "pointer" : "mouse"; // isTouch is 0 if no touch, 1 if ONLY touch, and 2 if it can accommodate touch but also other types like mouse/pointer.

    _isTouch = Observer.isTouch = Observer_win.matchMedia && Observer_win.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Observer_win || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
    _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
    setTimeout(function () {
      return _startup = 0;
    }, 500);

    _setScrollTrigger();

    Observer_coreInitted = 1;
  }

  return Observer_coreInitted;
};

_horizontal.op = _vertical;
_scrollers.cache = 0;
var Observer = /*#__PURE__*/function () {
  function Observer(vars) {
    this.init(vars);
  }

  var _proto = Observer.prototype;

  _proto.init = function init(vars) {
    Observer_coreInitted || Observer_initCore(Observer_gsap) || console.warn("Please gsap.registerPlugin(Observer)");
    ScrollTrigger || _setScrollTrigger();
    var tolerance = vars.tolerance,
        dragMinimum = vars.dragMinimum,
        type = vars.type,
        target = vars.target,
        lineHeight = vars.lineHeight,
        debounce = vars.debounce,
        preventDefault = vars.preventDefault,
        onStop = vars.onStop,
        onStopDelay = vars.onStopDelay,
        ignore = vars.ignore,
        wheelSpeed = vars.wheelSpeed,
        event = vars.event,
        onDragStart = vars.onDragStart,
        onDragEnd = vars.onDragEnd,
        onDrag = vars.onDrag,
        onPress = vars.onPress,
        onRelease = vars.onRelease,
        onRight = vars.onRight,
        onLeft = vars.onLeft,
        onUp = vars.onUp,
        onDown = vars.onDown,
        onChangeX = vars.onChangeX,
        onChangeY = vars.onChangeY,
        onChange = vars.onChange,
        onToggleX = vars.onToggleX,
        onToggleY = vars.onToggleY,
        onHover = vars.onHover,
        onHoverEnd = vars.onHoverEnd,
        onMove = vars.onMove,
        ignoreCheck = vars.ignoreCheck,
        isNormalizer = vars.isNormalizer,
        onGestureStart = vars.onGestureStart,
        onGestureEnd = vars.onGestureEnd,
        onWheel = vars.onWheel,
        onEnable = vars.onEnable,
        onDisable = vars.onDisable,
        onClick = vars.onClick,
        scrollSpeed = vars.scrollSpeed,
        capture = vars.capture,
        allowClicks = vars.allowClicks,
        lockAxis = vars.lockAxis,
        onLockAxis = vars.onLockAxis;
    this.target = target = _getTarget(target) || _docEl;
    this.vars = vars;
    ignore && (ignore = Observer_gsap.utils.toArray(ignore));
    tolerance = tolerance || 1e-9;
    dragMinimum = dragMinimum || 0;
    wheelSpeed = wheelSpeed || 1;
    scrollSpeed = scrollSpeed || 1;
    type = type || "wheel,touch,pointer";
    debounce = debounce !== false;
    lineHeight || (lineHeight = parseFloat(Observer_win.getComputedStyle(_body).lineHeight) || 22); // note: browser may report "normal", so default to 22.

    var id,
        onStopDelayedCall,
        dragged,
        moved,
        wheeled,
        locked,
        axis,
        self = this,
        prevDeltaX = 0,
        prevDeltaY = 0,
        scrollFuncX = _getScrollFunc(target, _horizontal),
        scrollFuncY = _getScrollFunc(target, _vertical),
        scrollX = scrollFuncX(),
        scrollY = scrollFuncY(),
        limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown",
        // for devices that accommodate mouse events and touch events, we need to distinguish.
    isViewport = _isViewport(target),
        ownerDoc = target.ownerDocument || Observer_doc,
        deltaX = [0, 0, 0],
        // wheel, scroll, pointer/touch
    deltaY = [0, 0, 0],
        onClickTime = 0,
        clickCapture = function clickCapture() {
      return onClickTime = _getTime();
    },
        _ignoreCheck = function _ignoreCheck(e, isPointerOrTouch) {
      return (self.event = e) && ignore && ~ignore.indexOf(e.target) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
    },
        onStopFunc = function onStopFunc() {
      self._vx.reset();

      self._vy.reset();

      onStopDelayedCall.pause();
      onStop && onStop(self);
    },
        update = function update() {
      var dx = self.deltaX = _getAbsoluteMax(deltaX),
          dy = self.deltaY = _getAbsoluteMax(deltaY),
          changedX = Math.abs(dx) >= tolerance,
          changedY = Math.abs(dy) >= tolerance;

      onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY); // in ScrollTrigger.normalizeScroll(), we need to know if it was touch/pointer so we need access to the deltaX/deltaY Arrays before we clear them out.

      if (changedX) {
        onRight && self.deltaX > 0 && onRight(self);
        onLeft && self.deltaX < 0 && onLeft(self);
        onChangeX && onChangeX(self);
        onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
        prevDeltaX = self.deltaX;
        deltaX[0] = deltaX[1] = deltaX[2] = 0;
      }

      if (changedY) {
        onDown && self.deltaY > 0 && onDown(self);
        onUp && self.deltaY < 0 && onUp(self);
        onChangeY && onChangeY(self);
        onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
        prevDeltaY = self.deltaY;
        deltaY[0] = deltaY[1] = deltaY[2] = 0;
      }

      if (moved || dragged) {
        onMove && onMove(self);

        if (dragged) {
          onDrag(self);
          dragged = false;
        }

        moved = false;
      }

      locked && !(locked = false) && onLockAxis && onLockAxis(self);

      if (wheeled) {
        onWheel(self);
        wheeled = false;
      }

      id = 0;
    },
        onDelta = function onDelta(x, y, index) {
      deltaX[index] += x;
      deltaY[index] += y;

      self._vx.update(x);

      self._vy.update(y);

      debounce ? id || (id = requestAnimationFrame(update)) : update();
    },
        onTouchOrPointerDelta = function onTouchOrPointerDelta(x, y) {
      if (lockAxis && !axis) {
        self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
        locked = true;
      }

      if (axis !== "y") {
        deltaX[2] += x;

        self._vx.update(x, true); // update the velocity as frequently as possible instead of in the debounced function so that very quick touch-scrolls (flicks) feel natural. If it's the mouse/touch/pointer, force it so that we get snappy/accurate momentum scroll.

      }

      if (axis !== "x") {
        deltaY[2] += y;

        self._vy.update(y, true);
      }

      debounce ? id || (id = requestAnimationFrame(update)) : update();
    },
        _onDrag = function _onDrag(e) {
      if (_ignoreCheck(e, 1)) {
        return;
      }

      e = _getEvent(e, preventDefault);
      var x = e.clientX,
          y = e.clientY,
          dx = x - self.x,
          dy = y - self.y,
          isDragging = self.isDragging;
      self.x = x;
      self.y = y;

      if (isDragging || Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum) {
        onDrag && (dragged = true);
        isDragging || (self.isDragging = true);
        onTouchOrPointerDelta(dx, dy);
        isDragging || onDragStart && onDragStart(self);
      }
    },
        _onPress = self.onPress = function (e) {
      if (_ignoreCheck(e, 1) || e && e.button) {
        return;
      }

      self.axis = axis = null;
      onStopDelayedCall.pause();
      self.isPressed = true;
      e = _getEvent(e); // note: may need to preventDefault(?) Won't side-scroll on iOS Safari if we do, though.

      prevDeltaX = prevDeltaY = 0;
      self.startX = self.x = e.clientX;
      self.startY = self.y = e.clientY;

      self._vx.reset(); // otherwise the t2 may be stale if the user touches and flicks super fast and releases in less than 2 requestAnimationFrame ticks, causing velocity to be 0.


      self._vy.reset();

      _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, preventDefault, true);

      self.deltaX = self.deltaY = 0;
      onPress && onPress(self);
    },
        _onRelease = self.onRelease = function (e) {
      if (_ignoreCheck(e, 1)) {
        return;
      }

      _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);

      var isTrackingDrag = !isNaN(self.y - self.startY),
          wasDragging = self.isDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3),
          // some touch devices need some wiggle room in terms of sensing clicks - the finger may move a few pixels.
      eventData = _getEvent(e);

      if (!wasDragging && isTrackingDrag) {
        self._vx.reset();

        self._vy.reset();

        if (preventDefault && allowClicks) {
          Observer_gsap.delayedCall(0.08, function () {
            // some browsers (like Firefox) won't trust script-generated clicks, so if the user tries to click on a video to play it, for example, it simply won't work. Since a regular "click" event will most likely be generated anyway (one that has its isTrusted flag set to true), we must slightly delay our script-generated click so that the "real"/trusted one is prioritized. Remember, when there are duplicate events in quick succession, we suppress all but the first one. Some browsers don't even trigger the "real" one at all, so our synthetic one is a safety valve that ensures that no matter what, a click event does get dispatched.
            if (_getTime() - onClickTime > 300 && !e.defaultPrevented) {
              if (e.target.click) {
                //some browsers (like mobile Safari) don't properly trigger the click event
                e.target.click();
              } else if (ownerDoc.createEvent) {
                var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                syntheticEvent.initMouseEvent("click", true, true, Observer_win, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                e.target.dispatchEvent(syntheticEvent);
              }
            }
          });
        }
      }

      self.isDragging = self.isGesturing = self.isPressed = false;
      onStop && !isNormalizer && onStopDelayedCall.restart(true);
      onDragEnd && wasDragging && onDragEnd(self);
      onRelease && onRelease(self, wasDragging);
    },
        _onGestureStart = function _onGestureStart(e) {
      return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
    },
        _onGestureEnd = function _onGestureEnd() {
      return (self.isGesturing = false) || onGestureEnd(self);
    },
        onScroll = function onScroll(e) {
      if (_ignoreCheck(e)) {
        return;
      }

      var x = scrollFuncX(),
          y = scrollFuncY();
      onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
      scrollX = x;
      scrollY = y;
      onStop && onStopDelayedCall.restart(true);
    },
        _onWheel = function _onWheel(e) {
      if (_ignoreCheck(e)) {
        return;
      }

      e = _getEvent(e, preventDefault);
      onWheel && (wheeled = true);
      var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? Observer_win.innerHeight : 1) * wheelSpeed;
      onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
      onStop && !isNormalizer && onStopDelayedCall.restart(true);
    },
        _onMove = function _onMove(e) {
      if (_ignoreCheck(e)) {
        return;
      }

      var x = e.clientX,
          y = e.clientY,
          dx = x - self.x,
          dy = y - self.y;
      self.x = x;
      self.y = y;
      moved = true;
      (dx || dy) && onTouchOrPointerDelta(dx, dy);
    },
        _onHover = function _onHover(e) {
      self.event = e;
      onHover(self);
    },
        _onHoverEnd = function _onHoverEnd(e) {
      self.event = e;
      onHoverEnd(self);
    },
        _onClick = function _onClick(e) {
      return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self);
    };

    onStopDelayedCall = self._dc = Observer_gsap.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
    self.deltaX = self.deltaY = 0;
    self._vx = _getVelocityProp(0, 50, true);
    self._vy = _getVelocityProp(0, 50, true);
    self.scrollX = scrollFuncX;
    self.scrollY = scrollFuncY;
    self.isDragging = self.isGesturing = self.isPressed = false;

    Observer_context(this);

    self.enable = function (e) {
      if (!self.isEnabled) {
        _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);

        type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, preventDefault, capture);
        type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, preventDefault, capture);

        if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
          _addListener(target, _eventTypes[0], _onPress, preventDefault, capture);

          _addListener(ownerDoc, _eventTypes[2], _onRelease);

          _addListener(ownerDoc, _eventTypes[3], _onRelease);

          allowClicks && _addListener(target, "click", clickCapture, false, true);
          onClick && _addListener(target, "click", _onClick);
          onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
          onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
          onHover && _addListener(target, _pointerType + "enter", _onHover);
          onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
          onMove && _addListener(target, _pointerType + "move", _onMove);
        }

        self.isEnabled = true;
        e && e.type && _onPress(e);
        onEnable && onEnable(self);
      }

      return self;
    };

    self.disable = function () {
      if (self.isEnabled) {
        // only remove the _onScroll listener if there aren't any others that rely on the functionality.
        _observers.filter(function (o) {
          return o !== self && _isViewport(o.target);
        }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);

        if (self.isPressed) {
          self._vx.reset();

          self._vy.reset();

          _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
        }

        _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);

        _removeListener(target, "wheel", _onWheel, capture);

        _removeListener(target, _eventTypes[0], _onPress, capture);

        _removeListener(ownerDoc, _eventTypes[2], _onRelease);

        _removeListener(ownerDoc, _eventTypes[3], _onRelease);

        _removeListener(target, "click", clickCapture, true);

        _removeListener(target, "click", _onClick);

        _removeListener(ownerDoc, "gesturestart", _onGestureStart);

        _removeListener(ownerDoc, "gestureend", _onGestureEnd);

        _removeListener(target, _pointerType + "enter", _onHover);

        _removeListener(target, _pointerType + "leave", _onHoverEnd);

        _removeListener(target, _pointerType + "move", _onMove);

        self.isEnabled = self.isPressed = self.isDragging = false;
        onDisable && onDisable(self);
      }
    };

    self.kill = self.revert = function () {
      self.disable();

      var i = _observers.indexOf(self);

      i >= 0 && _observers.splice(i, 1);
      _normalizer === self && (_normalizer = 0);
    };

    _observers.push(self);

    isNormalizer && _isViewport(target) && (_normalizer = self);
    self.enable(event);
  };

  _createClass(Observer, [{
    key: "velocityX",
    get: function get() {
      return this._vx.getVelocity();
    }
  }, {
    key: "velocityY",
    get: function get() {
      return this._vy.getVelocity();
    }
  }]);

  return Observer;
}();
Observer.version = "3.12.2";

Observer.create = function (vars) {
  return new Observer(vars);
};

Observer.register = Observer_initCore;

Observer.getAll = function () {
  return _observers.slice();
};

Observer.getById = function (id) {
  return _observers.filter(function (o) {
    return o.vars.id === id;
  })[0];
};

_getGSAP() && Observer_gsap.registerPlugin(Observer);

;// CONCATENATED MODULE: ./node_modules/gsap/ScrollTrigger.js
/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */


var ScrollTrigger_gsap,
    ScrollTrigger_coreInitted,
    ScrollTrigger_win,
    ScrollTrigger_doc,
    ScrollTrigger_docEl,
    ScrollTrigger_body,
    ScrollTrigger_root,
    _resizeDelay,
    _toArray,
    ScrollTrigger_clamp,
    _time2,
    _syncInterval,
    _refreshing,
    _pointerIsDown,
    ScrollTrigger_transformProp,
    _i,
    _prevWidth,
    _prevHeight,
    _autoRefresh,
    _sort,
    ScrollTrigger_suppressOverwrites,
    _ignoreResize,
    ScrollTrigger_normalizer,
    _ignoreMobileResize,
    _baseScreenHeight,
    _baseScreenWidth,
    _fixIOSBug,
    ScrollTrigger_context,
    _scrollRestoration,
    _div100vh,
    _100vh,
    _limitCallbacks,
    // if true, we'll only trigger callbacks if the active state toggles, so if you scroll immediately past both the start and end positions of a ScrollTrigger (thus inactive to inactive), neither its onEnter nor onLeave will be called. This is useful during startup.
ScrollTrigger_startup = 1,
    ScrollTrigger_getTime = Date.now,
    _time1 = ScrollTrigger_getTime(),
    _lastScrollTime = 0,
    _enabled = 0,
    _parseClamp = function _parseClamp(value, type, self) {
  var clamp = ScrollTrigger_isString(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
  self["_" + type + "Clamp"] = clamp;
  return clamp ? value.substr(6, value.length - 7) : value;
},
    _keepClamp = function _keepClamp(value, clamp) {
  return clamp && (!ScrollTrigger_isString(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
},
    _rafBugFix = function _rafBugFix() {
  return _enabled && requestAnimationFrame(_rafBugFix);
},
    // in some browsers (like Firefox), screen repaints weren't consistent unless we had SOMETHING queued up in requestAnimationFrame()! So this just creates a super simple loop to keep it alive and smooth out repaints.
_pointerDownHandler = function _pointerDownHandler() {
  return _pointerIsDown = 1;
},
    _pointerUpHandler = function _pointerUpHandler() {
  return _pointerIsDown = 0;
},
    ScrollTrigger_passThrough = function _passThrough(v) {
  return v;
},
    ScrollTrigger_round = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    ScrollTrigger_windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    ScrollTrigger_getGSAP = function _getGSAP() {
  return ScrollTrigger_gsap || ScrollTrigger_windowExists() && (ScrollTrigger_gsap = window.gsap) && ScrollTrigger_gsap.registerPlugin && ScrollTrigger_gsap;
},
    ScrollTrigger_isViewport = function _isViewport(e) {
  return !!~ScrollTrigger_root.indexOf(e);
},
    _getViewportDimension = function _getViewportDimension(dimensionProperty) {
  return (dimensionProperty === "Height" ? _100vh : ScrollTrigger_win["inner" + dimensionProperty]) || ScrollTrigger_docEl["client" + dimensionProperty] || ScrollTrigger_body["client" + dimensionProperty];
},
    _getBoundsFunc = function _getBoundsFunc(element) {
  return _getProxyProp(element, "getBoundingClientRect") || (ScrollTrigger_isViewport(element) ? function () {
    _winOffsets.width = ScrollTrigger_win.innerWidth;
    _winOffsets.height = _100vh;
    return _winOffsets;
  } : function () {
    return _getBounds(element);
  });
},
    _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref) {
  var d = _ref.d,
      d2 = _ref.d2,
      a = _ref.a;
  return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function () {
    return a()[d];
  } : function () {
    return (isViewport ? _getViewportDimension(d2) : scroller["client" + d2]) || 0;
  };
},
    _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
  return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function () {
    return _winOffsets;
  };
},
    _maxScroll = function _maxScroll(element, _ref2) {
  var s = _ref2.s,
      d2 = _ref2.d2,
      d = _ref2.d,
      a = _ref2.a;
  return Math.max(0, (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : ScrollTrigger_isViewport(element) ? (ScrollTrigger_docEl[s] || ScrollTrigger_body[s]) - _getViewportDimension(d2) : element[s] - element["offset" + d2]);
},
    _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
  for (var i = 0; i < _autoRefresh.length; i += 3) {
    (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
  }
},
    ScrollTrigger_isString = function _isString(value) {
  return typeof value === "string";
},
    ScrollTrigger_isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    ScrollTrigger_isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    ScrollTrigger_isObject = function _isObject(value) {
  return typeof value === "object";
},
    _endAnimation = function _endAnimation(animation, reversed, pause) {
  return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
},
    ScrollTrigger_callback = function _callback(self, func) {
  if (self.enabled) {
    var result = func(self);
    result && result.totalTime && (self.callbackAnimation = result);
  }
},
    _abs = Math.abs,
    _left = "left",
    _top = "top",
    _right = "right",
    _bottom = "bottom",
    _width = "width",
    _height = "height",
    _Right = "Right",
    _Left = "Left",
    _Top = "Top",
    _Bottom = "Bottom",
    _padding = "padding",
    _margin = "margin",
    _Width = "Width",
    _Height = "Height",
    _px = "px",
    _getComputedStyle = function _getComputedStyle(element) {
  return ScrollTrigger_win.getComputedStyle(element);
},
    _makePositionable = function _makePositionable(element) {
  // if the element already has position: absolute or fixed, leave that, otherwise make it position: relative
  var position = _getComputedStyle(element).position;

  element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
},
    ScrollTrigger_setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    _getBounds = function _getBounds(element, withoutTransforms) {
  var tween = withoutTransforms && _getComputedStyle(element)[ScrollTrigger_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && ScrollTrigger_gsap.to(element, {
    x: 0,
    y: 0,
    xPercent: 0,
    yPercent: 0,
    rotation: 0,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0
  }).progress(1),
      bounds = element.getBoundingClientRect();
  tween && tween.progress(0).kill();
  return bounds;
},
    _getSize = function _getSize(element, _ref3) {
  var d2 = _ref3.d2;
  return element["offset" + d2] || element["client" + d2] || 0;
},
    _getLabelRatioArray = function _getLabelRatioArray(timeline) {
  var a = [],
      labels = timeline.labels,
      duration = timeline.duration(),
      p;

  for (p in labels) {
    a.push(labels[p] / duration);
  }

  return a;
},
    _getClosestLabel = function _getClosestLabel(animation) {
  return function (value) {
    return ScrollTrigger_gsap.utils.snap(_getLabelRatioArray(animation), value);
  };
},
    _snapDirectional = function _snapDirectional(snapIncrementOrArray) {
  var snap = ScrollTrigger_gsap.utils.snap(snapIncrementOrArray),
      a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function (a, b) {
    return a - b;
  });
  return a ? function (value, direction, threshold) {
    if (threshold === void 0) {
      threshold = 1e-3;
    }

    var i;

    if (!direction) {
      return snap(value);
    }

    if (direction > 0) {
      value -= threshold; // to avoid rounding errors. If we're too strict, it might snap forward, then immediately again, and again.

      for (i = 0; i < a.length; i++) {
        if (a[i] >= value) {
          return a[i];
        }
      }

      return a[i - 1];
    } else {
      i = a.length;
      value += threshold;

      while (i--) {
        if (a[i] <= value) {
          return a[i];
        }
      }
    }

    return a[0];
  } : function (value, direction, threshold) {
    if (threshold === void 0) {
      threshold = 1e-3;
    }

    var snapped = snap(value);
    return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
  };
},
    _getLabelAtDirection = function _getLabelAtDirection(timeline) {
  return function (value, st) {
    return _snapDirectional(_getLabelRatioArray(timeline))(value, st.direction);
  };
},
    _multiListener = function _multiListener(func, element, types, callback) {
  return types.split(",").forEach(function (type) {
    return func(element, type, callback);
  });
},
    ScrollTrigger_addListener = function _addListener(element, type, func, nonPassive, capture) {
  return element.addEventListener(type, func, {
    passive: !nonPassive,
    capture: !!capture
  });
},
    ScrollTrigger_removeListener = function _removeListener(element, type, func, capture) {
  return element.removeEventListener(type, func, !!capture);
},
    _wheelListener = function _wheelListener(func, el, scrollFunc) {
  scrollFunc = scrollFunc && scrollFunc.wheelHandler;

  if (scrollFunc) {
    func(el, "wheel", scrollFunc);
    func(el, "touchmove", scrollFunc);
  }
},
    _markerDefaults = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
},
    ScrollTrigger_defaults = {
  toggleActions: "play",
  anticipatePin: 0
},
    _keywords = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
},
    _offsetToPx = function _offsetToPx(value, size) {
  if (ScrollTrigger_isString(value)) {
    var eqIndex = value.indexOf("="),
        relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;

    if (~eqIndex) {
      value.indexOf("%") > eqIndex && (relative *= size / 100);
      value = value.substr(0, eqIndex - 1);
    }

    value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
  }

  return value;
},
    _createMarker = function _createMarker(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
  var startColor = _ref4.startColor,
      endColor = _ref4.endColor,
      fontSize = _ref4.fontSize,
      indent = _ref4.indent,
      fontWeight = _ref4.fontWeight;

  var e = ScrollTrigger_doc.createElement("div"),
      useFixedPosition = ScrollTrigger_isViewport(container) || _getProxyProp(container, "pinType") === "fixed",
      isScroller = type.indexOf("scroller") !== -1,
      parent = useFixedPosition ? ScrollTrigger_body : container,
      isStart = type.indexOf("start") !== -1,
      color = isStart ? startColor : endColor,
      css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";

  css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
  (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
  matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
  e._isStart = isStart;
  e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
  e.style.cssText = css;
  e.innerText = name || name === 0 ? type + "-" + name : type;
  parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
  e._offset = e["offset" + direction.op.d2];

  _positionMarker(e, 0, direction, isStart);

  return e;
},
    _positionMarker = function _positionMarker(marker, start, direction, flipped) {
  var vars = {
    display: "block"
  },
      side = direction[flipped ? "os2" : "p2"],
      oppositeSide = direction[flipped ? "p2" : "os2"];
  marker._isFlipped = flipped;
  vars[direction.a + "Percent"] = flipped ? -100 : 0;
  vars[direction.a] = flipped ? "1px" : 0;
  vars["border" + side + _Width] = 1;
  vars["border" + oppositeSide + _Width] = 0;
  vars[direction.p] = start + "px";
  ScrollTrigger_gsap.set(marker, vars);
},
    _triggers = [],
    _ids = {},
    _rafID,
    _sync = function _sync() {
  return ScrollTrigger_getTime() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
},
    ScrollTrigger_onScroll = function _onScroll() {
  // previously, we tried to optimize performance by batching/deferring to the next requestAnimationFrame(), but discovered that Safari has a few bugs that make this unworkable (especially on iOS). See https://codepen.io/GreenSock/pen/16c435b12ef09c38125204818e7b45fc?editors=0010 and https://codepen.io/GreenSock/pen/JjOxYpQ/3dd65ccec5a60f1d862c355d84d14562?editors=0010 and https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503?editors=0010
  if (!ScrollTrigger_normalizer || !ScrollTrigger_normalizer.isPressed || ScrollTrigger_normalizer.startX > ScrollTrigger_body.clientWidth) {
    // if the user is dragging the scrollbar, allow it.
    _scrollers.cache++;

    if (ScrollTrigger_normalizer) {
      _rafID || (_rafID = requestAnimationFrame(_updateAll));
    } else {
      _updateAll(); // Safari in particular (on desktop) NEEDS the immediate update rather than waiting for a requestAnimationFrame() whereas iOS seems to benefit from waiting for the requestAnimationFrame() tick, at least when normalizing. See https://codepen.io/GreenSock/pen/qBYozqO?editors=0110

    }

    _lastScrollTime || ScrollTrigger_dispatch("scrollStart");
    _lastScrollTime = ScrollTrigger_getTime();
  }
},
    _setBaseDimensions = function _setBaseDimensions() {
  _baseScreenWidth = ScrollTrigger_win.innerWidth;
  _baseScreenHeight = ScrollTrigger_win.innerHeight;
},
    _onResize = function _onResize() {
  _scrollers.cache++;
  !_refreshing && !_ignoreResize && !ScrollTrigger_doc.fullscreenElement && !ScrollTrigger_doc.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== ScrollTrigger_win.innerWidth || Math.abs(ScrollTrigger_win.innerHeight - _baseScreenHeight) > ScrollTrigger_win.innerHeight * 0.25) && _resizeDelay.restart(true);
},
    // ignore resizes triggered by refresh()
ScrollTrigger_listeners = {},
    ScrollTrigger_emptyArray = [],
    _softRefresh = function _softRefresh() {
  return ScrollTrigger_removeListener(ScrollTrigger_ScrollTrigger, "scrollEnd", _softRefresh) || _refreshAll(true);
},
    ScrollTrigger_dispatch = function _dispatch(type) {
  return ScrollTrigger_listeners[type] && ScrollTrigger_listeners[type].map(function (f) {
    return f();
  }) || ScrollTrigger_emptyArray;
},
    _savedStyles = [],
    // when ScrollTrigger.saveStyles() is called, the inline styles are recorded in this Array in a sequential format like [element, cssText, gsCache, media]. This keeps it very memory-efficient and fast to iterate through.
_revertRecorded = function _revertRecorded(media) {
  for (var i = 0; i < _savedStyles.length; i += 5) {
    if (!media || _savedStyles[i + 4] && _savedStyles[i + 4].query === media) {
      _savedStyles[i].style.cssText = _savedStyles[i + 1];
      _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
      _savedStyles[i + 3].uncache = 1;
    }
  }
},
    _revertAll = function _revertAll(kill, media) {
  var trigger;

  for (_i = 0; _i < _triggers.length; _i++) {
    trigger = _triggers[_i];

    if (trigger && (!media || trigger._ctx === media)) {
      if (kill) {
        trigger.kill(1);
      } else {
        trigger.revert(true, true);
      }
    }
  }

  media && _revertRecorded(media);
  media || ScrollTrigger_dispatch("revert");
},
    _clearScrollMemory = function _clearScrollMemory(scrollRestoration, force) {
  // zero-out all the recorded scroll positions. Don't use _triggers because if, for example, .matchMedia() is used to create some ScrollTriggers and then the user resizes and it removes ALL ScrollTriggers, and then go back to a size where there are ScrollTriggers, it would have kept the position(s) saved from the initial state.
  _scrollers.cache++;
  (force || !_refreshingAll) && _scrollers.forEach(function (obj) {
    return ScrollTrigger_isFunction(obj) && obj.cacheID++ && (obj.rec = 0);
  });
  ScrollTrigger_isString(scrollRestoration) && (ScrollTrigger_win.history.scrollRestoration = _scrollRestoration = scrollRestoration);
},
    _refreshingAll,
    _refreshID = 0,
    _queueRefreshID,
    _queueRefreshAll = function _queueRefreshAll() {
  // we don't want to call _refreshAll() every time we create a new ScrollTrigger (for performance reasons) - it's better to batch them. Some frameworks dynamically load content and we can't rely on the window's "load" or "DOMContentLoaded" events to trigger it.
  if (_queueRefreshID !== _refreshID) {
    var id = _queueRefreshID = _refreshID;
    requestAnimationFrame(function () {
      return id === _refreshID && _refreshAll(true);
    });
  }
},
    _refresh100vh = function _refresh100vh() {
  ScrollTrigger_body.appendChild(_div100vh);

  _100vh = _div100vh.offsetHeight || ScrollTrigger_win.innerHeight;

  ScrollTrigger_body.removeChild(_div100vh);
},
    _refreshAll = function _refreshAll(force, skipRevert) {
  if (_lastScrollTime && !force) {
    ScrollTrigger_addListener(ScrollTrigger_ScrollTrigger, "scrollEnd", _softRefresh);

    return;
  }

  _refresh100vh();

  _refreshingAll = ScrollTrigger_ScrollTrigger.isRefreshing = true;

  _scrollers.forEach(function (obj) {
    return ScrollTrigger_isFunction(obj) && ++obj.cacheID && (obj.rec = obj());
  }); // force the clearing of the cache because some browsers take a little while to dispatch the "scroll" event and the user may have changed the scroll position and then called ScrollTrigger.refresh() right away


  var refreshInits = ScrollTrigger_dispatch("refreshInit");

  _sort && ScrollTrigger_ScrollTrigger.sort();
  skipRevert || _revertAll();

  _scrollers.forEach(function (obj) {
    if (ScrollTrigger_isFunction(obj)) {
      obj.smooth && (obj.target.style.scrollBehavior = "auto"); // smooth scrolling interferes

      obj(0);
    }
  });

  _triggers.slice(0).forEach(function (t) {
    return t.refresh();
  }); // don't loop with _i because during a refresh() someone could call ScrollTrigger.update() which would iterate through _i resulting in a skip.


  _triggers.forEach(function (t, i) {
    // nested pins (pinnedContainer) with pinSpacing may expand the container, so we must accommodate that here.
    if (t._subPinOffset && t.pin) {
      var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
          original = t.pin[prop];
      t.revert(true, 1);
      t.adjustPinSpacing(t.pin[prop] - original);
      t.refresh();
    }
  });

  _triggers.forEach(function (t) {
    // the scroller's max scroll position may change after all the ScrollTriggers refreshed (like pinning could push it down), so we need to loop back and correct any with end: "max". Same for anything with a clamped end
    var max = _maxScroll(t.scroller, t._dir);

    (t.vars.end === "max" || t._endClamp && t.end > max) && t.setPositions(t.start, Math.max(t.start + 1, max), true);
  });

  refreshInits.forEach(function (result) {
    return result && result.render && result.render(-1);
  }); // if the onRefreshInit() returns an animation (typically a gsap.set()), revert it. This makes it easy to put things in a certain spot before refreshing for measurement purposes, and then put things back.

  _scrollers.forEach(function (obj) {
    if (ScrollTrigger_isFunction(obj)) {
      obj.smooth && requestAnimationFrame(function () {
        return obj.target.style.scrollBehavior = "smooth";
      });
      obj.rec && obj(obj.rec);
    }
  });

  _clearScrollMemory(_scrollRestoration, 1);

  _resizeDelay.pause();

  _refreshID++;
  _refreshingAll = 2;

  _updateAll(2);

  _triggers.forEach(function (t) {
    return ScrollTrigger_isFunction(t.vars.onRefresh) && t.vars.onRefresh(t);
  });

  _refreshingAll = ScrollTrigger_ScrollTrigger.isRefreshing = false;

  ScrollTrigger_dispatch("refresh");
},
    _lastScroll = 0,
    _direction = 1,
    _primary,
    _updateAll = function _updateAll(force) {
  if (!_refreshingAll || force === 2) {
    ScrollTrigger_ScrollTrigger.isUpdating = true;
    _primary && _primary.update(0); // ScrollSmoother uses refreshPriority -9999 to become the primary that gets updated before all others because it affects the scroll position.

    var l = _triggers.length,
        time = ScrollTrigger_getTime(),
        recordVelocity = time - _time1 >= 50,
        scroll = l && _triggers[0].scroll();

    _direction = _lastScroll > scroll ? -1 : 1;
    _refreshingAll || (_lastScroll = scroll);

    if (recordVelocity) {
      if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
        _lastScrollTime = 0;

        ScrollTrigger_dispatch("scrollEnd");
      }

      _time2 = _time1;
      _time1 = time;
    }

    if (_direction < 0) {
      _i = l;

      while (_i-- > 0) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }

      _direction = 1;
    } else {
      for (_i = 0; _i < l; _i++) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }
    }

    ScrollTrigger_ScrollTrigger.isUpdating = false;
  }

  _rafID = 0;
},
    _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]),
    _swapPinOut = function _swapPinOut(pin, spacer, state) {
  _setState(state);

  var cache = pin._gsap;

  if (cache.spacerIsNative) {
    _setState(cache.spacerState);
  } else if (pin._gsap.swappedIn) {
    var parent = spacer.parentNode;

    if (parent) {
      parent.insertBefore(pin, spacer);
      parent.removeChild(spacer);
    }
  }

  pin._gsap.swappedIn = false;
},
    _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
  if (!pin._gsap.swappedIn) {
    var i = _propNamesToCopy.length,
        spacerStyle = spacer.style,
        pinStyle = pin.style,
        p;

    while (i--) {
      p = _propNamesToCopy[i];
      spacerStyle[p] = cs[p];
    }

    spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
    cs.display === "inline" && (spacerStyle.display = "inline-block");
    pinStyle[_bottom] = pinStyle[_right] = "auto";
    spacerStyle.flexBasis = cs.flexBasis || "auto";
    spacerStyle.overflow = "visible";
    spacerStyle.boxSizing = "border-box";
    spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
    spacerStyle[_height] = _getSize(pin, _vertical) + _px;
    spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";

    _setState(spacerState);

    pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
    pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
    pinStyle[_padding] = cs[_padding];

    if (pin.parentNode !== spacer) {
      pin.parentNode.insertBefore(spacer, pin);
      spacer.appendChild(pin);
    }

    pin._gsap.swappedIn = true;
  }
},
    ScrollTrigger_capsExp = /([A-Z])/g,
    _setState = function _setState(state) {
  if (state) {
    var style = state.t.style,
        l = state.length,
        i = 0,
        p,
        value;
    (state.t._gsap || ScrollTrigger_gsap.core.getCache(state.t)).uncache = 1; // otherwise transforms may be off

    for (; i < l; i += 2) {
      value = state[i + 1];
      p = state[i];

      if (value) {
        style[p] = value;
      } else if (style[p]) {
        style.removeProperty(p.replace(ScrollTrigger_capsExp, "-$1").toLowerCase());
      }
    }
  }
},
    _getState = function _getState(element) {
  // returns an Array with alternating values like [property, value, property, value] and a "t" property pointing to the target (element). Makes it fast and cheap.
  var l = _stateProps.length,
      style = element.style,
      state = [],
      i = 0;

  for (; i < l; i++) {
    state.push(_stateProps[i], style[_stateProps[i]]);
  }

  state.t = element;
  return state;
},
    _copyState = function _copyState(state, override, omitOffsets) {
  var result = [],
      l = state.length,
      i = omitOffsets ? 8 : 0,
      // skip top, left, right, bottom if omitOffsets is true
  p;

  for (; i < l; i += 2) {
    p = state[i];
    result.push(p, p in override ? override[p] : state[i + 1]);
  }

  result.t = state.t;
  return result;
},
    _winOffsets = {
  left: 0,
  top: 0
},
    // // potential future feature (?) Allow users to calculate where a trigger hits (scroll position) like getScrollPosition("#id", "top bottom")
// _getScrollPosition = (trigger, position, {scroller, containerAnimation, horizontal}) => {
// 	scroller = _getTarget(scroller || _win);
// 	let direction = horizontal ? _horizontal : _vertical,
// 		isViewport = _isViewport(scroller);
// 	_getSizeFunc(scroller, isViewport, direction);
// 	return _parsePosition(position, _getTarget(trigger), _getSizeFunc(scroller, isViewport, direction)(), direction, _getScrollFunc(scroller, direction)(), 0, 0, 0, _getOffsetsFunc(scroller, isViewport)(), isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, 0, containerAnimation ? containerAnimation.duration() : _maxScroll(scroller), containerAnimation);
// },
ScrollTrigger_parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
  ScrollTrigger_isFunction(value) && (value = value(self));

  if (ScrollTrigger_isString(value) && value.substr(0, 3) === "max") {
    value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
  }

  var time = containerAnimation ? containerAnimation.time() : 0,
      p1,
      p2,
      element;
  containerAnimation && containerAnimation.seek(0);
  isNaN(value) || (value = +value); // convert a string number like "45" to an actual number

  if (!ScrollTrigger_isNumber(value)) {
    ScrollTrigger_isFunction(trigger) && (trigger = trigger(self));
    var offsets = (value || "0").split(" "),
        bounds,
        localOffset,
        globalOffset,
        display;
    element = _getTarget(trigger, self) || ScrollTrigger_body;
    bounds = _getBounds(element) || {};

    if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
      // if display is "none", it won't report getBoundingClientRect() properly
      display = element.style.display;
      element.style.display = "block";
      bounds = _getBounds(element);
      display ? element.style.display = display : element.style.removeProperty("display");
    }

    localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
    globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
    value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
    markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
    scrollerSize -= scrollerSize - globalOffset; // adjust for the marker
  } else {
    containerAnimation && (value = ScrollTrigger_gsap.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
    markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
  }

  if (clampZeroProp) {
    self[clampZeroProp] = value || -0.001;
    value < 0 && (value = 0);
  }

  if (marker) {
    var position = value + scrollerSize,
        isStart = marker._isStart;
    p1 = "scroll" + direction.d2;

    _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(ScrollTrigger_body[p1], ScrollTrigger_docEl[p1]) : marker.parentNode[p1]) <= position + 1);

    if (useFixedPosition) {
      scrollerBounds = _getBounds(markerScroller);
      useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
    }
  }

  if (containerAnimation && element) {
    p1 = _getBounds(element);
    containerAnimation.seek(scrollerMax);
    p2 = _getBounds(element);
    containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
    value = value / containerAnimation._caScrollDist * scrollerMax;
  }

  containerAnimation && containerAnimation.seek(time);
  return containerAnimation ? value : Math.round(value);
},
    _prefixExp = /(webkit|moz|length|cssText|inset)/i,
    _reparent = function _reparent(element, parent, top, left) {
  if (element.parentNode !== parent) {
    var style = element.style,
        p,
        cs;

    if (parent === ScrollTrigger_body) {
      element._stOrig = style.cssText; // record original inline styles so we can revert them later

      cs = _getComputedStyle(element);

      for (p in cs) {
        // must copy all relevant styles to ensure that nothing changes visually when we reparent to the <body>. Skip the vendor prefixed ones.
        if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
          style[p] = cs[p];
        }
      }

      style.top = top;
      style.left = left;
    } else {
      style.cssText = element._stOrig;
    }

    ScrollTrigger_gsap.core.getCache(element).uncache = 1;
    parent.appendChild(element);
  }
},
    _interruptionTracker = function _interruptionTracker(getValueFunc, initialValue, onInterrupt) {
  var last1 = initialValue,
      last2 = last1;
  return function (value) {
    var current = Math.round(getValueFunc()); // round because in some [very uncommon] Windows environments, scroll can get reported with decimals even though it was set without.

    if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
      // if the user scrolls, kill the tween. iOS Safari intermittently misreports the scroll position, it may be the most recently-set one or the one before that! When Safari is zoomed (CMD-+), it often misreports as 1 pixel off too! So if we set the scroll position to 125, for example, it'll actually report it as 124.
      value = current;
      onInterrupt && onInterrupt();
    }

    last2 = last1;
    last1 = value;
    return value;
  };
},
    _shiftMarker = function _shiftMarker(marker, direction, value) {
  var vars = {};
  vars[direction.p] = "+=" + value;
  ScrollTrigger_gsap.set(marker, vars);
},
    // _mergeAnimations = animations => {
// 	let tl = gsap.timeline({smoothChildTiming: true}).startTime(Math.min(...animations.map(a => a.globalTime(0))));
// 	animations.forEach(a => {let time = a.totalTime(); tl.add(a); a.totalTime(time); });
// 	tl.smoothChildTiming = false;
// 	return tl;
// },
// returns a function that can be used to tween the scroll position in the direction provided, and when doing so it'll add a .tween property to the FUNCTION itself, and remove it when the tween completes or gets killed. This gives us a way to have multiple ScrollTriggers use a central function for any given scroller and see if there's a scroll tween running (which would affect if/how things get updated)
_getTweenCreator = function _getTweenCreator(scroller, direction) {
  var getScroll = _getScrollFunc(scroller, direction),
      prop = "_scroll" + direction.p2,
      // add a tweenable property to the scroller that's a getter/setter function, like _scrollTop or _scrollLeft. This way, if someone does gsap.killTweensOf(scroller) it'll kill the scroll tween.
  getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
    var tween = getTween.tween,
        onComplete = vars.onComplete,
        modifiers = {};
    initialValue = initialValue || getScroll();

    var checkForInterruption = _interruptionTracker(getScroll, initialValue, function () {
      tween.kill();
      getTween.tween = 0;
    });

    change2 = change1 && change2 || 0; // if change1 is 0, we set that to the difference and ignore change2. Otherwise, there would be a compound effect.

    change1 = change1 || scrollTo - initialValue;
    tween && tween.kill();
    vars[prop] = scrollTo;
    vars.modifiers = modifiers;

    modifiers[prop] = function () {
      return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
    };

    vars.onUpdate = function () {
      _scrollers.cache++;

      _updateAll();
    };

    vars.onComplete = function () {
      getTween.tween = 0;
      onComplete && onComplete.call(tween);
    };

    tween = getTween.tween = ScrollTrigger_gsap.to(scroller, vars);
    return tween;
  };

  scroller[prop] = getScroll;

  getScroll.wheelHandler = function () {
    return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
  };

  ScrollTrigger_addListener(scroller, "wheel", getScroll.wheelHandler); // Windows machines handle mousewheel scrolling in chunks (like "3 lines per scroll") meaning the typical strategy for cancelling the scroll isn't as sensitive. It's much more likely to match one of the previous 2 scroll event positions. So we kill any snapping as soon as there's a wheel event.


  ScrollTrigger_ScrollTrigger.isTouch && ScrollTrigger_addListener(scroller, "touchmove", getScroll.wheelHandler);
  return getTween;
};

var ScrollTrigger_ScrollTrigger = /*#__PURE__*/function () {
  function ScrollTrigger(vars, animation) {
    ScrollTrigger_coreInitted || ScrollTrigger.register(ScrollTrigger_gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");

    ScrollTrigger_context(this);

    this.init(vars, animation);
  }

  var _proto = ScrollTrigger.prototype;

  _proto.init = function init(vars, animation) {
    this.progress = this.start = 0;
    this.vars && this.kill(true, true); // in case it's being initted again

    if (!_enabled) {
      this.update = this.refresh = this.kill = ScrollTrigger_passThrough;
      return;
    }

    vars = ScrollTrigger_setDefaults(ScrollTrigger_isString(vars) || ScrollTrigger_isNumber(vars) || vars.nodeType ? {
      trigger: vars
    } : vars, ScrollTrigger_defaults);

    var _vars = vars,
        onUpdate = _vars.onUpdate,
        toggleClass = _vars.toggleClass,
        id = _vars.id,
        onToggle = _vars.onToggle,
        onRefresh = _vars.onRefresh,
        scrub = _vars.scrub,
        trigger = _vars.trigger,
        pin = _vars.pin,
        pinSpacing = _vars.pinSpacing,
        invalidateOnRefresh = _vars.invalidateOnRefresh,
        anticipatePin = _vars.anticipatePin,
        onScrubComplete = _vars.onScrubComplete,
        onSnapComplete = _vars.onSnapComplete,
        once = _vars.once,
        snap = _vars.snap,
        pinReparent = _vars.pinReparent,
        pinSpacer = _vars.pinSpacer,
        containerAnimation = _vars.containerAnimation,
        fastScrollEnd = _vars.fastScrollEnd,
        preventOverlaps = _vars.preventOverlaps,
        direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical,
        isToggle = !scrub && scrub !== 0,
        scroller = _getTarget(vars.scroller || ScrollTrigger_win),
        scrollerCache = ScrollTrigger_gsap.core.getCache(scroller),
        isViewport = ScrollTrigger_isViewport(scroller),
        useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed",
        callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack],
        toggleActions = isToggle && vars.toggleActions.split(" "),
        markers = "markers" in vars ? vars.markers : ScrollTrigger_defaults.markers,
        borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0,
        self = this,
        onRefreshInit = vars.onRefreshInit && function () {
      return vars.onRefreshInit(self);
    },
        getScrollerSize = _getSizeFunc(scroller, isViewport, direction),
        getScrollerOffsets = _getOffsetsFunc(scroller, isViewport),
        lastSnap = 0,
        lastRefresh = 0,
        prevProgress = 0,
        scrollFunc = _getScrollFunc(scroller, direction),
        tweenTo,
        pinCache,
        snapFunc,
        scroll1,
        scroll2,
        start,
        end,
        markerStart,
        markerEnd,
        markerStartTrigger,
        markerEndTrigger,
        markerVars,
        executingOnRefresh,
        change,
        pinOriginalState,
        pinActiveState,
        pinState,
        spacer,
        offset,
        pinGetter,
        pinSetter,
        pinStart,
        pinChange,
        spacingStart,
        spacerState,
        markerStartSetter,
        pinMoves,
        markerEndSetter,
        cs,
        snap1,
        snap2,
        scrubTween,
        scrubSmooth,
        snapDurClamp,
        snapDelayedCall,
        prevScroll,
        prevAnimProgress,
        caMarkerSetter,
        customRevertReturn; // for the sake of efficiency, _startClamp/_endClamp serve like a truthy value indicating that clamping was enabled on the start/end, and ALSO store the actual pre-clamped numeric value. We tap into that in ScrollSmoother for speed effects. So for example, if start="clamp(top bottom)" results in a start of -100 naturally, it would get clamped to 0 but -100 would be stored in _startClamp.


    self._startClamp = self._endClamp = false;
    self._dir = direction;
    anticipatePin *= 45;
    self.scroller = scroller;
    self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
    scroll1 = scrollFunc();
    self.vars = vars;
    animation = animation || vars.animation;

    if ("refreshPriority" in vars) {
      _sort = 1;
      vars.refreshPriority === -9999 && (_primary = self); // used by ScrollSmoother
    }

    scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
      top: _getTweenCreator(scroller, _vertical),
      left: _getTweenCreator(scroller, _horizontal)
    };
    self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];

    self.scrubDuration = function (value) {
      scrubSmooth = ScrollTrigger_isNumber(value) && value;

      if (!scrubSmooth) {
        scrubTween && scrubTween.progress(1).kill();
        scrubTween = 0;
      } else {
        scrubTween ? scrubTween.duration(value) : scrubTween = ScrollTrigger_gsap.to(animation, {
          ease: "expo",
          totalProgress: "+=0",
          duration: scrubSmooth,
          paused: true,
          onComplete: function onComplete() {
            return onScrubComplete && onScrubComplete(self);
          }
        });
      }
    };

    if (animation) {
      animation.vars.lazy = false;
      animation._initted && !self.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true); // special case: if this ScrollTrigger gets re-initted, a from() tween with a stagger could get initted initially and then reverted on the re-init which means it'll need to get rendered again here to properly display things. Otherwise, See https://greensock.com/forums/topic/36777-scrollsmoother-splittext-nextjs/ and https://codepen.io/GreenSock/pen/eYPyPpd?editors=0010

      self.animation = animation.pause();
      animation.scrollTrigger = self;
      self.scrubDuration(scrub);
      snap1 = 0;
      id || (id = animation.vars.id);
    }

    if (snap) {
      // TODO: potential idea: use legitimate CSS scroll snapping by pushing invisible elements into the DOM that serve as snap positions, and toggle the document.scrollingElement.style.scrollSnapType onToggle. See https://codepen.io/GreenSock/pen/JjLrgWM for a quick proof of concept.
      if (!ScrollTrigger_isObject(snap) || snap.push) {
        snap = {
          snapTo: snap
        };
      }

      "scrollBehavior" in ScrollTrigger_body.style && ScrollTrigger_gsap.set(isViewport ? [ScrollTrigger_body, ScrollTrigger_docEl] : scroller, {
        scrollBehavior: "auto"
      }); // smooth scrolling doesn't work with snap.

      _scrollers.forEach(function (o) {
        return ScrollTrigger_isFunction(o) && o.target === (isViewport ? ScrollTrigger_doc.scrollingElement || ScrollTrigger_docEl : scroller) && (o.smooth = false);
      }); // note: set smooth to false on both the vertical and horizontal scroll getters/setters


      snapFunc = ScrollTrigger_isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap.directional !== false ? function (value, st) {
        return _snapDirectional(snap.snapTo)(value, ScrollTrigger_getTime() - lastRefresh < 500 ? 0 : st.direction);
      } : ScrollTrigger_gsap.utils.snap(snap.snapTo);
      snapDurClamp = snap.duration || {
        min: 0.1,
        max: 2
      };
      snapDurClamp = ScrollTrigger_isObject(snapDurClamp) ? ScrollTrigger_clamp(snapDurClamp.min, snapDurClamp.max) : ScrollTrigger_clamp(snapDurClamp, snapDurClamp);
      snapDelayedCall = ScrollTrigger_gsap.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function () {
        var scroll = scrollFunc(),
            refreshedRecently = ScrollTrigger_getTime() - lastRefresh < 500,
            tween = tweenTo.tween;

        if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
          var progress = (scroll - start) / change,
              totalProgress = animation && !isToggle ? animation.totalProgress() : progress,
              velocity = refreshedRecently ? 0 : (totalProgress - snap2) / (ScrollTrigger_getTime() - _time2) * 1000 || 0,
              change1 = ScrollTrigger_gsap.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185),
              naturalEnd = progress + (snap.inertia === false ? 0 : change1),
              endValue = ScrollTrigger_clamp(0, 1, snapFunc(naturalEnd, self)),
              endScroll = Math.round(start + endValue * change),
              _snap = snap,
              onStart = _snap.onStart,
              _onInterrupt = _snap.onInterrupt,
              _onComplete = _snap.onComplete;

          if (scroll <= end && scroll >= start && endScroll !== scroll) {
            if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
              // there's an overlapping snap! So we must figure out which one is closer and let that tween live.
              return;
            }

            if (snap.inertia === false) {
              change1 = endValue - progress;
            }

            tweenTo(endScroll, {
              duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
              ease: snap.ease || "power3",
              data: _abs(endScroll - scroll),
              // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
              onInterrupt: function onInterrupt() {
                return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
              },
              onComplete: function onComplete() {
                self.update();
                lastSnap = scrollFunc();
                snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                onSnapComplete && onSnapComplete(self);
                _onComplete && _onComplete(self);
              }
            }, scroll, change1 * change, endScroll - scroll - change1 * change);
            onStart && onStart(self, tweenTo.tween);
          }
        } else if (self.isActive && lastSnap !== scroll) {
          snapDelayedCall.restart(true);
        }
      }).pause();
    }

    id && (_ids[id] = self);
    trigger = self.trigger = _getTarget(trigger || pin !== true && pin); // if a trigger has some kind of scroll-related effect applied that could contaminate the "y" or "x" position (like a ScrollSmoother effect), we needed a way to temporarily revert it, so we use the stRevert property of the gsCache. It can return another function that we'll call at the end so it can return to its normal state.

    customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
    customRevertReturn && (customRevertReturn = customRevertReturn(self));
    pin = pin === true ? trigger : _getTarget(pin);
    ScrollTrigger_isString(toggleClass) && (toggleClass = {
      targets: trigger,
      className: toggleClass
    });

    if (pin) {
      pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding); // if the parent is display: flex, don't apply pinSpacing by default. We should check that pin.parentNode is an element (not shadow dom window)

      self.pin = pin;
      pinCache = ScrollTrigger_gsap.core.getCache(pin);

      if (!pinCache.spacer) {
        // record the spacer and pinOriginalState on the cache in case someone tries pinning the same element with MULTIPLE ScrollTriggers - we don't want to have multiple spacers or record the "original" pin state after it has already been affected by another ScrollTrigger.
        if (pinSpacer) {
          pinSpacer = _getTarget(pinSpacer);
          pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement); // for React & Angular

          pinCache.spacerIsNative = !!pinSpacer;
          pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
        }

        pinCache.spacer = spacer = pinSpacer || ScrollTrigger_doc.createElement("div");
        spacer.classList.add("pin-spacer");
        id && spacer.classList.add("pin-spacer-" + id);
        pinCache.pinState = pinOriginalState = _getState(pin);
      } else {
        pinOriginalState = pinCache.pinState;
      }

      vars.force3D !== false && ScrollTrigger_gsap.set(pin, {
        force3D: true
      });
      self.spacer = spacer = pinCache.spacer;
      cs = _getComputedStyle(pin);
      spacingStart = cs[pinSpacing + direction.os2];
      pinGetter = ScrollTrigger_gsap.getProperty(pin);
      pinSetter = ScrollTrigger_gsap.quickSetter(pin, direction.a, _px); // pin.firstChild && !_maxScroll(pin, direction) && (pin.style.overflow = "hidden"); // protects from collapsing margins, but can have unintended consequences as demonstrated here: https://codepen.io/GreenSock/pen/1e42c7a73bfa409d2cf1e184e7a4248d so it was removed in favor of just telling people to set up their CSS to avoid the collapsing margins (overflow: hidden | auto is just one option. Another is border-top: 1px solid transparent).

      _swapPinIn(pin, spacer, cs);

      pinState = _getState(pin);
    }

    if (markers) {
      markerVars = ScrollTrigger_isObject(markers) ? ScrollTrigger_setDefaults(markers, _markerDefaults) : _markerDefaults;
      markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
      markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
      offset = markerStartTrigger["offset" + direction.op.d2];

      var content = _getTarget(_getProxyProp(scroller, "content") || scroller);

      markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
      markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
      containerAnimation && (caMarkerSetter = ScrollTrigger_gsap.quickSetter([markerStart, markerEnd], direction.a, _px));

      if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
        _makePositionable(isViewport ? ScrollTrigger_body : scroller);

        ScrollTrigger_gsap.set([markerStartTrigger, markerEndTrigger], {
          force3D: true
        });
        markerStartSetter = ScrollTrigger_gsap.quickSetter(markerStartTrigger, direction.a, _px);
        markerEndSetter = ScrollTrigger_gsap.quickSetter(markerEndTrigger, direction.a, _px);
      }
    }

    if (containerAnimation) {
      var oldOnUpdate = containerAnimation.vars.onUpdate,
          oldParams = containerAnimation.vars.onUpdateParams;
      containerAnimation.eventCallback("onUpdate", function () {
        self.update(0, 0, 1);
        oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
      });
    }

    self.previous = function () {
      return _triggers[_triggers.indexOf(self) - 1];
    };

    self.next = function () {
      return _triggers[_triggers.indexOf(self) + 1];
    };

    self.revert = function (revert, temp) {
      if (!temp) {
        return self.kill(true);
      } // for compatibility with gsap.context() and gsap.matchMedia() which call revert()


      var r = revert !== false || !self.enabled,
          prevRefreshing = _refreshing;

      if (r !== self.isReverted) {
        if (r) {
          prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0); // record the scroll so we can revert later (repositioning/pinning things can affect scroll position). In the static refresh() method, we first record all the scroll positions as a reference.

          prevProgress = self.progress;
          prevAnimProgress = animation && animation.progress();
        }

        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
          return m.style.display = r ? "none" : "block";
        });

        if (r) {
          _refreshing = self;
          self.update(r); // make sure the pin is back in its original position so that all the measurements are correct. do this BEFORE swapping the pin out
        }

        if (pin && (!pinReparent || !self.isActive)) {
          if (r) {
            _swapPinOut(pin, spacer, pinOriginalState);
          } else {
            _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
          }
        }

        r || self.update(r); // when we're restoring, the update should run AFTER swapping the pin into its pin-spacer.

        _refreshing = prevRefreshing; // restore. We set it to true during the update() so that things fire properly in there.

        self.isReverted = r;
      }
    };

    self.refresh = function (soft, force, position, pinOffset) {
      // position is typically only defined if it's coming from setPositions() - it's a way to skip the normal parsing. pinOffset is also only from setPositions() and is mostly related to fancy stuff we need to do in ScrollSmoother with effects
      if ((_refreshing || !self.enabled) && !force) {
        return;
      }

      if (pin && soft && _lastScrollTime) {
        ScrollTrigger_addListener(ScrollTrigger, "scrollEnd", _softRefresh);

        return;
      }

      !_refreshingAll && onRefreshInit && onRefreshInit(self);
      _refreshing = self;

      if (tweenTo.tween && !position) {
        // we skip this if a position is passed in because typically that's from .setPositions() and it's best to allow in-progress snapping to continue.
        tweenTo.tween.kill();
        tweenTo.tween = 0;
      }

      scrubTween && scrubTween.pause();
      invalidateOnRefresh && animation && animation.revert({
        kill: false
      }).invalidate();
      self.isReverted || self.revert(true, true);
      self._subPinOffset = false; // we'll set this to true in the sub-pins if we find any

      var size = getScrollerSize(),
          scrollerBounds = getScrollerOffsets(),
          max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction),
          isFirstRefresh = change <= 0.01,
          offset = 0,
          otherPinOffset = pinOffset || 0,
          parsedEnd = ScrollTrigger_isObject(position) ? position.end : vars.end,
          parsedEndTrigger = vars.endTrigger || trigger,
          parsedStart = ScrollTrigger_isObject(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"),
          pinnedContainer = self.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer, self),
          triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0,
          i = triggerIndex,
          cs,
          bounds,
          scroll,
          isVertical,
          override,
          curTrigger,
          curPin,
          oppositeScroll,
          initted,
          revertedPins,
          forcedOverflow,
          markerStartOffset,
          markerEndOffset;

      if (markers && ScrollTrigger_isObject(position)) {
        // if we alter the start/end positions with .setPositions(), it generally feeds in absolute NUMBERS which don't convey information about where to line up the markers, so to keep it intuitive, we record how far the trigger positions shift after applying the new numbers and then offset by that much in the opposite direction. We do the same to the associated trigger markers too of course.
        markerStartOffset = ScrollTrigger_gsap.getProperty(markerStartTrigger, direction.p);
        markerEndOffset = ScrollTrigger_gsap.getProperty(markerEndTrigger, direction.p);
      }

      while (i--) {
        // user might try to pin the same element more than once, so we must find any prior triggers with the same pin, revert them, and determine how long they're pinning so that we can offset things appropriately. Make sure we revert from last to first so that things "rewind" properly.
        curTrigger = _triggers[i];
        curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self); // if it's a timeline-based trigger that hasn't been fully initialized yet because it's waiting for 1 tick, just force the refresh() here, otherwise if it contains a pin that's supposed to affect other ScrollTriggers further down the page, they won't be adjusted properly.

        curPin = curTrigger.pin;

        if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
          revertedPins || (revertedPins = []);
          revertedPins.unshift(curTrigger); // we'll revert from first to last to make sure things reach their end state properly

          curTrigger.revert(true, true);
        }

        if (curTrigger !== _triggers[i]) {
          // in case it got removed.
          triggerIndex--;
          i--;
        }
      }

      ScrollTrigger_isFunction(parsedStart) && (parsedStart = parsedStart(self));
      parsedStart = _parseClamp(parsedStart, "start", self);
      start = ScrollTrigger_parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._startClamp && "_startClamp") || (pin ? -0.001 : 0);
      ScrollTrigger_isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));

      if (ScrollTrigger_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
        if (~parsedEnd.indexOf(" ")) {
          parsedEnd = (ScrollTrigger_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
        } else {
          offset = _offsetToPx(parsedEnd.substr(2), size);
          parsedEnd = ScrollTrigger_isString(parsedStart) ? parsedStart : (containerAnimation ? ScrollTrigger_gsap.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset; // _parsePosition won't factor in the offset if the start is a number, so do it here.

          parsedEndTrigger = trigger;
        }
      }

      parsedEnd = _parseClamp(parsedEnd, "end", self);
      end = Math.max(start, ScrollTrigger_parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._endClamp && "_endClamp")) || -0.001;
      offset = 0;
      i = triggerIndex;

      while (i--) {
        curTrigger = _triggers[i];
        curPin = curTrigger.pin;

        if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
          cs = curTrigger.end - (self._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);

          if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) {
            // numeric start values shouldn't be offset at all - treat them as absolute
            offset += cs * (1 - curTrigger.progress);
          }

          curPin === pin && (otherPinOffset += cs);
        }
      }

      start += offset;
      end += offset;
      self._startClamp && (self._startClamp += offset);

      if (self._endClamp && !_refreshingAll) {
        self._endClamp = end || -0.001;
        end = Math.min(end, _maxScroll(scroller, direction));
      }

      change = end - start || (start -= 0.01) && 0.001;

      if (isFirstRefresh) {
        // on the very first refresh(), the prevProgress couldn't have been accurate yet because the start/end were never calculated, so we set it here. Before 3.11.5, it could lead to an inaccurate scroll position restoration with snapping.
        prevProgress = ScrollTrigger_gsap.utils.clamp(0, 1, ScrollTrigger_gsap.utils.normalize(start, end, prevScroll));
      }

      self._pinPush = otherPinOffset;

      if (markerStart && offset) {
        // offset the markers if necessary
        cs = {};
        cs[direction.a] = "+=" + offset;
        pinnedContainer && (cs[direction.p] = "-=" + scrollFunc());
        ScrollTrigger_gsap.set([markerStart, markerEnd], cs);
      }

      if (pin) {
        cs = _getComputedStyle(pin);
        isVertical = direction === _vertical;
        scroll = scrollFunc(); // recalculate because the triggers can affect the scroll

        pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;

        if (!max && end > 1) {
          // makes sure the scroller has a scrollbar, otherwise if something has width: 100%, for example, it would be too big (exclude the scrollbar). See https://greensock.com/forums/topic/25182-scrolltrigger-width-of-page-increase-where-markers-are-set-to-false/
          forcedOverflow = (isViewport ? ScrollTrigger_doc.scrollingElement || ScrollTrigger_docEl : scroller).style;
          forcedOverflow = {
            style: forcedOverflow,
            value: forcedOverflow["overflow" + direction.a.toUpperCase()]
          };

          if (isViewport && _getComputedStyle(ScrollTrigger_body)["overflow" + direction.a.toUpperCase()] !== "scroll") {
            // avoid an extra scrollbar if BOTH <html> and <body> have overflow set to "scroll"
            forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
          }
        }

        _swapPinIn(pin, spacer, cs);

        pinState = _getState(pin); // transforms will interfere with the top/left/right/bottom placement, so remove them temporarily. getBoundingClientRect() factors in transforms.

        bounds = _getBounds(pin, true);
        oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();

        if (pinSpacing) {
          spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
          spacerState.t = spacer;
          i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
          i && spacerState.push(direction.d, i + _px); // for box-sizing: border-box (must include padding).

          _setState(spacerState);

          if (pinnedContainer) {
            // in ScrollTrigger.refresh(), we need to re-evaluate the pinContainer's size because this pinSpacing may stretch it out, but we can't just add the exact distance because depending on layout, it may not push things down or it may only do so partially.
            _triggers.forEach(function (t) {
              if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) {
                t._subPinOffset = true;
              }
            });
          }

          useFixedPosition && scrollFunc(prevScroll);
        }

        if (useFixedPosition) {
          override = {
            top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
            left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
            boxSizing: "border-box",
            position: "fixed"
          };
          override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
          override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
          override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
          override[_padding] = cs[_padding];
          override[_padding + _Top] = cs[_padding + _Top];
          override[_padding + _Right] = cs[_padding + _Right];
          override[_padding + _Bottom] = cs[_padding + _Bottom];
          override[_padding + _Left] = cs[_padding + _Left];
          pinActiveState = _copyState(pinOriginalState, override, pinReparent);
          _refreshingAll && scrollFunc(0);
        }

        if (animation) {
          // the animation might be affecting the transform, so we must jump to the end, check the value, and compensate accordingly. Otherwise, when it becomes unpinned, the pinSetter() will get set to a value that doesn't include whatever the animation did.
          initted = animation._initted; // if not, we must invalidate() after this step, otherwise it could lock in starting values prematurely.

          ScrollTrigger_suppressOverwrites(1);

          animation.render(animation.duration(), true, true);
          pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
          pinMoves = Math.abs(change - pinChange) > 1;
          useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2); // transform is the last property/value set in the state Array. Since the animation is controlling that, we should omit it.

          animation.render(0, true, true);
          initted || animation.invalidate(true);
          animation.parent || animation.totalTime(animation.totalTime()); // if, for example, a toggleAction called play() and then refresh() happens and when we render(1) above, it would cause the animation to complete and get removed from its parent, so this makes sure it gets put back in.

          ScrollTrigger_suppressOverwrites(0);
        } else {
          pinChange = change;
        }

        forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
      } else if (trigger && scrollFunc() && !containerAnimation) {
        // it may be INSIDE a pinned element, so walk up the tree and look for any elements with _pinOffset to compensate because anything with pinSpacing that's already scrolled would throw off the measurements in getBoundingClientRect()
        bounds = trigger.parentNode;

        while (bounds && bounds !== ScrollTrigger_body) {
          if (bounds._pinOffset) {
            start -= bounds._pinOffset;
            end -= bounds._pinOffset;
          }

          bounds = bounds.parentNode;
        }
      }

      revertedPins && revertedPins.forEach(function (t) {
        return t.revert(false, true);
      });
      self.start = start;
      self.end = end;
      scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc(); // reset velocity

      if (!containerAnimation && !_refreshingAll) {
        scroll1 < prevScroll && scrollFunc(prevScroll);
        self.scroll.rec = 0;
      }

      self.revert(false, true);
      lastRefresh = ScrollTrigger_getTime();

      if (snapDelayedCall) {
        lastSnap = -1; // just so snapping gets re-enabled, clear out any recorded last value
        // self.isActive && scrollFunc(start + change * prevProgress); // previously this line was here to ensure that when snapping kicks in, it's from the previous progress but in some cases that's not desirable, like an all-page ScrollTrigger when new content gets added to the page, that'd totally change the progress.

        snapDelayedCall.restart(true);
      }

      _refreshing = 0;
      animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true); // must force a re-render because if saveStyles() was used on the target(s), the styles could have been wiped out during the refresh().

      if (isFirstRefresh || prevProgress !== self.progress || containerAnimation) {
        // ensures that the direction is set properly (when refreshing, progress is set back to 0 initially, then back again to wherever it needs to be) and that callbacks are triggered.
        animation && !isToggle && animation.totalProgress(containerAnimation && start < -0.001 && !prevProgress ? ScrollTrigger_gsap.utils.normalize(start, end, 0) : prevProgress, true); // to avoid issues where animation callbacks like onStart aren't triggered.

        self.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
      }

      pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
      scrubTween && scrubTween.invalidate();

      if (!isNaN(markerStartOffset)) {
        // numbers were passed in for the position which are absolute, so instead of just putting the markers at the very bottom of the viewport, we figure out how far they shifted down (it's safe to assume they were originally positioned in closer relation to the trigger element with values like "top", "center", a percentage or whatever, so we offset that much in the opposite direction to basically revert them to the relative position thy were at previously.
        markerStartOffset -= ScrollTrigger_gsap.getProperty(markerStartTrigger, direction.p);
        markerEndOffset -= ScrollTrigger_gsap.getProperty(markerEndTrigger, direction.p);

        _shiftMarker(markerStartTrigger, direction, markerStartOffset);

        _shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));

        _shiftMarker(markerEndTrigger, direction, markerEndOffset);

        _shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
      }

      isFirstRefresh && !_refreshingAll && self.update(); // edge case - when you reload a page when it's already scrolled down, some browsers fire a "scroll" event before DOMContentLoaded, triggering an updateAll(). If we don't update the self.progress as part of refresh(), then when it happens next, it may record prevProgress as 0 when it really shouldn't, potentially causing a callback in an animation to fire again.

      if (onRefresh && !_refreshingAll && !executingOnRefresh) {
        // when refreshing all, we do extra work to correct pinnedContainer sizes and ensure things don't exceed the maxScroll, so we should do all the refreshes at the end after all that work so that the start/end values are corrected.
        executingOnRefresh = true;
        onRefresh(self);
        executingOnRefresh = false;
      }
    };

    self.getVelocity = function () {
      return (scrollFunc() - scroll2) / (ScrollTrigger_getTime() - _time2) * 1000 || 0;
    };

    self.endAnimation = function () {
      _endAnimation(self.callbackAnimation);

      if (animation) {
        scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
      }
    };

    self.labelToScroll = function (label) {
      return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
    };

    self.getTrailing = function (name) {
      var i = _triggers.indexOf(self),
          a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);

      return (ScrollTrigger_isString(name) ? a.filter(function (t) {
        return t.vars.preventOverlaps === name;
      }) : a).filter(function (t) {
        return self.direction > 0 ? t.end <= start : t.start >= end;
      });
    };

    self.update = function (reset, recordVelocity, forceFake) {
      if (containerAnimation && !forceFake && !reset) {
        return;
      }

      var scroll = _refreshingAll === true ? prevScroll : self.scroll(),
          p = reset ? 0 : (scroll - start) / change,
          clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0,
          prevProgress = self.progress,
          isActive,
          wasActive,
          toggleState,
          action,
          stateChanged,
          toggled,
          isAtMax,
          isTakingAction;

      if (recordVelocity) {
        scroll2 = scroll1;
        scroll1 = containerAnimation ? scrollFunc() : scroll;

        if (snap) {
          snap2 = snap1;
          snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
        }
      } // anticipate the pinning a few ticks ahead of time based on velocity to avoid a visual glitch due to the fact that most browsers do scrolling on a separate thread (not synced with requestAnimationFrame).


      anticipatePin && !clipped && pin && !_refreshing && !ScrollTrigger_startup && _lastScrollTime && start < scroll + (scroll - scroll2) / (ScrollTrigger_getTime() - _time2) * anticipatePin && (clipped = 0.0001);

      if (clipped !== prevProgress && self.enabled) {
        isActive = self.isActive = !!clipped && clipped < 1;
        wasActive = !!prevProgress && prevProgress < 1;
        toggled = isActive !== wasActive;
        stateChanged = toggled || !!clipped !== !!prevProgress; // could go from start all the way to end, thus it didn't toggle but it did change state in a sense (may need to fire a callback)

        self.direction = clipped > prevProgress ? 1 : -1;
        self.progress = clipped;

        if (stateChanged && !_refreshing) {
          toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3; // 0 = enter, 1 = leave, 2 = enterBack, 3 = leaveBack (we prioritize the FIRST encounter, thus if you scroll really fast past the onEnter and onLeave in one tick, it'd prioritize onEnter.

          if (isToggle) {
            action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState]; // if it didn't toggle, that means it shot right past and since we prioritize the "enter" action, we should switch to the "leave" in this case (but only if one is defined)

            isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
          }
        }

        preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (ScrollTrigger_isFunction(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function (t) {
          return t.endAnimation();
        }));

        if (!isToggle) {
          if (scrubTween && !_refreshing && !ScrollTrigger_startup) {
            scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start); // if there's a scrub on both the container animation and this one (or a ScrollSmoother), the update order would cause this one not to have rendered yet, so it wouldn't make any progress before we .restart() it heading toward the new progress so it'd appear stuck thus we force a render here.

            if (scrubTween.resetTo) {
              scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
            } else {
              // legacy support (courtesy), before 3.10.0
              scrubTween.vars.totalProgress = clipped;
              scrubTween.invalidate().restart();
            }
          } else if (animation) {
            animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)));
          }
        }

        if (pin) {
          reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);

          if (!useFixedPosition) {
            pinSetter(ScrollTrigger_round(pinStart + pinChange * clipped));
          } else if (stateChanged) {
            isAtMax = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction); // if it's at the VERY end of the page, don't switch away from position: fixed because it's pointless and it could cause a brief flash when the user scrolls back up (when it gets pinned again)

            if (pinReparent) {
              if (!reset && (isActive || isAtMax)) {
                var bounds = _getBounds(pin, true),
                    _offset = scroll - start;

                _reparent(pin, ScrollTrigger_body, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
              } else {
                _reparent(pin, spacer);
              }
            }

            _setState(isActive || isAtMax ? pinActiveState : pinState);

            pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
          }
        }

        snap && !tweenTo.tween && !_refreshing && !ScrollTrigger_startup && snapDelayedCall.restart(true);
        toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function (el) {
          return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
        }); // classes could affect positioning, so do it even if reset or refreshing is true.

        onUpdate && !isToggle && !reset && onUpdate(self);

        if (stateChanged && !_refreshing) {
          if (isToggle) {
            if (isTakingAction) {
              if (action === "complete") {
                animation.pause().totalProgress(1);
              } else if (action === "reset") {
                animation.restart(true).pause();
              } else if (action === "restart") {
                animation.restart(true);
              } else {
                animation[action]();
              }
            }

            onUpdate && onUpdate(self);
          }

          if (toggled || !_limitCallbacks) {
            // on startup, the page could be scrolled and we don't want to fire callbacks that didn't toggle. For example onEnter shouldn't fire if the ScrollTrigger isn't actually entered.
            onToggle && toggled && ScrollTrigger_callback(self, onToggle);
            callbacks[toggleState] && ScrollTrigger_callback(self, callbacks[toggleState]);
            once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0); // a callback shouldn't be called again if once is true.

            if (!toggled) {
              // it's possible to go completely past, like from before the start to after the end (or vice-versa) in which case BOTH callbacks should be fired in that order
              toggleState = clipped === 1 ? 1 : 3;
              callbacks[toggleState] && ScrollTrigger_callback(self, callbacks[toggleState]);
            }
          }

          if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (ScrollTrigger_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
            _endAnimation(self.callbackAnimation);

            scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
          }
        } else if (isToggle && onUpdate && !_refreshing) {
          onUpdate(self);
        }
      } // update absolutely-positioned markers (only if the scroller isn't the viewport)


      if (markerEndSetter) {
        var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
        markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
        markerEndSetter(n);
      }

      caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
    };

    self.enable = function (reset, refresh) {
      if (!self.enabled) {
        self.enabled = true;

        ScrollTrigger_addListener(scroller, "resize", _onResize);

        isViewport || ScrollTrigger_addListener(scroller, "scroll", ScrollTrigger_onScroll);
        onRefreshInit && ScrollTrigger_addListener(ScrollTrigger, "refreshInit", onRefreshInit);

        if (reset !== false) {
          self.progress = prevProgress = 0;
          scroll1 = scroll2 = lastSnap = scrollFunc();
        }

        refresh !== false && self.refresh();
      }
    };

    self.getTween = function (snap) {
      return snap && tweenTo ? tweenTo.tween : scrubTween;
    };

    self.setPositions = function (newStart, newEnd, keepClamp, pinOffset) {
      // doesn't persist after refresh()! Intended to be a way to override values that were set during refresh(), like you could set it in onRefresh()
      if (containerAnimation) {
        // convert ratios into scroll positions. Remember, start/end values on ScrollTriggers that have a containerAnimation refer to the time (in seconds), NOT scroll positions.
        var st = containerAnimation.scrollTrigger,
            duration = containerAnimation.duration(),
            _change = st.end - st.start;

        newStart = st.start + _change * newStart / duration;
        newEnd = st.start + _change * newEnd / duration;
      }

      self.refresh(false, false, {
        start: _keepClamp(newStart, keepClamp && !!self._startClamp),
        end: _keepClamp(newEnd, keepClamp && !!self._endClamp)
      }, pinOffset);
      self.update();
    };

    self.adjustPinSpacing = function (amount) {
      if (spacerState && amount) {
        var i = spacerState.indexOf(direction.d) + 1;
        spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
        spacerState[1] = parseFloat(spacerState[1]) + amount + _px;

        _setState(spacerState);
      }
    };

    self.disable = function (reset, allowAnimation) {
      if (self.enabled) {
        reset !== false && self.revert(true, true);
        self.enabled = self.isActive = false;
        allowAnimation || scrubTween && scrubTween.pause();
        prevScroll = 0;
        pinCache && (pinCache.uncache = 1);
        onRefreshInit && ScrollTrigger_removeListener(ScrollTrigger, "refreshInit", onRefreshInit);

        if (snapDelayedCall) {
          snapDelayedCall.pause();
          tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
        }

        if (!isViewport) {
          var i = _triggers.length;

          while (i--) {
            if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
              return; //don't remove the listeners if there are still other triggers referencing it.
            }
          }

          ScrollTrigger_removeListener(scroller, "resize", _onResize);

          isViewport || ScrollTrigger_removeListener(scroller, "scroll", ScrollTrigger_onScroll);
        }
      }
    };

    self.kill = function (revert, allowAnimation) {
      self.disable(revert, allowAnimation);
      scrubTween && !allowAnimation && scrubTween.kill();
      id && delete _ids[id];

      var i = _triggers.indexOf(self);

      i >= 0 && _triggers.splice(i, 1);
      i === _i && _direction > 0 && _i--; // if we're in the middle of a refresh() or update(), splicing would cause skips in the index, so adjust...
      // if no other ScrollTrigger instances of the same scroller are found, wipe out any recorded scroll position. Otherwise, in a single page application, for example, it could maintain scroll position when it really shouldn't.

      i = 0;

      _triggers.forEach(function (t) {
        return t.scroller === self.scroller && (i = 1);
      });

      i || _refreshingAll || (self.scroll.rec = 0);

      if (animation) {
        animation.scrollTrigger = null;
        revert && animation.revert({
          kill: false
        });
        allowAnimation || animation.kill();
      }

      markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
        return m.parentNode && m.parentNode.removeChild(m);
      });
      _primary === self && (_primary = 0);

      if (pin) {
        pinCache && (pinCache.uncache = 1);
        i = 0;

        _triggers.forEach(function (t) {
          return t.pin === pin && i++;
        });

        i || (pinCache.spacer = 0); // if there aren't any more ScrollTriggers with the same pin, remove the spacer, otherwise it could be contaminated with old/stale values if the user re-creates a ScrollTrigger for the same element.
      }

      vars.onKill && vars.onKill(self);
    };

    _triggers.push(self);

    self.enable(false, false);
    customRevertReturn && customRevertReturn(self);

    if (animation && animation.add && !change) {
      // if the animation is a timeline, it may not have been populated yet, so it wouldn't render at the proper place on the first refresh(), thus we should schedule one for the next tick. If "change" is defined, we know it must be re-enabling, thus we can refresh() right away.
      var updateFunc = self.update; // some browsers may fire a scroll event BEFORE a tick elapses and/or the DOMContentLoaded fires. So there's a chance update() will be called BEFORE a refresh() has happened on a Timeline-attached ScrollTrigger which means the start/end won't be calculated yet. We don't want to add conditional logic inside the update() method (like check to see if end is defined and if not, force a refresh()) because that's a function that gets hit a LOT (performance). So we swap out the real update() method for this one that'll re-attach it the first time it gets called and of course forces a refresh().

      self.update = function () {
        self.update = updateFunc;
        start || end || self.refresh();
      };

      ScrollTrigger_gsap.delayedCall(0.01, self.update);
      change = 0.01;
      start = end = 0;
    } else {
      self.refresh();
    }

    pin && _queueRefreshAll(); // pinning could affect the positions of other things, so make sure we queue a full refresh()
  };

  ScrollTrigger.register = function register(core) {
    if (!ScrollTrigger_coreInitted) {
      ScrollTrigger_gsap = core || ScrollTrigger_getGSAP();
      ScrollTrigger_windowExists() && window.document && ScrollTrigger.enable();
      ScrollTrigger_coreInitted = _enabled;
    }

    return ScrollTrigger_coreInitted;
  };

  ScrollTrigger.defaults = function defaults(config) {
    if (config) {
      for (var p in config) {
        ScrollTrigger_defaults[p] = config[p];
      }
    }

    return ScrollTrigger_defaults;
  };

  ScrollTrigger.disable = function disable(reset, kill) {
    _enabled = 0;

    _triggers.forEach(function (trigger) {
      return trigger[kill ? "kill" : "disable"](reset);
    });

    ScrollTrigger_removeListener(ScrollTrigger_win, "wheel", ScrollTrigger_onScroll);

    ScrollTrigger_removeListener(ScrollTrigger_doc, "scroll", ScrollTrigger_onScroll);

    clearInterval(_syncInterval);

    ScrollTrigger_removeListener(ScrollTrigger_doc, "touchcancel", ScrollTrigger_passThrough);

    ScrollTrigger_removeListener(ScrollTrigger_body, "touchstart", ScrollTrigger_passThrough);

    _multiListener(ScrollTrigger_removeListener, ScrollTrigger_doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);

    _multiListener(ScrollTrigger_removeListener, ScrollTrigger_doc, "pointerup,touchend,mouseup", _pointerUpHandler);

    _resizeDelay.kill();

    _iterateAutoRefresh(ScrollTrigger_removeListener);

    for (var i = 0; i < _scrollers.length; i += 3) {
      _wheelListener(ScrollTrigger_removeListener, _scrollers[i], _scrollers[i + 1]);

      _wheelListener(ScrollTrigger_removeListener, _scrollers[i], _scrollers[i + 2]);
    }
  };

  ScrollTrigger.enable = function enable() {
    ScrollTrigger_win = window;
    ScrollTrigger_doc = document;
    ScrollTrigger_docEl = ScrollTrigger_doc.documentElement;
    ScrollTrigger_body = ScrollTrigger_doc.body;

    if (ScrollTrigger_gsap) {
      _toArray = ScrollTrigger_gsap.utils.toArray;
      ScrollTrigger_clamp = ScrollTrigger_gsap.utils.clamp;
      ScrollTrigger_context = ScrollTrigger_gsap.core.context || ScrollTrigger_passThrough;
      ScrollTrigger_suppressOverwrites = ScrollTrigger_gsap.core.suppressOverwrites || ScrollTrigger_passThrough;
      _scrollRestoration = ScrollTrigger_win.history.scrollRestoration || "auto";
      _lastScroll = ScrollTrigger_win.pageYOffset;
      ScrollTrigger_gsap.core.globals("ScrollTrigger", ScrollTrigger); // must register the global manually because in Internet Explorer, functions (classes) don't have a "name" property.

      if (ScrollTrigger_body) {
        _enabled = 1;
        _div100vh = document.createElement("div"); // to solve mobile browser address bar show/hide resizing, we shouldn't rely on window.innerHeight. Instead, use a <div> with its height set to 100vh and measure that since that's what the scrolling is based on anyway and it's not affected by address bar showing/hiding.

        _div100vh.style.height = "100vh";
        _div100vh.style.position = "absolute";

        _refresh100vh();

        _rafBugFix();

        Observer.register(ScrollTrigger_gsap); // isTouch is 0 if no touch, 1 if ONLY touch, and 2 if it can accommodate touch but also other types like mouse/pointer.

        ScrollTrigger.isTouch = Observer.isTouch;
        _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent); // since 2017, iOS has had a bug that causes event.clientX/Y to be inaccurate when a scroll occurs, thus we must alternate ignoring every other touchmove event to work around it. See https://bugs.webkit.org/show_bug.cgi?id=181954 and https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503

        ScrollTrigger_addListener(ScrollTrigger_win, "wheel", ScrollTrigger_onScroll); // mostly for 3rd party smooth scrolling libraries.


        ScrollTrigger_root = [ScrollTrigger_win, ScrollTrigger_doc, ScrollTrigger_docEl, ScrollTrigger_body];

        if (ScrollTrigger_gsap.matchMedia) {
          ScrollTrigger.matchMedia = function (vars) {
            var mm = ScrollTrigger_gsap.matchMedia(),
                p;

            for (p in vars) {
              mm.add(p, vars[p]);
            }

            return mm;
          };

          ScrollTrigger_gsap.addEventListener("matchMediaInit", function () {
            return _revertAll();
          });
          ScrollTrigger_gsap.addEventListener("matchMediaRevert", function () {
            return _revertRecorded();
          });
          ScrollTrigger_gsap.addEventListener("matchMedia", function () {
            _refreshAll(0, 1);

            ScrollTrigger_dispatch("matchMedia");
          });
          ScrollTrigger_gsap.matchMedia("(orientation: portrait)", function () {
            // when orientation changes, we should take new base measurements for the ignoreMobileResize feature.
            _setBaseDimensions();

            return _setBaseDimensions;
          });
        } else {
          console.warn("Requires GSAP 3.11.0 or later");
        }

        _setBaseDimensions();

        ScrollTrigger_addListener(ScrollTrigger_doc, "scroll", ScrollTrigger_onScroll); // some browsers (like Chrome), the window stops dispatching scroll events on the window if you scroll really fast, but it's consistent on the document!


        var bodyStyle = ScrollTrigger_body.style,
            border = bodyStyle.borderTopStyle,
            AnimationProto = ScrollTrigger_gsap.core.Animation.prototype,
            bounds,
            i;
        AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
          value: function value() {
            return this.time(-0.01, true);
          }
        }); // only for backwards compatibility (Animation.revert() was added after 3.10.4)

        bodyStyle.borderTopStyle = "solid"; // works around an issue where a margin of a child element could throw off the bounds of the _body, making it seem like there's a margin when there actually isn't. The border ensures that the bounds are accurate.

        bounds = _getBounds(ScrollTrigger_body);
        _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0; // accommodate the offset of the <body> caused by margins and/or padding

        _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
        border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style"); // TODO: (?) maybe move to leveraging the velocity mechanism in Observer and skip intervals.

        _syncInterval = setInterval(_sync, 250);
        ScrollTrigger_gsap.delayedCall(0.5, function () {
          return ScrollTrigger_startup = 0;
        });

        ScrollTrigger_addListener(ScrollTrigger_doc, "touchcancel", ScrollTrigger_passThrough); // some older Android devices intermittently stop dispatching "touchmove" events if we don't listen for "touchcancel" on the document.


        ScrollTrigger_addListener(ScrollTrigger_body, "touchstart", ScrollTrigger_passThrough); //works around Safari bug: https://greensock.com/forums/topic/21450-draggable-in-iframe-on-mobile-is-buggy/


        _multiListener(ScrollTrigger_addListener, ScrollTrigger_doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);

        _multiListener(ScrollTrigger_addListener, ScrollTrigger_doc, "pointerup,touchend,mouseup", _pointerUpHandler);

        ScrollTrigger_transformProp = ScrollTrigger_gsap.utils.checkPrefix("transform");

        _stateProps.push(ScrollTrigger_transformProp);

        ScrollTrigger_coreInitted = ScrollTrigger_getTime();
        _resizeDelay = ScrollTrigger_gsap.delayedCall(0.2, _refreshAll).pause();
        _autoRefresh = [ScrollTrigger_doc, "visibilitychange", function () {
          var w = ScrollTrigger_win.innerWidth,
              h = ScrollTrigger_win.innerHeight;

          if (ScrollTrigger_doc.hidden) {
            _prevWidth = w;
            _prevHeight = h;
          } else if (_prevWidth !== w || _prevHeight !== h) {
            _onResize();
          }
        }, ScrollTrigger_doc, "DOMContentLoaded", _refreshAll, ScrollTrigger_win, "load", _refreshAll, ScrollTrigger_win, "resize", _onResize];

        _iterateAutoRefresh(ScrollTrigger_addListener);

        _triggers.forEach(function (trigger) {
          return trigger.enable(0, 1);
        });

        for (i = 0; i < _scrollers.length; i += 3) {
          _wheelListener(ScrollTrigger_removeListener, _scrollers[i], _scrollers[i + 1]);

          _wheelListener(ScrollTrigger_removeListener, _scrollers[i], _scrollers[i + 2]);
        }
      }
    }
  };

  ScrollTrigger.config = function config(vars) {
    "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
    var ms = vars.syncInterval;
    ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
    "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger.isTouch === 1 && vars.ignoreMobileResize);

    if ("autoRefreshEvents" in vars) {
      _iterateAutoRefresh(ScrollTrigger_removeListener) || _iterateAutoRefresh(ScrollTrigger_addListener, vars.autoRefreshEvents || "none");
      _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
    }
  };

  ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
    var t = _getTarget(target),
        i = _scrollers.indexOf(t),
        isViewport = ScrollTrigger_isViewport(t);

    if (~i) {
      _scrollers.splice(i, isViewport ? 6 : 2);
    }

    if (vars) {
      isViewport ? _proxies.unshift(ScrollTrigger_win, vars, ScrollTrigger_body, vars, ScrollTrigger_docEl, vars) : _proxies.unshift(t, vars);
    }
  };

  ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
    _triggers.forEach(function (t) {
      return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
    });
  };

  ScrollTrigger.isInViewport = function isInViewport(element, ratio, horizontal) {
    var bounds = (ScrollTrigger_isString(element) ? _getTarget(element) : element).getBoundingClientRect(),
        offset = bounds[horizontal ? _width : _height] * ratio || 0;
    return horizontal ? bounds.right - offset > 0 && bounds.left + offset < ScrollTrigger_win.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < ScrollTrigger_win.innerHeight;
  };

  ScrollTrigger.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
    ScrollTrigger_isString(element) && (element = _getTarget(element));
    var bounds = element.getBoundingClientRect(),
        size = bounds[horizontal ? _width : _height],
        offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
    return horizontal ? (bounds.left + offset) / ScrollTrigger_win.innerWidth : (bounds.top + offset) / ScrollTrigger_win.innerHeight;
  };

  ScrollTrigger.killAll = function killAll(allowListeners) {
    _triggers.slice(0).forEach(function (t) {
      return t.vars.id !== "ScrollSmoother" && t.kill();
    });

    if (allowListeners !== true) {
      var listeners = ScrollTrigger_listeners.killAll || [];
      ScrollTrigger_listeners = {};
      listeners.forEach(function (f) {
        return f();
      });
    }
  };

  return ScrollTrigger;
}();
ScrollTrigger_ScrollTrigger.version = "3.12.2";

ScrollTrigger_ScrollTrigger.saveStyles = function (targets) {
  return targets ? _toArray(targets).forEach(function (target) {
    // saved styles are recorded in a consecutive alternating Array, like [element, cssText, transform attribute, cache, matchMedia, ...]
    if (target && target.style) {
      var i = _savedStyles.indexOf(target);

      i >= 0 && _savedStyles.splice(i, 5);

      _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), ScrollTrigger_gsap.core.getCache(target), ScrollTrigger_context());
    }
  }) : _savedStyles;
};

ScrollTrigger_ScrollTrigger.revert = function (soft, media) {
  return _revertAll(!soft, media);
};

ScrollTrigger_ScrollTrigger.create = function (vars, animation) {
  return new ScrollTrigger_ScrollTrigger(vars, animation);
};

ScrollTrigger_ScrollTrigger.refresh = function (safe) {
  return safe ? _onResize() : (ScrollTrigger_coreInitted || ScrollTrigger_ScrollTrigger.register()) && _refreshAll(true);
};

ScrollTrigger_ScrollTrigger.update = function (force) {
  return ++_scrollers.cache && _updateAll(force === true ? 2 : 0);
};

ScrollTrigger_ScrollTrigger.clearScrollMemory = _clearScrollMemory;

ScrollTrigger_ScrollTrigger.maxScroll = function (element, horizontal) {
  return _maxScroll(element, horizontal ? _horizontal : _vertical);
};

ScrollTrigger_ScrollTrigger.getScrollFunc = function (element, horizontal) {
  return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
};

ScrollTrigger_ScrollTrigger.getById = function (id) {
  return _ids[id];
};

ScrollTrigger_ScrollTrigger.getAll = function () {
  return _triggers.filter(function (t) {
    return t.vars.id !== "ScrollSmoother";
  });
}; // it's common for people to ScrollTrigger.getAll(t => t.kill()) on page routes, for example, and we don't want it to ruin smooth scrolling by killing the main ScrollSmoother one.


ScrollTrigger_ScrollTrigger.isScrolling = function () {
  return !!_lastScrollTime;
};

ScrollTrigger_ScrollTrigger.snapDirectional = _snapDirectional;

ScrollTrigger_ScrollTrigger.addEventListener = function (type, callback) {
  var a = ScrollTrigger_listeners[type] || (ScrollTrigger_listeners[type] = []);
  ~a.indexOf(callback) || a.push(callback);
};

ScrollTrigger_ScrollTrigger.removeEventListener = function (type, callback) {
  var a = ScrollTrigger_listeners[type],
      i = a && a.indexOf(callback);
  i >= 0 && a.splice(i, 1);
};

ScrollTrigger_ScrollTrigger.batch = function (targets, vars) {
  var result = [],
      varsCopy = {},
      interval = vars.interval || 0.016,
      batchMax = vars.batchMax || 1e9,
      proxyCallback = function proxyCallback(type, callback) {
    var elements = [],
        triggers = [],
        delay = ScrollTrigger_gsap.delayedCall(interval, function () {
      callback(elements, triggers);
      elements = [];
      triggers = [];
    }).pause();
    return function (self) {
      elements.length || delay.restart(true);
      elements.push(self.trigger);
      triggers.push(self);
      batchMax <= elements.length && delay.progress(1);
    };
  },
      p;

  for (p in vars) {
    varsCopy[p] = p.substr(0, 2) === "on" && ScrollTrigger_isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
  }

  if (ScrollTrigger_isFunction(batchMax)) {
    batchMax = batchMax();

    ScrollTrigger_addListener(ScrollTrigger_ScrollTrigger, "refresh", function () {
      return batchMax = vars.batchMax();
    });
  }

  _toArray(targets).forEach(function (target) {
    var config = {};

    for (p in varsCopy) {
      config[p] = varsCopy[p];
    }

    config.trigger = target;
    result.push(ScrollTrigger_ScrollTrigger.create(config));
  });

  return result;
}; // to reduce file size. clamps the scroll and also returns a duration multiplier so that if the scroll gets chopped shorter, the duration gets curtailed as well (otherwise if you're very close to the top of the page, for example, and swipe up really fast, it'll suddenly slow down and take a long time to reach the top).


var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier(scrollFunc, current, end, max) {
  current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
  return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
},
    _allowNativePanning = function _allowNativePanning(target, direction) {
  if (direction === true) {
    target.style.removeProperty("touch-action");
  } else {
    target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none"; // note: Firefox doesn't support it pinch-zoom properly, at least in addition to a pan-x or pan-y.
  }

  target === ScrollTrigger_docEl && _allowNativePanning(ScrollTrigger_body, direction);
},
    _overflow = {
  auto: 1,
  scroll: 1
},
    _nestedScroll = function _nestedScroll(_ref5) {
  var event = _ref5.event,
      target = _ref5.target,
      axis = _ref5.axis;

  var node = (event.changedTouches ? event.changedTouches[0] : event).target,
      cache = node._gsap || ScrollTrigger_gsap.core.getCache(node),
      time = ScrollTrigger_getTime(),
      cs;

  if (!cache._isScrollT || time - cache._isScrollT > 2000) {
    // cache for 2 seconds to improve performance.
    while (node && node !== ScrollTrigger_body && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]))) {
      node = node.parentNode;
    }

    cache._isScroll = node && node !== target && !ScrollTrigger_isViewport(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
    cache._isScrollT = time;
  }

  if (cache._isScroll || axis === "x") {
    event.stopPropagation();
    event._gsapAllow = true;
  }
},
    // capture events on scrollable elements INSIDE the <body> and allow those by calling stopPropagation() when we find a scrollable ancestor
_inputObserver = function _inputObserver(target, type, inputs, nested) {
  return Observer.create({
    target: target,
    capture: true,
    debounce: false,
    lockAxis: true,
    type: type,
    onWheel: nested = nested && _nestedScroll,
    onPress: nested,
    onDrag: nested,
    onScroll: nested,
    onEnable: function onEnable() {
      return inputs && ScrollTrigger_addListener(ScrollTrigger_doc, Observer.eventTypes[0], _captureInputs, false, true);
    },
    onDisable: function onDisable() {
      return ScrollTrigger_removeListener(ScrollTrigger_doc, Observer.eventTypes[0], _captureInputs, true);
    }
  });
},
    _inputExp = /(input|label|select|textarea)/i,
    _inputIsFocused,
    _captureInputs = function _captureInputs(e) {
  var isInput = _inputExp.test(e.target.tagName);

  if (isInput || _inputIsFocused) {
    e._gsapAllow = true;
    _inputIsFocused = isInput;
  }
},
    _getScrollNormalizer = function _getScrollNormalizer(vars) {
  ScrollTrigger_isObject(vars) || (vars = {});
  vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
  vars.type || (vars.type = "wheel,touch");
  vars.debounce = !!vars.debounce;
  vars.id = vars.id || "normalizer";

  var _vars2 = vars,
      normalizeScrollX = _vars2.normalizeScrollX,
      momentum = _vars2.momentum,
      allowNestedScroll = _vars2.allowNestedScroll,
      onRelease = _vars2.onRelease,
      self,
      maxY,
      target = _getTarget(vars.target) || ScrollTrigger_docEl,
      smoother = ScrollTrigger_gsap.core.globals().ScrollSmoother,
      smootherInstance = smoother && smoother.get(),
      content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()),
      scrollFuncY = _getScrollFunc(target, _vertical),
      scrollFuncX = _getScrollFunc(target, _horizontal),
      scale = 1,
      initialScale = (Observer.isTouch && ScrollTrigger_win.visualViewport ? ScrollTrigger_win.visualViewport.scale * ScrollTrigger_win.visualViewport.width : ScrollTrigger_win.outerWidth) / ScrollTrigger_win.innerWidth,
      wheelRefresh = 0,
      resolveMomentumDuration = ScrollTrigger_isFunction(momentum) ? function () {
    return momentum(self);
  } : function () {
    return momentum || 2.8;
  },
      lastRefreshID,
      skipTouchMove,
      inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll),
      resumeTouchMove = function resumeTouchMove() {
    return skipTouchMove = false;
  },
      scrollClampX = ScrollTrigger_passThrough,
      scrollClampY = ScrollTrigger_passThrough,
      updateClamps = function updateClamps() {
    maxY = _maxScroll(target, _vertical);
    scrollClampY = ScrollTrigger_clamp(_fixIOSBug ? 1 : 0, maxY);
    normalizeScrollX && (scrollClampX = ScrollTrigger_clamp(0, _maxScroll(target, _horizontal)));
    lastRefreshID = _refreshID;
  },
      removeContentOffset = function removeContentOffset() {
    content._gsap.y = ScrollTrigger_round(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
    content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
    scrollFuncY.offset = scrollFuncY.cacheID = 0;
  },
      ignoreDrag = function ignoreDrag() {
    if (skipTouchMove) {
      requestAnimationFrame(resumeTouchMove);

      var offset = ScrollTrigger_round(self.deltaY / 2),
          scroll = scrollClampY(scrollFuncY.v - offset);

      if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
        scrollFuncY.offset = scroll - scrollFuncY.v;

        var y = ScrollTrigger_round((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);

        content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
        content._gsap.y = y + "px";
        scrollFuncY.cacheID = _scrollers.cache;

        _updateAll();
      }

      return true;
    }

    scrollFuncY.offset && removeContentOffset();
    skipTouchMove = true;
  },
      tween,
      startScrollX,
      startScrollY,
      onStopDelayedCall,
      onResize = function onResize() {
    // if the window resizes, like on an iPhone which Apple FORCES the address bar to show/hide even if we event.preventDefault(), it may be scrolling too far now that the address bar is showing, so we must dynamically adjust the momentum tween.
    updateClamps();

    if (tween.isActive() && tween.vars.scrollY > maxY) {
      scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
    }
  };

  content && ScrollTrigger_gsap.set(content, {
    y: "+=0"
  }); // to ensure there's a cache (element._gsap)

  vars.ignoreCheck = function (e) {
    return _fixIOSBug && e.type === "touchmove" && ignoreDrag(e) || scale > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
  };

  vars.onPress = function () {
    skipTouchMove = false;
    var prevScale = scale;
    scale = ScrollTrigger_round((ScrollTrigger_win.visualViewport && ScrollTrigger_win.visualViewport.scale || 1) / initialScale);
    tween.pause();
    prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
    startScrollX = scrollFuncX();
    startScrollY = scrollFuncY();
    updateClamps();
    lastRefreshID = _refreshID;
  };

  vars.onRelease = vars.onGestureStart = function (self, wasDragging) {
    scrollFuncY.offset && removeContentOffset();

    if (!wasDragging) {
      onStopDelayedCall.restart(true);
    } else {
      _scrollers.cache++; // make sure we're pulling the non-cached value
      // alternate algorithm: durX = Math.min(6, Math.abs(self.velocityX / 800)),	dur = Math.max(durX, Math.min(6, Math.abs(self.velocityY / 800))); dur = dur * (0.4 + (1 - _power4In(dur / 6)) * 0.6)) * (momentumSpeed || 1)

      var dur = resolveMomentumDuration(),
          currentScroll,
          endScroll;

      if (normalizeScrollX) {
        currentScroll = scrollFuncX();
        endScroll = currentScroll + dur * 0.05 * -self.velocityX / 0.227; // the constant .227 is from power4(0.05). velocity is inverted because scrolling goes in the opposite direction.

        dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
        tween.vars.scrollX = scrollClampX(endScroll);
      }

      currentScroll = scrollFuncY();
      endScroll = currentScroll + dur * 0.05 * -self.velocityY / 0.227; // the constant .227 is from power4(0.05)

      dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
      tween.vars.scrollY = scrollClampY(endScroll);
      tween.invalidate().duration(dur).play(0.01);

      if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
        // iOS bug: it'll show the address bar but NOT fire the window "resize" event until the animation is done but we must protect against overshoot so we leverage an onUpdate to do so.
        ScrollTrigger_gsap.to({}, {
          onUpdate: onResize,
          duration: dur
        });
      }
    }

    onRelease && onRelease(self);
  };

  vars.onWheel = function () {
    tween._ts && tween.pause();

    if (ScrollTrigger_getTime() - wheelRefresh > 1000) {
      // after 1 second, refresh the clamps otherwise that'll only happen when ScrollTrigger.refresh() is called or for touch-scrolling.
      lastRefreshID = 0;
      wheelRefresh = ScrollTrigger_getTime();
    }
  };

  vars.onChange = function (self, dx, dy, xArray, yArray) {
    _refreshID !== lastRefreshID && updateClamps();
    dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self.startX - self.x) : scrollFuncX() + dx - xArray[1])); // for more precision, we track pointer/touch movement from the start, otherwise it'll drift.

    if (dy) {
      scrollFuncY.offset && removeContentOffset();
      var isTouch = yArray[2] === dy,
          y = isTouch ? startScrollY + self.startY - self.y : scrollFuncY() + dy - yArray[1],
          yClamped = scrollClampY(y);
      isTouch && y !== yClamped && (startScrollY += yClamped - y);
      scrollFuncY(yClamped);
    }

    (dy || dx) && _updateAll();
  };

  vars.onEnable = function () {
    _allowNativePanning(target, normalizeScrollX ? false : "x");

    ScrollTrigger_ScrollTrigger.addEventListener("refresh", onResize);

    ScrollTrigger_addListener(ScrollTrigger_win, "resize", onResize);

    if (scrollFuncY.smooth) {
      scrollFuncY.target.style.scrollBehavior = "auto";
      scrollFuncY.smooth = scrollFuncX.smooth = false;
    }

    inputObserver.enable();
  };

  vars.onDisable = function () {
    _allowNativePanning(target, true);

    ScrollTrigger_removeListener(ScrollTrigger_win, "resize", onResize);

    ScrollTrigger_ScrollTrigger.removeEventListener("refresh", onResize);
    inputObserver.kill();
  };

  vars.lockAxis = vars.lockAxis !== false;
  self = new Observer(vars);
  self.iOS = _fixIOSBug; // used in the Observer getCachedScroll() function to work around an iOS bug that wreaks havoc with TouchEvent.clientY if we allow scroll to go all the way back to 0.

  _fixIOSBug && !scrollFuncY() && scrollFuncY(1); // iOS bug causes event.clientY values to freak out (wildly inaccurate) if the scroll position is exactly 0.

  _fixIOSBug && ScrollTrigger_gsap.ticker.add(ScrollTrigger_passThrough); // prevent the ticker from sleeping

  onStopDelayedCall = self._dc;
  tween = ScrollTrigger_gsap.to(self, {
    ease: "power4",
    paused: true,
    scrollX: normalizeScrollX ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function () {
        return tween.pause();
      })
    },
    onUpdate: _updateAll,
    onComplete: onStopDelayedCall.vars.onComplete
  }); // we need the modifier to sense if the scroll position is altered outside of the momentum tween (like with a scrollTo tween) so we can pause() it to prevent conflicts.

  return self;
};

ScrollTrigger_ScrollTrigger.sort = function (func) {
  return _triggers.sort(func || function (a, b) {
    return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
  });
};

ScrollTrigger_ScrollTrigger.observe = function (vars) {
  return new Observer(vars);
};

ScrollTrigger_ScrollTrigger.normalizeScroll = function (vars) {
  if (typeof vars === "undefined") {
    return ScrollTrigger_normalizer;
  }

  if (vars === true && ScrollTrigger_normalizer) {
    return ScrollTrigger_normalizer.enable();
  }

  if (vars === false) {
    return ScrollTrigger_normalizer && ScrollTrigger_normalizer.kill();
  }

  var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
  ScrollTrigger_normalizer && ScrollTrigger_normalizer.target === normalizer.target && ScrollTrigger_normalizer.kill();
  ScrollTrigger_isViewport(normalizer.target) && (ScrollTrigger_normalizer = normalizer);
  return normalizer;
};

ScrollTrigger_ScrollTrigger.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: _getVelocityProp,
  _inputObserver: _inputObserver,
  _scrollers: _scrollers,
  _proxies: _proxies,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function ss() {
      _lastScrollTime || ScrollTrigger_dispatch("scrollStart");
      _lastScrollTime = ScrollTrigger_getTime();
    },
    // a way to get the _refreshing value in Observer
    ref: function ref() {
      return _refreshing;
    }
  }
};
ScrollTrigger_getGSAP() && ScrollTrigger_gsap.registerPlugin(ScrollTrigger_ScrollTrigger);

;// CONCATENATED MODULE: ./src/index.js







console.log(example);
gsapWithCSS.registerPlugin(ScrollTrigger_ScrollTrigger);
var panels = gsapWithCSS.utils.toArray(".panel");
panels.pop();
panels.forEach((panel, i) => {
  // Get the element holding the content inside the panel

  // Get the Height of the content inside the panel
  let panelHeight = panel.offsetHeight;

  // Get the window height
  let windowHeight = window.innerHeight;
  let difference = panelHeight - windowHeight;

  // ratio (between 0 and 1) representing the portion of the overall animation that's for the fake-scrolling. We know that the scale & fade should happen over the course of 1 windowHeight, so we can figure out the ratio based on how far we must fake-scroll
  // let fakeScrollRatio =
  //   difference > 0 ? difference / (difference + windowHeight) : 0;

  // // if we need to fake scroll (because the panel is taller than the window), add the appropriate amount of margin to the bottom so that the next element comes in at the proper time.
  // if (fakeScrollRatio) {
  //   panel.style.marginBottom = panelHeight * fakeScrollRatio + "px";
  // }
  let tl = gsapWithCSS.timeline({
    scrollTrigger: {
      trigger: panel,
      start: "bottom bottom",
      end: "bottom top",
      pinSpacing: false,
      pin: true,
      scrub: true
    }
  });

  // fake scroll. We use 1 because that's what the rest of the timeline consists of (0.9 scale + 0.1 fade)
  if (fakeScrollRatio) {
    tl.to(innerpanel, {
      y: -difference,
      duration: 1 / (1 - fakeScrollRatio) - 1,
      ease: "none"
    });
  }
  // tl.fromTo(
  //   panel,
  //   { scale: 1, opacity: 1 },
  //   { scale: 0.5, opacity: 0.5, duration: 0.9 }
  // ).to(panel, { opacity: 0, duration: 0.1 });
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBLG1EQUFtRDtBQUNuRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbURBQW1EOztBQUVuRDtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDO0FBQ2pDO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxpRUFBaUU7O0FBRWpFO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWlFOztBQUVqRSxzRUFBc0U7O0FBRXRFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7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QUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBLG9FQUFvRSxJQUFJLEVBQUUsSUFBSTtBQUM5RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDs7QUFFOUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DOztBQUVuQztBQUNBLG1CQUFtQix3QkFBd0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUZBQXFGOztBQUVyRjs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsNkNBQTZDOztBQUU3QztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUTs7QUFFUjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDRCQUE0Qiw4RUFBOEU7QUFDcEksY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMsT0FBTztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJGQUEyRjtBQUMzRixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSTs7QUFFSixrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxvRUFBb0U7QUFDcEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUMsMkJBQTJCO0FBQzNCOztBQUVBLHlEQUF5RDtBQUN6RDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd01BQXdNO0FBQ3hNOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBHQUEwRztBQUMxRyxzR0FBc0c7QUFDdEc7QUFDQTs7QUFFQTtBQUNBLGdFQUFnRTs7QUFFaEU7O0FBRUEsbUJBQW1COzs7QUFHbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkVBQTZFOztBQUU3RSxrQ0FBa0M7QUFDbEMsUUFBUTtBQUNSOztBQUVBLDhCQUE4Qjs7QUFFOUIsK01BQStNO0FBQy9NO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwSEFBMEg7QUFDMUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRGQUE0Rjs7QUFFNUY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdFQUFnRTtBQUNoRTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLDZHQUE2Rzs7QUFFN0c7QUFDQTs7QUFFQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7O0FBRVo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOzs7QUFHSTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0Esc0JBQXNCOztBQUV0QjtBQUNBOztBQUVBO0FBQ0EsQ0FBQyxJQUFJOztBQUVMO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDs7QUFFckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0EsNEJBQTRCOztBQUU1QjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsOEtBQThLLElBQUk7QUFDbEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU8sR0FBRzs7QUFFVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTyxHQUFHOztBQUVWO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RTs7QUFFN0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLDJFQUEyRSxlQUFlO0FBQzFGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esd0RBQXdEOztBQUV4RCx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSxvREFBb0QsMEVBQTBFO0FBQzlIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDRDQUE0QztBQUM1QyxHQUFHO0FBQ0g7QUFDQSwwQ0FBMEM7QUFDMUMsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsNkRBQTZEO0FBQzdEOztBQUVBO0FBQ0E7QUFDQSxnR0FBZ0c7QUFDaEc7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEseUJBQXlCO0FBQ3pCO0FBQ0EsQ0FBQyxHQUFHOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7OztBQUdkO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdJO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHFFQUFxRTs7QUFFckU7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsdUlBQXVJOztBQUV4STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbUo7QUFDcUgsQ0FBQzs7OztBQzEySXpRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUV3Qjs7QUFFeEIsSUFBSSxhQUFJO0FBQ1IsSUFBSSxhQUFJO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbUJBQVU7QUFDZCxJQUFJLHNCQUFhO0FBQ2pCO0FBQ0EsQ0FBQztBQUNELHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdCQUFPO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywyRkFBMkY7QUFDbEcsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsa0JBQWtCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLG1CQUFVOztBQUVsQjtBQUNBOztBQUVBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLElBQUksd0JBQXdCOztBQUU5QztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxVQUFVLGFBQUksbUJBQW1CLGFBQUksMkZBQTJGLGFBQUksc0JBQXNCOztBQUUxSix1QkFBdUIsYUFBSSxzQkFBc0I7QUFDakQsQ0FBQztBQUNEO0FBQ0E7QUFDQSx3T0FBd087QUFDeE8sQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsTUFBTSxzQkFBYTtBQUNuQixJQUFJLGFBQUk7QUFDUixJQUFJLGFBQUksR0FBRyxhQUFJO0FBQ2Ysa0JBQWtCLGFBQUk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGNBQWMsa0JBQWtCLFlBQVk7O0FBRXpGO0FBQ0EsSUFBSSxtQkFBVSxHQUFHLElBQUk7QUFDckI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQzs7QUFFckM7QUFDQSxNQUFNO0FBQ04sSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9CLElBQUk7QUFDSjtBQUNBOztBQUVBLDhIQUE4SDs7QUFFOUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQSw0QkFBNEIsYUFBSTtBQUNoQyxhQUFhLGFBQUk7QUFDakI7O0FBRUE7O0FBRUEsd0VBQXdFLE9BQU87QUFDL0UsV0FBVyxNQUFNO0FBQ2pCLElBQUk7QUFDSjtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLFNBQVM7QUFDdkIsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBOztBQUVBLFNBQVMsTUFBTTtBQUNmLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQSxzSUFBc0ksWUFBWSx3REFBd0Q7QUFDMU07QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLDhEQUE4RDtBQUM5RDtBQUNBOztBQUVBLGVBQWUsU0FBUyxxQ0FBcUMsb0JBQW9CO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7QUFFZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUUsa0JBQWtCLEtBQUs7OztBQUd6QjtBQUNBO0FBQ0EsNEJBQTRCLGVBQWU7QUFDM0Msd0JBQXdCLGVBQWU7O0FBRXZDO0FBQ0Esb0JBQW9CLGVBQWU7QUFDbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGNBQWM7QUFDaEU7QUFDQTtBQUNBLGdCQUFnQixlQUFlOztBQUUvQjtBQUNBO0FBQ0EsK0JBQStCLE9BQU87O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7OztBQUdWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVFQUF1RTtBQUN2RSxJQUFJO0FBQ0o7QUFDQTs7QUFFQSxFQUFFLE9BQU8sMEJBQTBCOztBQUVuQyxpQkFBaUI7O0FBRWpCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0NBQW9DOzs7QUFHcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsU0FBUztBQUN6QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsWUFBWSx5UUFBeVE7QUFDclIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLDZCQUE2QjtBQUM3QjtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBLDJGQUEyRixPQUFPLE1BQU0sTUFBTTtBQUM5RyxDQUFDO0FBQ0Q7QUFDQSw4QkFBOEIsU0FBUztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwREFBMEQ7O0FBRTFEO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCOztBQUV0Qjs7QUFFQSx1Q0FBdUM7O0FBRXZDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7O0FBRWxEO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBLGtDQUFrQyxPQUFPOztBQUV6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLCtEQUErRDtBQUMvRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUI7O0FBRW5CLG1CQUFtQjs7QUFFbkIsbUJBQW1COztBQUVuQixtQkFBbUI7O0FBRW5CO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7OztBQUdSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLE1BQU07QUFDckIsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTTtBQUN2QixpQkFBaUIsTUFBTTtBQUN2QixtQkFBbUIsTUFBTTtBQUN6QixvQkFBb0IsTUFBTTtBQUMxQixvQkFBb0IsTUFBTTtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixTQUFTLE1BQU07QUFDZixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEU7OztBQUc5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLE1BQU07QUFDaEIsVUFBVSxNQUFNO0FBQ2hCLFVBQVUsTUFBTTtBQUNoQixVQUFVLE1BQU07QUFDaEIsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUyxNQUFNO0FBQ2YsU0FBUyxNQUFNO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUyxNQUFNO0FBQ2YsU0FBUyxNQUFNO0FB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QUdGLEtBQUssQ0FBQ0csWUFBWTs7RUFFcEM7RUFDQSxJQUFJQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBVztFQUVyQyxJQUFJQyxVQUFVLEdBQUdMLFdBQVcsR0FBR0UsWUFBWTs7RUFFM0M7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0EsSUFBSUksRUFBRSxHQUFHakIsV0FBSSxDQUFDa0IsUUFBUSxDQUFDO0lBQ3JCQyxhQUFhLEVBQUU7TUFDYkMsT0FBTyxFQUFFWCxLQUFLO01BQ2RZLEtBQUssRUFBRSxlQUFlO01BQ3RCQyxHQUFHLEVBQUUsWUFBWTtNQUNqQkMsVUFBVSxFQUFFLEtBQUs7TUFDakJDLEdBQUcsRUFBRSxJQUFJO01BQ1RDLEtBQUssRUFBRTtJQUNUO0VBQ0YsQ0FBQyxDQUFDOztFQUVGO0VBQ0EsSUFBSUMsZUFBZSxFQUFFO0lBQ25CVCxFQUFFLENBQUNVLEVBQUUsQ0FBQ0MsVUFBVSxFQUFFO01BQ2hCQyxDQUFDLEVBQUUsQ0FBQ2IsVUFBVTtNQUNkYyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBR0osZUFBZSxDQUFDLEdBQUcsQ0FBQztNQUN2Q0ssSUFBSSxFQUFFO0lBQ1IsQ0FBQyxDQUFDO0VBQ0o7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQ0YsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vbm9kZV9tb2R1bGVzL2dzYXAvZ3NhcC1jb3JlLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9nc2FwL0NTU1BsdWdpbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvZ3NhcC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvZ3NhcC9PYnNlcnZlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvZ3NhcC9TY3JvbGxUcmlnZ2VyLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoZWFkZXIgPSBcImhlYWRlclwiO1xyXG5jb25zb2xlLmxvZyhoZWFkZXIpO1xyXG4iLCJjb25zdCBob21lID0gXCJob21lLmpzXCI7XHJcbmNvbnNvbGUubG9nKGhvbWUpO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiZXhwb3J0IGNvbnN0IGV4YW1wbGUgPSBcImV4YW1wbGVcIjtcclxuIiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKiFcbiAqIEdTQVAgMy4xMi4yXG4gKiBodHRwczovL2dyZWVuc29jay5jb21cbiAqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgMjAwOC0yMDIzLCBHcmVlblNvY2suIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBTdWJqZWN0IHRvIHRoZSB0ZXJtcyBhdCBodHRwczovL2dyZWVuc29jay5jb20vc3RhbmRhcmQtbGljZW5zZSBvciBmb3JcbiAqIENsdWIgR3JlZW5Tb2NrIG1lbWJlcnMsIHRoZSBhZ3JlZW1lbnQgaXNzdWVkIHdpdGggdGhhdCBtZW1iZXJzaGlwLlxuICogQGF1dGhvcjogSmFjayBEb3lsZSwgamFja0BncmVlbnNvY2suY29tXG4qL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xudmFyIF9jb25maWcgPSB7XG4gIGF1dG9TbGVlcDogMTIwLFxuICBmb3JjZTNEOiBcImF1dG9cIixcbiAgbnVsbFRhcmdldFdhcm46IDEsXG4gIHVuaXRzOiB7XG4gICAgbGluZUhlaWdodDogXCJcIlxuICB9XG59LFxuICAgIF9kZWZhdWx0cyA9IHtcbiAgZHVyYXRpb246IC41LFxuICBvdmVyd3JpdGU6IGZhbHNlLFxuICBkZWxheTogMFxufSxcbiAgICBfc3VwcHJlc3NPdmVyd3JpdGVzLFxuICAgIF9yZXZlcnRpbmcsXG4gICAgX2NvbnRleHQsXG4gICAgX2JpZ051bSA9IDFlOCxcbiAgICBfdGlueU51bSA9IDEgLyBfYmlnTnVtLFxuICAgIF8yUEkgPSBNYXRoLlBJICogMixcbiAgICBfSEFMRl9QSSA9IF8yUEkgLyA0LFxuICAgIF9nc0lEID0gMCxcbiAgICBfc3FydCA9IE1hdGguc3FydCxcbiAgICBfY29zID0gTWF0aC5jb3MsXG4gICAgX3NpbiA9IE1hdGguc2luLFxuICAgIF9pc1N0cmluZyA9IGZ1bmN0aW9uIF9pc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiO1xufSxcbiAgICBfaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIF9pc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIjtcbn0sXG4gICAgX2lzTnVtYmVyID0gZnVuY3Rpb24gX2lzTnVtYmVyKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCI7XG59LFxuICAgIF9pc1VuZGVmaW5lZCA9IGZ1bmN0aW9uIF9pc1VuZGVmaW5lZCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiO1xufSxcbiAgICBfaXNPYmplY3QgPSBmdW5jdGlvbiBfaXNPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIjtcbn0sXG4gICAgX2lzTm90RmFsc2UgPSBmdW5jdGlvbiBfaXNOb3RGYWxzZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IGZhbHNlO1xufSxcbiAgICBfd2luZG93RXhpc3RzID0gZnVuY3Rpb24gX3dpbmRvd0V4aXN0cygpIHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCI7XG59LFxuICAgIF9pc0Z1bmNPclN0cmluZyA9IGZ1bmN0aW9uIF9pc0Z1bmNPclN0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gX2lzRnVuY3Rpb24odmFsdWUpIHx8IF9pc1N0cmluZyh2YWx1ZSk7XG59LFxuICAgIF9pc1R5cGVkQXJyYXkgPSB0eXBlb2YgQXJyYXlCdWZmZXIgPT09IFwiZnVuY3Rpb25cIiAmJiBBcnJheUJ1ZmZlci5pc1ZpZXcgfHwgZnVuY3Rpb24gKCkge30sXG4gICAgLy8gbm90ZTogSUUxMCBoYXMgQXJyYXlCdWZmZXIsIGJ1dCBOT1QgQXJyYXlCdWZmZXIuaXNWaWV3KCkuXG5faXNBcnJheSA9IEFycmF5LmlzQXJyYXksXG4gICAgX3N0cmljdE51bUV4cCA9IC8oPzotP1xcLj9cXGR8XFwuKSsvZ2ksXG4gICAgLy9vbmx5IG51bWJlcnMgKGluY2x1ZGluZyBuZWdhdGl2ZXMgYW5kIGRlY2ltYWxzKSBidXQgTk9UIHJlbGF0aXZlIHZhbHVlcy5cbl9udW1FeHAgPSAvWy0rPS5dKlxcZCtbLmVcXC0rXSpcXGQqW2VcXC0rXSpcXGQqL2csXG4gICAgLy9maW5kcyBhbnkgbnVtYmVycywgaW5jbHVkaW5nIG9uZXMgdGhhdCBzdGFydCB3aXRoICs9IG9yIC09LCBuZWdhdGl2ZSBudW1iZXJzLCBhbmQgb25lcyBpbiBzY2llbnRpZmljIG5vdGF0aW9uIGxpa2UgMWUtOC5cbl9udW1XaXRoVW5pdEV4cCA9IC9bLSs9Ll0qXFxkK1suZS1dKlxcZCpbYS16JV0qL2csXG4gICAgX2NvbXBsZXhTdHJpbmdOdW1FeHAgPSAvWy0rPS5dKlxcZCtcXC4/XFxkKig/OmUtfGVcXCspP1xcZCovZ2ksXG4gICAgLy9kdXBsaWNhdGUgc28gdGhhdCB3aGlsZSB3ZSdyZSBsb29waW5nIHRocm91Z2ggbWF0Y2hlcyBmcm9tIGV4ZWMoKSwgaXQgZG9lc24ndCBjb250YW1pbmF0ZSB0aGUgbGFzdEluZGV4IG9mIF9udW1FeHAgd2hpY2ggd2UgdXNlIHRvIHNlYXJjaCBmb3IgY29sb3JzIHRvby5cbl9yZWxFeHAgPSAvWystXT0tP1suXFxkXSsvLFxuICAgIF9kZWxpbWl0ZWRWYWx1ZUV4cCA9IC9bXiwnXCJcXFtcXF1cXHNdKy9naSxcbiAgICAvLyBwcmV2aW91c2x5IC9bI1xcLSsuXSpcXGJbYS16XFxkXFwtPSslLl0rL2dpIGJ1dCBkaWRuJ3QgY2F0Y2ggc3BlY2lhbCBjaGFyYWN0ZXJzLlxuX3VuaXRFeHAgPSAvXlsrXFwtPWVcXHNcXGRdKlxcZCtbLlxcZF0qKFthLXpdKnwlKVxccyokL2ksXG4gICAgX2dsb2JhbFRpbWVsaW5lLFxuICAgIF93aW4sXG4gICAgX2NvcmVJbml0dGVkLFxuICAgIF9kb2MsXG4gICAgX2dsb2JhbHMgPSB7fSxcbiAgICBfaW5zdGFsbFNjb3BlID0ge30sXG4gICAgX2NvcmVSZWFkeSxcbiAgICBfaW5zdGFsbCA9IGZ1bmN0aW9uIF9pbnN0YWxsKHNjb3BlKSB7XG4gIHJldHVybiAoX2luc3RhbGxTY29wZSA9IF9tZXJnZShzY29wZSwgX2dsb2JhbHMpKSAmJiBnc2FwO1xufSxcbiAgICBfbWlzc2luZ1BsdWdpbiA9IGZ1bmN0aW9uIF9taXNzaW5nUGx1Z2luKHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gY29uc29sZS53YXJuKFwiSW52YWxpZCBwcm9wZXJ0eVwiLCBwcm9wZXJ0eSwgXCJzZXQgdG9cIiwgdmFsdWUsIFwiTWlzc2luZyBwbHVnaW4/IGdzYXAucmVnaXN0ZXJQbHVnaW4oKVwiKTtcbn0sXG4gICAgX3dhcm4gPSBmdW5jdGlvbiBfd2FybihtZXNzYWdlLCBzdXBwcmVzcykge1xuICByZXR1cm4gIXN1cHByZXNzICYmIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbn0sXG4gICAgX2FkZEdsb2JhbCA9IGZ1bmN0aW9uIF9hZGRHbG9iYWwobmFtZSwgb2JqKSB7XG4gIHJldHVybiBuYW1lICYmIChfZ2xvYmFsc1tuYW1lXSA9IG9iaikgJiYgX2luc3RhbGxTY29wZSAmJiAoX2luc3RhbGxTY29wZVtuYW1lXSA9IG9iaikgfHwgX2dsb2JhbHM7XG59LFxuICAgIF9lbXB0eUZ1bmMgPSBmdW5jdGlvbiBfZW1wdHlGdW5jKCkge1xuICByZXR1cm4gMDtcbn0sXG4gICAgX3N0YXJ0QXRSZXZlcnRDb25maWcgPSB7XG4gIHN1cHByZXNzRXZlbnRzOiB0cnVlLFxuICBpc1N0YXJ0OiB0cnVlLFxuICBraWxsOiBmYWxzZVxufSxcbiAgICBfcmV2ZXJ0Q29uZmlnTm9LaWxsID0ge1xuICBzdXBwcmVzc0V2ZW50czogdHJ1ZSxcbiAga2lsbDogZmFsc2Vcbn0sXG4gICAgX3JldmVydENvbmZpZyA9IHtcbiAgc3VwcHJlc3NFdmVudHM6IHRydWVcbn0sXG4gICAgX3Jlc2VydmVkUHJvcHMgPSB7fSxcbiAgICBfbGF6eVR3ZWVucyA9IFtdLFxuICAgIF9sYXp5TG9va3VwID0ge30sXG4gICAgX2xhc3RSZW5kZXJlZEZyYW1lLFxuICAgIF9wbHVnaW5zID0ge30sXG4gICAgX2VmZmVjdHMgPSB7fSxcbiAgICBfbmV4dEdDRnJhbWUgPSAzMCxcbiAgICBfaGFybmVzc1BsdWdpbnMgPSBbXSxcbiAgICBfY2FsbGJhY2tOYW1lcyA9IFwiXCIsXG4gICAgX2hhcm5lc3MgPSBmdW5jdGlvbiBfaGFybmVzcyh0YXJnZXRzKSB7XG4gIHZhciB0YXJnZXQgPSB0YXJnZXRzWzBdLFxuICAgICAgaGFybmVzc1BsdWdpbixcbiAgICAgIGk7XG4gIF9pc09iamVjdCh0YXJnZXQpIHx8IF9pc0Z1bmN0aW9uKHRhcmdldCkgfHwgKHRhcmdldHMgPSBbdGFyZ2V0c10pO1xuXG4gIGlmICghKGhhcm5lc3NQbHVnaW4gPSAodGFyZ2V0Ll9nc2FwIHx8IHt9KS5oYXJuZXNzKSkge1xuICAgIC8vIGZpbmQgdGhlIGZpcnN0IHRhcmdldCB3aXRoIGEgaGFybmVzcy4gV2UgYXNzdW1lIHRhcmdldHMgcGFzc2VkIGludG8gYW4gYW5pbWF0aW9uIHdpbGwgYmUgb2Ygc2ltaWxhciB0eXBlLCBtZWFuaW5nIHRoZSBzYW1lIGtpbmQgb2YgaGFybmVzcyBjYW4gYmUgdXNlZCBmb3IgdGhlbSBhbGwgKHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbilcbiAgICBpID0gX2hhcm5lc3NQbHVnaW5zLmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0gJiYgIV9oYXJuZXNzUGx1Z2luc1tpXS50YXJnZXRUZXN0KHRhcmdldCkpIHt9XG5cbiAgICBoYXJuZXNzUGx1Z2luID0gX2hhcm5lc3NQbHVnaW5zW2ldO1xuICB9XG5cbiAgaSA9IHRhcmdldHMubGVuZ3RoO1xuXG4gIHdoaWxlIChpLS0pIHtcbiAgICB0YXJnZXRzW2ldICYmICh0YXJnZXRzW2ldLl9nc2FwIHx8ICh0YXJnZXRzW2ldLl9nc2FwID0gbmV3IEdTQ2FjaGUodGFyZ2V0c1tpXSwgaGFybmVzc1BsdWdpbikpKSB8fCB0YXJnZXRzLnNwbGljZShpLCAxKTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXRzO1xufSxcbiAgICBfZ2V0Q2FjaGUgPSBmdW5jdGlvbiBfZ2V0Q2FjaGUodGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXQuX2dzYXAgfHwgX2hhcm5lc3ModG9BcnJheSh0YXJnZXQpKVswXS5fZ3NhcDtcbn0sXG4gICAgX2dldFByb3BlcnR5ID0gZnVuY3Rpb24gX2dldFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIHYpIHtcbiAgcmV0dXJuICh2ID0gdGFyZ2V0W3Byb3BlcnR5XSkgJiYgX2lzRnVuY3Rpb24odikgPyB0YXJnZXRbcHJvcGVydHldKCkgOiBfaXNVbmRlZmluZWQodikgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKHByb3BlcnR5KSB8fCB2O1xufSxcbiAgICBfZm9yRWFjaE5hbWUgPSBmdW5jdGlvbiBfZm9yRWFjaE5hbWUobmFtZXMsIGZ1bmMpIHtcbiAgcmV0dXJuIChuYW1lcyA9IG5hbWVzLnNwbGl0KFwiLFwiKSkuZm9yRWFjaChmdW5jKSB8fCBuYW1lcztcbn0sXG4gICAgLy9zcGxpdCBhIGNvbW1hLWRlbGltaXRlZCBsaXN0IG9mIG5hbWVzIGludG8gYW4gYXJyYXksIHRoZW4gcnVuIGEgZm9yRWFjaCgpIGZ1bmN0aW9uIGFuZCByZXR1cm4gdGhlIHNwbGl0IGFycmF5ICh0aGlzIGlzIGp1c3QgYSB3YXkgdG8gY29uc29saWRhdGUvc2hvcnRlbiBzb21lIGNvZGUpLlxuX3JvdW5kID0gZnVuY3Rpb24gX3JvdW5kKHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogMTAwMDAwKSAvIDEwMDAwMCB8fCAwO1xufSxcbiAgICBfcm91bmRQcmVjaXNlID0gZnVuY3Rpb24gX3JvdW5kUHJlY2lzZSh2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMDAwMDAwKSAvIDEwMDAwMDAwIHx8IDA7XG59LFxuICAgIC8vIGluY3JlYXNlZCBwcmVjaXNpb24gbW9zdGx5IGZvciB0aW1pbmcgdmFsdWVzLlxuX3BhcnNlUmVsYXRpdmUgPSBmdW5jdGlvbiBfcGFyc2VSZWxhdGl2ZShzdGFydCwgdmFsdWUpIHtcbiAgdmFyIG9wZXJhdG9yID0gdmFsdWUuY2hhckF0KDApLFxuICAgICAgZW5kID0gcGFyc2VGbG9hdCh2YWx1ZS5zdWJzdHIoMikpO1xuICBzdGFydCA9IHBhcnNlRmxvYXQoc3RhcnQpO1xuICByZXR1cm4gb3BlcmF0b3IgPT09IFwiK1wiID8gc3RhcnQgKyBlbmQgOiBvcGVyYXRvciA9PT0gXCItXCIgPyBzdGFydCAtIGVuZCA6IG9wZXJhdG9yID09PSBcIipcIiA/IHN0YXJ0ICogZW5kIDogc3RhcnQgLyBlbmQ7XG59LFxuICAgIF9hcnJheUNvbnRhaW5zQW55ID0gZnVuY3Rpb24gX2FycmF5Q29udGFpbnNBbnkodG9TZWFyY2gsIHRvRmluZCkge1xuICAvL3NlYXJjaGVzIG9uZSBhcnJheSB0byBmaW5kIG1hdGNoZXMgZm9yIGFueSBvZiB0aGUgaXRlbXMgaW4gdGhlIHRvRmluZCBhcnJheS4gQXMgc29vbiBhcyBvbmUgaXMgZm91bmQsIGl0IHJldHVybnMgdHJ1ZS4gSXQgZG9lcyBOT1QgcmV0dXJuIGFsbCB0aGUgbWF0Y2hlczsgaXQncyBzaW1wbHkgYSBib29sZWFuIHNlYXJjaC5cbiAgdmFyIGwgPSB0b0ZpbmQubGVuZ3RoLFxuICAgICAgaSA9IDA7XG5cbiAgZm9yICg7IHRvU2VhcmNoLmluZGV4T2YodG9GaW5kW2ldKSA8IDAgJiYgKytpIDwgbDspIHt9XG5cbiAgcmV0dXJuIGkgPCBsO1xufSxcbiAgICBfbGF6eVJlbmRlciA9IGZ1bmN0aW9uIF9sYXp5UmVuZGVyKCkge1xuICB2YXIgbCA9IF9sYXp5VHdlZW5zLmxlbmd0aCxcbiAgICAgIGEgPSBfbGF6eVR3ZWVucy5zbGljZSgwKSxcbiAgICAgIGksXG4gICAgICB0d2VlbjtcblxuICBfbGF6eUxvb2t1cCA9IHt9O1xuICBfbGF6eVR3ZWVucy5sZW5ndGggPSAwO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICB0d2VlbiA9IGFbaV07XG4gICAgdHdlZW4gJiYgdHdlZW4uX2xhenkgJiYgKHR3ZWVuLnJlbmRlcih0d2Vlbi5fbGF6eVswXSwgdHdlZW4uX2xhenlbMV0sIHRydWUpLl9sYXp5ID0gMCk7XG4gIH1cbn0sXG4gICAgX2xhenlTYWZlUmVuZGVyID0gZnVuY3Rpb24gX2xhenlTYWZlUmVuZGVyKGFuaW1hdGlvbiwgdGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB7XG4gIF9sYXp5VHdlZW5zLmxlbmd0aCAmJiAhX3JldmVydGluZyAmJiBfbGF6eVJlbmRlcigpO1xuICBhbmltYXRpb24ucmVuZGVyKHRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSB8fCBfcmV2ZXJ0aW5nICYmIHRpbWUgPCAwICYmIChhbmltYXRpb24uX2luaXR0ZWQgfHwgYW5pbWF0aW9uLl9zdGFydEF0KSk7XG4gIF9sYXp5VHdlZW5zLmxlbmd0aCAmJiAhX3JldmVydGluZyAmJiBfbGF6eVJlbmRlcigpOyAvL2luIGNhc2UgcmVuZGVyaW5nIGNhdXNlZCBhbnkgdHdlZW5zIHRvIGxhenktaW5pdCwgd2Ugc2hvdWxkIHJlbmRlciB0aGVtIGJlY2F1c2UgdHlwaWNhbGx5IHdoZW4gc29tZW9uZSBjYWxscyBzZWVrKCkgb3IgdGltZSgpIG9yIHByb2dyZXNzKCksIHRoZXkgZXhwZWN0IGFuIGltbWVkaWF0ZSByZW5kZXIuXG59LFxuICAgIF9udW1lcmljSWZQb3NzaWJsZSA9IGZ1bmN0aW9uIF9udW1lcmljSWZQb3NzaWJsZSh2YWx1ZSkge1xuICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICByZXR1cm4gKG4gfHwgbiA9PT0gMCkgJiYgKHZhbHVlICsgXCJcIikubWF0Y2goX2RlbGltaXRlZFZhbHVlRXhwKS5sZW5ndGggPCAyID8gbiA6IF9pc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS50cmltKCkgOiB2YWx1ZTtcbn0sXG4gICAgX3Bhc3NUaHJvdWdoID0gZnVuY3Rpb24gX3Bhc3NUaHJvdWdoKHApIHtcbiAgcmV0dXJuIHA7XG59LFxuICAgIF9zZXREZWZhdWx0cyA9IGZ1bmN0aW9uIF9zZXREZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7XG4gIGZvciAodmFyIHAgaW4gZGVmYXVsdHMpIHtcbiAgICBwIGluIG9iaiB8fCAob2JqW3BdID0gZGVmYXVsdHNbcF0pO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0sXG4gICAgX3NldEtleWZyYW1lRGVmYXVsdHMgPSBmdW5jdGlvbiBfc2V0S2V5ZnJhbWVEZWZhdWx0cyhleGNsdWRlRHVyYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvYmosIGRlZmF1bHRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBkZWZhdWx0cykge1xuICAgICAgcCBpbiBvYmogfHwgcCA9PT0gXCJkdXJhdGlvblwiICYmIGV4Y2x1ZGVEdXJhdGlvbiB8fCBwID09PSBcImVhc2VcIiB8fCAob2JqW3BdID0gZGVmYXVsdHNbcF0pO1xuICAgIH1cbiAgfTtcbn0sXG4gICAgX21lcmdlID0gZnVuY3Rpb24gX21lcmdlKGJhc2UsIHRvTWVyZ2UpIHtcbiAgZm9yICh2YXIgcCBpbiB0b01lcmdlKSB7XG4gICAgYmFzZVtwXSA9IHRvTWVyZ2VbcF07XG4gIH1cblxuICByZXR1cm4gYmFzZTtcbn0sXG4gICAgX21lcmdlRGVlcCA9IGZ1bmN0aW9uIF9tZXJnZURlZXAoYmFzZSwgdG9NZXJnZSkge1xuICBmb3IgKHZhciBwIGluIHRvTWVyZ2UpIHtcbiAgICBwICE9PSBcIl9fcHJvdG9fX1wiICYmIHAgIT09IFwiY29uc3RydWN0b3JcIiAmJiBwICE9PSBcInByb3RvdHlwZVwiICYmIChiYXNlW3BdID0gX2lzT2JqZWN0KHRvTWVyZ2VbcF0pID8gX21lcmdlRGVlcChiYXNlW3BdIHx8IChiYXNlW3BdID0ge30pLCB0b01lcmdlW3BdKSA6IHRvTWVyZ2VbcF0pO1xuICB9XG5cbiAgcmV0dXJuIGJhc2U7XG59LFxuICAgIF9jb3B5RXhjbHVkaW5nID0gZnVuY3Rpb24gX2NvcHlFeGNsdWRpbmcob2JqLCBleGNsdWRpbmcpIHtcbiAgdmFyIGNvcHkgPSB7fSxcbiAgICAgIHA7XG5cbiAgZm9yIChwIGluIG9iaikge1xuICAgIHAgaW4gZXhjbHVkaW5nIHx8IChjb3B5W3BdID0gb2JqW3BdKTtcbiAgfVxuXG4gIHJldHVybiBjb3B5O1xufSxcbiAgICBfaW5oZXJpdERlZmF1bHRzID0gZnVuY3Rpb24gX2luaGVyaXREZWZhdWx0cyh2YXJzKSB7XG4gIHZhciBwYXJlbnQgPSB2YXJzLnBhcmVudCB8fCBfZ2xvYmFsVGltZWxpbmUsXG4gICAgICBmdW5jID0gdmFycy5rZXlmcmFtZXMgPyBfc2V0S2V5ZnJhbWVEZWZhdWx0cyhfaXNBcnJheSh2YXJzLmtleWZyYW1lcykpIDogX3NldERlZmF1bHRzO1xuXG4gIGlmIChfaXNOb3RGYWxzZSh2YXJzLmluaGVyaXQpKSB7XG4gICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgZnVuYyh2YXJzLCBwYXJlbnQudmFycy5kZWZhdWx0cyk7XG4gICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50IHx8IHBhcmVudC5fZHA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhcnM7XG59LFxuICAgIF9hcnJheXNNYXRjaCA9IGZ1bmN0aW9uIF9hcnJheXNNYXRjaChhMSwgYTIpIHtcbiAgdmFyIGkgPSBhMS5sZW5ndGgsXG4gICAgICBtYXRjaCA9IGkgPT09IGEyLmxlbmd0aDtcblxuICB3aGlsZSAobWF0Y2ggJiYgaS0tICYmIGExW2ldID09PSBhMltpXSkge31cblxuICByZXR1cm4gaSA8IDA7XG59LFxuICAgIF9hZGRMaW5rZWRMaXN0SXRlbSA9IGZ1bmN0aW9uIF9hZGRMaW5rZWRMaXN0SXRlbShwYXJlbnQsIGNoaWxkLCBmaXJzdFByb3AsIGxhc3RQcm9wLCBzb3J0QnkpIHtcbiAgaWYgKGZpcnN0UHJvcCA9PT0gdm9pZCAwKSB7XG4gICAgZmlyc3RQcm9wID0gXCJfZmlyc3RcIjtcbiAgfVxuXG4gIGlmIChsYXN0UHJvcCA9PT0gdm9pZCAwKSB7XG4gICAgbGFzdFByb3AgPSBcIl9sYXN0XCI7XG4gIH1cblxuICB2YXIgcHJldiA9IHBhcmVudFtsYXN0UHJvcF0sXG4gICAgICB0O1xuXG4gIGlmIChzb3J0QnkpIHtcbiAgICB0ID0gY2hpbGRbc29ydEJ5XTtcblxuICAgIHdoaWxlIChwcmV2ICYmIHByZXZbc29ydEJ5XSA+IHQpIHtcbiAgICAgIHByZXYgPSBwcmV2Ll9wcmV2O1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcmV2KSB7XG4gICAgY2hpbGQuX25leHQgPSBwcmV2Ll9uZXh0O1xuICAgIHByZXYuX25leHQgPSBjaGlsZDtcbiAgfSBlbHNlIHtcbiAgICBjaGlsZC5fbmV4dCA9IHBhcmVudFtmaXJzdFByb3BdO1xuICAgIHBhcmVudFtmaXJzdFByb3BdID0gY2hpbGQ7XG4gIH1cblxuICBpZiAoY2hpbGQuX25leHQpIHtcbiAgICBjaGlsZC5fbmV4dC5fcHJldiA9IGNoaWxkO1xuICB9IGVsc2Uge1xuICAgIHBhcmVudFtsYXN0UHJvcF0gPSBjaGlsZDtcbiAgfVxuXG4gIGNoaWxkLl9wcmV2ID0gcHJldjtcbiAgY2hpbGQucGFyZW50ID0gY2hpbGQuX2RwID0gcGFyZW50O1xuICByZXR1cm4gY2hpbGQ7XG59LFxuICAgIF9yZW1vdmVMaW5rZWRMaXN0SXRlbSA9IGZ1bmN0aW9uIF9yZW1vdmVMaW5rZWRMaXN0SXRlbShwYXJlbnQsIGNoaWxkLCBmaXJzdFByb3AsIGxhc3RQcm9wKSB7XG4gIGlmIChmaXJzdFByb3AgPT09IHZvaWQgMCkge1xuICAgIGZpcnN0UHJvcCA9IFwiX2ZpcnN0XCI7XG4gIH1cblxuICBpZiAobGFzdFByb3AgPT09IHZvaWQgMCkge1xuICAgIGxhc3RQcm9wID0gXCJfbGFzdFwiO1xuICB9XG5cbiAgdmFyIHByZXYgPSBjaGlsZC5fcHJldixcbiAgICAgIG5leHQgPSBjaGlsZC5fbmV4dDtcblxuICBpZiAocHJldikge1xuICAgIHByZXYuX25leHQgPSBuZXh0O1xuICB9IGVsc2UgaWYgKHBhcmVudFtmaXJzdFByb3BdID09PSBjaGlsZCkge1xuICAgIHBhcmVudFtmaXJzdFByb3BdID0gbmV4dDtcbiAgfVxuXG4gIGlmIChuZXh0KSB7XG4gICAgbmV4dC5fcHJldiA9IHByZXY7XG4gIH0gZWxzZSBpZiAocGFyZW50W2xhc3RQcm9wXSA9PT0gY2hpbGQpIHtcbiAgICBwYXJlbnRbbGFzdFByb3BdID0gcHJldjtcbiAgfVxuXG4gIGNoaWxkLl9uZXh0ID0gY2hpbGQuX3ByZXYgPSBjaGlsZC5wYXJlbnQgPSBudWxsOyAvLyBkb24ndCBkZWxldGUgdGhlIF9kcCBqdXN0IHNvIHdlIGNhbiByZXZlcnQgaWYgbmVjZXNzYXJ5LiBCdXQgcGFyZW50IHNob3VsZCBiZSBudWxsIHRvIGluZGljYXRlIHRoZSBpdGVtIGlzbid0IGluIGEgbGlua2VkIGxpc3QuXG59LFxuICAgIF9yZW1vdmVGcm9tUGFyZW50ID0gZnVuY3Rpb24gX3JlbW92ZUZyb21QYXJlbnQoY2hpbGQsIG9ubHlJZlBhcmVudEhhc0F1dG9SZW1vdmUpIHtcbiAgY2hpbGQucGFyZW50ICYmICghb25seUlmUGFyZW50SGFzQXV0b1JlbW92ZSB8fCBjaGlsZC5wYXJlbnQuYXV0b1JlbW92ZUNoaWxkcmVuKSAmJiBjaGlsZC5wYXJlbnQucmVtb3ZlICYmIGNoaWxkLnBhcmVudC5yZW1vdmUoY2hpbGQpO1xuICBjaGlsZC5fYWN0ID0gMDtcbn0sXG4gICAgX3VuY2FjaGUgPSBmdW5jdGlvbiBfdW5jYWNoZShhbmltYXRpb24sIGNoaWxkKSB7XG4gIGlmIChhbmltYXRpb24gJiYgKCFjaGlsZCB8fCBjaGlsZC5fZW5kID4gYW5pbWF0aW9uLl9kdXIgfHwgY2hpbGQuX3N0YXJ0IDwgMCkpIHtcbiAgICAvLyBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb246IGlmIGEgY2hpbGQgYW5pbWF0aW9uIGlzIHBhc3NlZCBpbiB3ZSBzaG91bGQgb25seSB1bmNhY2hlIGlmIHRoYXQgY2hpbGQgRVhURU5EUyB0aGUgYW5pbWF0aW9uIChpdHMgZW5kIHRpbWUgaXMgYmV5b25kIHRoZSBlbmQpXG4gICAgdmFyIGEgPSBhbmltYXRpb247XG5cbiAgICB3aGlsZSAoYSkge1xuICAgICAgYS5fZGlydHkgPSAxO1xuICAgICAgYSA9IGEucGFyZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhbmltYXRpb247XG59LFxuICAgIF9yZWNhY2hlQW5jZXN0b3JzID0gZnVuY3Rpb24gX3JlY2FjaGVBbmNlc3RvcnMoYW5pbWF0aW9uKSB7XG4gIHZhciBwYXJlbnQgPSBhbmltYXRpb24ucGFyZW50O1xuXG4gIHdoaWxlIChwYXJlbnQgJiYgcGFyZW50LnBhcmVudCkge1xuICAgIC8vc29tZXRpbWVzIHdlIG11c3QgZm9yY2UgYSByZS1zb3J0IG9mIGFsbCBjaGlsZHJlbiBhbmQgdXBkYXRlIHRoZSBkdXJhdGlvbi90b3RhbER1cmF0aW9uIG9mIGFsbCBhbmNlc3RvciB0aW1lbGluZXMgaW1tZWRpYXRlbHkgaW4gY2FzZSwgZm9yIGV4YW1wbGUsIGluIHRoZSBtaWRkbGUgb2YgYSByZW5kZXIgbG9vcCwgb25lIHR3ZWVuIGFsdGVycyBhbm90aGVyIHR3ZWVuJ3MgdGltZVNjYWxlIHdoaWNoIHNob3ZlcyBpdHMgc3RhcnRUaW1lIGJlZm9yZSAwLCBmb3JjaW5nIHRoZSBwYXJlbnQgdGltZWxpbmUgdG8gc2hpZnQgYXJvdW5kIGFuZCBzaGlmdENoaWxkcmVuKCkgd2hpY2ggY291bGQgYWZmZWN0IHRoYXQgbmV4dCB0d2VlbidzIHJlbmRlciAoc3RhcnRUaW1lKS4gRG9lc24ndCBtYXR0ZXIgZm9yIHRoZSByb290IHRpbWVsaW5lIHRob3VnaC5cbiAgICBwYXJlbnQuX2RpcnR5ID0gMTtcbiAgICBwYXJlbnQudG90YWxEdXJhdGlvbigpO1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gIH1cblxuICByZXR1cm4gYW5pbWF0aW9uO1xufSxcbiAgICBfcmV3aW5kU3RhcnRBdCA9IGZ1bmN0aW9uIF9yZXdpbmRTdGFydEF0KHR3ZWVuLCB0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSkge1xuICByZXR1cm4gdHdlZW4uX3N0YXJ0QXQgJiYgKF9yZXZlcnRpbmcgPyB0d2Vlbi5fc3RhcnRBdC5yZXZlcnQoX3JldmVydENvbmZpZ05vS2lsbCkgOiB0d2Vlbi52YXJzLmltbWVkaWF0ZVJlbmRlciAmJiAhdHdlZW4udmFycy5hdXRvUmV2ZXJ0IHx8IHR3ZWVuLl9zdGFydEF0LnJlbmRlcih0b3RhbFRpbWUsIHRydWUsIGZvcmNlKSk7XG59LFxuICAgIF9oYXNOb1BhdXNlZEFuY2VzdG9ycyA9IGZ1bmN0aW9uIF9oYXNOb1BhdXNlZEFuY2VzdG9ycyhhbmltYXRpb24pIHtcbiAgcmV0dXJuICFhbmltYXRpb24gfHwgYW5pbWF0aW9uLl90cyAmJiBfaGFzTm9QYXVzZWRBbmNlc3RvcnMoYW5pbWF0aW9uLnBhcmVudCk7XG59LFxuICAgIF9lbGFwc2VkQ3ljbGVEdXJhdGlvbiA9IGZ1bmN0aW9uIF9lbGFwc2VkQ3ljbGVEdXJhdGlvbihhbmltYXRpb24pIHtcbiAgcmV0dXJuIGFuaW1hdGlvbi5fcmVwZWF0ID8gX2FuaW1hdGlvbkN5Y2xlKGFuaW1hdGlvbi5fdFRpbWUsIGFuaW1hdGlvbiA9IGFuaW1hdGlvbi5kdXJhdGlvbigpICsgYW5pbWF0aW9uLl9yRGVsYXkpICogYW5pbWF0aW9uIDogMDtcbn0sXG4gICAgLy8gZmVlZCBpbiB0aGUgdG90YWxUaW1lIGFuZCBjeWNsZUR1cmF0aW9uIGFuZCBpdCdsbCByZXR1cm4gdGhlIGN5Y2xlIChpdGVyYXRpb24gbWludXMgMSkgYW5kIGlmIHRoZSBwbGF5aGVhZCBpcyBleGFjdGx5IGF0IHRoZSB2ZXJ5IEVORCwgaXQgd2lsbCBOT1QgYnVtcCB1cCB0byB0aGUgbmV4dCBjeWNsZS5cbl9hbmltYXRpb25DeWNsZSA9IGZ1bmN0aW9uIF9hbmltYXRpb25DeWNsZSh0VGltZSwgY3ljbGVEdXJhdGlvbikge1xuICB2YXIgd2hvbGUgPSBNYXRoLmZsb29yKHRUaW1lIC89IGN5Y2xlRHVyYXRpb24pO1xuICByZXR1cm4gdFRpbWUgJiYgd2hvbGUgPT09IHRUaW1lID8gd2hvbGUgLSAxIDogd2hvbGU7XG59LFxuICAgIF9wYXJlbnRUb0NoaWxkVG90YWxUaW1lID0gZnVuY3Rpb24gX3BhcmVudFRvQ2hpbGRUb3RhbFRpbWUocGFyZW50VGltZSwgY2hpbGQpIHtcbiAgcmV0dXJuIChwYXJlbnRUaW1lIC0gY2hpbGQuX3N0YXJ0KSAqIGNoaWxkLl90cyArIChjaGlsZC5fdHMgPj0gMCA/IDAgOiBjaGlsZC5fZGlydHkgPyBjaGlsZC50b3RhbER1cmF0aW9uKCkgOiBjaGlsZC5fdER1cik7XG59LFxuICAgIF9zZXRFbmQgPSBmdW5jdGlvbiBfc2V0RW5kKGFuaW1hdGlvbikge1xuICByZXR1cm4gYW5pbWF0aW9uLl9lbmQgPSBfcm91bmRQcmVjaXNlKGFuaW1hdGlvbi5fc3RhcnQgKyAoYW5pbWF0aW9uLl90RHVyIC8gTWF0aC5hYnMoYW5pbWF0aW9uLl90cyB8fCBhbmltYXRpb24uX3J0cyB8fCBfdGlueU51bSkgfHwgMCkpO1xufSxcbiAgICBfYWxpZ25QbGF5aGVhZCA9IGZ1bmN0aW9uIF9hbGlnblBsYXloZWFkKGFuaW1hdGlvbiwgdG90YWxUaW1lKSB7XG4gIC8vIGFkanVzdHMgdGhlIGFuaW1hdGlvbidzIF9zdGFydCBhbmQgX2VuZCBhY2NvcmRpbmcgdG8gdGhlIHByb3ZpZGVkIHRvdGFsVGltZSAob25seSBpZiB0aGUgcGFyZW50J3Mgc21vb3RoQ2hpbGRUaW1pbmcgaXMgdHJ1ZSBhbmQgdGhlIGFuaW1hdGlvbiBpc24ndCBwYXVzZWQpLiBJdCBkb2Vzbid0IGRvIGFueSByZW5kZXJpbmcgb3IgZm9yY2luZyB0aGluZ3MgYmFjayBpbnRvIHBhcmVudCB0aW1lbGluZXMsIGV0Yy4gLSB0aGF0J3Mgd2hhdCB0b3RhbFRpbWUoKSBpcyBmb3IuXG4gIHZhciBwYXJlbnQgPSBhbmltYXRpb24uX2RwO1xuXG4gIGlmIChwYXJlbnQgJiYgcGFyZW50LnNtb290aENoaWxkVGltaW5nICYmIGFuaW1hdGlvbi5fdHMpIHtcbiAgICBhbmltYXRpb24uX3N0YXJ0ID0gX3JvdW5kUHJlY2lzZShwYXJlbnQuX3RpbWUgLSAoYW5pbWF0aW9uLl90cyA+IDAgPyB0b3RhbFRpbWUgLyBhbmltYXRpb24uX3RzIDogKChhbmltYXRpb24uX2RpcnR5ID8gYW5pbWF0aW9uLnRvdGFsRHVyYXRpb24oKSA6IGFuaW1hdGlvbi5fdER1cikgLSB0b3RhbFRpbWUpIC8gLWFuaW1hdGlvbi5fdHMpKTtcblxuICAgIF9zZXRFbmQoYW5pbWF0aW9uKTtcblxuICAgIHBhcmVudC5fZGlydHkgfHwgX3VuY2FjaGUocGFyZW50LCBhbmltYXRpb24pOyAvL2ZvciBwZXJmb3JtYW5jZSBpbXByb3ZlbWVudC4gSWYgdGhlIHBhcmVudCdzIGNhY2hlIGlzIGFscmVhZHkgZGlydHksIGl0IGFscmVhZHkgdG9vayBjYXJlIG9mIG1hcmtpbmcgdGhlIGFuY2VzdG9ycyBhcyBkaXJ0eSB0b28sIHNvIHNraXAgdGhlIGZ1bmN0aW9uIGNhbGwgaGVyZS5cbiAgfVxuXG4gIHJldHVybiBhbmltYXRpb247XG59LFxuXG4vKlxuX3RvdGFsVGltZVRvVGltZSA9IChjbGFtcGVkVG90YWxUaW1lLCBkdXJhdGlvbiwgcmVwZWF0LCByZXBlYXREZWxheSwgeW95bykgPT4ge1xuXHRsZXQgY3ljbGVEdXJhdGlvbiA9IGR1cmF0aW9uICsgcmVwZWF0RGVsYXksXG5cdFx0dGltZSA9IF9yb3VuZChjbGFtcGVkVG90YWxUaW1lICUgY3ljbGVEdXJhdGlvbik7XG5cdGlmICh0aW1lID4gZHVyYXRpb24pIHtcblx0XHR0aW1lID0gZHVyYXRpb247XG5cdH1cblx0cmV0dXJuICh5b3lvICYmICh+fihjbGFtcGVkVG90YWxUaW1lIC8gY3ljbGVEdXJhdGlvbikgJiAxKSkgPyBkdXJhdGlvbiAtIHRpbWUgOiB0aW1lO1xufSxcbiovXG5fcG9zdEFkZENoZWNrcyA9IGZ1bmN0aW9uIF9wb3N0QWRkQ2hlY2tzKHRpbWVsaW5lLCBjaGlsZCkge1xuICB2YXIgdDtcblxuICBpZiAoY2hpbGQuX3RpbWUgfHwgIWNoaWxkLl9kdXIgJiYgY2hpbGQuX2luaXR0ZWQgfHwgY2hpbGQuX3N0YXJ0IDwgdGltZWxpbmUuX3RpbWUgJiYgKGNoaWxkLl9kdXIgfHwgIWNoaWxkLmFkZCkpIHtcbiAgICAvLyBpbiBjYXNlLCBmb3IgZXhhbXBsZSwgdGhlIF9zdGFydCBpcyBtb3ZlZCBvbiBhIHR3ZWVuIHRoYXQgaGFzIGFscmVhZHkgcmVuZGVyZWQsIG9yIGlmIGl0J3MgYmVpbmcgaW5zZXJ0ZWQgaW50byBhIHRpbWVsaW5lIEJFRk9SRSB3aGVyZSB0aGUgcGxheWhlYWQgaXMgY3VycmVudGx5LiBJbWFnaW5lIGl0J3MgYXQgaXRzIGVuZCBzdGF0ZSwgdGhlbiB0aGUgc3RhcnRUaW1lIGlzIG1vdmVkIFdBWSBsYXRlciAoYWZ0ZXIgdGhlIGVuZCBvZiB0aGlzIHRpbWVsaW5lKSwgaXQgc2hvdWxkIHJlbmRlciBhdCBpdHMgYmVnaW5uaW5nLiBTcGVjaWFsIGNhc2U6IGlmIGl0J3MgYSB0aW1lbGluZSAoaGFzIC5hZGQoKSBtZXRob2QpIGFuZCBubyBkdXJhdGlvbiwgd2UgY2FuIHNraXAgcmVuZGVyaW5nIGJlY2F1c2UgdGhlIHVzZXIgbWF5IGJlIHBvcHVsYXRpbmcgaXQgQUZURVIgYWRkaW5nIGl0IHRvIGEgcGFyZW50IHRpbWVsaW5lICh1bmNvbnZlbnRpb25hbCwgYnV0IHBvc3NpYmxlLCBhbmQgd2Ugd291bGRuJ3Qgd2FudCBpdCB0byBnZXQgcmVtb3ZlZCBpZiB0aGUgcGFyZW50J3MgYXV0b1JlbW92ZUNoaWxkcmVuIGlzIHRydWUpLlxuICAgIHQgPSBfcGFyZW50VG9DaGlsZFRvdGFsVGltZSh0aW1lbGluZS5yYXdUaW1lKCksIGNoaWxkKTtcblxuICAgIGlmICghY2hpbGQuX2R1ciB8fCBfY2xhbXAoMCwgY2hpbGQudG90YWxEdXJhdGlvbigpLCB0KSAtIGNoaWxkLl90VGltZSA+IF90aW55TnVtKSB7XG4gICAgICBjaGlsZC5yZW5kZXIodCwgdHJ1ZSk7XG4gICAgfVxuICB9IC8vaWYgdGhlIHRpbWVsaW5lIGhhcyBhbHJlYWR5IGVuZGVkIGJ1dCB0aGUgaW5zZXJ0ZWQgdHdlZW4vdGltZWxpbmUgZXh0ZW5kcyB0aGUgZHVyYXRpb24sIHdlIHNob3VsZCBlbmFibGUgdGhpcyB0aW1lbGluZSBhZ2FpbiBzbyB0aGF0IGl0IHJlbmRlcnMgcHJvcGVybHkuIFdlIHNob3VsZCBhbHNvIGFsaWduIHRoZSBwbGF5aGVhZCB3aXRoIHRoZSBwYXJlbnQgdGltZWxpbmUncyB3aGVuIGFwcHJvcHJpYXRlLlxuXG5cbiAgaWYgKF91bmNhY2hlKHRpbWVsaW5lLCBjaGlsZCkuX2RwICYmIHRpbWVsaW5lLl9pbml0dGVkICYmIHRpbWVsaW5lLl90aW1lID49IHRpbWVsaW5lLl9kdXIgJiYgdGltZWxpbmUuX3RzKSB7XG4gICAgLy9pbiBjYXNlIGFueSBvZiB0aGUgYW5jZXN0b3JzIGhhZCBjb21wbGV0ZWQgYnV0IHNob3VsZCBub3cgYmUgZW5hYmxlZC4uLlxuICAgIGlmICh0aW1lbGluZS5fZHVyIDwgdGltZWxpbmUuZHVyYXRpb24oKSkge1xuICAgICAgdCA9IHRpbWVsaW5lO1xuXG4gICAgICB3aGlsZSAodC5fZHApIHtcbiAgICAgICAgdC5yYXdUaW1lKCkgPj0gMCAmJiB0LnRvdGFsVGltZSh0Ll90VGltZSk7IC8vbW92ZXMgdGhlIHRpbWVsaW5lIChzaGlmdHMgaXRzIHN0YXJ0VGltZSkgaWYgbmVjZXNzYXJ5LCBhbmQgYWxzbyBlbmFibGVzIGl0LiBJZiBpdCdzIGN1cnJlbnRseSB6ZXJvLCB0aG91Z2gsIGl0IG1heSBub3QgYmUgc2NoZWR1bGVkIHRvIHJlbmRlciB1bnRpbCBsYXRlciBzbyB0aGVyZSdzIG5vIG5lZWQgdG8gZm9yY2UgaXQgdG8gYWxpZ24gd2l0aCB0aGUgY3VycmVudCBwbGF5aGVhZCBwb3NpdGlvbi4gT25seSBtb3ZlIHRvIGNhdGNoIHVwIHdpdGggdGhlIHBsYXloZWFkLlxuXG4gICAgICAgIHQgPSB0Ll9kcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aW1lbGluZS5felRpbWUgPSAtX3RpbnlOdW07IC8vIGhlbHBzIGVuc3VyZSB0aGF0IHRoZSBuZXh0IHJlbmRlcigpIHdpbGwgYmUgZm9yY2VkIChjcm9zc2luZ1N0YXJ0ID0gdHJ1ZSBpbiByZW5kZXIoKSksIGV2ZW4gaWYgdGhlIGR1cmF0aW9uIGhhc24ndCBjaGFuZ2VkICh3ZSdyZSBhZGRpbmcgYSBjaGlsZCB3aGljaCB3b3VsZCBuZWVkIHRvIGdldCByZW5kZXJlZCkuIERlZmluaXRlbHkgYW4gZWRnZSBjYXNlLiBOb3RlOiB3ZSBNVVNUIGRvIHRoaXMgQUZURVIgdGhlIGxvb3AgYWJvdmUgd2hlcmUgdGhlIHRvdGFsVGltZSgpIG1pZ2h0IHRyaWdnZXIgYSByZW5kZXIoKSBiZWNhdXNlIHRoaXMgX2FkZFRvVGltZWxpbmUoKSBtZXRob2QgZ2V0cyBjYWxsZWQgZnJvbSB0aGUgQW5pbWF0aW9uIGNvbnN0cnVjdG9yLCBCRUZPUkUgdHdlZW5zIGV2ZW4gcmVjb3JkIHRoZWlyIHRhcmdldHMsIGV0Yy4gc28gd2Ugd291bGRuJ3Qgd2FudCB0aGluZ3MgdG8gZ2V0IHRyaWdnZXJlZCBpbiB0aGUgd3Jvbmcgb3JkZXIuXG4gIH1cbn0sXG4gICAgX2FkZFRvVGltZWxpbmUgPSBmdW5jdGlvbiBfYWRkVG9UaW1lbGluZSh0aW1lbGluZSwgY2hpbGQsIHBvc2l0aW9uLCBza2lwQ2hlY2tzKSB7XG4gIGNoaWxkLnBhcmVudCAmJiBfcmVtb3ZlRnJvbVBhcmVudChjaGlsZCk7XG4gIGNoaWxkLl9zdGFydCA9IF9yb3VuZFByZWNpc2UoKF9pc051bWJlcihwb3NpdGlvbikgPyBwb3NpdGlvbiA6IHBvc2l0aW9uIHx8IHRpbWVsaW5lICE9PSBfZ2xvYmFsVGltZWxpbmUgPyBfcGFyc2VQb3NpdGlvbih0aW1lbGluZSwgcG9zaXRpb24sIGNoaWxkKSA6IHRpbWVsaW5lLl90aW1lKSArIGNoaWxkLl9kZWxheSk7XG4gIGNoaWxkLl9lbmQgPSBfcm91bmRQcmVjaXNlKGNoaWxkLl9zdGFydCArIChjaGlsZC50b3RhbER1cmF0aW9uKCkgLyBNYXRoLmFicyhjaGlsZC50aW1lU2NhbGUoKSkgfHwgMCkpO1xuXG4gIF9hZGRMaW5rZWRMaXN0SXRlbSh0aW1lbGluZSwgY2hpbGQsIFwiX2ZpcnN0XCIsIFwiX2xhc3RcIiwgdGltZWxpbmUuX3NvcnQgPyBcIl9zdGFydFwiIDogMCk7XG5cbiAgX2lzRnJvbU9yRnJvbVN0YXJ0KGNoaWxkKSB8fCAodGltZWxpbmUuX3JlY2VudCA9IGNoaWxkKTtcbiAgc2tpcENoZWNrcyB8fCBfcG9zdEFkZENoZWNrcyh0aW1lbGluZSwgY2hpbGQpO1xuICB0aW1lbGluZS5fdHMgPCAwICYmIF9hbGlnblBsYXloZWFkKHRpbWVsaW5lLCB0aW1lbGluZS5fdFRpbWUpOyAvLyBpZiB0aGUgdGltZWxpbmUgaXMgcmV2ZXJzZWQgYW5kIHRoZSBuZXcgY2hpbGQgbWFrZXMgaXQgbG9uZ2VyLCB3ZSBtYXkgbmVlZCB0byBhZGp1c3QgdGhlIHBhcmVudCdzIF9zdGFydCAocHVzaCBpdCBiYWNrKVxuXG4gIHJldHVybiB0aW1lbGluZTtcbn0sXG4gICAgX3Njcm9sbFRyaWdnZXIgPSBmdW5jdGlvbiBfc2Nyb2xsVHJpZ2dlcihhbmltYXRpb24sIHRyaWdnZXIpIHtcbiAgcmV0dXJuIChfZ2xvYmFscy5TY3JvbGxUcmlnZ2VyIHx8IF9taXNzaW5nUGx1Z2luKFwic2Nyb2xsVHJpZ2dlclwiLCB0cmlnZ2VyKSkgJiYgX2dsb2JhbHMuU2Nyb2xsVHJpZ2dlci5jcmVhdGUodHJpZ2dlciwgYW5pbWF0aW9uKTtcbn0sXG4gICAgX2F0dGVtcHRJbml0VHdlZW4gPSBmdW5jdGlvbiBfYXR0ZW1wdEluaXRUd2Vlbih0d2VlbiwgdGltZSwgZm9yY2UsIHN1cHByZXNzRXZlbnRzLCB0VGltZSkge1xuICBfaW5pdFR3ZWVuKHR3ZWVuLCB0aW1lLCB0VGltZSk7XG5cbiAgaWYgKCF0d2Vlbi5faW5pdHRlZCkge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgaWYgKCFmb3JjZSAmJiB0d2Vlbi5fcHQgJiYgIV9yZXZlcnRpbmcgJiYgKHR3ZWVuLl9kdXIgJiYgdHdlZW4udmFycy5sYXp5ICE9PSBmYWxzZSB8fCAhdHdlZW4uX2R1ciAmJiB0d2Vlbi52YXJzLmxhenkpICYmIF9sYXN0UmVuZGVyZWRGcmFtZSAhPT0gX3RpY2tlci5mcmFtZSkge1xuICAgIF9sYXp5VHdlZW5zLnB1c2godHdlZW4pO1xuXG4gICAgdHdlZW4uX2xhenkgPSBbdFRpbWUsIHN1cHByZXNzRXZlbnRzXTtcbiAgICByZXR1cm4gMTtcbiAgfVxufSxcbiAgICBfcGFyZW50UGxheWhlYWRJc0JlZm9yZVN0YXJ0ID0gZnVuY3Rpb24gX3BhcmVudFBsYXloZWFkSXNCZWZvcmVTdGFydChfcmVmKSB7XG4gIHZhciBwYXJlbnQgPSBfcmVmLnBhcmVudDtcbiAgcmV0dXJuIHBhcmVudCAmJiBwYXJlbnQuX3RzICYmIHBhcmVudC5faW5pdHRlZCAmJiAhcGFyZW50Ll9sb2NrICYmIChwYXJlbnQucmF3VGltZSgpIDwgMCB8fCBfcGFyZW50UGxheWhlYWRJc0JlZm9yZVN0YXJ0KHBhcmVudCkpO1xufSxcbiAgICAvLyBjaGVjayBwYXJlbnQncyBfbG9jayBiZWNhdXNlIHdoZW4gYSB0aW1lbGluZSByZXBlYXRzL3lveW9zIGFuZCBkb2VzIGl0cyBhcnRpZmljaWFsIHdyYXBwaW5nLCB3ZSBzaG91bGRuJ3QgZm9yY2UgdGhlIHJhdGlvIGJhY2sgdG8gMFxuX2lzRnJvbU9yRnJvbVN0YXJ0ID0gZnVuY3Rpb24gX2lzRnJvbU9yRnJvbVN0YXJ0KF9yZWYyKSB7XG4gIHZhciBkYXRhID0gX3JlZjIuZGF0YTtcbiAgcmV0dXJuIGRhdGEgPT09IFwiaXNGcm9tU3RhcnRcIiB8fCBkYXRhID09PSBcImlzU3RhcnRcIjtcbn0sXG4gICAgX3JlbmRlclplcm9EdXJhdGlvblR3ZWVuID0gZnVuY3Rpb24gX3JlbmRlclplcm9EdXJhdGlvblR3ZWVuKHR3ZWVuLCB0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSkge1xuICB2YXIgcHJldlJhdGlvID0gdHdlZW4ucmF0aW8sXG4gICAgICByYXRpbyA9IHRvdGFsVGltZSA8IDAgfHwgIXRvdGFsVGltZSAmJiAoIXR3ZWVuLl9zdGFydCAmJiBfcGFyZW50UGxheWhlYWRJc0JlZm9yZVN0YXJ0KHR3ZWVuKSAmJiAhKCF0d2Vlbi5faW5pdHRlZCAmJiBfaXNGcm9tT3JGcm9tU3RhcnQodHdlZW4pKSB8fCAodHdlZW4uX3RzIDwgMCB8fCB0d2Vlbi5fZHAuX3RzIDwgMCkgJiYgIV9pc0Zyb21PckZyb21TdGFydCh0d2VlbikpID8gMCA6IDEsXG4gICAgICAvLyBpZiB0aGUgdHdlZW4gb3IgaXRzIHBhcmVudCBpcyByZXZlcnNlZCBhbmQgdGhlIHRvdGFsVGltZSBpcyAwLCB3ZSBzaG91bGQgZ28gdG8gYSByYXRpbyBvZiAwLiBFZGdlIGNhc2U6IGlmIGEgZnJvbSgpIG9yIGZyb21UbygpIHN0YWdnZXIgdHdlZW4gaXMgcGxhY2VkIGxhdGVyIGluIGEgdGltZWxpbmUsIHRoZSBcInN0YXJ0QXRcIiB6ZXJvLWR1cmF0aW9uIHR3ZWVuIGNvdWxkIGluaXRpYWxseSByZW5kZXIgYXQgYSB0aW1lIHdoZW4gdGhlIHBhcmVudCB0aW1lbGluZSdzIHBsYXloZWFkIGlzIHRlY2huaWNhbGx5IEJFRk9SRSB3aGVyZSB0aGlzIHR3ZWVuIGlzLCBzbyBtYWtlIHN1cmUgdGhhdCBhbnkgXCJmcm9tXCIgYW5kIFwiZnJvbVRvXCIgc3RhcnRBdCB0d2VlbnMgYXJlIHJlbmRlcmVkIHRoZSBmaXJzdCB0aW1lIGF0IGEgcmF0aW8gb2YgMS5cbiAgcmVwZWF0RGVsYXkgPSB0d2Vlbi5fckRlbGF5LFxuICAgICAgdFRpbWUgPSAwLFxuICAgICAgcHQsXG4gICAgICBpdGVyYXRpb24sXG4gICAgICBwcmV2SXRlcmF0aW9uO1xuXG4gIGlmIChyZXBlYXREZWxheSAmJiB0d2Vlbi5fcmVwZWF0KSB7XG4gICAgLy8gaW4gY2FzZSB0aGVyZSdzIGEgemVyby1kdXJhdGlvbiB0d2VlbiB0aGF0IGhhcyBhIHJlcGVhdCB3aXRoIGEgcmVwZWF0RGVsYXlcbiAgICB0VGltZSA9IF9jbGFtcCgwLCB0d2Vlbi5fdER1ciwgdG90YWxUaW1lKTtcbiAgICBpdGVyYXRpb24gPSBfYW5pbWF0aW9uQ3ljbGUodFRpbWUsIHJlcGVhdERlbGF5KTtcbiAgICB0d2Vlbi5feW95byAmJiBpdGVyYXRpb24gJiAxICYmIChyYXRpbyA9IDEgLSByYXRpbyk7XG5cbiAgICBpZiAoaXRlcmF0aW9uICE9PSBfYW5pbWF0aW9uQ3ljbGUodHdlZW4uX3RUaW1lLCByZXBlYXREZWxheSkpIHtcbiAgICAgIC8vIGlmIGl0ZXJhdGlvbiBjaGFuZ2VkXG4gICAgICBwcmV2UmF0aW8gPSAxIC0gcmF0aW87XG4gICAgICB0d2Vlbi52YXJzLnJlcGVhdFJlZnJlc2ggJiYgdHdlZW4uX2luaXR0ZWQgJiYgdHdlZW4uaW52YWxpZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChyYXRpbyAhPT0gcHJldlJhdGlvIHx8IF9yZXZlcnRpbmcgfHwgZm9yY2UgfHwgdHdlZW4uX3pUaW1lID09PSBfdGlueU51bSB8fCAhdG90YWxUaW1lICYmIHR3ZWVuLl96VGltZSkge1xuICAgIGlmICghdHdlZW4uX2luaXR0ZWQgJiYgX2F0dGVtcHRJbml0VHdlZW4odHdlZW4sIHRvdGFsVGltZSwgZm9yY2UsIHN1cHByZXNzRXZlbnRzLCB0VGltZSkpIHtcbiAgICAgIC8vIGlmIHdlIHJlbmRlciB0aGUgdmVyeSBiZWdpbm5pbmcgKHRpbWUgPT0gMCkgb2YgYSBmcm9tVG8oKSwgd2UgbXVzdCBmb3JjZSB0aGUgcmVuZGVyIChub3JtYWwgdHdlZW5zIHdvdWxkbid0IG5lZWQgdG8gcmVuZGVyIGF0IGEgdGltZSBvZiAwIHdoZW4gdGhlIHByZXZUaW1lIHdhcyBhbHNvIDApLiBUaGlzIGlzIGFsc28gbWFuZGF0b3J5IHRvIG1ha2Ugc3VyZSBvdmVyd3JpdGluZyBraWNrcyBpbiBpbW1lZGlhdGVseS5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcmV2SXRlcmF0aW9uID0gdHdlZW4uX3pUaW1lO1xuICAgIHR3ZWVuLl96VGltZSA9IHRvdGFsVGltZSB8fCAoc3VwcHJlc3NFdmVudHMgPyBfdGlueU51bSA6IDApOyAvLyB3aGVuIHRoZSBwbGF5aGVhZCBhcnJpdmVzIGF0IEVYQUNUTFkgdGltZSAwIChyaWdodCBvbiB0b3ApIG9mIGEgemVyby1kdXJhdGlvbiB0d2Vlbiwgd2UgbmVlZCB0byBkaXNjZXJuIGlmIGV2ZW50cyBhcmUgc3VwcHJlc3NlZCBzbyB0aGF0IHdoZW4gdGhlIHBsYXloZWFkIG1vdmVzIGFnYWluIChuZXh0IHRpbWUpLCBpdCdsbCB0cmlnZ2VyIHRoZSBjYWxsYmFjay4gSWYgZXZlbnRzIGFyZSBOT1Qgc3VwcHJlc3NlZCwgb2J2aW91c2x5IHRoZSBjYWxsYmFjayB3b3VsZCBiZSB0cmlnZ2VyZWQgaW4gdGhpcyByZW5kZXIuIEJhc2ljYWxseSwgdGhlIGNhbGxiYWNrIHNob3VsZCBmaXJlIGVpdGhlciB3aGVuIHRoZSBwbGF5aGVhZCBBUlJJVkVTIG9yIExFQVZFUyB0aGlzIGV4YWN0IHNwb3QsIG5vdCBib3RoLiBJbWFnaW5lIGRvaW5nIGEgdGltZWxpbmUuc2VlaygwKSBhbmQgdGhlcmUncyBhIGNhbGxiYWNrIHRoYXQgc2l0cyBhdCAwLiBTaW5jZSBldmVudHMgYXJlIHN1cHByZXNzZWQgb24gdGhhdCBzZWVrKCkgYnkgZGVmYXVsdCwgbm90aGluZyB3aWxsIGZpcmUsIGJ1dCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBvZmYgb2YgdGhhdCBwb3NpdGlvbiwgdGhlIGNhbGxiYWNrIHNob3VsZCBmaXJlLiBUaGlzIGJlaGF2aW9yIGlzIHdoYXQgcGVvcGxlIGludHVpdGl2ZWx5IGV4cGVjdC5cblxuICAgIHN1cHByZXNzRXZlbnRzIHx8IChzdXBwcmVzc0V2ZW50cyA9IHRvdGFsVGltZSAmJiAhcHJldkl0ZXJhdGlvbik7IC8vIGlmIGl0IHdhcyByZW5kZXJlZCBwcmV2aW91c2x5IGF0IGV4YWN0bHkgMCAoX3pUaW1lKSBhbmQgbm93IHRoZSBwbGF5aGVhZCBpcyBtb3ZpbmcgYXdheSwgRE9OJ1QgZmlyZSBjYWxsYmFja3Mgb3RoZXJ3aXNlIHRoZXknbGwgc2VlbSBsaWtlIGR1cGxpY2F0ZXMuXG5cbiAgICB0d2Vlbi5yYXRpbyA9IHJhdGlvO1xuICAgIHR3ZWVuLl9mcm9tICYmIChyYXRpbyA9IDEgLSByYXRpbyk7XG4gICAgdHdlZW4uX3RpbWUgPSAwO1xuICAgIHR3ZWVuLl90VGltZSA9IHRUaW1lO1xuICAgIHB0ID0gdHdlZW4uX3B0O1xuXG4gICAgd2hpbGUgKHB0KSB7XG4gICAgICBwdC5yKHJhdGlvLCBwdC5kKTtcbiAgICAgIHB0ID0gcHQuX25leHQ7XG4gICAgfVxuXG4gICAgdG90YWxUaW1lIDwgMCAmJiBfcmV3aW5kU3RhcnRBdCh0d2VlbiwgdG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgdHJ1ZSk7XG4gICAgdHdlZW4uX29uVXBkYXRlICYmICFzdXBwcmVzc0V2ZW50cyAmJiBfY2FsbGJhY2sodHdlZW4sIFwib25VcGRhdGVcIik7XG4gICAgdFRpbWUgJiYgdHdlZW4uX3JlcGVhdCAmJiAhc3VwcHJlc3NFdmVudHMgJiYgdHdlZW4ucGFyZW50ICYmIF9jYWxsYmFjayh0d2VlbiwgXCJvblJlcGVhdFwiKTtcblxuICAgIGlmICgodG90YWxUaW1lID49IHR3ZWVuLl90RHVyIHx8IHRvdGFsVGltZSA8IDApICYmIHR3ZWVuLnJhdGlvID09PSByYXRpbykge1xuICAgICAgcmF0aW8gJiYgX3JlbW92ZUZyb21QYXJlbnQodHdlZW4sIDEpO1xuXG4gICAgICBpZiAoIXN1cHByZXNzRXZlbnRzICYmICFfcmV2ZXJ0aW5nKSB7XG4gICAgICAgIF9jYWxsYmFjayh0d2VlbiwgcmF0aW8gPyBcIm9uQ29tcGxldGVcIiA6IFwib25SZXZlcnNlQ29tcGxldGVcIiwgdHJ1ZSk7XG5cbiAgICAgICAgdHdlZW4uX3Byb20gJiYgdHdlZW4uX3Byb20oKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoIXR3ZWVuLl96VGltZSkge1xuICAgIHR3ZWVuLl96VGltZSA9IHRvdGFsVGltZTtcbiAgfVxufSxcbiAgICBfZmluZE5leHRQYXVzZVR3ZWVuID0gZnVuY3Rpb24gX2ZpbmROZXh0UGF1c2VUd2VlbihhbmltYXRpb24sIHByZXZUaW1lLCB0aW1lKSB7XG4gIHZhciBjaGlsZDtcblxuICBpZiAodGltZSA+IHByZXZUaW1lKSB7XG4gICAgY2hpbGQgPSBhbmltYXRpb24uX2ZpcnN0O1xuXG4gICAgd2hpbGUgKGNoaWxkICYmIGNoaWxkLl9zdGFydCA8PSB0aW1lKSB7XG4gICAgICBpZiAoY2hpbGQuZGF0YSA9PT0gXCJpc1BhdXNlXCIgJiYgY2hpbGQuX3N0YXJ0ID4gcHJldlRpbWUpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgfVxuXG4gICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjaGlsZCA9IGFuaW1hdGlvbi5fbGFzdDtcblxuICAgIHdoaWxlIChjaGlsZCAmJiBjaGlsZC5fc3RhcnQgPj0gdGltZSkge1xuICAgICAgaWYgKGNoaWxkLmRhdGEgPT09IFwiaXNQYXVzZVwiICYmIGNoaWxkLl9zdGFydCA8IHByZXZUaW1lKSB7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgIH1cblxuICAgICAgY2hpbGQgPSBjaGlsZC5fcHJldjtcbiAgICB9XG4gIH1cbn0sXG4gICAgX3NldER1cmF0aW9uID0gZnVuY3Rpb24gX3NldER1cmF0aW9uKGFuaW1hdGlvbiwgZHVyYXRpb24sIHNraXBVbmNhY2hlLCBsZWF2ZVBsYXloZWFkKSB7XG4gIHZhciByZXBlYXQgPSBhbmltYXRpb24uX3JlcGVhdCxcbiAgICAgIGR1ciA9IF9yb3VuZFByZWNpc2UoZHVyYXRpb24pIHx8IDAsXG4gICAgICB0b3RhbFByb2dyZXNzID0gYW5pbWF0aW9uLl90VGltZSAvIGFuaW1hdGlvbi5fdER1cjtcbiAgdG90YWxQcm9ncmVzcyAmJiAhbGVhdmVQbGF5aGVhZCAmJiAoYW5pbWF0aW9uLl90aW1lICo9IGR1ciAvIGFuaW1hdGlvbi5fZHVyKTtcbiAgYW5pbWF0aW9uLl9kdXIgPSBkdXI7XG4gIGFuaW1hdGlvbi5fdER1ciA9ICFyZXBlYXQgPyBkdXIgOiByZXBlYXQgPCAwID8gMWUxMCA6IF9yb3VuZFByZWNpc2UoZHVyICogKHJlcGVhdCArIDEpICsgYW5pbWF0aW9uLl9yRGVsYXkgKiByZXBlYXQpO1xuICB0b3RhbFByb2dyZXNzID4gMCAmJiAhbGVhdmVQbGF5aGVhZCAmJiBfYWxpZ25QbGF5aGVhZChhbmltYXRpb24sIGFuaW1hdGlvbi5fdFRpbWUgPSBhbmltYXRpb24uX3REdXIgKiB0b3RhbFByb2dyZXNzKTtcbiAgYW5pbWF0aW9uLnBhcmVudCAmJiBfc2V0RW5kKGFuaW1hdGlvbik7XG4gIHNraXBVbmNhY2hlIHx8IF91bmNhY2hlKGFuaW1hdGlvbi5wYXJlbnQsIGFuaW1hdGlvbik7XG4gIHJldHVybiBhbmltYXRpb247XG59LFxuICAgIF9vblVwZGF0ZVRvdGFsRHVyYXRpb24gPSBmdW5jdGlvbiBfb25VcGRhdGVUb3RhbER1cmF0aW9uKGFuaW1hdGlvbikge1xuICByZXR1cm4gYW5pbWF0aW9uIGluc3RhbmNlb2YgVGltZWxpbmUgPyBfdW5jYWNoZShhbmltYXRpb24pIDogX3NldER1cmF0aW9uKGFuaW1hdGlvbiwgYW5pbWF0aW9uLl9kdXIpO1xufSxcbiAgICBfemVyb1Bvc2l0aW9uID0ge1xuICBfc3RhcnQ6IDAsXG4gIGVuZFRpbWU6IF9lbXB0eUZ1bmMsXG4gIHRvdGFsRHVyYXRpb246IF9lbXB0eUZ1bmNcbn0sXG4gICAgX3BhcnNlUG9zaXRpb24gPSBmdW5jdGlvbiBfcGFyc2VQb3NpdGlvbihhbmltYXRpb24sIHBvc2l0aW9uLCBwZXJjZW50QW5pbWF0aW9uKSB7XG4gIHZhciBsYWJlbHMgPSBhbmltYXRpb24ubGFiZWxzLFxuICAgICAgcmVjZW50ID0gYW5pbWF0aW9uLl9yZWNlbnQgfHwgX3plcm9Qb3NpdGlvbixcbiAgICAgIGNsaXBwZWREdXJhdGlvbiA9IGFuaW1hdGlvbi5kdXJhdGlvbigpID49IF9iaWdOdW0gPyByZWNlbnQuZW5kVGltZShmYWxzZSkgOiBhbmltYXRpb24uX2R1cixcbiAgICAgIC8vaW4gY2FzZSB0aGVyZSdzIGEgY2hpbGQgdGhhdCBpbmZpbml0ZWx5IHJlcGVhdHMsIHVzZXJzIGFsbW9zdCBuZXZlciBpbnRlbmQgZm9yIHRoZSBpbnNlcnRpb24gcG9pbnQgb2YgYSBuZXcgY2hpbGQgdG8gYmUgYmFzZWQgb24gYSBTVVBFUiBsb25nIHZhbHVlIGxpa2UgdGhhdCBzbyB3ZSBjbGlwIGl0IGFuZCBhc3N1bWUgdGhlIG1vc3QgcmVjZW50bHktYWRkZWQgY2hpbGQncyBlbmRUaW1lIHNob3VsZCBiZSB1c2VkIGluc3RlYWQuXG4gIGksXG4gICAgICBvZmZzZXQsXG4gICAgICBpc1BlcmNlbnQ7XG5cbiAgaWYgKF9pc1N0cmluZyhwb3NpdGlvbikgJiYgKGlzTmFOKHBvc2l0aW9uKSB8fCBwb3NpdGlvbiBpbiBsYWJlbHMpKSB7XG4gICAgLy9pZiB0aGUgc3RyaW5nIGlzIGEgbnVtYmVyIGxpa2UgXCIxXCIsIGNoZWNrIHRvIHNlZSBpZiB0aGVyZSdzIGEgbGFiZWwgd2l0aCB0aGF0IG5hbWUsIG90aGVyd2lzZSBpbnRlcnByZXQgaXQgYXMgYSBudW1iZXIgKGFic29sdXRlIHZhbHVlKS5cbiAgICBvZmZzZXQgPSBwb3NpdGlvbi5jaGFyQXQoMCk7XG4gICAgaXNQZXJjZW50ID0gcG9zaXRpb24uc3Vic3RyKC0xKSA9PT0gXCIlXCI7XG4gICAgaSA9IHBvc2l0aW9uLmluZGV4T2YoXCI9XCIpO1xuXG4gICAgaWYgKG9mZnNldCA9PT0gXCI8XCIgfHwgb2Zmc2V0ID09PSBcIj5cIikge1xuICAgICAgaSA+PSAwICYmIChwb3NpdGlvbiA9IHBvc2l0aW9uLnJlcGxhY2UoLz0vLCBcIlwiKSk7XG4gICAgICByZXR1cm4gKG9mZnNldCA9PT0gXCI8XCIgPyByZWNlbnQuX3N0YXJ0IDogcmVjZW50LmVuZFRpbWUocmVjZW50Ll9yZXBlYXQgPj0gMCkpICsgKHBhcnNlRmxvYXQocG9zaXRpb24uc3Vic3RyKDEpKSB8fCAwKSAqIChpc1BlcmNlbnQgPyAoaSA8IDAgPyByZWNlbnQgOiBwZXJjZW50QW5pbWF0aW9uKS50b3RhbER1cmF0aW9uKCkgLyAxMDAgOiAxKTtcbiAgICB9XG5cbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIHBvc2l0aW9uIGluIGxhYmVscyB8fCAobGFiZWxzW3Bvc2l0aW9uXSA9IGNsaXBwZWREdXJhdGlvbik7XG4gICAgICByZXR1cm4gbGFiZWxzW3Bvc2l0aW9uXTtcbiAgICB9XG5cbiAgICBvZmZzZXQgPSBwYXJzZUZsb2F0KHBvc2l0aW9uLmNoYXJBdChpIC0gMSkgKyBwb3NpdGlvbi5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChpc1BlcmNlbnQgJiYgcGVyY2VudEFuaW1hdGlvbikge1xuICAgICAgb2Zmc2V0ID0gb2Zmc2V0IC8gMTAwICogKF9pc0FycmF5KHBlcmNlbnRBbmltYXRpb24pID8gcGVyY2VudEFuaW1hdGlvblswXSA6IHBlcmNlbnRBbmltYXRpb24pLnRvdGFsRHVyYXRpb24oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaSA+IDEgPyBfcGFyc2VQb3NpdGlvbihhbmltYXRpb24sIHBvc2l0aW9uLnN1YnN0cigwLCBpIC0gMSksIHBlcmNlbnRBbmltYXRpb24pICsgb2Zmc2V0IDogY2xpcHBlZER1cmF0aW9uICsgb2Zmc2V0O1xuICB9XG5cbiAgcmV0dXJuIHBvc2l0aW9uID09IG51bGwgPyBjbGlwcGVkRHVyYXRpb24gOiArcG9zaXRpb247XG59LFxuICAgIF9jcmVhdGVUd2VlblR5cGUgPSBmdW5jdGlvbiBfY3JlYXRlVHdlZW5UeXBlKHR5cGUsIHBhcmFtcywgdGltZWxpbmUpIHtcbiAgdmFyIGlzTGVnYWN5ID0gX2lzTnVtYmVyKHBhcmFtc1sxXSksXG4gICAgICB2YXJzSW5kZXggPSAoaXNMZWdhY3kgPyAyIDogMSkgKyAodHlwZSA8IDIgPyAwIDogMSksXG4gICAgICB2YXJzID0gcGFyYW1zW3ZhcnNJbmRleF0sXG4gICAgICBpclZhcnMsXG4gICAgICBwYXJlbnQ7XG5cbiAgaXNMZWdhY3kgJiYgKHZhcnMuZHVyYXRpb24gPSBwYXJhbXNbMV0pO1xuICB2YXJzLnBhcmVudCA9IHRpbWVsaW5lO1xuXG4gIGlmICh0eXBlKSB7XG4gICAgaXJWYXJzID0gdmFycztcbiAgICBwYXJlbnQgPSB0aW1lbGluZTtcblxuICAgIHdoaWxlIChwYXJlbnQgJiYgIShcImltbWVkaWF0ZVJlbmRlclwiIGluIGlyVmFycykpIHtcbiAgICAgIC8vIGluaGVyaXRhbmNlIGhhc24ndCBoYXBwZW5lZCB5ZXQsIGJ1dCBzb21lb25lIG1heSBoYXZlIHNldCBhIGRlZmF1bHQgaW4gYW4gYW5jZXN0b3IgdGltZWxpbmUuIFdlIGNvdWxkIGRvIHZhcnMuaW1tZWRpYXRlUmVuZGVyID0gX2lzTm90RmFsc2UoX2luaGVyaXREZWZhdWx0cyh2YXJzKS5pbW1lZGlhdGVSZW5kZXIpIGJ1dCB0aGF0J2QgZXhhY3QgYSBzbGlnaHQgcGVyZm9ybWFuY2UgcGVuYWx0eSBiZWNhdXNlIF9pbmhlcml0RGVmYXVsdHMoKSBhbHNvIHJ1bnMgaW4gdGhlIFR3ZWVuIGNvbnN0cnVjdG9yLiBXZSdyZSBwYXlpbmcgYSBzbWFsbCBrYiBwcmljZSBoZXJlIHRvIGdhaW4gc3BlZWQuXG4gICAgICBpclZhcnMgPSBwYXJlbnQudmFycy5kZWZhdWx0cyB8fCB7fTtcbiAgICAgIHBhcmVudCA9IF9pc05vdEZhbHNlKHBhcmVudC52YXJzLmluaGVyaXQpICYmIHBhcmVudC5wYXJlbnQ7XG4gICAgfVxuXG4gICAgdmFycy5pbW1lZGlhdGVSZW5kZXIgPSBfaXNOb3RGYWxzZShpclZhcnMuaW1tZWRpYXRlUmVuZGVyKTtcbiAgICB0eXBlIDwgMiA/IHZhcnMucnVuQmFja3dhcmRzID0gMSA6IHZhcnMuc3RhcnRBdCA9IHBhcmFtc1t2YXJzSW5kZXggLSAxXTsgLy8gXCJmcm9tXCIgdmFyc1xuICB9XG5cbiAgcmV0dXJuIG5ldyBUd2VlbihwYXJhbXNbMF0sIHZhcnMsIHBhcmFtc1t2YXJzSW5kZXggKyAxXSk7XG59LFxuICAgIF9jb25kaXRpb25hbFJldHVybiA9IGZ1bmN0aW9uIF9jb25kaXRpb25hbFJldHVybih2YWx1ZSwgZnVuYykge1xuICByZXR1cm4gdmFsdWUgfHwgdmFsdWUgPT09IDAgPyBmdW5jKHZhbHVlKSA6IGZ1bmM7XG59LFxuICAgIF9jbGFtcCA9IGZ1bmN0aW9uIF9jbGFtcChtaW4sIG1heCwgdmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIDwgbWluID8gbWluIDogdmFsdWUgPiBtYXggPyBtYXggOiB2YWx1ZTtcbn0sXG4gICAgZ2V0VW5pdCA9IGZ1bmN0aW9uIGdldFVuaXQodmFsdWUsIHYpIHtcbiAgcmV0dXJuICFfaXNTdHJpbmcodmFsdWUpIHx8ICEodiA9IF91bml0RXhwLmV4ZWModmFsdWUpKSA/IFwiXCIgOiB2WzFdO1xufSxcbiAgICAvLyBub3RlOiBwcm90ZWN0IGFnYWluc3QgcGFkZGVkIG51bWJlcnMgYXMgc3RyaW5ncywgbGlrZSBcIjEwMC4xMDBcIi4gVGhhdCBzaG91bGRuJ3QgcmV0dXJuIFwiMDBcIiBhcyB0aGUgdW5pdC4gSWYgaXQncyBudW1lcmljLCByZXR1cm4gbm8gdW5pdC5cbmNsYW1wID0gZnVuY3Rpb24gY2xhbXAobWluLCBtYXgsIHZhbHVlKSB7XG4gIHJldHVybiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIF9jbGFtcChtaW4sIG1heCwgdik7XG4gIH0pO1xufSxcbiAgICBfc2xpY2UgPSBbXS5zbGljZSxcbiAgICBfaXNBcnJheUxpa2UgPSBmdW5jdGlvbiBfaXNBcnJheUxpa2UodmFsdWUsIG5vbkVtcHR5KSB7XG4gIHJldHVybiB2YWx1ZSAmJiBfaXNPYmplY3QodmFsdWUpICYmIFwibGVuZ3RoXCIgaW4gdmFsdWUgJiYgKCFub25FbXB0eSAmJiAhdmFsdWUubGVuZ3RoIHx8IHZhbHVlLmxlbmd0aCAtIDEgaW4gdmFsdWUgJiYgX2lzT2JqZWN0KHZhbHVlWzBdKSkgJiYgIXZhbHVlLm5vZGVUeXBlICYmIHZhbHVlICE9PSBfd2luO1xufSxcbiAgICBfZmxhdHRlbiA9IGZ1bmN0aW9uIF9mbGF0dGVuKGFyLCBsZWF2ZVN0cmluZ3MsIGFjY3VtdWxhdG9yKSB7XG4gIGlmIChhY2N1bXVsYXRvciA9PT0gdm9pZCAwKSB7XG4gICAgYWNjdW11bGF0b3IgPSBbXTtcbiAgfVxuXG4gIHJldHVybiBhci5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBfYWNjdW11bGF0b3I7XG5cbiAgICByZXR1cm4gX2lzU3RyaW5nKHZhbHVlKSAmJiAhbGVhdmVTdHJpbmdzIHx8IF9pc0FycmF5TGlrZSh2YWx1ZSwgMSkgPyAoX2FjY3VtdWxhdG9yID0gYWNjdW11bGF0b3IpLnB1c2guYXBwbHkoX2FjY3VtdWxhdG9yLCB0b0FycmF5KHZhbHVlKSkgOiBhY2N1bXVsYXRvci5wdXNoKHZhbHVlKTtcbiAgfSkgfHwgYWNjdW11bGF0b3I7XG59LFxuICAgIC8vdGFrZXMgYW55IHZhbHVlIGFuZCByZXR1cm5zIGFuIGFycmF5LiBJZiBpdCdzIGEgc3RyaW5nIChhbmQgbGVhdmVTdHJpbmdzIGlzbid0IHRydWUpLCBpdCdsbCB1c2UgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgpIGFuZCBjb252ZXJ0IHRoYXQgdG8gYW4gYXJyYXkuIEl0J2xsIGFsc28gYWNjZXB0IGl0ZXJhYmxlcyBsaWtlIGpRdWVyeSBvYmplY3RzLlxudG9BcnJheSA9IGZ1bmN0aW9uIHRvQXJyYXkodmFsdWUsIHNjb3BlLCBsZWF2ZVN0cmluZ3MpIHtcbiAgcmV0dXJuIF9jb250ZXh0ICYmICFzY29wZSAmJiBfY29udGV4dC5zZWxlY3RvciA/IF9jb250ZXh0LnNlbGVjdG9yKHZhbHVlKSA6IF9pc1N0cmluZyh2YWx1ZSkgJiYgIWxlYXZlU3RyaW5ncyAmJiAoX2NvcmVJbml0dGVkIHx8ICFfd2FrZSgpKSA/IF9zbGljZS5jYWxsKChzY29wZSB8fCBfZG9jKS5xdWVyeVNlbGVjdG9yQWxsKHZhbHVlKSwgMCkgOiBfaXNBcnJheSh2YWx1ZSkgPyBfZmxhdHRlbih2YWx1ZSwgbGVhdmVTdHJpbmdzKSA6IF9pc0FycmF5TGlrZSh2YWx1ZSkgPyBfc2xpY2UuY2FsbCh2YWx1ZSwgMCkgOiB2YWx1ZSA/IFt2YWx1ZV0gOiBbXTtcbn0sXG4gICAgc2VsZWN0b3IgPSBmdW5jdGlvbiBzZWxlY3Rvcih2YWx1ZSkge1xuICB2YWx1ZSA9IHRvQXJyYXkodmFsdWUpWzBdIHx8IF93YXJuKFwiSW52YWxpZCBzY29wZVwiKSB8fCB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIGVsID0gdmFsdWUuY3VycmVudCB8fCB2YWx1ZS5uYXRpdmVFbGVtZW50IHx8IHZhbHVlO1xuICAgIHJldHVybiB0b0FycmF5KHYsIGVsLnF1ZXJ5U2VsZWN0b3JBbGwgPyBlbCA6IGVsID09PSB2YWx1ZSA/IF93YXJuKFwiSW52YWxpZCBzY29wZVwiKSB8fCBfZG9jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgOiB2YWx1ZSk7XG4gIH07XG59LFxuICAgIHNodWZmbGUgPSBmdW5jdGlvbiBzaHVmZmxlKGEpIHtcbiAgcmV0dXJuIGEuc29ydChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIC41IC0gTWF0aC5yYW5kb20oKTtcbiAgfSk7XG59LFxuICAgIC8vIGFsdGVybmF0aXZlIHRoYXQncyBhIGJpdCBmYXN0ZXIgYW5kIG1vcmUgcmVsaWFibHkgZGl2ZXJzZSBidXQgYmlnZ2VyOiAgIGZvciAobGV0IGosIHYsIGkgPSBhLmxlbmd0aDsgaTsgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGkpLCB2ID0gYVstLWldLCBhW2ldID0gYVtqXSwgYVtqXSA9IHYpOyByZXR1cm4gYTtcbi8vZm9yIGRpc3RyaWJ1dGluZyB2YWx1ZXMgYWNyb3NzIGFuIGFycmF5LiBDYW4gYWNjZXB0IGEgbnVtYmVyLCBhIGZ1bmN0aW9uIG9yIChtb3N0IGNvbW1vbmx5KSBhIGZ1bmN0aW9uIHdoaWNoIGNhbiBjb250YWluIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczoge2Jhc2UsIGFtb3VudCwgZnJvbSwgZWFzZSwgZ3JpZCwgYXhpcywgbGVuZ3RoLCBlYWNofS4gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgZXhwZWN0cyB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnM6IGluZGV4LCB0YXJnZXQsIGFycmF5LiBSZWNvZ25pemVzIHRoZSBmb2xsb3dpbmdcbmRpc3RyaWJ1dGUgPSBmdW5jdGlvbiBkaXN0cmlidXRlKHYpIHtcbiAgaWYgKF9pc0Z1bmN0aW9uKHYpKSB7XG4gICAgcmV0dXJuIHY7XG4gIH1cblxuICB2YXIgdmFycyA9IF9pc09iamVjdCh2KSA/IHYgOiB7XG4gICAgZWFjaDogdlxuICB9LFxuICAgICAgLy9uOjEgaXMganVzdCB0byBpbmRpY2F0ZSB2IHdhcyBhIG51bWJlcjsgd2UgbGV2ZXJhZ2UgdGhhdCBsYXRlciB0byBzZXQgdiBhY2NvcmRpbmcgdG8gdGhlIGxlbmd0aCB3ZSBnZXQuIElmIGEgbnVtYmVyIGlzIHBhc3NlZCBpbiwgd2UgdHJlYXQgaXQgbGlrZSB0aGUgb2xkIHN0YWdnZXIgdmFsdWUgd2hlcmUgMC4xLCBmb3IgZXhhbXBsZSwgd291bGQgbWVhbiB0aGF0IHRoaW5ncyB3b3VsZCBiZSBkaXN0cmlidXRlZCB3aXRoIDAuMSBiZXR3ZWVuIGVhY2ggZWxlbWVudCBpbiB0aGUgYXJyYXkgcmF0aGVyIHRoYW4gYSB0b3RhbCBcImFtb3VudFwiIHRoYXQncyBjaHVua2VkIG91dCBhbW9uZyB0aGVtIGFsbC5cbiAgZWFzZSA9IF9wYXJzZUVhc2UodmFycy5lYXNlKSxcbiAgICAgIGZyb20gPSB2YXJzLmZyb20gfHwgMCxcbiAgICAgIGJhc2UgPSBwYXJzZUZsb2F0KHZhcnMuYmFzZSkgfHwgMCxcbiAgICAgIGNhY2hlID0ge30sXG4gICAgICBpc0RlY2ltYWwgPSBmcm9tID4gMCAmJiBmcm9tIDwgMSxcbiAgICAgIHJhdGlvcyA9IGlzTmFOKGZyb20pIHx8IGlzRGVjaW1hbCxcbiAgICAgIGF4aXMgPSB2YXJzLmF4aXMsXG4gICAgICByYXRpb1ggPSBmcm9tLFxuICAgICAgcmF0aW9ZID0gZnJvbTtcblxuICBpZiAoX2lzU3RyaW5nKGZyb20pKSB7XG4gICAgcmF0aW9YID0gcmF0aW9ZID0ge1xuICAgICAgY2VudGVyOiAuNSxcbiAgICAgIGVkZ2VzOiAuNSxcbiAgICAgIGVuZDogMVxuICAgIH1bZnJvbV0gfHwgMDtcbiAgfSBlbHNlIGlmICghaXNEZWNpbWFsICYmIHJhdGlvcykge1xuICAgIHJhdGlvWCA9IGZyb21bMF07XG4gICAgcmF0aW9ZID0gZnJvbVsxXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaSwgdGFyZ2V0LCBhKSB7XG4gICAgdmFyIGwgPSAoYSB8fCB2YXJzKS5sZW5ndGgsXG4gICAgICAgIGRpc3RhbmNlcyA9IGNhY2hlW2xdLFxuICAgICAgICBvcmlnaW5YLFxuICAgICAgICBvcmlnaW5ZLFxuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgICBkLFxuICAgICAgICBqLFxuICAgICAgICBtYXgsXG4gICAgICAgIG1pbixcbiAgICAgICAgd3JhcEF0O1xuXG4gICAgaWYgKCFkaXN0YW5jZXMpIHtcbiAgICAgIHdyYXBBdCA9IHZhcnMuZ3JpZCA9PT0gXCJhdXRvXCIgPyAwIDogKHZhcnMuZ3JpZCB8fCBbMSwgX2JpZ051bV0pWzFdO1xuXG4gICAgICBpZiAoIXdyYXBBdCkge1xuICAgICAgICBtYXggPSAtX2JpZ051bTtcblxuICAgICAgICB3aGlsZSAobWF4IDwgKG1heCA9IGFbd3JhcEF0KytdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpICYmIHdyYXBBdCA8IGwpIHt9XG5cbiAgICAgICAgd3JhcEF0LS07XG4gICAgICB9XG5cbiAgICAgIGRpc3RhbmNlcyA9IGNhY2hlW2xdID0gW107XG4gICAgICBvcmlnaW5YID0gcmF0aW9zID8gTWF0aC5taW4od3JhcEF0LCBsKSAqIHJhdGlvWCAtIC41IDogZnJvbSAlIHdyYXBBdDtcbiAgICAgIG9yaWdpblkgPSB3cmFwQXQgPT09IF9iaWdOdW0gPyAwIDogcmF0aW9zID8gbCAqIHJhdGlvWSAvIHdyYXBBdCAtIC41IDogZnJvbSAvIHdyYXBBdCB8IDA7XG4gICAgICBtYXggPSAwO1xuICAgICAgbWluID0gX2JpZ051bTtcblxuICAgICAgZm9yIChqID0gMDsgaiA8IGw7IGorKykge1xuICAgICAgICB4ID0gaiAlIHdyYXBBdCAtIG9yaWdpblg7XG4gICAgICAgIHkgPSBvcmlnaW5ZIC0gKGogLyB3cmFwQXQgfCAwKTtcbiAgICAgICAgZGlzdGFuY2VzW2pdID0gZCA9ICFheGlzID8gX3NxcnQoeCAqIHggKyB5ICogeSkgOiBNYXRoLmFicyhheGlzID09PSBcInlcIiA/IHkgOiB4KTtcbiAgICAgICAgZCA+IG1heCAmJiAobWF4ID0gZCk7XG4gICAgICAgIGQgPCBtaW4gJiYgKG1pbiA9IGQpO1xuICAgICAgfVxuXG4gICAgICBmcm9tID09PSBcInJhbmRvbVwiICYmIHNodWZmbGUoZGlzdGFuY2VzKTtcbiAgICAgIGRpc3RhbmNlcy5tYXggPSBtYXggLSBtaW47XG4gICAgICBkaXN0YW5jZXMubWluID0gbWluO1xuICAgICAgZGlzdGFuY2VzLnYgPSBsID0gKHBhcnNlRmxvYXQodmFycy5hbW91bnQpIHx8IHBhcnNlRmxvYXQodmFycy5lYWNoKSAqICh3cmFwQXQgPiBsID8gbCAtIDEgOiAhYXhpcyA/IE1hdGgubWF4KHdyYXBBdCwgbCAvIHdyYXBBdCkgOiBheGlzID09PSBcInlcIiA/IGwgLyB3cmFwQXQgOiB3cmFwQXQpIHx8IDApICogKGZyb20gPT09IFwiZWRnZXNcIiA/IC0xIDogMSk7XG4gICAgICBkaXN0YW5jZXMuYiA9IGwgPCAwID8gYmFzZSAtIGwgOiBiYXNlO1xuICAgICAgZGlzdGFuY2VzLnUgPSBnZXRVbml0KHZhcnMuYW1vdW50IHx8IHZhcnMuZWFjaCkgfHwgMDsgLy91bml0XG5cbiAgICAgIGVhc2UgPSBlYXNlICYmIGwgPCAwID8gX2ludmVydEVhc2UoZWFzZSkgOiBlYXNlO1xuICAgIH1cblxuICAgIGwgPSAoZGlzdGFuY2VzW2ldIC0gZGlzdGFuY2VzLm1pbikgLyBkaXN0YW5jZXMubWF4IHx8IDA7XG4gICAgcmV0dXJuIF9yb3VuZFByZWNpc2UoZGlzdGFuY2VzLmIgKyAoZWFzZSA/IGVhc2UobCkgOiBsKSAqIGRpc3RhbmNlcy52KSArIGRpc3RhbmNlcy51OyAvL3JvdW5kIGluIG9yZGVyIHRvIHdvcmsgYXJvdW5kIGZsb2F0aW5nIHBvaW50IGVycm9yc1xuICB9O1xufSxcbiAgICBfcm91bmRNb2RpZmllciA9IGZ1bmN0aW9uIF9yb3VuZE1vZGlmaWVyKHYpIHtcbiAgLy9wYXNzIGluIDAuMSBnZXQgYSBmdW5jdGlvbiB0aGF0J2xsIHJvdW5kIHRvIHRoZSBuZWFyZXN0IHRlbnRoLCBvciA1IHRvIHJvdW5kIHRvIHRoZSBjbG9zZXN0IDUsIG9yIDAuMDAxIHRvIHRoZSBjbG9zZXN0IDEwMDB0aCwgZXRjLlxuICB2YXIgcCA9IE1hdGgucG93KDEwLCAoKHYgKyBcIlwiKS5zcGxpdChcIi5cIilbMV0gfHwgXCJcIikubGVuZ3RoKTsgLy90byBhdm9pZCBmbG9hdGluZyBwb2ludCBtYXRoIGVycm9ycyAobGlrZSAyNCAqIDAuMSA9PSAyLjQwMDAwMDAwMDAwMDAwMDQpLCB3ZSBjaG9wIG9mZiBhdCBhIHNwZWNpZmljIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcyAobXVjaCBmYXN0ZXIgdGhhbiB0b0ZpeGVkKCkpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChyYXcpIHtcbiAgICB2YXIgbiA9IF9yb3VuZFByZWNpc2UoTWF0aC5yb3VuZChwYXJzZUZsb2F0KHJhdykgLyB2KSAqIHYgKiBwKTtcblxuICAgIHJldHVybiAobiAtIG4gJSAxKSAvIHAgKyAoX2lzTnVtYmVyKHJhdykgPyAwIDogZ2V0VW5pdChyYXcpKTsgLy8gbiAtIG4gJSAxIHJlcGxhY2VzIE1hdGguZmxvb3IoKSBpbiBvcmRlciB0byBoYW5kbGUgbmVnYXRpdmUgdmFsdWVzIHByb3Blcmx5LiBGb3IgZXhhbXBsZSwgTWF0aC5mbG9vcigtMTUwLjAwMDAwMDAwMDAwMDAzKSBpcyAxNTEhXG4gIH07XG59LFxuICAgIHNuYXAgPSBmdW5jdGlvbiBzbmFwKHNuYXBUbywgdmFsdWUpIHtcbiAgdmFyIGlzQXJyYXkgPSBfaXNBcnJheShzbmFwVG8pLFxuICAgICAgcmFkaXVzLFxuICAgICAgaXMyRDtcblxuICBpZiAoIWlzQXJyYXkgJiYgX2lzT2JqZWN0KHNuYXBUbykpIHtcbiAgICByYWRpdXMgPSBpc0FycmF5ID0gc25hcFRvLnJhZGl1cyB8fCBfYmlnTnVtO1xuXG4gICAgaWYgKHNuYXBUby52YWx1ZXMpIHtcbiAgICAgIHNuYXBUbyA9IHRvQXJyYXkoc25hcFRvLnZhbHVlcyk7XG5cbiAgICAgIGlmIChpczJEID0gIV9pc051bWJlcihzbmFwVG9bMF0pKSB7XG4gICAgICAgIHJhZGl1cyAqPSByYWRpdXM7IC8vcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uIHNvIHdlIGRvbid0IGhhdmUgdG8gTWF0aC5zcXJ0KCkgaW4gdGhlIGxvb3AuXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNuYXBUbyA9IF9yb3VuZE1vZGlmaWVyKHNuYXBUby5pbmNyZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsICFpc0FycmF5ID8gX3JvdW5kTW9kaWZpZXIoc25hcFRvKSA6IF9pc0Z1bmN0aW9uKHNuYXBUbykgPyBmdW5jdGlvbiAocmF3KSB7XG4gICAgaXMyRCA9IHNuYXBUbyhyYXcpO1xuICAgIHJldHVybiBNYXRoLmFicyhpczJEIC0gcmF3KSA8PSByYWRpdXMgPyBpczJEIDogcmF3O1xuICB9IDogZnVuY3Rpb24gKHJhdykge1xuICAgIHZhciB4ID0gcGFyc2VGbG9hdChpczJEID8gcmF3LnggOiByYXcpLFxuICAgICAgICB5ID0gcGFyc2VGbG9hdChpczJEID8gcmF3LnkgOiAwKSxcbiAgICAgICAgbWluID0gX2JpZ051bSxcbiAgICAgICAgY2xvc2VzdCA9IDAsXG4gICAgICAgIGkgPSBzbmFwVG8ubGVuZ3RoLFxuICAgICAgICBkeCxcbiAgICAgICAgZHk7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBpZiAoaXMyRCkge1xuICAgICAgICBkeCA9IHNuYXBUb1tpXS54IC0geDtcbiAgICAgICAgZHkgPSBzbmFwVG9baV0ueSAtIHk7XG4gICAgICAgIGR4ID0gZHggKiBkeCArIGR5ICogZHk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkeCA9IE1hdGguYWJzKHNuYXBUb1tpXSAtIHgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZHggPCBtaW4pIHtcbiAgICAgICAgbWluID0gZHg7XG4gICAgICAgIGNsb3Nlc3QgPSBpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNsb3Nlc3QgPSAhcmFkaXVzIHx8IG1pbiA8PSByYWRpdXMgPyBzbmFwVG9bY2xvc2VzdF0gOiByYXc7XG4gICAgcmV0dXJuIGlzMkQgfHwgY2xvc2VzdCA9PT0gcmF3IHx8IF9pc051bWJlcihyYXcpID8gY2xvc2VzdCA6IGNsb3Nlc3QgKyBnZXRVbml0KHJhdyk7XG4gIH0pO1xufSxcbiAgICByYW5kb20gPSBmdW5jdGlvbiByYW5kb20obWluLCBtYXgsIHJvdW5kaW5nSW5jcmVtZW50LCByZXR1cm5GdW5jdGlvbikge1xuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKF9pc0FycmF5KG1pbikgPyAhbWF4IDogcm91bmRpbmdJbmNyZW1lbnQgPT09IHRydWUgPyAhIShyb3VuZGluZ0luY3JlbWVudCA9IDApIDogIXJldHVybkZ1bmN0aW9uLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc0FycmF5KG1pbikgPyBtaW5bfn4oTWF0aC5yYW5kb20oKSAqIG1pbi5sZW5ndGgpXSA6IChyb3VuZGluZ0luY3JlbWVudCA9IHJvdW5kaW5nSW5jcmVtZW50IHx8IDFlLTUpICYmIChyZXR1cm5GdW5jdGlvbiA9IHJvdW5kaW5nSW5jcmVtZW50IDwgMSA/IE1hdGgucG93KDEwLCAocm91bmRpbmdJbmNyZW1lbnQgKyBcIlwiKS5sZW5ndGggLSAyKSA6IDEpICYmIE1hdGguZmxvb3IoTWF0aC5yb3VuZCgobWluIC0gcm91bmRpbmdJbmNyZW1lbnQgLyAyICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyByb3VuZGluZ0luY3JlbWVudCAqIC45OSkpIC8gcm91bmRpbmdJbmNyZW1lbnQpICogcm91bmRpbmdJbmNyZW1lbnQgKiByZXR1cm5GdW5jdGlvbikgLyByZXR1cm5GdW5jdGlvbjtcbiAgfSk7XG59LFxuICAgIHBpcGUgPSBmdW5jdGlvbiBwaXBlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3Rpb25zID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZ1bmN0aW9uc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25zLnJlZHVjZShmdW5jdGlvbiAodiwgZikge1xuICAgICAgcmV0dXJuIGYodik7XG4gICAgfSwgdmFsdWUpO1xuICB9O1xufSxcbiAgICB1bml0aXplID0gZnVuY3Rpb24gdW5pdGl6ZShmdW5jLCB1bml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyhwYXJzZUZsb2F0KHZhbHVlKSkgKyAodW5pdCB8fCBnZXRVbml0KHZhbHVlKSk7XG4gIH07XG59LFxuICAgIG5vcm1hbGl6ZSA9IGZ1bmN0aW9uIG5vcm1hbGl6ZShtaW4sIG1heCwgdmFsdWUpIHtcbiAgcmV0dXJuIG1hcFJhbmdlKG1pbiwgbWF4LCAwLCAxLCB2YWx1ZSk7XG59LFxuICAgIF93cmFwQXJyYXkgPSBmdW5jdGlvbiBfd3JhcEFycmF5KGEsIHdyYXBwZXIsIHZhbHVlKSB7XG4gIHJldHVybiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsIGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHJldHVybiBhW35+d3JhcHBlcihpbmRleCldO1xuICB9KTtcbn0sXG4gICAgd3JhcCA9IGZ1bmN0aW9uIHdyYXAobWluLCBtYXgsIHZhbHVlKSB7XG4gIC8vIE5PVEU6IHdyYXAoKSBDQU5OT1QgYmUgYW4gYXJyb3cgZnVuY3Rpb24hIEEgdmVyeSBvZGQgY29tcGlsaW5nIGJ1ZyBjYXVzZXMgcHJvYmxlbXMgKHVucmVsYXRlZCB0byBHU0FQKS5cbiAgdmFyIHJhbmdlID0gbWF4IC0gbWluO1xuICByZXR1cm4gX2lzQXJyYXkobWluKSA/IF93cmFwQXJyYXkobWluLCB3cmFwKDAsIG1pbi5sZW5ndGgpLCBtYXgpIDogX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gKHJhbmdlICsgKHZhbHVlIC0gbWluKSAlIHJhbmdlKSAlIHJhbmdlICsgbWluO1xuICB9KTtcbn0sXG4gICAgd3JhcFlveW8gPSBmdW5jdGlvbiB3cmFwWW95byhtaW4sIG1heCwgdmFsdWUpIHtcbiAgdmFyIHJhbmdlID0gbWF4IC0gbWluLFxuICAgICAgdG90YWwgPSByYW5nZSAqIDI7XG4gIHJldHVybiBfaXNBcnJheShtaW4pID8gX3dyYXBBcnJheShtaW4sIHdyYXBZb3lvKDAsIG1pbi5sZW5ndGggLSAxKSwgbWF4KSA6IF9jb25kaXRpb25hbFJldHVybih2YWx1ZSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFsdWUgPSAodG90YWwgKyAodmFsdWUgLSBtaW4pICUgdG90YWwpICUgdG90YWwgfHwgMDtcbiAgICByZXR1cm4gbWluICsgKHZhbHVlID4gcmFuZ2UgPyB0b3RhbCAtIHZhbHVlIDogdmFsdWUpO1xuICB9KTtcbn0sXG4gICAgX3JlcGxhY2VSYW5kb20gPSBmdW5jdGlvbiBfcmVwbGFjZVJhbmRvbSh2YWx1ZSkge1xuICAvL3JlcGxhY2VzIGFsbCBvY2N1cnJlbmNlcyBvZiByYW5kb20oLi4uKSBpbiBhIHN0cmluZyB3aXRoIHRoZSBjYWxjdWxhdGVkIHJhbmRvbSB2YWx1ZS4gY2FuIGJlIGEgcmFuZ2UgbGlrZSByYW5kb20oLTEwMCwgMTAwLCA1KSBvciBhbiBhcnJheSBsaWtlIHJhbmRvbShbMCwgMTAwLCA1MDBdKVxuICB2YXIgcHJldiA9IDAsXG4gICAgICBzID0gXCJcIixcbiAgICAgIGksXG4gICAgICBudW1zLFxuICAgICAgZW5kLFxuICAgICAgaXNBcnJheTtcblxuICB3aGlsZSAofihpID0gdmFsdWUuaW5kZXhPZihcInJhbmRvbShcIiwgcHJldikpKSB7XG4gICAgZW5kID0gdmFsdWUuaW5kZXhPZihcIilcIiwgaSk7XG4gICAgaXNBcnJheSA9IHZhbHVlLmNoYXJBdChpICsgNykgPT09IFwiW1wiO1xuICAgIG51bXMgPSB2YWx1ZS5zdWJzdHIoaSArIDcsIGVuZCAtIGkgLSA3KS5tYXRjaChpc0FycmF5ID8gX2RlbGltaXRlZFZhbHVlRXhwIDogX3N0cmljdE51bUV4cCk7XG4gICAgcyArPSB2YWx1ZS5zdWJzdHIocHJldiwgaSAtIHByZXYpICsgcmFuZG9tKGlzQXJyYXkgPyBudW1zIDogK251bXNbMF0sIGlzQXJyYXkgPyAwIDogK251bXNbMV0sICtudW1zWzJdIHx8IDFlLTUpO1xuICAgIHByZXYgPSBlbmQgKyAxO1xuICB9XG5cbiAgcmV0dXJuIHMgKyB2YWx1ZS5zdWJzdHIocHJldiwgdmFsdWUubGVuZ3RoIC0gcHJldik7XG59LFxuICAgIG1hcFJhbmdlID0gZnVuY3Rpb24gbWFwUmFuZ2UoaW5NaW4sIGluTWF4LCBvdXRNaW4sIG91dE1heCwgdmFsdWUpIHtcbiAgdmFyIGluUmFuZ2UgPSBpbk1heCAtIGluTWluLFxuICAgICAgb3V0UmFuZ2UgPSBvdXRNYXggLSBvdXRNaW47XG4gIHJldHVybiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBvdXRNaW4gKyAoKHZhbHVlIC0gaW5NaW4pIC8gaW5SYW5nZSAqIG91dFJhbmdlIHx8IDApO1xuICB9KTtcbn0sXG4gICAgaW50ZXJwb2xhdGUgPSBmdW5jdGlvbiBpbnRlcnBvbGF0ZShzdGFydCwgZW5kLCBwcm9ncmVzcywgbXV0YXRlKSB7XG4gIHZhciBmdW5jID0gaXNOYU4oc3RhcnQgKyBlbmQpID8gMCA6IGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuICgxIC0gcCkgKiBzdGFydCArIHAgKiBlbmQ7XG4gIH07XG5cbiAgaWYgKCFmdW5jKSB7XG4gICAgdmFyIGlzU3RyaW5nID0gX2lzU3RyaW5nKHN0YXJ0KSxcbiAgICAgICAgbWFzdGVyID0ge30sXG4gICAgICAgIHAsXG4gICAgICAgIGksXG4gICAgICAgIGludGVycG9sYXRvcnMsXG4gICAgICAgIGwsXG4gICAgICAgIGlsO1xuXG4gICAgcHJvZ3Jlc3MgPT09IHRydWUgJiYgKG11dGF0ZSA9IDEpICYmIChwcm9ncmVzcyA9IG51bGwpO1xuXG4gICAgaWYgKGlzU3RyaW5nKSB7XG4gICAgICBzdGFydCA9IHtcbiAgICAgICAgcDogc3RhcnRcbiAgICAgIH07XG4gICAgICBlbmQgPSB7XG4gICAgICAgIHA6IGVuZFxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKF9pc0FycmF5KHN0YXJ0KSAmJiAhX2lzQXJyYXkoZW5kKSkge1xuICAgICAgaW50ZXJwb2xhdG9ycyA9IFtdO1xuICAgICAgbCA9IHN0YXJ0Lmxlbmd0aDtcbiAgICAgIGlsID0gbCAtIDI7XG5cbiAgICAgIGZvciAoaSA9IDE7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaW50ZXJwb2xhdG9ycy5wdXNoKGludGVycG9sYXRlKHN0YXJ0W2kgLSAxXSwgc3RhcnRbaV0pKTsgLy9idWlsZCB0aGUgaW50ZXJwb2xhdG9ycyB1cCBmcm9udCBhcyBhIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbiBzbyB0aGF0IHdoZW4gdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCBtYW55IHRpbWVzLCBpdCBjYW4ganVzdCByZXVzZSB0aGVtLlxuICAgICAgfVxuXG4gICAgICBsLS07XG5cbiAgICAgIGZ1bmMgPSBmdW5jdGlvbiBmdW5jKHApIHtcbiAgICAgICAgcCAqPSBsO1xuICAgICAgICB2YXIgaSA9IE1hdGgubWluKGlsLCB+fnApO1xuICAgICAgICByZXR1cm4gaW50ZXJwb2xhdG9yc1tpXShwIC0gaSk7XG4gICAgICB9O1xuXG4gICAgICBwcm9ncmVzcyA9IGVuZDtcbiAgICB9IGVsc2UgaWYgKCFtdXRhdGUpIHtcbiAgICAgIHN0YXJ0ID0gX21lcmdlKF9pc0FycmF5KHN0YXJ0KSA/IFtdIDoge30sIHN0YXJ0KTtcbiAgICB9XG5cbiAgICBpZiAoIWludGVycG9sYXRvcnMpIHtcbiAgICAgIGZvciAocCBpbiBlbmQpIHtcbiAgICAgICAgX2FkZFByb3BUd2Vlbi5jYWxsKG1hc3Rlciwgc3RhcnQsIHAsIFwiZ2V0XCIsIGVuZFtwXSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmMgPSBmdW5jdGlvbiBmdW5jKHApIHtcbiAgICAgICAgcmV0dXJuIF9yZW5kZXJQcm9wVHdlZW5zKHAsIG1hc3RlcikgfHwgKGlzU3RyaW5nID8gc3RhcnQucCA6IHN0YXJ0KTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9jb25kaXRpb25hbFJldHVybihwcm9ncmVzcywgZnVuYyk7XG59LFxuICAgIF9nZXRMYWJlbEluRGlyZWN0aW9uID0gZnVuY3Rpb24gX2dldExhYmVsSW5EaXJlY3Rpb24odGltZWxpbmUsIGZyb21UaW1lLCBiYWNrd2FyZCkge1xuICAvL3VzZWQgZm9yIG5leHRMYWJlbCgpIGFuZCBwcmV2aW91c0xhYmVsKClcbiAgdmFyIGxhYmVscyA9IHRpbWVsaW5lLmxhYmVscyxcbiAgICAgIG1pbiA9IF9iaWdOdW0sXG4gICAgICBwLFxuICAgICAgZGlzdGFuY2UsXG4gICAgICBsYWJlbDtcblxuICBmb3IgKHAgaW4gbGFiZWxzKSB7XG4gICAgZGlzdGFuY2UgPSBsYWJlbHNbcF0gLSBmcm9tVGltZTtcblxuICAgIGlmIChkaXN0YW5jZSA8IDAgPT09ICEhYmFja3dhcmQgJiYgZGlzdGFuY2UgJiYgbWluID4gKGRpc3RhbmNlID0gTWF0aC5hYnMoZGlzdGFuY2UpKSkge1xuICAgICAgbGFiZWwgPSBwO1xuICAgICAgbWluID0gZGlzdGFuY2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxhYmVsO1xufSxcbiAgICBfY2FsbGJhY2sgPSBmdW5jdGlvbiBfY2FsbGJhY2soYW5pbWF0aW9uLCB0eXBlLCBleGVjdXRlTGF6eUZpcnN0KSB7XG4gIHZhciB2ID0gYW5pbWF0aW9uLnZhcnMsXG4gICAgICBjYWxsYmFjayA9IHZbdHlwZV0sXG4gICAgICBwcmV2Q29udGV4dCA9IF9jb250ZXh0LFxuICAgICAgY29udGV4dCA9IGFuaW1hdGlvbi5fY3R4LFxuICAgICAgcGFyYW1zLFxuICAgICAgc2NvcGUsXG4gICAgICByZXN1bHQ7XG5cbiAgaWYgKCFjYWxsYmFjaykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHBhcmFtcyA9IHZbdHlwZSArIFwiUGFyYW1zXCJdO1xuICBzY29wZSA9IHYuY2FsbGJhY2tTY29wZSB8fCBhbmltYXRpb247XG4gIGV4ZWN1dGVMYXp5Rmlyc3QgJiYgX2xhenlUd2VlbnMubGVuZ3RoICYmIF9sYXp5UmVuZGVyKCk7IC8vaW4gY2FzZSByZW5kZXJpbmcgY2F1c2VkIGFueSB0d2VlbnMgdG8gbGF6eS1pbml0LCB3ZSBzaG91bGQgcmVuZGVyIHRoZW0gYmVjYXVzZSB0eXBpY2FsbHkgd2hlbiBhIHRpbWVsaW5lIGZpbmlzaGVzLCB1c2VycyBleHBlY3QgdGhpbmdzIHRvIGhhdmUgcmVuZGVyZWQgZnVsbHkuIEltYWdpbmUgYW4gb25VcGRhdGUgb24gYSB0aW1lbGluZSB0aGF0IHJlcG9ydHMvY2hlY2tzIHR3ZWVuZWQgdmFsdWVzLlxuXG4gIGNvbnRleHQgJiYgKF9jb250ZXh0ID0gY29udGV4dCk7XG4gIHJlc3VsdCA9IHBhcmFtcyA/IGNhbGxiYWNrLmFwcGx5KHNjb3BlLCBwYXJhbXMpIDogY2FsbGJhY2suY2FsbChzY29wZSk7XG4gIF9jb250ZXh0ID0gcHJldkNvbnRleHQ7XG4gIHJldHVybiByZXN1bHQ7XG59LFxuICAgIF9pbnRlcnJ1cHQgPSBmdW5jdGlvbiBfaW50ZXJydXB0KGFuaW1hdGlvbikge1xuICBfcmVtb3ZlRnJvbVBhcmVudChhbmltYXRpb24pO1xuXG4gIGFuaW1hdGlvbi5zY3JvbGxUcmlnZ2VyICYmIGFuaW1hdGlvbi5zY3JvbGxUcmlnZ2VyLmtpbGwoISFfcmV2ZXJ0aW5nKTtcbiAgYW5pbWF0aW9uLnByb2dyZXNzKCkgPCAxICYmIF9jYWxsYmFjayhhbmltYXRpb24sIFwib25JbnRlcnJ1cHRcIik7XG4gIHJldHVybiBhbmltYXRpb247XG59LFxuICAgIF9xdWlja1R3ZWVuLFxuICAgIF9yZWdpc3RlclBsdWdpblF1ZXVlID0gW10sXG4gICAgX2NyZWF0ZVBsdWdpbiA9IGZ1bmN0aW9uIF9jcmVhdGVQbHVnaW4oY29uZmlnKSB7XG4gIGlmIChfd2luZG93RXhpc3RzKCkgJiYgY29uZmlnKSB7XG4gICAgLy8gZWRnZSBjYXNlOiBzb21lIGJ1aWxkIHRvb2xzIG1heSBwYXNzIGluIGEgbnVsbC91bmRlZmluZWQgdmFsdWVcbiAgICBjb25maWcgPSAhY29uZmlnLm5hbWUgJiYgY29uZmlnW1wiZGVmYXVsdFwiXSB8fCBjb25maWc7IC8vVU1EIHBhY2thZ2luZyB3cmFwcyB0aGluZ3Mgb2RkbHksIHNvIGZvciBleGFtcGxlIE1vdGlvblBhdGhIZWxwZXIgYmVjb21lcyB7TW90aW9uUGF0aEhlbHBlcjpNb3Rpb25QYXRoSGVscGVyLCBkZWZhdWx0Ok1vdGlvblBhdGhIZWxwZXJ9LlxuXG4gICAgdmFyIG5hbWUgPSBjb25maWcubmFtZSxcbiAgICAgICAgaXNGdW5jID0gX2lzRnVuY3Rpb24oY29uZmlnKSxcbiAgICAgICAgUGx1Z2luID0gbmFtZSAmJiAhaXNGdW5jICYmIGNvbmZpZy5pbml0ID8gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5fcHJvcHMgPSBbXTtcbiAgICB9IDogY29uZmlnLFxuICAgICAgICAvL2luIGNhc2Ugc29tZW9uZSBwYXNzZXMgaW4gYW4gb2JqZWN0IHRoYXQncyBub3QgYSBwbHVnaW4sIGxpa2UgQ3VzdG9tRWFzZVxuICAgIGluc3RhbmNlRGVmYXVsdHMgPSB7XG4gICAgICBpbml0OiBfZW1wdHlGdW5jLFxuICAgICAgcmVuZGVyOiBfcmVuZGVyUHJvcFR3ZWVucyxcbiAgICAgIGFkZDogX2FkZFByb3BUd2VlbixcbiAgICAgIGtpbGw6IF9raWxsUHJvcFR3ZWVuc09mLFxuICAgICAgbW9kaWZpZXI6IF9hZGRQbHVnaW5Nb2RpZmllcixcbiAgICAgIHJhd1ZhcnM6IDBcbiAgICB9LFxuICAgICAgICBzdGF0aWNzID0ge1xuICAgICAgdGFyZ2V0VGVzdDogMCxcbiAgICAgIGdldDogMCxcbiAgICAgIGdldFNldHRlcjogX2dldFNldHRlcixcbiAgICAgIGFsaWFzZXM6IHt9LFxuICAgICAgcmVnaXN0ZXI6IDBcbiAgICB9O1xuXG4gICAgX3dha2UoKTtcblxuICAgIGlmIChjb25maWcgIT09IFBsdWdpbikge1xuICAgICAgaWYgKF9wbHVnaW5zW25hbWVdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3NldERlZmF1bHRzKFBsdWdpbiwgX3NldERlZmF1bHRzKF9jb3B5RXhjbHVkaW5nKGNvbmZpZywgaW5zdGFuY2VEZWZhdWx0cyksIHN0YXRpY3MpKTsgLy9zdGF0aWMgbWV0aG9kc1xuXG5cbiAgICAgIF9tZXJnZShQbHVnaW4ucHJvdG90eXBlLCBfbWVyZ2UoaW5zdGFuY2VEZWZhdWx0cywgX2NvcHlFeGNsdWRpbmcoY29uZmlnLCBzdGF0aWNzKSkpOyAvL2luc3RhbmNlIG1ldGhvZHNcblxuXG4gICAgICBfcGx1Z2luc1tQbHVnaW4ucHJvcCA9IG5hbWVdID0gUGx1Z2luO1xuXG4gICAgICBpZiAoY29uZmlnLnRhcmdldFRlc3QpIHtcbiAgICAgICAgX2hhcm5lc3NQbHVnaW5zLnB1c2goUGx1Z2luKTtcblxuICAgICAgICBfcmVzZXJ2ZWRQcm9wc1tuYW1lXSA9IDE7XG4gICAgICB9XG5cbiAgICAgIG5hbWUgPSAobmFtZSA9PT0gXCJjc3NcIiA/IFwiQ1NTXCIgOiBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zdWJzdHIoMSkpICsgXCJQbHVnaW5cIjsgLy9mb3IgdGhlIGdsb2JhbCBuYW1lLiBcIm1vdGlvblBhdGhcIiBzaG91bGQgYmVjb21lIE1vdGlvblBhdGhQbHVnaW5cbiAgICB9XG5cbiAgICBfYWRkR2xvYmFsKG5hbWUsIFBsdWdpbik7XG5cbiAgICBjb25maWcucmVnaXN0ZXIgJiYgY29uZmlnLnJlZ2lzdGVyKGdzYXAsIFBsdWdpbiwgUHJvcFR3ZWVuKTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgJiYgX3JlZ2lzdGVyUGx1Z2luUXVldWUucHVzaChjb25maWcpO1xuICB9XG59LFxuXG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENPTE9SU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXzI1NSA9IDI1NSxcbiAgICBfY29sb3JMb29rdXAgPSB7XG4gIGFxdWE6IFswLCBfMjU1LCBfMjU1XSxcbiAgbGltZTogWzAsIF8yNTUsIDBdLFxuICBzaWx2ZXI6IFsxOTIsIDE5MiwgMTkyXSxcbiAgYmxhY2s6IFswLCAwLCAwXSxcbiAgbWFyb29uOiBbMTI4LCAwLCAwXSxcbiAgdGVhbDogWzAsIDEyOCwgMTI4XSxcbiAgYmx1ZTogWzAsIDAsIF8yNTVdLFxuICBuYXZ5OiBbMCwgMCwgMTI4XSxcbiAgd2hpdGU6IFtfMjU1LCBfMjU1LCBfMjU1XSxcbiAgb2xpdmU6IFsxMjgsIDEyOCwgMF0sXG4gIHllbGxvdzogW18yNTUsIF8yNTUsIDBdLFxuICBvcmFuZ2U6IFtfMjU1LCAxNjUsIDBdLFxuICBncmF5OiBbMTI4LCAxMjgsIDEyOF0sXG4gIHB1cnBsZTogWzEyOCwgMCwgMTI4XSxcbiAgZ3JlZW46IFswLCAxMjgsIDBdLFxuICByZWQ6IFtfMjU1LCAwLCAwXSxcbiAgcGluazogW18yNTUsIDE5MiwgMjAzXSxcbiAgY3lhbjogWzAsIF8yNTUsIF8yNTVdLFxuICB0cmFuc3BhcmVudDogW18yNTUsIF8yNTUsIF8yNTUsIDBdXG59LFxuICAgIC8vIHBvc3NpYmxlIGZ1dHVyZSBpZGVhIHRvIHJlcGxhY2UgdGhlIGhhcmQtY29kZWQgY29sb3IgbmFtZSB2YWx1ZXMgLSBwdXQgdGhpcyBpbiB0aGUgdGlja2VyLndha2UoKSB3aGVyZSB3ZSBzZXQgdGhlIF9kb2M6XG4vLyBsZXQgY3R4ID0gX2RvYy5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLmdldENvbnRleHQoXCIyZFwiKTtcbi8vIF9mb3JFYWNoTmFtZShcImFxdWEsbGltZSxzaWx2ZXIsYmxhY2ssbWFyb29uLHRlYWwsYmx1ZSxuYXZ5LHdoaXRlLG9saXZlLHllbGxvdyxvcmFuZ2UsZ3JheSxwdXJwbGUsZ3JlZW4scmVkLHBpbmssY3lhblwiLCBjb2xvciA9PiB7Y3R4LmZpbGxTdHlsZSA9IGNvbG9yOyBfY29sb3JMb29rdXBbY29sb3JdID0gc3BsaXRDb2xvcihjdHguZmlsbFN0eWxlKX0pO1xuX2h1ZSA9IGZ1bmN0aW9uIF9odWUoaCwgbTEsIG0yKSB7XG4gIGggKz0gaCA8IDAgPyAxIDogaCA+IDEgPyAtMSA6IDA7XG4gIHJldHVybiAoaCAqIDYgPCAxID8gbTEgKyAobTIgLSBtMSkgKiBoICogNiA6IGggPCAuNSA/IG0yIDogaCAqIDMgPCAyID8gbTEgKyAobTIgLSBtMSkgKiAoMiAvIDMgLSBoKSAqIDYgOiBtMSkgKiBfMjU1ICsgLjUgfCAwO1xufSxcbiAgICBzcGxpdENvbG9yID0gZnVuY3Rpb24gc3BsaXRDb2xvcih2LCB0b0hTTCwgZm9yY2VBbHBoYSkge1xuICB2YXIgYSA9ICF2ID8gX2NvbG9yTG9va3VwLmJsYWNrIDogX2lzTnVtYmVyKHYpID8gW3YgPj4gMTYsIHYgPj4gOCAmIF8yNTUsIHYgJiBfMjU1XSA6IDAsXG4gICAgICByLFxuICAgICAgZyxcbiAgICAgIGIsXG4gICAgICBoLFxuICAgICAgcyxcbiAgICAgIGwsXG4gICAgICBtYXgsXG4gICAgICBtaW4sXG4gICAgICBkLFxuICAgICAgd2FzSFNMO1xuXG4gIGlmICghYSkge1xuICAgIGlmICh2LnN1YnN0cigtMSkgPT09IFwiLFwiKSB7XG4gICAgICAvL3NvbWV0aW1lcyBhIHRyYWlsaW5nIGNvbW1hIGlzIGluY2x1ZGVkIGFuZCB3ZSBzaG91bGQgY2hvcCBpdCBvZmYgKHR5cGljYWxseSBmcm9tIGEgY29tbWEtZGVsaW1pdGVkIGxpc3Qgb2YgdmFsdWVzIGxpa2UgYSB0ZXh0U2hhZG93OlwiMnB4IDJweCAycHggYmx1ZSwgNXB4IDVweCA1cHggcmdiKDI1NSwwLDApXCIgLSBpbiB0aGlzIGV4YW1wbGUgXCJibHVlLFwiIGhhcyBhIHRyYWlsaW5nIGNvbW1hLiBXZSBjb3VsZCBzdHJpcCBpdCBvdXQgaW5zaWRlIHBhcnNlQ29tcGxleCgpIGJ1dCB3ZSdkIG5lZWQgdG8gZG8gaXQgdG8gdGhlIGJlZ2lubmluZyBhbmQgZW5kaW5nIHZhbHVlcyBwbHVzIGl0IHdvdWxkbid0IHByb3ZpZGUgcHJvdGVjdGlvbiBmcm9tIG90aGVyIHBvdGVudGlhbCBzY2VuYXJpb3MgbGlrZSBpZiB0aGUgdXNlciBwYXNzZXMgaW4gYSBzaW1pbGFyIHZhbHVlLlxuICAgICAgdiA9IHYuc3Vic3RyKDAsIHYubGVuZ3RoIC0gMSk7XG4gICAgfVxuXG4gICAgaWYgKF9jb2xvckxvb2t1cFt2XSkge1xuICAgICAgYSA9IF9jb2xvckxvb2t1cFt2XTtcbiAgICB9IGVsc2UgaWYgKHYuY2hhckF0KDApID09PSBcIiNcIikge1xuICAgICAgaWYgKHYubGVuZ3RoIDwgNikge1xuICAgICAgICAvL2ZvciBzaG9ydGhhbmQgbGlrZSAjOUYwIG9yICM5RjBGIChjb3VsZCBoYXZlIGFscGhhKVxuICAgICAgICByID0gdi5jaGFyQXQoMSk7XG4gICAgICAgIGcgPSB2LmNoYXJBdCgyKTtcbiAgICAgICAgYiA9IHYuY2hhckF0KDMpO1xuICAgICAgICB2ID0gXCIjXCIgKyByICsgciArIGcgKyBnICsgYiArIGIgKyAodi5sZW5ndGggPT09IDUgPyB2LmNoYXJBdCg0KSArIHYuY2hhckF0KDQpIDogXCJcIik7XG4gICAgICB9XG5cbiAgICAgIGlmICh2Lmxlbmd0aCA9PT0gOSkge1xuICAgICAgICAvLyBoZXggd2l0aCBhbHBoYSwgbGlrZSAjZmQ1ZTUzZmZcbiAgICAgICAgYSA9IHBhcnNlSW50KHYuc3Vic3RyKDEsIDYpLCAxNik7XG4gICAgICAgIHJldHVybiBbYSA+PiAxNiwgYSA+PiA4ICYgXzI1NSwgYSAmIF8yNTUsIHBhcnNlSW50KHYuc3Vic3RyKDcpLCAxNikgLyAyNTVdO1xuICAgICAgfVxuXG4gICAgICB2ID0gcGFyc2VJbnQodi5zdWJzdHIoMSksIDE2KTtcbiAgICAgIGEgPSBbdiA+PiAxNiwgdiA+PiA4ICYgXzI1NSwgdiAmIF8yNTVdO1xuICAgIH0gZWxzZSBpZiAodi5zdWJzdHIoMCwgMykgPT09IFwiaHNsXCIpIHtcbiAgICAgIGEgPSB3YXNIU0wgPSB2Lm1hdGNoKF9zdHJpY3ROdW1FeHApO1xuXG4gICAgICBpZiAoIXRvSFNMKSB7XG4gICAgICAgIGggPSArYVswXSAlIDM2MCAvIDM2MDtcbiAgICAgICAgcyA9ICthWzFdIC8gMTAwO1xuICAgICAgICBsID0gK2FbMl0gLyAxMDA7XG4gICAgICAgIGcgPSBsIDw9IC41ID8gbCAqIChzICsgMSkgOiBsICsgcyAtIGwgKiBzO1xuICAgICAgICByID0gbCAqIDIgLSBnO1xuICAgICAgICBhLmxlbmd0aCA+IDMgJiYgKGFbM10gKj0gMSk7IC8vY2FzdCBhcyBudW1iZXJcblxuICAgICAgICBhWzBdID0gX2h1ZShoICsgMSAvIDMsIHIsIGcpO1xuICAgICAgICBhWzFdID0gX2h1ZShoLCByLCBnKTtcbiAgICAgICAgYVsyXSA9IF9odWUoaCAtIDEgLyAzLCByLCBnKTtcbiAgICAgIH0gZWxzZSBpZiAofnYuaW5kZXhPZihcIj1cIikpIHtcbiAgICAgICAgLy9pZiByZWxhdGl2ZSB2YWx1ZXMgYXJlIGZvdW5kLCBqdXN0IHJldHVybiB0aGUgcmF3IHN0cmluZ3Mgd2l0aCB0aGUgcmVsYXRpdmUgcHJlZml4ZXMgaW4gcGxhY2UuXG4gICAgICAgIGEgPSB2Lm1hdGNoKF9udW1FeHApO1xuICAgICAgICBmb3JjZUFscGhhICYmIGEubGVuZ3RoIDwgNCAmJiAoYVszXSA9IDEpO1xuICAgICAgICByZXR1cm4gYTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYSA9IHYubWF0Y2goX3N0cmljdE51bUV4cCkgfHwgX2NvbG9yTG9va3VwLnRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIGEgPSBhLm1hcChOdW1iZXIpO1xuICB9XG5cbiAgaWYgKHRvSFNMICYmICF3YXNIU0wpIHtcbiAgICByID0gYVswXSAvIF8yNTU7XG4gICAgZyA9IGFbMV0gLyBfMjU1O1xuICAgIGIgPSBhWzJdIC8gXzI1NTtcbiAgICBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgICBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICBsID0gKG1heCArIG1pbikgLyAyO1xuXG4gICAgaWYgKG1heCA9PT0gbWluKSB7XG4gICAgICBoID0gcyA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGQgPSBtYXggLSBtaW47XG4gICAgICBzID0gbCA+IDAuNSA/IGQgLyAoMiAtIG1heCAtIG1pbikgOiBkIC8gKG1heCArIG1pbik7XG4gICAgICBoID0gbWF4ID09PSByID8gKGcgLSBiKSAvIGQgKyAoZyA8IGIgPyA2IDogMCkgOiBtYXggPT09IGcgPyAoYiAtIHIpIC8gZCArIDIgOiAociAtIGcpIC8gZCArIDQ7XG4gICAgICBoICo9IDYwO1xuICAgIH1cblxuICAgIGFbMF0gPSB+fihoICsgLjUpO1xuICAgIGFbMV0gPSB+fihzICogMTAwICsgLjUpO1xuICAgIGFbMl0gPSB+fihsICogMTAwICsgLjUpO1xuICB9XG5cbiAgZm9yY2VBbHBoYSAmJiBhLmxlbmd0aCA8IDQgJiYgKGFbM10gPSAxKTtcbiAgcmV0dXJuIGE7XG59LFxuICAgIF9jb2xvck9yZGVyRGF0YSA9IGZ1bmN0aW9uIF9jb2xvck9yZGVyRGF0YSh2KSB7XG4gIC8vIHN0cmlwcyBvdXQgdGhlIGNvbG9ycyBmcm9tIHRoZSBzdHJpbmcsIGZpbmRzIGFsbCB0aGUgbnVtZXJpYyBzbG90cyAod2l0aCB1bml0cykgYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgdGhvc2UuIFRoZSBBcnJheSBhbHNvIGhhcyBhIFwiY1wiIHByb3BlcnR5IHdoaWNoIGlzIGFuIEFycmF5IG9mIHRoZSBpbmRleCB2YWx1ZXMgd2hlcmUgdGhlIGNvbG9ycyBiZWxvbmcuIFRoaXMgaXMgdG8gaGVscCB3b3JrIGFyb3VuZCBpc3N1ZXMgd2hlcmUgdGhlcmUncyBhIG1pcy1tYXRjaGVkIG9yZGVyIG9mIGNvbG9yL251bWVyaWMgZGF0YSBsaWtlIGRyb3Atc2hhZG93KCNmMDAgMHB4IDFweCAycHgpIGFuZCBkcm9wLXNoYWRvdygweCAxcHggMnB4ICNmMDApLiBUaGlzIGlzIGJhc2ljYWxseSBhIGhlbHBlciBmdW5jdGlvbiB1c2VkIGluIF9mb3JtYXRDb2xvcnMoKVxuICB2YXIgdmFsdWVzID0gW10sXG4gICAgICBjID0gW10sXG4gICAgICBpID0gLTE7XG4gIHYuc3BsaXQoX2NvbG9yRXhwKS5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIGEgPSB2Lm1hdGNoKF9udW1XaXRoVW5pdEV4cCkgfHwgW107XG4gICAgdmFsdWVzLnB1c2guYXBwbHkodmFsdWVzLCBhKTtcbiAgICBjLnB1c2goaSArPSBhLmxlbmd0aCArIDEpO1xuICB9KTtcbiAgdmFsdWVzLmMgPSBjO1xuICByZXR1cm4gdmFsdWVzO1xufSxcbiAgICBfZm9ybWF0Q29sb3JzID0gZnVuY3Rpb24gX2Zvcm1hdENvbG9ycyhzLCB0b0hTTCwgb3JkZXJNYXRjaERhdGEpIHtcbiAgdmFyIHJlc3VsdCA9IFwiXCIsXG4gICAgICBjb2xvcnMgPSAocyArIHJlc3VsdCkubWF0Y2goX2NvbG9yRXhwKSxcbiAgICAgIHR5cGUgPSB0b0hTTCA/IFwiaHNsYShcIiA6IFwicmdiYShcIixcbiAgICAgIGkgPSAwLFxuICAgICAgYyxcbiAgICAgIHNoZWxsLFxuICAgICAgZCxcbiAgICAgIGw7XG5cbiAgaWYgKCFjb2xvcnMpIHtcbiAgICByZXR1cm4gcztcbiAgfVxuXG4gIGNvbG9ycyA9IGNvbG9ycy5tYXAoZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgcmV0dXJuIChjb2xvciA9IHNwbGl0Q29sb3IoY29sb3IsIHRvSFNMLCAxKSkgJiYgdHlwZSArICh0b0hTTCA/IGNvbG9yWzBdICsgXCIsXCIgKyBjb2xvclsxXSArIFwiJSxcIiArIGNvbG9yWzJdICsgXCIlLFwiICsgY29sb3JbM10gOiBjb2xvci5qb2luKFwiLFwiKSkgKyBcIilcIjtcbiAgfSk7XG5cbiAgaWYgKG9yZGVyTWF0Y2hEYXRhKSB7XG4gICAgZCA9IF9jb2xvck9yZGVyRGF0YShzKTtcbiAgICBjID0gb3JkZXJNYXRjaERhdGEuYztcblxuICAgIGlmIChjLmpvaW4ocmVzdWx0KSAhPT0gZC5jLmpvaW4ocmVzdWx0KSkge1xuICAgICAgc2hlbGwgPSBzLnJlcGxhY2UoX2NvbG9yRXhwLCBcIjFcIikuc3BsaXQoX251bVdpdGhVbml0RXhwKTtcbiAgICAgIGwgPSBzaGVsbC5sZW5ndGggLSAxO1xuXG4gICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgICByZXN1bHQgKz0gc2hlbGxbaV0gKyAofmMuaW5kZXhPZihpKSA/IGNvbG9ycy5zaGlmdCgpIHx8IHR5cGUgKyBcIjAsMCwwLDApXCIgOiAoZC5sZW5ndGggPyBkIDogY29sb3JzLmxlbmd0aCA/IGNvbG9ycyA6IG9yZGVyTWF0Y2hEYXRhKS5zaGlmdCgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIXNoZWxsKSB7XG4gICAgc2hlbGwgPSBzLnNwbGl0KF9jb2xvckV4cCk7XG4gICAgbCA9IHNoZWxsLmxlbmd0aCAtIDE7XG5cbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgcmVzdWx0ICs9IHNoZWxsW2ldICsgY29sb3JzW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQgKyBzaGVsbFtsXTtcbn0sXG4gICAgX2NvbG9yRXhwID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcyA9IFwiKD86XFxcXGIoPzooPzpyZ2J8cmdiYXxoc2x8aHNsYSlcXFxcKC4rP1xcXFwpKXxcXFxcQiMoPzpbMC05YS1mXXszLDR9KXsxLDJ9XFxcXGJcIixcbiAgICAgIC8vd2UnbGwgZHluYW1pY2FsbHkgYnVpbGQgdGhpcyBSZWd1bGFyIEV4cHJlc3Npb24gdG8gY29uc2VydmUgZmlsZSBzaXplLiBBZnRlciBidWlsZGluZyBpdCwgaXQgd2lsbCBiZSBhYmxlIHRvIGZpbmQgcmdiKCksIHJnYmEoKSwgIyAoaGV4YWRlY2ltYWwpLCBhbmQgbmFtZWQgY29sb3IgdmFsdWVzIGxpa2UgcmVkLCBibHVlLCBwdXJwbGUsIGV0Yy4sXG4gIHA7XG5cbiAgZm9yIChwIGluIF9jb2xvckxvb2t1cCkge1xuICAgIHMgKz0gXCJ8XCIgKyBwICsgXCJcXFxcYlwiO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAocyArIFwiKVwiLCBcImdpXCIpO1xufSgpLFxuICAgIF9oc2xFeHAgPSAvaHNsW2FdP1xcKC8sXG4gICAgX2NvbG9yU3RyaW5nRmlsdGVyID0gZnVuY3Rpb24gX2NvbG9yU3RyaW5nRmlsdGVyKGEpIHtcbiAgdmFyIGNvbWJpbmVkID0gYS5qb2luKFwiIFwiKSxcbiAgICAgIHRvSFNMO1xuICBfY29sb3JFeHAubGFzdEluZGV4ID0gMDtcblxuICBpZiAoX2NvbG9yRXhwLnRlc3QoY29tYmluZWQpKSB7XG4gICAgdG9IU0wgPSBfaHNsRXhwLnRlc3QoY29tYmluZWQpO1xuICAgIGFbMV0gPSBfZm9ybWF0Q29sb3JzKGFbMV0sIHRvSFNMKTtcbiAgICBhWzBdID0gX2Zvcm1hdENvbG9ycyhhWzBdLCB0b0hTTCwgX2NvbG9yT3JkZXJEYXRhKGFbMV0pKTsgLy8gbWFrZSBzdXJlIHRoZSBvcmRlciBvZiBudW1iZXJzL2NvbG9ycyBtYXRjaCB3aXRoIHRoZSBFTkQgdmFsdWUuXG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSxcblxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBUSUNLRVJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbl90aWNrZXJBY3RpdmUsXG4gICAgX3RpY2tlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF9nZXRUaW1lID0gRGF0ZS5ub3csXG4gICAgICBfbGFnVGhyZXNob2xkID0gNTAwLFxuICAgICAgX2FkanVzdGVkTGFnID0gMzMsXG4gICAgICBfc3RhcnRUaW1lID0gX2dldFRpbWUoKSxcbiAgICAgIF9sYXN0VXBkYXRlID0gX3N0YXJ0VGltZSxcbiAgICAgIF9nYXAgPSAxMDAwIC8gMjQwLFxuICAgICAgX25leHRUaW1lID0gX2dhcCxcbiAgICAgIF9saXN0ZW5lcnMgPSBbXSxcbiAgICAgIF9pZCxcbiAgICAgIF9yZXEsXG4gICAgICBfcmFmLFxuICAgICAgX3NlbGYsXG4gICAgICBfZGVsdGEsXG4gICAgICBfaSxcbiAgICAgIF90aWNrID0gZnVuY3Rpb24gX3RpY2sodikge1xuICAgIHZhciBlbGFwc2VkID0gX2dldFRpbWUoKSAtIF9sYXN0VXBkYXRlLFxuICAgICAgICBtYW51YWwgPSB2ID09PSB0cnVlLFxuICAgICAgICBvdmVybGFwLFxuICAgICAgICBkaXNwYXRjaCxcbiAgICAgICAgdGltZSxcbiAgICAgICAgZnJhbWU7XG5cbiAgICBlbGFwc2VkID4gX2xhZ1RocmVzaG9sZCAmJiAoX3N0YXJ0VGltZSArPSBlbGFwc2VkIC0gX2FkanVzdGVkTGFnKTtcbiAgICBfbGFzdFVwZGF0ZSArPSBlbGFwc2VkO1xuICAgIHRpbWUgPSBfbGFzdFVwZGF0ZSAtIF9zdGFydFRpbWU7XG4gICAgb3ZlcmxhcCA9IHRpbWUgLSBfbmV4dFRpbWU7XG5cbiAgICBpZiAob3ZlcmxhcCA+IDAgfHwgbWFudWFsKSB7XG4gICAgICBmcmFtZSA9ICsrX3NlbGYuZnJhbWU7XG4gICAgICBfZGVsdGEgPSB0aW1lIC0gX3NlbGYudGltZSAqIDEwMDA7XG4gICAgICBfc2VsZi50aW1lID0gdGltZSA9IHRpbWUgLyAxMDAwO1xuICAgICAgX25leHRUaW1lICs9IG92ZXJsYXAgKyAob3ZlcmxhcCA+PSBfZ2FwID8gNCA6IF9nYXAgLSBvdmVybGFwKTtcbiAgICAgIGRpc3BhdGNoID0gMTtcbiAgICB9XG5cbiAgICBtYW51YWwgfHwgKF9pZCA9IF9yZXEoX3RpY2spKTsgLy9tYWtlIHN1cmUgdGhlIHJlcXVlc3QgaXMgbWFkZSBiZWZvcmUgd2UgZGlzcGF0Y2ggdGhlIFwidGlja1wiIGV2ZW50IHNvIHRoYXQgdGltaW5nIGlzIG1haW50YWluZWQuIE90aGVyd2lzZSwgaWYgcHJvY2Vzc2luZyB0aGUgXCJ0aWNrXCIgcmVxdWlyZXMgYSBidW5jaCBvZiB0aW1lIChsaWtlIDE1bXMpIGFuZCB3ZSdyZSB1c2luZyBhIHNldFRpbWVvdXQoKSB0aGF0J3MgYmFzZWQgb24gMTYuN21zLCBpdCdkIHRlY2huaWNhbGx5IHRha2UgMzEuN21zIGJldHdlZW4gZnJhbWVzIG90aGVyd2lzZS5cblxuICAgIGlmIChkaXNwYXRjaCkge1xuICAgICAgZm9yIChfaSA9IDA7IF9pIDwgX2xpc3RlbmVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgLy8gdXNlIF9pIGFuZCBjaGVjayBfbGlzdGVuZXJzLmxlbmd0aCBpbnN0ZWFkIG9mIGEgdmFyaWFibGUgYmVjYXVzZSBhIGxpc3RlbmVyIGNvdWxkIGdldCByZW1vdmVkIGR1cmluZyB0aGUgbG9vcCwgYW5kIGlmIHRoYXQgaGFwcGVucyB0byBhbiBlbGVtZW50IGxlc3MgdGhhbiB0aGUgY3VycmVudCBpbmRleCwgaXQnZCB0aHJvdyB0aGluZ3Mgb2ZmIGluIHRoZSBsb29wLlxuICAgICAgICBfbGlzdGVuZXJzW19pXSh0aW1lLCBfZGVsdGEsIGZyYW1lLCB2KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3NlbGYgPSB7XG4gICAgdGltZTogMCxcbiAgICBmcmFtZTogMCxcbiAgICB0aWNrOiBmdW5jdGlvbiB0aWNrKCkge1xuICAgICAgX3RpY2sodHJ1ZSk7XG4gICAgfSxcbiAgICBkZWx0YVJhdGlvOiBmdW5jdGlvbiBkZWx0YVJhdGlvKGZwcykge1xuICAgICAgcmV0dXJuIF9kZWx0YSAvICgxMDAwIC8gKGZwcyB8fCA2MCkpO1xuICAgIH0sXG4gICAgd2FrZTogZnVuY3Rpb24gd2FrZSgpIHtcbiAgICAgIGlmIChfY29yZVJlYWR5KSB7XG4gICAgICAgIGlmICghX2NvcmVJbml0dGVkICYmIF93aW5kb3dFeGlzdHMoKSkge1xuICAgICAgICAgIF93aW4gPSBfY29yZUluaXR0ZWQgPSB3aW5kb3c7XG4gICAgICAgICAgX2RvYyA9IF93aW4uZG9jdW1lbnQgfHwge307XG4gICAgICAgICAgX2dsb2JhbHMuZ3NhcCA9IGdzYXA7XG4gICAgICAgICAgKF93aW4uZ3NhcFZlcnNpb25zIHx8IChfd2luLmdzYXBWZXJzaW9ucyA9IFtdKSkucHVzaChnc2FwLnZlcnNpb24pO1xuXG4gICAgICAgICAgX2luc3RhbGwoX2luc3RhbGxTY29wZSB8fCBfd2luLkdyZWVuU29ja0dsb2JhbHMgfHwgIV93aW4uZ3NhcCAmJiBfd2luIHx8IHt9KTtcblxuICAgICAgICAgIF9yYWYgPSBfd2luLnJlcXVlc3RBbmltYXRpb25GcmFtZTtcblxuICAgICAgICAgIF9yZWdpc3RlclBsdWdpblF1ZXVlLmZvckVhY2goX2NyZWF0ZVBsdWdpbik7XG4gICAgICAgIH1cblxuICAgICAgICBfaWQgJiYgX3NlbGYuc2xlZXAoKTtcblxuICAgICAgICBfcmVxID0gX3JhZiB8fCBmdW5jdGlvbiAoZikge1xuICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGYsIF9uZXh0VGltZSAtIF9zZWxmLnRpbWUgKiAxMDAwICsgMSB8IDApO1xuICAgICAgICB9O1xuXG4gICAgICAgIF90aWNrZXJBY3RpdmUgPSAxO1xuXG4gICAgICAgIF90aWNrKDIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2xlZXA6IGZ1bmN0aW9uIHNsZWVwKCkge1xuICAgICAgKF9yYWYgPyBfd2luLmNhbmNlbEFuaW1hdGlvbkZyYW1lIDogY2xlYXJUaW1lb3V0KShfaWQpO1xuICAgICAgX3RpY2tlckFjdGl2ZSA9IDA7XG4gICAgICBfcmVxID0gX2VtcHR5RnVuYztcbiAgICB9LFxuICAgIGxhZ1Ntb290aGluZzogZnVuY3Rpb24gbGFnU21vb3RoaW5nKHRocmVzaG9sZCwgYWRqdXN0ZWRMYWcpIHtcbiAgICAgIF9sYWdUaHJlc2hvbGQgPSB0aHJlc2hvbGQgfHwgSW5maW5pdHk7IC8vIHplcm8gc2hvdWxkIGJlIGludGVycHJldGVkIGFzIGJhc2ljYWxseSB1bmxpbWl0ZWRcblxuICAgICAgX2FkanVzdGVkTGFnID0gTWF0aC5taW4oYWRqdXN0ZWRMYWcgfHwgMzMsIF9sYWdUaHJlc2hvbGQpO1xuICAgIH0sXG4gICAgZnBzOiBmdW5jdGlvbiBmcHMoX2Zwcykge1xuICAgICAgX2dhcCA9IDEwMDAgLyAoX2ZwcyB8fCAyNDApO1xuICAgICAgX25leHRUaW1lID0gX3NlbGYudGltZSAqIDEwMDAgKyBfZ2FwO1xuICAgIH0sXG4gICAgYWRkOiBmdW5jdGlvbiBhZGQoY2FsbGJhY2ssIG9uY2UsIHByaW9yaXRpemUpIHtcbiAgICAgIHZhciBmdW5jID0gb25jZSA/IGZ1bmN0aW9uICh0LCBkLCBmLCB2KSB7XG4gICAgICAgIGNhbGxiYWNrKHQsIGQsIGYsIHYpO1xuXG4gICAgICAgIF9zZWxmLnJlbW92ZShmdW5jKTtcbiAgICAgIH0gOiBjYWxsYmFjaztcblxuICAgICAgX3NlbGYucmVtb3ZlKGNhbGxiYWNrKTtcblxuICAgICAgX2xpc3RlbmVyc1twcmlvcml0aXplID8gXCJ1bnNoaWZ0XCIgOiBcInB1c2hcIl0oZnVuYyk7XG5cbiAgICAgIF93YWtlKCk7XG5cbiAgICAgIHJldHVybiBmdW5jO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoY2FsbGJhY2ssIGkpIHtcbiAgICAgIH4oaSA9IF9saXN0ZW5lcnMuaW5kZXhPZihjYWxsYmFjaykpICYmIF9saXN0ZW5lcnMuc3BsaWNlKGksIDEpICYmIF9pID49IGkgJiYgX2ktLTtcbiAgICB9LFxuICAgIF9saXN0ZW5lcnM6IF9saXN0ZW5lcnNcbiAgfTtcbiAgcmV0dXJuIF9zZWxmO1xufSgpLFxuICAgIF93YWtlID0gZnVuY3Rpb24gX3dha2UoKSB7XG4gIHJldHVybiAhX3RpY2tlckFjdGl2ZSAmJiBfdGlja2VyLndha2UoKTtcbn0sXG4gICAgLy9hbHNvIGVuc3VyZXMgdGhlIGNvcmUgY2xhc3NlcyBhcmUgaW5pdGlhbGl6ZWQuXG5cbi8qXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiogRUFTSU5HXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5fZWFzZU1hcCA9IHt9LFxuICAgIF9jdXN0b21FYXNlRXhwID0gL15bXFxkLlxcLU1dW1xcZC5cXC0sXFxzXS8sXG4gICAgX3F1b3Rlc0V4cCA9IC9bXCInXS9nLFxuICAgIF9wYXJzZU9iamVjdEluU3RyaW5nID0gZnVuY3Rpb24gX3BhcnNlT2JqZWN0SW5TdHJpbmcodmFsdWUpIHtcbiAgLy90YWtlcyBhIHN0cmluZyBsaWtlIFwie3dpZ2dsZXM6MTAsIHR5cGU6YW50aWNpcGF0ZX0pXCIgYW5kIHR1cm5zIGl0IGludG8gYSByZWFsIG9iamVjdC4gTm90aWNlIGl0IGVuZHMgaW4gXCIpXCIgYW5kIGluY2x1ZGVzIHRoZSB7fSB3cmFwcGVycy4gVGhpcyBpcyBiZWNhdXNlIHdlIG9ubHkgdXNlIHRoaXMgZnVuY3Rpb24gZm9yIHBhcnNpbmcgZWFzZSBjb25maWdzIGFuZCBwcmlvcml0aXplZCBvcHRpbWl6YXRpb24gcmF0aGVyIHRoYW4gcmV1c2FiaWxpdHkuXG4gIHZhciBvYmogPSB7fSxcbiAgICAgIHNwbGl0ID0gdmFsdWUuc3Vic3RyKDEsIHZhbHVlLmxlbmd0aCAtIDMpLnNwbGl0KFwiOlwiKSxcbiAgICAgIGtleSA9IHNwbGl0WzBdLFxuICAgICAgaSA9IDEsXG4gICAgICBsID0gc3BsaXQubGVuZ3RoLFxuICAgICAgaW5kZXgsXG4gICAgICB2YWwsXG4gICAgICBwYXJzZWRWYWw7XG5cbiAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICB2YWwgPSBzcGxpdFtpXTtcbiAgICBpbmRleCA9IGkgIT09IGwgLSAxID8gdmFsLmxhc3RJbmRleE9mKFwiLFwiKSA6IHZhbC5sZW5ndGg7XG4gICAgcGFyc2VkVmFsID0gdmFsLnN1YnN0cigwLCBpbmRleCk7XG4gICAgb2JqW2tleV0gPSBpc05hTihwYXJzZWRWYWwpID8gcGFyc2VkVmFsLnJlcGxhY2UoX3F1b3Rlc0V4cCwgXCJcIikudHJpbSgpIDogK3BhcnNlZFZhbDtcbiAgICBrZXkgPSB2YWwuc3Vic3RyKGluZGV4ICsgMSkudHJpbSgpO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0sXG4gICAgX3ZhbHVlSW5QYXJlbnRoZXNlcyA9IGZ1bmN0aW9uIF92YWx1ZUluUGFyZW50aGVzZXModmFsdWUpIHtcbiAgdmFyIG9wZW4gPSB2YWx1ZS5pbmRleE9mKFwiKFwiKSArIDEsXG4gICAgICBjbG9zZSA9IHZhbHVlLmluZGV4T2YoXCIpXCIpLFxuICAgICAgbmVzdGVkID0gdmFsdWUuaW5kZXhPZihcIihcIiwgb3Blbik7XG4gIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcob3Blbiwgfm5lc3RlZCAmJiBuZXN0ZWQgPCBjbG9zZSA/IHZhbHVlLmluZGV4T2YoXCIpXCIsIGNsb3NlICsgMSkgOiBjbG9zZSk7XG59LFxuICAgIF9jb25maWdFYXNlRnJvbVN0cmluZyA9IGZ1bmN0aW9uIF9jb25maWdFYXNlRnJvbVN0cmluZyhuYW1lKSB7XG4gIC8vbmFtZSBjYW4gYmUgYSBzdHJpbmcgbGlrZSBcImVsYXN0aWMub3V0KDEsMC41KVwiLCBhbmQgcGFzcyBpbiBfZWFzZU1hcCBhcyBvYmogYW5kIGl0J2xsIHBhcnNlIGl0IG91dCBhbmQgY2FsbCB0aGUgYWN0dWFsIGZ1bmN0aW9uIGxpa2UgX2Vhc2VNYXAuRWxhc3RpYy5lYXNlT3V0LmNvbmZpZygxLDAuNSkuIEl0IHdpbGwgYWxzbyBwYXJzZSBjdXN0b20gZWFzZSBzdHJpbmdzIGFzIGxvbmcgYXMgQ3VzdG9tRWFzZSBpcyBsb2FkZWQgYW5kIHJlZ2lzdGVyZWQgKGludGVybmFsbHkgYXMgX2Vhc2VNYXAuX0NFKS5cbiAgdmFyIHNwbGl0ID0gKG5hbWUgKyBcIlwiKS5zcGxpdChcIihcIiksXG4gICAgICBlYXNlID0gX2Vhc2VNYXBbc3BsaXRbMF1dO1xuICByZXR1cm4gZWFzZSAmJiBzcGxpdC5sZW5ndGggPiAxICYmIGVhc2UuY29uZmlnID8gZWFzZS5jb25maWcuYXBwbHkobnVsbCwgfm5hbWUuaW5kZXhPZihcIntcIikgPyBbX3BhcnNlT2JqZWN0SW5TdHJpbmcoc3BsaXRbMV0pXSA6IF92YWx1ZUluUGFyZW50aGVzZXMobmFtZSkuc3BsaXQoXCIsXCIpLm1hcChfbnVtZXJpY0lmUG9zc2libGUpKSA6IF9lYXNlTWFwLl9DRSAmJiBfY3VzdG9tRWFzZUV4cC50ZXN0KG5hbWUpID8gX2Vhc2VNYXAuX0NFKFwiXCIsIG5hbWUpIDogZWFzZTtcbn0sXG4gICAgX2ludmVydEVhc2UgPSBmdW5jdGlvbiBfaW52ZXJ0RWFzZShlYXNlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAxIC0gZWFzZSgxIC0gcCk7XG4gIH07XG59LFxuICAgIC8vIGFsbG93IHlveW9FYXNlIHRvIGJlIHNldCBpbiBjaGlsZHJlbiBhbmQgaGF2ZSB0aG9zZSBhZmZlY3RlZCB3aGVuIHRoZSBwYXJlbnQvYW5jZXN0b3IgdGltZWxpbmUgeW95b3MuXG5fcHJvcGFnYXRlWW95b0Vhc2UgPSBmdW5jdGlvbiBfcHJvcGFnYXRlWW95b0Vhc2UodGltZWxpbmUsIGlzWW95bykge1xuICB2YXIgY2hpbGQgPSB0aW1lbGluZS5fZmlyc3QsXG4gICAgICBlYXNlO1xuXG4gIHdoaWxlIChjaGlsZCkge1xuICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFRpbWVsaW5lKSB7XG4gICAgICBfcHJvcGFnYXRlWW95b0Vhc2UoY2hpbGQsIGlzWW95byk7XG4gICAgfSBlbHNlIGlmIChjaGlsZC52YXJzLnlveW9FYXNlICYmICghY2hpbGQuX3lveW8gfHwgIWNoaWxkLl9yZXBlYXQpICYmIGNoaWxkLl95b3lvICE9PSBpc1lveW8pIHtcbiAgICAgIGlmIChjaGlsZC50aW1lbGluZSkge1xuICAgICAgICBfcHJvcGFnYXRlWW95b0Vhc2UoY2hpbGQudGltZWxpbmUsIGlzWW95byk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlYXNlID0gY2hpbGQuX2Vhc2U7XG4gICAgICAgIGNoaWxkLl9lYXNlID0gY2hpbGQuX3lFYXNlO1xuICAgICAgICBjaGlsZC5feUVhc2UgPSBlYXNlO1xuICAgICAgICBjaGlsZC5feW95byA9IGlzWW95bztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICB9XG59LFxuICAgIF9wYXJzZUVhc2UgPSBmdW5jdGlvbiBfcGFyc2VFYXNlKGVhc2UsIGRlZmF1bHRFYXNlKSB7XG4gIHJldHVybiAhZWFzZSA/IGRlZmF1bHRFYXNlIDogKF9pc0Z1bmN0aW9uKGVhc2UpID8gZWFzZSA6IF9lYXNlTWFwW2Vhc2VdIHx8IF9jb25maWdFYXNlRnJvbVN0cmluZyhlYXNlKSkgfHwgZGVmYXVsdEVhc2U7XG59LFxuICAgIF9pbnNlcnRFYXNlID0gZnVuY3Rpb24gX2luc2VydEVhc2UobmFtZXMsIGVhc2VJbiwgZWFzZU91dCwgZWFzZUluT3V0KSB7XG4gIGlmIChlYXNlT3V0ID09PSB2b2lkIDApIHtcbiAgICBlYXNlT3V0ID0gZnVuY3Rpb24gZWFzZU91dChwKSB7XG4gICAgICByZXR1cm4gMSAtIGVhc2VJbigxIC0gcCk7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChlYXNlSW5PdXQgPT09IHZvaWQgMCkge1xuICAgIGVhc2VJbk91dCA9IGZ1bmN0aW9uIGVhc2VJbk91dChwKSB7XG4gICAgICByZXR1cm4gcCA8IC41ID8gZWFzZUluKHAgKiAyKSAvIDIgOiAxIC0gZWFzZUluKCgxIC0gcCkgKiAyKSAvIDI7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBlYXNlID0ge1xuICAgIGVhc2VJbjogZWFzZUluLFxuICAgIGVhc2VPdXQ6IGVhc2VPdXQsXG4gICAgZWFzZUluT3V0OiBlYXNlSW5PdXRcbiAgfSxcbiAgICAgIGxvd2VyY2FzZU5hbWU7XG5cbiAgX2ZvckVhY2hOYW1lKG5hbWVzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgIF9lYXNlTWFwW25hbWVdID0gX2dsb2JhbHNbbmFtZV0gPSBlYXNlO1xuICAgIF9lYXNlTWFwW2xvd2VyY2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCldID0gZWFzZU91dDtcblxuICAgIGZvciAodmFyIHAgaW4gZWFzZSkge1xuICAgICAgX2Vhc2VNYXBbbG93ZXJjYXNlTmFtZSArIChwID09PSBcImVhc2VJblwiID8gXCIuaW5cIiA6IHAgPT09IFwiZWFzZU91dFwiID8gXCIub3V0XCIgOiBcIi5pbk91dFwiKV0gPSBfZWFzZU1hcFtuYW1lICsgXCIuXCIgKyBwXSA9IGVhc2VbcF07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWFzZTtcbn0sXG4gICAgX2Vhc2VJbk91dEZyb21PdXQgPSBmdW5jdGlvbiBfZWFzZUluT3V0RnJvbU91dChlYXNlT3V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwIDwgLjUgPyAoMSAtIGVhc2VPdXQoMSAtIHAgKiAyKSkgLyAyIDogLjUgKyBlYXNlT3V0KChwIC0gLjUpICogMikgLyAyO1xuICB9O1xufSxcbiAgICBfY29uZmlnRWxhc3RpYyA9IGZ1bmN0aW9uIF9jb25maWdFbGFzdGljKHR5cGUsIGFtcGxpdHVkZSwgcGVyaW9kKSB7XG4gIHZhciBwMSA9IGFtcGxpdHVkZSA+PSAxID8gYW1wbGl0dWRlIDogMSxcbiAgICAgIC8vbm90ZTogaWYgYW1wbGl0dWRlIGlzIDwgMSwgd2Ugc2ltcGx5IGFkanVzdCB0aGUgcGVyaW9kIGZvciBhIG1vcmUgbmF0dXJhbCBmZWVsLiBPdGhlcndpc2UgdGhlIG1hdGggZG9lc24ndCB3b3JrIHJpZ2h0IGFuZCB0aGUgY3VydmUgc3RhcnRzIGF0IDEuXG4gIHAyID0gKHBlcmlvZCB8fCAodHlwZSA/IC4zIDogLjQ1KSkgLyAoYW1wbGl0dWRlIDwgMSA/IGFtcGxpdHVkZSA6IDEpLFxuICAgICAgcDMgPSBwMiAvIF8yUEkgKiAoTWF0aC5hc2luKDEgLyBwMSkgfHwgMCksXG4gICAgICBlYXNlT3V0ID0gZnVuY3Rpb24gZWFzZU91dChwKSB7XG4gICAgcmV0dXJuIHAgPT09IDEgPyAxIDogcDEgKiBNYXRoLnBvdygyLCAtMTAgKiBwKSAqIF9zaW4oKHAgLSBwMykgKiBwMikgKyAxO1xuICB9LFxuICAgICAgZWFzZSA9IHR5cGUgPT09IFwib3V0XCIgPyBlYXNlT3V0IDogdHlwZSA9PT0gXCJpblwiID8gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gMSAtIGVhc2VPdXQoMSAtIHApO1xuICB9IDogX2Vhc2VJbk91dEZyb21PdXQoZWFzZU91dCk7XG5cbiAgcDIgPSBfMlBJIC8gcDI7IC8vcHJlY2FsY3VsYXRlIHRvIG9wdGltaXplXG5cbiAgZWFzZS5jb25maWcgPSBmdW5jdGlvbiAoYW1wbGl0dWRlLCBwZXJpb2QpIHtcbiAgICByZXR1cm4gX2NvbmZpZ0VsYXN0aWModHlwZSwgYW1wbGl0dWRlLCBwZXJpb2QpO1xuICB9O1xuXG4gIHJldHVybiBlYXNlO1xufSxcbiAgICBfY29uZmlnQmFjayA9IGZ1bmN0aW9uIF9jb25maWdCYWNrKHR5cGUsIG92ZXJzaG9vdCkge1xuICBpZiAob3ZlcnNob290ID09PSB2b2lkIDApIHtcbiAgICBvdmVyc2hvb3QgPSAxLjcwMTU4O1xuICB9XG5cbiAgdmFyIGVhc2VPdXQgPSBmdW5jdGlvbiBlYXNlT3V0KHApIHtcbiAgICByZXR1cm4gcCA/IC0tcCAqIHAgKiAoKG92ZXJzaG9vdCArIDEpICogcCArIG92ZXJzaG9vdCkgKyAxIDogMDtcbiAgfSxcbiAgICAgIGVhc2UgPSB0eXBlID09PSBcIm91dFwiID8gZWFzZU91dCA6IHR5cGUgPT09IFwiaW5cIiA/IGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIDEgLSBlYXNlT3V0KDEgLSBwKTtcbiAgfSA6IF9lYXNlSW5PdXRGcm9tT3V0KGVhc2VPdXQpO1xuXG4gIGVhc2UuY29uZmlnID0gZnVuY3Rpb24gKG92ZXJzaG9vdCkge1xuICAgIHJldHVybiBfY29uZmlnQmFjayh0eXBlLCBvdmVyc2hvb3QpO1xuICB9O1xuXG4gIHJldHVybiBlYXNlO1xufTsgLy8gYSBjaGVhcGVyIChrYiBhbmQgY3B1KSBidXQgbW9yZSBtaWxkIHdheSB0byBnZXQgYSBwYXJhbWV0ZXJpemVkIHdlaWdodGVkIGVhc2UgYnkgZmVlZGluZyBpbiBhIHZhbHVlIGJldHdlZW4gLTEgKGVhc2VJbikgYW5kIDEgKGVhc2VPdXQpIHdoZXJlIDAgaXMgbGluZWFyLlxuLy8gX3dlaWdodGVkRWFzZSA9IHJhdGlvID0+IHtcbi8vIFx0bGV0IHkgPSAwLjUgKyByYXRpbyAvIDI7XG4vLyBcdHJldHVybiBwID0+ICgyICogKDEgLSBwKSAqIHAgKiB5ICsgcCAqIHApO1xuLy8gfSxcbi8vIGEgc3Ryb25nZXIgKGJ1dCBtb3JlIGV4cGVuc2l2ZSBrYi9jcHUpIHBhcmFtZXRlcml6ZWQgd2VpZ2h0ZWQgZWFzZSB0aGF0IGxldHMgeW91IGZlZWQgaW4gYSB2YWx1ZSBiZXR3ZWVuIC0xIChlYXNlSW4pIGFuZCAxIChlYXNlT3V0KSB3aGVyZSAwIGlzIGxpbmVhci5cbi8vIF93ZWlnaHRlZEVhc2VTdHJvbmcgPSByYXRpbyA9PiB7XG4vLyBcdHJhdGlvID0gLjUgKyByYXRpbyAvIDI7XG4vLyBcdGxldCBvID0gMSAvIDMgKiAocmF0aW8gPCAuNSA/IHJhdGlvIDogMSAtIHJhdGlvKSxcbi8vIFx0XHRiID0gcmF0aW8gLSBvLFxuLy8gXHRcdGMgPSByYXRpbyArIG87XG4vLyBcdHJldHVybiBwID0+IHAgPT09IDEgPyBwIDogMyAqIGIgKiAoMSAtIHApICogKDEgLSBwKSAqIHAgKyAzICogYyAqICgxIC0gcCkgKiBwICogcCArIHAgKiBwICogcDtcbi8vIH07XG5cblxuX2ZvckVhY2hOYW1lKFwiTGluZWFyLFF1YWQsQ3ViaWMsUXVhcnQsUXVpbnQsU3Ryb25nXCIsIGZ1bmN0aW9uIChuYW1lLCBpKSB7XG4gIHZhciBwb3dlciA9IGkgPCA1ID8gaSArIDEgOiBpO1xuXG4gIF9pbnNlcnRFYXNlKG5hbWUgKyBcIixQb3dlclwiICsgKHBvd2VyIC0gMSksIGkgPyBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBNYXRoLnBvdyhwLCBwb3dlcik7XG4gIH0gOiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwO1xuICB9LCBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAxIC0gTWF0aC5wb3coMSAtIHAsIHBvd2VyKTtcbiAgfSwgZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcCA8IC41ID8gTWF0aC5wb3cocCAqIDIsIHBvd2VyKSAvIDIgOiAxIC0gTWF0aC5wb3coKDEgLSBwKSAqIDIsIHBvd2VyKSAvIDI7XG4gIH0pO1xufSk7XG5cbl9lYXNlTWFwLkxpbmVhci5lYXNlTm9uZSA9IF9lYXNlTWFwLm5vbmUgPSBfZWFzZU1hcC5MaW5lYXIuZWFzZUluO1xuXG5faW5zZXJ0RWFzZShcIkVsYXN0aWNcIiwgX2NvbmZpZ0VsYXN0aWMoXCJpblwiKSwgX2NvbmZpZ0VsYXN0aWMoXCJvdXRcIiksIF9jb25maWdFbGFzdGljKCkpO1xuXG4oZnVuY3Rpb24gKG4sIGMpIHtcbiAgdmFyIG4xID0gMSAvIGMsXG4gICAgICBuMiA9IDIgKiBuMSxcbiAgICAgIG4zID0gMi41ICogbjEsXG4gICAgICBlYXNlT3V0ID0gZnVuY3Rpb24gZWFzZU91dChwKSB7XG4gICAgcmV0dXJuIHAgPCBuMSA/IG4gKiBwICogcCA6IHAgPCBuMiA/IG4gKiBNYXRoLnBvdyhwIC0gMS41IC8gYywgMikgKyAuNzUgOiBwIDwgbjMgPyBuICogKHAgLT0gMi4yNSAvIGMpICogcCArIC45Mzc1IDogbiAqIE1hdGgucG93KHAgLSAyLjYyNSAvIGMsIDIpICsgLjk4NDM3NTtcbiAgfTtcblxuICBfaW5zZXJ0RWFzZShcIkJvdW5jZVwiLCBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAxIC0gZWFzZU91dCgxIC0gcCk7XG4gIH0sIGVhc2VPdXQpO1xufSkoNy41NjI1LCAyLjc1KTtcblxuX2luc2VydEVhc2UoXCJFeHBvXCIsIGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiBwID8gTWF0aC5wb3coMiwgMTAgKiAocCAtIDEpKSA6IDA7XG59KTtcblxuX2luc2VydEVhc2UoXCJDaXJjXCIsIGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiAtKF9zcXJ0KDEgLSBwICogcCkgLSAxKTtcbn0pO1xuXG5faW5zZXJ0RWFzZShcIlNpbmVcIiwgZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIHAgPT09IDEgPyAxIDogLV9jb3MocCAqIF9IQUxGX1BJKSArIDE7XG59KTtcblxuX2luc2VydEVhc2UoXCJCYWNrXCIsIF9jb25maWdCYWNrKFwiaW5cIiksIF9jb25maWdCYWNrKFwib3V0XCIpLCBfY29uZmlnQmFjaygpKTtcblxuX2Vhc2VNYXAuU3RlcHBlZEVhc2UgPSBfZWFzZU1hcC5zdGVwcyA9IF9nbG9iYWxzLlN0ZXBwZWRFYXNlID0ge1xuICBjb25maWc6IGZ1bmN0aW9uIGNvbmZpZyhzdGVwcywgaW1tZWRpYXRlU3RhcnQpIHtcbiAgICBpZiAoc3RlcHMgPT09IHZvaWQgMCkge1xuICAgICAgc3RlcHMgPSAxO1xuICAgIH1cblxuICAgIHZhciBwMSA9IDEgLyBzdGVwcyxcbiAgICAgICAgcDIgPSBzdGVwcyArIChpbW1lZGlhdGVTdGFydCA/IDAgOiAxKSxcbiAgICAgICAgcDMgPSBpbW1lZGlhdGVTdGFydCA/IDEgOiAwLFxuICAgICAgICBtYXggPSAxIC0gX3RpbnlOdW07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gKChwMiAqIF9jbGFtcCgwLCBtYXgsIHApIHwgMCkgKyBwMykgKiBwMTtcbiAgICB9O1xuICB9XG59O1xuX2RlZmF1bHRzLmVhc2UgPSBfZWFzZU1hcFtcInF1YWQub3V0XCJdO1xuXG5fZm9yRWFjaE5hbWUoXCJvbkNvbXBsZXRlLG9uVXBkYXRlLG9uU3RhcnQsb25SZXBlYXQsb25SZXZlcnNlQ29tcGxldGUsb25JbnRlcnJ1cHRcIiwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIF9jYWxsYmFja05hbWVzICs9IG5hbWUgKyBcIixcIiArIG5hbWUgKyBcIlBhcmFtcyxcIjtcbn0pO1xuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDQUNIRVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5cbmV4cG9ydCB2YXIgR1NDYWNoZSA9IGZ1bmN0aW9uIEdTQ2FjaGUodGFyZ2V0LCBoYXJuZXNzKSB7XG4gIHRoaXMuaWQgPSBfZ3NJRCsrO1xuICB0YXJnZXQuX2dzYXAgPSB0aGlzO1xuICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgdGhpcy5oYXJuZXNzID0gaGFybmVzcztcbiAgdGhpcy5nZXQgPSBoYXJuZXNzID8gaGFybmVzcy5nZXQgOiBfZ2V0UHJvcGVydHk7XG4gIHRoaXMuc2V0ID0gaGFybmVzcyA/IGhhcm5lc3MuZ2V0U2V0dGVyIDogX2dldFNldHRlcjtcbn07XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFOSU1BVElPTlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5leHBvcnQgdmFyIEFuaW1hdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEFuaW1hdGlvbih2YXJzKSB7XG4gICAgdGhpcy52YXJzID0gdmFycztcbiAgICB0aGlzLl9kZWxheSA9ICt2YXJzLmRlbGF5IHx8IDA7XG5cbiAgICBpZiAodGhpcy5fcmVwZWF0ID0gdmFycy5yZXBlYXQgPT09IEluZmluaXR5ID8gLTIgOiB2YXJzLnJlcGVhdCB8fCAwKSB7XG4gICAgICAvLyBUT0RPOiByZXBlYXQ6IEluZmluaXR5IG9uIGEgdGltZWxpbmUncyBjaGlsZHJlbiBtdXN0IGZsYWcgdGhhdCB0aW1lbGluZSBpbnRlcm5hbGx5IGFuZCBhZmZlY3QgaXRzIHRvdGFsRHVyYXRpb24sIG90aGVyd2lzZSBpdCdsbCBzdG9wIGluIHRoZSBuZWdhdGl2ZSBkaXJlY3Rpb24gd2hlbiByZWFjaGluZyB0aGUgc3RhcnQuXG4gICAgICB0aGlzLl9yRGVsYXkgPSB2YXJzLnJlcGVhdERlbGF5IHx8IDA7XG4gICAgICB0aGlzLl95b3lvID0gISF2YXJzLnlveW8gfHwgISF2YXJzLnlveW9FYXNlO1xuICAgIH1cblxuICAgIHRoaXMuX3RzID0gMTtcblxuICAgIF9zZXREdXJhdGlvbih0aGlzLCArdmFycy5kdXJhdGlvbiwgMSwgMSk7XG5cbiAgICB0aGlzLmRhdGEgPSB2YXJzLmRhdGE7XG5cbiAgICBpZiAoX2NvbnRleHQpIHtcbiAgICAgIHRoaXMuX2N0eCA9IF9jb250ZXh0O1xuXG4gICAgICBfY29udGV4dC5kYXRhLnB1c2godGhpcyk7XG4gICAgfVxuXG4gICAgX3RpY2tlckFjdGl2ZSB8fCBfdGlja2VyLndha2UoKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBBbmltYXRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5kZWxheSA9IGZ1bmN0aW9uIGRlbGF5KHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlIHx8IHZhbHVlID09PSAwKSB7XG4gICAgICB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5zbW9vdGhDaGlsZFRpbWluZyAmJiB0aGlzLnN0YXJ0VGltZSh0aGlzLl9zdGFydCArIHZhbHVlIC0gdGhpcy5fZGVsYXkpO1xuICAgICAgdGhpcy5fZGVsYXkgPSB2YWx1ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9kZWxheTtcbiAgfTtcblxuICBfcHJvdG8uZHVyYXRpb24gPSBmdW5jdGlvbiBkdXJhdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy50b3RhbER1cmF0aW9uKHRoaXMuX3JlcGVhdCA+IDAgPyB2YWx1ZSArICh2YWx1ZSArIHRoaXMuX3JEZWxheSkgKiB0aGlzLl9yZXBlYXQgOiB2YWx1ZSkgOiB0aGlzLnRvdGFsRHVyYXRpb24oKSAmJiB0aGlzLl9kdXI7XG4gIH07XG5cbiAgX3Byb3RvLnRvdGFsRHVyYXRpb24gPSBmdW5jdGlvbiB0b3RhbER1cmF0aW9uKHZhbHVlKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdER1cjtcbiAgICB9XG5cbiAgICB0aGlzLl9kaXJ0eSA9IDA7XG4gICAgcmV0dXJuIF9zZXREdXJhdGlvbih0aGlzLCB0aGlzLl9yZXBlYXQgPCAwID8gdmFsdWUgOiAodmFsdWUgLSB0aGlzLl9yZXBlYXQgKiB0aGlzLl9yRGVsYXkpIC8gKHRoaXMuX3JlcGVhdCArIDEpKTtcbiAgfTtcblxuICBfcHJvdG8udG90YWxUaW1lID0gZnVuY3Rpb24gdG90YWxUaW1lKF90b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgX3dha2UoKTtcblxuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RUaW1lO1xuICAgIH1cblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLl9kcDtcblxuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LnNtb290aENoaWxkVGltaW5nICYmIHRoaXMuX3RzKSB7XG4gICAgICBfYWxpZ25QbGF5aGVhZCh0aGlzLCBfdG90YWxUaW1lKTtcblxuICAgICAgIXBhcmVudC5fZHAgfHwgcGFyZW50LnBhcmVudCB8fCBfcG9zdEFkZENoZWNrcyhwYXJlbnQsIHRoaXMpOyAvLyBlZGdlIGNhc2U6IGlmIHRoaXMgaXMgYSBjaGlsZCBvZiBhIHRpbWVsaW5lIHRoYXQgYWxyZWFkeSBjb21wbGV0ZWQsIGZvciBleGFtcGxlLCB3ZSBtdXN0IHJlLWFjdGl2YXRlIHRoZSBwYXJlbnQuXG4gICAgICAvL2luIGNhc2UgYW55IG9mIHRoZSBhbmNlc3RvciB0aW1lbGluZXMgaGFkIGNvbXBsZXRlZCBidXQgc2hvdWxkIG5vdyBiZSBlbmFibGVkLCB3ZSBzaG91bGQgcmVzZXQgdGhlaXIgdG90YWxUaW1lKCkgd2hpY2ggd2lsbCBhbHNvIGVuc3VyZSB0aGF0IHRoZXkncmUgbGluZWQgdXAgcHJvcGVybHkgYW5kIGVuYWJsZWQuIFNraXAgZm9yIGFuaW1hdGlvbnMgdGhhdCBhcmUgb24gdGhlIHJvb3QgKHdhc3RlZnVsKS4gRXhhbXBsZTogYSBUaW1lbGluZUxpdGUuZXhwb3J0Um9vdCgpIGlzIHBlcmZvcm1lZCB3aGVuIHRoZXJlJ3MgYSBwYXVzZWQgdHdlZW4gb24gdGhlIHJvb3QsIHRoZSBleHBvcnQgd2lsbCBub3QgY29tcGxldGUgdW50aWwgdGhhdCB0d2VlbiBpcyB1bnBhdXNlZCwgYnV0IGltYWdpbmUgYSBjaGlsZCBnZXRzIHJlc3RhcnRlZCBsYXRlciwgYWZ0ZXIgYWxsIFt1bnBhdXNlZF0gdHdlZW5zIGhhdmUgY29tcGxldGVkLiBUaGUgc3RhcnQgb2YgdGhhdCBjaGlsZCB3b3VsZCBnZXQgcHVzaGVkIG91dCwgYnV0IG9uZSBvZiB0aGUgYW5jZXN0b3JzIG1heSBoYXZlIGNvbXBsZXRlZC5cblxuICAgICAgd2hpbGUgKHBhcmVudCAmJiBwYXJlbnQucGFyZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnQucGFyZW50Ll90aW1lICE9PSBwYXJlbnQuX3N0YXJ0ICsgKHBhcmVudC5fdHMgPj0gMCA/IHBhcmVudC5fdFRpbWUgLyBwYXJlbnQuX3RzIDogKHBhcmVudC50b3RhbER1cmF0aW9uKCkgLSBwYXJlbnQuX3RUaW1lKSAvIC1wYXJlbnQuX3RzKSkge1xuICAgICAgICAgIHBhcmVudC50b3RhbFRpbWUocGFyZW50Ll90VGltZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMucGFyZW50ICYmIHRoaXMuX2RwLmF1dG9SZW1vdmVDaGlsZHJlbiAmJiAodGhpcy5fdHMgPiAwICYmIF90b3RhbFRpbWUgPCB0aGlzLl90RHVyIHx8IHRoaXMuX3RzIDwgMCAmJiBfdG90YWxUaW1lID4gMCB8fCAhdGhpcy5fdER1ciAmJiAhX3RvdGFsVGltZSkpIHtcbiAgICAgICAgLy9pZiB0aGUgYW5pbWF0aW9uIGRvZXNuJ3QgaGF2ZSBhIHBhcmVudCwgcHV0IGl0IGJhY2sgaW50byBpdHMgbGFzdCBwYXJlbnQgKHJlY29yZGVkIGFzIF9kcCBmb3IgZXhhY3RseSBjYXNlcyBsaWtlIHRoaXMpLiBMaW1pdCB0byBwYXJlbnRzIHdpdGggYXV0b1JlbW92ZUNoaWxkcmVuIChsaWtlIGdsb2JhbFRpbWVsaW5lKSBzbyB0aGF0IGlmIHRoZSB1c2VyIG1hbnVhbGx5IHJlbW92ZXMgYW4gYW5pbWF0aW9uIGZyb20gYSB0aW1lbGluZSBhbmQgdGhlbiBhbHRlcnMgaXRzIHBsYXloZWFkLCBpdCBkb2Vzbid0IGdldCBhZGRlZCBiYWNrIGluLlxuICAgICAgICBfYWRkVG9UaW1lbGluZSh0aGlzLl9kcCwgdGhpcywgdGhpcy5fc3RhcnQgLSB0aGlzLl9kZWxheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3RUaW1lICE9PSBfdG90YWxUaW1lIHx8ICF0aGlzLl9kdXIgJiYgIXN1cHByZXNzRXZlbnRzIHx8IHRoaXMuX2luaXR0ZWQgJiYgTWF0aC5hYnModGhpcy5felRpbWUpID09PSBfdGlueU51bSB8fCAhX3RvdGFsVGltZSAmJiAhdGhpcy5faW5pdHRlZCAmJiAodGhpcy5hZGQgfHwgdGhpcy5fcHRMb29rdXApKSB7XG4gICAgICAvLyBjaGVjayBmb3IgX3B0TG9va3VwIG9uIGEgVHdlZW4gaW5zdGFuY2UgdG8gZW5zdXJlIGl0IGhhcyBhY3R1YWxseSBmaW5pc2hlZCBiZWluZyBpbnN0YW50aWF0ZWQsIG90aGVyd2lzZSBpZiB0aGlzLnJldmVyc2UoKSBnZXRzIGNhbGxlZCBpbiB0aGUgQW5pbWF0aW9uIGNvbnN0cnVjdG9yLCBpdCBjb3VsZCB0cmlnZ2VyIGEgcmVuZGVyKCkgaGVyZSBldmVuIHRob3VnaCB0aGUgX3RhcmdldHMgd2VyZW4ndCBwb3B1bGF0ZWQsIHRodXMgd2hlbiBfaW5pdCgpIGlzIGNhbGxlZCB0aGVyZSB3b24ndCBiZSBhbnkgUHJvcFR3ZWVucyAoaXQnbGwgYWN0IGxpa2UgdGhlIHR3ZWVuIGlzIG5vbi1mdW5jdGlvbmFsKVxuICAgICAgdGhpcy5fdHMgfHwgKHRoaXMuX3BUaW1lID0gX3RvdGFsVGltZSk7IC8vIG90aGVyd2lzZSwgaWYgYW4gYW5pbWF0aW9uIGlzIHBhdXNlZCwgdGhlbiB0aGUgcGxheWhlYWQgaXMgbW92ZWQgYmFjayB0byB6ZXJvLCB0aGVuIHJlc3VtZWQsIGl0J2QgcmV2ZXJ0IGJhY2sgdG8gdGhlIG9yaWdpbmFsIHRpbWUgYXQgdGhlIHBhdXNlXG4gICAgICAvL2lmICghdGhpcy5fbG9jaykgeyAvLyBhdm9pZCBlbmRsZXNzIHJlY3Vyc2lvbiAobm90IHN1cmUgd2UgbmVlZCB0aGlzIHlldCBvciBpZiBpdCdzIHdvcnRoIHRoZSBwZXJmb3JtYW5jZSBoaXQpXG4gICAgICAvLyAgIHRoaXMuX2xvY2sgPSAxO1xuXG4gICAgICBfbGF6eVNhZmVSZW5kZXIodGhpcywgX3RvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMpOyAvLyAgIHRoaXMuX2xvY2sgPSAwO1xuICAgICAgLy99XG5cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8udGltZSA9IGZ1bmN0aW9uIHRpbWUodmFsdWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnRvdGFsVGltZShNYXRoLm1pbih0aGlzLnRvdGFsRHVyYXRpb24oKSwgdmFsdWUgKyBfZWxhcHNlZEN5Y2xlRHVyYXRpb24odGhpcykpICUgKHRoaXMuX2R1ciArIHRoaXMuX3JEZWxheSkgfHwgKHZhbHVlID8gdGhpcy5fZHVyIDogMCksIHN1cHByZXNzRXZlbnRzKSA6IHRoaXMuX3RpbWU7IC8vIG5vdGU6IGlmIHRoZSBtb2R1bHVzIHJlc3VsdHMgaW4gMCwgdGhlIHBsYXloZWFkIGNvdWxkIGJlIGV4YWN0bHkgYXQgdGhlIGVuZCBvciB0aGUgYmVnaW5uaW5nLCBhbmQgd2UgYWx3YXlzIGRlZmVyIHRvIHRoZSBFTkQgd2l0aCBhIG5vbi16ZXJvIHZhbHVlLCBvdGhlcndpc2UgaWYgeW91IHNldCB0aGUgdGltZSgpIHRvIHRoZSB2ZXJ5IGVuZCAoZHVyYXRpb24oKSksIGl0IHdvdWxkIHJlbmRlciBhdCB0aGUgU1RBUlQhXG4gIH07XG5cbiAgX3Byb3RvLnRvdGFsUHJvZ3Jlc3MgPSBmdW5jdGlvbiB0b3RhbFByb2dyZXNzKHZhbHVlLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy50b3RhbFRpbWUodGhpcy50b3RhbER1cmF0aW9uKCkgKiB2YWx1ZSwgc3VwcHJlc3NFdmVudHMpIDogdGhpcy50b3RhbER1cmF0aW9uKCkgPyBNYXRoLm1pbigxLCB0aGlzLl90VGltZSAvIHRoaXMuX3REdXIpIDogdGhpcy5yYXRpbztcbiAgfTtcblxuICBfcHJvdG8ucHJvZ3Jlc3MgPSBmdW5jdGlvbiBwcm9ncmVzcyh2YWx1ZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMudG90YWxUaW1lKHRoaXMuZHVyYXRpb24oKSAqICh0aGlzLl95b3lvICYmICEodGhpcy5pdGVyYXRpb24oKSAmIDEpID8gMSAtIHZhbHVlIDogdmFsdWUpICsgX2VsYXBzZWRDeWNsZUR1cmF0aW9uKHRoaXMpLCBzdXBwcmVzc0V2ZW50cykgOiB0aGlzLmR1cmF0aW9uKCkgPyBNYXRoLm1pbigxLCB0aGlzLl90aW1lIC8gdGhpcy5fZHVyKSA6IHRoaXMucmF0aW87XG4gIH07XG5cbiAgX3Byb3RvLml0ZXJhdGlvbiA9IGZ1bmN0aW9uIGl0ZXJhdGlvbih2YWx1ZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICB2YXIgY3ljbGVEdXJhdGlvbiA9IHRoaXMuZHVyYXRpb24oKSArIHRoaXMuX3JEZWxheTtcblxuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy50b3RhbFRpbWUodGhpcy5fdGltZSArICh2YWx1ZSAtIDEpICogY3ljbGVEdXJhdGlvbiwgc3VwcHJlc3NFdmVudHMpIDogdGhpcy5fcmVwZWF0ID8gX2FuaW1hdGlvbkN5Y2xlKHRoaXMuX3RUaW1lLCBjeWNsZUR1cmF0aW9uKSArIDEgOiAxO1xuICB9IC8vIHBvdGVudGlhbCBmdXR1cmUgYWRkaXRpb246XG4gIC8vIGlzUGxheWluZ0JhY2t3YXJkcygpIHtcbiAgLy8gXHRsZXQgYW5pbWF0aW9uID0gdGhpcyxcbiAgLy8gXHRcdG9yaWVudGF0aW9uID0gMTsgLy8gMSA9IGZvcndhcmQsIC0xID0gYmFja3dhcmRcbiAgLy8gXHR3aGlsZSAoYW5pbWF0aW9uKSB7XG4gIC8vIFx0XHRvcmllbnRhdGlvbiAqPSBhbmltYXRpb24ucmV2ZXJzZWQoKSB8fCAoYW5pbWF0aW9uLnJlcGVhdCgpICYmICEoYW5pbWF0aW9uLml0ZXJhdGlvbigpICYgMSkpID8gLTEgOiAxO1xuICAvLyBcdFx0YW5pbWF0aW9uID0gYW5pbWF0aW9uLnBhcmVudDtcbiAgLy8gXHR9XG4gIC8vIFx0cmV0dXJuIG9yaWVudGF0aW9uIDwgMDtcbiAgLy8gfVxuICA7XG5cbiAgX3Byb3RvLnRpbWVTY2FsZSA9IGZ1bmN0aW9uIHRpbWVTY2FsZSh2YWx1ZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3J0cyA9PT0gLV90aW55TnVtID8gMCA6IHRoaXMuX3J0czsgLy8gcmVjb3JkZWQgdGltZVNjYWxlLiBTcGVjaWFsIGNhc2U6IGlmIHNvbWVvbmUgY2FsbHMgcmV2ZXJzZSgpIG9uIGFuIGFuaW1hdGlvbiB3aXRoIHRpbWVTY2FsZSBvZiAwLCB3ZSBhc3NpZ24gaXQgLV90aW55TnVtIHRvIHJlbWVtYmVyIGl0J3MgcmV2ZXJzZWQuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3J0cyA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHZhciB0VGltZSA9IHRoaXMucGFyZW50ICYmIHRoaXMuX3RzID8gX3BhcmVudFRvQ2hpbGRUb3RhbFRpbWUodGhpcy5wYXJlbnQuX3RpbWUsIHRoaXMpIDogdGhpcy5fdFRpbWU7IC8vIG1ha2Ugc3VyZSB0byBkbyB0aGUgcGFyZW50VG9DaGlsZFRvdGFsVGltZSgpIEJFRk9SRSBzZXR0aW5nIHRoZSBuZXcgX3RzIGJlY2F1c2UgdGhlIG9sZCBvbmUgbXVzdCBiZSB1c2VkIGluIHRoYXQgY2FsY3VsYXRpb24uXG4gICAgLy8gZnV0dXJlIGFkZGl0aW9uPyBVcCBzaWRlOiBmYXN0IGFuZCBtaW5pbWFsIGZpbGUgc2l6ZS4gRG93biBzaWRlOiBvbmx5IHdvcmtzIG9uIHRoaXMgYW5pbWF0aW9uOyBpZiBhIHRpbWVsaW5lIGlzIHJldmVyc2VkLCBmb3IgZXhhbXBsZSwgaXRzIGNoaWxkcmVucycgb25SZXZlcnNlIHdvdWxkbid0IGdldCBjYWxsZWQuXG4gICAgLy8oK3ZhbHVlIDwgMCAmJiB0aGlzLl9ydHMgPj0gMCkgJiYgX2NhbGxiYWNrKHRoaXMsIFwib25SZXZlcnNlXCIsIHRydWUpO1xuICAgIC8vIHByaW9yaXRpemUgcmVuZGVyaW5nIHdoZXJlIHRoZSBwYXJlbnQncyBwbGF5aGVhZCBsaW5lcyB1cCBpbnN0ZWFkIG9mIHRoaXMuX3RUaW1lIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgYSB0d2VlbiB0aGF0J3MgYW5pbWF0aW5nIGFub3RoZXIgdHdlZW4ncyB0aW1lU2NhbGUgaW4gdGhlIHNhbWUgcmVuZGVyaW5nIGxvb3AgKHNhbWUgcGFyZW50KSwgdGh1cyBpZiB0aGUgdGltZVNjYWxlIHR3ZWVuIHJlbmRlcnMgZmlyc3QsIGl0IHdvdWxkIGFsdGVyIF9zdGFydCBCRUZPUkUgX3RUaW1lIHdhcyBzZXQgb24gdGhhdCB0aWNrIChpbiB0aGUgcmVuZGVyaW5nIGxvb3ApLCBlZmZlY3RpdmVseSBmcmVlemluZyBpdCB1bnRpbCB0aGUgdGltZVNjYWxlIHR3ZWVuIGZpbmlzaGVzLlxuXG4gICAgdGhpcy5fcnRzID0gK3ZhbHVlIHx8IDA7XG4gICAgdGhpcy5fdHMgPSB0aGlzLl9wcyB8fCB2YWx1ZSA9PT0gLV90aW55TnVtID8gMCA6IHRoaXMuX3J0czsgLy8gX3RzIGlzIHRoZSBmdW5jdGlvbmFsIHRpbWVTY2FsZSB3aGljaCB3b3VsZCBiZSAwIGlmIHRoZSBhbmltYXRpb24gaXMgcGF1c2VkLlxuXG4gICAgdGhpcy50b3RhbFRpbWUoX2NsYW1wKC1NYXRoLmFicyh0aGlzLl9kZWxheSksIHRoaXMuX3REdXIsIHRUaW1lKSwgdHJ1ZSk7XG5cbiAgICBfc2V0RW5kKHRoaXMpOyAvLyBpZiBwYXJlbnQuc21vb3RoQ2hpbGRUaW1pbmcgd2FzIGZhbHNlLCB0aGUgZW5kIHRpbWUgZGlkbid0IGdldCB1cGRhdGVkIGluIHRoZSBfYWxpZ25QbGF5aGVhZCgpIG1ldGhvZCwgc28gZG8gaXQgaGVyZS5cblxuXG4gICAgcmV0dXJuIF9yZWNhY2hlQW5jZXN0b3JzKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90by5wYXVzZWQgPSBmdW5jdGlvbiBwYXVzZWQodmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9wcztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcHMgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9wcyA9IHZhbHVlO1xuXG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcFRpbWUgPSB0aGlzLl90VGltZSB8fCBNYXRoLm1heCgtdGhpcy5fZGVsYXksIHRoaXMucmF3VGltZSgpKTsgLy8gaWYgdGhlIHBhdXNlIG9jY3VycyBkdXJpbmcgdGhlIGRlbGF5IHBoYXNlLCBtYWtlIHN1cmUgdGhhdCdzIGZhY3RvcmVkIGluIHdoZW4gcmVzdW1pbmcuXG5cbiAgICAgICAgdGhpcy5fdHMgPSB0aGlzLl9hY3QgPSAwOyAvLyBfdHMgaXMgdGhlIGZ1bmN0aW9uYWwgdGltZVNjYWxlLCBzbyBhIHBhdXNlZCB0d2VlbiB3b3VsZCBlZmZlY3RpdmVseSBoYXZlIGEgdGltZVNjYWxlIG9mIDAuIFdlIHJlY29yZCB0aGUgXCJyZWFsXCIgdGltZVNjYWxlIGFzIF9ydHMgKHJlY29yZGVkIHRpbWUgc2NhbGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfd2FrZSgpO1xuXG4gICAgICAgIHRoaXMuX3RzID0gdGhpcy5fcnRzOyAvL29ubHkgZGVmZXIgdG8gX3BUaW1lIChwYXVzZVRpbWUpIGlmIHRUaW1lIGlzIHplcm8uIFJlbWVtYmVyLCBzb21lb25lIGNvdWxkIHBhdXNlKCkgYW4gYW5pbWF0aW9uLCB0aGVuIHNjcnViIHRoZSBwbGF5aGVhZCBhbmQgcmVzdW1lKCkuIElmIHRoZSBwYXJlbnQgZG9lc24ndCBoYXZlIHNtb290aENoaWxkVGltaW5nLCB3ZSByZW5kZXIgYXQgdGhlIHJhd1RpbWUoKSBiZWNhdXNlIHRoZSBzdGFydFRpbWUgd29uJ3QgZ2V0IHVwZGF0ZWQuXG5cbiAgICAgICAgdGhpcy50b3RhbFRpbWUodGhpcy5wYXJlbnQgJiYgIXRoaXMucGFyZW50LnNtb290aENoaWxkVGltaW5nID8gdGhpcy5yYXdUaW1lKCkgOiB0aGlzLl90VGltZSB8fCB0aGlzLl9wVGltZSwgdGhpcy5wcm9ncmVzcygpID09PSAxICYmIE1hdGguYWJzKHRoaXMuX3pUaW1lKSAhPT0gX3RpbnlOdW0gJiYgKHRoaXMuX3RUaW1lIC09IF90aW55TnVtKSk7IC8vIGVkZ2UgY2FzZTogYW5pbWF0aW9uLnByb2dyZXNzKDEpLnBhdXNlKCkucGxheSgpIHdvdWxkbid0IHJlbmRlciBhZ2FpbiBiZWNhdXNlIHRoZSBwbGF5aGVhZCBpcyBhbHJlYWR5IGF0IHRoZSBlbmQsIGJ1dCB0aGUgY2FsbCB0byB0b3RhbFRpbWUoKSBiZWxvdyB3aWxsIGFkZCBpdCBiYWNrIHRvIGl0cyBwYXJlbnQuLi5hbmQgbm90IHJlbW92ZSBpdCBhZ2FpbiAoc2luY2UgcmVtb3Zpbmcgb25seSBoYXBwZW5zIHVwb24gcmVuZGVyaW5nIGF0IGEgbmV3IHRpbWUpLiBPZmZzZXR0aW5nIHRoZSBfdFRpbWUgc2xpZ2h0bHkgaXMgZG9uZSBzaW1wbHkgdG8gY2F1c2UgdGhlIGZpbmFsIHJlbmRlciBpbiB0b3RhbFRpbWUoKSB0aGF0J2xsIHBvcCBpdCBvZmYgaXRzIHRpbWVsaW5lIChpZiBhdXRvUmVtb3ZlQ2hpbGRyZW4gaXMgdHJ1ZSwgb2YgY291cnNlKS4gQ2hlY2sgdG8gbWFrZSBzdXJlIF96VGltZSBpc24ndCAtX3RpbnlOdW0gdG8gYXZvaWQgYW4gZWRnZSBjYXNlIHdoZXJlIHRoZSBwbGF5aGVhZCBpcyBwdXNoZWQgdG8gdGhlIGVuZCBidXQgSU5TSURFIGEgdHdlZW4vY2FsbGJhY2ssIHRoZSB0aW1lbGluZSBpdHNlbGYgaXMgcGF1c2VkIHRodXMgaGFsdGluZyByZW5kZXJpbmcgYW5kIGxlYXZpbmcgYSBmZXcgdW5yZW5kZXJlZC4gV2hlbiByZXN1bWluZywgaXQgd291bGRuJ3QgcmVuZGVyIHRob3NlIG90aGVyd2lzZS5cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uc3RhcnRUaW1lID0gZnVuY3Rpb24gc3RhcnRUaW1lKHZhbHVlKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3N0YXJ0ID0gdmFsdWU7XG4gICAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQgfHwgdGhpcy5fZHA7XG4gICAgICBwYXJlbnQgJiYgKHBhcmVudC5fc29ydCB8fCAhdGhpcy5wYXJlbnQpICYmIF9hZGRUb1RpbWVsaW5lKHBhcmVudCwgdGhpcywgdmFsdWUgLSB0aGlzLl9kZWxheSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fc3RhcnQ7XG4gIH07XG5cbiAgX3Byb3RvLmVuZFRpbWUgPSBmdW5jdGlvbiBlbmRUaW1lKGluY2x1ZGVSZXBlYXRzKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0ICsgKF9pc05vdEZhbHNlKGluY2x1ZGVSZXBlYXRzKSA/IHRoaXMudG90YWxEdXJhdGlvbigpIDogdGhpcy5kdXJhdGlvbigpKSAvIE1hdGguYWJzKHRoaXMuX3RzIHx8IDEpO1xuICB9O1xuXG4gIF9wcm90by5yYXdUaW1lID0gZnVuY3Rpb24gcmF3VGltZSh3cmFwUmVwZWF0cykge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudCB8fCB0aGlzLl9kcDsgLy8gX2RwID0gZGV0YWNoZWQgcGFyZW50XG5cbiAgICByZXR1cm4gIXBhcmVudCA/IHRoaXMuX3RUaW1lIDogd3JhcFJlcGVhdHMgJiYgKCF0aGlzLl90cyB8fCB0aGlzLl9yZXBlYXQgJiYgdGhpcy5fdGltZSAmJiB0aGlzLnRvdGFsUHJvZ3Jlc3MoKSA8IDEpID8gdGhpcy5fdFRpbWUgJSAodGhpcy5fZHVyICsgdGhpcy5fckRlbGF5KSA6ICF0aGlzLl90cyA/IHRoaXMuX3RUaW1lIDogX3BhcmVudFRvQ2hpbGRUb3RhbFRpbWUocGFyZW50LnJhd1RpbWUod3JhcFJlcGVhdHMpLCB0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8ucmV2ZXJ0ID0gZnVuY3Rpb24gcmV2ZXJ0KGNvbmZpZykge1xuICAgIGlmIChjb25maWcgPT09IHZvaWQgMCkge1xuICAgICAgY29uZmlnID0gX3JldmVydENvbmZpZztcbiAgICB9XG5cbiAgICB2YXIgcHJldklzUmV2ZXJ0aW5nID0gX3JldmVydGluZztcbiAgICBfcmV2ZXJ0aW5nID0gY29uZmlnO1xuXG4gICAgaWYgKHRoaXMuX2luaXR0ZWQgfHwgdGhpcy5fc3RhcnRBdCkge1xuICAgICAgdGhpcy50aW1lbGluZSAmJiB0aGlzLnRpbWVsaW5lLnJldmVydChjb25maWcpO1xuICAgICAgdGhpcy50b3RhbFRpbWUoLTAuMDEsIGNvbmZpZy5zdXBwcmVzc0V2ZW50cyk7XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhICE9PSBcIm5lc3RlZFwiICYmIGNvbmZpZy5raWxsICE9PSBmYWxzZSAmJiB0aGlzLmtpbGwoKTtcbiAgICBfcmV2ZXJ0aW5nID0gcHJldklzUmV2ZXJ0aW5nO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5nbG9iYWxUaW1lID0gZnVuY3Rpb24gZ2xvYmFsVGltZShyYXdUaW1lKSB7XG4gICAgdmFyIGFuaW1hdGlvbiA9IHRoaXMsXG4gICAgICAgIHRpbWUgPSBhcmd1bWVudHMubGVuZ3RoID8gcmF3VGltZSA6IGFuaW1hdGlvbi5yYXdUaW1lKCk7XG5cbiAgICB3aGlsZSAoYW5pbWF0aW9uKSB7XG4gICAgICB0aW1lID0gYW5pbWF0aW9uLl9zdGFydCArIHRpbWUgLyAoYW5pbWF0aW9uLl90cyB8fCAxKTtcbiAgICAgIGFuaW1hdGlvbiA9IGFuaW1hdGlvbi5fZHA7XG4gICAgfVxuXG4gICAgcmV0dXJuICF0aGlzLnBhcmVudCAmJiB0aGlzLl9zYXQgPyB0aGlzLl9zYXQudmFycy5pbW1lZGlhdGVSZW5kZXIgPyAtSW5maW5pdHkgOiB0aGlzLl9zYXQuZ2xvYmFsVGltZShyYXdUaW1lKSA6IHRpbWU7IC8vIHRoZSBfc3RhcnRBdCB0d2VlbnMgZm9yIC5mcm9tVG8oKSBhbmQgLmZyb20oKSB0aGF0IGhhdmUgaW1tZWRpYXRlUmVuZGVyIHNob3VsZCBhbHdheXMgYmUgRklSU1QgaW4gdGhlIHRpbWVsaW5lIChpbXBvcnRhbnQgZm9yIGNvbnRleHQucmV2ZXJ0KCkpLiBcIl9zYXRcIiBzdGFuZHMgZm9yIF9zdGFydEF0VHdlZW4sIHJlZmVycmluZyB0byB0aGUgcGFyZW50IHR3ZWVuIHRoYXQgY3JlYXRlZCB0aGUgX3N0YXJ0QXQuIFdlIG11c3QgZGlzY2VybiBpZiB0aGF0IHR3ZWVuIGhhZCBpbW1lZGlhdGVSZW5kZXIgc28gdGhhdCB3ZSBjYW4ga25vdyB3aGV0aGVyIG9yIG5vdCB0byBwcmlvcml0aXplIGl0IGluIHJldmVydCgpLlxuICB9O1xuXG4gIF9wcm90by5yZXBlYXQgPSBmdW5jdGlvbiByZXBlYXQodmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fcmVwZWF0ID0gdmFsdWUgPT09IEluZmluaXR5ID8gLTIgOiB2YWx1ZTtcbiAgICAgIHJldHVybiBfb25VcGRhdGVUb3RhbER1cmF0aW9uKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9yZXBlYXQgPT09IC0yID8gSW5maW5pdHkgOiB0aGlzLl9yZXBlYXQ7XG4gIH07XG5cbiAgX3Byb3RvLnJlcGVhdERlbGF5ID0gZnVuY3Rpb24gcmVwZWF0RGVsYXkodmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgdmFyIHRpbWUgPSB0aGlzLl90aW1lO1xuICAgICAgdGhpcy5fckRlbGF5ID0gdmFsdWU7XG5cbiAgICAgIF9vblVwZGF0ZVRvdGFsRHVyYXRpb24odGhpcyk7XG5cbiAgICAgIHJldHVybiB0aW1lID8gdGhpcy50aW1lKHRpbWUpIDogdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fckRlbGF5O1xuICB9O1xuXG4gIF9wcm90by55b3lvID0gZnVuY3Rpb24geW95byh2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl95b3lvID0gdmFsdWU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5feW95bztcbiAgfTtcblxuICBfcHJvdG8uc2VlayA9IGZ1bmN0aW9uIHNlZWsocG9zaXRpb24sIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgcmV0dXJuIHRoaXMudG90YWxUaW1lKF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKSwgX2lzTm90RmFsc2Uoc3VwcHJlc3NFdmVudHMpKTtcbiAgfTtcblxuICBfcHJvdG8ucmVzdGFydCA9IGZ1bmN0aW9uIHJlc3RhcnQoaW5jbHVkZURlbGF5LCBzdXBwcmVzc0V2ZW50cykge1xuICAgIHJldHVybiB0aGlzLnBsYXkoKS50b3RhbFRpbWUoaW5jbHVkZURlbGF5ID8gLXRoaXMuX2RlbGF5IDogMCwgX2lzTm90RmFsc2Uoc3VwcHJlc3NFdmVudHMpKTtcbiAgfTtcblxuICBfcHJvdG8ucGxheSA9IGZ1bmN0aW9uIHBsYXkoZnJvbSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICBmcm9tICE9IG51bGwgJiYgdGhpcy5zZWVrKGZyb20sIHN1cHByZXNzRXZlbnRzKTtcbiAgICByZXR1cm4gdGhpcy5yZXZlcnNlZChmYWxzZSkucGF1c2VkKGZhbHNlKTtcbiAgfTtcblxuICBfcHJvdG8ucmV2ZXJzZSA9IGZ1bmN0aW9uIHJldmVyc2UoZnJvbSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICBmcm9tICE9IG51bGwgJiYgdGhpcy5zZWVrKGZyb20gfHwgdGhpcy50b3RhbER1cmF0aW9uKCksIHN1cHByZXNzRXZlbnRzKTtcbiAgICByZXR1cm4gdGhpcy5yZXZlcnNlZCh0cnVlKS5wYXVzZWQoZmFsc2UpO1xuICB9O1xuXG4gIF9wcm90by5wYXVzZSA9IGZ1bmN0aW9uIHBhdXNlKGF0VGltZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICBhdFRpbWUgIT0gbnVsbCAmJiB0aGlzLnNlZWsoYXRUaW1lLCBzdXBwcmVzc0V2ZW50cyk7XG4gICAgcmV0dXJuIHRoaXMucGF1c2VkKHRydWUpO1xuICB9O1xuXG4gIF9wcm90by5yZXN1bWUgPSBmdW5jdGlvbiByZXN1bWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF1c2VkKGZhbHNlKTtcbiAgfTtcblxuICBfcHJvdG8ucmV2ZXJzZWQgPSBmdW5jdGlvbiByZXZlcnNlZCh2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAhIXZhbHVlICE9PSB0aGlzLnJldmVyc2VkKCkgJiYgdGhpcy50aW1lU2NhbGUoLXRoaXMuX3J0cyB8fCAodmFsdWUgPyAtX3RpbnlOdW0gOiAwKSk7IC8vIGluIGNhc2UgdGltZVNjYWxlIGlzIHplcm8sIHJldmVyc2luZyB3b3VsZCBoYXZlIG5vIGVmZmVjdCBzbyB3ZSB1c2UgX3RpbnlOdW0uXG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9ydHMgPCAwO1xuICB9O1xuXG4gIF9wcm90by5pbnZhbGlkYXRlID0gZnVuY3Rpb24gaW52YWxpZGF0ZSgpIHtcbiAgICB0aGlzLl9pbml0dGVkID0gdGhpcy5fYWN0ID0gMDtcbiAgICB0aGlzLl96VGltZSA9IC1fdGlueU51bTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uaXNBY3RpdmUgPSBmdW5jdGlvbiBpc0FjdGl2ZSgpIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQgfHwgdGhpcy5fZHAsXG4gICAgICAgIHN0YXJ0ID0gdGhpcy5fc3RhcnQsXG4gICAgICAgIHJhd1RpbWU7XG4gICAgcmV0dXJuICEhKCFwYXJlbnQgfHwgdGhpcy5fdHMgJiYgdGhpcy5faW5pdHRlZCAmJiBwYXJlbnQuaXNBY3RpdmUoKSAmJiAocmF3VGltZSA9IHBhcmVudC5yYXdUaW1lKHRydWUpKSA+PSBzdGFydCAmJiByYXdUaW1lIDwgdGhpcy5lbmRUaW1lKHRydWUpIC0gX3RpbnlOdW0pO1xuICB9O1xuXG4gIF9wcm90by5ldmVudENhbGxiYWNrID0gZnVuY3Rpb24gZXZlbnRDYWxsYmFjayh0eXBlLCBjYWxsYmFjaywgcGFyYW1zKSB7XG4gICAgdmFyIHZhcnMgPSB0aGlzLnZhcnM7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgZGVsZXRlIHZhcnNbdHlwZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXJzW3R5cGVdID0gY2FsbGJhY2s7XG4gICAgICAgIHBhcmFtcyAmJiAodmFyc1t0eXBlICsgXCJQYXJhbXNcIl0gPSBwYXJhbXMpO1xuICAgICAgICB0eXBlID09PSBcIm9uVXBkYXRlXCIgJiYgKHRoaXMuX29uVXBkYXRlID0gY2FsbGJhY2spO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyc1t0eXBlXTtcbiAgfTtcblxuICBfcHJvdG8udGhlbiA9IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICB2YXIgZiA9IF9pc0Z1bmN0aW9uKG9uRnVsZmlsbGVkKSA/IG9uRnVsZmlsbGVkIDogX3Bhc3NUaHJvdWdoLFxuICAgICAgICAgIF9yZXNvbHZlID0gZnVuY3Rpb24gX3Jlc29sdmUoKSB7XG4gICAgICAgIHZhciBfdGhlbiA9IHNlbGYudGhlbjtcbiAgICAgICAgc2VsZi50aGVuID0gbnVsbDsgLy8gdGVtcG9yYXJpbHkgbnVsbCB0aGUgdGhlbigpIG1ldGhvZCB0byBhdm9pZCBhbiBpbmZpbml0ZSBsb29wIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL2dyZWVuc29jay9HU0FQL2lzc3Vlcy8zMjIpXG5cbiAgICAgICAgX2lzRnVuY3Rpb24oZikgJiYgKGYgPSBmKHNlbGYpKSAmJiAoZi50aGVuIHx8IGYgPT09IHNlbGYpICYmIChzZWxmLnRoZW4gPSBfdGhlbik7XG4gICAgICAgIHJlc29sdmUoZik7XG4gICAgICAgIHNlbGYudGhlbiA9IF90aGVuO1xuICAgICAgfTtcblxuICAgICAgaWYgKHNlbGYuX2luaXR0ZWQgJiYgc2VsZi50b3RhbFByb2dyZXNzKCkgPT09IDEgJiYgc2VsZi5fdHMgPj0gMCB8fCAhc2VsZi5fdFRpbWUgJiYgc2VsZi5fdHMgPCAwKSB7XG4gICAgICAgIF9yZXNvbHZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLl9wcm9tID0gX3Jlc29sdmU7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmtpbGwgPSBmdW5jdGlvbiBraWxsKCkge1xuICAgIF9pbnRlcnJ1cHQodGhpcyk7XG4gIH07XG5cbiAgcmV0dXJuIEFuaW1hdGlvbjtcbn0oKTtcblxuX3NldERlZmF1bHRzKEFuaW1hdGlvbi5wcm90b3R5cGUsIHtcbiAgX3RpbWU6IDAsXG4gIF9zdGFydDogMCxcbiAgX2VuZDogMCxcbiAgX3RUaW1lOiAwLFxuICBfdER1cjogMCxcbiAgX2RpcnR5OiAwLFxuICBfcmVwZWF0OiAwLFxuICBfeW95bzogZmFsc2UsXG4gIHBhcmVudDogbnVsbCxcbiAgX2luaXR0ZWQ6IGZhbHNlLFxuICBfckRlbGF5OiAwLFxuICBfdHM6IDEsXG4gIF9kcDogMCxcbiAgcmF0aW86IDAsXG4gIF96VGltZTogLV90aW55TnVtLFxuICBfcHJvbTogMCxcbiAgX3BzOiBmYWxzZSxcbiAgX3J0czogMVxufSk7XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVElNRUxJTkVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5cbmV4cG9ydCB2YXIgVGltZWxpbmUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9BbmltYXRpb24pIHtcbiAgX2luaGVyaXRzTG9vc2UoVGltZWxpbmUsIF9BbmltYXRpb24pO1xuXG4gIGZ1bmN0aW9uIFRpbWVsaW5lKHZhcnMsIHBvc2l0aW9uKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgaWYgKHZhcnMgPT09IHZvaWQgMCkge1xuICAgICAgdmFycyA9IHt9O1xuICAgIH1cblxuICAgIF90aGlzID0gX0FuaW1hdGlvbi5jYWxsKHRoaXMsIHZhcnMpIHx8IHRoaXM7XG4gICAgX3RoaXMubGFiZWxzID0ge307XG4gICAgX3RoaXMuc21vb3RoQ2hpbGRUaW1pbmcgPSAhIXZhcnMuc21vb3RoQ2hpbGRUaW1pbmc7XG4gICAgX3RoaXMuYXV0b1JlbW92ZUNoaWxkcmVuID0gISF2YXJzLmF1dG9SZW1vdmVDaGlsZHJlbjtcbiAgICBfdGhpcy5fc29ydCA9IF9pc05vdEZhbHNlKHZhcnMuc29ydENoaWxkcmVuKTtcbiAgICBfZ2xvYmFsVGltZWxpbmUgJiYgX2FkZFRvVGltZWxpbmUodmFycy5wYXJlbnQgfHwgX2dsb2JhbFRpbWVsaW5lLCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgcG9zaXRpb24pO1xuICAgIHZhcnMucmV2ZXJzZWQgJiYgX3RoaXMucmV2ZXJzZSgpO1xuICAgIHZhcnMucGF1c2VkICYmIF90aGlzLnBhdXNlZCh0cnVlKTtcbiAgICB2YXJzLnNjcm9sbFRyaWdnZXIgJiYgX3Njcm9sbFRyaWdnZXIoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIHZhcnMuc2Nyb2xsVHJpZ2dlcik7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90bzIgPSBUaW1lbGluZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvMi50byA9IGZ1bmN0aW9uIHRvKHRhcmdldHMsIHZhcnMsIHBvc2l0aW9uKSB7XG4gICAgX2NyZWF0ZVR3ZWVuVHlwZSgwLCBhcmd1bWVudHMsIHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5mcm9tID0gZnVuY3Rpb24gZnJvbSh0YXJnZXRzLCB2YXJzLCBwb3NpdGlvbikge1xuICAgIF9jcmVhdGVUd2VlblR5cGUoMSwgYXJndW1lbnRzLCB0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuZnJvbVRvID0gZnVuY3Rpb24gZnJvbVRvKHRhcmdldHMsIGZyb21WYXJzLCB0b1ZhcnMsIHBvc2l0aW9uKSB7XG4gICAgX2NyZWF0ZVR3ZWVuVHlwZSgyLCBhcmd1bWVudHMsIHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5zZXQgPSBmdW5jdGlvbiBzZXQodGFyZ2V0cywgdmFycywgcG9zaXRpb24pIHtcbiAgICB2YXJzLmR1cmF0aW9uID0gMDtcbiAgICB2YXJzLnBhcmVudCA9IHRoaXM7XG4gICAgX2luaGVyaXREZWZhdWx0cyh2YXJzKS5yZXBlYXREZWxheSB8fCAodmFycy5yZXBlYXQgPSAwKTtcbiAgICB2YXJzLmltbWVkaWF0ZVJlbmRlciA9ICEhdmFycy5pbW1lZGlhdGVSZW5kZXI7XG4gICAgbmV3IFR3ZWVuKHRhcmdldHMsIHZhcnMsIF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKSwgMSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5jYWxsID0gZnVuY3Rpb24gY2FsbChjYWxsYmFjaywgcGFyYW1zLCBwb3NpdGlvbikge1xuICAgIHJldHVybiBfYWRkVG9UaW1lbGluZSh0aGlzLCBUd2Vlbi5kZWxheWVkQ2FsbCgwLCBjYWxsYmFjaywgcGFyYW1zKSwgcG9zaXRpb24pO1xuICB9IC8vT05MWSBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSEgTWF5YmUgZGVsZXRlP1xuICA7XG5cbiAgX3Byb3RvMi5zdGFnZ2VyVG8gPSBmdW5jdGlvbiBzdGFnZ2VyVG8odGFyZ2V0cywgZHVyYXRpb24sIHZhcnMsIHN0YWdnZXIsIHBvc2l0aW9uLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zKSB7XG4gICAgdmFycy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgIHZhcnMuc3RhZ2dlciA9IHZhcnMuc3RhZ2dlciB8fCBzdGFnZ2VyO1xuICAgIHZhcnMub25Db21wbGV0ZSA9IG9uQ29tcGxldGVBbGw7XG4gICAgdmFycy5vbkNvbXBsZXRlUGFyYW1zID0gb25Db21wbGV0ZUFsbFBhcmFtcztcbiAgICB2YXJzLnBhcmVudCA9IHRoaXM7XG4gICAgbmV3IFR3ZWVuKHRhcmdldHMsIHZhcnMsIF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5zdGFnZ2VyRnJvbSA9IGZ1bmN0aW9uIHN0YWdnZXJGcm9tKHRhcmdldHMsIGR1cmF0aW9uLCB2YXJzLCBzdGFnZ2VyLCBwb3NpdGlvbiwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcykge1xuICAgIHZhcnMucnVuQmFja3dhcmRzID0gMTtcbiAgICBfaW5oZXJpdERlZmF1bHRzKHZhcnMpLmltbWVkaWF0ZVJlbmRlciA9IF9pc05vdEZhbHNlKHZhcnMuaW1tZWRpYXRlUmVuZGVyKTtcbiAgICByZXR1cm4gdGhpcy5zdGFnZ2VyVG8odGFyZ2V0cywgZHVyYXRpb24sIHZhcnMsIHN0YWdnZXIsIHBvc2l0aW9uLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zKTtcbiAgfTtcblxuICBfcHJvdG8yLnN0YWdnZXJGcm9tVG8gPSBmdW5jdGlvbiBzdGFnZ2VyRnJvbVRvKHRhcmdldHMsIGR1cmF0aW9uLCBmcm9tVmFycywgdG9WYXJzLCBzdGFnZ2VyLCBwb3NpdGlvbiwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcykge1xuICAgIHRvVmFycy5zdGFydEF0ID0gZnJvbVZhcnM7XG4gICAgX2luaGVyaXREZWZhdWx0cyh0b1ZhcnMpLmltbWVkaWF0ZVJlbmRlciA9IF9pc05vdEZhbHNlKHRvVmFycy5pbW1lZGlhdGVSZW5kZXIpO1xuICAgIHJldHVybiB0aGlzLnN0YWdnZXJUbyh0YXJnZXRzLCBkdXJhdGlvbiwgdG9WYXJzLCBzdGFnZ2VyLCBwb3NpdGlvbiwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcyk7XG4gIH07XG5cbiAgX3Byb3RvMi5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIodG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpIHtcbiAgICB2YXIgcHJldlRpbWUgPSB0aGlzLl90aW1lLFxuICAgICAgICB0RHVyID0gdGhpcy5fZGlydHkgPyB0aGlzLnRvdGFsRHVyYXRpb24oKSA6IHRoaXMuX3REdXIsXG4gICAgICAgIGR1ciA9IHRoaXMuX2R1cixcbiAgICAgICAgdFRpbWUgPSB0b3RhbFRpbWUgPD0gMCA/IDAgOiBfcm91bmRQcmVjaXNlKHRvdGFsVGltZSksXG4gICAgICAgIC8vIGlmIGEgcGF1c2VkIHRpbWVsaW5lIGlzIHJlc3VtZWQgKG9yIGl0cyBfc3RhcnQgaXMgdXBkYXRlZCBmb3IgYW5vdGhlciByZWFzb24uLi53aGljaCByb3VuZHMgaXQpLCB0aGF0IGNvdWxkIHJlc3VsdCBpbiB0aGUgcGxheWhlYWQgc2hpZnRpbmcgYSAqKnRpbnkqKiBhbW91bnQgYW5kIGEgemVyby1kdXJhdGlvbiBjaGlsZCBhdCB0aGF0IHNwb3QgbWF5IGdldCByZW5kZXJlZCBhdCBhIGRpZmZlcmVudCByYXRpbywgbGlrZSBpdHMgdG90YWxUaW1lIGluIHJlbmRlcigpIG1heSBiZSAxZS0xNyBpbnN0ZWFkIG9mIDAsIGZvciBleGFtcGxlLlxuICAgIGNyb3NzaW5nU3RhcnQgPSB0aGlzLl96VGltZSA8IDAgIT09IHRvdGFsVGltZSA8IDAgJiYgKHRoaXMuX2luaXR0ZWQgfHwgIWR1ciksXG4gICAgICAgIHRpbWUsXG4gICAgICAgIGNoaWxkLFxuICAgICAgICBuZXh0LFxuICAgICAgICBpdGVyYXRpb24sXG4gICAgICAgIGN5Y2xlRHVyYXRpb24sXG4gICAgICAgIHByZXZQYXVzZWQsXG4gICAgICAgIHBhdXNlVHdlZW4sXG4gICAgICAgIHRpbWVTY2FsZSxcbiAgICAgICAgcHJldlN0YXJ0LFxuICAgICAgICBwcmV2SXRlcmF0aW9uLFxuICAgICAgICB5b3lvLFxuICAgICAgICBpc1lveW87XG4gICAgdGhpcyAhPT0gX2dsb2JhbFRpbWVsaW5lICYmIHRUaW1lID4gdER1ciAmJiB0b3RhbFRpbWUgPj0gMCAmJiAodFRpbWUgPSB0RHVyKTtcblxuICAgIGlmICh0VGltZSAhPT0gdGhpcy5fdFRpbWUgfHwgZm9yY2UgfHwgY3Jvc3NpbmdTdGFydCkge1xuICAgICAgaWYgKHByZXZUaW1lICE9PSB0aGlzLl90aW1lICYmIGR1cikge1xuICAgICAgICAvL2lmIHRvdGFsRHVyYXRpb24oKSBmaW5kcyBhIGNoaWxkIHdpdGggYSBuZWdhdGl2ZSBzdGFydFRpbWUgYW5kIHNtb290aENoaWxkVGltaW5nIGlzIHRydWUsIHRoaW5ncyBnZXQgc2hpZnRlZCBhcm91bmQgaW50ZXJuYWxseSBzbyB3ZSBuZWVkIHRvIGFkanVzdCB0aGUgdGltZSBhY2NvcmRpbmdseS4gRm9yIGV4YW1wbGUsIGlmIGEgdHdlZW4gc3RhcnRzIGF0IC0zMCB3ZSBtdXN0IHNoaWZ0IEVWRVJZVEhJTkcgZm9yd2FyZCAzMCBzZWNvbmRzIGFuZCBtb3ZlIHRoaXMgdGltZWxpbmUncyBzdGFydFRpbWUgYmFja3dhcmQgYnkgMzAgc2Vjb25kcyBzbyB0aGF0IHRoaW5ncyBhbGlnbiB3aXRoIHRoZSBwbGF5aGVhZCAobm8ganVtcCkuXG4gICAgICAgIHRUaW1lICs9IHRoaXMuX3RpbWUgLSBwcmV2VGltZTtcbiAgICAgICAgdG90YWxUaW1lICs9IHRoaXMuX3RpbWUgLSBwcmV2VGltZTtcbiAgICAgIH1cblxuICAgICAgdGltZSA9IHRUaW1lO1xuICAgICAgcHJldlN0YXJ0ID0gdGhpcy5fc3RhcnQ7XG4gICAgICB0aW1lU2NhbGUgPSB0aGlzLl90cztcbiAgICAgIHByZXZQYXVzZWQgPSAhdGltZVNjYWxlO1xuXG4gICAgICBpZiAoY3Jvc3NpbmdTdGFydCkge1xuICAgICAgICBkdXIgfHwgKHByZXZUaW1lID0gdGhpcy5felRpbWUpOyAvL3doZW4gdGhlIHBsYXloZWFkIGFycml2ZXMgYXQgRVhBQ1RMWSB0aW1lIDAgKHJpZ2h0IG9uIHRvcCkgb2YgYSB6ZXJvLWR1cmF0aW9uIHRpbWVsaW5lLCB3ZSBuZWVkIHRvIGRpc2Nlcm4gaWYgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIHNvIHRoYXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgYWdhaW4gKG5leHQgdGltZSksIGl0J2xsIHRyaWdnZXIgdGhlIGNhbGxiYWNrLiBJZiBldmVudHMgYXJlIE5PVCBzdXBwcmVzc2VkLCBvYnZpb3VzbHkgdGhlIGNhbGxiYWNrIHdvdWxkIGJlIHRyaWdnZXJlZCBpbiB0aGlzIHJlbmRlci4gQmFzaWNhbGx5LCB0aGUgY2FsbGJhY2sgc2hvdWxkIGZpcmUgZWl0aGVyIHdoZW4gdGhlIHBsYXloZWFkIEFSUklWRVMgb3IgTEVBVkVTIHRoaXMgZXhhY3Qgc3BvdCwgbm90IGJvdGguIEltYWdpbmUgZG9pbmcgYSB0aW1lbGluZS5zZWVrKDApIGFuZCB0aGVyZSdzIGEgY2FsbGJhY2sgdGhhdCBzaXRzIGF0IDAuIFNpbmNlIGV2ZW50cyBhcmUgc3VwcHJlc3NlZCBvbiB0aGF0IHNlZWsoKSBieSBkZWZhdWx0LCBub3RoaW5nIHdpbGwgZmlyZSwgYnV0IHdoZW4gdGhlIHBsYXloZWFkIG1vdmVzIG9mZiBvZiB0aGF0IHBvc2l0aW9uLCB0aGUgY2FsbGJhY2sgc2hvdWxkIGZpcmUuIFRoaXMgYmVoYXZpb3IgaXMgd2hhdCBwZW9wbGUgaW50dWl0aXZlbHkgZXhwZWN0LlxuXG4gICAgICAgICh0b3RhbFRpbWUgfHwgIXN1cHByZXNzRXZlbnRzKSAmJiAodGhpcy5felRpbWUgPSB0b3RhbFRpbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fcmVwZWF0KSB7XG4gICAgICAgIC8vYWRqdXN0IHRoZSB0aW1lIGZvciByZXBlYXRzIGFuZCB5b3lvc1xuICAgICAgICB5b3lvID0gdGhpcy5feW95bztcbiAgICAgICAgY3ljbGVEdXJhdGlvbiA9IGR1ciArIHRoaXMuX3JEZWxheTtcblxuICAgICAgICBpZiAodGhpcy5fcmVwZWF0IDwgLTEgJiYgdG90YWxUaW1lIDwgMCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnRvdGFsVGltZShjeWNsZUR1cmF0aW9uICogMTAwICsgdG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGltZSA9IF9yb3VuZFByZWNpc2UodFRpbWUgJSBjeWNsZUR1cmF0aW9uKTsgLy9yb3VuZCB0byBhdm9pZCBmbG9hdGluZyBwb2ludCBlcnJvcnMuICg0ICUgMC44IHNob3VsZCBiZSAwIGJ1dCBzb21lIGJyb3dzZXJzIHJlcG9ydCBpdCBhcyAwLjc5OTk5OTk5ISlcblxuICAgICAgICBpZiAodFRpbWUgPT09IHREdXIpIHtcbiAgICAgICAgICAvLyB0aGUgdER1ciA9PT0gdFRpbWUgaXMgZm9yIGVkZ2UgY2FzZXMgd2hlcmUgdGhlcmUncyBhIGxlbmd0aHkgZGVjaW1hbCBvbiB0aGUgZHVyYXRpb24gYW5kIGl0IG1heSByZWFjaCB0aGUgdmVyeSBlbmQgYnV0IHRoZSB0aW1lIGlzIHJlbmRlcmVkIGFzIG5vdC1xdWl0ZS10aGVyZSAocmVtZW1iZXIsIHREdXIgaXMgcm91bmRlZCB0byA0IGRlY2ltYWxzIHdoZXJlYXMgZHVyIGlzbid0KVxuICAgICAgICAgIGl0ZXJhdGlvbiA9IHRoaXMuX3JlcGVhdDtcbiAgICAgICAgICB0aW1lID0gZHVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZXJhdGlvbiA9IH5+KHRUaW1lIC8gY3ljbGVEdXJhdGlvbik7XG5cbiAgICAgICAgICBpZiAoaXRlcmF0aW9uICYmIGl0ZXJhdGlvbiA9PT0gdFRpbWUgLyBjeWNsZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aW1lID0gZHVyO1xuICAgICAgICAgICAgaXRlcmF0aW9uLS07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGltZSA+IGR1ciAmJiAodGltZSA9IGR1cik7XG4gICAgICAgIH1cblxuICAgICAgICBwcmV2SXRlcmF0aW9uID0gX2FuaW1hdGlvbkN5Y2xlKHRoaXMuX3RUaW1lLCBjeWNsZUR1cmF0aW9uKTtcbiAgICAgICAgIXByZXZUaW1lICYmIHRoaXMuX3RUaW1lICYmIHByZXZJdGVyYXRpb24gIT09IGl0ZXJhdGlvbiAmJiB0aGlzLl90VGltZSAtIHByZXZJdGVyYXRpb24gKiBjeWNsZUR1cmF0aW9uIC0gdGhpcy5fZHVyIDw9IDAgJiYgKHByZXZJdGVyYXRpb24gPSBpdGVyYXRpb24pOyAvLyBlZGdlIGNhc2UgLSBpZiBzb21lb25lIGRvZXMgYWRkUGF1c2UoKSBhdCB0aGUgdmVyeSBiZWdpbm5pbmcgb2YgYSByZXBlYXRpbmcgdGltZWxpbmUsIHRoYXQgcGF1c2UgaXMgdGVjaG5pY2FsbHkgYXQgdGhlIHNhbWUgc3BvdCBhcyB0aGUgZW5kIHdoaWNoIGNhdXNlcyB0aGlzLl90aW1lIHRvIGdldCBzZXQgdG8gMCB3aGVuIHRoZSB0b3RhbFRpbWUgd291bGQgbm9ybWFsbHkgcGxhY2UgdGhlIHBsYXloZWFkIGF0IHRoZSBlbmQuIFNlZSBodHRwczovL2dyZWVuc29jay5jb20vZm9ydW1zL3RvcGljLzIzODIzLWNsb3NpbmctbmF2LWFuaW1hdGlvbi1ub3Qtd29ya2luZy1vbi1pZS1hbmQtaXBob25lLTYtbWF5YmUtb3RoZXItb2xkZXItYnJvd3Nlci8/dGFiPWNvbW1lbnRzI2NvbW1lbnQtMTEzMDA1IGFsc28sIHRoaXMuX3RUaW1lIC0gcHJldkl0ZXJhdGlvbiAqIGN5Y2xlRHVyYXRpb24gLSB0aGlzLl9kdXIgPD0gMCBqdXN0IGNoZWNrcyB0byBtYWtlIHN1cmUgaXQgd2Fzbid0IHByZXZpb3VzbHkgaW4gdGhlIFwicmVwZWF0RGVsYXlcIiBwb3J0aW9uXG5cbiAgICAgICAgaWYgKHlveW8gJiYgaXRlcmF0aW9uICYgMSkge1xuICAgICAgICAgIHRpbWUgPSBkdXIgLSB0aW1lO1xuICAgICAgICAgIGlzWW95byA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgLypcbiAgICAgICAgbWFrZSBzdXJlIGNoaWxkcmVuIGF0IHRoZSBlbmQvYmVnaW5uaW5nIG9mIHRoZSB0aW1lbGluZSBhcmUgcmVuZGVyZWQgcHJvcGVybHkuIElmLCBmb3IgZXhhbXBsZSxcbiAgICAgICAgYSAzLXNlY29uZCBsb25nIHRpbWVsaW5lIHJlbmRlcmVkIGF0IDIuOSBzZWNvbmRzIHByZXZpb3VzbHksIGFuZCBub3cgcmVuZGVycyBhdCAzLjIgc2Vjb25kcyAod2hpY2hcbiAgICAgICAgd291bGQgZ2V0IHRyYW5zbGF0ZWQgdG8gMi44IHNlY29uZHMgaWYgdGhlIHRpbWVsaW5lIHlveW9zIG9yIDAuMiBzZWNvbmRzIGlmIGl0IGp1c3QgcmVwZWF0cyksIHRoZXJlXG4gICAgICAgIGNvdWxkIGJlIGEgY2FsbGJhY2sgb3IgYSBzaG9ydCB0d2VlbiB0aGF0J3MgYXQgMi45NSBvciAzIHNlY29uZHMgaW4gd2hpY2ggd291bGRuJ3QgcmVuZGVyLiBTb1xuICAgICAgICB3ZSBuZWVkIHRvIHB1c2ggdGhlIHRpbWVsaW5lIHRvIHRoZSBlbmQgKGFuZC9vciBiZWdpbm5pbmcgZGVwZW5kaW5nIG9uIGl0cyB5b3lvIHZhbHVlKS4gQWxzbyB3ZSBtdXN0XG4gICAgICAgIGVuc3VyZSB0aGF0IHplcm8tZHVyYXRpb24gdHdlZW5zIGF0IHRoZSB2ZXJ5IGJlZ2lubmluZyBvciBlbmQgb2YgdGhlIFRpbWVsaW5lIHdvcmsuXG4gICAgICAgICovXG5cblxuICAgICAgICBpZiAoaXRlcmF0aW9uICE9PSBwcmV2SXRlcmF0aW9uICYmICF0aGlzLl9sb2NrKSB7XG4gICAgICAgICAgdmFyIHJld2luZGluZyA9IHlveW8gJiYgcHJldkl0ZXJhdGlvbiAmIDEsXG4gICAgICAgICAgICAgIGRvZXNXcmFwID0gcmV3aW5kaW5nID09PSAoeW95byAmJiBpdGVyYXRpb24gJiAxKTtcbiAgICAgICAgICBpdGVyYXRpb24gPCBwcmV2SXRlcmF0aW9uICYmIChyZXdpbmRpbmcgPSAhcmV3aW5kaW5nKTtcbiAgICAgICAgICBwcmV2VGltZSA9IHJld2luZGluZyA/IDAgOiB0VGltZSAlIGR1ciA/IGR1ciA6IHRUaW1lOyAvLyBpZiB0aGUgcGxheWhlYWQgaXMgbGFuZGluZyBleGFjdGx5IGF0IHRoZSBlbmQgb2YgYW4gaXRlcmF0aW9uLCB1c2UgdGhhdCB0b3RhbFRpbWUgcmF0aGVyIHRoYW4gb25seSB0aGUgZHVyYXRpb24sIG90aGVyd2lzZSBpdCdsbCBza2lwIHRoZSAybmQgcmVuZGVyIHNpbmNlIGl0J3MgZWZmZWN0aXZlbHkgYXQgdGhlIHNhbWUgdGltZS5cblxuICAgICAgICAgIHRoaXMuX2xvY2sgPSAxO1xuICAgICAgICAgIHRoaXMucmVuZGVyKHByZXZUaW1lIHx8IChpc1lveW8gPyAwIDogX3JvdW5kUHJlY2lzZShpdGVyYXRpb24gKiBjeWNsZUR1cmF0aW9uKSksIHN1cHByZXNzRXZlbnRzLCAhZHVyKS5fbG9jayA9IDA7XG4gICAgICAgICAgdGhpcy5fdFRpbWUgPSB0VGltZTsgLy8gaWYgYSB1c2VyIGdldHMgdGhlIGl0ZXJhdGlvbigpIGluc2lkZSB0aGUgb25SZXBlYXQsIGZvciBleGFtcGxlLCBpdCBzaG91bGQgYmUgYWNjdXJhdGUuXG5cbiAgICAgICAgICAhc3VwcHJlc3NFdmVudHMgJiYgdGhpcy5wYXJlbnQgJiYgX2NhbGxiYWNrKHRoaXMsIFwib25SZXBlYXRcIik7XG4gICAgICAgICAgdGhpcy52YXJzLnJlcGVhdFJlZnJlc2ggJiYgIWlzWW95byAmJiAodGhpcy5pbnZhbGlkYXRlKCkuX2xvY2sgPSAxKTtcblxuICAgICAgICAgIGlmIChwcmV2VGltZSAmJiBwcmV2VGltZSAhPT0gdGhpcy5fdGltZSB8fCBwcmV2UGF1c2VkICE9PSAhdGhpcy5fdHMgfHwgdGhpcy52YXJzLm9uUmVwZWF0ICYmICF0aGlzLnBhcmVudCAmJiAhdGhpcy5fYWN0KSB7XG4gICAgICAgICAgICAvLyBpZiBwcmV2VGltZSBpcyAwIGFuZCB3ZSByZW5kZXIgYXQgdGhlIHZlcnkgZW5kLCBfdGltZSB3aWxsIGJlIHRoZSBlbmQsIHRodXMgd29uJ3QgbWF0Y2guIFNvIGluIHRoaXMgZWRnZSBjYXNlLCBwcmV2VGltZSB3b24ndCBtYXRjaCBfdGltZSBidXQgdGhhdCdzIG9rYXkuIElmIGl0IGdldHMga2lsbGVkIGluIHRoZSBvblJlcGVhdCwgZWplY3QgYXMgd2VsbC5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGR1ciA9IHRoaXMuX2R1cjsgLy8gaW4gY2FzZSB0aGUgZHVyYXRpb24gY2hhbmdlZCBpbiB0aGUgb25SZXBlYXRcblxuICAgICAgICAgIHREdXIgPSB0aGlzLl90RHVyO1xuXG4gICAgICAgICAgaWYgKGRvZXNXcmFwKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2NrID0gMjtcbiAgICAgICAgICAgIHByZXZUaW1lID0gcmV3aW5kaW5nID8gZHVyIDogLTAuMDAwMTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKHByZXZUaW1lLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMudmFycy5yZXBlYXRSZWZyZXNoICYmICFpc1lveW8gJiYgdGhpcy5pbnZhbGlkYXRlKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbG9jayA9IDA7XG5cbiAgICAgICAgICBpZiAoIXRoaXMuX3RzICYmICFwcmV2UGF1c2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICB9IC8vaW4gb3JkZXIgZm9yIHlveW9FYXNlIHRvIHdvcmsgcHJvcGVybHkgd2hlbiB0aGVyZSdzIGEgc3RhZ2dlciwgd2UgbXVzdCBzd2FwIG91dCB0aGUgZWFzZSBpbiBlYWNoIHN1Yi10d2Vlbi5cblxuXG4gICAgICAgICAgX3Byb3BhZ2F0ZVlveW9FYXNlKHRoaXMsIGlzWW95byk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2hhc1BhdXNlICYmICF0aGlzLl9mb3JjaW5nICYmIHRoaXMuX2xvY2sgPCAyKSB7XG4gICAgICAgIHBhdXNlVHdlZW4gPSBfZmluZE5leHRQYXVzZVR3ZWVuKHRoaXMsIF9yb3VuZFByZWNpc2UocHJldlRpbWUpLCBfcm91bmRQcmVjaXNlKHRpbWUpKTtcblxuICAgICAgICBpZiAocGF1c2VUd2Vlbikge1xuICAgICAgICAgIHRUaW1lIC09IHRpbWUgLSAodGltZSA9IHBhdXNlVHdlZW4uX3N0YXJ0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl90VGltZSA9IHRUaW1lO1xuICAgICAgdGhpcy5fdGltZSA9IHRpbWU7XG4gICAgICB0aGlzLl9hY3QgPSAhdGltZVNjYWxlOyAvL2FzIGxvbmcgYXMgaXQncyBub3QgcGF1c2VkLCBmb3JjZSBpdCB0byBiZSBhY3RpdmUgc28gdGhhdCBpZiB0aGUgdXNlciByZW5kZXJzIGluZGVwZW5kZW50IG9mIHRoZSBwYXJlbnQgdGltZWxpbmUsIGl0J2xsIGJlIGZvcmNlZCB0byByZS1yZW5kZXIgb24gdGhlIG5leHQgdGljay5cblxuICAgICAgaWYgKCF0aGlzLl9pbml0dGVkKSB7XG4gICAgICAgIHRoaXMuX29uVXBkYXRlID0gdGhpcy52YXJzLm9uVXBkYXRlO1xuICAgICAgICB0aGlzLl9pbml0dGVkID0gMTtcbiAgICAgICAgdGhpcy5felRpbWUgPSB0b3RhbFRpbWU7XG4gICAgICAgIHByZXZUaW1lID0gMDsgLy8gdXBvbiBpbml0LCB0aGUgcGxheWhlYWQgc2hvdWxkIGFsd2F5cyBnbyBmb3J3YXJkOyBzb21lb25lIGNvdWxkIGludmFsaWRhdGUoKSBhIGNvbXBsZXRlZCB0aW1lbGluZSBhbmQgdGhlbiBpZiB0aGV5IHJlc3RhcnQoKSwgdGhhdCB3b3VsZCBtYWtlIGNoaWxkIHR3ZWVucyByZW5kZXIgaW4gcmV2ZXJzZSBvcmRlciB3aGljaCBjb3VsZCBsb2NrIGluIHRoZSB3cm9uZyBzdGFydGluZyB2YWx1ZXMgaWYgdGhleSBidWlsZCBvbiBlYWNoIG90aGVyLCBsaWtlIHRsLnRvKG9iaiwge3g6IDEwMH0pLnRvKG9iaiwge3g6IDB9KS5cbiAgICAgIH1cblxuICAgICAgaWYgKCFwcmV2VGltZSAmJiB0aW1lICYmICFzdXBwcmVzc0V2ZW50cyAmJiAhaXRlcmF0aW9uKSB7XG4gICAgICAgIF9jYWxsYmFjayh0aGlzLCBcIm9uU3RhcnRcIik7XG5cbiAgICAgICAgaWYgKHRoaXMuX3RUaW1lICE9PSB0VGltZSkge1xuICAgICAgICAgIC8vIGluIGNhc2UgdGhlIG9uU3RhcnQgdHJpZ2dlcmVkIGEgcmVuZGVyIGF0IGEgZGlmZmVyZW50IHNwb3QsIGVqZWN0LiBMaWtlIGlmIHNvbWVvbmUgZGlkIGFuaW1hdGlvbi5wYXVzZSgwLjUpIG9yIHNvbWV0aGluZyBpbnNpZGUgdGhlIG9uU3RhcnQuXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRpbWUgPj0gcHJldlRpbWUgJiYgdG90YWxUaW1lID49IDApIHtcbiAgICAgICAgY2hpbGQgPSB0aGlzLl9maXJzdDtcblxuICAgICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICBuZXh0ID0gY2hpbGQuX25leHQ7XG5cbiAgICAgICAgICBpZiAoKGNoaWxkLl9hY3QgfHwgdGltZSA+PSBjaGlsZC5fc3RhcnQpICYmIGNoaWxkLl90cyAmJiBwYXVzZVR3ZWVuICE9PSBjaGlsZCkge1xuICAgICAgICAgICAgaWYgKGNoaWxkLnBhcmVudCAhPT0gdGhpcykge1xuICAgICAgICAgICAgICAvLyBhbiBleHRyZW1lIGVkZ2UgY2FzZSAtIHRoZSBjaGlsZCdzIHJlbmRlciBjb3VsZCBkbyBzb21ldGhpbmcgbGlrZSBraWxsKCkgdGhlIFwibmV4dFwiIG9uZSBpbiB0aGUgbGlua2VkIGxpc3QsIG9yIHJlcGFyZW50IGl0LiBJbiB0aGF0IGNhc2Ugd2UgbXVzdCByZS1pbml0aWF0ZSB0aGUgd2hvbGUgcmVuZGVyIHRvIGJlIHNhZmUuXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNoaWxkLnJlbmRlcihjaGlsZC5fdHMgPiAwID8gKHRpbWUgLSBjaGlsZC5fc3RhcnQpICogY2hpbGQuX3RzIDogKGNoaWxkLl9kaXJ0eSA/IGNoaWxkLnRvdGFsRHVyYXRpb24oKSA6IGNoaWxkLl90RHVyKSArICh0aW1lIC0gY2hpbGQuX3N0YXJ0KSAqIGNoaWxkLl90cywgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcblxuICAgICAgICAgICAgaWYgKHRpbWUgIT09IHRoaXMuX3RpbWUgfHwgIXRoaXMuX3RzICYmICFwcmV2UGF1c2VkKSB7XG4gICAgICAgICAgICAgIC8vaW4gY2FzZSBhIHR3ZWVuIHBhdXNlcyBvciBzZWVrcyB0aGUgdGltZWxpbmUgd2hlbiByZW5kZXJpbmcsIGxpa2UgaW5zaWRlIG9mIGFuIG9uVXBkYXRlL29uQ29tcGxldGVcbiAgICAgICAgICAgICAgcGF1c2VUd2VlbiA9IDA7XG4gICAgICAgICAgICAgIG5leHQgJiYgKHRUaW1lICs9IHRoaXMuX3pUaW1lID0gLV90aW55TnVtKTsgLy8gaXQgZGlkbid0IGZpbmlzaCByZW5kZXJpbmcsIHNvIGZsYWcgelRpbWUgYXMgbmVnYXRpdmUgc28gdGhhdCBzbyB0aGF0IHRoZSBuZXh0IHRpbWUgcmVuZGVyKCkgaXMgY2FsbGVkIGl0J2xsIGJlIGZvcmNlZCAodG8gcmVuZGVyIGFueSByZW1haW5pbmcgY2hpbGRyZW4pXG5cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2hpbGQgPSBuZXh0O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IHRoaXMuX2xhc3Q7XG4gICAgICAgIHZhciBhZGp1c3RlZFRpbWUgPSB0b3RhbFRpbWUgPCAwID8gdG90YWxUaW1lIDogdGltZTsgLy93aGVuIHRoZSBwbGF5aGVhZCBnb2VzIGJhY2t3YXJkIGJleW9uZCB0aGUgc3RhcnQgb2YgdGhpcyB0aW1lbGluZSwgd2UgbXVzdCBwYXNzIHRoYXQgaW5mb3JtYXRpb24gZG93biB0byB0aGUgY2hpbGQgYW5pbWF0aW9ucyBzbyB0aGF0IHplcm8tZHVyYXRpb24gdHdlZW5zIGtub3cgd2hldGhlciB0byByZW5kZXIgdGhlaXIgc3RhcnRpbmcgb3IgZW5kaW5nIHZhbHVlcy5cblxuICAgICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICBuZXh0ID0gY2hpbGQuX3ByZXY7XG5cbiAgICAgICAgICBpZiAoKGNoaWxkLl9hY3QgfHwgYWRqdXN0ZWRUaW1lIDw9IGNoaWxkLl9lbmQpICYmIGNoaWxkLl90cyAmJiBwYXVzZVR3ZWVuICE9PSBjaGlsZCkge1xuICAgICAgICAgICAgaWYgKGNoaWxkLnBhcmVudCAhPT0gdGhpcykge1xuICAgICAgICAgICAgICAvLyBhbiBleHRyZW1lIGVkZ2UgY2FzZSAtIHRoZSBjaGlsZCdzIHJlbmRlciBjb3VsZCBkbyBzb21ldGhpbmcgbGlrZSBraWxsKCkgdGhlIFwibmV4dFwiIG9uZSBpbiB0aGUgbGlua2VkIGxpc3QsIG9yIHJlcGFyZW50IGl0LiBJbiB0aGF0IGNhc2Ugd2UgbXVzdCByZS1pbml0aWF0ZSB0aGUgd2hvbGUgcmVuZGVyIHRvIGJlIHNhZmUuXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNoaWxkLnJlbmRlcihjaGlsZC5fdHMgPiAwID8gKGFkanVzdGVkVGltZSAtIGNoaWxkLl9zdGFydCkgKiBjaGlsZC5fdHMgOiAoY2hpbGQuX2RpcnR5ID8gY2hpbGQudG90YWxEdXJhdGlvbigpIDogY2hpbGQuX3REdXIpICsgKGFkanVzdGVkVGltZSAtIGNoaWxkLl9zdGFydCkgKiBjaGlsZC5fdHMsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSB8fCBfcmV2ZXJ0aW5nICYmIChjaGlsZC5faW5pdHRlZCB8fCBjaGlsZC5fc3RhcnRBdCkpOyAvLyBpZiByZXZlcnRpbmcsIHdlIHNob3VsZCBhbHdheXMgZm9yY2UgcmVuZGVycyBvZiBpbml0dGVkIHR3ZWVucyAoYnV0IHJlbWVtYmVyIHRoYXQgLmZyb21UbygpIG9yIC5mcm9tKCkgbWF5IGhhdmUgYSBfc3RhcnRBdCBidXQgbm90IF9pbml0dGVkIHlldCkuIElmLCBmb3IgZXhhbXBsZSwgYSAuZnJvbVRvKCkgdHdlZW4gd2l0aCBhIHN0YWdnZXIgKHdoaWNoIGNyZWF0ZXMgYW4gaW50ZXJuYWwgdGltZWxpbmUpIGdldHMgcmV2ZXJ0ZWQgQkVGT1JFIHNvbWUgb2YgaXRzIGNoaWxkIHR3ZWVucyByZW5kZXIgZm9yIHRoZSBmaXJzdCB0aW1lLCBpdCBtYXkgbm90IHByb3Blcmx5IHRyaWdnZXIgdGhlbSB0byByZXZlcnQuXG5cbiAgICAgICAgICAgIGlmICh0aW1lICE9PSB0aGlzLl90aW1lIHx8ICF0aGlzLl90cyAmJiAhcHJldlBhdXNlZCkge1xuICAgICAgICAgICAgICAvL2luIGNhc2UgYSB0d2VlbiBwYXVzZXMgb3Igc2Vla3MgdGhlIHRpbWVsaW5lIHdoZW4gcmVuZGVyaW5nLCBsaWtlIGluc2lkZSBvZiBhbiBvblVwZGF0ZS9vbkNvbXBsZXRlXG4gICAgICAgICAgICAgIHBhdXNlVHdlZW4gPSAwO1xuICAgICAgICAgICAgICBuZXh0ICYmICh0VGltZSArPSB0aGlzLl96VGltZSA9IGFkanVzdGVkVGltZSA/IC1fdGlueU51bSA6IF90aW55TnVtKTsgLy8gaXQgZGlkbid0IGZpbmlzaCByZW5kZXJpbmcsIHNvIGFkanVzdCB6VGltZSBzbyB0aGF0IHNvIHRoYXQgdGhlIG5leHQgdGltZSByZW5kZXIoKSBpcyBjYWxsZWQgaXQnbGwgYmUgZm9yY2VkICh0byByZW5kZXIgYW55IHJlbWFpbmluZyBjaGlsZHJlbilcblxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaGlsZCA9IG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHBhdXNlVHdlZW4gJiYgIXN1cHByZXNzRXZlbnRzKSB7XG4gICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgcGF1c2VUd2Vlbi5yZW5kZXIodGltZSA+PSBwcmV2VGltZSA/IDAgOiAtX3RpbnlOdW0pLl96VGltZSA9IHRpbWUgPj0gcHJldlRpbWUgPyAxIDogLTE7XG5cbiAgICAgICAgaWYgKHRoaXMuX3RzKSB7XG4gICAgICAgICAgLy90aGUgY2FsbGJhY2sgcmVzdW1lZCBwbGF5YmFjayEgU28gc2luY2Ugd2UgbWF5IGhhdmUgaGVsZCBiYWNrIHRoZSBwbGF5aGVhZCBkdWUgdG8gd2hlcmUgdGhlIHBhdXNlIGlzIHBvc2l0aW9uZWQsIGdvIGFoZWFkIGFuZCBqdW1wIHRvIHdoZXJlIGl0J3MgU1VQUE9TRUQgdG8gYmUgKGlmIG5vIHBhdXNlIGhhcHBlbmVkKS5cbiAgICAgICAgICB0aGlzLl9zdGFydCA9IHByZXZTdGFydDsgLy9pZiB0aGUgcGF1c2Ugd2FzIGF0IGFuIGVhcmxpZXIgdGltZSBhbmQgdGhlIHVzZXIgcmVzdW1lZCBpbiB0aGUgY2FsbGJhY2ssIGl0IGNvdWxkIHJlcG9zaXRpb24gdGhlIHRpbWVsaW5lIChjaGFuZ2luZyBpdHMgc3RhcnRUaW1lKSwgdGhyb3dpbmcgdGhpbmdzIG9mZiBzbGlnaHRseSwgc28gd2UgbWFrZSBzdXJlIHRoZSBfc3RhcnQgZG9lc24ndCBzaGlmdC5cblxuICAgICAgICAgIF9zZXRFbmQodGhpcyk7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX29uVXBkYXRlICYmICFzdXBwcmVzc0V2ZW50cyAmJiBfY2FsbGJhY2sodGhpcywgXCJvblVwZGF0ZVwiLCB0cnVlKTtcbiAgICAgIGlmICh0VGltZSA9PT0gdER1ciAmJiB0aGlzLl90VGltZSA+PSB0aGlzLnRvdGFsRHVyYXRpb24oKSB8fCAhdFRpbWUgJiYgcHJldlRpbWUpIGlmIChwcmV2U3RhcnQgPT09IHRoaXMuX3N0YXJ0IHx8IE1hdGguYWJzKHRpbWVTY2FsZSkgIT09IE1hdGguYWJzKHRoaXMuX3RzKSkgaWYgKCF0aGlzLl9sb2NrKSB7XG4gICAgICAgIC8vIHJlbWVtYmVyLCBhIGNoaWxkJ3MgY2FsbGJhY2sgbWF5IGFsdGVyIHRoaXMgdGltZWxpbmUncyBwbGF5aGVhZCBvciB0aW1lU2NhbGUgd2hpY2ggaXMgd2h5IHdlIG5lZWQgdG8gYWRkIHNvbWUgb2YgdGhlc2UgY2hlY2tzLlxuICAgICAgICAodG90YWxUaW1lIHx8ICFkdXIpICYmICh0VGltZSA9PT0gdER1ciAmJiB0aGlzLl90cyA+IDAgfHwgIXRUaW1lICYmIHRoaXMuX3RzIDwgMCkgJiYgX3JlbW92ZUZyb21QYXJlbnQodGhpcywgMSk7IC8vIGRvbid0IHJlbW92ZSBpZiB0aGUgdGltZWxpbmUgaXMgcmV2ZXJzZWQgYW5kIHRoZSBwbGF5aGVhZCBpc24ndCBhdCAwLCBvdGhlcndpc2UgdGwucHJvZ3Jlc3MoMSkucmV2ZXJzZSgpIHdvbid0IHdvcmsuIE9ubHkgcmVtb3ZlIGlmIHRoZSBwbGF5aGVhZCBpcyBhdCB0aGUgZW5kIGFuZCB0aW1lU2NhbGUgaXMgcG9zaXRpdmUsIG9yIGlmIHRoZSBwbGF5aGVhZCBpcyBhdCAwIGFuZCB0aGUgdGltZVNjYWxlIGlzIG5lZ2F0aXZlLlxuXG4gICAgICAgIGlmICghc3VwcHJlc3NFdmVudHMgJiYgISh0b3RhbFRpbWUgPCAwICYmICFwcmV2VGltZSkgJiYgKHRUaW1lIHx8IHByZXZUaW1lIHx8ICF0RHVyKSkge1xuICAgICAgICAgIF9jYWxsYmFjayh0aGlzLCB0VGltZSA9PT0gdER1ciAmJiB0b3RhbFRpbWUgPj0gMCA/IFwib25Db21wbGV0ZVwiIDogXCJvblJldmVyc2VDb21wbGV0ZVwiLCB0cnVlKTtcblxuICAgICAgICAgIHRoaXMuX3Byb20gJiYgISh0VGltZSA8IHREdXIgJiYgdGhpcy50aW1lU2NhbGUoKSA+IDApICYmIHRoaXMuX3Byb20oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuYWRkID0gZnVuY3Rpb24gYWRkKGNoaWxkLCBwb3NpdGlvbikge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgX2lzTnVtYmVyKHBvc2l0aW9uKSB8fCAocG9zaXRpb24gPSBfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbiwgY2hpbGQpKTtcblxuICAgIGlmICghKGNoaWxkIGluc3RhbmNlb2YgQW5pbWF0aW9uKSkge1xuICAgICAgaWYgKF9pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICBjaGlsZC5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLmFkZChvYmosIHBvc2l0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBpZiAoX2lzU3RyaW5nKGNoaWxkKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRMYWJlbChjaGlsZCwgcG9zaXRpb24pO1xuICAgICAgfVxuXG4gICAgICBpZiAoX2lzRnVuY3Rpb24oY2hpbGQpKSB7XG4gICAgICAgIGNoaWxkID0gVHdlZW4uZGVsYXllZENhbGwoMCwgY2hpbGQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMgIT09IGNoaWxkID8gX2FkZFRvVGltZWxpbmUodGhpcywgY2hpbGQsIHBvc2l0aW9uKSA6IHRoaXM7IC8vZG9uJ3QgYWxsb3cgYSB0aW1lbGluZSB0byBiZSBhZGRlZCB0byBpdHNlbGYgYXMgYSBjaGlsZCFcbiAgfTtcblxuICBfcHJvdG8yLmdldENoaWxkcmVuID0gZnVuY3Rpb24gZ2V0Q2hpbGRyZW4obmVzdGVkLCB0d2VlbnMsIHRpbWVsaW5lcywgaWdub3JlQmVmb3JlVGltZSkge1xuICAgIGlmIChuZXN0ZWQgPT09IHZvaWQgMCkge1xuICAgICAgbmVzdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHdlZW5zID09PSB2b2lkIDApIHtcbiAgICAgIHR3ZWVucyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRpbWVsaW5lcyA9PT0gdm9pZCAwKSB7XG4gICAgICB0aW1lbGluZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChpZ25vcmVCZWZvcmVUaW1lID09PSB2b2lkIDApIHtcbiAgICAgIGlnbm9yZUJlZm9yZVRpbWUgPSAtX2JpZ051bTtcbiAgICB9XG5cbiAgICB2YXIgYSA9IFtdLFxuICAgICAgICBjaGlsZCA9IHRoaXMuX2ZpcnN0O1xuXG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICBpZiAoY2hpbGQuX3N0YXJ0ID49IGlnbm9yZUJlZm9yZVRpbWUpIHtcbiAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgVHdlZW4pIHtcbiAgICAgICAgICB0d2VlbnMgJiYgYS5wdXNoKGNoaWxkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aW1lbGluZXMgJiYgYS5wdXNoKGNoaWxkKTtcbiAgICAgICAgICBuZXN0ZWQgJiYgYS5wdXNoLmFwcGx5KGEsIGNoaWxkLmdldENoaWxkcmVuKHRydWUsIHR3ZWVucywgdGltZWxpbmVzKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbiAgfTtcblxuICBfcHJvdG8yLmdldEJ5SWQgPSBmdW5jdGlvbiBnZXRCeUlkKGlkKSB7XG4gICAgdmFyIGFuaW1hdGlvbnMgPSB0aGlzLmdldENoaWxkcmVuKDEsIDEsIDEpLFxuICAgICAgICBpID0gYW5pbWF0aW9ucy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBpZiAoYW5pbWF0aW9uc1tpXS52YXJzLmlkID09PSBpZCkge1xuICAgICAgICByZXR1cm4gYW5pbWF0aW9uc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvMi5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoY2hpbGQpIHtcbiAgICBpZiAoX2lzU3RyaW5nKGNoaWxkKSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlTGFiZWwoY2hpbGQpO1xuICAgIH1cblxuICAgIGlmIChfaXNGdW5jdGlvbihjaGlsZCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmtpbGxUd2VlbnNPZihjaGlsZCk7XG4gICAgfVxuXG4gICAgX3JlbW92ZUxpbmtlZExpc3RJdGVtKHRoaXMsIGNoaWxkKTtcblxuICAgIGlmIChjaGlsZCA9PT0gdGhpcy5fcmVjZW50KSB7XG4gICAgICB0aGlzLl9yZWNlbnQgPSB0aGlzLl9sYXN0O1xuICAgIH1cblxuICAgIHJldHVybiBfdW5jYWNoZSh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8yLnRvdGFsVGltZSA9IGZ1bmN0aW9uIHRvdGFsVGltZShfdG90YWxUaW1lMiwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90VGltZTtcbiAgICB9XG5cbiAgICB0aGlzLl9mb3JjaW5nID0gMTtcblxuICAgIGlmICghdGhpcy5fZHAgJiYgdGhpcy5fdHMpIHtcbiAgICAgIC8vc3BlY2lhbCBjYXNlIGZvciB0aGUgZ2xvYmFsIHRpbWVsaW5lIChvciBhbnkgb3RoZXIgdGhhdCBoYXMgbm8gcGFyZW50IG9yIGRldGFjaGVkIHBhcmVudCkuXG4gICAgICB0aGlzLl9zdGFydCA9IF9yb3VuZFByZWNpc2UoX3RpY2tlci50aW1lIC0gKHRoaXMuX3RzID4gMCA/IF90b3RhbFRpbWUyIC8gdGhpcy5fdHMgOiAodGhpcy50b3RhbER1cmF0aW9uKCkgLSBfdG90YWxUaW1lMikgLyAtdGhpcy5fdHMpKTtcbiAgICB9XG5cbiAgICBfQW5pbWF0aW9uLnByb3RvdHlwZS50b3RhbFRpbWUuY2FsbCh0aGlzLCBfdG90YWxUaW1lMiwgc3VwcHJlc3NFdmVudHMpO1xuXG4gICAgdGhpcy5fZm9yY2luZyA9IDA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5hZGRMYWJlbCA9IGZ1bmN0aW9uIGFkZExhYmVsKGxhYmVsLCBwb3NpdGlvbikge1xuICAgIHRoaXMubGFiZWxzW2xhYmVsXSA9IF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLnJlbW92ZUxhYmVsID0gZnVuY3Rpb24gcmVtb3ZlTGFiZWwobGFiZWwpIHtcbiAgICBkZWxldGUgdGhpcy5sYWJlbHNbbGFiZWxdO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuYWRkUGF1c2UgPSBmdW5jdGlvbiBhZGRQYXVzZShwb3NpdGlvbiwgY2FsbGJhY2ssIHBhcmFtcykge1xuICAgIHZhciB0ID0gVHdlZW4uZGVsYXllZENhbGwoMCwgY2FsbGJhY2sgfHwgX2VtcHR5RnVuYywgcGFyYW1zKTtcbiAgICB0LmRhdGEgPSBcImlzUGF1c2VcIjtcbiAgICB0aGlzLl9oYXNQYXVzZSA9IDE7XG4gICAgcmV0dXJuIF9hZGRUb1RpbWVsaW5lKHRoaXMsIHQsIF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKSk7XG4gIH07XG5cbiAgX3Byb3RvMi5yZW1vdmVQYXVzZSA9IGZ1bmN0aW9uIHJlbW92ZVBhdXNlKHBvc2l0aW9uKSB7XG4gICAgdmFyIGNoaWxkID0gdGhpcy5fZmlyc3Q7XG4gICAgcG9zaXRpb24gPSBfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbik7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIGlmIChjaGlsZC5fc3RhcnQgPT09IHBvc2l0aW9uICYmIGNoaWxkLmRhdGEgPT09IFwiaXNQYXVzZVwiKSB7XG4gICAgICAgIF9yZW1vdmVGcm9tUGFyZW50KGNoaWxkKTtcbiAgICAgIH1cblxuICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvMi5raWxsVHdlZW5zT2YgPSBmdW5jdGlvbiBraWxsVHdlZW5zT2YodGFyZ2V0cywgcHJvcHMsIG9ubHlBY3RpdmUpIHtcbiAgICB2YXIgdHdlZW5zID0gdGhpcy5nZXRUd2VlbnNPZih0YXJnZXRzLCBvbmx5QWN0aXZlKSxcbiAgICAgICAgaSA9IHR3ZWVucy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBfb3ZlcndyaXRpbmdUd2VlbiAhPT0gdHdlZW5zW2ldICYmIHR3ZWVuc1tpXS5raWxsKHRhcmdldHMsIHByb3BzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLmdldFR3ZWVuc09mID0gZnVuY3Rpb24gZ2V0VHdlZW5zT2YodGFyZ2V0cywgb25seUFjdGl2ZSkge1xuICAgIHZhciBhID0gW10sXG4gICAgICAgIHBhcnNlZFRhcmdldHMgPSB0b0FycmF5KHRhcmdldHMpLFxuICAgICAgICBjaGlsZCA9IHRoaXMuX2ZpcnN0LFxuICAgICAgICBpc0dsb2JhbFRpbWUgPSBfaXNOdW1iZXIob25seUFjdGl2ZSksXG4gICAgICAgIC8vIGEgbnVtYmVyIGlzIGludGVycHJldGVkIGFzIGEgZ2xvYmFsIHRpbWUuIElmIHRoZSBhbmltYXRpb24gc3BhbnNcbiAgICBjaGlsZHJlbjtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgVHdlZW4pIHtcbiAgICAgICAgaWYgKF9hcnJheUNvbnRhaW5zQW55KGNoaWxkLl90YXJnZXRzLCBwYXJzZWRUYXJnZXRzKSAmJiAoaXNHbG9iYWxUaW1lID8gKCFfb3ZlcndyaXRpbmdUd2VlbiB8fCBjaGlsZC5faW5pdHRlZCAmJiBjaGlsZC5fdHMpICYmIGNoaWxkLmdsb2JhbFRpbWUoMCkgPD0gb25seUFjdGl2ZSAmJiBjaGlsZC5nbG9iYWxUaW1lKGNoaWxkLnRvdGFsRHVyYXRpb24oKSkgPiBvbmx5QWN0aXZlIDogIW9ubHlBY3RpdmUgfHwgY2hpbGQuaXNBY3RpdmUoKSkpIHtcbiAgICAgICAgICAvLyBub3RlOiBpZiB0aGlzIGlzIGZvciBvdmVyd3JpdGluZywgaXQgc2hvdWxkIG9ubHkgYmUgZm9yIHR3ZWVucyB0aGF0IGFyZW4ndCBwYXVzZWQgYW5kIGFyZSBpbml0dGVkLlxuICAgICAgICAgIGEucHVzaChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoKGNoaWxkcmVuID0gY2hpbGQuZ2V0VHdlZW5zT2YocGFyc2VkVGFyZ2V0cywgb25seUFjdGl2ZSkpLmxlbmd0aCkge1xuICAgICAgICBhLnB1c2guYXBwbHkoYSwgY2hpbGRyZW4pO1xuICAgICAgfVxuXG4gICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9IC8vIHBvdGVudGlhbCBmdXR1cmUgZmVhdHVyZSAtIHRhcmdldHMoKSBvbiB0aW1lbGluZXNcbiAgLy8gdGFyZ2V0cygpIHtcbiAgLy8gXHRsZXQgcmVzdWx0ID0gW107XG4gIC8vIFx0dGhpcy5nZXRDaGlsZHJlbih0cnVlLCB0cnVlLCBmYWxzZSkuZm9yRWFjaCh0ID0+IHJlc3VsdC5wdXNoKC4uLnQudGFyZ2V0cygpKSk7XG4gIC8vIFx0cmV0dXJuIHJlc3VsdC5maWx0ZXIoKHYsIGkpID0+IHJlc3VsdC5pbmRleE9mKHYpID09PSBpKTtcbiAgLy8gfVxuICA7XG5cbiAgX3Byb3RvMi50d2VlblRvID0gZnVuY3Rpb24gdHdlZW5Ubyhwb3NpdGlvbiwgdmFycykge1xuICAgIHZhcnMgPSB2YXJzIHx8IHt9O1xuXG4gICAgdmFyIHRsID0gdGhpcyxcbiAgICAgICAgZW5kVGltZSA9IF9wYXJzZVBvc2l0aW9uKHRsLCBwb3NpdGlvbiksXG4gICAgICAgIF92YXJzID0gdmFycyxcbiAgICAgICAgc3RhcnRBdCA9IF92YXJzLnN0YXJ0QXQsXG4gICAgICAgIF9vblN0YXJ0ID0gX3ZhcnMub25TdGFydCxcbiAgICAgICAgb25TdGFydFBhcmFtcyA9IF92YXJzLm9uU3RhcnRQYXJhbXMsXG4gICAgICAgIGltbWVkaWF0ZVJlbmRlciA9IF92YXJzLmltbWVkaWF0ZVJlbmRlcixcbiAgICAgICAgaW5pdHRlZCxcbiAgICAgICAgdHdlZW4gPSBUd2Vlbi50byh0bCwgX3NldERlZmF1bHRzKHtcbiAgICAgIGVhc2U6IHZhcnMuZWFzZSB8fCBcIm5vbmVcIixcbiAgICAgIGxhenk6IGZhbHNlLFxuICAgICAgaW1tZWRpYXRlUmVuZGVyOiBmYWxzZSxcbiAgICAgIHRpbWU6IGVuZFRpbWUsXG4gICAgICBvdmVyd3JpdGU6IFwiYXV0b1wiLFxuICAgICAgZHVyYXRpb246IHZhcnMuZHVyYXRpb24gfHwgTWF0aC5hYnMoKGVuZFRpbWUgLSAoc3RhcnRBdCAmJiBcInRpbWVcIiBpbiBzdGFydEF0ID8gc3RhcnRBdC50aW1lIDogdGwuX3RpbWUpKSAvIHRsLnRpbWVTY2FsZSgpKSB8fCBfdGlueU51bSxcbiAgICAgIG9uU3RhcnQ6IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgICAgIHRsLnBhdXNlKCk7XG5cbiAgICAgICAgaWYgKCFpbml0dGVkKSB7XG4gICAgICAgICAgdmFyIGR1cmF0aW9uID0gdmFycy5kdXJhdGlvbiB8fCBNYXRoLmFicygoZW5kVGltZSAtIChzdGFydEF0ICYmIFwidGltZVwiIGluIHN0YXJ0QXQgPyBzdGFydEF0LnRpbWUgOiB0bC5fdGltZSkpIC8gdGwudGltZVNjYWxlKCkpO1xuICAgICAgICAgIHR3ZWVuLl9kdXIgIT09IGR1cmF0aW9uICYmIF9zZXREdXJhdGlvbih0d2VlbiwgZHVyYXRpb24sIDAsIDEpLnJlbmRlcih0d2Vlbi5fdGltZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgaW5pdHRlZCA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBfb25TdGFydCAmJiBfb25TdGFydC5hcHBseSh0d2Vlbiwgb25TdGFydFBhcmFtcyB8fCBbXSk7IC8vaW4gY2FzZSB0aGUgdXNlciBoYWQgYW4gb25TdGFydCBpbiB0aGUgdmFycyAtIHdlIGRvbid0IHdhbnQgdG8gb3ZlcndyaXRlIGl0LlxuICAgICAgfVxuICAgIH0sIHZhcnMpKTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVSZW5kZXIgPyB0d2Vlbi5yZW5kZXIoMCkgOiB0d2VlbjtcbiAgfTtcblxuICBfcHJvdG8yLnR3ZWVuRnJvbVRvID0gZnVuY3Rpb24gdHdlZW5Gcm9tVG8oZnJvbVBvc2l0aW9uLCB0b1Bvc2l0aW9uLCB2YXJzKSB7XG4gICAgcmV0dXJuIHRoaXMudHdlZW5Ubyh0b1Bvc2l0aW9uLCBfc2V0RGVmYXVsdHMoe1xuICAgICAgc3RhcnRBdDoge1xuICAgICAgICB0aW1lOiBfcGFyc2VQb3NpdGlvbih0aGlzLCBmcm9tUG9zaXRpb24pXG4gICAgICB9XG4gICAgfSwgdmFycykpO1xuICB9O1xuXG4gIF9wcm90bzIucmVjZW50ID0gZnVuY3Rpb24gcmVjZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWNlbnQ7XG4gIH07XG5cbiAgX3Byb3RvMi5uZXh0TGFiZWwgPSBmdW5jdGlvbiBuZXh0TGFiZWwoYWZ0ZXJUaW1lKSB7XG4gICAgaWYgKGFmdGVyVGltZSA9PT0gdm9pZCAwKSB7XG4gICAgICBhZnRlclRpbWUgPSB0aGlzLl90aW1lO1xuICAgIH1cblxuICAgIHJldHVybiBfZ2V0TGFiZWxJbkRpcmVjdGlvbih0aGlzLCBfcGFyc2VQb3NpdGlvbih0aGlzLCBhZnRlclRpbWUpKTtcbiAgfTtcblxuICBfcHJvdG8yLnByZXZpb3VzTGFiZWwgPSBmdW5jdGlvbiBwcmV2aW91c0xhYmVsKGJlZm9yZVRpbWUpIHtcbiAgICBpZiAoYmVmb3JlVGltZSA9PT0gdm9pZCAwKSB7XG4gICAgICBiZWZvcmVUaW1lID0gdGhpcy5fdGltZTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2dldExhYmVsSW5EaXJlY3Rpb24odGhpcywgX3BhcnNlUG9zaXRpb24odGhpcywgYmVmb3JlVGltZSksIDEpO1xuICB9O1xuXG4gIF9wcm90bzIuY3VycmVudExhYmVsID0gZnVuY3Rpb24gY3VycmVudExhYmVsKHZhbHVlKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnNlZWsodmFsdWUsIHRydWUpIDogdGhpcy5wcmV2aW91c0xhYmVsKHRoaXMuX3RpbWUgKyBfdGlueU51bSk7XG4gIH07XG5cbiAgX3Byb3RvMi5zaGlmdENoaWxkcmVuID0gZnVuY3Rpb24gc2hpZnRDaGlsZHJlbihhbW91bnQsIGFkanVzdExhYmVscywgaWdub3JlQmVmb3JlVGltZSkge1xuICAgIGlmIChpZ25vcmVCZWZvcmVUaW1lID09PSB2b2lkIDApIHtcbiAgICAgIGlnbm9yZUJlZm9yZVRpbWUgPSAwO1xuICAgIH1cblxuICAgIHZhciBjaGlsZCA9IHRoaXMuX2ZpcnN0LFxuICAgICAgICBsYWJlbHMgPSB0aGlzLmxhYmVscyxcbiAgICAgICAgcDtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgaWYgKGNoaWxkLl9zdGFydCA+PSBpZ25vcmVCZWZvcmVUaW1lKSB7XG4gICAgICAgIGNoaWxkLl9zdGFydCArPSBhbW91bnQ7XG4gICAgICAgIGNoaWxkLl9lbmQgKz0gYW1vdW50O1xuICAgICAgfVxuXG4gICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgIH1cblxuICAgIGlmIChhZGp1c3RMYWJlbHMpIHtcbiAgICAgIGZvciAocCBpbiBsYWJlbHMpIHtcbiAgICAgICAgaWYgKGxhYmVsc1twXSA+PSBpZ25vcmVCZWZvcmVUaW1lKSB7XG4gICAgICAgICAgbGFiZWxzW3BdICs9IGFtb3VudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfdW5jYWNoZSh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8yLmludmFsaWRhdGUgPSBmdW5jdGlvbiBpbnZhbGlkYXRlKHNvZnQpIHtcbiAgICB2YXIgY2hpbGQgPSB0aGlzLl9maXJzdDtcbiAgICB0aGlzLl9sb2NrID0gMDtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgY2hpbGQuaW52YWxpZGF0ZShzb2Z0KTtcbiAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9BbmltYXRpb24ucHJvdG90eXBlLmludmFsaWRhdGUuY2FsbCh0aGlzLCBzb2Z0KTtcbiAgfTtcblxuICBfcHJvdG8yLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoaW5jbHVkZUxhYmVscykge1xuICAgIGlmIChpbmNsdWRlTGFiZWxzID09PSB2b2lkIDApIHtcbiAgICAgIGluY2x1ZGVMYWJlbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBjaGlsZCA9IHRoaXMuX2ZpcnN0LFxuICAgICAgICBuZXh0O1xuXG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICBuZXh0ID0gY2hpbGQuX25leHQ7XG4gICAgICB0aGlzLnJlbW92ZShjaGlsZCk7XG4gICAgICBjaGlsZCA9IG5leHQ7XG4gICAgfVxuXG4gICAgdGhpcy5fZHAgJiYgKHRoaXMuX3RpbWUgPSB0aGlzLl90VGltZSA9IHRoaXMuX3BUaW1lID0gMCk7XG4gICAgaW5jbHVkZUxhYmVscyAmJiAodGhpcy5sYWJlbHMgPSB7fSk7XG4gICAgcmV0dXJuIF91bmNhY2hlKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90bzIudG90YWxEdXJhdGlvbiA9IGZ1bmN0aW9uIHRvdGFsRHVyYXRpb24odmFsdWUpIHtcbiAgICB2YXIgbWF4ID0gMCxcbiAgICAgICAgc2VsZiA9IHRoaXMsXG4gICAgICAgIGNoaWxkID0gc2VsZi5fbGFzdCxcbiAgICAgICAgcHJldlN0YXJ0ID0gX2JpZ051bSxcbiAgICAgICAgcHJldixcbiAgICAgICAgc3RhcnQsXG4gICAgICAgIHBhcmVudDtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gc2VsZi50aW1lU2NhbGUoKHNlbGYuX3JlcGVhdCA8IDAgPyBzZWxmLmR1cmF0aW9uKCkgOiBzZWxmLnRvdGFsRHVyYXRpb24oKSkgLyAoc2VsZi5yZXZlcnNlZCgpID8gLXZhbHVlIDogdmFsdWUpKTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi5fZGlydHkpIHtcbiAgICAgIHBhcmVudCA9IHNlbGYucGFyZW50O1xuXG4gICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgcHJldiA9IGNoaWxkLl9wcmV2OyAvL3JlY29yZCBpdCBoZXJlIGluIGNhc2UgdGhlIHR3ZWVuIGNoYW5nZXMgcG9zaXRpb24gaW4gdGhlIHNlcXVlbmNlLi4uXG5cbiAgICAgICAgY2hpbGQuX2RpcnR5ICYmIGNoaWxkLnRvdGFsRHVyYXRpb24oKTsgLy9jb3VsZCBjaGFuZ2UgdGhlIHR3ZWVuLl9zdGFydFRpbWUsIHNvIG1ha2Ugc3VyZSB0aGUgYW5pbWF0aW9uJ3MgY2FjaGUgaXMgY2xlYW4gYmVmb3JlIGFuYWx5emluZyBpdC5cblxuICAgICAgICBzdGFydCA9IGNoaWxkLl9zdGFydDtcblxuICAgICAgICBpZiAoc3RhcnQgPiBwcmV2U3RhcnQgJiYgc2VsZi5fc29ydCAmJiBjaGlsZC5fdHMgJiYgIXNlbGYuX2xvY2spIHtcbiAgICAgICAgICAvL2luIGNhc2Ugb25lIG9mIHRoZSB0d2VlbnMgc2hpZnRlZCBvdXQgb2Ygb3JkZXIsIGl0IG5lZWRzIHRvIGJlIHJlLWluc2VydGVkIGludG8gdGhlIGNvcnJlY3QgcG9zaXRpb24gaW4gdGhlIHNlcXVlbmNlXG4gICAgICAgICAgc2VsZi5fbG9jayA9IDE7IC8vcHJldmVudCBlbmRsZXNzIHJlY3Vyc2l2ZSBjYWxscyAtIHRoZXJlIGFyZSBtZXRob2RzIHRoYXQgZ2V0IHRyaWdnZXJlZCB0aGF0IGNoZWNrIGR1cmF0aW9uL3RvdGFsRHVyYXRpb24gd2hlbiB3ZSBhZGQoKS5cblxuICAgICAgICAgIF9hZGRUb1RpbWVsaW5lKHNlbGYsIGNoaWxkLCBzdGFydCAtIGNoaWxkLl9kZWxheSwgMSkuX2xvY2sgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZXZTdGFydCA9IHN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXJ0IDwgMCAmJiBjaGlsZC5fdHMpIHtcbiAgICAgICAgICAvL2NoaWxkcmVuIGFyZW4ndCBhbGxvd2VkIHRvIGhhdmUgbmVnYXRpdmUgc3RhcnRUaW1lcyB1bmxlc3Mgc21vb3RoQ2hpbGRUaW1pbmcgaXMgdHJ1ZSwgc28gYWRqdXN0IGhlcmUgaWYgb25lIGlzIGZvdW5kLlxuICAgICAgICAgIG1heCAtPSBzdGFydDtcblxuICAgICAgICAgIGlmICghcGFyZW50ICYmICFzZWxmLl9kcCB8fCBwYXJlbnQgJiYgcGFyZW50LnNtb290aENoaWxkVGltaW5nKSB7XG4gICAgICAgICAgICBzZWxmLl9zdGFydCArPSBzdGFydCAvIHNlbGYuX3RzO1xuICAgICAgICAgICAgc2VsZi5fdGltZSAtPSBzdGFydDtcbiAgICAgICAgICAgIHNlbGYuX3RUaW1lIC09IHN0YXJ0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGYuc2hpZnRDaGlsZHJlbigtc3RhcnQsIGZhbHNlLCAtMWU5OTkpO1xuICAgICAgICAgIHByZXZTdGFydCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC5fZW5kID4gbWF4ICYmIGNoaWxkLl90cyAmJiAobWF4ID0gY2hpbGQuX2VuZCk7XG4gICAgICAgIGNoaWxkID0gcHJldjtcbiAgICAgIH1cblxuICAgICAgX3NldER1cmF0aW9uKHNlbGYsIHNlbGYgPT09IF9nbG9iYWxUaW1lbGluZSAmJiBzZWxmLl90aW1lID4gbWF4ID8gc2VsZi5fdGltZSA6IG1heCwgMSwgMSk7XG5cbiAgICAgIHNlbGYuX2RpcnR5ID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZi5fdER1cjtcbiAgfTtcblxuICBUaW1lbGluZS51cGRhdGVSb290ID0gZnVuY3Rpb24gdXBkYXRlUm9vdCh0aW1lKSB7XG4gICAgaWYgKF9nbG9iYWxUaW1lbGluZS5fdHMpIHtcbiAgICAgIF9sYXp5U2FmZVJlbmRlcihfZ2xvYmFsVGltZWxpbmUsIF9wYXJlbnRUb0NoaWxkVG90YWxUaW1lKHRpbWUsIF9nbG9iYWxUaW1lbGluZSkpO1xuXG4gICAgICBfbGFzdFJlbmRlcmVkRnJhbWUgPSBfdGlja2VyLmZyYW1lO1xuICAgIH1cblxuICAgIGlmIChfdGlja2VyLmZyYW1lID49IF9uZXh0R0NGcmFtZSkge1xuICAgICAgX25leHRHQ0ZyYW1lICs9IF9jb25maWcuYXV0b1NsZWVwIHx8IDEyMDtcbiAgICAgIHZhciBjaGlsZCA9IF9nbG9iYWxUaW1lbGluZS5fZmlyc3Q7XG4gICAgICBpZiAoIWNoaWxkIHx8ICFjaGlsZC5fdHMpIGlmIChfY29uZmlnLmF1dG9TbGVlcCAmJiBfdGlja2VyLl9saXN0ZW5lcnMubGVuZ3RoIDwgMikge1xuICAgICAgICB3aGlsZSAoY2hpbGQgJiYgIWNoaWxkLl90cykge1xuICAgICAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZCB8fCBfdGlja2VyLnNsZWVwKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBUaW1lbGluZTtcbn0oQW5pbWF0aW9uKTtcblxuX3NldERlZmF1bHRzKFRpbWVsaW5lLnByb3RvdHlwZSwge1xuICBfbG9jazogMCxcbiAgX2hhc1BhdXNlOiAwLFxuICBfZm9yY2luZzogMFxufSk7XG5cbnZhciBfYWRkQ29tcGxleFN0cmluZ1Byb3BUd2VlbiA9IGZ1bmN0aW9uIF9hZGRDb21wbGV4U3RyaW5nUHJvcFR3ZWVuKHRhcmdldCwgcHJvcCwgc3RhcnQsIGVuZCwgc2V0dGVyLCBzdHJpbmdGaWx0ZXIsIGZ1bmNQYXJhbSkge1xuICAvL25vdGU6IHdlIGNhbGwgX2FkZENvbXBsZXhTdHJpbmdQcm9wVHdlZW4uY2FsbCh0d2Vlbkluc3RhbmNlLi4uKSB0byBlbnN1cmUgdGhhdCBpdCdzIHNjb3BlZCBwcm9wZXJseS4gV2UgbWF5IGNhbGwgaXQgZnJvbSB3aXRoaW4gYSBwbHVnaW4gdG9vLCB0aHVzIFwidGhpc1wiIHdvdWxkIHJlZmVyIHRvIHRoZSBwbHVnaW4uXG4gIHZhciBwdCA9IG5ldyBQcm9wVHdlZW4odGhpcy5fcHQsIHRhcmdldCwgcHJvcCwgMCwgMSwgX3JlbmRlckNvbXBsZXhTdHJpbmcsIG51bGwsIHNldHRlciksXG4gICAgICBpbmRleCA9IDAsXG4gICAgICBtYXRjaEluZGV4ID0gMCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHN0YXJ0TnVtcyxcbiAgICAgIGNvbG9yLFxuICAgICAgZW5kTnVtLFxuICAgICAgY2h1bmssXG4gICAgICBzdGFydE51bSxcbiAgICAgIGhhc1JhbmRvbSxcbiAgICAgIGE7XG4gIHB0LmIgPSBzdGFydDtcbiAgcHQuZSA9IGVuZDtcbiAgc3RhcnQgKz0gXCJcIjsgLy9lbnN1cmUgdmFsdWVzIGFyZSBzdHJpbmdzXG5cbiAgZW5kICs9IFwiXCI7XG5cbiAgaWYgKGhhc1JhbmRvbSA9IH5lbmQuaW5kZXhPZihcInJhbmRvbShcIikpIHtcbiAgICBlbmQgPSBfcmVwbGFjZVJhbmRvbShlbmQpO1xuICB9XG5cbiAgaWYgKHN0cmluZ0ZpbHRlcikge1xuICAgIGEgPSBbc3RhcnQsIGVuZF07XG4gICAgc3RyaW5nRmlsdGVyKGEsIHRhcmdldCwgcHJvcCk7IC8vcGFzcyBhbiBhcnJheSB3aXRoIHRoZSBzdGFydGluZyBhbmQgZW5kaW5nIHZhbHVlcyBhbmQgbGV0IHRoZSBmaWx0ZXIgZG8gd2hhdGV2ZXIgaXQgbmVlZHMgdG8gdGhlIHZhbHVlcy5cblxuICAgIHN0YXJ0ID0gYVswXTtcbiAgICBlbmQgPSBhWzFdO1xuICB9XG5cbiAgc3RhcnROdW1zID0gc3RhcnQubWF0Y2goX2NvbXBsZXhTdHJpbmdOdW1FeHApIHx8IFtdO1xuXG4gIHdoaWxlIChyZXN1bHQgPSBfY29tcGxleFN0cmluZ051bUV4cC5leGVjKGVuZCkpIHtcbiAgICBlbmROdW0gPSByZXN1bHRbMF07XG4gICAgY2h1bmsgPSBlbmQuc3Vic3RyaW5nKGluZGV4LCByZXN1bHQuaW5kZXgpO1xuXG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICBjb2xvciA9IChjb2xvciArIDEpICUgNTtcbiAgICB9IGVsc2UgaWYgKGNodW5rLnN1YnN0cigtNSkgPT09IFwicmdiYShcIikge1xuICAgICAgY29sb3IgPSAxO1xuICAgIH1cblxuICAgIGlmIChlbmROdW0gIT09IHN0YXJ0TnVtc1ttYXRjaEluZGV4KytdKSB7XG4gICAgICBzdGFydE51bSA9IHBhcnNlRmxvYXQoc3RhcnROdW1zW21hdGNoSW5kZXggLSAxXSkgfHwgMDsgLy90aGVzZSBuZXN0ZWQgUHJvcFR3ZWVucyBhcmUgaGFuZGxlZCBpbiBhIHNwZWNpYWwgd2F5IC0gd2UnbGwgbmV2ZXIgYWN0dWFsbHkgY2FsbCBhIHJlbmRlciBvciBzZXR0ZXIgbWV0aG9kIG9uIHRoZW0uIFdlJ2xsIGp1c3QgbG9vcCB0aHJvdWdoIHRoZW0gaW4gdGhlIHBhcmVudCBjb21wbGV4IHN0cmluZyBQcm9wVHdlZW4ncyByZW5kZXIgbWV0aG9kLlxuXG4gICAgICBwdC5fcHQgPSB7XG4gICAgICAgIF9uZXh0OiBwdC5fcHQsXG4gICAgICAgIHA6IGNodW5rIHx8IG1hdGNoSW5kZXggPT09IDEgPyBjaHVuayA6IFwiLFwiLFxuICAgICAgICAvL25vdGU6IFNWRyBzcGVjIGFsbG93cyBvbWlzc2lvbiBvZiBjb21tYS9zcGFjZSB3aGVuIGEgbmVnYXRpdmUgc2lnbiBpcyB3ZWRnZWQgYmV0d2VlbiB0d28gbnVtYmVycywgbGlrZSAyLjUtNS4zIGluc3RlYWQgb2YgMi41LC01LjMgYnV0IHdoZW4gdHdlZW5pbmcsIHRoZSBuZWdhdGl2ZSB2YWx1ZSBtYXkgc3dpdGNoIHRvIHBvc2l0aXZlLCBzbyB3ZSBpbnNlcnQgdGhlIGNvbW1hIGp1c3QgaW4gY2FzZS5cbiAgICAgICAgczogc3RhcnROdW0sXG4gICAgICAgIGM6IGVuZE51bS5jaGFyQXQoMSkgPT09IFwiPVwiID8gX3BhcnNlUmVsYXRpdmUoc3RhcnROdW0sIGVuZE51bSkgLSBzdGFydE51bSA6IHBhcnNlRmxvYXQoZW5kTnVtKSAtIHN0YXJ0TnVtLFxuICAgICAgICBtOiBjb2xvciAmJiBjb2xvciA8IDQgPyBNYXRoLnJvdW5kIDogMFxuICAgICAgfTtcbiAgICAgIGluZGV4ID0gX2NvbXBsZXhTdHJpbmdOdW1FeHAubGFzdEluZGV4O1xuICAgIH1cbiAgfVxuXG4gIHB0LmMgPSBpbmRleCA8IGVuZC5sZW5ndGggPyBlbmQuc3Vic3RyaW5nKGluZGV4LCBlbmQubGVuZ3RoKSA6IFwiXCI7IC8vd2UgdXNlIHRoZSBcImNcIiBvZiB0aGUgUHJvcFR3ZWVuIHRvIHN0b3JlIHRoZSBmaW5hbCBwYXJ0IG9mIHRoZSBzdHJpbmcgKGFmdGVyIHRoZSBsYXN0IG51bWJlcilcblxuICBwdC5mcCA9IGZ1bmNQYXJhbTtcblxuICBpZiAoX3JlbEV4cC50ZXN0KGVuZCkgfHwgaGFzUmFuZG9tKSB7XG4gICAgcHQuZSA9IDA7IC8vaWYgdGhlIGVuZCBzdHJpbmcgY29udGFpbnMgcmVsYXRpdmUgdmFsdWVzIG9yIGR5bmFtaWMgcmFuZG9tKC4uLikgdmFsdWVzLCBkZWxldGUgdGhlIGVuZCBpdCBzbyB0aGF0IG9uIHRoZSBmaW5hbCByZW5kZXIgd2UgZG9uJ3QgYWN0dWFsbHkgc2V0IGl0IHRvIHRoZSBzdHJpbmcgd2l0aCArPSBvciAtPSBjaGFyYWN0ZXJzIChmb3JjZXMgaXQgdG8gdXNlIHRoZSBjYWxjdWxhdGVkIHZhbHVlKS5cbiAgfVxuXG4gIHRoaXMuX3B0ID0gcHQ7IC8vc3RhcnQgdGhlIGxpbmtlZCBsaXN0IHdpdGggdGhpcyBuZXcgUHJvcFR3ZWVuLiBSZW1lbWJlciwgd2UgY2FsbCBfYWRkQ29tcGxleFN0cmluZ1Byb3BUd2Vlbi5jYWxsKHR3ZWVuSW5zdGFuY2UuLi4pIHRvIGVuc3VyZSB0aGF0IGl0J3Mgc2NvcGVkIHByb3Blcmx5LiBXZSBtYXkgY2FsbCBpdCBmcm9tIHdpdGhpbiBhIHBsdWdpbiB0b28sIHRodXMgXCJ0aGlzXCIgd291bGQgcmVmZXIgdG8gdGhlIHBsdWdpbi5cblxuICByZXR1cm4gcHQ7XG59LFxuICAgIF9hZGRQcm9wVHdlZW4gPSBmdW5jdGlvbiBfYWRkUHJvcFR3ZWVuKHRhcmdldCwgcHJvcCwgc3RhcnQsIGVuZCwgaW5kZXgsIHRhcmdldHMsIG1vZGlmaWVyLCBzdHJpbmdGaWx0ZXIsIGZ1bmNQYXJhbSwgb3B0aW9uYWwpIHtcbiAgX2lzRnVuY3Rpb24oZW5kKSAmJiAoZW5kID0gZW5kKGluZGV4IHx8IDAsIHRhcmdldCwgdGFyZ2V0cykpO1xuICB2YXIgY3VycmVudFZhbHVlID0gdGFyZ2V0W3Byb3BdLFxuICAgICAgcGFyc2VkU3RhcnQgPSBzdGFydCAhPT0gXCJnZXRcIiA/IHN0YXJ0IDogIV9pc0Z1bmN0aW9uKGN1cnJlbnRWYWx1ZSkgPyBjdXJyZW50VmFsdWUgOiBmdW5jUGFyYW0gPyB0YXJnZXRbcHJvcC5pbmRleE9mKFwic2V0XCIpIHx8ICFfaXNGdW5jdGlvbih0YXJnZXRbXCJnZXRcIiArIHByb3Auc3Vic3RyKDMpXSkgPyBwcm9wIDogXCJnZXRcIiArIHByb3Auc3Vic3RyKDMpXShmdW5jUGFyYW0pIDogdGFyZ2V0W3Byb3BdKCksXG4gICAgICBzZXR0ZXIgPSAhX2lzRnVuY3Rpb24oY3VycmVudFZhbHVlKSA/IF9zZXR0ZXJQbGFpbiA6IGZ1bmNQYXJhbSA/IF9zZXR0ZXJGdW5jV2l0aFBhcmFtIDogX3NldHRlckZ1bmMsXG4gICAgICBwdDtcblxuICBpZiAoX2lzU3RyaW5nKGVuZCkpIHtcbiAgICBpZiAofmVuZC5pbmRleE9mKFwicmFuZG9tKFwiKSkge1xuICAgICAgZW5kID0gX3JlcGxhY2VSYW5kb20oZW5kKTtcbiAgICB9XG5cbiAgICBpZiAoZW5kLmNoYXJBdCgxKSA9PT0gXCI9XCIpIHtcbiAgICAgIHB0ID0gX3BhcnNlUmVsYXRpdmUocGFyc2VkU3RhcnQsIGVuZCkgKyAoZ2V0VW5pdChwYXJzZWRTdGFydCkgfHwgMCk7XG5cbiAgICAgIGlmIChwdCB8fCBwdCA9PT0gMCkge1xuICAgICAgICAvLyB0byBhdm9pZCBpc05hTiwgbGlrZSBpZiBzb21lb25lIHBhc3NlcyBpbiBhIHZhbHVlIGxpa2UgXCIhPSB3aGF0ZXZlclwiXG4gICAgICAgIGVuZCA9IHB0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICghb3B0aW9uYWwgfHwgcGFyc2VkU3RhcnQgIT09IGVuZCB8fCBfZm9yY2VBbGxQcm9wVHdlZW5zKSB7XG4gICAgaWYgKCFpc05hTihwYXJzZWRTdGFydCAqIGVuZCkgJiYgZW5kICE9PSBcIlwiKSB7XG4gICAgICAvLyBmdW4gZmFjdDogYW55IG51bWJlciBtdWx0aXBsaWVkIGJ5IFwiXCIgaXMgZXZhbHVhdGVkIGFzIHRoZSBudW1iZXIgMCFcbiAgICAgIHB0ID0gbmV3IFByb3BUd2Vlbih0aGlzLl9wdCwgdGFyZ2V0LCBwcm9wLCArcGFyc2VkU3RhcnQgfHwgMCwgZW5kIC0gKHBhcnNlZFN0YXJ0IHx8IDApLCB0eXBlb2YgY3VycmVudFZhbHVlID09PSBcImJvb2xlYW5cIiA/IF9yZW5kZXJCb29sZWFuIDogX3JlbmRlclBsYWluLCAwLCBzZXR0ZXIpO1xuICAgICAgZnVuY1BhcmFtICYmIChwdC5mcCA9IGZ1bmNQYXJhbSk7XG4gICAgICBtb2RpZmllciAmJiBwdC5tb2RpZmllcihtb2RpZmllciwgdGhpcywgdGFyZ2V0KTtcbiAgICAgIHJldHVybiB0aGlzLl9wdCA9IHB0O1xuICAgIH1cblxuICAgICFjdXJyZW50VmFsdWUgJiYgIShwcm9wIGluIHRhcmdldCkgJiYgX21pc3NpbmdQbHVnaW4ocHJvcCwgZW5kKTtcbiAgICByZXR1cm4gX2FkZENvbXBsZXhTdHJpbmdQcm9wVHdlZW4uY2FsbCh0aGlzLCB0YXJnZXQsIHByb3AsIHBhcnNlZFN0YXJ0LCBlbmQsIHNldHRlciwgc3RyaW5nRmlsdGVyIHx8IF9jb25maWcuc3RyaW5nRmlsdGVyLCBmdW5jUGFyYW0pO1xuICB9XG59LFxuICAgIC8vY3JlYXRlcyBhIGNvcHkgb2YgdGhlIHZhcnMgb2JqZWN0IGFuZCBwcm9jZXNzZXMgYW55IGZ1bmN0aW9uLWJhc2VkIHZhbHVlcyAocHV0dGluZyB0aGUgcmVzdWx0aW5nIHZhbHVlcyBkaXJlY3RseSBpbnRvIHRoZSBjb3B5KSBhcyB3ZWxsIGFzIHN0cmluZ3Mgd2l0aCBcInJhbmRvbSgpXCIgaW4gdGhlbS4gSXQgZG9lcyBOT1QgcHJvY2VzcyByZWxhdGl2ZSB2YWx1ZXMuXG5fcHJvY2Vzc1ZhcnMgPSBmdW5jdGlvbiBfcHJvY2Vzc1ZhcnModmFycywgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cywgdHdlZW4pIHtcbiAgX2lzRnVuY3Rpb24odmFycykgJiYgKHZhcnMgPSBfcGFyc2VGdW5jT3JTdHJpbmcodmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpKTtcblxuICBpZiAoIV9pc09iamVjdCh2YXJzKSB8fCB2YXJzLnN0eWxlICYmIHZhcnMubm9kZVR5cGUgfHwgX2lzQXJyYXkodmFycykgfHwgX2lzVHlwZWRBcnJheSh2YXJzKSkge1xuICAgIHJldHVybiBfaXNTdHJpbmcodmFycykgPyBfcGFyc2VGdW5jT3JTdHJpbmcodmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpIDogdmFycztcbiAgfVxuXG4gIHZhciBjb3B5ID0ge30sXG4gICAgICBwO1xuXG4gIGZvciAocCBpbiB2YXJzKSB7XG4gICAgY29weVtwXSA9IF9wYXJzZUZ1bmNPclN0cmluZyh2YXJzW3BdLCB0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cyk7XG4gIH1cblxuICByZXR1cm4gY29weTtcbn0sXG4gICAgX2NoZWNrUGx1Z2luID0gZnVuY3Rpb24gX2NoZWNrUGx1Z2luKHByb3BlcnR5LCB2YXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cykge1xuICB2YXIgcGx1Z2luLCBwdCwgcHRMb29rdXAsIGk7XG5cbiAgaWYgKF9wbHVnaW5zW3Byb3BlcnR5XSAmJiAocGx1Z2luID0gbmV3IF9wbHVnaW5zW3Byb3BlcnR5XSgpKS5pbml0KHRhcmdldCwgcGx1Z2luLnJhd1ZhcnMgPyB2YXJzW3Byb3BlcnR5XSA6IF9wcm9jZXNzVmFycyh2YXJzW3Byb3BlcnR5XSwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cywgdHdlZW4pLCB0d2VlbiwgaW5kZXgsIHRhcmdldHMpICE9PSBmYWxzZSkge1xuICAgIHR3ZWVuLl9wdCA9IHB0ID0gbmV3IFByb3BUd2Vlbih0d2Vlbi5fcHQsIHRhcmdldCwgcHJvcGVydHksIDAsIDEsIHBsdWdpbi5yZW5kZXIsIHBsdWdpbiwgMCwgcGx1Z2luLnByaW9yaXR5KTtcblxuICAgIGlmICh0d2VlbiAhPT0gX3F1aWNrVHdlZW4pIHtcbiAgICAgIHB0TG9va3VwID0gdHdlZW4uX3B0TG9va3VwW3R3ZWVuLl90YXJnZXRzLmluZGV4T2YodGFyZ2V0KV07IC8vbm90ZTogd2UgY2FuJ3QgdXNlIHR3ZWVuLl9wdExvb2t1cFtpbmRleF0gYmVjYXVzZSBmb3Igc3RhZ2dlcmVkIHR3ZWVucywgdGhlIGluZGV4IGZyb20gdGhlIGZ1bGxUYXJnZXRzIGFycmF5IHdvbid0IG1hdGNoIHdoYXQgaXQgaXMgaW4gZWFjaCBpbmRpdmlkdWFsIHR3ZWVuIHRoYXQgc3Bhd25zIGZyb20gdGhlIHN0YWdnZXIuXG5cbiAgICAgIGkgPSBwbHVnaW4uX3Byb3BzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBwdExvb2t1cFtwbHVnaW4uX3Byb3BzW2ldXSA9IHB0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwbHVnaW47XG59LFxuICAgIF9vdmVyd3JpdGluZ1R3ZWVuLFxuICAgIC8vc3RvcmUgYSByZWZlcmVuY2UgdGVtcG9yYXJpbHkgc28gd2UgY2FuIGF2b2lkIG92ZXJ3cml0aW5nIGl0c2VsZi5cbl9mb3JjZUFsbFByb3BUd2VlbnMsXG4gICAgX2luaXRUd2VlbiA9IGZ1bmN0aW9uIF9pbml0VHdlZW4odHdlZW4sIHRpbWUsIHRUaW1lKSB7XG4gIHZhciB2YXJzID0gdHdlZW4udmFycyxcbiAgICAgIGVhc2UgPSB2YXJzLmVhc2UsXG4gICAgICBzdGFydEF0ID0gdmFycy5zdGFydEF0LFxuICAgICAgaW1tZWRpYXRlUmVuZGVyID0gdmFycy5pbW1lZGlhdGVSZW5kZXIsXG4gICAgICBsYXp5ID0gdmFycy5sYXp5LFxuICAgICAgb25VcGRhdGUgPSB2YXJzLm9uVXBkYXRlLFxuICAgICAgb25VcGRhdGVQYXJhbXMgPSB2YXJzLm9uVXBkYXRlUGFyYW1zLFxuICAgICAgY2FsbGJhY2tTY29wZSA9IHZhcnMuY2FsbGJhY2tTY29wZSxcbiAgICAgIHJ1bkJhY2t3YXJkcyA9IHZhcnMucnVuQmFja3dhcmRzLFxuICAgICAgeW95b0Vhc2UgPSB2YXJzLnlveW9FYXNlLFxuICAgICAga2V5ZnJhbWVzID0gdmFycy5rZXlmcmFtZXMsXG4gICAgICBhdXRvUmV2ZXJ0ID0gdmFycy5hdXRvUmV2ZXJ0LFxuICAgICAgZHVyID0gdHdlZW4uX2R1cixcbiAgICAgIHByZXZTdGFydEF0ID0gdHdlZW4uX3N0YXJ0QXQsXG4gICAgICB0YXJnZXRzID0gdHdlZW4uX3RhcmdldHMsXG4gICAgICBwYXJlbnQgPSB0d2Vlbi5wYXJlbnQsXG4gICAgICBmdWxsVGFyZ2V0cyA9IHBhcmVudCAmJiBwYXJlbnQuZGF0YSA9PT0gXCJuZXN0ZWRcIiA/IHBhcmVudC52YXJzLnRhcmdldHMgOiB0YXJnZXRzLFxuICAgICAgYXV0b092ZXJ3cml0ZSA9IHR3ZWVuLl9vdmVyd3JpdGUgPT09IFwiYXV0b1wiICYmICFfc3VwcHJlc3NPdmVyd3JpdGVzLFxuICAgICAgdGwgPSB0d2Vlbi50aW1lbGluZSxcbiAgICAgIGNsZWFuVmFycyxcbiAgICAgIGksXG4gICAgICBwLFxuICAgICAgcHQsXG4gICAgICB0YXJnZXQsXG4gICAgICBoYXNQcmlvcml0eSxcbiAgICAgIGdzRGF0YSxcbiAgICAgIGhhcm5lc3MsXG4gICAgICBwbHVnaW4sXG4gICAgICBwdExvb2t1cCxcbiAgICAgIGluZGV4LFxuICAgICAgaGFybmVzc1ZhcnMsXG4gICAgICBvdmVyd3JpdHRlbjtcbiAgdGwgJiYgKCFrZXlmcmFtZXMgfHwgIWVhc2UpICYmIChlYXNlID0gXCJub25lXCIpO1xuICB0d2Vlbi5fZWFzZSA9IF9wYXJzZUVhc2UoZWFzZSwgX2RlZmF1bHRzLmVhc2UpO1xuICB0d2Vlbi5feUVhc2UgPSB5b3lvRWFzZSA/IF9pbnZlcnRFYXNlKF9wYXJzZUVhc2UoeW95b0Vhc2UgPT09IHRydWUgPyBlYXNlIDogeW95b0Vhc2UsIF9kZWZhdWx0cy5lYXNlKSkgOiAwO1xuXG4gIGlmICh5b3lvRWFzZSAmJiB0d2Vlbi5feW95byAmJiAhdHdlZW4uX3JlcGVhdCkge1xuICAgIC8vdGhlcmUgbXVzdCBoYXZlIGJlZW4gYSBwYXJlbnQgdGltZWxpbmUgd2l0aCB5b3lvOnRydWUgdGhhdCBpcyBjdXJyZW50bHkgaW4gaXRzIHlveW8gcGhhc2UsIHNvIGZsaXAgdGhlIGVhc2VzLlxuICAgIHlveW9FYXNlID0gdHdlZW4uX3lFYXNlO1xuICAgIHR3ZWVuLl95RWFzZSA9IHR3ZWVuLl9lYXNlO1xuICAgIHR3ZWVuLl9lYXNlID0geW95b0Vhc2U7XG4gIH1cblxuICB0d2Vlbi5fZnJvbSA9ICF0bCAmJiAhIXZhcnMucnVuQmFja3dhcmRzOyAvL25lc3RlZCB0aW1lbGluZXMgc2hvdWxkIG5ldmVyIHJ1biBiYWNrd2FyZHMgLSB0aGUgYmFja3dhcmRzLW5lc3MgaXMgaW4gdGhlIGNoaWxkIHR3ZWVucy5cblxuICBpZiAoIXRsIHx8IGtleWZyYW1lcyAmJiAhdmFycy5zdGFnZ2VyKSB7XG4gICAgLy9pZiB0aGVyZSdzIGFuIGludGVybmFsIHRpbWVsaW5lLCBza2lwIGFsbCB0aGUgcGFyc2luZyBiZWNhdXNlIHdlIHBhc3NlZCB0aGF0IHRhc2sgZG93biB0aGUgY2hhaW4uXG4gICAgaGFybmVzcyA9IHRhcmdldHNbMF0gPyBfZ2V0Q2FjaGUodGFyZ2V0c1swXSkuaGFybmVzcyA6IDA7XG4gICAgaGFybmVzc1ZhcnMgPSBoYXJuZXNzICYmIHZhcnNbaGFybmVzcy5wcm9wXTsgLy9zb21lb25lIG1heSBuZWVkIHRvIHNwZWNpZnkgQ1NTLXNwZWNpZmljIHZhbHVlcyBBTkQgbm9uLUNTUyB2YWx1ZXMsIGxpa2UgaWYgdGhlIGVsZW1lbnQgaGFzIGFuIFwieFwiIHByb3BlcnR5IHBsdXMgaXQncyBhIHN0YW5kYXJkIERPTSBlbGVtZW50LiBXZSBhbGxvdyBwZW9wbGUgdG8gZGlzdGluZ3Vpc2ggYnkgd3JhcHBpbmcgcGx1Z2luLXNwZWNpZmljIHN0dWZmIGluIGEgY3NzOnt9IG9iamVjdCBmb3IgZXhhbXBsZS5cblxuICAgIGNsZWFuVmFycyA9IF9jb3B5RXhjbHVkaW5nKHZhcnMsIF9yZXNlcnZlZFByb3BzKTtcblxuICAgIGlmIChwcmV2U3RhcnRBdCkge1xuICAgICAgcHJldlN0YXJ0QXQuX3pUaW1lIDwgMCAmJiBwcmV2U3RhcnRBdC5wcm9ncmVzcygxKTsgLy8gaW4gY2FzZSBpdCdzIGEgbGF6eSBzdGFydEF0IHRoYXQgaGFzbid0IHJlbmRlcmVkIHlldC5cblxuICAgICAgdGltZSA8IDAgJiYgcnVuQmFja3dhcmRzICYmIGltbWVkaWF0ZVJlbmRlciAmJiAhYXV0b1JldmVydCA/IHByZXZTdGFydEF0LnJlbmRlcigtMSwgdHJ1ZSkgOiBwcmV2U3RhcnRBdC5yZXZlcnQocnVuQmFja3dhcmRzICYmIGR1ciA/IF9yZXZlcnRDb25maWdOb0tpbGwgOiBfc3RhcnRBdFJldmVydENvbmZpZyk7IC8vIGlmIGl0J3MgYSBcInN0YXJ0QXRcIiAobm90IFwiZnJvbSgpXCIgb3IgcnVuQmFja3dhcmRzOiB0cnVlKSwgd2Ugb25seSBuZWVkIHRvIGRvIGEgc2hhbGxvdyByZXZlcnQgKGtlZXAgdHJhbnNmb3JtcyBjYWNoZWQgaW4gQ1NTUGx1Z2luKVxuICAgICAgLy8gZG9uJ3QganVzdCBfcmVtb3ZlRnJvbVBhcmVudChwcmV2U3RhcnRBdC5yZW5kZXIoLTEsIHRydWUpKSBiZWNhdXNlIHRoYXQnbGwgbGVhdmUgaW5saW5lIHN0eWxlcy4gV2UncmUgY3JlYXRpbmcgYSBuZXcgX3N0YXJ0QXQgZm9yIFwic3RhcnRBdFwiIHR3ZWVucyB0aGF0IHJlLWNhcHR1cmUgdGhpbmdzIHRvIGVuc3VyZSB0aGF0IGlmIHRoZSBwcmUtdHdlZW4gdmFsdWVzIGNoYW5nZWQgc2luY2UgdGhlIHR3ZWVuIHdhcyBjcmVhdGVkLCB0aGV5J3JlIHJlY29yZGVkLlxuXG4gICAgICBwcmV2U3RhcnRBdC5fbGF6eSA9IDA7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0QXQpIHtcbiAgICAgIF9yZW1vdmVGcm9tUGFyZW50KHR3ZWVuLl9zdGFydEF0ID0gVHdlZW4uc2V0KHRhcmdldHMsIF9zZXREZWZhdWx0cyh7XG4gICAgICAgIGRhdGE6IFwiaXNTdGFydFwiLFxuICAgICAgICBvdmVyd3JpdGU6IGZhbHNlLFxuICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgaW1tZWRpYXRlUmVuZGVyOiB0cnVlLFxuICAgICAgICBsYXp5OiAhcHJldlN0YXJ0QXQgJiYgX2lzTm90RmFsc2UobGF6eSksXG4gICAgICAgIHN0YXJ0QXQ6IG51bGwsXG4gICAgICAgIGRlbGF5OiAwLFxuICAgICAgICBvblVwZGF0ZTogb25VcGRhdGUsXG4gICAgICAgIG9uVXBkYXRlUGFyYW1zOiBvblVwZGF0ZVBhcmFtcyxcbiAgICAgICAgY2FsbGJhY2tTY29wZTogY2FsbGJhY2tTY29wZSxcbiAgICAgICAgc3RhZ2dlcjogMFxuICAgICAgfSwgc3RhcnRBdCkpKTsgLy9jb3B5IHRoZSBwcm9wZXJ0aWVzL3ZhbHVlcyBpbnRvIGEgbmV3IG9iamVjdCB0byBhdm9pZCBjb2xsaXNpb25zLCBsaWtlIHZhciB0byA9IHt4OjB9LCBmcm9tID0ge3g6NTAwfTsgdGltZWxpbmUuZnJvbVRvKGUsIGZyb20sIHRvKS5mcm9tVG8oZSwgdG8sIGZyb20pO1xuXG5cbiAgICAgIHR3ZWVuLl9zdGFydEF0Ll9kcCA9IDA7IC8vIGRvbid0IGFsbG93IGl0IHRvIGdldCBwdXQgYmFjayBpbnRvIHJvb3QgdGltZWxpbmUhIExpa2Ugd2hlbiByZXZlcnQoKSBpcyBjYWxsZWQgYW5kIHRvdGFsVGltZSgpIGdldHMgc2V0LlxuXG4gICAgICB0d2Vlbi5fc3RhcnRBdC5fc2F0ID0gdHdlZW47IC8vIHVzZWQgaW4gZ2xvYmFsVGltZSgpLiBfc2F0IHN0YW5kcyBmb3IgX3N0YXJ0QXRUd2VlblxuXG4gICAgICB0aW1lIDwgMCAmJiAoX3JldmVydGluZyB8fCAhaW1tZWRpYXRlUmVuZGVyICYmICFhdXRvUmV2ZXJ0KSAmJiB0d2Vlbi5fc3RhcnRBdC5yZXZlcnQoX3JldmVydENvbmZpZ05vS2lsbCk7IC8vIHJhcmUgZWRnZSBjYXNlLCBsaWtlIGlmIGEgcmVuZGVyIGlzIGZvcmNlZCBpbiB0aGUgbmVnYXRpdmUgZGlyZWN0aW9uIG9mIGEgbm9uLWluaXR0ZWQgdHdlZW4uXG5cbiAgICAgIGlmIChpbW1lZGlhdGVSZW5kZXIpIHtcbiAgICAgICAgaWYgKGR1ciAmJiB0aW1lIDw9IDAgJiYgdFRpbWUgPD0gMCkge1xuICAgICAgICAgIC8vIGNoZWNrIHRUaW1lIGhlcmUgYmVjYXVzZSBpbiB0aGUgY2FzZSBvZiBhIHlveW8gdHdlZW4gd2hvc2UgcGxheWhlYWQgZ2V0cyBwdXNoZWQgdG8gdGhlIGVuZCBsaWtlIHR3ZWVuLnByb2dyZXNzKDEpLCB3ZSBzaG91bGQgYWxsb3cgaXQgdGhyb3VnaCBzbyB0aGF0IHRoZSBvbkNvbXBsZXRlIGdldHMgZmlyZWQgcHJvcGVybHkuXG4gICAgICAgICAgdGltZSAmJiAodHdlZW4uX3pUaW1lID0gdGltZSk7XG4gICAgICAgICAgcmV0dXJuOyAvL3dlIHNraXAgaW5pdGlhbGl6YXRpb24gaGVyZSBzbyB0aGF0IG92ZXJ3cml0aW5nIGRvZXNuJ3Qgb2NjdXIgdW50aWwgdGhlIHR3ZWVuIGFjdHVhbGx5IGJlZ2lucy4gT3RoZXJ3aXNlLCBpZiB5b3UgY3JlYXRlIHNldmVyYWwgaW1tZWRpYXRlUmVuZGVyOnRydWUgdHdlZW5zIG9mIHRoZSBzYW1lIHRhcmdldC9wcm9wZXJ0aWVzIHRvIGRyb3AgaW50byBhIFRpbWVsaW5lLCB0aGUgbGFzdCBvbmUgY3JlYXRlZCB3b3VsZCBvdmVyd3JpdGUgdGhlIGZpcnN0IG9uZXMgYmVjYXVzZSB0aGV5IGRpZG4ndCBnZXQgcGxhY2VkIGludG8gdGhlIHRpbWVsaW5lIHlldCBiZWZvcmUgdGhlIGZpcnN0IHJlbmRlciBvY2N1cnMgYW5kIGtpY2tzIGluIG92ZXJ3cml0aW5nLlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChydW5CYWNrd2FyZHMgJiYgZHVyKSB7XG4gICAgICAvL2Zyb20oKSB0d2VlbnMgbXVzdCBiZSBoYW5kbGVkIHVuaXF1ZWx5OiB0aGVpciBiZWdpbm5pbmcgdmFsdWVzIG11c3QgYmUgcmVuZGVyZWQgYnV0IHdlIGRvbid0IHdhbnQgb3ZlcndyaXRpbmcgdG8gb2NjdXIgeWV0ICh3aGVuIHRpbWUgaXMgc3RpbGwgMCkuIFdhaXQgdW50aWwgdGhlIHR3ZWVuIGFjdHVhbGx5IGJlZ2lucyBiZWZvcmUgZG9pbmcgYWxsIHRoZSByb3V0aW5lcyBsaWtlIG92ZXJ3cml0aW5nLiBBdCB0aGF0IHRpbWUsIHdlIHNob3VsZCByZW5kZXIgYXQgdGhlIEVORCBvZiB0aGUgdHdlZW4gdG8gZW5zdXJlIHRoYXQgdGhpbmdzIGluaXRpYWxpemUgY29ycmVjdGx5IChyZW1lbWJlciwgZnJvbSgpIHR3ZWVucyBnbyBiYWNrd2FyZHMpXG4gICAgICBpZiAoIXByZXZTdGFydEF0KSB7XG4gICAgICAgIHRpbWUgJiYgKGltbWVkaWF0ZVJlbmRlciA9IGZhbHNlKTsgLy9pbiByYXJlIGNhc2VzIChsaWtlIGlmIGEgZnJvbSgpIHR3ZWVuIHJ1bnMgYW5kIHRoZW4gaXMgaW52YWxpZGF0ZSgpLWVkKSwgaW1tZWRpYXRlUmVuZGVyIGNvdWxkIGJlIHRydWUgYnV0IHRoZSBpbml0aWFsIGZvcmNlZC1yZW5kZXIgZ2V0cyBza2lwcGVkLCBzbyB0aGVyZSdzIG5vIG5lZWQgdG8gZm9yY2UgdGhlIHJlbmRlciBpbiB0aGlzIGNvbnRleHQgd2hlbiB0aGUgX3RpbWUgaXMgZ3JlYXRlciB0aGFuIDBcblxuICAgICAgICBwID0gX3NldERlZmF1bHRzKHtcbiAgICAgICAgICBvdmVyd3JpdGU6IGZhbHNlLFxuICAgICAgICAgIGRhdGE6IFwiaXNGcm9tU3RhcnRcIixcbiAgICAgICAgICAvL3dlIHRhZyB0aGUgdHdlZW4gd2l0aCBhcyBcImlzRnJvbVN0YXJ0XCIgc28gdGhhdCBpZiBbaW5zaWRlIGEgcGx1Z2luXSB3ZSBuZWVkIHRvIG9ubHkgZG8gc29tZXRoaW5nIGF0IHRoZSB2ZXJ5IEVORCBvZiBhIHR3ZWVuLCB3ZSBoYXZlIGEgd2F5IG9mIGlkZW50aWZ5aW5nIHRoaXMgdHdlZW4gYXMgbWVyZWx5IHRoZSBvbmUgdGhhdCdzIHNldHRpbmcgdGhlIGJlZ2lubmluZyB2YWx1ZXMgZm9yIGEgXCJmcm9tKClcIiB0d2Vlbi4gRm9yIGV4YW1wbGUsIGNsZWFyUHJvcHMgaW4gQ1NTUGx1Z2luIHNob3VsZCBvbmx5IGdldCBhcHBsaWVkIGF0IHRoZSB2ZXJ5IEVORCBvZiBhIHR3ZWVuIGFuZCB3aXRob3V0IHRoaXMgdGFnLCBmcm9tKC4uLntoZWlnaHQ6MTAwLCBjbGVhclByb3BzOlwiaGVpZ2h0XCIsIGRlbGF5OjF9KSB3b3VsZCB3aXBlIHRoZSBoZWlnaHQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgdHdlZW4gYW5kIGFmdGVyIDEgc2Vjb25kLCBpdCdkIGtpY2sgYmFjayBpbi5cbiAgICAgICAgICBsYXp5OiBpbW1lZGlhdGVSZW5kZXIgJiYgIXByZXZTdGFydEF0ICYmIF9pc05vdEZhbHNlKGxhenkpLFxuICAgICAgICAgIGltbWVkaWF0ZVJlbmRlcjogaW1tZWRpYXRlUmVuZGVyLFxuICAgICAgICAgIC8vemVyby1kdXJhdGlvbiB0d2VlbnMgcmVuZGVyIGltbWVkaWF0ZWx5IGJ5IGRlZmF1bHQsIGJ1dCBpZiB3ZSdyZSBub3Qgc3BlY2lmaWNhbGx5IGluc3RydWN0ZWQgdG8gcmVuZGVyIHRoaXMgdHdlZW4gaW1tZWRpYXRlbHksIHdlIHNob3VsZCBza2lwIHRoaXMgYW5kIG1lcmVseSBfaW5pdCgpIHRvIHJlY29yZCB0aGUgc3RhcnRpbmcgdmFsdWVzIChyZW5kZXJpbmcgdGhlbSBpbW1lZGlhdGVseSB3b3VsZCBwdXNoIHRoZW0gdG8gY29tcGxldGlvbiB3aGljaCBpcyB3YXN0ZWZ1bCBpbiB0aGF0IGNhc2UgLSB3ZSdkIGhhdmUgdG8gcmVuZGVyKC0xKSBpbW1lZGlhdGVseSBhZnRlcilcbiAgICAgICAgICBzdGFnZ2VyOiAwLFxuICAgICAgICAgIHBhcmVudDogcGFyZW50IC8vZW5zdXJlcyB0aGF0IG5lc3RlZCB0d2VlbnMgdGhhdCBoYWQgYSBzdGFnZ2VyIGFyZSBoYW5kbGVkIHByb3Blcmx5LCBsaWtlIGdzYXAuZnJvbShcIi5jbGFzc1wiLCB7eTogZ3NhcC51dGlscy53cmFwKFstMTAwLDEwMF0pLCBzdGFnZ2VyOiAwLjV9KVxuXG4gICAgICAgIH0sIGNsZWFuVmFycyk7XG4gICAgICAgIGhhcm5lc3NWYXJzICYmIChwW2hhcm5lc3MucHJvcF0gPSBoYXJuZXNzVmFycyk7IC8vIGluIGNhc2Ugc29tZW9uZSBkb2VzIHNvbWV0aGluZyBsaWtlIC5mcm9tKC4uLiwge2Nzczp7fX0pXG5cbiAgICAgICAgX3JlbW92ZUZyb21QYXJlbnQodHdlZW4uX3N0YXJ0QXQgPSBUd2Vlbi5zZXQodGFyZ2V0cywgcCkpO1xuXG4gICAgICAgIHR3ZWVuLl9zdGFydEF0Ll9kcCA9IDA7IC8vIGRvbid0IGFsbG93IGl0IHRvIGdldCBwdXQgYmFjayBpbnRvIHJvb3QgdGltZWxpbmUhXG5cbiAgICAgICAgdHdlZW4uX3N0YXJ0QXQuX3NhdCA9IHR3ZWVuOyAvLyB1c2VkIGluIGdsb2JhbFRpbWUoKVxuXG4gICAgICAgIHRpbWUgPCAwICYmIChfcmV2ZXJ0aW5nID8gdHdlZW4uX3N0YXJ0QXQucmV2ZXJ0KF9yZXZlcnRDb25maWdOb0tpbGwpIDogdHdlZW4uX3N0YXJ0QXQucmVuZGVyKC0xLCB0cnVlKSk7XG4gICAgICAgIHR3ZWVuLl96VGltZSA9IHRpbWU7XG5cbiAgICAgICAgaWYgKCFpbW1lZGlhdGVSZW5kZXIpIHtcbiAgICAgICAgICBfaW5pdFR3ZWVuKHR3ZWVuLl9zdGFydEF0LCBfdGlueU51bSwgX3RpbnlOdW0pOyAvL2Vuc3VyZXMgdGhhdCB0aGUgaW5pdGlhbCB2YWx1ZXMgYXJlIHJlY29yZGVkXG5cbiAgICAgICAgfSBlbHNlIGlmICghdGltZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHR3ZWVuLl9wdCA9IHR3ZWVuLl9wdENhY2hlID0gMDtcbiAgICBsYXp5ID0gZHVyICYmIF9pc05vdEZhbHNlKGxhenkpIHx8IGxhenkgJiYgIWR1cjtcblxuICAgIGZvciAoaSA9IDA7IGkgPCB0YXJnZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0YXJnZXQgPSB0YXJnZXRzW2ldO1xuICAgICAgZ3NEYXRhID0gdGFyZ2V0Ll9nc2FwIHx8IF9oYXJuZXNzKHRhcmdldHMpW2ldLl9nc2FwO1xuICAgICAgdHdlZW4uX3B0TG9va3VwW2ldID0gcHRMb29rdXAgPSB7fTtcbiAgICAgIF9sYXp5TG9va3VwW2dzRGF0YS5pZF0gJiYgX2xhenlUd2VlbnMubGVuZ3RoICYmIF9sYXp5UmVuZGVyKCk7IC8vaWYgb3RoZXIgdHdlZW5zIG9mIHRoZSBzYW1lIHRhcmdldCBoYXZlIHJlY2VudGx5IGluaXR0ZWQgYnV0IGhhdmVuJ3QgcmVuZGVyZWQgeWV0LCB3ZSd2ZSBnb3QgdG8gZm9yY2UgdGhlIHJlbmRlciBzbyB0aGF0IHRoZSBzdGFydGluZyB2YWx1ZXMgYXJlIGNvcnJlY3QgKGltYWdpbmUgcG9wdWxhdGluZyBhIHRpbWVsaW5lIHdpdGggYSBidW5jaCBvZiBzZXF1ZW50aWFsIHR3ZWVucyBhbmQgdGhlbiBqdW1waW5nIHRvIHRoZSBlbmQpXG5cbiAgICAgIGluZGV4ID0gZnVsbFRhcmdldHMgPT09IHRhcmdldHMgPyBpIDogZnVsbFRhcmdldHMuaW5kZXhPZih0YXJnZXQpO1xuXG4gICAgICBpZiAoaGFybmVzcyAmJiAocGx1Z2luID0gbmV3IGhhcm5lc3MoKSkuaW5pdCh0YXJnZXQsIGhhcm5lc3NWYXJzIHx8IGNsZWFuVmFycywgdHdlZW4sIGluZGV4LCBmdWxsVGFyZ2V0cykgIT09IGZhbHNlKSB7XG4gICAgICAgIHR3ZWVuLl9wdCA9IHB0ID0gbmV3IFByb3BUd2Vlbih0d2Vlbi5fcHQsIHRhcmdldCwgcGx1Z2luLm5hbWUsIDAsIDEsIHBsdWdpbi5yZW5kZXIsIHBsdWdpbiwgMCwgcGx1Z2luLnByaW9yaXR5KTtcblxuICAgICAgICBwbHVnaW4uX3Byb3BzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICBwdExvb2t1cFtuYW1lXSA9IHB0O1xuICAgICAgICB9KTtcblxuICAgICAgICBwbHVnaW4ucHJpb3JpdHkgJiYgKGhhc1ByaW9yaXR5ID0gMSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaGFybmVzcyB8fCBoYXJuZXNzVmFycykge1xuICAgICAgICBmb3IgKHAgaW4gY2xlYW5WYXJzKSB7XG4gICAgICAgICAgaWYgKF9wbHVnaW5zW3BdICYmIChwbHVnaW4gPSBfY2hlY2tQbHVnaW4ocCwgY2xlYW5WYXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldCwgZnVsbFRhcmdldHMpKSkge1xuICAgICAgICAgICAgcGx1Z2luLnByaW9yaXR5ICYmIChoYXNQcmlvcml0eSA9IDEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwdExvb2t1cFtwXSA9IHB0ID0gX2FkZFByb3BUd2Vlbi5jYWxsKHR3ZWVuLCB0YXJnZXQsIHAsIFwiZ2V0XCIsIGNsZWFuVmFyc1twXSwgaW5kZXgsIGZ1bGxUYXJnZXRzLCAwLCB2YXJzLnN0cmluZ0ZpbHRlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHR3ZWVuLl9vcCAmJiB0d2Vlbi5fb3BbaV0gJiYgdHdlZW4ua2lsbCh0YXJnZXQsIHR3ZWVuLl9vcFtpXSk7XG5cbiAgICAgIGlmIChhdXRvT3ZlcndyaXRlICYmIHR3ZWVuLl9wdCkge1xuICAgICAgICBfb3ZlcndyaXRpbmdUd2VlbiA9IHR3ZWVuO1xuXG4gICAgICAgIF9nbG9iYWxUaW1lbGluZS5raWxsVHdlZW5zT2YodGFyZ2V0LCBwdExvb2t1cCwgdHdlZW4uZ2xvYmFsVGltZSh0aW1lKSk7IC8vIG1ha2Ugc3VyZSB0aGUgb3ZlcndyaXRpbmcgZG9lc24ndCBvdmVyd3JpdGUgVEhJUyB0d2VlbiEhIVxuXG5cbiAgICAgICAgb3ZlcndyaXR0ZW4gPSAhdHdlZW4ucGFyZW50O1xuICAgICAgICBfb3ZlcndyaXRpbmdUd2VlbiA9IDA7XG4gICAgICB9XG5cbiAgICAgIHR3ZWVuLl9wdCAmJiBsYXp5ICYmIChfbGF6eUxvb2t1cFtnc0RhdGEuaWRdID0gMSk7XG4gICAgfVxuXG4gICAgaGFzUHJpb3JpdHkgJiYgX3NvcnRQcm9wVHdlZW5zQnlQcmlvcml0eSh0d2Vlbik7XG4gICAgdHdlZW4uX29uSW5pdCAmJiB0d2Vlbi5fb25Jbml0KHR3ZWVuKTsgLy9wbHVnaW5zIGxpa2UgUm91bmRQcm9wcyBtdXN0IHdhaXQgdW50aWwgQUxMIG9mIHRoZSBQcm9wVHdlZW5zIGFyZSBpbnN0YW50aWF0ZWQuIEluIHRoZSBwbHVnaW4ncyBpbml0KCkgZnVuY3Rpb24sIGl0IHNldHMgdGhlIF9vbkluaXQgb24gdGhlIHR3ZWVuIGluc3RhbmNlLiBNYXkgbm90IGJlIHByZXR0eS9pbnR1aXRpdmUsIGJ1dCBpdCdzIGZhc3QgYW5kIGtlZXBzIGZpbGUgc2l6ZSBkb3duLlxuICB9XG5cbiAgdHdlZW4uX29uVXBkYXRlID0gb25VcGRhdGU7XG4gIHR3ZWVuLl9pbml0dGVkID0gKCF0d2Vlbi5fb3AgfHwgdHdlZW4uX3B0KSAmJiAhb3ZlcndyaXR0ZW47IC8vIGlmIG92ZXJ3cml0dGVuUHJvcHMgcmVzdWx0ZWQgaW4gdGhlIGVudGlyZSB0d2VlbiBiZWluZyBraWxsZWQsIGRvIE5PVCBmbGFnIGl0IGFzIGluaXR0ZWQgb3IgZWxzZSBpdCBtYXkgcmVuZGVyIGZvciBvbmUgdGljay5cblxuICBrZXlmcmFtZXMgJiYgdGltZSA8PSAwICYmIHRsLnJlbmRlcihfYmlnTnVtLCB0cnVlLCB0cnVlKTsgLy8gaWYgdGhlcmUncyBhIDAlIGtleWZyYW1lLCBpdCdsbCByZW5kZXIgaW4gdGhlIFwiYmVmb3JlXCIgc3RhdGUgZm9yIGFueSBzdGFnZ2VyZWQvZGVsYXllZCBhbmltYXRpb25zIHRodXMgd2hlbiB0aGUgZm9sbG93aW5nIHR3ZWVuIGluaXRpYWxpemVzLCBpdCdsbCB1c2UgdGhlIFwiYmVmb3JlXCIgc3RhdGUgaW5zdGVhZCBvZiB0aGUgXCJhZnRlclwiIHN0YXRlIGFzIHRoZSBpbml0aWFsIHZhbHVlcy5cbn0sXG4gICAgX3VwZGF0ZVByb3BUd2VlbnMgPSBmdW5jdGlvbiBfdXBkYXRlUHJvcFR3ZWVucyh0d2VlbiwgcHJvcGVydHksIHZhbHVlLCBzdGFydCwgc3RhcnRJc1JlbGF0aXZlLCByYXRpbywgdGltZSkge1xuICB2YXIgcHRDYWNoZSA9ICh0d2Vlbi5fcHQgJiYgdHdlZW4uX3B0Q2FjaGUgfHwgKHR3ZWVuLl9wdENhY2hlID0ge30pKVtwcm9wZXJ0eV0sXG4gICAgICBwdCxcbiAgICAgIHJvb3RQVCxcbiAgICAgIGxvb2t1cCxcbiAgICAgIGk7XG5cbiAgaWYgKCFwdENhY2hlKSB7XG4gICAgcHRDYWNoZSA9IHR3ZWVuLl9wdENhY2hlW3Byb3BlcnR5XSA9IFtdO1xuICAgIGxvb2t1cCA9IHR3ZWVuLl9wdExvb2t1cDtcbiAgICBpID0gdHdlZW4uX3RhcmdldHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgcHQgPSBsb29rdXBbaV1bcHJvcGVydHldO1xuXG4gICAgICBpZiAocHQgJiYgcHQuZCAmJiBwdC5kLl9wdCkge1xuICAgICAgICAvLyBpdCdzIGEgcGx1Z2luLCBzbyBmaW5kIHRoZSBuZXN0ZWQgUHJvcFR3ZWVuXG4gICAgICAgIHB0ID0gcHQuZC5fcHQ7XG5cbiAgICAgICAgd2hpbGUgKHB0ICYmIHB0LnAgIT09IHByb3BlcnR5ICYmIHB0LmZwICE9PSBwcm9wZXJ0eSkge1xuICAgICAgICAgIC8vIFwiZnBcIiBpcyBmdW5jdGlvblBhcmFtIGZvciB0aGluZ3MgbGlrZSBzZXR0aW5nIENTUyB2YXJpYWJsZXMgd2hpY2ggcmVxdWlyZSAuc2V0UHJvcGVydHkoXCItLXZhci1uYW1lXCIsIHZhbHVlKVxuICAgICAgICAgIHB0ID0gcHQuX25leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFwdCkge1xuICAgICAgICAvLyB0aGVyZSBpcyBubyBQcm9wVHdlZW4gYXNzb2NpYXRlZCB3aXRoIHRoYXQgcHJvcGVydHksIHNvIHdlIG11c3QgRk9SQ0Ugb25lIHRvIGJlIGNyZWF0ZWQgYW5kIGRpdGNoIG91dCBvZiB0aGlzXG4gICAgICAgIC8vIGlmIHRoZSB0d2VlbiBoYXMgb3RoZXIgcHJvcGVydGllcyB0aGF0IGFscmVhZHkgcmVuZGVyZWQgYXQgbmV3IHBvc2l0aW9ucywgd2UnZCBub3JtYWxseSBoYXZlIHRvIHJld2luZCB0byBwdXQgdGhlbSBiYWNrIGxpa2UgdHdlZW4ucmVuZGVyKDAsIHRydWUpIGJlZm9yZSBmb3JjaW5nIGFuIF9pbml0VHdlZW4oKSwgYnV0IHRoYXQgY2FuIGNyZWF0ZSBhbm90aGVyIGVkZ2UgY2FzZSBsaWtlIHR3ZWVuaW5nIGEgdGltZWxpbmUncyBwcm9ncmVzcyB3b3VsZCB0cmlnZ2VyIG9uVXBkYXRlcyB0byBmaXJlIHdoaWNoIGNvdWxkIG1vdmUgb3RoZXIgdGhpbmdzIGFyb3VuZC4gSXQncyBiZXR0ZXIgdG8ganVzdCBpbmZvcm0gdXNlcnMgdGhhdCAucmVzZXRUbygpIHNob3VsZCBPTkxZIGJlIHVzZWQgZm9yIHR3ZWVucyB0aGF0IGFscmVhZHkgaGF2ZSB0aGF0IHByb3BlcnR5LiBGb3IgZXhhbXBsZSwgeW91IGNhbid0IGdzYXAudG8oLi4ueyB5OiAwIH0pIGFuZCB0aGVuIHR3ZWVuLnJlc3RUbyhcInhcIiwgMjAwKSBmb3IgZXhhbXBsZS5cbiAgICAgICAgX2ZvcmNlQWxsUHJvcFR3ZWVucyA9IDE7IC8vIG90aGVyd2lzZSwgd2hlbiB3ZSBfYWRkUHJvcFR3ZWVuKCkgYW5kIGl0IGZpbmRzIG5vIGNoYW5nZSBiZXR3ZWVuIHRoZSBzdGFydCBhbmQgZW5kIHZhbHVlcywgaXQgc2tpcHMgY3JlYXRpbmcgYSBQcm9wVHdlZW4gKGZvciBlZmZpY2llbmN5Li4ud2h5IHR3ZWVuIHdoZW4gdGhlcmUncyBubyBkaWZmZXJlbmNlPykgYnV0IGluIHRoaXMgY2FzZSB3ZSBORUVEIHRoYXQgUHJvcFR3ZWVuIGNyZWF0ZWQgc28gd2UgY2FuIGVkaXQgaXQuXG5cbiAgICAgICAgdHdlZW4udmFyc1twcm9wZXJ0eV0gPSBcIis9MFwiO1xuXG4gICAgICAgIF9pbml0VHdlZW4odHdlZW4sIHRpbWUpO1xuXG4gICAgICAgIF9mb3JjZUFsbFByb3BUd2VlbnMgPSAwO1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cblxuICAgICAgcHRDYWNoZS5wdXNoKHB0KTtcbiAgICB9XG4gIH1cblxuICBpID0gcHRDYWNoZS5sZW5ndGg7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIHJvb3RQVCA9IHB0Q2FjaGVbaV07XG4gICAgcHQgPSByb290UFQuX3B0IHx8IHJvb3RQVDsgLy8gY29tcGxleCB2YWx1ZXMgbWF5IGhhdmUgbmVzdGVkIFByb3BUd2VlbnMuIFdlIG9ubHkgYWNjb21tb2RhdGUgdGhlIEZJUlNUIHZhbHVlLlxuXG4gICAgcHQucyA9IChzdGFydCB8fCBzdGFydCA9PT0gMCkgJiYgIXN0YXJ0SXNSZWxhdGl2ZSA/IHN0YXJ0IDogcHQucyArIChzdGFydCB8fCAwKSArIHJhdGlvICogcHQuYztcbiAgICBwdC5jID0gdmFsdWUgLSBwdC5zO1xuICAgIHJvb3RQVC5lICYmIChyb290UFQuZSA9IF9yb3VuZCh2YWx1ZSkgKyBnZXRVbml0KHJvb3RQVC5lKSk7IC8vIG1haW5seSBmb3IgQ1NTUGx1Z2luIChlbmQgdmFsdWUpXG5cbiAgICByb290UFQuYiAmJiAocm9vdFBULmIgPSBwdC5zICsgZ2V0VW5pdChyb290UFQuYikpOyAvLyAoYmVnaW5uaW5nIHZhbHVlKVxuICB9XG59LFxuICAgIF9hZGRBbGlhc2VzVG9WYXJzID0gZnVuY3Rpb24gX2FkZEFsaWFzZXNUb1ZhcnModGFyZ2V0cywgdmFycykge1xuICB2YXIgaGFybmVzcyA9IHRhcmdldHNbMF0gPyBfZ2V0Q2FjaGUodGFyZ2V0c1swXSkuaGFybmVzcyA6IDAsXG4gICAgICBwcm9wZXJ0eUFsaWFzZXMgPSBoYXJuZXNzICYmIGhhcm5lc3MuYWxpYXNlcyxcbiAgICAgIGNvcHksXG4gICAgICBwLFxuICAgICAgaSxcbiAgICAgIGFsaWFzZXM7XG5cbiAgaWYgKCFwcm9wZXJ0eUFsaWFzZXMpIHtcbiAgICByZXR1cm4gdmFycztcbiAgfVxuXG4gIGNvcHkgPSBfbWVyZ2Uoe30sIHZhcnMpO1xuXG4gIGZvciAocCBpbiBwcm9wZXJ0eUFsaWFzZXMpIHtcbiAgICBpZiAocCBpbiBjb3B5KSB7XG4gICAgICBhbGlhc2VzID0gcHJvcGVydHlBbGlhc2VzW3BdLnNwbGl0KFwiLFwiKTtcbiAgICAgIGkgPSBhbGlhc2VzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBjb3B5W2FsaWFzZXNbaV1dID0gY29weVtwXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29weTtcbn0sXG4gICAgLy8gcGFyc2VzIG11bHRpcGxlIGZvcm1hdHMsIGxpa2Uge1wiMCVcIjoge3g6IDEwMH0sIHtcIjUwJVwiOiB7eDogLTIwfX0gYW5kIHsgeDoge1wiMCVcIjogMTAwLCBcIjUwJVwiOiAtMjB9IH0sIGFuZCBhbiBcImVhc2VcIiBjYW4gYmUgc2V0IG9uIGFueSBvYmplY3QuIFdlIHBvcHVsYXRlIGFuIFwiYWxsUHJvcHNcIiBvYmplY3Qgd2l0aCBhbiBBcnJheSBmb3IgZWFjaCBwcm9wZXJ0eSwgbGlrZSB7eDogW3t9LCB7fV0sIHk6W3t9LCB7fV19IHdpdGggZGF0YSBmb3IgZWFjaCBwcm9wZXJ0eSB0d2Vlbi4gVGhlIG9iamVjdHMgaGF2ZSBhIFwidFwiICh0aW1lKSwgXCJ2XCIsICh2YWx1ZSksIGFuZCBcImVcIiAoZWFzZSkgcHJvcGVydHkuIFRoaXMgYWxsb3dzIHVzIHRvIHBpZWNlIHRvZ2V0aGVyIGEgdGltZWxpbmUgbGF0ZXIuXG5fcGFyc2VLZXlmcmFtZSA9IGZ1bmN0aW9uIF9wYXJzZUtleWZyYW1lKHByb3AsIG9iaiwgYWxsUHJvcHMsIGVhc2VFYWNoKSB7XG4gIHZhciBlYXNlID0gb2JqLmVhc2UgfHwgZWFzZUVhY2ggfHwgXCJwb3dlcjEuaW5PdXRcIixcbiAgICAgIHAsXG4gICAgICBhO1xuXG4gIGlmIChfaXNBcnJheShvYmopKSB7XG4gICAgYSA9IGFsbFByb3BzW3Byb3BdIHx8IChhbGxQcm9wc1twcm9wXSA9IFtdKTsgLy8gdCA9IHRpbWUgKG91dCBvZiAxMDApLCB2ID0gdmFsdWUsIGUgPSBlYXNlXG5cbiAgICBvYmouZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGkpIHtcbiAgICAgIHJldHVybiBhLnB1c2goe1xuICAgICAgICB0OiBpIC8gKG9iai5sZW5ndGggLSAxKSAqIDEwMCxcbiAgICAgICAgdjogdmFsdWUsXG4gICAgICAgIGU6IGVhc2VcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGZvciAocCBpbiBvYmopIHtcbiAgICAgIGEgPSBhbGxQcm9wc1twXSB8fCAoYWxsUHJvcHNbcF0gPSBbXSk7XG4gICAgICBwID09PSBcImVhc2VcIiB8fCBhLnB1c2goe1xuICAgICAgICB0OiBwYXJzZUZsb2F0KHByb3ApLFxuICAgICAgICB2OiBvYmpbcF0sXG4gICAgICAgIGU6IGVhc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSxcbiAgICBfcGFyc2VGdW5jT3JTdHJpbmcgPSBmdW5jdGlvbiBfcGFyc2VGdW5jT3JTdHJpbmcodmFsdWUsIHR3ZWVuLCBpLCB0YXJnZXQsIHRhcmdldHMpIHtcbiAgcmV0dXJuIF9pc0Z1bmN0aW9uKHZhbHVlKSA/IHZhbHVlLmNhbGwodHdlZW4sIGksIHRhcmdldCwgdGFyZ2V0cykgOiBfaXNTdHJpbmcodmFsdWUpICYmIH52YWx1ZS5pbmRleE9mKFwicmFuZG9tKFwiKSA/IF9yZXBsYWNlUmFuZG9tKHZhbHVlKSA6IHZhbHVlO1xufSxcbiAgICBfc3RhZ2dlclR3ZWVuUHJvcHMgPSBfY2FsbGJhY2tOYW1lcyArIFwicmVwZWF0LHJlcGVhdERlbGF5LHlveW8scmVwZWF0UmVmcmVzaCx5b3lvRWFzZSxhdXRvUmV2ZXJ0XCIsXG4gICAgX3N0YWdnZXJQcm9wc1RvU2tpcCA9IHt9O1xuXG5fZm9yRWFjaE5hbWUoX3N0YWdnZXJUd2VlblByb3BzICsgXCIsaWQsc3RhZ2dlcixkZWxheSxkdXJhdGlvbixwYXVzZWQsc2Nyb2xsVHJpZ2dlclwiLCBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gX3N0YWdnZXJQcm9wc1RvU2tpcFtuYW1lXSA9IDE7XG59KTtcbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVFdFRU5cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuXG5leHBvcnQgdmFyIFR3ZWVuID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQW5pbWF0aW9uMikge1xuICBfaW5oZXJpdHNMb29zZShUd2VlbiwgX0FuaW1hdGlvbjIpO1xuXG4gIGZ1bmN0aW9uIFR3ZWVuKHRhcmdldHMsIHZhcnMsIHBvc2l0aW9uLCBza2lwSW5oZXJpdCkge1xuICAgIHZhciBfdGhpczM7XG5cbiAgICBpZiAodHlwZW9mIHZhcnMgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHBvc2l0aW9uLmR1cmF0aW9uID0gdmFycztcbiAgICAgIHZhcnMgPSBwb3NpdGlvbjtcbiAgICAgIHBvc2l0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICBfdGhpczMgPSBfQW5pbWF0aW9uMi5jYWxsKHRoaXMsIHNraXBJbmhlcml0ID8gdmFycyA6IF9pbmhlcml0RGVmYXVsdHModmFycykpIHx8IHRoaXM7XG4gICAgdmFyIF90aGlzMyR2YXJzID0gX3RoaXMzLnZhcnMsXG4gICAgICAgIGR1cmF0aW9uID0gX3RoaXMzJHZhcnMuZHVyYXRpb24sXG4gICAgICAgIGRlbGF5ID0gX3RoaXMzJHZhcnMuZGVsYXksXG4gICAgICAgIGltbWVkaWF0ZVJlbmRlciA9IF90aGlzMyR2YXJzLmltbWVkaWF0ZVJlbmRlcixcbiAgICAgICAgc3RhZ2dlciA9IF90aGlzMyR2YXJzLnN0YWdnZXIsXG4gICAgICAgIG92ZXJ3cml0ZSA9IF90aGlzMyR2YXJzLm92ZXJ3cml0ZSxcbiAgICAgICAga2V5ZnJhbWVzID0gX3RoaXMzJHZhcnMua2V5ZnJhbWVzLFxuICAgICAgICBkZWZhdWx0cyA9IF90aGlzMyR2YXJzLmRlZmF1bHRzLFxuICAgICAgICBzY3JvbGxUcmlnZ2VyID0gX3RoaXMzJHZhcnMuc2Nyb2xsVHJpZ2dlcixcbiAgICAgICAgeW95b0Vhc2UgPSBfdGhpczMkdmFycy55b3lvRWFzZSxcbiAgICAgICAgcGFyZW50ID0gdmFycy5wYXJlbnQgfHwgX2dsb2JhbFRpbWVsaW5lLFxuICAgICAgICBwYXJzZWRUYXJnZXRzID0gKF9pc0FycmF5KHRhcmdldHMpIHx8IF9pc1R5cGVkQXJyYXkodGFyZ2V0cykgPyBfaXNOdW1iZXIodGFyZ2V0c1swXSkgOiBcImxlbmd0aFwiIGluIHZhcnMpID8gW3RhcmdldHNdIDogdG9BcnJheSh0YXJnZXRzKSxcbiAgICAgICAgdGwsXG4gICAgICAgIGksXG4gICAgICAgIGNvcHksXG4gICAgICAgIGwsXG4gICAgICAgIHAsXG4gICAgICAgIGN1clRhcmdldCxcbiAgICAgICAgc3RhZ2dlckZ1bmMsXG4gICAgICAgIHN0YWdnZXJWYXJzVG9NZXJnZTtcbiAgICBfdGhpczMuX3RhcmdldHMgPSBwYXJzZWRUYXJnZXRzLmxlbmd0aCA/IF9oYXJuZXNzKHBhcnNlZFRhcmdldHMpIDogX3dhcm4oXCJHU0FQIHRhcmdldCBcIiArIHRhcmdldHMgKyBcIiBub3QgZm91bmQuIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbVwiLCAhX2NvbmZpZy5udWxsVGFyZ2V0V2FybikgfHwgW107XG4gICAgX3RoaXMzLl9wdExvb2t1cCA9IFtdOyAvL1Byb3BUd2VlbiBsb29rdXAuIEFuIGFycmF5IGNvbnRhaW5pbmcgYW4gb2JqZWN0IGZvciBlYWNoIHRhcmdldCwgaGF2aW5nIGtleXMgZm9yIGVhY2ggdHdlZW5pbmcgcHJvcGVydHlcblxuICAgIF90aGlzMy5fb3ZlcndyaXRlID0gb3ZlcndyaXRlO1xuXG4gICAgaWYgKGtleWZyYW1lcyB8fCBzdGFnZ2VyIHx8IF9pc0Z1bmNPclN0cmluZyhkdXJhdGlvbikgfHwgX2lzRnVuY09yU3RyaW5nKGRlbGF5KSkge1xuICAgICAgdmFycyA9IF90aGlzMy52YXJzO1xuICAgICAgdGwgPSBfdGhpczMudGltZWxpbmUgPSBuZXcgVGltZWxpbmUoe1xuICAgICAgICBkYXRhOiBcIm5lc3RlZFwiLFxuICAgICAgICBkZWZhdWx0czogZGVmYXVsdHMgfHwge30sXG4gICAgICAgIHRhcmdldHM6IHBhcmVudCAmJiBwYXJlbnQuZGF0YSA9PT0gXCJuZXN0ZWRcIiA/IHBhcmVudC52YXJzLnRhcmdldHMgOiBwYXJzZWRUYXJnZXRzXG4gICAgICB9KTsgLy8gd2UgbmVlZCB0byBzdG9yZSB0aGUgdGFyZ2V0cyBiZWNhdXNlIGZvciBzdGFnZ2VycyBhbmQga2V5ZnJhbWVzLCB3ZSBlbmQgdXAgY3JlYXRpbmcgYW4gaW5kaXZpZHVhbCB0d2VlbiBmb3IgZWFjaCBidXQgZnVuY3Rpb24tYmFzZWQgdmFsdWVzIG5lZWQgdG8ga25vdyB0aGUgaW5kZXggYW5kIHRoZSB3aG9sZSBBcnJheSBvZiB0YXJnZXRzLlxuXG4gICAgICB0bC5raWxsKCk7XG4gICAgICB0bC5wYXJlbnQgPSB0bC5fZHAgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMyk7XG4gICAgICB0bC5fc3RhcnQgPSAwO1xuXG4gICAgICBpZiAoc3RhZ2dlciB8fCBfaXNGdW5jT3JTdHJpbmcoZHVyYXRpb24pIHx8IF9pc0Z1bmNPclN0cmluZyhkZWxheSkpIHtcbiAgICAgICAgbCA9IHBhcnNlZFRhcmdldHMubGVuZ3RoO1xuICAgICAgICBzdGFnZ2VyRnVuYyA9IHN0YWdnZXIgJiYgZGlzdHJpYnV0ZShzdGFnZ2VyKTtcblxuICAgICAgICBpZiAoX2lzT2JqZWN0KHN0YWdnZXIpKSB7XG4gICAgICAgICAgLy91c2VycyBjYW4gcGFzcyBpbiBjYWxsYmFja3MgbGlrZSBvblN0YXJ0L29uQ29tcGxldGUgaW4gdGhlIHN0YWdnZXIgb2JqZWN0LiBUaGVzZSBzaG91bGQgZmlyZSB3aXRoIGVhY2ggaW5kaXZpZHVhbCB0d2Vlbi5cbiAgICAgICAgICBmb3IgKHAgaW4gc3RhZ2dlcikge1xuICAgICAgICAgICAgaWYgKH5fc3RhZ2dlclR3ZWVuUHJvcHMuaW5kZXhPZihwKSkge1xuICAgICAgICAgICAgICBzdGFnZ2VyVmFyc1RvTWVyZ2UgfHwgKHN0YWdnZXJWYXJzVG9NZXJnZSA9IHt9KTtcbiAgICAgICAgICAgICAgc3RhZ2dlclZhcnNUb01lcmdlW3BdID0gc3RhZ2dlcltwXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgY29weSA9IF9jb3B5RXhjbHVkaW5nKHZhcnMsIF9zdGFnZ2VyUHJvcHNUb1NraXApO1xuICAgICAgICAgIGNvcHkuc3RhZ2dlciA9IDA7XG4gICAgICAgICAgeW95b0Vhc2UgJiYgKGNvcHkueW95b0Vhc2UgPSB5b3lvRWFzZSk7XG4gICAgICAgICAgc3RhZ2dlclZhcnNUb01lcmdlICYmIF9tZXJnZShjb3B5LCBzdGFnZ2VyVmFyc1RvTWVyZ2UpO1xuICAgICAgICAgIGN1clRhcmdldCA9IHBhcnNlZFRhcmdldHNbaV07IC8vZG9uJ3QganVzdCBjb3B5IGR1cmF0aW9uIG9yIGRlbGF5IGJlY2F1c2UgaWYgdGhleSdyZSBhIHN0cmluZyBvciBmdW5jdGlvbiwgd2UnZCBlbmQgdXAgaW4gYW4gaW5maW5pdGUgbG9vcCBiZWNhdXNlIF9pc0Z1bmNPclN0cmluZygpIHdvdWxkIGV2YWx1YXRlIGFzIHRydWUgaW4gdGhlIGNoaWxkIHR3ZWVucywgZW50ZXJpbmcgdGhpcyBsb29wLCBldGMuIFNvIHdlIHBhcnNlIHRoZSB2YWx1ZSBzdHJhaWdodCBmcm9tIHZhcnMgYW5kIGRlZmF1bHQgdG8gMC5cblxuICAgICAgICAgIGNvcHkuZHVyYXRpb24gPSArX3BhcnNlRnVuY09yU3RyaW5nKGR1cmF0aW9uLCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMyksIGksIGN1clRhcmdldCwgcGFyc2VkVGFyZ2V0cyk7XG4gICAgICAgICAgY29weS5kZWxheSA9ICgrX3BhcnNlRnVuY09yU3RyaW5nKGRlbGF5LCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMyksIGksIGN1clRhcmdldCwgcGFyc2VkVGFyZ2V0cykgfHwgMCkgLSBfdGhpczMuX2RlbGF5O1xuXG4gICAgICAgICAgaWYgKCFzdGFnZ2VyICYmIGwgPT09IDEgJiYgY29weS5kZWxheSkge1xuICAgICAgICAgICAgLy8gaWYgc29tZW9uZSBkb2VzIGRlbGF5OlwicmFuZG9tKDEsIDUpXCIsIHJlcGVhdDotMSwgZm9yIGV4YW1wbGUsIHRoZSBkZWxheSBzaG91bGRuJ3QgYmUgaW5zaWRlIHRoZSByZXBlYXQuXG4gICAgICAgICAgICBfdGhpczMuX2RlbGF5ID0gZGVsYXkgPSBjb3B5LmRlbGF5O1xuICAgICAgICAgICAgX3RoaXMzLl9zdGFydCArPSBkZWxheTtcbiAgICAgICAgICAgIGNvcHkuZGVsYXkgPSAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRsLnRvKGN1clRhcmdldCwgY29weSwgc3RhZ2dlckZ1bmMgPyBzdGFnZ2VyRnVuYyhpLCBjdXJUYXJnZXQsIHBhcnNlZFRhcmdldHMpIDogMCk7XG4gICAgICAgICAgdGwuX2Vhc2UgPSBfZWFzZU1hcC5ub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgdGwuZHVyYXRpb24oKSA/IGR1cmF0aW9uID0gZGVsYXkgPSAwIDogX3RoaXMzLnRpbWVsaW5lID0gMDsgLy8gaWYgdGhlIHRpbWVsaW5lJ3MgZHVyYXRpb24gaXMgMCwgd2UgZG9uJ3QgbmVlZCBhIHRpbWVsaW5lIGludGVybmFsbHkhXG4gICAgICB9IGVsc2UgaWYgKGtleWZyYW1lcykge1xuICAgICAgICBfaW5oZXJpdERlZmF1bHRzKF9zZXREZWZhdWx0cyh0bC52YXJzLmRlZmF1bHRzLCB7XG4gICAgICAgICAgZWFzZTogXCJub25lXCJcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHRsLl9lYXNlID0gX3BhcnNlRWFzZShrZXlmcmFtZXMuZWFzZSB8fCB2YXJzLmVhc2UgfHwgXCJub25lXCIpO1xuICAgICAgICB2YXIgdGltZSA9IDAsXG4gICAgICAgICAgICBhLFxuICAgICAgICAgICAga2YsXG4gICAgICAgICAgICB2O1xuXG4gICAgICAgIGlmIChfaXNBcnJheShrZXlmcmFtZXMpKSB7XG4gICAgICAgICAga2V5ZnJhbWVzLmZvckVhY2goZnVuY3Rpb24gKGZyYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGwudG8ocGFyc2VkVGFyZ2V0cywgZnJhbWUsIFwiPlwiKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0bC5kdXJhdGlvbigpOyAvLyB0byBlbnN1cmUgdGwuX2R1ciBpcyBjYWNoZWQgYmVjYXVzZSB3ZSB0YXAgaW50byBpdCBmb3IgcGVyZm9ybWFuY2UgcHVycG9zZXMgaW4gdGhlIHJlbmRlcigpIG1ldGhvZC5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb3B5ID0ge307XG5cbiAgICAgICAgICBmb3IgKHAgaW4ga2V5ZnJhbWVzKSB7XG4gICAgICAgICAgICBwID09PSBcImVhc2VcIiB8fCBwID09PSBcImVhc2VFYWNoXCIgfHwgX3BhcnNlS2V5ZnJhbWUocCwga2V5ZnJhbWVzW3BdLCBjb3B5LCBrZXlmcmFtZXMuZWFzZUVhY2gpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAocCBpbiBjb3B5KSB7XG4gICAgICAgICAgICBhID0gY29weVtwXS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhLnQgLSBiLnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRpbWUgPSAwO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBrZiA9IGFbaV07XG4gICAgICAgICAgICAgIHYgPSB7XG4gICAgICAgICAgICAgICAgZWFzZToga2YuZSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogKGtmLnQgLSAoaSA/IGFbaSAtIDFdLnQgOiAwKSkgLyAxMDAgKiBkdXJhdGlvblxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB2W3BdID0ga2YudjtcbiAgICAgICAgICAgICAgdGwudG8ocGFyc2VkVGFyZ2V0cywgdiwgdGltZSk7XG4gICAgICAgICAgICAgIHRpbWUgKz0gdi5kdXJhdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0bC5kdXJhdGlvbigpIDwgZHVyYXRpb24gJiYgdGwudG8oe30sIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbiAtIHRsLmR1cmF0aW9uKClcbiAgICAgICAgICB9KTsgLy8gaW4gY2FzZSBrZXlmcmFtZXMgZGlkbid0IGdvIHRvIDEwMCVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkdXJhdGlvbiB8fCBfdGhpczMuZHVyYXRpb24oZHVyYXRpb24gPSB0bC5kdXJhdGlvbigpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3RoaXMzLnRpbWVsaW5lID0gMDsgLy9zcGVlZCBvcHRpbWl6YXRpb24sIGZhc3RlciBsb29rdXBzIChubyBnb2luZyB1cCB0aGUgcHJvdG90eXBlIGNoYWluKVxuICAgIH1cblxuICAgIGlmIChvdmVyd3JpdGUgPT09IHRydWUgJiYgIV9zdXBwcmVzc092ZXJ3cml0ZXMpIHtcbiAgICAgIF9vdmVyd3JpdGluZ1R3ZWVuID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpO1xuXG4gICAgICBfZ2xvYmFsVGltZWxpbmUua2lsbFR3ZWVuc09mKHBhcnNlZFRhcmdldHMpO1xuXG4gICAgICBfb3ZlcndyaXRpbmdUd2VlbiA9IDA7XG4gICAgfVxuXG4gICAgX2FkZFRvVGltZWxpbmUocGFyZW50LCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMyksIHBvc2l0aW9uKTtcblxuICAgIHZhcnMucmV2ZXJzZWQgJiYgX3RoaXMzLnJldmVyc2UoKTtcbiAgICB2YXJzLnBhdXNlZCAmJiBfdGhpczMucGF1c2VkKHRydWUpO1xuXG4gICAgaWYgKGltbWVkaWF0ZVJlbmRlciB8fCAhZHVyYXRpb24gJiYgIWtleWZyYW1lcyAmJiBfdGhpczMuX3N0YXJ0ID09PSBfcm91bmRQcmVjaXNlKHBhcmVudC5fdGltZSkgJiYgX2lzTm90RmFsc2UoaW1tZWRpYXRlUmVuZGVyKSAmJiBfaGFzTm9QYXVzZWRBbmNlc3RvcnMoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpKSAmJiBwYXJlbnQuZGF0YSAhPT0gXCJuZXN0ZWRcIikge1xuICAgICAgX3RoaXMzLl90VGltZSA9IC1fdGlueU51bTsgLy9mb3JjZXMgYSByZW5kZXIgd2l0aG91dCBoYXZpbmcgdG8gc2V0IHRoZSByZW5kZXIoKSBcImZvcmNlXCIgcGFyYW1ldGVyIHRvIHRydWUgYmVjYXVzZSB3ZSB3YW50IHRvIGFsbG93IGxhenlpbmcgYnkgZGVmYXVsdCAodXNpbmcgdGhlIFwiZm9yY2VcIiBwYXJhbWV0ZXIgYWx3YXlzIGZvcmNlcyBhbiBpbW1lZGlhdGUgZnVsbCByZW5kZXIpXG5cbiAgICAgIF90aGlzMy5yZW5kZXIoTWF0aC5tYXgoMCwgLWRlbGF5KSB8fCAwKTsgLy9pbiBjYXNlIGRlbGF5IGlzIG5lZ2F0aXZlXG5cbiAgICB9XG5cbiAgICBzY3JvbGxUcmlnZ2VyICYmIF9zY3JvbGxUcmlnZ2VyKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKSwgc2Nyb2xsVHJpZ2dlcik7XG4gICAgcmV0dXJuIF90aGlzMztcbiAgfVxuXG4gIHZhciBfcHJvdG8zID0gVHdlZW4ucHJvdG90eXBlO1xuXG4gIF9wcm90bzMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB7XG4gICAgdmFyIHByZXZUaW1lID0gdGhpcy5fdGltZSxcbiAgICAgICAgdER1ciA9IHRoaXMuX3REdXIsXG4gICAgICAgIGR1ciA9IHRoaXMuX2R1cixcbiAgICAgICAgaXNOZWdhdGl2ZSA9IHRvdGFsVGltZSA8IDAsXG4gICAgICAgIHRUaW1lID0gdG90YWxUaW1lID4gdER1ciAtIF90aW55TnVtICYmICFpc05lZ2F0aXZlID8gdER1ciA6IHRvdGFsVGltZSA8IF90aW55TnVtID8gMCA6IHRvdGFsVGltZSxcbiAgICAgICAgdGltZSxcbiAgICAgICAgcHQsXG4gICAgICAgIGl0ZXJhdGlvbixcbiAgICAgICAgY3ljbGVEdXJhdGlvbixcbiAgICAgICAgcHJldkl0ZXJhdGlvbixcbiAgICAgICAgaXNZb3lvLFxuICAgICAgICByYXRpbyxcbiAgICAgICAgdGltZWxpbmUsXG4gICAgICAgIHlveW9FYXNlO1xuXG4gICAgaWYgKCFkdXIpIHtcbiAgICAgIF9yZW5kZXJaZXJvRHVyYXRpb25Ud2Vlbih0aGlzLCB0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgfSBlbHNlIGlmICh0VGltZSAhPT0gdGhpcy5fdFRpbWUgfHwgIXRvdGFsVGltZSB8fCBmb3JjZSB8fCAhdGhpcy5faW5pdHRlZCAmJiB0aGlzLl90VGltZSB8fCB0aGlzLl9zdGFydEF0ICYmIHRoaXMuX3pUaW1lIDwgMCAhPT0gaXNOZWdhdGl2ZSkge1xuICAgICAgLy90aGlzIHNlbnNlcyBpZiB3ZSdyZSBjcm9zc2luZyBvdmVyIHRoZSBzdGFydCB0aW1lLCBpbiB3aGljaCBjYXNlIHdlIG11c3QgcmVjb3JkIF96VGltZSBhbmQgZm9yY2UgdGhlIHJlbmRlciwgYnV0IHdlIGRvIGl0IGluIHRoaXMgbGVuZ3RoeSBjb25kaXRpb25hbCB3YXkgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMgKHVzdWFsbHkgd2UgY2FuIHNraXAgdGhlIGNhbGN1bGF0aW9ucyk6IHRoaXMuX2luaXR0ZWQgJiYgKHRoaXMuX3pUaW1lIDwgMCkgIT09ICh0b3RhbFRpbWUgPCAwKVxuICAgICAgdGltZSA9IHRUaW1lO1xuICAgICAgdGltZWxpbmUgPSB0aGlzLnRpbWVsaW5lO1xuXG4gICAgICBpZiAodGhpcy5fcmVwZWF0KSB7XG4gICAgICAgIC8vYWRqdXN0IHRoZSB0aW1lIGZvciByZXBlYXRzIGFuZCB5b3lvc1xuICAgICAgICBjeWNsZUR1cmF0aW9uID0gZHVyICsgdGhpcy5fckRlbGF5O1xuXG4gICAgICAgIGlmICh0aGlzLl9yZXBlYXQgPCAtMSAmJiBpc05lZ2F0aXZlKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudG90YWxUaW1lKGN5Y2xlRHVyYXRpb24gKiAxMDAgKyB0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aW1lID0gX3JvdW5kUHJlY2lzZSh0VGltZSAlIGN5Y2xlRHVyYXRpb24pOyAvL3JvdW5kIHRvIGF2b2lkIGZsb2F0aW5nIHBvaW50IGVycm9ycy4gKDQgJSAwLjggc2hvdWxkIGJlIDAgYnV0IHNvbWUgYnJvd3NlcnMgcmVwb3J0IGl0IGFzIDAuNzk5OTk5OTkhKVxuXG4gICAgICAgIGlmICh0VGltZSA9PT0gdER1cikge1xuICAgICAgICAgIC8vIHRoZSB0RHVyID09PSB0VGltZSBpcyBmb3IgZWRnZSBjYXNlcyB3aGVyZSB0aGVyZSdzIGEgbGVuZ3RoeSBkZWNpbWFsIG9uIHRoZSBkdXJhdGlvbiBhbmQgaXQgbWF5IHJlYWNoIHRoZSB2ZXJ5IGVuZCBidXQgdGhlIHRpbWUgaXMgcmVuZGVyZWQgYXMgbm90LXF1aXRlLXRoZXJlIChyZW1lbWJlciwgdER1ciBpcyByb3VuZGVkIHRvIDQgZGVjaW1hbHMgd2hlcmVhcyBkdXIgaXNuJ3QpXG4gICAgICAgICAgaXRlcmF0aW9uID0gdGhpcy5fcmVwZWF0O1xuICAgICAgICAgIHRpbWUgPSBkdXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlcmF0aW9uID0gfn4odFRpbWUgLyBjeWNsZUR1cmF0aW9uKTtcblxuICAgICAgICAgIGlmIChpdGVyYXRpb24gJiYgaXRlcmF0aW9uID09PSB0VGltZSAvIGN5Y2xlRHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRpbWUgPSBkdXI7XG4gICAgICAgICAgICBpdGVyYXRpb24tLTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aW1lID4gZHVyICYmICh0aW1lID0gZHVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzWW95byA9IHRoaXMuX3lveW8gJiYgaXRlcmF0aW9uICYgMTtcblxuICAgICAgICBpZiAoaXNZb3lvKSB7XG4gICAgICAgICAgeW95b0Vhc2UgPSB0aGlzLl95RWFzZTtcbiAgICAgICAgICB0aW1lID0gZHVyIC0gdGltZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByZXZJdGVyYXRpb24gPSBfYW5pbWF0aW9uQ3ljbGUodGhpcy5fdFRpbWUsIGN5Y2xlRHVyYXRpb24pO1xuXG4gICAgICAgIGlmICh0aW1lID09PSBwcmV2VGltZSAmJiAhZm9yY2UgJiYgdGhpcy5faW5pdHRlZCkge1xuICAgICAgICAgIC8vY291bGQgYmUgZHVyaW5nIHRoZSByZXBlYXREZWxheSBwYXJ0LiBObyBuZWVkIHRvIHJlbmRlciBhbmQgZmlyZSBjYWxsYmFja3MuXG4gICAgICAgICAgdGhpcy5fdFRpbWUgPSB0VGltZTtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVyYXRpb24gIT09IHByZXZJdGVyYXRpb24pIHtcbiAgICAgICAgICB0aW1lbGluZSAmJiB0aGlzLl95RWFzZSAmJiBfcHJvcGFnYXRlWW95b0Vhc2UodGltZWxpbmUsIGlzWW95byk7IC8vcmVwZWF0UmVmcmVzaCBmdW5jdGlvbmFsaXR5XG5cbiAgICAgICAgICBpZiAodGhpcy52YXJzLnJlcGVhdFJlZnJlc2ggJiYgIWlzWW95byAmJiAhdGhpcy5fbG9jaykge1xuICAgICAgICAgICAgdGhpcy5fbG9jayA9IGZvcmNlID0gMTsgLy9mb3JjZSwgb3RoZXJ3aXNlIGlmIGxhenkgaXMgdHJ1ZSwgdGhlIF9hdHRlbXB0SW5pdFR3ZWVuKCkgd2lsbCByZXR1cm4gYW5kIHdlJ2xsIGp1bXAgb3V0IGFuZCBnZXQgY2F1Z2h0IGJvdW5jaW5nIG9uIGVhY2ggdGljay5cblxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoX3JvdW5kUHJlY2lzZShjeWNsZUR1cmF0aW9uICogaXRlcmF0aW9uKSwgdHJ1ZSkuaW52YWxpZGF0ZSgpLl9sb2NrID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLl9pbml0dGVkKSB7XG4gICAgICAgIGlmIChfYXR0ZW1wdEluaXRUd2Vlbih0aGlzLCBpc05lZ2F0aXZlID8gdG90YWxUaW1lIDogdGltZSwgZm9yY2UsIHN1cHByZXNzRXZlbnRzLCB0VGltZSkpIHtcbiAgICAgICAgICB0aGlzLl90VGltZSA9IDA7IC8vIGluIGNvbnN0cnVjdG9yIGlmIGltbWVkaWF0ZVJlbmRlciBpcyB0cnVlLCB3ZSBzZXQgX3RUaW1lIHRvIC1fdGlueU51bSB0byBoYXZlIHRoZSBwbGF5aGVhZCBjcm9zcyB0aGUgc3RhcnRpbmcgcG9pbnQgYnV0IHdlIGNhbid0IGxlYXZlIF90VGltZSBhcyBhIG5lZ2F0aXZlIG51bWJlci5cblxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByZXZUaW1lICE9PSB0aGlzLl90aW1lKSB7XG4gICAgICAgICAgLy8gcmFyZSBlZGdlIGNhc2UgLSBkdXJpbmcgaW5pdGlhbGl6YXRpb24sIGFuIG9uVXBkYXRlIGluIHRoZSBfc3RhcnRBdCAoLmZyb21UbygpKSBtaWdodCBmb3JjZSB0aGlzIHR3ZWVuIHRvIHJlbmRlciBhdCBhIGRpZmZlcmVudCBzcG90IGluIHdoaWNoIGNhc2Ugd2Ugc2hvdWxkIGRpdGNoIHRoaXMgcmVuZGVyKCkgY2FsbCBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV2ZXJ0IHRoZSB2YWx1ZXMuXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZHVyICE9PSB0aGlzLl9kdXIpIHtcbiAgICAgICAgICAvLyB3aGlsZSBpbml0dGluZywgYSBwbHVnaW4gbGlrZSBJbmVydGlhUGx1Z2luIG1pZ2h0IGFsdGVyIHRoZSBkdXJhdGlvbiwgc28gcmVydW4gZnJvbSB0aGUgc3RhcnQgdG8gZW5zdXJlIGV2ZXJ5dGhpbmcgcmVuZGVycyBhcyBpdCBzaG91bGQuXG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl90VGltZSA9IHRUaW1lO1xuICAgICAgdGhpcy5fdGltZSA9IHRpbWU7XG5cbiAgICAgIGlmICghdGhpcy5fYWN0ICYmIHRoaXMuX3RzKSB7XG4gICAgICAgIHRoaXMuX2FjdCA9IDE7IC8vYXMgbG9uZyBhcyBpdCdzIG5vdCBwYXVzZWQsIGZvcmNlIGl0IHRvIGJlIGFjdGl2ZSBzbyB0aGF0IGlmIHRoZSB1c2VyIHJlbmRlcnMgaW5kZXBlbmRlbnQgb2YgdGhlIHBhcmVudCB0aW1lbGluZSwgaXQnbGwgYmUgZm9yY2VkIHRvIHJlLXJlbmRlciBvbiB0aGUgbmV4dCB0aWNrLlxuXG4gICAgICAgIHRoaXMuX2xhenkgPSAwO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJhdGlvID0gcmF0aW8gPSAoeW95b0Vhc2UgfHwgdGhpcy5fZWFzZSkodGltZSAvIGR1cik7XG5cbiAgICAgIGlmICh0aGlzLl9mcm9tKSB7XG4gICAgICAgIHRoaXMucmF0aW8gPSByYXRpbyA9IDEgLSByYXRpbztcbiAgICAgIH1cblxuICAgICAgaWYgKHRpbWUgJiYgIXByZXZUaW1lICYmICFzdXBwcmVzc0V2ZW50cyAmJiAhaXRlcmF0aW9uKSB7XG4gICAgICAgIF9jYWxsYmFjayh0aGlzLCBcIm9uU3RhcnRcIik7XG5cbiAgICAgICAgaWYgKHRoaXMuX3RUaW1lICE9PSB0VGltZSkge1xuICAgICAgICAgIC8vIGluIGNhc2UgdGhlIG9uU3RhcnQgdHJpZ2dlcmVkIGEgcmVuZGVyIGF0IGEgZGlmZmVyZW50IHNwb3QsIGVqZWN0LiBMaWtlIGlmIHNvbWVvbmUgZGlkIGFuaW1hdGlvbi5wYXVzZSgwLjUpIG9yIHNvbWV0aGluZyBpbnNpZGUgdGhlIG9uU3RhcnQuXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHQgPSB0aGlzLl9wdDtcblxuICAgICAgd2hpbGUgKHB0KSB7XG4gICAgICAgIHB0LnIocmF0aW8sIHB0LmQpO1xuICAgICAgICBwdCA9IHB0Ll9uZXh0O1xuICAgICAgfVxuXG4gICAgICB0aW1lbGluZSAmJiB0aW1lbGluZS5yZW5kZXIodG90YWxUaW1lIDwgMCA/IHRvdGFsVGltZSA6ICF0aW1lICYmIGlzWW95byA/IC1fdGlueU51bSA6IHRpbWVsaW5lLl9kdXIgKiB0aW1lbGluZS5fZWFzZSh0aW1lIC8gdGhpcy5fZHVyKSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB8fCB0aGlzLl9zdGFydEF0ICYmICh0aGlzLl96VGltZSA9IHRvdGFsVGltZSk7XG5cbiAgICAgIGlmICh0aGlzLl9vblVwZGF0ZSAmJiAhc3VwcHJlc3NFdmVudHMpIHtcbiAgICAgICAgaXNOZWdhdGl2ZSAmJiBfcmV3aW5kU3RhcnRBdCh0aGlzLCB0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7IC8vbm90ZTogZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsIHdlIHR1Y2sgdGhpcyBjb25kaXRpb25hbCBsb2dpYyBpbnNpZGUgbGVzcyB0cmF2ZWxlZCBhcmVhcyAobW9zdCB0d2VlbnMgZG9uJ3QgaGF2ZSBhbiBvblVwZGF0ZSkuIFdlJ2QganVzdCBoYXZlIGl0IGF0IHRoZSBlbmQgYmVmb3JlIHRoZSBvbkNvbXBsZXRlLCBidXQgdGhlIHZhbHVlcyBzaG91bGQgYmUgdXBkYXRlZCBiZWZvcmUgYW55IG9uVXBkYXRlIGlzIGNhbGxlZCwgc28gd2UgQUxTTyBwdXQgaXQgaGVyZSBhbmQgdGhlbiBpZiBpdCdzIG5vdCBjYWxsZWQsIHdlIGRvIHNvIGxhdGVyIG5lYXIgdGhlIG9uQ29tcGxldGUuXG5cbiAgICAgICAgX2NhbGxiYWNrKHRoaXMsIFwib25VcGRhdGVcIik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3JlcGVhdCAmJiBpdGVyYXRpb24gIT09IHByZXZJdGVyYXRpb24gJiYgdGhpcy52YXJzLm9uUmVwZWF0ICYmICFzdXBwcmVzc0V2ZW50cyAmJiB0aGlzLnBhcmVudCAmJiBfY2FsbGJhY2sodGhpcywgXCJvblJlcGVhdFwiKTtcblxuICAgICAgaWYgKCh0VGltZSA9PT0gdGhpcy5fdER1ciB8fCAhdFRpbWUpICYmIHRoaXMuX3RUaW1lID09PSB0VGltZSkge1xuICAgICAgICBpc05lZ2F0aXZlICYmICF0aGlzLl9vblVwZGF0ZSAmJiBfcmV3aW5kU3RhcnRBdCh0aGlzLCB0b3RhbFRpbWUsIHRydWUsIHRydWUpO1xuICAgICAgICAodG90YWxUaW1lIHx8ICFkdXIpICYmICh0VGltZSA9PT0gdGhpcy5fdER1ciAmJiB0aGlzLl90cyA+IDAgfHwgIXRUaW1lICYmIHRoaXMuX3RzIDwgMCkgJiYgX3JlbW92ZUZyb21QYXJlbnQodGhpcywgMSk7IC8vIGRvbid0IHJlbW92ZSBpZiB3ZSdyZSByZW5kZXJpbmcgYXQgZXhhY3RseSBhIHRpbWUgb2YgMCwgYXMgdGhlcmUgY291bGQgYmUgYXV0b1JldmVydCB2YWx1ZXMgdGhhdCBzaG91bGQgZ2V0IHNldCBvbiB0aGUgbmV4dCB0aWNrIChpZiB0aGUgcGxheWhlYWQgZ29lcyBiYWNrd2FyZCBiZXlvbmQgdGhlIHN0YXJ0VGltZSwgbmVnYXRpdmUgdG90YWxUaW1lKS4gRG9uJ3QgcmVtb3ZlIGlmIHRoZSB0aW1lbGluZSBpcyByZXZlcnNlZCBhbmQgdGhlIHBsYXloZWFkIGlzbid0IGF0IDAsIG90aGVyd2lzZSB0bC5wcm9ncmVzcygxKS5yZXZlcnNlKCkgd29uJ3Qgd29yay4gT25seSByZW1vdmUgaWYgdGhlIHBsYXloZWFkIGlzIGF0IHRoZSBlbmQgYW5kIHRpbWVTY2FsZSBpcyBwb3NpdGl2ZSwgb3IgaWYgdGhlIHBsYXloZWFkIGlzIGF0IDAgYW5kIHRoZSB0aW1lU2NhbGUgaXMgbmVnYXRpdmUuXG5cbiAgICAgICAgaWYgKCFzdXBwcmVzc0V2ZW50cyAmJiAhKGlzTmVnYXRpdmUgJiYgIXByZXZUaW1lKSAmJiAodFRpbWUgfHwgcHJldlRpbWUgfHwgaXNZb3lvKSkge1xuICAgICAgICAgIC8vIGlmIHByZXZUaW1lIGFuZCB0VGltZSBhcmUgemVybywgd2Ugc2hvdWxkbid0IGZpcmUgdGhlIG9uUmV2ZXJzZUNvbXBsZXRlLiBUaGlzIGNvdWxkIGhhcHBlbiBpZiB5b3UgZ3NhcC50byguLi4ge3BhdXNlZDp0cnVlfSkucGxheSgpO1xuICAgICAgICAgIF9jYWxsYmFjayh0aGlzLCB0VGltZSA9PT0gdER1ciA/IFwib25Db21wbGV0ZVwiIDogXCJvblJldmVyc2VDb21wbGV0ZVwiLCB0cnVlKTtcblxuICAgICAgICAgIHRoaXMuX3Byb20gJiYgISh0VGltZSA8IHREdXIgJiYgdGhpcy50aW1lU2NhbGUoKSA+IDApICYmIHRoaXMuX3Byb20oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzMudGFyZ2V0cyA9IGZ1bmN0aW9uIHRhcmdldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldHM7XG4gIH07XG5cbiAgX3Byb3RvMy5pbnZhbGlkYXRlID0gZnVuY3Rpb24gaW52YWxpZGF0ZShzb2Z0KSB7XG4gICAgLy8gXCJzb2Z0XCIgZ2l2ZXMgdXMgYSB3YXkgdG8gY2xlYXIgb3V0IGV2ZXJ5dGhpbmcgRVhDRVBUIHRoZSByZWNvcmRlZCBwcmUtXCJmcm9tXCIgcG9ydGlvbiBvZiBmcm9tKCkgdHdlZW5zLiBPdGhlcndpc2UsIGZvciBleGFtcGxlLCBpZiB5b3UgdHdlZW4ucHJvZ3Jlc3MoMSkucmVuZGVyKDAsIHRydWUgdHJ1ZSkuaW52YWxpZGF0ZSgpLCB0aGUgXCJmcm9tXCIgdmFsdWVzIHdvdWxkIHBlcnNpc3QgYW5kIHRoZW4gb24gdGhlIG5leHQgcmVuZGVyLCB0aGUgZnJvbSgpIHR3ZWVucyB3b3VsZCBpbml0aWFsaXplIGFuZCB0aGUgY3VycmVudCB2YWx1ZSB3b3VsZCBtYXRjaCB0aGUgXCJmcm9tXCIgdmFsdWVzLCB0aHVzIGFuaW1hdGUgZnJvbSB0aGUgc2FtZSB2YWx1ZSB0byB0aGUgc2FtZSB2YWx1ZSAobm8gYW5pbWF0aW9uKS4gV2UgdGFwIGludG8gdGhpcyBpbiBTY3JvbGxUcmlnZ2VyJ3MgcmVmcmVzaCgpIHdoZXJlIHdlIG11c3QgcHVzaCBhIHR3ZWVuIHRvIGNvbXBsZXRpb24gYW5kIHRoZW4gYmFjayBhZ2FpbiBidXQgaG9ub3IgaXRzIGluaXQgc3RhdGUgaW4gY2FzZSB0aGUgdHdlZW4gaXMgZGVwZW5kZW50IG9uIGFub3RoZXIgdHdlZW4gZnVydGhlciB1cCBvbiB0aGUgcGFnZS5cbiAgICAoIXNvZnQgfHwgIXRoaXMudmFycy5ydW5CYWNrd2FyZHMpICYmICh0aGlzLl9zdGFydEF0ID0gMCk7XG4gICAgdGhpcy5fcHQgPSB0aGlzLl9vcCA9IHRoaXMuX29uVXBkYXRlID0gdGhpcy5fbGF6eSA9IHRoaXMucmF0aW8gPSAwO1xuICAgIHRoaXMuX3B0TG9va3VwID0gW107XG4gICAgdGhpcy50aW1lbGluZSAmJiB0aGlzLnRpbWVsaW5lLmludmFsaWRhdGUoc29mdCk7XG4gICAgcmV0dXJuIF9BbmltYXRpb24yLnByb3RvdHlwZS5pbnZhbGlkYXRlLmNhbGwodGhpcywgc29mdCk7XG4gIH07XG5cbiAgX3Byb3RvMy5yZXNldFRvID0gZnVuY3Rpb24gcmVzZXRUbyhwcm9wZXJ0eSwgdmFsdWUsIHN0YXJ0LCBzdGFydElzUmVsYXRpdmUpIHtcbiAgICBfdGlja2VyQWN0aXZlIHx8IF90aWNrZXIud2FrZSgpO1xuICAgIHRoaXMuX3RzIHx8IHRoaXMucGxheSgpO1xuICAgIHZhciB0aW1lID0gTWF0aC5taW4odGhpcy5fZHVyLCAodGhpcy5fZHAuX3RpbWUgLSB0aGlzLl9zdGFydCkgKiB0aGlzLl90cyksXG4gICAgICAgIHJhdGlvO1xuICAgIHRoaXMuX2luaXR0ZWQgfHwgX2luaXRUd2Vlbih0aGlzLCB0aW1lKTtcbiAgICByYXRpbyA9IHRoaXMuX2Vhc2UodGltZSAvIHRoaXMuX2R1cik7IC8vIGRvbid0IGp1c3QgZ2V0IHR3ZWVuLnJhdGlvIGJlY2F1c2UgaXQgbWF5IG5vdCBoYXZlIHJlbmRlcmVkIHlldC5cbiAgICAvLyBwb3NzaWJsZSBmdXR1cmUgYWRkaXRpb24gdG8gYWxsb3cgYW4gb2JqZWN0IHdpdGggbXVsdGlwbGUgdmFsdWVzIHRvIHVwZGF0ZSwgbGlrZSB0d2Vlbi5yZXNldFRvKHt4OiAxMDAsIHk6IDIwMH0pOyBBdCB0aGlzIHBvaW50LCBpdCBkb2Vzbid0IHNlZW0gd29ydGggdGhlIGFkZGVkIGtiIGdpdmVuIHRoZSBmYWN0IHRoYXQgbW9zdCB1c2VycyB3aWxsIGxpa2VseSBvcHQgZm9yIHRoZSBjb252ZW5pZW50IGdzYXAucXVpY2tUbygpIHdheSBvZiBpbnRlcmFjdGluZyB3aXRoIHRoaXMgbWV0aG9kLlxuICAgIC8vIGlmIChfaXNPYmplY3QocHJvcGVydHkpKSB7IC8vIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvblxuICAgIC8vIFx0Zm9yIChwIGluIHByb3BlcnR5KSB7XG4gICAgLy8gXHRcdGlmIChfdXBkYXRlUHJvcFR3ZWVucyh0aGlzLCBwLCBwcm9wZXJ0eVtwXSwgdmFsdWUgPyB2YWx1ZVtwXSA6IG51bGwsIHN0YXJ0LCByYXRpbywgdGltZSkpIHtcbiAgICAvLyBcdFx0XHRyZXR1cm4gdGhpcy5yZXNldFRvKHByb3BlcnR5LCB2YWx1ZSwgc3RhcnQsIHN0YXJ0SXNSZWxhdGl2ZSk7IC8vIGlmIGEgUHJvcFR3ZWVuIHdhc24ndCBmb3VuZCBmb3IgdGhlIHByb3BlcnR5LCBpdCdsbCBnZXQgZm9yY2VkIHdpdGggYSByZS1pbml0aWFsaXphdGlvbiBzbyB3ZSBuZWVkIHRvIGp1bXAgb3V0IGFuZCBzdGFydCBvdmVyIGFnYWluLlxuICAgIC8vIFx0XHR9XG4gICAgLy8gXHR9XG4gICAgLy8gfSBlbHNlIHtcblxuICAgIGlmIChfdXBkYXRlUHJvcFR3ZWVucyh0aGlzLCBwcm9wZXJ0eSwgdmFsdWUsIHN0YXJ0LCBzdGFydElzUmVsYXRpdmUsIHJhdGlvLCB0aW1lKSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzZXRUbyhwcm9wZXJ0eSwgdmFsdWUsIHN0YXJ0LCBzdGFydElzUmVsYXRpdmUpOyAvLyBpZiBhIFByb3BUd2VlbiB3YXNuJ3QgZm91bmQgZm9yIHRoZSBwcm9wZXJ0eSwgaXQnbGwgZ2V0IGZvcmNlZCB3aXRoIGEgcmUtaW5pdGlhbGl6YXRpb24gc28gd2UgbmVlZCB0byBqdW1wIG91dCBhbmQgc3RhcnQgb3ZlciBhZ2Fpbi5cbiAgICB9IC8vfVxuXG5cbiAgICBfYWxpZ25QbGF5aGVhZCh0aGlzLCAwKTtcblxuICAgIHRoaXMucGFyZW50IHx8IF9hZGRMaW5rZWRMaXN0SXRlbSh0aGlzLl9kcCwgdGhpcywgXCJfZmlyc3RcIiwgXCJfbGFzdFwiLCB0aGlzLl9kcC5fc29ydCA/IFwiX3N0YXJ0XCIgOiAwKTtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXIoMCk7XG4gIH07XG5cbiAgX3Byb3RvMy5raWxsID0gZnVuY3Rpb24ga2lsbCh0YXJnZXRzLCB2YXJzKSB7XG4gICAgaWYgKHZhcnMgPT09IHZvaWQgMCkge1xuICAgICAgdmFycyA9IFwiYWxsXCI7XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXRzICYmICghdmFycyB8fCB2YXJzID09PSBcImFsbFwiKSkge1xuICAgICAgdGhpcy5fbGF6eSA9IHRoaXMuX3B0ID0gMDtcbiAgICAgIHJldHVybiB0aGlzLnBhcmVudCA/IF9pbnRlcnJ1cHQodGhpcykgOiB0aGlzO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRpbWVsaW5lKSB7XG4gICAgICB2YXIgdER1ciA9IHRoaXMudGltZWxpbmUudG90YWxEdXJhdGlvbigpO1xuICAgICAgdGhpcy50aW1lbGluZS5raWxsVHdlZW5zT2YodGFyZ2V0cywgdmFycywgX292ZXJ3cml0aW5nVHdlZW4gJiYgX292ZXJ3cml0aW5nVHdlZW4udmFycy5vdmVyd3JpdGUgIT09IHRydWUpLl9maXJzdCB8fCBfaW50ZXJydXB0KHRoaXMpOyAvLyBpZiBub3RoaW5nIGlzIGxlZnQgdHdlZW5pbmcsIGludGVycnVwdC5cblxuICAgICAgdGhpcy5wYXJlbnQgJiYgdER1ciAhPT0gdGhpcy50aW1lbGluZS50b3RhbER1cmF0aW9uKCkgJiYgX3NldER1cmF0aW9uKHRoaXMsIHRoaXMuX2R1ciAqIHRoaXMudGltZWxpbmUuX3REdXIgLyB0RHVyLCAwLCAxKTsgLy8gaWYgYSBuZXN0ZWQgdHdlZW4gaXMga2lsbGVkIHRoYXQgY2hhbmdlcyB0aGUgZHVyYXRpb24sIGl0IHNob3VsZCBhZmZlY3QgdGhpcyB0d2VlbidzIGR1cmF0aW9uLiBXZSBtdXN0IHVzZSB0aGUgcmF0aW8sIHRob3VnaCwgYmVjYXVzZSBzb21ldGltZXMgdGhlIGludGVybmFsIHRpbWVsaW5lIGlzIHN0cmV0Y2hlZCBsaWtlIGZvciBrZXlmcmFtZXMgd2hlcmUgdGhleSBkb24ndCBhbGwgYWRkIHVwIHRvIHdoYXRldmVyIHRoZSBwYXJlbnQgdHdlZW4ncyBkdXJhdGlvbiB3YXMgc2V0IHRvLlxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB2YXIgcGFyc2VkVGFyZ2V0cyA9IHRoaXMuX3RhcmdldHMsXG4gICAgICAgIGtpbGxpbmdUYXJnZXRzID0gdGFyZ2V0cyA/IHRvQXJyYXkodGFyZ2V0cykgOiBwYXJzZWRUYXJnZXRzLFxuICAgICAgICBwcm9wVHdlZW5Mb29rdXAgPSB0aGlzLl9wdExvb2t1cCxcbiAgICAgICAgZmlyc3RQVCA9IHRoaXMuX3B0LFxuICAgICAgICBvdmVyd3JpdHRlblByb3BzLFxuICAgICAgICBjdXJMb29rdXAsXG4gICAgICAgIGN1ck92ZXJ3cml0ZVByb3BzLFxuICAgICAgICBwcm9wcyxcbiAgICAgICAgcCxcbiAgICAgICAgcHQsXG4gICAgICAgIGk7XG5cbiAgICBpZiAoKCF2YXJzIHx8IHZhcnMgPT09IFwiYWxsXCIpICYmIF9hcnJheXNNYXRjaChwYXJzZWRUYXJnZXRzLCBraWxsaW5nVGFyZ2V0cykpIHtcbiAgICAgIHZhcnMgPT09IFwiYWxsXCIgJiYgKHRoaXMuX3B0ID0gMCk7XG4gICAgICByZXR1cm4gX2ludGVycnVwdCh0aGlzKTtcbiAgICB9XG5cbiAgICBvdmVyd3JpdHRlblByb3BzID0gdGhpcy5fb3AgPSB0aGlzLl9vcCB8fCBbXTtcblxuICAgIGlmICh2YXJzICE9PSBcImFsbFwiKSB7XG4gICAgICAvL3NvIHBlb3BsZSBjYW4gcGFzcyBpbiBhIGNvbW1hLWRlbGltaXRlZCBsaXN0IG9mIHByb3BlcnR5IG5hbWVzXG4gICAgICBpZiAoX2lzU3RyaW5nKHZhcnMpKSB7XG4gICAgICAgIHAgPSB7fTtcblxuICAgICAgICBfZm9yRWFjaE5hbWUodmFycywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gcFtuYW1lXSA9IDE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhcnMgPSBwO1xuICAgICAgfVxuXG4gICAgICB2YXJzID0gX2FkZEFsaWFzZXNUb1ZhcnMocGFyc2VkVGFyZ2V0cywgdmFycyk7XG4gICAgfVxuXG4gICAgaSA9IHBhcnNlZFRhcmdldHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgaWYgKH5raWxsaW5nVGFyZ2V0cy5pbmRleE9mKHBhcnNlZFRhcmdldHNbaV0pKSB7XG4gICAgICAgIGN1ckxvb2t1cCA9IHByb3BUd2Vlbkxvb2t1cFtpXTtcblxuICAgICAgICBpZiAodmFycyA9PT0gXCJhbGxcIikge1xuICAgICAgICAgIG92ZXJ3cml0dGVuUHJvcHNbaV0gPSB2YXJzO1xuICAgICAgICAgIHByb3BzID0gY3VyTG9va3VwO1xuICAgICAgICAgIGN1ck92ZXJ3cml0ZVByb3BzID0ge307XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VyT3ZlcndyaXRlUHJvcHMgPSBvdmVyd3JpdHRlblByb3BzW2ldID0gb3ZlcndyaXR0ZW5Qcm9wc1tpXSB8fCB7fTtcbiAgICAgICAgICBwcm9wcyA9IHZhcnM7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHAgaW4gcHJvcHMpIHtcbiAgICAgICAgICBwdCA9IGN1ckxvb2t1cCAmJiBjdXJMb29rdXBbcF07XG5cbiAgICAgICAgICBpZiAocHQpIHtcbiAgICAgICAgICAgIGlmICghKFwia2lsbFwiIGluIHB0LmQpIHx8IHB0LmQua2lsbChwKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0odGhpcywgcHQsIFwiX3B0XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWxldGUgY3VyTG9va3VwW3BdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjdXJPdmVyd3JpdGVQcm9wcyAhPT0gXCJhbGxcIikge1xuICAgICAgICAgICAgY3VyT3ZlcndyaXRlUHJvcHNbcF0gPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2luaXR0ZWQgJiYgIXRoaXMuX3B0ICYmIGZpcnN0UFQgJiYgX2ludGVycnVwdCh0aGlzKTsgLy9pZiBhbGwgdHdlZW5pbmcgcHJvcGVydGllcyBhcmUga2lsbGVkLCBraWxsIHRoZSB0d2Vlbi4gV2l0aG91dCB0aGlzIGxpbmUsIGlmIHRoZXJlJ3MgYSB0d2VlbiB3aXRoIG11bHRpcGxlIHRhcmdldHMgYW5kIHRoZW4geW91IGtpbGxUd2VlbnNPZigpIGVhY2ggdGFyZ2V0IGluZGl2aWR1YWxseSwgdGhlIHR3ZWVuIHdvdWxkIHRlY2huaWNhbGx5IHN0aWxsIHJlbWFpbiBhY3RpdmUgYW5kIGZpcmUgaXRzIG9uQ29tcGxldGUgZXZlbiB0aG91Z2ggdGhlcmUgYXJlbid0IGFueSBtb3JlIHByb3BlcnRpZXMgdHdlZW5pbmcuXG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBUd2Vlbi50byA9IGZ1bmN0aW9uIHRvKHRhcmdldHMsIHZhcnMpIHtcbiAgICByZXR1cm4gbmV3IFR3ZWVuKHRhcmdldHMsIHZhcnMsIGFyZ3VtZW50c1syXSk7XG4gIH07XG5cbiAgVHdlZW4uZnJvbSA9IGZ1bmN0aW9uIGZyb20odGFyZ2V0cywgdmFycykge1xuICAgIHJldHVybiBfY3JlYXRlVHdlZW5UeXBlKDEsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgVHdlZW4uZGVsYXllZENhbGwgPSBmdW5jdGlvbiBkZWxheWVkQ2FsbChkZWxheSwgY2FsbGJhY2ssIHBhcmFtcywgc2NvcGUpIHtcbiAgICByZXR1cm4gbmV3IFR3ZWVuKGNhbGxiYWNrLCAwLCB7XG4gICAgICBpbW1lZGlhdGVSZW5kZXI6IGZhbHNlLFxuICAgICAgbGF6eTogZmFsc2UsXG4gICAgICBvdmVyd3JpdGU6IGZhbHNlLFxuICAgICAgZGVsYXk6IGRlbGF5LFxuICAgICAgb25Db21wbGV0ZTogY2FsbGJhY2ssXG4gICAgICBvblJldmVyc2VDb21wbGV0ZTogY2FsbGJhY2ssXG4gICAgICBvbkNvbXBsZXRlUGFyYW1zOiBwYXJhbXMsXG4gICAgICBvblJldmVyc2VDb21wbGV0ZVBhcmFtczogcGFyYW1zLFxuICAgICAgY2FsbGJhY2tTY29wZTogc2NvcGVcbiAgICB9KTsgLy8gd2UgbXVzdCB1c2Ugb25SZXZlcnNlQ29tcGxldGUgdG9vIGZvciB0aGluZ3MgbGlrZSB0aW1lbGluZS5hZGQoKCkgPT4gey4uLn0pIHdoaWNoIHNob3VsZCBiZSB0cmlnZ2VyZWQgaW4gQk9USCBkaXJlY3Rpb25zIChmb3J3YXJkIGFuZCByZXZlcnNlKVxuICB9O1xuXG4gIFR3ZWVuLmZyb21UbyA9IGZ1bmN0aW9uIGZyb21Ubyh0YXJnZXRzLCBmcm9tVmFycywgdG9WYXJzKSB7XG4gICAgcmV0dXJuIF9jcmVhdGVUd2VlblR5cGUoMiwgYXJndW1lbnRzKTtcbiAgfTtcblxuICBUd2Vlbi5zZXQgPSBmdW5jdGlvbiBzZXQodGFyZ2V0cywgdmFycykge1xuICAgIHZhcnMuZHVyYXRpb24gPSAwO1xuICAgIHZhcnMucmVwZWF0RGVsYXkgfHwgKHZhcnMucmVwZWF0ID0gMCk7XG4gICAgcmV0dXJuIG5ldyBUd2Vlbih0YXJnZXRzLCB2YXJzKTtcbiAgfTtcblxuICBUd2Vlbi5raWxsVHdlZW5zT2YgPSBmdW5jdGlvbiBraWxsVHdlZW5zT2YodGFyZ2V0cywgcHJvcHMsIG9ubHlBY3RpdmUpIHtcbiAgICByZXR1cm4gX2dsb2JhbFRpbWVsaW5lLmtpbGxUd2VlbnNPZih0YXJnZXRzLCBwcm9wcywgb25seUFjdGl2ZSk7XG4gIH07XG5cbiAgcmV0dXJuIFR3ZWVuO1xufShBbmltYXRpb24pO1xuXG5fc2V0RGVmYXVsdHMoVHdlZW4ucHJvdG90eXBlLCB7XG4gIF90YXJnZXRzOiBbXSxcbiAgX2xhenk6IDAsXG4gIF9zdGFydEF0OiAwLFxuICBfb3A6IDAsXG4gIF9vbkluaXQ6IDBcbn0pOyAvL2FkZCB0aGUgcGVydGluZW50IHRpbWVsaW5lIG1ldGhvZHMgdG8gVHdlZW4gaW5zdGFuY2VzIHNvIHRoYXQgdXNlcnMgY2FuIGNoYWluIGNvbnZlbmllbnRseSBhbmQgY3JlYXRlIGEgdGltZWxpbmUgYXV0b21hdGljYWxseS4gKHJlbW92ZWQgZHVlIHRvIGNvbmNlcm5zIHRoYXQgaXQnZCB1bHRpbWF0ZWx5IGFkZCB0byBtb3JlIGNvbmZ1c2lvbiBlc3BlY2lhbGx5IGZvciBiZWdpbm5lcnMpXG4vLyBfZm9yRWFjaE5hbWUoXCJ0byxmcm9tLGZyb21UbyxzZXQsY2FsbCxhZGQsYWRkTGFiZWwsYWRkUGF1c2VcIiwgbmFtZSA9PiB7XG4vLyBcdFR3ZWVuLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuLy8gXHRcdGxldCB0bCA9IG5ldyBUaW1lbGluZSgpO1xuLy8gXHRcdHJldHVybiBfYWRkVG9UaW1lbGluZSh0bCwgdGhpcylbbmFtZV0uYXBwbHkodGwsIHRvQXJyYXkoYXJndW1lbnRzKSk7XG4vLyBcdH1cbi8vIH0pO1xuLy9mb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eS4gTGV2ZXJhZ2UgdGhlIHRpbWVsaW5lIGNhbGxzLlxuXG5cbl9mb3JFYWNoTmFtZShcInN0YWdnZXJUbyxzdGFnZ2VyRnJvbSxzdGFnZ2VyRnJvbVRvXCIsIGZ1bmN0aW9uIChuYW1lKSB7XG4gIFR3ZWVuW25hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZSgpLFxuICAgICAgICBwYXJhbXMgPSBfc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuXG4gICAgcGFyYW1zLnNwbGljZShuYW1lID09PSBcInN0YWdnZXJGcm9tVG9cIiA/IDUgOiA0LCAwLCAwKTtcbiAgICByZXR1cm4gdGxbbmFtZV0uYXBwbHkodGwsIHBhcmFtcyk7XG4gIH07XG59KTtcbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUFJPUFRXRUVOXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cblxudmFyIF9zZXR0ZXJQbGFpbiA9IGZ1bmN0aW9uIF9zZXR0ZXJQbGFpbih0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gdGFyZ2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xufSxcbiAgICBfc2V0dGVyRnVuYyA9IGZ1bmN0aW9uIF9zZXR0ZXJGdW5jKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiB0YXJnZXRbcHJvcGVydHldKHZhbHVlKTtcbn0sXG4gICAgX3NldHRlckZ1bmNXaXRoUGFyYW0gPSBmdW5jdGlvbiBfc2V0dGVyRnVuY1dpdGhQYXJhbSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgZGF0YSkge1xuICByZXR1cm4gdGFyZ2V0W3Byb3BlcnR5XShkYXRhLmZwLCB2YWx1ZSk7XG59LFxuICAgIF9zZXR0ZXJBdHRyaWJ1dGUgPSBmdW5jdGlvbiBfc2V0dGVyQXR0cmlidXRlKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiB0YXJnZXQuc2V0QXR0cmlidXRlKHByb3BlcnR5LCB2YWx1ZSk7XG59LFxuICAgIF9nZXRTZXR0ZXIgPSBmdW5jdGlvbiBfZ2V0U2V0dGVyKHRhcmdldCwgcHJvcGVydHkpIHtcbiAgcmV0dXJuIF9pc0Z1bmN0aW9uKHRhcmdldFtwcm9wZXJ0eV0pID8gX3NldHRlckZ1bmMgOiBfaXNVbmRlZmluZWQodGFyZ2V0W3Byb3BlcnR5XSkgJiYgdGFyZ2V0LnNldEF0dHJpYnV0ZSA/IF9zZXR0ZXJBdHRyaWJ1dGUgOiBfc2V0dGVyUGxhaW47XG59LFxuICAgIF9yZW5kZXJQbGFpbiA9IGZ1bmN0aW9uIF9yZW5kZXJQbGFpbihyYXRpbywgZGF0YSkge1xuICByZXR1cm4gZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIE1hdGgucm91bmQoKGRhdGEucyArIGRhdGEuYyAqIHJhdGlvKSAqIDEwMDAwMDApIC8gMTAwMDAwMCwgZGF0YSk7XG59LFxuICAgIF9yZW5kZXJCb29sZWFuID0gZnVuY3Rpb24gX3JlbmRlckJvb2xlYW4ocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCAhIShkYXRhLnMgKyBkYXRhLmMgKiByYXRpbyksIGRhdGEpO1xufSxcbiAgICBfcmVuZGVyQ29tcGxleFN0cmluZyA9IGZ1bmN0aW9uIF9yZW5kZXJDb21wbGV4U3RyaW5nKHJhdGlvLCBkYXRhKSB7XG4gIHZhciBwdCA9IGRhdGEuX3B0LFxuICAgICAgcyA9IFwiXCI7XG5cbiAgaWYgKCFyYXRpbyAmJiBkYXRhLmIpIHtcbiAgICAvL2IgPSBiZWdpbm5pbmcgc3RyaW5nXG4gICAgcyA9IGRhdGEuYjtcbiAgfSBlbHNlIGlmIChyYXRpbyA9PT0gMSAmJiBkYXRhLmUpIHtcbiAgICAvL2UgPSBlbmRpbmcgc3RyaW5nXG4gICAgcyA9IGRhdGEuZTtcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAocHQpIHtcbiAgICAgIHMgPSBwdC5wICsgKHB0Lm0gPyBwdC5tKHB0LnMgKyBwdC5jICogcmF0aW8pIDogTWF0aC5yb3VuZCgocHQucyArIHB0LmMgKiByYXRpbykgKiAxMDAwMCkgLyAxMDAwMCkgKyBzOyAvL3dlIHVzZSB0aGUgXCJwXCIgcHJvcGVydHkgZm9yIHRoZSB0ZXh0IGluYmV0d2VlbiAobGlrZSBhIHN1ZmZpeCkuIEFuZCBpbiB0aGUgY29udGV4dCBvZiBhIGNvbXBsZXggc3RyaW5nLCB0aGUgbW9kaWZpZXIgKG0pIGlzIHR5cGljYWxseSBqdXN0IE1hdGgucm91bmQoKSwgbGlrZSBmb3IgUkdCIGNvbG9ycy5cblxuICAgICAgcHQgPSBwdC5fbmV4dDtcbiAgICB9XG5cbiAgICBzICs9IGRhdGEuYzsgLy93ZSB1c2UgdGhlIFwiY1wiIG9mIHRoZSBQcm9wVHdlZW4gdG8gc3RvcmUgdGhlIGZpbmFsIGNodW5rIG9mIG5vbi1udW1lcmljIHRleHQuXG4gIH1cblxuICBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgcywgZGF0YSk7XG59LFxuICAgIF9yZW5kZXJQcm9wVHdlZW5zID0gZnVuY3Rpb24gX3JlbmRlclByb3BUd2VlbnMocmF0aW8sIGRhdGEpIHtcbiAgdmFyIHB0ID0gZGF0YS5fcHQ7XG5cbiAgd2hpbGUgKHB0KSB7XG4gICAgcHQucihyYXRpbywgcHQuZCk7XG4gICAgcHQgPSBwdC5fbmV4dDtcbiAgfVxufSxcbiAgICBfYWRkUGx1Z2luTW9kaWZpZXIgPSBmdW5jdGlvbiBfYWRkUGx1Z2luTW9kaWZpZXIobW9kaWZpZXIsIHR3ZWVuLCB0YXJnZXQsIHByb3BlcnR5KSB7XG4gIHZhciBwdCA9IHRoaXMuX3B0LFxuICAgICAgbmV4dDtcblxuICB3aGlsZSAocHQpIHtcbiAgICBuZXh0ID0gcHQuX25leHQ7XG4gICAgcHQucCA9PT0gcHJvcGVydHkgJiYgcHQubW9kaWZpZXIobW9kaWZpZXIsIHR3ZWVuLCB0YXJnZXQpO1xuICAgIHB0ID0gbmV4dDtcbiAgfVxufSxcbiAgICBfa2lsbFByb3BUd2VlbnNPZiA9IGZ1bmN0aW9uIF9raWxsUHJvcFR3ZWVuc09mKHByb3BlcnR5KSB7XG4gIHZhciBwdCA9IHRoaXMuX3B0LFxuICAgICAgaGFzTm9uRGVwZW5kZW50UmVtYWluaW5nLFxuICAgICAgbmV4dDtcblxuICB3aGlsZSAocHQpIHtcbiAgICBuZXh0ID0gcHQuX25leHQ7XG5cbiAgICBpZiAocHQucCA9PT0gcHJvcGVydHkgJiYgIXB0Lm9wIHx8IHB0Lm9wID09PSBwcm9wZXJ0eSkge1xuICAgICAgX3JlbW92ZUxpbmtlZExpc3RJdGVtKHRoaXMsIHB0LCBcIl9wdFwiKTtcbiAgICB9IGVsc2UgaWYgKCFwdC5kZXApIHtcbiAgICAgIGhhc05vbkRlcGVuZGVudFJlbWFpbmluZyA9IDE7XG4gICAgfVxuXG4gICAgcHQgPSBuZXh0O1xuICB9XG5cbiAgcmV0dXJuICFoYXNOb25EZXBlbmRlbnRSZW1haW5pbmc7XG59LFxuICAgIF9zZXR0ZXJXaXRoTW9kaWZpZXIgPSBmdW5jdGlvbiBfc2V0dGVyV2l0aE1vZGlmaWVyKHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCBkYXRhKSB7XG4gIGRhdGEubVNldCh0YXJnZXQsIHByb3BlcnR5LCBkYXRhLm0uY2FsbChkYXRhLnR3ZWVuLCB2YWx1ZSwgZGF0YS5tdCksIGRhdGEpO1xufSxcbiAgICBfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5ID0gZnVuY3Rpb24gX3NvcnRQcm9wVHdlZW5zQnlQcmlvcml0eShwYXJlbnQpIHtcbiAgdmFyIHB0ID0gcGFyZW50Ll9wdCxcbiAgICAgIG5leHQsXG4gICAgICBwdDIsXG4gICAgICBmaXJzdCxcbiAgICAgIGxhc3Q7IC8vc29ydHMgdGhlIFByb3BUd2VlbiBsaW5rZWQgbGlzdCBpbiBvcmRlciBvZiBwcmlvcml0eSBiZWNhdXNlIHNvbWUgcGx1Z2lucyBuZWVkIHRvIGRvIHRoZWlyIHdvcmsgYWZ0ZXIgQUxMIG9mIHRoZSBQcm9wVHdlZW5zIHdlcmUgY3JlYXRlZCAobGlrZSBSb3VuZFByb3BzUGx1Z2luIGFuZCBNb2RpZmllcnNQbHVnaW4pXG5cbiAgd2hpbGUgKHB0KSB7XG4gICAgbmV4dCA9IHB0Ll9uZXh0O1xuICAgIHB0MiA9IGZpcnN0O1xuXG4gICAgd2hpbGUgKHB0MiAmJiBwdDIucHIgPiBwdC5wcikge1xuICAgICAgcHQyID0gcHQyLl9uZXh0O1xuICAgIH1cblxuICAgIGlmIChwdC5fcHJldiA9IHB0MiA/IHB0Mi5fcHJldiA6IGxhc3QpIHtcbiAgICAgIHB0Ll9wcmV2Ll9uZXh0ID0gcHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpcnN0ID0gcHQ7XG4gICAgfVxuXG4gICAgaWYgKHB0Ll9uZXh0ID0gcHQyKSB7XG4gICAgICBwdDIuX3ByZXYgPSBwdDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFzdCA9IHB0O1xuICAgIH1cblxuICAgIHB0ID0gbmV4dDtcbiAgfVxuXG4gIHBhcmVudC5fcHQgPSBmaXJzdDtcbn07IC8vUHJvcFR3ZWVuIGtleTogdCA9IHRhcmdldCwgcCA9IHByb3AsIHIgPSByZW5kZXJlciwgZCA9IGRhdGEsIHMgPSBzdGFydCwgYyA9IGNoYW5nZSwgb3AgPSBvdmVyd3JpdGVQcm9wZXJ0eSAoT05MWSBwb3B1bGF0ZWQgd2hlbiBpdCdzIGRpZmZlcmVudCB0aGFuIHApLCBwciA9IHByaW9yaXR5LCBfbmV4dC9fcHJldiBmb3IgdGhlIGxpbmtlZCBsaXN0IHNpYmxpbmdzLCBzZXQgPSBzZXR0ZXIsIG0gPSBtb2RpZmllciwgbVNldCA9IG1vZGlmaWVyU2V0dGVyICh0aGUgb3JpZ2luYWwgc2V0dGVyLCBiZWZvcmUgYSBtb2RpZmllciB3YXMgYWRkZWQpXG5cblxuZXhwb3J0IHZhciBQcm9wVHdlZW4gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQcm9wVHdlZW4obmV4dCwgdGFyZ2V0LCBwcm9wLCBzdGFydCwgY2hhbmdlLCByZW5kZXJlciwgZGF0YSwgc2V0dGVyLCBwcmlvcml0eSkge1xuICAgIHRoaXMudCA9IHRhcmdldDtcbiAgICB0aGlzLnMgPSBzdGFydDtcbiAgICB0aGlzLmMgPSBjaGFuZ2U7XG4gICAgdGhpcy5wID0gcHJvcDtcbiAgICB0aGlzLnIgPSByZW5kZXJlciB8fCBfcmVuZGVyUGxhaW47XG4gICAgdGhpcy5kID0gZGF0YSB8fCB0aGlzO1xuICAgIHRoaXMuc2V0ID0gc2V0dGVyIHx8IF9zZXR0ZXJQbGFpbjtcbiAgICB0aGlzLnByID0gcHJpb3JpdHkgfHwgMDtcbiAgICB0aGlzLl9uZXh0ID0gbmV4dDtcblxuICAgIGlmIChuZXh0KSB7XG4gICAgICBuZXh0Ll9wcmV2ID0gdGhpcztcbiAgICB9XG4gIH1cblxuICB2YXIgX3Byb3RvNCA9IFByb3BUd2Vlbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvNC5tb2RpZmllciA9IGZ1bmN0aW9uIG1vZGlmaWVyKGZ1bmMsIHR3ZWVuLCB0YXJnZXQpIHtcbiAgICB0aGlzLm1TZXQgPSB0aGlzLm1TZXQgfHwgdGhpcy5zZXQ7IC8vaW4gY2FzZSBpdCB3YXMgYWxyZWFkeSBzZXQgKGEgUHJvcFR3ZWVuIGNhbiBvbmx5IGhhdmUgb25lIG1vZGlmaWVyKVxuXG4gICAgdGhpcy5zZXQgPSBfc2V0dGVyV2l0aE1vZGlmaWVyO1xuICAgIHRoaXMubSA9IGZ1bmM7XG4gICAgdGhpcy5tdCA9IHRhcmdldDsgLy9tb2RpZmllciB0YXJnZXRcblxuICAgIHRoaXMudHdlZW4gPSB0d2VlbjtcbiAgfTtcblxuICByZXR1cm4gUHJvcFR3ZWVuO1xufSgpOyAvL0luaXRpYWxpemF0aW9uIHRhc2tzXG5cbl9mb3JFYWNoTmFtZShfY2FsbGJhY2tOYW1lcyArIFwicGFyZW50LGR1cmF0aW9uLGVhc2UsZGVsYXksb3ZlcndyaXRlLHJ1bkJhY2t3YXJkcyxzdGFydEF0LHlveW8saW1tZWRpYXRlUmVuZGVyLHJlcGVhdCxyZXBlYXREZWxheSxkYXRhLHBhdXNlZCxyZXZlcnNlZCxsYXp5LGNhbGxiYWNrU2NvcGUsc3RyaW5nRmlsdGVyLGlkLHlveW9FYXNlLHN0YWdnZXIsaW5oZXJpdCxyZXBlYXRSZWZyZXNoLGtleWZyYW1lcyxhdXRvUmV2ZXJ0LHNjcm9sbFRyaWdnZXJcIiwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIF9yZXNlcnZlZFByb3BzW25hbWVdID0gMTtcbn0pO1xuXG5fZ2xvYmFscy5Ud2Vlbk1heCA9IF9nbG9iYWxzLlR3ZWVuTGl0ZSA9IFR3ZWVuO1xuX2dsb2JhbHMuVGltZWxpbmVMaXRlID0gX2dsb2JhbHMuVGltZWxpbmVNYXggPSBUaW1lbGluZTtcbl9nbG9iYWxUaW1lbGluZSA9IG5ldyBUaW1lbGluZSh7XG4gIHNvcnRDaGlsZHJlbjogZmFsc2UsXG4gIGRlZmF1bHRzOiBfZGVmYXVsdHMsXG4gIGF1dG9SZW1vdmVDaGlsZHJlbjogdHJ1ZSxcbiAgaWQ6IFwicm9vdFwiLFxuICBzbW9vdGhDaGlsZFRpbWluZzogdHJ1ZVxufSk7XG5fY29uZmlnLnN0cmluZ0ZpbHRlciA9IF9jb2xvclN0cmluZ0ZpbHRlcjtcblxudmFyIF9tZWRpYSA9IFtdLFxuICAgIF9saXN0ZW5lcnMgPSB7fSxcbiAgICBfZW1wdHlBcnJheSA9IFtdLFxuICAgIF9sYXN0TWVkaWFUaW1lID0gMCxcbiAgICBfY29udGV4dElEID0gMCxcbiAgICBfZGlzcGF0Y2ggPSBmdW5jdGlvbiBfZGlzcGF0Y2godHlwZSkge1xuICByZXR1cm4gKF9saXN0ZW5lcnNbdHlwZV0gfHwgX2VtcHR5QXJyYXkpLm1hcChmdW5jdGlvbiAoZikge1xuICAgIHJldHVybiBmKCk7XG4gIH0pO1xufSxcbiAgICBfb25NZWRpYUNoYW5nZSA9IGZ1bmN0aW9uIF9vbk1lZGlhQ2hhbmdlKCkge1xuICB2YXIgdGltZSA9IERhdGUubm93KCksXG4gICAgICBtYXRjaGVzID0gW107XG5cbiAgaWYgKHRpbWUgLSBfbGFzdE1lZGlhVGltZSA+IDIpIHtcbiAgICBfZGlzcGF0Y2goXCJtYXRjaE1lZGlhSW5pdFwiKTtcblxuICAgIF9tZWRpYS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICB2YXIgcXVlcmllcyA9IGMucXVlcmllcyxcbiAgICAgICAgICBjb25kaXRpb25zID0gYy5jb25kaXRpb25zLFxuICAgICAgICAgIG1hdGNoLFxuICAgICAgICAgIHAsXG4gICAgICAgICAgYW55TWF0Y2gsXG4gICAgICAgICAgdG9nZ2xlZDtcblxuICAgICAgZm9yIChwIGluIHF1ZXJpZXMpIHtcbiAgICAgICAgbWF0Y2ggPSBfd2luLm1hdGNoTWVkaWEocXVlcmllc1twXSkubWF0Y2hlczsgLy8gRmlyZWZveCBkb2Vzbid0IHVwZGF0ZSB0aGUgXCJtYXRjaGVzXCIgcHJvcGVydHkgb2YgdGhlIE1lZGlhUXVlcnlMaXN0IG9iamVjdCBjb3JyZWN0bHkgLSBpdCBvbmx5IGRvZXMgc28gYXMgaXQgY2FsbHMgaXRzIGNoYW5nZSBoYW5kbGVyIC0gc28gd2UgbXVzdCByZS1jcmVhdGUgYSBtZWRpYSBxdWVyeSBoZXJlIHRvIGVuc3VyZSBpdCdzIGFjY3VyYXRlLlxuXG4gICAgICAgIG1hdGNoICYmIChhbnlNYXRjaCA9IDEpO1xuXG4gICAgICAgIGlmIChtYXRjaCAhPT0gY29uZGl0aW9uc1twXSkge1xuICAgICAgICAgIGNvbmRpdGlvbnNbcF0gPSBtYXRjaDtcbiAgICAgICAgICB0b2dnbGVkID0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodG9nZ2xlZCkge1xuICAgICAgICBjLnJldmVydCgpO1xuICAgICAgICBhbnlNYXRjaCAmJiBtYXRjaGVzLnB1c2goYyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGlzcGF0Y2goXCJtYXRjaE1lZGlhUmV2ZXJ0XCIpO1xuXG4gICAgbWF0Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gYy5vbk1hdGNoKGMpO1xuICAgIH0pO1xuICAgIF9sYXN0TWVkaWFUaW1lID0gdGltZTtcblxuICAgIF9kaXNwYXRjaChcIm1hdGNoTWVkaWFcIik7XG4gIH1cbn07XG5cbnZhciBDb250ZXh0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ29udGV4dChmdW5jLCBzY29wZSkge1xuICAgIHRoaXMuc2VsZWN0b3IgPSBzY29wZSAmJiBzZWxlY3RvcihzY29wZSk7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5fciA9IFtdOyAvLyByZXR1cm5lZC9jbGVhbnVwIGZ1bmN0aW9uc1xuXG4gICAgdGhpcy5pc1JldmVydGVkID0gZmFsc2U7XG4gICAgdGhpcy5pZCA9IF9jb250ZXh0SUQrKzsgLy8gdG8gd29yayBhcm91bmQgaXNzdWVzIHRoYXQgZnJhbWV3b3JrcyBsaWtlIFZ1ZSBjYXVzZSBieSBtYWtpbmcgdGhpbmdzIGludG8gUHJveGllcyB3aGljaCBtYWtlIGl0IGltcG9zc2libGUgdG8gZG8gc29tZXRoaW5nIGxpa2UgX21lZGlhLmluZGV4T2YodGhpcykgYmVjYXVzZSBcInRoaXNcIiB3b3VsZCBubyBsb25nZXIgcmVmZXIgdG8gdGhlIENvbnRleHQgaW5zdGFuY2UgaXRzZWxmIC0gaXQnZCByZWZlciB0byBhIFByb3h5ISBXZSBuZWVkZWQgYSB3YXkgdG8gaWRlbnRpZnkgdGhlIGNvbnRleHQgdW5pcXVlbHlcblxuICAgIGZ1bmMgJiYgdGhpcy5hZGQoZnVuYyk7XG4gIH1cblxuICB2YXIgX3Byb3RvNSA9IENvbnRleHQucHJvdG90eXBlO1xuXG4gIF9wcm90bzUuYWRkID0gZnVuY3Rpb24gYWRkKG5hbWUsIGZ1bmMsIHNjb3BlKSB7XG4gICAgLy8gcG9zc2libGUgZnV0dXJlIGFkZGl0aW9uIGlmIHdlIG5lZWQgdGhlIGFiaWxpdHkgdG8gYWRkKCkgYW4gYW5pbWF0aW9uIHRvIGEgY29udGV4dCBhbmQgZm9yIHdoYXRldmVyIHJlYXNvbiBjYW5ub3QgY3JlYXRlIHRoYXQgYW5pbWF0aW9uIGluc2lkZSBvZiBhIGNvbnRleHQuYWRkKCgpID0+IHsuLi59KSBmdW5jdGlvbi5cbiAgICAvLyBpZiAobmFtZSAmJiBfaXNGdW5jdGlvbihuYW1lLnJldmVydCkpIHtcbiAgICAvLyBcdHRoaXMuZGF0YS5wdXNoKG5hbWUpO1xuICAgIC8vIFx0cmV0dXJuIChuYW1lLl9jdHggPSB0aGlzKTtcbiAgICAvLyB9XG4gICAgaWYgKF9pc0Z1bmN0aW9uKG5hbWUpKSB7XG4gICAgICBzY29wZSA9IGZ1bmM7XG4gICAgICBmdW5jID0gbmFtZTtcbiAgICAgIG5hbWUgPSBfaXNGdW5jdGlvbjtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGYgPSBmdW5jdGlvbiBmKCkge1xuICAgICAgdmFyIHByZXYgPSBfY29udGV4dCxcbiAgICAgICAgICBwcmV2U2VsZWN0b3IgPSBzZWxmLnNlbGVjdG9yLFxuICAgICAgICAgIHJlc3VsdDtcbiAgICAgIHByZXYgJiYgcHJldiAhPT0gc2VsZiAmJiBwcmV2LmRhdGEucHVzaChzZWxmKTtcbiAgICAgIHNjb3BlICYmIChzZWxmLnNlbGVjdG9yID0gc2VsZWN0b3Ioc2NvcGUpKTtcbiAgICAgIF9jb250ZXh0ID0gc2VsZjtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcbiAgICAgIF9pc0Z1bmN0aW9uKHJlc3VsdCkgJiYgc2VsZi5fci5wdXNoKHJlc3VsdCk7XG4gICAgICBfY29udGV4dCA9IHByZXY7XG4gICAgICBzZWxmLnNlbGVjdG9yID0gcHJldlNlbGVjdG9yO1xuICAgICAgc2VsZi5pc1JldmVydGVkID0gZmFsc2U7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICBzZWxmLmxhc3QgPSBmO1xuICAgIHJldHVybiBuYW1lID09PSBfaXNGdW5jdGlvbiA/IGYoc2VsZikgOiBuYW1lID8gc2VsZltuYW1lXSA9IGYgOiBmO1xuICB9O1xuXG4gIF9wcm90bzUuaWdub3JlID0gZnVuY3Rpb24gaWdub3JlKGZ1bmMpIHtcbiAgICB2YXIgcHJldiA9IF9jb250ZXh0O1xuICAgIF9jb250ZXh0ID0gbnVsbDtcbiAgICBmdW5jKHRoaXMpO1xuICAgIF9jb250ZXh0ID0gcHJldjtcbiAgfTtcblxuICBfcHJvdG81LmdldFR3ZWVucyA9IGZ1bmN0aW9uIGdldFR3ZWVucygpIHtcbiAgICB2YXIgYSA9IFtdO1xuICAgIHRoaXMuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIENvbnRleHQgPyBhLnB1c2guYXBwbHkoYSwgZS5nZXRUd2VlbnMoKSkgOiBlIGluc3RhbmNlb2YgVHdlZW4gJiYgIShlLnBhcmVudCAmJiBlLnBhcmVudC5kYXRhID09PSBcIm5lc3RlZFwiKSAmJiBhLnB1c2goZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGE7XG4gIH07XG5cbiAgX3Byb3RvNS5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHRoaXMuX3IubGVuZ3RoID0gdGhpcy5kYXRhLmxlbmd0aCA9IDA7XG4gIH07XG5cbiAgX3Byb3RvNS5raWxsID0gZnVuY3Rpb24ga2lsbChyZXZlcnQsIG1hdGNoTWVkaWEpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIGlmIChyZXZlcnQpIHtcbiAgICAgIHZhciB0d2VlbnMgPSB0aGlzLmdldFR3ZWVucygpO1xuICAgICAgdGhpcy5kYXRhLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgLy8gRmxpcCBwbHVnaW4gdHdlZW5zIGFyZSB2ZXJ5IGRpZmZlcmVudCBpbiB0aGF0IHRoZXkgc2hvdWxkIGFjdHVhbGx5IGJlIHB1c2hlZCB0byB0aGVpciBlbmQuIFRoZSBwbHVnaW4gcmVwbGFjZXMgdGhlIHRpbWVsaW5lJ3MgLnJldmVydCgpIG1ldGhvZCB0byBkbyBleGFjdGx5IHRoYXQuIEJ1dCB3ZSBhbHNvIG5lZWQgdG8gcmVtb3ZlIGFueSBvZiB0aG9zZSBuZXN0ZWQgdHdlZW5zIGluc2lkZSB0aGUgZmxpcCB0aW1lbGluZSBzbyB0aGF0IHRoZXkgZG9uJ3QgZ2V0IGluZGl2aWR1YWxseSByZXZlcnRlZC5cbiAgICAgICAgaWYgKHQuZGF0YSA9PT0gXCJpc0ZsaXBcIikge1xuICAgICAgICAgIHQucmV2ZXJ0KCk7XG4gICAgICAgICAgdC5nZXRDaGlsZHJlbih0cnVlLCB0cnVlLCBmYWxzZSkuZm9yRWFjaChmdW5jdGlvbiAodHdlZW4pIHtcbiAgICAgICAgICAgIHJldHVybiB0d2VlbnMuc3BsaWNlKHR3ZWVucy5pbmRleE9mKHR3ZWVuKSwgMSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pOyAvLyBzYXZlIGFzIGFuIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBjYWNoZSB0aGUgZ2xvYmFsVGltZSBmb3IgZWFjaCB0d2VlbiB0byBvcHRpbWl6ZSBwZXJmb3JtYW5jZSBkdXJpbmcgdGhlIHNvcnRcblxuICAgICAgdHdlZW5zLm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGc6IHQuZ2xvYmFsVGltZSgwKSxcbiAgICAgICAgICB0OiB0XG4gICAgICAgIH07XG4gICAgICB9KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBiLmcgLSBhLmcgfHwgLUluZmluaXR5O1xuICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAobykge1xuICAgICAgICByZXR1cm4gby50LnJldmVydChyZXZlcnQpO1xuICAgICAgfSk7IC8vIG5vdGU6IGFsbCBvZiB0aGUgX3N0YXJ0QXQgdHdlZW5zIHNob3VsZCBiZSByZXZlcnRlZCBpbiByZXZlcnNlIG9yZGVyIHRoYXQgdGhleSB3ZXJlIGNyZWF0ZWQsIGFuZCB0aGV5J2xsIGFsbCBoYXZlIHRoZSBzYW1lIGdsb2JhbFRpbWUgKC0xKSBzbyB0aGUgXCIgfHwgLTFcIiBpbiB0aGUgc29ydCBrZWVwcyB0aGUgb3JkZXIgcHJvcGVybHkuXG5cbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiAhKGUgaW5zdGFuY2VvZiBUd2VlbikgJiYgZS5yZXZlcnQgJiYgZS5yZXZlcnQocmV2ZXJ0KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9yLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgcmV0dXJuIGYocmV2ZXJ0LCBfdGhpczQpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuaXNSZXZlcnRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLmtpbGwgJiYgZS5raWxsKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICBpZiAobWF0Y2hNZWRpYSkge1xuICAgICAgdmFyIGkgPSBfbWVkaWEubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIC8vIHByZXZpb3VzbHksIHdlIGNoZWNrZWQgX21lZGlhLmluZGV4T2YodGhpcyksIGJ1dCBzb21lIGZyYW1ld29ya3MgbGlrZSBWdWUgZW5mb3JjZSBQcm94eSBvYmplY3RzIHRoYXQgbWFrZSBpdCBpbXBvc3NpYmxlIHRvIGdldCB0aGUgcHJvcGVyIHJlc3VsdCB0aGF0IHdheSwgc28gd2UgbXVzdCB1c2UgYSB1bmlxdWUgSUQgbnVtYmVyIGluc3RlYWQuXG4gICAgICAgIF9tZWRpYVtpXS5pZCA9PT0gdGhpcy5pZCAmJiBfbWVkaWEuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG81LnJldmVydCA9IGZ1bmN0aW9uIHJldmVydChjb25maWcpIHtcbiAgICB0aGlzLmtpbGwoY29uZmlnIHx8IHt9KTtcbiAgfTtcblxuICByZXR1cm4gQ29udGV4dDtcbn0oKTtcblxudmFyIE1hdGNoTWVkaWEgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNYXRjaE1lZGlhKHNjb3BlKSB7XG4gICAgdGhpcy5jb250ZXh0cyA9IFtdO1xuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgfVxuXG4gIHZhciBfcHJvdG82ID0gTWF0Y2hNZWRpYS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvNi5hZGQgPSBmdW5jdGlvbiBhZGQoY29uZGl0aW9ucywgZnVuYywgc2NvcGUpIHtcbiAgICBfaXNPYmplY3QoY29uZGl0aW9ucykgfHwgKGNvbmRpdGlvbnMgPSB7XG4gICAgICBtYXRjaGVzOiBjb25kaXRpb25zXG4gICAgfSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCgwLCBzY29wZSB8fCB0aGlzLnNjb3BlKSxcbiAgICAgICAgY29uZCA9IGNvbnRleHQuY29uZGl0aW9ucyA9IHt9LFxuICAgICAgICBtcSxcbiAgICAgICAgcCxcbiAgICAgICAgYWN0aXZlO1xuICAgIF9jb250ZXh0ICYmICFjb250ZXh0LnNlbGVjdG9yICYmIChjb250ZXh0LnNlbGVjdG9yID0gX2NvbnRleHQuc2VsZWN0b3IpOyAvLyBpbiBjYXNlIGEgY29udGV4dCBpcyBjcmVhdGVkIGluc2lkZSBhIGNvbnRleHQuIExpa2UgYSBnc2FwLm1hdGNoTWVkaWEoKSB0aGF0J3MgaW5zaWRlIGEgc2NvcGVkIGdzYXAuY29udGV4dCgpXG5cbiAgICB0aGlzLmNvbnRleHRzLnB1c2goY29udGV4dCk7XG4gICAgZnVuYyA9IGNvbnRleHQuYWRkKFwib25NYXRjaFwiLCBmdW5jKTtcbiAgICBjb250ZXh0LnF1ZXJpZXMgPSBjb25kaXRpb25zO1xuXG4gICAgZm9yIChwIGluIGNvbmRpdGlvbnMpIHtcbiAgICAgIGlmIChwID09PSBcImFsbFwiKSB7XG4gICAgICAgIGFjdGl2ZSA9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtcSA9IF93aW4ubWF0Y2hNZWRpYShjb25kaXRpb25zW3BdKTtcblxuICAgICAgICBpZiAobXEpIHtcbiAgICAgICAgICBfbWVkaWEuaW5kZXhPZihjb250ZXh0KSA8IDAgJiYgX21lZGlhLnB1c2goY29udGV4dCk7XG4gICAgICAgICAgKGNvbmRbcF0gPSBtcS5tYXRjaGVzKSAmJiAoYWN0aXZlID0gMSk7XG4gICAgICAgICAgbXEuYWRkTGlzdGVuZXIgPyBtcS5hZGRMaXN0ZW5lcihfb25NZWRpYUNoYW5nZSkgOiBtcS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIF9vbk1lZGlhQ2hhbmdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGFjdGl2ZSAmJiBmdW5jKGNvbnRleHQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIHJlZnJlc2goKSB7XG4gIC8vIFx0bGV0IHRpbWUgPSBfbGFzdE1lZGlhVGltZSxcbiAgLy8gXHRcdG1lZGlhID0gX21lZGlhO1xuICAvLyBcdF9sYXN0TWVkaWFUaW1lID0gLTE7XG4gIC8vIFx0X21lZGlhID0gdGhpcy5jb250ZXh0cztcbiAgLy8gXHRfb25NZWRpYUNoYW5nZSgpO1xuICAvLyBcdF9sYXN0TWVkaWFUaW1lID0gdGltZTtcbiAgLy8gXHRfbWVkaWEgPSBtZWRpYTtcbiAgLy8gfVxuICA7XG5cbiAgX3Byb3RvNi5yZXZlcnQgPSBmdW5jdGlvbiByZXZlcnQoY29uZmlnKSB7XG4gICAgdGhpcy5raWxsKGNvbmZpZyB8fCB7fSk7XG4gIH07XG5cbiAgX3Byb3RvNi5raWxsID0gZnVuY3Rpb24ga2lsbChyZXZlcnQpIHtcbiAgICB0aGlzLmNvbnRleHRzLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBjLmtpbGwocmV2ZXJ0LCB0cnVlKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gTWF0Y2hNZWRpYTtcbn0oKTtcbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogR1NBUFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5cbnZhciBfZ3NhcCA9IHtcbiAgcmVnaXN0ZXJQbHVnaW46IGZ1bmN0aW9uIHJlZ2lzdGVyUGx1Z2luKCkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIGFyZ3MuZm9yRWFjaChmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICByZXR1cm4gX2NyZWF0ZVBsdWdpbihjb25maWcpO1xuICAgIH0pO1xuICB9LFxuICB0aW1lbGluZTogZnVuY3Rpb24gdGltZWxpbmUodmFycykge1xuICAgIHJldHVybiBuZXcgVGltZWxpbmUodmFycyk7XG4gIH0sXG4gIGdldFR3ZWVuc09mOiBmdW5jdGlvbiBnZXRUd2VlbnNPZih0YXJnZXRzLCBvbmx5QWN0aXZlKSB7XG4gICAgcmV0dXJuIF9nbG9iYWxUaW1lbGluZS5nZXRUd2VlbnNPZih0YXJnZXRzLCBvbmx5QWN0aXZlKTtcbiAgfSxcbiAgZ2V0UHJvcGVydHk6IGZ1bmN0aW9uIGdldFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIHVuaXQsIHVuY2FjaGUpIHtcbiAgICBfaXNTdHJpbmcodGFyZ2V0KSAmJiAodGFyZ2V0ID0gdG9BcnJheSh0YXJnZXQpWzBdKTsgLy9pbiBjYXNlIHNlbGVjdG9yIHRleHQgb3IgYW4gYXJyYXkgaXMgcGFzc2VkIGluXG5cbiAgICB2YXIgZ2V0dGVyID0gX2dldENhY2hlKHRhcmdldCB8fCB7fSkuZ2V0LFxuICAgICAgICBmb3JtYXQgPSB1bml0ID8gX3Bhc3NUaHJvdWdoIDogX251bWVyaWNJZlBvc3NpYmxlO1xuXG4gICAgdW5pdCA9PT0gXCJuYXRpdmVcIiAmJiAodW5pdCA9IFwiXCIpO1xuICAgIHJldHVybiAhdGFyZ2V0ID8gdGFyZ2V0IDogIXByb3BlcnR5ID8gZnVuY3Rpb24gKHByb3BlcnR5LCB1bml0LCB1bmNhY2hlKSB7XG4gICAgICByZXR1cm4gZm9ybWF0KChfcGx1Z2luc1twcm9wZXJ0eV0gJiYgX3BsdWdpbnNbcHJvcGVydHldLmdldCB8fCBnZXR0ZXIpKHRhcmdldCwgcHJvcGVydHksIHVuaXQsIHVuY2FjaGUpKTtcbiAgICB9IDogZm9ybWF0KChfcGx1Z2luc1twcm9wZXJ0eV0gJiYgX3BsdWdpbnNbcHJvcGVydHldLmdldCB8fCBnZXR0ZXIpKHRhcmdldCwgcHJvcGVydHksIHVuaXQsIHVuY2FjaGUpKTtcbiAgfSxcbiAgcXVpY2tTZXR0ZXI6IGZ1bmN0aW9uIHF1aWNrU2V0dGVyKHRhcmdldCwgcHJvcGVydHksIHVuaXQpIHtcbiAgICB0YXJnZXQgPSB0b0FycmF5KHRhcmdldCk7XG5cbiAgICBpZiAodGFyZ2V0Lmxlbmd0aCA+IDEpIHtcbiAgICAgIHZhciBzZXR0ZXJzID0gdGFyZ2V0Lm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gZ3NhcC5xdWlja1NldHRlcih0LCBwcm9wZXJ0eSwgdW5pdCk7XG4gICAgICB9KSxcbiAgICAgICAgICBsID0gc2V0dGVycy5sZW5ndGg7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBpID0gbDtcblxuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgc2V0dGVyc1tpXSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGFyZ2V0ID0gdGFyZ2V0WzBdIHx8IHt9O1xuXG4gICAgdmFyIFBsdWdpbiA9IF9wbHVnaW5zW3Byb3BlcnR5XSxcbiAgICAgICAgY2FjaGUgPSBfZ2V0Q2FjaGUodGFyZ2V0KSxcbiAgICAgICAgcCA9IGNhY2hlLmhhcm5lc3MgJiYgKGNhY2hlLmhhcm5lc3MuYWxpYXNlcyB8fCB7fSlbcHJvcGVydHldIHx8IHByb3BlcnR5LFxuICAgICAgICAvLyBpbiBjYXNlIGl0J3MgYW4gYWxpYXMsIGxpa2UgXCJyb3RhdGVcIiBmb3IgXCJyb3RhdGlvblwiLlxuICAgIHNldHRlciA9IFBsdWdpbiA/IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdmFyIHAgPSBuZXcgUGx1Z2luKCk7XG4gICAgICBfcXVpY2tUd2Vlbi5fcHQgPSAwO1xuICAgICAgcC5pbml0KHRhcmdldCwgdW5pdCA/IHZhbHVlICsgdW5pdCA6IHZhbHVlLCBfcXVpY2tUd2VlbiwgMCwgW3RhcmdldF0pO1xuICAgICAgcC5yZW5kZXIoMSwgcCk7XG4gICAgICBfcXVpY2tUd2Vlbi5fcHQgJiYgX3JlbmRlclByb3BUd2VlbnMoMSwgX3F1aWNrVHdlZW4pO1xuICAgIH0gOiBjYWNoZS5zZXQodGFyZ2V0LCBwKTtcblxuICAgIHJldHVybiBQbHVnaW4gPyBzZXR0ZXIgOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBzZXR0ZXIodGFyZ2V0LCBwLCB1bml0ID8gdmFsdWUgKyB1bml0IDogdmFsdWUsIGNhY2hlLCAxKTtcbiAgICB9O1xuICB9LFxuICBxdWlja1RvOiBmdW5jdGlvbiBxdWlja1RvKHRhcmdldCwgcHJvcGVydHksIHZhcnMpIHtcbiAgICB2YXIgX21lcmdlMjtcblxuICAgIHZhciB0d2VlbiA9IGdzYXAudG8odGFyZ2V0LCBfbWVyZ2UoKF9tZXJnZTIgPSB7fSwgX21lcmdlMltwcm9wZXJ0eV0gPSBcIis9MC4xXCIsIF9tZXJnZTIucGF1c2VkID0gdHJ1ZSwgX21lcmdlMiksIHZhcnMgfHwge30pKSxcbiAgICAgICAgZnVuYyA9IGZ1bmN0aW9uIGZ1bmModmFsdWUsIHN0YXJ0LCBzdGFydElzUmVsYXRpdmUpIHtcbiAgICAgIHJldHVybiB0d2Vlbi5yZXNldFRvKHByb3BlcnR5LCB2YWx1ZSwgc3RhcnQsIHN0YXJ0SXNSZWxhdGl2ZSk7XG4gICAgfTtcblxuICAgIGZ1bmMudHdlZW4gPSB0d2VlbjtcbiAgICByZXR1cm4gZnVuYztcbiAgfSxcbiAgaXNUd2VlbmluZzogZnVuY3Rpb24gaXNUd2VlbmluZyh0YXJnZXRzKSB7XG4gICAgcmV0dXJuIF9nbG9iYWxUaW1lbGluZS5nZXRUd2VlbnNPZih0YXJnZXRzLCB0cnVlKS5sZW5ndGggPiAwO1xuICB9LFxuICBkZWZhdWx0czogZnVuY3Rpb24gZGVmYXVsdHModmFsdWUpIHtcbiAgICB2YWx1ZSAmJiB2YWx1ZS5lYXNlICYmICh2YWx1ZS5lYXNlID0gX3BhcnNlRWFzZSh2YWx1ZS5lYXNlLCBfZGVmYXVsdHMuZWFzZSkpO1xuICAgIHJldHVybiBfbWVyZ2VEZWVwKF9kZWZhdWx0cywgdmFsdWUgfHwge30pO1xuICB9LFxuICBjb25maWc6IGZ1bmN0aW9uIGNvbmZpZyh2YWx1ZSkge1xuICAgIHJldHVybiBfbWVyZ2VEZWVwKF9jb25maWcsIHZhbHVlIHx8IHt9KTtcbiAgfSxcbiAgcmVnaXN0ZXJFZmZlY3Q6IGZ1bmN0aW9uIHJlZ2lzdGVyRWZmZWN0KF9yZWYzKSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMy5uYW1lLFxuICAgICAgICBlZmZlY3QgPSBfcmVmMy5lZmZlY3QsXG4gICAgICAgIHBsdWdpbnMgPSBfcmVmMy5wbHVnaW5zLFxuICAgICAgICBkZWZhdWx0cyA9IF9yZWYzLmRlZmF1bHRzLFxuICAgICAgICBleHRlbmRUaW1lbGluZSA9IF9yZWYzLmV4dGVuZFRpbWVsaW5lO1xuICAgIChwbHVnaW5zIHx8IFwiXCIpLnNwbGl0KFwiLFwiKS5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW5OYW1lKSB7XG4gICAgICByZXR1cm4gcGx1Z2luTmFtZSAmJiAhX3BsdWdpbnNbcGx1Z2luTmFtZV0gJiYgIV9nbG9iYWxzW3BsdWdpbk5hbWVdICYmIF93YXJuKG5hbWUgKyBcIiBlZmZlY3QgcmVxdWlyZXMgXCIgKyBwbHVnaW5OYW1lICsgXCIgcGx1Z2luLlwiKTtcbiAgICB9KTtcblxuICAgIF9lZmZlY3RzW25hbWVdID0gZnVuY3Rpb24gKHRhcmdldHMsIHZhcnMsIHRsKSB7XG4gICAgICByZXR1cm4gZWZmZWN0KHRvQXJyYXkodGFyZ2V0cyksIF9zZXREZWZhdWx0cyh2YXJzIHx8IHt9LCBkZWZhdWx0cyksIHRsKTtcbiAgICB9O1xuXG4gICAgaWYgKGV4dGVuZFRpbWVsaW5lKSB7XG4gICAgICBUaW1lbGluZS5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbiAodGFyZ2V0cywgdmFycywgcG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkKF9lZmZlY3RzW25hbWVdKHRhcmdldHMsIF9pc09iamVjdCh2YXJzKSA/IHZhcnMgOiAocG9zaXRpb24gPSB2YXJzKSAmJiB7fSwgdGhpcyksIHBvc2l0aW9uKTtcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICByZWdpc3RlckVhc2U6IGZ1bmN0aW9uIHJlZ2lzdGVyRWFzZShuYW1lLCBlYXNlKSB7XG4gICAgX2Vhc2VNYXBbbmFtZV0gPSBfcGFyc2VFYXNlKGVhc2UpO1xuICB9LFxuICBwYXJzZUVhc2U6IGZ1bmN0aW9uIHBhcnNlRWFzZShlYXNlLCBkZWZhdWx0RWFzZSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gX3BhcnNlRWFzZShlYXNlLCBkZWZhdWx0RWFzZSkgOiBfZWFzZU1hcDtcbiAgfSxcbiAgZ2V0QnlJZDogZnVuY3Rpb24gZ2V0QnlJZChpZCkge1xuICAgIHJldHVybiBfZ2xvYmFsVGltZWxpbmUuZ2V0QnlJZChpZCk7XG4gIH0sXG4gIGV4cG9ydFJvb3Q6IGZ1bmN0aW9uIGV4cG9ydFJvb3QodmFycywgaW5jbHVkZURlbGF5ZWRDYWxscykge1xuICAgIGlmICh2YXJzID09PSB2b2lkIDApIHtcbiAgICAgIHZhcnMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmUodmFycyksXG4gICAgICAgIGNoaWxkLFxuICAgICAgICBuZXh0O1xuICAgIHRsLnNtb290aENoaWxkVGltaW5nID0gX2lzTm90RmFsc2UodmFycy5zbW9vdGhDaGlsZFRpbWluZyk7XG5cbiAgICBfZ2xvYmFsVGltZWxpbmUucmVtb3ZlKHRsKTtcblxuICAgIHRsLl9kcCA9IDA7IC8vb3RoZXJ3aXNlIGl0J2xsIGdldCByZS1hY3RpdmF0ZWQgd2hlbiBhZGRpbmcgY2hpbGRyZW4gYW5kIGJlIHJlLWludHJvZHVjZWQgaW50byBfZ2xvYmFsVGltZWxpbmUncyBsaW5rZWQgbGlzdCAodGhlbiBhZGRlZCB0byBpdHNlbGYpLlxuXG4gICAgdGwuX3RpbWUgPSB0bC5fdFRpbWUgPSBfZ2xvYmFsVGltZWxpbmUuX3RpbWU7XG4gICAgY2hpbGQgPSBfZ2xvYmFsVGltZWxpbmUuX2ZpcnN0O1xuXG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICBuZXh0ID0gY2hpbGQuX25leHQ7XG5cbiAgICAgIGlmIChpbmNsdWRlRGVsYXllZENhbGxzIHx8ICEoIWNoaWxkLl9kdXIgJiYgY2hpbGQgaW5zdGFuY2VvZiBUd2VlbiAmJiBjaGlsZC52YXJzLm9uQ29tcGxldGUgPT09IGNoaWxkLl90YXJnZXRzWzBdKSkge1xuICAgICAgICBfYWRkVG9UaW1lbGluZSh0bCwgY2hpbGQsIGNoaWxkLl9zdGFydCAtIGNoaWxkLl9kZWxheSk7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkID0gbmV4dDtcbiAgICB9XG5cbiAgICBfYWRkVG9UaW1lbGluZShfZ2xvYmFsVGltZWxpbmUsIHRsLCAwKTtcblxuICAgIHJldHVybiB0bDtcbiAgfSxcbiAgY29udGV4dDogZnVuY3Rpb24gY29udGV4dChmdW5jLCBzY29wZSkge1xuICAgIHJldHVybiBmdW5jID8gbmV3IENvbnRleHQoZnVuYywgc2NvcGUpIDogX2NvbnRleHQ7XG4gIH0sXG4gIG1hdGNoTWVkaWE6IGZ1bmN0aW9uIG1hdGNoTWVkaWEoc2NvcGUpIHtcbiAgICByZXR1cm4gbmV3IE1hdGNoTWVkaWEoc2NvcGUpO1xuICB9LFxuICBtYXRjaE1lZGlhUmVmcmVzaDogZnVuY3Rpb24gbWF0Y2hNZWRpYVJlZnJlc2goKSB7XG4gICAgcmV0dXJuIF9tZWRpYS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICB2YXIgY29uZCA9IGMuY29uZGl0aW9ucyxcbiAgICAgICAgICBmb3VuZCxcbiAgICAgICAgICBwO1xuXG4gICAgICBmb3IgKHAgaW4gY29uZCkge1xuICAgICAgICBpZiAoY29uZFtwXSkge1xuICAgICAgICAgIGNvbmRbcF0gPSBmYWxzZTtcbiAgICAgICAgICBmb3VuZCA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm91bmQgJiYgYy5yZXZlcnQoKTtcbiAgICB9KSB8fCBfb25NZWRpYUNoYW5nZSgpO1xuICB9LFxuICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGEgPSBfbGlzdGVuZXJzW3R5cGVdIHx8IChfbGlzdGVuZXJzW3R5cGVdID0gW10pO1xuICAgIH5hLmluZGV4T2YoY2FsbGJhY2spIHx8IGEucHVzaChjYWxsYmFjayk7XG4gIH0sXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgYSA9IF9saXN0ZW5lcnNbdHlwZV0sXG4gICAgICAgIGkgPSBhICYmIGEuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgaSA+PSAwICYmIGEuc3BsaWNlKGksIDEpO1xuICB9LFxuICB1dGlsczoge1xuICAgIHdyYXA6IHdyYXAsXG4gICAgd3JhcFlveW86IHdyYXBZb3lvLFxuICAgIGRpc3RyaWJ1dGU6IGRpc3RyaWJ1dGUsXG4gICAgcmFuZG9tOiByYW5kb20sXG4gICAgc25hcDogc25hcCxcbiAgICBub3JtYWxpemU6IG5vcm1hbGl6ZSxcbiAgICBnZXRVbml0OiBnZXRVbml0LFxuICAgIGNsYW1wOiBjbGFtcCxcbiAgICBzcGxpdENvbG9yOiBzcGxpdENvbG9yLFxuICAgIHRvQXJyYXk6IHRvQXJyYXksXG4gICAgc2VsZWN0b3I6IHNlbGVjdG9yLFxuICAgIG1hcFJhbmdlOiBtYXBSYW5nZSxcbiAgICBwaXBlOiBwaXBlLFxuICAgIHVuaXRpemU6IHVuaXRpemUsXG4gICAgaW50ZXJwb2xhdGU6IGludGVycG9sYXRlLFxuICAgIHNodWZmbGU6IHNodWZmbGVcbiAgfSxcbiAgaW5zdGFsbDogX2luc3RhbGwsXG4gIGVmZmVjdHM6IF9lZmZlY3RzLFxuICB0aWNrZXI6IF90aWNrZXIsXG4gIHVwZGF0ZVJvb3Q6IFRpbWVsaW5lLnVwZGF0ZVJvb3QsXG4gIHBsdWdpbnM6IF9wbHVnaW5zLFxuICBnbG9iYWxUaW1lbGluZTogX2dsb2JhbFRpbWVsaW5lLFxuICBjb3JlOiB7XG4gICAgUHJvcFR3ZWVuOiBQcm9wVHdlZW4sXG4gICAgZ2xvYmFsczogX2FkZEdsb2JhbCxcbiAgICBUd2VlbjogVHdlZW4sXG4gICAgVGltZWxpbmU6IFRpbWVsaW5lLFxuICAgIEFuaW1hdGlvbjogQW5pbWF0aW9uLFxuICAgIGdldENhY2hlOiBfZ2V0Q2FjaGUsXG4gICAgX3JlbW92ZUxpbmtlZExpc3RJdGVtOiBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0sXG4gICAgcmV2ZXJ0aW5nOiBmdW5jdGlvbiByZXZlcnRpbmcoKSB7XG4gICAgICByZXR1cm4gX3JldmVydGluZztcbiAgICB9LFxuICAgIGNvbnRleHQ6IGZ1bmN0aW9uIGNvbnRleHQodG9BZGQpIHtcbiAgICAgIGlmICh0b0FkZCAmJiBfY29udGV4dCkge1xuICAgICAgICBfY29udGV4dC5kYXRhLnB1c2godG9BZGQpO1xuXG4gICAgICAgIHRvQWRkLl9jdHggPSBfY29udGV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9jb250ZXh0O1xuICAgIH0sXG4gICAgc3VwcHJlc3NPdmVyd3JpdGVzOiBmdW5jdGlvbiBzdXBwcmVzc092ZXJ3cml0ZXModmFsdWUpIHtcbiAgICAgIHJldHVybiBfc3VwcHJlc3NPdmVyd3JpdGVzID0gdmFsdWU7XG4gICAgfVxuICB9XG59O1xuXG5fZm9yRWFjaE5hbWUoXCJ0byxmcm9tLGZyb21UbyxkZWxheWVkQ2FsbCxzZXQsa2lsbFR3ZWVuc09mXCIsIGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBfZ3NhcFtuYW1lXSA9IFR3ZWVuW25hbWVdO1xufSk7XG5cbl90aWNrZXIuYWRkKFRpbWVsaW5lLnVwZGF0ZVJvb3QpO1xuXG5fcXVpY2tUd2VlbiA9IF9nc2FwLnRvKHt9LCB7XG4gIGR1cmF0aW9uOiAwXG59KTsgLy8gLS0tLSBFWFRSQSBQTFVHSU5TIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciBfZ2V0UGx1Z2luUHJvcFR3ZWVuID0gZnVuY3Rpb24gX2dldFBsdWdpblByb3BUd2VlbihwbHVnaW4sIHByb3ApIHtcbiAgdmFyIHB0ID0gcGx1Z2luLl9wdDtcblxuICB3aGlsZSAocHQgJiYgcHQucCAhPT0gcHJvcCAmJiBwdC5vcCAhPT0gcHJvcCAmJiBwdC5mcCAhPT0gcHJvcCkge1xuICAgIHB0ID0gcHQuX25leHQ7XG4gIH1cblxuICByZXR1cm4gcHQ7XG59LFxuICAgIF9hZGRNb2RpZmllcnMgPSBmdW5jdGlvbiBfYWRkTW9kaWZpZXJzKHR3ZWVuLCBtb2RpZmllcnMpIHtcbiAgdmFyIHRhcmdldHMgPSB0d2Vlbi5fdGFyZ2V0cyxcbiAgICAgIHAsXG4gICAgICBpLFxuICAgICAgcHQ7XG5cbiAgZm9yIChwIGluIG1vZGlmaWVycykge1xuICAgIGkgPSB0YXJnZXRzLmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHB0ID0gdHdlZW4uX3B0TG9va3VwW2ldW3BdO1xuXG4gICAgICBpZiAocHQgJiYgKHB0ID0gcHQuZCkpIHtcbiAgICAgICAgaWYgKHB0Ll9wdCkge1xuICAgICAgICAgIC8vIGlzIGEgcGx1Z2luXG4gICAgICAgICAgcHQgPSBfZ2V0UGx1Z2luUHJvcFR3ZWVuKHB0LCBwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB0ICYmIHB0Lm1vZGlmaWVyICYmIHB0Lm1vZGlmaWVyKG1vZGlmaWVyc1twXSwgdHdlZW4sIHRhcmdldHNbaV0sIHApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSxcbiAgICBfYnVpbGRNb2RpZmllclBsdWdpbiA9IGZ1bmN0aW9uIF9idWlsZE1vZGlmaWVyUGx1Z2luKG5hbWUsIG1vZGlmaWVyKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICByYXdWYXJzOiAxLFxuICAgIC8vZG9uJ3QgcHJlLXByb2Nlc3MgZnVuY3Rpb24tYmFzZWQgdmFsdWVzIG9yIFwicmFuZG9tKClcIiBzdHJpbmdzLlxuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQodGFyZ2V0LCB2YXJzLCB0d2Vlbikge1xuICAgICAgdHdlZW4uX29uSW5pdCA9IGZ1bmN0aW9uICh0d2Vlbikge1xuICAgICAgICB2YXIgdGVtcCwgcDtcblxuICAgICAgICBpZiAoX2lzU3RyaW5nKHZhcnMpKSB7XG4gICAgICAgICAgdGVtcCA9IHt9O1xuXG4gICAgICAgICAgX2ZvckVhY2hOYW1lKHZhcnMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVtcFtuYW1lXSA9IDE7XG4gICAgICAgICAgfSk7IC8vaWYgdGhlIHVzZXIgcGFzc2VzIGluIGEgY29tbWEtZGVsaW1pdGVkIGxpc3Qgb2YgcHJvcGVydHkgbmFtZXMgdG8gcm91bmRQcm9wcywgbGlrZSBcIngseVwiLCB3ZSByb3VuZCB0byB3aG9sZSBudW1iZXJzLlxuXG5cbiAgICAgICAgICB2YXJzID0gdGVtcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb2RpZmllcikge1xuICAgICAgICAgIHRlbXAgPSB7fTtcblxuICAgICAgICAgIGZvciAocCBpbiB2YXJzKSB7XG4gICAgICAgICAgICB0ZW1wW3BdID0gbW9kaWZpZXIodmFyc1twXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFycyA9IHRlbXA7XG4gICAgICAgIH1cblxuICAgICAgICBfYWRkTW9kaWZpZXJzKHR3ZWVuLCB2YXJzKTtcbiAgICAgIH07XG4gICAgfVxuICB9O1xufTsgLy9yZWdpc3RlciBjb3JlIHBsdWdpbnNcblxuXG5leHBvcnQgdmFyIGdzYXAgPSBfZ3NhcC5yZWdpc3RlclBsdWdpbih7XG4gIG5hbWU6IFwiYXR0clwiLFxuICBpbml0OiBmdW5jdGlvbiBpbml0KHRhcmdldCwgdmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXRzKSB7XG4gICAgdmFyIHAsIHB0LCB2O1xuICAgIHRoaXMudHdlZW4gPSB0d2VlbjtcblxuICAgIGZvciAocCBpbiB2YXJzKSB7XG4gICAgICB2ID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShwKSB8fCBcIlwiO1xuICAgICAgcHQgPSB0aGlzLmFkZCh0YXJnZXQsIFwic2V0QXR0cmlidXRlXCIsICh2IHx8IDApICsgXCJcIiwgdmFyc1twXSwgaW5kZXgsIHRhcmdldHMsIDAsIDAsIHApO1xuICAgICAgcHQub3AgPSBwO1xuICAgICAgcHQuYiA9IHY7IC8vIHJlY29yZCB0aGUgYmVnaW5uaW5nIHZhbHVlIHNvIHdlIGNhbiByZXZlcnQoKVxuXG4gICAgICB0aGlzLl9wcm9wcy5wdXNoKHApO1xuICAgIH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIocmF0aW8sIGRhdGEpIHtcbiAgICB2YXIgcHQgPSBkYXRhLl9wdDtcblxuICAgIHdoaWxlIChwdCkge1xuICAgICAgX3JldmVydGluZyA/IHB0LnNldChwdC50LCBwdC5wLCBwdC5iLCBwdCkgOiBwdC5yKHJhdGlvLCBwdC5kKTsgLy8gaWYgcmV2ZXJ0aW5nLCBnbyBiYWNrIHRvIHRoZSBvcmlnaW5hbCAocHQuYilcblxuICAgICAgcHQgPSBwdC5fbmV4dDtcbiAgICB9XG4gIH1cbn0sIHtcbiAgbmFtZTogXCJlbmRBcnJheVwiLFxuICBpbml0OiBmdW5jdGlvbiBpbml0KHRhcmdldCwgdmFsdWUpIHtcbiAgICB2YXIgaSA9IHZhbHVlLmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHRoaXMuYWRkKHRhcmdldCwgaSwgdGFyZ2V0W2ldIHx8IDAsIHZhbHVlW2ldLCAwLCAwLCAwLCAwLCAwLCAxKTtcbiAgICB9XG4gIH1cbn0sIF9idWlsZE1vZGlmaWVyUGx1Z2luKFwicm91bmRQcm9wc1wiLCBfcm91bmRNb2RpZmllciksIF9idWlsZE1vZGlmaWVyUGx1Z2luKFwibW9kaWZpZXJzXCIpLCBfYnVpbGRNb2RpZmllclBsdWdpbihcInNuYXBcIiwgc25hcCkpIHx8IF9nc2FwOyAvL3RvIHByZXZlbnQgdGhlIGNvcmUgcGx1Z2lucyBmcm9tIGJlaW5nIGRyb3BwZWQgdmlhIGFnZ3Jlc3NpdmUgdHJlZSBzaGFraW5nLCB3ZSBtdXN0IGluY2x1ZGUgdGhlbSBpbiB0aGUgdmFyaWFibGUgZGVjbGFyYXRpb24gaW4gdGhpcyB3YXkuXG5cblR3ZWVuLnZlcnNpb24gPSBUaW1lbGluZS52ZXJzaW9uID0gZ3NhcC52ZXJzaW9uID0gXCIzLjEyLjJcIjtcbl9jb3JlUmVhZHkgPSAxO1xuX3dpbmRvd0V4aXN0cygpICYmIF93YWtlKCk7XG52YXIgUG93ZXIwID0gX2Vhc2VNYXAuUG93ZXIwLFxuICAgIFBvd2VyMSA9IF9lYXNlTWFwLlBvd2VyMSxcbiAgICBQb3dlcjIgPSBfZWFzZU1hcC5Qb3dlcjIsXG4gICAgUG93ZXIzID0gX2Vhc2VNYXAuUG93ZXIzLFxuICAgIFBvd2VyNCA9IF9lYXNlTWFwLlBvd2VyNCxcbiAgICBMaW5lYXIgPSBfZWFzZU1hcC5MaW5lYXIsXG4gICAgUXVhZCA9IF9lYXNlTWFwLlF1YWQsXG4gICAgQ3ViaWMgPSBfZWFzZU1hcC5DdWJpYyxcbiAgICBRdWFydCA9IF9lYXNlTWFwLlF1YXJ0LFxuICAgIFF1aW50ID0gX2Vhc2VNYXAuUXVpbnQsXG4gICAgU3Ryb25nID0gX2Vhc2VNYXAuU3Ryb25nLFxuICAgIEVsYXN0aWMgPSBfZWFzZU1hcC5FbGFzdGljLFxuICAgIEJhY2sgPSBfZWFzZU1hcC5CYWNrLFxuICAgIFN0ZXBwZWRFYXNlID0gX2Vhc2VNYXAuU3RlcHBlZEVhc2UsXG4gICAgQm91bmNlID0gX2Vhc2VNYXAuQm91bmNlLFxuICAgIFNpbmUgPSBfZWFzZU1hcC5TaW5lLFxuICAgIEV4cG8gPSBfZWFzZU1hcC5FeHBvLFxuICAgIENpcmMgPSBfZWFzZU1hcC5DaXJjO1xuZXhwb3J0IHsgUG93ZXIwLCBQb3dlcjEsIFBvd2VyMiwgUG93ZXIzLCBQb3dlcjQsIExpbmVhciwgUXVhZCwgQ3ViaWMsIFF1YXJ0LCBRdWludCwgU3Ryb25nLCBFbGFzdGljLCBCYWNrLCBTdGVwcGVkRWFzZSwgQm91bmNlLCBTaW5lLCBFeHBvLCBDaXJjIH07XG5leHBvcnQgeyBUd2VlbiBhcyBUd2Vlbk1heCwgVHdlZW4gYXMgVHdlZW5MaXRlLCBUaW1lbGluZSBhcyBUaW1lbGluZU1heCwgVGltZWxpbmUgYXMgVGltZWxpbmVMaXRlLCBnc2FwIGFzIGRlZmF1bHQsIHdyYXAsIHdyYXBZb3lvLCBkaXN0cmlidXRlLCByYW5kb20sIHNuYXAsIG5vcm1hbGl6ZSwgZ2V0VW5pdCwgY2xhbXAsIHNwbGl0Q29sb3IsIHRvQXJyYXksIHNlbGVjdG9yLCBtYXBSYW5nZSwgcGlwZSwgdW5pdGl6ZSwgaW50ZXJwb2xhdGUsIHNodWZmbGUgfTsgLy9leHBvcnQgc29tZSBpbnRlcm5hbCBtZXRob2RzL29yb2plY3RzIGZvciB1c2UgaW4gQ1NTUGx1Z2luIHNvIHRoYXQgd2UgY2FuIGV4dGVybmFsaXplIHRoYXQgZmlsZSBhbmQgYWxsb3cgY3VzdG9tIGJ1aWxkcyB0aGF0IGV4Y2x1ZGUgaXQuXG5cbmV4cG9ydCB7IF9nZXRQcm9wZXJ0eSwgX251bUV4cCwgX251bVdpdGhVbml0RXhwLCBfaXNTdHJpbmcsIF9pc1VuZGVmaW5lZCwgX3JlbmRlckNvbXBsZXhTdHJpbmcsIF9yZWxFeHAsIF9zZXREZWZhdWx0cywgX3JlbW92ZUxpbmtlZExpc3RJdGVtLCBfZm9yRWFjaE5hbWUsIF9zb3J0UHJvcFR3ZWVuc0J5UHJpb3JpdHksIF9jb2xvclN0cmluZ0ZpbHRlciwgX3JlcGxhY2VSYW5kb20sIF9jaGVja1BsdWdpbiwgX3BsdWdpbnMsIF90aWNrZXIsIF9jb25maWcsIF9yb3VuZE1vZGlmaWVyLCBfcm91bmQsIF9taXNzaW5nUGx1Z2luLCBfZ2V0U2V0dGVyLCBfZ2V0Q2FjaGUsIF9jb2xvckV4cCwgX3BhcnNlUmVsYXRpdmUgfTsiLCIvKiFcbiAqIENTU1BsdWdpbiAzLjEyLjJcbiAqIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbVxuICpcbiAqIENvcHlyaWdodCAyMDA4LTIwMjMsIEdyZWVuU29jay4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFN1YmplY3QgdG8gdGhlIHRlcm1zIGF0IGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9zdGFuZGFyZC1saWNlbnNlIG9yIGZvclxuICogQ2x1YiBHcmVlblNvY2sgbWVtYmVycywgdGhlIGFncmVlbWVudCBpc3N1ZWQgd2l0aCB0aGF0IG1lbWJlcnNoaXAuXG4gKiBAYXV0aG9yOiBKYWNrIERveWxlLCBqYWNrQGdyZWVuc29jay5jb21cbiovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBnc2FwLCBfZ2V0UHJvcGVydHksIF9udW1FeHAsIF9udW1XaXRoVW5pdEV4cCwgZ2V0VW5pdCwgX2lzU3RyaW5nLCBfaXNVbmRlZmluZWQsIF9yZW5kZXJDb21wbGV4U3RyaW5nLCBfcmVsRXhwLCBfZm9yRWFjaE5hbWUsIF9zb3J0UHJvcFR3ZWVuc0J5UHJpb3JpdHksIF9jb2xvclN0cmluZ0ZpbHRlciwgX2NoZWNrUGx1Z2luLCBfcmVwbGFjZVJhbmRvbSwgX3BsdWdpbnMsIEdTQ2FjaGUsIFByb3BUd2VlbiwgX2NvbmZpZywgX3RpY2tlciwgX3JvdW5kLCBfbWlzc2luZ1BsdWdpbiwgX2dldFNldHRlciwgX2dldENhY2hlLCBfY29sb3JFeHAsIF9wYXJzZVJlbGF0aXZlLCBfc2V0RGVmYXVsdHMsIF9yZW1vdmVMaW5rZWRMaXN0SXRlbSAvL2ZvciB0aGUgY29tbWVudGVkLW91dCBjbGFzc05hbWUgZmVhdHVyZS5cbn0gZnJvbSBcIi4vZ3NhcC1jb3JlLmpzXCI7XG5cbnZhciBfd2luLFxuICAgIF9kb2MsXG4gICAgX2RvY0VsZW1lbnQsXG4gICAgX3BsdWdpbkluaXR0ZWQsXG4gICAgX3RlbXBEaXYsXG4gICAgX3RlbXBEaXZTdHlsZXIsXG4gICAgX3JlY2VudFNldHRlclBsdWdpbixcbiAgICBfcmV2ZXJ0aW5nLFxuICAgIF93aW5kb3dFeGlzdHMgPSBmdW5jdGlvbiBfd2luZG93RXhpc3RzKCkge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIjtcbn0sXG4gICAgX3RyYW5zZm9ybVByb3BzID0ge30sXG4gICAgX1JBRDJERUcgPSAxODAgLyBNYXRoLlBJLFxuICAgIF9ERUcyUkFEID0gTWF0aC5QSSAvIDE4MCxcbiAgICBfYXRhbjIgPSBNYXRoLmF0YW4yLFxuICAgIF9iaWdOdW0gPSAxZTgsXG4gICAgX2NhcHNFeHAgPSAvKFtBLVpdKS9nLFxuICAgIF9ob3Jpem9udGFsRXhwID0gLyhsZWZ0fHJpZ2h0fHdpZHRofG1hcmdpbnxwYWRkaW5nfHgpL2ksXG4gICAgX2NvbXBsZXhFeHAgPSAvW1xccyxcXChdXFxTLyxcbiAgICBfcHJvcGVydHlBbGlhc2VzID0ge1xuICBhdXRvQWxwaGE6IFwib3BhY2l0eSx2aXNpYmlsaXR5XCIsXG4gIHNjYWxlOiBcInNjYWxlWCxzY2FsZVlcIixcbiAgYWxwaGE6IFwib3BhY2l0eVwiXG59LFxuICAgIF9yZW5kZXJDU1NQcm9wID0gZnVuY3Rpb24gX3JlbmRlckNTU1Byb3AocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCBNYXRoLnJvdW5kKChkYXRhLnMgKyBkYXRhLmMgKiByYXRpbykgKiAxMDAwMCkgLyAxMDAwMCArIGRhdGEudSwgZGF0YSk7XG59LFxuICAgIF9yZW5kZXJQcm9wV2l0aEVuZCA9IGZ1bmN0aW9uIF9yZW5kZXJQcm9wV2l0aEVuZChyYXRpbywgZGF0YSkge1xuICByZXR1cm4gZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIHJhdGlvID09PSAxID8gZGF0YS5lIDogTWF0aC5yb3VuZCgoZGF0YS5zICsgZGF0YS5jICogcmF0aW8pICogMTAwMDApIC8gMTAwMDAgKyBkYXRhLnUsIGRhdGEpO1xufSxcbiAgICBfcmVuZGVyQ1NTUHJvcFdpdGhCZWdpbm5pbmcgPSBmdW5jdGlvbiBfcmVuZGVyQ1NTUHJvcFdpdGhCZWdpbm5pbmcocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCByYXRpbyA/IE1hdGgucm91bmQoKGRhdGEucyArIGRhdGEuYyAqIHJhdGlvKSAqIDEwMDAwKSAvIDEwMDAwICsgZGF0YS51IDogZGF0YS5iLCBkYXRhKTtcbn0sXG4gICAgLy9pZiB1bml0cyBjaGFuZ2UsIHdlIG5lZWQgYSB3YXkgdG8gcmVuZGVyIHRoZSBvcmlnaW5hbCB1bml0L3ZhbHVlIHdoZW4gdGhlIHR3ZWVuIGdvZXMgYWxsIHRoZSB3YXkgYmFjayB0byB0aGUgYmVnaW5uaW5nIChyYXRpbzowKVxuX3JlbmRlclJvdW5kZWRDU1NQcm9wID0gZnVuY3Rpb24gX3JlbmRlclJvdW5kZWRDU1NQcm9wKHJhdGlvLCBkYXRhKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGEucyArIGRhdGEuYyAqIHJhdGlvO1xuICBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgfn4odmFsdWUgKyAodmFsdWUgPCAwID8gLS41IDogLjUpKSArIGRhdGEudSwgZGF0YSk7XG59LFxuICAgIF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlID0gZnVuY3Rpb24gX3JlbmRlck5vblR3ZWVuaW5nVmFsdWUocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCByYXRpbyA/IGRhdGEuZSA6IGRhdGEuYiwgZGF0YSk7XG59LFxuICAgIF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlT25seUF0RW5kID0gZnVuY3Rpb24gX3JlbmRlck5vblR3ZWVuaW5nVmFsdWVPbmx5QXRFbmQocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCByYXRpbyAhPT0gMSA/IGRhdGEuYiA6IGRhdGEuZSwgZGF0YSk7XG59LFxuICAgIF9zZXR0ZXJDU1NTdHlsZSA9IGZ1bmN0aW9uIF9zZXR0ZXJDU1NTdHlsZSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gdGFyZ2V0LnN0eWxlW3Byb3BlcnR5XSA9IHZhbHVlO1xufSxcbiAgICBfc2V0dGVyQ1NTUHJvcCA9IGZ1bmN0aW9uIF9zZXR0ZXJDU1NQcm9wKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIHZhbHVlKTtcbn0sXG4gICAgX3NldHRlclRyYW5zZm9ybSA9IGZ1bmN0aW9uIF9zZXR0ZXJUcmFuc2Zvcm0odGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIHRhcmdldC5fZ3NhcFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbn0sXG4gICAgX3NldHRlclNjYWxlID0gZnVuY3Rpb24gX3NldHRlclNjYWxlKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiB0YXJnZXQuX2dzYXAuc2NhbGVYID0gdGFyZ2V0Ll9nc2FwLnNjYWxlWSA9IHZhbHVlO1xufSxcbiAgICBfc2V0dGVyU2NhbGVXaXRoUmVuZGVyID0gZnVuY3Rpb24gX3NldHRlclNjYWxlV2l0aFJlbmRlcih0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgZGF0YSwgcmF0aW8pIHtcbiAgdmFyIGNhY2hlID0gdGFyZ2V0Ll9nc2FwO1xuICBjYWNoZS5zY2FsZVggPSBjYWNoZS5zY2FsZVkgPSB2YWx1ZTtcbiAgY2FjaGUucmVuZGVyVHJhbnNmb3JtKHJhdGlvLCBjYWNoZSk7XG59LFxuICAgIF9zZXR0ZXJUcmFuc2Zvcm1XaXRoUmVuZGVyID0gZnVuY3Rpb24gX3NldHRlclRyYW5zZm9ybVdpdGhSZW5kZXIodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIGRhdGEsIHJhdGlvKSB7XG4gIHZhciBjYWNoZSA9IHRhcmdldC5fZ3NhcDtcbiAgY2FjaGVbcHJvcGVydHldID0gdmFsdWU7XG4gIGNhY2hlLnJlbmRlclRyYW5zZm9ybShyYXRpbywgY2FjaGUpO1xufSxcbiAgICBfdHJhbnNmb3JtUHJvcCA9IFwidHJhbnNmb3JtXCIsXG4gICAgX3RyYW5zZm9ybU9yaWdpblByb3AgPSBfdHJhbnNmb3JtUHJvcCArIFwiT3JpZ2luXCIsXG4gICAgX3NhdmVTdHlsZSA9IGZ1bmN0aW9uIF9zYXZlU3R5bGUocHJvcGVydHksIGlzTm90Q1NTKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdmFyIHRhcmdldCA9IHRoaXMudGFyZ2V0LFxuICAgICAgc3R5bGUgPSB0YXJnZXQuc3R5bGU7XG5cbiAgaWYgKHByb3BlcnR5IGluIF90cmFuc2Zvcm1Qcm9wcyAmJiBzdHlsZSkge1xuICAgIHRoaXMudGZtID0gdGhpcy50Zm0gfHwge307XG5cbiAgICBpZiAocHJvcGVydHkgIT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICAgIHByb3BlcnR5ID0gX3Byb3BlcnR5QWxpYXNlc1twcm9wZXJ0eV0gfHwgcHJvcGVydHk7XG4gICAgICB+cHJvcGVydHkuaW5kZXhPZihcIixcIikgPyBwcm9wZXJ0eS5zcGxpdChcIixcIikuZm9yRWFjaChmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gX3RoaXMudGZtW2FdID0gX2dldCh0YXJnZXQsIGEpO1xuICAgICAgfSkgOiB0aGlzLnRmbVtwcm9wZXJ0eV0gPSB0YXJnZXQuX2dzYXAueCA/IHRhcmdldC5fZ3NhcFtwcm9wZXJ0eV0gOiBfZ2V0KHRhcmdldCwgcHJvcGVydHkpOyAvLyBub3RlOiBzY2FsZSB3b3VsZCBtYXAgdG8gXCJzY2FsZVgsc2NhbGVZXCIsIHRodXMgd2UgbG9vcCBhbmQgYXBwbHkgdGhlbSBib3RoLlxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gX3Byb3BlcnR5QWxpYXNlcy50cmFuc2Zvcm0uc3BsaXQoXCIsXCIpLmZvckVhY2goZnVuY3Rpb24gKHApIHtcbiAgICAgICAgcmV0dXJuIF9zYXZlU3R5bGUuY2FsbChfdGhpcywgcCwgaXNOb3RDU1MpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuaW5kZXhPZihfdHJhbnNmb3JtUHJvcCkgPj0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXQuX2dzYXAuc3ZnKSB7XG4gICAgICB0aGlzLnN2Z28gPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdmctb3JpZ2luXCIpO1xuICAgICAgdGhpcy5wcm9wcy5wdXNoKF90cmFuc2Zvcm1PcmlnaW5Qcm9wLCBpc05vdENTUywgXCJcIik7XG4gICAgfVxuXG4gICAgcHJvcGVydHkgPSBfdHJhbnNmb3JtUHJvcDtcbiAgfVxuXG4gIChzdHlsZSB8fCBpc05vdENTUykgJiYgdGhpcy5wcm9wcy5wdXNoKHByb3BlcnR5LCBpc05vdENTUywgc3R5bGVbcHJvcGVydHldKTtcbn0sXG4gICAgX3JlbW92ZUluZGVwZW5kZW50VHJhbnNmb3JtcyA9IGZ1bmN0aW9uIF9yZW1vdmVJbmRlcGVuZGVudFRyYW5zZm9ybXMoc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnRyYW5zbGF0ZSkge1xuICAgIHN0eWxlLnJlbW92ZVByb3BlcnR5KFwidHJhbnNsYXRlXCIpO1xuICAgIHN0eWxlLnJlbW92ZVByb3BlcnR5KFwic2NhbGVcIik7XG4gICAgc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJyb3RhdGVcIik7XG4gIH1cbn0sXG4gICAgX3JldmVydFN0eWxlID0gZnVuY3Rpb24gX3JldmVydFN0eWxlKCkge1xuICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgdGFyZ2V0ID0gdGhpcy50YXJnZXQsXG4gICAgICBzdHlsZSA9IHRhcmdldC5zdHlsZSxcbiAgICAgIGNhY2hlID0gdGFyZ2V0Ll9nc2FwLFxuICAgICAgaSxcbiAgICAgIHA7XG5cbiAgZm9yIChpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgLy8gc3RvcmVkIGxpa2UgdGhpczogcHJvcGVydHksIGlzTm90Q1NTLCB2YWx1ZVxuICAgIHByb3BzW2kgKyAxXSA/IHRhcmdldFtwcm9wc1tpXV0gPSBwcm9wc1tpICsgMl0gOiBwcm9wc1tpICsgMl0gPyBzdHlsZVtwcm9wc1tpXV0gPSBwcm9wc1tpICsgMl0gOiBzdHlsZS5yZW1vdmVQcm9wZXJ0eShwcm9wc1tpXS5zdWJzdHIoMCwgMikgPT09IFwiLS1cIiA/IHByb3BzW2ldIDogcHJvcHNbaV0ucmVwbGFjZShfY2Fwc0V4cCwgXCItJDFcIikudG9Mb3dlckNhc2UoKSk7XG4gIH1cblxuICBpZiAodGhpcy50Zm0pIHtcbiAgICBmb3IgKHAgaW4gdGhpcy50Zm0pIHtcbiAgICAgIGNhY2hlW3BdID0gdGhpcy50Zm1bcF07XG4gICAgfVxuXG4gICAgaWYgKGNhY2hlLnN2Zykge1xuICAgICAgY2FjaGUucmVuZGVyVHJhbnNmb3JtKCk7XG4gICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKFwiZGF0YS1zdmctb3JpZ2luXCIsIHRoaXMuc3ZnbyB8fCBcIlwiKTtcbiAgICB9XG5cbiAgICBpID0gX3JldmVydGluZygpO1xuXG4gICAgaWYgKCghaSB8fCAhaS5pc1N0YXJ0KSAmJiAhc3R5bGVbX3RyYW5zZm9ybVByb3BdKSB7XG4gICAgICBfcmVtb3ZlSW5kZXBlbmRlbnRUcmFuc2Zvcm1zKHN0eWxlKTtcblxuICAgICAgY2FjaGUudW5jYWNoZSA9IDE7IC8vIGlmIGl0J3MgYSBzdGFydEF0IHRoYXQncyBiZWluZyByZXZlcnRlZCBpbiB0aGUgX2luaXRUd2VlbigpIG9mIHRoZSBjb3JlLCB3ZSBkb24ndCBuZWVkIHRvIHVuY2FjaGUgdHJhbnNmb3Jtcy4gVGhpcyBpcyBwdXJlbHkgYSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24uXG4gICAgfVxuICB9XG59LFxuICAgIF9nZXRTdHlsZVNhdmVyID0gZnVuY3Rpb24gX2dldFN0eWxlU2F2ZXIodGFyZ2V0LCBwcm9wZXJ0aWVzKSB7XG4gIHZhciBzYXZlciA9IHtcbiAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICBwcm9wczogW10sXG4gICAgcmV2ZXJ0OiBfcmV2ZXJ0U3R5bGUsXG4gICAgc2F2ZTogX3NhdmVTdHlsZVxuICB9O1xuICB0YXJnZXQuX2dzYXAgfHwgZ3NhcC5jb3JlLmdldENhY2hlKHRhcmdldCk7IC8vIGp1c3QgbWFrZSBzdXJlIHRoZXJlJ3MgYSBfZ3NhcCBjYWNoZSBkZWZpbmVkIGJlY2F1c2Ugd2UgcmVhZCBmcm9tIGl0IGluIF9zYXZlU3R5bGUoKSBhbmQgaXQncyBtb3JlIGVmZmljaWVudCB0byBqdXN0IGNoZWNrIGl0IGhlcmUgb25jZS5cblxuICBwcm9wZXJ0aWVzICYmIHByb3BlcnRpZXMuc3BsaXQoXCIsXCIpLmZvckVhY2goZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gc2F2ZXIuc2F2ZShwKTtcbiAgfSk7XG4gIHJldHVybiBzYXZlcjtcbn0sXG4gICAgX3N1cHBvcnRzM0QsXG4gICAgX2NyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiBfY3JlYXRlRWxlbWVudCh0eXBlLCBucykge1xuICB2YXIgZSA9IF9kb2MuY3JlYXRlRWxlbWVudE5TID8gX2RvYy5jcmVhdGVFbGVtZW50TlMoKG5zIHx8IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiKS5yZXBsYWNlKC9eaHR0cHMvLCBcImh0dHBcIiksIHR5cGUpIDogX2RvYy5jcmVhdGVFbGVtZW50KHR5cGUpOyAvL3NvbWUgc2VydmVycyBzd2FwIGluIGh0dHBzIGZvciBodHRwIGluIHRoZSBuYW1lc3BhY2Ugd2hpY2ggY2FuIGJyZWFrIHRoaW5ncywgbWFraW5nIFwic3R5bGVcIiBpbmFjY2Vzc2libGUuXG5cbiAgcmV0dXJuIGUuc3R5bGUgPyBlIDogX2RvYy5jcmVhdGVFbGVtZW50KHR5cGUpOyAvL3NvbWUgZW52aXJvbm1lbnRzIHdvbid0IGFsbG93IGFjY2VzcyB0byB0aGUgZWxlbWVudCdzIHN0eWxlIHdoZW4gY3JlYXRlZCB3aXRoIGEgbmFtZXNwYWNlIGluIHdoaWNoIGNhc2Ugd2UgZGVmYXVsdCB0byB0aGUgc3RhbmRhcmQgY3JlYXRlRWxlbWVudCgpIHRvIHdvcmsgYXJvdW5kIHRoZSBpc3N1ZS4gQWxzbyBub3RlIHRoYXQgd2hlbiBHU0FQIGlzIGVtYmVkZGVkIGRpcmVjdGx5IGluc2lkZSBhbiBTVkcgZmlsZSwgY3JlYXRlRWxlbWVudCgpIHdvbid0IGFsbG93IGFjY2VzcyB0byB0aGUgc3R5bGUgb2JqZWN0IGluIEZpcmVmb3ggKHNlZSBodHRwczovL2dyZWVuc29jay5jb20vZm9ydW1zL3RvcGljLzIwMjE1LXByb2JsZW0tdXNpbmctdHdlZW5tYXgtaW4tc3RhbmRhbG9uZS1zZWxmLWNvbnRhaW5pbmctc3ZnLWZpbGUtZXJyLWNhbm5vdC1zZXQtcHJvcGVydHktY3NzdGV4dC1vZi11bmRlZmluZWQvKS5cbn0sXG4gICAgX2dldENvbXB1dGVkUHJvcGVydHkgPSBmdW5jdGlvbiBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCBza2lwUHJlZml4RmFsbGJhY2spIHtcbiAgdmFyIGNzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpO1xuICByZXR1cm4gY3NbcHJvcGVydHldIHx8IGNzLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkucmVwbGFjZShfY2Fwc0V4cCwgXCItJDFcIikudG9Mb3dlckNhc2UoKSkgfHwgY3MuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSkgfHwgIXNraXBQcmVmaXhGYWxsYmFjayAmJiBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIF9jaGVja1Byb3BQcmVmaXgocHJvcGVydHkpIHx8IHByb3BlcnR5LCAxKSB8fCBcIlwiOyAvL2NzcyB2YXJpYWJsZXMgbWF5IG5vdCBuZWVkIGNhcHMgc3dhcHBlZCBvdXQgZm9yIGRhc2hlcyBhbmQgbG93ZXJjYXNlLlxufSxcbiAgICBfcHJlZml4ZXMgPSBcIk8sTW96LG1zLE1zLFdlYmtpdFwiLnNwbGl0KFwiLFwiKSxcbiAgICBfY2hlY2tQcm9wUHJlZml4ID0gZnVuY3Rpb24gX2NoZWNrUHJvcFByZWZpeChwcm9wZXJ0eSwgZWxlbWVudCwgcHJlZmVyUHJlZml4KSB7XG4gIHZhciBlID0gZWxlbWVudCB8fCBfdGVtcERpdixcbiAgICAgIHMgPSBlLnN0eWxlLFxuICAgICAgaSA9IDU7XG5cbiAgaWYgKHByb3BlcnR5IGluIHMgJiYgIXByZWZlclByZWZpeCkge1xuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIHByb3BlcnR5ID0gcHJvcGVydHkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wZXJ0eS5zdWJzdHIoMSk7XG5cbiAgd2hpbGUgKGktLSAmJiAhKF9wcmVmaXhlc1tpXSArIHByb3BlcnR5IGluIHMpKSB7fVxuXG4gIHJldHVybiBpIDwgMCA/IG51bGwgOiAoaSA9PT0gMyA/IFwibXNcIiA6IGkgPj0gMCA/IF9wcmVmaXhlc1tpXSA6IFwiXCIpICsgcHJvcGVydHk7XG59LFxuICAgIF9pbml0Q29yZSA9IGZ1bmN0aW9uIF9pbml0Q29yZSgpIHtcbiAgaWYgKF93aW5kb3dFeGlzdHMoKSAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICBfd2luID0gd2luZG93O1xuICAgIF9kb2MgPSBfd2luLmRvY3VtZW50O1xuICAgIF9kb2NFbGVtZW50ID0gX2RvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgX3RlbXBEaXYgPSBfY3JlYXRlRWxlbWVudChcImRpdlwiKSB8fCB7XG4gICAgICBzdHlsZToge31cbiAgICB9O1xuICAgIF90ZW1wRGl2U3R5bGVyID0gX2NyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgX3RyYW5zZm9ybVByb3AgPSBfY2hlY2tQcm9wUHJlZml4KF90cmFuc2Zvcm1Qcm9wKTtcbiAgICBfdHJhbnNmb3JtT3JpZ2luUHJvcCA9IF90cmFuc2Zvcm1Qcm9wICsgXCJPcmlnaW5cIjtcbiAgICBfdGVtcERpdi5zdHlsZS5jc3NUZXh0ID0gXCJib3JkZXItd2lkdGg6MDtsaW5lLWhlaWdodDowO3Bvc2l0aW9uOmFic29sdXRlO3BhZGRpbmc6MFwiOyAvL21ha2Ugc3VyZSB0byBvdmVycmlkZSBjZXJ0YWluIHByb3BlcnRpZXMgdGhhdCBtYXkgY29udGFtaW5hdGUgbWVhc3VyZW1lbnRzLCBpbiBjYXNlIHRoZSB1c2VyIGhhcyBvdmVycmVhY2hpbmcgc3R5bGUgc2hlZXRzLlxuXG4gICAgX3N1cHBvcnRzM0QgPSAhIV9jaGVja1Byb3BQcmVmaXgoXCJwZXJzcGVjdGl2ZVwiKTtcbiAgICBfcmV2ZXJ0aW5nID0gZ3NhcC5jb3JlLnJldmVydGluZztcbiAgICBfcGx1Z2luSW5pdHRlZCA9IDE7XG4gIH1cbn0sXG4gICAgX2dldEJCb3hIYWNrID0gZnVuY3Rpb24gX2dldEJCb3hIYWNrKHN3YXBJZlBvc3NpYmxlKSB7XG4gIC8vd29ya3MgYXJvdW5kIGlzc3VlcyBpbiBzb21lIGJyb3dzZXJzIChsaWtlIEZpcmVmb3gpIHRoYXQgZG9uJ3QgY29ycmVjdGx5IHJlcG9ydCBnZXRCQm94KCkgb24gU1ZHIGVsZW1lbnRzIGluc2lkZSBhIDxkZWZzPiBlbGVtZW50IGFuZC9vciA8bWFzaz4uIFdlIHRyeSBjcmVhdGluZyBhbiBTVkcsIGFkZGluZyBpdCB0byB0aGUgZG9jdW1lbnRFbGVtZW50IGFuZCB0b3NzIHRoZSBlbGVtZW50IGluIHRoZXJlIHNvIHRoYXQgaXQncyBkZWZpbml0ZWx5IHBhcnQgb2YgdGhlIHJlbmRlcmluZyB0cmVlLCB0aGVuIGdyYWIgdGhlIGJib3ggYW5kIGlmIGl0IHdvcmtzLCB3ZSBhY3R1YWxseSBzd2FwIG91dCB0aGUgb3JpZ2luYWwgZ2V0QkJveCgpIG1ldGhvZCBmb3Igb3VyIG93biB0aGF0IGRvZXMgdGhlc2UgZXh0cmEgc3RlcHMgd2hlbmV2ZXIgZ2V0QkJveCBpcyBuZWVkZWQuIFRoaXMgaGVscHMgZW5zdXJlIHRoYXQgcGVyZm9ybWFuY2UgaXMgb3B0aW1hbCAob25seSBkbyBhbGwgdGhlc2UgZXh0cmEgc3RlcHMgd2hlbiBhYnNvbHV0ZWx5IG5lY2Vzc2FyeS4uLm1vc3QgZWxlbWVudHMgZG9uJ3QgbmVlZCBpdCkuXG4gIHZhciBzdmcgPSBfY3JlYXRlRWxlbWVudChcInN2Z1wiLCB0aGlzLm93bmVyU1ZHRWxlbWVudCAmJiB0aGlzLm93bmVyU1ZHRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ4bWxuc1wiKSB8fCBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIpLFxuICAgICAgb2xkUGFyZW50ID0gdGhpcy5wYXJlbnROb2RlLFxuICAgICAgb2xkU2libGluZyA9IHRoaXMubmV4dFNpYmxpbmcsXG4gICAgICBvbGRDU1MgPSB0aGlzLnN0eWxlLmNzc1RleHQsXG4gICAgICBiYm94O1xuXG4gIF9kb2NFbGVtZW50LmFwcGVuZENoaWxkKHN2Zyk7XG5cbiAgc3ZnLmFwcGVuZENoaWxkKHRoaXMpO1xuICB0aGlzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgaWYgKHN3YXBJZlBvc3NpYmxlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGJib3ggPSB0aGlzLmdldEJCb3goKTtcbiAgICAgIHRoaXMuX2dzYXBCQm94ID0gdGhpcy5nZXRCQm94OyAvL3N0b3JlIHRoZSBvcmlnaW5hbFxuXG4gICAgICB0aGlzLmdldEJCb3ggPSBfZ2V0QkJveEhhY2s7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfSBlbHNlIGlmICh0aGlzLl9nc2FwQkJveCkge1xuICAgIGJib3ggPSB0aGlzLl9nc2FwQkJveCgpO1xuICB9XG5cbiAgaWYgKG9sZFBhcmVudCkge1xuICAgIGlmIChvbGRTaWJsaW5nKSB7XG4gICAgICBvbGRQYXJlbnQuaW5zZXJ0QmVmb3JlKHRoaXMsIG9sZFNpYmxpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvbGRQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgX2RvY0VsZW1lbnQucmVtb3ZlQ2hpbGQoc3ZnKTtcblxuICB0aGlzLnN0eWxlLmNzc1RleHQgPSBvbGRDU1M7XG4gIHJldHVybiBiYm94O1xufSxcbiAgICBfZ2V0QXR0cmlidXRlRmFsbGJhY2tzID0gZnVuY3Rpb24gX2dldEF0dHJpYnV0ZUZhbGxiYWNrcyh0YXJnZXQsIGF0dHJpYnV0ZXNBcnJheSkge1xuICB2YXIgaSA9IGF0dHJpYnV0ZXNBcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIGlmICh0YXJnZXQuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZXNBcnJheVtpXSkpIHtcbiAgICAgIHJldHVybiB0YXJnZXQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZXNBcnJheVtpXSk7XG4gICAgfVxuICB9XG59LFxuICAgIF9nZXRCQm94ID0gZnVuY3Rpb24gX2dldEJCb3godGFyZ2V0KSB7XG4gIHZhciBib3VuZHM7XG5cbiAgdHJ5IHtcbiAgICBib3VuZHMgPSB0YXJnZXQuZ2V0QkJveCgpOyAvL0ZpcmVmb3ggdGhyb3dzIGVycm9ycyBpZiB5b3UgdHJ5IGNhbGxpbmcgZ2V0QkJveCgpIG9uIGFuIFNWRyBlbGVtZW50IHRoYXQncyBub3QgcmVuZGVyZWQgKGxpa2UgaW4gYSA8c3ltYm9sPiBvciA8ZGVmcz4pLiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02MTIxMThcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBib3VuZHMgPSBfZ2V0QkJveEhhY2suY2FsbCh0YXJnZXQsIHRydWUpO1xuICB9XG5cbiAgYm91bmRzICYmIChib3VuZHMud2lkdGggfHwgYm91bmRzLmhlaWdodCkgfHwgdGFyZ2V0LmdldEJCb3ggPT09IF9nZXRCQm94SGFjayB8fCAoYm91bmRzID0gX2dldEJCb3hIYWNrLmNhbGwodGFyZ2V0LCB0cnVlKSk7IC8vc29tZSBicm93c2VycyAobGlrZSBGaXJlZm94KSBtaXNyZXBvcnQgdGhlIGJvdW5kcyBpZiB0aGUgZWxlbWVudCBoYXMgemVybyB3aWR0aCBhbmQgaGVpZ2h0IChpdCBqdXN0IGFzc3VtZXMgaXQncyBhdCB4OjAsIHk6MCksIHRodXMgd2UgbmVlZCB0byBtYW51YWxseSBncmFiIHRoZSBwb3NpdGlvbiBpbiB0aGF0IGNhc2UuXG5cbiAgcmV0dXJuIGJvdW5kcyAmJiAhYm91bmRzLndpZHRoICYmICFib3VuZHMueCAmJiAhYm91bmRzLnkgPyB7XG4gICAgeDogK19nZXRBdHRyaWJ1dGVGYWxsYmFja3ModGFyZ2V0LCBbXCJ4XCIsIFwiY3hcIiwgXCJ4MVwiXSkgfHwgMCxcbiAgICB5OiArX2dldEF0dHJpYnV0ZUZhbGxiYWNrcyh0YXJnZXQsIFtcInlcIiwgXCJjeVwiLCBcInkxXCJdKSB8fCAwLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMFxuICB9IDogYm91bmRzO1xufSxcbiAgICBfaXNTVkcgPSBmdW5jdGlvbiBfaXNTVkcoZSkge1xuICByZXR1cm4gISEoZS5nZXRDVE0gJiYgKCFlLnBhcmVudE5vZGUgfHwgZS5vd25lclNWR0VsZW1lbnQpICYmIF9nZXRCQm94KGUpKTtcbn0sXG4gICAgLy9yZXBvcnRzIGlmIHRoZSBlbGVtZW50IGlzIGFuIFNWRyBvbiB3aGljaCBnZXRCQm94KCkgYWN0dWFsbHkgd29ya3Ncbl9yZW1vdmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIF9yZW1vdmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5KSB7XG4gIGlmIChwcm9wZXJ0eSkge1xuICAgIHZhciBzdHlsZSA9IHRhcmdldC5zdHlsZTtcblxuICAgIGlmIChwcm9wZXJ0eSBpbiBfdHJhbnNmb3JtUHJvcHMgJiYgcHJvcGVydHkgIT09IF90cmFuc2Zvcm1PcmlnaW5Qcm9wKSB7XG4gICAgICBwcm9wZXJ0eSA9IF90cmFuc2Zvcm1Qcm9wO1xuICAgIH1cblxuICAgIGlmIChzdHlsZS5yZW1vdmVQcm9wZXJ0eSkge1xuICAgICAgaWYgKHByb3BlcnR5LnN1YnN0cigwLCAyKSA9PT0gXCJtc1wiIHx8IHByb3BlcnR5LnN1YnN0cigwLCA2KSA9PT0gXCJ3ZWJraXRcIikge1xuICAgICAgICAvL01pY3Jvc29mdCBhbmQgc29tZSBXZWJraXQgYnJvd3NlcnMgZG9uJ3QgY29uZm9ybSB0byB0aGUgc3RhbmRhcmQgb2YgY2FwaXRhbGl6aW5nIHRoZSBmaXJzdCBwcmVmaXggY2hhcmFjdGVyLCBzbyB3ZSBhZGp1c3Qgc28gdGhhdCB3aGVuIHdlIHByZWZpeCB0aGUgY2FwcyB3aXRoIGEgZGFzaCwgaXQncyBjb3JyZWN0IChvdGhlcndpc2UgaXQnZCBiZSBcIm1zLXRyYW5zZm9ybVwiIGluc3RlYWQgb2YgXCItbXMtdHJhbnNmb3JtXCIgZm9yIElFOSwgZm9yIGV4YW1wbGUpXG4gICAgICAgIHByb3BlcnR5ID0gXCItXCIgKyBwcm9wZXJ0eTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcGVydHkucmVwbGFjZShfY2Fwc0V4cCwgXCItJDFcIikudG9Mb3dlckNhc2UoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vbm90ZTogb2xkIHZlcnNpb25zIG9mIElFIHVzZSBcInJlbW92ZUF0dHJpYnV0ZSgpXCIgaW5zdGVhZCBvZiBcInJlbW92ZVByb3BlcnR5KClcIlxuICAgICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKHByb3BlcnR5KTtcbiAgICB9XG4gIH1cbn0sXG4gICAgX2FkZE5vblR3ZWVuaW5nUFQgPSBmdW5jdGlvbiBfYWRkTm9uVHdlZW5pbmdQVChwbHVnaW4sIHRhcmdldCwgcHJvcGVydHksIGJlZ2lubmluZywgZW5kLCBvbmx5U2V0QXRFbmQpIHtcbiAgdmFyIHB0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCB0YXJnZXQsIHByb3BlcnR5LCAwLCAxLCBvbmx5U2V0QXRFbmQgPyBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZU9ubHlBdEVuZCA6IF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlKTtcbiAgcGx1Z2luLl9wdCA9IHB0O1xuICBwdC5iID0gYmVnaW5uaW5nO1xuICBwdC5lID0gZW5kO1xuXG4gIHBsdWdpbi5fcHJvcHMucHVzaChwcm9wZXJ0eSk7XG5cbiAgcmV0dXJuIHB0O1xufSxcbiAgICBfbm9uQ29udmVydGlibGVVbml0cyA9IHtcbiAgZGVnOiAxLFxuICByYWQ6IDEsXG4gIHR1cm46IDFcbn0sXG4gICAgX25vblN0YW5kYXJkTGF5b3V0cyA9IHtcbiAgZ3JpZDogMSxcbiAgZmxleDogMVxufSxcbiAgICAvL3Rha2VzIGEgc2luZ2xlIHZhbHVlIGxpa2UgMjBweCBhbmQgY29udmVydHMgaXQgdG8gdGhlIHVuaXQgc3BlY2lmaWVkLCBsaWtlIFwiJVwiLCByZXR1cm5pbmcgb25seSB0aGUgbnVtZXJpYyBhbW91bnQuXG5fY29udmVydFRvVW5pdCA9IGZ1bmN0aW9uIF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCB1bml0KSB7XG4gIHZhciBjdXJWYWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpIHx8IDAsXG4gICAgICBjdXJVbml0ID0gKHZhbHVlICsgXCJcIikudHJpbSgpLnN1YnN0cigoY3VyVmFsdWUgKyBcIlwiKS5sZW5ndGgpIHx8IFwicHhcIixcbiAgICAgIC8vIHNvbWUgYnJvd3NlcnMgbGVhdmUgZXh0cmEgd2hpdGVzcGFjZSBhdCB0aGUgYmVnaW5uaW5nIG9mIENTUyB2YXJpYWJsZXMsIGhlbmNlIHRoZSBuZWVkIHRvIHRyaW0oKVxuICBzdHlsZSA9IF90ZW1wRGl2LnN0eWxlLFxuICAgICAgaG9yaXpvbnRhbCA9IF9ob3Jpem9udGFsRXhwLnRlc3QocHJvcGVydHkpLFxuICAgICAgaXNSb290U1ZHID0gdGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJzdmdcIixcbiAgICAgIG1lYXN1cmVQcm9wZXJ0eSA9IChpc1Jvb3RTVkcgPyBcImNsaWVudFwiIDogXCJvZmZzZXRcIikgKyAoaG9yaXpvbnRhbCA/IFwiV2lkdGhcIiA6IFwiSGVpZ2h0XCIpLFxuICAgICAgYW1vdW50ID0gMTAwLFxuICAgICAgdG9QaXhlbHMgPSB1bml0ID09PSBcInB4XCIsXG4gICAgICB0b1BlcmNlbnQgPSB1bml0ID09PSBcIiVcIixcbiAgICAgIHB4LFxuICAgICAgcGFyZW50LFxuICAgICAgY2FjaGUsXG4gICAgICBpc1NWRztcblxuICBpZiAodW5pdCA9PT0gY3VyVW5pdCB8fCAhY3VyVmFsdWUgfHwgX25vbkNvbnZlcnRpYmxlVW5pdHNbdW5pdF0gfHwgX25vbkNvbnZlcnRpYmxlVW5pdHNbY3VyVW5pdF0pIHtcbiAgICByZXR1cm4gY3VyVmFsdWU7XG4gIH1cblxuICBjdXJVbml0ICE9PSBcInB4XCIgJiYgIXRvUGl4ZWxzICYmIChjdXJWYWx1ZSA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCBcInB4XCIpKTtcbiAgaXNTVkcgPSB0YXJnZXQuZ2V0Q1RNICYmIF9pc1NWRyh0YXJnZXQpO1xuXG4gIGlmICgodG9QZXJjZW50IHx8IGN1clVuaXQgPT09IFwiJVwiKSAmJiAoX3RyYW5zZm9ybVByb3BzW3Byb3BlcnR5XSB8fCB+cHJvcGVydHkuaW5kZXhPZihcImFkaXVzXCIpKSkge1xuICAgIHB4ID0gaXNTVkcgPyB0YXJnZXQuZ2V0QkJveCgpW2hvcml6b250YWwgPyBcIndpZHRoXCIgOiBcImhlaWdodFwiXSA6IHRhcmdldFttZWFzdXJlUHJvcGVydHldO1xuICAgIHJldHVybiBfcm91bmQodG9QZXJjZW50ID8gY3VyVmFsdWUgLyBweCAqIGFtb3VudCA6IGN1clZhbHVlIC8gMTAwICogcHgpO1xuICB9XG5cbiAgc3R5bGVbaG9yaXpvbnRhbCA/IFwid2lkdGhcIiA6IFwiaGVpZ2h0XCJdID0gYW1vdW50ICsgKHRvUGl4ZWxzID8gY3VyVW5pdCA6IHVuaXQpO1xuICBwYXJlbnQgPSB+cHJvcGVydHkuaW5kZXhPZihcImFkaXVzXCIpIHx8IHVuaXQgPT09IFwiZW1cIiAmJiB0YXJnZXQuYXBwZW5kQ2hpbGQgJiYgIWlzUm9vdFNWRyA/IHRhcmdldCA6IHRhcmdldC5wYXJlbnROb2RlO1xuXG4gIGlmIChpc1NWRykge1xuICAgIHBhcmVudCA9ICh0YXJnZXQub3duZXJTVkdFbGVtZW50IHx8IHt9KS5wYXJlbnROb2RlO1xuICB9XG5cbiAgaWYgKCFwYXJlbnQgfHwgcGFyZW50ID09PSBfZG9jIHx8ICFwYXJlbnQuYXBwZW5kQ2hpbGQpIHtcbiAgICBwYXJlbnQgPSBfZG9jLmJvZHk7XG4gIH1cblxuICBjYWNoZSA9IHBhcmVudC5fZ3NhcDtcblxuICBpZiAoY2FjaGUgJiYgdG9QZXJjZW50ICYmIGNhY2hlLndpZHRoICYmIGhvcml6b250YWwgJiYgY2FjaGUudGltZSA9PT0gX3RpY2tlci50aW1lICYmICFjYWNoZS51bmNhY2hlKSB7XG4gICAgcmV0dXJuIF9yb3VuZChjdXJWYWx1ZSAvIGNhY2hlLndpZHRoICogYW1vdW50KTtcbiAgfSBlbHNlIHtcbiAgICAodG9QZXJjZW50IHx8IGN1clVuaXQgPT09IFwiJVwiKSAmJiAhX25vblN0YW5kYXJkTGF5b3V0c1tfZ2V0Q29tcHV0ZWRQcm9wZXJ0eShwYXJlbnQsIFwiZGlzcGxheVwiKV0gJiYgKHN0eWxlLnBvc2l0aW9uID0gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBcInBvc2l0aW9uXCIpKTtcbiAgICBwYXJlbnQgPT09IHRhcmdldCAmJiAoc3R5bGUucG9zaXRpb24gPSBcInN0YXRpY1wiKTsgLy8gbGlrZSBmb3IgYm9yZGVyUmFkaXVzLCBpZiBpdCdzIGEgJSB3ZSBtdXN0IGhhdmUgaXQgcmVsYXRpdmUgdG8gdGhlIHRhcmdldCBpdHNlbGYgYnV0IHRoYXQgbWF5IG5vdCBoYXZlIHBvc2l0aW9uOiByZWxhdGl2ZSBvciBwb3NpdGlvbjogYWJzb2x1dGUgaW4gd2hpY2ggY2FzZSBpdCdkIGdvIHVwIHRoZSBjaGFpbiB1bnRpbCBpdCBmaW5kcyBpdHMgb2Zmc2V0UGFyZW50IChiYWQpLiBwb3NpdGlvbjogc3RhdGljIHByb3RlY3RzIGFnYWluc3QgdGhhdC5cblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChfdGVtcERpdik7XG4gICAgcHggPSBfdGVtcERpdlttZWFzdXJlUHJvcGVydHldO1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChfdGVtcERpdik7XG4gICAgc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG5cbiAgICBpZiAoaG9yaXpvbnRhbCAmJiB0b1BlcmNlbnQpIHtcbiAgICAgIGNhY2hlID0gX2dldENhY2hlKHBhcmVudCk7XG4gICAgICBjYWNoZS50aW1lID0gX3RpY2tlci50aW1lO1xuICAgICAgY2FjaGUud2lkdGggPSBwYXJlbnRbbWVhc3VyZVByb3BlcnR5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX3JvdW5kKHRvUGl4ZWxzID8gcHggKiBjdXJWYWx1ZSAvIGFtb3VudCA6IHB4ICYmIGN1clZhbHVlID8gYW1vdW50IC8gcHggKiBjdXJWYWx1ZSA6IDApO1xufSxcbiAgICBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCB1bml0LCB1bmNhY2hlKSB7XG4gIHZhciB2YWx1ZTtcbiAgX3BsdWdpbkluaXR0ZWQgfHwgX2luaXRDb3JlKCk7XG5cbiAgaWYgKHByb3BlcnR5IGluIF9wcm9wZXJ0eUFsaWFzZXMgJiYgcHJvcGVydHkgIT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICBwcm9wZXJ0eSA9IF9wcm9wZXJ0eUFsaWFzZXNbcHJvcGVydHldO1xuXG4gICAgaWYgKH5wcm9wZXJ0eS5pbmRleE9mKFwiLFwiKSkge1xuICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eS5zcGxpdChcIixcIilbMF07XG4gICAgfVxuICB9XG5cbiAgaWYgKF90cmFuc2Zvcm1Qcm9wc1twcm9wZXJ0eV0gJiYgcHJvcGVydHkgIT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICB2YWx1ZSA9IF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIHVuY2FjaGUpO1xuICAgIHZhbHVlID0gcHJvcGVydHkgIT09IFwidHJhbnNmb3JtT3JpZ2luXCIgPyB2YWx1ZVtwcm9wZXJ0eV0gOiB2YWx1ZS5zdmcgPyB2YWx1ZS5vcmlnaW4gOiBfZmlyc3RUd29Pbmx5KF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybU9yaWdpblByb3ApKSArIFwiIFwiICsgdmFsdWUuek9yaWdpbiArIFwicHhcIjtcbiAgfSBlbHNlIHtcbiAgICB2YWx1ZSA9IHRhcmdldC5zdHlsZVtwcm9wZXJ0eV07XG5cbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlID09PSBcImF1dG9cIiB8fCB1bmNhY2hlIHx8IH4odmFsdWUgKyBcIlwiKS5pbmRleE9mKFwiY2FsYyhcIikpIHtcbiAgICAgIHZhbHVlID0gX3NwZWNpYWxQcm9wc1twcm9wZXJ0eV0gJiYgX3NwZWNpYWxQcm9wc1twcm9wZXJ0eV0odGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCkgfHwgX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSkgfHwgX2dldFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHkpIHx8IChwcm9wZXJ0eSA9PT0gXCJvcGFjaXR5XCIgPyAxIDogMCk7IC8vIG5vdGU6IHNvbWUgYnJvd3NlcnMsIGxpa2UgRmlyZWZveCwgZG9uJ3QgcmVwb3J0IGJvcmRlclJhZGl1cyBjb3JyZWN0bHkhIEluc3RlYWQsIGl0IG9ubHkgcmVwb3J0cyBldmVyeSBjb3JuZXIgbGlrZSAgYm9yZGVyVG9wTGVmdFJhZGl1c1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bml0ICYmICF+KHZhbHVlICsgXCJcIikudHJpbSgpLmluZGV4T2YoXCIgXCIpID8gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHVuaXQpICsgdW5pdCA6IHZhbHVlO1xufSxcbiAgICBfdHdlZW5Db21wbGV4Q1NTU3RyaW5nID0gZnVuY3Rpb24gX3R3ZWVuQ29tcGxleENTU1N0cmluZyh0YXJnZXQsIHByb3AsIHN0YXJ0LCBlbmQpIHtcbiAgLy8gbm90ZTogd2UgY2FsbCBfdHdlZW5Db21wbGV4Q1NTU3RyaW5nLmNhbGwocGx1Z2luSW5zdGFuY2UuLi4pIHRvIGVuc3VyZSB0aGF0IGl0J3Mgc2NvcGVkIHByb3Blcmx5LiBXZSBtYXkgY2FsbCBpdCBmcm9tIHdpdGhpbiBhIHBsdWdpbiB0b28sIHRodXMgXCJ0aGlzXCIgd291bGQgcmVmZXIgdG8gdGhlIHBsdWdpbi5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA9PT0gXCJub25lXCIpIHtcbiAgICAvLyBzb21lIGJyb3dzZXJzIGxpa2UgU2FmYXJpIGFjdHVhbGx5IFBSRUZFUiB0aGUgcHJlZml4ZWQgcHJvcGVydHkgYW5kIG1pcy1yZXBvcnQgdGhlIHVucHJlZml4ZWQgdmFsdWUgbGlrZSBjbGlwUGF0aCAoQlVHKS4gSW4gb3RoZXIgd29yZHMsIGV2ZW4gdGhvdWdoIGNsaXBQYXRoIGV4aXN0cyBpbiB0aGUgc3R5bGUgKFwiY2xpcFBhdGhcIiBpbiB0YXJnZXQuc3R5bGUpIGFuZCBpdCdzIHNldCBpbiB0aGUgQ1NTIHByb3Blcmx5IChhbG9uZyB3aXRoIC13ZWJraXQtY2xpcC1wYXRoKSwgU2FmYXJpIHJlcG9ydHMgY2xpcFBhdGggYXMgXCJub25lXCIgd2hlcmVhcyBXZWJraXRDbGlwUGF0aCByZXBvcnRzIGFjY3VyYXRlbHkgbGlrZSBcImVsbGlwc2UoMTAwJSAwJSBhdCA1MCUgMCUpXCIsIHNvIGluIHRoaXMgY2FzZSB3ZSBtdXN0IFNXSVRDSCB0byB1c2luZyB0aGUgcHJlZml4ZWQgcHJvcGVydHkgaW5zdGVhZC4gU2VlIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9mb3J1bXMvdG9waWMvMTgzMTAtY2xpcHBhdGgtZG9lc250LXdvcmstb24taW9zL1xuICAgIHZhciBwID0gX2NoZWNrUHJvcFByZWZpeChwcm9wLCB0YXJnZXQsIDEpLFxuICAgICAgICBzID0gcCAmJiBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIHAsIDEpO1xuXG4gICAgaWYgKHMgJiYgcyAhPT0gc3RhcnQpIHtcbiAgICAgIHByb3AgPSBwO1xuICAgICAgc3RhcnQgPSBzO1xuICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gXCJib3JkZXJDb2xvclwiKSB7XG4gICAgICBzdGFydCA9IF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgXCJib3JkZXJUb3BDb2xvclwiKTsgLy8gRmlyZWZveCBidWc6IGFsd2F5cyByZXBvcnRzIFwiYm9yZGVyQ29sb3JcIiBhcyBcIlwiLCBzbyB3ZSBtdXN0IGZhbGwgYmFjayB0byBib3JkZXJUb3BDb2xvci4gU2VlIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9mb3J1bXMvdG9waWMvMjQ1ODMtaG93LXRvLXJldHVybi1jb2xvcnMtdGhhdC1pLWhhZC1hZnRlci1yZXZlcnNlL1xuICAgIH1cbiAgfVxuXG4gIHZhciBwdCA9IG5ldyBQcm9wVHdlZW4odGhpcy5fcHQsIHRhcmdldC5zdHlsZSwgcHJvcCwgMCwgMSwgX3JlbmRlckNvbXBsZXhTdHJpbmcpLFxuICAgICAgaW5kZXggPSAwLFxuICAgICAgbWF0Y2hJbmRleCA9IDAsXG4gICAgICBhLFxuICAgICAgcmVzdWx0LFxuICAgICAgc3RhcnRWYWx1ZXMsXG4gICAgICBzdGFydE51bSxcbiAgICAgIGNvbG9yLFxuICAgICAgc3RhcnRWYWx1ZSxcbiAgICAgIGVuZFZhbHVlLFxuICAgICAgZW5kTnVtLFxuICAgICAgY2h1bmssXG4gICAgICBlbmRVbml0LFxuICAgICAgc3RhcnRVbml0LFxuICAgICAgZW5kVmFsdWVzO1xuICBwdC5iID0gc3RhcnQ7XG4gIHB0LmUgPSBlbmQ7XG4gIHN0YXJ0ICs9IFwiXCI7IC8vIGVuc3VyZSB2YWx1ZXMgYXJlIHN0cmluZ3NcblxuICBlbmQgKz0gXCJcIjtcblxuICBpZiAoZW5kID09PSBcImF1dG9cIikge1xuICAgIHRhcmdldC5zdHlsZVtwcm9wXSA9IGVuZDtcbiAgICBlbmQgPSBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIHByb3ApIHx8IGVuZDtcbiAgICB0YXJnZXQuc3R5bGVbcHJvcF0gPSBzdGFydDtcbiAgfVxuXG4gIGEgPSBbc3RhcnQsIGVuZF07XG5cbiAgX2NvbG9yU3RyaW5nRmlsdGVyKGEpOyAvLyBwYXNzIGFuIGFycmF5IHdpdGggdGhlIHN0YXJ0aW5nIGFuZCBlbmRpbmcgdmFsdWVzIGFuZCBsZXQgdGhlIGZpbHRlciBkbyB3aGF0ZXZlciBpdCBuZWVkcyB0byB0aGUgdmFsdWVzLiBJZiBjb2xvcnMgYXJlIGZvdW5kLCBpdCByZXR1cm5zIHRydWUgYW5kIHRoZW4gd2UgbXVzdCBtYXRjaCB3aGVyZSB0aGUgY29sb3Igc2hvd3MgdXAgb3JkZXItd2lzZSBiZWNhdXNlIGZvciB0aGluZ3MgbGlrZSBib3hTaGFkb3csIHNvbWV0aW1lcyB0aGUgYnJvd3NlciBwcm92aWRlcyB0aGUgY29tcHV0ZWQgdmFsdWVzIHdpdGggdGhlIGNvbG9yIEZJUlNULCBidXQgdGhlIHVzZXIgcHJvdmlkZXMgaXQgd2l0aCB0aGUgY29sb3IgTEFTVCwgc28gZmxpcCB0aGVtIGlmIG5lY2Vzc2FyeS4gU2FtZSBmb3IgZHJvcC1zaGFkb3coKS5cblxuXG4gIHN0YXJ0ID0gYVswXTtcbiAgZW5kID0gYVsxXTtcbiAgc3RhcnRWYWx1ZXMgPSBzdGFydC5tYXRjaChfbnVtV2l0aFVuaXRFeHApIHx8IFtdO1xuICBlbmRWYWx1ZXMgPSBlbmQubWF0Y2goX251bVdpdGhVbml0RXhwKSB8fCBbXTtcblxuICBpZiAoZW5kVmFsdWVzLmxlbmd0aCkge1xuICAgIHdoaWxlIChyZXN1bHQgPSBfbnVtV2l0aFVuaXRFeHAuZXhlYyhlbmQpKSB7XG4gICAgICBlbmRWYWx1ZSA9IHJlc3VsdFswXTtcbiAgICAgIGNodW5rID0gZW5kLnN1YnN0cmluZyhpbmRleCwgcmVzdWx0LmluZGV4KTtcblxuICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgIGNvbG9yID0gKGNvbG9yICsgMSkgJSA1O1xuICAgICAgfSBlbHNlIGlmIChjaHVuay5zdWJzdHIoLTUpID09PSBcInJnYmEoXCIgfHwgY2h1bmsuc3Vic3RyKC01KSA9PT0gXCJoc2xhKFwiKSB7XG4gICAgICAgIGNvbG9yID0gMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVuZFZhbHVlICE9PSAoc3RhcnRWYWx1ZSA9IHN0YXJ0VmFsdWVzW21hdGNoSW5kZXgrK10gfHwgXCJcIikpIHtcbiAgICAgICAgc3RhcnROdW0gPSBwYXJzZUZsb2F0KHN0YXJ0VmFsdWUpIHx8IDA7XG4gICAgICAgIHN0YXJ0VW5pdCA9IHN0YXJ0VmFsdWUuc3Vic3RyKChzdGFydE51bSArIFwiXCIpLmxlbmd0aCk7XG4gICAgICAgIGVuZFZhbHVlLmNoYXJBdCgxKSA9PT0gXCI9XCIgJiYgKGVuZFZhbHVlID0gX3BhcnNlUmVsYXRpdmUoc3RhcnROdW0sIGVuZFZhbHVlKSArIHN0YXJ0VW5pdCk7XG4gICAgICAgIGVuZE51bSA9IHBhcnNlRmxvYXQoZW5kVmFsdWUpO1xuICAgICAgICBlbmRVbml0ID0gZW5kVmFsdWUuc3Vic3RyKChlbmROdW0gKyBcIlwiKS5sZW5ndGgpO1xuICAgICAgICBpbmRleCA9IF9udW1XaXRoVW5pdEV4cC5sYXN0SW5kZXggLSBlbmRVbml0Lmxlbmd0aDtcblxuICAgICAgICBpZiAoIWVuZFVuaXQpIHtcbiAgICAgICAgICAvL2lmIHNvbWV0aGluZyBsaWtlIFwicGVyc3BlY3RpdmU6MzAwXCIgaXMgcGFzc2VkIGluIGFuZCB3ZSBtdXN0IGFkZCBhIHVuaXQgdG8gdGhlIGVuZFxuICAgICAgICAgIGVuZFVuaXQgPSBlbmRVbml0IHx8IF9jb25maWcudW5pdHNbcHJvcF0gfHwgc3RhcnRVbml0O1xuXG4gICAgICAgICAgaWYgKGluZGV4ID09PSBlbmQubGVuZ3RoKSB7XG4gICAgICAgICAgICBlbmQgKz0gZW5kVW5pdDtcbiAgICAgICAgICAgIHB0LmUgKz0gZW5kVW5pdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhcnRVbml0ICE9PSBlbmRVbml0KSB7XG4gICAgICAgICAgc3RhcnROdW0gPSBfY29udmVydFRvVW5pdCh0YXJnZXQsIHByb3AsIHN0YXJ0VmFsdWUsIGVuZFVuaXQpIHx8IDA7XG4gICAgICAgIH0gLy8gdGhlc2UgbmVzdGVkIFByb3BUd2VlbnMgYXJlIGhhbmRsZWQgaW4gYSBzcGVjaWFsIHdheSAtIHdlJ2xsIG5ldmVyIGFjdHVhbGx5IGNhbGwgYSByZW5kZXIgb3Igc2V0dGVyIG1ldGhvZCBvbiB0aGVtLiBXZSdsbCBqdXN0IGxvb3AgdGhyb3VnaCB0aGVtIGluIHRoZSBwYXJlbnQgY29tcGxleCBzdHJpbmcgUHJvcFR3ZWVuJ3MgcmVuZGVyIG1ldGhvZC5cblxuXG4gICAgICAgIHB0Ll9wdCA9IHtcbiAgICAgICAgICBfbmV4dDogcHQuX3B0LFxuICAgICAgICAgIHA6IGNodW5rIHx8IG1hdGNoSW5kZXggPT09IDEgPyBjaHVuayA6IFwiLFwiLFxuICAgICAgICAgIC8vbm90ZTogU1ZHIHNwZWMgYWxsb3dzIG9taXNzaW9uIG9mIGNvbW1hL3NwYWNlIHdoZW4gYSBuZWdhdGl2ZSBzaWduIGlzIHdlZGdlZCBiZXR3ZWVuIHR3byBudW1iZXJzLCBsaWtlIDIuNS01LjMgaW5zdGVhZCBvZiAyLjUsLTUuMyBidXQgd2hlbiB0d2VlbmluZywgdGhlIG5lZ2F0aXZlIHZhbHVlIG1heSBzd2l0Y2ggdG8gcG9zaXRpdmUsIHNvIHdlIGluc2VydCB0aGUgY29tbWEganVzdCBpbiBjYXNlLlxuICAgICAgICAgIHM6IHN0YXJ0TnVtLFxuICAgICAgICAgIGM6IGVuZE51bSAtIHN0YXJ0TnVtLFxuICAgICAgICAgIG06IGNvbG9yICYmIGNvbG9yIDwgNCB8fCBwcm9wID09PSBcInpJbmRleFwiID8gTWF0aC5yb3VuZCA6IDBcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwdC5jID0gaW5kZXggPCBlbmQubGVuZ3RoID8gZW5kLnN1YnN0cmluZyhpbmRleCwgZW5kLmxlbmd0aCkgOiBcIlwiOyAvL3dlIHVzZSB0aGUgXCJjXCIgb2YgdGhlIFByb3BUd2VlbiB0byBzdG9yZSB0aGUgZmluYWwgcGFydCBvZiB0aGUgc3RyaW5nIChhZnRlciB0aGUgbGFzdCBudW1iZXIpXG4gIH0gZWxzZSB7XG4gICAgcHQuciA9IHByb3AgPT09IFwiZGlzcGxheVwiICYmIGVuZCA9PT0gXCJub25lXCIgPyBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZU9ubHlBdEVuZCA6IF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlO1xuICB9XG5cbiAgX3JlbEV4cC50ZXN0KGVuZCkgJiYgKHB0LmUgPSAwKTsgLy9pZiB0aGUgZW5kIHN0cmluZyBjb250YWlucyByZWxhdGl2ZSB2YWx1ZXMgb3IgZHluYW1pYyByYW5kb20oLi4uKSB2YWx1ZXMsIGRlbGV0ZSB0aGUgZW5kIGl0IHNvIHRoYXQgb24gdGhlIGZpbmFsIHJlbmRlciB3ZSBkb24ndCBhY3R1YWxseSBzZXQgaXQgdG8gdGhlIHN0cmluZyB3aXRoICs9IG9yIC09IGNoYXJhY3RlcnMgKGZvcmNlcyBpdCB0byB1c2UgdGhlIGNhbGN1bGF0ZWQgdmFsdWUpLlxuXG4gIHRoaXMuX3B0ID0gcHQ7IC8vc3RhcnQgdGhlIGxpbmtlZCBsaXN0IHdpdGggdGhpcyBuZXcgUHJvcFR3ZWVuLiBSZW1lbWJlciwgd2UgY2FsbCBfdHdlZW5Db21wbGV4Q1NTU3RyaW5nLmNhbGwocGx1Z2luSW5zdGFuY2UuLi4pIHRvIGVuc3VyZSB0aGF0IGl0J3Mgc2NvcGVkIHByb3Blcmx5LiBXZSBtYXkgY2FsbCBpdCBmcm9tIHdpdGhpbiBhbm90aGVyIHBsdWdpbiB0b28sIHRodXMgXCJ0aGlzXCIgd291bGQgcmVmZXIgdG8gdGhlIHBsdWdpbi5cblxuICByZXR1cm4gcHQ7XG59LFxuICAgIF9rZXl3b3JkVG9QZXJjZW50ID0ge1xuICB0b3A6IFwiMCVcIixcbiAgYm90dG9tOiBcIjEwMCVcIixcbiAgbGVmdDogXCIwJVwiLFxuICByaWdodDogXCIxMDAlXCIsXG4gIGNlbnRlcjogXCI1MCVcIlxufSxcbiAgICBfY29udmVydEtleXdvcmRzVG9QZXJjZW50YWdlcyA9IGZ1bmN0aW9uIF9jb252ZXJ0S2V5d29yZHNUb1BlcmNlbnRhZ2VzKHZhbHVlKSB7XG4gIHZhciBzcGxpdCA9IHZhbHVlLnNwbGl0KFwiIFwiKSxcbiAgICAgIHggPSBzcGxpdFswXSxcbiAgICAgIHkgPSBzcGxpdFsxXSB8fCBcIjUwJVwiO1xuXG4gIGlmICh4ID09PSBcInRvcFwiIHx8IHggPT09IFwiYm90dG9tXCIgfHwgeSA9PT0gXCJsZWZ0XCIgfHwgeSA9PT0gXCJyaWdodFwiKSB7XG4gICAgLy90aGUgdXNlciBwcm92aWRlZCB0aGVtIGluIHRoZSB3cm9uZyBvcmRlciwgc28gZmxpcCB0aGVtXG4gICAgdmFsdWUgPSB4O1xuICAgIHggPSB5O1xuICAgIHkgPSB2YWx1ZTtcbiAgfVxuXG4gIHNwbGl0WzBdID0gX2tleXdvcmRUb1BlcmNlbnRbeF0gfHwgeDtcbiAgc3BsaXRbMV0gPSBfa2V5d29yZFRvUGVyY2VudFt5XSB8fCB5O1xuICByZXR1cm4gc3BsaXQuam9pbihcIiBcIik7XG59LFxuICAgIF9yZW5kZXJDbGVhclByb3BzID0gZnVuY3Rpb24gX3JlbmRlckNsZWFyUHJvcHMocmF0aW8sIGRhdGEpIHtcbiAgaWYgKGRhdGEudHdlZW4gJiYgZGF0YS50d2Vlbi5fdGltZSA9PT0gZGF0YS50d2Vlbi5fZHVyKSB7XG4gICAgdmFyIHRhcmdldCA9IGRhdGEudCxcbiAgICAgICAgc3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gICAgICAgIHByb3BzID0gZGF0YS51LFxuICAgICAgICBjYWNoZSA9IHRhcmdldC5fZ3NhcCxcbiAgICAgICAgcHJvcCxcbiAgICAgICAgY2xlYXJUcmFuc2Zvcm1zLFxuICAgICAgICBpO1xuXG4gICAgaWYgKHByb3BzID09PSBcImFsbFwiIHx8IHByb3BzID09PSB0cnVlKSB7XG4gICAgICBzdHlsZS5jc3NUZXh0ID0gXCJcIjtcbiAgICAgIGNsZWFyVHJhbnNmb3JtcyA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BzID0gcHJvcHMuc3BsaXQoXCIsXCIpO1xuICAgICAgaSA9IHByb3BzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKC0taSA+IC0xKSB7XG4gICAgICAgIHByb3AgPSBwcm9wc1tpXTtcblxuICAgICAgICBpZiAoX3RyYW5zZm9ybVByb3BzW3Byb3BdKSB7XG4gICAgICAgICAgY2xlYXJUcmFuc2Zvcm1zID0gMTtcbiAgICAgICAgICBwcm9wID0gcHJvcCA9PT0gXCJ0cmFuc2Zvcm1PcmlnaW5cIiA/IF90cmFuc2Zvcm1PcmlnaW5Qcm9wIDogX3RyYW5zZm9ybVByb3A7XG4gICAgICAgIH1cblxuICAgICAgICBfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBwcm9wKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2xlYXJUcmFuc2Zvcm1zKSB7XG4gICAgICBfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBfdHJhbnNmb3JtUHJvcCk7XG5cbiAgICAgIGlmIChjYWNoZSkge1xuICAgICAgICBjYWNoZS5zdmcgJiYgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKTtcblxuICAgICAgICBfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0LCAxKTsgLy8gZm9yY2UgYWxsIHRoZSBjYWNoZWQgdmFsdWVzIGJhY2sgdG8gXCJub3JtYWxcIi9pZGVudGl0eSwgb3RoZXJ3aXNlIGlmIHRoZXJlJ3MgYW5vdGhlciB0d2VlbiB0aGF0J3MgYWxyZWFkeSBzZXQgdG8gcmVuZGVyIHRyYW5zZm9ybXMgb24gdGhpcyBlbGVtZW50LCBpdCBjb3VsZCBkaXNwbGF5IHRoZSB3cm9uZyB2YWx1ZXMuXG5cblxuICAgICAgICBjYWNoZS51bmNhY2hlID0gMTtcblxuICAgICAgICBfcmVtb3ZlSW5kZXBlbmRlbnRUcmFuc2Zvcm1zKHN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0sXG4gICAgLy8gbm90ZTogc3BlY2lhbFByb3BzIHNob3VsZCByZXR1cm4gMSBpZiAoYW5kIG9ubHkgaWYpIHRoZXkgaGF2ZSBhIG5vbi16ZXJvIHByaW9yaXR5LiBJdCBpbmRpY2F0ZXMgd2UgbmVlZCB0byBzb3J0IHRoZSBsaW5rZWQgbGlzdC5cbl9zcGVjaWFsUHJvcHMgPSB7XG4gIGNsZWFyUHJvcHM6IGZ1bmN0aW9uIGNsZWFyUHJvcHMocGx1Z2luLCB0YXJnZXQsIHByb3BlcnR5LCBlbmRWYWx1ZSwgdHdlZW4pIHtcbiAgICBpZiAodHdlZW4uZGF0YSAhPT0gXCJpc0Zyb21TdGFydFwiKSB7XG4gICAgICB2YXIgcHQgPSBwbHVnaW4uX3B0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCB0YXJnZXQsIHByb3BlcnR5LCAwLCAwLCBfcmVuZGVyQ2xlYXJQcm9wcyk7XG4gICAgICBwdC51ID0gZW5kVmFsdWU7XG4gICAgICBwdC5wciA9IC0xMDtcbiAgICAgIHB0LnR3ZWVuID0gdHdlZW47XG5cbiAgICAgIHBsdWdpbi5fcHJvcHMucHVzaChwcm9wZXJ0eSk7XG5cbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfVxuICAvKiBjbGFzc05hbWUgZmVhdHVyZSAoYWJvdXQgMC40a2IgZ3ppcHBlZCkuXG4gICwgY2xhc3NOYW1lKHBsdWdpbiwgdGFyZ2V0LCBwcm9wZXJ0eSwgZW5kVmFsdWUsIHR3ZWVuKSB7XG4gIFx0bGV0IF9yZW5kZXJDbGFzc05hbWUgPSAocmF0aW8sIGRhdGEpID0+IHtcbiAgXHRcdFx0ZGF0YS5jc3MucmVuZGVyKHJhdGlvLCBkYXRhLmNzcyk7XG4gIFx0XHRcdGlmICghcmF0aW8gfHwgcmF0aW8gPT09IDEpIHtcbiAgXHRcdFx0XHRsZXQgaW5saW5lID0gZGF0YS5ybXYsXG4gIFx0XHRcdFx0XHR0YXJnZXQgPSBkYXRhLnQsXG4gIFx0XHRcdFx0XHRwO1xuICBcdFx0XHRcdHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCByYXRpbyA/IGRhdGEuZSA6IGRhdGEuYik7XG4gIFx0XHRcdFx0Zm9yIChwIGluIGlubGluZSkge1xuICBcdFx0XHRcdFx0X3JlbW92ZVByb3BlcnR5KHRhcmdldCwgcCk7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG4gIFx0XHR9LFxuICBcdFx0X2dldEFsbFN0eWxlcyA9ICh0YXJnZXQpID0+IHtcbiAgXHRcdFx0bGV0IHN0eWxlcyA9IHt9LFxuICBcdFx0XHRcdGNvbXB1dGVkID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLFxuICBcdFx0XHRcdHA7XG4gIFx0XHRcdGZvciAocCBpbiBjb21wdXRlZCkge1xuICBcdFx0XHRcdGlmIChpc05hTihwKSAmJiBwICE9PSBcImNzc1RleHRcIiAmJiBwICE9PSBcImxlbmd0aFwiKSB7XG4gIFx0XHRcdFx0XHRzdHlsZXNbcF0gPSBjb21wdXRlZFtwXTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdFx0X3NldERlZmF1bHRzKHN0eWxlcywgX3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgMSkpO1xuICBcdFx0XHRyZXR1cm4gc3R5bGVzO1xuICBcdFx0fSxcbiAgXHRcdHN0YXJ0Q2xhc3NMaXN0ID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLFxuICBcdFx0c3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gIFx0XHRjc3NUZXh0ID0gc3R5bGUuY3NzVGV4dCxcbiAgXHRcdGNhY2hlID0gdGFyZ2V0Ll9nc2FwLFxuICBcdFx0Y2xhc3NQVCA9IGNhY2hlLmNsYXNzUFQsXG4gIFx0XHRpbmxpbmVUb1JlbW92ZUF0RW5kID0ge30sXG4gIFx0XHRkYXRhID0ge3Q6dGFyZ2V0LCBwbHVnaW46cGx1Z2luLCBybXY6aW5saW5lVG9SZW1vdmVBdEVuZCwgYjpzdGFydENsYXNzTGlzdCwgZTooZW5kVmFsdWUuY2hhckF0KDEpICE9PSBcIj1cIikgPyBlbmRWYWx1ZSA6IHN0YXJ0Q2xhc3NMaXN0LnJlcGxhY2UobmV3IFJlZ0V4cChcIig/OlxcXFxzfF4pXCIgKyBlbmRWYWx1ZS5zdWJzdHIoMikgKyBcIig/IVtcXFxcdy1dKVwiKSwgXCJcIikgKyAoKGVuZFZhbHVlLmNoYXJBdCgwKSA9PT0gXCIrXCIpID8gXCIgXCIgKyBlbmRWYWx1ZS5zdWJzdHIoMikgOiBcIlwiKX0sXG4gIFx0XHRjaGFuZ2luZ1ZhcnMgPSB7fSxcbiAgXHRcdHN0YXJ0VmFycyA9IF9nZXRBbGxTdHlsZXModGFyZ2V0KSxcbiAgXHRcdHRyYW5zZm9ybVJlbGF0ZWQgPSAvKHRyYW5zZm9ybXxwZXJzcGVjdGl2ZSkvaSxcbiAgXHRcdGVuZFZhcnMsIHA7XG4gIFx0aWYgKGNsYXNzUFQpIHtcbiAgXHRcdGNsYXNzUFQucigxLCBjbGFzc1BULmQpO1xuICBcdFx0X3JlbW92ZUxpbmtlZExpc3RJdGVtKGNsYXNzUFQuZC5wbHVnaW4sIGNsYXNzUFQsIFwiX3B0XCIpO1xuICBcdH1cbiAgXHR0YXJnZXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgZGF0YS5lKTtcbiAgXHRlbmRWYXJzID0gX2dldEFsbFN0eWxlcyh0YXJnZXQsIHRydWUpO1xuICBcdHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBzdGFydENsYXNzTGlzdCk7XG4gIFx0Zm9yIChwIGluIGVuZFZhcnMpIHtcbiAgXHRcdGlmIChlbmRWYXJzW3BdICE9PSBzdGFydFZhcnNbcF0gJiYgIXRyYW5zZm9ybVJlbGF0ZWQudGVzdChwKSkge1xuICBcdFx0XHRjaGFuZ2luZ1ZhcnNbcF0gPSBlbmRWYXJzW3BdO1xuICBcdFx0XHRpZiAoIXN0eWxlW3BdICYmIHN0eWxlW3BdICE9PSBcIjBcIikge1xuICBcdFx0XHRcdGlubGluZVRvUmVtb3ZlQXRFbmRbcF0gPSAxO1xuICBcdFx0XHR9XG4gIFx0XHR9XG4gIFx0fVxuICBcdGNhY2hlLmNsYXNzUFQgPSBwbHVnaW4uX3B0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCB0YXJnZXQsIFwiY2xhc3NOYW1lXCIsIDAsIDAsIF9yZW5kZXJDbGFzc05hbWUsIGRhdGEsIDAsIC0xMSk7XG4gIFx0aWYgKHN0eWxlLmNzc1RleHQgIT09IGNzc1RleHQpIHsgLy9vbmx5IGFwcGx5IGlmIHRoaW5ncyBjaGFuZ2UuIE90aGVyd2lzZSwgaW4gY2FzZXMgbGlrZSBhIGJhY2tncm91bmQtaW1hZ2UgdGhhdCdzIHB1bGxlZCBkeW5hbWljYWxseSwgaXQgY291bGQgY2F1c2UgYSByZWZyZXNoLiBTZWUgaHR0cHM6Ly9ncmVlbnNvY2suY29tL2ZvcnVtcy90b3BpYy8yMDM2OC1wb3NzaWJsZS1nc2FwLWJ1Zy1zd2l0Y2hpbmctY2xhc3NuYW1lcy1pbi1jaHJvbWUvLlxuICBcdFx0c3R5bGUuY3NzVGV4dCA9IGNzc1RleHQ7IC8vd2UgcmVjb3JkZWQgY3NzVGV4dCBiZWZvcmUgd2Ugc3dhcHBlZCBjbGFzc2VzIGFuZCByYW4gX2dldEFsbFN0eWxlcygpIGJlY2F1c2UgaW4gY2FzZXMgd2hlbiBhIGNsYXNzTmFtZSB0d2VlbiBpcyBvdmVyd3JpdHRlbiwgd2UgcmVtb3ZlIGFsbCB0aGUgcmVsYXRlZCB0d2VlbmluZyBwcm9wZXJ0aWVzIGZyb20gdGhhdCBjbGFzcyBjaGFuZ2UgKG90aGVyd2lzZSBjbGFzcy1zcGVjaWZpYyBzdHVmZiBjYW4ndCBvdmVycmlkZSBwcm9wZXJ0aWVzIHdlJ3ZlIGRpcmVjdGx5IHNldCBvbiB0aGUgdGFyZ2V0J3Mgc3R5bGUgb2JqZWN0IGR1ZSB0byBzcGVjaWZpY2l0eSkuXG4gIFx0fVxuICBcdF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIHRydWUpOyAvL3RvIGNsZWFyIHRoZSBjYWNoaW5nIG9mIHRyYW5zZm9ybXNcbiAgXHRkYXRhLmNzcyA9IG5ldyBnc2FwLnBsdWdpbnMuY3NzKCk7XG4gIFx0ZGF0YS5jc3MuaW5pdCh0YXJnZXQsIGNoYW5naW5nVmFycywgdHdlZW4pO1xuICBcdHBsdWdpbi5fcHJvcHMucHVzaCguLi5kYXRhLmNzcy5fcHJvcHMpO1xuICBcdHJldHVybiAxO1xuICB9XG4gICovXG5cbn0sXG5cbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVFJBTlNGT1JNU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuX2lkZW50aXR5MkRNYXRyaXggPSBbMSwgMCwgMCwgMSwgMCwgMF0sXG4gICAgX3JvdGF0aW9uYWxQcm9wZXJ0aWVzID0ge30sXG4gICAgX2lzTnVsbFRyYW5zZm9ybSA9IGZ1bmN0aW9uIF9pc051bGxUcmFuc2Zvcm0odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBcIm1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKVwiIHx8IHZhbHVlID09PSBcIm5vbmVcIiB8fCAhdmFsdWU7XG59LFxuICAgIF9nZXRDb21wdXRlZFRyYW5zZm9ybU1hdHJpeEFzQXJyYXkgPSBmdW5jdGlvbiBfZ2V0Q29tcHV0ZWRUcmFuc2Zvcm1NYXRyaXhBc0FycmF5KHRhcmdldCkge1xuICB2YXIgbWF0cml4U3RyaW5nID0gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBfdHJhbnNmb3JtUHJvcCk7XG5cbiAgcmV0dXJuIF9pc051bGxUcmFuc2Zvcm0obWF0cml4U3RyaW5nKSA/IF9pZGVudGl0eTJETWF0cml4IDogbWF0cml4U3RyaW5nLnN1YnN0cig3KS5tYXRjaChfbnVtRXhwKS5tYXAoX3JvdW5kKTtcbn0sXG4gICAgX2dldE1hdHJpeCA9IGZ1bmN0aW9uIF9nZXRNYXRyaXgodGFyZ2V0LCBmb3JjZTJEKSB7XG4gIHZhciBjYWNoZSA9IHRhcmdldC5fZ3NhcCB8fCBfZ2V0Q2FjaGUodGFyZ2V0KSxcbiAgICAgIHN0eWxlID0gdGFyZ2V0LnN0eWxlLFxuICAgICAgbWF0cml4ID0gX2dldENvbXB1dGVkVHJhbnNmb3JtTWF0cml4QXNBcnJheSh0YXJnZXQpLFxuICAgICAgcGFyZW50LFxuICAgICAgbmV4dFNpYmxpbmcsXG4gICAgICB0ZW1wLFxuICAgICAgYWRkZWRUb0RPTTtcblxuICBpZiAoY2FjaGUuc3ZnICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIikpIHtcbiAgICB0ZW1wID0gdGFyZ2V0LnRyYW5zZm9ybS5iYXNlVmFsLmNvbnNvbGlkYXRlKCkubWF0cml4OyAvL2Vuc3VyZXMgdGhhdCBldmVuIGNvbXBsZXggdmFsdWVzIGxpa2UgXCJ0cmFuc2xhdGUoNTAsNjApIHJvdGF0ZSgxMzUsMCwwKVwiIGFyZSBwYXJzZWQgYmVjYXVzZSBpdCBtYXNoZXMgaXQgaW50byBhIG1hdHJpeC5cblxuICAgIG1hdHJpeCA9IFt0ZW1wLmEsIHRlbXAuYiwgdGVtcC5jLCB0ZW1wLmQsIHRlbXAuZSwgdGVtcC5mXTtcbiAgICByZXR1cm4gbWF0cml4LmpvaW4oXCIsXCIpID09PSBcIjEsMCwwLDEsMCwwXCIgPyBfaWRlbnRpdHkyRE1hdHJpeCA6IG1hdHJpeDtcbiAgfSBlbHNlIGlmIChtYXRyaXggPT09IF9pZGVudGl0eTJETWF0cml4ICYmICF0YXJnZXQub2Zmc2V0UGFyZW50ICYmIHRhcmdldCAhPT0gX2RvY0VsZW1lbnQgJiYgIWNhY2hlLnN2Zykge1xuICAgIC8vbm90ZTogaWYgb2Zmc2V0UGFyZW50IGlzIG51bGwsIHRoYXQgbWVhbnMgdGhlIGVsZW1lbnQgaXNuJ3QgaW4gdGhlIG5vcm1hbCBkb2N1bWVudCBmbG93LCBsaWtlIGlmIGl0IGhhcyBkaXNwbGF5Om5vbmUgb3Igb25lIG9mIGl0cyBhbmNlc3RvcnMgaGFzIGRpc3BsYXk6bm9uZSkuIEZpcmVmb3ggcmV0dXJucyBudWxsIGZvciBnZXRDb21wdXRlZFN0eWxlKCkgaWYgdGhlIGVsZW1lbnQgaXMgaW4gYW4gaWZyYW1lIHRoYXQgaGFzIGRpc3BsYXk6bm9uZS4gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gICAgLy9icm93c2VycyBkb24ndCByZXBvcnQgdHJhbnNmb3JtcyBhY2N1cmF0ZWx5IHVubGVzcyB0aGUgZWxlbWVudCBpcyBpbiB0aGUgRE9NIGFuZCBoYXMgYSBkaXNwbGF5IHZhbHVlIHRoYXQncyBub3QgXCJub25lXCIuIEZpcmVmb3ggYW5kIE1pY3Jvc29mdCBicm93c2VycyBoYXZlIGEgcGFydGlhbCBidWcgd2hlcmUgdGhleSdsbCByZXBvcnQgdHJhbnNmb3JtcyBldmVuIGlmIGRpc3BsYXk6bm9uZSBCVVQgbm90IGFueSBwZXJjZW50YWdlLWJhc2VkIHZhbHVlcyBsaWtlIHRyYW5zbGF0ZSgtNTAlLCA4cHgpIHdpbGwgYmUgcmVwb3J0ZWQgYXMgaWYgaXQncyB0cmFuc2xhdGUoMCwgOHB4KS5cbiAgICB0ZW1wID0gc3R5bGUuZGlzcGxheTtcbiAgICBzdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlO1xuXG4gICAgaWYgKCFwYXJlbnQgfHwgIXRhcmdldC5vZmZzZXRQYXJlbnQpIHtcbiAgICAgIC8vIG5vdGU6IGluIDMuMy4wIHdlIHN3aXRjaGVkIHRhcmdldC5vZmZzZXRQYXJlbnQgdG8gX2RvYy5ib2R5LmNvbnRhaW5zKHRhcmdldCkgdG8gYXZvaWQgW3NvbWV0aW1lcyB1bm5lY2Vzc2FyeV0gTXV0YXRpb25PYnNlcnZlciBjYWxscyBidXQgdGhhdCB3YXNuJ3QgYWRlcXVhdGUgYmVjYXVzZSB0aGVyZSBhcmUgZWRnZSBjYXNlcyB3aGVyZSBuZXN0ZWQgcG9zaXRpb246IGZpeGVkIGVsZW1lbnRzIG5lZWQgdG8gZ2V0IHJlcGFyZW50ZWQgdG8gYWNjdXJhdGVseSBzZW5zZSB0cmFuc2Zvcm1zLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2dyZWVuc29jay9HU0FQL2lzc3Vlcy8zODggYW5kIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmVlbnNvY2svR1NBUC9pc3N1ZXMvMzc1XG4gICAgICBhZGRlZFRvRE9NID0gMTsgLy9mbGFnXG5cbiAgICAgIG5leHRTaWJsaW5nID0gdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZztcblxuICAgICAgX2RvY0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFyZ2V0KTsgLy93ZSBtdXN0IGFkZCBpdCB0byB0aGUgRE9NIGluIG9yZGVyIHRvIGdldCB2YWx1ZXMgcHJvcGVybHlcblxuICAgIH1cblxuICAgIG1hdHJpeCA9IF9nZXRDb21wdXRlZFRyYW5zZm9ybU1hdHJpeEFzQXJyYXkodGFyZ2V0KTtcbiAgICB0ZW1wID8gc3R5bGUuZGlzcGxheSA9IHRlbXAgOiBfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBcImRpc3BsYXlcIik7XG5cbiAgICBpZiAoYWRkZWRUb0RPTSkge1xuICAgICAgbmV4dFNpYmxpbmcgPyBwYXJlbnQuaW5zZXJ0QmVmb3JlKHRhcmdldCwgbmV4dFNpYmxpbmcpIDogcGFyZW50ID8gcGFyZW50LmFwcGVuZENoaWxkKHRhcmdldCkgOiBfZG9jRWxlbWVudC5yZW1vdmVDaGlsZCh0YXJnZXQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JjZTJEICYmIG1hdHJpeC5sZW5ndGggPiA2ID8gW21hdHJpeFswXSwgbWF0cml4WzFdLCBtYXRyaXhbNF0sIG1hdHJpeFs1XSwgbWF0cml4WzEyXSwgbWF0cml4WzEzXV0gOiBtYXRyaXg7XG59LFxuICAgIF9hcHBseVNWR09yaWdpbiA9IGZ1bmN0aW9uIF9hcHBseVNWR09yaWdpbih0YXJnZXQsIG9yaWdpbiwgb3JpZ2luSXNBYnNvbHV0ZSwgc21vb3RoLCBtYXRyaXhBcnJheSwgcGx1Z2luVG9BZGRQcm9wVHdlZW5zVG8pIHtcbiAgdmFyIGNhY2hlID0gdGFyZ2V0Ll9nc2FwLFxuICAgICAgbWF0cml4ID0gbWF0cml4QXJyYXkgfHwgX2dldE1hdHJpeCh0YXJnZXQsIHRydWUpLFxuICAgICAgeE9yaWdpbk9sZCA9IGNhY2hlLnhPcmlnaW4gfHwgMCxcbiAgICAgIHlPcmlnaW5PbGQgPSBjYWNoZS55T3JpZ2luIHx8IDAsXG4gICAgICB4T2Zmc2V0T2xkID0gY2FjaGUueE9mZnNldCB8fCAwLFxuICAgICAgeU9mZnNldE9sZCA9IGNhY2hlLnlPZmZzZXQgfHwgMCxcbiAgICAgIGEgPSBtYXRyaXhbMF0sXG4gICAgICBiID0gbWF0cml4WzFdLFxuICAgICAgYyA9IG1hdHJpeFsyXSxcbiAgICAgIGQgPSBtYXRyaXhbM10sXG4gICAgICB0eCA9IG1hdHJpeFs0XSxcbiAgICAgIHR5ID0gbWF0cml4WzVdLFxuICAgICAgb3JpZ2luU3BsaXQgPSBvcmlnaW4uc3BsaXQoXCIgXCIpLFxuICAgICAgeE9yaWdpbiA9IHBhcnNlRmxvYXQob3JpZ2luU3BsaXRbMF0pIHx8IDAsXG4gICAgICB5T3JpZ2luID0gcGFyc2VGbG9hdChvcmlnaW5TcGxpdFsxXSkgfHwgMCxcbiAgICAgIGJvdW5kcyxcbiAgICAgIGRldGVybWluYW50LFxuICAgICAgeCxcbiAgICAgIHk7XG5cbiAgaWYgKCFvcmlnaW5Jc0Fic29sdXRlKSB7XG4gICAgYm91bmRzID0gX2dldEJCb3godGFyZ2V0KTtcbiAgICB4T3JpZ2luID0gYm91bmRzLnggKyAofm9yaWdpblNwbGl0WzBdLmluZGV4T2YoXCIlXCIpID8geE9yaWdpbiAvIDEwMCAqIGJvdW5kcy53aWR0aCA6IHhPcmlnaW4pO1xuICAgIHlPcmlnaW4gPSBib3VuZHMueSArICh+KG9yaWdpblNwbGl0WzFdIHx8IG9yaWdpblNwbGl0WzBdKS5pbmRleE9mKFwiJVwiKSA/IHlPcmlnaW4gLyAxMDAgKiBib3VuZHMuaGVpZ2h0IDogeU9yaWdpbik7XG4gIH0gZWxzZSBpZiAobWF0cml4ICE9PSBfaWRlbnRpdHkyRE1hdHJpeCAmJiAoZGV0ZXJtaW5hbnQgPSBhICogZCAtIGIgKiBjKSkge1xuICAgIC8vaWYgaXQncyB6ZXJvIChsaWtlIGlmIHNjYWxlWCBhbmQgc2NhbGVZIGFyZSB6ZXJvKSwgc2tpcCBpdCB0byBhdm9pZCBlcnJvcnMgd2l0aCBkaXZpZGluZyBieSB6ZXJvLlxuICAgIHggPSB4T3JpZ2luICogKGQgLyBkZXRlcm1pbmFudCkgKyB5T3JpZ2luICogKC1jIC8gZGV0ZXJtaW5hbnQpICsgKGMgKiB0eSAtIGQgKiB0eCkgLyBkZXRlcm1pbmFudDtcbiAgICB5ID0geE9yaWdpbiAqICgtYiAvIGRldGVybWluYW50KSArIHlPcmlnaW4gKiAoYSAvIGRldGVybWluYW50KSAtIChhICogdHkgLSBiICogdHgpIC8gZGV0ZXJtaW5hbnQ7XG4gICAgeE9yaWdpbiA9IHg7XG4gICAgeU9yaWdpbiA9IHk7XG4gIH1cblxuICBpZiAoc21vb3RoIHx8IHNtb290aCAhPT0gZmFsc2UgJiYgY2FjaGUuc21vb3RoKSB7XG4gICAgdHggPSB4T3JpZ2luIC0geE9yaWdpbk9sZDtcbiAgICB0eSA9IHlPcmlnaW4gLSB5T3JpZ2luT2xkO1xuICAgIGNhY2hlLnhPZmZzZXQgPSB4T2Zmc2V0T2xkICsgKHR4ICogYSArIHR5ICogYykgLSB0eDtcbiAgICBjYWNoZS55T2Zmc2V0ID0geU9mZnNldE9sZCArICh0eCAqIGIgKyB0eSAqIGQpIC0gdHk7XG4gIH0gZWxzZSB7XG4gICAgY2FjaGUueE9mZnNldCA9IGNhY2hlLnlPZmZzZXQgPSAwO1xuICB9XG5cbiAgY2FjaGUueE9yaWdpbiA9IHhPcmlnaW47XG4gIGNhY2hlLnlPcmlnaW4gPSB5T3JpZ2luO1xuICBjYWNoZS5zbW9vdGggPSAhIXNtb290aDtcbiAgY2FjaGUub3JpZ2luID0gb3JpZ2luO1xuICBjYWNoZS5vcmlnaW5Jc0Fic29sdXRlID0gISFvcmlnaW5Jc0Fic29sdXRlO1xuICB0YXJnZXQuc3R5bGVbX3RyYW5zZm9ybU9yaWdpblByb3BdID0gXCIwcHggMHB4XCI7IC8vb3RoZXJ3aXNlLCBpZiBzb21lb25lIHNldHMgIGFuIG9yaWdpbiB2aWEgQ1NTLCBpdCB3aWxsIGxpa2VseSBpbnRlcmZlcmUgd2l0aCB0aGUgU1ZHIHRyYW5zZm9ybSBhdHRyaWJ1dGUgb25lcyAoYmVjYXVzZSByZW1lbWJlciwgd2UncmUgYmFraW5nIHRoZSBvcmlnaW4gaW50byB0aGUgbWF0cml4KCkgdmFsdWUpLlxuXG4gIGlmIChwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbykge1xuICAgIF9hZGROb25Ud2VlbmluZ1BUKHBsdWdpblRvQWRkUHJvcFR3ZWVuc1RvLCBjYWNoZSwgXCJ4T3JpZ2luXCIsIHhPcmlnaW5PbGQsIHhPcmlnaW4pO1xuXG4gICAgX2FkZE5vblR3ZWVuaW5nUFQocGx1Z2luVG9BZGRQcm9wVHdlZW5zVG8sIGNhY2hlLCBcInlPcmlnaW5cIiwgeU9yaWdpbk9sZCwgeU9yaWdpbik7XG5cbiAgICBfYWRkTm9uVHdlZW5pbmdQVChwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbywgY2FjaGUsIFwieE9mZnNldFwiLCB4T2Zmc2V0T2xkLCBjYWNoZS54T2Zmc2V0KTtcblxuICAgIF9hZGROb25Ud2VlbmluZ1BUKHBsdWdpblRvQWRkUHJvcFR3ZWVuc1RvLCBjYWNoZSwgXCJ5T2Zmc2V0XCIsIHlPZmZzZXRPbGQsIGNhY2hlLnlPZmZzZXQpO1xuICB9XG5cbiAgdGFyZ2V0LnNldEF0dHJpYnV0ZShcImRhdGEtc3ZnLW9yaWdpblwiLCB4T3JpZ2luICsgXCIgXCIgKyB5T3JpZ2luKTtcbn0sXG4gICAgX3BhcnNlVHJhbnNmb3JtID0gZnVuY3Rpb24gX3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgdW5jYWNoZSkge1xuICB2YXIgY2FjaGUgPSB0YXJnZXQuX2dzYXAgfHwgbmV3IEdTQ2FjaGUodGFyZ2V0KTtcblxuICBpZiAoXCJ4XCIgaW4gY2FjaGUgJiYgIXVuY2FjaGUgJiYgIWNhY2hlLnVuY2FjaGUpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH1cblxuICB2YXIgc3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gICAgICBpbnZlcnRlZFNjYWxlWCA9IGNhY2hlLnNjYWxlWCA8IDAsXG4gICAgICBweCA9IFwicHhcIixcbiAgICAgIGRlZyA9IFwiZGVnXCIsXG4gICAgICBjcyA9IGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KSxcbiAgICAgIG9yaWdpbiA9IF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybU9yaWdpblByb3ApIHx8IFwiMFwiLFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICB6LFxuICAgICAgc2NhbGVYLFxuICAgICAgc2NhbGVZLFxuICAgICAgcm90YXRpb24sXG4gICAgICByb3RhdGlvblgsXG4gICAgICByb3RhdGlvblksXG4gICAgICBza2V3WCxcbiAgICAgIHNrZXdZLFxuICAgICAgcGVyc3BlY3RpdmUsXG4gICAgICB4T3JpZ2luLFxuICAgICAgeU9yaWdpbixcbiAgICAgIG1hdHJpeCxcbiAgICAgIGFuZ2xlLFxuICAgICAgY29zLFxuICAgICAgc2luLFxuICAgICAgYSxcbiAgICAgIGIsXG4gICAgICBjLFxuICAgICAgZCxcbiAgICAgIGExMixcbiAgICAgIGEyMixcbiAgICAgIHQxLFxuICAgICAgdDIsXG4gICAgICB0MyxcbiAgICAgIGExMyxcbiAgICAgIGEyMyxcbiAgICAgIGEzMyxcbiAgICAgIGE0MixcbiAgICAgIGE0MyxcbiAgICAgIGEzMjtcbiAgeCA9IHkgPSB6ID0gcm90YXRpb24gPSByb3RhdGlvblggPSByb3RhdGlvblkgPSBza2V3WCA9IHNrZXdZID0gcGVyc3BlY3RpdmUgPSAwO1xuICBzY2FsZVggPSBzY2FsZVkgPSAxO1xuICBjYWNoZS5zdmcgPSAhISh0YXJnZXQuZ2V0Q1RNICYmIF9pc1NWRyh0YXJnZXQpKTtcblxuICBpZiAoY3MudHJhbnNsYXRlKSB7XG4gICAgLy8gYWNjb21tb2RhdGUgaW5kZXBlbmRlbnQgdHJhbnNmb3JtcyBieSBjb21iaW5pbmcgdGhlbSBpbnRvIG5vcm1hbCBvbmVzLlxuICAgIGlmIChjcy50cmFuc2xhdGUgIT09IFwibm9uZVwiIHx8IGNzLnNjYWxlICE9PSBcIm5vbmVcIiB8fCBjcy5yb3RhdGUgIT09IFwibm9uZVwiKSB7XG4gICAgICBzdHlsZVtfdHJhbnNmb3JtUHJvcF0gPSAoY3MudHJhbnNsYXRlICE9PSBcIm5vbmVcIiA/IFwidHJhbnNsYXRlM2QoXCIgKyAoY3MudHJhbnNsYXRlICsgXCIgMCAwXCIpLnNwbGl0KFwiIFwiKS5zbGljZSgwLCAzKS5qb2luKFwiLCBcIikgKyBcIikgXCIgOiBcIlwiKSArIChjcy5yb3RhdGUgIT09IFwibm9uZVwiID8gXCJyb3RhdGUoXCIgKyBjcy5yb3RhdGUgKyBcIikgXCIgOiBcIlwiKSArIChjcy5zY2FsZSAhPT0gXCJub25lXCIgPyBcInNjYWxlKFwiICsgY3Muc2NhbGUuc3BsaXQoXCIgXCIpLmpvaW4oXCIsXCIpICsgXCIpIFwiIDogXCJcIikgKyAoY3NbX3RyYW5zZm9ybVByb3BdICE9PSBcIm5vbmVcIiA/IGNzW190cmFuc2Zvcm1Qcm9wXSA6IFwiXCIpO1xuICAgIH1cblxuICAgIHN0eWxlLnNjYWxlID0gc3R5bGUucm90YXRlID0gc3R5bGUudHJhbnNsYXRlID0gXCJub25lXCI7XG4gIH1cblxuICBtYXRyaXggPSBfZ2V0TWF0cml4KHRhcmdldCwgY2FjaGUuc3ZnKTtcblxuICBpZiAoY2FjaGUuc3ZnKSB7XG4gICAgaWYgKGNhY2hlLnVuY2FjaGUpIHtcbiAgICAgIC8vIGlmIGNhY2hlLnVuY2FjaGUgaXMgdHJ1ZSAoYW5kIG1heWJlIGlmIG9yaWdpbiBpcyAwLDApLCB3ZSBuZWVkIHRvIHNldCBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IChjYWNoZS54T3JpZ2luIC0gYmJveC54KSArIFwicHggXCIgKyAoY2FjaGUueU9yaWdpbiAtIGJib3gueSkgKyBcInB4XCIuIFByZXZpb3VzbHkgd2UgbGV0IHRoZSBkYXRhLXN2Zy1vcmlnaW4gc3RheSBpbnN0ZWFkLCBidXQgd2hlbiBpbnRyb2R1Y2luZyByZXZlcnQoKSwgaXQgY29tcGxpY2F0ZWQgdGhpbmdzLlxuICAgICAgdDIgPSB0YXJnZXQuZ2V0QkJveCgpO1xuICAgICAgb3JpZ2luID0gY2FjaGUueE9yaWdpbiAtIHQyLnggKyBcInB4IFwiICsgKGNhY2hlLnlPcmlnaW4gLSB0Mi55KSArIFwicHhcIjtcbiAgICAgIHQxID0gXCJcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdDEgPSAhdW5jYWNoZSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdmctb3JpZ2luXCIpOyAvLyAgUmVtZW1iZXIsIHRvIHdvcmsgYXJvdW5kIGJyb3dzZXIgaW5jb25zaXN0ZW5jaWVzIHdlIGFsd2F5cyBmb3JjZSBTVkcgZWxlbWVudHMnIHRyYW5zZm9ybU9yaWdpbiB0byAwLDAgYW5kIG9mZnNldCB0aGUgdHJhbnNsYXRpb24gYWNjb3JkaW5nbHkuXG4gICAgfVxuXG4gICAgX2FwcGx5U1ZHT3JpZ2luKHRhcmdldCwgdDEgfHwgb3JpZ2luLCAhIXQxIHx8IGNhY2hlLm9yaWdpbklzQWJzb2x1dGUsIGNhY2hlLnNtb290aCAhPT0gZmFsc2UsIG1hdHJpeCk7XG4gIH1cblxuICB4T3JpZ2luID0gY2FjaGUueE9yaWdpbiB8fCAwO1xuICB5T3JpZ2luID0gY2FjaGUueU9yaWdpbiB8fCAwO1xuXG4gIGlmIChtYXRyaXggIT09IF9pZGVudGl0eTJETWF0cml4KSB7XG4gICAgYSA9IG1hdHJpeFswXTsgLy9hMTFcblxuICAgIGIgPSBtYXRyaXhbMV07IC8vYTIxXG5cbiAgICBjID0gbWF0cml4WzJdOyAvL2EzMVxuXG4gICAgZCA9IG1hdHJpeFszXTsgLy9hNDFcblxuICAgIHggPSBhMTIgPSBtYXRyaXhbNF07XG4gICAgeSA9IGEyMiA9IG1hdHJpeFs1XTsgLy8yRCBtYXRyaXhcblxuICAgIGlmIChtYXRyaXgubGVuZ3RoID09PSA2KSB7XG4gICAgICBzY2FsZVggPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG4gICAgICBzY2FsZVkgPSBNYXRoLnNxcnQoZCAqIGQgKyBjICogYyk7XG4gICAgICByb3RhdGlvbiA9IGEgfHwgYiA/IF9hdGFuMihiLCBhKSAqIF9SQUQyREVHIDogMDsgLy9ub3RlOiBpZiBzY2FsZVggaXMgMCwgd2UgY2Fubm90IGFjY3VyYXRlbHkgbWVhc3VyZSByb3RhdGlvbi4gU2FtZSBmb3Igc2tld1ggd2l0aCBhIHNjYWxlWSBvZiAwLiBUaGVyZWZvcmUsIHdlIGRlZmF1bHQgdG8gdGhlIHByZXZpb3VzbHkgcmVjb3JkZWQgdmFsdWUgKG9yIHplcm8gaWYgdGhhdCBkb2Vzbid0IGV4aXN0KS5cblxuICAgICAgc2tld1ggPSBjIHx8IGQgPyBfYXRhbjIoYywgZCkgKiBfUkFEMkRFRyArIHJvdGF0aW9uIDogMDtcbiAgICAgIHNrZXdYICYmIChzY2FsZVkgKj0gTWF0aC5hYnMoTWF0aC5jb3Moc2tld1ggKiBfREVHMlJBRCkpKTtcblxuICAgICAgaWYgKGNhY2hlLnN2Zykge1xuICAgICAgICB4IC09IHhPcmlnaW4gLSAoeE9yaWdpbiAqIGEgKyB5T3JpZ2luICogYyk7XG4gICAgICAgIHkgLT0geU9yaWdpbiAtICh4T3JpZ2luICogYiArIHlPcmlnaW4gKiBkKTtcbiAgICAgIH0gLy8zRCBtYXRyaXhcblxuICAgIH0gZWxzZSB7XG4gICAgICBhMzIgPSBtYXRyaXhbNl07XG4gICAgICBhNDIgPSBtYXRyaXhbN107XG4gICAgICBhMTMgPSBtYXRyaXhbOF07XG4gICAgICBhMjMgPSBtYXRyaXhbOV07XG4gICAgICBhMzMgPSBtYXRyaXhbMTBdO1xuICAgICAgYTQzID0gbWF0cml4WzExXTtcbiAgICAgIHggPSBtYXRyaXhbMTJdO1xuICAgICAgeSA9IG1hdHJpeFsxM107XG4gICAgICB6ID0gbWF0cml4WzE0XTtcbiAgICAgIGFuZ2xlID0gX2F0YW4yKGEzMiwgYTMzKTtcbiAgICAgIHJvdGF0aW9uWCA9IGFuZ2xlICogX1JBRDJERUc7IC8vcm90YXRpb25YXG5cbiAgICAgIGlmIChhbmdsZSkge1xuICAgICAgICBjb3MgPSBNYXRoLmNvcygtYW5nbGUpO1xuICAgICAgICBzaW4gPSBNYXRoLnNpbigtYW5nbGUpO1xuICAgICAgICB0MSA9IGExMiAqIGNvcyArIGExMyAqIHNpbjtcbiAgICAgICAgdDIgPSBhMjIgKiBjb3MgKyBhMjMgKiBzaW47XG4gICAgICAgIHQzID0gYTMyICogY29zICsgYTMzICogc2luO1xuICAgICAgICBhMTMgPSBhMTIgKiAtc2luICsgYTEzICogY29zO1xuICAgICAgICBhMjMgPSBhMjIgKiAtc2luICsgYTIzICogY29zO1xuICAgICAgICBhMzMgPSBhMzIgKiAtc2luICsgYTMzICogY29zO1xuICAgICAgICBhNDMgPSBhNDIgKiAtc2luICsgYTQzICogY29zO1xuICAgICAgICBhMTIgPSB0MTtcbiAgICAgICAgYTIyID0gdDI7XG4gICAgICAgIGEzMiA9IHQzO1xuICAgICAgfSAvL3JvdGF0aW9uWVxuXG5cbiAgICAgIGFuZ2xlID0gX2F0YW4yKC1jLCBhMzMpO1xuICAgICAgcm90YXRpb25ZID0gYW5nbGUgKiBfUkFEMkRFRztcblxuICAgICAgaWYgKGFuZ2xlKSB7XG4gICAgICAgIGNvcyA9IE1hdGguY29zKC1hbmdsZSk7XG4gICAgICAgIHNpbiA9IE1hdGguc2luKC1hbmdsZSk7XG4gICAgICAgIHQxID0gYSAqIGNvcyAtIGExMyAqIHNpbjtcbiAgICAgICAgdDIgPSBiICogY29zIC0gYTIzICogc2luO1xuICAgICAgICB0MyA9IGMgKiBjb3MgLSBhMzMgKiBzaW47XG4gICAgICAgIGE0MyA9IGQgKiBzaW4gKyBhNDMgKiBjb3M7XG4gICAgICAgIGEgPSB0MTtcbiAgICAgICAgYiA9IHQyO1xuICAgICAgICBjID0gdDM7XG4gICAgICB9IC8vcm90YXRpb25aXG5cblxuICAgICAgYW5nbGUgPSBfYXRhbjIoYiwgYSk7XG4gICAgICByb3RhdGlvbiA9IGFuZ2xlICogX1JBRDJERUc7XG5cbiAgICAgIGlmIChhbmdsZSkge1xuICAgICAgICBjb3MgPSBNYXRoLmNvcyhhbmdsZSk7XG4gICAgICAgIHNpbiA9IE1hdGguc2luKGFuZ2xlKTtcbiAgICAgICAgdDEgPSBhICogY29zICsgYiAqIHNpbjtcbiAgICAgICAgdDIgPSBhMTIgKiBjb3MgKyBhMjIgKiBzaW47XG4gICAgICAgIGIgPSBiICogY29zIC0gYSAqIHNpbjtcbiAgICAgICAgYTIyID0gYTIyICogY29zIC0gYTEyICogc2luO1xuICAgICAgICBhID0gdDE7XG4gICAgICAgIGExMiA9IHQyO1xuICAgICAgfVxuXG4gICAgICBpZiAocm90YXRpb25YICYmIE1hdGguYWJzKHJvdGF0aW9uWCkgKyBNYXRoLmFicyhyb3RhdGlvbikgPiAzNTkuOSkge1xuICAgICAgICAvL3doZW4gcm90YXRpb25ZIGlzIHNldCwgaXQgd2lsbCBvZnRlbiBiZSBwYXJzZWQgYXMgMTgwIGRlZ3JlZXMgZGlmZmVyZW50IHRoYW4gaXQgc2hvdWxkIGJlLCBhbmQgcm90YXRpb25YIGFuZCByb3RhdGlvbiBib3RoIGJlaW5nIDE4MCAoaXQgbG9va3MgdGhlIHNhbWUpLCBzbyB3ZSBhZGp1c3QgZm9yIHRoYXQgaGVyZS5cbiAgICAgICAgcm90YXRpb25YID0gcm90YXRpb24gPSAwO1xuICAgICAgICByb3RhdGlvblkgPSAxODAgLSByb3RhdGlvblk7XG4gICAgICB9XG5cbiAgICAgIHNjYWxlWCA9IF9yb3VuZChNYXRoLnNxcnQoYSAqIGEgKyBiICogYiArIGMgKiBjKSk7XG4gICAgICBzY2FsZVkgPSBfcm91bmQoTWF0aC5zcXJ0KGEyMiAqIGEyMiArIGEzMiAqIGEzMikpO1xuICAgICAgYW5nbGUgPSBfYXRhbjIoYTEyLCBhMjIpO1xuICAgICAgc2tld1ggPSBNYXRoLmFicyhhbmdsZSkgPiAwLjAwMDIgPyBhbmdsZSAqIF9SQUQyREVHIDogMDtcbiAgICAgIHBlcnNwZWN0aXZlID0gYTQzID8gMSAvIChhNDMgPCAwID8gLWE0MyA6IGE0MykgOiAwO1xuICAgIH1cblxuICAgIGlmIChjYWNoZS5zdmcpIHtcbiAgICAgIC8vc2Vuc2UgaWYgdGhlcmUgYXJlIENTUyB0cmFuc2Zvcm1zIGFwcGxpZWQgb24gYW4gU1ZHIGVsZW1lbnQgaW4gd2hpY2ggY2FzZSB3ZSBtdXN0IG92ZXJ3cml0ZSB0aGVtIHdoZW4gcmVuZGVyaW5nLiBUaGUgdHJhbnNmb3JtIGF0dHJpYnV0ZSBpcyBtb3JlIHJlbGlhYmxlIGNyb3NzLWJyb3dzZXIsIGJ1dCB3ZSBjYW4ndCBqdXN0IHJlbW92ZSB0aGUgQ1NTIG9uZXMgYmVjYXVzZSB0aGV5IG1heSBiZSBhcHBsaWVkIGluIGEgQ1NTIHJ1bGUgc29tZXdoZXJlIChub3QganVzdCBpbmxpbmUpLlxuICAgICAgdDEgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpO1xuICAgICAgY2FjaGUuZm9yY2VDU1MgPSB0YXJnZXQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwiXCIpIHx8ICFfaXNOdWxsVHJhbnNmb3JtKF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybVByb3ApKTtcbiAgICAgIHQxICYmIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgdDEpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChNYXRoLmFicyhza2V3WCkgPiA5MCAmJiBNYXRoLmFicyhza2V3WCkgPCAyNzApIHtcbiAgICBpZiAoaW52ZXJ0ZWRTY2FsZVgpIHtcbiAgICAgIHNjYWxlWCAqPSAtMTtcbiAgICAgIHNrZXdYICs9IHJvdGF0aW9uIDw9IDAgPyAxODAgOiAtMTgwO1xuICAgICAgcm90YXRpb24gKz0gcm90YXRpb24gPD0gMCA/IDE4MCA6IC0xODA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjYWxlWSAqPSAtMTtcbiAgICAgIHNrZXdYICs9IHNrZXdYIDw9IDAgPyAxODAgOiAtMTgwO1xuICAgIH1cbiAgfVxuXG4gIHVuY2FjaGUgPSB1bmNhY2hlIHx8IGNhY2hlLnVuY2FjaGU7XG4gIGNhY2hlLnggPSB4IC0gKChjYWNoZS54UGVyY2VudCA9IHggJiYgKCF1bmNhY2hlICYmIGNhY2hlLnhQZXJjZW50IHx8IChNYXRoLnJvdW5kKHRhcmdldC5vZmZzZXRXaWR0aCAvIDIpID09PSBNYXRoLnJvdW5kKC14KSA/IC01MCA6IDApKSkgPyB0YXJnZXQub2Zmc2V0V2lkdGggKiBjYWNoZS54UGVyY2VudCAvIDEwMCA6IDApICsgcHg7XG4gIGNhY2hlLnkgPSB5IC0gKChjYWNoZS55UGVyY2VudCA9IHkgJiYgKCF1bmNhY2hlICYmIGNhY2hlLnlQZXJjZW50IHx8IChNYXRoLnJvdW5kKHRhcmdldC5vZmZzZXRIZWlnaHQgLyAyKSA9PT0gTWF0aC5yb3VuZCgteSkgPyAtNTAgOiAwKSkpID8gdGFyZ2V0Lm9mZnNldEhlaWdodCAqIGNhY2hlLnlQZXJjZW50IC8gMTAwIDogMCkgKyBweDtcbiAgY2FjaGUueiA9IHogKyBweDtcbiAgY2FjaGUuc2NhbGVYID0gX3JvdW5kKHNjYWxlWCk7XG4gIGNhY2hlLnNjYWxlWSA9IF9yb3VuZChzY2FsZVkpO1xuICBjYWNoZS5yb3RhdGlvbiA9IF9yb3VuZChyb3RhdGlvbikgKyBkZWc7XG4gIGNhY2hlLnJvdGF0aW9uWCA9IF9yb3VuZChyb3RhdGlvblgpICsgZGVnO1xuICBjYWNoZS5yb3RhdGlvblkgPSBfcm91bmQocm90YXRpb25ZKSArIGRlZztcbiAgY2FjaGUuc2tld1ggPSBza2V3WCArIGRlZztcbiAgY2FjaGUuc2tld1kgPSBza2V3WSArIGRlZztcbiAgY2FjaGUudHJhbnNmb3JtUGVyc3BlY3RpdmUgPSBwZXJzcGVjdGl2ZSArIHB4O1xuXG4gIGlmIChjYWNoZS56T3JpZ2luID0gcGFyc2VGbG9hdChvcmlnaW4uc3BsaXQoXCIgXCIpWzJdKSB8fCAwKSB7XG4gICAgc3R5bGVbX3RyYW5zZm9ybU9yaWdpblByb3BdID0gX2ZpcnN0VHdvT25seShvcmlnaW4pO1xuICB9XG5cbiAgY2FjaGUueE9mZnNldCA9IGNhY2hlLnlPZmZzZXQgPSAwO1xuICBjYWNoZS5mb3JjZTNEID0gX2NvbmZpZy5mb3JjZTNEO1xuICBjYWNoZS5yZW5kZXJUcmFuc2Zvcm0gPSBjYWNoZS5zdmcgPyBfcmVuZGVyU1ZHVHJhbnNmb3JtcyA6IF9zdXBwb3J0czNEID8gX3JlbmRlckNTU1RyYW5zZm9ybXMgOiBfcmVuZGVyTm9uM0RUcmFuc2Zvcm1zO1xuICBjYWNoZS51bmNhY2hlID0gMDtcbiAgcmV0dXJuIGNhY2hlO1xufSxcbiAgICBfZmlyc3RUd29Pbmx5ID0gZnVuY3Rpb24gX2ZpcnN0VHdvT25seSh2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlID0gdmFsdWUuc3BsaXQoXCIgXCIpKVswXSArIFwiIFwiICsgdmFsdWVbMV07XG59LFxuICAgIC8vZm9yIGhhbmRsaW5nIHRyYW5zZm9ybU9yaWdpbiB2YWx1ZXMsIHN0cmlwcGluZyBvdXQgdGhlIDNyZCBkaW1lbnNpb25cbl9hZGRQeFRyYW5zbGF0ZSA9IGZ1bmN0aW9uIF9hZGRQeFRyYW5zbGF0ZSh0YXJnZXQsIHN0YXJ0LCB2YWx1ZSkge1xuICB2YXIgdW5pdCA9IGdldFVuaXQoc3RhcnQpO1xuICByZXR1cm4gX3JvdW5kKHBhcnNlRmxvYXQoc3RhcnQpICsgcGFyc2VGbG9hdChfY29udmVydFRvVW5pdCh0YXJnZXQsIFwieFwiLCB2YWx1ZSArIFwicHhcIiwgdW5pdCkpKSArIHVuaXQ7XG59LFxuICAgIF9yZW5kZXJOb24zRFRyYW5zZm9ybXMgPSBmdW5jdGlvbiBfcmVuZGVyTm9uM0RUcmFuc2Zvcm1zKHJhdGlvLCBjYWNoZSkge1xuICBjYWNoZS56ID0gXCIwcHhcIjtcbiAgY2FjaGUucm90YXRpb25ZID0gY2FjaGUucm90YXRpb25YID0gXCIwZGVnXCI7XG4gIGNhY2hlLmZvcmNlM0QgPSAwO1xuXG4gIF9yZW5kZXJDU1NUcmFuc2Zvcm1zKHJhdGlvLCBjYWNoZSk7XG59LFxuICAgIF96ZXJvRGVnID0gXCIwZGVnXCIsXG4gICAgX3plcm9QeCA9IFwiMHB4XCIsXG4gICAgX2VuZFBhcmVudGhlc2lzID0gXCIpIFwiLFxuICAgIF9yZW5kZXJDU1NUcmFuc2Zvcm1zID0gZnVuY3Rpb24gX3JlbmRlckNTU1RyYW5zZm9ybXMocmF0aW8sIGNhY2hlKSB7XG4gIHZhciBfcmVmID0gY2FjaGUgfHwgdGhpcyxcbiAgICAgIHhQZXJjZW50ID0gX3JlZi54UGVyY2VudCxcbiAgICAgIHlQZXJjZW50ID0gX3JlZi55UGVyY2VudCxcbiAgICAgIHggPSBfcmVmLngsXG4gICAgICB5ID0gX3JlZi55LFxuICAgICAgeiA9IF9yZWYueixcbiAgICAgIHJvdGF0aW9uID0gX3JlZi5yb3RhdGlvbixcbiAgICAgIHJvdGF0aW9uWSA9IF9yZWYucm90YXRpb25ZLFxuICAgICAgcm90YXRpb25YID0gX3JlZi5yb3RhdGlvblgsXG4gICAgICBza2V3WCA9IF9yZWYuc2tld1gsXG4gICAgICBza2V3WSA9IF9yZWYuc2tld1ksXG4gICAgICBzY2FsZVggPSBfcmVmLnNjYWxlWCxcbiAgICAgIHNjYWxlWSA9IF9yZWYuc2NhbGVZLFxuICAgICAgdHJhbnNmb3JtUGVyc3BlY3RpdmUgPSBfcmVmLnRyYW5zZm9ybVBlcnNwZWN0aXZlLFxuICAgICAgZm9yY2UzRCA9IF9yZWYuZm9yY2UzRCxcbiAgICAgIHRhcmdldCA9IF9yZWYudGFyZ2V0LFxuICAgICAgek9yaWdpbiA9IF9yZWYuek9yaWdpbixcbiAgICAgIHRyYW5zZm9ybXMgPSBcIlwiLFxuICAgICAgdXNlM0QgPSBmb3JjZTNEID09PSBcImF1dG9cIiAmJiByYXRpbyAmJiByYXRpbyAhPT0gMSB8fCBmb3JjZTNEID09PSB0cnVlOyAvLyBTYWZhcmkgaGFzIGEgYnVnIHRoYXQgY2F1c2VzIGl0IG5vdCB0byByZW5kZXIgM0QgdHJhbnNmb3JtLW9yaWdpbiB2YWx1ZXMgcHJvcGVybHksIHNvIHdlIGZvcmNlIHRoZSB6IG9yaWdpbiB0byAwLCByZWNvcmQgaXQgaW4gdGhlIGNhY2hlLCBhbmQgdGhlbiBkbyB0aGUgbWF0aCBoZXJlIHRvIG9mZnNldCB0aGUgdHJhbnNsYXRlIHZhbHVlcyBhY2NvcmRpbmdseSAoYmFzaWNhbGx5IGRvIHRoZSAzRCB0cmFuc2Zvcm0tb3JpZ2luIHBhcnQgbWFudWFsbHkpXG5cblxuICBpZiAoek9yaWdpbiAmJiAocm90YXRpb25YICE9PSBfemVyb0RlZyB8fCByb3RhdGlvblkgIT09IF96ZXJvRGVnKSkge1xuICAgIHZhciBhbmdsZSA9IHBhcnNlRmxvYXQocm90YXRpb25ZKSAqIF9ERUcyUkFELFxuICAgICAgICBhMTMgPSBNYXRoLnNpbihhbmdsZSksXG4gICAgICAgIGEzMyA9IE1hdGguY29zKGFuZ2xlKSxcbiAgICAgICAgY29zO1xuXG4gICAgYW5nbGUgPSBwYXJzZUZsb2F0KHJvdGF0aW9uWCkgKiBfREVHMlJBRDtcbiAgICBjb3MgPSBNYXRoLmNvcyhhbmdsZSk7XG4gICAgeCA9IF9hZGRQeFRyYW5zbGF0ZSh0YXJnZXQsIHgsIGExMyAqIGNvcyAqIC16T3JpZ2luKTtcbiAgICB5ID0gX2FkZFB4VHJhbnNsYXRlKHRhcmdldCwgeSwgLU1hdGguc2luKGFuZ2xlKSAqIC16T3JpZ2luKTtcbiAgICB6ID0gX2FkZFB4VHJhbnNsYXRlKHRhcmdldCwgeiwgYTMzICogY29zICogLXpPcmlnaW4gKyB6T3JpZ2luKTtcbiAgfVxuXG4gIGlmICh0cmFuc2Zvcm1QZXJzcGVjdGl2ZSAhPT0gX3plcm9QeCkge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJwZXJzcGVjdGl2ZShcIiArIHRyYW5zZm9ybVBlcnNwZWN0aXZlICsgX2VuZFBhcmVudGhlc2lzO1xuICB9XG5cbiAgaWYgKHhQZXJjZW50IHx8IHlQZXJjZW50KSB7XG4gICAgdHJhbnNmb3JtcyArPSBcInRyYW5zbGF0ZShcIiArIHhQZXJjZW50ICsgXCIlLCBcIiArIHlQZXJjZW50ICsgXCIlKSBcIjtcbiAgfVxuXG4gIGlmICh1c2UzRCB8fCB4ICE9PSBfemVyb1B4IHx8IHkgIT09IF96ZXJvUHggfHwgeiAhPT0gX3plcm9QeCkge1xuICAgIHRyYW5zZm9ybXMgKz0geiAhPT0gX3plcm9QeCB8fCB1c2UzRCA/IFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCIsIFwiICsgeSArIFwiLCBcIiArIHogKyBcIikgXCIgOiBcInRyYW5zbGF0ZShcIiArIHggKyBcIiwgXCIgKyB5ICsgX2VuZFBhcmVudGhlc2lzO1xuICB9XG5cbiAgaWYgKHJvdGF0aW9uICE9PSBfemVyb0RlZykge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJyb3RhdGUoXCIgKyByb3RhdGlvbiArIF9lbmRQYXJlbnRoZXNpcztcbiAgfVxuXG4gIGlmIChyb3RhdGlvblkgIT09IF96ZXJvRGVnKSB7XG4gICAgdHJhbnNmb3JtcyArPSBcInJvdGF0ZVkoXCIgKyByb3RhdGlvblkgKyBfZW5kUGFyZW50aGVzaXM7XG4gIH1cblxuICBpZiAocm90YXRpb25YICE9PSBfemVyb0RlZykge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJyb3RhdGVYKFwiICsgcm90YXRpb25YICsgX2VuZFBhcmVudGhlc2lzO1xuICB9XG5cbiAgaWYgKHNrZXdYICE9PSBfemVyb0RlZyB8fCBza2V3WSAhPT0gX3plcm9EZWcpIHtcbiAgICB0cmFuc2Zvcm1zICs9IFwic2tldyhcIiArIHNrZXdYICsgXCIsIFwiICsgc2tld1kgKyBfZW5kUGFyZW50aGVzaXM7XG4gIH1cblxuICBpZiAoc2NhbGVYICE9PSAxIHx8IHNjYWxlWSAhPT0gMSkge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJzY2FsZShcIiArIHNjYWxlWCArIFwiLCBcIiArIHNjYWxlWSArIF9lbmRQYXJlbnRoZXNpcztcbiAgfVxuXG4gIHRhcmdldC5zdHlsZVtfdHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm1zIHx8IFwidHJhbnNsYXRlKDAsIDApXCI7XG59LFxuICAgIF9yZW5kZXJTVkdUcmFuc2Zvcm1zID0gZnVuY3Rpb24gX3JlbmRlclNWR1RyYW5zZm9ybXMocmF0aW8sIGNhY2hlKSB7XG4gIHZhciBfcmVmMiA9IGNhY2hlIHx8IHRoaXMsXG4gICAgICB4UGVyY2VudCA9IF9yZWYyLnhQZXJjZW50LFxuICAgICAgeVBlcmNlbnQgPSBfcmVmMi55UGVyY2VudCxcbiAgICAgIHggPSBfcmVmMi54LFxuICAgICAgeSA9IF9yZWYyLnksXG4gICAgICByb3RhdGlvbiA9IF9yZWYyLnJvdGF0aW9uLFxuICAgICAgc2tld1ggPSBfcmVmMi5za2V3WCxcbiAgICAgIHNrZXdZID0gX3JlZjIuc2tld1ksXG4gICAgICBzY2FsZVggPSBfcmVmMi5zY2FsZVgsXG4gICAgICBzY2FsZVkgPSBfcmVmMi5zY2FsZVksXG4gICAgICB0YXJnZXQgPSBfcmVmMi50YXJnZXQsXG4gICAgICB4T3JpZ2luID0gX3JlZjIueE9yaWdpbixcbiAgICAgIHlPcmlnaW4gPSBfcmVmMi55T3JpZ2luLFxuICAgICAgeE9mZnNldCA9IF9yZWYyLnhPZmZzZXQsXG4gICAgICB5T2Zmc2V0ID0gX3JlZjIueU9mZnNldCxcbiAgICAgIGZvcmNlQ1NTID0gX3JlZjIuZm9yY2VDU1MsXG4gICAgICB0eCA9IHBhcnNlRmxvYXQoeCksXG4gICAgICB0eSA9IHBhcnNlRmxvYXQoeSksXG4gICAgICBhMTEsXG4gICAgICBhMjEsXG4gICAgICBhMTIsXG4gICAgICBhMjIsXG4gICAgICB0ZW1wO1xuXG4gIHJvdGF0aW9uID0gcGFyc2VGbG9hdChyb3RhdGlvbik7XG4gIHNrZXdYID0gcGFyc2VGbG9hdChza2V3WCk7XG4gIHNrZXdZID0gcGFyc2VGbG9hdChza2V3WSk7XG5cbiAgaWYgKHNrZXdZKSB7XG4gICAgLy9mb3IgcGVyZm9ybWFuY2UgcmVhc29ucywgd2UgY29tYmluZSBhbGwgc2tld2luZyBpbnRvIHRoZSBza2V3WCBhbmQgcm90YXRpb24gdmFsdWVzLiBSZW1lbWJlciwgYSBza2V3WSBvZiAxMCBkZWdyZWVzIGxvb2tzIHRoZSBzYW1lIGFzIGEgcm90YXRpb24gb2YgMTAgZGVncmVlcyBwbHVzIGEgc2tld1ggb2YgMTAgZGVncmVlcy5cbiAgICBza2V3WSA9IHBhcnNlRmxvYXQoc2tld1kpO1xuICAgIHNrZXdYICs9IHNrZXdZO1xuICAgIHJvdGF0aW9uICs9IHNrZXdZO1xuICB9XG5cbiAgaWYgKHJvdGF0aW9uIHx8IHNrZXdYKSB7XG4gICAgcm90YXRpb24gKj0gX0RFRzJSQUQ7XG4gICAgc2tld1ggKj0gX0RFRzJSQUQ7XG4gICAgYTExID0gTWF0aC5jb3Mocm90YXRpb24pICogc2NhbGVYO1xuICAgIGEyMSA9IE1hdGguc2luKHJvdGF0aW9uKSAqIHNjYWxlWDtcbiAgICBhMTIgPSBNYXRoLnNpbihyb3RhdGlvbiAtIHNrZXdYKSAqIC1zY2FsZVk7XG4gICAgYTIyID0gTWF0aC5jb3Mocm90YXRpb24gLSBza2V3WCkgKiBzY2FsZVk7XG5cbiAgICBpZiAoc2tld1gpIHtcbiAgICAgIHNrZXdZICo9IF9ERUcyUkFEO1xuICAgICAgdGVtcCA9IE1hdGgudGFuKHNrZXdYIC0gc2tld1kpO1xuICAgICAgdGVtcCA9IE1hdGguc3FydCgxICsgdGVtcCAqIHRlbXApO1xuICAgICAgYTEyICo9IHRlbXA7XG4gICAgICBhMjIgKj0gdGVtcDtcblxuICAgICAgaWYgKHNrZXdZKSB7XG4gICAgICAgIHRlbXAgPSBNYXRoLnRhbihza2V3WSk7XG4gICAgICAgIHRlbXAgPSBNYXRoLnNxcnQoMSArIHRlbXAgKiB0ZW1wKTtcbiAgICAgICAgYTExICo9IHRlbXA7XG4gICAgICAgIGEyMSAqPSB0ZW1wO1xuICAgICAgfVxuICAgIH1cblxuICAgIGExMSA9IF9yb3VuZChhMTEpO1xuICAgIGEyMSA9IF9yb3VuZChhMjEpO1xuICAgIGExMiA9IF9yb3VuZChhMTIpO1xuICAgIGEyMiA9IF9yb3VuZChhMjIpO1xuICB9IGVsc2Uge1xuICAgIGExMSA9IHNjYWxlWDtcbiAgICBhMjIgPSBzY2FsZVk7XG4gICAgYTIxID0gYTEyID0gMDtcbiAgfVxuXG4gIGlmICh0eCAmJiAhfih4ICsgXCJcIikuaW5kZXhPZihcInB4XCIpIHx8IHR5ICYmICF+KHkgKyBcIlwiKS5pbmRleE9mKFwicHhcIikpIHtcbiAgICB0eCA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgXCJ4XCIsIHgsIFwicHhcIik7XG4gICAgdHkgPSBfY29udmVydFRvVW5pdCh0YXJnZXQsIFwieVwiLCB5LCBcInB4XCIpO1xuICB9XG5cbiAgaWYgKHhPcmlnaW4gfHwgeU9yaWdpbiB8fCB4T2Zmc2V0IHx8IHlPZmZzZXQpIHtcbiAgICB0eCA9IF9yb3VuZCh0eCArIHhPcmlnaW4gLSAoeE9yaWdpbiAqIGExMSArIHlPcmlnaW4gKiBhMTIpICsgeE9mZnNldCk7XG4gICAgdHkgPSBfcm91bmQodHkgKyB5T3JpZ2luIC0gKHhPcmlnaW4gKiBhMjEgKyB5T3JpZ2luICogYTIyKSArIHlPZmZzZXQpO1xuICB9XG5cbiAgaWYgKHhQZXJjZW50IHx8IHlQZXJjZW50KSB7XG4gICAgLy9UaGUgU1ZHIHNwZWMgZG9lc24ndCBzdXBwb3J0IHBlcmNlbnRhZ2UtYmFzZWQgdHJhbnNsYXRpb24gaW4gdGhlIFwidHJhbnNmb3JtXCIgYXR0cmlidXRlLCBzbyB3ZSBtZXJnZSBpdCBpbnRvIHRoZSB0cmFuc2xhdGlvbiB0byBzaW11bGF0ZSBpdC5cbiAgICB0ZW1wID0gdGFyZ2V0LmdldEJCb3goKTtcbiAgICB0eCA9IF9yb3VuZCh0eCArIHhQZXJjZW50IC8gMTAwICogdGVtcC53aWR0aCk7XG4gICAgdHkgPSBfcm91bmQodHkgKyB5UGVyY2VudCAvIDEwMCAqIHRlbXAuaGVpZ2h0KTtcbiAgfVxuXG4gIHRlbXAgPSBcIm1hdHJpeChcIiArIGExMSArIFwiLFwiICsgYTIxICsgXCIsXCIgKyBhMTIgKyBcIixcIiArIGEyMiArIFwiLFwiICsgdHggKyBcIixcIiArIHR5ICsgXCIpXCI7XG4gIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgdGVtcCk7XG4gIGZvcmNlQ1NTICYmICh0YXJnZXQuc3R5bGVbX3RyYW5zZm9ybVByb3BdID0gdGVtcCk7IC8vc29tZSBicm93c2VycyBwcmlvcml0aXplIENTUyB0cmFuc2Zvcm1zIG92ZXIgdGhlIHRyYW5zZm9ybSBhdHRyaWJ1dGUuIFdoZW4gd2Ugc2Vuc2UgdGhhdCB0aGUgdXNlciBoYXMgQ1NTIHRyYW5zZm9ybXMgYXBwbGllZCwgd2UgbXVzdCBvdmVyd3JpdGUgdGhlbSB0aGlzIHdheSAob3RoZXJ3aXNlIHNvbWUgYnJvd3NlciBzaW1wbHkgd29uJ3QgcmVuZGVyIHRoZSB0cmFuc2Zvcm0gYXR0cmlidXRlIGNoYW5nZXMhKVxufSxcbiAgICBfYWRkUm90YXRpb25hbFByb3BUd2VlbiA9IGZ1bmN0aW9uIF9hZGRSb3RhdGlvbmFsUHJvcFR3ZWVuKHBsdWdpbiwgdGFyZ2V0LCBwcm9wZXJ0eSwgc3RhcnROdW0sIGVuZFZhbHVlKSB7XG4gIHZhciBjYXAgPSAzNjAsXG4gICAgICBpc1N0cmluZyA9IF9pc1N0cmluZyhlbmRWYWx1ZSksXG4gICAgICBlbmROdW0gPSBwYXJzZUZsb2F0KGVuZFZhbHVlKSAqIChpc1N0cmluZyAmJiB+ZW5kVmFsdWUuaW5kZXhPZihcInJhZFwiKSA/IF9SQUQyREVHIDogMSksXG4gICAgICBjaGFuZ2UgPSBlbmROdW0gLSBzdGFydE51bSxcbiAgICAgIGZpbmFsVmFsdWUgPSBzdGFydE51bSArIGNoYW5nZSArIFwiZGVnXCIsXG4gICAgICBkaXJlY3Rpb24sXG4gICAgICBwdDtcblxuICBpZiAoaXNTdHJpbmcpIHtcbiAgICBkaXJlY3Rpb24gPSBlbmRWYWx1ZS5zcGxpdChcIl9cIilbMV07XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSBcInNob3J0XCIpIHtcbiAgICAgIGNoYW5nZSAlPSBjYXA7XG5cbiAgICAgIGlmIChjaGFuZ2UgIT09IGNoYW5nZSAlIChjYXAgLyAyKSkge1xuICAgICAgICBjaGFuZ2UgKz0gY2hhbmdlIDwgMCA/IGNhcCA6IC1jYXA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJjd1wiICYmIGNoYW5nZSA8IDApIHtcbiAgICAgIGNoYW5nZSA9IChjaGFuZ2UgKyBjYXAgKiBfYmlnTnVtKSAlIGNhcCAtIH5+KGNoYW5nZSAvIGNhcCkgKiBjYXA7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwiY2N3XCIgJiYgY2hhbmdlID4gMCkge1xuICAgICAgY2hhbmdlID0gKGNoYW5nZSAtIGNhcCAqIF9iaWdOdW0pICUgY2FwIC0gfn4oY2hhbmdlIC8gY2FwKSAqIGNhcDtcbiAgICB9XG4gIH1cblxuICBwbHVnaW4uX3B0ID0gcHQgPSBuZXcgUHJvcFR3ZWVuKHBsdWdpbi5fcHQsIHRhcmdldCwgcHJvcGVydHksIHN0YXJ0TnVtLCBjaGFuZ2UsIF9yZW5kZXJQcm9wV2l0aEVuZCk7XG4gIHB0LmUgPSBmaW5hbFZhbHVlO1xuICBwdC51ID0gXCJkZWdcIjtcblxuICBwbHVnaW4uX3Byb3BzLnB1c2gocHJvcGVydHkpO1xuXG4gIHJldHVybiBwdDtcbn0sXG4gICAgX2Fzc2lnbiA9IGZ1bmN0aW9uIF9hc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHtcbiAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgZG9lc24ndCBoYXZlIE9iamVjdC5hc3NpZ24oKSwgc28gd2UgcmVjcmVhdGUgaXQgaGVyZS5cbiAgZm9yICh2YXIgcCBpbiBzb3VyY2UpIHtcbiAgICB0YXJnZXRbcF0gPSBzb3VyY2VbcF07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSxcbiAgICBfYWRkUmF3VHJhbnNmb3JtUFRzID0gZnVuY3Rpb24gX2FkZFJhd1RyYW5zZm9ybVBUcyhwbHVnaW4sIHRyYW5zZm9ybXMsIHRhcmdldCkge1xuICAvL2ZvciBoYW5kbGluZyBjYXNlcyB3aGVyZSBzb21lb25lIHBhc3NlcyBpbiBhIHdob2xlIHRyYW5zZm9ybSBzdHJpbmcsIGxpa2UgdHJhbnNmb3JtOiBcInNjYWxlKDIsIDMpIHJvdGF0ZSgyMGRlZykgdHJhbnNsYXRlWSgzMGVtKVwiXG4gIHZhciBzdGFydENhY2hlID0gX2Fzc2lnbih7fSwgdGFyZ2V0Ll9nc2FwKSxcbiAgICAgIGV4Y2x1ZGUgPSBcInBlcnNwZWN0aXZlLGZvcmNlM0QsdHJhbnNmb3JtT3JpZ2luLHN2Z09yaWdpblwiLFxuICAgICAgc3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gICAgICBlbmRDYWNoZSxcbiAgICAgIHAsXG4gICAgICBzdGFydFZhbHVlLFxuICAgICAgZW5kVmFsdWUsXG4gICAgICBzdGFydE51bSxcbiAgICAgIGVuZE51bSxcbiAgICAgIHN0YXJ0VW5pdCxcbiAgICAgIGVuZFVuaXQ7XG5cbiAgaWYgKHN0YXJ0Q2FjaGUuc3ZnKSB7XG4gICAgc3RhcnRWYWx1ZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIik7XG4gICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcIlwiKTtcbiAgICBzdHlsZVtfdHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm1zO1xuICAgIGVuZENhY2hlID0gX3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgMSk7XG5cbiAgICBfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBfdHJhbnNmb3JtUHJvcCk7XG5cbiAgICB0YXJnZXQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIHN0YXJ0VmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHN0YXJ0VmFsdWUgPSBnZXRDb21wdXRlZFN0eWxlKHRhcmdldClbX3RyYW5zZm9ybVByb3BdO1xuICAgIHN0eWxlW190cmFuc2Zvcm1Qcm9wXSA9IHRyYW5zZm9ybXM7XG4gICAgZW5kQ2FjaGUgPSBfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0LCAxKTtcbiAgICBzdHlsZVtfdHJhbnNmb3JtUHJvcF0gPSBzdGFydFZhbHVlO1xuICB9XG5cbiAgZm9yIChwIGluIF90cmFuc2Zvcm1Qcm9wcykge1xuICAgIHN0YXJ0VmFsdWUgPSBzdGFydENhY2hlW3BdO1xuICAgIGVuZFZhbHVlID0gZW5kQ2FjaGVbcF07XG5cbiAgICBpZiAoc3RhcnRWYWx1ZSAhPT0gZW5kVmFsdWUgJiYgZXhjbHVkZS5pbmRleE9mKHApIDwgMCkge1xuICAgICAgLy90d2VlbmluZyB0byBubyBwZXJzcGVjdGl2ZSBnaXZlcyB2ZXJ5IHVuaW50dWl0aXZlIHJlc3VsdHMgLSBqdXN0IGtlZXAgdGhlIHNhbWUgcGVyc3BlY3RpdmUgaW4gdGhhdCBjYXNlLlxuICAgICAgc3RhcnRVbml0ID0gZ2V0VW5pdChzdGFydFZhbHVlKTtcbiAgICAgIGVuZFVuaXQgPSBnZXRVbml0KGVuZFZhbHVlKTtcbiAgICAgIHN0YXJ0TnVtID0gc3RhcnRVbml0ICE9PSBlbmRVbml0ID8gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBwLCBzdGFydFZhbHVlLCBlbmRVbml0KSA6IHBhcnNlRmxvYXQoc3RhcnRWYWx1ZSk7XG4gICAgICBlbmROdW0gPSBwYXJzZUZsb2F0KGVuZFZhbHVlKTtcbiAgICAgIHBsdWdpbi5fcHQgPSBuZXcgUHJvcFR3ZWVuKHBsdWdpbi5fcHQsIGVuZENhY2hlLCBwLCBzdGFydE51bSwgZW5kTnVtIC0gc3RhcnROdW0sIF9yZW5kZXJDU1NQcm9wKTtcbiAgICAgIHBsdWdpbi5fcHQudSA9IGVuZFVuaXQgfHwgMDtcblxuICAgICAgcGx1Z2luLl9wcm9wcy5wdXNoKHApO1xuICAgIH1cbiAgfVxuXG4gIF9hc3NpZ24oZW5kQ2FjaGUsIHN0YXJ0Q2FjaGUpO1xufTsgLy8gaGFuZGxlIHNwbGl0dGluZyBhcGFydCBwYWRkaW5nLCBtYXJnaW4sIGJvcmRlcldpZHRoLCBhbmQgYm9yZGVyUmFkaXVzIGludG8gdGhlaXIgNCBjb21wb25lbnRzLiBGaXJlZm94LCBmb3IgZXhhbXBsZSwgd29uJ3QgcmVwb3J0IGJvcmRlclJhZGl1cyBjb3JyZWN0bHkgLSBpdCB3aWxsIG9ubHkgZG8gYm9yZGVyVG9wTGVmdFJhZGl1cyBhbmQgdGhlIG90aGVyIGNvcm5lcnMuIFdlIGFsc28gd2FudCB0byBoYW5kbGUgcGFkZGluZ1RvcCwgbWFyZ2luTGVmdCwgYm9yZGVyUmlnaHRXaWR0aCwgZXRjLlxuXG5cbl9mb3JFYWNoTmFtZShcInBhZGRpbmcsbWFyZ2luLFdpZHRoLFJhZGl1c1wiLCBmdW5jdGlvbiAobmFtZSwgaW5kZXgpIHtcbiAgdmFyIHQgPSBcIlRvcFwiLFxuICAgICAgciA9IFwiUmlnaHRcIixcbiAgICAgIGIgPSBcIkJvdHRvbVwiLFxuICAgICAgbCA9IFwiTGVmdFwiLFxuICAgICAgcHJvcHMgPSAoaW5kZXggPCAzID8gW3QsIHIsIGIsIGxdIDogW3QgKyBsLCB0ICsgciwgYiArIHIsIGIgKyBsXSkubWFwKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgcmV0dXJuIGluZGV4IDwgMiA/IG5hbWUgKyBzaWRlIDogXCJib3JkZXJcIiArIHNpZGUgKyBuYW1lO1xuICB9KTtcblxuICBfc3BlY2lhbFByb3BzW2luZGV4ID4gMSA/IFwiYm9yZGVyXCIgKyBuYW1lIDogbmFtZV0gPSBmdW5jdGlvbiAocGx1Z2luLCB0YXJnZXQsIHByb3BlcnR5LCBlbmRWYWx1ZSwgdHdlZW4pIHtcbiAgICB2YXIgYSwgdmFycztcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgNCkge1xuICAgICAgLy8gZ2V0dGVyLCBwYXNzZWQgdGFyZ2V0LCBwcm9wZXJ0eSwgYW5kIHVuaXQgKGZyb20gX2dldCgpKVxuICAgICAgYSA9IHByb3BzLm1hcChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICByZXR1cm4gX2dldChwbHVnaW4sIHByb3AsIHByb3BlcnR5KTtcbiAgICAgIH0pO1xuICAgICAgdmFycyA9IGEuam9pbihcIiBcIik7XG4gICAgICByZXR1cm4gdmFycy5zcGxpdChhWzBdKS5sZW5ndGggPT09IDUgPyBhWzBdIDogdmFycztcbiAgICB9XG5cbiAgICBhID0gKGVuZFZhbHVlICsgXCJcIikuc3BsaXQoXCIgXCIpO1xuICAgIHZhcnMgPSB7fTtcbiAgICBwcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wLCBpKSB7XG4gICAgICByZXR1cm4gdmFyc1twcm9wXSA9IGFbaV0gPSBhW2ldIHx8IGFbKGkgLSAxKSAvIDIgfCAwXTtcbiAgICB9KTtcbiAgICBwbHVnaW4uaW5pdCh0YXJnZXQsIHZhcnMsIHR3ZWVuKTtcbiAgfTtcbn0pO1xuXG5leHBvcnQgdmFyIENTU1BsdWdpbiA9IHtcbiAgbmFtZTogXCJjc3NcIixcbiAgcmVnaXN0ZXI6IF9pbml0Q29yZSxcbiAgdGFyZ2V0VGVzdDogZnVuY3Rpb24gdGFyZ2V0VGVzdCh0YXJnZXQpIHtcbiAgICByZXR1cm4gdGFyZ2V0LnN0eWxlICYmIHRhcmdldC5ub2RlVHlwZTtcbiAgfSxcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCh0YXJnZXQsIHZhcnMsIHR3ZWVuLCBpbmRleCwgdGFyZ2V0cykge1xuICAgIHZhciBwcm9wcyA9IHRoaXMuX3Byb3BzLFxuICAgICAgICBzdHlsZSA9IHRhcmdldC5zdHlsZSxcbiAgICAgICAgc3RhcnRBdCA9IHR3ZWVuLnZhcnMuc3RhcnRBdCxcbiAgICAgICAgc3RhcnRWYWx1ZSxcbiAgICAgICAgZW5kVmFsdWUsXG4gICAgICAgIGVuZE51bSxcbiAgICAgICAgc3RhcnROdW0sXG4gICAgICAgIHR5cGUsXG4gICAgICAgIHNwZWNpYWxQcm9wLFxuICAgICAgICBwLFxuICAgICAgICBzdGFydFVuaXQsXG4gICAgICAgIGVuZFVuaXQsXG4gICAgICAgIHJlbGF0aXZlLFxuICAgICAgICBpc1RyYW5zZm9ybVJlbGF0ZWQsXG4gICAgICAgIHRyYW5zZm9ybVByb3BUd2VlbixcbiAgICAgICAgY2FjaGUsXG4gICAgICAgIHNtb290aCxcbiAgICAgICAgaGFzUHJpb3JpdHksXG4gICAgICAgIGlubGluZVByb3BzO1xuICAgIF9wbHVnaW5Jbml0dGVkIHx8IF9pbml0Q29yZSgpOyAvLyB3ZSBtYXkgY2FsbCBpbml0KCkgbXVsdGlwbGUgdGltZXMgb24gdGhlIHNhbWUgcGx1Z2luIGluc3RhbmNlLCBsaWtlIHdoZW4gYWRkaW5nIHNwZWNpYWwgcHJvcGVydGllcywgc28gbWFrZSBzdXJlIHdlIGRvbid0IG92ZXJ3cml0ZSB0aGUgcmV2ZXJ0IGRhdGEgb3IgaW5saW5lUHJvcHNcblxuICAgIHRoaXMuc3R5bGVzID0gdGhpcy5zdHlsZXMgfHwgX2dldFN0eWxlU2F2ZXIodGFyZ2V0KTtcbiAgICBpbmxpbmVQcm9wcyA9IHRoaXMuc3R5bGVzLnByb3BzO1xuICAgIHRoaXMudHdlZW4gPSB0d2VlbjtcblxuICAgIGZvciAocCBpbiB2YXJzKSB7XG4gICAgICBpZiAocCA9PT0gXCJhdXRvUm91bmRcIikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgZW5kVmFsdWUgPSB2YXJzW3BdO1xuXG4gICAgICBpZiAoX3BsdWdpbnNbcF0gJiYgX2NoZWNrUGx1Z2luKHAsIHZhcnMsIHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzKSkge1xuICAgICAgICAvLyBwbHVnaW5zXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB0eXBlID0gdHlwZW9mIGVuZFZhbHVlO1xuICAgICAgc3BlY2lhbFByb3AgPSBfc3BlY2lhbFByb3BzW3BdO1xuXG4gICAgICBpZiAodHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGVuZFZhbHVlID0gZW5kVmFsdWUuY2FsbCh0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cyk7XG4gICAgICAgIHR5cGUgPSB0eXBlb2YgZW5kVmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlID09PSBcInN0cmluZ1wiICYmIH5lbmRWYWx1ZS5pbmRleE9mKFwicmFuZG9tKFwiKSkge1xuICAgICAgICBlbmRWYWx1ZSA9IF9yZXBsYWNlUmFuZG9tKGVuZFZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNwZWNpYWxQcm9wKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wKHRoaXMsIHRhcmdldCwgcCwgZW5kVmFsdWUsIHR3ZWVuKSAmJiAoaGFzUHJpb3JpdHkgPSAxKTtcbiAgICAgIH0gZWxzZSBpZiAocC5zdWJzdHIoMCwgMikgPT09IFwiLS1cIikge1xuICAgICAgICAvL0NTUyB2YXJpYWJsZVxuICAgICAgICBzdGFydFZhbHVlID0gKGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5nZXRQcm9wZXJ0eVZhbHVlKHApICsgXCJcIikudHJpbSgpO1xuICAgICAgICBlbmRWYWx1ZSArPSBcIlwiO1xuICAgICAgICBfY29sb3JFeHAubGFzdEluZGV4ID0gMDtcblxuICAgICAgICBpZiAoIV9jb2xvckV4cC50ZXN0KHN0YXJ0VmFsdWUpKSB7XG4gICAgICAgICAgLy8gY29sb3JzIGRvbid0IGhhdmUgdW5pdHNcbiAgICAgICAgICBzdGFydFVuaXQgPSBnZXRVbml0KHN0YXJ0VmFsdWUpO1xuICAgICAgICAgIGVuZFVuaXQgPSBnZXRVbml0KGVuZFZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVuZFVuaXQgPyBzdGFydFVuaXQgIT09IGVuZFVuaXQgJiYgKHN0YXJ0VmFsdWUgPSBfY29udmVydFRvVW5pdCh0YXJnZXQsIHAsIHN0YXJ0VmFsdWUsIGVuZFVuaXQpICsgZW5kVW5pdCkgOiBzdGFydFVuaXQgJiYgKGVuZFZhbHVlICs9IHN0YXJ0VW5pdCk7XG4gICAgICAgIHRoaXMuYWRkKHN0eWxlLCBcInNldFByb3BlcnR5XCIsIHN0YXJ0VmFsdWUsIGVuZFZhbHVlLCBpbmRleCwgdGFyZ2V0cywgMCwgMCwgcCk7XG4gICAgICAgIHByb3BzLnB1c2gocCk7XG4gICAgICAgIGlubGluZVByb3BzLnB1c2gocCwgMCwgc3R5bGVbcF0pO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmIChzdGFydEF0ICYmIHAgaW4gc3RhcnRBdCkge1xuICAgICAgICAgIC8vIGluIGNhc2Ugc29tZW9uZSBoYXJkLWNvZGVzIGEgY29tcGxleCB2YWx1ZSBhcyB0aGUgc3RhcnQsIGxpa2UgdG9wOiBcImNhbGMoMnZoIC8gMilcIi4gV2l0aG91dCB0aGlzLCBpdCdkIHVzZSB0aGUgY29tcHV0ZWQgdmFsdWUgKGFsd2F5cyBpbiBweClcbiAgICAgICAgICBzdGFydFZhbHVlID0gdHlwZW9mIHN0YXJ0QXRbcF0gPT09IFwiZnVuY3Rpb25cIiA/IHN0YXJ0QXRbcF0uY2FsbCh0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cykgOiBzdGFydEF0W3BdO1xuICAgICAgICAgIF9pc1N0cmluZyhzdGFydFZhbHVlKSAmJiB+c3RhcnRWYWx1ZS5pbmRleE9mKFwicmFuZG9tKFwiKSAmJiAoc3RhcnRWYWx1ZSA9IF9yZXBsYWNlUmFuZG9tKHN0YXJ0VmFsdWUpKTtcbiAgICAgICAgICBnZXRVbml0KHN0YXJ0VmFsdWUgKyBcIlwiKSB8fCAoc3RhcnRWYWx1ZSArPSBfY29uZmlnLnVuaXRzW3BdIHx8IGdldFVuaXQoX2dldCh0YXJnZXQsIHApKSB8fCBcIlwiKTsgLy8gZm9yIGNhc2VzIHdoZW4gc29tZW9uZSBwYXNzZXMgaW4gYSB1bml0bGVzcyB2YWx1ZSBsaWtlIHt4OiAxMDB9OyBpZiB3ZSB0cnkgc2V0dGluZyB0cmFuc2xhdGUoMTAwLCAwcHgpIGl0IHdvbid0IHdvcmsuXG5cbiAgICAgICAgICAoc3RhcnRWYWx1ZSArIFwiXCIpLmNoYXJBdCgxKSA9PT0gXCI9XCIgJiYgKHN0YXJ0VmFsdWUgPSBfZ2V0KHRhcmdldCwgcCkpOyAvLyBjYW4ndCB3b3JrIHdpdGggcmVsYXRpdmUgdmFsdWVzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhcnRWYWx1ZSA9IF9nZXQodGFyZ2V0LCBwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXJ0TnVtID0gcGFyc2VGbG9hdChzdGFydFZhbHVlKTtcbiAgICAgICAgcmVsYXRpdmUgPSB0eXBlID09PSBcInN0cmluZ1wiICYmIGVuZFZhbHVlLmNoYXJBdCgxKSA9PT0gXCI9XCIgJiYgZW5kVmFsdWUuc3Vic3RyKDAsIDIpO1xuICAgICAgICByZWxhdGl2ZSAmJiAoZW5kVmFsdWUgPSBlbmRWYWx1ZS5zdWJzdHIoMikpO1xuICAgICAgICBlbmROdW0gPSBwYXJzZUZsb2F0KGVuZFZhbHVlKTtcblxuICAgICAgICBpZiAocCBpbiBfcHJvcGVydHlBbGlhc2VzKSB7XG4gICAgICAgICAgaWYgKHAgPT09IFwiYXV0b0FscGhhXCIpIHtcbiAgICAgICAgICAgIC8vc3BlY2lhbCBjYXNlIHdoZXJlIHdlIGNvbnRyb2wgdGhlIHZpc2liaWxpdHkgYWxvbmcgd2l0aCBvcGFjaXR5LiBXZSBzdGlsbCBhbGxvdyB0aGUgb3BhY2l0eSB2YWx1ZSB0byBwYXNzIHRocm91Z2ggYW5kIGdldCB0d2VlbmVkLlxuICAgICAgICAgICAgaWYgKHN0YXJ0TnVtID09PSAxICYmIF9nZXQodGFyZ2V0LCBcInZpc2liaWxpdHlcIikgPT09IFwiaGlkZGVuXCIgJiYgZW5kTnVtKSB7XG4gICAgICAgICAgICAgIC8vaWYgdmlzaWJpbGl0eSBpcyBpbml0aWFsbHkgc2V0IHRvIFwiaGlkZGVuXCIsIHdlIHNob3VsZCBpbnRlcnByZXQgdGhhdCBhcyBpbnRlbnQgdG8gbWFrZSBvcGFjaXR5IDAgKGEgY29udmVuaWVuY2UpXG4gICAgICAgICAgICAgIHN0YXJ0TnVtID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5saW5lUHJvcHMucHVzaChcInZpc2liaWxpdHlcIiwgMCwgc3R5bGUudmlzaWJpbGl0eSk7XG5cbiAgICAgICAgICAgIF9hZGROb25Ud2VlbmluZ1BUKHRoaXMsIHN0eWxlLCBcInZpc2liaWxpdHlcIiwgc3RhcnROdW0gPyBcImluaGVyaXRcIiA6IFwiaGlkZGVuXCIsIGVuZE51bSA/IFwiaW5oZXJpdFwiIDogXCJoaWRkZW5cIiwgIWVuZE51bSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHAgIT09IFwic2NhbGVcIiAmJiBwICE9PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgICAgICAgICBwID0gX3Byb3BlcnR5QWxpYXNlc1twXTtcbiAgICAgICAgICAgIH5wLmluZGV4T2YoXCIsXCIpICYmIChwID0gcC5zcGxpdChcIixcIilbMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlzVHJhbnNmb3JtUmVsYXRlZCA9IHAgaW4gX3RyYW5zZm9ybVByb3BzOyAvLy0tLSBUUkFOU0ZPUk0tUkVMQVRFRCAtLS1cblxuICAgICAgICBpZiAoaXNUcmFuc2Zvcm1SZWxhdGVkKSB7XG4gICAgICAgICAgdGhpcy5zdHlsZXMuc2F2ZShwKTtcblxuICAgICAgICAgIGlmICghdHJhbnNmb3JtUHJvcFR3ZWVuKSB7XG4gICAgICAgICAgICBjYWNoZSA9IHRhcmdldC5fZ3NhcDtcbiAgICAgICAgICAgIGNhY2hlLnJlbmRlclRyYW5zZm9ybSAmJiAhdmFycy5wYXJzZVRyYW5zZm9ybSB8fCBfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0LCB2YXJzLnBhcnNlVHJhbnNmb3JtKTsgLy8gaWYsIGZvciBleGFtcGxlLCBnc2FwLnNldCguLi4ge3RyYW5zZm9ybTpcInRyYW5zbGF0ZVgoNTB2dylcIn0pLCB0aGUgX2dldCgpIGNhbGwgZG9lc24ndCBwYXJzZSB0aGUgdHJhbnNmb3JtLCB0aHVzIGNhY2hlLnJlbmRlclRyYW5zZm9ybSB3b24ndCBiZSBzZXQgeWV0IHNvIGZvcmNlIHRoZSBwYXJzaW5nIG9mIHRoZSB0cmFuc2Zvcm0gaGVyZS5cblxuICAgICAgICAgICAgc21vb3RoID0gdmFycy5zbW9vdGhPcmlnaW4gIT09IGZhbHNlICYmIGNhY2hlLnNtb290aDtcbiAgICAgICAgICAgIHRyYW5zZm9ybVByb3BUd2VlbiA9IHRoaXMuX3B0ID0gbmV3IFByb3BUd2Vlbih0aGlzLl9wdCwgc3R5bGUsIF90cmFuc2Zvcm1Qcm9wLCAwLCAxLCBjYWNoZS5yZW5kZXJUcmFuc2Zvcm0sIGNhY2hlLCAwLCAtMSk7IC8vdGhlIGZpcnN0IHRpbWUgdGhyb3VnaCwgY3JlYXRlIHRoZSByZW5kZXJpbmcgUHJvcFR3ZWVuIHNvIHRoYXQgaXQgcnVucyBMQVNUIChpbiB0aGUgbGlua2VkIGxpc3QsIHdlIGtlZXAgYWRkaW5nIHRvIHRoZSBiZWdpbm5pbmcpXG5cbiAgICAgICAgICAgIHRyYW5zZm9ybVByb3BUd2Vlbi5kZXAgPSAxOyAvL2ZsYWcgaXQgYXMgZGVwZW5kZW50IHNvIHRoYXQgaWYgdGhpbmdzIGdldCBraWxsZWQvb3ZlcndyaXR0ZW4gYW5kIHRoaXMgaXMgdGhlIG9ubHkgUHJvcFR3ZWVuIGxlZnQsIHdlIGNhbiBzYWZlbHkga2lsbCB0aGUgd2hvbGUgdHdlZW4uXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHAgPT09IFwic2NhbGVcIikge1xuICAgICAgICAgICAgdGhpcy5fcHQgPSBuZXcgUHJvcFR3ZWVuKHRoaXMuX3B0LCBjYWNoZSwgXCJzY2FsZVlcIiwgY2FjaGUuc2NhbGVZLCAocmVsYXRpdmUgPyBfcGFyc2VSZWxhdGl2ZShjYWNoZS5zY2FsZVksIHJlbGF0aXZlICsgZW5kTnVtKSA6IGVuZE51bSkgLSBjYWNoZS5zY2FsZVkgfHwgMCwgX3JlbmRlckNTU1Byb3ApO1xuICAgICAgICAgICAgdGhpcy5fcHQudSA9IDA7XG4gICAgICAgICAgICBwcm9wcy5wdXNoKFwic2NhbGVZXCIsIHApO1xuICAgICAgICAgICAgcCArPSBcIlhcIjtcbiAgICAgICAgICB9IGVsc2UgaWYgKHAgPT09IFwidHJhbnNmb3JtT3JpZ2luXCIpIHtcbiAgICAgICAgICAgIGlubGluZVByb3BzLnB1c2goX3RyYW5zZm9ybU9yaWdpblByb3AsIDAsIHN0eWxlW190cmFuc2Zvcm1PcmlnaW5Qcm9wXSk7XG4gICAgICAgICAgICBlbmRWYWx1ZSA9IF9jb252ZXJ0S2V5d29yZHNUb1BlcmNlbnRhZ2VzKGVuZFZhbHVlKTsgLy9pbiBjYXNlIHNvbWV0aGluZyBsaWtlIFwibGVmdCB0b3BcIiBvciBcImJvdHRvbSByaWdodFwiIGlzIHBhc3NlZCBpbi4gQ29udmVydCB0byBwZXJjZW50YWdlcy5cblxuICAgICAgICAgICAgaWYgKGNhY2hlLnN2Zykge1xuICAgICAgICAgICAgICBfYXBwbHlTVkdPcmlnaW4odGFyZ2V0LCBlbmRWYWx1ZSwgMCwgc21vb3RoLCAwLCB0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVuZFVuaXQgPSBwYXJzZUZsb2F0KGVuZFZhbHVlLnNwbGl0KFwiIFwiKVsyXSkgfHwgMDsgLy9oYW5kbGUgdGhlIHpPcmlnaW4gc2VwYXJhdGVseSFcblxuICAgICAgICAgICAgICBlbmRVbml0ICE9PSBjYWNoZS56T3JpZ2luICYmIF9hZGROb25Ud2VlbmluZ1BUKHRoaXMsIGNhY2hlLCBcInpPcmlnaW5cIiwgY2FjaGUuek9yaWdpbiwgZW5kVW5pdCk7XG5cbiAgICAgICAgICAgICAgX2FkZE5vblR3ZWVuaW5nUFQodGhpcywgc3R5bGUsIHAsIF9maXJzdFR3b09ubHkoc3RhcnRWYWx1ZSksIF9maXJzdFR3b09ubHkoZW5kVmFsdWUpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwID09PSBcInN2Z09yaWdpblwiKSB7XG4gICAgICAgICAgICBfYXBwbHlTVkdPcmlnaW4odGFyZ2V0LCBlbmRWYWx1ZSwgMSwgc21vb3RoLCAwLCB0aGlzKTtcblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwIGluIF9yb3RhdGlvbmFsUHJvcGVydGllcykge1xuICAgICAgICAgICAgX2FkZFJvdGF0aW9uYWxQcm9wVHdlZW4odGhpcywgY2FjaGUsIHAsIHN0YXJ0TnVtLCByZWxhdGl2ZSA/IF9wYXJzZVJlbGF0aXZlKHN0YXJ0TnVtLCByZWxhdGl2ZSArIGVuZFZhbHVlKSA6IGVuZFZhbHVlKTtcblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwID09PSBcInNtb290aE9yaWdpblwiKSB7XG4gICAgICAgICAgICBfYWRkTm9uVHdlZW5pbmdQVCh0aGlzLCBjYWNoZSwgXCJzbW9vdGhcIiwgY2FjaGUuc21vb3RoLCBlbmRWYWx1ZSk7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gXCJmb3JjZTNEXCIpIHtcbiAgICAgICAgICAgIGNhY2hlW3BdID0gZW5kVmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHAgPT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICAgICAgICAgIF9hZGRSYXdUcmFuc2Zvcm1QVHModGhpcywgZW5kVmFsdWUsIHRhcmdldCk7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghKHAgaW4gc3R5bGUpKSB7XG4gICAgICAgICAgcCA9IF9jaGVja1Byb3BQcmVmaXgocCkgfHwgcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1RyYW5zZm9ybVJlbGF0ZWQgfHwgKGVuZE51bSB8fCBlbmROdW0gPT09IDApICYmIChzdGFydE51bSB8fCBzdGFydE51bSA9PT0gMCkgJiYgIV9jb21wbGV4RXhwLnRlc3QoZW5kVmFsdWUpICYmIHAgaW4gc3R5bGUpIHtcbiAgICAgICAgICBzdGFydFVuaXQgPSAoc3RhcnRWYWx1ZSArIFwiXCIpLnN1YnN0cigoc3RhcnROdW0gKyBcIlwiKS5sZW5ndGgpO1xuICAgICAgICAgIGVuZE51bSB8fCAoZW5kTnVtID0gMCk7IC8vIHByb3RlY3QgYWdhaW5zdCBOYU5cblxuICAgICAgICAgIGVuZFVuaXQgPSBnZXRVbml0KGVuZFZhbHVlKSB8fCAocCBpbiBfY29uZmlnLnVuaXRzID8gX2NvbmZpZy51bml0c1twXSA6IHN0YXJ0VW5pdCk7XG4gICAgICAgICAgc3RhcnRVbml0ICE9PSBlbmRVbml0ICYmIChzdGFydE51bSA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcCwgc3RhcnRWYWx1ZSwgZW5kVW5pdCkpO1xuICAgICAgICAgIHRoaXMuX3B0ID0gbmV3IFByb3BUd2Vlbih0aGlzLl9wdCwgaXNUcmFuc2Zvcm1SZWxhdGVkID8gY2FjaGUgOiBzdHlsZSwgcCwgc3RhcnROdW0sIChyZWxhdGl2ZSA/IF9wYXJzZVJlbGF0aXZlKHN0YXJ0TnVtLCByZWxhdGl2ZSArIGVuZE51bSkgOiBlbmROdW0pIC0gc3RhcnROdW0sICFpc1RyYW5zZm9ybVJlbGF0ZWQgJiYgKGVuZFVuaXQgPT09IFwicHhcIiB8fCBwID09PSBcInpJbmRleFwiKSAmJiB2YXJzLmF1dG9Sb3VuZCAhPT0gZmFsc2UgPyBfcmVuZGVyUm91bmRlZENTU1Byb3AgOiBfcmVuZGVyQ1NTUHJvcCk7XG4gICAgICAgICAgdGhpcy5fcHQudSA9IGVuZFVuaXQgfHwgMDtcblxuICAgICAgICAgIGlmIChzdGFydFVuaXQgIT09IGVuZFVuaXQgJiYgZW5kVW5pdCAhPT0gXCIlXCIpIHtcbiAgICAgICAgICAgIC8vd2hlbiB0aGUgdHdlZW4gZ29lcyBhbGwgdGhlIHdheSBiYWNrIHRvIHRoZSBiZWdpbm5pbmcsIHdlIG5lZWQgdG8gcmV2ZXJ0IGl0IHRvIHRoZSBPTEQvT1JJR0lOQUwgdmFsdWUgKHdpdGggdGhvc2UgdW5pdHMpLiBXZSByZWNvcmQgdGhhdCBhcyBhIFwiYlwiIChiZWdpbm5pbmcpIHByb3BlcnR5IGFuZCBwb2ludCB0byBhIHJlbmRlciBtZXRob2QgdGhhdCBoYW5kbGVzIHRoYXQuIChwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24pXG4gICAgICAgICAgICB0aGlzLl9wdC5iID0gc3RhcnRWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX3B0LnIgPSBfcmVuZGVyQ1NTUHJvcFdpdGhCZWdpbm5pbmc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCEocCBpbiBzdHlsZSkpIHtcbiAgICAgICAgICBpZiAocCBpbiB0YXJnZXQpIHtcbiAgICAgICAgICAgIC8vbWF5YmUgaXQncyBub3QgYSBzdHlsZSAtIGl0IGNvdWxkIGJlIGEgcHJvcGVydHkgYWRkZWQgZGlyZWN0bHkgdG8gYW4gZWxlbWVudCBpbiB3aGljaCBjYXNlIHdlJ2xsIHRyeSB0byBhbmltYXRlIHRoYXQuXG4gICAgICAgICAgICB0aGlzLmFkZCh0YXJnZXQsIHAsIHN0YXJ0VmFsdWUgfHwgdGFyZ2V0W3BdLCByZWxhdGl2ZSA/IHJlbGF0aXZlICsgZW5kVmFsdWUgOiBlbmRWYWx1ZSwgaW5kZXgsIHRhcmdldHMpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCAhPT0gXCJwYXJzZVRyYW5zZm9ybVwiKSB7XG4gICAgICAgICAgICBfbWlzc2luZ1BsdWdpbihwLCBlbmRWYWx1ZSk7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdHdlZW5Db21wbGV4Q1NTU3RyaW5nLmNhbGwodGhpcywgdGFyZ2V0LCBwLCBzdGFydFZhbHVlLCByZWxhdGl2ZSA/IHJlbGF0aXZlICsgZW5kVmFsdWUgOiBlbmRWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpc1RyYW5zZm9ybVJlbGF0ZWQgfHwgKHAgaW4gc3R5bGUgPyBpbmxpbmVQcm9wcy5wdXNoKHAsIDAsIHN0eWxlW3BdKSA6IGlubGluZVByb3BzLnB1c2gocCwgMSwgc3RhcnRWYWx1ZSB8fCB0YXJnZXRbcF0pKTtcbiAgICAgICAgcHJvcHMucHVzaChwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNQcmlvcml0eSAmJiBfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5KHRoaXMpO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihyYXRpbywgZGF0YSkge1xuICAgIGlmIChkYXRhLnR3ZWVuLl90aW1lIHx8ICFfcmV2ZXJ0aW5nKCkpIHtcbiAgICAgIHZhciBwdCA9IGRhdGEuX3B0O1xuXG4gICAgICB3aGlsZSAocHQpIHtcbiAgICAgICAgcHQucihyYXRpbywgcHQuZCk7XG4gICAgICAgIHB0ID0gcHQuX25leHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEuc3R5bGVzLnJldmVydCgpO1xuICAgIH1cbiAgfSxcbiAgZ2V0OiBfZ2V0LFxuICBhbGlhc2VzOiBfcHJvcGVydHlBbGlhc2VzLFxuICBnZXRTZXR0ZXI6IGZ1bmN0aW9uIGdldFNldHRlcih0YXJnZXQsIHByb3BlcnR5LCBwbHVnaW4pIHtcbiAgICAvL3JldHVybnMgYSBzZXR0ZXIgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIHRhcmdldCwgcHJvcGVydHksIHZhbHVlIGFuZCBhcHBsaWVzIGl0IGFjY29yZGluZ2x5LiBSZW1lbWJlciwgcHJvcGVydGllcyBsaWtlIFwieFwiIGFyZW4ndCBhcyBzaW1wbGUgYXMgdGFyZ2V0LnN0eWxlLnByb3BlcnR5ID0gdmFsdWUgYmVjYXVzZSB0aGV5J3ZlIGdvdCB0byBiZSBhcHBsaWVkIHRvIGEgcHJveHkgb2JqZWN0IGFuZCB0aGVuIG1lcmdlZCBpbnRvIGEgdHJhbnNmb3JtIHN0cmluZyBpbiBhIHJlbmRlcmVyLlxuICAgIHZhciBwID0gX3Byb3BlcnR5QWxpYXNlc1twcm9wZXJ0eV07XG4gICAgcCAmJiBwLmluZGV4T2YoXCIsXCIpIDwgMCAmJiAocHJvcGVydHkgPSBwKTtcbiAgICByZXR1cm4gcHJvcGVydHkgaW4gX3RyYW5zZm9ybVByb3BzICYmIHByb3BlcnR5ICE9PSBfdHJhbnNmb3JtT3JpZ2luUHJvcCAmJiAodGFyZ2V0Ll9nc2FwLnggfHwgX2dldCh0YXJnZXQsIFwieFwiKSkgPyBwbHVnaW4gJiYgX3JlY2VudFNldHRlclBsdWdpbiA9PT0gcGx1Z2luID8gcHJvcGVydHkgPT09IFwic2NhbGVcIiA/IF9zZXR0ZXJTY2FsZSA6IF9zZXR0ZXJUcmFuc2Zvcm0gOiAoX3JlY2VudFNldHRlclBsdWdpbiA9IHBsdWdpbiB8fCB7fSkgJiYgKHByb3BlcnR5ID09PSBcInNjYWxlXCIgPyBfc2V0dGVyU2NhbGVXaXRoUmVuZGVyIDogX3NldHRlclRyYW5zZm9ybVdpdGhSZW5kZXIpIDogdGFyZ2V0LnN0eWxlICYmICFfaXNVbmRlZmluZWQodGFyZ2V0LnN0eWxlW3Byb3BlcnR5XSkgPyBfc2V0dGVyQ1NTU3R5bGUgOiB+cHJvcGVydHkuaW5kZXhPZihcIi1cIikgPyBfc2V0dGVyQ1NTUHJvcCA6IF9nZXRTZXR0ZXIodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gIH0sXG4gIGNvcmU6IHtcbiAgICBfcmVtb3ZlUHJvcGVydHk6IF9yZW1vdmVQcm9wZXJ0eSxcbiAgICBfZ2V0TWF0cml4OiBfZ2V0TWF0cml4XG4gIH1cbn07XG5nc2FwLnV0aWxzLmNoZWNrUHJlZml4ID0gX2NoZWNrUHJvcFByZWZpeDtcbmdzYXAuY29yZS5nZXRTdHlsZVNhdmVyID0gX2dldFN0eWxlU2F2ZXI7XG5cbihmdW5jdGlvbiAocG9zaXRpb25BbmRTY2FsZSwgcm90YXRpb24sIG90aGVycywgYWxpYXNlcykge1xuICB2YXIgYWxsID0gX2ZvckVhY2hOYW1lKHBvc2l0aW9uQW5kU2NhbGUgKyBcIixcIiArIHJvdGF0aW9uICsgXCIsXCIgKyBvdGhlcnMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgX3RyYW5zZm9ybVByb3BzW25hbWVdID0gMTtcbiAgfSk7XG5cbiAgX2ZvckVhY2hOYW1lKHJvdGF0aW9uLCBmdW5jdGlvbiAobmFtZSkge1xuICAgIF9jb25maWcudW5pdHNbbmFtZV0gPSBcImRlZ1wiO1xuICAgIF9yb3RhdGlvbmFsUHJvcGVydGllc1tuYW1lXSA9IDE7XG4gIH0pO1xuXG4gIF9wcm9wZXJ0eUFsaWFzZXNbYWxsWzEzXV0gPSBwb3NpdGlvbkFuZFNjYWxlICsgXCIsXCIgKyByb3RhdGlvbjtcblxuICBfZm9yRWFjaE5hbWUoYWxpYXNlcywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgc3BsaXQgPSBuYW1lLnNwbGl0KFwiOlwiKTtcbiAgICBfcHJvcGVydHlBbGlhc2VzW3NwbGl0WzFdXSA9IGFsbFtzcGxpdFswXV07XG4gIH0pO1xufSkoXCJ4LHkseixzY2FsZSxzY2FsZVgsc2NhbGVZLHhQZXJjZW50LHlQZXJjZW50XCIsIFwicm90YXRpb24scm90YXRpb25YLHJvdGF0aW9uWSxza2V3WCxza2V3WVwiLCBcInRyYW5zZm9ybSx0cmFuc2Zvcm1PcmlnaW4sc3ZnT3JpZ2luLGZvcmNlM0Qsc21vb3RoT3JpZ2luLHRyYW5zZm9ybVBlcnNwZWN0aXZlXCIsIFwiMDp0cmFuc2xhdGVYLDE6dHJhbnNsYXRlWSwyOnRyYW5zbGF0ZVosODpyb3RhdGUsODpyb3RhdGlvblosODpyb3RhdGVaLDk6cm90YXRlWCwxMDpyb3RhdGVZXCIpO1xuXG5fZm9yRWFjaE5hbWUoXCJ4LHkseix0b3AscmlnaHQsYm90dG9tLGxlZnQsd2lkdGgsaGVpZ2h0LGZvbnRTaXplLHBhZGRpbmcsbWFyZ2luLHBlcnNwZWN0aXZlXCIsIGZ1bmN0aW9uIChuYW1lKSB7XG4gIF9jb25maWcudW5pdHNbbmFtZV0gPSBcInB4XCI7XG59KTtcblxuZ3NhcC5yZWdpc3RlclBsdWdpbihDU1NQbHVnaW4pO1xuZXhwb3J0IHsgQ1NTUGx1Z2luIGFzIGRlZmF1bHQsIF9nZXRCQm94LCBfY3JlYXRlRWxlbWVudCwgX2NoZWNrUHJvcFByZWZpeCBhcyBjaGVja1ByZWZpeCB9OyIsImltcG9ydCB7IGdzYXAsIFBvd2VyMCwgUG93ZXIxLCBQb3dlcjIsIFBvd2VyMywgUG93ZXI0LCBMaW5lYXIsIFF1YWQsIEN1YmljLCBRdWFydCwgUXVpbnQsIFN0cm9uZywgRWxhc3RpYywgQmFjaywgU3RlcHBlZEVhc2UsIEJvdW5jZSwgU2luZSwgRXhwbywgQ2lyYywgVHdlZW5MaXRlLCBUaW1lbGluZUxpdGUsIFRpbWVsaW5lTWF4IH0gZnJvbSBcIi4vZ3NhcC1jb3JlLmpzXCI7XG5pbXBvcnQgeyBDU1NQbHVnaW4gfSBmcm9tIFwiLi9DU1NQbHVnaW4uanNcIjtcbnZhciBnc2FwV2l0aENTUyA9IGdzYXAucmVnaXN0ZXJQbHVnaW4oQ1NTUGx1Z2luKSB8fCBnc2FwLFxuICAgIC8vIHRvIHByb3RlY3QgZnJvbSB0cmVlIHNoYWtpbmdcblR3ZWVuTWF4V2l0aENTUyA9IGdzYXBXaXRoQ1NTLmNvcmUuVHdlZW47XG5leHBvcnQgeyBnc2FwV2l0aENTUyBhcyBnc2FwLCBnc2FwV2l0aENTUyBhcyBkZWZhdWx0LCBDU1NQbHVnaW4sIFR3ZWVuTWF4V2l0aENTUyBhcyBUd2Vlbk1heCwgVHdlZW5MaXRlLCBUaW1lbGluZU1heCwgVGltZWxpbmVMaXRlLCBQb3dlcjAsIFBvd2VyMSwgUG93ZXIyLCBQb3dlcjMsIFBvd2VyNCwgTGluZWFyLCBRdWFkLCBDdWJpYywgUXVhcnQsIFF1aW50LCBTdHJvbmcsIEVsYXN0aWMsIEJhY2ssIFN0ZXBwZWRFYXNlLCBCb3VuY2UsIFNpbmUsIEV4cG8sIENpcmMgfTsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbi8qIVxuICogT2JzZXJ2ZXIgMy4xMi4yXG4gKiBodHRwczovL2dyZWVuc29jay5jb21cbiAqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgMjAwOC0yMDIzLCBHcmVlblNvY2suIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBTdWJqZWN0IHRvIHRoZSB0ZXJtcyBhdCBodHRwczovL2dyZWVuc29jay5jb20vc3RhbmRhcmQtbGljZW5zZSBvciBmb3JcbiAqIENsdWIgR3JlZW5Tb2NrIG1lbWJlcnMsIHRoZSBhZ3JlZW1lbnQgaXNzdWVkIHdpdGggdGhhdCBtZW1iZXJzaGlwLlxuICogQGF1dGhvcjogSmFjayBEb3lsZSwgamFja0BncmVlbnNvY2suY29tXG4qL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xudmFyIGdzYXAsXG4gICAgX2NvcmVJbml0dGVkLFxuICAgIF9jbGFtcCxcbiAgICBfd2luLFxuICAgIF9kb2MsXG4gICAgX2RvY0VsLFxuICAgIF9ib2R5LFxuICAgIF9pc1RvdWNoLFxuICAgIF9wb2ludGVyVHlwZSxcbiAgICBTY3JvbGxUcmlnZ2VyLFxuICAgIF9yb290LFxuICAgIF9ub3JtYWxpemVyLFxuICAgIF9ldmVudFR5cGVzLFxuICAgIF9jb250ZXh0LFxuICAgIF9nZXRHU0FQID0gZnVuY3Rpb24gX2dldEdTQVAoKSB7XG4gIHJldHVybiBnc2FwIHx8IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgKGdzYXAgPSB3aW5kb3cuZ3NhcCkgJiYgZ3NhcC5yZWdpc3RlclBsdWdpbiAmJiBnc2FwO1xufSxcbiAgICBfc3RhcnR1cCA9IDEsXG4gICAgX29ic2VydmVycyA9IFtdLFxuICAgIF9zY3JvbGxlcnMgPSBbXSxcbiAgICBfcHJveGllcyA9IFtdLFxuICAgIF9nZXRUaW1lID0gRGF0ZS5ub3csXG4gICAgX2JyaWRnZSA9IGZ1bmN0aW9uIF9icmlkZ2UobmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufSxcbiAgICBfaW50ZWdyYXRlID0gZnVuY3Rpb24gX2ludGVncmF0ZSgpIHtcbiAgdmFyIGNvcmUgPSBTY3JvbGxUcmlnZ2VyLmNvcmUsXG4gICAgICBkYXRhID0gY29yZS5icmlkZ2UgfHwge30sXG4gICAgICBzY3JvbGxlcnMgPSBjb3JlLl9zY3JvbGxlcnMsXG4gICAgICBwcm94aWVzID0gY29yZS5fcHJveGllcztcbiAgc2Nyb2xsZXJzLnB1c2guYXBwbHkoc2Nyb2xsZXJzLCBfc2Nyb2xsZXJzKTtcbiAgcHJveGllcy5wdXNoLmFwcGx5KHByb3hpZXMsIF9wcm94aWVzKTtcbiAgX3Njcm9sbGVycyA9IHNjcm9sbGVycztcbiAgX3Byb3hpZXMgPSBwcm94aWVzO1xuXG4gIF9icmlkZ2UgPSBmdW5jdGlvbiBfYnJpZGdlKG5hbWUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIGRhdGFbbmFtZV0odmFsdWUpO1xuICB9O1xufSxcbiAgICBfZ2V0UHJveHlQcm9wID0gZnVuY3Rpb24gX2dldFByb3h5UHJvcChlbGVtZW50LCBwcm9wZXJ0eSkge1xuICByZXR1cm4gfl9wcm94aWVzLmluZGV4T2YoZWxlbWVudCkgJiYgX3Byb3hpZXNbX3Byb3hpZXMuaW5kZXhPZihlbGVtZW50KSArIDFdW3Byb3BlcnR5XTtcbn0sXG4gICAgX2lzVmlld3BvcnQgPSBmdW5jdGlvbiBfaXNWaWV3cG9ydChlbCkge1xuICByZXR1cm4gISF+X3Jvb3QuaW5kZXhPZihlbCk7XG59LFxuICAgIF9hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIF9hZGRMaXN0ZW5lcihlbGVtZW50LCB0eXBlLCBmdW5jLCBub25QYXNzaXZlLCBjYXB0dXJlKSB7XG4gIHJldHVybiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZnVuYywge1xuICAgIHBhc3NpdmU6ICFub25QYXNzaXZlLFxuICAgIGNhcHR1cmU6ICEhY2FwdHVyZVxuICB9KTtcbn0sXG4gICAgX3JlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gX3JlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIHR5cGUsIGZ1bmMsIGNhcHR1cmUpIHtcbiAgcmV0dXJuIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmdW5jLCAhIWNhcHR1cmUpO1xufSxcbiAgICBfc2Nyb2xsTGVmdCA9IFwic2Nyb2xsTGVmdFwiLFxuICAgIF9zY3JvbGxUb3AgPSBcInNjcm9sbFRvcFwiLFxuICAgIF9vblNjcm9sbCA9IGZ1bmN0aW9uIF9vblNjcm9sbCgpIHtcbiAgcmV0dXJuIF9ub3JtYWxpemVyICYmIF9ub3JtYWxpemVyLmlzUHJlc3NlZCB8fCBfc2Nyb2xsZXJzLmNhY2hlKys7XG59LFxuICAgIF9zY3JvbGxDYWNoZUZ1bmMgPSBmdW5jdGlvbiBfc2Nyb2xsQ2FjaGVGdW5jKGYsIGRvTm90Q2FjaGUpIHtcbiAgdmFyIGNhY2hpbmdGdW5jID0gZnVuY3Rpb24gY2FjaGluZ0Z1bmModmFsdWUpIHtcbiAgICAvLyBzaW5jZSByZWFkaW5nIHRoZSBzY3JvbGxUb3Avc2Nyb2xsTGVmdC9wYWdlT2Zmc2V0WS9wYWdlT2Zmc2V0WCBjYW4gdHJpZ2dlciBhIGxheW91dCwgdGhpcyBmdW5jdGlvbiBhbGxvd3MgdXMgdG8gY2FjaGUgdGhlIHZhbHVlIHNvIGl0IG9ubHkgZ2V0cyByZWFkIGZyZXNoIGFmdGVyIGEgXCJzY3JvbGxcIiBldmVudCBmaXJlcyAob3Igd2hpbGUgd2UncmUgcmVmcmVzaGluZyBiZWNhdXNlIHRoYXQgY2FuIGxlbmd0aGVuIHRoZSBwYWdlIGFuZCBhbHRlciB0aGUgc2Nyb2xsIHBvc2l0aW9uKS4gd2hlbiBcInNvZnRcIiBpcyB0cnVlLCB0aGF0IG1lYW5zIGRvbid0IGFjdHVhbGx5IHNldCB0aGUgc2Nyb2xsLCBidXQgY2FjaGUgdGhlIG5ldyB2YWx1ZSBpbnN0ZWFkICh1c2VmdWwgaW4gU2Nyb2xsU21vb3RoZXIpXG4gICAgaWYgKHZhbHVlIHx8IHZhbHVlID09PSAwKSB7XG4gICAgICBfc3RhcnR1cCAmJiAoX3dpbi5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gXCJtYW51YWxcIik7IC8vIG90aGVyd2lzZSB0aGUgbmV3IHBvc2l0aW9uIHdpbGwgZ2V0IG92ZXJ3cml0dGVuIGJ5IHRoZSBicm93c2VyIG9ubG9hZC5cblxuICAgICAgdmFyIGlzTm9ybWFsaXppbmcgPSBfbm9ybWFsaXplciAmJiBfbm9ybWFsaXplci5pc1ByZXNzZWQ7XG4gICAgICB2YWx1ZSA9IGNhY2hpbmdGdW5jLnYgPSBNYXRoLnJvdW5kKHZhbHVlKSB8fCAoX25vcm1hbGl6ZXIgJiYgX25vcm1hbGl6ZXIuaU9TID8gMSA6IDApOyAvL1RPRE86IGlPUyBCdWc6IGlmIHlvdSBhbGxvdyBpdCB0byBnbyB0byAwLCBTYWZhcmkgY2FuIHN0YXJ0IHRvIHJlcG9ydCBzdXBlciBzdHJhbmdlICh3aWxkbHkgaW5hY2N1cmF0ZSkgdG91Y2ggcG9zaXRpb25zIVxuXG4gICAgICBmKHZhbHVlKTtcbiAgICAgIGNhY2hpbmdGdW5jLmNhY2hlSUQgPSBfc2Nyb2xsZXJzLmNhY2hlO1xuICAgICAgaXNOb3JtYWxpemluZyAmJiBfYnJpZGdlKFwic3NcIiwgdmFsdWUpOyAvLyBzZXQgc2Nyb2xsIChub3RpZnkgU2Nyb2xsVHJpZ2dlciBzbyBpdCBjYW4gZGlzcGF0Y2ggYSBcInNjcm9sbFN0YXJ0XCIgZXZlbnQgaWYgbmVjZXNzYXJ5XG4gICAgfSBlbHNlIGlmIChkb05vdENhY2hlIHx8IF9zY3JvbGxlcnMuY2FjaGUgIT09IGNhY2hpbmdGdW5jLmNhY2hlSUQgfHwgX2JyaWRnZShcInJlZlwiKSkge1xuICAgICAgY2FjaGluZ0Z1bmMuY2FjaGVJRCA9IF9zY3JvbGxlcnMuY2FjaGU7XG4gICAgICBjYWNoaW5nRnVuYy52ID0gZigpO1xuICAgIH1cblxuICAgIHJldHVybiBjYWNoaW5nRnVuYy52ICsgY2FjaGluZ0Z1bmMub2Zmc2V0O1xuICB9O1xuXG4gIGNhY2hpbmdGdW5jLm9mZnNldCA9IDA7XG4gIHJldHVybiBmICYmIGNhY2hpbmdGdW5jO1xufSxcbiAgICBfaG9yaXpvbnRhbCA9IHtcbiAgczogX3Njcm9sbExlZnQsXG4gIHA6IFwibGVmdFwiLFxuICBwMjogXCJMZWZ0XCIsXG4gIG9zOiBcInJpZ2h0XCIsXG4gIG9zMjogXCJSaWdodFwiLFxuICBkOiBcIndpZHRoXCIsXG4gIGQyOiBcIldpZHRoXCIsXG4gIGE6IFwieFwiLFxuICBzYzogX3Njcm9sbENhY2hlRnVuYyhmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IF93aW4uc2Nyb2xsVG8odmFsdWUsIF92ZXJ0aWNhbC5zYygpKSA6IF93aW4ucGFnZVhPZmZzZXQgfHwgX2RvY1tfc2Nyb2xsTGVmdF0gfHwgX2RvY0VsW19zY3JvbGxMZWZ0XSB8fCBfYm9keVtfc2Nyb2xsTGVmdF0gfHwgMDtcbiAgfSlcbn0sXG4gICAgX3ZlcnRpY2FsID0ge1xuICBzOiBfc2Nyb2xsVG9wLFxuICBwOiBcInRvcFwiLFxuICBwMjogXCJUb3BcIixcbiAgb3M6IFwiYm90dG9tXCIsXG4gIG9zMjogXCJCb3R0b21cIixcbiAgZDogXCJoZWlnaHRcIixcbiAgZDI6IFwiSGVpZ2h0XCIsXG4gIGE6IFwieVwiLFxuICBvcDogX2hvcml6b250YWwsXG4gIHNjOiBfc2Nyb2xsQ2FjaGVGdW5jKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gX3dpbi5zY3JvbGxUbyhfaG9yaXpvbnRhbC5zYygpLCB2YWx1ZSkgOiBfd2luLnBhZ2VZT2Zmc2V0IHx8IF9kb2NbX3Njcm9sbFRvcF0gfHwgX2RvY0VsW19zY3JvbGxUb3BdIHx8IF9ib2R5W19zY3JvbGxUb3BdIHx8IDA7XG4gIH0pXG59LFxuICAgIF9nZXRUYXJnZXQgPSBmdW5jdGlvbiBfZ2V0VGFyZ2V0KHQsIHNlbGYpIHtcbiAgcmV0dXJuIChzZWxmICYmIHNlbGYuX2N0eCAmJiBzZWxmLl9jdHguc2VsZWN0b3IgfHwgZ3NhcC51dGlscy50b0FycmF5KSh0KVswXSB8fCAodHlwZW9mIHQgPT09IFwic3RyaW5nXCIgJiYgZ3NhcC5jb25maWcoKS5udWxsVGFyZ2V0V2FybiAhPT0gZmFsc2UgPyBjb25zb2xlLndhcm4oXCJFbGVtZW50IG5vdCBmb3VuZDpcIiwgdCkgOiBudWxsKTtcbn0sXG4gICAgX2dldFNjcm9sbEZ1bmMgPSBmdW5jdGlvbiBfZ2V0U2Nyb2xsRnVuYyhlbGVtZW50LCBfcmVmKSB7XG4gIHZhciBzID0gX3JlZi5zLFxuICAgICAgc2MgPSBfcmVmLnNjO1xuICAvLyB3ZSBzdG9yZSB0aGUgc2Nyb2xsZXIgZnVuY3Rpb25zIGluIGFuIGFsdGVybmF0aW5nIHNlcXVlbmNlZCBBcnJheSBsaWtlIFtlbGVtZW50LCB2ZXJ0aWNhbFNjcm9sbEZ1bmMsIGhvcml6b250YWxTY3JvbGxGdW5jLCAuLi5dIHNvIHRoYXQgd2UgY2FuIG1pbmltaXplIG1lbW9yeSwgbWF4aW1pemUgcGVyZm9ybWFuY2UsIGFuZCB3ZSBhbHNvIHJlY29yZCB0aGUgbGFzdCBwb3NpdGlvbiBhcyBhIFwiLnJlY1wiIHByb3BlcnR5IGluIG9yZGVyIHRvIHJldmVydCB0byB0aGF0IGFmdGVyIHJlZnJlc2hpbmcgdG8gZW5zdXJlIHRoaW5ncyBkb24ndCBzaGlmdCBhcm91bmQuXG4gIF9pc1ZpZXdwb3J0KGVsZW1lbnQpICYmIChlbGVtZW50ID0gX2RvYy5zY3JvbGxpbmdFbGVtZW50IHx8IF9kb2NFbCk7XG5cbiAgdmFyIGkgPSBfc2Nyb2xsZXJzLmluZGV4T2YoZWxlbWVudCksXG4gICAgICBvZmZzZXQgPSBzYyA9PT0gX3ZlcnRpY2FsLnNjID8gMSA6IDI7XG5cbiAgIX5pICYmIChpID0gX3Njcm9sbGVycy5wdXNoKGVsZW1lbnQpIC0gMSk7XG4gIF9zY3JvbGxlcnNbaSArIG9mZnNldF0gfHwgX2FkZExpc3RlbmVyKGVsZW1lbnQsIFwic2Nyb2xsXCIsIF9vblNjcm9sbCk7IC8vIGNsZWFyIHRoZSBjYWNoZSB3aGVuIGEgc2Nyb2xsIG9jY3Vyc1xuXG4gIHZhciBwcmV2ID0gX3Njcm9sbGVyc1tpICsgb2Zmc2V0XSxcbiAgICAgIGZ1bmMgPSBwcmV2IHx8IChfc2Nyb2xsZXJzW2kgKyBvZmZzZXRdID0gX3Njcm9sbENhY2hlRnVuYyhfZ2V0UHJveHlQcm9wKGVsZW1lbnQsIHMpLCB0cnVlKSB8fCAoX2lzVmlld3BvcnQoZWxlbWVudCkgPyBzYyA6IF9zY3JvbGxDYWNoZUZ1bmMoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyBlbGVtZW50W3NdID0gdmFsdWUgOiBlbGVtZW50W3NdO1xuICB9KSkpO1xuICBmdW5jLnRhcmdldCA9IGVsZW1lbnQ7XG4gIHByZXYgfHwgKGZ1bmMuc21vb3RoID0gZ3NhcC5nZXRQcm9wZXJ0eShlbGVtZW50LCBcInNjcm9sbEJlaGF2aW9yXCIpID09PSBcInNtb290aFwiKTsgLy8gb25seSBzZXQgaXQgdGhlIGZpcnN0IHRpbWUgKGRvbid0IHJlc2V0IGV2ZXJ5IHRpbWUgYSBzY3JvbGxGdW5jIGlzIHJlcXVlc3RlZCBiZWNhdXNlIHBlcmhhcHMgaXQgaGFwcGVucyBkdXJpbmcgYSByZWZyZXNoKCkgd2hlbiBpdCdzIGRpc2FibGVkIGluIFNjcm9sbFRyaWdnZXIuXG5cbiAgcmV0dXJuIGZ1bmM7XG59LFxuICAgIF9nZXRWZWxvY2l0eVByb3AgPSBmdW5jdGlvbiBfZ2V0VmVsb2NpdHlQcm9wKHZhbHVlLCBtaW5UaW1lUmVmcmVzaCwgdXNlRGVsdGEpIHtcbiAgdmFyIHYxID0gdmFsdWUsXG4gICAgICB2MiA9IHZhbHVlLFxuICAgICAgdDEgPSBfZ2V0VGltZSgpLFxuICAgICAgdDIgPSB0MSxcbiAgICAgIG1pbiA9IG1pblRpbWVSZWZyZXNoIHx8IDUwLFxuICAgICAgZHJvcFRvWmVyb1RpbWUgPSBNYXRoLm1heCg1MDAsIG1pbiAqIDMpLFxuICAgICAgdXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKHZhbHVlLCBmb3JjZSkge1xuICAgIHZhciB0ID0gX2dldFRpbWUoKTtcblxuICAgIGlmIChmb3JjZSB8fCB0IC0gdDEgPiBtaW4pIHtcbiAgICAgIHYyID0gdjE7XG4gICAgICB2MSA9IHZhbHVlO1xuICAgICAgdDIgPSB0MTtcbiAgICAgIHQxID0gdDtcbiAgICB9IGVsc2UgaWYgKHVzZURlbHRhKSB7XG4gICAgICB2MSArPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbm90IHRvdGFsbHkgbmVjZXNzYXJ5LCBidXQgbWFrZXMgaXQgYSBiaXQgbW9yZSBhY2N1cmF0ZSBieSBhZGp1c3RpbmcgdGhlIHYxIHZhbHVlIGFjY29yZGluZyB0byB0aGUgbmV3IHNsb3BlLiBUaGlzIHdheSB3ZSdyZSBub3QganVzdCBpZ25vcmluZyB0aGUgaW5jb21pbmcgZGF0YS4gUmVtb3ZpbmcgZm9yIG5vdyBiZWNhdXNlIGl0IGRvZXNuJ3Qgc2VlbSB0byBtYWtlIG11Y2ggcHJhY3RpY2FsIGRpZmZlcmVuY2UgYW5kIGl0J3MgcHJvYmFibHkgbm90IHdvcnRoIHRoZSBrYi5cbiAgICAgIHYxID0gdjIgKyAodmFsdWUgLSB2MikgLyAodCAtIHQyKSAqICh0MSAtIHQyKTtcbiAgICB9XG4gIH0sXG4gICAgICByZXNldCA9IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHYyID0gdjEgPSB1c2VEZWx0YSA/IDAgOiB2MTtcbiAgICB0MiA9IHQxID0gMDtcbiAgfSxcbiAgICAgIGdldFZlbG9jaXR5ID0gZnVuY3Rpb24gZ2V0VmVsb2NpdHkobGF0ZXN0VmFsdWUpIHtcbiAgICB2YXIgdE9sZCA9IHQyLFxuICAgICAgICB2T2xkID0gdjIsXG4gICAgICAgIHQgPSBfZ2V0VGltZSgpO1xuXG4gICAgKGxhdGVzdFZhbHVlIHx8IGxhdGVzdFZhbHVlID09PSAwKSAmJiBsYXRlc3RWYWx1ZSAhPT0gdjEgJiYgdXBkYXRlKGxhdGVzdFZhbHVlKTtcbiAgICByZXR1cm4gdDEgPT09IHQyIHx8IHQgLSB0MiA+IGRyb3BUb1plcm9UaW1lID8gMCA6ICh2MSArICh1c2VEZWx0YSA/IHZPbGQgOiAtdk9sZCkpIC8gKCh1c2VEZWx0YSA/IHQgOiB0MSkgLSB0T2xkKSAqIDEwMDA7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IHVwZGF0ZSxcbiAgICByZXNldDogcmVzZXQsXG4gICAgZ2V0VmVsb2NpdHk6IGdldFZlbG9jaXR5XG4gIH07XG59LFxuICAgIF9nZXRFdmVudCA9IGZ1bmN0aW9uIF9nZXRFdmVudChlLCBwcmV2ZW50RGVmYXVsdCkge1xuICBwcmV2ZW50RGVmYXVsdCAmJiAhZS5fZ3NhcEFsbG93ICYmIGUucHJldmVudERlZmF1bHQoKTtcbiAgcmV0dXJuIGUuY2hhbmdlZFRvdWNoZXMgPyBlLmNoYW5nZWRUb3VjaGVzWzBdIDogZTtcbn0sXG4gICAgX2dldEFic29sdXRlTWF4ID0gZnVuY3Rpb24gX2dldEFic29sdXRlTWF4KGEpIHtcbiAgdmFyIG1heCA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIGEpLFxuICAgICAgbWluID0gTWF0aC5taW4uYXBwbHkoTWF0aCwgYSk7XG4gIHJldHVybiBNYXRoLmFicyhtYXgpID49IE1hdGguYWJzKG1pbikgPyBtYXggOiBtaW47XG59LFxuICAgIF9zZXRTY3JvbGxUcmlnZ2VyID0gZnVuY3Rpb24gX3NldFNjcm9sbFRyaWdnZXIoKSB7XG4gIFNjcm9sbFRyaWdnZXIgPSBnc2FwLmNvcmUuZ2xvYmFscygpLlNjcm9sbFRyaWdnZXI7XG4gIFNjcm9sbFRyaWdnZXIgJiYgU2Nyb2xsVHJpZ2dlci5jb3JlICYmIF9pbnRlZ3JhdGUoKTtcbn0sXG4gICAgX2luaXRDb3JlID0gZnVuY3Rpb24gX2luaXRDb3JlKGNvcmUpIHtcbiAgZ3NhcCA9IGNvcmUgfHwgX2dldEdTQVAoKTtcblxuICBpZiAoZ3NhcCAmJiB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnQuYm9keSkge1xuICAgIF93aW4gPSB3aW5kb3c7XG4gICAgX2RvYyA9IGRvY3VtZW50O1xuICAgIF9kb2NFbCA9IF9kb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgIF9ib2R5ID0gX2RvYy5ib2R5O1xuICAgIF9yb290ID0gW193aW4sIF9kb2MsIF9kb2NFbCwgX2JvZHldO1xuICAgIF9jbGFtcCA9IGdzYXAudXRpbHMuY2xhbXA7XG5cbiAgICBfY29udGV4dCA9IGdzYXAuY29yZS5jb250ZXh0IHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgX3BvaW50ZXJUeXBlID0gXCJvbnBvaW50ZXJlbnRlclwiIGluIF9ib2R5ID8gXCJwb2ludGVyXCIgOiBcIm1vdXNlXCI7IC8vIGlzVG91Y2ggaXMgMCBpZiBubyB0b3VjaCwgMSBpZiBPTkxZIHRvdWNoLCBhbmQgMiBpZiBpdCBjYW4gYWNjb21tb2RhdGUgdG91Y2ggYnV0IGFsc28gb3RoZXIgdHlwZXMgbGlrZSBtb3VzZS9wb2ludGVyLlxuXG4gICAgX2lzVG91Y2ggPSBPYnNlcnZlci5pc1RvdWNoID0gX3dpbi5tYXRjaE1lZGlhICYmIF93aW4ubWF0Y2hNZWRpYShcIihob3Zlcjogbm9uZSksIChwb2ludGVyOiBjb2Fyc2UpXCIpLm1hdGNoZXMgPyAxIDogXCJvbnRvdWNoc3RhcnRcIiBpbiBfd2luIHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDAgfHwgbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgPiAwID8gMiA6IDA7XG4gICAgX2V2ZW50VHlwZXMgPSBPYnNlcnZlci5ldmVudFR5cGVzID0gKFwib250b3VjaHN0YXJ0XCIgaW4gX2RvY0VsID8gXCJ0b3VjaHN0YXJ0LHRvdWNobW92ZSx0b3VjaGNhbmNlbCx0b3VjaGVuZFwiIDogIShcIm9ucG9pbnRlcmRvd25cIiBpbiBfZG9jRWwpID8gXCJtb3VzZWRvd24sbW91c2Vtb3ZlLG1vdXNldXAsbW91c2V1cFwiIDogXCJwb2ludGVyZG93bixwb2ludGVybW92ZSxwb2ludGVyY2FuY2VsLHBvaW50ZXJ1cFwiKS5zcGxpdChcIixcIik7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3N0YXJ0dXAgPSAwO1xuICAgIH0sIDUwMCk7XG5cbiAgICBfc2V0U2Nyb2xsVHJpZ2dlcigpO1xuXG4gICAgX2NvcmVJbml0dGVkID0gMTtcbiAgfVxuXG4gIHJldHVybiBfY29yZUluaXR0ZWQ7XG59O1xuXG5faG9yaXpvbnRhbC5vcCA9IF92ZXJ0aWNhbDtcbl9zY3JvbGxlcnMuY2FjaGUgPSAwO1xuZXhwb3J0IHZhciBPYnNlcnZlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE9ic2VydmVyKHZhcnMpIHtcbiAgICB0aGlzLmluaXQodmFycyk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gT2JzZXJ2ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5pbml0ID0gZnVuY3Rpb24gaW5pdCh2YXJzKSB7XG4gICAgX2NvcmVJbml0dGVkIHx8IF9pbml0Q29yZShnc2FwKSB8fCBjb25zb2xlLndhcm4oXCJQbGVhc2UgZ3NhcC5yZWdpc3RlclBsdWdpbihPYnNlcnZlcilcIik7XG4gICAgU2Nyb2xsVHJpZ2dlciB8fCBfc2V0U2Nyb2xsVHJpZ2dlcigpO1xuICAgIHZhciB0b2xlcmFuY2UgPSB2YXJzLnRvbGVyYW5jZSxcbiAgICAgICAgZHJhZ01pbmltdW0gPSB2YXJzLmRyYWdNaW5pbXVtLFxuICAgICAgICB0eXBlID0gdmFycy50eXBlLFxuICAgICAgICB0YXJnZXQgPSB2YXJzLnRhcmdldCxcbiAgICAgICAgbGluZUhlaWdodCA9IHZhcnMubGluZUhlaWdodCxcbiAgICAgICAgZGVib3VuY2UgPSB2YXJzLmRlYm91bmNlLFxuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IHZhcnMucHJldmVudERlZmF1bHQsXG4gICAgICAgIG9uU3RvcCA9IHZhcnMub25TdG9wLFxuICAgICAgICBvblN0b3BEZWxheSA9IHZhcnMub25TdG9wRGVsYXksXG4gICAgICAgIGlnbm9yZSA9IHZhcnMuaWdub3JlLFxuICAgICAgICB3aGVlbFNwZWVkID0gdmFycy53aGVlbFNwZWVkLFxuICAgICAgICBldmVudCA9IHZhcnMuZXZlbnQsXG4gICAgICAgIG9uRHJhZ1N0YXJ0ID0gdmFycy5vbkRyYWdTdGFydCxcbiAgICAgICAgb25EcmFnRW5kID0gdmFycy5vbkRyYWdFbmQsXG4gICAgICAgIG9uRHJhZyA9IHZhcnMub25EcmFnLFxuICAgICAgICBvblByZXNzID0gdmFycy5vblByZXNzLFxuICAgICAgICBvblJlbGVhc2UgPSB2YXJzLm9uUmVsZWFzZSxcbiAgICAgICAgb25SaWdodCA9IHZhcnMub25SaWdodCxcbiAgICAgICAgb25MZWZ0ID0gdmFycy5vbkxlZnQsXG4gICAgICAgIG9uVXAgPSB2YXJzLm9uVXAsXG4gICAgICAgIG9uRG93biA9IHZhcnMub25Eb3duLFxuICAgICAgICBvbkNoYW5nZVggPSB2YXJzLm9uQ2hhbmdlWCxcbiAgICAgICAgb25DaGFuZ2VZID0gdmFycy5vbkNoYW5nZVksXG4gICAgICAgIG9uQ2hhbmdlID0gdmFycy5vbkNoYW5nZSxcbiAgICAgICAgb25Ub2dnbGVYID0gdmFycy5vblRvZ2dsZVgsXG4gICAgICAgIG9uVG9nZ2xlWSA9IHZhcnMub25Ub2dnbGVZLFxuICAgICAgICBvbkhvdmVyID0gdmFycy5vbkhvdmVyLFxuICAgICAgICBvbkhvdmVyRW5kID0gdmFycy5vbkhvdmVyRW5kLFxuICAgICAgICBvbk1vdmUgPSB2YXJzLm9uTW92ZSxcbiAgICAgICAgaWdub3JlQ2hlY2sgPSB2YXJzLmlnbm9yZUNoZWNrLFxuICAgICAgICBpc05vcm1hbGl6ZXIgPSB2YXJzLmlzTm9ybWFsaXplcixcbiAgICAgICAgb25HZXN0dXJlU3RhcnQgPSB2YXJzLm9uR2VzdHVyZVN0YXJ0LFxuICAgICAgICBvbkdlc3R1cmVFbmQgPSB2YXJzLm9uR2VzdHVyZUVuZCxcbiAgICAgICAgb25XaGVlbCA9IHZhcnMub25XaGVlbCxcbiAgICAgICAgb25FbmFibGUgPSB2YXJzLm9uRW5hYmxlLFxuICAgICAgICBvbkRpc2FibGUgPSB2YXJzLm9uRGlzYWJsZSxcbiAgICAgICAgb25DbGljayA9IHZhcnMub25DbGljayxcbiAgICAgICAgc2Nyb2xsU3BlZWQgPSB2YXJzLnNjcm9sbFNwZWVkLFxuICAgICAgICBjYXB0dXJlID0gdmFycy5jYXB0dXJlLFxuICAgICAgICBhbGxvd0NsaWNrcyA9IHZhcnMuYWxsb3dDbGlja3MsXG4gICAgICAgIGxvY2tBeGlzID0gdmFycy5sb2NrQXhpcyxcbiAgICAgICAgb25Mb2NrQXhpcyA9IHZhcnMub25Mb2NrQXhpcztcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldCA9IF9nZXRUYXJnZXQodGFyZ2V0KSB8fCBfZG9jRWw7XG4gICAgdGhpcy52YXJzID0gdmFycztcbiAgICBpZ25vcmUgJiYgKGlnbm9yZSA9IGdzYXAudXRpbHMudG9BcnJheShpZ25vcmUpKTtcbiAgICB0b2xlcmFuY2UgPSB0b2xlcmFuY2UgfHwgMWUtOTtcbiAgICBkcmFnTWluaW11bSA9IGRyYWdNaW5pbXVtIHx8IDA7XG4gICAgd2hlZWxTcGVlZCA9IHdoZWVsU3BlZWQgfHwgMTtcbiAgICBzY3JvbGxTcGVlZCA9IHNjcm9sbFNwZWVkIHx8IDE7XG4gICAgdHlwZSA9IHR5cGUgfHwgXCJ3aGVlbCx0b3VjaCxwb2ludGVyXCI7XG4gICAgZGVib3VuY2UgPSBkZWJvdW5jZSAhPT0gZmFsc2U7XG4gICAgbGluZUhlaWdodCB8fCAobGluZUhlaWdodCA9IHBhcnNlRmxvYXQoX3dpbi5nZXRDb21wdXRlZFN0eWxlKF9ib2R5KS5saW5lSGVpZ2h0KSB8fCAyMik7IC8vIG5vdGU6IGJyb3dzZXIgbWF5IHJlcG9ydCBcIm5vcm1hbFwiLCBzbyBkZWZhdWx0IHRvIDIyLlxuXG4gICAgdmFyIGlkLFxuICAgICAgICBvblN0b3BEZWxheWVkQ2FsbCxcbiAgICAgICAgZHJhZ2dlZCxcbiAgICAgICAgbW92ZWQsXG4gICAgICAgIHdoZWVsZWQsXG4gICAgICAgIGxvY2tlZCxcbiAgICAgICAgYXhpcyxcbiAgICAgICAgc2VsZiA9IHRoaXMsXG4gICAgICAgIHByZXZEZWx0YVggPSAwLFxuICAgICAgICBwcmV2RGVsdGFZID0gMCxcbiAgICAgICAgc2Nyb2xsRnVuY1ggPSBfZ2V0U2Nyb2xsRnVuYyh0YXJnZXQsIF9ob3Jpem9udGFsKSxcbiAgICAgICAgc2Nyb2xsRnVuY1kgPSBfZ2V0U2Nyb2xsRnVuYyh0YXJnZXQsIF92ZXJ0aWNhbCksXG4gICAgICAgIHNjcm9sbFggPSBzY3JvbGxGdW5jWCgpLFxuICAgICAgICBzY3JvbGxZID0gc2Nyb2xsRnVuY1koKSxcbiAgICAgICAgbGltaXRUb1RvdWNoID0gfnR5cGUuaW5kZXhPZihcInRvdWNoXCIpICYmICF+dHlwZS5pbmRleE9mKFwicG9pbnRlclwiKSAmJiBfZXZlbnRUeXBlc1swXSA9PT0gXCJwb2ludGVyZG93blwiLFxuICAgICAgICAvLyBmb3IgZGV2aWNlcyB0aGF0IGFjY29tbW9kYXRlIG1vdXNlIGV2ZW50cyBhbmQgdG91Y2ggZXZlbnRzLCB3ZSBuZWVkIHRvIGRpc3Rpbmd1aXNoLlxuICAgIGlzVmlld3BvcnQgPSBfaXNWaWV3cG9ydCh0YXJnZXQpLFxuICAgICAgICBvd25lckRvYyA9IHRhcmdldC5vd25lckRvY3VtZW50IHx8IF9kb2MsXG4gICAgICAgIGRlbHRhWCA9IFswLCAwLCAwXSxcbiAgICAgICAgLy8gd2hlZWwsIHNjcm9sbCwgcG9pbnRlci90b3VjaFxuICAgIGRlbHRhWSA9IFswLCAwLCAwXSxcbiAgICAgICAgb25DbGlja1RpbWUgPSAwLFxuICAgICAgICBjbGlja0NhcHR1cmUgPSBmdW5jdGlvbiBjbGlja0NhcHR1cmUoKSB7XG4gICAgICByZXR1cm4gb25DbGlja1RpbWUgPSBfZ2V0VGltZSgpO1xuICAgIH0sXG4gICAgICAgIF9pZ25vcmVDaGVjayA9IGZ1bmN0aW9uIF9pZ25vcmVDaGVjayhlLCBpc1BvaW50ZXJPclRvdWNoKSB7XG4gICAgICByZXR1cm4gKHNlbGYuZXZlbnQgPSBlKSAmJiBpZ25vcmUgJiYgfmlnbm9yZS5pbmRleE9mKGUudGFyZ2V0KSB8fCBpc1BvaW50ZXJPclRvdWNoICYmIGxpbWl0VG9Ub3VjaCAmJiBlLnBvaW50ZXJUeXBlICE9PSBcInRvdWNoXCIgfHwgaWdub3JlQ2hlY2sgJiYgaWdub3JlQ2hlY2soZSwgaXNQb2ludGVyT3JUb3VjaCk7XG4gICAgfSxcbiAgICAgICAgb25TdG9wRnVuYyA9IGZ1bmN0aW9uIG9uU3RvcEZ1bmMoKSB7XG4gICAgICBzZWxmLl92eC5yZXNldCgpO1xuXG4gICAgICBzZWxmLl92eS5yZXNldCgpO1xuXG4gICAgICBvblN0b3BEZWxheWVkQ2FsbC5wYXVzZSgpO1xuICAgICAgb25TdG9wICYmIG9uU3RvcChzZWxmKTtcbiAgICB9LFxuICAgICAgICB1cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICB2YXIgZHggPSBzZWxmLmRlbHRhWCA9IF9nZXRBYnNvbHV0ZU1heChkZWx0YVgpLFxuICAgICAgICAgIGR5ID0gc2VsZi5kZWx0YVkgPSBfZ2V0QWJzb2x1dGVNYXgoZGVsdGFZKSxcbiAgICAgICAgICBjaGFuZ2VkWCA9IE1hdGguYWJzKGR4KSA+PSB0b2xlcmFuY2UsXG4gICAgICAgICAgY2hhbmdlZFkgPSBNYXRoLmFicyhkeSkgPj0gdG9sZXJhbmNlO1xuXG4gICAgICBvbkNoYW5nZSAmJiAoY2hhbmdlZFggfHwgY2hhbmdlZFkpICYmIG9uQ2hhbmdlKHNlbGYsIGR4LCBkeSwgZGVsdGFYLCBkZWx0YVkpOyAvLyBpbiBTY3JvbGxUcmlnZ2VyLm5vcm1hbGl6ZVNjcm9sbCgpLCB3ZSBuZWVkIHRvIGtub3cgaWYgaXQgd2FzIHRvdWNoL3BvaW50ZXIgc28gd2UgbmVlZCBhY2Nlc3MgdG8gdGhlIGRlbHRhWC9kZWx0YVkgQXJyYXlzIGJlZm9yZSB3ZSBjbGVhciB0aGVtIG91dC5cblxuICAgICAgaWYgKGNoYW5nZWRYKSB7XG4gICAgICAgIG9uUmlnaHQgJiYgc2VsZi5kZWx0YVggPiAwICYmIG9uUmlnaHQoc2VsZik7XG4gICAgICAgIG9uTGVmdCAmJiBzZWxmLmRlbHRhWCA8IDAgJiYgb25MZWZ0KHNlbGYpO1xuICAgICAgICBvbkNoYW5nZVggJiYgb25DaGFuZ2VYKHNlbGYpO1xuICAgICAgICBvblRvZ2dsZVggJiYgc2VsZi5kZWx0YVggPCAwICE9PSBwcmV2RGVsdGFYIDwgMCAmJiBvblRvZ2dsZVgoc2VsZik7XG4gICAgICAgIHByZXZEZWx0YVggPSBzZWxmLmRlbHRhWDtcbiAgICAgICAgZGVsdGFYWzBdID0gZGVsdGFYWzFdID0gZGVsdGFYWzJdID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoYW5nZWRZKSB7XG4gICAgICAgIG9uRG93biAmJiBzZWxmLmRlbHRhWSA+IDAgJiYgb25Eb3duKHNlbGYpO1xuICAgICAgICBvblVwICYmIHNlbGYuZGVsdGFZIDwgMCAmJiBvblVwKHNlbGYpO1xuICAgICAgICBvbkNoYW5nZVkgJiYgb25DaGFuZ2VZKHNlbGYpO1xuICAgICAgICBvblRvZ2dsZVkgJiYgc2VsZi5kZWx0YVkgPCAwICE9PSBwcmV2RGVsdGFZIDwgMCAmJiBvblRvZ2dsZVkoc2VsZik7XG4gICAgICAgIHByZXZEZWx0YVkgPSBzZWxmLmRlbHRhWTtcbiAgICAgICAgZGVsdGFZWzBdID0gZGVsdGFZWzFdID0gZGVsdGFZWzJdID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKG1vdmVkIHx8IGRyYWdnZWQpIHtcbiAgICAgICAgb25Nb3ZlICYmIG9uTW92ZShzZWxmKTtcblxuICAgICAgICBpZiAoZHJhZ2dlZCkge1xuICAgICAgICAgIG9uRHJhZyhzZWxmKTtcbiAgICAgICAgICBkcmFnZ2VkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBtb3ZlZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBsb2NrZWQgJiYgIShsb2NrZWQgPSBmYWxzZSkgJiYgb25Mb2NrQXhpcyAmJiBvbkxvY2tBeGlzKHNlbGYpO1xuXG4gICAgICBpZiAod2hlZWxlZCkge1xuICAgICAgICBvbldoZWVsKHNlbGYpO1xuICAgICAgICB3aGVlbGVkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlkID0gMDtcbiAgICB9LFxuICAgICAgICBvbkRlbHRhID0gZnVuY3Rpb24gb25EZWx0YSh4LCB5LCBpbmRleCkge1xuICAgICAgZGVsdGFYW2luZGV4XSArPSB4O1xuICAgICAgZGVsdGFZW2luZGV4XSArPSB5O1xuXG4gICAgICBzZWxmLl92eC51cGRhdGUoeCk7XG5cbiAgICAgIHNlbGYuX3Z5LnVwZGF0ZSh5KTtcblxuICAgICAgZGVib3VuY2UgPyBpZCB8fCAoaWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKSkgOiB1cGRhdGUoKTtcbiAgICB9LFxuICAgICAgICBvblRvdWNoT3JQb2ludGVyRGVsdGEgPSBmdW5jdGlvbiBvblRvdWNoT3JQb2ludGVyRGVsdGEoeCwgeSkge1xuICAgICAgaWYgKGxvY2tBeGlzICYmICFheGlzKSB7XG4gICAgICAgIHNlbGYuYXhpcyA9IGF4aXMgPSBNYXRoLmFicyh4KSA+IE1hdGguYWJzKHkpID8gXCJ4XCIgOiBcInlcIjtcbiAgICAgICAgbG9ja2VkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGF4aXMgIT09IFwieVwiKSB7XG4gICAgICAgIGRlbHRhWFsyXSArPSB4O1xuXG4gICAgICAgIHNlbGYuX3Z4LnVwZGF0ZSh4LCB0cnVlKTsgLy8gdXBkYXRlIHRoZSB2ZWxvY2l0eSBhcyBmcmVxdWVudGx5IGFzIHBvc3NpYmxlIGluc3RlYWQgb2YgaW4gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiBzbyB0aGF0IHZlcnkgcXVpY2sgdG91Y2gtc2Nyb2xscyAoZmxpY2tzKSBmZWVsIG5hdHVyYWwuIElmIGl0J3MgdGhlIG1vdXNlL3RvdWNoL3BvaW50ZXIsIGZvcmNlIGl0IHNvIHRoYXQgd2UgZ2V0IHNuYXBweS9hY2N1cmF0ZSBtb21lbnR1bSBzY3JvbGwuXG5cbiAgICAgIH1cblxuICAgICAgaWYgKGF4aXMgIT09IFwieFwiKSB7XG4gICAgICAgIGRlbHRhWVsyXSArPSB5O1xuXG4gICAgICAgIHNlbGYuX3Z5LnVwZGF0ZSh5LCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgZGVib3VuY2UgPyBpZCB8fCAoaWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKSkgOiB1cGRhdGUoKTtcbiAgICB9LFxuICAgICAgICBfb25EcmFnID0gZnVuY3Rpb24gX29uRHJhZyhlKSB7XG4gICAgICBpZiAoX2lnbm9yZUNoZWNrKGUsIDEpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZSA9IF9nZXRFdmVudChlLCBwcmV2ZW50RGVmYXVsdCk7XG4gICAgICB2YXIgeCA9IGUuY2xpZW50WCxcbiAgICAgICAgICB5ID0gZS5jbGllbnRZLFxuICAgICAgICAgIGR4ID0geCAtIHNlbGYueCxcbiAgICAgICAgICBkeSA9IHkgLSBzZWxmLnksXG4gICAgICAgICAgaXNEcmFnZ2luZyA9IHNlbGYuaXNEcmFnZ2luZztcbiAgICAgIHNlbGYueCA9IHg7XG4gICAgICBzZWxmLnkgPSB5O1xuXG4gICAgICBpZiAoaXNEcmFnZ2luZyB8fCBNYXRoLmFicyhzZWxmLnN0YXJ0WCAtIHgpID49IGRyYWdNaW5pbXVtIHx8IE1hdGguYWJzKHNlbGYuc3RhcnRZIC0geSkgPj0gZHJhZ01pbmltdW0pIHtcbiAgICAgICAgb25EcmFnICYmIChkcmFnZ2VkID0gdHJ1ZSk7XG4gICAgICAgIGlzRHJhZ2dpbmcgfHwgKHNlbGYuaXNEcmFnZ2luZyA9IHRydWUpO1xuICAgICAgICBvblRvdWNoT3JQb2ludGVyRGVsdGEoZHgsIGR5KTtcbiAgICAgICAgaXNEcmFnZ2luZyB8fCBvbkRyYWdTdGFydCAmJiBvbkRyYWdTdGFydChzZWxmKTtcbiAgICAgIH1cbiAgICB9LFxuICAgICAgICBfb25QcmVzcyA9IHNlbGYub25QcmVzcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoX2lnbm9yZUNoZWNrKGUsIDEpIHx8IGUgJiYgZS5idXR0b24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZWxmLmF4aXMgPSBheGlzID0gbnVsbDtcbiAgICAgIG9uU3RvcERlbGF5ZWRDYWxsLnBhdXNlKCk7XG4gICAgICBzZWxmLmlzUHJlc3NlZCA9IHRydWU7XG4gICAgICBlID0gX2dldEV2ZW50KGUpOyAvLyBub3RlOiBtYXkgbmVlZCB0byBwcmV2ZW50RGVmYXVsdCg/KSBXb24ndCBzaWRlLXNjcm9sbCBvbiBpT1MgU2FmYXJpIGlmIHdlIGRvLCB0aG91Z2guXG5cbiAgICAgIHByZXZEZWx0YVggPSBwcmV2RGVsdGFZID0gMDtcbiAgICAgIHNlbGYuc3RhcnRYID0gc2VsZi54ID0gZS5jbGllbnRYO1xuICAgICAgc2VsZi5zdGFydFkgPSBzZWxmLnkgPSBlLmNsaWVudFk7XG5cbiAgICAgIHNlbGYuX3Z4LnJlc2V0KCk7IC8vIG90aGVyd2lzZSB0aGUgdDIgbWF5IGJlIHN0YWxlIGlmIHRoZSB1c2VyIHRvdWNoZXMgYW5kIGZsaWNrcyBzdXBlciBmYXN0IGFuZCByZWxlYXNlcyBpbiBsZXNzIHRoYW4gMiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgdGlja3MsIGNhdXNpbmcgdmVsb2NpdHkgdG8gYmUgMC5cblxuXG4gICAgICBzZWxmLl92eS5yZXNldCgpO1xuXG4gICAgICBfYWRkTGlzdGVuZXIoaXNOb3JtYWxpemVyID8gdGFyZ2V0IDogb3duZXJEb2MsIF9ldmVudFR5cGVzWzFdLCBfb25EcmFnLCBwcmV2ZW50RGVmYXVsdCwgdHJ1ZSk7XG5cbiAgICAgIHNlbGYuZGVsdGFYID0gc2VsZi5kZWx0YVkgPSAwO1xuICAgICAgb25QcmVzcyAmJiBvblByZXNzKHNlbGYpO1xuICAgIH0sXG4gICAgICAgIF9vblJlbGVhc2UgPSBzZWxmLm9uUmVsZWFzZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoX2lnbm9yZUNoZWNrKGUsIDEpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3JlbW92ZUxpc3RlbmVyKGlzTm9ybWFsaXplciA/IHRhcmdldCA6IG93bmVyRG9jLCBfZXZlbnRUeXBlc1sxXSwgX29uRHJhZywgdHJ1ZSk7XG5cbiAgICAgIHZhciBpc1RyYWNraW5nRHJhZyA9ICFpc05hTihzZWxmLnkgLSBzZWxmLnN0YXJ0WSksXG4gICAgICAgICAgd2FzRHJhZ2dpbmcgPSBzZWxmLmlzRHJhZ2dpbmcgJiYgKE1hdGguYWJzKHNlbGYueCAtIHNlbGYuc3RhcnRYKSA+IDMgfHwgTWF0aC5hYnMoc2VsZi55IC0gc2VsZi5zdGFydFkpID4gMyksXG4gICAgICAgICAgLy8gc29tZSB0b3VjaCBkZXZpY2VzIG5lZWQgc29tZSB3aWdnbGUgcm9vbSBpbiB0ZXJtcyBvZiBzZW5zaW5nIGNsaWNrcyAtIHRoZSBmaW5nZXIgbWF5IG1vdmUgYSBmZXcgcGl4ZWxzLlxuICAgICAgZXZlbnREYXRhID0gX2dldEV2ZW50KGUpO1xuXG4gICAgICBpZiAoIXdhc0RyYWdnaW5nICYmIGlzVHJhY2tpbmdEcmFnKSB7XG4gICAgICAgIHNlbGYuX3Z4LnJlc2V0KCk7XG5cbiAgICAgICAgc2VsZi5fdnkucmVzZXQoKTtcblxuICAgICAgICBpZiAocHJldmVudERlZmF1bHQgJiYgYWxsb3dDbGlja3MpIHtcbiAgICAgICAgICBnc2FwLmRlbGF5ZWRDYWxsKDAuMDgsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHNvbWUgYnJvd3NlcnMgKGxpa2UgRmlyZWZveCkgd29uJ3QgdHJ1c3Qgc2NyaXB0LWdlbmVyYXRlZCBjbGlja3MsIHNvIGlmIHRoZSB1c2VyIHRyaWVzIHRvIGNsaWNrIG9uIGEgdmlkZW8gdG8gcGxheSBpdCwgZm9yIGV4YW1wbGUsIGl0IHNpbXBseSB3b24ndCB3b3JrLiBTaW5jZSBhIHJlZ3VsYXIgXCJjbGlja1wiIGV2ZW50IHdpbGwgbW9zdCBsaWtlbHkgYmUgZ2VuZXJhdGVkIGFueXdheSAob25lIHRoYXQgaGFzIGl0cyBpc1RydXN0ZWQgZmxhZyBzZXQgdG8gdHJ1ZSksIHdlIG11c3Qgc2xpZ2h0bHkgZGVsYXkgb3VyIHNjcmlwdC1nZW5lcmF0ZWQgY2xpY2sgc28gdGhhdCB0aGUgXCJyZWFsXCIvdHJ1c3RlZCBvbmUgaXMgcHJpb3JpdGl6ZWQuIFJlbWVtYmVyLCB3aGVuIHRoZXJlIGFyZSBkdXBsaWNhdGUgZXZlbnRzIGluIHF1aWNrIHN1Y2Nlc3Npb24sIHdlIHN1cHByZXNzIGFsbCBidXQgdGhlIGZpcnN0IG9uZS4gU29tZSBicm93c2VycyBkb24ndCBldmVuIHRyaWdnZXIgdGhlIFwicmVhbFwiIG9uZSBhdCBhbGwsIHNvIG91ciBzeW50aGV0aWMgb25lIGlzIGEgc2FmZXR5IHZhbHZlIHRoYXQgZW5zdXJlcyB0aGF0IG5vIG1hdHRlciB3aGF0LCBhIGNsaWNrIGV2ZW50IGRvZXMgZ2V0IGRpc3BhdGNoZWQuXG4gICAgICAgICAgICBpZiAoX2dldFRpbWUoKSAtIG9uQ2xpY2tUaW1lID4gMzAwICYmICFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsaWNrKSB7XG4gICAgICAgICAgICAgICAgLy9zb21lIGJyb3dzZXJzIChsaWtlIG1vYmlsZSBTYWZhcmkpIGRvbid0IHByb3Blcmx5IHRyaWdnZXIgdGhlIGNsaWNrIGV2ZW50XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2xpY2soKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChvd25lckRvYy5jcmVhdGVFdmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBzeW50aGV0aWNFdmVudCA9IG93bmVyRG9jLmNyZWF0ZUV2ZW50KFwiTW91c2VFdmVudHNcIik7XG4gICAgICAgICAgICAgICAgc3ludGhldGljRXZlbnQuaW5pdE1vdXNlRXZlbnQoXCJjbGlja1wiLCB0cnVlLCB0cnVlLCBfd2luLCAxLCBldmVudERhdGEuc2NyZWVuWCwgZXZlbnREYXRhLnNjcmVlblksIGV2ZW50RGF0YS5jbGllbnRYLCBldmVudERhdGEuY2xpZW50WSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIDAsIG51bGwpO1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmRpc3BhdGNoRXZlbnQoc3ludGhldGljRXZlbnQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc2VsZi5pc0RyYWdnaW5nID0gc2VsZi5pc0dlc3R1cmluZyA9IHNlbGYuaXNQcmVzc2VkID0gZmFsc2U7XG4gICAgICBvblN0b3AgJiYgIWlzTm9ybWFsaXplciAmJiBvblN0b3BEZWxheWVkQ2FsbC5yZXN0YXJ0KHRydWUpO1xuICAgICAgb25EcmFnRW5kICYmIHdhc0RyYWdnaW5nICYmIG9uRHJhZ0VuZChzZWxmKTtcbiAgICAgIG9uUmVsZWFzZSAmJiBvblJlbGVhc2Uoc2VsZiwgd2FzRHJhZ2dpbmcpO1xuICAgIH0sXG4gICAgICAgIF9vbkdlc3R1cmVTdGFydCA9IGZ1bmN0aW9uIF9vbkdlc3R1cmVTdGFydChlKSB7XG4gICAgICByZXR1cm4gZS50b3VjaGVzICYmIGUudG91Y2hlcy5sZW5ndGggPiAxICYmIChzZWxmLmlzR2VzdHVyaW5nID0gdHJ1ZSkgJiYgb25HZXN0dXJlU3RhcnQoZSwgc2VsZi5pc0RyYWdnaW5nKTtcbiAgICB9LFxuICAgICAgICBfb25HZXN0dXJlRW5kID0gZnVuY3Rpb24gX29uR2VzdHVyZUVuZCgpIHtcbiAgICAgIHJldHVybiAoc2VsZi5pc0dlc3R1cmluZyA9IGZhbHNlKSB8fCBvbkdlc3R1cmVFbmQoc2VsZik7XG4gICAgfSxcbiAgICAgICAgb25TY3JvbGwgPSBmdW5jdGlvbiBvblNjcm9sbChlKSB7XG4gICAgICBpZiAoX2lnbm9yZUNoZWNrKGUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHggPSBzY3JvbGxGdW5jWCgpLFxuICAgICAgICAgIHkgPSBzY3JvbGxGdW5jWSgpO1xuICAgICAgb25EZWx0YSgoeCAtIHNjcm9sbFgpICogc2Nyb2xsU3BlZWQsICh5IC0gc2Nyb2xsWSkgKiBzY3JvbGxTcGVlZCwgMSk7XG4gICAgICBzY3JvbGxYID0geDtcbiAgICAgIHNjcm9sbFkgPSB5O1xuICAgICAgb25TdG9wICYmIG9uU3RvcERlbGF5ZWRDYWxsLnJlc3RhcnQodHJ1ZSk7XG4gICAgfSxcbiAgICAgICAgX29uV2hlZWwgPSBmdW5jdGlvbiBfb25XaGVlbChlKSB7XG4gICAgICBpZiAoX2lnbm9yZUNoZWNrKGUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZSA9IF9nZXRFdmVudChlLCBwcmV2ZW50RGVmYXVsdCk7XG4gICAgICBvbldoZWVsICYmICh3aGVlbGVkID0gdHJ1ZSk7XG4gICAgICB2YXIgbXVsdGlwbGllciA9IChlLmRlbHRhTW9kZSA9PT0gMSA/IGxpbmVIZWlnaHQgOiBlLmRlbHRhTW9kZSA9PT0gMiA/IF93aW4uaW5uZXJIZWlnaHQgOiAxKSAqIHdoZWVsU3BlZWQ7XG4gICAgICBvbkRlbHRhKGUuZGVsdGFYICogbXVsdGlwbGllciwgZS5kZWx0YVkgKiBtdWx0aXBsaWVyLCAwKTtcbiAgICAgIG9uU3RvcCAmJiAhaXNOb3JtYWxpemVyICYmIG9uU3RvcERlbGF5ZWRDYWxsLnJlc3RhcnQodHJ1ZSk7XG4gICAgfSxcbiAgICAgICAgX29uTW92ZSA9IGZ1bmN0aW9uIF9vbk1vdmUoZSkge1xuICAgICAgaWYgKF9pZ25vcmVDaGVjayhlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB4ID0gZS5jbGllbnRYLFxuICAgICAgICAgIHkgPSBlLmNsaWVudFksXG4gICAgICAgICAgZHggPSB4IC0gc2VsZi54LFxuICAgICAgICAgIGR5ID0geSAtIHNlbGYueTtcbiAgICAgIHNlbGYueCA9IHg7XG4gICAgICBzZWxmLnkgPSB5O1xuICAgICAgbW92ZWQgPSB0cnVlO1xuICAgICAgKGR4IHx8IGR5KSAmJiBvblRvdWNoT3JQb2ludGVyRGVsdGEoZHgsIGR5KTtcbiAgICB9LFxuICAgICAgICBfb25Ib3ZlciA9IGZ1bmN0aW9uIF9vbkhvdmVyKGUpIHtcbiAgICAgIHNlbGYuZXZlbnQgPSBlO1xuICAgICAgb25Ib3ZlcihzZWxmKTtcbiAgICB9LFxuICAgICAgICBfb25Ib3ZlckVuZCA9IGZ1bmN0aW9uIF9vbkhvdmVyRW5kKGUpIHtcbiAgICAgIHNlbGYuZXZlbnQgPSBlO1xuICAgICAgb25Ib3ZlckVuZChzZWxmKTtcbiAgICB9LFxuICAgICAgICBfb25DbGljayA9IGZ1bmN0aW9uIF9vbkNsaWNrKGUpIHtcbiAgICAgIHJldHVybiBfaWdub3JlQ2hlY2soZSkgfHwgX2dldEV2ZW50KGUsIHByZXZlbnREZWZhdWx0KSAmJiBvbkNsaWNrKHNlbGYpO1xuICAgIH07XG5cbiAgICBvblN0b3BEZWxheWVkQ2FsbCA9IHNlbGYuX2RjID0gZ3NhcC5kZWxheWVkQ2FsbChvblN0b3BEZWxheSB8fCAwLjI1LCBvblN0b3BGdW5jKS5wYXVzZSgpO1xuICAgIHNlbGYuZGVsdGFYID0gc2VsZi5kZWx0YVkgPSAwO1xuICAgIHNlbGYuX3Z4ID0gX2dldFZlbG9jaXR5UHJvcCgwLCA1MCwgdHJ1ZSk7XG4gICAgc2VsZi5fdnkgPSBfZ2V0VmVsb2NpdHlQcm9wKDAsIDUwLCB0cnVlKTtcbiAgICBzZWxmLnNjcm9sbFggPSBzY3JvbGxGdW5jWDtcbiAgICBzZWxmLnNjcm9sbFkgPSBzY3JvbGxGdW5jWTtcbiAgICBzZWxmLmlzRHJhZ2dpbmcgPSBzZWxmLmlzR2VzdHVyaW5nID0gc2VsZi5pc1ByZXNzZWQgPSBmYWxzZTtcblxuICAgIF9jb250ZXh0KHRoaXMpO1xuXG4gICAgc2VsZi5lbmFibGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKCFzZWxmLmlzRW5hYmxlZCkge1xuICAgICAgICBfYWRkTGlzdGVuZXIoaXNWaWV3cG9ydCA/IG93bmVyRG9jIDogdGFyZ2V0LCBcInNjcm9sbFwiLCBfb25TY3JvbGwpO1xuXG4gICAgICAgIHR5cGUuaW5kZXhPZihcInNjcm9sbFwiKSA+PSAwICYmIF9hZGRMaXN0ZW5lcihpc1ZpZXdwb3J0ID8gb3duZXJEb2MgOiB0YXJnZXQsIFwic2Nyb2xsXCIsIG9uU2Nyb2xsLCBwcmV2ZW50RGVmYXVsdCwgY2FwdHVyZSk7XG4gICAgICAgIHR5cGUuaW5kZXhPZihcIndoZWVsXCIpID49IDAgJiYgX2FkZExpc3RlbmVyKHRhcmdldCwgXCJ3aGVlbFwiLCBfb25XaGVlbCwgcHJldmVudERlZmF1bHQsIGNhcHR1cmUpO1xuXG4gICAgICAgIGlmICh0eXBlLmluZGV4T2YoXCJ0b3VjaFwiKSA+PSAwICYmIF9pc1RvdWNoIHx8IHR5cGUuaW5kZXhPZihcInBvaW50ZXJcIikgPj0gMCkge1xuICAgICAgICAgIF9hZGRMaXN0ZW5lcih0YXJnZXQsIF9ldmVudFR5cGVzWzBdLCBfb25QcmVzcywgcHJldmVudERlZmF1bHQsIGNhcHR1cmUpO1xuXG4gICAgICAgICAgX2FkZExpc3RlbmVyKG93bmVyRG9jLCBfZXZlbnRUeXBlc1syXSwgX29uUmVsZWFzZSk7XG5cbiAgICAgICAgICBfYWRkTGlzdGVuZXIob3duZXJEb2MsIF9ldmVudFR5cGVzWzNdLCBfb25SZWxlYXNlKTtcblxuICAgICAgICAgIGFsbG93Q2xpY2tzICYmIF9hZGRMaXN0ZW5lcih0YXJnZXQsIFwiY2xpY2tcIiwgY2xpY2tDYXB0dXJlLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgb25DbGljayAmJiBfYWRkTGlzdGVuZXIodGFyZ2V0LCBcImNsaWNrXCIsIF9vbkNsaWNrKTtcbiAgICAgICAgICBvbkdlc3R1cmVTdGFydCAmJiBfYWRkTGlzdGVuZXIob3duZXJEb2MsIFwiZ2VzdHVyZXN0YXJ0XCIsIF9vbkdlc3R1cmVTdGFydCk7XG4gICAgICAgICAgb25HZXN0dXJlRW5kICYmIF9hZGRMaXN0ZW5lcihvd25lckRvYywgXCJnZXN0dXJlZW5kXCIsIF9vbkdlc3R1cmVFbmQpO1xuICAgICAgICAgIG9uSG92ZXIgJiYgX2FkZExpc3RlbmVyKHRhcmdldCwgX3BvaW50ZXJUeXBlICsgXCJlbnRlclwiLCBfb25Ib3Zlcik7XG4gICAgICAgICAgb25Ib3ZlckVuZCAmJiBfYWRkTGlzdGVuZXIodGFyZ2V0LCBfcG9pbnRlclR5cGUgKyBcImxlYXZlXCIsIF9vbkhvdmVyRW5kKTtcbiAgICAgICAgICBvbk1vdmUgJiYgX2FkZExpc3RlbmVyKHRhcmdldCwgX3BvaW50ZXJUeXBlICsgXCJtb3ZlXCIsIF9vbk1vdmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5pc0VuYWJsZWQgPSB0cnVlO1xuICAgICAgICBlICYmIGUudHlwZSAmJiBfb25QcmVzcyhlKTtcbiAgICAgICAgb25FbmFibGUgJiYgb25FbmFibGUoc2VsZik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH07XG5cbiAgICBzZWxmLmRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoc2VsZi5pc0VuYWJsZWQpIHtcbiAgICAgICAgLy8gb25seSByZW1vdmUgdGhlIF9vblNjcm9sbCBsaXN0ZW5lciBpZiB0aGVyZSBhcmVuJ3QgYW55IG90aGVycyB0aGF0IHJlbHkgb24gdGhlIGZ1bmN0aW9uYWxpdHkuXG4gICAgICAgIF9vYnNlcnZlcnMuZmlsdGVyKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgcmV0dXJuIG8gIT09IHNlbGYgJiYgX2lzVmlld3BvcnQoby50YXJnZXQpO1xuICAgICAgICB9KS5sZW5ndGggfHwgX3JlbW92ZUxpc3RlbmVyKGlzVmlld3BvcnQgPyBvd25lckRvYyA6IHRhcmdldCwgXCJzY3JvbGxcIiwgX29uU2Nyb2xsKTtcblxuICAgICAgICBpZiAoc2VsZi5pc1ByZXNzZWQpIHtcbiAgICAgICAgICBzZWxmLl92eC5yZXNldCgpO1xuXG4gICAgICAgICAgc2VsZi5fdnkucmVzZXQoKTtcblxuICAgICAgICAgIF9yZW1vdmVMaXN0ZW5lcihpc05vcm1hbGl6ZXIgPyB0YXJnZXQgOiBvd25lckRvYywgX2V2ZW50VHlwZXNbMV0sIF9vbkRyYWcsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3JlbW92ZUxpc3RlbmVyKGlzVmlld3BvcnQgPyBvd25lckRvYyA6IHRhcmdldCwgXCJzY3JvbGxcIiwgb25TY3JvbGwsIGNhcHR1cmUpO1xuXG4gICAgICAgIF9yZW1vdmVMaXN0ZW5lcih0YXJnZXQsIFwid2hlZWxcIiwgX29uV2hlZWwsIGNhcHR1cmUpO1xuXG4gICAgICAgIF9yZW1vdmVMaXN0ZW5lcih0YXJnZXQsIF9ldmVudFR5cGVzWzBdLCBfb25QcmVzcywgY2FwdHVyZSk7XG5cbiAgICAgICAgX3JlbW92ZUxpc3RlbmVyKG93bmVyRG9jLCBfZXZlbnRUeXBlc1syXSwgX29uUmVsZWFzZSk7XG5cbiAgICAgICAgX3JlbW92ZUxpc3RlbmVyKG93bmVyRG9jLCBfZXZlbnRUeXBlc1szXSwgX29uUmVsZWFzZSk7XG5cbiAgICAgICAgX3JlbW92ZUxpc3RlbmVyKHRhcmdldCwgXCJjbGlja1wiLCBjbGlja0NhcHR1cmUsIHRydWUpO1xuXG4gICAgICAgIF9yZW1vdmVMaXN0ZW5lcih0YXJnZXQsIFwiY2xpY2tcIiwgX29uQ2xpY2spO1xuXG4gICAgICAgIF9yZW1vdmVMaXN0ZW5lcihvd25lckRvYywgXCJnZXN0dXJlc3RhcnRcIiwgX29uR2VzdHVyZVN0YXJ0KTtcblxuICAgICAgICBfcmVtb3ZlTGlzdGVuZXIob3duZXJEb2MsIFwiZ2VzdHVyZWVuZFwiLCBfb25HZXN0dXJlRW5kKTtcblxuICAgICAgICBfcmVtb3ZlTGlzdGVuZXIodGFyZ2V0LCBfcG9pbnRlclR5cGUgKyBcImVudGVyXCIsIF9vbkhvdmVyKTtcblxuICAgICAgICBfcmVtb3ZlTGlzdGVuZXIodGFyZ2V0LCBfcG9pbnRlclR5cGUgKyBcImxlYXZlXCIsIF9vbkhvdmVyRW5kKTtcblxuICAgICAgICBfcmVtb3ZlTGlzdGVuZXIodGFyZ2V0LCBfcG9pbnRlclR5cGUgKyBcIm1vdmVcIiwgX29uTW92ZSk7XG5cbiAgICAgICAgc2VsZi5pc0VuYWJsZWQgPSBzZWxmLmlzUHJlc3NlZCA9IHNlbGYuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICBvbkRpc2FibGUgJiYgb25EaXNhYmxlKHNlbGYpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzZWxmLmtpbGwgPSBzZWxmLnJldmVydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuZGlzYWJsZSgpO1xuXG4gICAgICB2YXIgaSA9IF9vYnNlcnZlcnMuaW5kZXhPZihzZWxmKTtcblxuICAgICAgaSA+PSAwICYmIF9vYnNlcnZlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgX25vcm1hbGl6ZXIgPT09IHNlbGYgJiYgKF9ub3JtYWxpemVyID0gMCk7XG4gICAgfTtcblxuICAgIF9vYnNlcnZlcnMucHVzaChzZWxmKTtcblxuICAgIGlzTm9ybWFsaXplciAmJiBfaXNWaWV3cG9ydCh0YXJnZXQpICYmIChfbm9ybWFsaXplciA9IHNlbGYpO1xuICAgIHNlbGYuZW5hYmxlKGV2ZW50KTtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoT2JzZXJ2ZXIsIFt7XG4gICAga2V5OiBcInZlbG9jaXR5WFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Z4LmdldFZlbG9jaXR5KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZlbG9jaXR5WVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Z5LmdldFZlbG9jaXR5KCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE9ic2VydmVyO1xufSgpO1xuT2JzZXJ2ZXIudmVyc2lvbiA9IFwiMy4xMi4yXCI7XG5cbk9ic2VydmVyLmNyZWF0ZSA9IGZ1bmN0aW9uICh2YXJzKSB7XG4gIHJldHVybiBuZXcgT2JzZXJ2ZXIodmFycyk7XG59O1xuXG5PYnNlcnZlci5yZWdpc3RlciA9IF9pbml0Q29yZTtcblxuT2JzZXJ2ZXIuZ2V0QWxsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX29ic2VydmVycy5zbGljZSgpO1xufTtcblxuT2JzZXJ2ZXIuZ2V0QnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICByZXR1cm4gX29ic2VydmVycy5maWx0ZXIoZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gby52YXJzLmlkID09PSBpZDtcbiAgfSlbMF07XG59O1xuXG5fZ2V0R1NBUCgpICYmIGdzYXAucmVnaXN0ZXJQbHVnaW4oT2JzZXJ2ZXIpO1xuZXhwb3J0IHsgT2JzZXJ2ZXIgYXMgZGVmYXVsdCwgX2lzVmlld3BvcnQsIF9zY3JvbGxlcnMsIF9nZXRTY3JvbGxGdW5jLCBfZ2V0UHJveHlQcm9wLCBfcHJveGllcywgX2dldFZlbG9jaXR5UHJvcCwgX3ZlcnRpY2FsLCBfaG9yaXpvbnRhbCwgX2dldFRhcmdldCB9OyIsIi8qIVxuICogU2Nyb2xsVHJpZ2dlciAzLjEyLjJcbiAqIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbVxuICpcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAyMDA4LTIwMjMsIEdyZWVuU29jay4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFN1YmplY3QgdG8gdGhlIHRlcm1zIGF0IGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9zdGFuZGFyZC1saWNlbnNlIG9yIGZvclxuICogQ2x1YiBHcmVlblNvY2sgbWVtYmVycywgdGhlIGFncmVlbWVudCBpc3N1ZWQgd2l0aCB0aGF0IG1lbWJlcnNoaXAuXG4gKiBAYXV0aG9yOiBKYWNrIERveWxlLCBqYWNrQGdyZWVuc29jay5jb21cbiovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBPYnNlcnZlciwgX2dldFRhcmdldCwgX3ZlcnRpY2FsLCBfaG9yaXpvbnRhbCwgX3Njcm9sbGVycywgX3Byb3hpZXMsIF9nZXRTY3JvbGxGdW5jLCBfZ2V0UHJveHlQcm9wLCBfZ2V0VmVsb2NpdHlQcm9wIH0gZnJvbSBcIi4vT2JzZXJ2ZXIuanNcIjtcblxudmFyIGdzYXAsXG4gICAgX2NvcmVJbml0dGVkLFxuICAgIF93aW4sXG4gICAgX2RvYyxcbiAgICBfZG9jRWwsXG4gICAgX2JvZHksXG4gICAgX3Jvb3QsXG4gICAgX3Jlc2l6ZURlbGF5LFxuICAgIF90b0FycmF5LFxuICAgIF9jbGFtcCxcbiAgICBfdGltZTIsXG4gICAgX3N5bmNJbnRlcnZhbCxcbiAgICBfcmVmcmVzaGluZyxcbiAgICBfcG9pbnRlcklzRG93bixcbiAgICBfdHJhbnNmb3JtUHJvcCxcbiAgICBfaSxcbiAgICBfcHJldldpZHRoLFxuICAgIF9wcmV2SGVpZ2h0LFxuICAgIF9hdXRvUmVmcmVzaCxcbiAgICBfc29ydCxcbiAgICBfc3VwcHJlc3NPdmVyd3JpdGVzLFxuICAgIF9pZ25vcmVSZXNpemUsXG4gICAgX25vcm1hbGl6ZXIsXG4gICAgX2lnbm9yZU1vYmlsZVJlc2l6ZSxcbiAgICBfYmFzZVNjcmVlbkhlaWdodCxcbiAgICBfYmFzZVNjcmVlbldpZHRoLFxuICAgIF9maXhJT1NCdWcsXG4gICAgX2NvbnRleHQsXG4gICAgX3Njcm9sbFJlc3RvcmF0aW9uLFxuICAgIF9kaXYxMDB2aCxcbiAgICBfMTAwdmgsXG4gICAgX2xpbWl0Q2FsbGJhY2tzLFxuICAgIC8vIGlmIHRydWUsIHdlJ2xsIG9ubHkgdHJpZ2dlciBjYWxsYmFja3MgaWYgdGhlIGFjdGl2ZSBzdGF0ZSB0b2dnbGVzLCBzbyBpZiB5b3Ugc2Nyb2xsIGltbWVkaWF0ZWx5IHBhc3QgYm90aCB0aGUgc3RhcnQgYW5kIGVuZCBwb3NpdGlvbnMgb2YgYSBTY3JvbGxUcmlnZ2VyICh0aHVzIGluYWN0aXZlIHRvIGluYWN0aXZlKSwgbmVpdGhlciBpdHMgb25FbnRlciBub3Igb25MZWF2ZSB3aWxsIGJlIGNhbGxlZC4gVGhpcyBpcyB1c2VmdWwgZHVyaW5nIHN0YXJ0dXAuXG5fc3RhcnR1cCA9IDEsXG4gICAgX2dldFRpbWUgPSBEYXRlLm5vdyxcbiAgICBfdGltZTEgPSBfZ2V0VGltZSgpLFxuICAgIF9sYXN0U2Nyb2xsVGltZSA9IDAsXG4gICAgX2VuYWJsZWQgPSAwLFxuICAgIF9wYXJzZUNsYW1wID0gZnVuY3Rpb24gX3BhcnNlQ2xhbXAodmFsdWUsIHR5cGUsIHNlbGYpIHtcbiAgdmFyIGNsYW1wID0gX2lzU3RyaW5nKHZhbHVlKSAmJiAodmFsdWUuc3Vic3RyKDAsIDYpID09PSBcImNsYW1wKFwiIHx8IHZhbHVlLmluZGV4T2YoXCJtYXhcIikgPiAtMSk7XG4gIHNlbGZbXCJfXCIgKyB0eXBlICsgXCJDbGFtcFwiXSA9IGNsYW1wO1xuICByZXR1cm4gY2xhbXAgPyB2YWx1ZS5zdWJzdHIoNiwgdmFsdWUubGVuZ3RoIC0gNykgOiB2YWx1ZTtcbn0sXG4gICAgX2tlZXBDbGFtcCA9IGZ1bmN0aW9uIF9rZWVwQ2xhbXAodmFsdWUsIGNsYW1wKSB7XG4gIHJldHVybiBjbGFtcCAmJiAoIV9pc1N0cmluZyh2YWx1ZSkgfHwgdmFsdWUuc3Vic3RyKDAsIDYpICE9PSBcImNsYW1wKFwiKSA/IFwiY2xhbXAoXCIgKyB2YWx1ZSArIFwiKVwiIDogdmFsdWU7XG59LFxuICAgIF9yYWZCdWdGaXggPSBmdW5jdGlvbiBfcmFmQnVnRml4KCkge1xuICByZXR1cm4gX2VuYWJsZWQgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKF9yYWZCdWdGaXgpO1xufSxcbiAgICAvLyBpbiBzb21lIGJyb3dzZXJzIChsaWtlIEZpcmVmb3gpLCBzY3JlZW4gcmVwYWludHMgd2VyZW4ndCBjb25zaXN0ZW50IHVubGVzcyB3ZSBoYWQgU09NRVRISU5HIHF1ZXVlZCB1cCBpbiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSEgU28gdGhpcyBqdXN0IGNyZWF0ZXMgYSBzdXBlciBzaW1wbGUgbG9vcCB0byBrZWVwIGl0IGFsaXZlIGFuZCBzbW9vdGggb3V0IHJlcGFpbnRzLlxuX3BvaW50ZXJEb3duSGFuZGxlciA9IGZ1bmN0aW9uIF9wb2ludGVyRG93bkhhbmRsZXIoKSB7XG4gIHJldHVybiBfcG9pbnRlcklzRG93biA9IDE7XG59LFxuICAgIF9wb2ludGVyVXBIYW5kbGVyID0gZnVuY3Rpb24gX3BvaW50ZXJVcEhhbmRsZXIoKSB7XG4gIHJldHVybiBfcG9pbnRlcklzRG93biA9IDA7XG59LFxuICAgIF9wYXNzVGhyb3VnaCA9IGZ1bmN0aW9uIF9wYXNzVGhyb3VnaCh2KSB7XG4gIHJldHVybiB2O1xufSxcbiAgICBfcm91bmQgPSBmdW5jdGlvbiBfcm91bmQodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAxMDAwMDApIC8gMTAwMDAwIHx8IDA7XG59LFxuICAgIF93aW5kb3dFeGlzdHMgPSBmdW5jdGlvbiBfd2luZG93RXhpc3RzKCkge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIjtcbn0sXG4gICAgX2dldEdTQVAgPSBmdW5jdGlvbiBfZ2V0R1NBUCgpIHtcbiAgcmV0dXJuIGdzYXAgfHwgX3dpbmRvd0V4aXN0cygpICYmIChnc2FwID0gd2luZG93LmdzYXApICYmIGdzYXAucmVnaXN0ZXJQbHVnaW4gJiYgZ3NhcDtcbn0sXG4gICAgX2lzVmlld3BvcnQgPSBmdW5jdGlvbiBfaXNWaWV3cG9ydChlKSB7XG4gIHJldHVybiAhIX5fcm9vdC5pbmRleE9mKGUpO1xufSxcbiAgICBfZ2V0Vmlld3BvcnREaW1lbnNpb24gPSBmdW5jdGlvbiBfZ2V0Vmlld3BvcnREaW1lbnNpb24oZGltZW5zaW9uUHJvcGVydHkpIHtcbiAgcmV0dXJuIChkaW1lbnNpb25Qcm9wZXJ0eSA9PT0gXCJIZWlnaHRcIiA/IF8xMDB2aCA6IF93aW5bXCJpbm5lclwiICsgZGltZW5zaW9uUHJvcGVydHldKSB8fCBfZG9jRWxbXCJjbGllbnRcIiArIGRpbWVuc2lvblByb3BlcnR5XSB8fCBfYm9keVtcImNsaWVudFwiICsgZGltZW5zaW9uUHJvcGVydHldO1xufSxcbiAgICBfZ2V0Qm91bmRzRnVuYyA9IGZ1bmN0aW9uIF9nZXRCb3VuZHNGdW5jKGVsZW1lbnQpIHtcbiAgcmV0dXJuIF9nZXRQcm94eVByb3AoZWxlbWVudCwgXCJnZXRCb3VuZGluZ0NsaWVudFJlY3RcIikgfHwgKF9pc1ZpZXdwb3J0KGVsZW1lbnQpID8gZnVuY3Rpb24gKCkge1xuICAgIF93aW5PZmZzZXRzLndpZHRoID0gX3dpbi5pbm5lcldpZHRoO1xuICAgIF93aW5PZmZzZXRzLmhlaWdodCA9IF8xMDB2aDtcbiAgICByZXR1cm4gX3dpbk9mZnNldHM7XG4gIH0gOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9nZXRCb3VuZHMoZWxlbWVudCk7XG4gIH0pO1xufSxcbiAgICBfZ2V0U2l6ZUZ1bmMgPSBmdW5jdGlvbiBfZ2V0U2l6ZUZ1bmMoc2Nyb2xsZXIsIGlzVmlld3BvcnQsIF9yZWYpIHtcbiAgdmFyIGQgPSBfcmVmLmQsXG4gICAgICBkMiA9IF9yZWYuZDIsXG4gICAgICBhID0gX3JlZi5hO1xuICByZXR1cm4gKGEgPSBfZ2V0UHJveHlQcm9wKHNjcm9sbGVyLCBcImdldEJvdW5kaW5nQ2xpZW50UmVjdFwiKSkgPyBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGEoKVtkXTtcbiAgfSA6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKGlzVmlld3BvcnQgPyBfZ2V0Vmlld3BvcnREaW1lbnNpb24oZDIpIDogc2Nyb2xsZXJbXCJjbGllbnRcIiArIGQyXSkgfHwgMDtcbiAgfTtcbn0sXG4gICAgX2dldE9mZnNldHNGdW5jID0gZnVuY3Rpb24gX2dldE9mZnNldHNGdW5jKGVsZW1lbnQsIGlzVmlld3BvcnQpIHtcbiAgcmV0dXJuICFpc1ZpZXdwb3J0IHx8IH5fcHJveGllcy5pbmRleE9mKGVsZW1lbnQpID8gX2dldEJvdW5kc0Z1bmMoZWxlbWVudCkgOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF93aW5PZmZzZXRzO1xuICB9O1xufSxcbiAgICBfbWF4U2Nyb2xsID0gZnVuY3Rpb24gX21heFNjcm9sbChlbGVtZW50LCBfcmVmMikge1xuICB2YXIgcyA9IF9yZWYyLnMsXG4gICAgICBkMiA9IF9yZWYyLmQyLFxuICAgICAgZCA9IF9yZWYyLmQsXG4gICAgICBhID0gX3JlZjIuYTtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIChzID0gXCJzY3JvbGxcIiArIGQyKSAmJiAoYSA9IF9nZXRQcm94eVByb3AoZWxlbWVudCwgcykpID8gYSgpIC0gX2dldEJvdW5kc0Z1bmMoZWxlbWVudCkoKVtkXSA6IF9pc1ZpZXdwb3J0KGVsZW1lbnQpID8gKF9kb2NFbFtzXSB8fCBfYm9keVtzXSkgLSBfZ2V0Vmlld3BvcnREaW1lbnNpb24oZDIpIDogZWxlbWVudFtzXSAtIGVsZW1lbnRbXCJvZmZzZXRcIiArIGQyXSk7XG59LFxuICAgIF9pdGVyYXRlQXV0b1JlZnJlc2ggPSBmdW5jdGlvbiBfaXRlcmF0ZUF1dG9SZWZyZXNoKGZ1bmMsIGV2ZW50cykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IF9hdXRvUmVmcmVzaC5sZW5ndGg7IGkgKz0gMykge1xuICAgICghZXZlbnRzIHx8IH5ldmVudHMuaW5kZXhPZihfYXV0b1JlZnJlc2hbaSArIDFdKSkgJiYgZnVuYyhfYXV0b1JlZnJlc2hbaV0sIF9hdXRvUmVmcmVzaFtpICsgMV0sIF9hdXRvUmVmcmVzaFtpICsgMl0pO1xuICB9XG59LFxuICAgIF9pc1N0cmluZyA9IGZ1bmN0aW9uIF9pc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiO1xufSxcbiAgICBfaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIF9pc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIjtcbn0sXG4gICAgX2lzTnVtYmVyID0gZnVuY3Rpb24gX2lzTnVtYmVyKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCI7XG59LFxuICAgIF9pc09iamVjdCA9IGZ1bmN0aW9uIF9pc09iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiO1xufSxcbiAgICBfZW5kQW5pbWF0aW9uID0gZnVuY3Rpb24gX2VuZEFuaW1hdGlvbihhbmltYXRpb24sIHJldmVyc2VkLCBwYXVzZSkge1xuICByZXR1cm4gYW5pbWF0aW9uICYmIGFuaW1hdGlvbi5wcm9ncmVzcyhyZXZlcnNlZCA/IDAgOiAxKSAmJiBwYXVzZSAmJiBhbmltYXRpb24ucGF1c2UoKTtcbn0sXG4gICAgX2NhbGxiYWNrID0gZnVuY3Rpb24gX2NhbGxiYWNrKHNlbGYsIGZ1bmMpIHtcbiAgaWYgKHNlbGYuZW5hYmxlZCkge1xuICAgIHZhciByZXN1bHQgPSBmdW5jKHNlbGYpO1xuICAgIHJlc3VsdCAmJiByZXN1bHQudG90YWxUaW1lICYmIChzZWxmLmNhbGxiYWNrQW5pbWF0aW9uID0gcmVzdWx0KTtcbiAgfVxufSxcbiAgICBfYWJzID0gTWF0aC5hYnMsXG4gICAgX2xlZnQgPSBcImxlZnRcIixcbiAgICBfdG9wID0gXCJ0b3BcIixcbiAgICBfcmlnaHQgPSBcInJpZ2h0XCIsXG4gICAgX2JvdHRvbSA9IFwiYm90dG9tXCIsXG4gICAgX3dpZHRoID0gXCJ3aWR0aFwiLFxuICAgIF9oZWlnaHQgPSBcImhlaWdodFwiLFxuICAgIF9SaWdodCA9IFwiUmlnaHRcIixcbiAgICBfTGVmdCA9IFwiTGVmdFwiLFxuICAgIF9Ub3AgPSBcIlRvcFwiLFxuICAgIF9Cb3R0b20gPSBcIkJvdHRvbVwiLFxuICAgIF9wYWRkaW5nID0gXCJwYWRkaW5nXCIsXG4gICAgX21hcmdpbiA9IFwibWFyZ2luXCIsXG4gICAgX1dpZHRoID0gXCJXaWR0aFwiLFxuICAgIF9IZWlnaHQgPSBcIkhlaWdodFwiLFxuICAgIF9weCA9IFwicHhcIixcbiAgICBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGZ1bmN0aW9uIF9nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpIHtcbiAgcmV0dXJuIF93aW4uZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbn0sXG4gICAgX21ha2VQb3NpdGlvbmFibGUgPSBmdW5jdGlvbiBfbWFrZVBvc2l0aW9uYWJsZShlbGVtZW50KSB7XG4gIC8vIGlmIHRoZSBlbGVtZW50IGFscmVhZHkgaGFzIHBvc2l0aW9uOiBhYnNvbHV0ZSBvciBmaXhlZCwgbGVhdmUgdGhhdCwgb3RoZXJ3aXNlIG1ha2UgaXQgcG9zaXRpb246IHJlbGF0aXZlXG4gIHZhciBwb3NpdGlvbiA9IF9nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uO1xuXG4gIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBwb3NpdGlvbiA9PT0gXCJhYnNvbHV0ZVwiIHx8IHBvc2l0aW9uID09PSBcImZpeGVkXCIgPyBwb3NpdGlvbiA6IFwicmVsYXRpdmVcIjtcbn0sXG4gICAgX3NldERlZmF1bHRzID0gZnVuY3Rpb24gX3NldERlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHtcbiAgZm9yICh2YXIgcCBpbiBkZWZhdWx0cykge1xuICAgIHAgaW4gb2JqIHx8IChvYmpbcF0gPSBkZWZhdWx0c1twXSk7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSxcbiAgICBfZ2V0Qm91bmRzID0gZnVuY3Rpb24gX2dldEJvdW5kcyhlbGVtZW50LCB3aXRob3V0VHJhbnNmb3Jtcykge1xuICB2YXIgdHdlZW4gPSB3aXRob3V0VHJhbnNmb3JtcyAmJiBfZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVtfdHJhbnNmb3JtUHJvcF0gIT09IFwibWF0cml4KDEsIDAsIDAsIDEsIDAsIDApXCIgJiYgZ3NhcC50byhlbGVtZW50LCB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHhQZXJjZW50OiAwLFxuICAgIHlQZXJjZW50OiAwLFxuICAgIHJvdGF0aW9uOiAwLFxuICAgIHJvdGF0aW9uWDogMCxcbiAgICByb3RhdGlvblk6IDAsXG4gICAgc2NhbGU6IDEsXG4gICAgc2tld1g6IDAsXG4gICAgc2tld1k6IDBcbiAgfSkucHJvZ3Jlc3MoMSksXG4gICAgICBib3VuZHMgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB0d2VlbiAmJiB0d2Vlbi5wcm9ncmVzcygwKS5raWxsKCk7XG4gIHJldHVybiBib3VuZHM7XG59LFxuICAgIF9nZXRTaXplID0gZnVuY3Rpb24gX2dldFNpemUoZWxlbWVudCwgX3JlZjMpIHtcbiAgdmFyIGQyID0gX3JlZjMuZDI7XG4gIHJldHVybiBlbGVtZW50W1wib2Zmc2V0XCIgKyBkMl0gfHwgZWxlbWVudFtcImNsaWVudFwiICsgZDJdIHx8IDA7XG59LFxuICAgIF9nZXRMYWJlbFJhdGlvQXJyYXkgPSBmdW5jdGlvbiBfZ2V0TGFiZWxSYXRpb0FycmF5KHRpbWVsaW5lKSB7XG4gIHZhciBhID0gW10sXG4gICAgICBsYWJlbHMgPSB0aW1lbGluZS5sYWJlbHMsXG4gICAgICBkdXJhdGlvbiA9IHRpbWVsaW5lLmR1cmF0aW9uKCksXG4gICAgICBwO1xuXG4gIGZvciAocCBpbiBsYWJlbHMpIHtcbiAgICBhLnB1c2gobGFiZWxzW3BdIC8gZHVyYXRpb24pO1xuICB9XG5cbiAgcmV0dXJuIGE7XG59LFxuICAgIF9nZXRDbG9zZXN0TGFiZWwgPSBmdW5jdGlvbiBfZ2V0Q2xvc2VzdExhYmVsKGFuaW1hdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGdzYXAudXRpbHMuc25hcChfZ2V0TGFiZWxSYXRpb0FycmF5KGFuaW1hdGlvbiksIHZhbHVlKTtcbiAgfTtcbn0sXG4gICAgX3NuYXBEaXJlY3Rpb25hbCA9IGZ1bmN0aW9uIF9zbmFwRGlyZWN0aW9uYWwoc25hcEluY3JlbWVudE9yQXJyYXkpIHtcbiAgdmFyIHNuYXAgPSBnc2FwLnV0aWxzLnNuYXAoc25hcEluY3JlbWVudE9yQXJyYXkpLFxuICAgICAgYSA9IEFycmF5LmlzQXJyYXkoc25hcEluY3JlbWVudE9yQXJyYXkpICYmIHNuYXBJbmNyZW1lbnRPckFycmF5LnNsaWNlKDApLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYSAtIGI7XG4gIH0pO1xuICByZXR1cm4gYSA/IGZ1bmN0aW9uICh2YWx1ZSwgZGlyZWN0aW9uLCB0aHJlc2hvbGQpIHtcbiAgICBpZiAodGhyZXNob2xkID09PSB2b2lkIDApIHtcbiAgICAgIHRocmVzaG9sZCA9IDFlLTM7XG4gICAgfVxuXG4gICAgdmFyIGk7XG5cbiAgICBpZiAoIWRpcmVjdGlvbikge1xuICAgICAgcmV0dXJuIHNuYXAodmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24gPiAwKSB7XG4gICAgICB2YWx1ZSAtPSB0aHJlc2hvbGQ7IC8vIHRvIGF2b2lkIHJvdW5kaW5nIGVycm9ycy4gSWYgd2UncmUgdG9vIHN0cmljdCwgaXQgbWlnaHQgc25hcCBmb3J3YXJkLCB0aGVuIGltbWVkaWF0ZWx5IGFnYWluLCBhbmQgYWdhaW4uXG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhW2ldID49IHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIGFbaV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFbaSAtIDFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpID0gYS5sZW5ndGg7XG4gICAgICB2YWx1ZSArPSB0aHJlc2hvbGQ7XG5cbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgaWYgKGFbaV0gPD0gdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gYVtpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhWzBdO1xuICB9IDogZnVuY3Rpb24gKHZhbHVlLCBkaXJlY3Rpb24sIHRocmVzaG9sZCkge1xuICAgIGlmICh0aHJlc2hvbGQgPT09IHZvaWQgMCkge1xuICAgICAgdGhyZXNob2xkID0gMWUtMztcbiAgICB9XG5cbiAgICB2YXIgc25hcHBlZCA9IHNuYXAodmFsdWUpO1xuICAgIHJldHVybiAhZGlyZWN0aW9uIHx8IE1hdGguYWJzKHNuYXBwZWQgLSB2YWx1ZSkgPCB0aHJlc2hvbGQgfHwgc25hcHBlZCAtIHZhbHVlIDwgMCA9PT0gZGlyZWN0aW9uIDwgMCA/IHNuYXBwZWQgOiBzbmFwKGRpcmVjdGlvbiA8IDAgPyB2YWx1ZSAtIHNuYXBJbmNyZW1lbnRPckFycmF5IDogdmFsdWUgKyBzbmFwSW5jcmVtZW50T3JBcnJheSk7XG4gIH07XG59LFxuICAgIF9nZXRMYWJlbEF0RGlyZWN0aW9uID0gZnVuY3Rpb24gX2dldExhYmVsQXREaXJlY3Rpb24odGltZWxpbmUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSwgc3QpIHtcbiAgICByZXR1cm4gX3NuYXBEaXJlY3Rpb25hbChfZ2V0TGFiZWxSYXRpb0FycmF5KHRpbWVsaW5lKSkodmFsdWUsIHN0LmRpcmVjdGlvbik7XG4gIH07XG59LFxuICAgIF9tdWx0aUxpc3RlbmVyID0gZnVuY3Rpb24gX211bHRpTGlzdGVuZXIoZnVuYywgZWxlbWVudCwgdHlwZXMsIGNhbGxiYWNrKSB7XG4gIHJldHVybiB0eXBlcy5zcGxpdChcIixcIikuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgIHJldHVybiBmdW5jKGVsZW1lbnQsIHR5cGUsIGNhbGxiYWNrKTtcbiAgfSk7XG59LFxuICAgIF9hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIF9hZGRMaXN0ZW5lcihlbGVtZW50LCB0eXBlLCBmdW5jLCBub25QYXNzaXZlLCBjYXB0dXJlKSB7XG4gIHJldHVybiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZnVuYywge1xuICAgIHBhc3NpdmU6ICFub25QYXNzaXZlLFxuICAgIGNhcHR1cmU6ICEhY2FwdHVyZVxuICB9KTtcbn0sXG4gICAgX3JlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gX3JlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIHR5cGUsIGZ1bmMsIGNhcHR1cmUpIHtcbiAgcmV0dXJuIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmdW5jLCAhIWNhcHR1cmUpO1xufSxcbiAgICBfd2hlZWxMaXN0ZW5lciA9IGZ1bmN0aW9uIF93aGVlbExpc3RlbmVyKGZ1bmMsIGVsLCBzY3JvbGxGdW5jKSB7XG4gIHNjcm9sbEZ1bmMgPSBzY3JvbGxGdW5jICYmIHNjcm9sbEZ1bmMud2hlZWxIYW5kbGVyO1xuXG4gIGlmIChzY3JvbGxGdW5jKSB7XG4gICAgZnVuYyhlbCwgXCJ3aGVlbFwiLCBzY3JvbGxGdW5jKTtcbiAgICBmdW5jKGVsLCBcInRvdWNobW92ZVwiLCBzY3JvbGxGdW5jKTtcbiAgfVxufSxcbiAgICBfbWFya2VyRGVmYXVsdHMgPSB7XG4gIHN0YXJ0Q29sb3I6IFwiZ3JlZW5cIixcbiAgZW5kQ29sb3I6IFwicmVkXCIsXG4gIGluZGVudDogMCxcbiAgZm9udFNpemU6IFwiMTZweFwiLFxuICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiXG59LFxuICAgIF9kZWZhdWx0cyA9IHtcbiAgdG9nZ2xlQWN0aW9uczogXCJwbGF5XCIsXG4gIGFudGljaXBhdGVQaW46IDBcbn0sXG4gICAgX2tleXdvcmRzID0ge1xuICB0b3A6IDAsXG4gIGxlZnQ6IDAsXG4gIGNlbnRlcjogMC41LFxuICBib3R0b206IDEsXG4gIHJpZ2h0OiAxXG59LFxuICAgIF9vZmZzZXRUb1B4ID0gZnVuY3Rpb24gX29mZnNldFRvUHgodmFsdWUsIHNpemUpIHtcbiAgaWYgKF9pc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB2YXIgZXFJbmRleCA9IHZhbHVlLmluZGV4T2YoXCI9XCIpLFxuICAgICAgICByZWxhdGl2ZSA9IH5lcUluZGV4ID8gKyh2YWx1ZS5jaGFyQXQoZXFJbmRleCAtIDEpICsgMSkgKiBwYXJzZUZsb2F0KHZhbHVlLnN1YnN0cihlcUluZGV4ICsgMSkpIDogMDtcblxuICAgIGlmICh+ZXFJbmRleCkge1xuICAgICAgdmFsdWUuaW5kZXhPZihcIiVcIikgPiBlcUluZGV4ICYmIChyZWxhdGl2ZSAqPSBzaXplIC8gMTAwKTtcbiAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyKDAsIGVxSW5kZXggLSAxKTtcbiAgICB9XG5cbiAgICB2YWx1ZSA9IHJlbGF0aXZlICsgKHZhbHVlIGluIF9rZXl3b3JkcyA/IF9rZXl3b3Jkc1t2YWx1ZV0gKiBzaXplIDogfnZhbHVlLmluZGV4T2YoXCIlXCIpID8gcGFyc2VGbG9hdCh2YWx1ZSkgKiBzaXplIC8gMTAwIDogcGFyc2VGbG9hdCh2YWx1ZSkgfHwgMCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59LFxuICAgIF9jcmVhdGVNYXJrZXIgPSBmdW5jdGlvbiBfY3JlYXRlTWFya2VyKHR5cGUsIG5hbWUsIGNvbnRhaW5lciwgZGlyZWN0aW9uLCBfcmVmNCwgb2Zmc2V0LCBtYXRjaFdpZHRoRWwsIGNvbnRhaW5lckFuaW1hdGlvbikge1xuICB2YXIgc3RhcnRDb2xvciA9IF9yZWY0LnN0YXJ0Q29sb3IsXG4gICAgICBlbmRDb2xvciA9IF9yZWY0LmVuZENvbG9yLFxuICAgICAgZm9udFNpemUgPSBfcmVmNC5mb250U2l6ZSxcbiAgICAgIGluZGVudCA9IF9yZWY0LmluZGVudCxcbiAgICAgIGZvbnRXZWlnaHQgPSBfcmVmNC5mb250V2VpZ2h0O1xuXG4gIHZhciBlID0gX2RvYy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgICAgdXNlRml4ZWRQb3NpdGlvbiA9IF9pc1ZpZXdwb3J0KGNvbnRhaW5lcikgfHwgX2dldFByb3h5UHJvcChjb250YWluZXIsIFwicGluVHlwZVwiKSA9PT0gXCJmaXhlZFwiLFxuICAgICAgaXNTY3JvbGxlciA9IHR5cGUuaW5kZXhPZihcInNjcm9sbGVyXCIpICE9PSAtMSxcbiAgICAgIHBhcmVudCA9IHVzZUZpeGVkUG9zaXRpb24gPyBfYm9keSA6IGNvbnRhaW5lcixcbiAgICAgIGlzU3RhcnQgPSB0eXBlLmluZGV4T2YoXCJzdGFydFwiKSAhPT0gLTEsXG4gICAgICBjb2xvciA9IGlzU3RhcnQgPyBzdGFydENvbG9yIDogZW5kQ29sb3IsXG4gICAgICBjc3MgPSBcImJvcmRlci1jb2xvcjpcIiArIGNvbG9yICsgXCI7Zm9udC1zaXplOlwiICsgZm9udFNpemUgKyBcIjtjb2xvcjpcIiArIGNvbG9yICsgXCI7Zm9udC13ZWlnaHQ6XCIgKyBmb250V2VpZ2h0ICsgXCI7cG9pbnRlci1ldmVudHM6bm9uZTt3aGl0ZS1zcGFjZTpub3dyYXA7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZixBcmlhbDt6LWluZGV4OjEwMDA7cGFkZGluZzo0cHggOHB4O2JvcmRlci13aWR0aDowO2JvcmRlci1zdHlsZTpzb2xpZDtcIjtcblxuICBjc3MgKz0gXCJwb3NpdGlvbjpcIiArICgoaXNTY3JvbGxlciB8fCBjb250YWluZXJBbmltYXRpb24pICYmIHVzZUZpeGVkUG9zaXRpb24gPyBcImZpeGVkO1wiIDogXCJhYnNvbHV0ZTtcIik7XG4gIChpc1Njcm9sbGVyIHx8IGNvbnRhaW5lckFuaW1hdGlvbiB8fCAhdXNlRml4ZWRQb3NpdGlvbikgJiYgKGNzcyArPSAoZGlyZWN0aW9uID09PSBfdmVydGljYWwgPyBfcmlnaHQgOiBfYm90dG9tKSArIFwiOlwiICsgKG9mZnNldCArIHBhcnNlRmxvYXQoaW5kZW50KSkgKyBcInB4O1wiKTtcbiAgbWF0Y2hXaWR0aEVsICYmIChjc3MgKz0gXCJib3gtc2l6aW5nOmJvcmRlci1ib3g7dGV4dC1hbGlnbjpsZWZ0O3dpZHRoOlwiICsgbWF0Y2hXaWR0aEVsLm9mZnNldFdpZHRoICsgXCJweDtcIik7XG4gIGUuX2lzU3RhcnQgPSBpc1N0YXJ0O1xuICBlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZ3NhcC1tYXJrZXItXCIgKyB0eXBlICsgKG5hbWUgPyBcIiBtYXJrZXItXCIgKyBuYW1lIDogXCJcIikpO1xuICBlLnN0eWxlLmNzc1RleHQgPSBjc3M7XG4gIGUuaW5uZXJUZXh0ID0gbmFtZSB8fCBuYW1lID09PSAwID8gdHlwZSArIFwiLVwiICsgbmFtZSA6IHR5cGU7XG4gIHBhcmVudC5jaGlsZHJlblswXSA/IHBhcmVudC5pbnNlcnRCZWZvcmUoZSwgcGFyZW50LmNoaWxkcmVuWzBdKSA6IHBhcmVudC5hcHBlbmRDaGlsZChlKTtcbiAgZS5fb2Zmc2V0ID0gZVtcIm9mZnNldFwiICsgZGlyZWN0aW9uLm9wLmQyXTtcblxuICBfcG9zaXRpb25NYXJrZXIoZSwgMCwgZGlyZWN0aW9uLCBpc1N0YXJ0KTtcblxuICByZXR1cm4gZTtcbn0sXG4gICAgX3Bvc2l0aW9uTWFya2VyID0gZnVuY3Rpb24gX3Bvc2l0aW9uTWFya2VyKG1hcmtlciwgc3RhcnQsIGRpcmVjdGlvbiwgZmxpcHBlZCkge1xuICB2YXIgdmFycyA9IHtcbiAgICBkaXNwbGF5OiBcImJsb2NrXCJcbiAgfSxcbiAgICAgIHNpZGUgPSBkaXJlY3Rpb25bZmxpcHBlZCA/IFwib3MyXCIgOiBcInAyXCJdLFxuICAgICAgb3Bwb3NpdGVTaWRlID0gZGlyZWN0aW9uW2ZsaXBwZWQgPyBcInAyXCIgOiBcIm9zMlwiXTtcbiAgbWFya2VyLl9pc0ZsaXBwZWQgPSBmbGlwcGVkO1xuICB2YXJzW2RpcmVjdGlvbi5hICsgXCJQZXJjZW50XCJdID0gZmxpcHBlZCA/IC0xMDAgOiAwO1xuICB2YXJzW2RpcmVjdGlvbi5hXSA9IGZsaXBwZWQgPyBcIjFweFwiIDogMDtcbiAgdmFyc1tcImJvcmRlclwiICsgc2lkZSArIF9XaWR0aF0gPSAxO1xuICB2YXJzW1wiYm9yZGVyXCIgKyBvcHBvc2l0ZVNpZGUgKyBfV2lkdGhdID0gMDtcbiAgdmFyc1tkaXJlY3Rpb24ucF0gPSBzdGFydCArIFwicHhcIjtcbiAgZ3NhcC5zZXQobWFya2VyLCB2YXJzKTtcbn0sXG4gICAgX3RyaWdnZXJzID0gW10sXG4gICAgX2lkcyA9IHt9LFxuICAgIF9yYWZJRCxcbiAgICBfc3luYyA9IGZ1bmN0aW9uIF9zeW5jKCkge1xuICByZXR1cm4gX2dldFRpbWUoKSAtIF9sYXN0U2Nyb2xsVGltZSA+IDM0ICYmIChfcmFmSUQgfHwgKF9yYWZJRCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShfdXBkYXRlQWxsKSkpO1xufSxcbiAgICBfb25TY3JvbGwgPSBmdW5jdGlvbiBfb25TY3JvbGwoKSB7XG4gIC8vIHByZXZpb3VzbHksIHdlIHRyaWVkIHRvIG9wdGltaXplIHBlcmZvcm1hbmNlIGJ5IGJhdGNoaW5nL2RlZmVycmluZyB0byB0aGUgbmV4dCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSwgYnV0IGRpc2NvdmVyZWQgdGhhdCBTYWZhcmkgaGFzIGEgZmV3IGJ1Z3MgdGhhdCBtYWtlIHRoaXMgdW53b3JrYWJsZSAoZXNwZWNpYWxseSBvbiBpT1MpLiBTZWUgaHR0cHM6Ly9jb2RlcGVuLmlvL0dyZWVuU29jay9wZW4vMTZjNDM1YjEyZWYwOWMzODEyNTIwNDgxOGU3YjQ1ZmM/ZWRpdG9ycz0wMDEwIGFuZCBodHRwczovL2NvZGVwZW4uaW8vR3JlZW5Tb2NrL3Blbi9Kak94WXBRLzNkZDY1Y2NlYzVhNjBmMWQ4NjJjMzU1ZDg0ZDE0NTYyP2VkaXRvcnM9MDAxMCBhbmQgaHR0cHM6Ly9jb2RlcGVuLmlvL0dyZWVuU29jay9wZW4vRXhiclBOYS8wODdjZWYxOTdkYzM1NDQ1YTA5NTFlODkzNWM0MTUwMz9lZGl0b3JzPTAwMTBcbiAgaWYgKCFfbm9ybWFsaXplciB8fCAhX25vcm1hbGl6ZXIuaXNQcmVzc2VkIHx8IF9ub3JtYWxpemVyLnN0YXJ0WCA+IF9ib2R5LmNsaWVudFdpZHRoKSB7XG4gICAgLy8gaWYgdGhlIHVzZXIgaXMgZHJhZ2dpbmcgdGhlIHNjcm9sbGJhciwgYWxsb3cgaXQuXG4gICAgX3Njcm9sbGVycy5jYWNoZSsrO1xuXG4gICAgaWYgKF9ub3JtYWxpemVyKSB7XG4gICAgICBfcmFmSUQgfHwgKF9yYWZJRCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShfdXBkYXRlQWxsKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF91cGRhdGVBbGwoKTsgLy8gU2FmYXJpIGluIHBhcnRpY3VsYXIgKG9uIGRlc2t0b3ApIE5FRURTIHRoZSBpbW1lZGlhdGUgdXBkYXRlIHJhdGhlciB0aGFuIHdhaXRpbmcgZm9yIGEgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkgd2hlcmVhcyBpT1Mgc2VlbXMgdG8gYmVuZWZpdCBmcm9tIHdhaXRpbmcgZm9yIHRoZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSB0aWNrLCBhdCBsZWFzdCB3aGVuIG5vcm1hbGl6aW5nLiBTZWUgaHR0cHM6Ly9jb2RlcGVuLmlvL0dyZWVuU29jay9wZW4vcUJZb3pxTz9lZGl0b3JzPTAxMTBcblxuICAgIH1cblxuICAgIF9sYXN0U2Nyb2xsVGltZSB8fCBfZGlzcGF0Y2goXCJzY3JvbGxTdGFydFwiKTtcbiAgICBfbGFzdFNjcm9sbFRpbWUgPSBfZ2V0VGltZSgpO1xuICB9XG59LFxuICAgIF9zZXRCYXNlRGltZW5zaW9ucyA9IGZ1bmN0aW9uIF9zZXRCYXNlRGltZW5zaW9ucygpIHtcbiAgX2Jhc2VTY3JlZW5XaWR0aCA9IF93aW4uaW5uZXJXaWR0aDtcbiAgX2Jhc2VTY3JlZW5IZWlnaHQgPSBfd2luLmlubmVySGVpZ2h0O1xufSxcbiAgICBfb25SZXNpemUgPSBmdW5jdGlvbiBfb25SZXNpemUoKSB7XG4gIF9zY3JvbGxlcnMuY2FjaGUrKztcbiAgIV9yZWZyZXNoaW5nICYmICFfaWdub3JlUmVzaXplICYmICFfZG9jLmZ1bGxzY3JlZW5FbGVtZW50ICYmICFfZG9jLndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50ICYmICghX2lnbm9yZU1vYmlsZVJlc2l6ZSB8fCBfYmFzZVNjcmVlbldpZHRoICE9PSBfd2luLmlubmVyV2lkdGggfHwgTWF0aC5hYnMoX3dpbi5pbm5lckhlaWdodCAtIF9iYXNlU2NyZWVuSGVpZ2h0KSA+IF93aW4uaW5uZXJIZWlnaHQgKiAwLjI1KSAmJiBfcmVzaXplRGVsYXkucmVzdGFydCh0cnVlKTtcbn0sXG4gICAgLy8gaWdub3JlIHJlc2l6ZXMgdHJpZ2dlcmVkIGJ5IHJlZnJlc2goKVxuX2xpc3RlbmVycyA9IHt9LFxuICAgIF9lbXB0eUFycmF5ID0gW10sXG4gICAgX3NvZnRSZWZyZXNoID0gZnVuY3Rpb24gX3NvZnRSZWZyZXNoKCkge1xuICByZXR1cm4gX3JlbW92ZUxpc3RlbmVyKFNjcm9sbFRyaWdnZXIsIFwic2Nyb2xsRW5kXCIsIF9zb2Z0UmVmcmVzaCkgfHwgX3JlZnJlc2hBbGwodHJ1ZSk7XG59LFxuICAgIF9kaXNwYXRjaCA9IGZ1bmN0aW9uIF9kaXNwYXRjaCh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzW3R5cGVdICYmIF9saXN0ZW5lcnNbdHlwZV0ubWFwKGZ1bmN0aW9uIChmKSB7XG4gICAgcmV0dXJuIGYoKTtcbiAgfSkgfHwgX2VtcHR5QXJyYXk7XG59LFxuICAgIF9zYXZlZFN0eWxlcyA9IFtdLFxuICAgIC8vIHdoZW4gU2Nyb2xsVHJpZ2dlci5zYXZlU3R5bGVzKCkgaXMgY2FsbGVkLCB0aGUgaW5saW5lIHN0eWxlcyBhcmUgcmVjb3JkZWQgaW4gdGhpcyBBcnJheSBpbiBhIHNlcXVlbnRpYWwgZm9ybWF0IGxpa2UgW2VsZW1lbnQsIGNzc1RleHQsIGdzQ2FjaGUsIG1lZGlhXS4gVGhpcyBrZWVwcyBpdCB2ZXJ5IG1lbW9yeS1lZmZpY2llbnQgYW5kIGZhc3QgdG8gaXRlcmF0ZSB0aHJvdWdoLlxuX3JldmVydFJlY29yZGVkID0gZnVuY3Rpb24gX3JldmVydFJlY29yZGVkKG1lZGlhKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgX3NhdmVkU3R5bGVzLmxlbmd0aDsgaSArPSA1KSB7XG4gICAgaWYgKCFtZWRpYSB8fCBfc2F2ZWRTdHlsZXNbaSArIDRdICYmIF9zYXZlZFN0eWxlc1tpICsgNF0ucXVlcnkgPT09IG1lZGlhKSB7XG4gICAgICBfc2F2ZWRTdHlsZXNbaV0uc3R5bGUuY3NzVGV4dCA9IF9zYXZlZFN0eWxlc1tpICsgMV07XG4gICAgICBfc2F2ZWRTdHlsZXNbaV0uZ2V0QkJveCAmJiBfc2F2ZWRTdHlsZXNbaV0uc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIF9zYXZlZFN0eWxlc1tpICsgMl0gfHwgXCJcIik7XG4gICAgICBfc2F2ZWRTdHlsZXNbaSArIDNdLnVuY2FjaGUgPSAxO1xuICAgIH1cbiAgfVxufSxcbiAgICBfcmV2ZXJ0QWxsID0gZnVuY3Rpb24gX3JldmVydEFsbChraWxsLCBtZWRpYSkge1xuICB2YXIgdHJpZ2dlcjtcblxuICBmb3IgKF9pID0gMDsgX2kgPCBfdHJpZ2dlcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgdHJpZ2dlciA9IF90cmlnZ2Vyc1tfaV07XG5cbiAgICBpZiAodHJpZ2dlciAmJiAoIW1lZGlhIHx8IHRyaWdnZXIuX2N0eCA9PT0gbWVkaWEpKSB7XG4gICAgICBpZiAoa2lsbCkge1xuICAgICAgICB0cmlnZ2VyLmtpbGwoMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmlnZ2VyLnJldmVydCh0cnVlLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtZWRpYSAmJiBfcmV2ZXJ0UmVjb3JkZWQobWVkaWEpO1xuICBtZWRpYSB8fCBfZGlzcGF0Y2goXCJyZXZlcnRcIik7XG59LFxuICAgIF9jbGVhclNjcm9sbE1lbW9yeSA9IGZ1bmN0aW9uIF9jbGVhclNjcm9sbE1lbW9yeShzY3JvbGxSZXN0b3JhdGlvbiwgZm9yY2UpIHtcbiAgLy8gemVyby1vdXQgYWxsIHRoZSByZWNvcmRlZCBzY3JvbGwgcG9zaXRpb25zLiBEb24ndCB1c2UgX3RyaWdnZXJzIGJlY2F1c2UgaWYsIGZvciBleGFtcGxlLCAubWF0Y2hNZWRpYSgpIGlzIHVzZWQgdG8gY3JlYXRlIHNvbWUgU2Nyb2xsVHJpZ2dlcnMgYW5kIHRoZW4gdGhlIHVzZXIgcmVzaXplcyBhbmQgaXQgcmVtb3ZlcyBBTEwgU2Nyb2xsVHJpZ2dlcnMsIGFuZCB0aGVuIGdvIGJhY2sgdG8gYSBzaXplIHdoZXJlIHRoZXJlIGFyZSBTY3JvbGxUcmlnZ2VycywgaXQgd291bGQgaGF2ZSBrZXB0IHRoZSBwb3NpdGlvbihzKSBzYXZlZCBmcm9tIHRoZSBpbml0aWFsIHN0YXRlLlxuICBfc2Nyb2xsZXJzLmNhY2hlKys7XG4gIChmb3JjZSB8fCAhX3JlZnJlc2hpbmdBbGwpICYmIF9zY3JvbGxlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIF9pc0Z1bmN0aW9uKG9iaikgJiYgb2JqLmNhY2hlSUQrKyAmJiAob2JqLnJlYyA9IDApO1xuICB9KTtcbiAgX2lzU3RyaW5nKHNjcm9sbFJlc3RvcmF0aW9uKSAmJiAoX3dpbi5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gX3Njcm9sbFJlc3RvcmF0aW9uID0gc2Nyb2xsUmVzdG9yYXRpb24pO1xufSxcbiAgICBfcmVmcmVzaGluZ0FsbCxcbiAgICBfcmVmcmVzaElEID0gMCxcbiAgICBfcXVldWVSZWZyZXNoSUQsXG4gICAgX3F1ZXVlUmVmcmVzaEFsbCA9IGZ1bmN0aW9uIF9xdWV1ZVJlZnJlc2hBbGwoKSB7XG4gIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FsbCBfcmVmcmVzaEFsbCgpIGV2ZXJ5IHRpbWUgd2UgY3JlYXRlIGEgbmV3IFNjcm9sbFRyaWdnZXIgKGZvciBwZXJmb3JtYW5jZSByZWFzb25zKSAtIGl0J3MgYmV0dGVyIHRvIGJhdGNoIHRoZW0uIFNvbWUgZnJhbWV3b3JrcyBkeW5hbWljYWxseSBsb2FkIGNvbnRlbnQgYW5kIHdlIGNhbid0IHJlbHkgb24gdGhlIHdpbmRvdydzIFwibG9hZFwiIG9yIFwiRE9NQ29udGVudExvYWRlZFwiIGV2ZW50cyB0byB0cmlnZ2VyIGl0LlxuICBpZiAoX3F1ZXVlUmVmcmVzaElEICE9PSBfcmVmcmVzaElEKSB7XG4gICAgdmFyIGlkID0gX3F1ZXVlUmVmcmVzaElEID0gX3JlZnJlc2hJRDtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGlkID09PSBfcmVmcmVzaElEICYmIF9yZWZyZXNoQWxsKHRydWUpO1xuICAgIH0pO1xuICB9XG59LFxuICAgIF9yZWZyZXNoMTAwdmggPSBmdW5jdGlvbiBfcmVmcmVzaDEwMHZoKCkge1xuICBfYm9keS5hcHBlbmRDaGlsZChfZGl2MTAwdmgpO1xuXG4gIF8xMDB2aCA9IF9kaXYxMDB2aC5vZmZzZXRIZWlnaHQgfHwgX3dpbi5pbm5lckhlaWdodDtcblxuICBfYm9keS5yZW1vdmVDaGlsZChfZGl2MTAwdmgpO1xufSxcbiAgICBfcmVmcmVzaEFsbCA9IGZ1bmN0aW9uIF9yZWZyZXNoQWxsKGZvcmNlLCBza2lwUmV2ZXJ0KSB7XG4gIGlmIChfbGFzdFNjcm9sbFRpbWUgJiYgIWZvcmNlKSB7XG4gICAgX2FkZExpc3RlbmVyKFNjcm9sbFRyaWdnZXIsIFwic2Nyb2xsRW5kXCIsIF9zb2Z0UmVmcmVzaCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBfcmVmcmVzaDEwMHZoKCk7XG5cbiAgX3JlZnJlc2hpbmdBbGwgPSBTY3JvbGxUcmlnZ2VyLmlzUmVmcmVzaGluZyA9IHRydWU7XG5cbiAgX3Njcm9sbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gX2lzRnVuY3Rpb24ob2JqKSAmJiArK29iai5jYWNoZUlEICYmIChvYmoucmVjID0gb2JqKCkpO1xuICB9KTsgLy8gZm9yY2UgdGhlIGNsZWFyaW5nIG9mIHRoZSBjYWNoZSBiZWNhdXNlIHNvbWUgYnJvd3NlcnMgdGFrZSBhIGxpdHRsZSB3aGlsZSB0byBkaXNwYXRjaCB0aGUgXCJzY3JvbGxcIiBldmVudCBhbmQgdGhlIHVzZXIgbWF5IGhhdmUgY2hhbmdlZCB0aGUgc2Nyb2xsIHBvc2l0aW9uIGFuZCB0aGVuIGNhbGxlZCBTY3JvbGxUcmlnZ2VyLnJlZnJlc2goKSByaWdodCBhd2F5XG5cblxuICB2YXIgcmVmcmVzaEluaXRzID0gX2Rpc3BhdGNoKFwicmVmcmVzaEluaXRcIik7XG5cbiAgX3NvcnQgJiYgU2Nyb2xsVHJpZ2dlci5zb3J0KCk7XG4gIHNraXBSZXZlcnQgfHwgX3JldmVydEFsbCgpO1xuXG4gIF9zY3JvbGxlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgaWYgKF9pc0Z1bmN0aW9uKG9iaikpIHtcbiAgICAgIG9iai5zbW9vdGggJiYgKG9iai50YXJnZXQuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSBcImF1dG9cIik7IC8vIHNtb290aCBzY3JvbGxpbmcgaW50ZXJmZXJlc1xuXG4gICAgICBvYmooMCk7XG4gICAgfVxuICB9KTtcblxuICBfdHJpZ2dlcnMuc2xpY2UoMCkuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiB0LnJlZnJlc2goKTtcbiAgfSk7IC8vIGRvbid0IGxvb3Agd2l0aCBfaSBiZWNhdXNlIGR1cmluZyBhIHJlZnJlc2goKSBzb21lb25lIGNvdWxkIGNhbGwgU2Nyb2xsVHJpZ2dlci51cGRhdGUoKSB3aGljaCB3b3VsZCBpdGVyYXRlIHRocm91Z2ggX2kgcmVzdWx0aW5nIGluIGEgc2tpcC5cblxuXG4gIF90cmlnZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uICh0LCBpKSB7XG4gICAgLy8gbmVzdGVkIHBpbnMgKHBpbm5lZENvbnRhaW5lcikgd2l0aCBwaW5TcGFjaW5nIG1heSBleHBhbmQgdGhlIGNvbnRhaW5lciwgc28gd2UgbXVzdCBhY2NvbW1vZGF0ZSB0aGF0IGhlcmUuXG4gICAgaWYgKHQuX3N1YlBpbk9mZnNldCAmJiB0LnBpbikge1xuICAgICAgdmFyIHByb3AgPSB0LnZhcnMuaG9yaXpvbnRhbCA/IFwib2Zmc2V0V2lkdGhcIiA6IFwib2Zmc2V0SGVpZ2h0XCIsXG4gICAgICAgICAgb3JpZ2luYWwgPSB0LnBpbltwcm9wXTtcbiAgICAgIHQucmV2ZXJ0KHRydWUsIDEpO1xuICAgICAgdC5hZGp1c3RQaW5TcGFjaW5nKHQucGluW3Byb3BdIC0gb3JpZ2luYWwpO1xuICAgICAgdC5yZWZyZXNoKCk7XG4gICAgfVxuICB9KTtcblxuICBfdHJpZ2dlcnMuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgIC8vIHRoZSBzY3JvbGxlcidzIG1heCBzY3JvbGwgcG9zaXRpb24gbWF5IGNoYW5nZSBhZnRlciBhbGwgdGhlIFNjcm9sbFRyaWdnZXJzIHJlZnJlc2hlZCAobGlrZSBwaW5uaW5nIGNvdWxkIHB1c2ggaXQgZG93biksIHNvIHdlIG5lZWQgdG8gbG9vcCBiYWNrIGFuZCBjb3JyZWN0IGFueSB3aXRoIGVuZDogXCJtYXhcIi4gU2FtZSBmb3IgYW55dGhpbmcgd2l0aCBhIGNsYW1wZWQgZW5kXG4gICAgdmFyIG1heCA9IF9tYXhTY3JvbGwodC5zY3JvbGxlciwgdC5fZGlyKTtcblxuICAgICh0LnZhcnMuZW5kID09PSBcIm1heFwiIHx8IHQuX2VuZENsYW1wICYmIHQuZW5kID4gbWF4KSAmJiB0LnNldFBvc2l0aW9ucyh0LnN0YXJ0LCBNYXRoLm1heCh0LnN0YXJ0ICsgMSwgbWF4KSwgdHJ1ZSk7XG4gIH0pO1xuXG4gIHJlZnJlc2hJbml0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICByZXR1cm4gcmVzdWx0ICYmIHJlc3VsdC5yZW5kZXIgJiYgcmVzdWx0LnJlbmRlcigtMSk7XG4gIH0pOyAvLyBpZiB0aGUgb25SZWZyZXNoSW5pdCgpIHJldHVybnMgYW4gYW5pbWF0aW9uICh0eXBpY2FsbHkgYSBnc2FwLnNldCgpKSwgcmV2ZXJ0IGl0LiBUaGlzIG1ha2VzIGl0IGVhc3kgdG8gcHV0IHRoaW5ncyBpbiBhIGNlcnRhaW4gc3BvdCBiZWZvcmUgcmVmcmVzaGluZyBmb3IgbWVhc3VyZW1lbnQgcHVycG9zZXMsIGFuZCB0aGVuIHB1dCB0aGluZ3MgYmFjay5cblxuICBfc2Nyb2xsZXJzLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgIGlmIChfaXNGdW5jdGlvbihvYmopKSB7XG4gICAgICBvYmouc21vb3RoICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvYmoudGFyZ2V0LnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gXCJzbW9vdGhcIjtcbiAgICAgIH0pO1xuICAgICAgb2JqLnJlYyAmJiBvYmoob2JqLnJlYyk7XG4gICAgfVxuICB9KTtcblxuICBfY2xlYXJTY3JvbGxNZW1vcnkoX3Njcm9sbFJlc3RvcmF0aW9uLCAxKTtcblxuICBfcmVzaXplRGVsYXkucGF1c2UoKTtcblxuICBfcmVmcmVzaElEKys7XG4gIF9yZWZyZXNoaW5nQWxsID0gMjtcblxuICBfdXBkYXRlQWxsKDIpO1xuXG4gIF90cmlnZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIF9pc0Z1bmN0aW9uKHQudmFycy5vblJlZnJlc2gpICYmIHQudmFycy5vblJlZnJlc2godCk7XG4gIH0pO1xuXG4gIF9yZWZyZXNoaW5nQWxsID0gU2Nyb2xsVHJpZ2dlci5pc1JlZnJlc2hpbmcgPSBmYWxzZTtcblxuICBfZGlzcGF0Y2goXCJyZWZyZXNoXCIpO1xufSxcbiAgICBfbGFzdFNjcm9sbCA9IDAsXG4gICAgX2RpcmVjdGlvbiA9IDEsXG4gICAgX3ByaW1hcnksXG4gICAgX3VwZGF0ZUFsbCA9IGZ1bmN0aW9uIF91cGRhdGVBbGwoZm9yY2UpIHtcbiAgaWYgKCFfcmVmcmVzaGluZ0FsbCB8fCBmb3JjZSA9PT0gMikge1xuICAgIFNjcm9sbFRyaWdnZXIuaXNVcGRhdGluZyA9IHRydWU7XG4gICAgX3ByaW1hcnkgJiYgX3ByaW1hcnkudXBkYXRlKDApOyAvLyBTY3JvbGxTbW9vdGhlciB1c2VzIHJlZnJlc2hQcmlvcml0eSAtOTk5OSB0byBiZWNvbWUgdGhlIHByaW1hcnkgdGhhdCBnZXRzIHVwZGF0ZWQgYmVmb3JlIGFsbCBvdGhlcnMgYmVjYXVzZSBpdCBhZmZlY3RzIHRoZSBzY3JvbGwgcG9zaXRpb24uXG5cbiAgICB2YXIgbCA9IF90cmlnZ2Vycy5sZW5ndGgsXG4gICAgICAgIHRpbWUgPSBfZ2V0VGltZSgpLFxuICAgICAgICByZWNvcmRWZWxvY2l0eSA9IHRpbWUgLSBfdGltZTEgPj0gNTAsXG4gICAgICAgIHNjcm9sbCA9IGwgJiYgX3RyaWdnZXJzWzBdLnNjcm9sbCgpO1xuXG4gICAgX2RpcmVjdGlvbiA9IF9sYXN0U2Nyb2xsID4gc2Nyb2xsID8gLTEgOiAxO1xuICAgIF9yZWZyZXNoaW5nQWxsIHx8IChfbGFzdFNjcm9sbCA9IHNjcm9sbCk7XG5cbiAgICBpZiAocmVjb3JkVmVsb2NpdHkpIHtcbiAgICAgIGlmIChfbGFzdFNjcm9sbFRpbWUgJiYgIV9wb2ludGVySXNEb3duICYmIHRpbWUgLSBfbGFzdFNjcm9sbFRpbWUgPiAyMDApIHtcbiAgICAgICAgX2xhc3RTY3JvbGxUaW1lID0gMDtcblxuICAgICAgICBfZGlzcGF0Y2goXCJzY3JvbGxFbmRcIik7XG4gICAgICB9XG5cbiAgICAgIF90aW1lMiA9IF90aW1lMTtcbiAgICAgIF90aW1lMSA9IHRpbWU7XG4gICAgfVxuXG4gICAgaWYgKF9kaXJlY3Rpb24gPCAwKSB7XG4gICAgICBfaSA9IGw7XG5cbiAgICAgIHdoaWxlIChfaS0tID4gMCkge1xuICAgICAgICBfdHJpZ2dlcnNbX2ldICYmIF90cmlnZ2Vyc1tfaV0udXBkYXRlKDAsIHJlY29yZFZlbG9jaXR5KTtcbiAgICAgIH1cblxuICAgICAgX2RpcmVjdGlvbiA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoX2kgPSAwOyBfaSA8IGw7IF9pKyspIHtcbiAgICAgICAgX3RyaWdnZXJzW19pXSAmJiBfdHJpZ2dlcnNbX2ldLnVwZGF0ZSgwLCByZWNvcmRWZWxvY2l0eSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU2Nyb2xsVHJpZ2dlci5pc1VwZGF0aW5nID0gZmFsc2U7XG4gIH1cblxuICBfcmFmSUQgPSAwO1xufSxcbiAgICBfcHJvcE5hbWVzVG9Db3B5ID0gW19sZWZ0LCBfdG9wLCBfYm90dG9tLCBfcmlnaHQsIF9tYXJnaW4gKyBfQm90dG9tLCBfbWFyZ2luICsgX1JpZ2h0LCBfbWFyZ2luICsgX1RvcCwgX21hcmdpbiArIF9MZWZ0LCBcImRpc3BsYXlcIiwgXCJmbGV4U2hyaW5rXCIsIFwiZmxvYXRcIiwgXCJ6SW5kZXhcIiwgXCJncmlkQ29sdW1uU3RhcnRcIiwgXCJncmlkQ29sdW1uRW5kXCIsIFwiZ3JpZFJvd1N0YXJ0XCIsIFwiZ3JpZFJvd0VuZFwiLCBcImdyaWRBcmVhXCIsIFwianVzdGlmeVNlbGZcIiwgXCJhbGlnblNlbGZcIiwgXCJwbGFjZVNlbGZcIiwgXCJvcmRlclwiXSxcbiAgICBfc3RhdGVQcm9wcyA9IF9wcm9wTmFtZXNUb0NvcHkuY29uY2F0KFtfd2lkdGgsIF9oZWlnaHQsIFwiYm94U2l6aW5nXCIsIFwibWF4XCIgKyBfV2lkdGgsIFwibWF4XCIgKyBfSGVpZ2h0LCBcInBvc2l0aW9uXCIsIF9tYXJnaW4sIF9wYWRkaW5nLCBfcGFkZGluZyArIF9Ub3AsIF9wYWRkaW5nICsgX1JpZ2h0LCBfcGFkZGluZyArIF9Cb3R0b20sIF9wYWRkaW5nICsgX0xlZnRdKSxcbiAgICBfc3dhcFBpbk91dCA9IGZ1bmN0aW9uIF9zd2FwUGluT3V0KHBpbiwgc3BhY2VyLCBzdGF0ZSkge1xuICBfc2V0U3RhdGUoc3RhdGUpO1xuXG4gIHZhciBjYWNoZSA9IHBpbi5fZ3NhcDtcblxuICBpZiAoY2FjaGUuc3BhY2VySXNOYXRpdmUpIHtcbiAgICBfc2V0U3RhdGUoY2FjaGUuc3BhY2VyU3RhdGUpO1xuICB9IGVsc2UgaWYgKHBpbi5fZ3NhcC5zd2FwcGVkSW4pIHtcbiAgICB2YXIgcGFyZW50ID0gc3BhY2VyLnBhcmVudE5vZGU7XG5cbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKHBpbiwgc3BhY2VyKTtcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChzcGFjZXIpO1xuICAgIH1cbiAgfVxuXG4gIHBpbi5fZ3NhcC5zd2FwcGVkSW4gPSBmYWxzZTtcbn0sXG4gICAgX3N3YXBQaW5JbiA9IGZ1bmN0aW9uIF9zd2FwUGluSW4ocGluLCBzcGFjZXIsIGNzLCBzcGFjZXJTdGF0ZSkge1xuICBpZiAoIXBpbi5fZ3NhcC5zd2FwcGVkSW4pIHtcbiAgICB2YXIgaSA9IF9wcm9wTmFtZXNUb0NvcHkubGVuZ3RoLFxuICAgICAgICBzcGFjZXJTdHlsZSA9IHNwYWNlci5zdHlsZSxcbiAgICAgICAgcGluU3R5bGUgPSBwaW4uc3R5bGUsXG4gICAgICAgIHA7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBwID0gX3Byb3BOYW1lc1RvQ29weVtpXTtcbiAgICAgIHNwYWNlclN0eWxlW3BdID0gY3NbcF07XG4gICAgfVxuXG4gICAgc3BhY2VyU3R5bGUucG9zaXRpb24gPSBjcy5wb3NpdGlvbiA9PT0gXCJhYnNvbHV0ZVwiID8gXCJhYnNvbHV0ZVwiIDogXCJyZWxhdGl2ZVwiO1xuICAgIGNzLmRpc3BsYXkgPT09IFwiaW5saW5lXCIgJiYgKHNwYWNlclN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiKTtcbiAgICBwaW5TdHlsZVtfYm90dG9tXSA9IHBpblN0eWxlW19yaWdodF0gPSBcImF1dG9cIjtcbiAgICBzcGFjZXJTdHlsZS5mbGV4QmFzaXMgPSBjcy5mbGV4QmFzaXMgfHwgXCJhdXRvXCI7XG4gICAgc3BhY2VyU3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcbiAgICBzcGFjZXJTdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlci1ib3hcIjtcbiAgICBzcGFjZXJTdHlsZVtfd2lkdGhdID0gX2dldFNpemUocGluLCBfaG9yaXpvbnRhbCkgKyBfcHg7XG4gICAgc3BhY2VyU3R5bGVbX2hlaWdodF0gPSBfZ2V0U2l6ZShwaW4sIF92ZXJ0aWNhbCkgKyBfcHg7XG4gICAgc3BhY2VyU3R5bGVbX3BhZGRpbmddID0gcGluU3R5bGVbX21hcmdpbl0gPSBwaW5TdHlsZVtfdG9wXSA9IHBpblN0eWxlW19sZWZ0XSA9IFwiMFwiO1xuXG4gICAgX3NldFN0YXRlKHNwYWNlclN0YXRlKTtcblxuICAgIHBpblN0eWxlW193aWR0aF0gPSBwaW5TdHlsZVtcIm1heFwiICsgX1dpZHRoXSA9IGNzW193aWR0aF07XG4gICAgcGluU3R5bGVbX2hlaWdodF0gPSBwaW5TdHlsZVtcIm1heFwiICsgX0hlaWdodF0gPSBjc1tfaGVpZ2h0XTtcbiAgICBwaW5TdHlsZVtfcGFkZGluZ10gPSBjc1tfcGFkZGluZ107XG5cbiAgICBpZiAocGluLnBhcmVudE5vZGUgIT09IHNwYWNlcikge1xuICAgICAgcGluLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNwYWNlciwgcGluKTtcbiAgICAgIHNwYWNlci5hcHBlbmRDaGlsZChwaW4pO1xuICAgIH1cblxuICAgIHBpbi5fZ3NhcC5zd2FwcGVkSW4gPSB0cnVlO1xuICB9XG59LFxuICAgIF9jYXBzRXhwID0gLyhbQS1aXSkvZyxcbiAgICBfc2V0U3RhdGUgPSBmdW5jdGlvbiBfc2V0U3RhdGUoc3RhdGUpIHtcbiAgaWYgKHN0YXRlKSB7XG4gICAgdmFyIHN0eWxlID0gc3RhdGUudC5zdHlsZSxcbiAgICAgICAgbCA9IHN0YXRlLmxlbmd0aCxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIHAsXG4gICAgICAgIHZhbHVlO1xuICAgIChzdGF0ZS50Ll9nc2FwIHx8IGdzYXAuY29yZS5nZXRDYWNoZShzdGF0ZS50KSkudW5jYWNoZSA9IDE7IC8vIG90aGVyd2lzZSB0cmFuc2Zvcm1zIG1heSBiZSBvZmZcblxuICAgIGZvciAoOyBpIDwgbDsgaSArPSAyKSB7XG4gICAgICB2YWx1ZSA9IHN0YXRlW2kgKyAxXTtcbiAgICAgIHAgPSBzdGF0ZVtpXTtcblxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHN0eWxlW3BdID0gdmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKHN0eWxlW3BdKSB7XG4gICAgICAgIHN0eWxlLnJlbW92ZVByb3BlcnR5KHAucmVwbGFjZShfY2Fwc0V4cCwgXCItJDFcIikudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59LFxuICAgIF9nZXRTdGF0ZSA9IGZ1bmN0aW9uIF9nZXRTdGF0ZShlbGVtZW50KSB7XG4gIC8vIHJldHVybnMgYW4gQXJyYXkgd2l0aCBhbHRlcm5hdGluZyB2YWx1ZXMgbGlrZSBbcHJvcGVydHksIHZhbHVlLCBwcm9wZXJ0eSwgdmFsdWVdIGFuZCBhIFwidFwiIHByb3BlcnR5IHBvaW50aW5nIHRvIHRoZSB0YXJnZXQgKGVsZW1lbnQpLiBNYWtlcyBpdCBmYXN0IGFuZCBjaGVhcC5cbiAgdmFyIGwgPSBfc3RhdGVQcm9wcy5sZW5ndGgsXG4gICAgICBzdHlsZSA9IGVsZW1lbnQuc3R5bGUsXG4gICAgICBzdGF0ZSA9IFtdLFxuICAgICAgaSA9IDA7XG5cbiAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICBzdGF0ZS5wdXNoKF9zdGF0ZVByb3BzW2ldLCBzdHlsZVtfc3RhdGVQcm9wc1tpXV0pO1xuICB9XG5cbiAgc3RhdGUudCA9IGVsZW1lbnQ7XG4gIHJldHVybiBzdGF0ZTtcbn0sXG4gICAgX2NvcHlTdGF0ZSA9IGZ1bmN0aW9uIF9jb3B5U3RhdGUoc3RhdGUsIG92ZXJyaWRlLCBvbWl0T2Zmc2V0cykge1xuICB2YXIgcmVzdWx0ID0gW10sXG4gICAgICBsID0gc3RhdGUubGVuZ3RoLFxuICAgICAgaSA9IG9taXRPZmZzZXRzID8gOCA6IDAsXG4gICAgICAvLyBza2lwIHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSBpZiBvbWl0T2Zmc2V0cyBpcyB0cnVlXG4gIHA7XG5cbiAgZm9yICg7IGkgPCBsOyBpICs9IDIpIHtcbiAgICBwID0gc3RhdGVbaV07XG4gICAgcmVzdWx0LnB1c2gocCwgcCBpbiBvdmVycmlkZSA/IG92ZXJyaWRlW3BdIDogc3RhdGVbaSArIDFdKTtcbiAgfVxuXG4gIHJlc3VsdC50ID0gc3RhdGUudDtcbiAgcmV0dXJuIHJlc3VsdDtcbn0sXG4gICAgX3dpbk9mZnNldHMgPSB7XG4gIGxlZnQ6IDAsXG4gIHRvcDogMFxufSxcbiAgICAvLyAvLyBwb3RlbnRpYWwgZnV0dXJlIGZlYXR1cmUgKD8pIEFsbG93IHVzZXJzIHRvIGNhbGN1bGF0ZSB3aGVyZSBhIHRyaWdnZXIgaGl0cyAoc2Nyb2xsIHBvc2l0aW9uKSBsaWtlIGdldFNjcm9sbFBvc2l0aW9uKFwiI2lkXCIsIFwidG9wIGJvdHRvbVwiKVxuLy8gX2dldFNjcm9sbFBvc2l0aW9uID0gKHRyaWdnZXIsIHBvc2l0aW9uLCB7c2Nyb2xsZXIsIGNvbnRhaW5lckFuaW1hdGlvbiwgaG9yaXpvbnRhbH0pID0+IHtcbi8vIFx0c2Nyb2xsZXIgPSBfZ2V0VGFyZ2V0KHNjcm9sbGVyIHx8IF93aW4pO1xuLy8gXHRsZXQgZGlyZWN0aW9uID0gaG9yaXpvbnRhbCA/IF9ob3Jpem9udGFsIDogX3ZlcnRpY2FsLFxuLy8gXHRcdGlzVmlld3BvcnQgPSBfaXNWaWV3cG9ydChzY3JvbGxlcik7XG4vLyBcdF9nZXRTaXplRnVuYyhzY3JvbGxlciwgaXNWaWV3cG9ydCwgZGlyZWN0aW9uKTtcbi8vIFx0cmV0dXJuIF9wYXJzZVBvc2l0aW9uKHBvc2l0aW9uLCBfZ2V0VGFyZ2V0KHRyaWdnZXIpLCBfZ2V0U2l6ZUZ1bmMoc2Nyb2xsZXIsIGlzVmlld3BvcnQsIGRpcmVjdGlvbikoKSwgZGlyZWN0aW9uLCBfZ2V0U2Nyb2xsRnVuYyhzY3JvbGxlciwgZGlyZWN0aW9uKSgpLCAwLCAwLCAwLCBfZ2V0T2Zmc2V0c0Z1bmMoc2Nyb2xsZXIsIGlzVmlld3BvcnQpKCksIGlzVmlld3BvcnQgPyAwIDogcGFyc2VGbG9hdChfZ2V0Q29tcHV0ZWRTdHlsZShzY3JvbGxlcilbXCJib3JkZXJcIiArIGRpcmVjdGlvbi5wMiArIF9XaWR0aF0pIHx8IDAsIDAsIGNvbnRhaW5lckFuaW1hdGlvbiA/IGNvbnRhaW5lckFuaW1hdGlvbi5kdXJhdGlvbigpIDogX21heFNjcm9sbChzY3JvbGxlciksIGNvbnRhaW5lckFuaW1hdGlvbik7XG4vLyB9LFxuX3BhcnNlUG9zaXRpb24gPSBmdW5jdGlvbiBfcGFyc2VQb3NpdGlvbih2YWx1ZSwgdHJpZ2dlciwgc2Nyb2xsZXJTaXplLCBkaXJlY3Rpb24sIHNjcm9sbCwgbWFya2VyLCBtYXJrZXJTY3JvbGxlciwgc2VsZiwgc2Nyb2xsZXJCb3VuZHMsIGJvcmRlcldpZHRoLCB1c2VGaXhlZFBvc2l0aW9uLCBzY3JvbGxlck1heCwgY29udGFpbmVyQW5pbWF0aW9uLCBjbGFtcFplcm9Qcm9wKSB7XG4gIF9pc0Z1bmN0aW9uKHZhbHVlKSAmJiAodmFsdWUgPSB2YWx1ZShzZWxmKSk7XG5cbiAgaWYgKF9pc1N0cmluZyh2YWx1ZSkgJiYgdmFsdWUuc3Vic3RyKDAsIDMpID09PSBcIm1heFwiKSB7XG4gICAgdmFsdWUgPSBzY3JvbGxlck1heCArICh2YWx1ZS5jaGFyQXQoNCkgPT09IFwiPVwiID8gX29mZnNldFRvUHgoXCIwXCIgKyB2YWx1ZS5zdWJzdHIoMyksIHNjcm9sbGVyU2l6ZSkgOiAwKTtcbiAgfVxuXG4gIHZhciB0aW1lID0gY29udGFpbmVyQW5pbWF0aW9uID8gY29udGFpbmVyQW5pbWF0aW9uLnRpbWUoKSA6IDAsXG4gICAgICBwMSxcbiAgICAgIHAyLFxuICAgICAgZWxlbWVudDtcbiAgY29udGFpbmVyQW5pbWF0aW9uICYmIGNvbnRhaW5lckFuaW1hdGlvbi5zZWVrKDApO1xuICBpc05hTih2YWx1ZSkgfHwgKHZhbHVlID0gK3ZhbHVlKTsgLy8gY29udmVydCBhIHN0cmluZyBudW1iZXIgbGlrZSBcIjQ1XCIgdG8gYW4gYWN0dWFsIG51bWJlclxuXG4gIGlmICghX2lzTnVtYmVyKHZhbHVlKSkge1xuICAgIF9pc0Z1bmN0aW9uKHRyaWdnZXIpICYmICh0cmlnZ2VyID0gdHJpZ2dlcihzZWxmKSk7XG4gICAgdmFyIG9mZnNldHMgPSAodmFsdWUgfHwgXCIwXCIpLnNwbGl0KFwiIFwiKSxcbiAgICAgICAgYm91bmRzLFxuICAgICAgICBsb2NhbE9mZnNldCxcbiAgICAgICAgZ2xvYmFsT2Zmc2V0LFxuICAgICAgICBkaXNwbGF5O1xuICAgIGVsZW1lbnQgPSBfZ2V0VGFyZ2V0KHRyaWdnZXIsIHNlbGYpIHx8IF9ib2R5O1xuICAgIGJvdW5kcyA9IF9nZXRCb3VuZHMoZWxlbWVudCkgfHwge307XG5cbiAgICBpZiAoKCFib3VuZHMgfHwgIWJvdW5kcy5sZWZ0ICYmICFib3VuZHMudG9wKSAmJiBfZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgLy8gaWYgZGlzcGxheSBpcyBcIm5vbmVcIiwgaXQgd29uJ3QgcmVwb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIHByb3Blcmx5XG4gICAgICBkaXNwbGF5ID0gZWxlbWVudC5zdHlsZS5kaXNwbGF5O1xuICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgYm91bmRzID0gX2dldEJvdW5kcyhlbGVtZW50KTtcbiAgICAgIGRpc3BsYXkgPyBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5IDogZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImRpc3BsYXlcIik7XG4gICAgfVxuXG4gICAgbG9jYWxPZmZzZXQgPSBfb2Zmc2V0VG9QeChvZmZzZXRzWzBdLCBib3VuZHNbZGlyZWN0aW9uLmRdKTtcbiAgICBnbG9iYWxPZmZzZXQgPSBfb2Zmc2V0VG9QeChvZmZzZXRzWzFdIHx8IFwiMFwiLCBzY3JvbGxlclNpemUpO1xuICAgIHZhbHVlID0gYm91bmRzW2RpcmVjdGlvbi5wXSAtIHNjcm9sbGVyQm91bmRzW2RpcmVjdGlvbi5wXSAtIGJvcmRlcldpZHRoICsgbG9jYWxPZmZzZXQgKyBzY3JvbGwgLSBnbG9iYWxPZmZzZXQ7XG4gICAgbWFya2VyU2Nyb2xsZXIgJiYgX3Bvc2l0aW9uTWFya2VyKG1hcmtlclNjcm9sbGVyLCBnbG9iYWxPZmZzZXQsIGRpcmVjdGlvbiwgc2Nyb2xsZXJTaXplIC0gZ2xvYmFsT2Zmc2V0IDwgMjAgfHwgbWFya2VyU2Nyb2xsZXIuX2lzU3RhcnQgJiYgZ2xvYmFsT2Zmc2V0ID4gMjApO1xuICAgIHNjcm9sbGVyU2l6ZSAtPSBzY3JvbGxlclNpemUgLSBnbG9iYWxPZmZzZXQ7IC8vIGFkanVzdCBmb3IgdGhlIG1hcmtlclxuICB9IGVsc2Uge1xuICAgIGNvbnRhaW5lckFuaW1hdGlvbiAmJiAodmFsdWUgPSBnc2FwLnV0aWxzLm1hcFJhbmdlKGNvbnRhaW5lckFuaW1hdGlvbi5zY3JvbGxUcmlnZ2VyLnN0YXJ0LCBjb250YWluZXJBbmltYXRpb24uc2Nyb2xsVHJpZ2dlci5lbmQsIDAsIHNjcm9sbGVyTWF4LCB2YWx1ZSkpO1xuICAgIG1hcmtlclNjcm9sbGVyICYmIF9wb3NpdGlvbk1hcmtlcihtYXJrZXJTY3JvbGxlciwgc2Nyb2xsZXJTaXplLCBkaXJlY3Rpb24sIHRydWUpO1xuICB9XG5cbiAgaWYgKGNsYW1wWmVyb1Byb3ApIHtcbiAgICBzZWxmW2NsYW1wWmVyb1Byb3BdID0gdmFsdWUgfHwgLTAuMDAxO1xuICAgIHZhbHVlIDwgMCAmJiAodmFsdWUgPSAwKTtcbiAgfVxuXG4gIGlmIChtYXJrZXIpIHtcbiAgICB2YXIgcG9zaXRpb24gPSB2YWx1ZSArIHNjcm9sbGVyU2l6ZSxcbiAgICAgICAgaXNTdGFydCA9IG1hcmtlci5faXNTdGFydDtcbiAgICBwMSA9IFwic2Nyb2xsXCIgKyBkaXJlY3Rpb24uZDI7XG5cbiAgICBfcG9zaXRpb25NYXJrZXIobWFya2VyLCBwb3NpdGlvbiwgZGlyZWN0aW9uLCBpc1N0YXJ0ICYmIHBvc2l0aW9uID4gMjAgfHwgIWlzU3RhcnQgJiYgKHVzZUZpeGVkUG9zaXRpb24gPyBNYXRoLm1heChfYm9keVtwMV0sIF9kb2NFbFtwMV0pIDogbWFya2VyLnBhcmVudE5vZGVbcDFdKSA8PSBwb3NpdGlvbiArIDEpO1xuXG4gICAgaWYgKHVzZUZpeGVkUG9zaXRpb24pIHtcbiAgICAgIHNjcm9sbGVyQm91bmRzID0gX2dldEJvdW5kcyhtYXJrZXJTY3JvbGxlcik7XG4gICAgICB1c2VGaXhlZFBvc2l0aW9uICYmIChtYXJrZXIuc3R5bGVbZGlyZWN0aW9uLm9wLnBdID0gc2Nyb2xsZXJCb3VuZHNbZGlyZWN0aW9uLm9wLnBdIC0gZGlyZWN0aW9uLm9wLm0gLSBtYXJrZXIuX29mZnNldCArIF9weCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbnRhaW5lckFuaW1hdGlvbiAmJiBlbGVtZW50KSB7XG4gICAgcDEgPSBfZ2V0Qm91bmRzKGVsZW1lbnQpO1xuICAgIGNvbnRhaW5lckFuaW1hdGlvbi5zZWVrKHNjcm9sbGVyTWF4KTtcbiAgICBwMiA9IF9nZXRCb3VuZHMoZWxlbWVudCk7XG4gICAgY29udGFpbmVyQW5pbWF0aW9uLl9jYVNjcm9sbERpc3QgPSBwMVtkaXJlY3Rpb24ucF0gLSBwMltkaXJlY3Rpb24ucF07XG4gICAgdmFsdWUgPSB2YWx1ZSAvIGNvbnRhaW5lckFuaW1hdGlvbi5fY2FTY3JvbGxEaXN0ICogc2Nyb2xsZXJNYXg7XG4gIH1cblxuICBjb250YWluZXJBbmltYXRpb24gJiYgY29udGFpbmVyQW5pbWF0aW9uLnNlZWsodGltZSk7XG4gIHJldHVybiBjb250YWluZXJBbmltYXRpb24gPyB2YWx1ZSA6IE1hdGgucm91bmQodmFsdWUpO1xufSxcbiAgICBfcHJlZml4RXhwID0gLyh3ZWJraXR8bW96fGxlbmd0aHxjc3NUZXh0fGluc2V0KS9pLFxuICAgIF9yZXBhcmVudCA9IGZ1bmN0aW9uIF9yZXBhcmVudChlbGVtZW50LCBwYXJlbnQsIHRvcCwgbGVmdCkge1xuICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICE9PSBwYXJlbnQpIHtcbiAgICB2YXIgc3R5bGUgPSBlbGVtZW50LnN0eWxlLFxuICAgICAgICBwLFxuICAgICAgICBjcztcblxuICAgIGlmIChwYXJlbnQgPT09IF9ib2R5KSB7XG4gICAgICBlbGVtZW50Ll9zdE9yaWcgPSBzdHlsZS5jc3NUZXh0OyAvLyByZWNvcmQgb3JpZ2luYWwgaW5saW5lIHN0eWxlcyBzbyB3ZSBjYW4gcmV2ZXJ0IHRoZW0gbGF0ZXJcblxuICAgICAgY3MgPSBfZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcblxuICAgICAgZm9yIChwIGluIGNzKSB7XG4gICAgICAgIC8vIG11c3QgY29weSBhbGwgcmVsZXZhbnQgc3R5bGVzIHRvIGVuc3VyZSB0aGF0IG5vdGhpbmcgY2hhbmdlcyB2aXN1YWxseSB3aGVuIHdlIHJlcGFyZW50IHRvIHRoZSA8Ym9keT4uIFNraXAgdGhlIHZlbmRvciBwcmVmaXhlZCBvbmVzLlxuICAgICAgICBpZiAoIStwICYmICFfcHJlZml4RXhwLnRlc3QocCkgJiYgY3NbcF0gJiYgdHlwZW9mIHN0eWxlW3BdID09PSBcInN0cmluZ1wiICYmIHAgIT09IFwiMFwiKSB7XG4gICAgICAgICAgc3R5bGVbcF0gPSBjc1twXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzdHlsZS50b3AgPSB0b3A7XG4gICAgICBzdHlsZS5sZWZ0ID0gbGVmdDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuY3NzVGV4dCA9IGVsZW1lbnQuX3N0T3JpZztcbiAgICB9XG5cbiAgICBnc2FwLmNvcmUuZ2V0Q2FjaGUoZWxlbWVudCkudW5jYWNoZSA9IDE7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICB9XG59LFxuICAgIF9pbnRlcnJ1cHRpb25UcmFja2VyID0gZnVuY3Rpb24gX2ludGVycnVwdGlvblRyYWNrZXIoZ2V0VmFsdWVGdW5jLCBpbml0aWFsVmFsdWUsIG9uSW50ZXJydXB0KSB7XG4gIHZhciBsYXN0MSA9IGluaXRpYWxWYWx1ZSxcbiAgICAgIGxhc3QyID0gbGFzdDE7XG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgY3VycmVudCA9IE1hdGgucm91bmQoZ2V0VmFsdWVGdW5jKCkpOyAvLyByb3VuZCBiZWNhdXNlIGluIHNvbWUgW3ZlcnkgdW5jb21tb25dIFdpbmRvd3MgZW52aXJvbm1lbnRzLCBzY3JvbGwgY2FuIGdldCByZXBvcnRlZCB3aXRoIGRlY2ltYWxzIGV2ZW4gdGhvdWdoIGl0IHdhcyBzZXQgd2l0aG91dC5cblxuICAgIGlmIChjdXJyZW50ICE9PSBsYXN0MSAmJiBjdXJyZW50ICE9PSBsYXN0MiAmJiBNYXRoLmFicyhjdXJyZW50IC0gbGFzdDEpID4gMyAmJiBNYXRoLmFicyhjdXJyZW50IC0gbGFzdDIpID4gMykge1xuICAgICAgLy8gaWYgdGhlIHVzZXIgc2Nyb2xscywga2lsbCB0aGUgdHdlZW4uIGlPUyBTYWZhcmkgaW50ZXJtaXR0ZW50bHkgbWlzcmVwb3J0cyB0aGUgc2Nyb2xsIHBvc2l0aW9uLCBpdCBtYXkgYmUgdGhlIG1vc3QgcmVjZW50bHktc2V0IG9uZSBvciB0aGUgb25lIGJlZm9yZSB0aGF0ISBXaGVuIFNhZmFyaSBpcyB6b29tZWQgKENNRC0rKSwgaXQgb2Z0ZW4gbWlzcmVwb3J0cyBhcyAxIHBpeGVsIG9mZiB0b28hIFNvIGlmIHdlIHNldCB0aGUgc2Nyb2xsIHBvc2l0aW9uIHRvIDEyNSwgZm9yIGV4YW1wbGUsIGl0J2xsIGFjdHVhbGx5IHJlcG9ydCBpdCBhcyAxMjQuXG4gICAgICB2YWx1ZSA9IGN1cnJlbnQ7XG4gICAgICBvbkludGVycnVwdCAmJiBvbkludGVycnVwdCgpO1xuICAgIH1cblxuICAgIGxhc3QyID0gbGFzdDE7XG4gICAgbGFzdDEgPSB2YWx1ZTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG59LFxuICAgIF9zaGlmdE1hcmtlciA9IGZ1bmN0aW9uIF9zaGlmdE1hcmtlcihtYXJrZXIsIGRpcmVjdGlvbiwgdmFsdWUpIHtcbiAgdmFyIHZhcnMgPSB7fTtcbiAgdmFyc1tkaXJlY3Rpb24ucF0gPSBcIis9XCIgKyB2YWx1ZTtcbiAgZ3NhcC5zZXQobWFya2VyLCB2YXJzKTtcbn0sXG4gICAgLy8gX21lcmdlQW5pbWF0aW9ucyA9IGFuaW1hdGlvbnMgPT4ge1xuLy8gXHRsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtzbW9vdGhDaGlsZFRpbWluZzogdHJ1ZX0pLnN0YXJ0VGltZShNYXRoLm1pbiguLi5hbmltYXRpb25zLm1hcChhID0+IGEuZ2xvYmFsVGltZSgwKSkpKTtcbi8vIFx0YW5pbWF0aW9ucy5mb3JFYWNoKGEgPT4ge2xldCB0aW1lID0gYS50b3RhbFRpbWUoKTsgdGwuYWRkKGEpOyBhLnRvdGFsVGltZSh0aW1lKTsgfSk7XG4vLyBcdHRsLnNtb290aENoaWxkVGltaW5nID0gZmFsc2U7XG4vLyBcdHJldHVybiB0bDtcbi8vIH0sXG4vLyByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byB0d2VlbiB0aGUgc2Nyb2xsIHBvc2l0aW9uIGluIHRoZSBkaXJlY3Rpb24gcHJvdmlkZWQsIGFuZCB3aGVuIGRvaW5nIHNvIGl0J2xsIGFkZCBhIC50d2VlbiBwcm9wZXJ0eSB0byB0aGUgRlVOQ1RJT04gaXRzZWxmLCBhbmQgcmVtb3ZlIGl0IHdoZW4gdGhlIHR3ZWVuIGNvbXBsZXRlcyBvciBnZXRzIGtpbGxlZC4gVGhpcyBnaXZlcyB1cyBhIHdheSB0byBoYXZlIG11bHRpcGxlIFNjcm9sbFRyaWdnZXJzIHVzZSBhIGNlbnRyYWwgZnVuY3Rpb24gZm9yIGFueSBnaXZlbiBzY3JvbGxlciBhbmQgc2VlIGlmIHRoZXJlJ3MgYSBzY3JvbGwgdHdlZW4gcnVubmluZyAod2hpY2ggd291bGQgYWZmZWN0IGlmL2hvdyB0aGluZ3MgZ2V0IHVwZGF0ZWQpXG5fZ2V0VHdlZW5DcmVhdG9yID0gZnVuY3Rpb24gX2dldFR3ZWVuQ3JlYXRvcihzY3JvbGxlciwgZGlyZWN0aW9uKSB7XG4gIHZhciBnZXRTY3JvbGwgPSBfZ2V0U2Nyb2xsRnVuYyhzY3JvbGxlciwgZGlyZWN0aW9uKSxcbiAgICAgIHByb3AgPSBcIl9zY3JvbGxcIiArIGRpcmVjdGlvbi5wMixcbiAgICAgIC8vIGFkZCBhIHR3ZWVuYWJsZSBwcm9wZXJ0eSB0byB0aGUgc2Nyb2xsZXIgdGhhdCdzIGEgZ2V0dGVyL3NldHRlciBmdW5jdGlvbiwgbGlrZSBfc2Nyb2xsVG9wIG9yIF9zY3JvbGxMZWZ0LiBUaGlzIHdheSwgaWYgc29tZW9uZSBkb2VzIGdzYXAua2lsbFR3ZWVuc09mKHNjcm9sbGVyKSBpdCdsbCBraWxsIHRoZSBzY3JvbGwgdHdlZW4uXG4gIGdldFR3ZWVuID0gZnVuY3Rpb24gZ2V0VHdlZW4oc2Nyb2xsVG8sIHZhcnMsIGluaXRpYWxWYWx1ZSwgY2hhbmdlMSwgY2hhbmdlMikge1xuICAgIHZhciB0d2VlbiA9IGdldFR3ZWVuLnR3ZWVuLFxuICAgICAgICBvbkNvbXBsZXRlID0gdmFycy5vbkNvbXBsZXRlLFxuICAgICAgICBtb2RpZmllcnMgPSB7fTtcbiAgICBpbml0aWFsVmFsdWUgPSBpbml0aWFsVmFsdWUgfHwgZ2V0U2Nyb2xsKCk7XG5cbiAgICB2YXIgY2hlY2tGb3JJbnRlcnJ1cHRpb24gPSBfaW50ZXJydXB0aW9uVHJhY2tlcihnZXRTY3JvbGwsIGluaXRpYWxWYWx1ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgdHdlZW4ua2lsbCgpO1xuICAgICAgZ2V0VHdlZW4udHdlZW4gPSAwO1xuICAgIH0pO1xuXG4gICAgY2hhbmdlMiA9IGNoYW5nZTEgJiYgY2hhbmdlMiB8fCAwOyAvLyBpZiBjaGFuZ2UxIGlzIDAsIHdlIHNldCB0aGF0IHRvIHRoZSBkaWZmZXJlbmNlIGFuZCBpZ25vcmUgY2hhbmdlMi4gT3RoZXJ3aXNlLCB0aGVyZSB3b3VsZCBiZSBhIGNvbXBvdW5kIGVmZmVjdC5cblxuICAgIGNoYW5nZTEgPSBjaGFuZ2UxIHx8IHNjcm9sbFRvIC0gaW5pdGlhbFZhbHVlO1xuICAgIHR3ZWVuICYmIHR3ZWVuLmtpbGwoKTtcbiAgICB2YXJzW3Byb3BdID0gc2Nyb2xsVG87XG4gICAgdmFycy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG5cbiAgICBtb2RpZmllcnNbcHJvcF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gY2hlY2tGb3JJbnRlcnJ1cHRpb24oaW5pdGlhbFZhbHVlICsgY2hhbmdlMSAqIHR3ZWVuLnJhdGlvICsgY2hhbmdlMiAqIHR3ZWVuLnJhdGlvICogdHdlZW4ucmF0aW8pO1xuICAgIH07XG5cbiAgICB2YXJzLm9uVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3Njcm9sbGVycy5jYWNoZSsrO1xuXG4gICAgICBfdXBkYXRlQWxsKCk7XG4gICAgfTtcblxuICAgIHZhcnMub25Db21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGdldFR3ZWVuLnR3ZWVuID0gMDtcbiAgICAgIG9uQ29tcGxldGUgJiYgb25Db21wbGV0ZS5jYWxsKHR3ZWVuKTtcbiAgICB9O1xuXG4gICAgdHdlZW4gPSBnZXRUd2Vlbi50d2VlbiA9IGdzYXAudG8oc2Nyb2xsZXIsIHZhcnMpO1xuICAgIHJldHVybiB0d2VlbjtcbiAgfTtcblxuICBzY3JvbGxlcltwcm9wXSA9IGdldFNjcm9sbDtcblxuICBnZXRTY3JvbGwud2hlZWxIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBnZXRUd2Vlbi50d2VlbiAmJiBnZXRUd2Vlbi50d2Vlbi5raWxsKCkgJiYgKGdldFR3ZWVuLnR3ZWVuID0gMCk7XG4gIH07XG5cbiAgX2FkZExpc3RlbmVyKHNjcm9sbGVyLCBcIndoZWVsXCIsIGdldFNjcm9sbC53aGVlbEhhbmRsZXIpOyAvLyBXaW5kb3dzIG1hY2hpbmVzIGhhbmRsZSBtb3VzZXdoZWVsIHNjcm9sbGluZyBpbiBjaHVua3MgKGxpa2UgXCIzIGxpbmVzIHBlciBzY3JvbGxcIikgbWVhbmluZyB0aGUgdHlwaWNhbCBzdHJhdGVneSBmb3IgY2FuY2VsbGluZyB0aGUgc2Nyb2xsIGlzbid0IGFzIHNlbnNpdGl2ZS4gSXQncyBtdWNoIG1vcmUgbGlrZWx5IHRvIG1hdGNoIG9uZSBvZiB0aGUgcHJldmlvdXMgMiBzY3JvbGwgZXZlbnQgcG9zaXRpb25zLiBTbyB3ZSBraWxsIGFueSBzbmFwcGluZyBhcyBzb29uIGFzIHRoZXJlJ3MgYSB3aGVlbCBldmVudC5cblxuXG4gIFNjcm9sbFRyaWdnZXIuaXNUb3VjaCAmJiBfYWRkTGlzdGVuZXIoc2Nyb2xsZXIsIFwidG91Y2htb3ZlXCIsIGdldFNjcm9sbC53aGVlbEhhbmRsZXIpO1xuICByZXR1cm4gZ2V0VHdlZW47XG59O1xuXG5leHBvcnQgdmFyIFNjcm9sbFRyaWdnZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTY3JvbGxUcmlnZ2VyKHZhcnMsIGFuaW1hdGlvbikge1xuICAgIF9jb3JlSW5pdHRlZCB8fCBTY3JvbGxUcmlnZ2VyLnJlZ2lzdGVyKGdzYXApIHx8IGNvbnNvbGUud2FybihcIlBsZWFzZSBnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpXCIpO1xuXG4gICAgX2NvbnRleHQodGhpcyk7XG5cbiAgICB0aGlzLmluaXQodmFycywgYW5pbWF0aW9uKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTY3JvbGxUcmlnZ2VyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uaW5pdCA9IGZ1bmN0aW9uIGluaXQodmFycywgYW5pbWF0aW9uKSB7XG4gICAgdGhpcy5wcm9ncmVzcyA9IHRoaXMuc3RhcnQgPSAwO1xuICAgIHRoaXMudmFycyAmJiB0aGlzLmtpbGwodHJ1ZSwgdHJ1ZSk7IC8vIGluIGNhc2UgaXQncyBiZWluZyBpbml0dGVkIGFnYWluXG5cbiAgICBpZiAoIV9lbmFibGVkKSB7XG4gICAgICB0aGlzLnVwZGF0ZSA9IHRoaXMucmVmcmVzaCA9IHRoaXMua2lsbCA9IF9wYXNzVGhyb3VnaDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXJzID0gX3NldERlZmF1bHRzKF9pc1N0cmluZyh2YXJzKSB8fCBfaXNOdW1iZXIodmFycykgfHwgdmFycy5ub2RlVHlwZSA/IHtcbiAgICAgIHRyaWdnZXI6IHZhcnNcbiAgICB9IDogdmFycywgX2RlZmF1bHRzKTtcblxuICAgIHZhciBfdmFycyA9IHZhcnMsXG4gICAgICAgIG9uVXBkYXRlID0gX3ZhcnMub25VcGRhdGUsXG4gICAgICAgIHRvZ2dsZUNsYXNzID0gX3ZhcnMudG9nZ2xlQ2xhc3MsXG4gICAgICAgIGlkID0gX3ZhcnMuaWQsXG4gICAgICAgIG9uVG9nZ2xlID0gX3ZhcnMub25Ub2dnbGUsXG4gICAgICAgIG9uUmVmcmVzaCA9IF92YXJzLm9uUmVmcmVzaCxcbiAgICAgICAgc2NydWIgPSBfdmFycy5zY3J1YixcbiAgICAgICAgdHJpZ2dlciA9IF92YXJzLnRyaWdnZXIsXG4gICAgICAgIHBpbiA9IF92YXJzLnBpbixcbiAgICAgICAgcGluU3BhY2luZyA9IF92YXJzLnBpblNwYWNpbmcsXG4gICAgICAgIGludmFsaWRhdGVPblJlZnJlc2ggPSBfdmFycy5pbnZhbGlkYXRlT25SZWZyZXNoLFxuICAgICAgICBhbnRpY2lwYXRlUGluID0gX3ZhcnMuYW50aWNpcGF0ZVBpbixcbiAgICAgICAgb25TY3J1YkNvbXBsZXRlID0gX3ZhcnMub25TY3J1YkNvbXBsZXRlLFxuICAgICAgICBvblNuYXBDb21wbGV0ZSA9IF92YXJzLm9uU25hcENvbXBsZXRlLFxuICAgICAgICBvbmNlID0gX3ZhcnMub25jZSxcbiAgICAgICAgc25hcCA9IF92YXJzLnNuYXAsXG4gICAgICAgIHBpblJlcGFyZW50ID0gX3ZhcnMucGluUmVwYXJlbnQsXG4gICAgICAgIHBpblNwYWNlciA9IF92YXJzLnBpblNwYWNlcixcbiAgICAgICAgY29udGFpbmVyQW5pbWF0aW9uID0gX3ZhcnMuY29udGFpbmVyQW5pbWF0aW9uLFxuICAgICAgICBmYXN0U2Nyb2xsRW5kID0gX3ZhcnMuZmFzdFNjcm9sbEVuZCxcbiAgICAgICAgcHJldmVudE92ZXJsYXBzID0gX3ZhcnMucHJldmVudE92ZXJsYXBzLFxuICAgICAgICBkaXJlY3Rpb24gPSB2YXJzLmhvcml6b250YWwgfHwgdmFycy5jb250YWluZXJBbmltYXRpb24gJiYgdmFycy5ob3Jpem9udGFsICE9PSBmYWxzZSA/IF9ob3Jpem9udGFsIDogX3ZlcnRpY2FsLFxuICAgICAgICBpc1RvZ2dsZSA9ICFzY3J1YiAmJiBzY3J1YiAhPT0gMCxcbiAgICAgICAgc2Nyb2xsZXIgPSBfZ2V0VGFyZ2V0KHZhcnMuc2Nyb2xsZXIgfHwgX3dpbiksXG4gICAgICAgIHNjcm9sbGVyQ2FjaGUgPSBnc2FwLmNvcmUuZ2V0Q2FjaGUoc2Nyb2xsZXIpLFxuICAgICAgICBpc1ZpZXdwb3J0ID0gX2lzVmlld3BvcnQoc2Nyb2xsZXIpLFxuICAgICAgICB1c2VGaXhlZFBvc2l0aW9uID0gKFwicGluVHlwZVwiIGluIHZhcnMgPyB2YXJzLnBpblR5cGUgOiBfZ2V0UHJveHlQcm9wKHNjcm9sbGVyLCBcInBpblR5cGVcIikgfHwgaXNWaWV3cG9ydCAmJiBcImZpeGVkXCIpID09PSBcImZpeGVkXCIsXG4gICAgICAgIGNhbGxiYWNrcyA9IFt2YXJzLm9uRW50ZXIsIHZhcnMub25MZWF2ZSwgdmFycy5vbkVudGVyQmFjaywgdmFycy5vbkxlYXZlQmFja10sXG4gICAgICAgIHRvZ2dsZUFjdGlvbnMgPSBpc1RvZ2dsZSAmJiB2YXJzLnRvZ2dsZUFjdGlvbnMuc3BsaXQoXCIgXCIpLFxuICAgICAgICBtYXJrZXJzID0gXCJtYXJrZXJzXCIgaW4gdmFycyA/IHZhcnMubWFya2VycyA6IF9kZWZhdWx0cy5tYXJrZXJzLFxuICAgICAgICBib3JkZXJXaWR0aCA9IGlzVmlld3BvcnQgPyAwIDogcGFyc2VGbG9hdChfZ2V0Q29tcHV0ZWRTdHlsZShzY3JvbGxlcilbXCJib3JkZXJcIiArIGRpcmVjdGlvbi5wMiArIF9XaWR0aF0pIHx8IDAsXG4gICAgICAgIHNlbGYgPSB0aGlzLFxuICAgICAgICBvblJlZnJlc2hJbml0ID0gdmFycy5vblJlZnJlc2hJbml0ICYmIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB2YXJzLm9uUmVmcmVzaEluaXQoc2VsZik7XG4gICAgfSxcbiAgICAgICAgZ2V0U2Nyb2xsZXJTaXplID0gX2dldFNpemVGdW5jKHNjcm9sbGVyLCBpc1ZpZXdwb3J0LCBkaXJlY3Rpb24pLFxuICAgICAgICBnZXRTY3JvbGxlck9mZnNldHMgPSBfZ2V0T2Zmc2V0c0Z1bmMoc2Nyb2xsZXIsIGlzVmlld3BvcnQpLFxuICAgICAgICBsYXN0U25hcCA9IDAsXG4gICAgICAgIGxhc3RSZWZyZXNoID0gMCxcbiAgICAgICAgcHJldlByb2dyZXNzID0gMCxcbiAgICAgICAgc2Nyb2xsRnVuYyA9IF9nZXRTY3JvbGxGdW5jKHNjcm9sbGVyLCBkaXJlY3Rpb24pLFxuICAgICAgICB0d2VlblRvLFxuICAgICAgICBwaW5DYWNoZSxcbiAgICAgICAgc25hcEZ1bmMsXG4gICAgICAgIHNjcm9sbDEsXG4gICAgICAgIHNjcm9sbDIsXG4gICAgICAgIHN0YXJ0LFxuICAgICAgICBlbmQsXG4gICAgICAgIG1hcmtlclN0YXJ0LFxuICAgICAgICBtYXJrZXJFbmQsXG4gICAgICAgIG1hcmtlclN0YXJ0VHJpZ2dlcixcbiAgICAgICAgbWFya2VyRW5kVHJpZ2dlcixcbiAgICAgICAgbWFya2VyVmFycyxcbiAgICAgICAgZXhlY3V0aW5nT25SZWZyZXNoLFxuICAgICAgICBjaGFuZ2UsXG4gICAgICAgIHBpbk9yaWdpbmFsU3RhdGUsXG4gICAgICAgIHBpbkFjdGl2ZVN0YXRlLFxuICAgICAgICBwaW5TdGF0ZSxcbiAgICAgICAgc3BhY2VyLFxuICAgICAgICBvZmZzZXQsXG4gICAgICAgIHBpbkdldHRlcixcbiAgICAgICAgcGluU2V0dGVyLFxuICAgICAgICBwaW5TdGFydCxcbiAgICAgICAgcGluQ2hhbmdlLFxuICAgICAgICBzcGFjaW5nU3RhcnQsXG4gICAgICAgIHNwYWNlclN0YXRlLFxuICAgICAgICBtYXJrZXJTdGFydFNldHRlcixcbiAgICAgICAgcGluTW92ZXMsXG4gICAgICAgIG1hcmtlckVuZFNldHRlcixcbiAgICAgICAgY3MsXG4gICAgICAgIHNuYXAxLFxuICAgICAgICBzbmFwMixcbiAgICAgICAgc2NydWJUd2VlbixcbiAgICAgICAgc2NydWJTbW9vdGgsXG4gICAgICAgIHNuYXBEdXJDbGFtcCxcbiAgICAgICAgc25hcERlbGF5ZWRDYWxsLFxuICAgICAgICBwcmV2U2Nyb2xsLFxuICAgICAgICBwcmV2QW5pbVByb2dyZXNzLFxuICAgICAgICBjYU1hcmtlclNldHRlcixcbiAgICAgICAgY3VzdG9tUmV2ZXJ0UmV0dXJuOyAvLyBmb3IgdGhlIHNha2Ugb2YgZWZmaWNpZW5jeSwgX3N0YXJ0Q2xhbXAvX2VuZENsYW1wIHNlcnZlIGxpa2UgYSB0cnV0aHkgdmFsdWUgaW5kaWNhdGluZyB0aGF0IGNsYW1waW5nIHdhcyBlbmFibGVkIG9uIHRoZSBzdGFydC9lbmQsIGFuZCBBTFNPIHN0b3JlIHRoZSBhY3R1YWwgcHJlLWNsYW1wZWQgbnVtZXJpYyB2YWx1ZS4gV2UgdGFwIGludG8gdGhhdCBpbiBTY3JvbGxTbW9vdGhlciBmb3Igc3BlZWQgZWZmZWN0cy4gU28gZm9yIGV4YW1wbGUsIGlmIHN0YXJ0PVwiY2xhbXAodG9wIGJvdHRvbSlcIiByZXN1bHRzIGluIGEgc3RhcnQgb2YgLTEwMCBuYXR1cmFsbHksIGl0IHdvdWxkIGdldCBjbGFtcGVkIHRvIDAgYnV0IC0xMDAgd291bGQgYmUgc3RvcmVkIGluIF9zdGFydENsYW1wLlxuXG5cbiAgICBzZWxmLl9zdGFydENsYW1wID0gc2VsZi5fZW5kQ2xhbXAgPSBmYWxzZTtcbiAgICBzZWxmLl9kaXIgPSBkaXJlY3Rpb247XG4gICAgYW50aWNpcGF0ZVBpbiAqPSA0NTtcbiAgICBzZWxmLnNjcm9sbGVyID0gc2Nyb2xsZXI7XG4gICAgc2VsZi5zY3JvbGwgPSBjb250YWluZXJBbmltYXRpb24gPyBjb250YWluZXJBbmltYXRpb24udGltZS5iaW5kKGNvbnRhaW5lckFuaW1hdGlvbikgOiBzY3JvbGxGdW5jO1xuICAgIHNjcm9sbDEgPSBzY3JvbGxGdW5jKCk7XG4gICAgc2VsZi52YXJzID0gdmFycztcbiAgICBhbmltYXRpb24gPSBhbmltYXRpb24gfHwgdmFycy5hbmltYXRpb247XG5cbiAgICBpZiAoXCJyZWZyZXNoUHJpb3JpdHlcIiBpbiB2YXJzKSB7XG4gICAgICBfc29ydCA9IDE7XG4gICAgICB2YXJzLnJlZnJlc2hQcmlvcml0eSA9PT0gLTk5OTkgJiYgKF9wcmltYXJ5ID0gc2VsZik7IC8vIHVzZWQgYnkgU2Nyb2xsU21vb3RoZXJcbiAgICB9XG5cbiAgICBzY3JvbGxlckNhY2hlLnR3ZWVuU2Nyb2xsID0gc2Nyb2xsZXJDYWNoZS50d2VlblNjcm9sbCB8fCB7XG4gICAgICB0b3A6IF9nZXRUd2VlbkNyZWF0b3Ioc2Nyb2xsZXIsIF92ZXJ0aWNhbCksXG4gICAgICBsZWZ0OiBfZ2V0VHdlZW5DcmVhdG9yKHNjcm9sbGVyLCBfaG9yaXpvbnRhbClcbiAgICB9O1xuICAgIHNlbGYudHdlZW5UbyA9IHR3ZWVuVG8gPSBzY3JvbGxlckNhY2hlLnR3ZWVuU2Nyb2xsW2RpcmVjdGlvbi5wXTtcblxuICAgIHNlbGYuc2NydWJEdXJhdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgc2NydWJTbW9vdGggPSBfaXNOdW1iZXIodmFsdWUpICYmIHZhbHVlO1xuXG4gICAgICBpZiAoIXNjcnViU21vb3RoKSB7XG4gICAgICAgIHNjcnViVHdlZW4gJiYgc2NydWJUd2Vlbi5wcm9ncmVzcygxKS5raWxsKCk7XG4gICAgICAgIHNjcnViVHdlZW4gPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NydWJUd2VlbiA/IHNjcnViVHdlZW4uZHVyYXRpb24odmFsdWUpIDogc2NydWJUd2VlbiA9IGdzYXAudG8oYW5pbWF0aW9uLCB7XG4gICAgICAgICAgZWFzZTogXCJleHBvXCIsXG4gICAgICAgICAgdG90YWxQcm9ncmVzczogXCIrPTBcIixcbiAgICAgICAgICBkdXJhdGlvbjogc2NydWJTbW9vdGgsXG4gICAgICAgICAgcGF1c2VkOiB0cnVlLFxuICAgICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uIG9uQ29tcGxldGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gb25TY3J1YkNvbXBsZXRlICYmIG9uU2NydWJDb21wbGV0ZShzZWxmKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoYW5pbWF0aW9uKSB7XG4gICAgICBhbmltYXRpb24udmFycy5sYXp5ID0gZmFsc2U7XG4gICAgICBhbmltYXRpb24uX2luaXR0ZWQgJiYgIXNlbGYuaXNSZXZlcnRlZCB8fCBhbmltYXRpb24udmFycy5pbW1lZGlhdGVSZW5kZXIgIT09IGZhbHNlICYmIHZhcnMuaW1tZWRpYXRlUmVuZGVyICE9PSBmYWxzZSAmJiBhbmltYXRpb24uZHVyYXRpb24oKSAmJiBhbmltYXRpb24ucmVuZGVyKDAsIHRydWUsIHRydWUpOyAvLyBzcGVjaWFsIGNhc2U6IGlmIHRoaXMgU2Nyb2xsVHJpZ2dlciBnZXRzIHJlLWluaXR0ZWQsIGEgZnJvbSgpIHR3ZWVuIHdpdGggYSBzdGFnZ2VyIGNvdWxkIGdldCBpbml0dGVkIGluaXRpYWxseSBhbmQgdGhlbiByZXZlcnRlZCBvbiB0aGUgcmUtaW5pdCB3aGljaCBtZWFucyBpdCdsbCBuZWVkIHRvIGdldCByZW5kZXJlZCBhZ2FpbiBoZXJlIHRvIHByb3Blcmx5IGRpc3BsYXkgdGhpbmdzLiBPdGhlcndpc2UsIFNlZSBodHRwczovL2dyZWVuc29jay5jb20vZm9ydW1zL3RvcGljLzM2Nzc3LXNjcm9sbHNtb290aGVyLXNwbGl0dGV4dC1uZXh0anMvIGFuZCBodHRwczovL2NvZGVwZW4uaW8vR3JlZW5Tb2NrL3Blbi9lWVB5UHBkP2VkaXRvcnM9MDAxMFxuXG4gICAgICBzZWxmLmFuaW1hdGlvbiA9IGFuaW1hdGlvbi5wYXVzZSgpO1xuICAgICAgYW5pbWF0aW9uLnNjcm9sbFRyaWdnZXIgPSBzZWxmO1xuICAgICAgc2VsZi5zY3J1YkR1cmF0aW9uKHNjcnViKTtcbiAgICAgIHNuYXAxID0gMDtcbiAgICAgIGlkIHx8IChpZCA9IGFuaW1hdGlvbi52YXJzLmlkKTtcbiAgICB9XG5cbiAgICBpZiAoc25hcCkge1xuICAgICAgLy8gVE9ETzogcG90ZW50aWFsIGlkZWE6IHVzZSBsZWdpdGltYXRlIENTUyBzY3JvbGwgc25hcHBpbmcgYnkgcHVzaGluZyBpbnZpc2libGUgZWxlbWVudHMgaW50byB0aGUgRE9NIHRoYXQgc2VydmUgYXMgc25hcCBwb3NpdGlvbnMsIGFuZCB0b2dnbGUgdGhlIGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc3R5bGUuc2Nyb2xsU25hcFR5cGUgb25Ub2dnbGUuIFNlZSBodHRwczovL2NvZGVwZW4uaW8vR3JlZW5Tb2NrL3Blbi9KakxyZ1dNIGZvciBhIHF1aWNrIHByb29mIG9mIGNvbmNlcHQuXG4gICAgICBpZiAoIV9pc09iamVjdChzbmFwKSB8fCBzbmFwLnB1c2gpIHtcbiAgICAgICAgc25hcCA9IHtcbiAgICAgICAgICBzbmFwVG86IHNuYXBcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgXCJzY3JvbGxCZWhhdmlvclwiIGluIF9ib2R5LnN0eWxlICYmIGdzYXAuc2V0KGlzVmlld3BvcnQgPyBbX2JvZHksIF9kb2NFbF0gOiBzY3JvbGxlciwge1xuICAgICAgICBzY3JvbGxCZWhhdmlvcjogXCJhdXRvXCJcbiAgICAgIH0pOyAvLyBzbW9vdGggc2Nyb2xsaW5nIGRvZXNuJ3Qgd29yayB3aXRoIHNuYXAuXG5cbiAgICAgIF9zY3JvbGxlcnMuZm9yRWFjaChmdW5jdGlvbiAobykge1xuICAgICAgICByZXR1cm4gX2lzRnVuY3Rpb24obykgJiYgby50YXJnZXQgPT09IChpc1ZpZXdwb3J0ID8gX2RvYy5zY3JvbGxpbmdFbGVtZW50IHx8IF9kb2NFbCA6IHNjcm9sbGVyKSAmJiAoby5zbW9vdGggPSBmYWxzZSk7XG4gICAgICB9KTsgLy8gbm90ZTogc2V0IHNtb290aCB0byBmYWxzZSBvbiBib3RoIHRoZSB2ZXJ0aWNhbCBhbmQgaG9yaXpvbnRhbCBzY3JvbGwgZ2V0dGVycy9zZXR0ZXJzXG5cblxuICAgICAgc25hcEZ1bmMgPSBfaXNGdW5jdGlvbihzbmFwLnNuYXBUbykgPyBzbmFwLnNuYXBUbyA6IHNuYXAuc25hcFRvID09PSBcImxhYmVsc1wiID8gX2dldENsb3Nlc3RMYWJlbChhbmltYXRpb24pIDogc25hcC5zbmFwVG8gPT09IFwibGFiZWxzRGlyZWN0aW9uYWxcIiA/IF9nZXRMYWJlbEF0RGlyZWN0aW9uKGFuaW1hdGlvbikgOiBzbmFwLmRpcmVjdGlvbmFsICE9PSBmYWxzZSA/IGZ1bmN0aW9uICh2YWx1ZSwgc3QpIHtcbiAgICAgICAgcmV0dXJuIF9zbmFwRGlyZWN0aW9uYWwoc25hcC5zbmFwVG8pKHZhbHVlLCBfZ2V0VGltZSgpIC0gbGFzdFJlZnJlc2ggPCA1MDAgPyAwIDogc3QuZGlyZWN0aW9uKTtcbiAgICAgIH0gOiBnc2FwLnV0aWxzLnNuYXAoc25hcC5zbmFwVG8pO1xuICAgICAgc25hcER1ckNsYW1wID0gc25hcC5kdXJhdGlvbiB8fCB7XG4gICAgICAgIG1pbjogMC4xLFxuICAgICAgICBtYXg6IDJcbiAgICAgIH07XG4gICAgICBzbmFwRHVyQ2xhbXAgPSBfaXNPYmplY3Qoc25hcER1ckNsYW1wKSA/IF9jbGFtcChzbmFwRHVyQ2xhbXAubWluLCBzbmFwRHVyQ2xhbXAubWF4KSA6IF9jbGFtcChzbmFwRHVyQ2xhbXAsIHNuYXBEdXJDbGFtcCk7XG4gICAgICBzbmFwRGVsYXllZENhbGwgPSBnc2FwLmRlbGF5ZWRDYWxsKHNuYXAuZGVsYXkgfHwgc2NydWJTbW9vdGggLyAyIHx8IDAuMSwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2Nyb2xsID0gc2Nyb2xsRnVuYygpLFxuICAgICAgICAgICAgcmVmcmVzaGVkUmVjZW50bHkgPSBfZ2V0VGltZSgpIC0gbGFzdFJlZnJlc2ggPCA1MDAsXG4gICAgICAgICAgICB0d2VlbiA9IHR3ZWVuVG8udHdlZW47XG5cbiAgICAgICAgaWYgKChyZWZyZXNoZWRSZWNlbnRseSB8fCBNYXRoLmFicyhzZWxmLmdldFZlbG9jaXR5KCkpIDwgMTApICYmICF0d2VlbiAmJiAhX3BvaW50ZXJJc0Rvd24gJiYgbGFzdFNuYXAgIT09IHNjcm9sbCkge1xuICAgICAgICAgIHZhciBwcm9ncmVzcyA9IChzY3JvbGwgLSBzdGFydCkgLyBjaGFuZ2UsXG4gICAgICAgICAgICAgIHRvdGFsUHJvZ3Jlc3MgPSBhbmltYXRpb24gJiYgIWlzVG9nZ2xlID8gYW5pbWF0aW9uLnRvdGFsUHJvZ3Jlc3MoKSA6IHByb2dyZXNzLFxuICAgICAgICAgICAgICB2ZWxvY2l0eSA9IHJlZnJlc2hlZFJlY2VudGx5ID8gMCA6ICh0b3RhbFByb2dyZXNzIC0gc25hcDIpIC8gKF9nZXRUaW1lKCkgLSBfdGltZTIpICogMTAwMCB8fCAwLFxuICAgICAgICAgICAgICBjaGFuZ2UxID0gZ3NhcC51dGlscy5jbGFtcCgtcHJvZ3Jlc3MsIDEgLSBwcm9ncmVzcywgX2Ficyh2ZWxvY2l0eSAvIDIpICogdmVsb2NpdHkgLyAwLjE4NSksXG4gICAgICAgICAgICAgIG5hdHVyYWxFbmQgPSBwcm9ncmVzcyArIChzbmFwLmluZXJ0aWEgPT09IGZhbHNlID8gMCA6IGNoYW5nZTEpLFxuICAgICAgICAgICAgICBlbmRWYWx1ZSA9IF9jbGFtcCgwLCAxLCBzbmFwRnVuYyhuYXR1cmFsRW5kLCBzZWxmKSksXG4gICAgICAgICAgICAgIGVuZFNjcm9sbCA9IE1hdGgucm91bmQoc3RhcnQgKyBlbmRWYWx1ZSAqIGNoYW5nZSksXG4gICAgICAgICAgICAgIF9zbmFwID0gc25hcCxcbiAgICAgICAgICAgICAgb25TdGFydCA9IF9zbmFwLm9uU3RhcnQsXG4gICAgICAgICAgICAgIF9vbkludGVycnVwdCA9IF9zbmFwLm9uSW50ZXJydXB0LFxuICAgICAgICAgICAgICBfb25Db21wbGV0ZSA9IF9zbmFwLm9uQ29tcGxldGU7XG5cbiAgICAgICAgICBpZiAoc2Nyb2xsIDw9IGVuZCAmJiBzY3JvbGwgPj0gc3RhcnQgJiYgZW5kU2Nyb2xsICE9PSBzY3JvbGwpIHtcbiAgICAgICAgICAgIGlmICh0d2VlbiAmJiAhdHdlZW4uX2luaXR0ZWQgJiYgdHdlZW4uZGF0YSA8PSBfYWJzKGVuZFNjcm9sbCAtIHNjcm9sbCkpIHtcbiAgICAgICAgICAgICAgLy8gdGhlcmUncyBhbiBvdmVybGFwcGluZyBzbmFwISBTbyB3ZSBtdXN0IGZpZ3VyZSBvdXQgd2hpY2ggb25lIGlzIGNsb3NlciBhbmQgbGV0IHRoYXQgdHdlZW4gbGl2ZS5cbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc25hcC5pbmVydGlhID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICBjaGFuZ2UxID0gZW5kVmFsdWUgLSBwcm9ncmVzcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHdlZW5UbyhlbmRTY3JvbGwsIHtcbiAgICAgICAgICAgICAgZHVyYXRpb246IHNuYXBEdXJDbGFtcChfYWJzKE1hdGgubWF4KF9hYnMobmF0dXJhbEVuZCAtIHRvdGFsUHJvZ3Jlc3MpLCBfYWJzKGVuZFZhbHVlIC0gdG90YWxQcm9ncmVzcykpICogMC4xODUgLyB2ZWxvY2l0eSAvIDAuMDUgfHwgMCkpLFxuICAgICAgICAgICAgICBlYXNlOiBzbmFwLmVhc2UgfHwgXCJwb3dlcjNcIixcbiAgICAgICAgICAgICAgZGF0YTogX2FicyhlbmRTY3JvbGwgLSBzY3JvbGwpLFxuICAgICAgICAgICAgICAvLyByZWNvcmQgdGhlIGRpc3RhbmNlIHNvIHRoYXQgaWYgYW5vdGhlciBzbmFwIHR3ZWVuIG9jY3VycyAoY29uZmxpY3QpIHdlIGNhbiBwcmlvcml0aXplIHRoZSBjbG9zZXN0IHNuYXAuXG4gICAgICAgICAgICAgIG9uSW50ZXJydXB0OiBmdW5jdGlvbiBvbkludGVycnVwdCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc25hcERlbGF5ZWRDYWxsLnJlc3RhcnQodHJ1ZSkgJiYgX29uSW50ZXJydXB0ICYmIF9vbkludGVycnVwdChzZWxmKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gb25Db21wbGV0ZSgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIGxhc3RTbmFwID0gc2Nyb2xsRnVuYygpO1xuICAgICAgICAgICAgICAgIHNuYXAxID0gc25hcDIgPSBhbmltYXRpb24gJiYgIWlzVG9nZ2xlID8gYW5pbWF0aW9uLnRvdGFsUHJvZ3Jlc3MoKSA6IHNlbGYucHJvZ3Jlc3M7XG4gICAgICAgICAgICAgICAgb25TbmFwQ29tcGxldGUgJiYgb25TbmFwQ29tcGxldGUoc2VsZik7XG4gICAgICAgICAgICAgICAgX29uQ29tcGxldGUgJiYgX29uQ29tcGxldGUoc2VsZik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHNjcm9sbCwgY2hhbmdlMSAqIGNoYW5nZSwgZW5kU2Nyb2xsIC0gc2Nyb2xsIC0gY2hhbmdlMSAqIGNoYW5nZSk7XG4gICAgICAgICAgICBvblN0YXJ0ICYmIG9uU3RhcnQoc2VsZiwgdHdlZW5Uby50d2Vlbik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHNlbGYuaXNBY3RpdmUgJiYgbGFzdFNuYXAgIT09IHNjcm9sbCkge1xuICAgICAgICAgIHNuYXBEZWxheWVkQ2FsbC5yZXN0YXJ0KHRydWUpO1xuICAgICAgICB9XG4gICAgICB9KS5wYXVzZSgpO1xuICAgIH1cblxuICAgIGlkICYmIChfaWRzW2lkXSA9IHNlbGYpO1xuICAgIHRyaWdnZXIgPSBzZWxmLnRyaWdnZXIgPSBfZ2V0VGFyZ2V0KHRyaWdnZXIgfHwgcGluICE9PSB0cnVlICYmIHBpbik7IC8vIGlmIGEgdHJpZ2dlciBoYXMgc29tZSBraW5kIG9mIHNjcm9sbC1yZWxhdGVkIGVmZmVjdCBhcHBsaWVkIHRoYXQgY291bGQgY29udGFtaW5hdGUgdGhlIFwieVwiIG9yIFwieFwiIHBvc2l0aW9uIChsaWtlIGEgU2Nyb2xsU21vb3RoZXIgZWZmZWN0KSwgd2UgbmVlZGVkIGEgd2F5IHRvIHRlbXBvcmFyaWx5IHJldmVydCBpdCwgc28gd2UgdXNlIHRoZSBzdFJldmVydCBwcm9wZXJ0eSBvZiB0aGUgZ3NDYWNoZS4gSXQgY2FuIHJldHVybiBhbm90aGVyIGZ1bmN0aW9uIHRoYXQgd2UnbGwgY2FsbCBhdCB0aGUgZW5kIHNvIGl0IGNhbiByZXR1cm4gdG8gaXRzIG5vcm1hbCBzdGF0ZS5cblxuICAgIGN1c3RvbVJldmVydFJldHVybiA9IHRyaWdnZXIgJiYgdHJpZ2dlci5fZ3NhcCAmJiB0cmlnZ2VyLl9nc2FwLnN0UmV2ZXJ0O1xuICAgIGN1c3RvbVJldmVydFJldHVybiAmJiAoY3VzdG9tUmV2ZXJ0UmV0dXJuID0gY3VzdG9tUmV2ZXJ0UmV0dXJuKHNlbGYpKTtcbiAgICBwaW4gPSBwaW4gPT09IHRydWUgPyB0cmlnZ2VyIDogX2dldFRhcmdldChwaW4pO1xuICAgIF9pc1N0cmluZyh0b2dnbGVDbGFzcykgJiYgKHRvZ2dsZUNsYXNzID0ge1xuICAgICAgdGFyZ2V0czogdHJpZ2dlcixcbiAgICAgIGNsYXNzTmFtZTogdG9nZ2xlQ2xhc3NcbiAgICB9KTtcblxuICAgIGlmIChwaW4pIHtcbiAgICAgIHBpblNwYWNpbmcgPT09IGZhbHNlIHx8IHBpblNwYWNpbmcgPT09IF9tYXJnaW4gfHwgKHBpblNwYWNpbmcgPSAhcGluU3BhY2luZyAmJiBwaW4ucGFyZW50Tm9kZSAmJiBwaW4ucGFyZW50Tm9kZS5zdHlsZSAmJiBfZ2V0Q29tcHV0ZWRTdHlsZShwaW4ucGFyZW50Tm9kZSkuZGlzcGxheSA9PT0gXCJmbGV4XCIgPyBmYWxzZSA6IF9wYWRkaW5nKTsgLy8gaWYgdGhlIHBhcmVudCBpcyBkaXNwbGF5OiBmbGV4LCBkb24ndCBhcHBseSBwaW5TcGFjaW5nIGJ5IGRlZmF1bHQuIFdlIHNob3VsZCBjaGVjayB0aGF0IHBpbi5wYXJlbnROb2RlIGlzIGFuIGVsZW1lbnQgKG5vdCBzaGFkb3cgZG9tIHdpbmRvdylcblxuICAgICAgc2VsZi5waW4gPSBwaW47XG4gICAgICBwaW5DYWNoZSA9IGdzYXAuY29yZS5nZXRDYWNoZShwaW4pO1xuXG4gICAgICBpZiAoIXBpbkNhY2hlLnNwYWNlcikge1xuICAgICAgICAvLyByZWNvcmQgdGhlIHNwYWNlciBhbmQgcGluT3JpZ2luYWxTdGF0ZSBvbiB0aGUgY2FjaGUgaW4gY2FzZSBzb21lb25lIHRyaWVzIHBpbm5pbmcgdGhlIHNhbWUgZWxlbWVudCB3aXRoIE1VTFRJUExFIFNjcm9sbFRyaWdnZXJzIC0gd2UgZG9uJ3Qgd2FudCB0byBoYXZlIG11bHRpcGxlIHNwYWNlcnMgb3IgcmVjb3JkIHRoZSBcIm9yaWdpbmFsXCIgcGluIHN0YXRlIGFmdGVyIGl0IGhhcyBhbHJlYWR5IGJlZW4gYWZmZWN0ZWQgYnkgYW5vdGhlciBTY3JvbGxUcmlnZ2VyLlxuICAgICAgICBpZiAocGluU3BhY2VyKSB7XG4gICAgICAgICAgcGluU3BhY2VyID0gX2dldFRhcmdldChwaW5TcGFjZXIpO1xuICAgICAgICAgIHBpblNwYWNlciAmJiAhcGluU3BhY2VyLm5vZGVUeXBlICYmIChwaW5TcGFjZXIgPSBwaW5TcGFjZXIuY3VycmVudCB8fCBwaW5TcGFjZXIubmF0aXZlRWxlbWVudCk7IC8vIGZvciBSZWFjdCAmIEFuZ3VsYXJcblxuICAgICAgICAgIHBpbkNhY2hlLnNwYWNlcklzTmF0aXZlID0gISFwaW5TcGFjZXI7XG4gICAgICAgICAgcGluU3BhY2VyICYmIChwaW5DYWNoZS5zcGFjZXJTdGF0ZSA9IF9nZXRTdGF0ZShwaW5TcGFjZXIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBpbkNhY2hlLnNwYWNlciA9IHNwYWNlciA9IHBpblNwYWNlciB8fCBfZG9jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNwYWNlci5jbGFzc0xpc3QuYWRkKFwicGluLXNwYWNlclwiKTtcbiAgICAgICAgaWQgJiYgc3BhY2VyLmNsYXNzTGlzdC5hZGQoXCJwaW4tc3BhY2VyLVwiICsgaWQpO1xuICAgICAgICBwaW5DYWNoZS5waW5TdGF0ZSA9IHBpbk9yaWdpbmFsU3RhdGUgPSBfZ2V0U3RhdGUocGluKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBpbk9yaWdpbmFsU3RhdGUgPSBwaW5DYWNoZS5waW5TdGF0ZTtcbiAgICAgIH1cblxuICAgICAgdmFycy5mb3JjZTNEICE9PSBmYWxzZSAmJiBnc2FwLnNldChwaW4sIHtcbiAgICAgICAgZm9yY2UzRDogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBzZWxmLnNwYWNlciA9IHNwYWNlciA9IHBpbkNhY2hlLnNwYWNlcjtcbiAgICAgIGNzID0gX2dldENvbXB1dGVkU3R5bGUocGluKTtcbiAgICAgIHNwYWNpbmdTdGFydCA9IGNzW3BpblNwYWNpbmcgKyBkaXJlY3Rpb24ub3MyXTtcbiAgICAgIHBpbkdldHRlciA9IGdzYXAuZ2V0UHJvcGVydHkocGluKTtcbiAgICAgIHBpblNldHRlciA9IGdzYXAucXVpY2tTZXR0ZXIocGluLCBkaXJlY3Rpb24uYSwgX3B4KTsgLy8gcGluLmZpcnN0Q2hpbGQgJiYgIV9tYXhTY3JvbGwocGluLCBkaXJlY3Rpb24pICYmIChwaW4uc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiKTsgLy8gcHJvdGVjdHMgZnJvbSBjb2xsYXBzaW5nIG1hcmdpbnMsIGJ1dCBjYW4gaGF2ZSB1bmludGVuZGVkIGNvbnNlcXVlbmNlcyBhcyBkZW1vbnN0cmF0ZWQgaGVyZTogaHR0cHM6Ly9jb2RlcGVuLmlvL0dyZWVuU29jay9wZW4vMWU0MmM3YTczYmZhNDA5ZDJjZjFlMTg0ZTdhNDI0OGQgc28gaXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Igb2YganVzdCB0ZWxsaW5nIHBlb3BsZSB0byBzZXQgdXAgdGhlaXIgQ1NTIHRvIGF2b2lkIHRoZSBjb2xsYXBzaW5nIG1hcmdpbnMgKG92ZXJmbG93OiBoaWRkZW4gfCBhdXRvIGlzIGp1c3Qgb25lIG9wdGlvbi4gQW5vdGhlciBpcyBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQpLlxuXG4gICAgICBfc3dhcFBpbkluKHBpbiwgc3BhY2VyLCBjcyk7XG5cbiAgICAgIHBpblN0YXRlID0gX2dldFN0YXRlKHBpbik7XG4gICAgfVxuXG4gICAgaWYgKG1hcmtlcnMpIHtcbiAgICAgIG1hcmtlclZhcnMgPSBfaXNPYmplY3QobWFya2VycykgPyBfc2V0RGVmYXVsdHMobWFya2VycywgX21hcmtlckRlZmF1bHRzKSA6IF9tYXJrZXJEZWZhdWx0cztcbiAgICAgIG1hcmtlclN0YXJ0VHJpZ2dlciA9IF9jcmVhdGVNYXJrZXIoXCJzY3JvbGxlci1zdGFydFwiLCBpZCwgc2Nyb2xsZXIsIGRpcmVjdGlvbiwgbWFya2VyVmFycywgMCk7XG4gICAgICBtYXJrZXJFbmRUcmlnZ2VyID0gX2NyZWF0ZU1hcmtlcihcInNjcm9sbGVyLWVuZFwiLCBpZCwgc2Nyb2xsZXIsIGRpcmVjdGlvbiwgbWFya2VyVmFycywgMCwgbWFya2VyU3RhcnRUcmlnZ2VyKTtcbiAgICAgIG9mZnNldCA9IG1hcmtlclN0YXJ0VHJpZ2dlcltcIm9mZnNldFwiICsgZGlyZWN0aW9uLm9wLmQyXTtcblxuICAgICAgdmFyIGNvbnRlbnQgPSBfZ2V0VGFyZ2V0KF9nZXRQcm94eVByb3Aoc2Nyb2xsZXIsIFwiY29udGVudFwiKSB8fCBzY3JvbGxlcik7XG5cbiAgICAgIG1hcmtlclN0YXJ0ID0gdGhpcy5tYXJrZXJTdGFydCA9IF9jcmVhdGVNYXJrZXIoXCJzdGFydFwiLCBpZCwgY29udGVudCwgZGlyZWN0aW9uLCBtYXJrZXJWYXJzLCBvZmZzZXQsIDAsIGNvbnRhaW5lckFuaW1hdGlvbik7XG4gICAgICBtYXJrZXJFbmQgPSB0aGlzLm1hcmtlckVuZCA9IF9jcmVhdGVNYXJrZXIoXCJlbmRcIiwgaWQsIGNvbnRlbnQsIGRpcmVjdGlvbiwgbWFya2VyVmFycywgb2Zmc2V0LCAwLCBjb250YWluZXJBbmltYXRpb24pO1xuICAgICAgY29udGFpbmVyQW5pbWF0aW9uICYmIChjYU1hcmtlclNldHRlciA9IGdzYXAucXVpY2tTZXR0ZXIoW21hcmtlclN0YXJ0LCBtYXJrZXJFbmRdLCBkaXJlY3Rpb24uYSwgX3B4KSk7XG5cbiAgICAgIGlmICghdXNlRml4ZWRQb3NpdGlvbiAmJiAhKF9wcm94aWVzLmxlbmd0aCAmJiBfZ2V0UHJveHlQcm9wKHNjcm9sbGVyLCBcImZpeGVkTWFya2Vyc1wiKSA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgX21ha2VQb3NpdGlvbmFibGUoaXNWaWV3cG9ydCA/IF9ib2R5IDogc2Nyb2xsZXIpO1xuXG4gICAgICAgIGdzYXAuc2V0KFttYXJrZXJTdGFydFRyaWdnZXIsIG1hcmtlckVuZFRyaWdnZXJdLCB7XG4gICAgICAgICAgZm9yY2UzRDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgbWFya2VyU3RhcnRTZXR0ZXIgPSBnc2FwLnF1aWNrU2V0dGVyKG1hcmtlclN0YXJ0VHJpZ2dlciwgZGlyZWN0aW9uLmEsIF9weCk7XG4gICAgICAgIG1hcmtlckVuZFNldHRlciA9IGdzYXAucXVpY2tTZXR0ZXIobWFya2VyRW5kVHJpZ2dlciwgZGlyZWN0aW9uLmEsIF9weCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbnRhaW5lckFuaW1hdGlvbikge1xuICAgICAgdmFyIG9sZE9uVXBkYXRlID0gY29udGFpbmVyQW5pbWF0aW9uLnZhcnMub25VcGRhdGUsXG4gICAgICAgICAgb2xkUGFyYW1zID0gY29udGFpbmVyQW5pbWF0aW9uLnZhcnMub25VcGRhdGVQYXJhbXM7XG4gICAgICBjb250YWluZXJBbmltYXRpb24uZXZlbnRDYWxsYmFjayhcIm9uVXBkYXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi51cGRhdGUoMCwgMCwgMSk7XG4gICAgICAgIG9sZE9uVXBkYXRlICYmIG9sZE9uVXBkYXRlLmFwcGx5KGNvbnRhaW5lckFuaW1hdGlvbiwgb2xkUGFyYW1zIHx8IFtdKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNlbGYucHJldmlvdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RyaWdnZXJzW190cmlnZ2Vycy5pbmRleE9mKHNlbGYpIC0gMV07XG4gICAgfTtcblxuICAgIHNlbGYubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdHJpZ2dlcnNbX3RyaWdnZXJzLmluZGV4T2Yoc2VsZikgKyAxXTtcbiAgICB9O1xuXG4gICAgc2VsZi5yZXZlcnQgPSBmdW5jdGlvbiAocmV2ZXJ0LCB0ZW1wKSB7XG4gICAgICBpZiAoIXRlbXApIHtcbiAgICAgICAgcmV0dXJuIHNlbGYua2lsbCh0cnVlKTtcbiAgICAgIH0gLy8gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBnc2FwLmNvbnRleHQoKSBhbmQgZ3NhcC5tYXRjaE1lZGlhKCkgd2hpY2ggY2FsbCByZXZlcnQoKVxuXG5cbiAgICAgIHZhciByID0gcmV2ZXJ0ICE9PSBmYWxzZSB8fCAhc2VsZi5lbmFibGVkLFxuICAgICAgICAgIHByZXZSZWZyZXNoaW5nID0gX3JlZnJlc2hpbmc7XG5cbiAgICAgIGlmIChyICE9PSBzZWxmLmlzUmV2ZXJ0ZWQpIHtcbiAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICBwcmV2U2Nyb2xsID0gTWF0aC5tYXgoc2Nyb2xsRnVuYygpLCBzZWxmLnNjcm9sbC5yZWMgfHwgMCk7IC8vIHJlY29yZCB0aGUgc2Nyb2xsIHNvIHdlIGNhbiByZXZlcnQgbGF0ZXIgKHJlcG9zaXRpb25pbmcvcGlubmluZyB0aGluZ3MgY2FuIGFmZmVjdCBzY3JvbGwgcG9zaXRpb24pLiBJbiB0aGUgc3RhdGljIHJlZnJlc2goKSBtZXRob2QsIHdlIGZpcnN0IHJlY29yZCBhbGwgdGhlIHNjcm9sbCBwb3NpdGlvbnMgYXMgYSByZWZlcmVuY2UuXG5cbiAgICAgICAgICBwcmV2UHJvZ3Jlc3MgPSBzZWxmLnByb2dyZXNzO1xuICAgICAgICAgIHByZXZBbmltUHJvZ3Jlc3MgPSBhbmltYXRpb24gJiYgYW5pbWF0aW9uLnByb2dyZXNzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBtYXJrZXJTdGFydCAmJiBbbWFya2VyU3RhcnQsIG1hcmtlckVuZCwgbWFya2VyU3RhcnRUcmlnZ2VyLCBtYXJrZXJFbmRUcmlnZ2VyXS5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgcmV0dXJuIG0uc3R5bGUuZGlzcGxheSA9IHIgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICBfcmVmcmVzaGluZyA9IHNlbGY7XG4gICAgICAgICAgc2VsZi51cGRhdGUocik7IC8vIG1ha2Ugc3VyZSB0aGUgcGluIGlzIGJhY2sgaW4gaXRzIG9yaWdpbmFsIHBvc2l0aW9uIHNvIHRoYXQgYWxsIHRoZSBtZWFzdXJlbWVudHMgYXJlIGNvcnJlY3QuIGRvIHRoaXMgQkVGT1JFIHN3YXBwaW5nIHRoZSBwaW4gb3V0XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGluICYmICghcGluUmVwYXJlbnQgfHwgIXNlbGYuaXNBY3RpdmUpKSB7XG4gICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgIF9zd2FwUGluT3V0KHBpbiwgc3BhY2VyLCBwaW5PcmlnaW5hbFN0YXRlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3N3YXBQaW5JbihwaW4sIHNwYWNlciwgX2dldENvbXB1dGVkU3R5bGUocGluKSwgc3BhY2VyU3RhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHIgfHwgc2VsZi51cGRhdGUocik7IC8vIHdoZW4gd2UncmUgcmVzdG9yaW5nLCB0aGUgdXBkYXRlIHNob3VsZCBydW4gQUZURVIgc3dhcHBpbmcgdGhlIHBpbiBpbnRvIGl0cyBwaW4tc3BhY2VyLlxuXG4gICAgICAgIF9yZWZyZXNoaW5nID0gcHJldlJlZnJlc2hpbmc7IC8vIHJlc3RvcmUuIFdlIHNldCBpdCB0byB0cnVlIGR1cmluZyB0aGUgdXBkYXRlKCkgc28gdGhhdCB0aGluZ3MgZmlyZSBwcm9wZXJseSBpbiB0aGVyZS5cblxuICAgICAgICBzZWxmLmlzUmV2ZXJ0ZWQgPSByO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzZWxmLnJlZnJlc2ggPSBmdW5jdGlvbiAoc29mdCwgZm9yY2UsIHBvc2l0aW9uLCBwaW5PZmZzZXQpIHtcbiAgICAgIC8vIHBvc2l0aW9uIGlzIHR5cGljYWxseSBvbmx5IGRlZmluZWQgaWYgaXQncyBjb21pbmcgZnJvbSBzZXRQb3NpdGlvbnMoKSAtIGl0J3MgYSB3YXkgdG8gc2tpcCB0aGUgbm9ybWFsIHBhcnNpbmcuIHBpbk9mZnNldCBpcyBhbHNvIG9ubHkgZnJvbSBzZXRQb3NpdGlvbnMoKSBhbmQgaXMgbW9zdGx5IHJlbGF0ZWQgdG8gZmFuY3kgc3R1ZmYgd2UgbmVlZCB0byBkbyBpbiBTY3JvbGxTbW9vdGhlciB3aXRoIGVmZmVjdHNcbiAgICAgIGlmICgoX3JlZnJlc2hpbmcgfHwgIXNlbGYuZW5hYmxlZCkgJiYgIWZvcmNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHBpbiAmJiBzb2Z0ICYmIF9sYXN0U2Nyb2xsVGltZSkge1xuICAgICAgICBfYWRkTGlzdGVuZXIoU2Nyb2xsVHJpZ2dlciwgXCJzY3JvbGxFbmRcIiwgX3NvZnRSZWZyZXNoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgICFfcmVmcmVzaGluZ0FsbCAmJiBvblJlZnJlc2hJbml0ICYmIG9uUmVmcmVzaEluaXQoc2VsZik7XG4gICAgICBfcmVmcmVzaGluZyA9IHNlbGY7XG5cbiAgICAgIGlmICh0d2VlblRvLnR3ZWVuICYmICFwb3NpdGlvbikge1xuICAgICAgICAvLyB3ZSBza2lwIHRoaXMgaWYgYSBwb3NpdGlvbiBpcyBwYXNzZWQgaW4gYmVjYXVzZSB0eXBpY2FsbHkgdGhhdCdzIGZyb20gLnNldFBvc2l0aW9ucygpIGFuZCBpdCdzIGJlc3QgdG8gYWxsb3cgaW4tcHJvZ3Jlc3Mgc25hcHBpbmcgdG8gY29udGludWUuXG4gICAgICAgIHR3ZWVuVG8udHdlZW4ua2lsbCgpO1xuICAgICAgICB0d2VlblRvLnR3ZWVuID0gMDtcbiAgICAgIH1cblxuICAgICAgc2NydWJUd2VlbiAmJiBzY3J1YlR3ZWVuLnBhdXNlKCk7XG4gICAgICBpbnZhbGlkYXRlT25SZWZyZXNoICYmIGFuaW1hdGlvbiAmJiBhbmltYXRpb24ucmV2ZXJ0KHtcbiAgICAgICAga2lsbDogZmFsc2VcbiAgICAgIH0pLmludmFsaWRhdGUoKTtcbiAgICAgIHNlbGYuaXNSZXZlcnRlZCB8fCBzZWxmLnJldmVydCh0cnVlLCB0cnVlKTtcbiAgICAgIHNlbGYuX3N1YlBpbk9mZnNldCA9IGZhbHNlOyAvLyB3ZSdsbCBzZXQgdGhpcyB0byB0cnVlIGluIHRoZSBzdWItcGlucyBpZiB3ZSBmaW5kIGFueVxuXG4gICAgICB2YXIgc2l6ZSA9IGdldFNjcm9sbGVyU2l6ZSgpLFxuICAgICAgICAgIHNjcm9sbGVyQm91bmRzID0gZ2V0U2Nyb2xsZXJPZmZzZXRzKCksXG4gICAgICAgICAgbWF4ID0gY29udGFpbmVyQW5pbWF0aW9uID8gY29udGFpbmVyQW5pbWF0aW9uLmR1cmF0aW9uKCkgOiBfbWF4U2Nyb2xsKHNjcm9sbGVyLCBkaXJlY3Rpb24pLFxuICAgICAgICAgIGlzRmlyc3RSZWZyZXNoID0gY2hhbmdlIDw9IDAuMDEsXG4gICAgICAgICAgb2Zmc2V0ID0gMCxcbiAgICAgICAgICBvdGhlclBpbk9mZnNldCA9IHBpbk9mZnNldCB8fCAwLFxuICAgICAgICAgIHBhcnNlZEVuZCA9IF9pc09iamVjdChwb3NpdGlvbikgPyBwb3NpdGlvbi5lbmQgOiB2YXJzLmVuZCxcbiAgICAgICAgICBwYXJzZWRFbmRUcmlnZ2VyID0gdmFycy5lbmRUcmlnZ2VyIHx8IHRyaWdnZXIsXG4gICAgICAgICAgcGFyc2VkU3RhcnQgPSBfaXNPYmplY3QocG9zaXRpb24pID8gcG9zaXRpb24uc3RhcnQgOiB2YXJzLnN0YXJ0IHx8ICh2YXJzLnN0YXJ0ID09PSAwIHx8ICF0cmlnZ2VyID8gMCA6IHBpbiA/IFwiMCAwXCIgOiBcIjAgMTAwJVwiKSxcbiAgICAgICAgICBwaW5uZWRDb250YWluZXIgPSBzZWxmLnBpbm5lZENvbnRhaW5lciA9IHZhcnMucGlubmVkQ29udGFpbmVyICYmIF9nZXRUYXJnZXQodmFycy5waW5uZWRDb250YWluZXIsIHNlbGYpLFxuICAgICAgICAgIHRyaWdnZXJJbmRleCA9IHRyaWdnZXIgJiYgTWF0aC5tYXgoMCwgX3RyaWdnZXJzLmluZGV4T2Yoc2VsZikpIHx8IDAsXG4gICAgICAgICAgaSA9IHRyaWdnZXJJbmRleCxcbiAgICAgICAgICBjcyxcbiAgICAgICAgICBib3VuZHMsXG4gICAgICAgICAgc2Nyb2xsLFxuICAgICAgICAgIGlzVmVydGljYWwsXG4gICAgICAgICAgb3ZlcnJpZGUsXG4gICAgICAgICAgY3VyVHJpZ2dlcixcbiAgICAgICAgICBjdXJQaW4sXG4gICAgICAgICAgb3Bwb3NpdGVTY3JvbGwsXG4gICAgICAgICAgaW5pdHRlZCxcbiAgICAgICAgICByZXZlcnRlZFBpbnMsXG4gICAgICAgICAgZm9yY2VkT3ZlcmZsb3csXG4gICAgICAgICAgbWFya2VyU3RhcnRPZmZzZXQsXG4gICAgICAgICAgbWFya2VyRW5kT2Zmc2V0O1xuXG4gICAgICBpZiAobWFya2VycyAmJiBfaXNPYmplY3QocG9zaXRpb24pKSB7XG4gICAgICAgIC8vIGlmIHdlIGFsdGVyIHRoZSBzdGFydC9lbmQgcG9zaXRpb25zIHdpdGggLnNldFBvc2l0aW9ucygpLCBpdCBnZW5lcmFsbHkgZmVlZHMgaW4gYWJzb2x1dGUgTlVNQkVSUyB3aGljaCBkb24ndCBjb252ZXkgaW5mb3JtYXRpb24gYWJvdXQgd2hlcmUgdG8gbGluZSB1cCB0aGUgbWFya2Vycywgc28gdG8ga2VlcCBpdCBpbnR1aXRpdmUsIHdlIHJlY29yZCBob3cgZmFyIHRoZSB0cmlnZ2VyIHBvc2l0aW9ucyBzaGlmdCBhZnRlciBhcHBseWluZyB0aGUgbmV3IG51bWJlcnMgYW5kIHRoZW4gb2Zmc2V0IGJ5IHRoYXQgbXVjaCBpbiB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uLiBXZSBkbyB0aGUgc2FtZSB0byB0aGUgYXNzb2NpYXRlZCB0cmlnZ2VyIG1hcmtlcnMgdG9vIG9mIGNvdXJzZS5cbiAgICAgICAgbWFya2VyU3RhcnRPZmZzZXQgPSBnc2FwLmdldFByb3BlcnR5KG1hcmtlclN0YXJ0VHJpZ2dlciwgZGlyZWN0aW9uLnApO1xuICAgICAgICBtYXJrZXJFbmRPZmZzZXQgPSBnc2FwLmdldFByb3BlcnR5KG1hcmtlckVuZFRyaWdnZXIsIGRpcmVjdGlvbi5wKTtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAvLyB1c2VyIG1pZ2h0IHRyeSB0byBwaW4gdGhlIHNhbWUgZWxlbWVudCBtb3JlIHRoYW4gb25jZSwgc28gd2UgbXVzdCBmaW5kIGFueSBwcmlvciB0cmlnZ2VycyB3aXRoIHRoZSBzYW1lIHBpbiwgcmV2ZXJ0IHRoZW0sIGFuZCBkZXRlcm1pbmUgaG93IGxvbmcgdGhleSdyZSBwaW5uaW5nIHNvIHRoYXQgd2UgY2FuIG9mZnNldCB0aGluZ3MgYXBwcm9wcmlhdGVseS4gTWFrZSBzdXJlIHdlIHJldmVydCBmcm9tIGxhc3QgdG8gZmlyc3Qgc28gdGhhdCB0aGluZ3MgXCJyZXdpbmRcIiBwcm9wZXJseS5cbiAgICAgICAgY3VyVHJpZ2dlciA9IF90cmlnZ2Vyc1tpXTtcbiAgICAgICAgY3VyVHJpZ2dlci5lbmQgfHwgY3VyVHJpZ2dlci5yZWZyZXNoKDAsIDEpIHx8IChfcmVmcmVzaGluZyA9IHNlbGYpOyAvLyBpZiBpdCdzIGEgdGltZWxpbmUtYmFzZWQgdHJpZ2dlciB0aGF0IGhhc24ndCBiZWVuIGZ1bGx5IGluaXRpYWxpemVkIHlldCBiZWNhdXNlIGl0J3Mgd2FpdGluZyBmb3IgMSB0aWNrLCBqdXN0IGZvcmNlIHRoZSByZWZyZXNoKCkgaGVyZSwgb3RoZXJ3aXNlIGlmIGl0IGNvbnRhaW5zIGEgcGluIHRoYXQncyBzdXBwb3NlZCB0byBhZmZlY3Qgb3RoZXIgU2Nyb2xsVHJpZ2dlcnMgZnVydGhlciBkb3duIHRoZSBwYWdlLCB0aGV5IHdvbid0IGJlIGFkanVzdGVkIHByb3Blcmx5LlxuXG4gICAgICAgIGN1clBpbiA9IGN1clRyaWdnZXIucGluO1xuXG4gICAgICAgIGlmIChjdXJQaW4gJiYgKGN1clBpbiA9PT0gdHJpZ2dlciB8fCBjdXJQaW4gPT09IHBpbiB8fCBjdXJQaW4gPT09IHBpbm5lZENvbnRhaW5lcikgJiYgIWN1clRyaWdnZXIuaXNSZXZlcnRlZCkge1xuICAgICAgICAgIHJldmVydGVkUGlucyB8fCAocmV2ZXJ0ZWRQaW5zID0gW10pO1xuICAgICAgICAgIHJldmVydGVkUGlucy51bnNoaWZ0KGN1clRyaWdnZXIpOyAvLyB3ZSdsbCByZXZlcnQgZnJvbSBmaXJzdCB0byBsYXN0IHRvIG1ha2Ugc3VyZSB0aGluZ3MgcmVhY2ggdGhlaXIgZW5kIHN0YXRlIHByb3Blcmx5XG5cbiAgICAgICAgICBjdXJUcmlnZ2VyLnJldmVydCh0cnVlLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJUcmlnZ2VyICE9PSBfdHJpZ2dlcnNbaV0pIHtcbiAgICAgICAgICAvLyBpbiBjYXNlIGl0IGdvdCByZW1vdmVkLlxuICAgICAgICAgIHRyaWdnZXJJbmRleC0tO1xuICAgICAgICAgIGktLTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBfaXNGdW5jdGlvbihwYXJzZWRTdGFydCkgJiYgKHBhcnNlZFN0YXJ0ID0gcGFyc2VkU3RhcnQoc2VsZikpO1xuICAgICAgcGFyc2VkU3RhcnQgPSBfcGFyc2VDbGFtcChwYXJzZWRTdGFydCwgXCJzdGFydFwiLCBzZWxmKTtcbiAgICAgIHN0YXJ0ID0gX3BhcnNlUG9zaXRpb24ocGFyc2VkU3RhcnQsIHRyaWdnZXIsIHNpemUsIGRpcmVjdGlvbiwgc2Nyb2xsRnVuYygpLCBtYXJrZXJTdGFydCwgbWFya2VyU3RhcnRUcmlnZ2VyLCBzZWxmLCBzY3JvbGxlckJvdW5kcywgYm9yZGVyV2lkdGgsIHVzZUZpeGVkUG9zaXRpb24sIG1heCwgY29udGFpbmVyQW5pbWF0aW9uLCBzZWxmLl9zdGFydENsYW1wICYmIFwiX3N0YXJ0Q2xhbXBcIikgfHwgKHBpbiA/IC0wLjAwMSA6IDApO1xuICAgICAgX2lzRnVuY3Rpb24ocGFyc2VkRW5kKSAmJiAocGFyc2VkRW5kID0gcGFyc2VkRW5kKHNlbGYpKTtcblxuICAgICAgaWYgKF9pc1N0cmluZyhwYXJzZWRFbmQpICYmICFwYXJzZWRFbmQuaW5kZXhPZihcIis9XCIpKSB7XG4gICAgICAgIGlmICh+cGFyc2VkRW5kLmluZGV4T2YoXCIgXCIpKSB7XG4gICAgICAgICAgcGFyc2VkRW5kID0gKF9pc1N0cmluZyhwYXJzZWRTdGFydCkgPyBwYXJzZWRTdGFydC5zcGxpdChcIiBcIilbMF0gOiBcIlwiKSArIHBhcnNlZEVuZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvZmZzZXQgPSBfb2Zmc2V0VG9QeChwYXJzZWRFbmQuc3Vic3RyKDIpLCBzaXplKTtcbiAgICAgICAgICBwYXJzZWRFbmQgPSBfaXNTdHJpbmcocGFyc2VkU3RhcnQpID8gcGFyc2VkU3RhcnQgOiAoY29udGFpbmVyQW5pbWF0aW9uID8gZ3NhcC51dGlscy5tYXBSYW5nZSgwLCBjb250YWluZXJBbmltYXRpb24uZHVyYXRpb24oKSwgY29udGFpbmVyQW5pbWF0aW9uLnNjcm9sbFRyaWdnZXIuc3RhcnQsIGNvbnRhaW5lckFuaW1hdGlvbi5zY3JvbGxUcmlnZ2VyLmVuZCwgc3RhcnQpIDogc3RhcnQpICsgb2Zmc2V0OyAvLyBfcGFyc2VQb3NpdGlvbiB3b24ndCBmYWN0b3IgaW4gdGhlIG9mZnNldCBpZiB0aGUgc3RhcnQgaXMgYSBudW1iZXIsIHNvIGRvIGl0IGhlcmUuXG5cbiAgICAgICAgICBwYXJzZWRFbmRUcmlnZ2VyID0gdHJpZ2dlcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwYXJzZWRFbmQgPSBfcGFyc2VDbGFtcChwYXJzZWRFbmQsIFwiZW5kXCIsIHNlbGYpO1xuICAgICAgZW5kID0gTWF0aC5tYXgoc3RhcnQsIF9wYXJzZVBvc2l0aW9uKHBhcnNlZEVuZCB8fCAocGFyc2VkRW5kVHJpZ2dlciA/IFwiMTAwJSAwXCIgOiBtYXgpLCBwYXJzZWRFbmRUcmlnZ2VyLCBzaXplLCBkaXJlY3Rpb24sIHNjcm9sbEZ1bmMoKSArIG9mZnNldCwgbWFya2VyRW5kLCBtYXJrZXJFbmRUcmlnZ2VyLCBzZWxmLCBzY3JvbGxlckJvdW5kcywgYm9yZGVyV2lkdGgsIHVzZUZpeGVkUG9zaXRpb24sIG1heCwgY29udGFpbmVyQW5pbWF0aW9uLCBzZWxmLl9lbmRDbGFtcCAmJiBcIl9lbmRDbGFtcFwiKSkgfHwgLTAuMDAxO1xuICAgICAgb2Zmc2V0ID0gMDtcbiAgICAgIGkgPSB0cmlnZ2VySW5kZXg7XG5cbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgY3VyVHJpZ2dlciA9IF90cmlnZ2Vyc1tpXTtcbiAgICAgICAgY3VyUGluID0gY3VyVHJpZ2dlci5waW47XG5cbiAgICAgICAgaWYgKGN1clBpbiAmJiBjdXJUcmlnZ2VyLnN0YXJ0IC0gY3VyVHJpZ2dlci5fcGluUHVzaCA8PSBzdGFydCAmJiAhY29udGFpbmVyQW5pbWF0aW9uICYmIGN1clRyaWdnZXIuZW5kID4gMCkge1xuICAgICAgICAgIGNzID0gY3VyVHJpZ2dlci5lbmQgLSAoc2VsZi5fc3RhcnRDbGFtcCA/IE1hdGgubWF4KDAsIGN1clRyaWdnZXIuc3RhcnQpIDogY3VyVHJpZ2dlci5zdGFydCk7XG5cbiAgICAgICAgICBpZiAoKGN1clBpbiA9PT0gdHJpZ2dlciAmJiBjdXJUcmlnZ2VyLnN0YXJ0IC0gY3VyVHJpZ2dlci5fcGluUHVzaCA8IHN0YXJ0IHx8IGN1clBpbiA9PT0gcGlubmVkQ29udGFpbmVyKSAmJiBpc05hTihwYXJzZWRTdGFydCkpIHtcbiAgICAgICAgICAgIC8vIG51bWVyaWMgc3RhcnQgdmFsdWVzIHNob3VsZG4ndCBiZSBvZmZzZXQgYXQgYWxsIC0gdHJlYXQgdGhlbSBhcyBhYnNvbHV0ZVxuICAgICAgICAgICAgb2Zmc2V0ICs9IGNzICogKDEgLSBjdXJUcmlnZ2VyLnByb2dyZXNzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjdXJQaW4gPT09IHBpbiAmJiAob3RoZXJQaW5PZmZzZXQgKz0gY3MpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN0YXJ0ICs9IG9mZnNldDtcbiAgICAgIGVuZCArPSBvZmZzZXQ7XG4gICAgICBzZWxmLl9zdGFydENsYW1wICYmIChzZWxmLl9zdGFydENsYW1wICs9IG9mZnNldCk7XG5cbiAgICAgIGlmIChzZWxmLl9lbmRDbGFtcCAmJiAhX3JlZnJlc2hpbmdBbGwpIHtcbiAgICAgICAgc2VsZi5fZW5kQ2xhbXAgPSBlbmQgfHwgLTAuMDAxO1xuICAgICAgICBlbmQgPSBNYXRoLm1pbihlbmQsIF9tYXhTY3JvbGwoc2Nyb2xsZXIsIGRpcmVjdGlvbikpO1xuICAgICAgfVxuXG4gICAgICBjaGFuZ2UgPSBlbmQgLSBzdGFydCB8fCAoc3RhcnQgLT0gMC4wMSkgJiYgMC4wMDE7XG5cbiAgICAgIGlmIChpc0ZpcnN0UmVmcmVzaCkge1xuICAgICAgICAvLyBvbiB0aGUgdmVyeSBmaXJzdCByZWZyZXNoKCksIHRoZSBwcmV2UHJvZ3Jlc3MgY291bGRuJ3QgaGF2ZSBiZWVuIGFjY3VyYXRlIHlldCBiZWNhdXNlIHRoZSBzdGFydC9lbmQgd2VyZSBuZXZlciBjYWxjdWxhdGVkLCBzbyB3ZSBzZXQgaXQgaGVyZS4gQmVmb3JlIDMuMTEuNSwgaXQgY291bGQgbGVhZCB0byBhbiBpbmFjY3VyYXRlIHNjcm9sbCBwb3NpdGlvbiByZXN0b3JhdGlvbiB3aXRoIHNuYXBwaW5nLlxuICAgICAgICBwcmV2UHJvZ3Jlc3MgPSBnc2FwLnV0aWxzLmNsYW1wKDAsIDEsIGdzYXAudXRpbHMubm9ybWFsaXplKHN0YXJ0LCBlbmQsIHByZXZTY3JvbGwpKTtcbiAgICAgIH1cblxuICAgICAgc2VsZi5fcGluUHVzaCA9IG90aGVyUGluT2Zmc2V0O1xuXG4gICAgICBpZiAobWFya2VyU3RhcnQgJiYgb2Zmc2V0KSB7XG4gICAgICAgIC8vIG9mZnNldCB0aGUgbWFya2VycyBpZiBuZWNlc3NhcnlcbiAgICAgICAgY3MgPSB7fTtcbiAgICAgICAgY3NbZGlyZWN0aW9uLmFdID0gXCIrPVwiICsgb2Zmc2V0O1xuICAgICAgICBwaW5uZWRDb250YWluZXIgJiYgKGNzW2RpcmVjdGlvbi5wXSA9IFwiLT1cIiArIHNjcm9sbEZ1bmMoKSk7XG4gICAgICAgIGdzYXAuc2V0KFttYXJrZXJTdGFydCwgbWFya2VyRW5kXSwgY3MpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGluKSB7XG4gICAgICAgIGNzID0gX2dldENvbXB1dGVkU3R5bGUocGluKTtcbiAgICAgICAgaXNWZXJ0aWNhbCA9IGRpcmVjdGlvbiA9PT0gX3ZlcnRpY2FsO1xuICAgICAgICBzY3JvbGwgPSBzY3JvbGxGdW5jKCk7IC8vIHJlY2FsY3VsYXRlIGJlY2F1c2UgdGhlIHRyaWdnZXJzIGNhbiBhZmZlY3QgdGhlIHNjcm9sbFxuXG4gICAgICAgIHBpblN0YXJ0ID0gcGFyc2VGbG9hdChwaW5HZXR0ZXIoZGlyZWN0aW9uLmEpKSArIG90aGVyUGluT2Zmc2V0O1xuXG4gICAgICAgIGlmICghbWF4ICYmIGVuZCA+IDEpIHtcbiAgICAgICAgICAvLyBtYWtlcyBzdXJlIHRoZSBzY3JvbGxlciBoYXMgYSBzY3JvbGxiYXIsIG90aGVyd2lzZSBpZiBzb21ldGhpbmcgaGFzIHdpZHRoOiAxMDAlLCBmb3IgZXhhbXBsZSwgaXQgd291bGQgYmUgdG9vIGJpZyAoZXhjbHVkZSB0aGUgc2Nyb2xsYmFyKS4gU2VlIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9mb3J1bXMvdG9waWMvMjUxODItc2Nyb2xsdHJpZ2dlci13aWR0aC1vZi1wYWdlLWluY3JlYXNlLXdoZXJlLW1hcmtlcnMtYXJlLXNldC10by1mYWxzZS9cbiAgICAgICAgICBmb3JjZWRPdmVyZmxvdyA9IChpc1ZpZXdwb3J0ID8gX2RvYy5zY3JvbGxpbmdFbGVtZW50IHx8IF9kb2NFbCA6IHNjcm9sbGVyKS5zdHlsZTtcbiAgICAgICAgICBmb3JjZWRPdmVyZmxvdyA9IHtcbiAgICAgICAgICAgIHN0eWxlOiBmb3JjZWRPdmVyZmxvdyxcbiAgICAgICAgICAgIHZhbHVlOiBmb3JjZWRPdmVyZmxvd1tcIm92ZXJmbG93XCIgKyBkaXJlY3Rpb24uYS50b1VwcGVyQ2FzZSgpXVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoaXNWaWV3cG9ydCAmJiBfZ2V0Q29tcHV0ZWRTdHlsZShfYm9keSlbXCJvdmVyZmxvd1wiICsgZGlyZWN0aW9uLmEudG9VcHBlckNhc2UoKV0gIT09IFwic2Nyb2xsXCIpIHtcbiAgICAgICAgICAgIC8vIGF2b2lkIGFuIGV4dHJhIHNjcm9sbGJhciBpZiBCT1RIIDxodG1sPiBhbmQgPGJvZHk+IGhhdmUgb3ZlcmZsb3cgc2V0IHRvIFwic2Nyb2xsXCJcbiAgICAgICAgICAgIGZvcmNlZE92ZXJmbG93LnN0eWxlW1wib3ZlcmZsb3dcIiArIGRpcmVjdGlvbi5hLnRvVXBwZXJDYXNlKCldID0gXCJzY3JvbGxcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfc3dhcFBpbkluKHBpbiwgc3BhY2VyLCBjcyk7XG5cbiAgICAgICAgcGluU3RhdGUgPSBfZ2V0U3RhdGUocGluKTsgLy8gdHJhbnNmb3JtcyB3aWxsIGludGVyZmVyZSB3aXRoIHRoZSB0b3AvbGVmdC9yaWdodC9ib3R0b20gcGxhY2VtZW50LCBzbyByZW1vdmUgdGhlbSB0ZW1wb3JhcmlseS4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgZmFjdG9ycyBpbiB0cmFuc2Zvcm1zLlxuXG4gICAgICAgIGJvdW5kcyA9IF9nZXRCb3VuZHMocGluLCB0cnVlKTtcbiAgICAgICAgb3Bwb3NpdGVTY3JvbGwgPSB1c2VGaXhlZFBvc2l0aW9uICYmIF9nZXRTY3JvbGxGdW5jKHNjcm9sbGVyLCBpc1ZlcnRpY2FsID8gX2hvcml6b250YWwgOiBfdmVydGljYWwpKCk7XG5cbiAgICAgICAgaWYgKHBpblNwYWNpbmcpIHtcbiAgICAgICAgICBzcGFjZXJTdGF0ZSA9IFtwaW5TcGFjaW5nICsgZGlyZWN0aW9uLm9zMiwgY2hhbmdlICsgb3RoZXJQaW5PZmZzZXQgKyBfcHhdO1xuICAgICAgICAgIHNwYWNlclN0YXRlLnQgPSBzcGFjZXI7XG4gICAgICAgICAgaSA9IHBpblNwYWNpbmcgPT09IF9wYWRkaW5nID8gX2dldFNpemUocGluLCBkaXJlY3Rpb24pICsgY2hhbmdlICsgb3RoZXJQaW5PZmZzZXQgOiAwO1xuICAgICAgICAgIGkgJiYgc3BhY2VyU3RhdGUucHVzaChkaXJlY3Rpb24uZCwgaSArIF9weCk7IC8vIGZvciBib3gtc2l6aW5nOiBib3JkZXItYm94IChtdXN0IGluY2x1ZGUgcGFkZGluZykuXG5cbiAgICAgICAgICBfc2V0U3RhdGUoc3BhY2VyU3RhdGUpO1xuXG4gICAgICAgICAgaWYgKHBpbm5lZENvbnRhaW5lcikge1xuICAgICAgICAgICAgLy8gaW4gU2Nyb2xsVHJpZ2dlci5yZWZyZXNoKCksIHdlIG5lZWQgdG8gcmUtZXZhbHVhdGUgdGhlIHBpbkNvbnRhaW5lcidzIHNpemUgYmVjYXVzZSB0aGlzIHBpblNwYWNpbmcgbWF5IHN0cmV0Y2ggaXQgb3V0LCBidXQgd2UgY2FuJ3QganVzdCBhZGQgdGhlIGV4YWN0IGRpc3RhbmNlIGJlY2F1c2UgZGVwZW5kaW5nIG9uIGxheW91dCwgaXQgbWF5IG5vdCBwdXNoIHRoaW5ncyBkb3duIG9yIGl0IG1heSBvbmx5IGRvIHNvIHBhcnRpYWxseS5cbiAgICAgICAgICAgIF90cmlnZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgIGlmICh0LnBpbiA9PT0gcGlubmVkQ29udGFpbmVyICYmIHQudmFycy5waW5TcGFjaW5nICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHQuX3N1YlBpbk9mZnNldCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVzZUZpeGVkUG9zaXRpb24gJiYgc2Nyb2xsRnVuYyhwcmV2U2Nyb2xsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1c2VGaXhlZFBvc2l0aW9uKSB7XG4gICAgICAgICAgb3ZlcnJpZGUgPSB7XG4gICAgICAgICAgICB0b3A6IGJvdW5kcy50b3AgKyAoaXNWZXJ0aWNhbCA/IHNjcm9sbCAtIHN0YXJ0IDogb3Bwb3NpdGVTY3JvbGwpICsgX3B4LFxuICAgICAgICAgICAgbGVmdDogYm91bmRzLmxlZnQgKyAoaXNWZXJ0aWNhbCA/IG9wcG9zaXRlU2Nyb2xsIDogc2Nyb2xsIC0gc3RhcnQpICsgX3B4LFxuICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCJcbiAgICAgICAgICB9O1xuICAgICAgICAgIG92ZXJyaWRlW193aWR0aF0gPSBvdmVycmlkZVtcIm1heFwiICsgX1dpZHRoXSA9IE1hdGguY2VpbChib3VuZHMud2lkdGgpICsgX3B4O1xuICAgICAgICAgIG92ZXJyaWRlW19oZWlnaHRdID0gb3ZlcnJpZGVbXCJtYXhcIiArIF9IZWlnaHRdID0gTWF0aC5jZWlsKGJvdW5kcy5oZWlnaHQpICsgX3B4O1xuICAgICAgICAgIG92ZXJyaWRlW19tYXJnaW5dID0gb3ZlcnJpZGVbX21hcmdpbiArIF9Ub3BdID0gb3ZlcnJpZGVbX21hcmdpbiArIF9SaWdodF0gPSBvdmVycmlkZVtfbWFyZ2luICsgX0JvdHRvbV0gPSBvdmVycmlkZVtfbWFyZ2luICsgX0xlZnRdID0gXCIwXCI7XG4gICAgICAgICAgb3ZlcnJpZGVbX3BhZGRpbmddID0gY3NbX3BhZGRpbmddO1xuICAgICAgICAgIG92ZXJyaWRlW19wYWRkaW5nICsgX1RvcF0gPSBjc1tfcGFkZGluZyArIF9Ub3BdO1xuICAgICAgICAgIG92ZXJyaWRlW19wYWRkaW5nICsgX1JpZ2h0XSA9IGNzW19wYWRkaW5nICsgX1JpZ2h0XTtcbiAgICAgICAgICBvdmVycmlkZVtfcGFkZGluZyArIF9Cb3R0b21dID0gY3NbX3BhZGRpbmcgKyBfQm90dG9tXTtcbiAgICAgICAgICBvdmVycmlkZVtfcGFkZGluZyArIF9MZWZ0XSA9IGNzW19wYWRkaW5nICsgX0xlZnRdO1xuICAgICAgICAgIHBpbkFjdGl2ZVN0YXRlID0gX2NvcHlTdGF0ZShwaW5PcmlnaW5hbFN0YXRlLCBvdmVycmlkZSwgcGluUmVwYXJlbnQpO1xuICAgICAgICAgIF9yZWZyZXNoaW5nQWxsICYmIHNjcm9sbEZ1bmMoMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYW5pbWF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhlIGFuaW1hdGlvbiBtaWdodCBiZSBhZmZlY3RpbmcgdGhlIHRyYW5zZm9ybSwgc28gd2UgbXVzdCBqdW1wIHRvIHRoZSBlbmQsIGNoZWNrIHRoZSB2YWx1ZSwgYW5kIGNvbXBlbnNhdGUgYWNjb3JkaW5nbHkuIE90aGVyd2lzZSwgd2hlbiBpdCBiZWNvbWVzIHVucGlubmVkLCB0aGUgcGluU2V0dGVyKCkgd2lsbCBnZXQgc2V0IHRvIGEgdmFsdWUgdGhhdCBkb2Vzbid0IGluY2x1ZGUgd2hhdGV2ZXIgdGhlIGFuaW1hdGlvbiBkaWQuXG4gICAgICAgICAgaW5pdHRlZCA9IGFuaW1hdGlvbi5faW5pdHRlZDsgLy8gaWYgbm90LCB3ZSBtdXN0IGludmFsaWRhdGUoKSBhZnRlciB0aGlzIHN0ZXAsIG90aGVyd2lzZSBpdCBjb3VsZCBsb2NrIGluIHN0YXJ0aW5nIHZhbHVlcyBwcmVtYXR1cmVseS5cblxuICAgICAgICAgIF9zdXBwcmVzc092ZXJ3cml0ZXMoMSk7XG5cbiAgICAgICAgICBhbmltYXRpb24ucmVuZGVyKGFuaW1hdGlvbi5kdXJhdGlvbigpLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICBwaW5DaGFuZ2UgPSBwaW5HZXR0ZXIoZGlyZWN0aW9uLmEpIC0gcGluU3RhcnQgKyBjaGFuZ2UgKyBvdGhlclBpbk9mZnNldDtcbiAgICAgICAgICBwaW5Nb3ZlcyA9IE1hdGguYWJzKGNoYW5nZSAtIHBpbkNoYW5nZSkgPiAxO1xuICAgICAgICAgIHVzZUZpeGVkUG9zaXRpb24gJiYgcGluTW92ZXMgJiYgcGluQWN0aXZlU3RhdGUuc3BsaWNlKHBpbkFjdGl2ZVN0YXRlLmxlbmd0aCAtIDIsIDIpOyAvLyB0cmFuc2Zvcm0gaXMgdGhlIGxhc3QgcHJvcGVydHkvdmFsdWUgc2V0IGluIHRoZSBzdGF0ZSBBcnJheS4gU2luY2UgdGhlIGFuaW1hdGlvbiBpcyBjb250cm9sbGluZyB0aGF0LCB3ZSBzaG91bGQgb21pdCBpdC5cblxuICAgICAgICAgIGFuaW1hdGlvbi5yZW5kZXIoMCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgaW5pdHRlZCB8fCBhbmltYXRpb24uaW52YWxpZGF0ZSh0cnVlKTtcbiAgICAgICAgICBhbmltYXRpb24ucGFyZW50IHx8IGFuaW1hdGlvbi50b3RhbFRpbWUoYW5pbWF0aW9uLnRvdGFsVGltZSgpKTsgLy8gaWYsIGZvciBleGFtcGxlLCBhIHRvZ2dsZUFjdGlvbiBjYWxsZWQgcGxheSgpIGFuZCB0aGVuIHJlZnJlc2goKSBoYXBwZW5zIGFuZCB3aGVuIHdlIHJlbmRlcigxKSBhYm92ZSwgaXQgd291bGQgY2F1c2UgdGhlIGFuaW1hdGlvbiB0byBjb21wbGV0ZSBhbmQgZ2V0IHJlbW92ZWQgZnJvbSBpdHMgcGFyZW50LCBzbyB0aGlzIG1ha2VzIHN1cmUgaXQgZ2V0cyBwdXQgYmFjayBpbi5cblxuICAgICAgICAgIF9zdXBwcmVzc092ZXJ3cml0ZXMoMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGluQ2hhbmdlID0gY2hhbmdlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yY2VkT3ZlcmZsb3cgJiYgKGZvcmNlZE92ZXJmbG93LnZhbHVlID8gZm9yY2VkT3ZlcmZsb3cuc3R5bGVbXCJvdmVyZmxvd1wiICsgZGlyZWN0aW9uLmEudG9VcHBlckNhc2UoKV0gPSBmb3JjZWRPdmVyZmxvdy52YWx1ZSA6IGZvcmNlZE92ZXJmbG93LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3ZlcmZsb3ctXCIgKyBkaXJlY3Rpb24uYSkpO1xuICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICYmIHNjcm9sbEZ1bmMoKSAmJiAhY29udGFpbmVyQW5pbWF0aW9uKSB7XG4gICAgICAgIC8vIGl0IG1heSBiZSBJTlNJREUgYSBwaW5uZWQgZWxlbWVudCwgc28gd2FsayB1cCB0aGUgdHJlZSBhbmQgbG9vayBmb3IgYW55IGVsZW1lbnRzIHdpdGggX3Bpbk9mZnNldCB0byBjb21wZW5zYXRlIGJlY2F1c2UgYW55dGhpbmcgd2l0aCBwaW5TcGFjaW5nIHRoYXQncyBhbHJlYWR5IHNjcm9sbGVkIHdvdWxkIHRocm93IG9mZiB0aGUgbWVhc3VyZW1lbnRzIGluIGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIGJvdW5kcyA9IHRyaWdnZXIucGFyZW50Tm9kZTtcblxuICAgICAgICB3aGlsZSAoYm91bmRzICYmIGJvdW5kcyAhPT0gX2JvZHkpIHtcbiAgICAgICAgICBpZiAoYm91bmRzLl9waW5PZmZzZXQpIHtcbiAgICAgICAgICAgIHN0YXJ0IC09IGJvdW5kcy5fcGluT2Zmc2V0O1xuICAgICAgICAgICAgZW5kIC09IGJvdW5kcy5fcGluT2Zmc2V0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJvdW5kcyA9IGJvdW5kcy5wYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldmVydGVkUGlucyAmJiByZXZlcnRlZFBpbnMuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdC5yZXZlcnQoZmFsc2UsIHRydWUpO1xuICAgICAgfSk7XG4gICAgICBzZWxmLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICBzZWxmLmVuZCA9IGVuZDtcbiAgICAgIHNjcm9sbDEgPSBzY3JvbGwyID0gX3JlZnJlc2hpbmdBbGwgPyBwcmV2U2Nyb2xsIDogc2Nyb2xsRnVuYygpOyAvLyByZXNldCB2ZWxvY2l0eVxuXG4gICAgICBpZiAoIWNvbnRhaW5lckFuaW1hdGlvbiAmJiAhX3JlZnJlc2hpbmdBbGwpIHtcbiAgICAgICAgc2Nyb2xsMSA8IHByZXZTY3JvbGwgJiYgc2Nyb2xsRnVuYyhwcmV2U2Nyb2xsKTtcbiAgICAgICAgc2VsZi5zY3JvbGwucmVjID0gMDtcbiAgICAgIH1cblxuICAgICAgc2VsZi5yZXZlcnQoZmFsc2UsIHRydWUpO1xuICAgICAgbGFzdFJlZnJlc2ggPSBfZ2V0VGltZSgpO1xuXG4gICAgICBpZiAoc25hcERlbGF5ZWRDYWxsKSB7XG4gICAgICAgIGxhc3RTbmFwID0gLTE7IC8vIGp1c3Qgc28gc25hcHBpbmcgZ2V0cyByZS1lbmFibGVkLCBjbGVhciBvdXQgYW55IHJlY29yZGVkIGxhc3QgdmFsdWVcbiAgICAgICAgLy8gc2VsZi5pc0FjdGl2ZSAmJiBzY3JvbGxGdW5jKHN0YXJ0ICsgY2hhbmdlICogcHJldlByb2dyZXNzKTsgLy8gcHJldmlvdXNseSB0aGlzIGxpbmUgd2FzIGhlcmUgdG8gZW5zdXJlIHRoYXQgd2hlbiBzbmFwcGluZyBraWNrcyBpbiwgaXQncyBmcm9tIHRoZSBwcmV2aW91cyBwcm9ncmVzcyBidXQgaW4gc29tZSBjYXNlcyB0aGF0J3Mgbm90IGRlc2lyYWJsZSwgbGlrZSBhbiBhbGwtcGFnZSBTY3JvbGxUcmlnZ2VyIHdoZW4gbmV3IGNvbnRlbnQgZ2V0cyBhZGRlZCB0byB0aGUgcGFnZSwgdGhhdCdkIHRvdGFsbHkgY2hhbmdlIHRoZSBwcm9ncmVzcy5cblxuICAgICAgICBzbmFwRGVsYXllZENhbGwucmVzdGFydCh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgX3JlZnJlc2hpbmcgPSAwO1xuICAgICAgYW5pbWF0aW9uICYmIGlzVG9nZ2xlICYmIChhbmltYXRpb24uX2luaXR0ZWQgfHwgcHJldkFuaW1Qcm9ncmVzcykgJiYgYW5pbWF0aW9uLnByb2dyZXNzKCkgIT09IHByZXZBbmltUHJvZ3Jlc3MgJiYgYW5pbWF0aW9uLnByb2dyZXNzKHByZXZBbmltUHJvZ3Jlc3MgfHwgMCwgdHJ1ZSkucmVuZGVyKGFuaW1hdGlvbi50aW1lKCksIHRydWUsIHRydWUpOyAvLyBtdXN0IGZvcmNlIGEgcmUtcmVuZGVyIGJlY2F1c2UgaWYgc2F2ZVN0eWxlcygpIHdhcyB1c2VkIG9uIHRoZSB0YXJnZXQocyksIHRoZSBzdHlsZXMgY291bGQgaGF2ZSBiZWVuIHdpcGVkIG91dCBkdXJpbmcgdGhlIHJlZnJlc2goKS5cblxuICAgICAgaWYgKGlzRmlyc3RSZWZyZXNoIHx8IHByZXZQcm9ncmVzcyAhPT0gc2VsZi5wcm9ncmVzcyB8fCBjb250YWluZXJBbmltYXRpb24pIHtcbiAgICAgICAgLy8gZW5zdXJlcyB0aGF0IHRoZSBkaXJlY3Rpb24gaXMgc2V0IHByb3Blcmx5ICh3aGVuIHJlZnJlc2hpbmcsIHByb2dyZXNzIGlzIHNldCBiYWNrIHRvIDAgaW5pdGlhbGx5LCB0aGVuIGJhY2sgYWdhaW4gdG8gd2hlcmV2ZXIgaXQgbmVlZHMgdG8gYmUpIGFuZCB0aGF0IGNhbGxiYWNrcyBhcmUgdHJpZ2dlcmVkLlxuICAgICAgICBhbmltYXRpb24gJiYgIWlzVG9nZ2xlICYmIGFuaW1hdGlvbi50b3RhbFByb2dyZXNzKGNvbnRhaW5lckFuaW1hdGlvbiAmJiBzdGFydCA8IC0wLjAwMSAmJiAhcHJldlByb2dyZXNzID8gZ3NhcC51dGlscy5ub3JtYWxpemUoc3RhcnQsIGVuZCwgMCkgOiBwcmV2UHJvZ3Jlc3MsIHRydWUpOyAvLyB0byBhdm9pZCBpc3N1ZXMgd2hlcmUgYW5pbWF0aW9uIGNhbGxiYWNrcyBsaWtlIG9uU3RhcnQgYXJlbid0IHRyaWdnZXJlZC5cblxuICAgICAgICBzZWxmLnByb2dyZXNzID0gaXNGaXJzdFJlZnJlc2ggfHwgKHNjcm9sbDEgLSBzdGFydCkgLyBjaGFuZ2UgPT09IHByZXZQcm9ncmVzcyA/IDAgOiBwcmV2UHJvZ3Jlc3M7XG4gICAgICB9XG5cbiAgICAgIHBpbiAmJiBwaW5TcGFjaW5nICYmIChzcGFjZXIuX3Bpbk9mZnNldCA9IE1hdGgucm91bmQoc2VsZi5wcm9ncmVzcyAqIHBpbkNoYW5nZSkpO1xuICAgICAgc2NydWJUd2VlbiAmJiBzY3J1YlR3ZWVuLmludmFsaWRhdGUoKTtcblxuICAgICAgaWYgKCFpc05hTihtYXJrZXJTdGFydE9mZnNldCkpIHtcbiAgICAgICAgLy8gbnVtYmVycyB3ZXJlIHBhc3NlZCBpbiBmb3IgdGhlIHBvc2l0aW9uIHdoaWNoIGFyZSBhYnNvbHV0ZSwgc28gaW5zdGVhZCBvZiBqdXN0IHB1dHRpbmcgdGhlIG1hcmtlcnMgYXQgdGhlIHZlcnkgYm90dG9tIG9mIHRoZSB2aWV3cG9ydCwgd2UgZmlndXJlIG91dCBob3cgZmFyIHRoZXkgc2hpZnRlZCBkb3duIChpdCdzIHNhZmUgdG8gYXNzdW1lIHRoZXkgd2VyZSBvcmlnaW5hbGx5IHBvc2l0aW9uZWQgaW4gY2xvc2VyIHJlbGF0aW9uIHRvIHRoZSB0cmlnZ2VyIGVsZW1lbnQgd2l0aCB2YWx1ZXMgbGlrZSBcInRvcFwiLCBcImNlbnRlclwiLCBhIHBlcmNlbnRhZ2Ugb3Igd2hhdGV2ZXIsIHNvIHdlIG9mZnNldCB0aGF0IG11Y2ggaW4gdGhlIG9wcG9zaXRlIGRpcmVjdGlvbiB0byBiYXNpY2FsbHkgcmV2ZXJ0IHRoZW0gdG8gdGhlIHJlbGF0aXZlIHBvc2l0aW9uIHRoeSB3ZXJlIGF0IHByZXZpb3VzbHkuXG4gICAgICAgIG1hcmtlclN0YXJ0T2Zmc2V0IC09IGdzYXAuZ2V0UHJvcGVydHkobWFya2VyU3RhcnRUcmlnZ2VyLCBkaXJlY3Rpb24ucCk7XG4gICAgICAgIG1hcmtlckVuZE9mZnNldCAtPSBnc2FwLmdldFByb3BlcnR5KG1hcmtlckVuZFRyaWdnZXIsIGRpcmVjdGlvbi5wKTtcblxuICAgICAgICBfc2hpZnRNYXJrZXIobWFya2VyU3RhcnRUcmlnZ2VyLCBkaXJlY3Rpb24sIG1hcmtlclN0YXJ0T2Zmc2V0KTtcblxuICAgICAgICBfc2hpZnRNYXJrZXIobWFya2VyU3RhcnQsIGRpcmVjdGlvbiwgbWFya2VyU3RhcnRPZmZzZXQgLSAocGluT2Zmc2V0IHx8IDApKTtcblxuICAgICAgICBfc2hpZnRNYXJrZXIobWFya2VyRW5kVHJpZ2dlciwgZGlyZWN0aW9uLCBtYXJrZXJFbmRPZmZzZXQpO1xuXG4gICAgICAgIF9zaGlmdE1hcmtlcihtYXJrZXJFbmQsIGRpcmVjdGlvbiwgbWFya2VyRW5kT2Zmc2V0IC0gKHBpbk9mZnNldCB8fCAwKSk7XG4gICAgICB9XG5cbiAgICAgIGlzRmlyc3RSZWZyZXNoICYmICFfcmVmcmVzaGluZ0FsbCAmJiBzZWxmLnVwZGF0ZSgpOyAvLyBlZGdlIGNhc2UgLSB3aGVuIHlvdSByZWxvYWQgYSBwYWdlIHdoZW4gaXQncyBhbHJlYWR5IHNjcm9sbGVkIGRvd24sIHNvbWUgYnJvd3NlcnMgZmlyZSBhIFwic2Nyb2xsXCIgZXZlbnQgYmVmb3JlIERPTUNvbnRlbnRMb2FkZWQsIHRyaWdnZXJpbmcgYW4gdXBkYXRlQWxsKCkuIElmIHdlIGRvbid0IHVwZGF0ZSB0aGUgc2VsZi5wcm9ncmVzcyBhcyBwYXJ0IG9mIHJlZnJlc2goKSwgdGhlbiB3aGVuIGl0IGhhcHBlbnMgbmV4dCwgaXQgbWF5IHJlY29yZCBwcmV2UHJvZ3Jlc3MgYXMgMCB3aGVuIGl0IHJlYWxseSBzaG91bGRuJ3QsIHBvdGVudGlhbGx5IGNhdXNpbmcgYSBjYWxsYmFjayBpbiBhbiBhbmltYXRpb24gdG8gZmlyZSBhZ2Fpbi5cblxuICAgICAgaWYgKG9uUmVmcmVzaCAmJiAhX3JlZnJlc2hpbmdBbGwgJiYgIWV4ZWN1dGluZ09uUmVmcmVzaCkge1xuICAgICAgICAvLyB3aGVuIHJlZnJlc2hpbmcgYWxsLCB3ZSBkbyBleHRyYSB3b3JrIHRvIGNvcnJlY3QgcGlubmVkQ29udGFpbmVyIHNpemVzIGFuZCBlbnN1cmUgdGhpbmdzIGRvbid0IGV4Y2VlZCB0aGUgbWF4U2Nyb2xsLCBzbyB3ZSBzaG91bGQgZG8gYWxsIHRoZSByZWZyZXNoZXMgYXQgdGhlIGVuZCBhZnRlciBhbGwgdGhhdCB3b3JrIHNvIHRoYXQgdGhlIHN0YXJ0L2VuZCB2YWx1ZXMgYXJlIGNvcnJlY3RlZC5cbiAgICAgICAgZXhlY3V0aW5nT25SZWZyZXNoID0gdHJ1ZTtcbiAgICAgICAgb25SZWZyZXNoKHNlbGYpO1xuICAgICAgICBleGVjdXRpbmdPblJlZnJlc2ggPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VsZi5nZXRWZWxvY2l0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAoc2Nyb2xsRnVuYygpIC0gc2Nyb2xsMikgLyAoX2dldFRpbWUoKSAtIF90aW1lMikgKiAxMDAwIHx8IDA7XG4gICAgfTtcblxuICAgIHNlbGYuZW5kQW5pbWF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgX2VuZEFuaW1hdGlvbihzZWxmLmNhbGxiYWNrQW5pbWF0aW9uKTtcblxuICAgICAgaWYgKGFuaW1hdGlvbikge1xuICAgICAgICBzY3J1YlR3ZWVuID8gc2NydWJUd2Vlbi5wcm9ncmVzcygxKSA6ICFhbmltYXRpb24ucGF1c2VkKCkgPyBfZW5kQW5pbWF0aW9uKGFuaW1hdGlvbiwgYW5pbWF0aW9uLnJldmVyc2VkKCkpIDogaXNUb2dnbGUgfHwgX2VuZEFuaW1hdGlvbihhbmltYXRpb24sIHNlbGYuZGlyZWN0aW9uIDwgMCwgMSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNlbGYubGFiZWxUb1Njcm9sbCA9IGZ1bmN0aW9uIChsYWJlbCkge1xuICAgICAgcmV0dXJuIGFuaW1hdGlvbiAmJiBhbmltYXRpb24ubGFiZWxzICYmIChzdGFydCB8fCBzZWxmLnJlZnJlc2goKSB8fCBzdGFydCkgKyBhbmltYXRpb24ubGFiZWxzW2xhYmVsXSAvIGFuaW1hdGlvbi5kdXJhdGlvbigpICogY2hhbmdlIHx8IDA7XG4gICAgfTtcblxuICAgIHNlbGYuZ2V0VHJhaWxpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIGkgPSBfdHJpZ2dlcnMuaW5kZXhPZihzZWxmKSxcbiAgICAgICAgICBhID0gc2VsZi5kaXJlY3Rpb24gPiAwID8gX3RyaWdnZXJzLnNsaWNlKDAsIGkpLnJldmVyc2UoKSA6IF90cmlnZ2Vycy5zbGljZShpICsgMSk7XG5cbiAgICAgIHJldHVybiAoX2lzU3RyaW5nKG5hbWUpID8gYS5maWx0ZXIoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQudmFycy5wcmV2ZW50T3ZlcmxhcHMgPT09IG5hbWU7XG4gICAgICB9KSA6IGEpLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gc2VsZi5kaXJlY3Rpb24gPiAwID8gdC5lbmQgPD0gc3RhcnQgOiB0LnN0YXJ0ID49IGVuZDtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBzZWxmLnVwZGF0ZSA9IGZ1bmN0aW9uIChyZXNldCwgcmVjb3JkVmVsb2NpdHksIGZvcmNlRmFrZSkge1xuICAgICAgaWYgKGNvbnRhaW5lckFuaW1hdGlvbiAmJiAhZm9yY2VGYWtlICYmICFyZXNldCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBzY3JvbGwgPSBfcmVmcmVzaGluZ0FsbCA9PT0gdHJ1ZSA/IHByZXZTY3JvbGwgOiBzZWxmLnNjcm9sbCgpLFxuICAgICAgICAgIHAgPSByZXNldCA/IDAgOiAoc2Nyb2xsIC0gc3RhcnQpIC8gY2hhbmdlLFxuICAgICAgICAgIGNsaXBwZWQgPSBwIDwgMCA/IDAgOiBwID4gMSA/IDEgOiBwIHx8IDAsXG4gICAgICAgICAgcHJldlByb2dyZXNzID0gc2VsZi5wcm9ncmVzcyxcbiAgICAgICAgICBpc0FjdGl2ZSxcbiAgICAgICAgICB3YXNBY3RpdmUsXG4gICAgICAgICAgdG9nZ2xlU3RhdGUsXG4gICAgICAgICAgYWN0aW9uLFxuICAgICAgICAgIHN0YXRlQ2hhbmdlZCxcbiAgICAgICAgICB0b2dnbGVkLFxuICAgICAgICAgIGlzQXRNYXgsXG4gICAgICAgICAgaXNUYWtpbmdBY3Rpb247XG5cbiAgICAgIGlmIChyZWNvcmRWZWxvY2l0eSkge1xuICAgICAgICBzY3JvbGwyID0gc2Nyb2xsMTtcbiAgICAgICAgc2Nyb2xsMSA9IGNvbnRhaW5lckFuaW1hdGlvbiA/IHNjcm9sbEZ1bmMoKSA6IHNjcm9sbDtcblxuICAgICAgICBpZiAoc25hcCkge1xuICAgICAgICAgIHNuYXAyID0gc25hcDE7XG4gICAgICAgICAgc25hcDEgPSBhbmltYXRpb24gJiYgIWlzVG9nZ2xlID8gYW5pbWF0aW9uLnRvdGFsUHJvZ3Jlc3MoKSA6IGNsaXBwZWQ7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gYW50aWNpcGF0ZSB0aGUgcGlubmluZyBhIGZldyB0aWNrcyBhaGVhZCBvZiB0aW1lIGJhc2VkIG9uIHZlbG9jaXR5IHRvIGF2b2lkIGEgdmlzdWFsIGdsaXRjaCBkdWUgdG8gdGhlIGZhY3QgdGhhdCBtb3N0IGJyb3dzZXJzIGRvIHNjcm9sbGluZyBvbiBhIHNlcGFyYXRlIHRocmVhZCAobm90IHN5bmNlZCB3aXRoIHJlcXVlc3RBbmltYXRpb25GcmFtZSkuXG5cblxuICAgICAgYW50aWNpcGF0ZVBpbiAmJiAhY2xpcHBlZCAmJiBwaW4gJiYgIV9yZWZyZXNoaW5nICYmICFfc3RhcnR1cCAmJiBfbGFzdFNjcm9sbFRpbWUgJiYgc3RhcnQgPCBzY3JvbGwgKyAoc2Nyb2xsIC0gc2Nyb2xsMikgLyAoX2dldFRpbWUoKSAtIF90aW1lMikgKiBhbnRpY2lwYXRlUGluICYmIChjbGlwcGVkID0gMC4wMDAxKTtcblxuICAgICAgaWYgKGNsaXBwZWQgIT09IHByZXZQcm9ncmVzcyAmJiBzZWxmLmVuYWJsZWQpIHtcbiAgICAgICAgaXNBY3RpdmUgPSBzZWxmLmlzQWN0aXZlID0gISFjbGlwcGVkICYmIGNsaXBwZWQgPCAxO1xuICAgICAgICB3YXNBY3RpdmUgPSAhIXByZXZQcm9ncmVzcyAmJiBwcmV2UHJvZ3Jlc3MgPCAxO1xuICAgICAgICB0b2dnbGVkID0gaXNBY3RpdmUgIT09IHdhc0FjdGl2ZTtcbiAgICAgICAgc3RhdGVDaGFuZ2VkID0gdG9nZ2xlZCB8fCAhIWNsaXBwZWQgIT09ICEhcHJldlByb2dyZXNzOyAvLyBjb3VsZCBnbyBmcm9tIHN0YXJ0IGFsbCB0aGUgd2F5IHRvIGVuZCwgdGh1cyBpdCBkaWRuJ3QgdG9nZ2xlIGJ1dCBpdCBkaWQgY2hhbmdlIHN0YXRlIGluIGEgc2Vuc2UgKG1heSBuZWVkIHRvIGZpcmUgYSBjYWxsYmFjaylcblxuICAgICAgICBzZWxmLmRpcmVjdGlvbiA9IGNsaXBwZWQgPiBwcmV2UHJvZ3Jlc3MgPyAxIDogLTE7XG4gICAgICAgIHNlbGYucHJvZ3Jlc3MgPSBjbGlwcGVkO1xuXG4gICAgICAgIGlmIChzdGF0ZUNoYW5nZWQgJiYgIV9yZWZyZXNoaW5nKSB7XG4gICAgICAgICAgdG9nZ2xlU3RhdGUgPSBjbGlwcGVkICYmICFwcmV2UHJvZ3Jlc3MgPyAwIDogY2xpcHBlZCA9PT0gMSA/IDEgOiBwcmV2UHJvZ3Jlc3MgPT09IDEgPyAyIDogMzsgLy8gMCA9IGVudGVyLCAxID0gbGVhdmUsIDIgPSBlbnRlckJhY2ssIDMgPSBsZWF2ZUJhY2sgKHdlIHByaW9yaXRpemUgdGhlIEZJUlNUIGVuY291bnRlciwgdGh1cyBpZiB5b3Ugc2Nyb2xsIHJlYWxseSBmYXN0IHBhc3QgdGhlIG9uRW50ZXIgYW5kIG9uTGVhdmUgaW4gb25lIHRpY2ssIGl0J2QgcHJpb3JpdGl6ZSBvbkVudGVyLlxuXG4gICAgICAgICAgaWYgKGlzVG9nZ2xlKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSAhdG9nZ2xlZCAmJiB0b2dnbGVBY3Rpb25zW3RvZ2dsZVN0YXRlICsgMV0gIT09IFwibm9uZVwiICYmIHRvZ2dsZUFjdGlvbnNbdG9nZ2xlU3RhdGUgKyAxXSB8fCB0b2dnbGVBY3Rpb25zW3RvZ2dsZVN0YXRlXTsgLy8gaWYgaXQgZGlkbid0IHRvZ2dsZSwgdGhhdCBtZWFucyBpdCBzaG90IHJpZ2h0IHBhc3QgYW5kIHNpbmNlIHdlIHByaW9yaXRpemUgdGhlIFwiZW50ZXJcIiBhY3Rpb24sIHdlIHNob3VsZCBzd2l0Y2ggdG8gdGhlIFwibGVhdmVcIiBpbiB0aGlzIGNhc2UgKGJ1dCBvbmx5IGlmIG9uZSBpcyBkZWZpbmVkKVxuXG4gICAgICAgICAgICBpc1Rha2luZ0FjdGlvbiA9IGFuaW1hdGlvbiAmJiAoYWN0aW9uID09PSBcImNvbXBsZXRlXCIgfHwgYWN0aW9uID09PSBcInJlc2V0XCIgfHwgYWN0aW9uIGluIGFuaW1hdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHJldmVudE92ZXJsYXBzICYmICh0b2dnbGVkIHx8IGlzVGFraW5nQWN0aW9uKSAmJiAoaXNUYWtpbmdBY3Rpb24gfHwgc2NydWIgfHwgIWFuaW1hdGlvbikgJiYgKF9pc0Z1bmN0aW9uKHByZXZlbnRPdmVybGFwcykgPyBwcmV2ZW50T3ZlcmxhcHMoc2VsZikgOiBzZWxmLmdldFRyYWlsaW5nKHByZXZlbnRPdmVybGFwcykuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHJldHVybiB0LmVuZEFuaW1hdGlvbigpO1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgaWYgKCFpc1RvZ2dsZSkge1xuICAgICAgICAgIGlmIChzY3J1YlR3ZWVuICYmICFfcmVmcmVzaGluZyAmJiAhX3N0YXJ0dXApIHtcbiAgICAgICAgICAgIHNjcnViVHdlZW4uX2RwLl90aW1lIC0gc2NydWJUd2Vlbi5fc3RhcnQgIT09IHNjcnViVHdlZW4uX3RpbWUgJiYgc2NydWJUd2Vlbi5yZW5kZXIoc2NydWJUd2Vlbi5fZHAuX3RpbWUgLSBzY3J1YlR3ZWVuLl9zdGFydCk7IC8vIGlmIHRoZXJlJ3MgYSBzY3J1YiBvbiBib3RoIHRoZSBjb250YWluZXIgYW5pbWF0aW9uIGFuZCB0aGlzIG9uZSAob3IgYSBTY3JvbGxTbW9vdGhlciksIHRoZSB1cGRhdGUgb3JkZXIgd291bGQgY2F1c2UgdGhpcyBvbmUgbm90IHRvIGhhdmUgcmVuZGVyZWQgeWV0LCBzbyBpdCB3b3VsZG4ndCBtYWtlIGFueSBwcm9ncmVzcyBiZWZvcmUgd2UgLnJlc3RhcnQoKSBpdCBoZWFkaW5nIHRvd2FyZCB0aGUgbmV3IHByb2dyZXNzIHNvIGl0J2QgYXBwZWFyIHN0dWNrIHRodXMgd2UgZm9yY2UgYSByZW5kZXIgaGVyZS5cblxuICAgICAgICAgICAgaWYgKHNjcnViVHdlZW4ucmVzZXRUbykge1xuICAgICAgICAgICAgICBzY3J1YlR3ZWVuLnJlc2V0VG8oXCJ0b3RhbFByb2dyZXNzXCIsIGNsaXBwZWQsIGFuaW1hdGlvbi5fdFRpbWUgLyBhbmltYXRpb24uX3REdXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gbGVnYWN5IHN1cHBvcnQgKGNvdXJ0ZXN5KSwgYmVmb3JlIDMuMTAuMFxuICAgICAgICAgICAgICBzY3J1YlR3ZWVuLnZhcnMudG90YWxQcm9ncmVzcyA9IGNsaXBwZWQ7XG4gICAgICAgICAgICAgIHNjcnViVHdlZW4uaW52YWxpZGF0ZSgpLnJlc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGFuaW1hdGlvbikge1xuICAgICAgICAgICAgYW5pbWF0aW9uLnRvdGFsUHJvZ3Jlc3MoY2xpcHBlZCwgISEoX3JlZnJlc2hpbmcgJiYgKGxhc3RSZWZyZXNoIHx8IHJlc2V0KSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwaW4pIHtcbiAgICAgICAgICByZXNldCAmJiBwaW5TcGFjaW5nICYmIChzcGFjZXIuc3R5bGVbcGluU3BhY2luZyArIGRpcmVjdGlvbi5vczJdID0gc3BhY2luZ1N0YXJ0KTtcblxuICAgICAgICAgIGlmICghdXNlRml4ZWRQb3NpdGlvbikge1xuICAgICAgICAgICAgcGluU2V0dGVyKF9yb3VuZChwaW5TdGFydCArIHBpbkNoYW5nZSAqIGNsaXBwZWQpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlQ2hhbmdlZCkge1xuICAgICAgICAgICAgaXNBdE1heCA9ICFyZXNldCAmJiBjbGlwcGVkID4gcHJldlByb2dyZXNzICYmIGVuZCArIDEgPiBzY3JvbGwgJiYgc2Nyb2xsICsgMSA+PSBfbWF4U2Nyb2xsKHNjcm9sbGVyLCBkaXJlY3Rpb24pOyAvLyBpZiBpdCdzIGF0IHRoZSBWRVJZIGVuZCBvZiB0aGUgcGFnZSwgZG9uJ3Qgc3dpdGNoIGF3YXkgZnJvbSBwb3NpdGlvbjogZml4ZWQgYmVjYXVzZSBpdCdzIHBvaW50bGVzcyBhbmQgaXQgY291bGQgY2F1c2UgYSBicmllZiBmbGFzaCB3aGVuIHRoZSB1c2VyIHNjcm9sbHMgYmFjayB1cCAod2hlbiBpdCBnZXRzIHBpbm5lZCBhZ2FpbilcblxuICAgICAgICAgICAgaWYgKHBpblJlcGFyZW50KSB7XG4gICAgICAgICAgICAgIGlmICghcmVzZXQgJiYgKGlzQWN0aXZlIHx8IGlzQXRNYXgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJvdW5kcyA9IF9nZXRCb3VuZHMocGluLCB0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAgX29mZnNldCA9IHNjcm9sbCAtIHN0YXJ0O1xuXG4gICAgICAgICAgICAgICAgX3JlcGFyZW50KHBpbiwgX2JvZHksIGJvdW5kcy50b3AgKyAoZGlyZWN0aW9uID09PSBfdmVydGljYWwgPyBfb2Zmc2V0IDogMCkgKyBfcHgsIGJvdW5kcy5sZWZ0ICsgKGRpcmVjdGlvbiA9PT0gX3ZlcnRpY2FsID8gMCA6IF9vZmZzZXQpICsgX3B4KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfcmVwYXJlbnQocGluLCBzcGFjZXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9zZXRTdGF0ZShpc0FjdGl2ZSB8fCBpc0F0TWF4ID8gcGluQWN0aXZlU3RhdGUgOiBwaW5TdGF0ZSk7XG5cbiAgICAgICAgICAgIHBpbk1vdmVzICYmIGNsaXBwZWQgPCAxICYmIGlzQWN0aXZlIHx8IHBpblNldHRlcihwaW5TdGFydCArIChjbGlwcGVkID09PSAxICYmICFpc0F0TWF4ID8gcGluQ2hhbmdlIDogMCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNuYXAgJiYgIXR3ZWVuVG8udHdlZW4gJiYgIV9yZWZyZXNoaW5nICYmICFfc3RhcnR1cCAmJiBzbmFwRGVsYXllZENhbGwucmVzdGFydCh0cnVlKTtcbiAgICAgICAgdG9nZ2xlQ2xhc3MgJiYgKHRvZ2dsZWQgfHwgb25jZSAmJiBjbGlwcGVkICYmIChjbGlwcGVkIDwgMSB8fCAhX2xpbWl0Q2FsbGJhY2tzKSkgJiYgX3RvQXJyYXkodG9nZ2xlQ2xhc3MudGFyZ2V0cykuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICByZXR1cm4gZWwuY2xhc3NMaXN0W2lzQWN0aXZlIHx8IG9uY2UgPyBcImFkZFwiIDogXCJyZW1vdmVcIl0odG9nZ2xlQ2xhc3MuY2xhc3NOYW1lKTtcbiAgICAgICAgfSk7IC8vIGNsYXNzZXMgY291bGQgYWZmZWN0IHBvc2l0aW9uaW5nLCBzbyBkbyBpdCBldmVuIGlmIHJlc2V0IG9yIHJlZnJlc2hpbmcgaXMgdHJ1ZS5cblxuICAgICAgICBvblVwZGF0ZSAmJiAhaXNUb2dnbGUgJiYgIXJlc2V0ICYmIG9uVXBkYXRlKHNlbGYpO1xuXG4gICAgICAgIGlmIChzdGF0ZUNoYW5nZWQgJiYgIV9yZWZyZXNoaW5nKSB7XG4gICAgICAgICAgaWYgKGlzVG9nZ2xlKSB7XG4gICAgICAgICAgICBpZiAoaXNUYWtpbmdBY3Rpb24pIHtcbiAgICAgICAgICAgICAgaWYgKGFjdGlvbiA9PT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLnBhdXNlKCkudG90YWxQcm9ncmVzcygxKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09IFwicmVzZXRcIikge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5yZXN0YXJ0KHRydWUpLnBhdXNlKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSBcInJlc3RhcnRcIikge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5yZXN0YXJ0KHRydWUpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvblthY3Rpb25dKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb25VcGRhdGUgJiYgb25VcGRhdGUoc2VsZik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRvZ2dsZWQgfHwgIV9saW1pdENhbGxiYWNrcykge1xuICAgICAgICAgICAgLy8gb24gc3RhcnR1cCwgdGhlIHBhZ2UgY291bGQgYmUgc2Nyb2xsZWQgYW5kIHdlIGRvbid0IHdhbnQgdG8gZmlyZSBjYWxsYmFja3MgdGhhdCBkaWRuJ3QgdG9nZ2xlLiBGb3IgZXhhbXBsZSBvbkVudGVyIHNob3VsZG4ndCBmaXJlIGlmIHRoZSBTY3JvbGxUcmlnZ2VyIGlzbid0IGFjdHVhbGx5IGVudGVyZWQuXG4gICAgICAgICAgICBvblRvZ2dsZSAmJiB0b2dnbGVkICYmIF9jYWxsYmFjayhzZWxmLCBvblRvZ2dsZSk7XG4gICAgICAgICAgICBjYWxsYmFja3NbdG9nZ2xlU3RhdGVdICYmIF9jYWxsYmFjayhzZWxmLCBjYWxsYmFja3NbdG9nZ2xlU3RhdGVdKTtcbiAgICAgICAgICAgIG9uY2UgJiYgKGNsaXBwZWQgPT09IDEgPyBzZWxmLmtpbGwoZmFsc2UsIDEpIDogY2FsbGJhY2tzW3RvZ2dsZVN0YXRlXSA9IDApOyAvLyBhIGNhbGxiYWNrIHNob3VsZG4ndCBiZSBjYWxsZWQgYWdhaW4gaWYgb25jZSBpcyB0cnVlLlxuXG4gICAgICAgICAgICBpZiAoIXRvZ2dsZWQpIHtcbiAgICAgICAgICAgICAgLy8gaXQncyBwb3NzaWJsZSB0byBnbyBjb21wbGV0ZWx5IHBhc3QsIGxpa2UgZnJvbSBiZWZvcmUgdGhlIHN0YXJ0IHRvIGFmdGVyIHRoZSBlbmQgKG9yIHZpY2UtdmVyc2EpIGluIHdoaWNoIGNhc2UgQk9USCBjYWxsYmFja3Mgc2hvdWxkIGJlIGZpcmVkIGluIHRoYXQgb3JkZXJcbiAgICAgICAgICAgICAgdG9nZ2xlU3RhdGUgPSBjbGlwcGVkID09PSAxID8gMSA6IDM7XG4gICAgICAgICAgICAgIGNhbGxiYWNrc1t0b2dnbGVTdGF0ZV0gJiYgX2NhbGxiYWNrKHNlbGYsIGNhbGxiYWNrc1t0b2dnbGVTdGF0ZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChmYXN0U2Nyb2xsRW5kICYmICFpc0FjdGl2ZSAmJiBNYXRoLmFicyhzZWxmLmdldFZlbG9jaXR5KCkpID4gKF9pc051bWJlcihmYXN0U2Nyb2xsRW5kKSA/IGZhc3RTY3JvbGxFbmQgOiAyNTAwKSkge1xuICAgICAgICAgICAgX2VuZEFuaW1hdGlvbihzZWxmLmNhbGxiYWNrQW5pbWF0aW9uKTtcblxuICAgICAgICAgICAgc2NydWJUd2VlbiA/IHNjcnViVHdlZW4ucHJvZ3Jlc3MoMSkgOiBfZW5kQW5pbWF0aW9uKGFuaW1hdGlvbiwgYWN0aW9uID09PSBcInJldmVyc2VcIiA/IDEgOiAhY2xpcHBlZCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGlzVG9nZ2xlICYmIG9uVXBkYXRlICYmICFfcmVmcmVzaGluZykge1xuICAgICAgICAgIG9uVXBkYXRlKHNlbGYpO1xuICAgICAgICB9XG4gICAgICB9IC8vIHVwZGF0ZSBhYnNvbHV0ZWx5LXBvc2l0aW9uZWQgbWFya2VycyAob25seSBpZiB0aGUgc2Nyb2xsZXIgaXNuJ3QgdGhlIHZpZXdwb3J0KVxuXG5cbiAgICAgIGlmIChtYXJrZXJFbmRTZXR0ZXIpIHtcbiAgICAgICAgdmFyIG4gPSBjb250YWluZXJBbmltYXRpb24gPyBzY3JvbGwgLyBjb250YWluZXJBbmltYXRpb24uZHVyYXRpb24oKSAqIChjb250YWluZXJBbmltYXRpb24uX2NhU2Nyb2xsRGlzdCB8fCAwKSA6IHNjcm9sbDtcbiAgICAgICAgbWFya2VyU3RhcnRTZXR0ZXIobiArIChtYXJrZXJTdGFydFRyaWdnZXIuX2lzRmxpcHBlZCA/IDEgOiAwKSk7XG4gICAgICAgIG1hcmtlckVuZFNldHRlcihuKTtcbiAgICAgIH1cblxuICAgICAgY2FNYXJrZXJTZXR0ZXIgJiYgY2FNYXJrZXJTZXR0ZXIoLXNjcm9sbCAvIGNvbnRhaW5lckFuaW1hdGlvbi5kdXJhdGlvbigpICogKGNvbnRhaW5lckFuaW1hdGlvbi5fY2FTY3JvbGxEaXN0IHx8IDApKTtcbiAgICB9O1xuXG4gICAgc2VsZi5lbmFibGUgPSBmdW5jdGlvbiAocmVzZXQsIHJlZnJlc2gpIHtcbiAgICAgIGlmICghc2VsZi5lbmFibGVkKSB7XG4gICAgICAgIHNlbGYuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAgICAgX2FkZExpc3RlbmVyKHNjcm9sbGVyLCBcInJlc2l6ZVwiLCBfb25SZXNpemUpO1xuXG4gICAgICAgIGlzVmlld3BvcnQgfHwgX2FkZExpc3RlbmVyKHNjcm9sbGVyLCBcInNjcm9sbFwiLCBfb25TY3JvbGwpO1xuICAgICAgICBvblJlZnJlc2hJbml0ICYmIF9hZGRMaXN0ZW5lcihTY3JvbGxUcmlnZ2VyLCBcInJlZnJlc2hJbml0XCIsIG9uUmVmcmVzaEluaXQpO1xuXG4gICAgICAgIGlmIChyZXNldCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICBzZWxmLnByb2dyZXNzID0gcHJldlByb2dyZXNzID0gMDtcbiAgICAgICAgICBzY3JvbGwxID0gc2Nyb2xsMiA9IGxhc3RTbmFwID0gc2Nyb2xsRnVuYygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVmcmVzaCAhPT0gZmFsc2UgJiYgc2VsZi5yZWZyZXNoKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNlbGYuZ2V0VHdlZW4gPSBmdW5jdGlvbiAoc25hcCkge1xuICAgICAgcmV0dXJuIHNuYXAgJiYgdHdlZW5UbyA/IHR3ZWVuVG8udHdlZW4gOiBzY3J1YlR3ZWVuO1xuICAgIH07XG5cbiAgICBzZWxmLnNldFBvc2l0aW9ucyA9IGZ1bmN0aW9uIChuZXdTdGFydCwgbmV3RW5kLCBrZWVwQ2xhbXAsIHBpbk9mZnNldCkge1xuICAgICAgLy8gZG9lc24ndCBwZXJzaXN0IGFmdGVyIHJlZnJlc2goKSEgSW50ZW5kZWQgdG8gYmUgYSB3YXkgdG8gb3ZlcnJpZGUgdmFsdWVzIHRoYXQgd2VyZSBzZXQgZHVyaW5nIHJlZnJlc2goKSwgbGlrZSB5b3UgY291bGQgc2V0IGl0IGluIG9uUmVmcmVzaCgpXG4gICAgICBpZiAoY29udGFpbmVyQW5pbWF0aW9uKSB7XG4gICAgICAgIC8vIGNvbnZlcnQgcmF0aW9zIGludG8gc2Nyb2xsIHBvc2l0aW9ucy4gUmVtZW1iZXIsIHN0YXJ0L2VuZCB2YWx1ZXMgb24gU2Nyb2xsVHJpZ2dlcnMgdGhhdCBoYXZlIGEgY29udGFpbmVyQW5pbWF0aW9uIHJlZmVyIHRvIHRoZSB0aW1lIChpbiBzZWNvbmRzKSwgTk9UIHNjcm9sbCBwb3NpdGlvbnMuXG4gICAgICAgIHZhciBzdCA9IGNvbnRhaW5lckFuaW1hdGlvbi5zY3JvbGxUcmlnZ2VyLFxuICAgICAgICAgICAgZHVyYXRpb24gPSBjb250YWluZXJBbmltYXRpb24uZHVyYXRpb24oKSxcbiAgICAgICAgICAgIF9jaGFuZ2UgPSBzdC5lbmQgLSBzdC5zdGFydDtcblxuICAgICAgICBuZXdTdGFydCA9IHN0LnN0YXJ0ICsgX2NoYW5nZSAqIG5ld1N0YXJ0IC8gZHVyYXRpb247XG4gICAgICAgIG5ld0VuZCA9IHN0LnN0YXJ0ICsgX2NoYW5nZSAqIG5ld0VuZCAvIGR1cmF0aW9uO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnJlZnJlc2goZmFsc2UsIGZhbHNlLCB7XG4gICAgICAgIHN0YXJ0OiBfa2VlcENsYW1wKG5ld1N0YXJ0LCBrZWVwQ2xhbXAgJiYgISFzZWxmLl9zdGFydENsYW1wKSxcbiAgICAgICAgZW5kOiBfa2VlcENsYW1wKG5ld0VuZCwga2VlcENsYW1wICYmICEhc2VsZi5fZW5kQ2xhbXApXG4gICAgICB9LCBwaW5PZmZzZXQpO1xuICAgICAgc2VsZi51cGRhdGUoKTtcbiAgICB9O1xuXG4gICAgc2VsZi5hZGp1c3RQaW5TcGFjaW5nID0gZnVuY3Rpb24gKGFtb3VudCkge1xuICAgICAgaWYgKHNwYWNlclN0YXRlICYmIGFtb3VudCkge1xuICAgICAgICB2YXIgaSA9IHNwYWNlclN0YXRlLmluZGV4T2YoZGlyZWN0aW9uLmQpICsgMTtcbiAgICAgICAgc3BhY2VyU3RhdGVbaV0gPSBwYXJzZUZsb2F0KHNwYWNlclN0YXRlW2ldKSArIGFtb3VudCArIF9weDtcbiAgICAgICAgc3BhY2VyU3RhdGVbMV0gPSBwYXJzZUZsb2F0KHNwYWNlclN0YXRlWzFdKSArIGFtb3VudCArIF9weDtcblxuICAgICAgICBfc2V0U3RhdGUoc3BhY2VyU3RhdGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzZWxmLmRpc2FibGUgPSBmdW5jdGlvbiAocmVzZXQsIGFsbG93QW5pbWF0aW9uKSB7XG4gICAgICBpZiAoc2VsZi5lbmFibGVkKSB7XG4gICAgICAgIHJlc2V0ICE9PSBmYWxzZSAmJiBzZWxmLnJldmVydCh0cnVlLCB0cnVlKTtcbiAgICAgICAgc2VsZi5lbmFibGVkID0gc2VsZi5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBhbGxvd0FuaW1hdGlvbiB8fCBzY3J1YlR3ZWVuICYmIHNjcnViVHdlZW4ucGF1c2UoKTtcbiAgICAgICAgcHJldlNjcm9sbCA9IDA7XG4gICAgICAgIHBpbkNhY2hlICYmIChwaW5DYWNoZS51bmNhY2hlID0gMSk7XG4gICAgICAgIG9uUmVmcmVzaEluaXQgJiYgX3JlbW92ZUxpc3RlbmVyKFNjcm9sbFRyaWdnZXIsIFwicmVmcmVzaEluaXRcIiwgb25SZWZyZXNoSW5pdCk7XG5cbiAgICAgICAgaWYgKHNuYXBEZWxheWVkQ2FsbCkge1xuICAgICAgICAgIHNuYXBEZWxheWVkQ2FsbC5wYXVzZSgpO1xuICAgICAgICAgIHR3ZWVuVG8udHdlZW4gJiYgdHdlZW5Uby50d2Vlbi5raWxsKCkgJiYgKHR3ZWVuVG8udHdlZW4gPSAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNWaWV3cG9ydCkge1xuICAgICAgICAgIHZhciBpID0gX3RyaWdnZXJzLmxlbmd0aDtcblxuICAgICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgIGlmIChfdHJpZ2dlcnNbaV0uc2Nyb2xsZXIgPT09IHNjcm9sbGVyICYmIF90cmlnZ2Vyc1tpXSAhPT0gc2VsZikge1xuICAgICAgICAgICAgICByZXR1cm47IC8vZG9uJ3QgcmVtb3ZlIHRoZSBsaXN0ZW5lcnMgaWYgdGhlcmUgYXJlIHN0aWxsIG90aGVyIHRyaWdnZXJzIHJlZmVyZW5jaW5nIGl0LlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIF9yZW1vdmVMaXN0ZW5lcihzY3JvbGxlciwgXCJyZXNpemVcIiwgX29uUmVzaXplKTtcblxuICAgICAgICAgIGlzVmlld3BvcnQgfHwgX3JlbW92ZUxpc3RlbmVyKHNjcm9sbGVyLCBcInNjcm9sbFwiLCBfb25TY3JvbGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNlbGYua2lsbCA9IGZ1bmN0aW9uIChyZXZlcnQsIGFsbG93QW5pbWF0aW9uKSB7XG4gICAgICBzZWxmLmRpc2FibGUocmV2ZXJ0LCBhbGxvd0FuaW1hdGlvbik7XG4gICAgICBzY3J1YlR3ZWVuICYmICFhbGxvd0FuaW1hdGlvbiAmJiBzY3J1YlR3ZWVuLmtpbGwoKTtcbiAgICAgIGlkICYmIGRlbGV0ZSBfaWRzW2lkXTtcblxuICAgICAgdmFyIGkgPSBfdHJpZ2dlcnMuaW5kZXhPZihzZWxmKTtcblxuICAgICAgaSA+PSAwICYmIF90cmlnZ2Vycy5zcGxpY2UoaSwgMSk7XG4gICAgICBpID09PSBfaSAmJiBfZGlyZWN0aW9uID4gMCAmJiBfaS0tOyAvLyBpZiB3ZSdyZSBpbiB0aGUgbWlkZGxlIG9mIGEgcmVmcmVzaCgpIG9yIHVwZGF0ZSgpLCBzcGxpY2luZyB3b3VsZCBjYXVzZSBza2lwcyBpbiB0aGUgaW5kZXgsIHNvIGFkanVzdC4uLlxuICAgICAgLy8gaWYgbm8gb3RoZXIgU2Nyb2xsVHJpZ2dlciBpbnN0YW5jZXMgb2YgdGhlIHNhbWUgc2Nyb2xsZXIgYXJlIGZvdW5kLCB3aXBlIG91dCBhbnkgcmVjb3JkZWQgc2Nyb2xsIHBvc2l0aW9uLiBPdGhlcndpc2UsIGluIGEgc2luZ2xlIHBhZ2UgYXBwbGljYXRpb24sIGZvciBleGFtcGxlLCBpdCBjb3VsZCBtYWludGFpbiBzY3JvbGwgcG9zaXRpb24gd2hlbiBpdCByZWFsbHkgc2hvdWxkbid0LlxuXG4gICAgICBpID0gMDtcblxuICAgICAgX3RyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQuc2Nyb2xsZXIgPT09IHNlbGYuc2Nyb2xsZXIgJiYgKGkgPSAxKTtcbiAgICAgIH0pO1xuXG4gICAgICBpIHx8IF9yZWZyZXNoaW5nQWxsIHx8IChzZWxmLnNjcm9sbC5yZWMgPSAwKTtcblxuICAgICAgaWYgKGFuaW1hdGlvbikge1xuICAgICAgICBhbmltYXRpb24uc2Nyb2xsVHJpZ2dlciA9IG51bGw7XG4gICAgICAgIHJldmVydCAmJiBhbmltYXRpb24ucmV2ZXJ0KHtcbiAgICAgICAgICBraWxsOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgYWxsb3dBbmltYXRpb24gfHwgYW5pbWF0aW9uLmtpbGwoKTtcbiAgICAgIH1cblxuICAgICAgbWFya2VyU3RhcnQgJiYgW21hcmtlclN0YXJ0LCBtYXJrZXJFbmQsIG1hcmtlclN0YXJ0VHJpZ2dlciwgbWFya2VyRW5kVHJpZ2dlcl0uZm9yRWFjaChmdW5jdGlvbiAobSkge1xuICAgICAgICByZXR1cm4gbS5wYXJlbnROb2RlICYmIG0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtKTtcbiAgICAgIH0pO1xuICAgICAgX3ByaW1hcnkgPT09IHNlbGYgJiYgKF9wcmltYXJ5ID0gMCk7XG5cbiAgICAgIGlmIChwaW4pIHtcbiAgICAgICAgcGluQ2FjaGUgJiYgKHBpbkNhY2hlLnVuY2FjaGUgPSAxKTtcbiAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgX3RyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICByZXR1cm4gdC5waW4gPT09IHBpbiAmJiBpKys7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGkgfHwgKHBpbkNhY2hlLnNwYWNlciA9IDApOyAvLyBpZiB0aGVyZSBhcmVuJ3QgYW55IG1vcmUgU2Nyb2xsVHJpZ2dlcnMgd2l0aCB0aGUgc2FtZSBwaW4sIHJlbW92ZSB0aGUgc3BhY2VyLCBvdGhlcndpc2UgaXQgY291bGQgYmUgY29udGFtaW5hdGVkIHdpdGggb2xkL3N0YWxlIHZhbHVlcyBpZiB0aGUgdXNlciByZS1jcmVhdGVzIGEgU2Nyb2xsVHJpZ2dlciBmb3IgdGhlIHNhbWUgZWxlbWVudC5cbiAgICAgIH1cblxuICAgICAgdmFycy5vbktpbGwgJiYgdmFycy5vbktpbGwoc2VsZik7XG4gICAgfTtcblxuICAgIF90cmlnZ2Vycy5wdXNoKHNlbGYpO1xuXG4gICAgc2VsZi5lbmFibGUoZmFsc2UsIGZhbHNlKTtcbiAgICBjdXN0b21SZXZlcnRSZXR1cm4gJiYgY3VzdG9tUmV2ZXJ0UmV0dXJuKHNlbGYpO1xuXG4gICAgaWYgKGFuaW1hdGlvbiAmJiBhbmltYXRpb24uYWRkICYmICFjaGFuZ2UpIHtcbiAgICAgIC8vIGlmIHRoZSBhbmltYXRpb24gaXMgYSB0aW1lbGluZSwgaXQgbWF5IG5vdCBoYXZlIGJlZW4gcG9wdWxhdGVkIHlldCwgc28gaXQgd291bGRuJ3QgcmVuZGVyIGF0IHRoZSBwcm9wZXIgcGxhY2Ugb24gdGhlIGZpcnN0IHJlZnJlc2goKSwgdGh1cyB3ZSBzaG91bGQgc2NoZWR1bGUgb25lIGZvciB0aGUgbmV4dCB0aWNrLiBJZiBcImNoYW5nZVwiIGlzIGRlZmluZWQsIHdlIGtub3cgaXQgbXVzdCBiZSByZS1lbmFibGluZywgdGh1cyB3ZSBjYW4gcmVmcmVzaCgpIHJpZ2h0IGF3YXkuXG4gICAgICB2YXIgdXBkYXRlRnVuYyA9IHNlbGYudXBkYXRlOyAvLyBzb21lIGJyb3dzZXJzIG1heSBmaXJlIGEgc2Nyb2xsIGV2ZW50IEJFRk9SRSBhIHRpY2sgZWxhcHNlcyBhbmQvb3IgdGhlIERPTUNvbnRlbnRMb2FkZWQgZmlyZXMuIFNvIHRoZXJlJ3MgYSBjaGFuY2UgdXBkYXRlKCkgd2lsbCBiZSBjYWxsZWQgQkVGT1JFIGEgcmVmcmVzaCgpIGhhcyBoYXBwZW5lZCBvbiBhIFRpbWVsaW5lLWF0dGFjaGVkIFNjcm9sbFRyaWdnZXIgd2hpY2ggbWVhbnMgdGhlIHN0YXJ0L2VuZCB3b24ndCBiZSBjYWxjdWxhdGVkIHlldC4gV2UgZG9uJ3Qgd2FudCB0byBhZGQgY29uZGl0aW9uYWwgbG9naWMgaW5zaWRlIHRoZSB1cGRhdGUoKSBtZXRob2QgKGxpa2UgY2hlY2sgdG8gc2VlIGlmIGVuZCBpcyBkZWZpbmVkIGFuZCBpZiBub3QsIGZvcmNlIGEgcmVmcmVzaCgpKSBiZWNhdXNlIHRoYXQncyBhIGZ1bmN0aW9uIHRoYXQgZ2V0cyBoaXQgYSBMT1QgKHBlcmZvcm1hbmNlKS4gU28gd2Ugc3dhcCBvdXQgdGhlIHJlYWwgdXBkYXRlKCkgbWV0aG9kIGZvciB0aGlzIG9uZSB0aGF0J2xsIHJlLWF0dGFjaCBpdCB0aGUgZmlyc3QgdGltZSBpdCBnZXRzIGNhbGxlZCBhbmQgb2YgY291cnNlIGZvcmNlcyBhIHJlZnJlc2goKS5cblxuICAgICAgc2VsZi51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYudXBkYXRlID0gdXBkYXRlRnVuYztcbiAgICAgICAgc3RhcnQgfHwgZW5kIHx8IHNlbGYucmVmcmVzaCgpO1xuICAgICAgfTtcblxuICAgICAgZ3NhcC5kZWxheWVkQ2FsbCgwLjAxLCBzZWxmLnVwZGF0ZSk7XG4gICAgICBjaGFuZ2UgPSAwLjAxO1xuICAgICAgc3RhcnQgPSBlbmQgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLnJlZnJlc2goKTtcbiAgICB9XG5cbiAgICBwaW4gJiYgX3F1ZXVlUmVmcmVzaEFsbCgpOyAvLyBwaW5uaW5nIGNvdWxkIGFmZmVjdCB0aGUgcG9zaXRpb25zIG9mIG90aGVyIHRoaW5ncywgc28gbWFrZSBzdXJlIHdlIHF1ZXVlIGEgZnVsbCByZWZyZXNoKClcbiAgfTtcblxuICBTY3JvbGxUcmlnZ2VyLnJlZ2lzdGVyID0gZnVuY3Rpb24gcmVnaXN0ZXIoY29yZSkge1xuICAgIGlmICghX2NvcmVJbml0dGVkKSB7XG4gICAgICBnc2FwID0gY29yZSB8fCBfZ2V0R1NBUCgpO1xuICAgICAgX3dpbmRvd0V4aXN0cygpICYmIHdpbmRvdy5kb2N1bWVudCAmJiBTY3JvbGxUcmlnZ2VyLmVuYWJsZSgpO1xuICAgICAgX2NvcmVJbml0dGVkID0gX2VuYWJsZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9jb3JlSW5pdHRlZDtcbiAgfTtcblxuICBTY3JvbGxUcmlnZ2VyLmRlZmF1bHRzID0gZnVuY3Rpb24gZGVmYXVsdHMoY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZykge1xuICAgICAgZm9yICh2YXIgcCBpbiBjb25maWcpIHtcbiAgICAgICAgX2RlZmF1bHRzW3BdID0gY29uZmlnW3BdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfZGVmYXVsdHM7XG4gIH07XG5cbiAgU2Nyb2xsVHJpZ2dlci5kaXNhYmxlID0gZnVuY3Rpb24gZGlzYWJsZShyZXNldCwga2lsbCkge1xuICAgIF9lbmFibGVkID0gMDtcblxuICAgIF90cmlnZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgICByZXR1cm4gdHJpZ2dlcltraWxsID8gXCJraWxsXCIgOiBcImRpc2FibGVcIl0ocmVzZXQpO1xuICAgIH0pO1xuXG4gICAgX3JlbW92ZUxpc3RlbmVyKF93aW4sIFwid2hlZWxcIiwgX29uU2Nyb2xsKTtcblxuICAgIF9yZW1vdmVMaXN0ZW5lcihfZG9jLCBcInNjcm9sbFwiLCBfb25TY3JvbGwpO1xuXG4gICAgY2xlYXJJbnRlcnZhbChfc3luY0ludGVydmFsKTtcblxuICAgIF9yZW1vdmVMaXN0ZW5lcihfZG9jLCBcInRvdWNoY2FuY2VsXCIsIF9wYXNzVGhyb3VnaCk7XG5cbiAgICBfcmVtb3ZlTGlzdGVuZXIoX2JvZHksIFwidG91Y2hzdGFydFwiLCBfcGFzc1Rocm91Z2gpO1xuXG4gICAgX211bHRpTGlzdGVuZXIoX3JlbW92ZUxpc3RlbmVyLCBfZG9jLCBcInBvaW50ZXJkb3duLHRvdWNoc3RhcnQsbW91c2Vkb3duXCIsIF9wb2ludGVyRG93bkhhbmRsZXIpO1xuXG4gICAgX211bHRpTGlzdGVuZXIoX3JlbW92ZUxpc3RlbmVyLCBfZG9jLCBcInBvaW50ZXJ1cCx0b3VjaGVuZCxtb3VzZXVwXCIsIF9wb2ludGVyVXBIYW5kbGVyKTtcblxuICAgIF9yZXNpemVEZWxheS5raWxsKCk7XG5cbiAgICBfaXRlcmF0ZUF1dG9SZWZyZXNoKF9yZW1vdmVMaXN0ZW5lcik7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IF9zY3JvbGxlcnMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICAgIF93aGVlbExpc3RlbmVyKF9yZW1vdmVMaXN0ZW5lciwgX3Njcm9sbGVyc1tpXSwgX3Njcm9sbGVyc1tpICsgMV0pO1xuXG4gICAgICBfd2hlZWxMaXN0ZW5lcihfcmVtb3ZlTGlzdGVuZXIsIF9zY3JvbGxlcnNbaV0sIF9zY3JvbGxlcnNbaSArIDJdKTtcbiAgICB9XG4gIH07XG5cbiAgU2Nyb2xsVHJpZ2dlci5lbmFibGUgPSBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgX3dpbiA9IHdpbmRvdztcbiAgICBfZG9jID0gZG9jdW1lbnQ7XG4gICAgX2RvY0VsID0gX2RvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgX2JvZHkgPSBfZG9jLmJvZHk7XG5cbiAgICBpZiAoZ3NhcCkge1xuICAgICAgX3RvQXJyYXkgPSBnc2FwLnV0aWxzLnRvQXJyYXk7XG4gICAgICBfY2xhbXAgPSBnc2FwLnV0aWxzLmNsYW1wO1xuICAgICAgX2NvbnRleHQgPSBnc2FwLmNvcmUuY29udGV4dCB8fCBfcGFzc1Rocm91Z2g7XG4gICAgICBfc3VwcHJlc3NPdmVyd3JpdGVzID0gZ3NhcC5jb3JlLnN1cHByZXNzT3ZlcndyaXRlcyB8fCBfcGFzc1Rocm91Z2g7XG4gICAgICBfc2Nyb2xsUmVzdG9yYXRpb24gPSBfd2luLmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gfHwgXCJhdXRvXCI7XG4gICAgICBfbGFzdFNjcm9sbCA9IF93aW4ucGFnZVlPZmZzZXQ7XG4gICAgICBnc2FwLmNvcmUuZ2xvYmFscyhcIlNjcm9sbFRyaWdnZXJcIiwgU2Nyb2xsVHJpZ2dlcik7IC8vIG11c3QgcmVnaXN0ZXIgdGhlIGdsb2JhbCBtYW51YWxseSBiZWNhdXNlIGluIEludGVybmV0IEV4cGxvcmVyLCBmdW5jdGlvbnMgKGNsYXNzZXMpIGRvbid0IGhhdmUgYSBcIm5hbWVcIiBwcm9wZXJ0eS5cblxuICAgICAgaWYgKF9ib2R5KSB7XG4gICAgICAgIF9lbmFibGVkID0gMTtcbiAgICAgICAgX2RpdjEwMHZoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy8gdG8gc29sdmUgbW9iaWxlIGJyb3dzZXIgYWRkcmVzcyBiYXIgc2hvdy9oaWRlIHJlc2l6aW5nLCB3ZSBzaG91bGRuJ3QgcmVseSBvbiB3aW5kb3cuaW5uZXJIZWlnaHQuIEluc3RlYWQsIHVzZSBhIDxkaXY+IHdpdGggaXRzIGhlaWdodCBzZXQgdG8gMTAwdmggYW5kIG1lYXN1cmUgdGhhdCBzaW5jZSB0aGF0J3Mgd2hhdCB0aGUgc2Nyb2xsaW5nIGlzIGJhc2VkIG9uIGFueXdheSBhbmQgaXQncyBub3QgYWZmZWN0ZWQgYnkgYWRkcmVzcyBiYXIgc2hvd2luZy9oaWRpbmcuXG5cbiAgICAgICAgX2RpdjEwMHZoLnN0eWxlLmhlaWdodCA9IFwiMTAwdmhcIjtcbiAgICAgICAgX2RpdjEwMHZoLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXG4gICAgICAgIF9yZWZyZXNoMTAwdmgoKTtcblxuICAgICAgICBfcmFmQnVnRml4KCk7XG5cbiAgICAgICAgT2JzZXJ2ZXIucmVnaXN0ZXIoZ3NhcCk7IC8vIGlzVG91Y2ggaXMgMCBpZiBubyB0b3VjaCwgMSBpZiBPTkxZIHRvdWNoLCBhbmQgMiBpZiBpdCBjYW4gYWNjb21tb2RhdGUgdG91Y2ggYnV0IGFsc28gb3RoZXIgdHlwZXMgbGlrZSBtb3VzZS9wb2ludGVyLlxuXG4gICAgICAgIFNjcm9sbFRyaWdnZXIuaXNUb3VjaCA9IE9ic2VydmVyLmlzVG91Y2g7XG4gICAgICAgIF9maXhJT1NCdWcgPSBPYnNlcnZlci5pc1RvdWNoICYmIC8oaVBhZHxpUGhvbmV8aVBvZHxNYWMpL2cudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTsgLy8gc2luY2UgMjAxNywgaU9TIGhhcyBoYWQgYSBidWcgdGhhdCBjYXVzZXMgZXZlbnQuY2xpZW50WC9ZIHRvIGJlIGluYWNjdXJhdGUgd2hlbiBhIHNjcm9sbCBvY2N1cnMsIHRodXMgd2UgbXVzdCBhbHRlcm5hdGUgaWdub3JpbmcgZXZlcnkgb3RoZXIgdG91Y2htb3ZlIGV2ZW50IHRvIHdvcmsgYXJvdW5kIGl0LiBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE4MTk1NCBhbmQgaHR0cHM6Ly9jb2RlcGVuLmlvL0dyZWVuU29jay9wZW4vRXhiclBOYS8wODdjZWYxOTdkYzM1NDQ1YTA5NTFlODkzNWM0MTUwM1xuXG4gICAgICAgIF9hZGRMaXN0ZW5lcihfd2luLCBcIndoZWVsXCIsIF9vblNjcm9sbCk7IC8vIG1vc3RseSBmb3IgM3JkIHBhcnR5IHNtb290aCBzY3JvbGxpbmcgbGlicmFyaWVzLlxuXG5cbiAgICAgICAgX3Jvb3QgPSBbX3dpbiwgX2RvYywgX2RvY0VsLCBfYm9keV07XG5cbiAgICAgICAgaWYgKGdzYXAubWF0Y2hNZWRpYSkge1xuICAgICAgICAgIFNjcm9sbFRyaWdnZXIubWF0Y2hNZWRpYSA9IGZ1bmN0aW9uICh2YXJzKSB7XG4gICAgICAgICAgICB2YXIgbW0gPSBnc2FwLm1hdGNoTWVkaWEoKSxcbiAgICAgICAgICAgICAgICBwO1xuXG4gICAgICAgICAgICBmb3IgKHAgaW4gdmFycykge1xuICAgICAgICAgICAgICBtbS5hZGQocCwgdmFyc1twXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtbTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgZ3NhcC5hZGRFdmVudExpc3RlbmVyKFwibWF0Y2hNZWRpYUluaXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9yZXZlcnRBbGwoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBnc2FwLmFkZEV2ZW50TGlzdGVuZXIoXCJtYXRjaE1lZGlhUmV2ZXJ0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfcmV2ZXJ0UmVjb3JkZWQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBnc2FwLmFkZEV2ZW50TGlzdGVuZXIoXCJtYXRjaE1lZGlhXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF9yZWZyZXNoQWxsKDAsIDEpO1xuXG4gICAgICAgICAgICBfZGlzcGF0Y2goXCJtYXRjaE1lZGlhXCIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGdzYXAubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogcG9ydHJhaXQpXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHdoZW4gb3JpZW50YXRpb24gY2hhbmdlcywgd2Ugc2hvdWxkIHRha2UgbmV3IGJhc2UgbWVhc3VyZW1lbnRzIGZvciB0aGUgaWdub3JlTW9iaWxlUmVzaXplIGZlYXR1cmUuXG4gICAgICAgICAgICBfc2V0QmFzZURpbWVuc2lvbnMoKTtcblxuICAgICAgICAgICAgcmV0dXJuIF9zZXRCYXNlRGltZW5zaW9ucztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJSZXF1aXJlcyBHU0FQIDMuMTEuMCBvciBsYXRlclwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9zZXRCYXNlRGltZW5zaW9ucygpO1xuXG4gICAgICAgIF9hZGRMaXN0ZW5lcihfZG9jLCBcInNjcm9sbFwiLCBfb25TY3JvbGwpOyAvLyBzb21lIGJyb3dzZXJzIChsaWtlIENocm9tZSksIHRoZSB3aW5kb3cgc3RvcHMgZGlzcGF0Y2hpbmcgc2Nyb2xsIGV2ZW50cyBvbiB0aGUgd2luZG93IGlmIHlvdSBzY3JvbGwgcmVhbGx5IGZhc3QsIGJ1dCBpdCdzIGNvbnNpc3RlbnQgb24gdGhlIGRvY3VtZW50IVxuXG5cbiAgICAgICAgdmFyIGJvZHlTdHlsZSA9IF9ib2R5LnN0eWxlLFxuICAgICAgICAgICAgYm9yZGVyID0gYm9keVN0eWxlLmJvcmRlclRvcFN0eWxlLFxuICAgICAgICAgICAgQW5pbWF0aW9uUHJvdG8gPSBnc2FwLmNvcmUuQW5pbWF0aW9uLnByb3RvdHlwZSxcbiAgICAgICAgICAgIGJvdW5kcyxcbiAgICAgICAgICAgIGk7XG4gICAgICAgIEFuaW1hdGlvblByb3RvLnJldmVydCB8fCBPYmplY3QuZGVmaW5lUHJvcGVydHkoQW5pbWF0aW9uUHJvdG8sIFwicmV2ZXJ0XCIsIHtcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aW1lKC0wLjAxLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pOyAvLyBvbmx5IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSAoQW5pbWF0aW9uLnJldmVydCgpIHdhcyBhZGRlZCBhZnRlciAzLjEwLjQpXG5cbiAgICAgICAgYm9keVN0eWxlLmJvcmRlclRvcFN0eWxlID0gXCJzb2xpZFwiOyAvLyB3b3JrcyBhcm91bmQgYW4gaXNzdWUgd2hlcmUgYSBtYXJnaW4gb2YgYSBjaGlsZCBlbGVtZW50IGNvdWxkIHRocm93IG9mZiB0aGUgYm91bmRzIG9mIHRoZSBfYm9keSwgbWFraW5nIGl0IHNlZW0gbGlrZSB0aGVyZSdzIGEgbWFyZ2luIHdoZW4gdGhlcmUgYWN0dWFsbHkgaXNuJ3QuIFRoZSBib3JkZXIgZW5zdXJlcyB0aGF0IHRoZSBib3VuZHMgYXJlIGFjY3VyYXRlLlxuXG4gICAgICAgIGJvdW5kcyA9IF9nZXRCb3VuZHMoX2JvZHkpO1xuICAgICAgICBfdmVydGljYWwubSA9IE1hdGgucm91bmQoYm91bmRzLnRvcCArIF92ZXJ0aWNhbC5zYygpKSB8fCAwOyAvLyBhY2NvbW1vZGF0ZSB0aGUgb2Zmc2V0IG9mIHRoZSA8Ym9keT4gY2F1c2VkIGJ5IG1hcmdpbnMgYW5kL29yIHBhZGRpbmdcblxuICAgICAgICBfaG9yaXpvbnRhbC5tID0gTWF0aC5yb3VuZChib3VuZHMubGVmdCArIF9ob3Jpem9udGFsLnNjKCkpIHx8IDA7XG4gICAgICAgIGJvcmRlciA/IGJvZHlTdHlsZS5ib3JkZXJUb3BTdHlsZSA9IGJvcmRlciA6IGJvZHlTdHlsZS5yZW1vdmVQcm9wZXJ0eShcImJvcmRlci10b3Atc3R5bGVcIik7IC8vIFRPRE86ICg/KSBtYXliZSBtb3ZlIHRvIGxldmVyYWdpbmcgdGhlIHZlbG9jaXR5IG1lY2hhbmlzbSBpbiBPYnNlcnZlciBhbmQgc2tpcCBpbnRlcnZhbHMuXG5cbiAgICAgICAgX3N5bmNJbnRlcnZhbCA9IHNldEludGVydmFsKF9zeW5jLCAyNTApO1xuICAgICAgICBnc2FwLmRlbGF5ZWRDYWxsKDAuNSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfc3RhcnR1cCA9IDA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF9hZGRMaXN0ZW5lcihfZG9jLCBcInRvdWNoY2FuY2VsXCIsIF9wYXNzVGhyb3VnaCk7IC8vIHNvbWUgb2xkZXIgQW5kcm9pZCBkZXZpY2VzIGludGVybWl0dGVudGx5IHN0b3AgZGlzcGF0Y2hpbmcgXCJ0b3VjaG1vdmVcIiBldmVudHMgaWYgd2UgZG9uJ3QgbGlzdGVuIGZvciBcInRvdWNoY2FuY2VsXCIgb24gdGhlIGRvY3VtZW50LlxuXG5cbiAgICAgICAgX2FkZExpc3RlbmVyKF9ib2R5LCBcInRvdWNoc3RhcnRcIiwgX3Bhc3NUaHJvdWdoKTsgLy93b3JrcyBhcm91bmQgU2FmYXJpIGJ1ZzogaHR0cHM6Ly9ncmVlbnNvY2suY29tL2ZvcnVtcy90b3BpYy8yMTQ1MC1kcmFnZ2FibGUtaW4taWZyYW1lLW9uLW1vYmlsZS1pcy1idWdneS9cblxuXG4gICAgICAgIF9tdWx0aUxpc3RlbmVyKF9hZGRMaXN0ZW5lciwgX2RvYywgXCJwb2ludGVyZG93bix0b3VjaHN0YXJ0LG1vdXNlZG93blwiLCBfcG9pbnRlckRvd25IYW5kbGVyKTtcblxuICAgICAgICBfbXVsdGlMaXN0ZW5lcihfYWRkTGlzdGVuZXIsIF9kb2MsIFwicG9pbnRlcnVwLHRvdWNoZW5kLG1vdXNldXBcIiwgX3BvaW50ZXJVcEhhbmRsZXIpO1xuXG4gICAgICAgIF90cmFuc2Zvcm1Qcm9wID0gZ3NhcC51dGlscy5jaGVja1ByZWZpeChcInRyYW5zZm9ybVwiKTtcblxuICAgICAgICBfc3RhdGVQcm9wcy5wdXNoKF90cmFuc2Zvcm1Qcm9wKTtcblxuICAgICAgICBfY29yZUluaXR0ZWQgPSBfZ2V0VGltZSgpO1xuICAgICAgICBfcmVzaXplRGVsYXkgPSBnc2FwLmRlbGF5ZWRDYWxsKDAuMiwgX3JlZnJlc2hBbGwpLnBhdXNlKCk7XG4gICAgICAgIF9hdXRvUmVmcmVzaCA9IFtfZG9jLCBcInZpc2liaWxpdHljaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciB3ID0gX3dpbi5pbm5lcldpZHRoLFxuICAgICAgICAgICAgICBoID0gX3dpbi5pbm5lckhlaWdodDtcblxuICAgICAgICAgIGlmIChfZG9jLmhpZGRlbikge1xuICAgICAgICAgICAgX3ByZXZXaWR0aCA9IHc7XG4gICAgICAgICAgICBfcHJldkhlaWdodCA9IGg7XG4gICAgICAgICAgfSBlbHNlIGlmIChfcHJldldpZHRoICE9PSB3IHx8IF9wcmV2SGVpZ2h0ICE9PSBoKSB7XG4gICAgICAgICAgICBfb25SZXNpemUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9kb2MsIFwiRE9NQ29udGVudExvYWRlZFwiLCBfcmVmcmVzaEFsbCwgX3dpbiwgXCJsb2FkXCIsIF9yZWZyZXNoQWxsLCBfd2luLCBcInJlc2l6ZVwiLCBfb25SZXNpemVdO1xuXG4gICAgICAgIF9pdGVyYXRlQXV0b1JlZnJlc2goX2FkZExpc3RlbmVyKTtcblxuICAgICAgICBfdHJpZ2dlcnMuZm9yRWFjaChmdW5jdGlvbiAodHJpZ2dlcikge1xuICAgICAgICAgIHJldHVybiB0cmlnZ2VyLmVuYWJsZSgwLCAxKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IF9zY3JvbGxlcnMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICAgICAgICBfd2hlZWxMaXN0ZW5lcihfcmVtb3ZlTGlzdGVuZXIsIF9zY3JvbGxlcnNbaV0sIF9zY3JvbGxlcnNbaSArIDFdKTtcblxuICAgICAgICAgIF93aGVlbExpc3RlbmVyKF9yZW1vdmVMaXN0ZW5lciwgX3Njcm9sbGVyc1tpXSwgX3Njcm9sbGVyc1tpICsgMl0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFNjcm9sbFRyaWdnZXIuY29uZmlnID0gZnVuY3Rpb24gY29uZmlnKHZhcnMpIHtcbiAgICBcImxpbWl0Q2FsbGJhY2tzXCIgaW4gdmFycyAmJiAoX2xpbWl0Q2FsbGJhY2tzID0gISF2YXJzLmxpbWl0Q2FsbGJhY2tzKTtcbiAgICB2YXIgbXMgPSB2YXJzLnN5bmNJbnRlcnZhbDtcbiAgICBtcyAmJiBjbGVhckludGVydmFsKF9zeW5jSW50ZXJ2YWwpIHx8IChfc3luY0ludGVydmFsID0gbXMpICYmIHNldEludGVydmFsKF9zeW5jLCBtcyk7XG4gICAgXCJpZ25vcmVNb2JpbGVSZXNpemVcIiBpbiB2YXJzICYmIChfaWdub3JlTW9iaWxlUmVzaXplID0gU2Nyb2xsVHJpZ2dlci5pc1RvdWNoID09PSAxICYmIHZhcnMuaWdub3JlTW9iaWxlUmVzaXplKTtcblxuICAgIGlmIChcImF1dG9SZWZyZXNoRXZlbnRzXCIgaW4gdmFycykge1xuICAgICAgX2l0ZXJhdGVBdXRvUmVmcmVzaChfcmVtb3ZlTGlzdGVuZXIpIHx8IF9pdGVyYXRlQXV0b1JlZnJlc2goX2FkZExpc3RlbmVyLCB2YXJzLmF1dG9SZWZyZXNoRXZlbnRzIHx8IFwibm9uZVwiKTtcbiAgICAgIF9pZ25vcmVSZXNpemUgPSAodmFycy5hdXRvUmVmcmVzaEV2ZW50cyArIFwiXCIpLmluZGV4T2YoXCJyZXNpemVcIikgPT09IC0xO1xuICAgIH1cbiAgfTtcblxuICBTY3JvbGxUcmlnZ2VyLnNjcm9sbGVyUHJveHkgPSBmdW5jdGlvbiBzY3JvbGxlclByb3h5KHRhcmdldCwgdmFycykge1xuICAgIHZhciB0ID0gX2dldFRhcmdldCh0YXJnZXQpLFxuICAgICAgICBpID0gX3Njcm9sbGVycy5pbmRleE9mKHQpLFxuICAgICAgICBpc1ZpZXdwb3J0ID0gX2lzVmlld3BvcnQodCk7XG5cbiAgICBpZiAofmkpIHtcbiAgICAgIF9zY3JvbGxlcnMuc3BsaWNlKGksIGlzVmlld3BvcnQgPyA2IDogMik7XG4gICAgfVxuXG4gICAgaWYgKHZhcnMpIHtcbiAgICAgIGlzVmlld3BvcnQgPyBfcHJveGllcy51bnNoaWZ0KF93aW4sIHZhcnMsIF9ib2R5LCB2YXJzLCBfZG9jRWwsIHZhcnMpIDogX3Byb3hpZXMudW5zaGlmdCh0LCB2YXJzKTtcbiAgICB9XG4gIH07XG5cbiAgU2Nyb2xsVHJpZ2dlci5jbGVhck1hdGNoTWVkaWEgPSBmdW5jdGlvbiBjbGVhck1hdGNoTWVkaWEocXVlcnkpIHtcbiAgICBfdHJpZ2dlcnMuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQuX2N0eCAmJiB0Ll9jdHgucXVlcnkgPT09IHF1ZXJ5ICYmIHQuX2N0eC5raWxsKHRydWUsIHRydWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIFNjcm9sbFRyaWdnZXIuaXNJblZpZXdwb3J0ID0gZnVuY3Rpb24gaXNJblZpZXdwb3J0KGVsZW1lbnQsIHJhdGlvLCBob3Jpem9udGFsKSB7XG4gICAgdmFyIGJvdW5kcyA9IChfaXNTdHJpbmcoZWxlbWVudCkgPyBfZ2V0VGFyZ2V0KGVsZW1lbnQpIDogZWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIG9mZnNldCA9IGJvdW5kc1tob3Jpem9udGFsID8gX3dpZHRoIDogX2hlaWdodF0gKiByYXRpbyB8fCAwO1xuICAgIHJldHVybiBob3Jpem9udGFsID8gYm91bmRzLnJpZ2h0IC0gb2Zmc2V0ID4gMCAmJiBib3VuZHMubGVmdCArIG9mZnNldCA8IF93aW4uaW5uZXJXaWR0aCA6IGJvdW5kcy5ib3R0b20gLSBvZmZzZXQgPiAwICYmIGJvdW5kcy50b3AgKyBvZmZzZXQgPCBfd2luLmlubmVySGVpZ2h0O1xuICB9O1xuXG4gIFNjcm9sbFRyaWdnZXIucG9zaXRpb25JblZpZXdwb3J0ID0gZnVuY3Rpb24gcG9zaXRpb25JblZpZXdwb3J0KGVsZW1lbnQsIHJlZmVyZW5jZVBvaW50LCBob3Jpem9udGFsKSB7XG4gICAgX2lzU3RyaW5nKGVsZW1lbnQpICYmIChlbGVtZW50ID0gX2dldFRhcmdldChlbGVtZW50KSk7XG4gICAgdmFyIGJvdW5kcyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHNpemUgPSBib3VuZHNbaG9yaXpvbnRhbCA/IF93aWR0aCA6IF9oZWlnaHRdLFxuICAgICAgICBvZmZzZXQgPSByZWZlcmVuY2VQb2ludCA9PSBudWxsID8gc2l6ZSAvIDIgOiByZWZlcmVuY2VQb2ludCBpbiBfa2V5d29yZHMgPyBfa2V5d29yZHNbcmVmZXJlbmNlUG9pbnRdICogc2l6ZSA6IH5yZWZlcmVuY2VQb2ludC5pbmRleE9mKFwiJVwiKSA/IHBhcnNlRmxvYXQocmVmZXJlbmNlUG9pbnQpICogc2l6ZSAvIDEwMCA6IHBhcnNlRmxvYXQocmVmZXJlbmNlUG9pbnQpIHx8IDA7XG4gICAgcmV0dXJuIGhvcml6b250YWwgPyAoYm91bmRzLmxlZnQgKyBvZmZzZXQpIC8gX3dpbi5pbm5lcldpZHRoIDogKGJvdW5kcy50b3AgKyBvZmZzZXQpIC8gX3dpbi5pbm5lckhlaWdodDtcbiAgfTtcblxuICBTY3JvbGxUcmlnZ2VyLmtpbGxBbGwgPSBmdW5jdGlvbiBraWxsQWxsKGFsbG93TGlzdGVuZXJzKSB7XG4gICAgX3RyaWdnZXJzLnNsaWNlKDApLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB0LnZhcnMuaWQgIT09IFwiU2Nyb2xsU21vb3RoZXJcIiAmJiB0LmtpbGwoKTtcbiAgICB9KTtcblxuICAgIGlmIChhbGxvd0xpc3RlbmVycyAhPT0gdHJ1ZSkge1xuICAgICAgdmFyIGxpc3RlbmVycyA9IF9saXN0ZW5lcnMua2lsbEFsbCB8fCBbXTtcbiAgICAgIF9saXN0ZW5lcnMgPSB7fTtcbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7XG4gICAgICAgIHJldHVybiBmKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFNjcm9sbFRyaWdnZXI7XG59KCk7XG5TY3JvbGxUcmlnZ2VyLnZlcnNpb24gPSBcIjMuMTIuMlwiO1xuXG5TY3JvbGxUcmlnZ2VyLnNhdmVTdHlsZXMgPSBmdW5jdGlvbiAodGFyZ2V0cykge1xuICByZXR1cm4gdGFyZ2V0cyA/IF90b0FycmF5KHRhcmdldHMpLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIC8vIHNhdmVkIHN0eWxlcyBhcmUgcmVjb3JkZWQgaW4gYSBjb25zZWN1dGl2ZSBhbHRlcm5hdGluZyBBcnJheSwgbGlrZSBbZWxlbWVudCwgY3NzVGV4dCwgdHJhbnNmb3JtIGF0dHJpYnV0ZSwgY2FjaGUsIG1hdGNoTWVkaWEsIC4uLl1cbiAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5zdHlsZSkge1xuICAgICAgdmFyIGkgPSBfc2F2ZWRTdHlsZXMuaW5kZXhPZih0YXJnZXQpO1xuXG4gICAgICBpID49IDAgJiYgX3NhdmVkU3R5bGVzLnNwbGljZShpLCA1KTtcblxuICAgICAgX3NhdmVkU3R5bGVzLnB1c2godGFyZ2V0LCB0YXJnZXQuc3R5bGUuY3NzVGV4dCwgdGFyZ2V0LmdldEJCb3ggJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKSwgZ3NhcC5jb3JlLmdldENhY2hlKHRhcmdldCksIF9jb250ZXh0KCkpO1xuICAgIH1cbiAgfSkgOiBfc2F2ZWRTdHlsZXM7XG59O1xuXG5TY3JvbGxUcmlnZ2VyLnJldmVydCA9IGZ1bmN0aW9uIChzb2Z0LCBtZWRpYSkge1xuICByZXR1cm4gX3JldmVydEFsbCghc29mdCwgbWVkaWEpO1xufTtcblxuU2Nyb2xsVHJpZ2dlci5jcmVhdGUgPSBmdW5jdGlvbiAodmFycywgYW5pbWF0aW9uKSB7XG4gIHJldHVybiBuZXcgU2Nyb2xsVHJpZ2dlcih2YXJzLCBhbmltYXRpb24pO1xufTtcblxuU2Nyb2xsVHJpZ2dlci5yZWZyZXNoID0gZnVuY3Rpb24gKHNhZmUpIHtcbiAgcmV0dXJuIHNhZmUgPyBfb25SZXNpemUoKSA6IChfY29yZUluaXR0ZWQgfHwgU2Nyb2xsVHJpZ2dlci5yZWdpc3RlcigpKSAmJiBfcmVmcmVzaEFsbCh0cnVlKTtcbn07XG5cblNjcm9sbFRyaWdnZXIudXBkYXRlID0gZnVuY3Rpb24gKGZvcmNlKSB7XG4gIHJldHVybiArK19zY3JvbGxlcnMuY2FjaGUgJiYgX3VwZGF0ZUFsbChmb3JjZSA9PT0gdHJ1ZSA/IDIgOiAwKTtcbn07XG5cblNjcm9sbFRyaWdnZXIuY2xlYXJTY3JvbGxNZW1vcnkgPSBfY2xlYXJTY3JvbGxNZW1vcnk7XG5cblNjcm9sbFRyaWdnZXIubWF4U2Nyb2xsID0gZnVuY3Rpb24gKGVsZW1lbnQsIGhvcml6b250YWwpIHtcbiAgcmV0dXJuIF9tYXhTY3JvbGwoZWxlbWVudCwgaG9yaXpvbnRhbCA/IF9ob3Jpem9udGFsIDogX3ZlcnRpY2FsKTtcbn07XG5cblNjcm9sbFRyaWdnZXIuZ2V0U2Nyb2xsRnVuYyA9IGZ1bmN0aW9uIChlbGVtZW50LCBob3Jpem9udGFsKSB7XG4gIHJldHVybiBfZ2V0U2Nyb2xsRnVuYyhfZ2V0VGFyZ2V0KGVsZW1lbnQpLCBob3Jpem9udGFsID8gX2hvcml6b250YWwgOiBfdmVydGljYWwpO1xufTtcblxuU2Nyb2xsVHJpZ2dlci5nZXRCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gIHJldHVybiBfaWRzW2lkXTtcbn07XG5cblNjcm9sbFRyaWdnZXIuZ2V0QWxsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX3RyaWdnZXJzLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiB0LnZhcnMuaWQgIT09IFwiU2Nyb2xsU21vb3RoZXJcIjtcbiAgfSk7XG59OyAvLyBpdCdzIGNvbW1vbiBmb3IgcGVvcGxlIHRvIFNjcm9sbFRyaWdnZXIuZ2V0QWxsKHQgPT4gdC5raWxsKCkpIG9uIHBhZ2Ugcm91dGVzLCBmb3IgZXhhbXBsZSwgYW5kIHdlIGRvbid0IHdhbnQgaXQgdG8gcnVpbiBzbW9vdGggc2Nyb2xsaW5nIGJ5IGtpbGxpbmcgdGhlIG1haW4gU2Nyb2xsU21vb3RoZXIgb25lLlxuXG5cblNjcm9sbFRyaWdnZXIuaXNTY3JvbGxpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAhIV9sYXN0U2Nyb2xsVGltZTtcbn07XG5cblNjcm9sbFRyaWdnZXIuc25hcERpcmVjdGlvbmFsID0gX3NuYXBEaXJlY3Rpb25hbDtcblxuU2Nyb2xsVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGNhbGxiYWNrKSB7XG4gIHZhciBhID0gX2xpc3RlbmVyc1t0eXBlXSB8fCAoX2xpc3RlbmVyc1t0eXBlXSA9IFtdKTtcbiAgfmEuaW5kZXhPZihjYWxsYmFjaykgfHwgYS5wdXNoKGNhbGxiYWNrKTtcbn07XG5cblNjcm9sbFRyaWdnZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBjYWxsYmFjaykge1xuICB2YXIgYSA9IF9saXN0ZW5lcnNbdHlwZV0sXG4gICAgICBpID0gYSAmJiBhLmluZGV4T2YoY2FsbGJhY2spO1xuICBpID49IDAgJiYgYS5zcGxpY2UoaSwgMSk7XG59O1xuXG5TY3JvbGxUcmlnZ2VyLmJhdGNoID0gZnVuY3Rpb24gKHRhcmdldHMsIHZhcnMpIHtcbiAgdmFyIHJlc3VsdCA9IFtdLFxuICAgICAgdmFyc0NvcHkgPSB7fSxcbiAgICAgIGludGVydmFsID0gdmFycy5pbnRlcnZhbCB8fCAwLjAxNixcbiAgICAgIGJhdGNoTWF4ID0gdmFycy5iYXRjaE1heCB8fCAxZTksXG4gICAgICBwcm94eUNhbGxiYWNrID0gZnVuY3Rpb24gcHJveHlDYWxsYmFjayh0eXBlLCBjYWxsYmFjaykge1xuICAgIHZhciBlbGVtZW50cyA9IFtdLFxuICAgICAgICB0cmlnZ2VycyA9IFtdLFxuICAgICAgICBkZWxheSA9IGdzYXAuZGVsYXllZENhbGwoaW50ZXJ2YWwsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnRzLCB0cmlnZ2Vycyk7XG4gICAgICBlbGVtZW50cyA9IFtdO1xuICAgICAgdHJpZ2dlcnMgPSBbXTtcbiAgICB9KS5wYXVzZSgpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoc2VsZikge1xuICAgICAgZWxlbWVudHMubGVuZ3RoIHx8IGRlbGF5LnJlc3RhcnQodHJ1ZSk7XG4gICAgICBlbGVtZW50cy5wdXNoKHNlbGYudHJpZ2dlcik7XG4gICAgICB0cmlnZ2Vycy5wdXNoKHNlbGYpO1xuICAgICAgYmF0Y2hNYXggPD0gZWxlbWVudHMubGVuZ3RoICYmIGRlbGF5LnByb2dyZXNzKDEpO1xuICAgIH07XG4gIH0sXG4gICAgICBwO1xuXG4gIGZvciAocCBpbiB2YXJzKSB7XG4gICAgdmFyc0NvcHlbcF0gPSBwLnN1YnN0cigwLCAyKSA9PT0gXCJvblwiICYmIF9pc0Z1bmN0aW9uKHZhcnNbcF0pICYmIHAgIT09IFwib25SZWZyZXNoSW5pdFwiID8gcHJveHlDYWxsYmFjayhwLCB2YXJzW3BdKSA6IHZhcnNbcF07XG4gIH1cblxuICBpZiAoX2lzRnVuY3Rpb24oYmF0Y2hNYXgpKSB7XG4gICAgYmF0Y2hNYXggPSBiYXRjaE1heCgpO1xuXG4gICAgX2FkZExpc3RlbmVyKFNjcm9sbFRyaWdnZXIsIFwicmVmcmVzaFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYmF0Y2hNYXggPSB2YXJzLmJhdGNoTWF4KCk7XG4gICAgfSk7XG4gIH1cblxuICBfdG9BcnJheSh0YXJnZXRzKS5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICB2YXIgY29uZmlnID0ge307XG5cbiAgICBmb3IgKHAgaW4gdmFyc0NvcHkpIHtcbiAgICAgIGNvbmZpZ1twXSA9IHZhcnNDb3B5W3BdO1xuICAgIH1cblxuICAgIGNvbmZpZy50cmlnZ2VyID0gdGFyZ2V0O1xuICAgIHJlc3VsdC5wdXNoKFNjcm9sbFRyaWdnZXIuY3JlYXRlKGNvbmZpZykpO1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufTsgLy8gdG8gcmVkdWNlIGZpbGUgc2l6ZS4gY2xhbXBzIHRoZSBzY3JvbGwgYW5kIGFsc28gcmV0dXJucyBhIGR1cmF0aW9uIG11bHRpcGxpZXIgc28gdGhhdCBpZiB0aGUgc2Nyb2xsIGdldHMgY2hvcHBlZCBzaG9ydGVyLCB0aGUgZHVyYXRpb24gZ2V0cyBjdXJ0YWlsZWQgYXMgd2VsbCAob3RoZXJ3aXNlIGlmIHlvdSdyZSB2ZXJ5IGNsb3NlIHRvIHRoZSB0b3Agb2YgdGhlIHBhZ2UsIGZvciBleGFtcGxlLCBhbmQgc3dpcGUgdXAgcmVhbGx5IGZhc3QsIGl0J2xsIHN1ZGRlbmx5IHNsb3cgZG93biBhbmQgdGFrZSBhIGxvbmcgdGltZSB0byByZWFjaCB0aGUgdG9wKS5cblxuXG52YXIgX2NsYW1wU2Nyb2xsQW5kR2V0RHVyYXRpb25NdWx0aXBsaWVyID0gZnVuY3Rpb24gX2NsYW1wU2Nyb2xsQW5kR2V0RHVyYXRpb25NdWx0aXBsaWVyKHNjcm9sbEZ1bmMsIGN1cnJlbnQsIGVuZCwgbWF4KSB7XG4gIGN1cnJlbnQgPiBtYXggPyBzY3JvbGxGdW5jKG1heCkgOiBjdXJyZW50IDwgMCAmJiBzY3JvbGxGdW5jKDApO1xuICByZXR1cm4gZW5kID4gbWF4ID8gKG1heCAtIGN1cnJlbnQpIC8gKGVuZCAtIGN1cnJlbnQpIDogZW5kIDwgMCA/IGN1cnJlbnQgLyAoY3VycmVudCAtIGVuZCkgOiAxO1xufSxcbiAgICBfYWxsb3dOYXRpdmVQYW5uaW5nID0gZnVuY3Rpb24gX2FsbG93TmF0aXZlUGFubmluZyh0YXJnZXQsIGRpcmVjdGlvbikge1xuICBpZiAoZGlyZWN0aW9uID09PSB0cnVlKSB7XG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidG91Y2gtYWN0aW9uXCIpO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldC5zdHlsZS50b3VjaEFjdGlvbiA9IGRpcmVjdGlvbiA9PT0gdHJ1ZSA/IFwiYXV0b1wiIDogZGlyZWN0aW9uID8gXCJwYW4tXCIgKyBkaXJlY3Rpb24gKyAoT2JzZXJ2ZXIuaXNUb3VjaCA/IFwiIHBpbmNoLXpvb21cIiA6IFwiXCIpIDogXCJub25lXCI7IC8vIG5vdGU6IEZpcmVmb3ggZG9lc24ndCBzdXBwb3J0IGl0IHBpbmNoLXpvb20gcHJvcGVybHksIGF0IGxlYXN0IGluIGFkZGl0aW9uIHRvIGEgcGFuLXggb3IgcGFuLXkuXG4gIH1cblxuICB0YXJnZXQgPT09IF9kb2NFbCAmJiBfYWxsb3dOYXRpdmVQYW5uaW5nKF9ib2R5LCBkaXJlY3Rpb24pO1xufSxcbiAgICBfb3ZlcmZsb3cgPSB7XG4gIGF1dG86IDEsXG4gIHNjcm9sbDogMVxufSxcbiAgICBfbmVzdGVkU2Nyb2xsID0gZnVuY3Rpb24gX25lc3RlZFNjcm9sbChfcmVmNSkge1xuICB2YXIgZXZlbnQgPSBfcmVmNS5ldmVudCxcbiAgICAgIHRhcmdldCA9IF9yZWY1LnRhcmdldCxcbiAgICAgIGF4aXMgPSBfcmVmNS5heGlzO1xuXG4gIHZhciBub2RlID0gKGV2ZW50LmNoYW5nZWRUb3VjaGVzID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gOiBldmVudCkudGFyZ2V0LFxuICAgICAgY2FjaGUgPSBub2RlLl9nc2FwIHx8IGdzYXAuY29yZS5nZXRDYWNoZShub2RlKSxcbiAgICAgIHRpbWUgPSBfZ2V0VGltZSgpLFxuICAgICAgY3M7XG5cbiAgaWYgKCFjYWNoZS5faXNTY3JvbGxUIHx8IHRpbWUgLSBjYWNoZS5faXNTY3JvbGxUID4gMjAwMCkge1xuICAgIC8vIGNhY2hlIGZvciAyIHNlY29uZHMgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5cbiAgICB3aGlsZSAobm9kZSAmJiBub2RlICE9PSBfYm9keSAmJiAobm9kZS5zY3JvbGxIZWlnaHQgPD0gbm9kZS5jbGllbnRIZWlnaHQgJiYgbm9kZS5zY3JvbGxXaWR0aCA8PSBub2RlLmNsaWVudFdpZHRoIHx8ICEoX292ZXJmbG93WyhjcyA9IF9nZXRDb21wdXRlZFN0eWxlKG5vZGUpKS5vdmVyZmxvd1ldIHx8IF9vdmVyZmxvd1tjcy5vdmVyZmxvd1hdKSkpIHtcbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgY2FjaGUuX2lzU2Nyb2xsID0gbm9kZSAmJiBub2RlICE9PSB0YXJnZXQgJiYgIV9pc1ZpZXdwb3J0KG5vZGUpICYmIChfb3ZlcmZsb3dbKGNzID0gX2dldENvbXB1dGVkU3R5bGUobm9kZSkpLm92ZXJmbG93WV0gfHwgX292ZXJmbG93W2NzLm92ZXJmbG93WF0pO1xuICAgIGNhY2hlLl9pc1Njcm9sbFQgPSB0aW1lO1xuICB9XG5cbiAgaWYgKGNhY2hlLl9pc1Njcm9sbCB8fCBheGlzID09PSBcInhcIikge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50Ll9nc2FwQWxsb3cgPSB0cnVlO1xuICB9XG59LFxuICAgIC8vIGNhcHR1cmUgZXZlbnRzIG9uIHNjcm9sbGFibGUgZWxlbWVudHMgSU5TSURFIHRoZSA8Ym9keT4gYW5kIGFsbG93IHRob3NlIGJ5IGNhbGxpbmcgc3RvcFByb3BhZ2F0aW9uKCkgd2hlbiB3ZSBmaW5kIGEgc2Nyb2xsYWJsZSBhbmNlc3RvclxuX2lucHV0T2JzZXJ2ZXIgPSBmdW5jdGlvbiBfaW5wdXRPYnNlcnZlcih0YXJnZXQsIHR5cGUsIGlucHV0cywgbmVzdGVkKSB7XG4gIHJldHVybiBPYnNlcnZlci5jcmVhdGUoe1xuICAgIHRhcmdldDogdGFyZ2V0LFxuICAgIGNhcHR1cmU6IHRydWUsXG4gICAgZGVib3VuY2U6IGZhbHNlLFxuICAgIGxvY2tBeGlzOiB0cnVlLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgb25XaGVlbDogbmVzdGVkID0gbmVzdGVkICYmIF9uZXN0ZWRTY3JvbGwsXG4gICAgb25QcmVzczogbmVzdGVkLFxuICAgIG9uRHJhZzogbmVzdGVkLFxuICAgIG9uU2Nyb2xsOiBuZXN0ZWQsXG4gICAgb25FbmFibGU6IGZ1bmN0aW9uIG9uRW5hYmxlKCkge1xuICAgICAgcmV0dXJuIGlucHV0cyAmJiBfYWRkTGlzdGVuZXIoX2RvYywgT2JzZXJ2ZXIuZXZlbnRUeXBlc1swXSwgX2NhcHR1cmVJbnB1dHMsIGZhbHNlLCB0cnVlKTtcbiAgICB9LFxuICAgIG9uRGlzYWJsZTogZnVuY3Rpb24gb25EaXNhYmxlKCkge1xuICAgICAgcmV0dXJuIF9yZW1vdmVMaXN0ZW5lcihfZG9jLCBPYnNlcnZlci5ldmVudFR5cGVzWzBdLCBfY2FwdHVyZUlucHV0cywgdHJ1ZSk7XG4gICAgfVxuICB9KTtcbn0sXG4gICAgX2lucHV0RXhwID0gLyhpbnB1dHxsYWJlbHxzZWxlY3R8dGV4dGFyZWEpL2ksXG4gICAgX2lucHV0SXNGb2N1c2VkLFxuICAgIF9jYXB0dXJlSW5wdXRzID0gZnVuY3Rpb24gX2NhcHR1cmVJbnB1dHMoZSkge1xuICB2YXIgaXNJbnB1dCA9IF9pbnB1dEV4cC50ZXN0KGUudGFyZ2V0LnRhZ05hbWUpO1xuXG4gIGlmIChpc0lucHV0IHx8IF9pbnB1dElzRm9jdXNlZCkge1xuICAgIGUuX2dzYXBBbGxvdyA9IHRydWU7XG4gICAgX2lucHV0SXNGb2N1c2VkID0gaXNJbnB1dDtcbiAgfVxufSxcbiAgICBfZ2V0U2Nyb2xsTm9ybWFsaXplciA9IGZ1bmN0aW9uIF9nZXRTY3JvbGxOb3JtYWxpemVyKHZhcnMpIHtcbiAgX2lzT2JqZWN0KHZhcnMpIHx8ICh2YXJzID0ge30pO1xuICB2YXJzLnByZXZlbnREZWZhdWx0ID0gdmFycy5pc05vcm1hbGl6ZXIgPSB2YXJzLmFsbG93Q2xpY2tzID0gdHJ1ZTtcbiAgdmFycy50eXBlIHx8ICh2YXJzLnR5cGUgPSBcIndoZWVsLHRvdWNoXCIpO1xuICB2YXJzLmRlYm91bmNlID0gISF2YXJzLmRlYm91bmNlO1xuICB2YXJzLmlkID0gdmFycy5pZCB8fCBcIm5vcm1hbGl6ZXJcIjtcblxuICB2YXIgX3ZhcnMyID0gdmFycyxcbiAgICAgIG5vcm1hbGl6ZVNjcm9sbFggPSBfdmFyczIubm9ybWFsaXplU2Nyb2xsWCxcbiAgICAgIG1vbWVudHVtID0gX3ZhcnMyLm1vbWVudHVtLFxuICAgICAgYWxsb3dOZXN0ZWRTY3JvbGwgPSBfdmFyczIuYWxsb3dOZXN0ZWRTY3JvbGwsXG4gICAgICBvblJlbGVhc2UgPSBfdmFyczIub25SZWxlYXNlLFxuICAgICAgc2VsZixcbiAgICAgIG1heFksXG4gICAgICB0YXJnZXQgPSBfZ2V0VGFyZ2V0KHZhcnMudGFyZ2V0KSB8fCBfZG9jRWwsXG4gICAgICBzbW9vdGhlciA9IGdzYXAuY29yZS5nbG9iYWxzKCkuU2Nyb2xsU21vb3RoZXIsXG4gICAgICBzbW9vdGhlckluc3RhbmNlID0gc21vb3RoZXIgJiYgc21vb3RoZXIuZ2V0KCksXG4gICAgICBjb250ZW50ID0gX2ZpeElPU0J1ZyAmJiAodmFycy5jb250ZW50ICYmIF9nZXRUYXJnZXQodmFycy5jb250ZW50KSB8fCBzbW9vdGhlckluc3RhbmNlICYmIHZhcnMuY29udGVudCAhPT0gZmFsc2UgJiYgIXNtb290aGVySW5zdGFuY2Uuc21vb3RoKCkgJiYgc21vb3RoZXJJbnN0YW5jZS5jb250ZW50KCkpLFxuICAgICAgc2Nyb2xsRnVuY1kgPSBfZ2V0U2Nyb2xsRnVuYyh0YXJnZXQsIF92ZXJ0aWNhbCksXG4gICAgICBzY3JvbGxGdW5jWCA9IF9nZXRTY3JvbGxGdW5jKHRhcmdldCwgX2hvcml6b250YWwpLFxuICAgICAgc2NhbGUgPSAxLFxuICAgICAgaW5pdGlhbFNjYWxlID0gKE9ic2VydmVyLmlzVG91Y2ggJiYgX3dpbi52aXN1YWxWaWV3cG9ydCA/IF93aW4udmlzdWFsVmlld3BvcnQuc2NhbGUgKiBfd2luLnZpc3VhbFZpZXdwb3J0LndpZHRoIDogX3dpbi5vdXRlcldpZHRoKSAvIF93aW4uaW5uZXJXaWR0aCxcbiAgICAgIHdoZWVsUmVmcmVzaCA9IDAsXG4gICAgICByZXNvbHZlTW9tZW50dW1EdXJhdGlvbiA9IF9pc0Z1bmN0aW9uKG1vbWVudHVtKSA/IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbW9tZW50dW0oc2VsZik7XG4gIH0gOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG1vbWVudHVtIHx8IDIuODtcbiAgfSxcbiAgICAgIGxhc3RSZWZyZXNoSUQsXG4gICAgICBza2lwVG91Y2hNb3ZlLFxuICAgICAgaW5wdXRPYnNlcnZlciA9IF9pbnB1dE9ic2VydmVyKHRhcmdldCwgdmFycy50eXBlLCB0cnVlLCBhbGxvd05lc3RlZFNjcm9sbCksXG4gICAgICByZXN1bWVUb3VjaE1vdmUgPSBmdW5jdGlvbiByZXN1bWVUb3VjaE1vdmUoKSB7XG4gICAgcmV0dXJuIHNraXBUb3VjaE1vdmUgPSBmYWxzZTtcbiAgfSxcbiAgICAgIHNjcm9sbENsYW1wWCA9IF9wYXNzVGhyb3VnaCxcbiAgICAgIHNjcm9sbENsYW1wWSA9IF9wYXNzVGhyb3VnaCxcbiAgICAgIHVwZGF0ZUNsYW1wcyA9IGZ1bmN0aW9uIHVwZGF0ZUNsYW1wcygpIHtcbiAgICBtYXhZID0gX21heFNjcm9sbCh0YXJnZXQsIF92ZXJ0aWNhbCk7XG4gICAgc2Nyb2xsQ2xhbXBZID0gX2NsYW1wKF9maXhJT1NCdWcgPyAxIDogMCwgbWF4WSk7XG4gICAgbm9ybWFsaXplU2Nyb2xsWCAmJiAoc2Nyb2xsQ2xhbXBYID0gX2NsYW1wKDAsIF9tYXhTY3JvbGwodGFyZ2V0LCBfaG9yaXpvbnRhbCkpKTtcbiAgICBsYXN0UmVmcmVzaElEID0gX3JlZnJlc2hJRDtcbiAgfSxcbiAgICAgIHJlbW92ZUNvbnRlbnRPZmZzZXQgPSBmdW5jdGlvbiByZW1vdmVDb250ZW50T2Zmc2V0KCkge1xuICAgIGNvbnRlbnQuX2dzYXAueSA9IF9yb3VuZChwYXJzZUZsb2F0KGNvbnRlbnQuX2dzYXAueSkgKyBzY3JvbGxGdW5jWS5vZmZzZXQpICsgXCJweFwiO1xuICAgIGNvbnRlbnQuc3R5bGUudHJhbnNmb3JtID0gXCJtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCBcIiArIHBhcnNlRmxvYXQoY29udGVudC5fZ3NhcC55KSArIFwiLCAwLCAxKVwiO1xuICAgIHNjcm9sbEZ1bmNZLm9mZnNldCA9IHNjcm9sbEZ1bmNZLmNhY2hlSUQgPSAwO1xuICB9LFxuICAgICAgaWdub3JlRHJhZyA9IGZ1bmN0aW9uIGlnbm9yZURyYWcoKSB7XG4gICAgaWYgKHNraXBUb3VjaE1vdmUpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZXN1bWVUb3VjaE1vdmUpO1xuXG4gICAgICB2YXIgb2Zmc2V0ID0gX3JvdW5kKHNlbGYuZGVsdGFZIC8gMiksXG4gICAgICAgICAgc2Nyb2xsID0gc2Nyb2xsQ2xhbXBZKHNjcm9sbEZ1bmNZLnYgLSBvZmZzZXQpO1xuXG4gICAgICBpZiAoY29udGVudCAmJiBzY3JvbGwgIT09IHNjcm9sbEZ1bmNZLnYgKyBzY3JvbGxGdW5jWS5vZmZzZXQpIHtcbiAgICAgICAgc2Nyb2xsRnVuY1kub2Zmc2V0ID0gc2Nyb2xsIC0gc2Nyb2xsRnVuY1kudjtcblxuICAgICAgICB2YXIgeSA9IF9yb3VuZCgocGFyc2VGbG9hdChjb250ZW50ICYmIGNvbnRlbnQuX2dzYXAueSkgfHwgMCkgLSBzY3JvbGxGdW5jWS5vZmZzZXQpO1xuXG4gICAgICAgIGNvbnRlbnQuc3R5bGUudHJhbnNmb3JtID0gXCJtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCBcIiArIHkgKyBcIiwgMCwgMSlcIjtcbiAgICAgICAgY29udGVudC5fZ3NhcC55ID0geSArIFwicHhcIjtcbiAgICAgICAgc2Nyb2xsRnVuY1kuY2FjaGVJRCA9IF9zY3JvbGxlcnMuY2FjaGU7XG5cbiAgICAgICAgX3VwZGF0ZUFsbCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBzY3JvbGxGdW5jWS5vZmZzZXQgJiYgcmVtb3ZlQ29udGVudE9mZnNldCgpO1xuICAgIHNraXBUb3VjaE1vdmUgPSB0cnVlO1xuICB9LFxuICAgICAgdHdlZW4sXG4gICAgICBzdGFydFNjcm9sbFgsXG4gICAgICBzdGFydFNjcm9sbFksXG4gICAgICBvblN0b3BEZWxheWVkQ2FsbCxcbiAgICAgIG9uUmVzaXplID0gZnVuY3Rpb24gb25SZXNpemUoKSB7XG4gICAgLy8gaWYgdGhlIHdpbmRvdyByZXNpemVzLCBsaWtlIG9uIGFuIGlQaG9uZSB3aGljaCBBcHBsZSBGT1JDRVMgdGhlIGFkZHJlc3MgYmFyIHRvIHNob3cvaGlkZSBldmVuIGlmIHdlIGV2ZW50LnByZXZlbnREZWZhdWx0KCksIGl0IG1heSBiZSBzY3JvbGxpbmcgdG9vIGZhciBub3cgdGhhdCB0aGUgYWRkcmVzcyBiYXIgaXMgc2hvd2luZywgc28gd2UgbXVzdCBkeW5hbWljYWxseSBhZGp1c3QgdGhlIG1vbWVudHVtIHR3ZWVuLlxuICAgIHVwZGF0ZUNsYW1wcygpO1xuXG4gICAgaWYgKHR3ZWVuLmlzQWN0aXZlKCkgJiYgdHdlZW4udmFycy5zY3JvbGxZID4gbWF4WSkge1xuICAgICAgc2Nyb2xsRnVuY1koKSA+IG1heFkgPyB0d2Vlbi5wcm9ncmVzcygxKSAmJiBzY3JvbGxGdW5jWShtYXhZKSA6IHR3ZWVuLnJlc2V0VG8oXCJzY3JvbGxZXCIsIG1heFkpO1xuICAgIH1cbiAgfTtcblxuICBjb250ZW50ICYmIGdzYXAuc2V0KGNvbnRlbnQsIHtcbiAgICB5OiBcIis9MFwiXG4gIH0pOyAvLyB0byBlbnN1cmUgdGhlcmUncyBhIGNhY2hlIChlbGVtZW50Ll9nc2FwKVxuXG4gIHZhcnMuaWdub3JlQ2hlY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiBfZml4SU9TQnVnICYmIGUudHlwZSA9PT0gXCJ0b3VjaG1vdmVcIiAmJiBpZ25vcmVEcmFnKGUpIHx8IHNjYWxlID4gMS4wNSAmJiBlLnR5cGUgIT09IFwidG91Y2hzdGFydFwiIHx8IHNlbGYuaXNHZXN0dXJpbmcgfHwgZS50b3VjaGVzICYmIGUudG91Y2hlcy5sZW5ndGggPiAxO1xuICB9O1xuXG4gIHZhcnMub25QcmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBza2lwVG91Y2hNb3ZlID0gZmFsc2U7XG4gICAgdmFyIHByZXZTY2FsZSA9IHNjYWxlO1xuICAgIHNjYWxlID0gX3JvdW5kKChfd2luLnZpc3VhbFZpZXdwb3J0ICYmIF93aW4udmlzdWFsVmlld3BvcnQuc2NhbGUgfHwgMSkgLyBpbml0aWFsU2NhbGUpO1xuICAgIHR3ZWVuLnBhdXNlKCk7XG4gICAgcHJldlNjYWxlICE9PSBzY2FsZSAmJiBfYWxsb3dOYXRpdmVQYW5uaW5nKHRhcmdldCwgc2NhbGUgPiAxLjAxID8gdHJ1ZSA6IG5vcm1hbGl6ZVNjcm9sbFggPyBmYWxzZSA6IFwieFwiKTtcbiAgICBzdGFydFNjcm9sbFggPSBzY3JvbGxGdW5jWCgpO1xuICAgIHN0YXJ0U2Nyb2xsWSA9IHNjcm9sbEZ1bmNZKCk7XG4gICAgdXBkYXRlQ2xhbXBzKCk7XG4gICAgbGFzdFJlZnJlc2hJRCA9IF9yZWZyZXNoSUQ7XG4gIH07XG5cbiAgdmFycy5vblJlbGVhc2UgPSB2YXJzLm9uR2VzdHVyZVN0YXJ0ID0gZnVuY3Rpb24gKHNlbGYsIHdhc0RyYWdnaW5nKSB7XG4gICAgc2Nyb2xsRnVuY1kub2Zmc2V0ICYmIHJlbW92ZUNvbnRlbnRPZmZzZXQoKTtcblxuICAgIGlmICghd2FzRHJhZ2dpbmcpIHtcbiAgICAgIG9uU3RvcERlbGF5ZWRDYWxsLnJlc3RhcnQodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9zY3JvbGxlcnMuY2FjaGUrKzsgLy8gbWFrZSBzdXJlIHdlJ3JlIHB1bGxpbmcgdGhlIG5vbi1jYWNoZWQgdmFsdWVcbiAgICAgIC8vIGFsdGVybmF0ZSBhbGdvcml0aG06IGR1clggPSBNYXRoLm1pbig2LCBNYXRoLmFicyhzZWxmLnZlbG9jaXR5WCAvIDgwMCkpLFx0ZHVyID0gTWF0aC5tYXgoZHVyWCwgTWF0aC5taW4oNiwgTWF0aC5hYnMoc2VsZi52ZWxvY2l0eVkgLyA4MDApKSk7IGR1ciA9IGR1ciAqICgwLjQgKyAoMSAtIF9wb3dlcjRJbihkdXIgLyA2KSkgKiAwLjYpKSAqIChtb21lbnR1bVNwZWVkIHx8IDEpXG5cbiAgICAgIHZhciBkdXIgPSByZXNvbHZlTW9tZW50dW1EdXJhdGlvbigpLFxuICAgICAgICAgIGN1cnJlbnRTY3JvbGwsXG4gICAgICAgICAgZW5kU2Nyb2xsO1xuXG4gICAgICBpZiAobm9ybWFsaXplU2Nyb2xsWCkge1xuICAgICAgICBjdXJyZW50U2Nyb2xsID0gc2Nyb2xsRnVuY1goKTtcbiAgICAgICAgZW5kU2Nyb2xsID0gY3VycmVudFNjcm9sbCArIGR1ciAqIDAuMDUgKiAtc2VsZi52ZWxvY2l0eVggLyAwLjIyNzsgLy8gdGhlIGNvbnN0YW50IC4yMjcgaXMgZnJvbSBwb3dlcjQoMC4wNSkuIHZlbG9jaXR5IGlzIGludmVydGVkIGJlY2F1c2Ugc2Nyb2xsaW5nIGdvZXMgaW4gdGhlIG9wcG9zaXRlIGRpcmVjdGlvbi5cblxuICAgICAgICBkdXIgKj0gX2NsYW1wU2Nyb2xsQW5kR2V0RHVyYXRpb25NdWx0aXBsaWVyKHNjcm9sbEZ1bmNYLCBjdXJyZW50U2Nyb2xsLCBlbmRTY3JvbGwsIF9tYXhTY3JvbGwodGFyZ2V0LCBfaG9yaXpvbnRhbCkpO1xuICAgICAgICB0d2Vlbi52YXJzLnNjcm9sbFggPSBzY3JvbGxDbGFtcFgoZW5kU2Nyb2xsKTtcbiAgICAgIH1cblxuICAgICAgY3VycmVudFNjcm9sbCA9IHNjcm9sbEZ1bmNZKCk7XG4gICAgICBlbmRTY3JvbGwgPSBjdXJyZW50U2Nyb2xsICsgZHVyICogMC4wNSAqIC1zZWxmLnZlbG9jaXR5WSAvIDAuMjI3OyAvLyB0aGUgY29uc3RhbnQgLjIyNyBpcyBmcm9tIHBvd2VyNCgwLjA1KVxuXG4gICAgICBkdXIgKj0gX2NsYW1wU2Nyb2xsQW5kR2V0RHVyYXRpb25NdWx0aXBsaWVyKHNjcm9sbEZ1bmNZLCBjdXJyZW50U2Nyb2xsLCBlbmRTY3JvbGwsIF9tYXhTY3JvbGwodGFyZ2V0LCBfdmVydGljYWwpKTtcbiAgICAgIHR3ZWVuLnZhcnMuc2Nyb2xsWSA9IHNjcm9sbENsYW1wWShlbmRTY3JvbGwpO1xuICAgICAgdHdlZW4uaW52YWxpZGF0ZSgpLmR1cmF0aW9uKGR1cikucGxheSgwLjAxKTtcblxuICAgICAgaWYgKF9maXhJT1NCdWcgJiYgdHdlZW4udmFycy5zY3JvbGxZID49IG1heFkgfHwgY3VycmVudFNjcm9sbCA+PSBtYXhZIC0gMSkge1xuICAgICAgICAvLyBpT1MgYnVnOiBpdCdsbCBzaG93IHRoZSBhZGRyZXNzIGJhciBidXQgTk9UIGZpcmUgdGhlIHdpbmRvdyBcInJlc2l6ZVwiIGV2ZW50IHVudGlsIHRoZSBhbmltYXRpb24gaXMgZG9uZSBidXQgd2UgbXVzdCBwcm90ZWN0IGFnYWluc3Qgb3ZlcnNob290IHNvIHdlIGxldmVyYWdlIGFuIG9uVXBkYXRlIHRvIGRvIHNvLlxuICAgICAgICBnc2FwLnRvKHt9LCB7XG4gICAgICAgICAgb25VcGRhdGU6IG9uUmVzaXplLFxuICAgICAgICAgIGR1cmF0aW9uOiBkdXJcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb25SZWxlYXNlICYmIG9uUmVsZWFzZShzZWxmKTtcbiAgfTtcblxuICB2YXJzLm9uV2hlZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdHdlZW4uX3RzICYmIHR3ZWVuLnBhdXNlKCk7XG5cbiAgICBpZiAoX2dldFRpbWUoKSAtIHdoZWVsUmVmcmVzaCA+IDEwMDApIHtcbiAgICAgIC8vIGFmdGVyIDEgc2Vjb25kLCByZWZyZXNoIHRoZSBjbGFtcHMgb3RoZXJ3aXNlIHRoYXQnbGwgb25seSBoYXBwZW4gd2hlbiBTY3JvbGxUcmlnZ2VyLnJlZnJlc2goKSBpcyBjYWxsZWQgb3IgZm9yIHRvdWNoLXNjcm9sbGluZy5cbiAgICAgIGxhc3RSZWZyZXNoSUQgPSAwO1xuICAgICAgd2hlZWxSZWZyZXNoID0gX2dldFRpbWUoKTtcbiAgICB9XG4gIH07XG5cbiAgdmFycy5vbkNoYW5nZSA9IGZ1bmN0aW9uIChzZWxmLCBkeCwgZHksIHhBcnJheSwgeUFycmF5KSB7XG4gICAgX3JlZnJlc2hJRCAhPT0gbGFzdFJlZnJlc2hJRCAmJiB1cGRhdGVDbGFtcHMoKTtcbiAgICBkeCAmJiBub3JtYWxpemVTY3JvbGxYICYmIHNjcm9sbEZ1bmNYKHNjcm9sbENsYW1wWCh4QXJyYXlbMl0gPT09IGR4ID8gc3RhcnRTY3JvbGxYICsgKHNlbGYuc3RhcnRYIC0gc2VsZi54KSA6IHNjcm9sbEZ1bmNYKCkgKyBkeCAtIHhBcnJheVsxXSkpOyAvLyBmb3IgbW9yZSBwcmVjaXNpb24sIHdlIHRyYWNrIHBvaW50ZXIvdG91Y2ggbW92ZW1lbnQgZnJvbSB0aGUgc3RhcnQsIG90aGVyd2lzZSBpdCdsbCBkcmlmdC5cblxuICAgIGlmIChkeSkge1xuICAgICAgc2Nyb2xsRnVuY1kub2Zmc2V0ICYmIHJlbW92ZUNvbnRlbnRPZmZzZXQoKTtcbiAgICAgIHZhciBpc1RvdWNoID0geUFycmF5WzJdID09PSBkeSxcbiAgICAgICAgICB5ID0gaXNUb3VjaCA/IHN0YXJ0U2Nyb2xsWSArIHNlbGYuc3RhcnRZIC0gc2VsZi55IDogc2Nyb2xsRnVuY1koKSArIGR5IC0geUFycmF5WzFdLFxuICAgICAgICAgIHlDbGFtcGVkID0gc2Nyb2xsQ2xhbXBZKHkpO1xuICAgICAgaXNUb3VjaCAmJiB5ICE9PSB5Q2xhbXBlZCAmJiAoc3RhcnRTY3JvbGxZICs9IHlDbGFtcGVkIC0geSk7XG4gICAgICBzY3JvbGxGdW5jWSh5Q2xhbXBlZCk7XG4gICAgfVxuXG4gICAgKGR5IHx8IGR4KSAmJiBfdXBkYXRlQWxsKCk7XG4gIH07XG5cbiAgdmFycy5vbkVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBfYWxsb3dOYXRpdmVQYW5uaW5nKHRhcmdldCwgbm9ybWFsaXplU2Nyb2xsWCA/IGZhbHNlIDogXCJ4XCIpO1xuXG4gICAgU2Nyb2xsVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwicmVmcmVzaFwiLCBvblJlc2l6ZSk7XG5cbiAgICBfYWRkTGlzdGVuZXIoX3dpbiwgXCJyZXNpemVcIiwgb25SZXNpemUpO1xuXG4gICAgaWYgKHNjcm9sbEZ1bmNZLnNtb290aCkge1xuICAgICAgc2Nyb2xsRnVuY1kudGFyZ2V0LnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gXCJhdXRvXCI7XG4gICAgICBzY3JvbGxGdW5jWS5zbW9vdGggPSBzY3JvbGxGdW5jWC5zbW9vdGggPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpbnB1dE9ic2VydmVyLmVuYWJsZSgpO1xuICB9O1xuXG4gIHZhcnMub25EaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIF9hbGxvd05hdGl2ZVBhbm5pbmcodGFyZ2V0LCB0cnVlKTtcblxuICAgIF9yZW1vdmVMaXN0ZW5lcihfd2luLCBcInJlc2l6ZVwiLCBvblJlc2l6ZSk7XG5cbiAgICBTY3JvbGxUcmlnZ2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZWZyZXNoXCIsIG9uUmVzaXplKTtcbiAgICBpbnB1dE9ic2VydmVyLmtpbGwoKTtcbiAgfTtcblxuICB2YXJzLmxvY2tBeGlzID0gdmFycy5sb2NrQXhpcyAhPT0gZmFsc2U7XG4gIHNlbGYgPSBuZXcgT2JzZXJ2ZXIodmFycyk7XG4gIHNlbGYuaU9TID0gX2ZpeElPU0J1ZzsgLy8gdXNlZCBpbiB0aGUgT2JzZXJ2ZXIgZ2V0Q2FjaGVkU2Nyb2xsKCkgZnVuY3Rpb24gdG8gd29yayBhcm91bmQgYW4gaU9TIGJ1ZyB0aGF0IHdyZWFrcyBoYXZvYyB3aXRoIFRvdWNoRXZlbnQuY2xpZW50WSBpZiB3ZSBhbGxvdyBzY3JvbGwgdG8gZ28gYWxsIHRoZSB3YXkgYmFjayB0byAwLlxuXG4gIF9maXhJT1NCdWcgJiYgIXNjcm9sbEZ1bmNZKCkgJiYgc2Nyb2xsRnVuY1koMSk7IC8vIGlPUyBidWcgY2F1c2VzIGV2ZW50LmNsaWVudFkgdmFsdWVzIHRvIGZyZWFrIG91dCAod2lsZGx5IGluYWNjdXJhdGUpIGlmIHRoZSBzY3JvbGwgcG9zaXRpb24gaXMgZXhhY3RseSAwLlxuXG4gIF9maXhJT1NCdWcgJiYgZ3NhcC50aWNrZXIuYWRkKF9wYXNzVGhyb3VnaCk7IC8vIHByZXZlbnQgdGhlIHRpY2tlciBmcm9tIHNsZWVwaW5nXG5cbiAgb25TdG9wRGVsYXllZENhbGwgPSBzZWxmLl9kYztcbiAgdHdlZW4gPSBnc2FwLnRvKHNlbGYsIHtcbiAgICBlYXNlOiBcInBvd2VyNFwiLFxuICAgIHBhdXNlZDogdHJ1ZSxcbiAgICBzY3JvbGxYOiBub3JtYWxpemVTY3JvbGxYID8gXCIrPTAuMVwiIDogXCIrPTBcIixcbiAgICBzY3JvbGxZOiBcIis9MC4xXCIsXG4gICAgbW9kaWZpZXJzOiB7XG4gICAgICBzY3JvbGxZOiBfaW50ZXJydXB0aW9uVHJhY2tlcihzY3JvbGxGdW5jWSwgc2Nyb2xsRnVuY1koKSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdHdlZW4ucGF1c2UoKTtcbiAgICAgIH0pXG4gICAgfSxcbiAgICBvblVwZGF0ZTogX3VwZGF0ZUFsbCxcbiAgICBvbkNvbXBsZXRlOiBvblN0b3BEZWxheWVkQ2FsbC52YXJzLm9uQ29tcGxldGVcbiAgfSk7IC8vIHdlIG5lZWQgdGhlIG1vZGlmaWVyIHRvIHNlbnNlIGlmIHRoZSBzY3JvbGwgcG9zaXRpb24gaXMgYWx0ZXJlZCBvdXRzaWRlIG9mIHRoZSBtb21lbnR1bSB0d2VlbiAobGlrZSB3aXRoIGEgc2Nyb2xsVG8gdHdlZW4pIHNvIHdlIGNhbiBwYXVzZSgpIGl0IHRvIHByZXZlbnQgY29uZmxpY3RzLlxuXG4gIHJldHVybiBzZWxmO1xufTtcblxuU2Nyb2xsVHJpZ2dlci5zb3J0ID0gZnVuY3Rpb24gKGZ1bmMpIHtcbiAgcmV0dXJuIF90cmlnZ2Vycy5zb3J0KGZ1bmMgfHwgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gKGEudmFycy5yZWZyZXNoUHJpb3JpdHkgfHwgMCkgKiAtMWU2ICsgYS5zdGFydCAtIChiLnN0YXJ0ICsgKGIudmFycy5yZWZyZXNoUHJpb3JpdHkgfHwgMCkgKiAtMWU2KTtcbiAgfSk7XG59O1xuXG5TY3JvbGxUcmlnZ2VyLm9ic2VydmUgPSBmdW5jdGlvbiAodmFycykge1xuICByZXR1cm4gbmV3IE9ic2VydmVyKHZhcnMpO1xufTtcblxuU2Nyb2xsVHJpZ2dlci5ub3JtYWxpemVTY3JvbGwgPSBmdW5jdGlvbiAodmFycykge1xuICBpZiAodHlwZW9mIHZhcnMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gX25vcm1hbGl6ZXI7XG4gIH1cblxuICBpZiAodmFycyA9PT0gdHJ1ZSAmJiBfbm9ybWFsaXplcikge1xuICAgIHJldHVybiBfbm9ybWFsaXplci5lbmFibGUoKTtcbiAgfVxuXG4gIGlmICh2YXJzID09PSBmYWxzZSkge1xuICAgIHJldHVybiBfbm9ybWFsaXplciAmJiBfbm9ybWFsaXplci5raWxsKCk7XG4gIH1cblxuICB2YXIgbm9ybWFsaXplciA9IHZhcnMgaW5zdGFuY2VvZiBPYnNlcnZlciA/IHZhcnMgOiBfZ2V0U2Nyb2xsTm9ybWFsaXplcih2YXJzKTtcbiAgX25vcm1hbGl6ZXIgJiYgX25vcm1hbGl6ZXIudGFyZ2V0ID09PSBub3JtYWxpemVyLnRhcmdldCAmJiBfbm9ybWFsaXplci5raWxsKCk7XG4gIF9pc1ZpZXdwb3J0KG5vcm1hbGl6ZXIudGFyZ2V0KSAmJiAoX25vcm1hbGl6ZXIgPSBub3JtYWxpemVyKTtcbiAgcmV0dXJuIG5vcm1hbGl6ZXI7XG59O1xuXG5TY3JvbGxUcmlnZ2VyLmNvcmUgPSB7XG4gIC8vIHNtYWxsZXIgZmlsZSBzaXplIHdheSB0byBsZXZlcmFnZSBpbiBTY3JvbGxTbW9vdGhlciBhbmQgT2JzZXJ2ZXJcbiAgX2dldFZlbG9jaXR5UHJvcDogX2dldFZlbG9jaXR5UHJvcCxcbiAgX2lucHV0T2JzZXJ2ZXI6IF9pbnB1dE9ic2VydmVyLFxuICBfc2Nyb2xsZXJzOiBfc2Nyb2xsZXJzLFxuICBfcHJveGllczogX3Byb3hpZXMsXG4gIGJyaWRnZToge1xuICAgIC8vIHdoZW4gbm9ybWFsaXplU2Nyb2xsIHNldHMgdGhlIHNjcm9sbCBwb3NpdGlvbiAoc3MgPSBzZXRTY3JvbGwpXG4gICAgc3M6IGZ1bmN0aW9uIHNzKCkge1xuICAgICAgX2xhc3RTY3JvbGxUaW1lIHx8IF9kaXNwYXRjaChcInNjcm9sbFN0YXJ0XCIpO1xuICAgICAgX2xhc3RTY3JvbGxUaW1lID0gX2dldFRpbWUoKTtcbiAgICB9LFxuICAgIC8vIGEgd2F5IHRvIGdldCB0aGUgX3JlZnJlc2hpbmcgdmFsdWUgaW4gT2JzZXJ2ZXJcbiAgICByZWY6IGZ1bmN0aW9uIHJlZigpIHtcbiAgICAgIHJldHVybiBfcmVmcmVzaGluZztcbiAgICB9XG4gIH1cbn07XG5fZ2V0R1NBUCgpICYmIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5leHBvcnQgeyBTY3JvbGxUcmlnZ2VyIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcclxuaW1wb3J0IFwiLi9qcy9wYWdlcy9ob21lXCI7XHJcbmltcG9ydCBcIi4vanMvY29tcG9uZW50cy9oZWFkZXJcIjtcclxuaW1wb3J0IHsgZXhhbXBsZSB9IGZyb20gXCIuL2pzL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xyXG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xyXG5pbXBvcnQgU2Nyb2xsVG9QbHVnaW4gZnJvbSBcImdzYXAvU2Nyb2xsVG9QbHVnaW5cIjtcclxuY29uc29sZS5sb2coZXhhbXBsZSk7XHJcblxyXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xyXG5cclxudmFyIHBhbmVscyA9IGdzYXAudXRpbHMudG9BcnJheShcIi5wYW5lbFwiKTtcclxucGFuZWxzLnBvcCgpO1xyXG5cclxucGFuZWxzLmZvckVhY2goKHBhbmVsLCBpKSA9PiB7XHJcbiAgLy8gR2V0IHRoZSBlbGVtZW50IGhvbGRpbmcgdGhlIGNvbnRlbnQgaW5zaWRlIHRoZSBwYW5lbFxyXG5cclxuICAvLyBHZXQgdGhlIEhlaWdodCBvZiB0aGUgY29udGVudCBpbnNpZGUgdGhlIHBhbmVsXHJcbiAgbGV0IHBhbmVsSGVpZ2h0ID0gcGFuZWwub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAvLyBHZXQgdGhlIHdpbmRvdyBoZWlnaHRcclxuICBsZXQgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICBsZXQgZGlmZmVyZW5jZSA9IHBhbmVsSGVpZ2h0IC0gd2luZG93SGVpZ2h0O1xyXG5cclxuICAvLyByYXRpbyAoYmV0d2VlbiAwIGFuZCAxKSByZXByZXNlbnRpbmcgdGhlIHBvcnRpb24gb2YgdGhlIG92ZXJhbGwgYW5pbWF0aW9uIHRoYXQncyBmb3IgdGhlIGZha2Utc2Nyb2xsaW5nLiBXZSBrbm93IHRoYXQgdGhlIHNjYWxlICYgZmFkZSBzaG91bGQgaGFwcGVuIG92ZXIgdGhlIGNvdXJzZSBvZiAxIHdpbmRvd0hlaWdodCwgc28gd2UgY2FuIGZpZ3VyZSBvdXQgdGhlIHJhdGlvIGJhc2VkIG9uIGhvdyBmYXIgd2UgbXVzdCBmYWtlLXNjcm9sbFxyXG4gIC8vIGxldCBmYWtlU2Nyb2xsUmF0aW8gPVxyXG4gIC8vICAgZGlmZmVyZW5jZSA+IDAgPyBkaWZmZXJlbmNlIC8gKGRpZmZlcmVuY2UgKyB3aW5kb3dIZWlnaHQpIDogMDtcclxuXHJcbiAgLy8gLy8gaWYgd2UgbmVlZCB0byBmYWtlIHNjcm9sbCAoYmVjYXVzZSB0aGUgcGFuZWwgaXMgdGFsbGVyIHRoYW4gdGhlIHdpbmRvdyksIGFkZCB0aGUgYXBwcm9wcmlhdGUgYW1vdW50IG9mIG1hcmdpbiB0byB0aGUgYm90dG9tIHNvIHRoYXQgdGhlIG5leHQgZWxlbWVudCBjb21lcyBpbiBhdCB0aGUgcHJvcGVyIHRpbWUuXHJcbiAgLy8gaWYgKGZha2VTY3JvbGxSYXRpbykge1xyXG4gIC8vICAgcGFuZWwuc3R5bGUubWFyZ2luQm90dG9tID0gcGFuZWxIZWlnaHQgKiBmYWtlU2Nyb2xsUmF0aW8gKyBcInB4XCI7XHJcbiAgLy8gfVxyXG4gIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xyXG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xyXG4gICAgICB0cmlnZ2VyOiBwYW5lbCxcclxuICAgICAgc3RhcnQ6IFwiYm90dG9tIGJvdHRvbVwiLFxyXG4gICAgICBlbmQ6IFwiYm90dG9tIHRvcFwiLFxyXG4gICAgICBwaW5TcGFjaW5nOiBmYWxzZSxcclxuICAgICAgcGluOiB0cnVlLFxyXG4gICAgICBzY3J1YjogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIC8vIGZha2Ugc2Nyb2xsLiBXZSB1c2UgMSBiZWNhdXNlIHRoYXQncyB3aGF0IHRoZSByZXN0IG9mIHRoZSB0aW1lbGluZSBjb25zaXN0cyBvZiAoMC45IHNjYWxlICsgMC4xIGZhZGUpXHJcbiAgaWYgKGZha2VTY3JvbGxSYXRpbykge1xyXG4gICAgdGwudG8oaW5uZXJwYW5lbCwge1xyXG4gICAgICB5OiAtZGlmZmVyZW5jZSxcclxuICAgICAgZHVyYXRpb246IDEgLyAoMSAtIGZha2VTY3JvbGxSYXRpbykgLSAxLFxyXG4gICAgICBlYXNlOiBcIm5vbmVcIixcclxuICAgIH0pO1xyXG4gIH1cclxuICAvLyB0bC5mcm9tVG8oXHJcbiAgLy8gICBwYW5lbCxcclxuICAvLyAgIHsgc2NhbGU6IDEsIG9wYWNpdHk6IDEgfSxcclxuICAvLyAgIHsgc2NhbGU6IDAuNSwgb3BhY2l0eTogMC41LCBkdXJhdGlvbjogMC45IH1cclxuICAvLyApLnRvKHBhbmVsLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjEgfSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiaGVhZGVyIiwiY29uc29sZSIsImxvZyIsImhvbWUiLCJleGFtcGxlIiwiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJTY3JvbGxUb1BsdWdpbiIsInJlZ2lzdGVyUGx1Z2luIiwicGFuZWxzIiwidXRpbHMiLCJ0b0FycmF5IiwicG9wIiwiZm9yRWFjaCIsInBhbmVsIiwiaSIsInBhbmVsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwid2luZG93SGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJkaWZmZXJlbmNlIiwidGwiLCJ0aW1lbGluZSIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwic3RhcnQiLCJlbmQiLCJwaW5TcGFjaW5nIiwicGluIiwic2NydWIiLCJmYWtlU2Nyb2xsUmF0aW8iLCJ0byIsImlubmVycGFuZWwiLCJ5IiwiZHVyYXRpb24iLCJlYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==