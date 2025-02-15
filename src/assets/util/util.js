export function convertMinutes(minutes){
    const hours=Math.floor(minutes/60);
    const remainmin=minutes%60;
    return `${hours}h ${remainmin}m`
}