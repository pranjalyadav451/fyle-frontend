import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Component, EventEmitter, Output } from "@angular/core";
import { AppService } from "src/app/services/app.service";
import { HttpRequestStatus } from "src/utils/types";
import { User } from "src/utils/types";
@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"],
})
export class UserDetailsComponent {
  userDetails = {} as User;
  userDetailsStatus = "none" as HttpRequestStatus;
  errorMessage = "";

  @Output() afterGettingUserRepos = new EventEmitter<number>();

  constructor(private appService: AppService) {}
  getUserDetails(userName: string) {
    if (userName === "") return;
    this.userDetailsStatus = "loading";
    this.userDetails = {} as User;
    this.errorMessage = "";

    this.appService.getUser(userName).subscribe({
      next: (res: any) => {
        this.userDetails = res.data as User;
        this.afterGettingUserRepos.emit(this.userDetails.public_repos);
        this.userDetailsStatus = "success";
      },
      error: (err: HttpErrorResponse) => {
        this.userDetailsStatus = "error";
        this.errorMessage = err.error.message;
      },
    });
  }
}
