import {Component, ElementRef} from '@angular/core';
import {SecurityService} from './security/service/security.service';
import {ModalService} from './shared/service/modal.service';
import {SettingsComponent} from './settings/settings/settings.component';
import {UrlUtilities} from './url-utilities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  shouldProtect = this.securityService.shouldProtect();
  securityEnabled = this.securityService.securityEnabled();
  baseApiUrl = UrlUtilities.calculateBaseApiUrl();

  constructor(
    private securityService: SecurityService,
    private modalService: ModalService,
    public elementRef: ElementRef
  ) {}

  openSettings(): void {
    this.modalService.show(SettingsComponent);
  }
}
