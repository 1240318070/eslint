# eslint-plugin-null

setData时，对传入参数进行有无可选链用法判断

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-null`:

```
$ npm install eslint-plugin-optional-chaining-check --save-dev
```


## Usage

Add `optional-chaining-check` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "optional-chaining-check"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "optional-chaining-check/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





