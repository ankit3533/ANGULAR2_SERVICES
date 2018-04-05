import { Injectable } from "@angular/core";
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from "rxjs/Observable";

@Injectable()
export class EmployeeService{
  private url:string="apiData/datsadcdsa.json"; // make this path correct. I intentionally made it wrong to show how catch and throw works
  constructor(private _http:Http){}
    getEmployeeList(){
       return  this._http.get(this.url).map((response:Response) => response.json()).catch(this._errorHandler);
    }
    _errorHandler(error:Response){
      console.error(error);
      return Observable.throw(error||"Server error");
    }
}