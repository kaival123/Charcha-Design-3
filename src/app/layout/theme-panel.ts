import { Component, inject, signal } from '@angular/core';
import { ThemeMode, ThemeStore } from '../core/theme';

@Component({
  selector: 'app-theme-panel',
  host: { '(document:keydown.escape)': 'open.set(false)' },
  template: `
    <button
      class="trigger"
      type="button"
      (click)="open.set(!open())"
      [attr.aria-expanded]="open()"
      aria-controls="theme-panel"
    >
      <span class="dots" aria-hidden="true">
        <i style="background: var(--brand)"></i><i style="background: var(--accent)"></i>
      </span>
      Theme
    </button>

    @if (open()) {
      <div class="scrim" (click)="open.set(false)"></div>
      <section id="theme-panel" class="panel card" role="dialog" aria-label="Theme settings">
        <header>
          <h2>Appearance</h2>
          <button class="close" type="button" (click)="open.set(false)" aria-label="Close">×</button>
        </header>

        <p class="label">Mode</p>
        <div class="segmented" role="radiogroup" aria-label="Colour mode">
          @for (m of modes; track m.id) {
            <button
              type="button"
              role="radio"
              [attr.aria-checked]="theme.mode() === m.id"
              (click)="setMode(m.id)"
            >
              {{ m.label }}
            </button>
          }
        </div>

        <p class="label">Themes</p>
        <div class="presets">
          @for (p of theme.presets; track p.id) {
            <button
              type="button"
              class="preset"
              [class.active]="theme.activePreset() === p.id"
              [attr.aria-pressed]="theme.activePreset() === p.id"
              (click)="theme.applyPreset(p)"
            >
              <span class="swatch" [style.background]="p.paper" aria-hidden="true">
                <i [style.background]="p.primary"></i><i [style.background]="p.accent"></i>
              </span>
              <span class="meta">
                <strong>{{ p.name }}</strong>
                <small>{{ p.description }}</small>
              </span>
            </button>
          }
        </div>

        <p class="label">
          Custom
          @if (theme.activePreset() === 'custom') {
            <em>· active</em>
          }
        </p>
        <div class="custom">
          <label>
            <input type="color" [value]="theme.primary()" (input)="theme.primary.set(value($event))" />
            Primary <code>{{ theme.primary() }}</code>
          </label>
          <label>
            <input type="color" [value]="theme.accent()" (input)="theme.accent.set(value($event))" />
            Accent <code>{{ theme.accent() }}</code>
          </label>
        </div>

        <button class="btn ghost reset" type="button" (click)="theme.reset()">Reset to brand</button>
      </section>
    }
  `,
  styleUrl: './theme-panel.scss',
})
export class ThemePanel {
  protected readonly theme = inject(ThemeStore);
  protected readonly open = signal(false);
  protected readonly modes: { id: ThemeMode; label: string }[] = [
    { id: 'light', label: 'Light' },
    { id: 'dark', label: 'Dark' },
    { id: 'system', label: 'Auto' },
  ];

  protected setMode(mode: ThemeMode): void {
    this.theme.mode.set(mode);
  }

  protected value(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
