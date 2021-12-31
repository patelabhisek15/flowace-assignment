import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isActive : any;

  onMakeActive(ele : string) {
    this.isActive = ele;
  }

  onSelect() {
    document.getElementById("myDropdown")?.classList.toggle("open");
  }

  onTimeSheet() {
    document.getElementById("myDropdown1")?.classList.toggle("open");
    document.getElementById("up-time")?.classList.toggle("up-visible");
    document.getElementById("down-time")?.classList.toggle("down-hide");
  }
  onInsights() {
    document.getElementById("myDropdown2")?.classList.toggle("open");
    document.getElementById("up-data")?.classList.toggle("up-visible");
    document.getElementById("down-data")?.classList.toggle("down-hide");
  }
  
  onAdminActive() {
    document.getElementById("myDropdown3")?.classList.toggle("open");
    document.getElementById("up-admin")?.classList.toggle("up-visible");
    document.getElementById("down-admin")?.classList.toggle("down-hide")
    document.getElementById("admin-filled")?.classList.toggle('admin-display');
    document.getElementById("admin-outline")?.classList.toggle('admin-hide');
  }

  onMoreActive(){
    document.getElementById("dropup")?.classList.toggle("open");
    document.getElementById("outline-more")?.classList.toggle("more-display");
    document.getElementById("none-more")?.classList.toggle("more-hide");
  }
}
