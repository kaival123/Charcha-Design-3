import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';

export interface Topic {
  title: string;
  image: string;
  body: string;
}

const AUTOPLAY_MS = 5000;

/**
 * Scroll-snap carousel for the "What we cover" topics.
 * Swipe / trackpad / arrow keys scroll natively; buttons and dots jump by card.
 * Autoplays unless the user prefers reduced motion, and pauses on hover or focus.
 */
@Component({
  selector: 'app-topic-carousel',
  host: {
    '(pointerenter)': 'paused.set(true)',
    '(pointerleave)': 'paused.set(false)',
    '(focusin)': 'paused.set(true)',
    '(focusout)': 'paused.set(false)',
  },
  template: `
    <div class="head">
      <ng-content />
      <div class="arrows">
        <button type="button" (click)="step(-1)" aria-label="Previous topics">‹</button>
        <button type="button" (click)="step(1)" aria-label="Next topics">›</button>
      </div>
    </div>

    <div
      #track
      class="track"
      role="region"
      aria-roledescription="carousel"
      aria-label="Topics we cover"
      tabindex="0"
      (scroll)="onScroll()"
    >
      @for (t of items(); track t.title; let i = $index) {
        <article
          class="tile"
          aria-roledescription="slide"
          [attr.aria-label]="i + 1 + ' of ' + items().length"
        >
          <img [src]="t.image" alt="" loading="lazy" draggable="false" />
          <div class="tile-body">
            <h3><b>0{{ i + 1 }}.</b>{{ t.title }}</h3>
            <p>{{ t.body }}</p>
          </div>
        </article>
      }
    </div>

    <div class="dots">
      @for (d of dots(); track d) {
        <button
          type="button"
          [class.on]="d === active()"
          [attr.aria-current]="d === active() ? 'true' : null"
          [attr.aria-label]="'Go to slide ' + (d + 1)"
          (click)="goTo(d)"
        ></button>
      }
    </div>
  `,
  styleUrl: './topic-carousel.scss',
})
export class TopicCarousel {
  readonly items = input.required<Topic[]>();

  private readonly track = viewChild.required<ElementRef<HTMLElement>>('track');
  protected readonly active = signal(0);
  protected readonly paused = signal(false);
  private readonly perView = signal(3);

  /** One dot per reachable start position (the last cards can't be the leftmost one). */
  protected readonly dots = computed(() => {
    const count = Math.max(1, this.items().length - this.perView() + 1);
    return Array.from({ length: count }, (_, i) => i);
  });

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      this.onScroll();
      const observer = new ResizeObserver(() => this.onScroll());
      observer.observe(this.track().nativeElement);

      const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
      const timer = reduceMotion
        ? undefined
        : setInterval(() => {
            if (!this.paused() && !document.hidden) this.step(1);
          }, AUTOPLAY_MS);

      destroyRef.onDestroy(() => {
        observer.disconnect();
        clearInterval(timer);
      });
    });
  }

  /** Move by one card, wrapping at either end. */
  protected step(delta: number): void {
    const last = this.dots().length - 1;
    const next = this.active() + delta;
    this.goTo(next > last ? 0 : next < 0 ? last : next);
  }

  protected goTo(index: number): void {
    this.track().nativeElement.scrollTo({ left: index * this.cardStep(), behavior: 'smooth' });
  }

  /** Re-measures cards per view (layout changes with breakpoints) and syncs the active dot. */
  protected onScroll(): void {
    const cardStep = this.cardStep();
    if (!cardStep) return;
    const el = this.track().nativeElement;
    this.perView.set(Math.max(1, Math.round(el.clientWidth / cardStep)));
    const index = Math.round(el.scrollLeft / cardStep);
    this.active.set(Math.min(index, this.dots().length - 1));
  }

  /** Distance between the starts of two neighbouring cards (card width + gap). */
  private cardStep(): number {
    const cards = this.track().nativeElement.children;
    if (cards.length < 2) return 0;
    return (cards[1] as HTMLElement).offsetLeft - (cards[0] as HTMLElement).offsetLeft;
  }
}
