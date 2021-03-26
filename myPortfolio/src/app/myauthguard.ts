import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class MyAuthGuard implements CanActivate{
    constructor(public router: Router){}
    canActivate(){
        let token = sessionStorage.getItem("token");
        if(token != null){
            console.log(123)
            return true;
            
        }
        else{
            alert("Please sign in to access Portfolio");
            this.router.navigate(["login"]);
            return false;
        }

    }

}