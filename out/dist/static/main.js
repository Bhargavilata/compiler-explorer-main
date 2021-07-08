(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Zv+":
/*!*************************!*\
  !*** ./static/local.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2017, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


var options = __webpack_require__(/*! ./options */ "3M42");
var prefix = options.localStoragePrefix || '';

function get(key, ifNotPresent) {
    var result;
    try {
        result = window.localStorage.getItem(prefix + key);
    } catch (e) {
        // Swallow up any security exceptions...
        return ifNotPresent;
    }
    if (result === null) return ifNotPresent;
    return result;
}

function set(key, value) {
    try {
        window.localStorage.setItem(prefix + key, value);
        return true;
    } catch (e) {
        // Swallow up any security exceptions...
    }
    return false;
}

function remove(key) {
    try {
        window.localStorage.removeItem(prefix + key);
    } catch (e) {
        // Swallow up any security exceptions...
    }
}

module.exports = {
    set: set,
    get: get,
    remove: remove,
};


/***/ }),

/***/ "0YE8":
/*!**************************************!*\
  !*** ./static/modes/haskell-mode.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2017, Rubén Rincón
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


var monaco = __webpack_require__(/*! monaco-editor */ "M/lh");

function definition() {
    return {
        keywords: [
            'module', 'import', 'main', 'where', 'otherwise', 'newtype',
            'definition', 'implementation', 'from', 'class', 'instance', 'abort',
        ],

        builtintypes: [
            'Int', 'Real', 'String',
        ],

        operators: [
            '=', '==', '>=', '<=', '+', '-', '*', '/', '::', '->', '=:', '=>', '|', '$',
        ],

        numbers: /-?[0-9.]/,

        tokenizer: {
            root: [
                { include: '@whitespace' },

                [/->/, 'operators'],

                [/\|/, 'operators'],

                [/(\w*)(\s?)(::)/, ['keyword', 'white', 'operators']],

                [/[+\-*/=<>$]/, 'operators'],

                [/[a-zA-Z_][a-zA-Z0-9_]*/, {
                    cases: {
                        '@builtintypes': 'type',
                        '@keywords': 'keyword',
                        '@default': '',
                    },
                }],

                [/[()[\],:]/, 'delimiter'],

                [/@numbers/, 'number'],

                [/(")(.*)(")/, ['string', 'string', 'string']],
            ],

            comment: [
                [/[^/*]+/, 'comment'],
                [/\*\//, 'comment', '@pop'],
                [/[/*]/, 'comment'],
            ],

            whitespace: [
                [/[ \t\r\n]+/, 'white'],
                [/\/\*/, 'comment', '@comment'],
                [/\/\/.*$/, 'comment'],
                [/--.*$/, 'comment'],
            ],
        },
    };
}

monaco.languages.register({id: 'haskell'});
monaco.languages.setMonarchTokensProvider('haskell', definition());


/***/ }),

/***/ "1uy5":
/*!************************************!*\
  !*** ./static/modes/clean-mode.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2018, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


var monaco = __webpack_require__(/*! monaco-editor */ "M/lh");

function definition() {
    return {
        keywords: [
            'module', 'import', 'Start', 'where', 'otherwise',
            'definition', 'implementation', 'from', 'class', 'instance', 'abort',
            'infix', 'infixl', 'infixr', 'if', 'True', 'False',
        ],

        builtintypes: [
            'Int', 'Real', 'String', 'Char', 'Complex', 'Bool',
        ],

        operators: [
            '=', '==', '>=', '<=', '+', '-', '*', '/', '::', ':==', '->', '=:', '=>', '|', '\\\\',
        ],

        numbers: /-?[0-9.]/,

        tokenizer: {
            root: [
                { include: '@whitespace' },

                [/->/, 'operators'],

                [/\|/, 'operators'],

                [/(\w*)(\s?)(::)/, ['keyword', 'white', 'operators']],

                [/[+\-*/=<>\\]/, 'operators'],

                [/[a-zA-Z_][a-zA-Z0-9_]*/, {
                    cases: {
                        '@builtintypes': 'type',
                        '@keywords': 'keyword',
                        '@default': '',
                    },
                }],

                [/[()[\],:]/, 'delimiter'],

                [/@numbers/, 'number'],

                [/(")(.*)(")/, ['string', 'string', 'string']],
            ],

            comment: [
                [/[^/*]+/, 'comment'],
                [/\*\//, 'comment', '@pop'],
                [/[/*]/, 'comment'],
            ],

            whitespace: [
                [/[ \t\r\n]+/, 'white'],
                [/\/\*/, 'comment', '@comment'],
                [/\/\/.*$/, 'comment'],
            ],
        },
    };
}

monaco.languages.register({ id: 'clean' });
monaco.languages.setMonarchTokensProvider('clean', definition());


/***/ }),

/***/ "21Zm":
/*!************************************!*\
  !*** ./static/modes/ocaml-mode.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2018, Eugen Bulavin
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


var monaco = __webpack_require__(/*! monaco-editor */ "M/lh");

function definition() {
    return {
        keywords: [
            'and',
            'as',
            'assert',
            'asr',
            'begin',
            'class',
            'constraint',
            'do',
            'done',
            'downto',
            'else',
            'end',
            'exception',
            'external',
            'false',
            'for',
            'fun',
            'function',
            'functor',
            'if',
            'in',
            'include',
            'inherit',
            'initializer',
            'land',
            'lazy',
            'let',
            'lor',
            'lsl',
            'lsr',
            'lxor',
            'match',
            'method',
            'mod',
            'module',
            'mutable',
            'new',
            'nonrec',
            'object',
            'of',
            'open',
            'or',
            'private',
            'rec',
            'sig',
            'struct',
            'then',
            'to',
            'true',
            'try',
            'type',
            'val',
            'virtual',
            'when',
            'while',
            'with',
        ],

        typeKeywords: [
            'int',
            'int32',
            'int64',
            'bool',
            'char',
            'unit',
        ],

        numbers: /-?[0-9.]/,

        tokenizer: {
            root: [
                // identifiers and keywords
                [/[a-z_$][\w$]*/, {
                    cases: {
                        '@typeKeywords': 'keyword',
                        '@keywords': 'keyword',
                        '@default': 'identifier',
                    },
                }],

                { include: '@whitespace' },

                [/@numbers/, 'number'],

                [/[+\-*/=<>$@]/, 'operators'],

                [/(")(.*)(")/, ['string', 'string', 'string']],
            ],

            comment: [
                [/[^(*]+/, 'comment'],
                [/\*\)/, 'comment', '@pop'],
            ],

            whitespace: [
                [/[ \t\r\n]+/, 'white'],
                [/\(\*/, 'comment', '@comment'],
            ],
        },
    };
}

monaco.languages.register({id: 'ocaml'});
monaco.languages.setMonarchTokensProvider('ocaml', definition());


/***/ }),

/***/ "26VD":
/*!******************************************!*\
  !*** ./static/panes/conformance-view.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2017, Rubén Rincón
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.



var options = __webpack_require__(/*! ../options */ "3M42");
var _ = __webpack_require__(/*! underscore */ "xG9w");
var $ = __webpack_require__(/*! jquery */ "EVdn");
var Promise = __webpack_require__(/*! es6-promise */ "E2g8").Promise;
var ga = __webpack_require__(/*! ../analytics */ "9vLr");
var Components = __webpack_require__(/*! ../components */ "hqpU");
var Libraries = __webpack_require__(/*! ../libs-widget-ext */ "cVjN");

__webpack_require__(/*! selectize */ "QPhV");

function Conformance(hub, container, state) {
    this.hub = hub;
    this.container = container;
    this.eventHub = hub.createEventHub();
    this.compilerService = hub.compilerService;
    this.domRoot = container.getElement();
    this.domRoot.html($('#conformance').html());
    this.editorId = state.editorid;
    this.maxCompilations = options.cvCompilerCountMax || 6;
    this.langId = state.langId || _.keys(options.languages)[0];
    this.source = state.source || '';
    this.sourceNeedsExpanding = true;
    this.expandedSource = null;

    this.status = {
        allowCompile: false,
        allowAdd: true,
    };
    this.stateByLang = {};

    this.initButtons();
    this.initLibraries(state);
    this.initCallbacks();
    this.initFromState(state);
    this.handleToolbarUI();
    ga.proxy('send', {
        hitType: 'event',
        eventCategory: 'OpenViewPane',
        eventAction: 'Conformance',
    });

    // Dismiss the popover on escape.
    $(document).on('keyup.editable', _.bind(function (e) {
        if (e.which === 27) {
            this.libsButton.popover('hide');
        }
    }, this));

    // Dismiss on any click that isn't either in the opening element, inside
    // the popover or on any alert
    $(document).on('click', _.bind(function (e) {
        var elem = this.libsButton;
        var target = $(e.target);
        if (!target.is(elem) && elem.has(target).length === 0 && target.closest('.popover').length === 0) {
            elem.popover('hide');
        }
    }, this));
}

Conformance.prototype.onLibsChanged = function () {
    this.saveState();
    this.compileAll();
};

Conformance.prototype.initLibraries = function (state) {
    this.libsWidget = new Libraries.Widget(this.langId, null,
        this.libsButton, state, _.bind(this.onLibsChanged, this));
};

Conformance.prototype.initButtons = function () {
    this.selectorList = this.domRoot.find('.compiler-list');
    this.addCompilerButton = this.domRoot.find('.add-compiler');
    this.selectorTemplate = $('#compiler-selector').find('.form-row');
    this.topBar = this.domRoot.find('.top-bar');
    this.libsButton = this.topBar.find('.show-libs');
    this.hideable = this.domRoot.find('.hideable');
};

Conformance.prototype.initCallbacks = function () {
    this.container.on('destroy', function () {
        this.eventHub.unsubscribe();
        this.eventHub.emit('conformanceViewClose', this.editorId);
    }, this);

    this.container.on('destroy', this.close, this);
    this.container.on('open', function () {
        this.eventHub.emit('conformanceViewOpen', this.editorId);
    }, this);

    this.container.on('resize', this.resize, this);
    this.container.on('shown', this.resize, this);
    this.eventHub.on('resize', this.resize, this);
    this.eventHub.on('editorChange', this.onEditorChange, this);
    this.eventHub.on('editorClose', this.onEditorClose, this);
    this.eventHub.on('languageChange', this.onLanguageChange, this);

    this.addCompilerButton.on('click', _.bind(function () {
        this.addCompilerSelector();
        this.saveState();
    }, this));
};

Conformance.prototype.setTitle = function (compilerCount) {
    this.container.setTitle('Conformance viewer (Editor #' + this.editorId + ') ' + (
        compilerCount !== 0 ? (compilerCount + '/' + this.maxCompilations) : ''
    ));
};

Conformance.prototype.addCompilerSelector = function (config) {
    if (!config) {
        config = {
            // Compiler id which is being used
            compilerId: '',
            // Options which are in use
            options: options.compileOptions[this.langId],
        };
    }

    var newEntry = this.selectorTemplate.clone();

    var onOptionsChange = _.debounce(_.bind(function () {
        this.saveState();
        this.compileChild(newEntry);
    }, this), 800);

    var optionsField = newEntry.find('.options')
        .val(config.options)
        .on('change', onOptionsChange)
        .on('keyup', onOptionsChange);

    newEntry.find('.close').not('.extract-compiler')
        .on('click', _.bind(function () {
            this.removeCompilerSelector(newEntry);
        }, this));

    this.selectorList.append(newEntry);

    var status = newEntry.find('.status-icon');
    var prependOptions = newEntry.find('.prepend-options');
    var popCompilerButton = newEntry.find('.extract-compiler');

    var onCompilerChange = _.bind(function (compilerId) {
        popCompilerButton.toggleClass('d-none', !compilerId);
        // Hide the results icon when a new compiler is selected
        this.handleStatusIcon(status, {code: 0});
        var compiler = this.compilerService.findCompiler(this.langId, compilerId);
        if (compiler) this.setCompilationOptionsPopover(prependOptions, compiler.options);
        this.updateLibraries();
    }, this);

    var compilerPicker = newEntry.find('.compiler-picker').selectize({
        sortField: this.compilerService.getSelectizerOrder(),
        valueField: 'id',
        labelField: 'name',
        searchField: ['name'],
        optgroupField: 'group',
        optgroups: this.compilerService.getGroupsInUse(this.langId),
        lockOptgroupOrder: true,
        options: _.filter(this.getCurrentLangCompilers(), function (e) {
            return !e.hidden || e.id === config.compilerId;
        }),
        items: config.compilerId ? [config.compilerId] : [],
        dropdownParent: 'body',
        closeAfterSelect: true,
    }).on('change', _.bind(function (e) {
        onCompilerChange($(e.target).val());
        this.compileChild(newEntry);
    }, this));


    var getCompilerConfig = _.bind(function () {
        return Components.getCompilerWith(
            this.editorId, undefined, optionsField.val(), compilerPicker.val(), this.langId, this.lastState.libs);
    }, this);

    this.container.layoutManager
        .createDragSource(popCompilerButton, getCompilerConfig);

    popCompilerButton.click(_.bind(function () {
        var insertPoint = this.hub.findParentRowOrColumn(this.container) ||
            this.container.layoutManager.root.contentItems[0];
        insertPoint.addChild(getCompilerConfig);
    }, this));

    this.handleToolbarUI();
    this.saveState();
};

Conformance.prototype.getCurrentLangCompilers = function () {
    return this.compilerService.getCompilersForLang(this.langId);
};

Conformance.prototype.setCompilationOptionsPopover = function (element, content) {
    element.popover('dispose');
    element.popover({
        content: content || 'No options in use',
        template: '<div class="popover' +
            (content ? ' compiler-options-popover' : '') +
            '" role="tooltip"><div class="arrow"></div>' +
            '<h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    });
};

Conformance.prototype.removeCompilerSelector = function (element) {
    if (element) element.remove();
    this.updateLibraries();
    this.handleToolbarUI();
    this.saveState();
};

Conformance.prototype.expandSource = function () {
    if (this.sourceNeedsExpanding || !this.expandedSource) {
        return this.compilerService.expand(this.source).then(_.bind(function (expandedSource) {
            this.expandedSource = expandedSource;
            this.sourceNeedsExpanding = false;
            return expandedSource;
        }, this));
    }
    return Promise.resolve(this.expandedSource);
};

Conformance.prototype.onEditorChange = function (editorId, newSource, langId) {
    if (editorId === this.editorId) {
        this.langId = langId;
        this.source = newSource;
        this.sourceNeedsExpanding = true;
        this.compileAll();
    }
};

Conformance.prototype.onEditorClose = function (editorId) {
    if (editorId === this.editorId) {
        this.close();
        _.defer(function (self) {
            self.container.close();
        }, this);
    }
};

Conformance.prototype.onCompileResponse = function (child, result) {
    var allText = _.pluck((result.stdout || []).concat(result.stderr || []), 'text').join('\n');
    var failed = result.code !== 0;
    var warns = !failed && !!allText;

    this.setCompilationOptionsPopover(child.find('.prepend-options'),
        result.compilationOptions ? result.compilationOptions.join(' ') : '');
    child.find('.compiler-out')
        .prop('title', allText.replace(/\x1b\[[0-9;]*m(.\[K)?/g, ''))
        .toggleClass('d-none', !allText);
    this.handleStatusIcon(child.find('.status-icon'), {code: failed ? 3 : (warns ? 2 : 1), compilerOut: result.code});
    this.saveState();
};

Conformance.prototype.compileChild = function (child) {
    // Hide previous status icons
    var picker = child.find('.compiler-picker');

    if (!picker || !picker.val()) return;

    this.handleStatusIcon(child.find('.status-icon'), {code: 4});

    this.expandSource().then(_.bind(function (expandedSource) {
        var request = {
            source: expandedSource,
            compiler: picker.val(),
            options: {
                userArguments: child.find('.options').val() || '',
                filters: {},
                compilerOptions: {produceAst: false, produceOptInfo: false},
                libraries: [],
                skipAsm: true,
            },
            lang: this.langId,
        };

        _.each(this.libsWidget.getLibsInUse(), function (item) {
            request.options.libraries.push({
                id: item.libId,
                version: item.versionId,
            });
        });

        // This error function ensures that the user will know we had a problem (As we don't save asm)
        this.compilerService.submit(request)
            .then(_.bind(function (x) {
                this.onCompileResponse(child, x.result);
            }, this))
            .catch(_.bind(function (x) {
                this.onCompileResponse(child, {
                    asm: '',
                    code: -1,
                    stdout: '',
                    stderr: x.error,
                });
            }, this));
    }, this));
};

Conformance.prototype.compileAll = function () {
    _.each(this.selectorList.children(), _.bind(function (child) {
        this.compileChild($(child));
    }, this));
};

Conformance.prototype.handleToolbarUI = function () {
    var compilerCount = this.selectorList.children().length;

    // Only allow new compilers if we allow for more
    this.addCompilerButton.prop('disabled', compilerCount >= this.maxCompilations);

    this.setTitle(compilerCount);
};

Conformance.prototype.handleStatusIcon = function (element, status) {
    if (!element) return;

    function ariaLabel() {
        // Compiling...
        if (status.code === 4) return 'Compiling';
        if (status.compilerOut === 0) {
            // StdErr.length > 0
            if (status.code === 3) return 'Compilation succeeded with errors';
            // StdOut.length > 0
            if (status.code === 2) return 'Compilation succeeded with warnings';
            return 'Compilation succeeded';
        } else {
            // StdErr.length > 0
            if (status.code === 3) return 'Compilation failed with errors';
            // StdOut.length > 0
            if (status.code === 2) return 'Compilation failed with warnings';
            return 'Compilation failed';
        }
    }

    function color() {
        // Compiling...
        if (status.code === 4) return 'black';
        if (status.compilerOut === 0) {
            // StdErr.length > 0
            if (status.code === 3) return '#FF6645';
            // StdOut.length > 0
            if (status.code === 2) return '#FF6500';
            return '#12BB12';
        } else {
            // StdErr.length > 0
            if (status.code === 3) return '#FF1212';
            // StdOut.length > 0
            if (status.code === 2) return '#BB8700';
            return '#FF6645';
        }
    }

    element
        .removeClass()
        .addClass('status-icon fas')
        .css('color', color())
        .toggle(status.code !== 0)
        .prop('aria-label', ariaLabel())
        .prop('data-status', status.code)
        .toggleClass('fa-spinner', status.code === 4)
        .toggleClass('fa-times-circle', status.code === 3)
        .toggleClass('fa-check-circle', status.code === 1 || status.code === 2);
};

Conformance.prototype.currentState = function () {
    var compilers = _.map(this.selectorList.children(), function (child) {
        child = $(child);
        return {
            compilerId: child.find('.compiler-picker').val() || '',
            options: child.find('.options').val() || '',
        };
    });
    return {
        editorid: this.editorId,
        langId: this.langId,
        compilers: compilers,
        libs: this.libsWidget.get(),
    };
};

Conformance.prototype.saveState = function () {
    this.lastState = this.currentState();
    this.container.setState(this.lastState);
};

Conformance.prototype.resize = function () {
    this.updateHideables();
    this.selectorList.css('height', this.domRoot.height() - this.topBar.outerHeight(true));
};

Conformance.prototype.updateHideables = function () {
    this.hideable.toggle(this.domRoot.width() > this.addCompilerButton.width());
};

Conformance.prototype.getOverlappingLibraries = function (compilerIds) {
    var compilers = _.map(compilerIds, _.bind(function (compilerId) {
        return this.compilerService.findCompiler(this.langId, compilerId);
    }, this));

    var libraries = {};
    var first = true;
    _.forEach(compilers, function (compiler) {
        if (compiler) {
            if (first) {
                libraries = _.extend({}, compiler.libs);
                first = false;
            } else {
                var libsInCommon = _.intersection(_.keys(libraries),
                    _.keys(compiler.libs));
    
                _.forEach(libraries, function (lib, libkey) {
                    if (libsInCommon.includes(libkey)) {
                        var versionsInCommon = _.intersection(_.keys(lib.versions),
                            _.keys(compiler.libs[libkey].versions));

                        libraries[libkey].versions = _.pick(lib.versions,
                            function (version, versionkey) {
                                return versionsInCommon.includes(versionkey);
                            });
                    } else {
                        libraries[libkey] = false;
                    }
                });
    
                libraries = _.omit(libraries, function (lib) {
                    return !lib || _.isEmpty(lib.versions);
                });
            }
        }
    });

    return libraries;
};

Conformance.prototype.updateLibraries = function () {
    var compilerIds = _.uniq(
        _.filter(
            _.map(this.selectorList.children(), function (child) {
                return $(child).find('.compiler-picker').val();
            })
            , function (compilerId) {
                return compilerId !== '';
            })
    );

    var libraries = this.getOverlappingLibraries(compilerIds);

    this.libsWidget.setNewLangId(this.langId, compilerIds.join('|'), libraries);
};

Conformance.prototype.onLanguageChange = function (editorId, newLangId) {
    if (editorId === this.editorId && this.langId !== newLangId) {
        var oldLangId = this.langId;
        this.stateByLang[oldLangId] = this.currentState();

        this.langId = newLangId;
        this.selectorList.children().remove();
        var langState = this.stateByLang[newLangId];
        this.initFromState(langState);
        this.updateLibraries();
        this.handleToolbarUI();
        this.saveState();
    }
};

Conformance.prototype.close = function () {
    this.eventHub.unsubscribe();
    this.eventHub.emit('conformanceViewClose', this.editorId);
};

Conformance.prototype.initFromState = function (state) {
    if (state && state.compilers) {
        this.lastState = state;
        _.each(state.compilers, _.bind(this.addCompilerSelector, this));
    } else {
        this.lastState = this.currentState();
    }
};

module.exports = {
    Conformance: Conformance,
};


/***/ }),

/***/ "35hO":
/*!**********************************!*\
  !*** ./static/panes/compiler.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2012, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


var $ = __webpack_require__(/*! jquery */ "EVdn");
var _ = __webpack_require__(/*! underscore */ "xG9w");
var ga = __webpack_require__(/*! ../analytics */ "9vLr");
var colour = __webpack_require__(/*! ../colour */ "DJCN");
var Toggles = __webpack_require__(/*! ../toggles */ "VSGn");
var FontScale = __webpack_require__(/*! ../fontscale */ "zeU8");
var Promise = __webpack_require__(/*! es6-promise */ "E2g8").Promise;
var Components = __webpack_require__(/*! ../components */ "hqpU");
var LruCache = __webpack_require__(/*! lru-cache */ "HyWp");
var options = __webpack_require__(/*! ../options */ "3M42");
var monaco = __webpack_require__(/*! monaco-editor */ "M/lh");
var Alert = __webpack_require__(/*! ../alert */ "By64");
var bigInt = __webpack_require__(/*! big-integer */ "dAlA");
var local = __webpack_require__(/*! ../local */ "/Zv+");
var Libraries = __webpack_require__(/*! ../libs-widget-ext */ "cVjN");
var codeLensHandler = __webpack_require__(/*! ../codelens-handler */ "xN3R");
var monacoConfig = __webpack_require__(/*! ../monaco-config */ "u8Pk");
var timingInfoWidget = __webpack_require__(/*! ../timing-info-widget */ "ArzH");
__webpack_require__(/*! ../modes/asm-mode */ "bh+U");
__webpack_require__(/*! ../modes/ptx-mode */ "oKtz");

__webpack_require__(/*! selectize */ "QPhV");

var timingInfo = new timingInfoWidget.TimingInfo();

var OpcodeCache = new LruCache({ 
    max: 64 * 1024,
    length: function (n) {
        return JSON.stringify(n).length;
    },
});

function patchOldFilters(filters) {
    if (filters === undefined) return undefined;
    // Filters are of the form {filter: true|false¸ ...}. In older versions, we used
    // to suppress the {filter:false} form. This means we can't distinguish between
    // "filter not on" and "filter not present". In the latter case we want to default
    // the filter. In the former case we want the filter off. Filters now don't suppress
    // but there are plenty of permalinks out there with no filters set at all. Here
    // we manually set any missing filters to 'false' to recover the old behaviour of
    // "if it's not here, it's off".
    _.each(['binary', 'labels', 'directives', 'commentOnly', 'trim', 'intel'], function (oldFilter) {
        if (filters[oldFilter] === undefined) filters[oldFilter] = false;
    });
    return filters;
}

var languages = options.languages;

// Disable max line count only for the constructor. Turns out, it needs to do quite a lot of things
// eslint-disable-next-line max-statements
function Compiler(hub, container, state) {
    this.container = container;
    this.hub = hub;
    this.eventHub = hub.createEventHub();
    this.compilerService = hub.compilerService;
    this.domRoot = container.getElement();
    this.domRoot.html($('#compiler').html());
    this.id = state.id || hub.nextCompilerId();
    this.sourceEditorId = state.source || 1;
    this.settings = JSON.parse(local.get('settings', '{}'));
    this.originalCompilerId = state.compiler;
    this.initLangAndCompiler(state);
    this.infoByLang = {};
    this.deferCompiles = hub.deferred;
    this.needsCompile = false;
    this.options = state.options || options.compileOptions[this.currentLangId];
    this.source = '';
    this.assembly = [];
    this.colours = [];
    this.lastResult = {};
    this.lastTimeTaken = 0;
    this.pendingRequestSentAt = 0;
    this.nextRequest = null;
    this.optViewOpen = false;
    this.cfgViewOpen = false;
    this.codeCfgViewOpen = false;
    this.wantOptInfo = state.wantOptInfo;
    this.decorations = {};
    this.prevDecorations = [];
    this.labelDefinitions = {};
    this.alertSystem = new Alert();
    this.alertSystem.prefixMessage = 'Compiler #' + this.id + ': ';

    this.awaitingInitialResults = false;
    this.selection = state.selection;

    this.linkedFadeTimeoutId = -1;
    this.toolsMenu = null;

    this.initButtons(state);

    var monacoDisassembly = 'asm';
    if (languages[this.currentLangId] && languages[this.currentLangId].monacoDisassembly) {
        // TODO: If languages[this.currentLangId] is not valid, something went wrong. Find out what
        monacoDisassembly = languages[this.currentLangId].monacoDisassembly;
    }

    this.outputEditor = monaco.editor.create(this.monacoPlaceholder[0], monacoConfig.extendConfig({
        readOnly: true,
        language: monacoDisassembly,
        glyphMargin: !options.embedded,
        renderIndentGuides: false,
        vimInUse: false,
    }, this.settings));

    this.fontScale = new FontScale(this.domRoot, state, this.outputEditor);

    this.compilerPicker.selectize({
        sortField: this.compilerService.getSelectizerOrder(),
        valueField: 'id',
        labelField: 'name',
        searchField: ['name'],
        optgroupField: 'group',
        optgroups: this.compilerService.getGroupsInUse(this.currentLangId),
        lockOptgroupOrder: true,
        options: _.filter(this.getCurrentLangCompilers(), function (e) {
            return !e.hidden || e.id === state.compiler;
        }),
        items: this.compiler ? [this.compiler.id] : [],
        dropdownParent: 'body',
        closeAfterSelect: true,
    }).on('change', _.bind(function (e) {
        var val = $(e.target).val();
        if (val) {
            ga.proxy('send', {
                hitType: 'event',
                eventCategory: 'SelectCompiler',
                eventAction: val,
            });
            this.onCompilerChange(val);
        }
    }, this));

    this.compilerSelectizer = this.compilerPicker[0].selectize;

    this.initLibraries(state);

    this.initEditorActions();
    this.initEditorCommands();

    this.initCallbacks();
    // Handle initial settings
    this.onSettingsChange(this.settings);
    this.sendCompiler();
    this.updateCompilerInfo();
    this.updateButtons();
    this.saveState();
    ga.proxy('send', {
        hitType: 'event',
        eventCategory: 'OpenViewPane',
        eventAction: 'Compiler',
    });
}

Compiler.prototype.initLangAndCompiler = function (state) {
    var langId = state.lang;
    var compilerId = state.compiler;
    var result = this.compilerService.processFromLangAndCompiler(langId, compilerId);
    this.compiler = result.compiler;
    this.compiler.supportsGccDump= true;
    this.currentLangId = result.langId;
    this.updateLibraries();
};

Compiler.prototype.close = function () {
    codeLensHandler.unregister(this.id);
    this.eventHub.unsubscribe();
    this.eventHub.emit('compilerClose', this.id);
    this.outputEditor.dispose();
};

Compiler.prototype.initPanerButtons = function () {
    var outputConfig = _.bind(function () {
        return Components.getOutput(this.id, this.sourceEditorId);
    }, this);

    this.container.layoutManager.createDragSource(this.outputBtn, outputConfig);
    this.outputBtn.click(_.bind(function () {
        var insertPoint = this.hub.findParentRowOrColumn(this.container) ||
            this.container.layoutManager.root.contentItems[0];
        insertPoint.addChild(outputConfig);
    }, this));

    var cloneComponent = _.bind(function () {
        var currentState = this.currentState();
        // Delete the saved id to force a new one
        delete currentState.id;
        return {
            type: 'component',
            componentName: 'compiler',
            componentState: currentState,
        };
    }, this);
    var createOptView = _.bind(function () {
        return Components.getOptViewWith(this.id, this.source, this.lastResult.optOutput, this.getCompilerName(),
            this.sourceEditorId);
    }, this);

    var createAstView = _.bind(function () {
        return Components.getAstViewWith(this.id, this.source, this.lastResult.astOutput, this.getCompilerName(),
            this.sourceEditorId);
    }, this);

    var createIrView = _.bind(function () {
        return Components.getIrViewWith(this.id, this.source, this.lastResult.irOutput, this.getCompilerName(),
            this.sourceEditorId);
    }, this);

    var createGccDumpView = _.bind(function () {
        return Components.getGccDumpViewWith(this.id, this.getCompilerName(), this.sourceEditorId,
            this.lastResult.gccDumpOutput);
    }, this);

    var createCfgView = _.bind(function () {
        return Components.getCfgViewWith(this.id, this.sourceEditorId, 'compiler');
    }, this);

    var createCodeCfgView = _.bind(function () {
        return Components.getCfgViewWith(this.id, this.sourceEditorId, 'editor', this.lastResult.cfgResult);
    }, this);

    var createExecutor = _.bind(function () {
        var currentState = this.currentState();
        var editorId = currentState.source;
        var langId = currentState.lang;
        var compilerId = currentState.compiler;
        var libs = [];
        _.each(this.libsWidget.getLibsInUse(), function (item) {
            libs.push({
                name: item.libId,
                ver: item.versionId,
            });
        });
        return Components.getExecutorWith(editorId, langId, compilerId, libs, currentState.options);
    }, this);

    var panerDropdown = this.domRoot.find('.pane-dropdown');
    var togglePannerAdder = function () {
        panerDropdown.dropdown('toggle');
    };

    this.container.layoutManager
        .createDragSource(this.domRoot.find('.btn.add-compiler'), cloneComponent)
        ._dragListener.on('dragStart', togglePannerAdder);

    this.domRoot.find('.btn.add-compiler').click(_.bind(function () {
        var insertPoint = this.hub.findParentRowOrColumn(this.container) ||
            this.container.layoutManager.root.contentItems[0];
        insertPoint.addChild(cloneComponent);
    }, this));

    this.container.layoutManager
        .createDragSource(this.optButton, createOptView)
        ._dragListener.on('dragStart', togglePannerAdder);

    this.optButton.click(_.bind(function () {
        var insertPoint = this.hub.findParentRowOrColumn(this.container) ||
            this.container.layoutManager.root.contentItems[0];
        insertPoint.addChild(createOptView);
    }, this));

    this.container.layoutManager
        .createDragSource(this.astButton, createAstView)
        ._dragListener.on('dragStart', togglePannerAdder);

    this.astButton.click(_.bind(function () {
        var insertPoint = this.hub.findParentRowOrColumn(this.container) ||
            this.container.layoutManager.root.contentItems[0];
        insertPoint.addChild(createAstView);
    }, this));

    this.container.layoutManager
        .createDragSource(this.irButton, createIrView)
        ._dragListener.on('dragStart', togglePannerAdder);

    this.irButton.click(_.bind(function () {
        var insertPoint = this.hub.findParentRowOrColumn(this.container) ||
            this.container.layoutManager.root.contentItems[0];
        insertPoint.addChild(createIrView);
    }, this));

    this.container.layoutManager
        .createDragSource(this.gccDumpButton, createGccDumpView)
        ._dragListener.on('dragStart', togglePannerAdder);

    this.gccDumpButton.click(_.bind(function () {
        var insertPoint = this.hub.findParentRowOrColumn(this.container) ||
            this.container.layoutManager.root.contentItems[0];
        insertPoint.addChild(createGccDumpView);
    }, this));

    this.container.layoutManager
        .createDragSource(this.cfgButton, createCfgView)
        ._dragListener.on('dragStart', togglePannerAdder);

    this.cfgButton.click(_.bind(function () {
        var insertPoint = this.hub.findParentRowOrColumn(this.container) ||
            this.container.layoutManager.root.contentItems[0];
        insertPoint.addChild(createCfgView);
    }, this));

    this.container.layoutManager
        .createDragSource(this.codeCfgButton, createCodeCfgView)
        ._dragListener.on('dragStart', togglePannerAdder);

    this.codeCfgButton.click(_.bind(function () {
        var insertPoint = this.hub.findParentRowOrColumn(this.container) ||
            this.container.layoutManager.root.contentItems[0];
        insertPoint.addChild(createCodeCfgView);
    }, this));

    this.container.layoutManager
        .createDragSource(this.executorButton, createExecutor)
        ._dragListener.on('dragStart', togglePannerAdder);

    this.executorButton.click(_.bind(function () {
        var insertPoint = this.hub.findParentRowOrColumn(this.container) ||
            this.container.layoutManager.root.contentItems[0];
        insertPoint.addChild(createExecutor);
    }, this));

    this.initToolButtons(togglePannerAdder);
};

Compiler.prototype.undefer = function () {
    this.deferCompiles = false;
    if (this.needsCompile) {
        this.compile();
    }
};

Compiler.prototype.updateAndCalcTopBarHeight = function () {
    // If we save vertical space by hiding stuff that's OK to hide
    // when thin, then hide that stuff.
    this.hideable.show();
    var topBarHeightMax = this.topBar.outerHeight(true);
    this.hideable.hide();
    var topBarHeightMin = this.topBar.outerHeight(true);
    var topBarHeight = topBarHeightMin;
    if (topBarHeightMin === topBarHeightMax) {
        this.hideable.show();
    }

    return topBarHeight;
};

Compiler.prototype.resize = function () {
    var topBarHeight = this.updateAndCalcTopBarHeight();
    var bottomBarHeight = this.bottomBar.outerHeight(true);
    this.outputEditor.layout({
        width: this.domRoot.width(),
        height: this.domRoot.height() - topBarHeight - bottomBarHeight,
    });
};

// Returns a label name if it can be found in the given position, otherwise
// returns null.
Compiler.prototype.getLabelAtPosition = function (position) {
    var asmLine = this.assembly[position.lineNumber - 1];
    // Outdated position.lineNumber can happen (Between compilations?) - Check for those and skip
    if (asmLine) {
        var column = position.column;
        var labels = asmLine.labels || [];

        for (var i = 0; i < labels.length; ++i) {
            if (column >= labels[i].range.startCol &&
                column < labels[i].range.endCol
            ) {
                return labels[i];
            }
        }
    }
    return null;
};

// Jumps to a label definition related to a label which was found in the
// given position and highlights the given range. If no label can be found in
// the given positon it do nothing.
Compiler.prototype.jumpToLabel = function (position) {
    var label = this.getLabelAtPosition(position);

    if (!label) {
        return;
    }

    var labelDefLineNum = this.labelDefinitions[label.name];
    if (!labelDefLineNum) {
        return;
    }

    // Highlight the new range.
    var endLineContent =
        this.outputEditor.getModel().getLineContent(labelDefLineNum);

    this.outputEditor.setSelection(new monaco.Selection(
        labelDefLineNum, 0,
        labelDefLineNum, endLineContent.length + 1));

    // Jump to the given line.
    this.outputEditor.revealLineInCenter(labelDefLineNum);
};

Compiler.prototype.initEditorActions = function () {
    this.isLabelCtxKey = this.outputEditor.createContextKey('isLabel', true);

    this.outputEditor.addAction({
        id: 'jumptolabel',
        label: 'Jump to label',
        keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter],
        precondition: 'isLabel',
        contextMenuGroupId: 'navigation',
        contextMenuOrder: 1.5,
        run: _.bind(function (ed) {
            this.jumpToLabel(ed.getPosition());
        }, this),
    });

    // Hiding the 'Jump to label' context menu option if no label can be found
    // in the clicked position.
    var contextmenu = this.outputEditor.getContribution('editor.contrib.contextmenu');
    var realMethod = contextmenu._onContextMenu;
    contextmenu._onContextMenu = _.bind(function (e) {
        if (this.isLabelCtxKey && e.target.position) {
            var label = this.getLabelAtPosition(e.target.position);
            this.isLabelCtxKey.set(label);
        }
        realMethod.apply(contextmenu, arguments);
    }, this);

    this.outputEditor.addAction({
        id: 'viewsource',
        label: 'Scroll to source',
        keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.F10],
        keybindingContext: null,
        contextMenuGroupId: 'navigation',
        contextMenuOrder: 1.5,
        run: _.bind(function (ed) {
            var desiredLine = ed.getPosition().lineNumber - 1;
            var source = this.assembly[desiredLine].source;
            if (source !== null && source.file === null) {
                // a null file means it was the user's source
                this.eventHub.emit('editorLinkLine', this.sourceEditorId, source.line, -1, -1, true);
            }
        }, this),
    });

    this.outputEditor.addAction({
        id: 'viewasmdoc',
        label: 'View assembly documentation',
        keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.F8],
        keybindingContext: null,
        contextMenuGroupId: 'help',
        contextMenuOrder: 1.5,
        run: _.bind(this.onAsmToolTip, this),
    });

    this.outputEditor.addAction({
        id: 'toggleColourisation',
        label: 'Toggle colourisation',
        keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.F1],
        keybindingContext: null,
        run: _.bind(function () {
            this.eventHub.emit('modifySettings', {
                colouriseAsm: !this.settings.colouriseAsm,
            });
        }, this),
    });

};

Compiler.prototype.initEditorCommands = function () {
    this.outputEditor.addAction({
        id: 'dumpAsm',
        label: 'Developer: Dump asm',
        run: _.bind(function () {
            // eslint-disable-next-line no-console
            console.log(this.assembly);
        }, this),
    });
};

// Gets the filters that will actually be used (accounting for issues with binary
// mode etc).
Compiler.prototype.getEffectiveFilters = function () {
    if (!this.compiler) return {};
    var filters = this.filters.get();
    if (filters.binary && !this.compiler.supportsBinary) {
        delete filters.binary;
    }
    if (filters.execute && !this.compiler.supportsExecute) {
        delete filters.execute;
    }
    if (filters.libraryCode && !this.compiler.supportsLibraryCodeFilter) {
        delete filters.libraryCode;
    }
    _.each(this.compiler.disabledFilters, function (filter) {
        if (filters[filter]) {
            delete filters[filter];
        }
    });
    return filters;
};

Compiler.prototype.findTools = function (content, tools) {
    if (content.componentName === 'tool') {
        if (
            (content.componentState.editor === this.sourceEditorId) &&
            (content.componentState.compiler === this.id)) {
            tools.push({
                id: content.componentState.toolId,
                args: content.componentState.args,
                stdin: content.componentState.stdin,
            });
        }
    } else if (content.content) {
        _.each(content.content, function (subcontent) {
            tools = this.findTools(subcontent, tools);
        }, this);
    }

    return tools;
};

Compiler.prototype.getActiveTools = function (newToolSettings) {
    if (!this.compiler) return {};

    var tools = [];
    if (newToolSettings) {
        tools.push({
            id: newToolSettings.toolId,
            args: newToolSettings.args,
            stdin: newToolSettings.stdin,
        });
    }

    if (this.container.layoutManager.isInitialised) {
        var config = this.container.layoutManager.toConfig();
        return this.findTools(config, tools);
    } else {
        return tools;
    }
};

Compiler.prototype.isToolActive = function (activetools, toolId) {
    return _.find(activetools, function (tool) {
        return tool.id === toolId;
    });
};

Compiler.prototype.compile = function (bypassCache, newTools) {
    if (this.deferCompiles) {
        this.needsCompile = true;
        return;
    }
    this.needsCompile = false;
    this.compileInfoLabel.text(' - Compiling...');
    var options = {
        userArguments: this.options,
        compilerOptions: {
            produceAst: this.astViewOpen,
            produceGccDump: {
                opened: this.gccDumpViewOpen,
                pass: this.gccDumpPassSelected,
                treeDump: this.treeDumpEnabled,
                rtlDump: this.rtlDumpEnabled,
                ipaDump: this.ipaDumpEnabled,
                dumpFlags: this.dumpFlags,
            },
            produceOptInfo: this.wantOptInfo,
            produceCfg: this.cfgViewOpen,
            produceIr: this.irViewOpen,
        },
        filters: this.getEffectiveFilters(),
        tools: this.getActiveTools(newTools),
        libraries: [],
    };

    _.each(this.libsWidget.getLibsInUse(), function (item) {
        options.libraries.push({
            id: item.libId,
            version: item.versionId,
        });
    });

    this.compilerService.expand(this.source).then(_.bind(function (expanded) {
        var request = {
            source: expanded || '',
            compiler: this.compiler ? this.compiler.id : '',
            options: options,
            lang: this.currentLangId,
        };
        if (bypassCache) request.bypassCache = true;
        if (!this.compiler) {
            this.onCompileResponse(request, errorResult('<Please select a compiler>'), false);
        } else {
            this.sendCompile(request);
        }
    }, this));
};

Compiler.prototype.sendCompile = function (request) {
    var onCompilerResponse = _.bind(this.onCompileResponse, this);

    if (this.pendingRequestSentAt) {
        // If we have a request pending, then just store this request to do once the
        // previous request completes.
        this.nextRequest = request;
        return;
    }
    this.eventHub.emit('compiling', this.id, this.compiler);
    // Display the spinner
    this.handleCompilationStatus({code: 4});
    this.pendingRequestSentAt = Date.now();
    // After a short delay, give the user some indication that we're working on their
    // compilation.
    var progress = setTimeout(_.bind(function () {
        this.setAssembly({asm: fakeAsm('<Compiling...>')}, 0);
    }, this), 500);
    this.compilerService.submit(request)
        .then(function (x) {
            clearTimeout(progress);
            onCompilerResponse(request, x.result, x.localCacheHit);
        })
        .catch(function (x) {
            clearTimeout(progress);
            var message = 'Unknown error';
            if (_.isString(x)) {
                message = x;
            } else if (x) {
                message = x.error || x.code;
            }
            onCompilerResponse(request,
                errorResult('<Compilation failed: ' + message + '>'), false);
        });
};

Compiler.prototype.setNormalMargin = function () {
    this.outputEditor.updateOptions({
        lineNumbers: true,
        lineNumbersMinChars: 1,
    });
};

Compiler.prototype.setBinaryMargin = function () {
    this.outputEditor.updateOptions({
        lineNumbersMinChars: 6,
        lineNumbers: _.bind(this.getBinaryForLine, this),
    });
};

Compiler.prototype.getBinaryForLine = function (line) {
    var obj = this.assembly[line - 1];
    if (obj) {
        return obj.address ? obj.address.toString(16) : '';
    } else {
        return '???';
    }
};

Compiler.prototype.setAssembly = function (result, filteredCount) {
    console.log('inside set assemblt',result);
    var asm = result.asm || fakeAsm('<No output>');
    this.assembly = asm;
    if (!this.outputEditor || !this.outputEditor.getModel()) return;
    var editorModel = this.outputEditor.getModel();
    var msg = '<No assembly generated>';
    if (asm.length) {
        msg = _.pluck(asm, 'text').join('\n');
    } else if (filteredCount > 0) {
        msg = '<No assembly to display (~' + filteredCount + (filteredCount === 1 ? ' line' : ' lines') + ' filtered)>';
    }

    if (asm.length === 1 && result.code !== 0 && (result.stderr || result.stdout)) {
        msg += '\n\n# For more information see the output window';
        if (!this.isOutputOpened) {
            msg += '\n# To open the output window, click or drag the "Output" icon at the bottom of this window';
        }
    }

    editorModel.setValue(msg);

    if (!this.awaitingInitialResults) {
        if (this.selection) {
            this.outputEditor.setSelection(this.selection);
            this.outputEditor.revealLinesInCenter(
                this.selection.startLineNumber, this.selection.endLineNumber);
        }
        this.awaitingInitialResults = true;
    } else {
        var visibleRanges = this.outputEditor.getVisibleRanges();
        var currentTopLine =
            visibleRanges.length > 0 ? visibleRanges[0].startLineNumber : 1;
        this.outputEditor.revealLine(currentTopLine);
    }

    this.decorations.labelUsages = [];
    _.each(this.assembly, _.bind(function (obj, line) {
        if (!obj.labels || !obj.labels.length) return;

        obj.labels.forEach(function (label) {
            this.decorations.labelUsages.push({
                range: new monaco.Range(line + 1, label.range.startCol,
                    line + 1, label.range.endCol),
                options: {
                    inlineClassName: 'asm-label-link',
                    hoverMessage: [{
                        value: 'Ctrl + Left click to follow the label',
                    }],
                },
            });
        }, this);
    }, this));
    this.updateDecorations();

    var codeLenses = [];
    if (this.getEffectiveFilters().binary) {
        this.setBinaryMargin();
        _.each(this.assembly, _.bind(function (obj, line) {
            if (obj.opcodes) {
                var address = obj.address ? obj.address.toString(16) : '';
                codeLenses.push({
                    range: {
                        startLineNumber: line + 1,
                        startColumn: 1,
                        endLineNumber: line + 2,
                        endColumn: 1,
                    },
                    id: address,
                    command: {
                        title: obj.opcodes.join(' '),
                    },
                });
            }
        }, this));
    } else {
        this.setNormalMargin();
    }

    codeLensHandler.registerLensesForCompiler(this.id, editorModel, codeLenses);

    var currentAsmLang = editorModel.getModeId();
    codeLensHandler.registerProviderForLanguage(currentAsmLang);
};

function errorResult(text) {
    return {asm: fakeAsm(text), code: -1, stdout: '', stderr: ''};
}

function fakeAsm(text) {
    return [{text: text, source: null, fake: true}];
}

Compiler.prototype.onCompileResponse = function (request, result, cached) {
    console.log('inside onCompileResponse',request,result,cached);
    // Delete trailing empty lines
    if ($.isArray(result.asm)) {
        var indexToDiscard = _.findLastIndex(result.asm, function (line) {
            return !_.isEmpty(line.text);
        });
        result.asm.splice(indexToDiscard + 1, result.asm.length - indexToDiscard);
    }
    // Save which source produced this change. It should probably be saved earlier though
    result.source = this.source;
    this.lastResult = result;
    var timeTaken = Math.max(0, Date.now() - this.pendingRequestSentAt);
    this.lastTimeTaken = timeTaken;
    var wasRealReply = this.pendingRequestSentAt > 0;
    this.pendingRequestSentAt = 0;
    ga.proxy('send', {
        hitType: 'event',
        eventCategory: 'Compile',
        eventAction: request.compiler,
        eventLabel: request.options.userArguments,
        eventValue: cached ? 1 : 0,
    });
    ga.proxy('send', {
        hitType: 'timing',
        timingCategory: 'Compile',
        timingVar: request.compiler,
        timingValue: timeTaken,
    });

    this.labelDefinitions = result.labelDefinitions || {};
    this.setAssembly(result, result.filteredCount || 0);

    var stdout = result.stdout || [];
    var stderr = result.stderr || [];

    var allText = _.pluck(stdout.concat(stderr), 'text').join('\n');
    var failed = result.code !== 0;
    var warns = !failed && !!allText;
    this.handleCompilationStatus({code: failed ? 3 : (warns ? 2 : 1), compilerOut: result.code});
    this.outputTextCount.text(stdout.length);
    this.outputErrorCount.text(stderr.length);
    if (this.isOutputOpened) {
        this.outputBtn.prop('title', '');
    } else {
        this.outputBtn.prop('title', allText.replace(/\x1b\[[0-9;]*m(.\[K)?/g, ''));
    }
    var infoLabelText = '';
    if (cached) {
        infoLabelText = ' - cached';
    } else if (wasRealReply) {
        infoLabelText = ' - ' + timeTaken + 'ms';
    }

    if (result.asmSize !== undefined) {
        infoLabelText += ' (' + result.asmSize + 'B)';
    }

    if (result.filteredCount && result.filteredCount > 0) {
        infoLabelText += ' ~' + result.filteredCount + (result.filteredCount === 1 ? ' line' : ' lines') + ' filtered';
    }

    this.compileInfoLabel.text(infoLabelText);

    this.postCompilationResult(request, result);
    this.eventHub.emit('compileResult', this.id, this.compiler, result, languages[this.currentLangId]);

    if (this.nextRequest) {
        var next = this.nextRequest;
        this.nextRequest = null;
        this.sendCompile(next);
    }
};

Compiler.prototype.postCompilationResult = function (request, result) {
    if (result.popularArguments) {
        this.handlePopularArgumentsResult(result.popularArguments);
    } else {
        this.compilerService.requestPopularArguments(this.compiler.id, request.options.userArguments).then(
            _.bind(function (result) {
                if (result && result.result) {
                    this.handlePopularArgumentsResult(result.result);
                }
            }, this)
        );
    }

    this.updateButtons();

    this.checkForUnwiseArguments(result.compilationOptions);
    this.setCompilationOptionsPopover(result.compilationOptions ? result.compilationOptions.join(' ') : '');
};

Compiler.prototype.onEditorChange = function (editor, source, langId, compilerId) {
    if (editor === this.sourceEditorId && langId === this.currentLangId &&
        (compilerId === undefined || compilerId === this.id)) {
        this.source = source;
        if (this.settings.compileOnChange) {
            this.compile();
        }
    }
};

Compiler.prototype.onToolOpened = function (compilerId, toolSettings) {
    if (this.id === compilerId) {
        var toolId = toolSettings.toolId;

        var buttons = this.toolsMenu.find('button');
        $(buttons).each(_.bind(function (idx, button) {
            var toolButton = $(button);
            var toolName = toolButton.data('toolname');
            if (toolId === toolName) {
                toolButton.prop('disabled', true);
            }
        }, this));

        this.compile(false, toolSettings);
    }
};

Compiler.prototype.onToolClosed = function (compilerId, toolSettings) {
    if (this.id === compilerId) {
        var toolId = toolSettings.toolId;

        var buttons = this.toolsMenu.find('button');
        $(buttons).each(_.bind(function (idx, button) {
            var toolButton = $(button);
            var toolName = toolButton.data('toolname');
            if (toolId === toolName) {
                toolButton.prop('disabled', !this.supportsTool(toolId));
            }
        }, this));
    }
};

Compiler.prototype.onOutputOpened = function (compilerId) {
    if (this.id === compilerId) {
        this.isOutputOpened = true;
        this.outputBtn.prop('disabled', true);
        this.resendResult();
    }
};

Compiler.prototype.onOutputClosed = function (compilerId) {
    if (this.id === compilerId) {
        this.isOutputOpened = false;
        this.outputBtn.prop('disabled', false);
    }
};

Compiler.prototype.onOptViewClosed = function (id) {
    if (this.id === id) {
        this.wantOptInfo = false;
        this.optViewOpen = false;
        this.optButton.prop('disabled', this.optViewOpen);
    }
};

Compiler.prototype.onAstViewOpened = function (id) {
    if (this.id === id) {
        this.astButton.prop('disabled', true);
        this.astViewOpen = true;
        this.compile();
    }
};

Compiler.prototype.onToolSettingsChange = function (id) {
    if (this.id === id) {
        this.compile();
    }
};

Compiler.prototype.onAstViewClosed = function (id) {
    if (this.id === id) {
        this.astButton.prop('disabled', false);
        this.astViewOpen = false;
    }
};

Compiler.prototype.onIrViewOpened = function (id) {
    if (this.id === id) {
        this.irButton.prop('disabled', true);
        this.irViewOpen = true;
        this.compile();
    }
};

Compiler.prototype.onIrViewClosed = function (id) {
    if (this.id === id) {
        this.irButton.prop('disabled', false);
        this.irViewOpen = false;
    }
};

Compiler.prototype.onGccDumpUIInit = function (id) {
    if (this.id === id) {
        this.compile();
    }
};

Compiler.prototype.onGccDumpFiltersChanged = function (id, filters, reqCompile) {
    if (this.id === id) {
        this.treeDumpEnabled = (filters.treeDump !== false);
        this.rtlDumpEnabled = (filters.rtlDump !== false);
        this.ipaDumpEnabled = (filters.ipaDump !== false);
        this.dumpFlags = {
            address: filters.addressOption !== false,
            slim: filters.slimOption !== false,
            raw: filters.rawOption !== false,
            details: filters.detailsOption !== false,
            stats: filters.statsOption !== false,
            blocks: filters.blocksOption !== false,
            vops: filters.vopsOption !== false,
            lineno: filters.linenoOption !== false,
            uid: filters.uidOption !== false,
            all: filters.allOption !== false,
        };

        if (reqCompile) {
            this.compile();
        }
    }
};

Compiler.prototype.onGccDumpPassSelected = function (id, passId, reqCompile) {
    if (this.id === id) {
        this.gccDumpPassSelected = passId;

        if (reqCompile && passId !== '') {
            this.compile();
        }
    }
};

Compiler.prototype.onGccDumpViewOpened = function (id) {
    if (this.id === id) {
        this.gccDumpButton.prop('disabled', true);
        this.gccDumpViewOpen = true;
    }
};

Compiler.prototype.onGccDumpViewClosed = function (id) {
    if (this.id === id) {
        this.gccDumpButton.prop('disabled', !this.compiler.supportsGccDump);
        this.gccDumpViewOpen = false;

        delete this.gccDumpPassSelected;
        delete this.treeDumpEnabled;
        delete this.rtlDumpEnabled;
        delete this.ipaDumpEnabled;
        delete this.dumpFlags;
    }
};

Compiler.prototype.onOptViewOpened = function (id) {
    if (this.id === id) {
        this.optViewOpen = true;
        this.wantOptInfo = true;
        this.optButton.prop('disabled', this.optViewOpen);
        this.compile();
    }
};

Compiler.prototype.onCfgViewOpened = function (id) {
    if (this.id === id) {
        this.cfgButton.prop('disabled', true);
        this.cfgViewOpen = true;
        this.compile();
    }
};

Compiler.prototype.onCodeCfgViewOpened = function (id) {
    if (this.id === id) {
        this.codeCfgButton.prop('disabled', true);
        this.codeCfgViewOpen = true;
        this.compile();
    }
};

Compiler.prototype.onCfgViewClosed = function (id) {
    if (this.id === id) {
        this.cfgViewOpen = false;
        this.cfgButton.prop('disabled', this.getEffectiveFilters().binary);
    }
};

Compiler.prototype.onCodeCfgViewClosed = function (id) {
    if (this.id === id) {
        this.codeCfgViewOpen = false;
        this.codeCfgButton.prop('disabled', this.getEffectiveFilters().binary);
    }
};

Compiler.prototype.initFilterButtons = function () {
    this.filterBinaryButton = this.domRoot.find('[data-bind=\'binary\']');
    this.filterBinaryTitle = this.filterBinaryButton.prop('title');

    this.filterExecuteButton = this.domRoot.find('[data-bind=\'execute\']');
    this.filterExecuteTitle = this.filterExecuteButton.prop('title');

    this.filterLabelsButton = this.domRoot.find('[data-bind=\'labels\']');
    this.filterLabelsTitle = this.filterLabelsButton.prop('title');

    this.filterDirectivesButton = this.domRoot.find('[data-bind=\'directives\']');
    this.filterDirectivesTitle = this.filterDirectivesButton.prop('title');

    this.filterLibraryCodeButton = this.domRoot.find('[data-bind=\'libraryCode\']');
    this.filterLibraryCodeTitle = this.filterLibraryCodeButton.prop('title');

    this.filterCommentsButton = this.domRoot.find('[data-bind=\'commentOnly\']');
    this.filterCommentsTitle = this.filterCommentsButton.prop('title');

    this.filterTrimButton = this.domRoot.find('[data-bind=\'trim\']');
    this.filterTrimTitle = this.filterTrimButton.prop('title');

    this.filterIntelButton = this.domRoot.find('[data-bind=\'intel\']');
    this.filterIntelTitle = this.filterIntelButton.prop('title');

    this.filterDemangleButton = this.domRoot.find('[data-bind=\'demangle\']');
    this.filterDemangleTitle = this.filterDemangleButton.prop('title');

    this.noBinaryFiltersButtons = this.domRoot.find('.nonbinary');
};

Compiler.prototype.initButtons = function (state) {
    this.filters = new Toggles(this.domRoot.find('.filters'), patchOldFilters(state.filters));

    this.optButton = this.domRoot.find('.btn.view-optimization');
    this.astButton = this.domRoot.find('.btn.view-ast');
    this.irButton = this.domRoot.find('.btn.view-ir');
    this.gccDumpButton = this.domRoot.find('.btn.view-gccdump');
    this.cfgButton = this.domRoot.find('.btn.view-cfg');
    this.codeCfgButton = this.domRoot.find('.btn.view-code-cfg');
    this.executorButton = this.domRoot.find('.create-executor');
    this.libsButton = this.domRoot.find('.btn.show-libs');

    this.compileInfoLabel = this.domRoot.find('.compile-info');
    this.compileClearCache = this.domRoot.find('.clear-cache');

    this.outputBtn = this.domRoot.find('.output-btn');
    this.outputTextCount = this.domRoot.find('span.text-count');
    this.outputErrorCount = this.domRoot.find('span.err-count');

    this.optionsField = this.domRoot.find('.options');
    this.prependOptions = this.domRoot.find('.prepend-options');
    this.fullCompilerName = this.domRoot.find('.full-compiler-name');
    this.fullTimingInfo = this.domRoot.find('.full-timing-info');
    this.setCompilationOptionsPopover(this.compiler ? this.compiler.options : null);
    // Dismiss on any click that isn't either in the opening element, inside
    // the popover or on any alert
    $(document).on('mouseup', _.bind(function (e) {
        var target = $(e.target);
        if (!target.is(this.prependOptions) && this.prependOptions.has(target).length === 0 &&
            target.closest('.popover').length === 0)
            this.prependOptions.popover('hide');

        if (!target.is(this.fullCompilerName) && this.fullCompilerName.has(target).length === 0 &&
            target.closest('.popover').length === 0)
            this.fullCompilerName.popover('hide');
    }, this));

    this.initFilterButtons(state);

    this.filterExecuteButton.toggle(options.supportsExecute);
    this.filterLibraryCodeButton.toggle(options.supportsLibraryCodeFilter);

    this.optionsField.val(this.options);

    this.shortCompilerName = this.domRoot.find('.short-compiler-name');
    this.compilerPicker = this.domRoot.find('.compiler-picker');
    this.setCompilerVersionPopover('', '');

    this.topBar = this.domRoot.find('.top-bar');
    this.bottomBar = this.domRoot.find('.bottom-bar');
    this.statusLabel = this.domRoot.find('.status-text');

    this.hideable = this.domRoot.find('.hideable');
    this.statusIcon = this.domRoot.find('.status-icon');

    this.monacoPlaceholder = this.domRoot.find('.monaco-placeholder');

    this.initPanerButtons();
};

Compiler.prototype.onLibsChanged = function () {
    this.saveState();
    this.compile();
};

Compiler.prototype.initLibraries = function (state) {
    this.libsWidget = new Libraries.Widget(this.currentLangId, this.compiler, this.libsButton,
        state, _.bind(this.onLibsChanged, this));
};

Compiler.prototype.updateLibraries = function () {
    if (this.libsWidget) this.libsWidget.setNewLangId(this.currentLangId, this.compiler.id, this.compiler.libs);
};

Compiler.prototype.supportsTool = function (toolId) {
    if (!this.compiler) return;

    return _.find(this.compiler.tools, function (tool) {
        return (tool.tool.id === toolId);
    });
};

Compiler.prototype.initToolButton = function (togglePannerAdder, button, toolId) {
    var createToolView = _.bind(function () {
        var args = '';
        var langTools = options.tools[this.currentLangId];
        if (langTools && langTools[toolId] && langTools[toolId].tool && langTools[toolId].tool.args !== undefined) {
            args = langTools[toolId].tool.args;
        }
        return Components.getToolViewWith(this.id, this.sourceEditorId, toolId, args);
    }, this);

    this.container.layoutManager
        .createDragSource(button, createToolView)
        ._dragListener.on('dragStart', togglePannerAdder);

    button.click(_.bind(function () {
        button.prop('disabled', true);
        var insertPoint = this.hub.findParentRowOrColumn(this.container) ||
            this.container.layoutManager.root.contentItems[0];
        insertPoint.addChild(createToolView);
    }, this));
};

Compiler.prototype.initToolButtons = function (togglePannerAdder) {
    this.toolsMenu = this.domRoot.find('.toolsmenu');
    this.toolsMenu.empty();

    if (!this.compiler) return;

    var addTool = _.bind(function (toolName, title) {
        var btn = $('<button class=\'dropdown-item btn btn-light btn-sm\'>');
        btn.addClass('view-' + toolName);
        btn.data('toolname', toolName);
        btn.append('<span class=\'dropdown-icon fas fa-cog\'></span>' + title);
        this.toolsMenu.append(btn);

        if (toolName !== 'none') {
            this.initToolButton(togglePannerAdder, btn, toolName);
        }
    }, this);

    if (_.isEmpty(this.compiler.tools)) {
        addTool('none', 'No tools available');
    } else {
        _.each(this.compiler.tools, function (tool) {
            addTool(tool.tool.id, tool.tool.name);
        });
    }
};

Compiler.prototype.enableToolButtons = function () {
    var activeTools = this.getActiveTools();

    var buttons = this.toolsMenu.find('button');
    $(buttons).each(_.bind(function (idx, button) {
        var toolButton = $(button);
        var toolName = toolButton.data('toolname');
        toolButton.prop('disabled',
            !(this.supportsTool(toolName)
                && !this.isToolActive(activeTools, toolName)));
    }, this));
};

Compiler.prototype.updateButtons = function () {
    if (!this.compiler) return;
    var filters = this.getEffectiveFilters();
    // We can support intel output if the compiler supports it, or if we're compiling
    // to binary (as we can disassemble it however we like).
    var formatFilterTitle = function (button, title) {
        button.prop('title', '[' + (button.hasClass('active') ? 'ON' : 'OFF') + '] ' + title +
            (button.prop('disabled') ? ' [LOCKED]' : ''));
    };
    var isIntelFilterDisabled = !this.compiler.supportsIntel && !filters.binary;
    this.filterIntelButton.prop('disabled', isIntelFilterDisabled);
    formatFilterTitle(this.filterIntelButton, this.filterIntelTitle);
    // Disable binary support on compilers that don't work with it.
    this.filterBinaryButton.prop('disabled', !this.compiler.supportsBinary);
    formatFilterTitle(this.filterBinaryButton, this.filterBinaryTitle);
    this.filterExecuteButton.prop('disabled', !this.compiler.supportsExecute);
    formatFilterTitle(this.filterExecuteButton, this.filterExecuteTitle);
    // Disable demangle for compilers where we can't access it
    this.filterDemangleButton.prop('disabled', !this.compiler.supportsDemangle);
    formatFilterTitle(this.filterDemangleButton, this.filterDemangleTitle);
    // Disable any of the options which don't make sense in binary mode.
    var noBinaryFiltersDisabled = !!filters.binary && !this.compiler.supportsFiltersInBinary;
    this.noBinaryFiltersButtons.prop('disabled', noBinaryFiltersDisabled);

    this.filterLibraryCodeButton.prop('disabled', !this.compiler.supportsLibraryCodeFilter);
    formatFilterTitle(this.filterLibraryCodeButton, this.filterLibraryCodeTitle);

    this.filterLabelsButton.prop('disabled', this.compiler.disabledFilters.indexOf('labels') !== -1);
    formatFilterTitle(this.filterLabelsButton, this.filterLabelsTitle);
    this.filterDirectivesButton.prop('disabled', this.compiler.disabledFilters.indexOf('directives') !== -1);
    formatFilterTitle(this.filterDirectivesButton, this.filterDirectivesTitle);
    this.filterCommentsButton.prop('disabled', this.compiler.disabledFilters.indexOf('commentOnly') !== -1);
    formatFilterTitle(this.filterCommentsButton, this.filterCommentsTitle);
    this.filterTrimButton.prop('disabled', this.compiler.disabledFilters.indexOf('trim') !== -1);
    formatFilterTitle(this.filterTrimButton, this.filterTrimTitle);

    this.optButton.prop('disabled', this.optViewOpen || !this.compiler.supportsOptOutput);
    this.astButton.prop('disabled', this.astViewOpen || !this.compiler.supportsAstView);
    this.irButton.prop('disabled', this.irViewOpen || !this.compiler.supportsIrView);
    this.cfgButton.prop('disabled', this.cfgViewOpen || !this.compiler.supportsCfg);
    this.codeCfgButton.prop('disabled', this.codeCfgViewOpen || !this.compiler.supportsCfg);
    this.gccDumpButton.prop('disabled', this.gccDumpViewOpen || !this.compiler.supportsGccDump);

    this.executorButton.prop('disabled', !this.compiler.supportsExecute);

    this.enableToolButtons();
};

Compiler.prototype.handlePopularArgumentsResult = function (result) {
    var popularArgumentsMenu = this.domRoot.find('div.populararguments div.dropdown-menu');
    popularArgumentsMenu.html('');

    if (result) {
        var addedOption = false;

        _.forEach(result, _.bind(function (arg, key) {
            var argumentButton = $(document.createElement('button'));
            argumentButton.addClass('dropdown-item btn btn-light btn-sm');
            argumentButton.attr('title', arg.description);
            argumentButton.data('arg', key);
            argumentButton.html(
                '<div class=\'argmenuitem\'>' +
                '<span class=\'argtitle\'>' + _.escape(key) + '</span>' +
                '<span class=\'argdescription\'>' + arg.description + '</span>' +
                '</div>');

            argumentButton.click(_.bind(function () {
                var button = argumentButton;
                var curOptions = this.optionsField.val();
                if (curOptions.length > 0) {
                    this.optionsField.val(curOptions + ' ' + button.data('arg'));
                } else {
                    this.optionsField.val(button.data('arg'));
                }

                this.optionsField.change();
            }, this));

            popularArgumentsMenu.append(argumentButton);
            addedOption = true;
        }, this));

        if (!addedOption) {
            $('div.populararguments').hide();
        } else {
            $('div.populararguments').show();
        }
    } else {
        $('div.populararguments').hide();
    }
};

Compiler.prototype.onFontScale = function () {
    this.saveState();
};

Compiler.prototype.initListeners = function () {
    this.filters.on('change', _.bind(this.onFilterChange, this));
    this.fontScale.on('change', _.bind(this.onFontScale, this));

    this.container.on('destroy', this.close, this);
    this.container.on('resize', this.resize, this);
    this.container.on('shown', this.resize, this);
    this.container.on('open', function () {
        this.eventHub.emit('compilerOpen', this.id, this.sourceEditorId);
    }, this);
    this.eventHub.on('editorChange', this.onEditorChange, this);
    this.eventHub.on('editorClose', this.onEditorClose, this);
    this.eventHub.on('colours', this.onColours, this);
    this.eventHub.on('resendCompilation', this.onResendCompilation, this);
    this.eventHub.on('findCompilers', this.sendCompiler, this);
    this.eventHub.on('compilerSetDecorations', this.onCompilerSetDecorations, this);
    this.eventHub.on('panesLinkLine', this.onPanesLinkLine, this);
    this.eventHub.on('settingsChange', this.onSettingsChange, this);
    this.eventHub.on('requestCompilation', this.onRequestCompilation, this);

    this.eventHub.on('toolSettingsChange', this.onToolSettingsChange, this);
    this.eventHub.on('toolOpened', this.onToolOpened, this);
    this.eventHub.on('toolClosed', this.onToolClosed, this);

    this.eventHub.on('optViewOpened', this.onOptViewOpened, this);
    this.eventHub.on('optViewClosed', this.onOptViewClosed, this);
    this.eventHub.on('astViewOpened', this.onAstViewOpened, this);
    this.eventHub.on('astViewClosed', this.onAstViewClosed, this);
    this.eventHub.on('irViewOpened', this.onIrViewOpened, this);
    this.eventHub.on('irViewClosed', this.onIrViewClosed, this);
    this.eventHub.on('outputOpened', this.onOutputOpened, this);
    this.eventHub.on('outputClosed', this.onOutputClosed, this);

    this.eventHub.on('gccDumpPassSelected', this.onGccDumpPassSelected, this);
    this.eventHub.on('gccDumpFiltersChanged', this.onGccDumpFiltersChanged, this);
    this.eventHub.on('gccDumpViewOpened', this.onGccDumpViewOpened, this);
    this.eventHub.on('gccDumpViewClosed', this.onGccDumpViewClosed, this);
    this.eventHub.on('gccDumpUIInit', this.onGccDumpUIInit, this);

    this.eventHub.on('cfgViewOpened', this.onCfgViewOpened, this);
    this.eventHub.on('cfgViewClosed', this.onCfgViewClosed, this);
    this.eventHub.on('resize', this.resize, this);
    this.eventHub.on('requestFilters', function (id) {
        if (id === this.id) {
            this.eventHub.emit('filtersChange', this.id, this.getEffectiveFilters());
        }
    }, this);
    this.eventHub.on('requestCompiler', function (id) {
        if (id === this.id) {
            this.sendCompiler();
        }
    }, this);
    this.eventHub.on('languageChange', this.onLanguageChange, this);

    this.fullTimingInfo
        .off('click')
        .click(_.bind(function () {
            timingInfo.run(_.bind(function () {
            }, this), this.lastResult, this.lastTimeTaken);
        }, this));
};

Compiler.prototype.initCallbacks = function () {
    this.initListeners();

    var optionsChange = _.debounce(_.bind(function (e) {
        this.onOptionsChange($(e.target).val());
    }, this), 800);

    this.optionsField
        .on('change', optionsChange)
        .on('keyup', optionsChange);

    this.mouseMoveThrottledFunction = _.throttle(_.bind(this.onMouseMove, this), 50);
    this.outputEditor.onMouseMove(_.bind(function (e) {
        this.mouseMoveThrottledFunction(e);
    }, this));

    this.cursorSelectionThrottledFunction =
        _.throttle(_.bind(this.onDidChangeCursorSelection, this), 500);
    this.outputEditor.onDidChangeCursorSelection(_.bind(function (e) {
        this.cursorSelectionThrottledFunction(e);
    }, this));

    this.mouseUpThrottledFunction = _.throttle(_.bind(this.onMouseUp, this), 50);
    this.outputEditor.onMouseUp(_.bind(function (e) {
        this.mouseUpThrottledFunction(e);
    }, this));

    this.compileClearCache.on('click', _.bind(function () {
        this.compilerService.cache.reset();
        this.compile(true);
    }, this));

    // Dismiss the popover on escape.
    $(document).on('keyup.editable', _.bind(function (e) {
        if (e.which === 27) {
            this.libsButton.popover('hide');
        }
    }, this));

    // Dismiss on any click that isn't either in the opening element, inside
    // the popover or on any alert
    $(document).on('click', _.bind(function (e) {
        var elem = this.libsButton;
        var target = $(e.target);
        if (!target.is(elem) && elem.has(target).length === 0 && target.closest('.popover').length === 0) {
            elem.popover('hide');
        }
    }, this));

    this.eventHub.on('initialised', this.undefer, this);
};

Compiler.prototype.onOptionsChange = function (options) {
    if (this.options !== options) {
        this.options = options;
        this.saveState();
        this.compile();
        this.updateButtons();
        this.sendCompiler();
    }
};

Compiler.prototype.checkForUnwiseArguments = function (optionsArray) {
    // Check if any options are in the unwiseOptions array and remember them
    var unwiseOptions = _.intersection(optionsArray, this.compiler.unwiseOptions);

    var options = unwiseOptions.length === 1 ? 'Option ' : 'Options ';
    var names = unwiseOptions.join(', ');
    var are = unwiseOptions.length === 1 ? ' is ' : ' are ';
    var msg = options + names + are + 'not recommended, as behaviour might change based on server hardware.';

    if (unwiseOptions.length > 0) {
        this.alertSystem.notify(msg, {group: 'unwiseOption', collapseSimilar: true});
    }
};

Compiler.prototype.updateCompilerInfo = function () {
    this.updateCompilerName();
    if (this.compiler) {
        if (this.compiler.notification) {
            this.alertSystem.notify(this.compiler.notification, {
                group: 'compilerwarning',
                alertClass: 'notification-info',
                dismissTime: 5000,
            });
        }
        this.prependOptions.data('content', this.compiler.options);
    }
};

Compiler.prototype.updateCompilerUI = function () {
    var panerDropdown = this.domRoot.find('.pane-dropdown');
    var togglePannerAdder = function () {
        panerDropdown.dropdown('toggle');
    };
    this.initToolButtons(togglePannerAdder);
    this.updateButtons();
    this.updateCompilerInfo();
    // Resize in case the new compiler name is too big
    this.resize();
};

Compiler.prototype.onCompilerChange = function (value) {
    this.compiler = this.compilerService.findCompiler(this.currentLangId, value);
    this.updateLibraries();
    this.saveState();
    this.compile();
    this.updateCompilerUI();
    this.sendCompiler();
};

Compiler.prototype.sendCompiler = function () {
    this.eventHub.emit('compiler', this.id, this.compiler, this.options, this.sourceEditorId);
};

Compiler.prototype.onEditorClose = function (editor) {
    if (editor === this.sourceEditorId) {
        // We can't immediately close as an outer loop somewhere in GoldenLayout is iterating over
        // the hierarchy. We can't modify while it's being iterated over.
        this.close();
        _.defer(function (self) {
            self.container.close();
        }, this);
    }
};

Compiler.prototype.onFilterChange = function () {
    var filters = this.getEffectiveFilters();
    this.eventHub.emit('filtersChange', this.id, filters);
    this.saveState();
    this.compile();
    this.updateButtons();
};

Compiler.prototype.currentState = function () {
    var state = {
        id: this.id,
        compiler: this.compiler ? this.compiler.id : '',
        source: this.sourceEditorId,
        options: this.options,
        // NB must *not* be effective filters
        filters: this.filters.get(),
        wantOptInfo: this.wantOptInfo,
        libs: this.libsWidget.get(),
        lang: this.currentLangId,
        selection: this.selection,
    };
    this.fontScale.addState(state);
    return state;
};

Compiler.prototype.saveState = function () {
    this.container.setState(this.currentState());
};

Compiler.prototype.onColours = function (editor, colours, scheme) {
    if (editor === this.sourceEditorId) {
        var asmColours = {};
        _.each(this.assembly, function (x, index) {
            if (x.source && x.source.file === null && x.source.line > 0) {
                asmColours[index] = colours[x.source.line - 1];
            }
        });
        this.colours = colour.applyColours(this.outputEditor, asmColours, scheme, this.colours);
    }
};

Compiler.prototype.getCompilerName = function () {
    return this.compiler ? this.compiler.name : 'No compiler set';
};


Compiler.prototype.getLanguageName = function () {
    var lang = options.languages[this.currentLangId];
    return lang ? lang.name : '?';
};

Compiler.prototype.getPaneName = function () {
    var langName = this.getLanguageName();
    var compName = this.getCompilerName();
    return compName + ' (Editor #' + this.sourceEditorId + ', Compiler #' + this.id + ') ' + langName;
};

Compiler.prototype.updateCompilerName = function () {
    var compilerName = this.getCompilerName();
    var compilerVersion = this.compiler ? this.compiler.version : '';
    var compilerNotification = this.compiler ? this.compiler.notification : '';
    this.container.setTitle(this.getPaneName());
    this.shortCompilerName.text(compilerName);
    this.setCompilerVersionPopover(compilerVersion, compilerNotification);
};

Compiler.prototype.resendResult = function () {
    if (!$.isEmptyObject(this.lastResult)) {
        this.eventHub.emit('compileResult', this.id, this.compiler, this.lastResult);
        return true;
    }
    return false;
};

Compiler.prototype.onResendCompilation = function (id) {
    if (id === this.id) {
        this.resendResult();
    }
};

Compiler.prototype.updateDecorations = function () {
    this.prevDecorations = this.outputEditor.deltaDecorations(
        this.prevDecorations, _.flatten(_.values(this.decorations)));
};

Compiler.prototype.clearLinkedLines = function () {
    this.decorations.linkedCode = [];
    this.updateDecorations();
};

Compiler.prototype.onPanesLinkLine = function (compilerId, lineNumber, colBegin, colEnd, revealLine, sender) {
    if (Number(compilerId) === this.id) {
        var lineNums = [];
        var directlyLinkedLineNums = [];
        var signalFromAnotherPane = sender !== this.getPaneName();
        _.each(this.assembly, function (asmLine, i) {
            if (asmLine.source && asmLine.source.file === null && asmLine.source.line === lineNumber) {
                var line = i + 1;
                lineNums.push(line);
                var currentCol = asmLine.source.column;
                if (signalFromAnotherPane && currentCol && colBegin <= currentCol && currentCol <= colEnd) {
                    directlyLinkedLineNums.push(line);
                }
            }
        });
        if (revealLine && lineNums[0]) this.outputEditor.revealLineInCenter(lineNums[0]);
        var lineClass = sender !== this.getPaneName() ? 'linked-code-decoration-line' : '';
        var linkedLinesDecoration = _.map(lineNums, function (line) {
            return {
                range: new monaco.Range(line, 1, line, 1),
                options: {
                    isWholeLine: true,
                    linesDecorationsClassName: 'linked-code-decoration-margin',
                    className: lineClass,
                },
            };
        });
        var directlyLinkedLinesDecoration = _.map(directlyLinkedLineNums, function (line) {
            return {
                range: new monaco.Range(line, 1, line, 1),
                options: {
                    isWholeLine: true,
                    inlineClassName: 'linked-code-decoration-column',
                },
            };
        });
        this.decorations.linkedCode = linkedLinesDecoration.concat(directlyLinkedLinesDecoration);
        if (this.linkedFadeTimeoutId !== -1) {
            clearTimeout(this.linkedFadeTimeoutId);
        }
        this.linkedFadeTimeoutId = setTimeout(_.bind(function () {
            this.clearLinkedLines();
            this.linkedFadeTimeoutId = -1;
        }, this), 5000);
        this.updateDecorations();
    }
};

Compiler.prototype.onCompilerSetDecorations = function (id, lineNums, revealLine) {
    if (Number(id) === this.id) {
        if (revealLine && lineNums[0]) this.outputEditor.revealLineInCenter(lineNums[0]);
        this.decorations.linkedCode = _.map(lineNums, function (line) {
            return {
                range: new monaco.Range(line, 1, line, 1),
                options: {
                    isWholeLine: true,
                    linesDecorationsClassName: 'linked-code-decoration-margin',
                    inlineClassName: 'linked-code-decoration-inline',
                },
            };
        });
        this.updateDecorations();
    }
};

Compiler.prototype.setCompilationOptionsPopover = function (content) {
    this.prependOptions.popover('dispose');
    this.prependOptions.popover({
        content: content || 'No options in use',
        template: '<div class="popover' +
            (content ? ' compiler-options-popover' : '') +
            '" role="tooltip"><div class="arrow"></div>' +
            '<h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    });
};

Compiler.prototype.setCompilerVersionPopover = function (version, notification) {
    this.fullCompilerName.popover('dispose');
    // `notification` contains HTML from a config file, so is 'safe'.
    // `version` comes from compiler output, so isn't, and is escaped.
    this.fullCompilerName.popover({
        html: true,
        title: notification ? $.parseHTML('<span>Compiler Version: ' + notification + '</span>')[0] :
            'Full compiler version',
        content: _.escape(version) || '',
        template: '<div class="popover' +
            (version ? ' compiler-options-popover' : '') +
            '" role="tooltip"><div class="arrow"></div>' +
            '<h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    });
};

Compiler.prototype.onRequestCompilation = function (editorId) {
    if (editorId === this.sourceEditorId) {
        this.compile();
    }
};

Compiler.prototype.onSettingsChange = function (newSettings) {
    var before = this.settings;
    this.settings = _.clone(newSettings);
    if (!before.lastHoverShowSource && this.settings.hoverShowSource) {
        this.onCompilerSetDecorations(this.id, []);
    }
    this.outputEditor.updateOptions({
        contextmenu: this.settings.useCustomContextMenu,
        minimap: {
            enabled: this.settings.showMinimap && !options.embedded,
        },
        fontFamily: this.settings.editorsFFont,
        fontLigatures: this.settings.editorsFLigatures,
    });
};

var hexLike = /^(#?[$]|0x)([0-9a-fA-F]+)$/;
var hexLike2 = /^(#?)([0-9a-fA-F]+)H$/;
var decimalLike = /^(#?)(-?[0-9]+)$/;

function getNumericToolTip(value) {
    var match = hexLike.exec(value) || hexLike2.exec(value);
    if (match) {
        return value + ' = ' + bigInt(match[2], 16).toString(10);
    }
    match = decimalLike.exec(value);
    if (match) {
        var asBig = bigInt(match[2]);
        if (asBig.isNegative()) {
            asBig = bigInt('ffffffffffffffff', 16).and(asBig);
        }
        return value + ' = 0x' + asBig.toString(16).toUpperCase();
    }

    return null;
}

function getAsmInfo(opcode, instructionSet) {
    var cacheName = 'asm/' + (instructionSet ? (instructionSet + '/') : '') + opcode;
    var cached = OpcodeCache.get(cacheName);
    if (cached) {
        return Promise.resolve(cached.found ? cached.result : null);
    }
    var base = window.httpRoot;
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: 'GET',
            url: window.location.origin + base + 'api/asm/' + (instructionSet ? (instructionSet + '/') : '') + opcode,
            dataType: 'json',  // Expected,
            contentType: 'text/plain',  // Sent
            success: function (result) {
                OpcodeCache.set(cacheName, result);
                resolve(result.found ? result.result : null);
            },
            error: function (result) {
                reject(result);
            },
            cache: true,
        });
    });
}

Compiler.prototype.onDidChangeCursorSelection = function (e) {
    if (this.awaitingInitialResults) {
        this.selection = e.selection;
        this.saveState();
    }
};

Compiler.prototype.onMouseUp = function (e) {
    if (e === null || e.target === null || e.target.position === null) return;

    if (e.event.ctrlKey && e.event.leftButton) {
        this.jumpToLabel(e.target.position);
    }
};

Compiler.prototype.onMouseMove = function (e) {
    if (e === null || e.target === null || e.target.position === null) return;
    if (this.settings.hoverShowSource === true && this.assembly) {
        this.clearLinkedLines();
        var hoverAsm = this.assembly[e.target.position.lineNumber - 1];
        if (hoverAsm) {
            // We check that we actually have something to show at this point!
            var sourceLine = -1;
            var sourceColBegin = -1;
            var sourceColEnd = -1;
            if (hoverAsm.source && !hoverAsm.source.file) {
                sourceLine = hoverAsm.source.line;
                if (hoverAsm.source.column) {
                    sourceColBegin = hoverAsm.source.column;
                    sourceColEnd = sourceColBegin;
                }
            }
            this.eventHub.emit('editorLinkLine', this.sourceEditorId, sourceLine, sourceColBegin, sourceColEnd, false);
            this.eventHub.emit('panesLinkLine', this.id,
                sourceLine, sourceColBegin, sourceColEnd,
                false, this.getPaneName());
        }
    }
    var currentWord = this.outputEditor.getModel().getWordAtPosition(e.target.position);
    if (currentWord && currentWord.word) {
        var word = currentWord.word;
        var startColumn = currentWord.startColumn;
        // Avoid throwing an exception if somehow (How?) we have a non existent lineNumber.
        // c.f. https://sentry.io/matt-godbolt/compiler-explorer/issues/285270358/
        if (e.target.position.lineNumber <= this.outputEditor.getModel().getLineCount()) {
            // Hacky workaround to check for negative numbers.
            // c.f. https://github.com/compiler-explorer/compiler-explorer/issues/434
            var lineContent = this.outputEditor.getModel().getLineContent(e.target.position.lineNumber);
            if (lineContent[currentWord.startColumn - 2] === '-') {
                word = '-' + word;
                startColumn -= 1;
            }
        }
        currentWord.range = new monaco.Range(e.target.position.lineNumber, Math.max(startColumn, 1),
            e.target.position.lineNumber, currentWord.endColumn);
        var numericToolTip = getNumericToolTip(word);
        if (numericToolTip) {
            this.decorations.numericToolTip = {
                range: currentWord.range,
                options: {
                    isWholeLine: false, hoverMessage: [{
                        value: '`' + numericToolTip + '`',
                    }],
                },
            };
            this.updateDecorations();
        }

        if (this.getEffectiveFilters().intel) {
            var lineTokens = _.bind(function (model, line) {
                //Force line's state to be accurate
                if (line > model.getLineCount()) return [];
                var flavour = model.getModeId();
                var tokens = monaco.editor.tokenize(model.getLineContent(line), flavour);
                return tokens.length > 0 ? tokens[0] : [];
            }, this);

            if (this.settings.hoverShowAsmDoc === true &&
                _.some(lineTokens(this.outputEditor.getModel(), currentWord.range.startLineNumber), function (t) {
                    return t.offset + 1 === currentWord.startColumn && t.type === 'keyword.asm';
                })) {
                getAsmInfo(currentWord.word, this.compiler.instructionSet).then(_.bind(function (response) {
                    if (!response) return;
                    this.decorations.asmToolTip = {
                        range: currentWord.range,
                        options: {
                            isWholeLine: false,
                            hoverMessage: [{
                                value: response.tooltip + '\n\nMore information available in the context menu.',
                                isTrusted: true,
                            }],
                        },
                    };
                    this.updateDecorations();
                }, this));
            }
        }
    }
};

Compiler.prototype.onAsmToolTip = function (ed) {
    ga.proxy('send', {
        hitType: 'event',
        eventCategory: 'OpenModalPane',
        eventAction: 'AsmDocs',
    });
    if (!this.getEffectiveFilters().intel) return;
    var pos = ed.getPosition();
    var word = ed.getModel().getWordAtPosition(pos);
    if (!word || !word.word) return;
    var opcode = word.word.toUpperCase();

    function newGitHubIssueUrl() {
        return 'https://github.com/compiler-explorer/compiler-explorer/issues/new?title=' +
            encodeURIComponent('[BUG] Problem with ' + opcode + ' opcode');
    }

    function appendInfo(url) {
        return '<br><br>For more information, visit <a href="' + url +
            '" target="_blank" rel="noopener noreferrer">the ' + opcode +
            ' documentation <sup><small class="fas fa-external-link-alt opens-new-window"' +
            ' title="Opens in a new window"></small></sup></a>.' +
            '<br>If the documentation for this opcode is wrong or broken in some way, ' +
            'please feel free to <a href="' + newGitHubIssueUrl() + '" target="_blank" rel="noopener noreferrer">' +
            'open an issue on GitHub <sup><small class="fas fa-external-link-alt opens-new-window" ' +
            'title="Opens in a new window"></small></sup></a>.';
    }

    getAsmInfo(word.word, this.compiler.instructionSet).then(_.bind(function (asmHelp) {
        if (asmHelp) {
            this.alertSystem.alert(opcode + ' help', asmHelp.html + appendInfo(asmHelp.url), function () {
                ed.focus();
                ed.setPosition(pos);
            });
        } else {
            this.alertSystem.notify('This token was not found in the documentation. Sorry!', {
                group: 'notokenindocs',
                alertClass: 'notification-error',
                dismissTime: 3000,
            });
        }
    }, this), _.bind(function (rejection) {
        this.alertSystem
            .notify('There was an error fetching the documentation for this opcode (' + rejection + ').', {
                group: 'notokenindocs',
                alertClass: 'notification-error',
                dismissTime: 3000,
            });
    }, this));
};

Compiler.prototype.handleCompilationStatus = function (status) {
    if (!this.statusLabel || !this.statusIcon) return;

    function ariaLabel() {
        // Compiling...
        if (status.code === 4) return 'Compiling';
        if (status.compilerOut === 0) {
            // StdErr.length > 0
            if (status.code === 3) return 'Compilation succeeded with errors';
            // StdOut.length > 0
            if (status.code === 2) return 'Compilation succeeded with warnings';
            return 'Compilation succeeded';
        } else {
            // StdErr.length > 0
            if (status.code === 3) return 'Compilation failed with errors';
            // StdOut.length > 0
            if (status.code === 2) return 'Compilation failed with warnings';
            return 'Compilation failed';
        }
    }

    function color() {
        // Compiling...
        if (status.code === 4) return 'black';
        if (status.compilerOut === 0) {
            // StdErr.length > 0
            if (status.code === 3) return '#FF6645';
            // StdOut.length > 0
            if (status.code === 2) return '#FF6500';
            return '#12BB12';
        } else {
            // StdErr.length > 0
            if (status.code === 3) return '#FF1212';
            // StdOut.length > 0
            if (status.code === 2) return '#BB8700';
            return '#FF6645';
        }
    }

    this.statusIcon
        .removeClass()
        .addClass('status-icon fas')
        .css('color', color())
        .toggle(status.code !== 0)
        .prop('aria-label', ariaLabel())
        .prop('data-status', status.code)
        .toggleClass('fa-spinner', status.code === 4)
        .toggleClass('fa-times-circle', status.code === 3)
        .toggleClass('fa-check-circle', status.code === 1 || status.code === 2);

    this.statusLabel
        .toggleClass('error', status === 3)
        .toggleClass('warning', status === 2);
};

Compiler.prototype.onLanguageChange = function (editorId, newLangId) {
    if (this.sourceEditorId === editorId) {
        var oldLangId = this.currentLangId;
        this.currentLangId = newLangId;
        // Store the current selected stuff to come back to it later in the same session (Not state stored!)
        this.infoByLang[oldLangId] = {
            compiler: this.compiler && this.compiler.id ? this.compiler.id : options.defaultCompiler[oldLangId],
            options: this.options,
        };
        var info = this.infoByLang[this.currentLangId] || {};
        this.initLangAndCompiler({lang: newLangId, compiler: info.compiler});
        this.updateCompilersSelector(info);
        this.updateCompilerUI();
        this.sendCompiler();
        this.saveState();
    }
};

Compiler.prototype.getCurrentLangCompilers = function () {
    return this.compilerService.getCompilersForLang(this.currentLangId);
};

Compiler.prototype.updateCompilersSelector = function (info) {
    this.compilerSelectizer.clearOptions(true);
    this.compilerSelectizer.clearOptionGroups();
    _.each(this.compilerService.getGroupsInUse(this.currentLangId), function (group) {
        this.compilerSelectizer.addOptionGroup(group.value, {label: group.label});
    }, this);

    var selectedCompilerId = this.compiler ? this.compiler.id : null;
    var filteredCompilers = _.filter(this.getCurrentLangCompilers(), function (e) {
        return !e.hidden || e.id === selectedCompilerId;
    });

    this.compilerSelectizer.load(_.bind(function (callback) {
        callback(_.map(filteredCompilers, _.identity));
    }, this));
    this.compilerSelectizer.setValue([this.compiler ? this.compiler.id : null], true);
    this.options = info.options || '';
    this.optionsField.val(this.options);
};

module.exports = {
    Compiler: Compiler,
};


/***/ }),

/***/ "3M42":
/*!***************************!*\
  !*** ./static/options.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2016, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.



var configElement = document.getElementById('config');

window.httpRoot = configElement.getAttribute('httpRoot');
window.staticRoot = configElement.getAttribute('staticRoot');

var extraOptions = JSON.parse(decodeURIComponent(configElement.getAttribute('extraOptions')));
for (var k in extraOptions) {
    window.compilerExplorerOptions[k] = extraOptions[k];
}

__webpack_require__.p = window.staticRoot;

module.exports = window.compilerExplorerOptions;


/***/ }),

/***/ "5IfX":
/*!**********************************!*\
  !*** ./static/panes/executor.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2019, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


var $ = __webpack_require__(/*! jquery */ "EVdn");
var _ = __webpack_require__(/*! underscore */ "xG9w");
var ga = __webpack_require__(/*! ../analytics */ "9vLr");
var Toggles = __webpack_require__(/*! ../toggles */ "VSGn");
var FontScale = __webpack_require__(/*! ../fontscale */ "zeU8");
var options = __webpack_require__(/*! ../options */ "3M42");
var Alert = __webpack_require__(/*! ../alert */ "By64");
var local = __webpack_require__(/*! ../local */ "/Zv+");
var Libraries = __webpack_require__(/*! ../libs-widget-ext */ "cVjN");
var AnsiToHtml = __webpack_require__(/*! ../ansi-to-html */ "Go29");
var timingInfoWidget = __webpack_require__(/*! ../timing-info-widget */ "ArzH");
__webpack_require__(/*! ../modes/asm-mode */ "bh+U");
__webpack_require__(/*! ../modes/ptx-mode */ "oKtz");

__webpack_require__(/*! selectize */ "QPhV");

var timingInfo = new timingInfoWidget.TimingInfo();

var languages = options.languages;

function makeAnsiToHtml(color) {
    return new AnsiToHtml({
        fg: color ? color : '#333',
        bg: '#f5f5f5',
        stream: true,
        escapeXML: true,
    });
}


function Executor(hub, container, state) {
    this.container = container;
    this.hub = hub;
    this.eventHub = hub.createEventHub();
    this.compilerService = hub.compilerService;
    this.domRoot = container.getElement();
    this.domRoot.html($('#executor').html());
    this.contentRoot = this.domRoot.find('.content');
    this.sourceEditorId = state.source || 1;
    this.id = state.id || hub.nextExecutorId();
    this.settings = JSON.parse(local.get('settings', '{}'));
    this.initLangAndCompiler(state);
    this.infoByLang = {};
    this.deferCompiles = hub.deferred;
    this.needsCompile = false;
    this.options = state.options || options.compileOptions[this.currentLangId];
    this.executionArguments = state.execArgs || '';
    this.executionStdin = state.execStdin || '';
    this.source = '';
    this.lastResult = {};
    this.lastTimeTaken = 0;
    this.pendingRequestSentAt = 0;
    this.nextRequest = null;

    this.alertSystem = new Alert();
    this.alertSystem.prefixMessage = 'Executor #' + this.id + ': ';

    this.normalAnsiToHtml = makeAnsiToHtml();
    this.errorAnsiToHtml = makeAnsiToHtml('red');

    this.initButtons(state);

    this.fontScale = new FontScale(this.domRoot, state, 'pre.content');

    this.compilerPicker.selectize({
        sortField: this.compilerService.getSelectizerOrder(),
        valueField: 'id',
        labelField: 'name',
        searchField: ['name'],
        optgroupField: 'group',
        optgroups: this.compilerService.getGroupsInUse(this.currentLangId),
        lockOptgroupOrder: true,
        options: _.map(this.getCurrentLangCompilers(), _.identity),
        items: this.compiler ? [this.compiler.id] : [],
        dropdownParent: 'body',
        closeAfterSelect: true,
    }).on('change', _.bind(function (e) {
        var val = $(e.target).val();
        if (val) {
            ga.proxy('send', {
                hitType: 'event',
                eventCategory: 'SelectCompiler',
                eventAction: val,
            });
            this.onCompilerChange(val);
        }
    }, this));

    this.compilerSelectizer = this.compilerPicker[0].selectize;

    this.initLibraries(state);
    this.initCallbacks();
    // Handle initial settings
    this.onSettingsChange(this.settings);
    this.updateCompilerInfo();
    this.saveState();
    ga.proxy('send', {
        hitType: 'event',
        eventCategory: 'OpenViewPane',
        eventAction: 'Executor',
    });
}

Executor.prototype.initLangAndCompiler = function (state) {
    var langId = state.lang;
    var compilerId = state.compiler;
    var result = this.compilerService.processFromLangAndCompiler(langId, compilerId);
    this.compiler = result.compiler;
    this.currentLangId = result.langId;
    this.updateLibraries();
};

Executor.prototype.close = function () {
    this.eventHub.unsubscribe();
    this.eventHub.emit('executorClose', this.id);
};

Executor.prototype.undefer = function () {
    this.deferCompiles = false;
    if (this.needsCompile) this.compile();
};

Executor.prototype.updateAndCalcTopBarHeight = function () {
    // If we save vertical space by hiding stuff that's OK to hide
    // when thin, then hide that stuff.
    this.hideable.show();
    var topBarHeightMax = this.topBar.outerHeight(true);
    this.hideable.hide();
    var topBarHeightMin = this.topBar.outerHeight(true);
    var topBarHeight = topBarHeightMin;
    if (topBarHeightMin === topBarHeightMax) {
        this.hideable.show();
    }

    if (!this.panelCompilation.hasClass('d-none')) {
        topBarHeight += this.panelCompilation.outerHeight(true);
    }
    if (!this.panelArgs.hasClass('d-none')) {
        topBarHeight += this.panelArgs.outerHeight(true);
    }
    if (!this.panelStdin.hasClass('d-none')) {
        topBarHeight += this.panelStdin.outerHeight(true);
    }

    return topBarHeight;
};

Executor.prototype.resize = function () {
    var topBarHeight = this.updateAndCalcTopBarHeight();
    var bottomBarHeight = this.bottomBar.outerHeight(true);
    this.outputContentRoot.outerHeight(this.domRoot.height() - topBarHeight - bottomBarHeight);

};

function errorResult(message) {
    return {code: -1, stderr: message};
}

Executor.prototype.compile = function (bypassCache) {
    if (this.deferCompiles) {
        this.needsCompile = true;
        return;
    }
    this.needsCompile = false;
    this.compileTimeLabel.text(' - Compiling...');
    var options = {
        userArguments: this.options,
        executeParameters: {
            args: this.executionArguments,
            stdin: this.executionStdin,
        },
        compilerOptions: {
            executorRequest: true,
        },
        filters: {execute: true},
        tools: [],
        libraries: [],
    };

    _.each(this.libsWidget.getLibsInUse(), function (item) {
        options.libraries.push({
            id: item.libId,
            version: item.versionId,
        });
    });

    this.compilerService.expand(this.source).then(_.bind(function (expanded) {
        var request = {
            source: expanded || '',
            compiler: this.compiler ? this.compiler.id : '',
            options: options,
            lang: this.currentLangId,
        };
        if (bypassCache) request.bypassCache = true;
        if (!this.compiler) {
            this.onCompileResponse(request, errorResult('<Please select a compiler>'), false);
        } else {
            this.sendCompile(request);
        }
    }, this));
};

Executor.prototype.sendCompile = function (request) {
    var onCompilerResponse = _.bind(this.onCompileResponse, this);

    if (this.pendingRequestSentAt) {
        // If we have a request pending, then just store this request to do once the
        // previous request completes.
        this.nextRequest = request;
        return;
    }
    // this.eventHub.emit('compiling', this.id, this.compiler);
    // Display the spinner
    this.handleCompilationStatus({code: 4});
    this.pendingRequestSentAt = Date.now();
    // After a short delay, give the user some indication that we're working on their
    // compilation.
    this.compilerService.submit(request)
        .then(function (x) {
            onCompilerResponse(request, x.result, x.localCacheHit);
        })
        .catch(function (x) {
            var message = 'Unknown error';
            if (_.isString(x)) {
                message = x;
            } else if (x) {
                message = x.error || x.code;
            }
            onCompilerResponse(request, errorResult(message), false);
        });
};

Executor.prototype.addCompilerOutputLine = function (msg, container, lineNum, column) {
    var elem = $('<div/>').appendTo(container);
    if (lineNum) {
        elem.html(
            $('<span class="linked-compiler-output-line"></span>')
                .html(msg)
                .click(_.bind(function (e) {
                    this.eventHub.emit('editorLinkLine', this.sourceEditorId, lineNum, column, column + 1, true);
                    // do not bring user to the top of index.html
                    // http://stackoverflow.com/questions/3252730
                    e.preventDefault();
                    return false;
                }, this))
                .on('mouseover', _.bind(function () {
                    this.eventHub.emit('editorLinkLine', this.sourceEditorId, lineNum, column, column + 1, false);
                }, this))
        );
    } else {
        elem.html(msg);
    }
};

Executor.prototype.clearPreviousOutput = function () {
    this.executionStatusSection.empty();
    this.compilerOutputSection.empty();
    this.executionOutputSection.empty();
};

Executor.prototype.handleOutput = function (output, element, ansiParser) {
    var outElem = $('<pre class="card"></pre>').appendTo(element);
    _.each(output, function (obj) {
        if (obj.text === '') {
            this.addCompilerOutputLine('<br/>', outElem);
        } else {
            var lineNumber = obj.tag ? obj.tag.line : obj.line;
            var columnNumber = obj.tag ? obj.tag.column : -1;
            this.addCompilerOutputLine(ansiParser.toHtml(obj.text), outElem, lineNumber, columnNumber);
        }
    }, this);
    return outElem;
};

Executor.prototype.onCompileResponse = function (request, result, cached) {
    // Save which source produced this change. It should probably be saved earlier though
    result.source = this.source;
    this.lastResult = result;
    var timeTaken = Math.max(0, Date.now() - this.pendingRequestSentAt);
    this.lastTimeTaken = timeTaken;
    var wasRealReply = this.pendingRequestSentAt > 0;
    this.pendingRequestSentAt = 0;
    ga.proxy('send', {
        hitType: 'event',
        eventCategory: 'Compile',
        eventAction: request.compiler,
        eventLabel: request.options.userArguments,
        eventValue: cached ? 1 : 0,
    });
    ga.proxy('send', {
        hitType: 'timing',
        timingCategory: 'Compile',
        timingVar: request.compiler,
        timingValue: timeTaken,
    });

    this.clearPreviousOutput();
    var compileStdout = result.buildResult.stdout || [];
    var compileStderr = result.buildResult.stderr || [];
    var execStdout = result.stdout || [];
    var execStderr = result.stderr || [];
    if (!result.didExecute) {
        this.executionStatusSection.append($('<div/>').text('Could not execute the program'));
        this.executionStatusSection.append($('<div/>').text('Compiler returned: ' + result.buildResult.code));
    }

    if (compileStdout.length > 0) {
        this.compilerOutputSection.append($('<div/>').text('Compiler stdout'));
        this.handleOutput(compileStdout, this.compilerOutputSection, this.normalAnsiToHtml);
    }
    if (compileStderr.length > 0) {
        this.compilerOutputSection.append($('<div/>').text('Compiler stderr'));
        this.handleOutput(compileStderr, this.compilerOutputSection, this.errorAnsiToHtml);
    }
    if (result.didExecute) {
        this.executionOutputSection.append($('<div/>').text('Program returned: ' + result.code));
        if (execStdout.length > 0) {
            this.executionOutputSection.append($('<div/>').text('Program stdout'));
            var outElem = this.handleOutput(execStdout, this.executionOutputSection, this.normalAnsiToHtml);
            outElem.addClass('execution-stdout');
        }
        if (execStderr.length > 0) {
            this.executionOutputSection.append($('<div/>').text('Program stderr'));
            this.handleOutput(execStderr, this.executionOutputSection, this.normalAnsiToHtml);
        }
    }

    this.handleCompilationStatus({code: 1, didExecute: result.didExecute});
    var timeLabelText = '';
    if (cached) {
        timeLabelText = ' - cached';
    } else if (wasRealReply) {
        timeLabelText = ' - ' + timeTaken + 'ms';
    }
    this.compileTimeLabel.text(timeLabelText);

    this.setCompilationOptionsPopover(result.buildResult &&
        result.buildResult.compilationOptions ? result.buildResult.compilationOptions.join(' ') : '');

    this.eventHub.emit('executeResult', this.id, this.compiler, result, languages[this.currentLangId]);

    if (this.nextRequest) {
        var next = this.nextRequest;
        this.nextRequest = null;
        this.sendCompile(next);
    }
};

Executor.prototype.resendResult = function () {
    if (!$.isEmptyObject(this.lastResult)) {
        this.eventHub.emit('executeResult', this.id, this.compiler, this.lastResult);
        return true;
    }
    return false;
};

Executor.prototype.onResendExecutionResult = function (id) {
    if (id === this.id) {
        this.resendResult();
    }
};

Executor.prototype.onEditorChange = function (editor, source, langId, compilerId) {
    if (editor === this.sourceEditorId && langId === this.currentLangId &&
        (compilerId === undefined)) {
        this.source = source;
        if (this.settings.compileOnChange) {
            this.compile();
        }
    }
};

Executor.prototype.initButtons = function (state) {
    this.filters = new Toggles(this.domRoot.find('.filters'), state.filters);
    this.toggleWrapButton = new Toggles(this.domRoot.find('.options'), state);
    this.compileClearCache = this.domRoot.find('.clear-cache');
    this.outputContentRoot = this.domRoot.find('pre.content');
    this.executionStatusSection = this.outputContentRoot.find('.execution-status');
    this.compilerOutputSection = this.outputContentRoot.find('.compiler-output');
    this.executionOutputSection = this.outputContentRoot.find('.execution-output');

    this.optionsField = this.domRoot.find('.compilation-options');
    this.execArgsField = this.domRoot.find('.execution-arguments');
    this.execStdinField = this.domRoot.find('.execution-stdin');
    this.prependOptions = this.domRoot.find('.prepend-options');
    this.fullCompilerName = this.domRoot.find('.full-compiler-name');
    this.fullTimingInfo = this.domRoot.find('.full-timing-info');
    this.setCompilationOptionsPopover(this.compiler ? this.compiler.options : null);

    this.compileTimeLabel = this.domRoot.find('.compile-time');
    this.libsButton = this.domRoot.find('.btn.show-libs');

    // Dismiss on any click that isn't either in the opening element, inside
    // the popover or on any alert
    $(document).on('mouseup', _.bind(function (e) {
        var target = $(e.target);
        if (!target.is(this.prependOptions) && this.prependOptions.has(target).length === 0 &&
            target.closest('.popover').length === 0)
            this.prependOptions.popover('hide');

        if (!target.is(this.fullCompilerName) && this.fullCompilerName.has(target).length === 0 &&
            target.closest('.popover').length === 0)
            this.fullCompilerName.popover('hide');
    }, this));

    this.optionsField.val(this.options);
    this.execArgsField.val(this.executionArguments);
    this.execStdinField.val(this.executionStdin);

    this.shortCompilerName = this.domRoot.find('.short-compiler-name');
    this.compilerPicker = this.domRoot.find('.compiler-picker');
    this.setCompilerVersionPopover('', '');

    this.topBar = this.domRoot.find('.top-bar');
    this.bottomBar = this.domRoot.find('.bottom-bar');
    this.statusLabel = this.domRoot.find('.status-text');

    this.hideable = this.domRoot.find('.hideable');
    this.statusIcon = this.domRoot.find('.status-icon');

    this.panelCompilation = this.domRoot.find('.panel-compilation');
    this.panelArgs = this.domRoot.find('.panel-args');
    this.panelStdin = this.domRoot.find('.panel-stdin');

    this.wrapButton = this.domRoot.find('.wrap-lines');
    this.wrapTitle = this.wrapButton.prop('title');

    this.initToggleButtons(state);
};

Executor.prototype.initToggleButtons = function (state) {
    this.toggleCompilation = this.domRoot.find('.toggle-compilation');
    this.toggleArgs = this.domRoot.find('.toggle-args');
    this.toggleStdin = this.domRoot.find('.toggle-stdin');
    this.toggleCompilerOut = this.domRoot.find('.toggle-compilerout');

    if (state.compilationPanelShown === false) {
        this.hidePanel(this.toggleCompilation, this.panelCompilation);
    }

    if (state.argsPanelShown === true) {
        this.showPanel(this.toggleArgs, this.panelArgs);
    }

    if (state.stdinPanelShown === true) {
        this.showPanel(this.toggleStdin, this.panelStdin);
    }

    if (state.compilerOutShown === false) {
        this.hidePanel(this.toggleCompilerOut, this.compilerOutputSection);
    }

    if (state.wrap === true) {
        this.contentRoot.addClass('wrap');
        this.wrapButton.prop('title', '[ON] ' + this.wrapTitle);
    } else {
        this.contentRoot.removeClass('wrap');
        this.wrapButton.prop('title', '[OFF] ' + this.wrapTitle);
    }
};

Executor.prototype.onLibsChanged = function () {
    this.saveState();
    this.compile();
};

Executor.prototype.initLibraries = function (state) {
    this.libsWidget = new Libraries.Widget(this.currentLangId, this.compiler,
        this.libsButton, state, _.bind(this.onLibsChanged, this));
};

Executor.prototype.onFontScale = function () {
    this.saveState();
};

Executor.prototype.initListeners = function () {
    // this.filters.on('change', _.bind(this.onFilterChange, this));
    this.fontScale.on('change', _.bind(this.onFontScale, this));
    this.toggleWrapButton.on('change', _.bind(this.onToggleWrapChange, this));

    this.container.on('destroy', this.close, this);
    this.container.on('resize', this.resize, this);
    this.container.on('shown', this.resize, this);
    this.container.on('open', function () {
        this.eventHub.emit('executorOpen', this.id, this.sourceEditorId);
    }, this);
    this.eventHub.on('editorChange', this.onEditorChange, this);
    this.eventHub.on('editorClose', this.onEditorClose, this);
    this.eventHub.on('settingsChange', this.onSettingsChange, this);
    this.eventHub.on('requestCompilation', this.onRequestCompilation, this);
    this.eventHub.on('resendExecution', this.onResendExecutionResult, this);
    this.eventHub.on('resize', this.resize, this);
    this.eventHub.on('findExecutors', this.sendExecutor, this);
    this.eventHub.on('languageChange', this.onLanguageChange, this);

    this.fullTimingInfo
        .off('click')
        .click(_.bind(function () {
            timingInfo.run(_.bind(function () {
            }, this), this.lastResult, this.lastTimeTaken);
        }, this));
};

Executor.prototype.showPanel = function (button, panel) {
    panel.removeClass('d-none');
    button.addClass('active');
    this.resize();
};

Executor.prototype.hidePanel = function (button, panel) {
    panel.addClass('d-none');
    button.removeClass('active');
    this.resize();
};

Executor.prototype.togglePanel = function (button, panel) {
    if (panel.hasClass('d-none')) {
        this.showPanel(button, panel);
    } else {
        this.hidePanel(button, panel);
    }
    this.saveState();
};

Executor.prototype.initCallbacks = function () {
    this.initListeners();

    var optionsChange = _.debounce(_.bind(function (e) {
        this.onOptionsChange($(e.target).val());
    }, this), 800);

    var execArgsChange = _.debounce(_.bind(function (e) {
        this.onExecArgsChange($(e.target).val());
    }, this), 800);

    var execStdinChange = _.debounce(_.bind(function (e) {
        this.onExecStdinChange($(e.target).val());
    }, this), 800);

    this.optionsField
        .on('change', optionsChange)
        .on('keyup', optionsChange);

    this.execArgsField
        .on('change', execArgsChange)
        .on('keyup', execArgsChange);

    this.execStdinField
        .on('change', execStdinChange)
        .on('keyup', execStdinChange);

    this.compileClearCache.on('click', _.bind(function () {
        this.compilerService.cache.reset();
        this.compile(true);
    }, this));

    // Dismiss the popover on escape.
    $(document).on('keyup.editable', _.bind(function (e) {
        if (e.which === 27) {
            this.libsButton.popover('hide');
        }
    }, this));

    this.toggleCompilation.on('click', _.bind(function () {
        this.togglePanel(this.toggleCompilation, this.panelCompilation);
    }, this));

    this.toggleArgs.on('click', _.bind(function () {
        this.togglePanel(this.toggleArgs, this.panelArgs);
    }, this));

    this.toggleStdin.on('click', _.bind(function () {
        this.togglePanel(this.toggleStdin, this.panelStdin);
    }, this));

    this.toggleCompilerOut.on('click', _.bind(function () {
        this.togglePanel(this.toggleCompilerOut, this.compilerOutputSection);
    }, this));

    // Dismiss on any click that isn't either in the opening element, inside
    // the popover or on any alert
    $(document).on('click', _.bind(function (e) {
        var elem = this.libsButton;
        var target = $(e.target);
        if (!target.is(elem) && elem.has(target).length === 0 && target.closest('.popover').length === 0) {
            elem.popover('hide');
        }
    }, this));

    this.eventHub.on('initialised', this.undefer, this);

    if (MutationObserver !== undefined) {
        new MutationObserver(_.bind(this.resize, this)).observe(this.execStdinField[0], {
            attributes: true, attributeFilter: ['style'],
        });
    }
};

Executor.prototype.onOptionsChange = function (options) {
    this.options = options;
    this.saveState();
    this.compile();
};

Executor.prototype.onExecArgsChange = function (args) {
    this.executionArguments = args;
    this.saveState();
    this.compile();
};

Executor.prototype.onExecStdinChange = function (newStdin) {
    this.executionStdin = newStdin;
    this.saveState();
    this.compile();
};

Executor.prototype.onRequestCompilation = function (editorId) {
    if (editorId === this.sourceEditorId) {
        this.compile();
    }
};

Executor.prototype.updateCompilerInfo = function () {
    this.updateCompilerName();
    if (this.compiler) {
        if (this.compiler.notification) {
            this.alertSystem.notify(this.compiler.notification, {
                group: 'compilerwarning',
                alertClass: 'notification-info',
                dismissTime: 5000,
            });
        }
        this.prependOptions.data('content', this.compiler.options);
    }
    this.sendExecutor();
};

Executor.prototype.updateCompilerUI = function () {
    this.updateCompilerInfo();
    // Resize in case the new compiler name is too big
    this.resize();
};

Executor.prototype.onCompilerChange = function (value) {
    this.compiler = this.compilerService.findCompiler(this.currentLangId, value);
    this.updateLibraries();
    this.saveState();
    this.compile();
    this.updateCompilerUI();
};

Executor.prototype.onToggleWrapChange = function () {
    var state = this.currentState();
    this.contentRoot.toggleClass('wrap',state.wrap);
    this.wrapButton.prop('title', '['+(state.wrap ? 'ON' : 'OFF')+'] '+ this.wrapTitle);
    this.saveState();
};

Executor.prototype.sendExecutor = function () {
    this.eventHub.emit('executor', this.id, this.compiler, this.options, this.sourceEditorId);
};

Executor.prototype.onEditorClose = function (editor) {
    if (editor === this.sourceEditorId) {
        // We can't immediately close as an outer loop somewhere in GoldenLayout is iterating over
        // the hierarchy. We can't modify while it's being iterated over.
        this.close();
        _.defer(function (self) {
            self.container.close();
        }, this);
    }
};

Executor.prototype.currentState = function () {
    var state = {
        id: this.id,
        compiler: this.compiler ? this.compiler.id : '',
        source: this.sourceEditorId,
        options: this.options,
        execArgs: this.executionArguments,
        execStdin: this.executionStdin,
        libs: this.libsWidget.get(),
        lang: this.currentLangId,
        compilationPanelShown: !this.panelCompilation.hasClass('d-none'),
        compilerOutShown: !this.compilerOutputSection.hasClass('d-none'),
        argsPanelShown: !this.panelArgs.hasClass('d-none'),
        stdinPanelShown: !this.panelStdin.hasClass('d-none'),
        wrap: this.toggleWrapButton.get().wrap,
    };
    this.fontScale.addState(state);
    return state;
};

Executor.prototype.saveState = function () {
    this.container.setState(this.currentState());
};

Executor.prototype.getCompilerName = function () {
    return this.compiler ? this.compiler.name : 'No compiler set';
};


Executor.prototype.getLanguageName = function () {
    var lang = options.languages[this.currentLangId];
    return lang ? lang.name : '?';
};

Executor.prototype.getPaneName = function () {
    var langName = this.getLanguageName();
    var compName = this.getCompilerName();
    return compName + ' Executor (Editor #' + this.sourceEditorId + ') ' + langName;
};

Executor.prototype.updateCompilerName = function () {
    var compilerName = this.getCompilerName();
    var compilerVersion = this.compiler ? this.compiler.version : '';
    var compilerNotification = this.compiler ? this.compiler.notification : '';
    this.container.setTitle(this.getPaneName());
    this.shortCompilerName.text(compilerName);
    this.setCompilerVersionPopover(compilerVersion, compilerNotification);
};

Executor.prototype.setCompilationOptionsPopover = function (content) {
    this.prependOptions.popover('dispose');
    this.prependOptions.popover({
        content: content || 'No options in use',
        template: '<div class="popover' +
            (content ? ' compiler-options-popover' : '') +
            '" role="tooltip"><div class="arrow"></div>' +
            '<h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    });
};

Executor.prototype.setCompilerVersionPopover = function (version, notification) {
    this.fullCompilerName.popover('dispose');
    // `notification` contains HTML from a config file, so is 'safe'.
    // `version` comes from compiler output, so isn't, and is escaped.
    this.fullCompilerName.popover({
        html: true,
        title: notification ? $.parseHTML('<span>Compiler Version: ' + notification + '</span>')[0] :
            'Full compiler version',
        content: _.escape(version) || '',
        template: '<div class="popover' +
            (version ? ' compiler-options-popover' : '') +
            '" role="tooltip"><div class="arrow"></div>' +
            '<h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    });
};

Executor.prototype.onSettingsChange = function (newSettings) {
    this.settings = _.clone(newSettings);
};

Executor.prototype.handleCompilationStatus = function (status) {
    if (!this.statusLabel || !this.statusIcon) return;

    function ariaLabel() {
        // Compiling...
        if (status.code === 4) return 'Compiling';
        if (status.didExecute) {
            return 'Program compiled & executed';
        } else {
            return 'Program could not be executed';
        }
    }

    function color() {
        // Compiling...
        if (status.code === 4) return 'black';
        if (status.didExecute) return '#12BB12';
        return '#FF1212';
    }

    this.statusIcon
        .removeClass()
        .addClass('status-icon fas')
        .css('color', color())
        .toggle(status.code !== 0)
        .prop('aria-label', ariaLabel())
        .prop('data-status', status.code)
        .toggleClass('fa-spinner', status.code === 4)
        .toggleClass('fa-times-circle', status.code !== 4 && !status.didExecute)
        .toggleClass('fa-check-circle', status.code !== 4 && status.didExecute);
};

Executor.prototype.updateLibraries = function () {
    if (this.libsWidget) this.libsWidget.setNewLangId(this.currentLangId, this.compiler.id, this.compiler.libs);
};

Executor.prototype.onLanguageChange = function (editorId, newLangId) {
    if (this.sourceEditorId === editorId) {
        var oldLangId = this.currentLangId;
        this.currentLangId = newLangId;
        // Store the current selected stuff to come back to it later in the same session (Not state stored!)
        this.infoByLang[oldLangId] = {
            compiler: this.compiler && this.compiler.id ? this.compiler.id : options.defaultCompiler[oldLangId],
            options: this.options,
            execArgs: this.executionArguments,
            execStdin: this.executionStdin,
        };
        var info = this.infoByLang[this.currentLangId] || {};
        this.initLangAndCompiler({lang: newLangId, compiler: info.compiler});
        this.updateCompilersSelector(info);
        this.updateCompilerUI();
        this.saveState();
    }
};

Executor.prototype.getCurrentLangCompilers = function () {
    var allCompilers = this.compilerService.getCompilersForLang(this.currentLangId);
    var hasAtLeastOneExecuteSupported = _.any(allCompilers, function (compiler) {
        return (compiler.supportsExecute !== false);
    });

    if (!hasAtLeastOneExecuteSupported) {
        this.compiler = null;
        return [];
    }

    return _.filter(
        allCompilers,
        _.bind(function (compiler) {
            return ((compiler.hidden !== true) && (compiler.supportsExecute !== false)) ||
                   (this.compiler && compiler.id === this.compiler.id);
        }, this));
};

Executor.prototype.updateCompilersSelector = function (info) {
    this.compilerSelectizer.clearOptions(true);
    this.compilerSelectizer.clearOptionGroups();
    _.each(this.compilerService.getGroupsInUse(this.currentLangId), function (group) {
        this.compilerSelectizer.addOptionGroup(group.value, {label: group.label});
    }, this);
    this.compilerSelectizer.load(_.bind(function (callback) {
        callback(_.map(this.getCurrentLangCompilers(), _.identity));
    }, this));
    this.compilerSelectizer.setValue([this.compiler ? this.compiler.id : null], true);
    this.options = info.options || '';
    this.optionsField.val(this.options);
    this.executionArguments = info.execArgs || '';
    this.execArgsField.val(this.executionArguments);
    this.executionStdin = info.execStdin || '';
    this.execStdinField.val(this.executionStdin);
};

module.exports = {
    Executor: Executor,
};


/***/ }),

/***/ "5wl3":
/*!*****************************!*\
  !*** ./static/colours.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "61ZV":
/*!**********************************!*\
  !*** ./static/panes/cfg-view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2017, Najjar Chedy
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.



var $ = __webpack_require__(/*! jquery */ "EVdn");
var vis = __webpack_require__(/*! vis */ "TycK");
var _ = __webpack_require__(/*! underscore */ "xG9w");
var Toggles = __webpack_require__(/*! ../toggles */ "VSGn");
var ga = __webpack_require__(/*! ../analytics */ "9vLr");
const { Compiler } = __webpack_require__(/*! ./compiler */ "35hO");

__webpack_require__(/*! selectize */ "QPhV");

function Cfg(hub, container, state) {
    this.container = container;
    this.eventHub = hub.createEventHub();
    this.domRoot = container.getElement();
    this.domRoot.html($('#cfg').html());
    this.isEditorCfg = state.source == 'editor';
    this.cfgCompileOutput = state.cfgOutput;
    this.defaultCfgOutput = this.isEditorCfg ? {nodes: this.cfgCompileOutput.nodes, edges: this.cfgCompileOutput.edges} : {nodes: [{id: 0, shape: 'box', label: 'No Output'}], edges: []};
    this.binaryModeSupport = {
        nodes: [{
            id: 0,
            shape: 'box',
            label: 'Cfg mode cannot be used when the binary filter is set',
        }], edges: [],
    };
    // Note that this might be outdated if no functions were present when creating the link, but that's handled
    // by selectize
    state.options = state.options || {};
    this.savedPos = state.pos;
    this.savedScale = state.scale;
    this.needsMove = this.savedPos && this.savedScale;

    this.currentFunc = state.selectedFn || '';
    this.functions = [];
    this.networkOpts = {
        autoResize: true,
        locale: 'en',
        edges: {
            arrows: {to: {enabled: true}},
            smooth: {
                enabled: true,
                type: 'dynamic',
                roundness: 1,
            },
            physics: true,
        },
        nodes: {
            font: {face: 'Consolas, "Liberation Mono", Courier, monospace', align: 'left'},
        },
        layout: {
            hierarchical: {
                enabled: true,
                direction: 'UD',
                nodeSpacing: 200,
                levelSeparation: 50,
            },
        },
        physics: {
            enabled: !!state.options.physics,
            hierarchicalRepulsion: {
                nodeDistance: 160,
            },
        },
        interaction: {
            navigationButtons: !!state.options.navigation,
            keyboard: {
                enabled: true,
                speed: {x: 10, y: 10, zoom: 0.03},
                bindToWindow: false,
            },
        },
    };

    this.cfgVisualiser = new vis.Network(this.domRoot.find('.graph-placeholder')[0],
        this.defaultCfgOutput, this.networkOpts);

        this.cfgVisualiser.moveTo({
            position: {x:200, y:200},
            scale: 1,
            offset: {x:500, y:450},
            animation: false
          })
    this.initButtons(state);

    this.compilerId = this.isEditorCfg ? null : state.id;
    this._editorid = state.editorid;
    this._binaryFilter = false;

    this.functionPicker = $(this.domRoot).find('.function-picker').selectize({
        sortField: 'name',
        valueField: 'name',
        labelField: 'name',
        searchField: ['name'],
        dropdownParent: 'body',
    }).on('change', _.bind(function (e) {
        var selectedFn = this.functions[e.target.value];
        if (selectedFn) {
            this.currentFunc = e.target.value;
            this.showCfgResults({
                nodes: selectedFn.nodes,
                edges: selectedFn.edges
            });
            this.cfgVisualiser.selectNodes([selectedFn.nodes[0].id]);
            this.resize();
            this.saveState();
            this.cfgVisualiser.fit();
        }
    }, this));

    this.initCallbacks();
    this.adaptStructure = function (names) {
        return _.map(names, function (name) {
            return {name: name};
        });
    };
    this.updateButtons();
    this.setTitle();
    ga.proxy('send', {
        hitType: 'event',
        eventCategory: 'OpenViewPane',
        eventAction: 'Cfg',
    });
}

Cfg.prototype.onCompileResult = function (id, compiler, result) {
    if (this.compilerId === id) {
        var functionNames = [];
        if (this.supportsCfg && !$.isEmptyObject(result.cfg)) {
            this.functions = result.cfg;
            functionNames = Object.keys(this.functions);
            if (functionNames.indexOf(this.currentFunc) === -1) {
                this.currentFunc = functionNames[0];
            }
            this.showCfgResults({
                nodes: this.functions[this.currentFunc].nodes,
                edges: this.functions[this.currentFunc].edges,
            });
            this.cfgVisualiser.selectNodes([this.functions[this.currentFunc].nodes[0].id]);
        } else {
            // We don't reset the current function here as we would lose the saved one if this happened at the beginning
            // (Hint: It *does* happen)
            this.showCfgResults(this._binaryFilter ? this.binaryModeSupport : this.defaultCfgOutput);
        }

        this.functionPicker[0].selectize.clearOptions();
        this.functionPicker[0].selectize.addOption(functionNames.length ?
            this.adaptStructure(functionNames) : {name: 'The input does not contain functions'});
        this.functionPicker[0].selectize.refreshOptions(false);

        this.functionPicker[0].selectize.clear();
        this.functionPicker[0].selectize.addItem(functionNames.length ?
            this.currentFunc : 'The input does not contain any function', true);
        this.saveState();
    }
};

Cfg.prototype.onCompiler = function (id, compiler) {
    if (id === this.compilerId) {
        this._compilerName = compiler ? compiler.name : '';
        this.supportsCfg = compiler.supportsCfg;
        this.setTitle();
    }
};

Cfg.prototype.onFiltersChange = function (id, filters) {
    if (this.compilerId === id) {
        this._binaryFilter = filters.binary;
    }
};

Cfg.prototype.initButtons = function (state) {
    this.toggles = new Toggles(this.domRoot.find('.options'), state.options);

    this.toggleNavigationButton = this.domRoot.find('.toggle-navigation');
    this.toggleNavigationTitle = this.toggleNavigationButton.prop('title');

    this.togglePhysicsButton = this.domRoot.find('.toggle-physics');
    this.togglePhysicsTitle = this.togglePhysicsButton.prop('title');

    this.topBar = this.domRoot.find('.top-bar');
};

Cfg.prototype.initCallbacks = function () {
    this.cfgVisualiser.on('dragEnd', _.bind(this.saveState, this));
    this.cfgVisualiser.on('zoom', _.bind(this.saveState, this));

    this.eventHub.on('compilerClose', this.onCompilerClose, this);
    this.eventHub.on('compileResult', this.onCompileResult, this);
    this.eventHub.on('compiler', this.onCompiler, this);
    this.eventHub.on('filtersChange', this.onFiltersChange, this);

    this.container.on('destroy', this.close, this);
    this.container.on('resize', this.resize, this);
    this.container.on('shown', this.resize, this);
    if (this.isEditorCfg)
        this.eventHub.emit('codeCfgViewOpened', this.compilerId);
    else
        this.eventHub.emit('cfgViewOpened', this.compilerId);

    this.eventHub.emit('requestFilters', this.compilerId);
    this.eventHub.emit('requestCompiler', this.compilerId);

    this.togglePhysicsButton.on('click', _.bind(function () {
        this.networkOpts.physics.enabled = this.togglePhysicsButton.hasClass('active');
        // change only physics.enabled option to preserve current node locations
        this.cfgVisualiser.setOptions({
            physics: {enabled: this.networkOpts.physics.enabled},
        });
    }, this));

    this.toggleNavigationButton.on('click', _.bind(function () {
        this.networkOpts.interaction.navigationButtons = this.toggleNavigationButton.hasClass('active');
        this.cfgVisualiser.setOptions({interaction: {
            navigationButtons: this.networkOpts.interaction.navigationButtons},
        });
    }, this));
    this.toggles.on('change', _.bind(function () {
        this.updateButtons();
        this.saveState();
    }, this));
};

Cfg.prototype.updateButtons = function () {
    var formatButtonTitle = function (button, title) {
        button.prop('title', '[' + (button.hasClass('active') ? 'ON' : 'OFF') + '] ' + title);
    };
    formatButtonTitle(this.togglePhysicsButton, this.togglePhysicsTitle);
    formatButtonTitle(this.toggleNavigationButton, this.toggleNavigationTitle);
};

Cfg.prototype.resize = function () {
    if (this.cfgVisualiser.canvas) {
        var height = this.domRoot.height() - this.topBar.outerHeight(true);
        this.cfgVisualiser.setSize('100%', height.toString());
        this.cfgVisualiser.redraw();
    }
};

Cfg.prototype.setTitle = function () {
    var title = this.isEditorCfg ? 'Graph Viewer (Editor #' + this._editorid : this._compilerName + ' Graph Viewer (Editor #' + this._editorid + ', Compiler #' + this.compilerId + ')';
    this.container.setTitle(title);
};

Cfg.prototype.assignLevels = function (data) {
    var nodes = [];
    var idToIdx = [];
    for (var i in data.nodes) {
        var node = data.nodes[i];
        idToIdx[node.id] = i;
        nodes.push({
            edges: [],
            dagEdges: [],
            index: i,
            id: node.id,
            level: 0,
            state: 0,
            inCount: 0,
        });
    }
    var isEdgeValid = function (edge) {
        return edge.from in idToIdx && edge.to in idToIdx;
    };
    data.edges.forEach(function (edge) {
        if (isEdgeValid(edge)) {
            nodes[idToIdx[edge.from]].edges.push(idToIdx[edge.to]);
        }
    });

    var dfs = function (node) { // choose which edges will be back-edges
        node.state = 1;
        node.edges.forEach(function (targetIndex) {
            var target = nodes[targetIndex];
            if (target.state !== 1) {
                if (target.state === 0) {
                    dfs(target);
                }
                node.dagEdges.push(targetIndex);
                target.inCount += 1;
            }
        });
        node.state = 2;
    };
    var markLevels = function (node) {
        node.dagEdges.forEach(function (targetIndex) {
            var target = nodes[targetIndex];
            target.level = Math.max(target.level, node.level + 1);
            if (--target.inCount === 0) {
                markLevels(target);
            }
        });
    };
    nodes.forEach(function (node) {
        if (node.state === 0) {
            dfs(node);
            node.level = 1;
            markLevels(node);
        }
    });
    nodes.forEach(function (node) {
        data.nodes[node.index]['level'] = node.level;
    });
    data.edges.forEach(function (edge) {
        if (isEdgeValid(edge)) {
            var nodeA = nodes[idToIdx[edge.from]];
            var nodeB = nodes[idToIdx[edge.to]];
            if (nodeA.level >= nodeB.level) {
                edge.physics = false;
            } else {
                edge.physics = true;
                var diff = (nodeB.level - nodeA.level);
                edge.length = diff * (200 - 5 * (Math.min(5, diff)));
            }
        } else {
            edge.physics = false;
        }
    });
};

Cfg.prototype.showCfgResults = function (data) {
    this.assignLevels(data);
    this.cfgVisualiser.setData(data);
    /* FIXME: This does not work. It's here because I suspected that not having content in the constructor was
     * breaking the move, but it does not seem like it
     */
    if (this.needsMove) {
        this.cfgVisualiser.moveTo({
            position: this.savedPos,
            animation: false,
            scale: this.savedScale,
        });
        this.needsMove = false;
    }
};

Cfg.prototype.onCompilerClose = function (compilerId) {
    if (this.compilerId === compilerId) {
        // We can't immediately close as an outer loop somewhere in GoldenLayout is iterating over
        // the hierarchy. We can't modify while it's being iterated over.
        this.close();
        _.defer(function (self) {
            self.container.close();
        }, this);
    }
};

Cfg.prototype.close = function () {
    this.eventHub.unsubscribe();
    if (this.isEditorCfg)
        this.eventHub.emit('codeCfgViewClosed', this.compilerId);
    else
        this.eventHub.emit('cfgViewClosed', this.compilerId);
    this.cfgVisualiser.destroy();
};

Cfg.prototype.saveState = function () {
    this.container.setState(this.currentState());
};

Cfg.prototype.getEffectiveOptions = function () {
    return this.toggles.get();
};

Cfg.prototype.currentState = function () {
    return {
        id: this.compilerId,
        editorid: this._editorid,
        selectedFn: this.currentFunc,
        pos: this.cfgVisualiser.getViewPosition(),
        scale: this.cfgVisualiser.getScale(),
        options: this.getEffectiveOptions(),
    };
};

module.exports = {
    Cfg: Cfg,
};


/***/ }),

/***/ "62a2":
/*!**********************************!*\
  !*** ./static/history-widget.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2019, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.



var
    $ = __webpack_require__(/*! jquery */ "EVdn"),
    _ = __webpack_require__(/*! underscore */ "xG9w"),
    monaco = __webpack_require__(/*! monaco-editor */ "M/lh"),
    ga = __webpack_require__(/*! analytics */ "9vLr"),
    History = __webpack_require__(/*! ./history */ "Bp6e");

function HistoryDiffState(model) {
    this.model = model;
    this.result = null;
}

HistoryDiffState.prototype.update = function (result) {
    this.result = result.sources;
    this.refresh();

    return true;
};

HistoryDiffState.prototype.refresh = function () {
    var output = this.result || [];
    var content = '';
    _.each(output, function (val) {
        if (content.length > 0) {
            content += '\n';
        }
        content += '/****** ' + val.lang + ' ******/\n';
        content += val.source;
    });
    this.model.setValue(content);
};

function HistoryWidget() {
    this.modal = null;
    this.diffEditor = null;
    this.lhs = null;
    this.rhs = null;
    this.currentList = [];
}

HistoryWidget.prototype.initializeIfNeeded = function () {
    if (this.modal === null) {
        this.modal = $('#history');

        var placeholder = this.modal.find('.monaco-placeholder');
        this.diffEditor = monaco.editor.createDiffEditor(placeholder[0], {
            fontFamily: 'Consolas, "Liberation Mono", Courier, monospace',
            scrollBeyondLastLine: true,
            readOnly: true,
            language: 'c++',
            minimap: {
                enabled: true,
            },
        });

        this.lhs = new HistoryDiffState(monaco.editor.createModel('', 'c++'));
        this.rhs = new HistoryDiffState(monaco.editor.createModel('', 'c++'));
        this.diffEditor.setModel({ original: this.lhs.model, modified: this.rhs.model });

        this.modal.find('.inline-diff-checkbox').click(_.bind(function (event) {
            var inline = $(event.target).prop('checked');
            this.diffEditor.updateOptions({
                renderSideBySide: !inline,
            });
            this.resizeLayout();
        }, this));
    }
};

HistoryWidget.prototype.getLanguagesFromHistoryEntry = function (entry) {
    return _.pluck(entry.sources, 'lang');
};

HistoryWidget.prototype.populateFromLocalStorage = function () {
    this.currentList = History.sortedList();
    this.populate(
        this.modal.find('.historiccode'),
        _.map(this.currentList, _.bind(function (data) {
            var dt = new Date(data.dt);
            var languages = this.getLanguagesFromHistoryEntry(data).join(', ');
            return {
                dt: data.dt,
                name: dt.toString().replace(/\s\(.*\)/, '').concat(' (' + languages + ')'),
                load: _.bind(function () {
                    this.onLoad(data);
                    this.modal.modal('hide');
                }, this),
            };
        }, this)));
};

HistoryWidget.prototype.hideRadiosAndSetDiff = function () {
    var root = this.modal.find('.historiccode');
    var items = root.find('li:not(.template)');

    var foundbase = false;
    var foundcomp = false;

    items.each(_.bind(function (idx, elem) {
        var li = $(elem);
        var dt = li.data('dt');

        var base = li.find('.base');
        var comp = li.find('.comp');

        var baseShouldBeVisible = true;
        var compShouldBeVisible = true;

        if (comp.prop('checked')) {
            foundcomp = true;
            baseShouldBeVisible = false;

            var itemRight = _.find(this.currentList, function (item) {
                return (item.dt === dt);
            });

            this.rhs.update(itemRight);
        } else if (base.prop('checked')) {
            foundbase = true;

            var itemLeft = _.find(this.currentList, function (item) {
                return (item.dt === dt);
            });

            this.lhs.update(itemLeft);
        }

        if (foundbase && foundcomp) {
            compShouldBeVisible = false;
        } else if (!foundbase && !foundcomp) {
            baseShouldBeVisible = false;
        }

        if (compShouldBeVisible) {
            comp.css('visibility', '');
        } else {
            comp.css('visibility', 'hidden');
        }

        if (baseShouldBeVisible) {
            base.css('visibility', '');
        } else {
            base.css('visibility', 'hidden');
        }
    }, this));
};

HistoryWidget.prototype.populate = function (root, list) {
    root.find('li:not(.template)').remove();
    var template = root.find('.template');

    var baseMarked = false;
    var compMarked = false;

    _.each(list, _.bind(function (elem) {
        var li = template
            .clone()
            .removeClass('template')
            .appendTo(root);

        li.data('dt', elem.dt);

        var base = li.find('.base');
        var comp = li.find('.comp');

        if (!compMarked) {
            comp.prop('checked', 'checked');
            compMarked = true;
        } else if (!baseMarked) {
            base.prop('checked', 'checked');
            baseMarked = true;
        }

        base.click(_.bind(this.hideRadiosAndSetDiff, this));
        comp.click(_.bind(this.hideRadiosAndSetDiff, this));

        li.find('a').text(elem.name).click(elem.load);
    }, this));

    this.hideRadiosAndSetDiff();
};

HistoryWidget.prototype.resizeLayout = function () {
    var tabcontent = this.modal.find('div.tab-content');
    this.diffEditor.layout({
        width: tabcontent.width(),
        height: tabcontent.height() - 20,
    });
};

HistoryWidget.prototype.run = function (onLoad) {
    this.initializeIfNeeded();
    this.populateFromLocalStorage();
    this.onLoad = onLoad;

    this.modal.on('shown.bs.modal', _.bind(function () {
        this.resizeLayout();
    }, this));

    this.modal.modal();

    ga.proxy('send', {
        hitType: 'event',
        eventCategory: 'OpenModalPane',
        eventAction: 'History',
    });
};

module.exports = {
    HistoryWidget: HistoryWidget,
};


/***/ }),

/***/ "8LMM":
/*!*******************************!*\
  !*** ./static/changelog.html ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"commits-list\">\n    <p>This is an automated file created by running <code>make changelog</code>.</p>\n</div>\n";

/***/ }),

/***/ "9vLr":
/*!*****************************!*\
  !*** ./static/analytics.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2016, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


var options = __webpack_require__(/*! options */ "3M42");
var Sentry = __webpack_require__(/*! @sentry/browser */ "WSEr");

if (options.sentryDsn) {
    Sentry.init({
        dsn: options.sentryDsn,
        release: options.release,
        environment: options.sentryEnvironment,
    });
}

function GAProxy() {
    this.hasBeenEnabled = false;
    this.isEnabled = false;

    this.proxy = function () {};

    this.initialise = function () {
        if (!this.isEnabled && options.googleAnalyticsEnabled) {
            // Check if this is a re-enable, as the script is already there in this case
            if (!this.hasBeenEnabled) {
                (function (i, s, o, g, r, a, m) {
                    i.GoogleAnalyticsObject = r;
                    i[r] = i[r] || function () {
                        (i[r].q = i[r].q || []).push(arguments);
                    };
                    i[r].l = 1 * new Date();
                    a = s.createElement(o);
                    m = s.getElementsByTagName(o)[0];
                    a.async = 1;
                    a.src = g;
                    m.parentNode.insertBefore(a, m);
                })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
                window.ga('set', 'anonymizeIp', true);
                window.ga('create', options.googleAnalyticsAccount, 'auto');
                window.ga('send', 'pageview');
            }
            this.proxy = function () {
                window.ga.apply(window.ga, arguments);
            };
            this.isEnabled = true;
            this.hasBeenEnabled = true;
        } else {
            this.isEnabled = false;
            this.proxy = function () {};
        }
    };

    this.toggle = function (doEnable) {
        if (doEnable) {
            if (!this.isEnabled) this.initialise();
        } else {
            this.isEnabled = false;
            this.proxy = function () {};
        }
    };
}

var ga = new GAProxy();

module.exports = ga;


/***/ }),

/***/ "ArzH":
/*!**************************************!*\
  !*** ./static/timing-info-widget.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2021, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


var $ = __webpack_require__(/*! jquery */ "EVdn");
var _ = __webpack_require__(/*! underscore */ "xG9w");
var Alert = __webpack_require__(/*! ./alert */ "By64");

// eslint-disable-next-line
var Chart = __webpack_require__(/*! chart.js */ "MO+k");

function TimingInfo() {
    this.modal = null;
    this.alertSystem = new Alert();
    this.onLoad = _.identity;
    this.base = window.httpRoot;
    this.ctx = null;

    this.data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'time in ms',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: [
                'red',
                'orange',
                'yellow',
                'green',
                'blue',
                'indigo',
                'violet',
            ],
        }],
    };
}

TimingInfo.prototype.addBuildResultToTimings = function (timings, buildResult) {
    if (buildResult.packageDownloadAndUnzipTime) {
        timings.push({
            step: 'Download binary from cache',
            time: buildResult.packageDownloadAndUnzipTime,
        });
    } else {
        if (buildResult.downloads) {
            timings = timings.concat(buildResult.downloads);
        }

        if (buildResult.buildsteps) {
            _.forEach(buildResult.buildsteps, function (step) {
                timings.push({
                    step: step.step,
                    time: step.execTime,
                });
            });
        } else if (buildResult.execTime) {
            timings.push({
                step: 'Compilation',
                time: buildResult.execTime,
            });
        }
    }
};

TimingInfo.prototype.initializeChartDataFromResult = function (compileResult, totalTime) {
    var timings = [];

    this.data.labels = [];
    this.data.datasets[0].barThickness = 20;
    this.data.datasets[0].data = [];

    if (compileResult.retreivedFromCache) {
        timings.push({
            step: 'Retreive result from cache',
            time: compileResult.retreivedFromCacheTime,
        });

        if (compileResult.packageDownloadAndUnzipTime) {
            timings.push({
                step: 'Download binary from cache',
                time: compileResult.execTime,
            });
        }

        if (compileResult.execResult && compileResult.execResult.execTime) {
            timings.push({
                step: 'Execution',
                time: compileResult.execResult.execTime,
            });
        }
    } else {

        if (compileResult.packageDownloadAndUnzipTime) {
            timings.push({
                step: 'Download binary from cache',
                time: compileResult.execTime,
            });
        } else {

            if (compileResult.execResult) {
                if (compileResult.execResult.buildResult) {
                    this.addBuildResultToTimings(timings, compileResult.execResult.buildResult);
                }

                if (compileResult.objdumpTime) {
                    timings.push({
                        step: 'Disassembly',
                        time: compileResult.objdumpTime,
                    });
                }

                if (compileResult.parsingTime) {
                    timings.push({
                        step: 'ASM parsing',
                        time: compileResult.parsingTime,
                    });
                }

                if (compileResult.execResult.execTime) {
                    timings.push({
                        step: 'Execution',
                        time: compileResult.execResult.execTime,
                    });
                }

            } else {
                if (compileResult.downloads) {
                    timings = timings.concat(compileResult.downloads);
                }

                if (!compileResult.didExecute && compileResult.execTime) {
                    timings.push({
                        step: 'Compilation',
                        time: compileResult.execTime,
                    });
                }

                if (compileResult.objdumpTime) {
                    timings.push({
                        step: 'Disassembly',
                        time: compileResult.objdumpTime,
                    });
                }

                if (compileResult.parsingTime) {
                    timings.push({
                        step: 'ASM parsing',
                        time: compileResult.parsingTime,
                    });
                }
            }
        }
    }

    if (compileResult.didExecute) {
        if (compileResult.buildResult) {
            if (compileResult.buildResult.packageDownloadAndUnzipTime) {
                timings.push({
                    step: 'Download binary from cache',
                    time: compileResult.buildResult.packageDownloadAndUnzipTime,
                });
            } else {
                if (compileResult.execResult.buildResult) {
                    this.addBuildResultToTimings(timings, compileResult.execResult.buildResult);
                }
            }
        }

        timings.push({
            step: 'Execution',
            time: compileResult.execTime,
        });
    }

    var stepsTotal = 0;
    timings.forEach(_.bind(function (timing) {
        this.data.labels.push(timing.step);
        this.data.datasets[0].data.push(timing.time);

        stepsTotal += parseInt(timing.time, 10);
    }, this));

    this.data.labels.push('Network, JS, waiting, etc.');
    this.data.datasets[0].data.push(totalTime - stepsTotal);

    if (totalTime - stepsTotal < 0) {
        this.data.datasets[0].data = [totalTime];
        this.data.labels = ['Browser cache'];
    }
};

TimingInfo.prototype.initializeIfNeeded = function () {
    if ((this.modal === null) || (this.modal.length === 0)) {
        this.modal = $('#timing-info');
    }

    var chartDiv = this.modal.find('#chart');
    chartDiv.html('');

    var canvas = $('<canvas id="timing-chart" width="400" height="400"></canvas>');
    chartDiv.append(canvas);

    this.ctx = canvas[0].getContext('2d');
    this.chart = new Chart(this.ctx, {
        type: 'bar',
        data: this.data,
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                    },
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    },
                }],
            },
        },
    });
};

TimingInfo.prototype.run = function (onLoad, compileResult, totalTime) {
    this.initializeChartDataFromResult(compileResult, totalTime);
    this.initializeIfNeeded();
    this.modal.modal('show');
};

module.exports = { TimingInfo: TimingInfo };


/***/ }),

/***/ "Bp6e":
/*!***************************!*\
  !*** ./static/history.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2019, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


var
    local = __webpack_require__(/*! ./local */ "/Zv+"),
    _ = __webpack_require__(/*! underscore */ "xG9w");

var maxHistoryEntries = 30;

function extractEditorSources(content) {
    var sources = [];

    for (var i = 0; i < content.length; i++) {
        var component = content[i];
        if (component.content) {
            var subsources = extractEditorSources(component.content);
            if (subsources.length > 0) {
                sources = sources.concat(subsources);
            }
        } else if (component.componentName === 'codeEditor') {
            sources.push({
                lang: component.componentState.lang,
                source: component.componentState.source,
            });
        }
    }

    return sources;
}

function list() {
    var stringifiedHistory = local.get('history');
    return JSON.parse(stringifiedHistory ? stringifiedHistory : '[]');
}

function getArrayWithJustTheCode(editorSources) {
    return _.pluck(editorSources, 'source');
}

function getSimilarSourcesIndex(completeHistory, sourcesToCompareTo) {
    var duplicateIdx = -1;

    for (var i = 0; i < completeHistory.length; i++) {
        var diff = _.difference(sourcesToCompareTo, getArrayWithJustTheCode(completeHistory[i].sources));
        if (diff.length === 0) {
            duplicateIdx = i;
            break;
        }
    }

    return duplicateIdx;
}

function push(stringifiedConfig) {
    var config = JSON.parse(stringifiedConfig);
    var sources = extractEditorSources(config.content);
    if (sources.length > 0) {
        var completeHistory = list();
        var duplicateIdx = getSimilarSourcesIndex(completeHistory, getArrayWithJustTheCode(sources));

        if (duplicateIdx === -1) {
            while (completeHistory.length >= maxHistoryEntries) {
                completeHistory.shift();
            }
    
            completeHistory.push({
                dt: Date.now(),
                sources: sources,
                config: config,
            });
        } else {
            var entry = completeHistory[duplicateIdx];
            entry.dt = Date.now();
        }

        local.set('history', JSON.stringify(completeHistory));
    }
}

function sortedList() {
    var sorted = list();

    sorted.sort(function (a, b) {
        return b.dt - a.dt;
    });

    return sorted;
}

function sources(language) {
    var sourcelist = [];
    _.each(sortedList(), function (entry) {
        _.each(entry.sources, function (source) {
            if (source.lang === language) {
                sourcelist.push({
                    dt: entry.dt,
                    source: source.source,
                });
            }
        });
    });

    return sourcelist;
}

module.exports = {
    push: _.debounce(push, 500),
    list: list,
    sortedList: sortedList,
    sources: sources,
};


/***/ }),

/***/ "By64":
/*!*************************!*\
  !*** ./static/alert.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2017, Matt Godbolt & Rubén Rincón
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.



var _ = __webpack_require__(/*! underscore */ "xG9w");
var $ = __webpack_require__(/*! jquery */ "EVdn");

function Alert() {
    this.yesHandler = null;
    this.noHandler = null;
    this.prefixMessage = '';
    var yesNo = $('#yes-no');
    yesNo.find('button.yes').click(_.bind(function () {
        if (this.yesHandler) this.yesHandler();
    }, this));
    yesNo.find('button.no').click(_.bind(function () {
        if (this.noHandler) this.noHandler();
    }, this));
}

Alert.prototype.alert = function (title, body, onClose) {
    var modal = $('#alert');
    modal.find('.modal-title').html(title);
    modal.find('.modal-body').html(body);
    modal.modal();
    if (onClose) {
        modal.off('hidden.bs.modal');
        modal.on('hidden.bs.modal', onClose);
    }
    return modal;
};

/***
 * Asks the user a two choice question, where the title, content & buttons are customizable
 *
 * @param title
 * @param question
 * @param handlers
 * @param handlers.yes {function?} Function to execute on yes press
 * @param handlers.no {function?} Function to execute on no press
 * @param handlers.yesHtml {HTML?} HTMl markup of yes button
 * @param handlers.yesClass {string?} Custom class to add to yes button
 * @param handlers.noHtml {HTML?} HTMl markup of no button
 * @param handlers.noClass {string?} Custom class to add to no button
 * @param handlers.onClose {function?} Function to execute on pane closure
 */
Alert.prototype.ask = function (title, question, handlers) {
    var modal = $('#yes-no');
    this.yesHandler = handlers ? handlers.yes : function () {};
    this.noHandler = handlers ? handlers.no : function () {};
    modal.find('.modal-title').html(title);
    modal.find('.modal-body').html(question);
    if (handlers.yesHtml) {
        modal.find('.modal-footer .yes').html(handlers.yesHtml);
    }
    if (handlers.yesClass) {
        modal.find('.modal-footer .yes').addClass(handlers.yesClass);
    }
    if (handlers.noHtml) {
        modal.find('.modal-footer .no').html(handlers.noHtml);
    }
    if (handlers.noClass) {
        modal.find('.modal-footer .no').addClass(handlers.noClass);
    }
    if (handlers.onClose) {
        modal.off('hidden.bs.modal');
        modal.on('hidden.bs.modal', handlers.onClose);
    }
    return modal.modal();
};

/***
 * @typedef {number} Milliseconds
 */

/***
 * Notifies the user of something by a popup which can be stacked, autodismissed etc... based on options
 *
 * @param body {string} Inner message html
 * @param options {object} Object containing some extra settings
 * @param options.group {string} What group this notification is from. Sets data-group's value.
 *  Default: ""
 * @param options.collapseSimilar {boolean} If set to true, other notifications with the same group
 *  will be removed before sending this one. (Note that this only has any effect if options.group is set).
 *  Default: true
 * @param options.alertClass {string} Space separated classes to give to the notification div element.
 *  Default: ""
 * @param options.autoDismiss {boolean} If set to true, the notification will fade out and be removed automatically.
 *  Default: true
 * @param options.dismissTime {Milliseconds} If allowed by options.autoDismiss, controls how long in the notification
 *  will be visible before being automatically removed.
 *  Default: 5000
 *  Min: 1000
 */
Alert.prototype.notify = function (body, options) {
    var container = $('#notifications');
    if (!container) return;
    var newElement = $('<div class="alert notification" tabindex="-1" role="dialog">' +
        '<button type="button" class="close" style="float: left;margin-right: 5px;" data-dismiss="alert">' +
            '&times;' +
        '</button>' +
        '<span id="msg">' + this.prefixMessage + body + '</span>' +
        '</div>');
    if (!options) options = {};
    // Set defaults
    // Collapse similar by default
    options.collapseSimilar = ('collapseSimilar' in options) ? options.collapseSimilar : true;
    // autoDismiss by default
    options.autoDismiss = ('autoDismiss' in options) ? options.autoDismiss : true;
    // Dismiss this after 5000ms by default
    options.dismissTime = options.dismissTime ? Math.max(1000, options.dismissTime) : 5000;
    if (options.group) {
        if (options.collapseSimilar) {
            // Only collapsing if a group has been specified
            container.find('[data-group="' + options.group + '"]').remove();
        }
        newElement.attr('data-group', options.group);  // Add the group to the data-group
    }
    if (options.alertClass) {  // If we want a custom class, apply it
        newElement.addClass(options.alertClass);
    }
    if (options.autoDismiss) {  // Dismiss this after dismissTime
        setTimeout(function () {
            newElement.fadeOut('slow', function () {
                newElement.remove();
            });
        }, options.dismissTime);
    }
    container.append(newElement);  // Add the new notification to the container
};

module.exports = Alert;


/***/ }),

/***/ "DIyg":
/*!*************************************************!*\
  !*** ./static/modes/gccdump-rtl-gimple-mode.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2017, Marc Poulhiès - Kalray Inc.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.

// Copyright (c) Microsoft Corporation. All rights reserved.
// Released under the MIT license

// this is mostly based on 'mylang' example from https://microsoft.github.io/monaco-editor/monarch.html


var monaco = __webpack_require__(/*! monaco-editor */ "M/lh");

function definition() {
    return {
        // Set defaultToken to invalid to see what you do not tokenize yet
        // defaultToken: 'invalid',

        keywords: [
            'abstract', 'continue', 'for', 'new', 'switch', 'assert', 'goto', 'do',
            'if', 'private', 'this', 'break', 'protected', 'throw', 'else', 'public',
            'enum', 'return', 'catch', 'try', 'interface', 'static', 'class',
            'finally', 'const', 'super', 'while', 'true', 'false',

            // Generated using the following:
            // #define DEF_RTL_EXPR(a,b,c,d) b,
            // keyword: [
            // #include <rtl.def>
            // ],
            // And by invoking the cpp :
            // cpp -P -I/path/to/gcc/gcc/

            // All RTL classes.
            'UnKnown',
            'value',
            'debug_expr',
            'expr_list',
            'insn_list',
            'int_list',
            'sequence',
            'address',
            'debug_insn',
            'insn',
            'jump_insn',
            'call_insn',
            'jump_table_data',
            'barrier',
            'code_label',
            'note',
            'cond_exec',
            'parallel',
            'asm_input',
            'asm_operands',
            'unspec',
            'unspec_volatile',
            'addr_vec',
            'addr_diff_vec',
            'prefetch',
            'set',
            'use',
            'clobber',
            'call',
            'return',
            'simple_return',
            'eh_return',
            'trap_if',
            'const_int',
            'const_fixed',
            'const_double',
            'const_vector',
            'const_string',
            'const',
            'pc',
            'reg',
            'scratch',
            'subreg',
            'strict_low_part',
            'concat',
            'concatn',
            'mem',
            'label_ref',
            'symbol_ref',
            'cc0',
            'if_then_else',
            'compare',
            'plus',
            'minus',
            'neg',
            'mult',
            'ss_mult',
            'us_mult',
            'div',
            'ss_div',
            'us_div',
            'mod',
            'udiv',
            'umod',
            'and',
            'ior',
            'xor',
            'not',
            'ashift',
            'rotate',
            'ashiftrt',
            'lshiftrt',
            'rotatert',
            'smin',
            'smax',
            'umin',
            'umax',
            'pre_dec',
            'pre_inc',
            'post_dec',
            'post_inc',
            'pre_modify',
            'post_modify',
            'ne',
            'eq',
            'ge',
            'gt',
            'le',
            'lt',
            'geu',
            'gtu',
            'leu',
            'ltu',
            'unordered',
            'ordered',
            'uneq',
            'unge',
            'ungt',
            'unle',
            'unlt',
            'ltgt',
            'sign_extend',
            'zero_extend',
            'truncate',
            'float_extend',
            'float_truncate',
            'float',
            'fix',
            'unsigned_float',
            'unsigned_fix',
            'fract_convert',
            'unsigned_fract_convert',
            'sat_fract',
            'unsigned_sat_fract',
            'abs',
            'sqrt',
            'bswap',
            'ffs',
            'clrsb',
            'clz',
            'ctz',
            'popcount',
            'parity',
            'sign_extract',
            'zero_extract',
            'high',
            'lo_sum',
            'vec_merge',
            'vec_select',
            'vec_concat',
            'vec_duplicate',
            'ss_plus',
            'us_plus',
            'ss_minus',
            'ss_neg',
            'us_neg',
            'ss_abs',
            'ss_ashift',
            'us_ashift',
            'us_minus',
            'ss_truncate',
            'us_truncate',
            'fma',
            'var_location',
            'debug_implicit_ptr',
            'entry_value',
            'debug_parameter_ref',
        ],

        typeKeywords: [
            'boolean', 'double', 'byte', 'int', 'short', 'char', 'void', 'long', 'float',
        ],

        operators: [
            '=', '>', '<', '!', '~', '?', ':', '==', '<=', '>=', '!=',
            '&&', '||', '++', '--', '+', '-', '*', '/', '&', '|', '^', '%',
            '<<', '>>', '>>>', '+=', '-=', '*=', '/=', '&=', '|=', '^=',
            '%=', '<<=', '>>=', '>>>=',
        ],

        // we include these common regular expressions
        symbols: /[=><!~?:&|+\-*/^%]+/,

        // C# style strings
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

        // The main tokenizer for our languages
        tokenizer: {
            root: [
                // identifiers and keywords
                [/[a-z_$][\w$]*/, {
                    cases: {
                        '@typeKeywords': 'keyword',
                        '@keywords': 'keyword',
                        '@default': 'identifier',
                    },
                }],
                [/[A-Z][\w$]*/, 'type.identifier'],  // to show class names nicely

                // whitespace
                {include: '@whitespace'},

                // delimiters and operators
                [/[{}()[\]]/, '@brackets'],
                [/[<>](?!@symbols)/, '@brackets'],
                [/@symbols/, {
                    cases: {
                        '@operators': 'operator',
                        '@default': '',
                    },
                }],

                // @ annotations.
                // As an example, we emit a debugging log message on these tokens.
                // Note: message are supressed during the first load -- change some lines to see them.
                //  [/@\s*[a-zA-Z_\$][\w\$]*/, { token: 'annotation', log: 'annotation token: $0' }],

                // numbers
                [/\d*\.\d+([eE][-+]?\d+)?/, 'number.float'],
                [/0[xX][0-9a-fA-F]+/, 'number.hex'],
                [/\d+/, 'number'],

                // delimiter: after number because of .\d floats
                [/[;,.]/, 'delimiter'],

                // strings
                [/"([^"\\]|\\.)*$/, 'string.invalid'],  // non-teminated string
                [/"/, {token: 'string.quote', bracket: '@open', next: '@string'}],

                // characters
                [/'[^\\']'/, 'string'],
                [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
                [/'/, 'string.invalid'],
            ],

            comment: [
                [/[^/*]+/, 'comment'],
                [/\/\*/, 'comment', '@push'],    // nested comment
                ['\\*/', 'comment', '@pop'],
                [/[/*]/, 'comment'],
            ],

            string: [
                [/[^\\"]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/"/, {token: 'string.quote', bracket: '@close', next: '@pop'}],
            ],

            whitespace: [
                [/[ \t\r\n]+/, 'white'],
                [/\/\*/, 'comment', '@comment'],
                [/\/\/.*$/, 'comment'],
                [/^;;.*$/, 'comment'],

            ],
        },
    };
}

monaco.languages.register({id: 'gccdump-rtl-gimple'});
monaco.languages.setMonarchTokensProvider('gccdump-rtl-gimple', definition());


/***/ }),

/***/ "DJCN":
/*!**************************!*\
  !*** ./static/colour.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2016, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.



var _ = __webpack_require__(/*! underscore */ "xG9w");
var monaco = __webpack_require__(/*! monaco-editor */ "M/lh");

// If you want to use an scheme in every theme, set `theme: ['all']`
var schemes = [
    {name: 'rainbow', desc: 'Rainbow 1', count: 12, themes: ['default']},
    {name: 'rainbow2', desc: 'Rainbow 2', count: 12, themes: ['default']},
    {name: 'earth', desc: 'Earth tones (colourblind safe)', count: 9, themes: ['default']},
    {name: 'green-blue', desc: 'Greens and blues (colourblind safe)', count: 4, themes: ['default']},
    {name: 'gray-shade', desc: 'Gray shades', count: 4, themes: ['dark']},
];

function applyColours(editor, colours, schemeName, prevDecorations) {
    var scheme = _.findWhere(schemes, {name: schemeName});
    if (!scheme) {
        scheme = schemes[0];
    }
    var newDecorations = _.map(colours, function (ordinal, line) {
        line = parseInt(line) + 1;
        return {
            range: new monaco.Range(line, 1, line, 1),
            options: {
                isWholeLine: true,
                className: 'line-linkage ' + scheme.name + '-' + (ordinal % scheme.count),
            },
        };
    });
    return editor.deltaDecorations(prevDecorations, newDecorations);
}

module.exports = {
    applyColours: applyColours,
    schemes: schemes,
};


/***/ }),

/***/ "E+t5":
/*!********************************!*\
  !*** ./static/panes/editor.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2016, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


var _ = __webpack_require__(/*! underscore */ "xG9w");
var $ = __webpack_require__(/*! jquery */ "EVdn");
var colour = __webpack_require__(/*! ../colour */ "DJCN");
var loadSaveLib = __webpack_require__(/*! ../load-save */ "OT6Z");
var FontScale = __webpack_require__(/*! ../fontscale */ "zeU8");
var Components = __webpack_require__(/*! ../components */ "hqpU");
var monaco = __webpack_require__(/*! monaco-editor */ "M/lh");
var options = __webpack_require__(/*! ../options */ "3M42");
var Alert = __webpack_require__(/*! ../alert */ "By64");
var local = __webpack_require__(/*! ../local */ "/Zv+");
var ga = __webpack_require__(/*! ../analytics */ "9vLr");
var monacoVim = __webpack_require__(/*! monaco-vim */ "iH6r");
var monacoConfig = __webpack_require__(/*! ../monaco-config */ "u8Pk");
__webpack_require__(/*! ../modes/cppp-mode */ "JdVj");
__webpack_require__(/*! ../modes/cppx-gold-mode */ "hP72");
__webpack_require__(/*! ../modes/d-mode */ "NSir");
__webpack_require__(/*! ../modes/ispc-mode */ "zVv0");
__webpack_require__(/*! ../modes/llvm-ir-mode */ "dOLS");
__webpack_require__(/*! ../modes/haskell-mode */ "0YE8");
__webpack_require__(/*! ../modes/ocaml-mode */ "21Zm");
__webpack_require__(/*! ../modes/clean-mode */ "1uy5");
__webpack_require__(/*! ../modes/cuda-mode */ "tOun");
__webpack_require__(/*! ../modes/fortran-mode */ "HAQ9");
__webpack_require__(/*! ../modes/zig-mode */ "UHCa");
__webpack_require__(/*! ../modes/nc-mode */ "pf0N");
__webpack_require__(/*! ../modes/ada-mode */ "qiXD");
__webpack_require__(/*! ../modes/nim-mode */ "L2ri");
__webpack_require__(/*! selectize */ "QPhV");

var loadSave = new loadSaveLib.LoadSave();
var languages = options.languages;

function Editor(hub, state, container) {
    this.id = state.id || hub.nextEditorId();
    this.container = container;
    this.domRoot = container.getElement();
    this.domRoot.html($('#codeEditor').html());
    this.hub = hub;
    this.eventHub = hub.createEventHub();
    // Should probably be its own function somewhere
    this.settings = JSON.parse(local.get('settings', '{}'));
    this.ourCompilers = {};
    this.ourExecutors = {};
    this.httpRoot = window.httpRoot;
    this.widgetsByCompiler = {};
    this.asmByCompiler = {};
    this.busyCompilers = {};
    this.colours = [];

    this.decorations = {};
    this.prevDecorations = [];
    this.extraDecorations = [];

    this.fadeTimeoutId = -1;

    this.editorSourceByLang = {};
    this.alertSystem = new Alert();
    this.alertSystem.prefixMessage = 'Editor #' + this.id + ': ';

    this.awaitingInitialResults = false;
    this.selection = state.selection;

    this.langKeys = _.keys(languages);
    this.initLanguage(state);

    var root = this.domRoot.find('.monaco-placeholder');
    var legacyReadOnly = state.options && !!state.options.readOnly;
    this.editor = monaco.editor.create(root[0], monacoConfig.extendConfig({
        language: this.currentLanguage.monaco,
        readOnly: !!options.readOnly || legacyReadOnly || window.compilerExplorerOptions.mobileViewer,
        glyphMargin: !options.embedded,
    }, this.settings));
    this.editor.getModel().setEOL(monaco.editor.EndOfLineSequence.LF);

    if (state.source !== undefined) {
        this.setSource(state.source);
    } else {
        this.updateEditorCode();
    }

    var startFolded = /^[/*#;]+\s*setup.*/;
    if (state.source && state.source.match(startFolded)) {
        // With reference to https://github.com/Microsoft/monaco-editor/issues/115
        // I tried that and it didn't work, but a delay of 500 seems to "be enough".
        // FIXME: Currently not working - No folding is performed
        setTimeout(_.bind(function () {
            this.editor.setSelection(new monaco.Selection(1, 1, 1, 1));
            this.editor.focus();
            this.editor.getAction('editor.fold').run();
            //this.editor.clearSelection();
        }, this), 500);
    }

    this.initEditorActions();
    this.initButtons(state);
    this.initCallbacks();

    if (this.settings.useVim) {
        this.enableVim();
    }

    var usableLanguages = _.filter(languages, function (language) {
        return hub.compilerService.compilersByLang[language.id];
    });

    this.languageBtn.selectize({
        sortField: 'name',
        valueField: 'id',
        labelField: 'name',
        searchField: ['name'],
        options: _.map(usableLanguages, _.identity),
        items: [this.currentLanguage.id],
        dropdownParent: 'body',
    }).on('change', _.bind(function (e) {
        this.onLanguageChange($(e.target).val());
    }, this));
    this.selectize = this.languageBtn[0].selectize;
    // We suppress posting changes until the user has stopped typing by:
    // * Using _.debounce() to run emitChange on any key event or change
    //   only after a delay.
    // * Only actually triggering a change if the document text has changed from
    //   the previous emitted.
    this.lastChangeEmitted = null;
    this.onSettingsChange(this.settings);
    // this.editor.on("keydown", _.bind(function () {
    //     // Not strictly a change; but this suppresses changes until some time
    //     // after the last key down (be it an actual change or a just a cursor
    //     // movement etc).
    //     this.debouncedEmitChange();
    // }, this));

    this.updateTitle();
    this.updateState();
    ga.proxy('send', {
        hitType: 'event',
        eventCategory: 'OpenViewPane',
        eventAction: 'Editor',
    });
    ga.proxy('send', {
        hitType: 'event',
        eventCategory: 'LanguageChange',
        eventAction: this.currentLanguage.id,
    });
}

Editor.prototype.onMotd = function (motd) {
    this.extraDecorations = motd.decorations;
    this.updateExtraDecorations();
};

Editor.prototype.updateExtraDecorations = function () {
    var decorationsDirty = false;
    _.each(this.extraDecorations, _.bind(function (decoration) {
        if (decoration.filter && decoration.filter.indexOf(this.currentLanguage.name.toLowerCase()) < 0) return;
        var match = this.editor.getModel().findNextMatch(decoration.regex, {
            column: 1,
            lineNumber: 1,
        }, true, true, null, false);
        if (match !== this.decorations[decoration.name]) {
            decorationsDirty = true;
            this.decorations[decoration.name] = match ? [{range: match.range, options: decoration.decoration}] : null;
        }
    }, this));
    if (decorationsDirty)
        this.updateDecorations();
};

// If compilerId is undefined, every compiler will be pinged
Editor.prototype.maybeEmitChange = function (force, compilerId) {
    var source = this.getSource();
    if (!force && source === this.lastChangeEmitted) return;

    this.updateExtraDecorations();

    this.lastChangeEmitted = source;
    this.eventHub.emit('editorChange', this.id, this.lastChangeEmitted, this.currentLanguage.id, compilerId);
};

Editor.prototype.updateState = function () {
    var state = {
        id: this.id,
        source: this.getSource(),
        lang: this.currentLanguage.id,
        selection: this.selection,
    };
    this.fontScale.addState(state);
    this.container.setState(state);

    this.updateButtons();
};

Editor.prototype.setSource = function (newSource) {
    this.updateSource(newSource);

    if (window.compilerExplorerOptions.mobileViewer) {
        $(this.domRoot.find('.monaco-placeholder textarea')).hide();
    }
};

Editor.prototype.onNewSource = function (editorId, newSource) {
    if (this.id === editorId) {
        this.setSource(newSource);
    }
};

Editor.prototype.getSource = function () {
    return this.editor.getModel().getValue();
};

Editor.prototype.initLanguage = function (state) {
    this.currentLanguage = languages[this.langKeys[0]];
    this.waitingForLanguage = state.source && !state.lang;
    if (languages[this.settings.defaultLanguage]) {
        this.currentLanguage = languages[this.settings.defaultLanguage];
    }
    if (languages[state.lang]) {
        this.currentLanguage = languages[state.lang];
    } else if (this.settings.newEditorLastLang && languages[this.hub.lastOpenedLangId]) {
        this.currentLanguage = languages[this.hub.lastOpenedLangId];
    }
};

Editor.prototype.initCallbacks = function () {
    this.fontScale.on('change', _.bind(this.updateState, this));

    this.container.on('resize', this.resize, this);
    this.container.on('shown', this.resize, this);
    this.container.on('open', _.bind(function () {
        this.eventHub.emit('editorOpen', this.id);
    }, this));
    this.container.on('destroy', this.close, this);
    this.container.layoutManager.on('initialised', function () {
        // Once initialized, let everyone know what text we have.
        this.maybeEmitChange();
        // And maybe ask for a compilation (Will hit the cache most of the time)
        this.requestCompilation();
    }, this);

    this.eventHub.on('compilerOpen', this.onCompilerOpen, this);
    this.eventHub.on('executorOpen', this.onExecutorOpen, this);
    this.eventHub.on('compilerClose', this.onCompilerClose, this);
    this.eventHub.on('compiling', this.onCompiling, this);
    this.eventHub.on('compileResult', this.onCompileResponse, this);
    this.eventHub.on('selectLine', this.onSelectLine, this);
    this.eventHub.on('editorSetDecoration', this.onEditorSetDecoration, this);
    this.eventHub.on('editorLinkLine', this.onEditorLinkLine, this);
    this.eventHub.on('settingsChange', this.onSettingsChange, this);
    this.eventHub.on('conformanceViewOpen', this.onConformanceViewOpen, this);
    this.eventHub.on('conformanceViewClose', this.onConformanceViewClose, this);
    this.eventHub.on('resize', this.resize, this);
    this.eventHub.on('newSource', this.onNewSource, this);
    this.eventHub.on('motd', this.onMotd, this);
    this.eventHub.emit('requestMotd');

    this.editor.getModel().onDidChangeContent(_.bind(function () {
        this.debouncedEmitChange();
        this.updateState();
    }, this));

    this.mouseMoveThrottledFunction = _.throttle(_.bind(this.onMouseMove, this), 50);

    this.editor.onMouseMove(_.bind(function (e) {
        this.mouseMoveThrottledFunction(e);
    }, this));

    if (window.compilerExplorerOptions.mobileViewer) {
        // workaround for issue with contextmenu not going away when tapping somewhere else on the screen
        this.editor.onDidChangeCursorSelection(_.bind(function () {
            var contextmenu = $('div.context-view.monaco-menu-container');
            if (contextmenu.css('display') !== 'none') {
                contextmenu.hide();
            }
        }, this));
    }

    this.cursorSelectionThrottledFunction =
        _.throttle(_.bind(this.onDidChangeCursorSelection, this), 500);
    this.editor.onDidChangeCursorSelection(_.bind(function (e) {
        this.cursorSelectionThrottledFunction(e);
    }, this));

    this.eventHub.on('initialised', this.maybeEmitChange, this);

    $(document).on('keyup.editable', _.bind(function (e) {
        if (e.target === this.domRoot.find('.monaco-placeholder .inputarea')[0]) {
            if (e.which === 27) {
                this.onEscapeKey(e);
            } else if (e.which === 45) {
                this.onInsertKey(e);
            }
        }
    }, this));
};

Editor.prototype.onMouseMove = function (e) {
    if (e !== null && e.target !== null && this.settings.hoverShowSource && e.target.position !== null) {
        var pos = e.target.position;
        this.tryPanesLinkLine(pos.lineNumber, pos.column, false);
    }
};

Editor.prototype.onDidChangeCursorSelection = function (e) {
    if (this.awaitingInitialResults) {
        this.selection = e.selection;
        this.updateState();
    }
};

Editor.prototype.onEscapeKey = function () {
    if (this.editor.vimInUse) {
        var currentState = monacoVim.VimMode.Vim.maybeInitVimState_(this.vimMode);
        if (currentState.insertMode) {
            monacoVim.VimMode.Vim.exitInsertMode(this.vimMode);
        } else if (currentState.visualMode) {
            monacoVim.VimMode.Vim.exitVisualMode(this.vimMode, false);
        }
    }
};

Editor.prototype.onInsertKey = function (event) {
    if (this.editor.vimInUse) {
        var currentState = monacoVim.VimMode.Vim.maybeInitVimState_(this.vimMode);
        if (!currentState.insertMode) {
            var insertEvent = {
                preventDefault: event.preventDefault,
                stopPropagation: event.stopPropagation,
                browserEvent: {
                    key: 'i',
                    defaultPrevented: false,
                },
                keyCode: 39,
            };
            this.vimMode.handleKeyDown(insertEvent);
        }
    }
};

Editor.prototype.enableVim = function () {
    this.vimMode = monacoVim.initVimMode(this.editor, this.domRoot.find('#v-status')[0]);
    this.vimFlag.prop('class', 'btn btn-info');
    this.editor.vimInUse = true;
};

Editor.prototype.disableVim = function () {
    this.vimMode.dispose();
    this.domRoot.find('#v-status').html('');
    this.vimFlag.prop('class', 'btn btn-light');
    this.editor.vimInUse = false;
};

Editor.prototype.initButtons = function (state) {
    this.fontScale = new FontScale(this.domRoot, state, this.editor);
    this.languageBtn = this.domRoot.find('.change-language');
    // Ensure that the button is disabled if we don't have nothing to select
    // Note that is might be disabled for other reasons beforehand
    if (this.langKeys.length <= 1) {
        this.languageBtn.prop('disabled', true);
    }
    this.topBar = this.domRoot.find('.top-bar');
    this.hideable = this.domRoot.find('.hideable');

    this.loadSaveButton = this.domRoot.find('.load-save');
    var paneAdderDropdown = this.domRoot.find('.add-pane');
    var addCompilerButton = this.domRoot.find('.btn.add-compiler');
    var addExecutorButton = this.domRoot.find('.btn.add-executor');
    this.conformanceViewerButton = this.domRoot.find('.btn.conformance');
    this.newCfgButton = this.domRoot.find('.btn.view-cfg');
    var addEditorButton = this.domRoot.find('.btn.add-editor');
    var toggleVimButton = this.domRoot.find('#vim-flag');
    var togglePaneAdder = function () {
        paneAdderDropdown.dropdown('toggle');
    };
    this.vimFlag = this.domRoot.find('#vim-flag');
    toggleVimButton.on('click', _.bind(function () {
        if (this.editor.vimInUse) {
            this.disableVim();
        } else {
            this.enableVim();
        }
    }, this));

    // NB a new compilerConfig needs to be created every time; else the state is shared
    // between all compilers created this way. That leads to some nasty-to-find state
    // bugs e.g. https://github.com/compiler-explorer/compiler-explorer/issues/225
    var getCompilerConfig = _.bind(function () {
        return Components.getCompiler(this.id, this.currentLanguage.id);
    }, this);

    var getExecutorConfig = _.bind(function () {
        return Components.getExecutor(this.id, this.currentLanguage.id);
    }, this);

    var getConformanceConfig = _.bind(function () {
        return Components.getConformanceView(this.id, this.getSource(), this.currentLanguage.id);
    }, this);

    var getEditorConfig = _.bind(function () {
        return Components.getEditor();
    }, this);

    var addDragListener = _.bind(function (dragSource, dragConfig) {
        this.container.layoutManager
            .createDragSource(dragSource, dragConfig)
            ._dragListener.on('dragStart', togglePaneAdder);
    }, this);

    addDragListener(addCompilerButton, getCompilerConfig);
    addDragListener(addExecutorButton, getExecutorConfig);
    addDragListener(this.conformanceViewerButton, getConformanceConfig);
    addDragListener(addEditorButton, getEditorConfig);

    var bindClickEvent = _.bind(function (dragSource, dragConfig) {
        dragSource.click(_.bind(function () {
            var insertPoint = this.hub.findParentRowOrColumn(this.container) ||
                this.container.layoutManager.root.contentItems[0];
            insertPoint.addChild(dragConfig);
        }, this));
    }, this);

    bindClickEvent(addCompilerButton, getCompilerConfig);
    bindClickEvent(addExecutorButton, getExecutorConfig);
    bindClickEvent(this.conformanceViewerButton, getConformanceConfig);
    bindClickEvent(addEditorButton, getEditorConfig);

    this.initLoadSaver();
    $(this.domRoot).keydown(_.bind(function (event) {
        if ((event.ctrlKey || event.metaKey) && String.fromCharCode(event.which).toLowerCase() === 's') {
            event.preventDefault();
            if (this.settings.enableCtrlS) {
                loadSave.setMinimalOptions(this.getSource(), this.currentLanguage);
                if (!loadSave.onSaveToFile(this.id)) {
                    this.showLoadSaver();
                }
            } else {
                this.eventHub.emit('displaySharingPopover');
            }
        }
    }, this));

    this.cppInsightsButton = this.domRoot.find('.open-in-cppinsights');
    this.cppInsightsButton.on('mousedown', _.bind(function () {
        this.updateOpenInCppInsights();
    }, this));

    this.quickBenchButton = this.domRoot.find('.open-in-quickbench');
    this.quickBenchButton.on('mousedown', _.bind(function () {
        this.updateOpenInQuickBench();
    }, this));
};

Editor.prototype.updateButtons = function () {
    if (this.currentLanguage.id === 'c++') {
        this.cppInsightsButton.show();
        this.quickBenchButton.show();
    } else {
        this.cppInsightsButton.hide();
        this.quickBenchButton.hide();
    }
};

Editor.prototype.b64UTFEncode = function (str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, v) {
        return String.fromCharCode(parseInt(v, 16));
    }));
};

Editor.prototype.asciiEncodeJsonText = function (json) {
    return json.replace(/[\u007F-\uFFFF]/g, function (chr) {
        // json unicode escapes must always be 4 characters long, so pad with leading zeros
        return '\\u' + ('0000' + chr.charCodeAt(0).toString(16)).substr(-4);
    });
};

Editor.prototype.getCompilerStates = function () {
    var states = [];

    _.each(this.ourCompilers, _.bind(function (val, compilerIdStr) {
        var compilerId = parseInt(compilerIdStr);

        var glCompiler = _.find(this.container.layoutManager.root.getComponentsByName('compiler'), function (c) {
            return c.id === compilerId;
        });

        if (glCompiler) {
            var state = glCompiler.currentState();
            states.push(state);
        }
    }, this));

    return states;
};

Editor.prototype.updateOpenInCppInsights = function () {
    var cppStd = 'cpp2a';

    var compilers = this.getCompilerStates();
    _.each(compilers, _.bind(function (compiler) {
        if ((compiler.options.indexOf('-std=c++11') !== -1) ||
            (compiler.options.indexOf('-std=gnu++11') !== -1)) {
            cppStd = 'cpp11';
        } else if ((compiler.options.indexOf('-std=c++14') !== -1) ||
            (compiler.options.indexOf('-std=gnu++14') !== -1)) {
            cppStd = 'cpp14';
        } else if ((compiler.options.indexOf('-std=c++17') !== -1) ||
            (compiler.options.indexOf('-std=gnu++17') !== -1)) {
            cppStd = 'cpp17';
        } else if ((compiler.options.indexOf('-std=c++2a') !== -1) ||
            (compiler.options.indexOf('-std=gnu++2a') !== -1)) {
            cppStd = 'cpp2a';
        } else if (compiler.options.indexOf('-std=c++98') !== -1) {
            cppStd = 'cpp98';
        }
    }, this));

    var link = 'https://cppinsights.io/lnk?code=' + this.b64UTFEncode(this.getSource()) + '&std=' + cppStd + '&rev=1.0';

    this.domRoot.find('.open-in-cppinsights').attr('href', link);
};

Editor.prototype.cleanupSemVer = function (semver) {
    if (semver) {
        var semverStr = semver.toString();
        if ((semverStr !== '') && (semverStr.indexOf('(') === -1)) {
            var vercomps = semverStr.split('.');
            return vercomps[0] + '.' + (vercomps[1] ? vercomps[1] : '0');
        }
    }

    return false;
};

Editor.prototype.updateOpenInQuickBench = function () {
    var quickBenchState = {
        text: this.getSource(),
    };

    var compilers = this.getCompilerStates();

    _.each(compilers, _.bind(function (compiler) {
        var knownCompiler = false;

        var compilerExtInfo = this.hub.compilerService.findCompiler(this.currentLanguage.id, compiler.compiler);
        var semver = this.cleanupSemVer(compilerExtInfo.semver);
        var groupOrName =
            compilerExtInfo.baseName ? compilerExtInfo.baseName :
                compilerExtInfo.groupName ? compilerExtInfo.groupName : compilerExtInfo.name;

        if (semver && groupOrName) {
            groupOrName = groupOrName.toLowerCase();
            if (groupOrName.indexOf('gcc') !== -1) {
                quickBenchState.compiler = 'gcc-' + semver;
                knownCompiler = true;
            } else if (groupOrName.indexOf('clang') !== -1) {
                quickBenchState.compiler = 'clang-' + semver;
                knownCompiler = true;
            }
        }

        if (knownCompiler) {
            var match = compiler.options.match(/-(O([0-3sg]|fast))/);
            if (match !== null) {
                if (match[2] === 'fast') {
                    quickBenchState.optim = 'F';
                } else {
                    quickBenchState.optim = match[2].toUpperCase();
                }
            }

            if ((compiler.options.indexOf('-std=c++11') !== -1) ||
                (compiler.options.indexOf('-std=gnu++11') !== -1)) {
                quickBenchState.cppVersion = '11';
            } else if ((compiler.options.indexOf('-std=c++14') !== -1) ||
                (compiler.options.indexOf('-std=gnu++14') !== -1)) {
                quickBenchState.cppVersion = '14';
            } else if ((compiler.options.indexOf('-std=c++17') !== -1) ||
                (compiler.options.indexOf('-std=gnu++17') !== -1)) {
                quickBenchState.cppVersion = '17';
            } else if ((compiler.options.indexOf('-std=c++2a') !== -1) ||
                (compiler.options.indexOf('-std=gnu++2a') !== -1)) {
                quickBenchState.cppVersion = '20';
            }

            if ((compiler.options.indexOf('-stdlib=libc++') !== -1)) {
                quickBenchState.lib = 'llvm';
            }
        }
    }, this));

    var link = 'http://quick-bench.com/#' + btoa(this.asciiEncodeJsonText(JSON.stringify(quickBenchState)));
    this.domRoot.find('.open-in-quickbench').attr('href', link);
};

Editor.prototype.changeLanguage = function (newLang) {
    this.selectize.setValue(newLang);
};

Editor.prototype.clearLinkedLine = function () {
    this.decorations.linkedCode = [];
    this.updateDecorations();
};

Editor.prototype.tryPanesLinkLine = function (thisLineNumber, column, reveal) {
    var selectedToken = this.getTokenSpan(thisLineNumber, column);
    _.each(this.asmByCompiler, _.bind(function (asms, compilerId) {
        this.eventHub.emit('panesLinkLine', compilerId, thisLineNumber,
            selectedToken.colBegin, selectedToken.colEnd, reveal);
    }, this));
};

Editor.prototype.requestCompilation = function () {
    this.eventHub.emit('requestCompilation', this.id);
};

Editor.prototype.initEditorActions = function () {
    this.editor.addAction({
        id: 'compile',
        label: 'Compile',
        keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter],
        keybindingContext: null,
        contextMenuGroupId: 'navigation',
        contextMenuOrder: 1.5,
        run: _.bind(function () {
            // This change request is mostly superfluous
            this.maybeEmitChange();
            this.requestCompilation();
        }, this),
    });

    this.editor.addAction({
        id: 'toggleCompileOnChange',
        label: 'Toggle compile on change',
        keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.Enter],
        keybindingContext: null,
        run: _.bind(function () {
            this.eventHub.emit('modifySettings', {
                compileOnChange: !this.settings.compileOnChange,
            });
            this.alertSystem
                .notify('Compile on change has been toggled ' + (this.settings.compileOnChange ? 'ON' : 'OFF'), {
                    group: 'togglecompile',
                    alertClass: this.settings.compileOnChange ? 'notification-on' : 'notification-off',
                    dismissTime: 3000,
                });
        }, this),
    });

    this.editor.addAction({
        id: 'clang-format',
        label: 'Format text',
        keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.F9],
        keybindingContext: null,
        contextMenuGroupId: 'help',
        contextMenuOrder: 1.5,
        run: _.bind(this.formatCurrentText, this),
    });

    this.editor.addAction({
        id: 'toggleColourisation',
        label: 'Toggle colourisation',
        keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.F1],
        keybindingContext: null,
        run: _.bind(function () {
            this.eventHub.emit('modifySettings', {
                colouriseAsm: !this.settings.colouriseAsm,
            });
        }, this),
    });

    this.editor.addAction({
        id: 'viewasm',
        label: 'Reveal linked code',
        keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.F10],
        keybindingContext: null,
        contextMenuGroupId: 'navigation',
        contextMenuOrder: 1.5,
        run: _.bind(function (ed) {
            var pos = ed.getPosition();
            this.tryPanesLinkLine(pos.lineNumber, pos.column, true);
        }, this),
    });

    this.isCpp = this.editor.createContextKey('isCpp', true);
    this.isCpp.set(this.currentLanguage.id === 'c++');

    this.editor.addAction({
        id: 'cpprefsearch',
        label: 'Search on Cppreference',
        keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.F8],
        keybindingContext: null,
        contextMenuGroupId: 'help',
        contextMenuOrder: 1.5,
        precondition: 'isCpp',
        run: _.bind(this.searchOnCppreference, this),
    });
};

Editor.prototype.searchOnCppreference = function (ed) {
    var pos = ed.getPosition();
    var word = ed.getModel().getWordAtPosition(pos);
    if (!word || !word.word) return;

    var url = 'https://en.cppreference.com/mwiki/index.php?search=' + encodeURIComponent(word.word);
    window.open(url, '_blank', 'noopener');
};

Editor.prototype.doesMatchEditor = function (otherSource) {
    return otherSource === this.getSource();
};

Editor.prototype.confirmOverwrite = function (yes) {
    this.alertSystem.ask('Changes were made to the code',
        'Changes were made to the code while it was being processed. Overwrite changes?',
        {yes: yes, no: null});
};

Editor.prototype.updateSource = function (newSource) {
    // Create something that looks like an edit operation for the whole text
    var operation = {
        range: this.editor.getModel().getFullModelRange(),
        forceMoveMarkers: true,
        text: newSource,
    };
    var nullFn = function () {
        return null;
    };
    var viewState = this.editor.saveViewState();
    // Add a undo stop so we don't go back further than expected
    this.editor.pushUndoStop();
    // Apply de edit. Note that we lose cursor position, but I've not found a better alternative yet
    this.editor.getModel().pushEditOperations(viewState.cursorState, [operation], nullFn);
    this.numberUsedLines();

    if (!this.awaitingInitialResults) {
        if (this.selection) {
            /*
             * this setTimeout is a really crap workaround to fix #2150
             * the TL;DR; is that we reach this point *before* GL has laid
             * out the window, so we have no height
             *
             * If we revealLinesInCenter at this point the editor "does the right thing"
             * and scrolls itself all the way to the line we requested.
             *
             * Unfortunately the editor thinks it is very small, so the "center"
             * is the first line, and when the editor does resize eventually things are off.
             *
             * The workaround is to just delay things "long enough"
             *
             * This is bad and I feel bad.
             */
            setTimeout(_.bind(function () {
                this.editor.setSelection(this.selection);
                this.editor.revealLinesInCenter(this.selection.startLineNumber,
                    this.selection.endLineNumber);
            }, this), 500);
        }
        this.awaitingInitialResults = true;
    }
};

Editor.prototype.formatCurrentText = function () {
    var previousSource = this.getSource();

    $.ajax({
        type: 'POST',
        url: window.location.origin + this.httpRoot + 'api/format/clangformat',
        dataType: 'json',  // Expected
        contentType: 'application/json',  // Sent
        data: JSON.stringify({
            source: previousSource,
            base: this.settings.formatBase,
        }),
        success: _.bind(function (result) {
            if (result.exit === 0) {
                if (this.doesMatchEditor(previousSource)) {
                    this.updateSource(result.answer);
                } else {
                    this.confirmOverwrite(_.bind(function () {
                        this.updateSource(result.answer);
                    }, this), null);
                }
            } else {
                // Ops, the formatter itself failed!
                this.alertSystem.notify('We encountered an error formatting your code: ' + result.answer, {
                    group: 'formatting',
                    alertClass: 'notification-error',
                });
            }
        }, this),
        error: _.bind(function (xhr, e_status, error) {
            // Hopefully we have not exploded!
            if (xhr.responseText) {
                try {
                    var res = JSON.parse(xhr.responseText);
                    error = res.answer || error;
                } catch (e) {
                    // continue regardless of error
                }
            }
            error = error || 'Unknown error';
            this.alertSystem.notify('We ran into some issues while formatting your code: ' + error, {
                group: 'formatting',
                alertClass: 'notification-error',
            });
        }, this),
        cache: true,
    });
};

Editor.prototype.resize = function () {
    var topBarHeight = this.updateAndCalcTopBarHeight();

    this.editor.layout({
        width: this.domRoot.width(),
        height: this.domRoot.height() - topBarHeight,
    });
    // Only update the options if needed
    if (this.settings.wordWrap) {
        this.editor.updateOptions({
            wordWrapColumn: this.editor.getLayoutInfo().viewportColumn,
        });
    }
};

Editor.prototype.updateAndCalcTopBarHeight = function () {
    var width = this.domRoot.width();
    if (width === this.cachedTopBarHeightAtWidth && !this.topBar.hasClass('d-none')) {
        return this.cachedTopBarHeight;
    }

    var topBarHeight = 0;
    var topBarHeightMax = 0;
    var topBarHeightMin = 0;

    if (!this.topBar.hasClass('d-none')) {
        this.hideable.show();
        topBarHeightMax = this.topBar.outerHeight(true);
        this.hideable.hide();
        topBarHeightMin = this.topBar.outerHeight(true);
        topBarHeight = topBarHeightMin;
        if (topBarHeightMin === topBarHeightMax) {
            this.hideable.show();
            topBarHeight = topBarHeightMax;
        }
    }

    this.cachedTopBarHeight = topBarHeight;
    this.cachedTopBarHeightAtWidth = width;
    return topBarHeight;
};

Editor.prototype.onSettingsChange = function (newSettings) {
    var before = this.settings;
    var after = newSettings;
    this.settings = _.clone(newSettings);

    this.editor.updateOptions({
        autoIndent: this.settings.autoIndent ? 'advanced' : 'none',
        autoClosingBrackets: this.settings.autoCloseBrackets,
        useVim: this.settings.useVim,
        quickSuggestions: this.settings.showQuickSuggestions,
        contextmenu: this.settings.useCustomContextMenu,
        minimap: {
            enabled: this.settings.showMinimap && !options.embedded,
        },
        fontFamily: this.settings.editorsFFont,
        fontLigatures: this.settings.editorsFLigatures,
        wordWrap: this.settings.wordWrap ? 'bounded' : 'off',
        wordWrapColumn: this.editor.getLayoutInfo().viewportColumn, // Ensure the column count is up to date
    });

    // Unconditionally send editor changes. The compiler only compiles when needed
    this.debouncedEmitChange = _.debounce(_.bind(function () {
        this.maybeEmitChange();
    }, this), after.delayAfterChange);

    if (before.hoverShowSource && !after.hoverShowSource) {
        this.onEditorSetDecoration(this.id, -1, false);
    }

    if (after.useVim && !before.useVim) {
        this.enableVim();
    } else if (!after.useVim && before.useVim) {
        this.disableVim();
    }

    if (this.editor.getModel()) {
        this.editor.getModel().updateOptions({
            tabSize: this.settings.tabWidth,
            insertSpaces: this.settings.useSpaces,
        });
    }

    this.numberUsedLines();
};

Editor.prototype.numberUsedLines = function () {
    var result = {};
    // First, note all lines used.
    _.each(this.asmByCompiler, function (asm) {
        _.each(asm, function (asmLine) {
            // If the line has a source indicator, and the source indicator is null (i.e. the
            // user's input file), then tag it as used.
            if (asmLine.source && asmLine.source.file === null && asmLine.source.line > 0)
                result[asmLine.source.line - 1] = true;
        });
    });
    // Now assign an ordinal to each used line.
    var ordinal = 0;
    _.each(result, function (v, k) {
        result[k] = ordinal++;
    });

    if (_.any(this.busyCompilers)) return;
    this.updateColours(this.settings.colouriseAsm ? result : []);
};

Editor.prototype.updateColours = function (colours) {
    this.colours = colour.applyColours(this.editor, colours, this.settings.colourScheme, this.colours);
    this.eventHub.emit('colours', this.id, colours, this.settings.colourScheme);
};

Editor.prototype.onCompilerOpen = function (compilerId, editorId) {
    if (editorId === this.id) {
        // On any compiler open, rebroadcast our state in case they need to know it.
        if (this.waitingForLanguage) {
            var glCompiler = _.find(this.container.layoutManager.root.getComponentsByName('compiler'), function (c) {
                return c.id === compilerId;
            });
            if (glCompiler) {
                var selected = _.find(options.compilers, function (compiler) {
                    return compiler.id === glCompiler.originalCompilerId;
                });
                if (selected) {
                    this.changeLanguage(selected.lang);
                }
            }
        }
        this.maybeEmitChange(true, compilerId);
        this.ourCompilers[compilerId] = true;
    }
};

Editor.prototype.onExecutorOpen = function (executorId, editorId) {
    if (editorId === this.id) {
        this.maybeEmitChange(true);
        this.ourExecutors[executorId] = true;
    }
};

Editor.prototype.onCompilerClose = function (compilerId) {
    if (this.ourCompilers[compilerId]) {
        monaco.editor.setModelMarkers(this.editor.getModel(), compilerId, []);
        delete this.widgetsByCompiler[compilerId];
        delete this.asmByCompiler[compilerId];
        delete this.busyCompilers[compilerId];
        delete this.ourCompilers[compilerId];
        this.numberUsedLines();
    }
};

Editor.prototype.onExecutorClose = function (id) {
    if (this.ourExecutors[id]) {
        delete this.ourExecutors[id];
    }
};

Editor.prototype.onCompiling = function (compilerId) {
    if (!this.ourCompilers[compilerId]) return;
    this.busyCompilers[compilerId] = true;
};

Editor.prototype.onCompileResponse = function (compilerId, compiler, result) {
    if (!this.ourCompilers[compilerId]) return;
    this.busyCompilers[compilerId] = false;
    var output = (result.stdout || []).concat(result.stderr || []);
    var widgets = _.compact(_.map(output, function (obj) {
        if (!obj.tag) return;
        var severity = 3; // error
        if (obj.tag.text.match(/^warning/)) severity = 2;
        if (obj.tag.text.match(/^note/)) severity = 1;
        var colBegin = 0;
        var colEnd = Infinity;
        if (obj.tag.column) {
            var span = this.getTokenSpan(obj.tag.line, obj.tag.column);
            colBegin = obj.tag.column;
            if (span.colEnd === obj.tag.column) colEnd = -1;
            else colEnd = span.colEnd + 1;
        }
        return {
            severity: severity,
            message: obj.tag.text,
            source: compiler.name + ' #' + compilerId,
            startLineNumber: obj.tag.line,
            startColumn: colBegin,
            endLineNumber: obj.tag.line,
            endColumn: colEnd,
        };
    }, this));
    monaco.editor.setModelMarkers(this.editor.getModel(), compilerId, widgets);
    this.decorations.tags = _.map(widgets, function (tag) {
        return {
            range: new monaco.Range(tag.startLineNumber, tag.startColumn, tag.startLineNumber + 1, 1),
            options: {
                isWholeLine: false,
                inlineClassName: 'error-code',
            },
        };
    }, this);
    this.updateDecorations();
    this.asmByCompiler[compilerId] = result.asm;
    this.numberUsedLines();
};

Editor.prototype.onSelectLine = function (id, lineNum) {
    if (Number(id) === this.id) {
        this.editor.setSelection({line: lineNum - 1, ch: 0}, {line: lineNum, ch: 0});
    }
};

// Returns a half-segment [a, b) for the token on the line lineNum
// that spans across the column.
// a - colStart points to the first character of the token
// b - colEnd points to the character immediately following the token
// e.g.: "this->callableMethod ( x, y );"
//              ^a   ^column  ^b
Editor.prototype.getTokenSpan = function (lineNum, column) {
    var model = this.editor.getModel();
    var line = model.getLineContent(lineNum);
    if (0 < column && column < line.length) {
        var tokens = monaco.editor.tokenize(line, model.getModeId());
        if (tokens.length > 0) {
            var lastOffset = 0;
            var lastWasString = false;
            for (var i = 0; i < tokens[0].length; ++i) {
                // Treat all the contiguous string tokens as one,
                // For example "hello \" world" is treated as one token
                // instead of 3 "string.cpp", "string.escape.cpp", "string.cpp"
                if (tokens[0][i].type.startsWith('string')) {
                    if (lastWasString) {
                        continue;
                    }
                    lastWasString = true;
                } else {
                    lastWasString = false;
                }
                var currentOffset = tokens[0][i].offset;
                if (column <= currentOffset) {
                    return { colBegin : lastOffset, colEnd : currentOffset };
                } else {
                    lastOffset = currentOffset;
                }
            }
            return { colBegin : lastOffset, colEnd : line.length };
        }
    }
    return { colBegin : column, colEnd : column + 1 };
};

Editor.prototype.onEditorLinkLine = function (editorId, lineNum, columnBegin, columnEnd, reveal) {
    if (Number(editorId) === this.id) {
        if (reveal && lineNum) this.editor.revealLineInCenter(lineNum);
        this.decorations.linkedCode = lineNum === -1 || !lineNum ? [] : [{
            range: new monaco.Range(lineNum, 1, lineNum, 1),
            options: {
                isWholeLine: true,
                linesDecorationsClassName: 'linked-code-decoration-margin',
                className: 'linked-code-decoration-line',
            },
        }];

        if (lineNum > 0 && columnBegin !== -1) {
            var lastTokenSpan = this.getTokenSpan(lineNum, columnEnd);
            this.decorations.linkedCode.push({
                range: new monaco.Range(lineNum, columnBegin, lineNum, lastTokenSpan.colEnd + 1),
                options: {
                    isWholeLine: false,
                    inlineClassName: 'linked-code-decoration-column',
                },
            });
        }

        if (this.fadeTimeoutId !== -1) {
            clearTimeout(this.fadeTimeoutId);
        }
        this.fadeTimeoutId = setTimeout(_.bind(function () {
            this.clearLinkedLine();
            this.fadeTimeoutId = -1;
        }, this), 5000);

        this.updateDecorations();
    }
};

Editor.prototype.onEditorSetDecoration = function (id, lineNum, reveal) {
    if (Number(id) === this.id) {
        if (reveal && lineNum) this.editor.revealLineInCenter(lineNum);
        this.decorations.linkedCode = lineNum === -1 || !lineNum ? [] : [{
            range: new monaco.Range(lineNum, 1, lineNum, 1),
            options: {
                isWholeLine: true,
                linesDecorationsClassName: 'linked-code-decoration-margin',
                inlineClassName: 'linked-code-decoration-inline',
            },
        }];
        this.updateDecorations();
    }
};

Editor.prototype.updateDecorations = function () {
    this.prevDecorations = this.editor.deltaDecorations(
        this.prevDecorations,
        _.compact(_.flatten(_.values(this.decorations))));
};

Editor.prototype.onConformanceViewOpen = function (editorId) {
    if (editorId === this.id) {
        this.conformanceViewerButton.attr('disabled', true);
    }
};

Editor.prototype.onConformanceViewClose = function (editorId) {
    if (editorId === this.id) {
        this.conformanceViewerButton.attr('disabled', false);
    }
};

Editor.prototype.showLoadSaver = function () {
    this.loadSaveButton.click();
};

Editor.prototype.initLoadSaver = function () {
    this.loadSaveButton
        .off('click')
        .click(_.bind(function () {
            loadSave.run(_.bind(function (text) {
                this.setSource(text);
                this.updateState();
                this.maybeEmitChange(true);
                this.requestCompilation();
            }, this), this.getSource(), this.currentLanguage);
        }, this));
};

Editor.prototype.onLanguageChange = function (newLangId) {
    if (languages[newLangId]) {
        if (newLangId !== this.currentLanguage.id) {
            var oldLangId = this.currentLanguage.id;
            this.currentLanguage = languages[newLangId];
            if (!this.waitingForLanguage && !this.settings.keepSourcesOnLangChange) {
                this.editorSourceByLang[oldLangId] = this.getSource();
                this.updateEditorCode();
            }
            this.initLoadSaver();
            monaco.editor.setModelLanguage(this.editor.getModel(), this.currentLanguage.monaco);
            this.isCpp.set(this.currentLanguage.id === 'c++');
            this.updateTitle();
            this.updateState();
            // Broadcast the change to other panels
            this.eventHub.emit('languageChange', this.id, newLangId);
            this.maybeEmitChange(true);
            this.requestCompilation();
            ga.proxy('send', {
                hitType: 'event',
                eventCategory: 'LanguageChange',
                eventAction: newLangId,
            });
        }
        this.waitingForLanguage = false;
    }
};

Editor.prototype.getPaneName = function () {
    return this.currentLanguage.name + ' source #' + this.id;
};

Editor.prototype.updateTitle = function () {
    this.container.setTitle(this.getPaneName());
};

// Called every time we change language, so we get the relevant code
Editor.prototype.updateEditorCode = function () {
    this.setSource(this.editorSourceByLang[this.currentLanguage.id] || languages[this.currentLanguage.id].example);
};

Editor.prototype.close = function () {
    this.eventHub.unsubscribe();
    this.eventHub.emit('editorClose', this.id);
    this.editor.dispose();
};

module.exports = {
    Editor: Editor,
};


/***/ }),

/***/ "EVXG":
/*!********************************!*\
  !*** ./static/presentation.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2020, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.



var
    local = __webpack_require__(/*! ./local */ "/Zv+");

var _currentPresentation = null;

function Presentation() {
    this.maxSlides = 0;
    this.currentSlide = 0;
    this.originallocation = window.location.href;
}

Presentation.prototype.init = function (maxSlides, callback) {
    this.maxSlides = maxSlides;
    this.currentSlide = parseInt(local.get('presentationCurrentSlide', 0));
    if (callback !== undefined) callback();
};

Presentation.prototype.first = function () {
    this.currentSlide = 0;
    local.set('presentationCurrentSlide', this.currentSlide);
    this.show();
};

Presentation.prototype.next = function () {
    if (this.currentSlide + 1 < this.maxSlides) {
        this.currentSlide++;
        local.set('presentationCurrentSlide', this.currentSlide);
        this.show();
    }
};

Presentation.prototype.prev = function () {
    if (this.currentSlide > 0) {
        this.currentSlide--;
        local.set('presentationCurrentSlide', this.currentSlide);
        this.show();
    }
};

Presentation.prototype.show = function () {
    window.hasUIBeenReset = true;
    if (window.location.href === this.originallocation) {
        window.location.reload();
    } else {
        window.location.href = this.originallocation;
    }
};

function init(maxSlides, callback) {
    if (!_currentPresentation) {
        _currentPresentation = new Presentation();
        _currentPresentation.init(maxSlides, callback);
    } else {
        callback();
    }
}

function first() {
    if (!_currentPresentation) throw "Presentation hasn't been initialized";

    _currentPresentation.first();
}

function next() {
    if (!_currentPresentation) throw "Presentation hasn't been initialized";

    _currentPresentation.next();
}

function prev() {
    if (!_currentPresentation) throw "Presentation hasn't been initialized";

    _currentPresentation.prev();
}

function getCurrentSlide() {
    if (!_currentPresentation) throw "Presentation hasn't been initialized";

    return _currentPresentation.currentSlide;
}

function setCurrentSlide(idx) {
    if (!_currentPresentation) throw "Presentation hasn't been initialized";

    _currentPresentation.currentSlide = idx;
}

module.exports = {
    init: init,
    first: first,
    next: next,
    prev: prev,
    getCurrentSlide: getCurrentSlide,
    setCurrentSlide: setCurrentSlide,
};


/***/ }),

/***/ "G1pD":
/*!**********************************!*\
  !*** ./static/panes/opt-view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2017, Jared Wyles
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.



var FontScale = __webpack_require__(/*! ../fontscale */ "zeU8");
var monaco = __webpack_require__(/*! monaco-editor */ "M/lh");
var _ = __webpack_require__(/*! underscore */ "xG9w");
var $ = __webpack_require__(/*! jquery */ "EVdn");
var ga = __webpack_require__(/*! ../analytics */ "9vLr");
var monacoConfig = __webpack_require__(/*! ../monaco-config */ "u8Pk");

__webpack_require__(/*! ../modes/asm-mode */ "bh+U");
__webpack_require__(/*! selectize */ "QPhV");

function Opt(hub, container, state) {
    state = state || {};
    this.container = container;
    this.eventHub = hub.createEventHub();
    this.domRoot = container.getElement();
    this.domRoot.html($('#opt').html());
    this.source = state.source || '';
    this._currentDecorations = [];
    var root = this.domRoot.find('.monaco-placeholder');

    this.optEditor = monaco.editor.create(root[0], monacoConfig.extendConfig({
        value: this.source,
        language: 'plaintext',
        readOnly: true,
        glyphMargin: true,
    }));

    this._compilerid = state.id;
    this._compilerName = state.compilerName;
    this._editorid = state.editorid;

    this.awaitingInitialResults = false;
    this.selection = state.selection;

    this.isCompilerSupported = false;

    this.initButtons(state);
    this.initCallbacks();

    if (state && state.optOutput) {
        this.showOptResults(state.optOutput);
    }
    this.setTitle();
    this.eventHub.emit('optViewOpened', this._compilerid);
    ga.proxy('send', {
        hitType: 'event',
        eventCategory: 'OpenViewPane',
        eventAction: 'Opt',
    });
}

Opt.prototype.initButtons = function (state) {
    this.fontScale = new FontScale(this.domRoot, state, this.optEditor);

    this.topBar = this.domRoot.find('.top-bar');
};

Opt.prototype.initCallbacks = function () {
    this.fontScale.on('change', _.bind(this.updateState, this));

    this.eventHub.on('compileResult', this.onCompileResult, this);
    this.eventHub.on('compiler', this.onCompiler, this);
    this.eventHub.on('compilerClose', this.onCompilerClose, this);
    this.eventHub.on('settingsChange', this.onSettingsChange, this);
    this.eventHub.on('resize', this.resize, this);
    this.container.on('destroy', this.close, this);
    this.eventHub.emit('requestSettings');
    this.eventHub.emit('findCompilers');

    this.container.on('resize', this.resize, this);
    this.container.on('shown', this.resize, this);

    this.cursorSelectionThrottledFunction =
        _.throttle(_.bind(this.onDidChangeCursorSelection, this), 500);
    this.optEditor.onDidChangeCursorSelection(_.bind(function (e) {
        this.cursorSelectionThrottledFunction(e);
    }, this));
};

Opt.prototype.onCompileResult = function (id, compiler, result, lang) {
    if (this._compilerid !== id || !this.isCompilerSupported) return;
    this.source = result.source;
    this.optEditor.setValue(this.source);
    if (result.hasOptOutput) {
        this.showOptResults(result.optOutput);
    }
    if (lang && lang.monaco && this.getCurrentEditorLanguage() !== lang.monaco) {
        monaco.editor.setModelLanguage(this.optEditor.getModel(), lang.monaco);
    }

    if (!this.awaitingInitialResults) {
        if (this.selection) {
            this.optEditor.setSelection(this.selection);
            this.optEditor.revealLinesInCenter(this.selection.startLineNumber,
                this.selection.endLineNumber);
        }
        this.awaitingInitialResults = true;
    }
};

// Monaco language id of the current editor
Opt.prototype.getCurrentEditorLanguage = function () {
    return this.optEditor.getModel().getModeId();
};

Opt.prototype.setTitle = function () {
    this.container.setTitle(
        this._compilerName + ' Opt Viewer (Editor #' + this._editorid + ', Compiler #' + this._compilerid + ')');
};

Opt.prototype.getDisplayableOpt = function (optResult) {
    return {
        value: '**' + optResult.optType + '** - ' + optResult.displayString,
        isTrusted: false,
    };
};

Opt.prototype.showOptResults = function (results) {
    var opt = [];

    results = _.filter(results, function (x) {
        return x.DebugLoc !== undefined;
    });

    results = _.groupBy(results, function (x) {
        return x.DebugLoc.Line;
    });

    _.mapObject(results, function (value, key) {
        var linenumber = Number(key);
        var className = value.reduce(function (acc, x) {
            if (x.optType === 'Missed' || acc === 'Missed') {
                return 'Missed';
            } else if (x.optType === 'Passed' || acc === 'Passed') {
                return 'Passed';
            }
            return x.optType;
        }, '');
        var contents = _.map(value, this.getDisplayableOpt, this);
        opt.push({
            range: new monaco.Range(linenumber, 1, linenumber, Infinity),
            options: {
                isWholeLine: true,
                glyphMarginClassName: 'opt-decoration.' + className.toLowerCase(),
                hoverMessage: contents,
                glyphMarginHoverMessage: contents,
            },
        });
    }, this);

    this._currentDecorations = this.optEditor.deltaDecorations(this._currentDecorations, opt);
};

Opt.prototype.onCompiler = function (id, compiler) {
    if (id === this._compilerid) {
        this._compilerName = compiler ? compiler.name : '';
        this.setTitle();
        this.isCompilerSupported = compiler ? compiler.supportsOptOutput : false;
        if (!this.isCompilerSupported) {
            this.optEditor.setValue('<OPT output is not supported for this compiler>');
        }
    }
};

Opt.prototype.resize = function () {
    var topBarHeight = this.topBar.outerHeight(true);
    this.optEditor.layout({
        width: this.domRoot.width(),
        height: this.domRoot.height() - topBarHeight,
    });
};

Opt.prototype.updateState = function () {
    this.container.setState(this.currentState());
};

Opt.prototype.currentState = function () {
    var state = {
        id: this._compilerid,
        editorid: this._editorid,
        selection: this.selection,
    };
    this.fontScale.addState(state);
    return state;
};

Opt.prototype.close = function () {
    this.eventHub.unsubscribe();
    this.eventHub.emit('optViewClosed', this._compilerid);
    this.optEditor.dispose();
};

Opt.prototype.onCompilerClose = function (id) {
    if (id === this._compilerid) {
        // We can't immediately close as an outer loop somewhere in GoldenLayout is iterating over
        // the hierarchy. We can't modify while it's being iterated over.
        this.close();
        _.defer(function (self) {
            self.container.close();
        }, this);
    }
};

Opt.prototype.onSettingsChange = function (newSettings) {
    this.optEditor.updateOptions({
        contextmenu: newSettings.useCustomContextMenu,
        minimap: {
            enabled: newSettings.showMinimap,
        },
        fontFamily: newSettings.editorsFFont,
        fontLigatures: newSettings.editorsFLigatures,
    });
};

Opt.prototype.onDidChangeCursorSelection = function (e) {
    if (this.awaitingInitialResults) {
        this.selection = e.selection;
        this.updateState();
    }
};

module.exports = {
    Opt: Opt,
};


/***/ }),

/***/ "Go29":
/*!********************************!*\
  !*** ./static/ansi-to-html.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable header/header */

// Copyright (c) 2012 Rob Burns
//
// Permission is hereby granted, free of charge, to any person
// obtaining a copy of this software and associated documentation
// files (the "Software"), to deal in the Software without
// restriction, including without limitation the rights to use,
// copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the
// Software is furnished to do so, subject to the following
// conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
// WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
// OTHER DEALINGS IN THE SOFTWARE.

// Converted from https://github.com/rburns/ansi-to-html
// Includes patches from https://github.com/rburns/ansi-to-html/pull/84



var _ = __webpack_require__(/*! underscore */ "xG9w");

var defaults = {
    fg: '#FFF',
    bg: '#000',
    newline: false,
    escapeXML: false,
    stream: false,
    colors: getDefaultColors(),
};

function getDefaultColors() {
    var colors = {
        0: '#000',
        1: '#A00',
        2: '#0A0',
        3: '#A50',
        4: '#00A',
        5: '#A0A',
        6: '#0AA',
        7: '#AAA',
        8: '#555',
        9: '#F55',
        10: '#5F5',
        11: '#FF5',
        12: '#55F',
        13: '#F5F',
        14: '#5FF',
        15: '#FFF',
    };

    range(0, 5).forEach(function (red) {
        range(0, 5).forEach(function (green) {
            range(0, 5).forEach(function (blue) {
                return setStyleColor(red, green, blue, colors);
            });
        });
    });

    range(0, 23).forEach(function (gray) {
        var c = gray + 232;
        var l = toHexString(gray * 10 + 8);

        colors[c] = '#' + l + l + l;
    });

    return colors;
}

/**
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @param {object} colors
 */
function setStyleColor(red, green, blue, colors) {
    var c = 16 + red * 36 + green * 6 + blue;
    var r = red > 0 ? red * 40 + 55 : 0;
    var g = green > 0 ? green * 40 + 55 : 0;
    var b = blue > 0 ? blue * 40 + 55 : 0;

    colors[c] = toColorHexString([r, g, b]);
}

/**
 * Converts from a number like 15 to a hex string like 'F'
 *
 * @param {number} num
 * @returns {string}
 */
function toHexString(num) {
    var str = num.toString(16);

    while (str.length < 2) {
        str = '0' + str;
    }

    return str;
}

/**
 * Converts from an array of numbers like [15, 15, 15] to a hex string like 'FFF'
 *
 * @param {number[]} ref
 * @returns {string}
 */
function toColorHexString(ref) {
    var results = [];

    for (var j = 0, len = ref.length; j < len; j++) {
        results.push(toHexString(ref[j]));
    }

    return '#' + results.join('');
}

/**
 * @param {Array} stack
 * @param {string} token
 * @param {*} data
 * @param {object} options
 */
function generateOutput(stack, token, data, options) {
    var result;

    if (token === 'text') {
        result = pushText(data, options);
    } else if (token === 'display') {
        result = handleDisplay(stack, data, options);
    } else if (token === 'xterm256') {
        result = handleXterm256(stack, data, options);
    }

    return result;
}

function handleXterm256(stack, data, options) {
    data = data.substring(2).slice(0, -1);
    var operation = +data.substr(0, 2);
    var color = +data.substr(5);
    if (operation === 38) {
        return pushForegroundColor(stack, options.colors[color]);
    } else {
        return pushBackgroundColor(stack, options.colors[color]);
    }
}

/**
 * @param {Array} stack
 * @param {number} code
 * @param {object} options
 * @returns {*}
 */
function handleDisplay(stack, code, options) {
    code = parseInt(code, 10);
    var result;

    var codeMap = {
        '-1': function _() {
            return '<br/>';
        },
        0: function _() {
            return stack.length && resetStyles(stack);
        },
        1: function _() {
            return pushTag(stack, 'b');
        },
        2: function _() {
            return pushStyle(stack, 'opacity:0.6');
        },
        3: function _() {
            return pushTag(stack, 'i');
        },
        4: function _() {
            return pushTag(stack, 'u');
        },
        8: function _() {
            return pushStyle(stack, 'display:none');
        },
        9: function _() {
            return pushTag(stack, 'strike');
        },
        22: function _() {
            return closeTag(stack, 'b');
        },
        23: function _() {
            return closeTag(stack, 'i');
        },
        24: function _() {
            return closeTag(stack, 'u');
        },
        39: function _() {
            return pushForegroundColor(stack, options.fg);
        },
        49: function _() {
            return pushBackgroundColor(stack, options.bg);
        },
    };

    if (codeMap[code]) {
        result = codeMap[code]();
    } else if (4 < code && code < 7) {
        result = pushTag(stack, 'blink');
    } else if (29 < code && code < 38) {
        result = pushForegroundColor(stack, options.colors[code - 30]);
    } else if (39 < code && code < 48) {
        result = pushBackgroundColor(stack, options.colors[code - 40]);
    } else if (89 < code && code < 98) {
        result = pushForegroundColor(stack, options.colors[8 + (code - 90)]);
    } else if (99 < code && code < 108) {
        result = pushBackgroundColor(stack, options.colors[8 + (code - 100)]);
    }

    return result;
}

/**
 * Clear all the styles
 *
 * @returns {string}
 */
function resetStyles(stack) {
    var stackClone = stack.slice(0);

    stack.length = 0;

    return stackClone.reverse().map(function (tag) {
        return '</' + tag + '>';
    }).join('');
}

/**
 * Creates an array of numbers ranging from low to high
 *
 * @param {number} low
 * @param {number} high
 * @returns {Array}
 * @example range(3, 7); // creates [3, 4, 5, 6, 7]
 */
function range(low, high) {
    var results = [];

    for (var j = low; j <= high; j++) {
        results.push(j);
    }

    return results;
}

/**
 * Returns a new function that is true if value is NOT the same category
 *
 * @param {string} category
 * @returns {Function}
 */
function notCategory(category) {
    return function (e) {
        return (category === null || e.category !== category) && category !== 'all';
    };
}

/**
 * Converts a code into an ansi token type
 *
 * @param {number} code
 * @returns {string}
 */
function categoryForCode(code) {
    code = parseInt(code, 10);
    var result = null;

    if (code === 0) {
        result = 'all';
    } else if (code === 1) {
        result = 'bold';
    } else if (2 < code && code < 5) {
        result = 'underline';
    } else if (4 < code && code < 7) {
        result = 'blink';
    } else if (code === 8) {
        result = 'hide';
    } else if (code === 9) {
        result = 'strike';
    } else if (29 < code && code < 38 || code === 39 || 89 < code && code < 98) {
        result = 'foreground-color';
    } else if (39 < code && code < 48 || code === 49 || 99 < code && code < 108) {
        result = 'background-color';
    }

    return result;
}

/**
 * @param {string} text
 * @param {object} options
 * @returns {string}
 */
function pushText(text, options) {
    if (options.escapeXML) {
        return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    return text;
}

/**
 * @param {Array} stack
 * @param {string} tag
 * @param {string} [style='']
 * @returns {string}
 */
function pushTag(stack, tag, style) {
    if (!style) {
        style = '';
    }

    stack.push(tag);

    return ['<' + tag, style ? ' style="' + style + '"' : void 0, '>'].join('');
}

/**
 * @param {Array} stack
 * @param {string} style
 * @returns {string}
 */
function pushStyle(stack, style) {
    return pushTag(stack, 'span', style);
}

function pushForegroundColor(stack, color) {
    return pushTag(stack, 'span', 'color:' + color);
}

function pushBackgroundColor(stack, color) {
    return pushTag(stack, 'span', 'background-color:' + color);
}

/**
 * @param {Array} stack
 * @param {string} style
 * @returns {string}
 */
function closeTag(stack, style) {
    var last;

    if (stack.slice(-1)[0] === style) {
        last = stack.pop();
    }

    if (last) {
        return '</' + style + '>';
    }
}

/**
 * @param {string} text
 * @param {object} options
 * @param {Function} callback
 * @returns {Array}
 */
function tokenize(text, options, callback) {
    var ansiMatch = false;
    var ansiHandler = 3;

    function remove() {
        return '';
    }

    function removeXterm256(m) {
        callback('xterm256', m);
        return '';
    }

    function newline(m) {
        if (options.newline) {
            callback('display', -1);
        } else {
            callback('text', m);
        }

        return '';
    }

    function ansiMess(m, g1) {
        ansiMatch = true;
        if (g1.trim().length === 0) {
            g1 = '0';
        }

        g1 = g1.replace(/;+$/, '').split(';');

        for (var o = 0, len = g1.length; o < len; o++) {
            callback('display', g1[o]);
        }

        return '';
    }

    function realText(m) {
        callback('text', m);

        return '';
    }

    /* eslint no-control-regex:0 */
    var tokens = [{
        pattern: /^\x08+/,
        sub: remove,
    }, {
        pattern: /^\x1b\[[012]?K/,
        sub: remove,
    }, {
        pattern: /^\x1b\[[34]8;5;(\d+)m/,
        sub: removeXterm256,
    }, {
        pattern: /^\n/,
        sub: newline,
    }, {
        pattern: /^\x1b\[((?:\d{1,3};)*\d{1,3}|)m/,
        sub: ansiMess,
    }, {
        pattern: /^\x1b\[?[\d;]{0,3}/,
        sub: remove,
    }, {
        pattern: /^([^\x1b\x08\n]+)/,
        sub: realText,
    }];

    function process(handler, i) {
        if (i > ansiHandler && ansiMatch) {
            return;
        }

        ansiMatch = false;

        text = text.replace(handler.pattern, handler.sub);
    }

    var handler;
    var results1 = [];
    var length = text.length;

    outer: while (length > 0) {
        for (var i = 0, o = 0, len = tokens.length; o < len; i = ++o) {
            handler = tokens[i];
            process(handler, i);

            if (text.length !== length) {
                // We matched a token and removed it from the text. We need to
                // start matching *all* tokens against the new text.
                length = text.length;
                continue outer;
            }
        }

        if (text.length === length) {
            break;
        } else {
            results1.push(0);
        }

        length = text.length;
    }

    return results1;
}

/**
 * If streaming, then the stack is "sticky"
 *
 * @param {Array} stickyStack
 * @param {string} token
 * @param {*} data
 * @returns {Array}
 */
function updateStickyStack(stickyStack, token, data) {
    if (token !== 'text') {
        stickyStack = stickyStack.filter(notCategory(categoryForCode(data)));
        stickyStack.push({token: token, data: data, category: categoryForCode(data)});
    }

    return stickyStack;
}

function Filter(options) {
    options = options || {};

    if (options.colors) {
        options.colors = _.extend(defaults.colors, options.colors);
    }
    this.opts = _.extend({}, defaults, options);
    this.stack = [];
    this.stickyStack = [];
}

Filter.prototype = {
    toHtml: function toHtml(input) {
        var _this = this;

        input = typeof input === 'string' ? [input] : input;
        var stack = this.stack;
        var options = this.opts;
        var buf = [];

        this.stickyStack.forEach(function (element) {
            var output = generateOutput(stack, element.token, element.data, options);

            if (output) {
                buf.push(output);
            }
        });

        tokenize(input.join(''), options, function (token, data) {
            var output = generateOutput(stack, token, data, options);

            if (output) {
                buf.push(output);
            }

            if (options.stream) {
                _this.stickyStack = updateStickyStack(_this.stickyStack, token, data);
            }
        });

        if (stack.length) {
            buf.push(resetStyles(stack));
        }

        return buf.join('');
    },
};

module.exports = Filter;


/***/ }),

/***/ "HAQ9":
/*!**************************************!*\
  !*** ./static/modes/fortran-mode.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2018, Forschungzentrum Juelich GmbH, Juelich Supercomputing Centre
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.

// The lists of keywords, operator, functions, and subroutines have been adopted from
//    vs.language.fortran, Copyright (c) 2015, Thomas E. Dunn


var monaco = __webpack_require__(/*! monaco-editor */ "M/lh");

function definition() {
    return {
        // Fortran is case insensitive, so ignore case...
        ignoreCase: true,

        defaultToken: 'invalid',

        keywords: [
            'abstract',
            'all',
            'allocatable',
            'allocate',
            'assign',
            'assignment',
            'asynchronous',
            'backspace',
            'bind',
            'block',
            'blockdata',
            'character',
            'close',
            'common',
            'complex',
            'concurrent',
            'contiguous',
            'call',
            'case',
            'class',
            'codimension',
            'contains',
            'continue',
            'cycle',
            'data',
            'deallocate',
            'deferred',
            'dimension',
            'do',
            'double',
            'doubleprecision',
            'elemental',
            'else',
            'elsewhere',
            'end',
            'endblock',
            'endblockdata',
            'enddo',
            'endenum',
            'endfile',
            'endforall',
            'endfunction',
            'endif',
            'endinterface',
            'endmodule',
            'endprogram',
            'endselect',
            'endsubmodule',
            'endsubroutine',
            'endtype',
            'endwhere',
            'endwhile',
            'entry',
            'enum',
            'enumerator',
            'equivalence',
            'error',
            'exit',
            'external',
            'final',
            'flush',
            'forall',
            'format',
            'function',
            'generic',
            'go',
            'goto',
            'if',
            'implicit',
            'import',
            'in',
            'include',
            'inout',
            'inquire',
            'intent',
            'interface',
            'intrinsic',
            'is',
            'logical',
            'module',
            'non_overridable',
            'none',
            'nopass',
            'nullify',
            'only',
            'open',
            'operator',
            'optional',
            'out',
            'parameter',
            'pass',
            'pause',
            'pointer',
            'precision',
            'print',
            'private',
            'procedure',
            'program',
            'protected',
            'public',
            'pure',
            'read',
            'real',
            'recursive',
            'result',
            'return',
            'rewind',
            'save',
            'select',
            'sequence',
            'stop',
            'submodule',
            'subroutine',
            'target',
            'then',
            'to',
            'type',
            'use',
            'value',
            'volatile',
            'wait',
            'where',
            'while',
            'write',
        ],

        typeKeywords: [
            'logical',
            'character',
            'real',
            'integer',
            'complex',
            'type',
            'class',
            // add non-type keywords that make sense when combined w/ types
            'intent',
            'dimension',
            'allocatable',
            'parameter',
            'private',
            'public',
        ],

        operators: [
            '=',
            '==',
            '/=',
            '>',
            '>=',
            '<',
            '<=',
            '=>',
            '+',
            '-',
            '*',
            '/',
            '**',
            '//',
            '.and.',
            '.eq.',
            '.eqv.',
            '.le.',
            '.lt.',
            '.ge.',
            '.gt.',
            '.ne.',
            '.neqv.',
            '.not.',
            '.or.',
        ],

        functions: [
            'abs',
            'achar',
            'acos',
            'acosh',
            'adjustl',
            'adjustr',
            'aimag',
            'aint',
            'all',
            'allocated',
            'anint',
            'any',
            'asin',
            'asinh',
            'associated',
            'atan',
            'atan2',
            'atanh',
            'bessel_j0',
            'bessel_j1',
            'bessel_jn',
            'bessel_y0',
            'bessel_y1',
            'bessel_yn',
            'bge',
            'bgt',
            'bit_size',
            'ble',
            'blt',
            'btest',
            'c_associated',
            'c_funloc',
            'c_loc',
            'c_sizeof',
            'ceiling',
            'char',
            'cmplx',
            'command_argument_count',
            'compiler_options',
            'compiler_version',
            'conjg',
            'cos',
            'cosh',
            'count',
            'cshift',
            'dble',
            'digits',
            'dim',
            'dot_product',
            'dprod',
            'dshiftl',
            'dshiftr',
            'eoshift',
            'epsilon',
            'erf',
            'erfc',
            'erfc_scaled',
            'exp',
            'exponent',
            'extends_type_of',
            'findloc',
            'floor',
            'fraction',
            'gamma',
            'huge',
            'hypot',
            'iachar',
            'iall',
            'iand',
            'iany',
            'ibclr',
            'ibits',
            'ibset',
            'ichar',
            'ieee_class',
            'ieee_copy_sign',
            'ieee_is_finite',
            'ieee_is_nan',
            'ieee_is_normal',
            'ieee_logb',
            'ieee_next_after',
            'ieee_rem',
            'ieee_rint',
            'ieee_scalb',
            'ieee_selected_real_kind',
            'ieee_support_datatype',
            'ieee_support_denormal',
            'ieee_support_divide',
            'ieee_support_flag',
            'ieee_support_halting',
            'ieee_support_inf',
            'ieee_support_io',
            'ieee_support_nan',
            'ieee_support_rounding',
            'ieee_support_sqrt',
            'ieee_support_standard',
            'ieee_support_underflow_control',
            'ieee_unordered',
            'ieee_value',
            'ieor',
            'image_index',
            'index',
            'int',
            'ior',
            'iparity',
            'ishft',
            'ishftc',
            'is_contiguous',
            'is_iostat_end',
            'is_iostat_eor',
            'kind',
            'lbound',
            'lcobound',
            'leadz',
            'len',
            'len_trim',
            'lge',
            'lgt',
            'lle',
            'llt',
            'log',
            'log_gamma',
            'log10',
            'logical',
            'maskl',
            'maskr',
            'matmul',
            'max',
            'maxexponent',
            'maxloc',
            'maxval',
            'merge',
            'merge_bits',
            'min',
            'minexponent',
            'minloc',
            'minval',
            'mod',
            'modulo',
            'nearest',
            'new_line',
            'nint',
            'norm2',
            'not',
            'null',
            'num_images',
            'pack',
            'parity',
            'popcnt',
            'poppar',
            'precision',
            'present',
            'product',
            'radix',
            'range',
            'real',
            'repeat',
            'reshape',
            'rrspacing',
            'same_type_as',
            'scale',
            'scan',
            'selected_char_kind',
            'selected_int_kind',
            'selected_real_kind',
            'set_exponent',
            'shape',
            'shifta',
            'shiftl',
            'shiftr',
            'sign',
            'sin',
            'sinh',
            'size',
            'spacing',
            'spread',
            'sqrt',
            'storage_size',
            'sum',
            'tan',
            'tanh',
            'this_image',
            'tiny',
            'trailz',
            'transfer',
            'transpose',
            'trim',
            'ubound',
            'ucobound',
            'unpack',
            'verify',
        ],

        subroutines: [
            'c_f_pointer',
            'c_f_procpointer',
            'cpu_time',
            'date_and_time',
            'execute_command_line',
            'get_command',
            'get_command_argument',
            'get_environment_variable',
            'ieee_get_flag',
            'ieee_get_halting_mode',
            'ieee_get_rounding_mode',
            'ieee_get_status',
            'ieee_get_underflow_mode',
            'ieee_set_flag',
            'ieee_set_halting_mode',
            'ieee_set_rounding_mode',
            'ieee_set_status',
            'ieee_set_underflow_mode',
            'move_alloc',
            'mvbits',
            'random_number',
            'random_seed',
            'system_clock',
        ],

        // we include these common regular expressions
        symbols: /[=><!~?:&|+\-*/^%]+/,
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

        // The main tokenizer for our languages
        tokenizer: {
            root: [
                // identify type declarations (also functions)
                [/[a-zA-Z][\w$]*(?=.*(::|function))/, {
                    cases: {
                        '@typeKeywords': 'type.identifier',
                        '@keywords': 'keyword',
                        '@default': 'identifier',
                    },
                }],
                // identifiers and keywords
                [/[a-zA-Z][\w$]*/, {
                    cases: {
                        '@keywords': 'keyword',
                        '@functions': 'keyword',
                        '@subroutines': 'keyword',
                        '@default': 'identifier',
                    },
                }],

                // comments
                [/!.*$/, 'comment'],

                // whitespace
                {include: '@whitespace'},

                // delimiters and operators
                [/[{}()[\]]/, '@brackets'],
                [/[<>](?!@symbols)/, '@brackets'],
                [/@symbols/, {
                    cases: {
                        '@operators': 'operator',
                        '@default': '',
                    },
                }],

                // numbers
                [/\d*\.\d+([eEdD][-+]?\d+)?/, 'number.float'],
                [/[zZ]['"][0-9a-fA-F]*[0-9a-fA-F]['"]/, 'number.hex'],
                [/[oO]['"][0-7]*[0-7]['"]/, 'number.octal'],
                [/[bB]['"][0-1]*[0-1]['"]/, 'number.binary'],
                [/\d/, 'number'],

                // delimiter: after number because of .\d floats
                [/[;,.]/, 'delimiter'],

                // strings
                [/"([^"\\]|\\.)*$/, 'string.invalid'],  // non-teminated string
                [/"/, 'string', '@string'],

                // characters
                [/'[^\\']'/, 'string'],
                [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
                [/'/, 'string.invalid'],
            ],

            whitespace: [
                [/[ \t\r\n]+/, 'white'],
            ],

            comment: [
                [/!/, 'comment'],
            ],

            string: [
                [/[^\\"]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/"/, 'string', '@pop'],
            ],
        },
    };
}

function configuration() {
    return {
        comments: {
            lineComment: '!',
        },

        brackets: [
            ['(/', '/)'],
            ['[', ']'],
            ['(', ')'],
        ],

        autoClosingPairs: [
            {open: '[', close: ']'},
            {open: '(', close: ')'},
            {open: '`', close: '`', notIn: ['string','comment']},
            {open: "'", close: "'", notIn: ['string','comment']},
            {open: '"', close: '"', notIn: ['string']},
        ],

        surroundingPairs: [
            {open: '[', close: ']'},
            {open: '(', close: ')'},
            {open: '`', close: '`'},
            {open: "'", close: "'"},
            {open: '"', close: '"'},
        ],

        indentationRules: {
            decreaseIndentPattern: /(end\s*(do|if|function|subroutine|program|module|block|associate|forall|select))|else|(^((?!select).)*(case))/,
            increaseIndentPattern: /(^((?!end).)*(do\s|if(\s|\().*then|function\s|subroutine\s|program\s|module\s|block\s*|associate(\s|\()|forall|case)|else)/,
            unIndentedLinePattern: null,
        },
    };
}

var def = definition();

monaco.languages.register({id: 'fortran'});
monaco.languages.setMonarchTokensProvider('fortran', def);
monaco.languages.setLanguageConfiguration('fortran', configuration());

module.exports = def;


/***/ }),

/***/ "HdlZ":
/*!******************************!*\
  !*** ./static/panes/tool.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2018, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.



var _ = __webpack_require__(/*! underscore */ "xG9w");
var $ = __webpack_require__(/*! jquery */ "EVdn");
var FontScale = __webpack_require__(/*! ../fontscale */ "zeU8");
var AnsiToHtml = __webpack_require__(/*! ../ansi-to-html */ "Go29");
var Toggles = __webpack_require__(/*! ../toggles */ "VSGn");
var ga = __webpack_require__(/*! ../analytics */ "9vLr");
var monaco = __webpack_require__(/*! monaco-editor */ "M/lh");
var monacoConfig = __webpack_require__(/*! ../monaco-config */ "u8Pk");
var ceoptions = __webpack_require__(/*! ../options */ "3M42");
__webpack_require__(/*! ../modes/asm6502-mode */ "RLT6");

function makeAnsiToHtml(color) {
    return new AnsiToHtml({
        fg: color ? color : '#333',
        bg: '#f5f5f5',
        stream: true,
        escapeXML: true,
    });
}

function Tool(hub, container, state) {
    this.container = container;
    this.compilerId = state.compiler;
    this.editorId = state.editor;
    this.toolId = state.toolId;
    this.toolName = 'Tool';
    this.compilerService = hub.compilerService;
    this.eventHub = hub.createEventHub();
    this.domRoot = container.getElement();
    this.domRoot.html($('#tool-output').html());
    this.editorContentRoot = this.domRoot.find('.monaco-placeholder');
    this.plainContentRoot = this.domRoot.find('pre.content');
    this.optionsToolbar = this.domRoot.find('.options-toolbar');
    this.badLangToolbar = this.domRoot.find('.bad-lang');
    this.compilerName = '';
    this.normalAnsiToHtml = makeAnsiToHtml();
    this.errorAnsiToHtml = makeAnsiToHtml('red');

    this.optionsField = this.domRoot.find('input.options');
    this.stdinField = this.domRoot.find('textarea.tool-stdin');

    this.outputEditor = monaco.editor.create(this.editorContentRoot[0], monacoConfig.extendConfig({
        readOnly: true,
        language: 'text',
        fontFamily: 'courier new',
        lineNumbersMinChars: 5,
        renderIndentGuides: false,
    }));

    this.fontScale = new FontScale(this.domRoot, state, '.content');
    this.fontScale.on('change', _.bind(function () {
        this.saveState();
    }, this));

    this.initButtons(state);
    this.options = new Toggles(this.domRoot.find('.options'), state);
    this.options.on('change', _.bind(this.onOptionsChange, this));

    this.initArgs(state);
    this.initCallbacks();

    this.onOptionsChange();
    this.updateCompilerName();

    ga.proxy('send', {
        hitType: 'event',
        eventCategory: 'OpenViewPane',
        eventAction: 'Tool',
    });

    this.eventHub.emit('toolOpened', this.compilerId, this.currentState());
    this.eventHub.emit('requestSettings');
}

Tool.prototype.initCallbacks = function () {
    this.container.on('resize', this.resize, this);
    this.container.on('shown', this.resize, this);
    this.container.on('destroy', this.close, this);

    this.eventHub.on('compileResult', this.onCompileResult, this);
    this.eventHub.on('compilerClose', this.onCompilerClose, this);
    this.eventHub.on('settingsChange', this.onSettingsChange, this);
    this.eventHub.on('languageChange', this.onLanguageChange, this);

    this.toggleArgs.on('click', _.bind(function () {
        this.togglePanel(this.toggleArgs, this.panelArgs);
    }, this));

    this.toggleStdin.on('click', _.bind(function () {
        this.togglePanel(this.toggleStdin, this.panelStdin);
    }, this));

    if (MutationObserver !== undefined) {
        new MutationObserver(_.bind(this.resize, this)).observe(this.stdinField[0], {
            attributes: true, attributeFilter: ['style'],
        });
    }
};

Tool.prototype.onLanguageChange = function (editorId, newLangId) {
    if (this.editorId === editorId) {
        var tools = ceoptions.tools[newLangId];
        this.toggleUsable(tools && tools[this.toolId]);
    }
};

Tool.prototype.toggleUsable = function (isUsable) {
    if (isUsable) {
        this.plainContentRoot.css('opacity', '1');
        this.badLangToolbar.hide();
        this.optionsToolbar.show();
    } else {
        this.plainContentRoot.css('opacity', '0.5');
        this.optionsToolbar.hide();
        this.badLangToolbar.show();
    }
};

Tool.prototype.onSettingsChange = function (newSettings) {
    this.outputEditor.updateOptions({
        contextmenu: newSettings.useCustomContextMenu,
        minimap: {
            enabled: newSettings.showMinimap,
        },
        fontFamily: newSettings.editorsFFont,
        fontLigatures: newSettings.editorsFLigatures,
    });
};

Tool.prototype.initArgs = function (state) {
    var optionsChange = _.debounce(_.bind(function (e) {
        this.onOptionsChange($(e.target).val());

        this.eventHub.emit('toolSettingsChange', this.compilerId);
    }, this), 800);

    if (this.optionsField) {
        this.optionsField
            .on('change', optionsChange)
            .on('keyup', optionsChange);

        if (state.args) {
            this.optionsField.val(state.args);
        }
    }

    if (this.stdinField) {
        this.stdinField
            .on('change', optionsChange)
            .on('keyup', optionsChange);

        if (state.stdin) {
            this.stdinField.val(state.stdin);
        }
    }
};

Tool.prototype.getInputArgs = function () {
    if (this.optionsField) {
        return this.optionsField.val();
    } else {
        return '';
    }
};

Tool.prototype.getInputStdin = function () {
    if (this.stdinField) {
        return this.stdinField.val();
    } else {
        return '';
    }
};

Tool.prototype.getEffectiveOptions = function () {
    return this.options.get();
};

Tool.prototype.resize = function () {
    var barsHeight = this.optionsToolbar.outerHeight() + 2;
    if (!this.panelArgs.hasClass('d-none')) {
        barsHeight += this.panelArgs.outerHeight();
    }
    if (!this.panelStdin.hasClass('d-none')) {
        barsHeight += this.panelStdin.outerHeight();
    }

    this.outputEditor.layout({
        width: this.domRoot.width(),
        height: this.domRoot.height() - barsHeight,
    });

    this.plainContentRoot.height(this.domRoot.height() - barsHeight);
};

Tool.prototype.onOptionsChange = function () {
    var options = this.getEffectiveOptions();
    this.plainContentRoot.toggleClass('wrap', options.wrap);
    this.wrapButton.prop('title', '[' + (options.wrap ? 'ON' : 'OFF') + '] ' + this.wrapTitle);

    this.saveState();
};

Tool.prototype.initButtons = function (state) {
    this.wrapButton = this.domRoot.find('.wrap-lines');
    this.wrapTitle = this.wrapButton.prop('title');

    this.panelArgs = this.domRoot.find('.panel-args');
    this.panelStdin = this.domRoot.find('.panel-stdin');

    this.initToggleButtons(state);
};

Tool.prototype.initToggleButtons = function (state) {
    this.toggleArgs = this.domRoot.find('.toggle-args');
    this.toggleStdin = this.domRoot.find('.toggle-stdin');

    if (state.argsPanelShown === true) {
        this.showPanel(this.toggleArgs, this.panelArgs);
    }

    if (state.stdinPanelShown === true) {
        this.showPanel(this.toggleStdin, this.panelStdin);
    }
};

Tool.prototype.showPanel = function (button, panel) {
    panel.removeClass('d-none');
    button.addClass('active');
    this.resize();
};

Tool.prototype.hidePanel = function (button, panel) {
    panel.addClass('d-none');
    button.removeClass('active');
    this.resize();
};

Tool.prototype.togglePanel = function (button, panel) {
    if (panel.hasClass('d-none')) {
        this.showPanel(button, panel);
    } else {
        this.hidePanel(button, panel);
    }
    this.saveState();
};

Tool.prototype.currentState = function () {
    var options = this.getEffectiveOptions();
    var state = {
        compiler: this.compilerId,
        editor: this.editorId,
        wrap: options.wrap,
        toolId: this.toolId,
        args: this.getInputArgs(),
        stdin: this.getInputStdin(),
        stdinPanelShown: !this.panelStdin.hasClass('d-none'),
        argsPanelShow: !this.panelArgs.hasClass('d-none'),
    };
    this.fontScale.addState(state);
    return state;
};

Tool.prototype.saveState = function () {
    this.container.setState(this.currentState());
};

Tool.prototype.setLanguage = function (languageId) {
    if (languageId) {
        this.options.enableToggle('wrap', false);
        monaco.editor.setModelLanguage(this.outputEditor.getModel(), languageId);
        this.outputEditor.setValue('');
        this.fontScale.setTarget(this.outputEditor);
        $(this.plainContentRoot).hide();
        $(this.editorContentRoot).show();
    } else {
        this.options.enableToggle('wrap', true);
        this.plainContentRoot.empty();
        this.fontScale.setTarget('.content');
        $(this.editorContentRoot).hide();
        $(this.plainContentRoot).show();
    }
};

Tool.prototype.onCompileResult = function (id, compiler, result) {
    try{
        if (id !== this.compilerId) return;
        if (compiler) this.compilerName = compiler.name;

        var foundTool = _.find(compiler.tools, function (tool) {
            return (tool.tool.id === this.toolId);
        }, this);

        this.toggleUsable(foundTool);

        var toolResult = null;
        if (result && result.tools) {
            toolResult = _.find(result.tools, function (tool) {
                return (tool.id === this.toolId);
            }, this);
        }

        var toolInfo = null;
        if (compiler && compiler.tools) {
            toolInfo = _.find(compiler.tools, function (tool) {
                return (tool.tool.id === this.toolId);
            }, this);
        }

        if (toolInfo) {
            this.toggleStdin.prop('disabled', false);

            if (toolInfo.tool.stdinHint) {
                this.stdinField.prop('placeholder', toolInfo.tool.stdinHint);
                if (toolInfo.tool.stdinHint === 'disabled') {
                    this.toggleStdin.prop('disabled', true);
                } else {
                    this.showPanel(this.toggleStdin, this.panelStdin);
                }
            } else {
                this.stdinField.prop('placeholder', 'Tool stdin...');
            }
        }

        if (toolResult) {
            if (toolResult.languageId && (toolResult.languageId === 'stderr')) {
                toolResult.languageId = false;
            }

            this.setLanguage(toolResult.languageId);

            if (toolResult.languageId) {
                this.setEditorContent(_.pluck(toolResult.stdout, 'text').join('\n'));
            } else {
                _.each((toolResult.stdout || []).concat(toolResult.stderr || []), function (obj) {
                    if (obj.text === '') {
                        this.add('<br/>');
                    } else {
                        this.add(this.normalAnsiToHtml.toHtml(obj.text), obj.tag ? obj.tag.line : obj.line);
                    }
                }, this);
            }

            this.toolName = toolResult.name;
            this.updateCompilerName();

            if (toolResult.sourcechanged) {
                this.eventHub.emit('newSource', this.editorId, toolResult.newsource);
            }
        } else {
            this.setEditorContent('No tool result');
        }
    } catch(e) {
        this.setLanguage(false);
        this.add('javascript error: ' + e.message);
    }
};

Tool.prototype.add = function (msg, lineNum) {
    var elem = $('<div/>').appendTo(this.plainContentRoot);
    if (lineNum) {
        elem.html(
            $('<a></a>')
                .prop('href', 'javascript:;')
                .html(msg)
                .click(_.bind(function (e) {
                    this.eventHub.emit('editorSetDecoration', this.editorId, lineNum, true);
                    e.preventDefault();
                    return false;
                }, this))
                .on('mouseover', _.bind(function () {
                    this.eventHub.emit('editorSetDecoration', this.editorId, lineNum, false);
                }, this))
        );
    } else {
        elem.html(msg);
    }
};

Tool.prototype.setEditorContent = function (content) {
    if (!this.outputEditor || !this.outputEditor.getModel()) return;
    var editorModel = this.outputEditor.getModel();
    var visibleRanges = this.outputEditor.getVisibleRanges();
    var currentTopLine = visibleRanges.length > 0 ? visibleRanges[0].startLineNumber : 1;
    editorModel.setValue(content);
    this.outputEditor.revealLine(currentTopLine);
    this.setNormalContent();
};

Tool.prototype.setNormalContent = function () {
    this.outputEditor.updateOptions({
        lineNumbers: true,
        codeLens: false,
    });
    if (this.codeLensProvider) {
        this.codeLensProvider.dispose();
    }
};

Tool.prototype.updateCompilerName = function () {
    var name = this.toolName + ' #' + this.compilerId;
    if (this.compilerName) name += ' with ' + this.compilerName;
    this.container.setTitle(name);
};

Tool.prototype.onCompilerClose = function (id) {
    if (id === this.compilerId) {
        this.close();
        _.defer(function (self) {
            self.container.close();
        }, this);
    }
};

Tool.prototype.close = function () {
    this.eventHub.emit('toolClosed', this.compilerId, this.currentState());
    this.eventHub.unsubscribe();
    this.outputEditor.dispose();
};

module.exports = {
    Tool: Tool,
};


/***/ }),

/***/ "JdVj":
/*!***********************************!*\
  !*** ./static/modes/cppp-mode.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2017, Rubén Rincón
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


var $ = __webpack_require__(/*! jquery */ "EVdn");
var monaco = __webpack_require__(/*! monaco-editor */ "M/lh");
var cpp = __webpack_require__(/*! monaco-editor/esm/vs/basic-languages/cpp/cpp */ "fhwZ");

// We need to create a new definition for cpp so we can remove invalid keywords

function definition() {
    var cppp = $.extend(true, {}, cpp.language); // deep copy

    function removeKeyword(keyword) {
        var index = cppp.keywords.indexOf(keyword);
        if (index > -1) {
            cppp.keywords.splice(index, 1);
        }
    }

    function removeKeywords(keywords) {
        for (var i = 0; i < keywords.length; ++i) {
            removeKeyword(keywords[i]);
        }
    }

    function addKeywords(keywords) {
        // (Ruben) Done one by one as if you just push them all, Monaco complains that they're not strings, but as
        // far as I can tell, they indeed are all strings. This somehow fixes it. If you know how to fix it, plz go
        for (var i = 0; i < keywords.length; ++i) {
            cppp.keywords.push(keywords[i]);
        }
    }

    // We remove everything that's not an identifier, underscore reserved name and not an official C++ keyword...
    // Regarding #617, final is a identifier with special meaning, not a fully qualified keyword
    removeKeywords(['abstract', 'amp', 'array', 'cpu', 'delegate', 'each', 'event', 'finally', 'gcnew',
        'generic', 'in', 'initonly', 'interface', 'interior_ptr', 'internal', 'literal', 'partial', 'pascal',
        'pin_ptr', 'property', 'ref', 'restrict', 'safe_cast', 'sealed', 'title_static', 'where']);

    addKeywords(['alignas', 'alignof', 'and', 'and_eq', 'asm', 'bitand', 'bitor', 'char8_t', 'char16_t',
        'char32_t', 'compl', 'concept', 'consteval', 'constinit', 'co_await', 'co_return', 'co_yield', 'not', 'not_eq',
        'or', 'or_eq', 'requires', 'xor', 'xor_eq']);

    return cppp;
}

var def = definition();

monaco.languages.register({id: 'cppp'});
monaco.languages.setLanguageConfiguration('cppp', cpp.conf);
monaco.languages.setMonarchTokensProvider('cppp', def);

module.exports = def;


/***/ }),

/***/ "L2ri":
/*!**********************************!*\
  !*** ./static/modes/nim-mode.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2019, Ray Imber 
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


var monaco = __webpack_require__(/*! monaco-editor */ "M/lh");

function definition() {
    // Nim language definition
    
    return {
        keywords: [
            'addr', 'as', 'asm',
            'bind', 'block', 'break',
            'case', 'cast', 'concept', 'const', 'continue', 'converter',
            'defer', 'discard', 'distinct', 'div', 'do',
            'elif', 'else', 'end', 'enum', 'except', 'export',
            'finally', 'for', 'from', 'func',
            'if', 'import', 'include', 'interface', 'iterator',
            'let',
            'macro', 'method', 'mixin', 'mod',
            'nil',
            'object', 'out',
            'proc', 'ptr',
            'raise', 'ref', 'return',
            'static',
            'template', 'try', 'tuple', 'type',
            'using',
            'var',
            'when', 'while',
            'yield',
            'push', 'pop',
        ],
        operators: [
            '=', '+', '-', '*', '/', '<', '>',
            '@', '$', '~', '&', '%', '|',
            '!', '?', '^', '.', ':', '\\',
        ],
        wordOperators: [
            'and', 'or', 'not', 'xor', 'shl', 'shr', 'div', 'mod', 'in', 'notin', 'is', 'isnot', 'of',
        ],
        symbols: /[=><!~&|+\-*/^%]+/,
        escapes: /\\(p|r|c|n|l|f|t|v|a|b|e|\\|"|'|\d+|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u\{[0-9a-fA-F]+\})/,
        charEscapes: /\\(r|c|n|l|f|t|v|a|b|e|\\|"|'|x[0-9a-fA-F]{2})/,
        
        hexNumber: /0(x|X)[0-9a-fA-F](_?[0-9a-fA-F])*/,
        decNumber: /\d(_?\d)*/, 
        octNumber: /0o[0-7](_?[0-7])*/,
        binNumber: /0(b|B)[0-1](_?[0-1])*/,
        exponent: /(e|E)(\+|-)?\d(_?\d)*/,
        brackets: [
            ['{','}','delimiter.curly'],
            ['{.','.}','delimiter.curly'],
            ['[',']','delimiter.square'],
            ['[:',']','delimiter.square'],
            ['[.','.]','delimiter.square'],
            ['(',')','delimiter.parenthesis'],
            ['(.','.)','delimiter.parenthesis'],
            ['<','>','delimiter.angle'],
        ],

        // The main tokenizer for our languages
        tokenizer: {
            root: [
                [/[A-Za-z]([_]?\w)*/, {
                    cases: {
                        '@keywords': 'keyword',
                        '@wordOperators': 'keyword',
                        '@default': 'identifier',
                    },
                }],
                {include: '@whitespace'},
                [/([:|[[{(]\.|\.[\]})]|[[\]{}()])/, '@brackets'],
                [/@symbols/, {
                    cases: {
                        '@operators': 'operator',
                        '@default': '',
                    },
                }],

                // number literals
                // floats
                [/@decNumber(\.@decNumber(@exponent)|@exponent)(')?(f|F|d|D)(32|64)?/, 'number.float'], 
                [/(@decNumber|@octNumber|@binNumber)(')?(f|F|d|D)(32|64)?/, 'number.float'],
                [/@hexNumber'(f|F|d|D)(32|64)?/, 'number.float'],

                // ints
                [/@hexNumber(')?((i|I|u|U)(8|16|32|64))?/, 'number.hex'],
                [/@octNumber(')?((i|I|u|U)(8|16|32|64))?/, 'number.octal'],
                [/@binNumber(')?((i|I|u|U)(8|16|32|64))?/, 'number.binary'],

                [/@decNumber(')?((i|I|u|U)(8|16|32|64))?/, 'number'],
              
                // char literals
                [/'/, 'string', '@character'],

                // strings
                [/(r|R)"/, 'string', '@rawString'],
                [/"""/, 'string', '@tripleQuoteString'],
                [/"(?!")/, 'string', '@string'],
            ],
            whitespace: [
                [/[ \t\r\n]+/, 'white'],
                [/#\[/, 'comment', '@comment'],
                [/#.*$/, 'comment'],
            ],
            comment: [
                [/[^\]#]/, 'comment'],
                [/\]#/, 'comment', '@pop'],
            ],
            string: [
                [/@escapes/, 'string.escape'],
                [/"/, 'string', '@pop'],
            ],
            tripleQuoteString: [
                [/"""/, 'string', '@pop'],
            ],
            rawString: [
                [/"/, 'string', '@pop'],
            ],
            character: [
                [/@charEscapes/, 'string.escape'],
                [/'/, 'string', '@pop'],
            ],
        },
    };
}

monaco.languages.register({id: 'nim'});
monaco.languages.setMonarchTokensProvider('nim', definition());


/***/ }),

/***/ "NSir":
/*!********************************!*\
  !*** ./static/modes/d-mode.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2017, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


var monaco = __webpack_require__(/*! monaco-editor */ "M/lh");

function definition() {
    return {
        defaultToken: 'invalid',

        keywords: [
            'abstract',
            'alias',
            'align',
            'asm',
            'assert',
            'auto',
            'body',
            'bool',
            'break',
            'byte',
            'case',
            'cast',
            'catch',
            'cdouble',
            'cent',
            'cfloat',
            'char',
            'class',
            'const',
            'continue',
            'creal',
            'dchar',
            'debug',
            'default',
            'delegate',
            'delete ',
            'deprecated',
            'do',
            'double',
            'else',
            'enum',
            'export',
            'extern',
            'false',
            'final',
            'finally',
            'float',
            'for',
            'foreach',
            'foreach_reverse',
            'function',
            'goto',
            'idouble',
            'if',
            'ifloat',
            'immutable',
            'import',
            'in',
            'inout',
            'int',
            'interface',
            'invariant',
            'ireal',
            'is',
            'lazy',
            'long',
            'macro',
            'mixin',
            'module',
            'new',
            'nothrow',
            'null',
            'out',
            'override',
            'package',
            'pragma',
            'private',
            'protected',
            'public',
            'pure',
            'real',
            'ref',
            'return',
            'scope',
            'shared',
            'short',
            'static',
            'struct',
            'super',
            'switch',
            'synchronized',
            'template',
            'this',
            'throw',
            'true',
            'try',
            'typedef',
            'typeid',
            'typeof',
            'ubyte',
            'ucent',
            'uint',
            'ulong',
            'union',
            'unittest',
            'ushort',
            'version',
            'void',
            'volatile',
            'wchar',
            'while',
            'with',
            '__FILE__',
            '__FILE_FULL_PATH__',
            '__MODULE__',
            '__LINE__',
            '__FUNCTION__',
            '__PRETTY_FUNCTION__',
            '__gshared',
            '__traits',
            '__vector',
            '__parameters'],

        typeKeywords: [
            'bool', 'byte', 'ubyte', 'short', 'ushort', 'int', 'uint', 'long', 'ulong', 'char', 'wchar', 'dchar',
            'float', 'double', 'real', 'ifloat', 'idouble', 'ireal', 'cfloat', 'cdouble', 'creal', 'void',
        ],

        operators: [
            '=', '>', '<', '!', '~', '?', ':',
            '==', '<=', '>=', '!=', '&&', '||', '++', '--',
            '+', '-', '*', '/', '&', '|', '^', '%', '<<',
            '>>', '>>>', '+=', '-=', '*=', '/=', '&=', '|=',
            '^=', '%=', '<<=', '>>=', '>>>=',
        ],

        // we include these common regular expressions
        symbols: /[=><!~?:&|+\-*/^%]+/,
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

        // The main tokenizer for our languages
        tokenizer: {
            root: [
                // identifiers and keywords
                [/[a-z_$][\w$]*/, {
                    cases: {
                        '@typeKeywords': 'keyword',
                        '@keywords': 'keyword',
                        '@default': 'identifier',
                    },
                }],
                [/[A-Z][\w$]*/, 'type.identifier'],  // to show class names nicely

                // whitespace
                {include: '@whitespace'},

                // delimiters and operators
                [/[{}()[\]]/, '@brackets'],
                [/[<>](?!@symbols)/, '@brackets'],
                [/@symbols/, {
                    cases: {
                        '@operators': 'operator',
                        '@default': '',
                    },
                }],

                // numbers
                [/\d*\.\d+([eE][-+]?\d+)?[fFdD]?/, 'number.float'],
                [/0[xX][0-9a-fA-F_]*[0-9a-fA-F][Ll]?/, 'number.hex'],
                [/0[0-7_]*[0-7][Ll]?/, 'number.octal'],
                [/0[bB][0-1_]*[0-1][Ll]?/, 'number.binary'],
                [/\d+[lL]?/, 'number'],

                // delimiter: after number because of .\d floats
                [/[;,.]/, 'delimiter'],

                // strings
                [/"([^"\\]|\\.)*$/, 'string.invalid'],  // non-teminated string
                [/"/, 'string', '@string'],
                [/`/, 'string', '@rawstring'],

                // characters
                [/'[^\\']'/, 'string'],
                [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
                [/'/, 'string.invalid'],
            ],

            whitespace: [
                [/[ \t\r\n]+/, 'white'],
                [/\/\*/, 'comment', '@comment'],
                [/\/\+/, 'comment', '@nestingcomment'],
                [/\/\/.*$/, 'comment'],
            ],

            comment: [
                [/[^/*]+/, 'comment'],
                [/\*\//, 'comment', '@pop'],
                [/[/*]/, 'comment'],
            ],

            nestingcomment: [
                [/[^/+]+/, 'comment'],
                [/\/\+/, 'comment', '@push'],
                [/\/\+/, 'comment.invalid'],
                [/\+\//, 'comment', '@pop'],
                [/[/+]/, 'comment'],
            ],

            string: [
                [/[^\\"]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/"/, 'string', '@pop'],
            ],

            rawstring: [
                [/[^`]/, 'string'],
                [/`/, 'string', '@pop'],
            ],
        },
    };
}

function configuration() {
    return {
        comments: {
            lineComment: '//',
            blockComment: ['/*', '*/'],
        },

        brackets: [
            ['{', '}'],
            ['[', ']'],
            ['(', ')'],
        ],

        autoClosingPairs: [
            {open: '{', close: '}'},
            {open: '[', close: ']'},
            {open: '(', close: ')'},
            {open: '`', close: '`', notIn: ['string']},
            {open: '"', close: '"', notIn: ['string']},
            {open: '\'', close: '\'', notIn: ['string', 'comment']},
        ],

        surroundingPairs: [
            {open: '{', close: '}'},
            {open: '[', close: ']'},
            {open: '(', close: ')'},
            {open: '`', close: '`'},
            {open: '"', close: '"'},
            {open: '\'', close: '\''},
        ],
    };
}

monaco.languages.register({id: 'd'});
monaco.languages.setMonarchTokensProvider('d', definition());
monaco.languages.setLanguageConfiguration('d', configuration());


/***/ }),

/***/ "NWa+":
/*!************************!*\
  !*** ./static/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2016, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.



// setup analytics before anything else so we can capture any future errors in sentry
var analytics = __webpack_require__(/*! ./analytics */ "9vLr");

// eslint-disable-next-line requirejs/no-js-extension
__webpack_require__(/*! popper.js */ "8L3F");
__webpack_require__(/*! bootstrap */ "SYky");
__webpack_require__(/*! bootstrap-slider */ "OisC");

var sharing = __webpack_require__(/*! ./sharing */ "aEWw");
var _ = __webpack_require__(/*! underscore */ "xG9w");
var cloneDeep = __webpack_require__(/*! lodash.clonedeep */ "zT9C");
var $ = __webpack_require__(/*! jquery */ "EVdn");
var GoldenLayout = __webpack_require__(/*! golden-layout */ "xGNL");
var Components = __webpack_require__(/*! ./components */ "hqpU");
var url = __webpack_require__(/*! ./url */ "QseJ");
var clipboard = __webpack_require__(/*! clipboard */ "sxGJ");
var Hub = __webpack_require__(/*! ./hub */ "eNeu");
var Sentry = __webpack_require__(/*! @sentry/browser */ "WSEr");
var settings = __webpack_require__(/*! ./settings */ "Wbdj");
var local = __webpack_require__(/*! ./local */ "/Zv+");
var Alert = __webpack_require__(/*! ./alert */ "By64");
var themer = __webpack_require__(/*! ./themes */ "dEVg");
var motd = __webpack_require__(/*! ./motd */ "Tr+U");
var jsCookie = __webpack_require__(/*! js-cookie */ "p46w");
var SimpleCook = __webpack_require__(/*! ./simplecook */ "WHwv");
var History = __webpack_require__(/*! ./history */ "Bp6e");
var HistoryWidget = __webpack_require__(/*! ./history-widget */ "62a2").HistoryWidget;
var presentation = __webpack_require__(/*! ./presentation */ "EVXG");

//css
__webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "q4sD");
__webpack_require__(/*! golden-layout/src/css/goldenlayout-base.css */ "88+i");
__webpack_require__(/*! selectize/dist/css/selectize.bootstrap2.css */ "+7Bg");
__webpack_require__(/*! bootstrap-slider/dist/css/bootstrap-slider.css */ "K6jd");
__webpack_require__(/*! ./colours.scss */ "5wl3");
__webpack_require__(/*! ./explorer.scss */ "ZTZ6");

// Check to see if the current unload is a UI reset.
// Forgive me the global usage here
var hasUIBeenReset = false;
var simpleCooks = new SimpleCook();
var historyWidget = new HistoryWidget();

// Polyfill includes for IE11 - From MDN
if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        if (search instanceof RegExp) {
            throw TypeError('first argument must not be a RegExp');
        }
        if (start === undefined) {
            start = 0;
        }
        return this.indexOf(search, start) !== -1;
    };
}

function setupSettings(hub) {
    var eventHub = hub.layout.eventHub;
    var defaultSettings = {
        defaultLanguage: hub.defaultLangId,
    };
    var currentSettings = JSON.parse(local.get('settings', null)) || defaultSettings;

    function onChange(newSettings) {
        if (currentSettings.theme !== newSettings.theme) {
            analytics.proxy('send', {
                hitType: 'event',
                eventCategory: 'ThemeChange',
                eventAction: newSettings.theme,
            });
        }
        if (currentSettings.colourScheme !== newSettings.colourScheme) {
            analytics.proxy('send', {
                hitType: 'event',
                eventCategory: 'ColourSchemeChange',
                eventAction: newSettings.colourScheme,
            });
        }
        currentSettings = newSettings;
        local.set('settings', JSON.stringify(newSettings));
        eventHub.emit('settingsChange', newSettings);
    }

    new themer.Themer(eventHub, currentSettings);

    eventHub.on('requestSettings', function () {
        eventHub.emit('settingsChange', currentSettings);
    });

    var setSettings = settings($('#settings'), currentSettings, onChange, hub.subdomainLangId);
    eventHub.on('modifySettings', function (newSettings) {
        setSettings(_.extend(currentSettings, newSettings));
    });
    return currentSettings;
}

function hasCookieConsented(options) {
    return jsCookie.get(options.policies.cookies.key) === options.policies.cookies.hash;
}

function isMobileViewer() {
    return window.compilerExplorerOptions.mobileViewer;
}

function calcLocaleChangedDate(policyModal) {
    var timestamp = policyModal.find('#changed-date');
    timestamp.text(new Date(timestamp.attr('datetime')).toLocaleString());
}

function setupButtons(options) {
    var alertSystem = new Alert();

    // I'd like for this to be the only function used, but it gets messy to pass the callback function around,
    // so we instead trigger a click here when we want it to open with this effect. Sorry!
    if (options.policies.privacy.enabled) {
        $('#privacy').click(function (event, data) {
            var modal = alertSystem.alert(
                data && data.title ? data.title : 'Privacy policy',
                __webpack_require__(/*! ./policies/privacy.html */ "Wj77")
            );
            calcLocaleChangedDate(modal);
            // I can't remember why this check is here as it seems superfluous
            if (options.policies.privacy.enabled) {
                jsCookie.set(options.policies.privacy.key, options.policies.privacy.hash, {expires: 365});
            }
        });
    }

    if (options.policies.cookies.enabled) {
        var getCookieTitle = function () {
            return 'Cookies &amp; related technologies policy<br><p>Current consent status: <span style="color:' +
                (hasCookieConsented(options) ? 'green' : 'red') + '">' +
                (hasCookieConsented(options) ? 'Granted' : 'Denied') + '</span></p>';
        };
        $('#cookies').click(function () {
            var modal = alertSystem.ask(getCookieTitle(), $(__webpack_require__(/*! ./policies/cookies.html */ "k3xS")), {
                yes: function () {
                    simpleCooks.callDoConsent.apply(simpleCooks);
                },
                yesHtml: 'Consent',
                no: function () {
                    simpleCooks.callDontConsent.apply(simpleCooks);
                },
                noHtml: 'Do NOT consent',
            });
            calcLocaleChangedDate(modal);
        });
    }

    $('#ui-reset').click(function () {
        local.remove('gl');
        hasUIBeenReset = true;
        window.history.replaceState(null, null, window.httpRoot);
        window.location.reload();
    });

    $('#ui-duplicate').click(function () {
        window.open('/', '_blank');
    });

    $('#changes').click(function () {
        alertSystem.alert('Changelog', $(__webpack_require__(/*! ./changelog.html */ "8LMM")));
    });

    $('#ces').click(function () {
        $.get(window.location.origin + window.httpRoot + 'bits/sponsors.html')
            .done(function (data) {
                alertSystem.alert('Compiler Explorer Sponsors', data);
                analytics.proxy('send', {
                    hitType: 'event',
                    eventCategory: 'Sponsors',
                    eventAction: 'open',
                });
            })
            .fail(function (err) {
                var result = err.responseText || JSON.stringify(err);
                alertSystem.alert('Compiler Explorer Sponsors',
                    '<div>Unable to fetch sponsors:</div><div>' + result + '</div>');
            });
    });

    $('#ui-history').click(function () {
        historyWidget.run(function (data) {
            local.set('gl', JSON.stringify(data.config));
            hasUIBeenReset = true;
            window.history.replaceState(null, null, window.httpRoot);
            window.location.reload();
        });

        $('#history').modal();
    });

    if (isMobileViewer() && window.compilerExplorerOptions.slides && window.compilerExplorerOptions.slides.length > 1) {
        $('#share').remove();
        $('.ui-presentation-control').removeClass('d-none');
        $('.ui-presentation-first').click(presentation.first);
        $('.ui-presentation-prev').click(presentation.prev);
        $('.ui-presentation-next').click(presentation.next);
    }
}

function findConfig(defaultConfig, options) {
    var config = null;
    if (!options.embedded) {
        if (options.slides) {
            presentation.init(window.compilerExplorerOptions.slides.length);
            var currentSlide = presentation.getCurrentSlide();
            if (currentSlide < options.slides.length) {
                config = options.slides[currentSlide];
            } else {
                presentation.setCurrentSlide(0);
                config = options.slides[0];
            }
        } else {
            if (options.config) {
                config = options.config;
            } else {
                config = url.deserialiseState(window.location.hash.substr(1));
            }

            if (config) {
                // replace anything in the default config with that from the hash
                config = _.extend(defaultConfig, config);
            }
            if (!config) {
                var savedState = local.get('gl', null);
                config = savedState !== null ? JSON.parse(savedState) : defaultConfig;
            }
        }
    } else {
        config = _.extend(defaultConfig, {
            settings: {
                showMaximiseIcon: false,
                showCloseIcon: false,
                hasHeaders: false,
            },
        }, sharing.configFromEmbedded(window.location.hash.substr(1)));
    }
    return config;
}

function initializeResetLayoutLink() {
    var currentUrl = document.URL;
    if (currentUrl.includes('/z/')) {
        $('#ui-brokenlink').attr('href', currentUrl.replace('/z/', '/resetlayout/'));
        $('#ui-brokenlink').show();
    } else {
        $('#ui-brokenlink').hide();
    }
}

function initPolicies(options) {
    // Ensure old cookies are removed, to avoid user confusion
    jsCookie.remove('fs_uid');
    jsCookie.remove('cookieconsent_status');
    if (options.policies.privacy.enabled) {
        if (jsCookie.get(options.policies.privacy.key) == null) {
            $('#privacy').trigger('click', {
                title: 'New Privacy Policy. Please take a moment to read it',
            });
        } else if (options.policies.privacy.hash !== jsCookie.get(options.policies.privacy.key)) {
            // When the user has already accepted the privacy, just show a pretty notification.
            var ppolicyBellNotification = $('#policyBellNotification');
            var pprivacyBellNotification = $('#privacyBellNotification');
            var pcookiesBellNotification = $('#cookiesBellNotification');
            ppolicyBellNotification.removeClass('d-none');
            pprivacyBellNotification.removeClass('d-none');
            $('#privacy').on('click', function () {
                // Only hide if the other policy does not also have a bell
                if (pcookiesBellNotification.hasClass('d-none')) {
                    ppolicyBellNotification.addClass('d-none');
                }
                pprivacyBellNotification.addClass('d-none');
            });
        }
    }
    simpleCooks.onDoConsent = function () {
        jsCookie.set(options.policies.cookies.key, options.policies.cookies.hash, {expires: 365});
        analytics.toggle(true);
    };
    simpleCooks.onDontConsent = function () {
        analytics.toggle(false);
        jsCookie.set(options.policies.cookies.key, '');
    };
    simpleCooks.onHide = function () {
        var spolicyBellNotification = $('#policyBellNotification');
        var sprivacyBellNotification = $('#privacyBellNotification');
        var scookiesBellNotification = $('#cookiesBellNotification');
        // Only hide if the other policy does not also have a bell
        if (sprivacyBellNotification.hasClass('d-none')) {
            spolicyBellNotification.addClass('d-none');
        }
        scookiesBellNotification.addClass('d-none');
        $(window).trigger('resize');
    };
    // '' means no consent. Hash match means consent of old. Null means new user!
    var storedCookieConsent = jsCookie.get(options.policies.cookies.key);
    if (options.policies.cookies.enabled) {
        if (storedCookieConsent !== '' && options.policies.cookies.hash !== storedCookieConsent) {
            simpleCooks.show();
            var cpolicyBellNotification = $('#policyBellNotification');
            var cprivacyBellNotification = $('#privacyBellNotification');
            var ccookiesBellNotification = $('#cookiesBellNotification');
            cpolicyBellNotification.removeClass('d-none');
            ccookiesBellNotification.removeClass('d-none');
            $('#cookies').on('click', function () {
                if (cprivacyBellNotification.hasClass('d-none')) {
                    cpolicyBellNotification.addClass('d-none');
                }
                ccookiesBellNotification.addClass('d-none');
            });
        } else if (hasCookieConsented(options)) {
            analytics.initialise();
        }
    }
}

function filterComponentState(config, keysToRemove) {
    function filterComponentStateImpl(component) {
        if (component.content) {
            for (var i = 0; i < component.content.length; i++) {
                filterComponentStateImpl(component.content[i], keysToRemove);
            }
        }

        if (component.componentState) {
            Object.keys(component.componentState)
                .filter(function (key) { return keysToRemove.includes(key); })
                .forEach(function (key) { delete component.componentState[key]; });
        }
    }

    config = cloneDeep(config);
    filterComponentStateImpl(config);
    return config;
}

/*
 * this nonsense works around a bug in goldenlayout where a config can be generated
 * that contains a flag indicating there is a maximized item which does not correspond
 * to any items that actually exist in the config.
 *
 * See https://github.com/compiler-explorer/compiler-explorer/issues/2056
 */
function removeOrphanedMaximisedItemFromConfig(config) {
    // nothing to do if the maximised item id is not set
    if (config.maximisedItemId !== '__glMaximised') return;

    var found = false;
    function impl(component) {
        if (component.id === '__glMaximised') {
            found = true;
            return;
        }

        if (component.content) {
            for (var i = 0; i < component.content.length; i++) {
                impl(component.content[i]);
                if (found) return;
            }
        }
    }

    impl(config);

    if (!found) {
        config.maximisedItemId = null;
    }
}

// eslint-disable-next-line max-statements
function start() {
    initializeResetLayoutLink();

    var options = __webpack_require__(/*! options */ "3M42");

    var hostnameParts = window.location.hostname.split('.');
    var subLangId = undefined;
    // Only set the subdomain lang id if it makes sense to do so
    if (hostnameParts.length > 0) {
        var subdomainPart = hostnameParts[0];
        var langBySubdomain = _.find(options.languages, function (lang) {
            return lang.id === subdomainPart || lang.alias.indexOf(subdomainPart) !== -1;
        });
        if (langBySubdomain) {
            subLangId = langBySubdomain.id;
        }
    }
    var defaultLangId = subLangId;
    if (!defaultLangId) {
        if (options.languages['c++']) {
            defaultLangId = 'c++';
        } else {
            defaultLangId = _.keys(options.languages)[0];
        }
    }

    // Cookie domains are matched as a RE against the window location. This allows a flexible
    // way that works across multiple domains (e.g. godbolt.org and compiler-explorer.com).
    // We allow this to be configurable so that (for example), gcc.godbolt.org and d.godbolt.org
    // share the same cookie domain for some settings.
    var cookieDomain = new RegExp(options.cookieDomainRe).exec(window.location.hostname);
    if (cookieDomain && cookieDomain[0]) {
        cookieDomain = cookieDomain[0];
        jsCookie.defaults.domain = cookieDomain;
    }

    var defaultConfig = {
        settings: {showPopoutIcon: false},
        content: [{
            type: 'row',
            content: [
                Components.getEditor(1, defaultLangId),
                Components.getCompiler(1, defaultLangId),
            ],
        }],
    };

    $(window).bind('hashchange', function () {
        // punt on hash events and just reload the page if there's a hash
        if (window.location.hash.substr(1)) window.location.reload();
    });

    // Which buttons act as a linkable popup
    var linkablePopups = ['#ces', '#sponsors', '#changes', '#cookies', '#setting', '#privacy'];
    var hashPart = linkablePopups.indexOf(window.location.hash) > -1 ? window.location.hash : null;
    if (hashPart) {
        window.location.hash = '';
        // Handle the time we renamed sponsors to ces to work around issues with blockers.
        if (hashPart === '#sponsors') hashPart = '#ces';
    }

    var config = findConfig(defaultConfig, options);
    removeOrphanedMaximisedItemFromConfig(config);

    var root = $('#root');

    var layout;
    var hub;
    try {
        layout = new GoldenLayout(config, root);
        hub = new Hub(layout, subLangId, defaultLangId);
    } catch (e) {
        Sentry.captureException(e);

        if (document.URL.includes('/z/')) {
            document.location = document.URL.replace('/z/', '/resetlayout/');
        }

        layout = new GoldenLayout(defaultConfig, root);
        hub = new Hub(layout, subLangId, defaultLangId);
    }

    var lastState = null;
    var storedPaths = {};  // TODO maybe make this an LRU cache?

    layout.on('stateChanged', function () {
        var config = filterComponentState(layout.toConfig(), ['selection']);
        var stringifiedConfig = JSON.stringify(config);
        if (stringifiedConfig !== lastState) {
            if (storedPaths[stringifiedConfig]) {
                window.history.replaceState(null, null, storedPaths[stringifiedConfig]);
            } else if (window.location.pathname !== window.httpRoot) {
                window.history.replaceState(null, null, window.httpRoot);
                // TODO: Add this state to storedPaths, but with a upper bound on the stored state count
            }
            lastState = stringifiedConfig;

            History.push(stringifiedConfig);
        }
        if (options.embedded) {
            var strippedToLast = window.location.pathname;
            strippedToLast = strippedToLast.substr(0, strippedToLast.lastIndexOf('/') + 1);
            $('a.link').attr('href', strippedToLast + '#' + url.serialiseState(config));
        }
    });

    function sizeRoot() {
        var height = $(window).height() - (root.position().top || 0) - ($('#simplecook:visible').height() || 0);
        root.height(height);
        layout.updateSize();
    }

    $(window)
        .resize(sizeRoot)
        .on('beforeunload', function () {
            // Only preserve state in localStorage in non-embedded mode.
            var shouldSave = !window.hasUIBeenReset && !hasUIBeenReset;
            if (!options.embedded && !isMobileViewer() && shouldSave) {
                local.set('gl', JSON.stringify(layout.toConfig()));
            }
        });

    new clipboard('.btn.clippy');

    var settings = setupSettings(hub);

    // We assume no consent for embed users
    if (!options.embedded) {
        setupButtons(options);
    }

    function storeCurrentConfig(config, extra) {
        window.history.pushState(null, null, extra);
        storedPaths[JSON.stringify(config)] = extra;
    }

    sharing.initShareButton($('#shareShort'), layout, storeCurrentConfig, 'Short');
    sharing.initShareButton($('#shareFull'), layout, storeCurrentConfig, 'Full');
    sharing.initShareButton($('#shareEmbed'), layout, storeCurrentConfig, 'Embed');

    layout.eventHub.on('displaySharingPopover', function () {
        $('#shareShort').trigger('click');
    });

    function setupAdd(thing, func) {
        layout.createDragSource(thing, func);
        thing.click(function () {
            hub.addAtRoot(func());
        });
    }

    setupAdd($('#add-editor'), function () {
        return Components.getEditor();
    });
    setupAdd($('#add-diff'), function () {
        return Components.getDiff();
    });

    if (hashPart) {
        var element = $(hashPart);
        if (element) element.click();
    }
    initPolicies(options);

    // Skip some steps if using embedded mode
    if (!options.embedded) {
        // Only fetch MOTD when not embedded.
        motd.initialise(options.motdUrl, $('#motd'), subLangId, settings.enableCommunityAds,
            function (data) {
                var sendMotd = function () {
                    hub.layout.eventHub.emit('motd', data);
                };
                hub.layout.eventHub.on('requestMotd', sendMotd);
                sendMotd();
            },
            function () {
                hub.layout.eventHub.emit('modifySettings', {
                    enableCommunityAds: false,
                });
            });

        // Don't try to update Version tree link
        var release = window.compilerExplorerOptions.gitReleaseCommit;
        var versionLink = 'https://github.com/compiler-explorer/compiler-explorer/';
        if (release) {
            versionLink += 'tree/' + release;
        }
        $('#version-tree').prop('href', versionLink);
    }

    if (options.hideEditorToolbars) {
        $('[name="editor-btn-toolbar"]').addClass('d-none');
    }

    window.onSponsorClick = function (sponsor) {
        analytics.proxy('send', {
            hitType: 'event',
            eventCategory: 'Sponsors',
            eventAction: 'click',
            eventLabel: sponsor.url,
            transport: 'beacon',
        });
        window.open(sponsor.url);
    };

    sizeRoot();
    var initialConfig = JSON.stringify(filterComponentState(layout.toConfig(), ['selection']));
    lastState = initialConfig;
    storedPaths[initialConfig] = window.location.href;
}

$(start);


/***/ }),

/***/ "OT6Z":
/*!*****************************!*\
  !*** ./static/load-save.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2016, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


var $ = __webpack_require__(/*! jquery */ "EVdn");
var _ = __webpack_require__(/*! underscore */ "xG9w");
var saveAs = __webpack_require__(/*! file-saver */ "Iab2").saveAs;
var Alert = __webpack_require__(/*! ./alert */ "By64");
var local = __webpack_require__(/*! ./local */ "/Zv+");
var Promise = __webpack_require__(/*! es6-promise */ "E2g8").Promise;
var ga = __webpack_require__(/*! ./analytics */ "9vLr");
var history = __webpack_require__(/*! ./history */ "Bp6e");

function getLocalFiles() {
    return JSON.parse(local.get('files', '{}'));
}

function setLocalFile(name, file) {
    var files = getLocalFiles();
    files[name] = file;
    local.set('files', JSON.stringify(files));
}

function LoadSave() {
    this.modal = null;
    this.alertSystem = new Alert();
    this.alertSystem.prefixMessage = 'Load-Saver: ';
    this.onLoad = _.identity;
    this.editorText = '';
    this.extension = '.txt';
    this.base = window.httpRoot;
    this.fetchBuiltins();
}

LoadSave.prototype.initializeIfNeeded = function () {
    if ((this.modal === null) || (this.modal.length === 0)) {
        this.modal = $('#load-save');

        this.modal.find('.local-file').change(_.bind(this.onLocalFile, this));
        this.modal.find('.save-button').click(_.bind(this.onSaveToBrowserStorage, this));
        this.modal.find('.save-file').click(_.bind(this.onSaveToFile, this));
    }
};

LoadSave.prototype.fetchBuiltins = function () {
    return new Promise(_.bind(function (resolve) {
        $.getJSON(window.location.origin + this.base + 'source/builtin/list', function (list) {
            resolve(list);
        });
    }, this));
};

LoadSave.prototype.populateBuiltins = function () {
    var isVisible = _.bind(function (entry) {
        return this.currentLanguage && this.currentLanguage.id === entry.lang;
    }, this);
    return this.fetchBuiltins()
        .then(_.bind(function (builtins) {
            this.populate(this.modal.find('.examples'),
                _.map(_.filter(builtins, isVisible), _.bind(function (elem) {
                    return {
                        name: elem.name,
                        load: _.bind(function () {
                            this.doLoad(elem);
                        }, this),
                    };
                }, this))
            );
        }, this));
};

LoadSave.prototype.populateLocalStorage = function () {
    this.populate(
        this.modal.find('.local-storage'),
        _.map(getLocalFiles(), _.bind(function (data, name) {
            return {
                name: name,
                load: _.bind(function () {
                    this.onLoad(data);
                    this.modal.modal('hide');
                }, this),
            };
        }, this)));
};

LoadSave.prototype.populateLocalHistory = function () {
    this.populate(
        this.modal.find('.local-history'),
        _.map(history.sources(this.currentLanguage.id), _.bind(function (data) {
            var dt = new Date(data.dt);
            return {
                name: dt.toString().replace(/\s\(.*\)/, ''),
                load: _.bind(function () {
                    this.onLoad(data.source);
                    this.modal.modal('hide');
                }, this),
            };
        }, this)));
};

LoadSave.prototype.populate = function (root, list) {
    root.find('li:not(.template)').remove();
    var template = root.find('.template');
    _.each(list, _.bind(function (elem) {
        template
            .clone()
            .removeClass('template')
            .appendTo(root)
            .find('a')
            .text(elem.name)
            .click(elem.load);
    }, this));
};

LoadSave.prototype.onLocalFile = function (event) {
    var files = event.target.files;
    if (files.length !== 0) {
        var file = files[0];
        var reader = new FileReader();
        reader.onload = _.bind(function () {
            this.onLoad(reader.result);
        }, this);
        reader.readAsText(file);
    }
    this.modal.modal('hide');
};

LoadSave.prototype.run = function (onLoad, editorText, currentLanguage) {
    this.initializeIfNeeded();
    this.populateLocalStorage();
    this.setMinimalOptions(editorText, currentLanguage);
    this.populateLocalHistory();
    this.onLoad = onLoad;
    this.modal.find('.local-file').attr('accept', _.map(currentLanguage.extensions, function (extension) {
        return extension + ', ';
    }, this));
    this.populateBuiltins().then(_.bind(function () {
        this.modal.modal();
    }, this));
    ga.proxy('send', {
        hitType: 'event',
        eventCategory: 'OpenModalPane',
        eventAction: 'LoadSave',
    });
};

LoadSave.prototype.onSaveToBrowserStorage = function () {
    var name = this.modal.find('.save-name').val();
    if (!name) {
        this.alertSystem.alert('Save name', 'Invalid save name');
        return;
    }
    name += ' (' + this.currentLanguage.name + ')';
    var done = _.bind(function () {
        setLocalFile(name, this.editorText);
    }, this);
    if (getLocalFiles()[name] !== undefined) {
        this.modal.modal('hide');
        this.alertSystem.ask(
            'Replace current?',
            "Do you want to replace the existing saved file '" + name + "'?",
            { yes: done });
    } else {
        done();
        this.modal.modal('hide');
    }
};

LoadSave.prototype.setMinimalOptions = function (editorText, currentLanguage) {
    this.editorText = editorText;
    this.currentLanguage = currentLanguage;
    this.extension = currentLanguage.extensions[0] || '.txt';
};

LoadSave.prototype.onSaveToFile = function (fileEditor) {
    try {
        var fileLang = this.currentLanguage.name;
        var name = fileLang !== undefined && fileEditor !== undefined ?
            (fileLang + ' Editor #' + fileEditor + ' ') : '';
        saveAs(
            new Blob([this.editorText], { type: 'text/plain;charset=utf-8' }),
            'Compiler Explorer ' + name + 'Code' + this.extension);
        return true;
    } catch (e) {
        this.alertSystem.notify('Error while saving your code. Use the clipboard instead.', {
            group: 'savelocalerror',
            alertClass: 'notification-error',
            dismissTime: 5000,
        });
        return false;
    }
};

LoadSave.prototype.doLoad = function (element) {
    // TODO: handle errors. consider promises...
    $.getJSON(window.location.origin + this.base + 'source/builtin/load/' + element.lang + '/' + element.file,
        _.bind(function (response) {
            this.onLoad(response.file);
        }, this));
    this.modal.modal('hide');
};


module.exports = { LoadSave: LoadSave };


/***/ }),

/***/ "Qaht":
/*!*************************!*\
  !*** ./static/rison.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* eslint-disable */
// Taken from https://github.com/Nanonid/rison at 917679fb6cafa15e2a186cd5a47163792899b321
// Uses CommonJS, AMD or browser globals to create a module.
// Based on: https://github.com/umdjs/umd/blob/master/commonjsStrict.js
(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function (exports) {
    var rison = exports;

//////////////////////////////////////////////////
//
//  the stringifier is based on
//    http://json.org/json.js as of 2006-04-28 from json.org
//  the parser is based on 
//    http://osteele.com/sources/openlaszlo/json
//

    if (typeof rison == 'undefined')
        window.rison = {};

    /**
     *  rules for an uri encoder that is more tolerant than encodeURIComponent
     *
     *  encodeURIComponent passes  ~!*()-_.'
     *
     *  we also allow              ,:@$/
     *
     */
    rison.uri_ok = {  // ok in url paths and in form query args
        '~': true, '!': true, '*': true, '(': true, ')': true,
        '-': true, '_': true, '.': true, ',': true,
        ':': true, '@': true, '$': true,
        "'": true, '/': true
    };

    /*
     * we divide the uri-safe glyphs into three sets
     *   <rison> - used by rison                         ' ! : ( ) ,
     *   <reserved> - not common in strings, reserved    * @ $ & ; =
     *
     * we define <identifier> as anything that's not forbidden
     */

    /**
     * punctuation characters that are legal inside ids.
     */
// this var isn't actually used
//rison.idchar_punctuation = "_-./~";  

    (function () {
        var l = [];
        for (var hi = 0; hi < 16; hi++) {
            for (var lo = 0; lo < 16; lo++) {
                if (hi + lo == 0) continue;
                var c = String.fromCharCode(hi * 16 + lo);
                if (!/\w|[-_.\/~]/.test(c))
                    l.push('\\u00' + hi.toString(16) + lo.toString(16));
            }
        }
        /**
         * characters that are illegal inside ids.
         * <rison> and <reserved> classes are illegal in ids.
         *
         */
        rison.not_idchar = l.join('')
        //idcrx = new RegExp('[' + rison.not_idchar + ']');
        //console.log('NOT', (idcrx.test(' ')) );
    })();
//rison.not_idchar  = " \t\r\n\"<>[]{}'!=:(),*@$;&";
    rison.not_idchar = " '!:(),*@$";


    /**
     * characters that are illegal as the start of an id
     * this is so ids can't look like numbers.
     */
    rison.not_idstart = "-0123456789";


    (function () {
        var idrx = '[^' + rison.not_idstart + rison.not_idchar +
            '][^' + rison.not_idchar + ']*';

        rison.id_ok = new RegExp('^' + idrx + '$');

        // regexp to find the end of an id when parsing
        // g flag on the regexp is necessary for iterative regexp.exec()
        rison.next_id = new RegExp(idrx, 'g');
    })();

    /**
     * this is like encodeURIComponent() but quotes fewer characters.
     *
     * @see rison.uri_ok
     *
     * encodeURIComponent passes   ~!*()-_.'
     * rison.quote also passes   ,:@$/
     *   and quotes " " as "+" instead of "%20"
     */
    rison.quote = function (x) {
        if (/^[-A-Za-z0-9~!*()_.',:@$\/]*$/.test(x))
            return x;

        return encodeURIComponent(x)
            .replace(/%2C/g, ',')
            .replace(/%3A/g, ':')
            .replace(/%40/g, '@')
            .replace(/%24/g, '$')
            .replace(/%2F/g, '/')
            .replace(/%20/g, '+');
    };


//
//  based on json.js 2006-04-28 from json.org
//  license: http://www.json.org/license.html
//
//  hacked by nix for use in uris.
//

    (function () {
        var sq = { // url-ok but quoted in strings
                "'": true, '!': true
            },
            enc = function (v) {
                if (v && typeof v.toJSON === 'function') v = v.toJSON();
                var fn = s[typeof v];
                if (fn) return fn(v);
            },
            s = {
                array: function (x) {
                    var a = ['!('], b, f, i, l = x.length, v;
                    for (i = 0; i < l; i += 1) {
                        v = enc(x[i]);
                        if (typeof v == 'string') {
                            if (b) {
                                a[a.length] = ',';
                            }
                            a[a.length] = v;
                            b = true;
                        }
                    }
                    a[a.length] = ')';
                    return a.join('');
                },
                'boolean': function (x) {
                    if (x)
                        return '!t';
                    return '!f'
                },
                'null': function (x) {
                    return "!n";
                },
                number: function (x) {
                    if (!isFinite(x))
                        return '!n';
                    // strip '+' out of exponent, '-' is ok though
                    return String(x).replace(/\+/, '');
                },
                object: function (x) {
                    if (x) {
                        if (x instanceof Array) {
                            return s.array(x);
                        }
                        // WILL: will this work on non-Firefox browsers?
                        if (typeof x.__prototype__ === 'object' && typeof x.__prototype__.encode_rison !== 'undefined')
                            return x.encode_rison();

                        var a = ['('], b, f, i, v, ki, ks = [];
                        for (i in x)
                            ks[ks.length] = i;
                        ks.sort();
                        for (ki = 0; ki < ks.length; ki++) {
                            i = ks[ki];
                            v = enc(x[i]);
                            if (typeof v == 'string') {
                                if (b) {
                                    a[a.length] = ',';
                                }
                                a.push(s.string(i), ':', v);
                                b = true;
                            }
                        }
                        a[a.length] = ')';
                        return a.join('');
                    }
                    return '!n';
                },
                string: function (x) {
                    if (x == '')
                        return "''";

                    if (rison.id_ok.test(x))
                        return x;

                    x = x.replace(/(['!])/g, function (a, b) {
                        if (sq[b]) return '!' + b;
                        return b;
                    });
                    return "'" + x + "'";
                },
                undefined: function (x) {
                    // ignore undefined just like JSON
                }
            };


        /**
         * rison-encode a javascript structure
         *
         *  implemementation based on Douglas Crockford's json.js:
         *    http://json.org/json.js as of 2006-04-28 from json.org
         *
         */
        rison.encode = function (v) {
            return enc(v);
        };

        /**
         * rison-encode a javascript object without surrounding parens
         *
         */
        rison.encode_object = function (v) {
            if (typeof v != 'object' || v === null || v instanceof Array)
                throw new Error("rison.encode_object expects an object argument");
            var r = s[typeof v](v);
            return r.substring(1, r.length - 1);
        };

        /**
         * rison-encode a javascript array without surrounding parens
         *
         */
        rison.encode_array = function (v) {
            if (!(v instanceof Array))
                throw new Error("rison.encode_array expects an array argument");
            var r = s[typeof v](v);
            return r.substring(2, r.length - 1);
        };

        /**
         * rison-encode and uri-encode a javascript structure
         *
         */
        rison.encode_uri = function (v) {
            return rison.quote(s[typeof v](v));
        };

    })();


//
// based on openlaszlo-json and hacked by nix for use in uris.
//
// Author: Oliver Steele
// Copyright: Copyright 2006 Oliver Steele.  All rights reserved.
// Homepage: http://osteele.com/sources/openlaszlo/json
// License: MIT License.
// Version: 1.0


    /**
     * parse a rison string into a javascript structure.
     *
     * this is the simplest decoder entry point.
     *
     *  based on Oliver Steele's OpenLaszlo-JSON
     *     http://osteele.com/sources/openlaszlo/json
     */
    rison.decode = function (r) {
        var errcb = function (e) {
            throw Error('rison decoder error: ' + e);
        };
        var p = new rison.parser(errcb);
        return p.parse(r);
    };

    /**
     * parse an o-rison string into a javascript structure.
     *
     * this simply adds parentheses around the string before parsing.
     */
    rison.decode_object = function (r) {
        return rison.decode('(' + r + ')');
    };

    /**
     * parse an a-rison string into a javascript structure.
     *
     * this simply adds array markup around the string before parsing.
     */
    rison.decode_array = function (r) {
        return rison.decode('!(' + r + ')');
    };


    /**
     * construct a new parser object for reuse.
     *
     * @constructor
     * @class A Rison parser class.  You should probably
     *        use rison.decode instead.
     * @see rison.decode
     */
    rison.parser = function (errcb) {
        this.errorHandler = errcb;
    };

    /**
     * a string containing acceptable whitespace characters.
     * by default the rison decoder tolerates no whitespace.
     * to accept whitespace set rison.parser.WHITESPACE = " \t\n\r\f";
     */
    rison.parser.WHITESPACE = "";

// expose this as-is?
    rison.parser.prototype.setOptions = function (options) {
        if (options['errorHandler'])
            this.errorHandler = options.errorHandler;
    };

    /**
     * parse a rison string into a javascript structure.
     */
    rison.parser.prototype.parse = function (str) {
        this.string = str;
        this.index = 0;
        this.message = null;
        var value = this.readValue();
        if (!this.message && this.next())
            value = this.error("unable to parse string as rison: '" + rison.encode(str) + "'");
        if (this.message && this.errorHandler)
            this.errorHandler(this.message, this.index);
        return value;
    };

    rison.parser.prototype.error = function (message) {
        if (typeof(console) != 'undefined')
            console.log('rison parser error: ', message);
        this.message = message;
        return undefined;
    };

    rison.parser.prototype.readValue = function () {
        var c = this.next();
        var fn = c && this.table[c];

        if (fn)
            return fn.apply(this);

        // fell through table, parse as an id

        var s = this.string;
        var i = this.index - 1;

        // Regexp.lastIndex may not work right in IE before 5.5?
        // g flag on the regexp is also necessary
        rison.next_id.lastIndex = i;
        var m = rison.next_id.exec(s);

        // console.log('matched id', i, r.lastIndex);

        if (m.length > 0) {
            var id = m[0];
            this.index = i + id.length;
            return id;  // a string
        }

        if (c) return this.error("invalid character: '" + c + "'");
        return this.error("empty expression");
    };

    rison.parser.parse_array = function (parser) {
        var ar = [];
        var c;
        while ((c = parser.next()) != ')') {
            if (!c) return parser.error("unmatched '!('");
            if (ar.length) {
                if (c != ',')
                    parser.error("missing ','");
            } else if (c == ',') {
                return parser.error("extra ','");
            } else
                --parser.index;
            var n = parser.readValue();
            if (typeof n == "undefined") return undefined;
            ar.push(n);
        }
        return ar;
    };

    rison.parser.bangs = {
        t: true,
        f: false,
        n: null,
        '(': rison.parser.parse_array
    };

    rison.parser.prototype.table = {
        '!': function () {
            var s = this.string;
            var c = s.charAt(this.index++);
            if (!c) return this.error('"!" at end of input');
            var x = rison.parser.bangs[c];
            if (typeof(x) == 'function') {
                return x.call(null, this);
            } else if (typeof(x) == 'undefined') {
                return this.error('unknown literal: "!' + c + '"');
            }
            return x;
        },
        '(': function () {
            var o = {};
            var c;
            var count = 0;
            while ((c = this.next()) != ')') {
                if (count) {
                    if (c != ',')
                        this.error("missing ','");
                } else if (c == ',') {
                    return this.error("extra ','");
                } else
                    --this.index;
                var k = this.readValue();
                if (typeof k == "undefined") return undefined;
                if (this.next() != ':') return this.error("missing ':'");
                var v = this.readValue();
                if (typeof v == "undefined") return undefined;
                o[k] = v;
                count++;
            }
            return o;
        },
        "'": function () {
            var s = this.string;
            var i = this.index;
            var start = i;
            var segments = [];
            var c;
            while ((c = s.charAt(i++)) != "'") {
                //if (i == s.length) return this.error('unmatched "\'"');
                if (!c) return this.error('unmatched "\'"');
                if (c == '!') {
                    if (start < i - 1)
                        segments.push(s.slice(start, i - 1));
                    c = s.charAt(i++);
                    if ("!'".indexOf(c) >= 0) {
                        segments.push(c);
                    } else {
                        return this.error('invalid string escape: "!' + c + '"');
                    }
                    start = i;
                }
            }
            if (start < i - 1)
                segments.push(s.slice(start, i - 1));
            this.index = i;
            return segments.length == 1 ? segments[0] : segments.join('');
        },
        // Also any digit.  The statement that follows this table
        // definition fills in the digits.
        '-': function () {
            var s = this.string;
            var i = this.index;
            var start = i - 1;
            var state = 'int';
            var permittedSigns = '-';
            var transitions = {
                'int+.': 'frac',
                'int+e': 'exp',
                'frac+e': 'exp'
            };
            do {
                var c = s.charAt(i++);
                if (!c) break;
                if ('0' <= c && c <= '9') continue;
                if (permittedSigns.indexOf(c) >= 0) {
                    permittedSigns = '';
                    continue;
                }
                state = transitions[state + '+' + c.toLowerCase()];
                if (state == 'exp') permittedSigns = '-';
            } while (state);
            this.index = --i;
            s = s.slice(start, i);
            if (s == '-') return this.error("invalid number");
            return Number(s);
        }
    };
// copy table['-'] to each of table[i] | i <- '0'..'9':
    (function (table) {
        for (var i = 0; i <= 9; i++)
            table[String(i)] = table['-'];
    })(rison.parser.prototype.table);

// return the next non-whitespace character, or undefined
    rison.parser.prototype.next = function () {
        var c;
        var s = this.string;
        var i = this.index;
        do {
            if (i == s.length) return undefined;
            c = s.charAt(i++);
        } while (rison.parser.WHITESPACE.indexOf(c) >= 0);
        this.index = i;
        return c;
    };

// End of UMD module wrapper
}));


/***/ }),

/***/ "QseJ":
/*!***********************!*\
  !*** ./static/url.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2016, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


var GoldenLayout = __webpack_require__(/*! golden-layout */ "xGNL");
var rison = __webpack_require__(/*! rison */ "Qaht");
var $ = __webpack_require__(/*! jquery */ "EVdn");
var Components = __webpack_require__(/*! components */ "hqpU");
var lzstring = __webpack_require__(/*! lz-string */ "6xEa");
var _ = __webpack_require__(/*! underscore */ "xG9w");

function convertOldState(state) {
    var sc = state.compilers[0];
    if (!sc) throw new Error('Unable to determine compiler from old state');
    var content = [];
    var source;
    if (sc.sourcez) {
        source = lzstring.decompressFromBase64(sc.sourcez);
    } else {
        source = sc.source;
    }
    var options = {compileOnChange: true, colouriseAsm: state.filterAsm.colouriseAsm};
    var filters = _.clone(state.filterAsm);
    delete filters.colouriseAsm;
    content.push(Components.getEditorWith(1, source, options));
    content.push(Components.getCompilerWith(1, filters, sc.options, sc.compiler));
    return {version: 4, content: [{type: 'row', content: content}]};
}

function loadState(state) {
    if (!state || state.version === undefined) return false;
    switch (state.version) {
        case 1:
            state.filterAsm = {};
            state.version = 2;
        /* falls through */
        case 2:
            state.compilers = [state];
            state.version = 3;
        /* falls through */
        case 3:
            state = convertOldState(state);
            break;  // no fall through
        case 4:
            state = GoldenLayout.unminifyConfig(state);
            break;
        default:
            throw new Error("Invalid version '" + state.version + "'");
    }
    return state;
}

function risonify(obj) {
    return rison.quote(rison.encode_object(obj));
}

function unrisonify(text) {
    return rison.decode_object(decodeURIComponent(text.replace(/\+/g, '%20')));
}

function deserialiseState(stateText) {
    var state;
    var exception;
    try {
        state = unrisonify(stateText);
        if (state && state.z) {
            state = unrisonify(lzstring.decompressFromBase64(state.z));
        }
    } catch (ex) {
        exception = ex;
    }

    if (!state) {
        try {
            state = $.parseJSON(decodeURIComponent(stateText));
        } catch (ex) {
            if (!exception) exception = ex;
        }
    }
    if (!state && exception) throw exception;
    return loadState(state);
}

function serialiseState(stateText) {
    var ctx = GoldenLayout.minifyConfig({content: stateText.content});
    ctx.version = 4;
    var uncompressed = risonify(ctx);
    var compressed = risonify({z: lzstring.compressToBase64(uncompressed)});
    var MinimalSavings = 0.20;  // at least this ratio smaller
    if (compressed.length < uncompressed.length * (1.0 - MinimalSavings)) {
        return compressed;
    } else {
        return uncompressed;
    }
}

module.exports = {
    deserialiseState: deserialiseState,
    serialiseState: serialiseState,
    unrisonify: unrisonify,
    risonify: risonify,
};


/***/ }),

/***/ "RLT6":
/*!**************************************!*\
  !*** ./static/modes/asm6502-mode.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2019, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.



var monaco = __webpack_require__(/*! monaco-editor */ "M/lh");

function definition() {
    return {
        tokenizer: {
            root: [
                [/^[a-zA-Z_][a-zA-Z_0-9]*/, { token: 'type.identifier' }],
                [/^\s+/, { token: 'whitespace', next: '@opcode' }],
                [/^\.[a-zA-Z]+\s*/, { token: 'type.identifier', next: '@arguments' }],
                [/;.*$/, { token: 'comment', next: '@root' }],
                [/\s*,\s*/, { token: 'delimiter', next: '@arguments' }],
            ],

            opcode: [
                [/[a-zA-Z]+$/, { token: 'keyword', next: '@root' }],
                [/[a-zA-Z]+\s*/, { token: 'keyword', next: '@arguments' }],
                [/;.*$/, { token: 'comment', next: '@root' }],
            ],

            arguments: [
                [/\$#[0-9a-fA-F]+/, { token: 'number', next: '@root' }],
                [/\$[0-9a-fA-F]+/, { token: 'number', next: '@root' }],
                [/#\$[0-9a-fA-F]+/, { token: 'number', next: '@root' }],
                [/#<[0-9]+\(%[a-zA-Z]+\)/, { token: 'number', next: '@root' }],
                [/#>[0-9]+\(%[a-zA-Z]+\)/, { token: 'number', next: '@root' }],
                [/#<\$[0-9a-fA-F]+/, { token: 'number', next: '@root' }],
                [/#>\$[0-9a-fA-F]+/, { token: 'number', next: '@root' }],
                [/#%[0-1]+/, { token: 'number', next: '@root' }],
                [/#[0-9]+/, { token: 'number', next: '@root' }],
                [/[a-zA-Z_][a-zA-Z_0-9]*/, { token: 'type.identifier', next: '@root' }],
                [/[0-9]+/, { token: 'number', next: '@root' }],
                [/;.*$/, { token: 'comment', next: '@root' }],
            ],
        },
    };
}

var def = definition();
monaco.languages.register({ id: 'asm6502' });
monaco.languages.setMonarchTokensProvider('asm6502', def);

module.exports = def;


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-SG": "zavE",
	"./en-SG.js": "zavE",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "RxZR":
/*!**********************************!*\
  !*** ./static/panes/ast-view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2017, Simon Brand
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.



var FontScale = __webpack_require__(/*! ../fontscale */ "zeU8");
var monaco = __webpack_require__(/*! monaco-editor */ "M/lh");
var _ = __webpack_require__(/*! underscore */ "xG9w");
var $ = __webpack_require__(/*! jquery */ "EVdn");
var colour = __webpack_require__(/*! ../colour */ "DJCN");
var ga = __webpack_require__(/*! ../analytics */ "9vLr");
var monacoConfig = __webpack_require__(/*! ../monaco-config */ "u8Pk");

function Ast(hub, container, state) {
    this.container = container;
    this.eventHub = hub.createEventHub();
    this.domRoot = container.getElement();
    this.domRoot.html($('#ast').html());

    this.decorations = {};
    this.prevDecorations = [];
    var root = this.domRoot.find('.monaco-placeholder');
    this.astEditor = monaco.editor.create(root[0], monacoConfig.extendConfig({
        language: 'plaintext',
        readOnly: true,
        glyphMargin: true,
        lineNumbersMinChars: 3,
    }));

    this._compilerid = state.id;
    this._compilerName = state.compilerName;
    this._editorid = state.editorid;

    this.awaitingInitialResults = false;
    this.selection = state.selection;

    this.settings = {};

    this.colours = [];
    this.astCode = [];

    this.initButtons(state);
    this.initCallbacks();

    if (state && state.astOutput) {
        this.showAstResults(state.astOutput);
    }
    this.setTitle();

    ga.proxy('send', {
        hitType: 'event',
        eventCategory: 'OpenViewPane',
        eventAction: 'Ast',
    });
}

Ast.prototype.initButtons = function (state) {
    this.fontScale = new FontScale(this.domRoot, state, this.astEditor);

    this.topBar = this.domRoot.find('.top-bar');
};

Ast.prototype.initCallbacks = function () {
    this.linkedFadeTimeoutId = -1;
    this.mouseMoveThrottledFunction = _.throttle(_.bind(this.onMouseMove, this), 50);
    this.astEditor.onMouseMove(_.bind(function (e) {
        this.mouseMoveThrottledFunction(e);
    }, this));

    this.fontScale.on('change', _.bind(this.updateState, this));

    this.container.on('destroy', this.close, this);

    var onColoursOnCompile = this.eventHub.mediateDependentCalls(this.onColours, this.onCompileResult);

    this.eventHub.on('compileResult', onColoursOnCompile.dependencyProxy, this);
    this.eventHub.on('compiler', this.onCompiler, this);
    this.eventHub.on('colours', onColoursOnCompile.dependentProxy, this);
    this.eventHub.on('panesLinkLine', this.onPanesLinkLine, this);
    this.eventHub.on('compilerClose', this.onCompilerClose, this);
    this.eventHub.on('settingsChange', this.onSettingsChange, this);
    this.eventHub.emit('astViewOpened', this._compilerid);
    this.eventHub.emit('requestSettings');

    this.container.on('resize', this.resize, this);
    this.container.on('shown', this.resize, this);

    this.cursorSelectionThrottledFunction =
        _.throttle(_.bind(this.onDidChangeCursorSelection, this), 500);
    this.astEditor.onDidChangeCursorSelection(_.bind(function (e) {
        this.cursorSelectionThrottledFunction(e);
    }, this));
};

// TODO: de-dupe with compiler etc
Ast.prototype.resize = function () {
    var topBarHeight = this.topBar.outerHeight(true);
    this.astEditor.layout({
        width: this.domRoot.width(),
        height: this.domRoot.height() - topBarHeight,
    });
};

Ast.prototype.onCompileResult = function (id, compiler, result, lang) {
    if (this._compilerid !== id) return;

    if (result.hasAstOutput) {
        this.showAstResults(result.astOutput);
    }
    else if (compiler.supportsAstView) {
        this.showAstResults([{text: '<No output>'}]);
    }

    if (lang && lang.monaco && this.getCurrentEditorLanguage() !== lang.monaco) {
        monaco.editor.setModelLanguage(this.astEditor.getModel(), lang.monaco);
    }
};

// Monaco language id of the current editor
Ast.prototype.getCurrentEditorLanguage = function () {
    return this.astEditor.getModel().getModeId();
};

Ast.prototype.getPaneName = function () {
    return this._compilerName + ' Ast Viewer (Editor #' + this._editorid + ', Compiler #' + this._compilerid + ')';
};

Ast.prototype.setTitle = function () {
    this.container.setTitle(this.getPaneName());
};

Ast.prototype.getDisplayableAst = function (astResult) {
    return '**' + astResult.astType + '** - ' + astResult.displayString;
};

Ast.prototype.showAstResults = function (results) {
    var fullText = results.map(function (x) { return x.text; }).join('\n');
    this.astEditor.setValue(fullText);
    this.astCode = results;

    if (!this.awaitingInitialResults) {
        if (this.selection) {
            this.astEditor.setSelection(this.selection);
            this.astEditor.revealLinesInCenter(this.selection.startLineNumber,
                this.selection.endLineNumber);
        }
        this.awaitingInitialResults = true;
    }
};

Ast.prototype.onCompiler = function (id, compiler, options, editorid) {
    if (id === this._compilerid) {
        this._compilerName = compiler ? compiler.name : '';
        this._editorid = editorid;
        this.setTitle();
        if (compiler && !compiler.supportsAstView) {
            this.astEditor.setValue('<AST output is not supported for this compiler>');
        }
    }
};

Ast.prototype.onColours = function (id, colours, scheme) {
    if (id === this._compilerid) {
        var astColours = {};
        _.each(this.astCode, function (x, index) {
            if (x.source && x.source.from.line && x.source.to.line &&
                x.source.from.line <= x.source.to.line && x.source.to.line < x.source.from.line + 100) {
                var i;
                for (i = x.source.from.line; i <= x.source.to.line; ++i) {
                    if (colours[i - 1] !== undefined) {
                        astColours[index] = colours[i - 1];
                        break;
                    }
                }
            }
        });
        this.colours = colour.applyColours(this.astEditor, astColours, scheme, this.colours);
    }
};


Ast.prototype.onCompilerClose = function (id) {
    if (id === this._compilerid) {
        // We can't immediately close as an outer loop somewhere in GoldenLayout is iterating over
        // the hierarchy. We can't modify while it's being iterated over.
        _.defer(function (self) {
            self.container.close();
        }, this);
    }
};

Ast.prototype.updateState = function () {
    this.container.setState(this.currentState());
};

Ast.prototype.currentState = function () {
    var state = {
        id: this._compilerid,
        editorid: this._editorid,
        selection: this.selection,
    };
    this.fontScale.addState(state);
    return state;
};

Ast.prototype.onCompilerClose = function (id) {
    if (id === this._compilerid) {
        // We can't immediately close as an outer loop somewhere in GoldenLayout is iterating over
        // the hierarchy. We can't modify while it's being iterated over.
        this.close();
        _.defer(function (self) {
            self.container.close();
        }, this);
    }
};

Ast.prototype.onSettingsChange = function (newSettings) {
    this.settings = newSettings;
    this.astEditor.updateOptions({
        contextmenu: newSettings.useCustomContextMenu,
        minimap: {
            enabled: newSettings.showMinimap,
        },
        fontFamily: newSettings.editorsFFont,
        fontLigatures: newSettings.editorsFLigatures,
    });
};

Ast.prototype.onMouseMove = function (e) {
    if (e === null || e.target === null || e.target.position === null) return;
    if (this.settings.hoverShowSource === true && this.astCode) {
        this.clearLinkedLines();
        var hoverCode = this.astCode[e.target.position.lineNumber - 1];
        if (hoverCode) {
            var sourceLine = -1;
            var colBegin = -1;
            var colEnd = -1;
            // We check that we actually have something to show at this point!
            if (hoverCode.source && hoverCode.source.from) {
                sourceLine = hoverCode.source.from.line;
                // Highlight part of a line corresponding to the node if it fits on one line
                if (hoverCode.source.to && hoverCode.source.from.line === hoverCode.source.to.line) {
                    colBegin = hoverCode.source.from.col;
                    colEnd = hoverCode.source.to.col;
                }
            }
            this.eventHub.emit('editorLinkLine', this._editorid, sourceLine, colBegin, colEnd, false);
            this.eventHub.emit('panesLinkLine', this._compilerid, sourceLine,
                colBegin, colEnd, false, this.getPaneName());
        }
    }
};

Ast.prototype.onDidChangeCursorSelection = function (e) {
    if (this.awaitingInitialResults) {
        this.selection = e.selection;
        this.updateState();
    }
};

Ast.prototype.updateDecorations = function () {
    this.prevDecorations = this.astEditor.deltaDecorations(
        this.prevDecorations, _.flatten(_.values(this.decorations)));
};

Ast.prototype.clearLinkedLines = function () {
    this.decorations.linkedCode = [];
    this.updateDecorations();
};

Ast.prototype.onPanesLinkLine = function (compilerId, lineNumber, colBegin, colEnd, revealLine, sender) {
    if (Number(compilerId) === this._compilerid) {
        var lineNums = [];
        var singleNodeLines = [];
        var signalFromAnotherPane = sender !== this.getPaneName();
        _.each(this.astCode, function (astLine, i) {
            if (astLine.source
                && astLine.source.from.line <= lineNumber && lineNumber <= astLine.source.to.line) {
                var line = i + 1;
                lineNums.push(line);
                if (signalFromAnotherPane &&
                    astLine.source.from.line === lineNumber && astLine.source.to.line === lineNumber &&
                    astLine.source.from.col <= colEnd && colBegin <= astLine.source.to.col) {
                    singleNodeLines.push(line);
                }
            }
        });
        if (revealLine && lineNums[0]) this.astEditor.revealLineInCenter(lineNums[0]);
        var lineClass = signalFromAnotherPane ? 'linked-code-decoration-line' : '';
        var contextLines = _.map(lineNums, function (line) {
            return {
                range: new monaco.Range(line, 1, line, 1),
                options: {
                    isWholeLine: true,
                    linesDecorationsClassName: 'linked-code-decoration-margin',
                    className: lineClass,
                },
            };
        });
        var directlyLinkedLines = _.map(singleNodeLines, function (line) {
            return {
                range: new monaco.Range(line, 1, line, 1),
                options: {
                    isWholeLine: true,
                    inlineClassName: 'linked-code-decoration-column',
                },
            };
        });
        this.decorations.linkedCode = contextLines.concat(directlyLinkedLines);
        if (this.linkedFadeTimeoutId !== -1) {
            clearTimeout(this.linkedFadeTimeoutId);
        }
        this.linkedFadeTimeoutId = setTimeout(_.bind(function () {
            this.clearLinkedLines();
            this.linkedFadeTimeoutId = -1;
        }, this), 5000);
        this.updateDecorations();
    }
};

Ast.prototype.close = function () {
    this.eventHub.unsubscribe();
    this.eventHub.emit('astViewClosed', this._compilerid);
    this.astEditor.dispose();
};

module.exports = {
    Ast: Ast,
};


/***/ }),

/***/ "Tr+U":
/*!************************!*\
  !*** ./static/motd.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2018, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


var $ = __webpack_require__(/*! jquery */ "EVdn"),
    _ = __webpack_require__(/*! underscore */ "xG9w"),
    ga = __webpack_require__(/*! analytics */ "9vLr");

function handleMotd(motd, motdNode, subLang, adsEnabled, onHide) {
    if (motd.motd) {
        motdNode.find('.content').html(motd.motd);
        motdNode.removeClass('d-none');
        motdNode.find('.close')
            .on('click', function () {
                motdNode.addClass('d-none');
            })
            .prop('title', 'Hide message');
    } else if (adsEnabled) {
        var applicableAds = _.filter(motd.ads, function (ad) {
            return !subLang || !ad.filter || ad.filter.length === 0 || ad.filter.indexOf(subLang) >= 0;
        });
        var randomAd = applicableAds[_.random(applicableAds.length - 1)];
        if (randomAd) {
            motdNode.find('.content').html(randomAd.html);
            motdNode.find('.close').on('click', function () {
                ga.proxy('send', {
                    hitType: 'event',
                    eventCategory: 'Ads',
                    eventLabel: 'Visibility',
                    eventAction: 'Hide',
                });
                motdNode.addClass('d-none');
                onHide();
            });
            motdNode.find('a').on('click', function () {
                ga.proxy('send', {
                    hitType: 'event',
                    eventCategory: 'Ads',
                    eventAction: 'Click',
                    eventLabel: this.href,
                });
            });
            motdNode.removeClass('d-none');
        }
    }
}

function initialise(url, motdNode, defaultLanguage, adsEnabled, onMotd, onHide) {
    if (!url) return;
    $.getJSON(url)
        .then(function (res) {
            onMotd(res);
            handleMotd(res, motdNode, defaultLanguage, adsEnabled, onHide);
        })
        .catch(function () {
            // do nothing! we've long tried to find out why this might fail, and it seems page load cancels or ad
            // blockers might reasonably cause a failure here, and it's no big deal.
            // Some history at https://github.com/compiler-explorer/compiler-explorer/issues/1057
        });
}

module.exports = {
    initialise: initialise,
};


/***/ }),

/***/ "UHCa":
/*!**********************************!*\
  !*** ./static/modes/zig-mode.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2018, Marc Tiehuis
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


var monaco = __webpack_require__(/*! monaco-editor */ "M/lh");

function definition() {
    return {
        defaultToken: 'invalid',

        keywords: [
            'const', 'var', 'extern', 'packed', 'export', 'pub', 'noalias', 'inline',
            'comptime', 'nakedcc', 'stdcallcc', 'volatile', 'align', 'section', 'linksection',
            'struct', 'enum', 'union',
            'break', 'return', 'continue', 'asm', 'defer', 'errdefer', 'unreachable',
            'try', 'catch', 'async', 'await', 'suspend', 'resume', 'cancel',
            'if', 'else', 'switch', 'and', 'or', 'orelse',
            'while', 'for',
            'null', 'undefined',
            'fn', 'usingnamespace', 'use', 'test',
            'this',
        ],
        typeKeywords: [
            'bool', 'f32', 'f64', 'f128', 'void', 'noreturn', 'type', 'error', 'anyerror', 'promise', 'anyframe',
            'isize', 'usize', 'c_short', 'c_ushort', 'c_int', 'c_uint', 'c_long', 'c_ulong',
            'c_longlong', 'c_ulonglong', 'c_longdouble', 'c_void',
        ],
        operators: [
            '+', '+%', '-', '-%', '/', '*', '*%', '=', '^', '&', '?', '|',
            '!', '>', '<', '%', '<<', '<<%', '>>',
            '+=', '+%=', '-=', '-%=', '/=', '*=', '*%=', '==', '^=', '&=',
            '?=', '|=', '!=', '>=', '<=', '%=', '<<=', '<<%=', '>>=',
        ],

        symbols: /[=><!~?:&|+\-*/^%]+/,

        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

        tokenizer: {
            root: [
                // u0/i0 integer types
                [/[iu]\d+/, 'keyword'],

                // identifiers and keywords
                [/[a-z_$][\w$]*/, {
                    cases: {
                        '@typeKeywords': 'keyword',
                        '@keywords': 'keyword',
                        '@default': 'identifier',
                    },
                }],

                [/@[a-zA-Z_$]*/, 'builtin.identifier'],

                [/[A-Z][\w$]*/, 'type.identifier'],  // to show class names nicely

                // whitespace
                {include: '@whitespace'},

                // delimiters and operators
                [/[{}()[\]]/, '@brackets'],
                [/[<>](?!@symbols)/, '@brackets'],
                [/@symbols/, {
                    cases: {
                        '@operators': 'operator',
                        '@default': '',
                    },
                }],

                // numbers
                [/\d*\.\d+([eE][-+]?\d+)?[fFdD]?/, 'number.float'],
                [/0[xX][0-9a-fA-F_]*[0-9a-fA-F][Ll]?/, 'number.hex'],
                [/0o[0-7_]*[0-7][Ll]?/, 'number.octal'],
                [/0[bB][0-1_]*[0-1][Ll]?/, 'number.binary'],
                [/\d+/, 'number'],

                // delimiter: after number because of .\d floats
                [/[;,.]/, 'delimiter'],

                // strings
                [/"([^"\\]|\\.)*$/, 'string.invalid'],  // non-teminated string
                [/c?\\\\.*$/, 'string'],
                [/c?"/, 'string', '@string'],

                // characters
                [/'[^\\']'/, 'string'],
                [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
                [/'/, 'string.invalid'],
            ],

            whitespace: [
                [/[ \r\n]+/, 'white'],
                [/\/\*/, 'comment', '@comment'],
                [/\/\+/, 'comment', '@comment'],
                [/\/\/.*$/, 'comment'],
                [/\t/, 'comment.invalid'],
            ],

            comment: [
                [/[^/*]+/, 'comment'],
                [/\/\*/, 'comment.invalid'],
                [/[/*]/, 'comment'],
            ],

            string: [
                [/[^\\"]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/"/, 'string', '@pop'],
            ],
        },
    };
}

monaco.languages.register({id: 'zig'});
monaco.languages.setMonarchTokensProvider('zig', definition());


/***/ }),

/***/ "VSGn":
/*!***************************!*\
  !*** ./static/toggles.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2018, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


var _ = __webpack_require__(/*! underscore */ "xG9w");
var $ = __webpack_require__(/*! jquery */ "EVdn");
var EventEmitter = __webpack_require__(/*! events */ "fiWp");


function Togglesv2(root, state) {
    EventEmitter.call(this);
    var buttons = root.find('.button-checkbox');
    var self = this;
    this.buttons = buttons;
    this.state = _.extend({}, state);
    // Based on https://bootsnipp.com/snippets/featured/jquery-checkbox-buttons
    buttons.each(function () {
        // Settings
        var $widget = $(this),
            $button = $widget.find('button'),
            $checkbox = $widget.find('input:checkbox'),
            bind = $button.data('bind'),
            settings = {
                on: {
                    icon: 'far fa-check-square',
                },
                off: {
                    icon: 'far fa-square',
                },
            };

        // Event Handlers
        $button.on('click', function (e) {
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            e.stopPropagation();
        });
        $checkbox.on('change', function () {
            updateDisplay();
        });

        // Actions
        function updateDisplay(forcedState) {
            if (forcedState !== undefined) {
                $checkbox.prop('checked', forcedState);
            }
            var isChecked = $checkbox.is(':checked');

            // Set the button's state
            $button.data('state', (isChecked) ? 'on' : 'off');

            // Set the button's icon
            $button.find('.state-icon')
                .removeClass()
                .addClass('state-icon ' + settings[$button.data('state')].icon);

            // Update the button's color
            $button.toggleClass('active', isChecked);
            if (forcedState === undefined) {
                self.set(bind, isChecked);
            }
        }

        // Initialization
        function init() {
            updateDisplay(self.state[bind]);

            // Inject the icon if applicable
            if ($button.find('.state-icon').length === 0) {
                $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i> ');
            }
        }
        init();
    });
}

_.extend(Togglesv2.prototype, EventEmitter.prototype);

Togglesv2.prototype.get = function () {
    return _.clone(this.state);
};

Togglesv2.prototype.set = function (key, value) {
    this._change(function () {
        this.state[key] = value;
    }.bind(this));
};

Togglesv2.prototype.enableToggle = function (key, enable) {
    this.buttons.each(function () {
        var widget = $(this);
        var button = $(widget.find('button'));
        var bind = button.data('bind');
        if (bind === key) {
            button.prop('disabled', !enable);
        }
    });
};

Togglesv2.prototype._change = function (update) {
    var before = this.get();
    update();
    this.emit('change', before, this.get());
};

module.exports = Togglesv2;


/***/ }),

/***/ "WHwv":
/*!******************************!*\
  !*** ./static/simplecook.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2018, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.



var $ = __webpack_require__(/*! jquery */ "EVdn");

function SimpleCook() {
    this.elem = $('#simplecook');
    this.elem.hide();

    this.onDoConsent = function () {

    };
    this.onDontConsent = function () {

    };
    this.onHide = function () {

    };
    this.elem.find('.cookies').on('click', function () {
        $('#cookies').trigger('click');
    });
    this.elem.find('.cook-do-consent').on('click', this.callDoConsent.bind(this));
    this.elem.find('.cook-dont-consent').on('click', this.callDontConsent.bind(this));
}

SimpleCook.prototype.show = function () {
    this.elem.show();
};

SimpleCook.prototype.hide = function () {
    this.elem.hide();
    this.onHide();
};

SimpleCook.prototype.callDoConsent = function () {
    this.hide();
    this.onDoConsent();
};

SimpleCook.prototype.callDontConsent = function () {
    this.hide();
    this.onDontConsent();
};

module.exports = SimpleCook;


/***/ }),

/***/ "Wbdj":
/*!****************************!*\
  !*** ./static/settings.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2016, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


var $ = __webpack_require__(/*! jquery */ "EVdn");
var _ = __webpack_require__(/*! underscore */ "xG9w");
var colour = __webpack_require__(/*! ./colour */ "DJCN");
var themes = __webpack_require__(/*! ./themes */ "dEVg").themes;
var options = __webpack_require__(/*! ./options */ "3M42");

function Setting(elem, name, Control, param) {
    this.elem = elem;
    this.name = name;
    this.control = new Control(elem, param);
}

Setting.prototype.getUi = function () {
    return this.control.getUi(this.elem);
};
Setting.prototype.putUi = function (value) {
    this.control.putUi(this.elem, value);
};

function Checkbox() {
}

Checkbox.prototype.getUi = function (elem) {
    return !!elem.prop('checked');
};
Checkbox.prototype.putUi = function (elem, value) {
    elem.prop('checked', !!value);
};

function Select(elem, populate) {
    elem.empty();
    _.each(populate, function (e) {
        elem.append($('<option value="' + e.label + '">' + e.desc + '</option>'));
    });
}

Select.prototype.getUi = function (elem) {
    return elem.val();
};
Select.prototype.putUi = function (elem, value) {
    elem.val(value);
};

function Slider(elem, sliderSettings) {
    elem.slider(sliderSettings);
}

Slider.prototype.getUi = function (elem) {
    return elem.slider('getValue');
};

Slider.prototype.putUi = function (elem, value) {
    elem.slider('setValue', value);
};

function Textbox() {
}

Textbox.prototype.getUi = function (elem) {
    return elem.val();
};

Textbox.prototype.putUi = function (elem, value) {
    elem.val(value);
};

function Numeric(elem, params) {
    this.min = params.min;
    this.max = params.max;
    elem.attr('min', params.min)
        .attr('max', params.max);
}

Numeric.prototype.getUi = function (elem) {
    var val = parseInt(elem.val());
    if (val < this.min) return this.min;
    if (val > this.max) return this.max;
    return val;
};

Numeric.prototype.putUi = function (elem, value) {
    if (value < this.min) value = this.min;
    if (value > this.max) value = this.max;
    elem.val(value);
};

// Ignore max statements, there's no limit as to how many settings we need
// eslint-disable-next-line max-statements
function setupSettings(root, settings, onChange, subLangId) {
    settings = settings || {};
    // Ensure the default language is not "null" but undefined. Temporary patch for a previous bug :(
    settings.defaultLanguage = settings.defaultLanguage === null ? undefined : settings.defaultLanguage;
    var settingsObjs = [];

    function onUiChange() {
        var settings = {};
        _.each(settingsObjs, function (s) {
            settings[s.name] = s.getUi();
        });
        onChange(settings);
    }

    function onSettingsChange(settings) {
        _.each(settingsObjs, function (s) {
            s.putUi(settings[s.name]);
        });
    }

    function add(elem, key, defaultValue, Type, param) {
        if (settings[key] === undefined)
            settings[key] = defaultValue;
        settingsObjs.push(new Setting(elem, key, Type, param));
        elem.change(onUiChange);
    }

    add(root.find('.colourise'), 'colouriseAsm', true, Checkbox);
    add(root.find('.autoCloseBrackets'), 'autoCloseBrackets', true, Checkbox);
    var colourSchemeSelect = root.find('.colourScheme');
    add(colourSchemeSelect, 'colourScheme', colour.schemes[0].name, Select,
        _.map(colour.schemes, function (scheme) {
            return {label: scheme.name, desc: scheme.desc};
        })
    );
    // Handle older settings
    if (settings.delayAfterChange === 0) {
        settings.delayAfterChange = 750;
        settings.compileOnChange = false;
    }
    add(root.find('.compileOnChange'), 'compileOnChange', true, Checkbox);
    add(root.find('.delay'), 'delayAfterChange', 750, Slider, {
        max: 3000,
        step: 250,
        min: 250,
        formatter: function (x) {
            return (x / 1000.0).toFixed(2) + 's';
        },
    });
    add(root.find('.enableCommunityAds'), 'enableCommunityAds', true, Checkbox);
    add(root.find('.hoverShowSource'), 'hoverShowSource', true, Checkbox);
    add(root.find('.hoverShowAsmDoc'), 'hoverShowAsmDoc', true, Checkbox);

    var themeSelect = root.find('.theme');

    var defaultThemeId = themes.default.id;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        defaultThemeId = themes.dark.id;
    }

    add(themeSelect, 'theme', defaultThemeId, Select,
        _.map(themes, function (theme) {
            return {label: theme.id, desc: theme.name};
        })
    );
    add(root.find('.showQuickSuggestions'), 'showQuickSuggestions', false, Checkbox);
    add(root.find('.useCustomContextMenu'), 'useCustomContextMenu', true, Checkbox);
    add(root.find('.showMinimap'), 'showMinimap', true, Checkbox);

    function handleThemes() {
        var newTheme = themeSelect.val();
        // Store the scheme of the old theme
        $.data(themeSelect, 'theme-' + $.data(themeSelect, 'last-theme'), colourSchemeSelect.val());
        // Get the scheme of the new theme
        var newThemeStoredScheme = $.data(themeSelect, 'theme-' + newTheme);
        var isStoredUsable = false;
        colourSchemeSelect.empty();
        _.each(colour.schemes, function (scheme) {
            if (!scheme.themes || scheme.themes.length === 0 || scheme.themes.indexOf(newTheme) !== -1 ||
                scheme.themes.indexOf('all') !== -1) {

                colourSchemeSelect.append($('<option value="' + scheme.name + '">' + scheme.desc + '</option>'));
                if (newThemeStoredScheme === scheme.name) {
                    isStoredUsable = true;
                }
            }
        });
        if (colourSchemeSelect.children().length >= 1) {
            colourSchemeSelect.val(isStoredUsable ? newThemeStoredScheme : colourSchemeSelect.first().val());
        } else {
            // This should never happen. In case it does, lets use the default one
            colourSchemeSelect.append(
                $('<option value="' + colour.schemes[0].name + '">' + colour.schemes[0].desc + '</option>'));
            colourSchemeSelect.val(colourSchemeSelect.first().val());
        }
        colourSchemeSelect.trigger('change');
    }

    var langs = options.languages;

    var defaultLanguageSelector = root.find('.defaultLanguage');
    var defLang = settings.defaultLanguage || _.keys(langs)[0] || 'c++';
    add(defaultLanguageSelector, 'defaultLanguage', defLang, Select,
        _.map(langs, function (lang) {
            return {label: lang.id, desc: lang.name};
        })
    );
    if (subLangId) {
        defaultLanguageSelector
            .prop('disabled', true)
            .prop('title', 'Default language inherited from subdomain')
            .css('cursor', 'not-allowed');
    }

    add(root.find('.newEditorLastLang'), 'newEditorLastLang', true, Checkbox);

    var formats = ['Google', 'LLVM', 'Mozilla', 'Chromium', 'WebKit'];
    add(root.find('.formatBase'), 'formatBase', formats[0], Select,
        _.map(formats, function (format) {
            return {label: format, desc: format};
        }));
    //add(root.find('.formatOverrides'), 'formatOverrides', "", TextAreaInput);
    add(root.find('.wordWrap'), 'wordWrap', false, Checkbox);

    function setSettings(settings) {
        onSettingsChange(settings);
        onChange(settings);
    }
    add(root.find('.useSpaces'), 'useSpaces', true, Checkbox);
    add(root.find('.tabWidth'), 'tabWidth', 4, Numeric, {min: 1, max: 80});
    add(root.find('.enableCtrlS'), 'enableCtrlS', true, Checkbox);
    add(root.find('.editorsFFont'), 'editorsFFont', 'Consolas, "Liberation Mono", Courier, monospace', Textbox);
    add(root.find('.editorsFLigatures'), 'editorsFLigatures', false, Checkbox);
    add(root.find('.allowStoreCodeDebug'), 'allowStoreCodeDebug', true, Checkbox);
    add(root.find('.useVim'), 'useVim', false, Checkbox);
    add(root.find('.autoIndent'), 'autoIndent', true, Checkbox);
    add(root.find('.keepSourcesOnLangChange'), 'keepSourcesOnLangChange', false, Checkbox);

    setSettings(settings);
    handleThemes();
    themeSelect.change(function () {
        handleThemes();
        $.data(themeSelect, 'last-theme', themeSelect.val());
    });
    $.data(themeSelect, 'last-theme', themeSelect.val());
    return setSettings;
}

module.exports = setupSettings;


/***/ }),

/***/ "Wj77":
/*!**************************************!*\
  !*** ./static/policies/privacy.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\n<!--\nBe aware: modifying this file in any way will cause a pop-up to users telling them the privacy policy has changed.\n-->\n\n<html lang=\"en\">\n<body>\n\n<!--\nNo need to update this! It's done by the CLI build process\n-->\n<span id=\"last-changed\"></span>\n<h2>Compiler Explorer Privacy Policy</h2>\n\n<p>\n    Thanks for your interest in what Compiler Explorer does with your data. Data protection is really\n    important to the Compiler Explorer team, and we want to be very clear about what we do with your data.\n</p>\n\n<h3>Who we are</h3>\n\n<p>\n    Compiler Explorer was created by and is primarily administrated by\n    <a href=\"mailto:matt@godbolt.org\">Matt Godbolt</a>,\n    along with a number of volunteers (including, but not limited to those listed in our \"<a\n        href=\"https://github.com/compiler-explorer/compiler-explorer/blob/main/AUTHORS.md\" target=\"_blank\"\n        rel=\"noreferrer noopener\">Authors</a>\" documentation).\n    It is run on a best-effort basis, and is not a commercial product. We do our best\n    to keep your data safe, but welcome help from the community: See our\n    <a href=\"https://github.com/compiler-explorer/compiler-explorer\" target=\"_blank\"\n       rel=\"noreferrer noopener\">GitHub project page</a> if you wish to help.\n</p>\n\n<h3>Your data</h3>\n\n<p>\n    In order to process compilation and execution requests, your browser sends the source code you typed in the editor\n    window along with your chosen compiler and options to the Compiler Explorer servers. There, the source code is\n    written to disk and your chosen compiler is invoked on it. If your request was to have your code executed, the\n    resulting executable is run. The outputs from compilation and execution are processed and sent back to your web\n    browser, where they're shown. Shortly after this process completes, your source code is deleted from disk. If, in\n    processing your query, an issue with Compiler Explorer is found, your code may be kept for up to a week in order to\n    help debug and diagnose the problem. Only the Compiler Explorer team will have access to your code, and only for the\n    purposes of debugging the site: we will never share your code with anyone.\n</p>\n\n<p>\n    If you choose a Microsoft compiler, then your code may be sent to and compiled on a machine administrated by\n    Microsoft. Such code is covered by the <a href=\"https://privacy.microsoft.com/en-US/\" target=\"_blank\">Microsoft\n    Privacy Policy.</a>\n</p>\n\n<p>\n    The source code and options are also subject to a one-way hash, which is used to cache the results to speed up\n    subsequent compilations of the same code. The cache is in-memory and on-disk. It's impossible to reconstruct the\n    source code from the hash, but the resulting assembly code or binary output (the compilation result) is stored as\n    plain text. There's no way to enumerate the in-memory cache contents. In exceptional cases, administrator members of\n    the Compiler Explorer team may be able to enumerate the disk caches and retrieve the compilation output, but with no\n    way to trace it back to the source code.\n</p>\n\n<p>\n    In short: your source code is stored in plaintext for the minimum time feasible to be able to process your request.\n    After that, it is discarded and is inaccessible. In very rare cases your code may be kept for a little longer (at\n    most a week) to help debug issues in Compiler Explorer.\n</p>\n\n<h4>Short links</h4>\n\n<p>\n    If you choose to share your code using the \"Share\" dropdown, then the user interface state including the source code\n    is stored. For a \"Full\" link, this information is encoded into the URL as a URL hash (e.g.\n    <code>https://godbolt.org/#ui_state_and_code</code>). For short URLs, the interface state is stored on Compiler\n    Explorer's servers, and a shortened name uniquely referring to this data is returned. The shortened name comes from\n    a secure hash of the state, and without knowing the name it is infeasible to access the data. Only Compiler Explorer\n    administrators can access this data directly. Obfuscated IP addresses and creation time are stored alongside this\n    data, to enable spam detection. Links of this form look like <code>https://godbolt.org/z/SHORTNAME</code>.\n</p>\n\n<p>\n    Prior to storing data itself, Compiler Explorer used an external URL shortening service\n    (<a href=\"https://goo.gl/\" target=\"_blank\">goo.gl</a>) and the resulting short URL was rewritten as\n    <code>https://godbolt.org/g/SHORTURLPART</code>. The storage for the user experience state in this case remains with\n    the short URL provider, not Compiler Explorer.\n</p>\n\n<h4>Application, web and error logs</h4>\n\n<p>\n    Compiler Explorer keeps application logs, which contain semi-anonymised IP addresses, but no other personally\n    identifying information. When a long URL is clicked, the hash part of the URL is not sent to the server, so the user\n    state (including the source code) is NOT exposed in the web log. If a user clicks a short URL, then the short form\n    IS exposed in the web log (as <code>https://godbolt.org/g/SHORTURLPART</code>) and from this the source code can be\n    retrieved. As such, if you create a short URL of your code, your source code and other user state can in principle\n    be retrieved from the web log of Compiler Explorer.\n</p>\n\n<p>\n    Compiler Explorer uses Amazon's web serving, load balancing and edge caching systems. In order to debug and diagnose\n    Compiler Explorer, to help track down and block Denial of Service attacks, and to gather statistics about Compiler\n    Explorer's performance and usage, the logs from these systems are archived. These logs contain the full IP addresses\n    of requests. They are kept for no more than one month, after which they are permanently deleted.\n</p>\n\n<p>\n    If your web browser experiences an error, we use a third party reporting system (<a\n        href=\"https://sentry.io/\">Sentry</a>). This keeps information, including your IP address and web browser user\n    agent, for no more than 90 days.\n</p>\n\n<h4>Executing your code</h4>\n\n<p>\n    For certain configurations, we may support executing the results of your compilation on the Compiler Explorer\n    servers. Execution occurs in a heavily locked-down, isolated environment. We have made reasonable efforts to protect\n    both the Compiler Explorer site and other concurrently-processed requests from information leakage due to rogue\n    executions.\n</p>\n\n<h4>Cookies</h4>\n\n<p>\n    Separately, Compiler Explorer uses small pieces of information stored on your computer: Cookies and Browser Local\n    Storage. Cookies are only used with the user's permission, and are used with external analytics services (e.g.\n    Google Analytics) to gather statistics on Compiler Explorer usage. This information is used to help the Compiler\n    Explorer team plan for future updates and hardware upgrades in order to ensure the site remains stable and\n    responsive. Local storage is used to remember the user's settings, source code and user interface configuration, so\n    that it's available when the user visits the Compiler Explorer site again. This information is not transmitted to\n    Compiler Explorer, except as described above in order to fulfil the user's requests. There is a\n    <a href=\"#cookies\" rel=\"noreferrer noopener\">separate document</a> covering more on this. Statistics tracking\n    information is kept for 14 months, after which it is removed.\n</p>\n\n<h3>Your choices</h3>\n\n<p>\n    Compiler Explorer is an open source project. If you are concerned about any of the data protection measures outlined\n    above, or about what happens to your source code, you are encouraged to run your own local instance of Compiler\n    Explorer. Instructions on how to do this are on the\n    <a href=\"https://github.com/compiler-explorer/compiler-explorer\" target=\"_blank\"\n       rel=\"noreferrer noopener\">GitHub project page</a>.\n</p>\n\n<h3>Compiler Explorer and the GDPR</h3>\n\n<p>\n    The Compiler Explorer team believes the Compiler Explorer site is compliant with the EU's General Data Protection\n    Regulation (GDPR). Specifically, we store no personally identifying information, we anonymise the little data that\n    we do have and we do not permanently store any user data.\n</p>\n\n<h4>Name and Address of the controller</h4>\n<p>\n    The Controller for the purposes of the General Data Protection Regulation (GDPR), other data protection laws\n    applicable in Member states of the European Union and other provisions related to data protection is:\n</p>\n\n<div>\n    Matt Godbolt<br>\n    2626 Orrington Ave<br>\n    Evanston IL 60201 USA<br>\n    +1 312 792-7931<br>\n    <a href=\"mailto:matt@godbolt.org\">matt@godbolt.org</a>\n</div>\n\n</body>\n</html>\n";

/***/ }),

/***/ "ZTZ6":
/*!******************************!*\
  !*** ./static/explorer.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "aEWw":
/*!***************************!*\
  !*** ./static/sharing.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2016, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


var $ = __webpack_require__(/*! jquery */ "EVdn");
var _ = __webpack_require__(/*! underscore */ "xG9w");
var options = __webpack_require__(/*! ./options */ "3M42");
var Components = __webpack_require__(/*! ./components */ "hqpU");
var url = __webpack_require__(/*! ./url */ "QseJ");
var ga = __webpack_require__(/*! ./analytics */ "9vLr");

var shareServices = {
    twitter: {
        embedValid: false,
        logoClass: 'fab fa-twitter',
        cssClass: 'share-twitter',
        getLink: function (title, url) {
            return 'https://twitter.com/intent/tweet?text=' +
                encodeURIComponent(title) + '&url=' + encodeURIComponent(url) + '&via=CompileExplore';
        },
        text: 'Tweet',
    },
    reddit: {
        embedValid: false,
        logoClass: 'fab fa-reddit',
        cssClass: 'share-reddit',
        getLink: function (title, url) {
            return 'http://www.reddit.com/submit?url=' +
                encodeURIComponent(url) + '&title=' + encodeURIComponent(title);
        },
        text: 'Share on Reddit',
    },
};

function configFromEmbedded(embeddedUrl) {
    // Old-style link?
    var params;
    try {
        params = url.unrisonify(embeddedUrl);
    } catch (e) {
        // Ignore this, it's not a problem
    }
    if (params && params.source && params.compiler) {
        var filters = _.chain((params.filters || '').split(','))
            .map(function (o) {
                return [o, true];
            })
            .object()
            .value();
        return {
            content: [
                {
                    type: 'row',
                    content: [
                        Components.getEditorWith(1, params.source, filters),
                        Components.getCompilerWith(1, filters, params.options, params.compiler),
                    ],
                },
            ],
        };
    } else {
        return url.deserialiseState(embeddedUrl);
    }
}

function updateShares(container, url) {
    var baseTemplate = $('#share-item');
    _.each(shareServices, function (service, serviceName) {
        var newElement = baseTemplate.children('a.share-item').clone();
        if (service.logoClass) {
            newElement.prepend($('<span>')
                .addClass('dropdown-icon')
                .addClass(service.logoClass)
                .prop('title', serviceName)
            );
        }
        if (service.text) {
            newElement.children('span.share-item-text')
                .text(service.text);
        }
        newElement
            .prop('href', service.getLink('Compiler Explorer', url))
            .addClass(service.cssClass)
            .toggleClass('share-no-embeddable', !service.embedValid)
            .appendTo(container);
    });
}

function initShareButton(getLink, layout, noteNewState, startingBind) {
    // Explicit because webstorm gets confused about the type of this variable.
    /***
     * Current URL bind
     * @type {string}
     */
    var currentBind = startingBind;

    var popoverModal = $('#sharelinkdialog');
    var socialSharingElements = popoverModal.find('.socialsharing');
    var permalink = $('.permalink');

    var embedsettings = $('#embedsettings');

    function setCurrent(node) {
        currentBind = node.data().bind;
        if (currentBind === 'Embed') {
            embedsettings.show();
        } else {
            embedsettings.hide();
        }
    }

    function setSocialSharing(element, sharedUrl) {
        if (options.sharingEnabled) {
            updateShares(element, sharedUrl);
            // Disable the links for every share item which does not support embed html as links
            if (currentBind === 'Embed') {
                element.children('.share-no-embeddable')
                    .addClass('share-disabled')
                    .prop('title', 'Embed links are not supported in this service')
                    .on('click', false);
            }
        }
    }

    function onUpdate(socialSharing, config, bind, result) {
        if (result.updateState) {
            noteNewState(config, result.extra);
        }
        permalink.val(result.url);
        setSocialSharing(socialSharing, result.url);
    }

    function update() {
        var socialSharing = socialSharingElements;
        socialSharing.empty();
        if (!currentBind) return;
        permalink.prop('disabled', false);
        var config = layout.toConfig();
        permalink.val('');
        getLinks(config, currentBind, function (error, newUrl, extra, updateState) {
            if (error || !newUrl) {
                permalink.prop('disabled', true);
                permalink.val(error || 'Error providing URL');
            } else {
                onUpdate(socialSharing, config, currentBind, {
                    updateState: updateState,
                    extra: extra,
                    url: newUrl,
                });
            }
        });
    }

    getLink.on('click', function () {
        ga.proxy('send', {
            hitType: 'event',
            eventCategory: 'OpenModalPane',
            eventAction: 'Sharing',
        });

        setCurrent($(this));
        update();
    });

    if (startingBind === 'Embed') {
        embedsettings.find('input').on('click', function () {
            setCurrent(getLink);
            update();
        });
    }
}

function getEmbeddedUrl(config, root, readOnly, extraOptions) {
    var location = window.location.origin + root;
    var path = '';
    var parameters = '';

    _.forEach(extraOptions, function (value, key) {
        if (parameters === '') {
            parameters = '?';
        } else {
            parameters += '&';
        }

        parameters += key + '=' + value;
    });

    if (readOnly) {
        path = 'embed-ro' + parameters + '#';
    } else {
        path = 'e' + parameters + '#';
    }

    return location + path + url.serialiseState(config);
}

function getEmbeddedHtml(config, root, isReadOnly, extraOptions) {
    return '<iframe width="800px" height="200px" src="' +
        getEmbeddedUrl(config, root, isReadOnly, extraOptions) + '"></iframe>';
}

function getShortLink(config, root, done) {
    var useExternalShortener = options.urlShortenService !== 'default';
    var data = JSON.stringify({
        config: useExternalShortener
            ? url.serialiseState(config)
            : config,
    });
    $.ajax({
        type: 'POST',
        url: window.location.origin + root + 'api/shortener',
        dataType: 'json',  // Expected
        contentType: 'application/json',  // Sent
        data: data,
        success: _.bind(function (result) {
            var pushState = useExternalShortener ? null : result.url;
            done(null, result.url, pushState, true);
        }, this),
        error: _.bind(function (err) {
            // Notify the user that we ran into trouble?
            done(err.statusText, null, false);
        }, this),
        cache: true,
    });
}

function getLinks(config, currentBind, done) {
    var root = window.httpRoot;
    switch (currentBind) {
        case 'Short':
            getShortLink(config, root, done);
            return;
        case 'Full':
            done(null, window.location.origin + root + '#' + url.serialiseState(config), false);
            return;
        default:
            if (currentBind.substr(0, 5) === 'Embed') {
                var options = {};
                $('#sharelinkdialog input:checked').each(function () {
                    options[$(this).prop('class')] = true;
                });
                done(null, getEmbeddedHtml(config, root, false, options), false);
                return;
            }
            // Hmmm
            done('Unknown link type', null);
    }
}

module.exports = {
    initShareButton: initShareButton,
    configFromEmbedded: configFromEmbedded,
};


/***/ }),

/***/ "al0n":
/*!************************************!*\
  !*** ./static/compiler-service.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2017, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


var Sentry = __webpack_require__(/*! @sentry/browser */ "WSEr");
var $ = __webpack_require__(/*! jquery */ "EVdn");
var _ = __webpack_require__(/*! underscore */ "xG9w");
var LruCache = __webpack_require__(/*! lru-cache */ "HyWp");
var options = __webpack_require__(/*! ./options */ "3M42");
var Promise = __webpack_require__(/*! es6-promise */ "E2g8").Promise;

function CompilerService(eventHub) {
    this.base = window.httpRoot;
    this.allowStoreCodeDebug = true;
    this.cache = new LruCache({
        max: 200 * 1024,
        length: function (n) {
            return JSON.stringify(n).length;
        },
    });
    this.compilersByLang = {};
    _.each(options.compilers, function (compiler) {
        if (!this.compilersByLang[compiler.lang]) this.compilersByLang[compiler.lang] = {};
        this.compilersByLang[compiler.lang][compiler.id] = compiler;
    }, this);
    // settingsChange is triggered on page load
    eventHub.on('settingsChange', function (newSettings) {
        this.allowStoreCodeDebug = newSettings.allowStoreCodeDebug;
    }, this);
}

CompilerService.prototype.getDefaultCompilerForLang = function (langId) {
    return options.defaultCompiler[langId];
};

CompilerService.prototype.processFromLangAndCompiler = function (languageId, compilerId) {
    var langId = languageId;
    var foundCompiler = null;
    try {
        if (langId) {
            if (!compilerId) {
                compilerId = this.getDefaultCompilerForLang(langId);
            }

            foundCompiler = this.findCompiler(langId, compilerId);
            if (!foundCompiler) {
                var compilers = this.getCompilersForLang(langId);
                foundCompiler = compilers[_.first(_.keys(compilers))];
            }
        } else if (compilerId) {
            var matchingCompilers =_.map(options.languages, function (lang) {
                var compiler = this.findCompiler(lang.id, compilerId);
                if (compiler) {
                    return {
                        langId: lang.id,
                        compiler: compiler,
                    };
                }
                return null;
            }, this);

            return _.find(matchingCompilers, function (match) {
                return (match !== null);
            });
        } else {
            var firstLang = _.first(_.values(options.languages));
            if (firstLang) {
                return this.processFromLangAndCompiler(firstLang.id, compilerId);
            }
        }
    } catch (e) {
        Sentry.captureException(e);
    }

    return {
        langId: langId,
        compiler: foundCompiler,
    };
};

CompilerService.prototype.getGroupsInUse = function (langId) {
    return _.chain(this.getCompilersForLang(langId))
        .map()
        .uniq(false, function (compiler) {
            return compiler.group;
        })
        .map(function (compiler) {
            return {value: compiler.group, label: compiler.groupName || compiler.group};
        })
        .sort(function (a, b){
            return a.label.localeCompare(b.label,
                undefined /* Ignore language */,
                { sensitivity: 'base' });
        })
        .value();
};

CompilerService.prototype.getCompilersForLang = function (langId) {
    return this.compilersByLang[langId] || {};
};

CompilerService.prototype.findCompilerInList = function (compilers, compilerId) {
    if (compilers && compilers[compilerId]) {
        return compilers[compilerId];
    }
    return _.find(compilers, function (compiler) {
        return compiler.alias.includes(compilerId);
    });
};

CompilerService.prototype.findCompiler = function (langId, compilerId) {
    if (!compilerId) return null;
    var compilers = this.getCompilersForLang(langId);
    return this.findCompilerInList(compilers, compilerId);
};

function handleRequestError(request, reject, xhr, textStatus, errorThrown) {
    var error = errorThrown;
    if (!error) {
        switch (textStatus) {
            case 'timeout':
                error = 'Request timed out';
                break;
            case 'abort':
                error = 'Request was aborted';
                break;
            case 'error':
                switch (xhr.status) {
                    case 500:
                        error = 'Request failed: internal server error';
                        break;
                    case 504:
                        error = 'Request failed: gateway timeout';
                        break;
                    default:
                        error = 'Request failed: HTTP error code ' + xhr.status;
                        break;
                }
                break;
            default:
                error = 'Error sending request';
                break;
        }
    }
    reject({
        request: request,
        error: error,
    });
}

CompilerService.prototype.submit = function (request) {
    request.allowStoreCodeDebug = this.allowStoreCodeDebug;
    var jsonRequest = JSON.stringify(request);
    if (options.doCache) {
        var cachedResult = this.cache.get(jsonRequest);
        if (cachedResult) {
            return Promise.resolve({
                request: request,
                result: cachedResult,
                localCacheHit: true,
            });
        }
    }
    return new Promise(_.bind(function (resolve, reject) {
        var bindHandler = _.partial(handleRequestError, request, reject);
        var compilerId = encodeURIComponent(request.compiler);
        $.ajax({
            type: 'POST',
            url: window.location.origin + this.base + 'api/compiler/' + compilerId + '/compile',
            dataType: 'json',
            contentType: 'application/json',
            data: jsonRequest,
            success: _.bind(function (result) {
                if (result && result.okToCache && options.doCache) {
                    this.cache.set(jsonRequest, result);
                }
                resolve({
                    request: request,
                    result: result,
                    localCacheHit: false,
                });
            }, this),
            error: bindHandler,
        });
    }, this));
};

CompilerService.prototype.requestPopularArguments = function (compilerId, options) {
    return new Promise(_.bind(function (resolve, reject) {
        var bindHandler = _.partial(handleRequestError, compilerId, reject);
        $.ajax({
            type: 'POST',
            url: window.location.origin + this.base + 'api/popularArguments/' + compilerId,
            dataType: 'json',
            data: JSON.stringify({
                usedOptions: options,
                presplit: false,
            }),
            success: _.bind(function (result) {
                resolve({
                    request: compilerId,
                    result: result,
                    localCacheHit: false,
                });
            }, this),
            error: bindHandler,
        });
    }, this));
};

CompilerService.prototype.expand = function (source) {
    var includeFind = /^\s*#\s*include\s*["<](https?:\/\/[^>"]+)[>"]/;
    var lines = source.split('\n');
    var promises = [];
    _.each(lines, function (line, lineNumZeroBased) {
        var match = line.match(includeFind);
        if (match) {
            promises.push(new Promise(function (resolve) {
                var req = $.get(match[1], function (data) {
                    data = '#line 1 "' + match[1] + '"\n' + data + '\n\n#line ' +
                        (lineNumZeroBased + 1) + ' "<stdin>"\n';

                    lines[lineNumZeroBased] = data;
                    resolve();
                });
                req.fail(function () {
                    resolve();
                });
            }));
        }
    });
    return Promise.all(promises).then(function () {
        return lines.join('\n');
    });
};

CompilerService.prototype.getSelectizerOrder = function () {
    return [
        {field: '$order'},
        {field: '$score'},
        {field: 'name'},
    ];
};

module.exports = CompilerService;


/***/ }),

/***/ "bh+U":
/*!**********************************!*\
  !*** ./static/modes/asm-mode.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2012, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


var monaco = __webpack_require__(/*! monaco-editor */ "M/lh");

function definition() {
    return {
        // Set defaultToken to invalid to see what you do not tokenize yet
        defaultToken: 'invalid',

        // C# style strings
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

        registers: /%?\b(r[0-9]+[dbw]?|([er]?([abcd][xhl]|cs|fs|ds|ss|sp|bp|ip|sil?|dil?))|[xyz]mm[0-9]+|sp|fp|lr)\b/,

        intelOperators: /PTR|(D|Q|[XYZ]MM)?WORD/,

        tokenizer: {
            root: [
                // Error document
                [/^<.*>$/, {token: 'annotation'}],
                // Label definition
                [/^[.a-zA-Z0-9_$?@].*:/, {token: 'type.identifier'}],
                // Label definition (ARM style)
                [/^\s*[|][^|]*[|]/, {token: 'type.identifier'}],
                // Label definition (CL style)
                [/^\s*[.a-zA-Z0-9_$|]*\s+(PROC|ENDP|DB|DD)/, {token: 'type.identifier'}],
                // Constant definition
                [/^[.a-zA-Z0-9_$?@][^=]*=/, {token: 'type.identifier'}],
                // opcode
                [/[.a-zA-Z_][.a-zA-Z_0-9]*/, {token: 'keyword', next: '@rest'}],
                // braces and parentheses at the start of the line (e.g. nvcc output)
                [/[(){}]/, {token: 'operator', next: '@rest'}],

                // whitespace
                {include: '@whitespace'},
            ],

            rest: [
                // pop at the beginning of the next line and rematch
                [/^.*$/, {token: '@rematch', next: '@pop'}],

                [/@registers/, 'variable.predefined'],
                [/@intelOperators/, 'annotation'],
                // brackets
                [/[{}<>()[\]]/, '@brackets'],

                // ARM-style label reference
                [/[|][^|]*[|]*/, 'type.identifier'],

                // numbers
                [/\d*\.\d+([eE][-+]?\d+)?/, 'number.float'],
                [/([$]|0[xX])[0-9a-fA-F]+/, 'number.hex'],
                [/\d+/, 'number'],
                // ARM-style immediate numbers (which otherwise look like comments)
                [/#-?\d+/, 'number'],

                // operators
                [/[-+,*/!:&{}()]/, 'operator'],

                // strings
                [/"([^"\\]|\\.)*$/, 'string.invalid'],  // non-terminated string
                [/"/, {token: 'string.quote', bracket: '@open', next: '@string'}],

                // characters
                [/'[^\\']'/, 'string'],
                [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
                [/'/, 'string.invalid'],

                // Assume anything else is a label reference
                [/%?[.?_$a-zA-Z@][.?_$a-zA-Z0-9@]*/, 'type.identifier'],

                // whitespace
                {include: '@whitespace'},
            ],

            comment: [
                [/[^/*]+/, 'comment'],
                [/\/\*/, 'comment', '@push'],    // nested comment
                ['\\*/', 'comment', '@pop'],
                [/[/*]/, 'comment'],
            ],

            string: [
                [/[^\\"]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/"/, {token: 'string.quote', bracket: '@close', next: '@pop'}],
            ],

            whitespace: [
                [/[ \t\r\n]+/, 'white'],
                [/\/\*/, 'comment', '@comment'],
                [/\/\/.*$/, 'comment'],
                [/[#;\\@].*$/, 'comment'],
            ],
        },
    };
}

var def = definition();
monaco.languages.register({id: 'asm'});
monaco.languages.setMonarchTokensProvider('asm', def);

module.exports = def;


/***/ }),

/***/ "bpAS":
/*!********************************!*\
  !*** ./static/panes/output.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2016, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.



var _ = __webpack_require__(/*! underscore */ "xG9w");
var $ = __webpack_require__(/*! jquery */ "EVdn");
var FontScale = __webpack_require__(/*! ../fontscale */ "zeU8");
var AnsiToHtml = __webpack_require__(/*! ../ansi-to-html */ "Go29");
var Toggles = __webpack_require__(/*! ../toggles */ "VSGn");
var ga = __webpack_require__(/*! ../analytics */ "9vLr");

function makeAnsiToHtml(color) {
    return new AnsiToHtml({
        fg: color ? color : '#333',
        bg: '#f5f5f5',
        stream: true,
        escapeXML: true,
    });
}

function Output(hub, container, state) {
    this.container = container;
    this.compilerId = state.compiler;
    this.editorId = state.editor;
    this.eventHub = hub.createEventHub();
    this.domRoot = container.getElement();
    this.domRoot.html($('#compiler-output').html());
    this.contentRoot = this.domRoot.find('.content');
    this.optionsToolbar = this.domRoot.find('.options-toolbar');
    this.compilerName = '';
    this.fontScale = new FontScale(this.domRoot, state, '.content');
    this.fontScale.on('change', _.bind(function () {
        this.saveState();
    }, this));
    this.normalAnsiToHtml = makeAnsiToHtml();
    this.errorAnsiToHtml = makeAnsiToHtml('red');

    this.initButtons();
    this.initCallbacks(state);

    this.onOptionsChange();
    this.updateCompilerName();
    ga.proxy('send', {
        hitType: 'event',
        eventCategory: 'OpenViewPane',
        eventAction: 'Output',
    });
}

Output.prototype.initCallbacks = function (state) {
    this.options = new Toggles(this.domRoot.find('.options'), state);
    this.options.on('change', _.bind(this.onOptionsChange, this));

    this.container.on('resize', this.resize, this);
    this.container.on('shown', this.resize, this);
    this.container.on('destroy', this.close, this);

    this.eventHub.on('compiling', this.onCompiling, this);
    this.eventHub.on('compileResult', this.onCompileResult, this);
    this.eventHub.on('compilerClose', this.onCompilerClose, this);
    this.eventHub.emit('outputOpened', this.compilerId);
};

Output.prototype.getEffectiveOptions = function () {
    return this.options.get();
};

Output.prototype.resize = function () {
    this.contentRoot.height(this.domRoot.height() - this.optionsToolbar.height() - 5);
};

Output.prototype.onOptionsChange = function () {
    var options = this.getEffectiveOptions();
    this.contentRoot.toggleClass('wrap', options.wrap);
    this.wrapButton.prop('title', '[' + (options.wrap ? 'ON' : 'OFF') + '] ' + this.wrapTitle);

    this.saveState();
};

Output.prototype.initButtons = function () {
    this.wrapButton = this.domRoot.find('.wrap-lines');
    this.wrapTitle = this.wrapButton.prop('title');
};

Output.prototype.currentState = function () {
    var options = this.getEffectiveOptions();
    var state = {
        compiler: this.compilerId,
        editor: this.editorId,
        wrap: options.wrap,
    };
    this.fontScale.addState(state);
    return state;
};

Output.prototype.saveState = function () {
    this.container.setState(this.currentState());
};

Output.prototype.addOutputLines = function (result) {
    _.each((result.stdout || []).concat(result.stderr || []), function (obj) {
        var lineNumber = obj.tag ? obj.tag.line : obj.line;
        var columnNumber = obj.tag ? obj.tag.column : -1;
        if (obj.text === '') {
            this.add('<br/>');
        } else {
            this.add(this.normalAnsiToHtml.toHtml(obj.text), lineNumber, columnNumber);
        }
    }, this);
};

Output.prototype.onCompiling = function (compilerId) {
    if (this.compilerId === compilerId) {
        this.setCompileStatus(true);
    }
};

Output.prototype.onCompileResult = function (id, compiler, result) {
    if (id !== this.compilerId) return;
    if (compiler) this.compilerName = compiler.name;

    this.contentRoot.empty();

    this.addOutputLines(result);
    if (!result.execResult) {
        this.add('Compiler returned: ' + result.code);
    } else {
        this.add('ASM generation compiler returned: ' + result.code);
        this.addOutputLines(result.execResult.buildResult);
        this.add('Execution build compiler returned: ' + result.execResult.buildResult.code);
    }
    if (result.execResult && result.execResult.didExecute) {
        this.add('Program returned: ' + result.execResult.code);
        if (result.execResult.stderr.length || result.execResult.stdout.length) {
            _.each(result.execResult.stderr, function (obj) {
                // Conserve empty lines as they are discarded by ansiToHtml
                if (obj.text === '') {
                    this.programOutput('<br/>');
                } else {
                    this.programOutput(this.errorAnsiToHtml.toHtml(obj.text), 'red');
                }
            }, this);

            _.each(result.execResult.stdout, function (obj) {
                // Conserve empty lines as they are discarded by ansiToHtml
                if (obj.text === '') {
                    this.programOutput('<br/>');
                } else {
                    this.programOutput(this.normalAnsiToHtml.toHtml(obj.text));
                }
            }, this);
        }
    }
    this.setCompileStatus(false);
    this.updateCompilerName();
};

Output.prototype.programOutput = function (msg, color) {
    var elem = $('<div/>').appendTo(this.contentRoot)
        .html(msg)
        .addClass('program-exec-output');

    if (color)
        elem.css('color', color);
};

Output.prototype.add = function (msg, lineNum, column) {
    var elem = $('<div/>').appendTo(this.contentRoot);
    if (lineNum) {
        elem.html(
            $('<span class="linked-compiler-output-line"></span>')
                .html(msg)
                .click(_.bind(function (e) {
                    this.eventHub.emit('editorLinkLine', this.editorId, lineNum, column, column + 1, true);
                    // do not bring user to the top of index.html
                    // http://stackoverflow.com/questions/3252730
                    e.preventDefault();
                    return false;
                }, this))
                .on('mouseover', _.bind(function () {
                    this.eventHub.emit('editorLinkLine', this.editorId, lineNum, column, column + 1, false);
                }, this))
        );
    } else {
        elem.html(msg);
    }
};

Output.prototype.updateCompilerName = function () {
    var name = '#' + this.compilerId;
    if (this.compilerName) name += ' with ' + this.compilerName;
    this.container.setTitle(name);
};

Output.prototype.onCompilerClose = function (id) {
    if (id === this.compilerId) {
        // We can't immediately close as an outer loop somewhere in GoldenLayout is iterating over
        // the hierarchy. We can't modify while it's being iterated over.
        this.close();
        _.defer(function (self) {
            self.container.close();
        }, this);
    }
};

Output.prototype.close = function () {
    this.eventHub.emit('outputClosed', this.compilerId);
    this.eventHub.unsubscribe();
};

Output.prototype.setCompileStatus = function (isCompiling) {
    this.contentRoot.toggleClass('compiling', isCompiling);
};

module.exports = {
    Output: Output,
};


/***/ }),

/***/ "cVjN":
/*!***********************************!*\
  !*** ./static/libs-widget-ext.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright (c) 2020, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.

var options = __webpack_require__(/*! options */ "3M42"),
    _ = __webpack_require__(/*! underscore */ "xG9w"),
    local = __webpack_require__(/*! ./local */ "/Zv+"),
    $ = __webpack_require__(/*! jquery */ "EVdn");

function LibsWidgetExt(langId, compiler, dropdownButton, state, onChangeCallback) {
    this.dropdownButton = dropdownButton;
    var possibleLibs = false;
    if (compiler) {
        this.currentCompilerId = compiler.id;
        possibleLibs = compiler.libs;
    } else {
        this.currentCompilerId = '_default_';
    }
    this.currentLangId = langId;
    this.domRoot = $('#library-selection').clone(true);
    this.onChangeCallback = function () {
        this.updateButton();
        onChangeCallback();
    };
    this.availableLibs = {};
    this.updateAvailableLibs(possibleLibs);
    _.each(state.libs, _.bind(function (lib) {
        if (lib.name && lib.ver) {
            this.markLibrary(lib.name, lib.ver, true);
        } else {
            this.markLibrary(lib.id, lib.version, true);
        }
    }, this));

    this.fullRefresh();

    var searchInput = this.domRoot.find('.lib-search-input');

    if (window.compilerExplorerOptions.mobileViewer) {
        this.domRoot.addClass('mobile');
    }

    this.domRoot.on('shown.bs.modal', function () {
        searchInput.trigger('focus');
    });

    searchInput.on('input', _.bind(function () {
        this.startSearching();
    }, this));

    this.domRoot.find('.lib-search-button').on('click', _.bind(function () {
        this.startSearching();
    }, this));

    this.dropdownButton.on('click', _.bind(function () {
        this.domRoot.modal({});
    }, this));

    this.updateButton();
}

LibsWidgetExt.prototype.fullRefresh = function () {
    this.showSelectedLibs();
    this.showSelectedLibsAsSearchResults();
    this.showFavorites();
};

LibsWidgetExt.prototype.updateButton = function () {
    var selectedLibs = this.get();
    if (selectedLibs.length > 0) {
        this.dropdownButton.addClass('btn-success').removeClass('btn-light');
    } else {
        this.dropdownButton.removeClass('btn-success').addClass('btn-light');
    }
};

LibsWidgetExt.prototype.getFavorites = function () {
    var storkey = 'favlibs';

    return JSON.parse(local.get(storkey, '{}'));
};

LibsWidgetExt.prototype.setFavorites = function (faves) {
    var storkey = 'favlibs';

    local.set(storkey, JSON.stringify(faves));
};

LibsWidgetExt.prototype.isAFavorite = function (libId, versionId) {
    var faves = this.getFavorites();
    if (faves[libId]) {
        return faves[libId].includes(versionId);
    }

    return false;
};

LibsWidgetExt.prototype.addToFavorites = function (libId, versionId) {
    var faves = this.getFavorites();
    if (faves[libId]) {
        faves[libId].push(versionId);
    } else {
        faves[libId] = [];
        faves[libId].push(versionId);
    }

    this.setFavorites(faves);
};

LibsWidgetExt.prototype.removeFromFavorites = function (libId, versionId) {
    var faves = this.getFavorites();
    if (faves[libId]) {
        faves[libId] = _.filter(faves[libId], function (v) {
            return (v !== versionId);
        });
    }

    this.setFavorites(faves);
};

LibsWidgetExt.prototype.newFavoriteLibDiv = function (libId, versionId, lib, version) {
    var template = $('#lib-favorite-tpl');

    var libDiv = $(template.children()[0].cloneNode(true));

    var quickSelectButton = libDiv.find('.lib-name-and-version');
    quickSelectButton.html(lib.name + ' ' + version.version);
    quickSelectButton.on('click', _.bind(function () {
        this.selectLibAndVersion(libId, versionId);
        this.showSelectedLibs();
        this.onChangeCallback();
    }, this));

    return libDiv;
};

LibsWidgetExt.prototype.showFavorites = function () {
    var favoritesDiv = this.domRoot.find('.lib-favorites');
    favoritesDiv.html('');

    var faves = this.getFavorites();
    _.each(faves, _.bind(function (versionArr, libId) {
        _.each(versionArr, _.bind(function (versionId) {
            var lib = this.getLibInfoById(libId);
            if (lib) {
                var version = lib.versions[versionId];
                if (version) {
                    var div = this.newFavoriteLibDiv(libId, versionId, lib, version);
                    favoritesDiv.append(div);
                }
            }
        }, this));
    }, this));
};

LibsWidgetExt.prototype.getAndEmptySearchResults = function () {
    var searchResults = this.domRoot.find('.lib-results-items');
    searchResults.html('');
    return searchResults;
};

LibsWidgetExt.prototype.newSelectedLibDiv = function (libId, versionId, lib, version) {
    var template = $('#lib-selected-tpl');

    var libDiv = $(template.children()[0].cloneNode(true));

    var detailsButton = libDiv.find('.lib-name-and-version');
    detailsButton.html(lib.name + ' ' + version.version);
    detailsButton.on('click', _.bind(function () {
        var searchResults = this.getAndEmptySearchResults();
        this.addSearchResult(libId, lib, searchResults);
    }, this));

    var deleteButton = libDiv.find('.lib-remove');
    deleteButton.on('click', _.bind(function () {
        this.markLibrary(libId, versionId, false);
        libDiv.remove();
        this.showSelectedLibs();
        this.onChangeCallback();
        // We need to refresh the library lists, or the selector will still show up with the old library version
        this.startSearching();
    }, this));

    return libDiv;
};

LibsWidgetExt.prototype.conjureUpExamples = function (result, lib) {
    var examples = result.find('.lib-examples');
    if (lib.examples && lib.examples.length > 0) {
        var examplesHeader = $('<b>Examples</b>');
        var examplesList = $('<ul />');
        _.each(lib.examples, function (exampleId) {
            var li = $('<li />');
            examplesList.append(li);
            var exampleLink = $('<a>Example</a>');
            exampleLink.attr('href', window.httpRoot + 'z/' + exampleId);
            exampleLink.attr('target', '_blank');
            exampleLink.attr('rel', 'noopener');
            li.append(exampleLink);
        });

        examples.append(examplesHeader);
        examples.append(examplesList);
    }
};

LibsWidgetExt.prototype.newSearchResult = function (libId, lib) {
    var template = $('#lib-search-result-tpl');

    var result = $(template.children()[0].cloneNode(true));
    result.find('.lib-name').html(lib.name);
    if (!lib.description) {
        result.find('.lib-description').hide();
    } else {
        result.find('.lib-description').html(lib.description);
    }
    result.find('.lib-website-link').attr('href', lib.url ? lib.url : '#');

    this.conjureUpExamples(result, lib);

    var faveButton = result.find('.lib-fav-button');
    var faveStar = faveButton.find('.lib-fav-btn-icon');
    faveButton.hide();

    var versions = result.find('.lib-version-select');
    versions.html('');
    versions.append($('<option value="">-</option>'));
    _.each(lib.versions, _.bind(function (version, versionId) {
        var option = $('<option>');
        if (version.used) {
            option.attr('selected','selected');

            if (this.isAFavorite(libId, versionId)) {
                faveStar.removeClass('far').addClass('fas');
            }

            faveButton.show();
        }
        option.attr('value', versionId);
        option.html(version.version);
        versions.append(option);
    }, this));

    faveButton.on('click', _.bind(function () {
        var option = versions.find('option:selected');
        var verId = option.attr('value');
        if (this.isAFavorite(libId, verId)) {
            this.removeFromFavorites(libId, verId);
            faveStar.removeClass('fas').addClass('far');
        } else {
            this.addToFavorites(libId, verId);
            faveStar.removeClass('far').addClass('fas');
        }
        this.showFavorites();
    }, this));

    versions.on('change', _.bind(function () {
        var option = versions.find('option:selected');
        var verId = option.attr('value');

        this.selectLibAndVersion(libId, verId);
        this.showSelectedLibs();

        if (this.isAFavorite(libId, verId)) {
            faveStar.removeClass('far').addClass('fas');
        } else {
            faveStar.removeClass('fas').addClass('far');
        }

        if (verId) {
            faveButton.show();
        } else {
            faveButton.hide();
        }

        this.onChangeCallback();
    }, this));

    return result;
};

LibsWidgetExt.prototype.addSearchResult = function (libId, library, searchResults) {
    var card = this.newSearchResult(libId, library);
    searchResults.append(card);
};

LibsWidgetExt.prototype.startSearching = function () {
    var searchtext = this.domRoot.find('.lib-search-input').val();
    var lcSearchtext = searchtext.toLowerCase();

    var searchResults = this.getAndEmptySearchResults();

    if (Object.keys(this.availableLibs[this.currentLangId][this.currentCompilerId]).length === 0) {
        var nolibsMessage = $($('#libs-dropdown').children()[0].cloneNode(true));
        searchResults.append(nolibsMessage);
        return;
    }

    var descriptionSearchResults = [];

    _.each(this.availableLibs[this.currentLangId][this.currentCompilerId], _.bind(function (library, libId) {
        if (library.versions && library.versions.autodetect) return;

        if (library.name) {
            if (library.name.toLowerCase().includes(lcSearchtext)) {
                this.addSearchResult(libId, library, searchResults);
                return;
            }
        }

        if (library.description) {
            if (library.description.toLowerCase().includes(lcSearchtext)) {

                descriptionSearchResults.push({
                    libId: libId,
                    library: library,
                    searchResults: searchResults,
                });
            }
        }
    }, this));

    _.each(descriptionSearchResults, _.bind(function (res) {
        this.addSearchResult(res.libId, res.library, res.searchResults);
    }, this));
};

LibsWidgetExt.prototype.showSelectedLibs = function () {
    var items = this.domRoot.find('.libs-selected-items');
    items.html('');

    var selectedLibs = this.listUsedLibs();
    _.each(selectedLibs, _.bind(function (versionId, libId) {
        var lib = this.availableLibs[this.currentLangId][this.currentCompilerId][libId];
        var version = lib.versions[versionId];

        var libDiv = this.newSelectedLibDiv(libId, versionId, lib, version);
        items.append(libDiv);
    }, this));
};

LibsWidgetExt.prototype.showSelectedLibsAsSearchResults = function () {
    var searchResults = this.getAndEmptySearchResults();

    if (Object.keys(this.availableLibs[this.currentLangId][this.currentCompilerId]).length === 0) {
        var nolibsMessage = $($('#libs-dropdown').children()[0].cloneNode(true));
        searchResults.append(nolibsMessage);
        return;
    }

    _.each(this.availableLibs[this.currentLangId][this.currentCompilerId], _.bind(function (library, libId) {
        if (library.versions && library.versions.autodetect) return;

        var card = this.newSearchResult(libId, library);
        searchResults.append(card);
    }, this));
};

LibsWidgetExt.prototype.initLangDefaultLibs = function () {
    var defaultLibs = options.defaultLibs[this.currentLangId];
    if (!defaultLibs) return;
    _.each(defaultLibs.split(':'), _.bind(function (libPair) {
        var pairSplits = libPair.split('.');
        if (pairSplits.length === 2) {
            var lib = pairSplits[0];
            var ver = pairSplits[1];
            this.markLibrary(lib, ver, true);
        }
    }, this));
};

LibsWidgetExt.prototype.updateAvailableLibs = function (possibleLibs) {
    if (!this.availableLibs[this.currentLangId]) {
        this.availableLibs[this.currentLangId] = {};
    }

    if (!this.availableLibs[this.currentLangId][this.currentCompilerId]) {
        if (this.currentCompilerId === '_default_') {
            this.availableLibs[this.currentLangId][this.currentCompilerId] =
                $.extend(true, {}, options.libs[this.currentLangId]);
        } else {
            this.availableLibs[this.currentLangId][this.currentCompilerId] =
                $.extend(true, {}, possibleLibs);
        }
    }

    this.initLangDefaultLibs();
};

LibsWidgetExt.prototype.setNewLangId = function (langId, compilerId, possibleLibs) {
    var libsInUse = this.listUsedLibs();

    this.currentLangId = langId;

    if (compilerId) {
        this.currentCompilerId = compilerId;
    } else {
        this.currentCompilerId = '_default_';
    }

    // Clear the dom Root so it gets rebuilt with the new language libraries
    this.updateAvailableLibs(possibleLibs);

    _.forEach(libsInUse, _.bind(function (version, lib) {
        this.markLibrary(lib, version, true);
    }, this));

    this.fullRefresh();
    this.onChangeCallback();
};

LibsWidgetExt.prototype.getVersionOrAlias = function (name, version) {
    if (this.availableLibs[this.currentLangId] &&
        this.availableLibs[this.currentLangId][this.currentCompilerId] &&
        this.availableLibs[this.currentLangId][this.currentCompilerId][name]) {
        if (this.availableLibs[this.currentLangId][this.currentCompilerId][name].versions[version]) {
            return version;
        } else {
            return _.findKey(
                this.availableLibs[this.currentLangId][this.currentCompilerId][name].versions,
                function (ver) {
                    return ver.alias && ver.alias.includes(version);
                });
        }
    }
};

LibsWidgetExt.prototype.getLibInfoById = function (libId) {
    if (this.availableLibs[this.currentLangId] &&
        this.availableLibs[this.currentLangId][this.currentCompilerId] &&
        this.availableLibs[this.currentLangId][this.currentCompilerId][libId]) {
        return this.availableLibs[this.currentLangId][this.currentCompilerId][libId];
    }

    return false;
};

LibsWidgetExt.prototype.markLibrary = function (name, version, used) {
    var actualVersion = this.getVersionOrAlias(name, version);

    if (this.availableLibs[this.currentLangId] &&
        this.availableLibs[this.currentLangId][this.currentCompilerId] &&
        this.availableLibs[this.currentLangId][this.currentCompilerId][name] &&
        this.availableLibs[this.currentLangId][this.currentCompilerId][name].versions[actualVersion]) {
        this.availableLibs[this.currentLangId][this.currentCompilerId][name].versions[actualVersion].used = used;
    }
};

LibsWidgetExt.prototype.selectLibAndVersion = function (libId, versionId) {
    if (this.availableLibs[this.currentLangId] &&
        this.availableLibs[this.currentLangId][this.currentCompilerId] &&
        this.availableLibs[this.currentLangId][this.currentCompilerId][libId]) {

        _.each(
            this.availableLibs[this.currentLangId][this.currentCompilerId][libId].versions,
            function (curver, curverId) {
                curver.used = curverId === versionId;
            });
    }
};

LibsWidgetExt.prototype.get = function () {
    return _.map(this.listUsedLibs(), function (item, libId) {
        return {name: libId, ver: item};
    });
};

LibsWidgetExt.prototype.listUsedLibs = function () {
    var libs = {};
    _.each(this.availableLibs[this.currentLangId][this.currentCompilerId], function (library, libId) {
        _.each(library.versions, function (version, ver) {
            if (library.versions[ver].used) {
                // We trust the invariant of only 1 used version at any given time per lib
                libs[libId] = ver;
            }
        });
    });
    return libs;
};

LibsWidgetExt.prototype.getLibsInUse = function () {
    var libs = [];
    _.each(this.availableLibs[this.currentLangId][this.currentCompilerId], function (library, libId) {
        _.each(library.versions, function (version, ver) {
            if (library.versions[ver].used) {
                var libVer = Object.assign({libId: libId, versionId: ver}, library.versions[ver]);
                libs.push(libVer);
            }
        });
    });
    return libs;
};

module.exports = {
    Widget: LibsWidgetExt,
};


/***/ }),

/***/ "dEVg":
/*!**************************!*\
  !*** ./static/themes.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2017, Matt Godbolt & Rubén Rincón
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


var $ = __webpack_require__(/*! jquery */ "EVdn");
var monaco = __webpack_require__(/*! monaco-editor */ "M/lh");

var themes = {
    default: {
        path: 'default',
        id: 'default',
        name: 'Default',
        'main-color': '#f2f2f2',
        monaco: 'vs', // Optional field
    },
    dark: {
        path: 'dark',
        id: 'dark',
        name: 'Dark',
        'main-color': '#333333',
        monaco: 'vs-dark',
    },
};

function Themer(eventHub, initialSettings) {
    this.currentTheme = null;
    this.eventHub = eventHub;

    this.setTheme = function (theme) {
        if (this.currentTheme === theme) return;
        $('html').attr('data-theme', theme.path);
        $('#meta-theme').prop('content', theme['main-color']);
        monaco.editor.setTheme(theme.monaco);
        this.eventHub.emit('resize');
        this.currentTheme = theme;
    };

    this.onSettingsChange = function (newSettings) {
        var newTheme = themes[newSettings.theme] || themes.default;
        if (!newTheme.monaco)
            newTheme.monaco = 'vs';
        this.setTheme(newTheme);

        // This line is used to set thet codelens font
        // Official support using the IEditorOptions.codeLensFontFamily property has landed in vscode
        // It should be removed once a downstream release of monaco is cut
        document.querySelector(':root').style.setProperty('--user-selected-font-stack', newSettings.editorsFFont);
    };
    this.onSettingsChange(initialSettings);

    this.eventHub.on('settingsChange', this.onSettingsChange, this);

    this.eventHub.on('requestTheme', function () {
        this.eventHub.emit('themeChange', this.currentTheme);
    }, this);
}

module.exports = {
    themes: themes,
    Themer: Themer,
};


/***/ }),

/***/ "dOLS":
/*!**************************************!*\
  !*** ./static/modes/llvm-ir-mode.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2018, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


var monaco = __webpack_require__(/*! monaco-editor */ "M/lh");

// This definition is based on the official LLVM vim syntax:
// http://llvm.org/svn/llvm-project/llvm/trunk/utils/vim/syntax/llvm.vim
// For VIM regex syntax, see: http://vimdoc.sourceforge.net/htmldoc/pattern.html
function definition() {
    return {
        // llvmType
        types: [
            'void', 'half', 'float', 'double', 'x86_fp80', 'fp128', 'ppc_fp128',
            'label', 'metadata', 'x86_mmx',
            'type', 'label', 'opaque', 'token',
        ],
        // llvmStatement
        statements: [
            'add', 'addrspacecast', 'alloca', 'and', 'arcp', 'ashr', 'atomicrmw',
            'bitcast', 'br', 'catchpad', 'catchswitch', 'catchret', 'call',
            'cleanuppad', 'cleanupret', 'cmpxchg', 'eq', 'exact', 'extractelement',
            'extractvalue', 'fadd', 'fast', 'fcmp', 'fdiv', 'fence', 'fmul', 'fpext',
            'fptosi', 'fptoui', 'fptrunc', 'free', 'frem', 'fsub', 'getelementptr',
            'icmp', 'inbounds', 'indirectbr', 'insertelement', 'insertvalue',
            'inttoptr', 'invoke', 'landingpad', 'load', 'lshr', 'malloc', 'max', 'min',
            'mul', 'nand', 'ne', 'ninf', 'nnan', 'nsw', 'nsz', 'nuw', 'oeq', 'oge', 'ogt', 'ole',
            'olt', 'one', 'or', 'ord', 'phi', 'ptrtoint', 'resume', 'ret', 'sdiv', 'select',
            'sext', 'sge', 'sgt', 'shl', 'shufflevector', 'sitofp', 'sle', 'slt', 'srem',
            'store', 'sub', 'switch', 'trunc', 'udiv', 'ueq', 'uge', 'ugt', 'uitofp', 'ule', 'ult',
            'umax', 'umin', 'une', 'uno', 'unreachable', 'unwind', 'urem', 'va_arg',
            'xchg', 'xor', 'zext',
        ],
        // llvmKeyword
        keywords: [
            'acq_rel', 'acquire', 'addrspace', 'alias', 'align', 'alignstack', 'alwaysinline',
            'appending', 'argmemonly', 'arm_aapcscc', 'arm_aapcs_vfpcc', 'arm_apcscc', 'asm',
            'atomic', 'available_externally', 'blockaddress', 'builtin', 'byval', 'c', 'catch',
            'caller', 'cc', 'ccc', 'cleanup', 'coldcc', 'comdat', 'common', 'constant',
            'datalayout', 'declare', 'default', 'define', 'deplibs', 'dereferenceable',
            'distinct', 'dllexport', 'dllimport', 'dso_local', 'dso_preemptable', 'except',
            'external', 'externally_initialized', 'extern_weak', 'fastcc', 'filter', 'from',
            'gc', 'global', 'hhvmcc', 'hhvm_ccc', 'hidden', 'initialexec', 'inlinehint',
            'inreg', 'inteldialect', 'intel_ocl_bicc', 'internal', 'linkonce', 'linkonce_odr',
            'localdynamic', 'localexec', 'local_unnamed_addr', 'minsize', 'module',
            'monotonic', 'msp430_intrcc', 'musttail', 'naked', 'nest', 'noalias', 'nobuiltin',
            'nocapture', 'noimplicitfloat', 'noinline', 'nonlazybind', 'nonnull', 'norecurse',
            'noredzone', 'noreturn', 'nounwind', 'optnone', 'optsize', 'personality',
            'private', 'protected', 'ptx_device', 'ptx_kernel', 'readnone', 'readonly',
            'release', 'returned', 'returns_twice', 'sanitize_address', 'sanitize_memory',
            'sanitize_thread', 'section', 'seq_cst', 'sideeffect', 'signext', 'syncscope',
            'source_filename', 'speculatable', 'spir_func', 'spir_kernel', 'sret', 'ssp',
            'sspreq', 'sspstrong', 'strictfp', 'swiftcc', 'tail', 'target', 'thread_local',
            'to', 'triple', 'unnamed_addr', 'unordered', 'uselistorder', 'uselistorder_bb',
            'uwtable', 'volatile', 'weak', 'weak_odr', 'within', 'writeonly', 'x86_64_sysvcc',
            'win64cc', 'x86_fastcallcc', 'x86_stdcallcc', 'x86_thiscallcc', 'zeroext',
        ],

        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

        tokenizer: {
            root: [
                [/[,(){}<>[\]]/, 'delimiters'],
                [/i\d+\**/, 'type'], // llvmType

                // Misc syntax.
                [/[%@!]\d+/, 'variable.name'],                         // llvmNoName
                [/-?\d+\.\d*(e[+-]\d+)?/, 'number.float'],             // llvmFloat
                [/0[xX][0-9A-Fa-f]+/, 'number.hex'],                   // llvmFloat
                [/-?\d+/, 'number'],                                   // llvmNumber
                [/\b(true|false)\b/, 'keyword'],                       // llvmBoolean
                [/\b(zeroinitializer|undef|null|none)\b/, 'constant'], // llvmConstant
                [/"([^"\\]|\\.)*$/, 'string.invalid'],                 // non-terminated string
                [/"/, 'string', '@string'],                            // push to string state
                [/[-a-zA-Z$._][-a-zA-Z$._0-9]*:/, 'tag'],              // llvmLabel
                [/[%@][-a-zA-Z$._][-a-zA-Z$._0-9]*/, 'variable.name'], // llvmIdentifier

                // Named metadata and specialized metadata keywords.
                [/![-a-zA-Z$._][-a-zA-Z$._0-9]*(?=\s*)$/, 'identifier'],    // llvmIdentifier
                [/![-a-zA-Z$._][-a-zA-Z$._0-9]*(?=\s*[=!])/, 'identifier'], // llvmIdentifier
                [/![A-Za-z]+(?=\s*\()/, 'type'],                            // llvmType
                [/\bDW_TAG_[a-z_]+\b/, 'constant'],                         // llvmConstant
                [/\bDW_ATE_[a-zA-Z_]+\b/, 'constant'],                      // llvmConstant
                [/\bDW_OP_[a-zA-Z0-9_]+\b/, 'constant'],                    // llvmConstant
                [/\bDW_LANG_[a-zA-Z0-9_]+\b/, 'constant'],                  // llvmConstant
                [/\bDW_VIRTUALITY_[a-z_]+\b/, 'constant'],                  // llvmConstant
                [/\bDIFlag[A-Za-z]+\b/, 'constant'],                        // llvmConstant

                // Syntax-highlight lit test commands and bug numbers.
                [/;\s*PR\d*\s*$/, 'comment.doc'],                               // llvmSpecialComment
                [/;\s*REQUIRES:.*$/, 'comment.doc'],                            // llvmSpecialComment
                [/;\s*RUN:.*$/, 'comment.doc'],                                 // llvmSpecialComment
                [/;\s*CHECK:.*$/, 'comment.doc'],                               // llvmSpecialComment
                [/;\s*CHECK-(?:NEXT|NOT|DAG|SAME|LABEL):.*$/, 'comment.doc'],   // llvmSpecialComment
                [/;\s*XFAIL:.*$/, 'comment.doc'],                               // llvmSpecialComment
                [/;.*$/, 'comment'],
                [/[*#=!]/, 'operators'],
                [/[a-z_$][\w$]*/, {
                    cases: {
                        '@statements': 'operators',
                        '@keywords': 'keyword',
                        '@types': 'type',
                        '@default': 'identifier',
                    },
                }],
                [/[ \t\r\n]+/, 'white'],

            ],
            string: [
                [/[^\\"]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/"/, 'string', '@pop'],
            ],
        },
    };
}

monaco.languages.register({id: 'llvm-ir'});
monaco.languages.setMonarchTokensProvider('llvm-ir', definition());


/***/ }),

/***/ "eNeu":
/*!***********************!*\
  !*** ./static/hub.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2016, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.



var _ = __webpack_require__(/*! underscore */ "xG9w");
var Sentry = __webpack_require__(/*! @sentry/browser */ "WSEr");
var editor = __webpack_require__(/*! ./panes/editor */ "E+t5");
var compiler = __webpack_require__(/*! ./panes/compiler */ "35hO");
var executor = __webpack_require__(/*! ./panes/executor */ "5IfX");
var output = __webpack_require__(/*! ./panes/output */ "bpAS");
var tool = __webpack_require__(/*! ./panes/tool */ "HdlZ");
var Components = __webpack_require__(/*! components */ "hqpU");
var diff = __webpack_require__(/*! ./panes/diff */ "jGjW");
var optView = __webpack_require__(/*! ./panes/opt-view */ "G1pD");
var astView = __webpack_require__(/*! ./panes/ast-view */ "RxZR");
var irView = __webpack_require__(/*! ./panes/ir-view */ "ygYq");
var gccDumpView = __webpack_require__(/*! ./panes/gccdump-view */ "fQWu");
var cfgView = __webpack_require__(/*! ./panes/cfg-view */ "61ZV");
var conformanceView = __webpack_require__(/*! ./panes/conformance-view */ "26VD");
var CompilerService = __webpack_require__(/*! compiler-service */ "al0n");

function Ids() {
    this.used = {};
}

Ids.prototype.add = function (id) {
    this.used[id] = true;
};

Ids.prototype.remove = function (id) {
    delete this.used[id];
};

Ids.prototype.next = function () {
    for (var i = 1; i < 100000; ++i) {
        if (!this.used[i]) {
            this.used[i] = true;
            return i;
        }
    }
    throw 'Ran out of ids!?';
};

function Hub(layout, subLangId, defaultLangId) {
    this.layout = layout;
    this.editorIds = new Ids();
    this.compilerIds = new Ids();
    this.executorIds = new Ids();
    this.compilerService = new CompilerService(layout.eventHub);
    this.deferred = true;
    this.deferredEmissions = [];
    this.lastOpenedLangId = null;
    this.subdomainLangId = subLangId || undefined;
    this.defaultLangId = defaultLangId;

    // FIXME
    // We can't avoid this self as _ is undefined at this point
    var self = this;

    layout.registerComponent(Components.getEditor().componentName,
        function (container, state) {
            return self.codeEditorFactory(container, state);
        });
    layout.registerComponent(Components.getCompiler().componentName,
        function (container, state) {
            return self.compilerFactory(container, state);
        });
    layout.registerComponent(Components.getExecutor().componentName,
        function (container, state) {
            return self.executorFactory(container, state);
        });
    layout.registerComponent(Components.getOutput().componentName,
        function (container, state) {
            return self.outputFactory(container, state);
        });
    layout.registerComponent(Components.getToolViewWith().componentName,
        function (container, state) {
            return self.toolFactory(container, state);
        });
    layout.registerComponent(diff.getComponent().componentName,
        function (container, state) {
            return self.diffFactory(container, state);
        });
    layout.registerComponent(Components.getOptView().componentName,
        function (container, state) {
            return self.optViewFactory(container, state);
        });
    layout.registerComponent(Components.getAstView().componentName,
        function (container, state) {
            return self.astViewFactory(container, state);
        });
    layout.registerComponent(Components.getIrView().componentName,
        function (container, state) {
            return self.irViewFactory(container, state);
        });
    layout.registerComponent(Components.getGccDumpView().componentName,
        function (container, state) {
            return self.gccDumpViewFactory(container, state);
        });
    layout.registerComponent(Components.getCfgView().componentName,
        function (container, state) {
            return self.cfgViewFactory(container, state);
        });
    layout.registerComponent(Components.getConformanceView().componentName,
        function (container, state) {
            return self.confomanceFactory(container, state);
        });

    layout.eventHub.on('editorOpen', function (id) {
        this.editorIds.add(id);
    }, this);
    layout.eventHub.on('editorClose', function (id) {
        this.editorIds.remove(id);
    }, this);
    layout.eventHub.on('compilerOpen', function (id) {
        this.compilerIds.add(id);
    }, this);
    layout.eventHub.on('compilerClose', function (id) {
        this.compilerIds.remove(id);
    }, this);
    layout.eventHub.on('executorOpen', function (id) {
        this.executorIds.add(id);
    }, this);
    layout.eventHub.on('executorClose', function (id) {
        this.executorIds.remove(id);
    }, this);
    layout.eventHub.on('languageChange', function (editorId, langId) {
        this.lastOpenedLangId = langId;
    }, this);
    layout.init();
    this.undefer();
    layout.eventHub.emit('initialised');
}

Hub.prototype.undefer = function () {
    this.deferred = false;
    var eventHub = this.layout.eventHub;
    _.each(this.deferredEmissions, function (args) {
        eventHub.emit.apply(eventHub, args);
    });
    this.deferredEmissions = [];
};

Hub.prototype.nextEditorId = function () {
    return this.editorIds.next();
};

Hub.prototype.nextCompilerId = function () {
    return this.compilerIds.next();
};

Hub.prototype.nextExecutorId = function () {
    return this.executorIds.next();
};

Hub.prototype.codeEditorFactory = function (container, state) {
    // Ensure editors are closable: some older versions had 'isClosable' false.
    // NB there doesn't seem to be a better way to do this than reach into the config and rely on the fact nothing
    // has used it yet.
    container.parent.config.isClosable = true;
    return new editor.Editor(this, state, container);
};

Hub.prototype.compilerFactory = function (container, state) {
    return new compiler.Compiler(this, container, state);
};

Hub.prototype.executorFactory = function (container, state) {
    return new executor.Executor(this, container, state);
};

Hub.prototype.outputFactory = function (container, state) {
    return new output.Output(this, container, state);
};

Hub.prototype.toolFactory = function (container, state) {
    return new tool.Tool(this, container, state);
};

Hub.prototype.diffFactory = function (container, state) {
    return new diff.Diff(this, container, state);
};

Hub.prototype.optViewFactory = function (container, state) {
    return new optView.Opt(this, container, state);
};

Hub.prototype.astViewFactory = function (container, state) {
    return new astView.Ast(this, container, state);
};

Hub.prototype.irViewFactory = function (container, state) {
    return new irView.Ir(this, container, state);
};

Hub.prototype.gccDumpViewFactory = function (container, state) {
    return new gccDumpView.GccDump(this, container, state);
};

Hub.prototype.cfgViewFactory = function (container, state) {
    return new cfgView.Cfg(this, container, state);
};

Hub.prototype.confomanceFactory = function (container, state) {
    return new conformanceView.Conformance(this, container, state);
};

function WrappedEventHub(hub, eventHub) {
    this.hub = hub;
    this.eventHub = eventHub;
    this.subscriptions = [];
}

WrappedEventHub.prototype.emit = function () {
    // Events are deferred during initialisation to allow all the components to install their listeners before
    // all the emits are done. This fixes some ordering issues.
    if (this.hub.deferred) {
        this.hub.deferredEmissions.push(arguments);
    } else {
        this.eventHub.emit.apply(this.eventHub, arguments);
    }
};

WrappedEventHub.prototype.on = function (event, callback, context) {
    this.eventHub.on(event, callback, context);
    this.subscriptions.push({evt: event, fn: callback, ctx: context});
};

WrappedEventHub.prototype.unsubscribe = function () {
    _.each(this.subscriptions, _.bind(function (obj) {
        try {
            this.eventHub.off(obj.evt, obj.fn, obj.ctx);
        } catch (e) {
            Sentry.captureMessage('Can not unsubscribe from ' + obj.evt.toString());
            Sentry.captureException(e);
        }
    }, this));
    this.subscriptions = [];
};

WrappedEventHub.prototype.mediateDependentCalls = function (dependent, dependency) {
    var dependencyExecuted = false;
    var lastDependentArgs = null;
    var dependencyProxy = function () {
        dependency.apply(this, arguments);
        dependencyExecuted = true;
        if (lastDependentArgs) {
            dependent.apply(this, lastDependentArgs);
            lastDependentArgs = null;
        }
    };
    var dependentProxy = function () {
        if (dependencyExecuted) {
            dependent.apply(this, arguments);
        } else {
            lastDependentArgs = arguments;
        }
    };
    return {dependencyProxy: dependencyProxy,
        dependentProxy: dependentProxy};
};

Hub.prototype.createEventHub = function () {
    return new WrappedEventHub(this, this.layout.eventHub);
};

Hub.prototype.findParentRowOrColumn = function (elem) {
    while (elem) {
        if (elem.isRow || elem.isColumn) return elem;
        elem = elem.parent;
    }
    return elem;
};

Hub.prototype.addAtRoot = function (newElem) {
    var rootFirstItem = this.layout.root.contentItems[0];
    if (rootFirstItem) {
        if (rootFirstItem.isRow || rootFirstItem.isColumn) {
            rootFirstItem.addChild(newElem);
        } else {
            var newRow = this.layout.createContentItem({type: 'row'}, this.layout.root);
            this.layout.root.replaceChild(rootFirstItem, newRow);
            newRow.addChild(rootFirstItem);
            newRow.addChild(newElem);
        }
    } else {
        this.layout.root.addChild({
            type: 'row',
            content: [newElem],
        });
    }
};

module.exports = Hub;


/***/ }),

/***/ "fQWu":
/*!**************************************!*\
  !*** ./static/panes/gccdump-view.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2017, Marc Poulhiès - Kalray Inc.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.



var FontScale = __webpack_require__(/*! ../fontscale */ "zeU8");
var monaco = __webpack_require__(/*! monaco-editor */ "M/lh");
var Toggles = __webpack_require__(/*! ../toggles */ "VSGn");
__webpack_require__(/*! ../modes/gccdump-rtl-gimple-mode */ "DIyg");
var _ = __webpack_require__(/*! underscore */ "xG9w");
var $ = __webpack_require__(/*! jquery */ "EVdn");
var ga = __webpack_require__(/*! ../analytics */ "9vLr");
var monacoConfig = __webpack_require__(/*! ../monaco-config */ "u8Pk");

__webpack_require__(/*! selectize */ "QPhV");

function GccDump(hub, container, state) {
    this.container = container;
    this.eventHub = hub.createEventHub();
    this.domRoot = container.getElement();
    this.domRoot.html($('#gccdump').html());
    var root = this.domRoot.find('.monaco-placeholder');

    this.gccDumpEditor = monaco.editor.create(root[0], monacoConfig.extendConfig({
        readOnly: true,
        glyphMargin: true,
        lineNumbersMinChars: 3,
        dropdownParent: 'body',
    }));

    this.initButtons(state);

    var selectize = this.domRoot.find('.gccdump-pass-picker').selectize({
        sortField: 'name',
        valueField: 'name',
        labelField: 'name',
        searchField: ['name'],
        options: [],
        items: [],
    });

    this.selectize = selectize[0].selectize;

    // this is used to save internal state.
    this.state = {};

    this.state._compilerid = state._compilerid;
    this.state._editorid = state._editorid;
    this._compilerName = state._compilerName;

    this.awaitingInitialResults = false;
    this.selection = state.selection;

    this.initCallbacks();

    if (state && state.selectedPass) {
        this.state.selectedPass = state.selectedPass;
        this.eventHub.emit('gccDumpPassSelected', this.state._compilerid, state.selectedPass, false);
    }

    // until we get our first result from compilation backend with all fields,
    // disable UI callbacks.
    this.uiIsReady = false;
    this.onUiNotReady();

    this.eventHub.emit('gccDumpFiltersChanged', this.state._compilerid, this.getEffectiveFilters(), false);

    this.updateButtons();
    this.saveState();
    this.setTitle();

    // UI is ready, request compilation to get passes list and
    // current output (if any)
    this.eventHub.emit('gccDumpUIInit', this.state._compilerid);
    ga.proxy('send', {
        hitType: 'event',
        eventCategory: 'OpenViewPane',
        eventAction: 'GccDump',
    });
}

GccDump.prototype.initButtons = function (state) {
    this.filters = new Toggles(this.domRoot.find('.dump-filters'), state);
    this.fontScale = new FontScale(this.domRoot, state, this.gccDumpEditor);

    this.topBar = this.domRoot.find('.top-bar');
    this.dumpFiltersButtons = this.domRoot.find('.dump-filters .btn');

    this.dumpTreesButton = this.domRoot.find("[data-bind='treeDump']");
    this.dumpTreesTitle = this.dumpTreesButton.prop('title');

    this.dumpRtlButton = this.domRoot.find("[data-bind='rtlDump']");
    this.dumpRtlTitle = this.dumpRtlButton.prop('title');

    this.dumpIpaButton = this.domRoot.find("[data-bind='ipaDump']");
    this.dumpIpaTitle = this.dumpIpaButton.prop('title');

    this.optionAddressButton = this.domRoot.find("[data-bind='addressOption']");
    this.optionAddressTitle = this.optionAddressButton.prop('title');

    this.optionSlimButton = this.domRoot.find("[data-bind='slimOption']");
    this.optionSlimTitle = this.optionSlimButton.prop('title');

    this.optionRawButton = this.domRoot.find("[data-bind='rawOption']");
    this.optionRawTitle = this.optionRawButton.prop('title');

    this.optionDetailsButton = this.domRoot.find("[data-bind='detailsOption']");
    this.optionDetailsTitle = this.optionDetailsButton.prop('title');

    this.optionStatsButton = this.domRoot.find("[data-bind='statsOption']");
    this.optionStatsTitle = this.optionStatsButton.prop('title');

    this.optionBlocksButton = this.domRoot.find("[data-bind='blocksOption']");
    this.optionBlocksTitle = this.optionBlocksButton.prop('title');

    this.optionVopsButton = this.domRoot.find("[data-bind='vopsOption']");
    this.optionVopsTitle = this.optionVopsButton.prop('title');

    this.optionLinenoButton = this.domRoot.find("[data-bind='linenoOption']");
    this.optionLinenoTitle = this.optionLinenoButton.prop('title');

    this.optionUidButton = this.domRoot.find("[data-bind='uidOption']");
    this.optionUidTitle = this.optionUidButton.prop('title');

    this.optionAllButton = this.domRoot.find("[data-bind='allOption']");
    this.optionAllTitle = this.optionAllButton.prop('title');
};

GccDump.prototype.initCallbacks = function () {
    this.filters.on('change', _.bind(this.onFilterChange, this));
    this.selectize.on('change', _.bind(this.onPassSelect, this));

    this.fontScale.on('change', _.bind(this.saveState, this));

    this.eventHub.on('compileResult', this.onCompileResult, this);
    this.eventHub.on('compiler', this.onCompiler, this);
    this.eventHub.on('compilerClose', this.onCompilerClose, this);
    this.eventHub.on('settingsChange', this.onSettingsChange, this);

    this.eventHub.emit('gccDumpViewOpened', this.state._compilerid);
    this.eventHub.emit('requestSettings');
    this.container.on('destroy', this.close, this);

    this.container.on('resize', this.resize, this);
    this.container.on('shown', this.resize, this);

    this.cursorSelectionThrottledFunction =
        _.throttle(_.bind(this.onDidChangeCursorSelection, this), 500);
    this.gccDumpEditor.onDidChangeCursorSelection(_.bind(function (e) {
        this.cursorSelectionThrottledFunction(e);
    }, this));
};

GccDump.prototype.updateButtons = function () {
    var formatButtonTitle = function (button, title) {
        button.prop('title', '[' + (button.hasClass('active') ? 'ON' : 'OFF') + '] ' + title);
    };
    formatButtonTitle(this.dumpTreesButton, this.dumpTreesTitle);
    formatButtonTitle(this.dumpRtlButton, this.dumpRtlTitle);
    formatButtonTitle(this.dumpIpaButton, this.dumpIpaTitle);
    formatButtonTitle(this.optionAddressButton, this.optionAddressTitle);
    formatButtonTitle(this.optionSlimButton, this.optionSlimTitle);
    formatButtonTitle(this.optionRawButton, this.optionRawTitle);
    formatButtonTitle(this.optionDetailsButton, this.optionDetailsTitle);
    formatButtonTitle(this.optionStatsButton, this.optionStatsTitle);
    formatButtonTitle(this.optionBlocksButton, this.optionBlocksTitle);
    formatButtonTitle(this.optionVopsButton, this.optionVopsTitle);
    formatButtonTitle(this.optionLinenoButton, this.optionLinenoTitle);
    formatButtonTitle(this.optionUidButton, this.optionUidTitle);
    formatButtonTitle(this.optionAllButton, this.optionAllTitle);
};

// Disable view's menu when invalid compiler has been
// selected after view is opened.
GccDump.prototype.onUiNotReady = function () {
    // disable drop down menu and buttons
    this.selectize.disable();
    this.dumpFiltersButtons.prop('disabled', true);
};

GccDump.prototype.onUiReady = function () {
    // enable drop down menu and buttons
    this.selectize.enable();

    this.dumpFiltersButtons.prop('disabled', false);
};

GccDump.prototype.onPassSelect = function (passId) {
    if (this.inhibitPassSelect !== true) {
        this.eventHub.emit('gccDumpPassSelected', this.state._compilerid, passId, true);
    }
    this.state.selectedPass = passId;
    this.saveState();
};

// TODO: de-dupe with compiler etc
GccDump.prototype.resize = function () {
    var topBarHeight = this.topBar.outerHeight(true);
    this.gccDumpEditor.layout({
        width: this.domRoot.width(),
        height: this.domRoot.height() - topBarHeight,
    });
};

// Called after result from new compilation received
// if gccDumpOutput is false, cleans the select menu
GccDump.prototype.updatePass = function (filters, selectize, gccDumpOutput) {
    var passes = gccDumpOutput ? gccDumpOutput.all : [];

    // we are changing selectize but don't want any callback to
    // trigger new compilation
    this.inhibitPassSelect = true;

    _.each(selectize.options, function (p) {
        if (passes.indexOf(p.name) === -1) {
            selectize.removeOption(p.name);
        }
    }, this);

    _.each(passes, function (p) {
        selectize.addOption({
            name: p,
        });
    }, this);

    if (gccDumpOutput.selectedPass && gccDumpOutput.selectedPass !== '') {
        selectize.addItem(gccDumpOutput.selectedPass, true);
    } else {
        selectize.clear(true);
    }

    this.eventHub.emit('gccDumpPassSelected', this.state._compilerid, gccDumpOutput.selectedPass, false);

    this.inhibitPassSelect = false;
};

GccDump.prototype.onCompileResult = function (id, compiler, result) {
    if (this.state._compilerid !== id || !compiler) return;

    if (result.gccDumpOutput && result.gccDumpOutput.syntaxHighlight) {
        monaco.editor.setModelLanguage(this.gccDumpEditor.getModel(), 'gccdump-rtl-gimple');
    } else {
        monaco.editor.setModelLanguage(this.gccDumpEditor.getModel(), 'plaintext');
    }
    if (compiler.supportsGccDump && result.gccDumpOutput) {
        var currOutput = result.gccDumpOutput.currentPassOutput;

        // if result contains empty selected pass, probably means
        // we requested an invalid/outdated pass.
        if (result.gccDumpOutput.selectedPass === '') {
            this.selectize.clear(true);
            this.state.selectedPass = '';
        }
        this.updatePass(this.filters, this.selectize, result.gccDumpOutput);
        this.showGccDumpResults(currOutput);

        // enable UI on first successful compilation or after an invalid compiler selection (eg. clang)
        if (!this.uiIsReady) {
            this.uiIsReady = true;
            this.onUiReady();
        }
    } else {
        this.selectize.clear(true);
        this.state.selectedPass = '';
        this.updatePass(this.filters, this.selectize, false);
        this.uiIsReady = false;
        this.onUiNotReady();
        if (!compiler.supportsGccDump) {
            this.showGccDumpResults('<Tree/RTL output is not supported for this compiler (GCC only)>');
        } else {
            this.showGccDumpResults('<Tree/RTL output is empty>');
        }
    }
    this.saveState();
};

GccDump.prototype.setTitle = function () {
    this.container.setTitle((this._compilerName || '') +
        ' GCC Tree/RTL Viewer (Editor #' + this.state._editorid + ', Compiler #' + this.state._compilerid + ')');
};

GccDump.prototype.showGccDumpResults = function (results) {
    this.gccDumpEditor.setValue(results);

    if (!this.awaitingInitialResults) {
        if (this.selection) {
            this.gccDumpEditor.setSelection(this.selection);
            this.gccDumpEditor.revealLinesInCenter(this.selection.startLineNumber,
                this.selection.endLineNumber);
        }
        this.awaitingInitialResults = true;
    }
};

GccDump.prototype.onCompiler = function (id, compiler, options, editorid) {
    if (id === this.state._compilerid) {
        this._compilerName = compiler ? compiler.name : '';
        this.state._editorid = editorid;
        this.setTitle();
    }
};

GccDump.prototype.onCompilerClose = function (id) {
    if (id === this.state._compilerid) {
        // We can't immediately close as an outer loop somewhere in GoldenLayout is iterating over
        // the hierarchy. We can't modify while it's being iterated over.
        this.close();
        _.defer(function (self) {
            self.container.close();
        }, this);
    }
};

GccDump.prototype.getEffectiveFilters = function () {
    return this.filters.get();
};

GccDump.prototype.onFilterChange = function () {
    this.saveState();
    this.updateButtons();

    if (this.inhibitPassSelect !== true) {
        this.eventHub.emit('gccDumpFiltersChanged', this.state._compilerid, this.getEffectiveFilters(), true);
    }
};

GccDump.prototype.saveState = function () {
    var state = this.currentState();
    this.container.setState(state);
    this.fontScale.addState(state);
};

GccDump.prototype.currentState = function () {
    var filters = this.getEffectiveFilters();
    return {
        _compilerid: this.state._compilerid,
        _editorid: this.state._editorid,
        selectedPass: this.state.selectedPass,
        treeDump: filters.treeDump,
        rtlDump: filters.rtlDump,
        ipaDump: filters.ipaDump,
        addressOption: filters.addressOption,
        slimOption: filters.slimOption,
        rawOption: filters.rawOption,
        detailsOption: filters.detailsOption,
        statsOption: filters.statsOption,
        blocksOption: filters.blocksOption,
        vopsOption: filters.vopsOption,
        linenoOption: filters.linenoOption,
        uidOption: filters.uidOption,
        allOption: filters.allOption,
        selection: this.selection,
    };
};

GccDump.prototype.onSettingsChange = function (newSettings) {
    this.gccDumpEditor.updateOptions({
        contextmenu: newSettings.useCustomContextMenu,
        minimap: {
            enabled: newSettings.showMinimap,
        },
        fontFamily: newSettings.editorsFFont,
        fontLigatures: newSettings.editorsFLigatures,
    });
};

GccDump.prototype.onDidChangeCursorSelection = function (e) {
    if (this.awaitingInitialResults) {
        this.selection = e.selection;
        this.saveState();
    }
};

GccDump.prototype.close = function () {
    this.eventHub.unsubscribe();
    this.eventHub.emit('gccDumpViewClosed', this.state._compilerid);
    this.gccDumpEditor.dispose();
};

module.exports = {
    GccDump: GccDump,
};


/***/ }),

/***/ "hP72":
/*!****************************************!*\
  !*** ./static/modes/cppx-gold-mode.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2020, Lock3 Software LLC
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.

// Originally based on `./d-mode.js` by the Compiler Explorer Authors


var monaco = __webpack_require__(/*! monaco-editor */ "M/lh");

function definition() {
    return {
        defaultToken: '',

        brackets: [
            { token: 'delimiter.curly', open: '{', close: '}' },
            { token: 'delimiter.parenthesis', open: '(', close: ')' },
            { token: 'delimiter.square', open: '[', close: ']' },
            { token: 'delimiter.angle', open: '<', close: '>' },
        ],

        keywords: [
            'array',
            'auto',
            'bool',
            'break',
            'case',
            'catch',
            'char',
            'class',
            'const',
            'constexpr',
            'const_cast',
            'continue',
            'decltype',
            'default',
            'delete',
            'do',
            'dynamic_cast',
            'else',
            'enum',
            'explicit',
            'export',
            'extern',
            'false',
            'final',
            'for',
            'if',
            'in',
            'inline',
            'mutable',
            'namespace',
            'new',
            'noexcept',
            'operator',
            'override',
            'private',
            'protected',
            'public',
            'register',
            'reinterpret_cast',
            'return',
            'sizeof',
            'static',
            'static_assert',
            'static_cast',
            'switch',
            'template',
            'this',
            'thread_local',
            'throw',
            'tile_static',
            'true',
            'try',
            'typedef',
            'typeid',
            'typename',
            'union',
            'using',
            'virtual',
            'void',
            'volatile',
            'wchar_t',
            'where',
            'while',

            // Additional C++ keywords
            'alignas',
            'alignof',
            'and',
            'or',
            'not',

            // Gold specific keywords
            'returns',
            'otherwise',
            'then',
            'until',
            'null',
            'ref',
            'rref',
        ],

        typeKeywords: [
            // C++ keywords
            'int',
            'double',
            'float',

            // Gold specific keywords
            'type',
            'uint',
            'uint8',
            'uint16',
            'uint32',
            'uint64',
            'uint128',
            'float16',
            'float32',
            'float64',
            'float128',
            'int8',
            'int16',
            'int32',
            'int64',
            'int128',
            'type',
            'char8',
            'char16',
            'char32',
            'null_t',
        ],

        operators: [
            '=', '>', '<', '!', '~', '?', ':',
            '==', '<=', '>=', '<>', '&&', '||',
            '+', '-', '*', '/', '&', '|', '^', '%', '<<',
            '>>', '>>>', '+=', '-=', '*=', '/=', '&=', '|=',
            '^=', '%=', '<<=', '>>=', '>>>=',
        ],

        symbols: /[=><!~?:&|+\-*/^%]+/,
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

        // The main tokenizer
        tokenizer: {
            root: [
                // identifiers and keywords
                [/[a-z_$][\w$]*/, {
                    cases: {
                        '@typeKeywords': 'keyword',
                        '@keywords': 'keyword',
                        '@default': 'identifier',
                    },
                }],
                [/[A-Z][\w$]*/, 'type.identifier'],  // to show class names nicely

                // whitespace
                {include: '@whitespace'},

                // delimiters and operators
                [/[{}()[\]]/, '@brackets'],
                [/[<>](?!@symbols)/, '@brackets'],
                [/@symbols/, {
                    cases: {
                        '@operators': 'operator',
                        '@default': '',
                    },
                }],

                // numbers
                [/\d*\.\d+([eE][-+]?\d+)?[fFdD]?/, 'number.float'],
                [/0[xX][0-9a-fA-F_]*[0-9a-fA-F][Ll]?/, 'number.hex'],
                [/0[0-7_]*[0-7][Ll]?/, 'number.octal'],
                [/0[bB][0-1_]*[0-1][Ll]?/, 'number.binary'],
                [/\d+[lL]?/, 'number'],

                // strings
                [/"([^"\\]|\\.)*$/, 'string.invalid'],  // non-teminated string
                [/"/, 'string', '@string'],

                // characters
                [/'[^\\']+'/, 'string'],
                [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
                [/'/, 'string.invalid'],
            ],

            // strings
            string: [
                [/[^\\"]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/"/, 'string', '@pop'],
            ],

            // characters
            characters: [
                [/'[^\\']+'/, 'string'],
                [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
                [/'/, 'string.invalid'],
            ],

            whitespace: [
                [/[ \t\r\n]+/, 'white'],
                [/<#/, 'comment', '@nestingcomment'],
                [/#.*$/, 'comment'],
            ],

            comment: [
                [/[#]/, 'comment'],
            ],

            nestingcomment: [
                [/[^<#]+/, 'comment'],
                [/<#/, 'comment', '@push'],
                [/<#/, 'comment.invalid'],
                [/#>/, 'comment', '@pop'],
                [/[<#]/, 'comment'],
            ],
        },
    };
}

function configuration() {
    return {
        comments: {
            lineComment: '#',
            blockComment: ['<#', '#>'],
        },

        brackets: [
            ['{', '}'],
            ['[', ']'],
            ['(', ')'],
        ],

        autoClosingPairs: [
            { open: '[', close: ']' },
            { open: '{', close: '}' },
            { open: '(', close: ')' },
            { open: '\'', close: '\'', notIn: ['string', 'comment'] },
            { open: '"', close: '"', notIn: ['string'] },
        ],

        surroundingPairs: [
            { open: '{', close: '}' },
            { open: '[', close: ']' },
            { open: '(', close: ')' },
            { open: '"', close: '"' },
            { open: '\'', close: '\'' },
        ],
    };
}

monaco.languages.register({id: 'cppx-gold'});
monaco.languages.setMonarchTokensProvider('cppx-gold', definition());
monaco.languages.setLanguageConfiguration('cppx-gold', configuration());


/***/ }),

/***/ "hqpU":
/*!******************************!*\
  !*** ./static/components.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2016, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


// here instead of in the editor.js and compiler.js etc to prevent circular dependencies.
module.exports = {
    getCompiler: function (editorId, lang) {
        return {
            type: 'component',
            componentName: 'compiler',
            componentState: {source: editorId, lang: lang},
        };
    },
    getCompilerWith: function (editorId, filters, options, compilerId, langId, libs) {
        return {
            type: 'component',
            componentName: 'compiler',
            componentState: {
                source: editorId,
                filters: filters,
                options: options,
                compiler: compilerId,
                lang: langId,
                libs: libs,
            },
        };
    },
    getExecutor: function (editorId, lang) {
        return {
            type: 'component',
            componentName: 'executor',
            componentState: {source: editorId, lang: lang},
        };
    },
    getExecutorWith: function (editorId, lang, compilerId, libraries, compilerArgs) {
        return {
            type: 'component',
            componentName: 'executor',
            componentState: {
                source: editorId,
                lang: lang,
                compiler: compilerId,
                libs: libraries,
                options: compilerArgs,
            },
        };
    },
    getEditor: function (id, langId) {
        return {
            type: 'component',
            componentName: 'codeEditor',
            componentState: {id: id, lang: langId},
        };
    },
    getEditorWith: function (id, source, options) {
        return {
            type: 'component',
            componentName: 'codeEditor',
            componentState: {id: id, source: source, options: options},
        };
    },
    getOutput: function (compiler, editor) {
        return {
            type: 'component',
            componentName: 'output',
            componentState: {compiler: compiler, editor: editor},
        };
    },
    getToolViewWith: function (compiler, editor, toolId, args) {
        return {
            type: 'component',
            componentName: 'tool',
            componentState: {
                compiler: compiler,
                editor: editor,
                toolId: toolId,
                args: args,
            },
        };
    },
    getDiff: function () {
        return {
            type: 'component',
            componentName: 'diff',
            componentState: {},
        };
    },
    getOptView: function () {
        return {
            type: 'component',
            componentName: 'opt',
            componentState: {},
        };
    },
    getOptViewWith: function (id, source, optimization, compilerName, editorid) {
        return {
            type: 'component',
            componentName: 'opt',
            componentState: {
                id: id,
                source: source,
                optOutput: optimization,
                compilerName: compilerName,
                editorid: editorid,
            },
        };
    },
    getAstView: function () {
        return {
            type: 'component',
            componentName: 'ast',
            componentState: {},
        };
    },
    getAstViewWith: function (id, source, astOutput, compilerName, editorid) {
        return {
            type: 'component',
            componentName: 'ast',
            componentState: {
                id: id,
                source: source,
                astOutput: astOutput,
                compilerName: compilerName,
                editorid: editorid,
            },
        };
    },
    getGccDumpView: function () {
        return {
            type: 'component',
            componentName: 'gccdump',
            componentState: {},
        };
    },
    getGccDumpViewWith: function (id, compilerName, editorid, gccDumpOutput) {
        var ret = {
            type: 'component',
            componentName: 'gccdump',
            componentState: {
                _compilerid: id,
                _compilerName: compilerName,
                _editorid: editorid,
            },
        };
        if (gccDumpOutput) {
            ret.treeDump = gccDumpOutput.treeDump;
            ret.rtlDump = gccDumpOutput.rtlDump;
            ret.ipaDump = gccDumpOutput.ipaDump;
            ret.addressOption = gccDumpOutput.addressOption;
            ret.slimOption = gccDumpOutput.slimOption;
            ret.rawOption = gccDumpOutput.rawOption;
            ret.detailsOption = gccDumpOutput.detailsOption;
            ret.statsOption = gccDumpOutput.statsOption;
            ret.blocksOption = gccDumpOutput.blocksOption;
            ret.vopsOption = gccDumpOutput.vopsOption;
            ret.linenoOption = gccDumpOutput.linenoOption;
            ret.uidOption = gccDumpOutput.uidOption;
            ret.allOption = gccDumpOutput.allOption;
            ret.selectedPass = gccDumpOutput.selectedPass;
        }
        return ret;
    },

    getCfgView: function () {
        return {
            type: 'component',
            componentName: 'cfg',
            componentState: {},
        };
    },
    getCfgViewWith: function (id, editorid, source, cfgOutput) {
        return {
            type: 'component',
            componentName: 'cfg',
            componentState: {
                id: id,
                editorid: editorid,
                source: source,
                cfgOutput: cfgOutput
            },
        };
    },
    getConformanceView: function (editorid, source, langId) {
        return {
            type: 'component',
            componentName: 'conformance',
            componentState: {
                editorid: editorid,
                source: source,
                langId: langId,
            },
        };
    },
    getIrView: function () {
        return {
            type: 'component',
            componentName: 'ir',
            componentState: {},
        };
    },
    getIrViewWith: function (id, source, irOutput, compilerName, editorid) {
        return {
            type: 'component',
            componentName: 'ir',
            componentState: {
                id: id,
                source: source,
                irOutput: irOutput,
                compilerName: compilerName,
                editorid: editorid,
            },
        };
    },
};


/***/ }),

/***/ "jGjW":
/*!******************************!*\
  !*** ./static/panes/diff.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2017, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.



var FontScale = __webpack_require__(/*! ../fontscale */ "zeU8");
var monaco = __webpack_require__(/*! monaco-editor */ "M/lh");
var _ = __webpack_require__(/*! underscore */ "xG9w");
var $ = __webpack_require__(/*! jquery */ "EVdn");
var ga = __webpack_require__(/*! ../analytics */ "9vLr");

__webpack_require__(/*! ../modes/asm-mode */ "bh+U");
__webpack_require__(/*! selectize */ "QPhV");

// note that these variables are saved to state, so don't change, only add to it
var
    DiffType_ASM = 0,
    DiffType_CompilerStdOut = 1,
    DiffType_CompilerStdErr = 2,
    DiffType_ExecStdOut = 3,
    DiffType_ExecStdErr = 4;

function State(id, model, difftype) {
    this.id = id;
    this.model = model;
    this.compiler = null;
    this.result = null;
    this.difftype = difftype;
}

State.prototype.update = function (id, compiler, result) {
    if (this.id !== id) return false;
    this.compiler = compiler;
    this.result = result;
    this.refresh();

    return true;
};

State.prototype.refresh = function () {
    var output = [];
    if (this.result) {
        switch (this.difftype) {
            case DiffType_ASM:
                output = this.result.asm || [];
                break;
            case DiffType_CompilerStdOut:
                output = this.result.stdout || [];
                break;
            case DiffType_CompilerStdErr:
                output = this.result.stderr || [];
                break;
            case DiffType_ExecStdOut:
                if (this.result.execResult)
                    output = this.result.execResult.stdout || [];
                break;
            case DiffType_ExecStdErr:
                if (this.result.execResult)
                    output = this.result.execResult.stderr || [];
                break;
        }
    }
    this.model.setValue(_.pluck(output, 'text').join('\n'));
};

function getItemDisplayTitle(item) {
    if (typeof item.id === 'string') {
        var p = item.id.indexOf('_exec');
        if (p !== -1) {
            return 'Executor #' + item.id.substr(0, p);
        }
    }

    return 'Compiler #' + item.id;
}

function Diff(hub, container, state) {
    this.container = container;
    this.eventHub = hub.createEventHub();
    this.domRoot = container.getElement();
    this.domRoot.html($('#diff').html());
    this.compilers = {};
    var root = this.domRoot.find('.monaco-placeholder');

    this.outputEditor = monaco.editor.createDiffEditor(root[0], {
        fontFamily: 'Consolas, "Liberation Mono", Courier, monospace',
        scrollBeyondLastLine: true,
        readOnly: true,
        language: 'asm',
    });

    this.lhs = new State(state.lhs, monaco.editor.createModel('', 'asm'), state.lhsdifftype || DiffType_ASM);
    this.rhs = new State(state.rhs, monaco.editor.createModel('', 'asm'), state.rhsdifftype || DiffType_ASM);
    this.outputEditor.setModel({ original: this.lhs.model, modified: this.rhs.model });

    var selectizeType = this.domRoot.find('.difftype-picker').selectize({
        sortField: 'name',
        valueField: 'id',
        labelField: 'name',
        searchField: ['name'],
        options: [
            { id: DiffType_ASM, name: 'Assembly' },
            { id: DiffType_CompilerStdOut, name: 'Compiler stdout' },
            { id: DiffType_CompilerStdErr, name: 'Compiler stderr' },
            { id: DiffType_ExecStdOut, name: 'Execution stdout' },
            { id: DiffType_ExecStdErr, name: 'Execution stderr' },
        ],
        items: [],
        render: {
            option: function (item, escape) {
                return '<div>' + escape(item.name) + '</div>';
            },
        },
        dropdownParent: 'body',
    }).on('change', _.bind(function (e) {
        var target = $(e.target);
        if (target.hasClass('lhsdifftype')) {
            this.lhs.difftype = parseInt(target.val());
            this.lhs.refresh();
        } else {
            this.rhs.difftype = parseInt(target.val());
            this.rhs.refresh();
        }
        this.updateState();
    }, this));

    var selectize = this.domRoot.find('.diff-picker').selectize({
        sortField: 'name',
        valueField: 'id',
        labelField: 'name',
        searchField: ['name'],
        options: [],
        items: [],
        render: {
            option: function (item, escape) {
                return '<div>' +
                    '<span class="compiler">' + escape(item.compiler.name) + '</span>' +
                    '<span class="options">' + escape(item.options) + '</span>' +
                    '<ul class="meta">' +
                    '<li class="editor">Editor #' + escape(item.editorId) + '</li>' +
                    '<li class="compilerId">' + escape(getItemDisplayTitle(item)) + '</li>' +
                    '</ul></div>';
            },
        },
        dropdownParent: 'body',
    }).on('change', _.bind(function (e) {
        var target = $(e.target);
        var compiler = this.compilers[target.val()];
        if (!compiler) return;
        if (target.hasClass('lhs')) {
            this.lhs.compiler = compiler;
            this.lhs.id = compiler.id;
        } else {
            this.rhs.compiler = compiler;
            this.rhs.id = compiler.id;
        }
        this.onDiffSelect(compiler.id);
    }, this));

    this.selectize = {
        lhs: selectize[0].selectize, rhs: selectize[1].selectize,
        lhsdifftype: selectizeType[0].selectize, rhsdifftype: selectizeType[1].selectize,
    };

    this.initButtons(state);
    this.initCallbacks();

    this.updateCompilerNames();
    this.updateCompilers();
    ga.proxy('send', {
        hitType: 'event',
        eventCategory: 'OpenViewPane',
        eventAction: 'Diff',
    });
}

// TODO: de-dupe with compiler etc
Diff.prototype.resize = function () {
    var topBarHeight = this.topBar.outerHeight(true);
    this.outputEditor.layout({
        width: this.domRoot.width(),
        height: this.domRoot.height() - topBarHeight,
    });
};

Diff.prototype.onDiffSelect = function (id) {
    this.requestResendResult(id);
    this.updateCompilerNames();
    this.updateState();
};

Diff.prototype.onCompileResult = function (id, compiler, result) {
    // both sides must be updated, don't be tempted to rewrite this as
    // var changes = lhs.update() || rhs.update();
    var lhsChanged = this.lhs.update(id, compiler, result);
    var rhsChanged = this.rhs.update(id, compiler, result);
    if (lhsChanged || rhsChanged) {
        this.updateCompilerNames();
    }
};

Diff.prototype.onExecuteResult = function (id, compiler, result) {
    var compileResult = _.assign({}, result.buildResult);
    compileResult.execResult = {
        code: result.code,
        stdout: result.stdout,
        stderr: result.stderr,
    };

    this.onCompileResult(id + '_exec', compiler, compileResult);
};

Diff.prototype.initButtons = function (state) {
    this.fontScale = new FontScale(this.domRoot, state, this.outputEditor);

    this.topBar = this.domRoot.find('.top-bar');
};

Diff.prototype.initCallbacks = function () {
    this.fontScale.on('change', _.bind(this.updateState, this));

    this.eventHub.on('compileResult', this.onCompileResult, this);
    this.eventHub.on('executeResult', this.onExecuteResult, this);
    this.eventHub.on('compiler', this.onCompiler, this);
    this.eventHub.on('compilerClose', this.onCompilerClose, this);
    this.eventHub.on('executor', this.onExecutor, this);
    this.eventHub.on('executorClose', this.onExecutorClose, this);
    this.eventHub.on('settingsChange', this.onSettingsChange, this);
    this.eventHub.on('themeChange', this.onThemeChange, this);
    this.container.on('destroy', function () {
        this.eventHub.unsubscribe();
        this.outputEditor.dispose();
    }, this);
    this.container.on('resize', this.resize, this);
    this.container.on('shown', this.resize, this);

    this.requestResendResult(this.lhs.id);
    this.requestResendResult(this.rhs.id);

    this.eventHub.emit('findCompilers');
    this.eventHub.emit('findExecutors');

    this.eventHub.emit('requestTheme');
    this.eventHub.emit('requestSettings');
};

Diff.prototype.requestResendResult = function (id) {
    if (typeof id === 'string') {
        var p = id.indexOf('_exec');
        if (p !== -1) {
            var execId = parseInt(id.substr(0, p));
            this.eventHub.emit('resendExecution', execId);
        }
    } else {
        this.eventHub.emit('resendCompilation', id);
    }
};

Diff.prototype.onCompiler = function (id, compiler, options, editorId) {
    if (!compiler) return;
    options = options || '';
    var name = compiler.name + ' ' + options;
    // TODO: selectize doesn't play nicely with CSS tricks for truncation; this is the best I can do
    // There's a plugin at: http://www.benbybenjacobs.com/blog/2014/04/09/no-wrap-plugin-for-selectize-dot-js
    // but it doesn't look easy to integrate.
    var maxLength = 30;
    if (name.length > maxLength - 3) name = name.substr(0, maxLength - 3) + '...';
    this.compilers[id] = {
        id: id,
        name: name,
        options: options,
        editorId: editorId,
        compiler: compiler,
    };
    if (!this.lhs.id) {
        this.lhs.compiler = this.compilers[id];
        this.lhs.id = id;
        this.onDiffSelect(id);
    } else if (!this.rhs.id) {
        this.rhs.compiler = this.compilers[id];
        this.rhs.id = id;
        this.onDiffSelect(id);
    }
    this.updateCompilers();
};

Diff.prototype.onExecutor = function (id, compiler, options, editorId) {
    this.onCompiler(id + '_exec', compiler, options, editorId);
};

Diff.prototype.onCompilerClose = function (id) {
    delete this.compilers[id];
    this.updateCompilers();
};

Diff.prototype.onExecutorClose = function (id) {
    this.onCompilerClose(id + '_exec');
};

Diff.prototype.updateCompilerNames = function () {
    var name = 'Diff';
    if (this.lhs.compiler && this.rhs.compiler)
        name += ' ' + this.lhs.compiler.name + ' vs ' + this.rhs.compiler.name;
    this.container.setTitle(name);
};

Diff.prototype.updateCompilersFor = function (selectize, id) {
    selectize.clearOptions();
    _.each(this.compilers, function (compiler) {
        selectize.addOption(compiler);
    }, this);
    if (this.compilers[id]) {
        selectize.setValue(id);
    }
};

Diff.prototype.updateCompilers = function () {
    this.updateCompilersFor(this.selectize.lhs, this.lhs.id);
    this.updateCompilersFor(this.selectize.rhs, this.rhs.id);

    this.selectize.lhsdifftype.setValue(this.lhs.difftype || DiffType_ASM);
    this.selectize.rhsdifftype.setValue(this.rhs.difftype || DiffType_ASM);
};

Diff.prototype.updateState = function () {
    var state = {
        lhs: this.lhs.id,
        rhs: this.rhs.id,
        lhsdifftype: this.lhs.difftype,
        rhsdifftype: this.rhs.difftype,
    };
    this.fontScale.addState(state);
    this.container.setState(state);
};

Diff.prototype.onThemeChange = function (newTheme) {
    if (this.outputEditor)
        this.outputEditor.updateOptions({ theme: newTheme.monaco });
};

Diff.prototype.onSettingsChange = function (newSettings) {
    this.outputEditor.updateOptions({
        minimap: {
            enabled: newSettings.showMinimap,
        },
        fontFamily: newSettings.editorsFFont,
        fontLigatures: newSettings.editorsFLigatures,
    });
};

module.exports = {
    Diff: Diff,
    getComponent: function (lhs, rhs) {
        return {
            type: 'component',
            componentName: 'diff',
            componentState: { lhs: lhs, rhs: rhs },
        };
    },
};


/***/ }),

/***/ "k3xS":
/*!**************************************!*\
  !*** ./static/policies/cookies.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n\n<!--\nBe aware: modifying this file in any way will cause a pop-up to users telling them the cookie policy has changed.\n-->\n\n<html lang=\"en\">\n<body>\n\n<!--\nNo need to update this! It's done by the CLI build process\n-->\n<span id=\"last-changed\"></span>\n<h2>Compiler Explorer Cookie Policy</h2>\n\n<p>\n    Browsers support the storing and sending back of small text files called \"Cookies\". These cookie files can be used\n    (amongst other things) to help track the usage of a website. See\n    <a href=\"https://developer.mozilla.org/docs/Web/HTTP/Cookies\" target=\"_blank\" rel=\"noreferrer noopener\">the Mozilla\n        description of cookies</a> for more details.\n</p>\n\n<p>\n    Compiler Explorer uses Google Analytics, which in turn uses cookies. Google Analytics allows us to see how many\n    individual users of Compiler Explorer there are, how often users visit us, the average amount of time spent on the\n    site, the frequency and distribution of compilers selected, and so on. It is invaluable in helping us make\n    decisions in prioritising work on the site. It's important to note that these cookies are anonymous: we don't know\n    who each individual user is. Our Google Analytics settings prevent data being retained for more than 14 months. The\n    cookie stored is a first party cookie: you will find it in your browser under \"godbolt.org\" cookies.\n</p>\n\n<p>\n    Your privacy is important to us and you may opt out of this tracking at any time using the buttons on this dialog,\n    with no loss of access or functionality of Compiler Explorer.\n</p>\n\n<h2><span style=\"color: darkslategray\">Necessary</span> Local Storage</h2>\n<p>\n    To store your preferred options between sessions, such as your input code and user interface layout, we make use of\n    your browser's local storage, where we place:\n</p>\n\n<ul>\n    <li>The current page state, such as:\n        <ul>\n            <li>Your current code</li>\n            <li>Selected compilers and their options</li>\n            <li>Pane layout</li>\n            <li>Font sizes</li>\n        </ul>\n    </li>\n    <li>Your settings as shown in the settings popup (which can be found at: More > Settings), such as:\n        <ul>\n            <li>Your theme selection</li>\n            <li>The default language</li>\n            <li>Compile-as-you-type settings</li>\n        </ul>\n    </li>\n</ul>\n\n<p>\n    Note that the usage of local storage is necessary for the proper functioning of the site, and it won't be disabled\n    if you choose to not grant cookie usage consent. This information is not used to track any user identifying\n    information. The data stored locally is only that required by the site to function.\n</p>\n\n<h3>How to control the cookies</h3>\n<p>\n    You can change your cookie consent decision on Compiler Explorer by pressing one of the following buttons:\n</p>\n</body>\n</html>\n";

/***/ }),

/***/ "oKtz":
/*!**********************************!*\
  !*** ./static/modes/ptx-mode.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2019, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


var $ = __webpack_require__(/*! jquery */ "EVdn");
var monaco = __webpack_require__(/*! monaco-editor */ "M/lh");
var asm = __webpack_require__(/*! ./asm-mode */ "bh+U");

function definition() {
    var ptx = $.extend(true, {}, asm); // deep copy

    // Redefine registers for ptx:
    // Usually ptx registers are in the form "%[pr][0-9]+", but a bunch of magic registers does not follow
    // this scheme (see https://docs.nvidia.com/cuda/parallel-thread-execution/index.html#special-registers ).
    // Thus the register-regex captures everything that starts with a '%'.
    ptx.registers = /%[a-z0-9_\\.]+/;


    // Redefine whitespaces, as asm interprets strings with a leading '@' as comments.
    ptx.tokenizer.whitespace = [
        [/[ \t\r\n]+/, 'white'],
        [/\/\*/, 'comment', '@comment'],
        [/\/\/.*$/, 'comment'],
        [/[#;\\].*$/, 'comment'],
    ];

    // Add predicated instructions to the list of root tokens. Search for an opcode next, which is also a root token.
    ptx.tokenizer.root.push([/@%p[0-9]+/, {token: 'operator', next: '@root'}]);

    return ptx;
}

monaco.languages.register({id: 'ptx'});
monaco.languages.setMonarchTokensProvider('ptx', definition());


/***/ }),

/***/ "pf0N":
/*!*********************************!*\
  !*** ./static/modes/nc-mode.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2018, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


var $ = __webpack_require__(/*! jquery */ "EVdn");
var monaco = __webpack_require__(/*! monaco-editor */ "M/lh");
var cpp = __webpack_require__(/*! monaco-editor/esm/vs/basic-languages/cpp/cpp */ "fhwZ");

// We need to ensure we use proper keywords for the Monaco Editor matcher. Note how
// https://github.com/Microsoft/monaco-languages/ lacks, as far as I can tell, proper C support. We cheat and use C++
function definition() {
    var nc = $.extend(true, {}, cpp.language); // deep copy
    // https://en.cppreference.com/w/c/keyword
    nc.keywords = ['auto', 'break', 'case', 'char', 'const', 'continue', 'default',
        'do', 'double', 'else', 'enum', 'extern', 'float', 'for', 'goto', 'if', 'inline',
        'int', 'long', 'register', 'restrict', 'return', 'short', 'signed', 'sizeof', 'static',
        'struct', 'switch', 'typedef', 'union', 'unsigned', 'void', 'volatile', 'while',
        '_Alignas', '_Alignof', '_Atomic', '_Bool', '_Complex', '_Generic', '_Imaginary',
        '_Noreturn', '_Static_assert', '_Thread_local',
    ];
    return nc;
}

var def = definition();

monaco.languages.register({id: 'nc'});
monaco.languages.setLanguageConfiguration('nc', cpp.conf);
monaco.languages.setMonarchTokensProvider('nc', def);

module.exports = def;


/***/ }),

/***/ "qiXD":
/*!**********************************!*\
  !*** ./static/modes/ada-mode.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2018, Mitch Kennedy
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.



var monaco = __webpack_require__(/*! monaco-editor */ "M/lh");

function definition() {
    // Ada 2012 Language Definition
    return {
        keywords: [
            'abort',
            'else',
            'new',
            'return',
            'elsif',
            'reverse',
            'abstract',
            'end',
            'null',
            'accept',
            'entry',
            'select',
            'access',
            'exception',
            'of',
            'separate',
            'aliased',
            'exit',
            'some',
            'all',
            'others',
            'subtype',
            'for',
            'out',
            'synchronized',
            'array',
            'function',
            'overriding',
            'at',
            'tagged',
            'generic',
            'package',
            'task',
            'begin',
            'goto',
            'pragma',
            'terminate',
            'body',
            'private',
            'then',
            'if',
            'procedure',
            'type',
            'case',
            'in',
            'protected',
            'constant',
            'interface',
            'until',
            'is',
            'raise',
            'use',
            'declare',
            'range',
            'delay',
            'limited',
            'record',
            'when',
            'delta',
            'loop',
            'while',
            'digits',
            'renames',
            'with',
            'do',
            'requeue',
            'rem',
            'mod',
            'abs',
            'not',
            'and',
            'or',
            'xor',
        ],
        standardTypes :[
            // Defined in the package Standard
            // See: http://www.adaic.org/resources/add_content/standards/12rm/html/RM-A-1.html
            'Boolean', 
            'Integer',
            'Natural',
            'Positive ',
            'Float',
            'Character',
            'Wide_Character',
            'Wide_Wide_Character',
            'String',
            'Wide_String',
            'Wide_Wide_String',
            'Duration',
            // Predefined Standard exceptions
            'Constraint_Error',
            'Program_Error',
            'Storage_Error',
            'Tasking_Error',
        ],

        operators: [
            '+', '-', '*', '/', 'div', 'mod',
            'shl', 'shr', 'and', 'or', 'xor', 'not',
            '<', '>', '<=', '>=', '==', '<>',
            '+=', '-=', '*=', '/=',
        ],
        brackets: [
            ['(', ')', 'delimiter.parenthesis'],
            ['[', ']', 'delimiter.square'],
        ],
        symbols: /[=><!~&|+\-*/^]+/,
        delimiters: /[;=.:,`]/,
        escapes: /\\(?:[abfnrtv\\'\n\r]|x[0-9A-Fa-f]{2}|[0-7]{3}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8}|N\{\w+\})/,
        
        // The main tokenizer for our languages
        tokenizer: {
            root: [
                [/[a-zA-Z_][a-zA-Z0-9_]*/, {
                    cases: {
                        '@standardTypes': 'type',
                        '@keywords': 'keyword',
                        '@default': 'identifier',
                    },
                }],
                // Whitespace
                {include: '@whitespace'},

                [/[()[\]]/, '@brackets'],

                // Numbers
                // See https://regex101.com/r/dflfeQ/2 for examples from the 
                // 2012 ARM (http://www.ada-auth.org/standards/12rm/html/RM-2-4-1.html#S0009)
                [/[0-9_.]+(E[+-]?\d+)?/, 'number.float'],
                // See https://regex101.com/r/dSSADT/3 for examples from the
                // 2012 ARM (http://www.ada-auth.org/standards/12rm/html/RM-2-4-2.html#S0011)
                [/[0-9]+#[0-9A-Fa-f_.]+#(E[+-]?\d+)?/, 'number.hex'],

                [/@delimiters/, {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'delimiter',
                    },
                }],
                // strings
                [/"([^"\\]|\\.)*$/, 'string.invalid'],  // non-teminated string
                [/"/, 'string', '@string'],

                // characters
                [/'[^\\']'/, 'string'],
                [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
                [/'/, 'string.invalid'],
            ],
            
            // Whitespace and comments
            whitespace: [
                [/[ \t\r\n]+/, 'white'],
                [/--.*$/, 'comment'],
            ],
            string: [
                [/[^\\"]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/"/, 'string', '@pop'],
            ],
        },
    };
}
monaco.languages.register({id: 'ada'});
monaco.languages.setMonarchTokensProvider('ada', definition());


/***/ }),

/***/ "tOun":
/*!***********************************!*\
  !*** ./static/modes/cuda-mode.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2018, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


var $ = __webpack_require__(/*! jquery */ "EVdn");
var monaco = __webpack_require__(/*! monaco-editor */ "M/lh");
var cpp = __webpack_require__(/*! monaco-editor/esm/vs/basic-languages/cpp/cpp */ "fhwZ");
var cppp = __webpack_require__(/*! ./cppp-mode */ "JdVj");

// We need to create a new definition for cpp so we can remove invalid keywords

function definition() {
    var cuda = $.extend(true, {}, cppp); // deep copy

    function addKeywords(keywords) {
        // (Ruben) Done one by one as if you just push them all, Monaco complains that they're not strings, but as
        // far as I can tell, they indeed are all strings. This somehow fixes it. If you know how to fix it, plz go
        for (var i = 0; i < keywords.length; ++i) {
            cuda.keywords.push(keywords[i]);
        }
    }

    cuda.tokenPostfix = '.cu';

    // Keywords for CUDA
    addKeywords([
        '__host__', '__global__', '__device__', '__shared__', '__noinline__', '__forceinline__', '__restrict__',
    ]);

    return cuda;
}

monaco.languages.register({id: 'cuda'});
monaco.languages.setLanguageConfiguration('cuda', cpp.conf);
monaco.languages.setMonarchTokensProvider('cuda', definition());


/***/ }),

/***/ "u8Pk":
/*!*********************************!*\
  !*** ./static/monaco-config.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2020, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


var _ = __webpack_require__(/*! underscore */ "xG9w");

var config = {
    value: '',
    fontFamily: 'Consolas, "Liberation Mono", Courier, monospace',
    scrollBeyondLastLine: true,
    quickSuggestions: false,
    fixedOverflowWidgets: true,
    minimap: {
        maxColumn: 80,
    },
    folding: true,
    lineNumbersMinChars: 1,
    emptySelectionClipboard: true,
};

function extendConfig(options, settings) {
    var settingsObject = {};
    if (settings !== undefined) {
        settingsObject = {
            fontFamily: settings.editorsFFont,
            autoIndent: settings.autoIndent ? 'advanced' : 'none',
            vimInUse: settings.useVim,
            fontLigatures: settings.editorsFLigatures,
        };
    }
    return _.extend({}, config, settingsObject, options);
}

module.exports = {
    extendConfig: extendConfig,
};


/***/ }),

/***/ "xN3R":
/*!************************************!*\
  !*** ./static/codelens-handler.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2020, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.



var _ = __webpack_require__(/*! underscore */ "xG9w"),
    monaco = __webpack_require__(/*! monaco-editor */ "M/lh");

var registeredCodelenses = [];
var providersPerLanguage = {};

function registerLensesForCompiler(compilerId, editorModel, lenses) {
    var item = _.find(registeredCodelenses, function (item) {
        return item.compilerId === compilerId;
    });

    if (item) {
        item.lenses = lenses;
    } else {
        registeredCodelenses.push({
            compilerId: compilerId,
            editorModel: editorModel,
            lenses: lenses,
        });
    }
}

function provide(model) {
    var item = _.find(registeredCodelenses, function (item) {
        return item.editorModel === model;
    });

    if (item) {
        return {
            lenses: item.lenses,
            dispose: function () {},
        };
    } else {
        return {
            lenses: [],
            dispose: function () {},
        };
    }
}

function unregister(compilerId) {
    var item = _.find(registeredCodelenses, function (item) {
        return item.compilerId === compilerId;
    });

    if (item) {
        registeredCodelenses = _.without(registeredCodelenses, item);
    }
}

function registerProviderForLanguage(language) {
    if (!providersPerLanguage[language]) {
        providersPerLanguage[language] = monaco.languages.registerCodeLensProvider(language, {
            provideCodeLenses: provide,
        });
    }
}

module.exports = {
    registerLensesForCompiler: registerLensesForCompiler,
    unregister: unregister,
    registerProviderForLanguage: registerProviderForLanguage,
};


/***/ }),

/***/ "ygYq":
/*!*********************************!*\
  !*** ./static/panes/ir-view.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2018, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.



var FontScale = __webpack_require__(/*! ../fontscale */ "zeU8");
var monaco = __webpack_require__(/*! monaco-editor */ "M/lh");
var _ = __webpack_require__(/*! underscore */ "xG9w");
var $ = __webpack_require__(/*! jquery */ "EVdn");
var colour = __webpack_require__(/*! ../colour */ "DJCN");
var ga = __webpack_require__(/*! ../analytics */ "9vLr");
var monacoConfig = __webpack_require__(/*! ../monaco-config */ "u8Pk");

function Ir(hub, container, state) {
    this.container = container;
    this.eventHub = hub.createEventHub();
    this.domRoot = container.getElement();
    this.domRoot.html($('#ir').html());

    this.decorations = {};
    this.prevDecorations = [];
    var root = this.domRoot.find('.monaco-placeholder');

    this.irEditor = monaco.editor.create(root[0], monacoConfig.extendConfig({
        language: 'llvm-ir',
        readOnly: true,
        glyphMargin: true,
        lineNumbersMinChars: 3,
    }));

    this._compilerid = state.id;
    this._compilerName = state.compilerName;
    this._editorid = state.editorid;

    this.awaitingInitialResults = false;
    this.selection = state.selection;

    this.settings = {};

    this.colours = [];
    this.irCode = [];

    this.initButtons(state);
    this.initCallbacks();
    this.initEditorActions();

    if (state && state.irOutput) {
        this.showIrResults(state.irOutput);
    }
    this.setTitle();

    ga.proxy('send', {
        hitType: 'event',
        eventCategory: 'OpenViewPane',
        eventAction: 'Ir',
    });
}

Ir.prototype.initEditorActions = function () {
    this.irEditor.addAction({
        id: 'viewsource',
        label: 'Scroll to source',
        keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.F10],
        keybindingContext: null,
        contextMenuGroupId: 'navigation',
        contextMenuOrder: 1.5,
        run: _.bind(function (ed) {
            var desiredLine = ed.getPosition().lineNumber - 1;
            var source = this.irCode[desiredLine].source;
            if (source !== null && source.file === null) {
                // a null file means it was the user's source
                this.eventHub.emit('editorLinkLine', this._editorid, source.line, -1, -1, true);
            }
        }, this),
    });
};

Ir.prototype.initButtons = function (state) {
    this.fontScale = new FontScale(this.domRoot, state, this.irEditor);

    this.topBar = this.domRoot.find('.top-bar');
};

Ir.prototype.initCallbacks = function () {
    this.linkedFadeTimeoutId = -1;
    this.mouseMoveThrottledFunction = _.throttle(_.bind(this.onMouseMove, this), 50);
    this.irEditor.onMouseMove(_.bind(function (e) {
        this.mouseMoveThrottledFunction(e);
    }, this));

    this.cursorSelectionThrottledFunction =
        _.throttle(_.bind(this.onDidChangeCursorSelection, this), 500);
    this.irEditor.onDidChangeCursorSelection(_.bind(function (e) {
        this.cursorSelectionThrottledFunction(e);
    }, this));

    this.fontScale.on('change', _.bind(this.updateState, this));

    this.container.on('destroy', this.close, this);

    var onColoursOnCompile = this.eventHub.mediateDependentCalls(this.onColours, this.onCompileResponse);

    this.eventHub.on('compileResult', onColoursOnCompile.dependencyProxy, this);
    this.eventHub.on('compiler', this.onCompiler, this);
    this.eventHub.on('colours', onColoursOnCompile.dependentProxy, this);
    this.eventHub.on('panesLinkLine', this.onPanesLinkLine, this);
    this.eventHub.on('compilerClose', this.onCompilerClose, this);
    this.eventHub.on('settingsChange', this.onSettingsChange, this);
    this.eventHub.emit('irViewOpened', this._compilerid);
    this.eventHub.emit('requestSettings');

    this.container.on('resize', this.resize, this);
    this.container.on('shown', this.resize, this);
};

// TODO: de-dupe with compiler etc
Ir.prototype.resize = function () {
    var topBarHeight = this.topBar.outerHeight(true);
    this.irEditor.layout({
        width: this.domRoot.width(),
        height: this.domRoot.height() - topBarHeight,
    });
};

Ir.prototype.onCompileResponse = function (id, compiler, result) {
    if (this._compilerid !== id) return;
    if (result.hasIrOutput) {
        this.showIrResults(result.irOutput);
    } else if (compiler.supportsIrView) {
        this.showIrResults([{text: '<No output>'}]);
    }
};

Ir.prototype.getPaneName = function () {
    return this._compilerName + ' IR Viewer (Editor #' + this._editorid + ', Compiler #' + this._compilerid + ')';
};

Ir.prototype.setTitle = function () {
    this.container.setTitle(this.getPaneName());
};

Ir.prototype.showIrResults = function (irCode) {
    if (!this.irEditor) return;
    this.irCode = irCode;
    this.irEditor.getModel().setValue(irCode.length ? _.pluck(irCode, 'text').join('\n') : '<No IR generated>');

    if (!this.awaitingInitialResults) {
        if (this.selection) {
            this.irEditor.setSelection(this.selection);
            this.irEditor.revealLinesInCenter(this.selection.startLineNumber,
                this.selection.endLineNumber);
        }
        this.awaitingInitialResults = true;
    }
};

Ir.prototype.onCompiler = function (id, compiler, options, editorid) {
    if (id === this._compilerid) {
        this._compilerName = compiler ? compiler.name : '';
        this._editorid = editorid;
        this.setTitle();
        if (compiler && !compiler.supportsIrView) {
            this.irEditor.setValue('<IR output is not supported for this compiler>');
        }
    }
};

Ir.prototype.onColours = function (id, colours, scheme) {
    if (id === this._compilerid) {
        var irColours = {};
        _.each(this.irCode, function (x, index) {
            if (x.source && x.source.file === null && x.source.line > 0 && colours[x.source.line - 1] !== undefined) {
                irColours[index] = colours[x.source.line - 1];
            }
        });
        this.colours = colour.applyColours(this.irEditor, irColours, scheme, this.colours);
    }
};

Ir.prototype.onCompilerClose = function (id) {
    if (id === this._compilerid) {
        // We can't immediately close as an outer loop somewhere in GoldenLayout is iterating over
        // the hierarchy. We can't modify while it's being iterated over.
        _.defer(function (self) {
            self.container.close();
        }, this);
    }
};

Ir.prototype.updateState = function () {
    this.container.setState(this.currentState());
};

Ir.prototype.currentState = function () {
    var state = {
        id: this._compilerid,
        editorid: this._editorid,
        selection: this.selection,
    };
    this.fontScale.addState(state);
    return state;
};

Ir.prototype.onCompilerClose = function (id) {
    if (id === this._compilerid) {
        // We can't immediately close as an outer loop somewhere in GoldenLayout is iterating over
        // the hierarchy. We can't modify while it's being iterated over.
        this.close();
        _.defer(function (self) {
            self.container.close();
        }, this);
    }
};

Ir.prototype.onSettingsChange = function (newSettings) {
    this.settings = newSettings;
    this.irEditor.updateOptions({
        contextmenu: newSettings.useCustomContextMenu,
        minimap: {
            enabled: newSettings.showMinimap,
        },
        fontFamily: newSettings.editorsFFont,
        fontLigatures: newSettings.editorsFLigatures,
    });
};

Ir.prototype.onMouseMove = function (e) {
    if (e === null || e.target === null || e.target.position === null) return;
    if (this.settings.hoverShowSource === true && this.irCode) {
        this.clearLinkedLines();
        var hoverCode = this.irCode[e.target.position.lineNumber - 1];
        if (hoverCode) {
            // We check that we actually have something to show at this point!
            var sourceLine = -1;
            var sourceColBegin = -1;
            var sourceColEnd = -1;
            if (hoverCode.source && !hoverCode.source.file) {
                sourceLine = hoverCode.source.line;
                if (hoverCode.source.column) {
                    sourceColBegin = hoverCode.source.column;
                    sourceColEnd = sourceColBegin;
                }
            }
            this.eventHub.emit('editorLinkLine', this._editorid, sourceLine, sourceColBegin, sourceColEnd, false);
            this.eventHub.emit('panesLinkLine', this._compilerid,
                sourceLine, sourceColBegin, sourceColEnd,
                false, this.getPaneName());
        }
    }
};

Ir.prototype.onDidChangeCursorSelection = function (e) {
    if (this.awaitingInitialResults) {
        this.selection = e.selection;
        this.updateState();
    }
};


Ir.prototype.updateDecorations = function () {
    this.prevDecorations = this.irEditor.deltaDecorations(
        this.prevDecorations, _.flatten(_.values(this.decorations)));
};

Ir.prototype.clearLinkedLines = function () {
    this.decorations.linkedCode = [];
    this.updateDecorations();
};

Ir.prototype.onPanesLinkLine = function (compilerId, lineNumber, colBegin, colEnd, revealLine, sender) {
    if (Number(compilerId) === this._compilerid) {
        var lineNums = [];
        var directlyLinkedLineNums = [];
        var signalFromAnotherPane = sender !== this.getPaneName();
        _.each(this.irCode, function (irLine, i) {
            if (irLine.source && irLine.source.file === null && irLine.source.line === lineNumber) {
                var line = i + 1;
                lineNums.push(line);
                var currentCol = irLine.source.column;
                if (signalFromAnotherPane && currentCol && colBegin <= currentCol && currentCol <= colEnd) {
                    directlyLinkedLineNums.push(line);
                }
            }
        });
        if (revealLine && lineNums[0]) this.irEditor.revealLineInCenter(lineNums[0]);
        var lineClass = sender !== this.getPaneName() ? 'linked-code-decoration-line' : '';
        var linkedLineDecorations = _.map(lineNums, function (line) {
            return {
                range: new monaco.Range(line, 1, line, 1),
                options: {
                    isWholeLine: true,
                    linesDecorationsClassName: 'linked-code-decoration-margin',
                    className: lineClass,
                },
            };
        });
        var directlyLinkedLineDecorations = _.map(directlyLinkedLineNums, function (line) {
            return {
                range: new monaco.Range(line, 1, line, 1),
                options: {
                    isWholeLine: true,
                    inlineClassName: 'linked-code-decoration-column',
                },
            };
        });
        this.decorations.linkedCode = linkedLineDecorations.concat(directlyLinkedLineDecorations);
        if (this.linkedFadeTimeoutId !== -1) {
            clearTimeout(this.linkedFadeTimeoutId);
        }
        this.linkedFadeTimeoutId = setTimeout(_.bind(function () {
            this.clearLinkedLines();
            this.linkedFadeTimeoutId = -1;
        }, this), 5000);
        this.updateDecorations();
    }
};

Ir.prototype.close = function () {
    this.eventHub.unsubscribe();
    this.eventHub.emit('irViewClosed', this._compilerid);
    this.irEditor.dispose();
};

module.exports = {
    Ir: Ir,
};


/***/ }),

/***/ "zVv0":
/*!***********************************!*\
  !*** ./static/modes/ispc-mode.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2017, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.



var jquery = __webpack_require__(/*! jquery */ "EVdn");
var monaco = __webpack_require__(/*! monaco-editor */ "M/lh");
var cpp = __webpack_require__(/*! monaco-editor/esm/vs/basic-languages/cpp/cpp */ "fhwZ");

function definition() {
    var ispc = jquery.extend(true, {}, cpp.language); // deep copy

    ispc.tokenPostfix = '.ispc';

    ispc.keywords.push(
        'cbreak',
        'ccontinue',
        'cdo',
        'cfor',
        'cif',
        'creturn',
        'cwhile',
        'delete',
        'export',
        'foreach',
        'foreach_active',
        'foreach_tiled',
        'foreach_unique',
        'int16',
        'int32',
        'int64',
        'int8',
        'launch',
        'new',
        'operator',
        'programCount',
        'programIndex',
        'reference',
        'size_t',
        'soa',
        'sync',
        'task',
        'taskCount',
        'taskCount0',
        'taskCount1',
        'taskCount2',
        'taskIndex',
        'taskIndex0',
        'taskIndex1',
        'taskIndex2',
        'threadCount',
        'threadIndex',
        'uint16',
        'uint32',
        'uint64',
        'uint8',
        'uniform',
        'unmasked',
        'varying'
    );
    return ispc;
}

monaco.languages.register({id: 'ispc'});
monaco.languages.setLanguageConfiguration('ispc', cpp.conf);
monaco.languages.setMonarchTokensProvider('ispc', definition());


/***/ }),

/***/ "zeU8":
/*!*****************************!*\
  !*** ./static/fontscale.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2016, Compiler Explorer Authors
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


var _ = __webpack_require__(/*! underscore */ "xG9w");
var $ = __webpack_require__(/*! jquery */ "EVdn");
var EventEmitter = __webpack_require__(/*! events */ "fiWp");
var options = __webpack_require__(/*! ./options */ "3M42");

function makeFontSizeDropdown(elem, obj, buttonDropdown) {
    var onWheelEvent = function (e) {
        e.preventDefault();
        var selectedId = elem.find('.active').index();
        if (e.originalEvent.deltaY >= 0 && selectedId < elem.children().length - 1) {
            selectedId++;
        } else if (e.originalEvent.deltaY < 0 && selectedId > 0) {
            selectedId--;
        }
        elem.children().eq(selectedId).trigger('click');
    };

    var onClickEvent = function () {
        // Toggle off the selection of the others
        $(this)
            .addClass('active')
            .siblings().removeClass('active');
        // Send the data
        obj.scale = $(this).data('value');
        obj.apply();
        obj.emit('change');
    };

    for (var i = 8; i <= 30; i++) {
        var item = $('<button></button>');

        item.attr('data-value', i)
            .addClass('dropdown-item btn btn-sm btn-light')
            .text(i)
            .appendTo(elem)
            .click(onClickEvent);

        if (obj.scale === i) {
            item.addClass('active');
        }
    }

    if (buttonDropdown) {
        buttonDropdown.on('wheel', onWheelEvent);
    }
}

function convertOldScale(oldScale) {
    // New low + ((new max - new low) * (oldScale - old low) / (old max - old low))
    return Math.floor(8 + (22 * (oldScale - 0.3) / 2.7));
}

function FontScale(domRoot, state, fontSelectorOrEditor) {
    EventEmitter.call(this);
    this.domRoot = domRoot;
    // Old scale went from 0.3 to 3. New one uses 8 up to 30, so we can convert the old ones to the new format
    this.scale = state.fontScale || options.defaultFontScale;
    // The check seems pointless, but it ensures a false in case it's undefined
    this.usePxUnits = state.fontUsePx === true;
    if (this.scale < 8) {
        this.scale = convertOldScale(this.scale);
    }
    this.setTarget(fontSelectorOrEditor);
    this.apply();
    makeFontSizeDropdown(this.domRoot.find('.font-size-list'), this, this.domRoot.find('.fs-button'));
}

_.extend(FontScale.prototype, EventEmitter.prototype);

FontScale.prototype.apply = function () {
    if (this.isFontOfStr) {
        this.domRoot.find(this.fontSelectorOrEditor).css('font-size', this.scale + (this.usePxUnits ? 'px' : 'pt'));
    } else {
        this.fontSelectorOrEditor.updateOptions({
            fontSize: this.scale,
        });
    }
};

FontScale.prototype.addState = function (state) {
    state.fontScale = this.scale;
    state.fontUsePx = true;
};

FontScale.prototype.setScale = function (scale) {
    this.scale = scale;
    this.apply();
};

FontScale.prototype.setTarget = function (target) {
    this.fontSelectorOrEditor = target;
    this.isFontOfStr = typeof (this.fontSelectorOrEditor) === 'string';
};

module.exports = FontScale;


/***/ })

},[["NWa+","runtime","vendor"]]]);
//# sourceMappingURL=main.js.map