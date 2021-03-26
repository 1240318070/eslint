/**
 * @fileoverview setData时，对传入参数进行有无可选链用法判断
 * @author zhou
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "使用可选链方法不规范",
        },
    },
    create: function (context) {
        return {
            'ExpressionStatement': (node) => {
                const expression = node.expression;
                if (expression.type === 'CallExpression' && expression.callee.property && expression.callee.property.name === 'setData'){
                    expression.arguments.forEach(arg => {
                        arg.properties.forEach(property => {
                            if (property.type === 'Property'){
                                const v = property.value;
                                if (v.type === 'ChainExpression'){
                                    context.report({
                                        node: v,
                                        message: "setData使用可选链时必须||一个非undefined的值！例如 a?.b || c",
                                    });
                                }
                            }
                        });
                    });
                }
            },
        };
    },
};