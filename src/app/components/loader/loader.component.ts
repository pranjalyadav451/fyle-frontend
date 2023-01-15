import { Component, Input } from "@angular/core";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.css"],
})
export class LoaderComponent {
  @Input() numRows: number = 5;
  @Input() isAvatar: boolean = true;
}
