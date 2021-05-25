import { Component,OnInit} from '@angular/core';
import * as data from "./basic2.json";
import { Router } from "@angular/router";

declare var countdown:any;
declare var jQuery:any;
@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})

export class NumberComponent implements OnInit {
 

  
  constructor(private router:Router) { }

  ngOnInit(): void {
    

    function cout( elementName:any, minutes:any, seconds:any )
    {
        var element:any;
        var endTime:any;
        var hours, mins, msLeft, time;
    
        function twoDigits( n:any )
        {
            return (n <= 9 ? "0" + n : n);
        }
    
        function updateTimer()
        {
            msLeft = endTime - (+new Date);
            if ( msLeft < 1000 ) {
                element.innerHTML = "Time is up!";
                jQuery('input[name=gender]').attr("disabled",true);
    
            } else {
                time = new Date( msLeft );
                hours = time.getUTCHours();
                mins = time.getUTCMinutes();
                element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
                setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
            }
        }
    
        element = document.getElementById( elementName );
        endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
        updateTimer();
    }cout("ten-countdown", 5, 0);
    
    
    
      } 
      arra:any[]=[];
      answer:string[]=[];
      logical:any[]=(data as any).default;
      fin:boolean[]=[];
      c:number=0;
      rev:string[]=[];
      id:number[]=[];
      expla:string[]=[];
      index:number[]=[];
        templateForm(value:any,Ans:any,ide:any,explana:any,inde:number){
          this.arra=[];
          this.answer=[]
          this.expla=[];
          let b=JSON.stringify(value);
          console.log(b);
          let s=b.slice(11,-2);
          this.answer.push(Ans);
          this.arra.push(s);
          this.id.push(ide);
          this.expla.push(explana);
          console.log(this.expla);
          this.index.push(inde);
          if(s==Ans){
            let p=0;
            for(let k=0;k<this.index.length;k++)
          {
            if(this.index[k]==inde){
              p=p+1;
            }
          }if(p==1){
            this.fin.push(true);}
          }
          else{
            this.fin.push(false);
          } 
          console.log(this.fin);
          console.log(this.index);
          }
          
          g():any{
            this.c=0;
            for(let i=0;i<this.fin.length;i++){
              if(this.fin[i]==true){
                this.c=this.c+1;    
              }
            }
          }
          p:number=0;
          v:number=0;
          review():any{ 
           
            for(let i=1;i<=this.logical.length;i++)
            {
              for(let j=0;j<this.id.length;j++){
                if(i==this.id[j]){
                this.rev.push("Answered");
                this.v=0;
                break;
              }
              else{
                this.v=1;
              }
              }
              if(this.v==1){
                this.rev.push("Not Answered");
              }
            }
            console.log(this.rev);
          }
          btnc(){
            this.router.navigateByUrl('/Basic');
          }
         
     

}
