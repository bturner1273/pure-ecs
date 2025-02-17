export default interface Preloadable {
  preload?: () => Promise<void>;
}
