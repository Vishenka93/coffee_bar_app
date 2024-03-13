function GetCurrentDateStr() {
    const date = new Date();

    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
}

export default GetCurrentDateStr;
