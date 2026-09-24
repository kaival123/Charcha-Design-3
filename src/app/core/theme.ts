import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemePreset {
  id: string;
  name: string;
  description: string;
  /** Buttons, links, headline highlights. */
  primary: string;
  /** Secondary highlights (logo "live", timeline dates). */
  accent: string;
  /** Light-mode page background. Custom colours fall back to a tint derived in CSS. */
  paper: string;
}

/** Curated palettes offered in the theme panel. Peacock is the default (see DEFAULT below). */
export const THEME_PRESETS: ThemePreset[] = [
  {
    id: 'peacock',
    name: 'Peacock',
    description: 'Teal & ink',
    primary: '#0f6e6a',
    accent: '#1f2a44',
    paper: '#f4f7f6',
  },
  {
    id: 'navy',
    name: 'Navy & Gold',
    description: 'Corporate classic',
    primary: '#1f3a5f',
    accent: '#a8833f',
    paper: '#f7f5f0',
  },
  {
    id: 'editorial',
    name: 'Editorial',
    description: 'Newsprint ink & red',
    primary: '#1c1c1c',
    accent: '#b3261e',
    paper: '#faf8f3',
  },
  {
    id: 'slate',
    name: 'Slate',
    description: 'Modern neutral',
    primary: '#334155',
    accent: '#2563eb',
    paper: '#f7f8fa',
  },
  {
    id: 'forest',
    name: 'Forest',
    description: 'Calm & grounded',
    primary: '#2f5d4a',
    accent: '#b07a3b',
    paper: '#f5f5ef',
  },
  {
    id: 'burgundy',
    name: 'Burgundy',
    description: 'Rich & formal',
    primary: '#7b2233',
    accent: '#2e3a45',
    paper: '#faf6f5',
  },
];

interface StoredTheme {
  primary: string;
  accent: string;
  mode: ThemeMode;
}

const STORAGE_KEY = 'charchalive.theme';
const DEFAULT = THEME_PRESETS.find((p) => p.id === 'peacock')!;

@Injectable({ providedIn: 'root' })
export class ThemeStore {
  private readonly root = inject(DOCUMENT).documentElement;

  readonly presets = THEME_PRESETS;
  readonly primary = signal(DEFAULT.primary);
  readonly accent = signal(DEFAULT.accent);
  readonly mode = signal<ThemeMode>('system');

  /** The preset matching the current colours, if any. */
  private readonly preset = computed(() =>
    this.presets.find((p) => p.primary === this.primary() && p.accent === this.accent()),
  );

  /** Id of the preset matching the current colours, or 'custom'. */
  readonly activePreset = computed(() => this.preset()?.id ?? 'custom');

  constructor() {
    const saved = readStorage();
    if (saved) {
      this.primary.set(saved.primary);
      this.accent.set(saved.accent);
      this.mode.set(saved.mode);
    }

    effect(() => {
      const primary = this.primary();
      const accent = this.accent();
      const mode = this.mode();
      const paper = this.preset()?.paper;

      const style = this.root.style;
      style.setProperty('--brand', primary);
      style.setProperty('--accent', accent);
      style.setProperty('--on-brand', readableOn(primary));
      style.setProperty('--on-accent', readableOn(accent));
      if (paper) {
        style.setProperty('--paper', paper);
      } else {
        style.removeProperty('--paper');
      }
      if (mode === 'system') {
        delete this.root.dataset['theme'];
      } else {
        this.root.dataset['theme'] = mode;
      }
      writeStorage({ primary, accent, mode });
    });
  }

  applyPreset(preset: ThemePreset): void {
    this.primary.set(preset.primary);
    this.accent.set(preset.accent);
  }

  reset(): void {
    this.applyPreset(DEFAULT);
    this.mode.set('system');
  }
}

/** Black or white, whichever reads better on the given background. */
function readableOn(hex: string): string {
  const n = parseInt(hex.slice(1), 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 0.4 ? '#161310' : '#ffffff';
}

function readStorage(): StoredTheme | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const value = JSON.parse(raw) as Partial<StoredTheme>;
    const hex = /^#[0-9a-f]{6}$/i;
    if (!hex.test(value.primary ?? '') || !hex.test(value.accent ?? '')) return null;
    const mode = ['light', 'dark', 'system'].includes(value.mode ?? '') ? value.mode! : 'system';
    return { primary: value.primary!, accent: value.accent!, mode };
  } catch {
    return null;
  }
}

function writeStorage(value: StoredTheme): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    // Storage unavailable (private mode etc.) — theme still applies for this visit.
  }
}
