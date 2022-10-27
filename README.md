# Notas Laravel  


Install from nodejs the dependencies:

```
npm install -g @angular/cli
```

```
ng version
```

## Create new Angular Proyect
```
ng new 
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

# Creade component with commad:
This is a acronym of NG Generate Component, the path inside of directory "app" 
```
ng g c [ubicacion y nombre o nombre]
```
Example:
```
ng g c hola-mundo 
```
It's command create 4 file and modify the file 'src/app/app.modules.ts'
```
CREATE src/app/hola-mundo/hola-mundo.component.html (25 bytes)
CREATE src/app/hola-mundo/hola-mundo.component.spec.ts (621 bytes)
CREATE src/app/hola-mundo/hola-mundo.component.ts (290 bytes)     
CREATE src/app/hola-mundo/hola-mundo.component.css (0 bytes)      
UPDATE src/app/app.module.ts (570 bytes)
```

# Creade class or models with commad:
This is a acronym of NG Generate CLass, the path inside of directory "app" 
```
ng g cl [ubicacion y nombre o nombre]
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

