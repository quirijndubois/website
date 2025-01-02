function mapRange(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function mapRangeClamp(value, low1, high1, low2, high2) {
    return clamp(mapRange(value, low1, high1, low2, high2), low2, high2);
}