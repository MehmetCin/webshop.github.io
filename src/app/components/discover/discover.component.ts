import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Organisation } from 'src/app/models/organisation.model';
import { OrganisationService } from 'src/app/services/organisationService.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css'],
  providers:[OrganisationService]
})
export class DiscoverComponent implements OnInit {
  organisations: Organisation[] = [];
  
  constructor(private organisationService: OrganisationService) {
  }

  ngOnInit(): void {
    this.organisationService.getOrganisation().subscribe(data => this.organisations = data);
  }
}
