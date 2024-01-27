class IndexedDBStorage {
    private dbName = "reduxPersist";
    private storeName = "reduxStore";
  
    async setItem(key: IDBValidKey, value: any): Promise<void> {
      const db = await this.openDatabase();
      const tx = db.transaction([this.storeName], "readwrite");
      const store = tx.objectStore(this.storeName);
      store.put(value, key);
      return new Promise((resolve, reject) => {
        tx.oncomplete = () => resolve();
        tx.onerror = () => {
          if (tx.error) {
            reject(tx.error);
          }
        };
      });
    }
  
    async getItem(key: IDBValidKey): Promise<any | undefined> {
      const db = await this.openDatabase();
      const tx = db.transaction([this.storeName]);
      const store = tx.objectStore(this.storeName);
      const request = store.get(key);
      return request.result;
    }
  
    async removeItem(key: IDBValidKey): Promise<void> {
      const db = await this.openDatabase();
      const tx = db.transaction([this.storeName], "readwrite");
      const store = tx.objectStore(this.storeName);
      store.delete(key);
      return new Promise((resolve, reject) => {
        tx.oncomplete = () => resolve();
        tx.onerror = () => {
          if (tx.error) {
            reject(tx.error);
          }
        };
      });
    }
  
    async getAllKeys(): Promise<IDBValidKey[]> {
      const db = await this.openDatabase();
      const tx = db.transaction([this.storeName]);
      const store = tx.objectStore(this.storeName);
      const request = store.getAllKeys();
      return request.result;
    }
  
    private async openDatabase(): Promise<IDBDatabase> {
      return new Promise((resolve, reject) => {
        const request = indexedDB.open(this.dbName, 1);
        request.onupgradeneeded = (event) => {
          const db = (event.target as IDBOpenDBRequest).result;
          if (!db) {
            reject(new Error("Database failed to open"));
            return;
          }
          db.createObjectStore(this.storeName, { keyPath: "id" });
        };
        request.onsuccess = (event) => {
          const db = (event.target as IDBOpenDBRequest).result;
          if (!db) {
            reject(new Error("Database failed to open"));
            return;
          }
          resolve(db);
        };
        request.onerror = (event) => {
          const error = (event.target as IDBOpenDBRequest).error;
          if (error) {
            reject(error);
          } else {
            reject(new Error("Unknown error opening database"));
          }
        };
      });
    }
  }
  
  const indexedDBStorage = new IndexedDBStorage();
  export default indexedDBStorage;
  