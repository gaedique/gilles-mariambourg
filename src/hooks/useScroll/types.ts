export interface ScrollOptions {
  /**
   * Offset at which to consider the page "scrolled"
   * @default 50
   */
  scrollThreshold?: number;

  /**
   * Element to use for height calculation in progress
   * @default window.innerHeight
   */
  heightReference?: number | (() => number);
}

export interface ScrollState {
  /**
   * Whether the page has been scrolled beyond the threshold
   */
  isScrolled: boolean;

  /**
   * Scroll progress from 0 to 1 (representing % of height scrolled)
   */
  scrollProgress: number;

  /**
   * Current scroll position in pixels
   */
  scrollPosition: number;
}
