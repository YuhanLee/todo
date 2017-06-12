
import {Component} from "@angular/core";
import {Model, TodoItem} from "./model";


@Component
({
  selector: "todo-app",
  templateUrl: "app.component.html"
})

  export class AppComponent
  {
    model = new Model();
    getName()
    {
      return this.model.user;
    }

    getTodoItems()
    {
      return this.model.items.filter(item => !item.done);
      /**Lambda function, arrow function. A concise way of expressing a standard
      js language specification.*/
    }

    addItem(newItem)
    {
      if (newItem != "")
      {
        this.model.items.push(new TodoItem(newItem, false));
      }
    }

  }


  /**L2: loads which contains the key Angular functionality, including support for components.
  This module contains many classes that have been packaged together so that the browser can load them all
  in a single js file*/

  /**L3: load the Model class from a file in the project. The target for this kind of import
  starts with ./, which indicates that the module is defined relative to the current file. */

  /**L14: This is a decorator, which provides metadata about a class. It tells angular that this is a component.
  It provides config info through its properties, which in this case includes properties called selector and templateUrl*/

  /**L16: The selector property specifies a CSS selector that matches the HTML element
  to which the component will be applied to --> here applies to the todo-app element*/

  /**L17: When the angular app starts, angular scans the HTML in the current doc and looks for elements that
  correspond to components. It will find the todo-app element and know that it should be placed under the control of
  the component.
  The templateUrl is to specify the component's template, which is the app.component.html file for this component.*/

  /**L32: Defines a class that Angular can instantiate to create the component
  These statements define a class called AppComponent that has a model property and
  a getName function, which provides the functionality required to support the data binding
  in the template from before

  When a new instance of the AppComponent class is created, the model property will be set to a new instance of the Model
  class defined at model.ts. The getName function returns the value  of the user property defined by the Model Object
  */
