import { Component, OnInit, inject } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material/paginator';

import { Message, User } from 'src/app/components/auth/user.model';


import { AccountSignalsService } from 'src/app/signals/account-signals.service';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss'],
    imports: [MatPaginator]
})
export class MessagesComponent implements OnInit {
  accountSignal = inject(AccountSignalsService);
  user!: User;

  gesendeteNachrichten: Message[] = [];
  empfangeNachrichten: Message[] = [];

  empfangeneNachrichtenPageSizeOptions = [1, 5, 10, 25];
  gesendeteNachrichtenPageSizeOptions = [1, 5, 10, 25];

  constructor() {}

  ngOnInit(): void {
    this.accountSignal.pageSizeGesendeteNachrichten.set(10);
    this.accountSignal.currentPageGesendeteNachrichten.set(1);

    this.accountSignal.pageSizeEmpfangeneNachrichten.set(10);
    this.accountSignal.currentPageEmpfangeneNachrichten.set(1);
  }

  onChangeGesendeteNachrichten(pageData: PageEvent) {
    this.accountSignal.pageSizeGesendeteNachrichten.set(pageData.pageSize);
    this.accountSignal.currentPageGesendeteNachrichten.set(
      pageData.pageIndex + 1
    );
  }

  onChangeEmpfangeneNachrichten(pageData: PageEvent) {
    this.accountSignal.pageSizeEmpfangeneNachrichten.set(pageData.pageSize);
    this.accountSignal.currentPageEmpfangeneNachrichten.set(
      pageData.pageIndex + 1
    );
  }
}
