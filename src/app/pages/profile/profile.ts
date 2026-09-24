import { Component, computed, effect, inject, input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { TEAM } from '../../data/team';
import { Leaf } from '../../layout/leaf';

@Component({
  selector: 'app-profile',
  imports: [RouterLink, Leaf],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class ProfilePage {
  private readonly router = inject(Router);
  private readonly title = inject(Title);

  /** Bound from the `:slug` route param. */
  readonly slug = input.required<string>();

  protected readonly index = computed(() => TEAM.findIndex((p) => p.slug === this.slug()));
  protected readonly person = computed(() => TEAM[this.index()]);
  protected readonly next = computed(() => TEAM[(this.index() + 1) % TEAM.length]);

  constructor() {
    effect(() => {
      const person = this.person();
      if (person) {
        this.title.setTitle(`${person.name} — Charchalive`);
      } else {
        this.router.navigate(['/team']);
      }
    });
  }
}
