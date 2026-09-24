import { Component } from '@angular/core';

/** Charchalive logo mark (public/images/logo.png) with a theme-aware wordmark. */
@Component({
  selector: 'app-logo',
  template: `
    <img src="images/logo.png" alt="" width="40" height="40" />
    <span class="word">Charcha<b>live</b></span>
  `,
  styles: `
    :host {
      display: inline-flex;
      align-items: center;
      gap: 10px;
    }
    img {
      border-radius: 50%;
    }
    .word {
      font: 700 1.3rem/1 var(--font-display);
      letter-spacing: -0.01em;
      color: var(--text);
    }
    b {
      color: var(--accent-ink);
      font-weight: 600;
    }
  `,
})
export class Logo {}
