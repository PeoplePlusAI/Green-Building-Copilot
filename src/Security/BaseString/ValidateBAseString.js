export function isValidBase64(str) {
    try {
      return btoa(atob(str)) === str;
    } catch (e) {
      return false;
    }
  }