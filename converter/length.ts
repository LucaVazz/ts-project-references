const FeetPerMeter = 3.28084;

function metersToFeet(m: number) {
    return m / FeetPerMeter;
}

function feetToMeters(f: number) {
    return f * FeetPerMeter;
}

// Takes a number like 14 and returns a string like `1' 2"`
function formatInches(i: number) {
    if (i < 12) {
        return `${i}"`;
    }
    const ft = Math.floor(i / 12);
    i = i - ft * 12;
    return `${ft}' ${leftPad(i.toString(), 2)}`;
}
