/**
 * 存储,
 * @type {{set: (function(*=, *=)), get: (function(*=)), setJSON: (function(*=, *=)), getJSON: (function(*=))}}
 */
const Storage = {
  clear () {
    localStorage.clear ();
  },
  /**
   * 存储一个value为String的键值对
   * @param key
   * @param value
   */
  set (key, value) {
    localStorage.setItem (key, value);
  },

  /**
   * 取一个value为String的对象
   * @param key
   */
  get (key) {
    return localStorage.getItem (key);
  },

  /**
   * 删除一个
   * @param key
   */
  remove (key) {
    return localStorage.removeItem (key);
  },

  /**
   * 删除会话信息
   */
  removeSession () {
    this.remove ('token');
    this.remove ('userInfo');
  },

  /**
   * 存储一个value为JSON的对象
   * @param key
   * @param value
   */
  setJSON (key, value) {
    localStorage.setItem (key, JSON.stringify (value));
  },

  /**
   * 取一个value为JSON的对象
   * @param key
   * @returns {null}
   */
  getJSON (key) {
    const value = localStorage.getItem (key);
    if (value) {
      return JSON.parse (value);
    }
    return null;
  },
};

export default Storage;
