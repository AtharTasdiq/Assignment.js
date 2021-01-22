//First Function For Kilometer To Meter Conversion

function kilometerToMeter(value){
    if(value<0){
      return "Undefined";
    }
    else{
      return value * 1000;
    }
  }




//Second Function For Budget Calculator
  
function budgetCalculator(clocks,phones,laptops){
    var total = 0;
    if(clocks,phones,laptops < 0){
      return "undefined";
    }
    else{
      total = total + clocks*50 + phones*100 + laptops*500;
      return total;
    }
  }
  
  


//Third Function For Hotel Cost

function hotelCost(days){
    
    var totalCost = 0;
    if(days < 0){
      return "undefined";
    }
    if(days <=10){
      totalCost = days * 100;
      return totalCost;
    }
    if(days > 10 && days <= 20){
      totalCost = 10*100 + (days-10) * 80;
      return totalCost;
    }
    if(days > 10 && days > 20){
      totalCost = 10*100 + 10*80 + (days-20)* 50;
      return totalCost;
    }
    
  }
  

  
//Forth Function For Biggest Name Finder

function megaFriend(names)
    {
      var max_name = names[0].length;
      var ans = names[0];
      for (var i = 1; i < names.length; i++) {
          var maxi = names[i].length;
          if (maxi > max_name) {
              ans = names[i];
              max_name = maxi;
          }
      }
      return ans;
  }
  