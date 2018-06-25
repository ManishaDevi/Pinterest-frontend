import { SearchPage } from './../search/search';
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { UserPage } from '../user/user';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = AboutPage;
  tab4Root=UserPage;

  constructor() {

  }
}
