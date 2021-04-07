import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  bookForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private crudService: CrudService,
    private router: Router,
    private zone: NgZone
    ) {
    this.bookForm = fb.group({
      name: [''],
      price: [''],
      description: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(values) {
    this.crudService.addBook(values).subscribe(res => {
      console.log('Add Book Success')
      this.router.navigateByUrl('/books-list')
    } ,err => console.log(err))
  }

}
