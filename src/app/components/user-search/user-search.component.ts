import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-user-search",
  templateUrl: "./user-search.component.html",
})
export class UserSearchComponent {
  placeholder = "Search for a user";
  searchText = "angular";
  @Output() onSearch = new EventEmitter<string>();

  constructor() {}

  handleUserSearch() {
    this.onSearch.emit(this.searchText);
  }
}
