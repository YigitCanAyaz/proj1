import { Component, ViewChild } from '@angular/core';
import { CustomPipe } from './pipes/custom.pipe';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // template: `<p>merhaba</p>
  // <hr>
  // <div style="background-color: aqua;">
  // <app-home></app-home></div>
  // `,
  template: `
  <!-- property binding -->
  <!-- <input type="text" [value]="title"/>
  <app-home [pageName]="title"></app-home> -->

  <!-- two Way Data Binding -->
  <!-- <input type="text" [(ngModel)]="name" (ngModelChange)="onChange($event)"/><br/>
  <input type="text" [(ngModel)]="name"/><br/>
  {{name}} -->


  <!-- Interpolation Syntax -->
  <!-- {{title}}
  <p>{{person!.name}}</p> -->

  <!-- Directives -->
  <!-- <ul>
    <li *ngFor="let name of names;
                let index = index;
                let first = first">
                {{name}} - {{index}} - {{first}}
    </li>
  </ul> -->
  <!-- Directive ngIf -->
  <!-- <div *ngIf="visible; else elseContent">İçerik 1</div> -->
  <!-- <ng-template #elseContent>İçerik 2</ng-template> -->
  <!-- <div appExample color="blue">
    Merhaba
  </div> -->


  <!--Custom structural if directive -->
  <!-- <div *appCustomif="true">
    Merhaba
</div> -->

<!-- <ul>
  <li *appCustomfor="5; let i = index">Yiğit {{i}}</li>
</ul> -->
<!-- {{name | slice: 1:3}}
<br/>
{{"Bu pipe denemesidir..." | custom: 3:7}} -->

<!-- <ul>
  <li *appCustomfor="names; let name; let index = index">{{name}} - {{index}}</li>
</ul> -->

<!-- <app-example data="merhaba">Test</app-example> -->

<!-- Template Driven Forms -->

<!-- <form #frm="ngForm" (ngSubmit)="onSubmit(frm.value)">
  <input type="text" name="name" placeholder="Name" ngModel> <br>
  <input type="text" name="surname" placeholder="Surname" ngModel> <br>
  <input type="email" name="email" placeholder="Email" ngModel> <br>
  <input type="tel" name="tel" placeholder="Tel"> <br>

  <div ngModelGroup="address">
    <input type="text" name="country" placeholder="Country" ngModel> <br>
    <input type="text" name="city" placeholder="City" ngModel> <br>
    <input type="text" name="address" placeholder="Address" ngModel>
  </div>
  <button>Send</button>
</form> -->

<!-- Model Driven Forms -->
<form [formGroup]="frm" (ngSubmit)="onSubmit()">
  <input type="text" placeholder="Name" formControlName="name"><br>
  <input type="text" placeholder="Surname" formControlName="surname"><br>
  <input type="email" placeholder="Email" formControlName="email"><br>
  <input type="tel" placeholder="Tel" formControlName="tel"><br>
  <div formGroupName="address">
    <input type="text" placeholder="Country" formControlName="country"><br>
    <input type="text" placeholder="City" formControlName="city"><br>
    <input type="text" placeholder="Address" formControlName="address"><br>
  </div>
  <button>Send</button>
</form>
<button (click)="ok()">Ok</button>
Valid : {{frm.valid}}
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // constructor(private custom: CustomPipe){
  //   console.log(custom.transform("sddsksddksds", 3, 6));
  // }
  // names: string[] = ["Ahmet", "Yiğit", "Can", "Deniz", "Hilmi", "Hüseyin"]

  // pipe
  // name = 'ahmet';

  // title = 'proj2';
  // name: string;

  // Interpolation Syntax 
  // title: string = "proj3";
  // person : {name : string, surname: string};

  // Directive Syntax
  // names: string[] = ["Yiğit", "Can", "Ayaz", "Muhammed", "Rıfkı", "Hilmi"]

  // ngIf
  // visible: boolean = false;

  /*
  1-Directive Oluşturma
  ng generate directive ... ya da 'ng g d ...'
  bir directive oluşturulduğu zaman ana modüle declare edilmelidir.
  2-selector'ı attribute olarak kullanma [appExample]
  3-selector'ı class olarak kullanma .appExample
  4-directive'e parametre tanımlama (input field)
  5-hostlistener
  6-hostbinding
  */



  // onChange($event) {
  //   console.log("input değişti!!!");
  // }

  // Component Life Cycle Hook

  // Template Driven Forms

  // @ViewChild("frm", {static:true}) frm:NgForm;

  // onSubmit(data){
    // console.log('Value ' + this.frm.value);
    // console.log('Valid ' + this.frm.valid);
    // console.log('Touched ' + this.frm.touched);
    // console.log('Submitted ' + this.frm.submitted);
    
    // console.log(data);

  //   console.log(this.frm);
  //   console.log(this.frm.controls);
  //   console.log(this.frm.form);
  // }

  // Model Driven

  frm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.frm = formBuilder.group({
      name: ["", Validators.required],
      surname: [""],
      email: [""],
      tel: [""],
      address: formBuilder.group({
        country: [""],
        city: [""],
        address: [""]
      })
    });

    // formda herhangi bir şey değişirse çalışır.
    this.frm.valueChanges.subscribe({
      next: data => {
        console.log(data);
      }
    });

    // name değişirse çalışır.
    this.frm.get("name").valueChanges.subscribe({
      next: data => {
        console.log(data);
      }
    });
  }

  onSubmit(){
    console.log(this.frm.value);
  }

  ok() {
    // this.frm.controls["name"] böyle de erişilebilir.
    this.frm.get("name").setValue("Gençay", {onlySelf: true});
  }
}
