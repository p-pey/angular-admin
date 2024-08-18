import { Component } from "@angular/core";



@Component({
       selector: 'app-sidebar',
       templateUrl: './sidebar.component.html',
       styleUrl: './sidebar.component.scss',
       standalone: true,
})
export class SidebarComponent {
        activeItem: string | null = null;

       sidebarItemClickHandler(event: MouseEvent, target: string) {
              event.stopPropagation();
              this.activeItem = target;
       }
}