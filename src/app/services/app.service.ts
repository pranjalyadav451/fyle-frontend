import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BACKEND_URL } from "src/utils/globals";

@Injectable({
  providedIn: "root",
})
export class AppService {
  constructor(private http: HttpClient) {}

  getUser(username: string) {
    return this.http.get(`${BACKEND_URL}/users/${username}`);
  }
  getRepoList(username: string, pageSize: number, pageNumber: number) {
    return this.http.get(
      `${BACKEND_URL}/users/${username}/repos?per_page=${pageSize}&page=${pageNumber}`
    );
  }
}
