const CURRENT_VERSION = '2.1.0';
const STORAGE_VERSION_KEY = 'app_storage_version';
console.log('StorageService loaded');

export default {
  checkAndUpdateStorageVersion() {
    const savedVersion = localStorage.getItem(STORAGE_VERSION_KEY);
    console.log('Checking storage version...');

    if (savedVersion !== CURRENT_VERSION) {
      this.clearOldCommonContent();
      localStorage.setItem(STORAGE_VERSION_KEY, CURRENT_VERSION);
    }
  },

  clearOldCommonContent() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.includes('commonContent')) {
        console.log('Removing:', key);
        localStorage.removeItem(key);
        i--; // adjust index after removal
      }
    }
  },

  // Optional helper to manually set version if needed elsewhere
  setVersion(version) {
    localStorage.setItem(STORAGE_VERSION_KEY, version);
  },

  getVersion() {
    return localStorage.getItem(STORAGE_VERSION_KEY);
  }
};
