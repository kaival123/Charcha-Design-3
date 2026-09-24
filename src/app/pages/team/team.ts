import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TEAM } from '../../data/team';
import { Leaf } from '../../layout/leaf';

@Component({
  selector: 'app-team',
  imports: [RouterLink, Leaf],
  template: `
    <section class="hero">
      <app-leaf class="leaf-l" />
      <div class="wrap hero-grid">
        <div>
          <span class="kicker">Our team</span>
          <h1>The people behind the <em>conversation</em>.</h1>
          <p class="lead">
            Decades of experience across journalism, research, communications and public policy —
            brought together to build a thoughtful home for curated content.
          </p>
        </div>
        <figure class="frame">
          <img src="images/team-hero.jpg" alt="" />
        </figure>
      </div>
    </section>

    <section class="section">
      <div class="wrap grid">
        @for (p of team; track p.slug) {
          <a class="tile" [routerLink]="p.slug">
            <img [src]="p.photo" [alt]="p.name" loading="lazy" />
            <div class="tile-body">
              <h3>{{ p.name }}</h3>
              <span class="role">{{ p.role }}</span>
              <p>
                <b>{{ p.facts[0].value }}</b> {{ p.facts[0].label }}
              </p>
              <span class="more">Read full profile →</span>
            </div>
          </a>
        }
      </div>
    </section>
  `,
  styles: `
    .leaf-l {
      left: -34px;
      top: 40px;
      --leaf-size: 130px;
      transform: rotate(18deg);
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 22px;
    }
    .tile > img {
      aspect-ratio: 1;
      object-position: top;
    }
    .tile h3 {
      font-size: 1.35rem;
    }
    .role {
      display: block;
      margin-bottom: 10px;
      color: var(--brand-ink);
      font-size: 0.85rem;
      font-weight: 600;
    }
    b {
      color: var(--text);
    }
    .more {
      display: inline-block;
      margin-top: 14px;
      font-size: 0.88rem;
      font-weight: 600;
      color: var(--brand-ink);
    }
    @media (max-width: 900px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (max-width: 600px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class Team {
  protected readonly team = TEAM;
}
