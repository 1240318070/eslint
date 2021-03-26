# setData时，对传入参数进行有无可选链用法判断 (optional-chaining-check)

Please describe the origin of the rule here.


## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```js
function refreshData(data) {
    this.setData({
        a: d?.c || e
    })
}
refreshData = (data) => {
    this.setData({
        a: d?.c || e
    })
}
```

Examples of **correct** code for this rule:

```js
function refreshData(data) {
    this.setData({
        d: b?.c
    });
}
refreshData = (data) => {
    this.setData({
        d: b?.c
    });
}
```

### Options

If there are any options, describe them here. Otherwise, delete this section.

## When Not To Use It

Give a short description of when it would be appropriate to turn off this rule.

## Further Reading

If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.
