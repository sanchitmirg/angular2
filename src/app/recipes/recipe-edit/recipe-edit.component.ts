import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  isEdit: boolean = false;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params
    .subscribe((params: Params) => {
      this.id = params['id'];
      this.isEdit = params['id'] != null;
    })
  }

}
