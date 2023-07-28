import { Component, ViewChild } from "@angular/core";
import { CropperComponent } from '../../projects/angular-cropperjs/src/lib/cropper/cropper.component';

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    @ViewChild(CropperComponent, { static: true })
    public cropperElement: CropperComponent;

    reset() {
        this.cropperElement.cropper.reset();
    }

    goDown() {
        this.cropperElement.cropper.move(0, 10);
    }

    goUp() {
        this.cropperElement.cropper.move(0, -10);
    }

    goRight() {
        this.cropperElement.cropper.move(10, 0);
    }

    goLeft() {
        this.cropperElement.cropper.move(-10, 0);
    }

    zoomOut() {
        this.cropperElement.cropper.zoom(-0.1);
    }

    zoomIn() {
        this.cropperElement.cropper.zoom(0.1);
    }
}
