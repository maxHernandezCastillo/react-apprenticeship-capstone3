
function Storage(key, initial) {
  this.key = key;
  this.get = function get() {
    try {
      const rawValue = window.localStorage.getItem(this.key);
      return JSON.parse(rawValue);
    } catch (error) {
      console.error(`Error parsing storage item "${key}".`);
      return null;
    }
  };
  this.set = function set(value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  if (this.get() === null && initial !== null)
    this.set(initial);
}


const NotesStorage = new Storage('NOTES_STORAGE_KEY', { notes: [] });
const AuthStorage = new Storage('AUTHENTICATION_STORAGE_KEY', { authenticated: false });

export { AuthStorage, NotesStorage };