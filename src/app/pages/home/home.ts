import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TEAM } from '../../data/team';
import { Leaf } from '../../layout/leaf';
import { Topic, TopicCarousel } from './topic-carousel';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Leaf, TopicCarousel],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly team = TEAM;

  protected readonly topics: Topic[] = [
    {
      title: 'Parliamentary Debates',
      image: 'images/parliament.jpg',
      body: 'Historical parliamentary debates, revisited with context.',
    },
    {
      title: 'Landmark Cases',
      image: 'images/law.jpg',
      body: 'Celebrated cases which added a new dimension to Indian jurisprudence.',
    },
    {
      title: 'Science & Tech',
      image: 'images/science.jpg',
      body: 'The latest in science and technology.',
    },
    {
      title: 'Travel & Tourism',
      image: 'images/travel.jpg',
      body: 'Destinations, journeys and the stories behind them.',
    },
    {
      title: 'Food & Recipes',
      image: 'images/food.jpg',
      body: 'Food recipes worth passing on.',
    },
    {
      title: 'Fitness & Fashion',
      image: 'images/fitness.jpg',
      body: 'Fitness and fashion tips for an ‘informed and good’ living.',
    },
  ];

  protected readonly specials = [
    {
      tag: 'Katha',
      image: 'images/katha.jpg',
      body: 'Strives to see the rich Indian mythological texts and spiritual tradition in a new light.',
    },
    {
      tag: 'The Talk',
      image: 'images/talk.jpg',
      body: 'Our podcast focuses the arc lights on those who may not be celebrities but deserve to be celebrated.',
    },
    {
      tag: 'Your Corner',
      image: 'images/corner.jpg',
      body: 'Invites you to join in and share your thoughts.',
    },
  ];
}
