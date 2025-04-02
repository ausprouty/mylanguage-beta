import StorageService from 'src/services/StorageService';

export default async () => {
  console.log('[boot] Running storage check...');
  StorageService.checkAndUpdateStorageVersion();
};
