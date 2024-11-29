export default function getUTCFormatted(utcOffset) {
	const leftPart = utcOffset.substring(0, 3);
	const rightPart = utcOffset.substring(3);
	return `${leftPart}:${rightPart}`;
}

console.assert(getUTCFormatted('-0500') === '-05:00');
console.assert(getUTCFormatted('+1200') === '+12:00');
