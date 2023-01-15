import { Component, Input } from "@angular/core";
import { AppService } from "src/app/services/app.service";
import { DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_SIZE } from "src/utils/globals";
import { HttpRequestStatus, Repository } from "src/utils/types";

@Component({
  selector: "app-repo-list",
  templateUrl: "./repo-list.component.html",
  styleUrls: ["./repo-list.component.css"],
})
export class RepoListComponent {
  totalPages = 0;
  currentPage = DEFAULT_PAGE_NUMBER;
  pageSize = DEFAULT_PAGE_SIZE;
  userName = "";

  repoList = [] as Repository[];

  repoListStatus = "none" as HttpRequestStatus;

  constructor(private appService: AppService) {}

  getTotalRepos(repos: number) {
    this.totalPages = Math.ceil(repos / this.pageSize);
  }
  getUserName(userName: string) {
    this.userName = userName;
  }

  getRepoList(
    userName: string,
    pageSize: number = DEFAULT_PAGE_SIZE,
    pageNumber: number = DEFAULT_PAGE_NUMBER
  ) {
    if (userName === "") return;
    this.repoListStatus = "loading";
    this.appService.getRepoList(userName, this.pageSize, this.currentPage).subscribe({
      next: (res: any) => {
        this.repoList = res.result as Repository[];
        this.repoListStatus = "success";
      },
      error: (error) => {
        console.log(error);
        this.repoListStatus = "error";
        this.repoList = [];
      },
    });
  }

  pageChanged(page: number) {
    this.currentPage = page;
    this.getRepoList(this.userName, this.pageSize, this.currentPage);
  }
}
