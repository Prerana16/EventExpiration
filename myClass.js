class MyClass {
    constructor(){
        console.log("initiate");

    }

   eventTimer(eventendtime,cdate){
  
        if(!cdate){
          const currdate = Date.parse(eventendtime);
          const futuredate = Date.parse(new Date());
          if (currdate < futuredate){
            return console.log('Event has ended');
          }
      
          const total = currdate - futuredate;
          const minutes = Math.floor( (total/1000/60) % 60 );
          const hours = Math.floor( (total/(1000*60*60)) % 24 );
          const days = Math.floor( total/(1000*60*60*24) );
      
          if (days === 0 && hours === 0){
             return console.log(`Event ends in ${minutes} mins`);}
          else if (days === 0){
             return console.log(`Event ends in ${hours} hours, ${minutes} mins`);
            }
          else if (minutes === 1){
             return console.log(`Event ends in ${minutes} mins`);
            }
          else if (hours === 0 && minutes === 0){
             return console.log(`Event ends in ${days} days`);
            }
          else if (minutes === 0){
              return console.log(`Event ends in ${days} days, ${hours} hours`);
            }
          else{
             return console.log(`Event ends in ${days} days, ${hours} hours, ${minutes} mins`);
            }
          
        }
      
       else {
          const eventdate = Date.parse(eventendtime);
          const targetdate = Date.parse(cdate);
          if (targetdate < eventdate){
            return console.log('Event has ended');
          }
          const total =  targetdate - eventdate;
          const minutes = Math.floor( (total/1000/60) % 60 );
          const hours = Math.floor( (total/(1000*60*60)) % 24 );
          const days = Math.floor( total/(1000*60*60*24) );
      
          if (days === 0 && hours === 0){
             return console.log(`Event ends in ${minutes} mins`);}
          else if (days === 0){
             return console.log(`Event ends in ${hours} hours, ${minutes} mins`);
            }
          else if (minutes === 1){
             return console.log(`Event ends in ${minutes} mins`);
            }
          else if (hours === 0 && minutes === 0){
             return console.log(`Event ends in ${days} days`);
            }
          else if (minutes === 0){
             return console.log(`Event ends in ${days} days, ${hours} hours`);
            }
          else{
             return console.log(`Event ends in ${days} days, ${hours} hours, ${minutes} mins`);
            }
        }
         
    }
      
       






    
      
}

module.exports = MyClass;