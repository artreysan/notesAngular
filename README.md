# Notas Laravel  


Install from nodejs the dependencies:

```
npm install -g @angular/cli
```

```
ng version
```

inside in angular proyect include of dependencies:

```
npm install bootstrap jquery popper.js
```

## Run Proyect
Run proyect inside on Angula Proyect
```
ng serve
```

# Creade class with commad:
This is a acronym of NG Generate CLass, the path inside of directory "app" 
```
ng g cl [ubicacion]
```
Example:
```
ng g cl model/employee
```

## Use angular directive [()]="" on HTML 
Inside in 'angular-simple-crud\src\app\app.module.ts'
Add the following code: 
```
import { FormsModule } from '@angular/forms';
```
And in Imports:
```
...
imports: [
    ...
    FormsModule,
    ...
  ],
...
```

