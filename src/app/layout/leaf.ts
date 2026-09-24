import { Component } from '@angular/core';

/** Decorative leafy sprig (Option 3 look). Tinted with the brand colour; purely ornamental. */
@Component({
  selector: 'app-leaf',
  host: { 'aria-hidden': 'true' },
  template: `
    <svg viewBox="0 0 160 260" fill="none">
      <path d="M92 258C88 190 80 120 60 8" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
      <g fill="currentColor">
        <path d="M86 214c-30-4-52-22-58-48 28 2 50 18 58 48z" opacity=".55" />
        <path d="M84 196c24-14 50-14 70-2-20 16-46 18-70 2z" opacity=".4" />
        <path d="M76 150c-28-8-46-28-48-54 26 6 44 26 48 54z" opacity=".6" />
        <path d="M74 132c20-18 46-24 68-16-16 20-42 26-68 16z" opacity=".45" />
        <path d="M66 86C44 74 34 52 38 28c20 12 30 34 28 58z" opacity=".55" />
        <path d="M64 70c14-20 34-30 56-28-10 22-32 32-56 28z" opacity=".4" />
      </g>
    </svg>
  `,
  styles: `
    :host {
      position: absolute;
      display: block;
      width: var(--leaf-size, 140px);
      color: color-mix(in oklab, var(--brand) 55%, transparent);
      pointer-events: none;
    }
    svg {
      display: block;
      width: 100%;
      height: auto;
    }
  `,
})
export class Leaf {}
