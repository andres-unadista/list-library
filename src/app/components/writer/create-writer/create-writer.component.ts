import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { Writer } from 'src/app/models/writer.model';

import { WriterService } from 'src/app/services/writer.service';

@Component({
  selector: 'app-create-writer',
  templateUrl: './create-writer.component.html',
  styleUrls: ['./create-writer.component.css'],
})
export class CreateWriterComponent implements OnInit {
  formWriter: FormGroup;

  constructor(
    private reactiveForm: FormBuilder,
    private _writer: WriterService,
    private toastr: ToastrService,
    private router: Router
  ) {
    const regexUrlImage =
      /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/;
    this.formWriter = this.reactiveForm.group({
      name: ['', [Validators.required]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      image: ['', [Validators.required, Validators.pattern(regexUrlImage)]],
      country: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  getErrorsControl(control: string) {
    if (
      this.formWriter.controls[control].errors &&
      this.formWriter.controls[control].touched
    ) {
      return this.formWriter.controls[control].errors;
    }
    return null;
  }

  async onSubmit() {
    const writer: Writer = {
      nombre: this.formWriter.controls['name'].value,
      apellidos: this.formWriter.controls['last_name'].value,
      imagen: this.formWriter.controls['image'].value,
      pais: this.formWriter.controls['country'].value,
    };
    const message = await this._writer.createWriter(writer);
    this.toastr.success(message, 'Completado');
    this.router.navigate(['/escritor']);
  }
}
