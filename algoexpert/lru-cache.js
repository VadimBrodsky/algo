const { it, describe } = require('../_utils/test.js');
const {
  DoublyLinkedList,
  Node,
} = require('./double-linked-list-construction.js');

// All methods are O(1) size and O(1) space
class LRUCache {
  constructor(maxSize = 1) {
    this.maxSize = maxSize;
    this.size = 0;
    this.cache = {};
    this.list = new DoublyLinkedList();
  }

  insert(key, val) {
    if (key in this.cache) {
      this.cache[key][key] = val;
      this.list.remove(this.cache[key]);
      this.list.setHead(this.cache[key]);
      return this.list.head;
    }

    let newNode = new Node({ [key]: val });
    this.cache[key] = newNode;
    this.list.setHead(newNode);
    this.size += 1;

    if (this.size > this.maxSize) {
      let [keyToRemove] = Object.keys(this.list.tail.value);
      delete this.cache[keyToRemove];
      this.list.remove(this.list.tail);
      this.size -= 1;
    }
  }

  get(key) {
    if (key in this.cache) {
      let node = this.cache[key];

      if (node === this.list.head) {
        return this.list.head.value[key];
      }

      this.list.remove(node);
      this.list.setHead(node);
      return node.value[key];
    }

    return null;
  }

  recent() {
    return this.list.head.value;
  }
}

describe('LRU Cache', () => {
  it('should create a LRU Cache object with the correct methods', (assert) => {
    let cache = new LRUCache(5);

    assert.equal(typeof cache.insert, 'function');
    assert.equal(typeof cache.get, 'function');
    assert.equal(typeof cache.recent, 'function');
  });

  it('should allow to insert new nodes to the list', (assert) => {
    let cache = new LRUCache(5);
    cache.insert('a', 1);
    cache.insert('b', 2);
    cache.insert('c', 3);

    assert.equal(cache.size, 3);
  });

  it('should allow to get a value at key', (assert) => {
    let cache = new LRUCache(5);
    cache.insert('a', 1);
    cache.insert('b', 2);
    cache.insert('c', 3);

    assert.equal(cache.get('b'), 2);
  });

  it('should return the most recent key / value', (assert) => {
    let cache = new LRUCache(5);
    cache.insert('a', 1);
    cache.insert('b', 2);
    cache.insert('c', 3);

    assert.deepEqual(cache.recent(), { c: 3 });
  });

  it('should make the key last accessed recent', (assert) => {
    let cache = new LRUCache(5);
    cache.insert('a', 1);
    cache.insert('b', 2);
    cache.insert('c', 3);

    assert.equal(cache.get('b'), 2);
    assert.deepEqual(cache.recent(), { b: 2 });
  });

  it('should evict the oldest member of the cache is going over size', (assert) => {
    let cache = new LRUCache(3);

    cache.insert('a', 1);
    assert.equal(cache.size, 1);

    cache.insert('b', 2);
    assert.equal(cache.size, 2);

    cache.insert('c', 3);
    assert.equal(cache.size, 3);

    cache.insert('d', 4);
    assert.equal(cache.size, 3);
    assert.equal(cache.get('a'), null);
  });
});
