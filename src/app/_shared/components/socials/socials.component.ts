import { Component, Input } from '@angular/core';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { Social } from '../../interfaces/social';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent {

  @Input() socials!: Social[];

  constructor() { }

  toLower(social: Social): IconName {
    if (social.name.toLowerCase() == 'email') {
      return 'envelope';
    }
    return social.name.toLowerCase() as IconName;
  }
}
