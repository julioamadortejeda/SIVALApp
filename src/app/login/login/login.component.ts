import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatProgressButtonOptions } from 'mat-progress-buttons';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public error: string;
    edLoginForm = new FormGroup({
        usuario: new FormControl(),
        password: new FormControl(),
    });

    btnOpts: MatProgressButtonOptions = {
        active: false,
        text: 'Iniciar',
        spinnerSize: 19,
        raised: false,
        stroked: true,
        buttonColor: 'primary',
        spinnerColor: 'primary',
        fullWidth: true,
        disabled: false,
        mode: 'indeterminate',
    };

    constructor(private auth: AuthService, private router: Router, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.edLoginForm = this.formBuilder.group({
            usuario: ['', [Validators.required, Validators.minLength(6)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    obtenerErrorUsuario(input: string) {
        return this.edLoginForm.get(input).hasError('required')
            ? 'El campo es requerido.' : `El campo ${input} debe ser almenos de 6 caracteres.`;
    }

    get f() { return this.edLoginForm.controls; }

    login() {
        this.btnOpts.active = true;
        if (this.edLoginForm.invalid) {
            this.btnOpts.active = false;
            return;
        }

        const username = this.edLoginForm.get('usuario').value;
        const password = this.edLoginForm.get('password').value;

        this.auth.login(username, password).subscribe(data => {
            // console.log(data);
            this.btnOpts.active = false;
            if (data) {
                this.router.navigate(['/']);
            } else {
                this.error = 'Error inesperado, favor de contactar al administrador';
            }
        },
            error => {
                console.log(error);
                this.error = error.error;
                this.btnOpts.active = false;
            });
    }

}

