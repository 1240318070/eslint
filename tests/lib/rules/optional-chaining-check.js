/**
 * @fileoverview setData时，对传入参数进行有无可选链用法判断
 * @author zhou
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/optional-chaining-check"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------


var ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2020 } });
ruleTester.run("检查可选链使用是否正确", rule, {
    valid: [
        `
            function refreshData(data) {
                this.setData({
                    a: d?.c || e
                })
            }
        `,
        `
            refreshData = (data) => {
                this.setData({
                    a: d?.c || e
                })
            }
        `,
        `
            refreshData = function(data){
                this.setData({
                    a: d?.c || e
                })
            }
        `,
        `
            methods = {
                refreshData(data) {
                    this.setData({
                        a: d?.c || e
                    })
                }
            }
        `,
        `
            Component({
                methods: {
                    refresh(){
                        this.setData({
                            a: d?.c || e
                        })
                    }
                }
            })
        `
    ],
    invalid: [
        {
            code: `
                function refreshData(data) {
                    this.setData({
                        d: b?.c
                    });
                }
            `,
            errors: [{
                message: "setData使用可选链时必须||一个非undefined的值！例如 a?.b || c",
            }]
        },
        {
            code: `
                refreshData = (data) => {
                    this.setData({
                        d: b?.c
                    });
                }
            `,
            errors: [{
                message: "setData使用可选链时必须||一个非undefined的值！例如 a?.b || c",
            }]
        },
        {
            code: `
                refreshData = function(data){
                    this.setData({
                        d: b?.c
                    });
                }
            `,
            errors: [{
                message: "setData使用可选链时必须||一个非undefined的值！例如 a?.b || c",
            }]
        },
        {
            code: `
                methods = {
                    refreshData(data){
                        this.setData({
                            d: b?.c
                        });
                    }
                }
            `,
            errors: [{
                message: "setData使用可选链时必须||一个非undefined的值！例如 a?.b || c",
            }]
        },
    ],
});