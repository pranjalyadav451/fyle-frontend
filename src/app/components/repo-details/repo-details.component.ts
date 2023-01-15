import { Component, Input, OnInit } from "@angular/core";
import { RepoLanguageDetailsService } from "src/app/services/repo-language-details.service";
import { HttpRequestStatus, Repository } from "src/utils/types";

@Component({
  selector: "app-repo-details",
  templateUrl: "./repo-details.component.html",
  styleUrls: ["./repo-details.component.css"],
})
export class RepoDetailsComponent {
  @Input() repo = {} as Repository;
  @Input() userName = "";
  errorMessage = "";

  repoLanguages: string[] = [];

  repoLangStatus: HttpRequestStatus = "none";

  constructor(private repoLang: RepoLanguageDetailsService) {}

  ngOnInit(): void {
    this.repoLangStatus = "loading";
    this.repoLang.getLanguagesForRepo(this.userName, this.repo.name).subscribe({
      next: (data: any) => {
        this.repoLangStatus = "success";
        this.repoLanguages = data.langs;
      },
      error: (error) => {
        this.repoLangStatus = "error";
        this.errorMessage = error.message;
      },
    });
  }
}
