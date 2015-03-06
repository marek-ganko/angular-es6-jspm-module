System.config({
  "transpiler": "babel",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "github:angular/bower-angular@1.3.14": "shim/angular.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.3.14",
    "css": "github:systemjs/plugin-css@0.1.6",
    "jade": "github:johnsoftek/plugin-jade@0.4.0"
  }
});

