import { Component, signal } from '@angular/core';
import { CONTACT } from '../../data/site';
import { Leaf } from '../../layout/leaf';

@Component({
  selector: 'app-contact',
  imports: [Leaf],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly contact = CONTACT;
  protected readonly hasDetails =
    !!(CONTACT.email || CONTACT.phone || CONTACT.address) || CONTACT.socials.length > 0;
  protected readonly sent = signal(false);
  protected readonly topics = ['Your Corner', 'The Talk', 'Katha', 'General'];

  protected submit(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    if (!form.reportValidity()) return;
    // TODO: connect to a backend / form service. For now the message stays in the browser.
    this.sent.set(true);
    form.reset();
  }
}
