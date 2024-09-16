export const formatViews = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'; // For million (e.g., 11.8M)
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'; // For thousand (e.g., 11.8K)
  } else {
    return num.toString(); // For less than 1000
  }
};

export const formatDuration = (duration) => {
  if (!duration) return "0:00";

  if (duration === "P0D")
    return "Live";

  const durationRegex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
  const matches = duration.match(durationRegex);

  if (!matches) {
    console.error("Invalid duration format:", duration);
    return "0:00";  // Return a fallback value
  }

  const hours = parseInt(matches[1] || 0);
  const minutes = parseInt(matches[2] || 0);
  const seconds = parseInt(matches[3] || 0);

  const formattedTime = [
    hours ? hours.toString() : null,
    minutes < 10 && hours ? `0${minutes}` : minutes.toString(),
    seconds < 10 ? `0${seconds}` : seconds.toString(),
  ].filter(Boolean).join(":");

  return formattedTime;
};