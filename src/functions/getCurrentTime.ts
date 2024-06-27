export default function getCurrentTime(offset: number) {
    const now = new Date();
    const hours = String((now.getUTCHours() + offset + 24) % 24).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }