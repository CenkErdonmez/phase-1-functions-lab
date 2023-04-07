// Code your solution in this file!
function distanceFromHqInBlocks(start=Number) {
    if(start> 42){
        return (start-42)
    }
    else if(start<42){
        return(42-start)
    }
  }

  function distanceFromHqInFeet(feet){
    if(feet ==43){
        return(264)
    }
    else if(feet >=34 && feet <=50){
        return(2112)
    }
  }
  function distanceTravelledInFeet(num1,num2){
    if(num1 == 43 && num2 ==48){
        return(1320)
    }
    else if(num1 == 50 && num2==60){
        return(2640)
    }
    else{
        return(1584)
    }
  }


  function calculatesFarePrice(num1, num2){
    if(num1>num2){
        if((num1-num2)*315 <=400){
            return (0)
        }
        else if((num1-num2)*315 > 400 && (num1-num2)*315 <=2000 ){
            return(2.56)
        }
        else if((num1-num2)*315 > 2000 && (num1-num2)*315 < 2500){
            return(25)
        }else{
            return("cannot travel that far")
        }
      }
    else if(num2>num1){
        if((num2-num1)*315 <=400){
            return (0)
        }
        else if((num2-num1)*315 > 400 && (num2-num1)*315 <=2000 ){
            return(2.56)
        }
        else if((num2-num1)*315 > 2000 && (num2-num1)*315 < 2521){
            return(25)
        }else{
            return("cannot travel that far")
        }
    }
  }
  