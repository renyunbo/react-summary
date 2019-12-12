const DB_NAME = 'job_batch'
const DB_VERSION = 1
const OB_NAMES = {
  UseKeyPath: 'job',
}
export const  openindexedDB =  () => {
    // The call to the open() function returns an IDBOpenDBRequest object with a result (success) or error value that you handle as an event.
    return new Promise((resolve, reject) => {
      /**
       * NOTE:
       * 1. 第一次打开可能会提示用户获取 indexedDB 的权限
       * 2. 浏览器隐身模式不会存在本地，只会存储在内存中
       */
      const request = window.indexedDB.open(DB_NAME, DB_VERSION)
      request.onerror = function (event) {
        // Do something with request.errorCode!
        console.log('open request failed', event)
        console.error(event.target.error)
      }
      request.onsuccess = function (event) {
        // Do something with request.result!
        // console.log('open request success', event)
        var db = event.target.result
        db.onerror = function (e) {
          console.error('Database error: ', e.target.error)
          reject(e.target.error)
        }
        db.onclose = e => {
          console.error('Database close:', e.target.error)
          reject(e.target.error)
        }
        resolve(db)
      }
      request.onupgradeneeded = function (event) {
        /**
         * NOTE:
         * 1. 创建新的 objectStore
         * 2. 删除旧的不需要的 objectStore
         * 3. 如果需要更新已有 objectStore 的结构，需要先删除原有的 objectStore ，然后重新创建
         */
        // The IDBDatabase interface
        console.log('onupgradeneeded', event)
        var db = event.target.result
        // Create an objectStore for this database
        if(!db.objectStoreNames.contains('job')){
          obUseKeypath(db)
        }
        /**
         * NOTE:
         * transaction
         * 三个事件：
         * 1. error
         * 2. abort
         * 3. complete
         * 两个方法：
         * 1. abort
         * Rolls back all the changes to objects in the database associated with this transaction. If this transaction has been aborted or completed, then this method throws an error event.
         * 2. objectStore
         * Returns an IDBObjectStore object representing an object store that is part of the scope of this transaction.
         */
        db.transaction.oncomplete = function (e) {
          console.log('obj create success', e)
        }
      }
    })
  }
  function obUseKeypath (db) {
    const objectStore = db.createObjectStore(OB_NAMES.UseKeyPath, {
      keyPath: 'id'
    })
  }

  export const  addData =  (docs, objName) => {
    if (!(docs && docs.length)) {
      throw new Error('docs must be a array!')
    }
    return openindexedDB().then(db => {
      const tx = db.transaction([objName], 'readwrite')
      tx.oncomplete = e => {
        console.log('tx:addData onsuccess', e)
        return Promise.resolve(docs)
      }
      tx.onerror = e => {
        e.stopPropagation()
        console.error('tx:addData onerror', e.target.error)
        return Promise.reject(e.target.error)
      }
      tx.onabort = e => {
        console.warn('tx:addData abort', e.target)
        return Promise.reject(e.target.error)
      }
      const obj = tx.objectStore(objName)
      docs.forEach(doc => {
        const req = obj.add(doc)
        /**
         * NOTE:
         * request
         * 两个事件：
         * 1. success
         * 2. error
         */
        // req.onsuccess = e => console.log('obj:addData onsuccess', e.target)
        req.onerror = e => {
          console.error('obj:addData onerror', e.target.error)
        }
      })
    })
  }
//获取indexDB所有数据
export const getAllByCursor =  (objName, cb) => {
    return openindexedDB().then(db => {
      const arr = []
      const tx = db.transaction([objName])
      const obj = tx.objectStore(objName)
      return new Promise(resolve => {
        obj.openCursor().onsuccess = e => {
          const cursor = e.target.result
          if (cursor) {
            arr.push(cursor.value)
            cb && cb(cursor)
            cursor.continue()
          } else {
            return resolve(arr)
          }
        }
      })
    })
  }
//删除indexDB所有数据
  export const delAllByCursor =  (objName) => {
    return openindexedDB().then(db=>{
      const tx = db.transaction([objName],'readwrite')
      const obj = tx.objectStore(objName)
      obj.clear()
    })
  }
  //删除indexDB删除某一条数据数据
  export const delOne =  (objName,val) => {
    return openindexedDB().then(db=>{
      const tx = db.transaction([objName],'readwrite')
      const obj = tx.objectStore(objName)
      obj.delete(val)
    })
  }