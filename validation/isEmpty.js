const isEmpty = value =>
    typeof value === undefined ||
    typeof value === null ||
    (typeof value === "object" && Object.keys(value).length === 0)
    (typeof value === "string" && value.trim().length === 0);


module.exports = isEmpty;