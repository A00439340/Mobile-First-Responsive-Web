import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'UniversityApplication';

    name!: string;
    searchName!: string;
    uniAddress!: string;
    uniPhone!: string;
    msg: any;
    errormsg: any;
    uniData: any;
    
    constructor(private http: HttpClient) {
        this.name = '';
        this.searchName = '';
        this.uniAddress = '';
        this.uniPhone = '';
        this.msg = '';
        this.errormsg = '';
        this.uniData = [];
    }
    ngOnInit() {
    }
    saveUni() {
        this.uniData = {
            "Name": this.name,
            "uniAddress": this.uniAddress,
            "uniPhone": this.uniPhone
        }
 
        if (this.name == '') {
            alert("Enter the valid university name");
            return false;
        }
        if (this.uniAddress == '') {
            alert("Enter the address of university");
            return false;
        }
        if (this.uniPhone == '') {
            alert("Enter the phone number of university");
            return false;
        }
 
        this.http.post<any>('http://dev.cs.smu.ca:8148/addressUniversity',
            this.uniData).subscribe({
                next: uniData => {
                    this.msg = uniData.msg;
 
                },
                error: error => {
                    this.errormsg = error.msg;
 
                }
            })
        return true;
    }
    removeUni() {
        const data = {
            'Name': this.name,
        }
        this.http.post<any>('http://dev.cs.smu.ca:8148/deleteUniversity',
            data).subscribe(
                (dataResponse) => {
                    if (dataResponse.n == 0) {
                        alert('University information is not found')
                    } else {
                        alert('University has been deleted')
                    }
                },
                (err) => console.log(err)
            );
    }
    searchUni() {
        const data = {
            'Name': this.searchName,
        }
        this.http.post<any>('http://dev.cs.smu.ca:8148/searchUniversity',
            data).subscribe(
                (dataResponse) => {
                    if (dataResponse.n == 0) {
                        alert('University information is not found')
                    } else {
                        console.log(dataResponse)
                    }
                },
                (err) => console.log(err)
            );
    }
    searchAllUni() {
        const data = {}
        this.http.post<any>('http://dev.cs.smu.ca:8148/searchAllUniversity',
            data).subscribe(
                (dataResponse) => {
                    if (dataResponse.n == 0) {
                        alert('University information is not found')
                    }
                },
                (err) => console.log(err)
            );
    }
}
