import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BACKEND_URL } from "src/utils/globals";

@Injectable({
  providedIn: "root",
})
export class RepoLanguageDetailsService {
  constructor(private http: HttpClient) {}
  getLanguagesForRepo(userName: string, repoName: string) {
    return this.http.get(`${BACKEND_URL}/repos/${userName}/${repoName}/languages`);
  }
}
