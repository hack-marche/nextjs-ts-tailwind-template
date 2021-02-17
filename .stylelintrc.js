module.exports ={
  extends: ["stylelint-config-recommended"],
  rules: {
    "at-rule-no-unknown": [ true, {
      "ignoreAtRules": [
        "tailwind",
        "extends"
      ]
    }],
    "block-no-empty": null,
    "unit-whitelist": ["px", "em", "rem", "s", "deg", "%"]
  }
}
