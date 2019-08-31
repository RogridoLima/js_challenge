const convertStringToData = (strData) => {
    const dt = strData.split("/");
    return new Date(dt[2], dt[1], dt[0]);
}

module.exports = convertStringToData;