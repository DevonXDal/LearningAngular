import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public isScreenSmall = false;

  users?: Observable<User[]>;
  isDarkTheme: boolean = false;
  shouldUseRightToLeft: boolean = false;

  @ViewChild(MatSidenav) sidenav: MatSidenav | undefined;

  constructor(
    private breakpointObserver: BreakpointObserver, 
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.breakpointObserver.observe(
      [
        `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`
      ]
    ).subscribe((state: BreakpointState) => {
      this.isScreenSmall = state.matches;
    })

    this.users = this.userService.users;
    this.userService.loadAll();

    this.router.events.subscribe(() => {
      if (this.isScreenSmall) {
        this.sidenav?.close();
      }
    })
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

  toggleDirection() {
    this.shouldUseRightToLeft = !this.shouldUseRightToLeft;
  }
}
