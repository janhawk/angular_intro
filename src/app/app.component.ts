import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  onPhraseClicked() {
    alert("Hey!");
  }

  onKeyUp(newName:string) {
    this.name = newName;
  }

}
