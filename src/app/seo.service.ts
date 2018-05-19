import {Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta,
              private title: Title) {
  }

  generateTags(config) {
    // default values
    config = {
      title: 'Pied Piper',
      description: 'Welcome to the web you never knew you wanted',
      image: 'http://www.piedpiper.com/app/themes/pied-piper/dist/images/ppc-logo.svg',
      slug: '',
      ...config
    };

    this.meta.updateTag({name: 'twitter:card', content: 'summary'});
    this.meta.updateTag({name: 'twitter:site', content: '@piedpiper'});
    this.meta.updateTag({name: 'twitter:title', content: config.title});
    this.meta.updateTag({name: 'twitter:description', content: config.description});
    this.meta.updateTag({name: 'twitter:image', content: config.image});

    this.meta.updateTag({property: 'og:type', content: 'article'});
    this.meta.updateTag({property: 'og:site_name', content: 'Pied Piper'});
    this.meta.updateTag({property: 'og:title', content: config.title});
    this.meta.updateTag({property: 'og:description', content: config.description});
    this.meta.updateTag({property: 'og:image', content: config.image});
    this.meta.updateTag({property: 'og:url', content: `https://c394f1c7.ngrok.io/`});

    this.title.setTitle(config.title);
    this.meta.addTags([
      {name: 'description', content: config.description},
      {name: 'keywords', content: config.description},
    ]);
  }
}
